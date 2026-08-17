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
if(a[b]!==s){A.EZ(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.n(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.wb(b)
return new s(c,this)}:function(){if(s===null)s=A.wb(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.wb(a).prototype
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
wk(a,b,c,d){return{i:a,p:b,e:c,x:d}},
uV(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.wi==null){A.ED()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.xy("Return interceptor for "+A.p(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.tv
if(o==null)o=$.tv=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.EK(a)
if(p!=null)return p
if(typeof a=="function")return B.bf
s=Object.getPrototypeOf(a)
if(s==null)return B.aC
if(s===Object.prototype)return B.aC
if(typeof q=="function"){o=$.tv
if(o==null)o=$.tv=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.ag,enumerable:false,writable:true,configurable:true})
return B.ag}return B.ag},
vq(a,b){if(a<0||a>4294967295)throw A.b(A.af(a,0,4294967295,"length",null))
return J.x7(new Array(a),b)},
vr(a,b){if(a<0)throw A.b(A.P("Length must be a non-negative integer: "+a,null))
return A.n(new Array(a),b.i("z<0>"))},
vp(a,b){if(a<0)throw A.b(A.P("Length must be a non-negative integer: "+a,null))
return A.n(new Array(a),b.i("z<0>"))},
x7(a,b){var s=A.n(a,b.i("z<0>"))
s.$flags=1
return s},
AT(a,b){return J.wC(a,b)},
x8(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
AW(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.x8(r))break;++b}return b},
x9(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.x8(r))break}return b},
d9(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.fK.prototype
return J.j5.prototype}if(typeof a=="string")return J.cH.prototype
if(a==null)return J.fL.prototype
if(typeof a=="boolean")return J.j4.prototype
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
if(typeof a=="symbol")return J.ef.prototype
if(typeof a=="bigint")return J.b3.prototype
return a}if(a instanceof A.j)return a
return J.uV(a)},
I(a){if(typeof a=="string")return J.cH.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
if(typeof a=="symbol")return J.ef.prototype
if(typeof a=="bigint")return J.b3.prototype
return a}if(a instanceof A.j)return a
return J.uV(a)},
at(a){if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
if(typeof a=="symbol")return J.ef.prototype
if(typeof a=="bigint")return J.b3.prototype
return a}if(a instanceof A.j)return a
return J.uV(a)},
Ev(a){if(typeof a=="number")return J.ds.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.cV.prototype
return a},
Ew(a){if(typeof a=="number")return J.ds.prototype
if(typeof a=="string")return J.cH.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.cV.prototype
return a},
uU(a){if(typeof a=="string")return J.cH.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.cV.prototype
return a},
ls(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
if(typeof a=="symbol")return J.ef.prototype
if(typeof a=="bigint")return J.b3.prototype
return a}if(a instanceof A.j)return a
return J.uV(a)},
y(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.d9(a).V(a,b)},
ae(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.z8(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.I(a).h(a,b)},
bA(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.z8(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.at(a).j(a,b,c)},
dd(a,b){return J.at(a).t(a,b)},
wA(a,b){return J.at(a).G(a,b)},
wB(a,b){return J.uU(a).h1(a,b)},
A4(a,b){return J.at(a).dE(a,b)},
vd(a){return J.ls(a).lj(a)},
A5(a,b,c){return J.ls(a).h3(a,b,c)},
A6(a){return J.ls(a).lk(a)},
de(a,b,c){return J.ls(a).h4(a,b,c)},
e5(a,b){return J.at(a).h6(a,b)},
A7(a,b,c){return J.Ev(a).iW(a,b,c)},
wC(a,b){return J.Ew(a).S(a,b)},
A8(a,b){return J.I(a).D(a,b)},
lA(a,b){return J.at(a).a3(a,b)},
A9(a,b){return J.at(a).ew(a,b)},
wD(a){return J.ls(a).gaz(a)},
bB(a){return J.at(a).gC(a)},
aL(a){return J.d9(a).gJ(a)},
cf(a){return J.I(a).gB(a)},
fk(a){return J.I(a).gW(a)},
M(a){return J.at(a).gv(a)},
ve(a){return J.at(a).ga_(a)},
ar(a){return J.I(a).gk(a)},
bC(a){return J.d9(a).gab(a)},
lB(a){return J.at(a).gaU(a)},
Aa(a,b,c){return J.at(a).f2(a,b,c)},
aB(a,b,c){return J.at(a).cr(a,b,c)},
Ab(a,b,c){return J.uU(a).dR(a,b,c)},
Ac(a,b){return J.I(a).sk(a,b)},
Ad(a,b,c,d,e){return J.at(a).a6(a,b,c,d,e)},
lC(a,b){return J.at(a).aV(a,b)},
wE(a,b){return J.at(a).df(a,b)},
Ae(a,b){return J.uU(a).f6(a,b)},
Af(a,b){return J.uU(a).L(a,b)},
vf(a,b){return J.at(a).cv(a,b)},
Ag(a){return J.at(a).d8(a)},
am(a){return J.d9(a).l(a)},
wF(a,b){return J.at(a).jy(a,b)},
j2:function j2(){},
j4:function j4(){},
fL:function fL(){},
ao:function ao(){},
cJ:function cJ(){},
jA:function jA(){},
cV:function cV(){},
bl:function bl(){},
b3:function b3(){},
ef:function ef(){},
z:function z(a){this.$ti=a},
j3:function j3(){},
o6:function o6(a){this.$ti=a},
e6:function e6(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ds:function ds(){},
fK:function fK(){},
j5:function j5(){},
cH:function cH(){}},A={vu:function vu(){},
iv(a,b,c){if(t.O.b(a))return new A.hv(a,b.i("@<0>").U(c).i("hv<1,2>"))
return new A.dg(a,b.i("@<0>").U(c).i("dg<1,2>"))},
xb(a){return new A.cI("Field '"+a+"' has been assigned during initialization.")},
xc(a){return new A.cI("Field '"+a+"' has not been initialized.")},
AX(a){return new A.cI("Field '"+a+"' has already been initialized.")},
uW(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
cs(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
qs(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
bg(a,b,c){return a},
wj(a){var s,r
for(s=$.e3.length,r=0;r<s;++r)if(a===$.e3[r])return!0
return!1},
bX(a,b,c,d){A.aQ(b,"start")
if(c!=null){A.aQ(c,"end")
if(b>c)A.w(A.af(b,0,c,"start",null))}return new A.dG(a,b,c,d.i("dG<0>"))},
dw(a,b,c,d){if(t.O.b(a))return new A.dn(a,b,c.i("@<0>").U(d).i("dn<1,2>"))
return new A.cl(a,b,c.i("@<0>").U(d).i("cl<1,2>"))},
xu(a,b,c){var s="takeCount"
A.ie(b,s)
A.aQ(b,s)
if(t.O.b(a))return new A.fw(a,b,c.i("fw<0>"))
return new A.dH(a,b,c.i("dH<0>"))},
xr(a,b,c){var s="count"
if(t.O.b(a)){A.ie(b,s)
A.aQ(b,s)
return new A.e9(a,b,c.i("e9<0>"))}A.ie(b,s)
A.aQ(b,s)
return new A.cp(a,b,c.i("cp<0>"))},
ak(){return new A.bs("No element")},
fI(){return new A.bs("Too many elements")},
x6(){return new A.bs("Too few elements")},
jW(a,b,c,d){if(c-b<=32)A.By(a,b,c,d)
else A.Bx(a,b,c,d)},
By(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.I(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
Bx(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.b.N(a5-a4+1,6),h=a4+i,g=a5-i,f=B.b.N(a4+a5,2),e=f-i,d=f+i,c=J.I(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
p=J.y(a6.$2(a,a1),0)
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
A.jW(a3,a4,r-2,a6)
A.jW(a3,q+2,a5,a6)
if(p)return
if(r<h&&q>g){while(J.y(a6.$2(c.h(a3,r),a),0))++r
while(J.y(a6.$2(c.h(a3,q),a1),0))--q
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
break}}A.jW(a3,r,q,a6)}else A.jW(a3,r,q,a6)},
rO:function rO(a){this.a=0
this.b=a},
ru:function ru(a){this.a=0
this.b=a},
cX:function cX(){},
iw:function iw(a,b){this.a=a
this.$ti=b},
dg:function dg(a,b){this.a=a
this.$ti=b},
hv:function hv(a,b){this.a=a
this.$ti=b},
hs:function hs(){},
rv:function rv(a,b){this.a=a
this.b=b},
bi:function bi(a,b){this.a=a
this.$ti=b},
cI:function cI(a){this.a=a},
jI:function jI(a){this.a=a},
bP:function bP(a){this.a=a},
v2:function v2(){},
pS:function pS(){},
B:function B(){},
S:function S(){},
dG:function dG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a5:function a5(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cl:function cl(a,b,c){this.a=a
this.b=b
this.$ti=c},
dn:function dn(a,b,c){this.a=a
this.b=b
this.$ti=c},
ji:function ji(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ab:function ab(a,b,c){this.a=a
this.b=b
this.$ti=c},
c_:function c_(a,b,c){this.a=a
this.b=b
this.$ti=c},
eK:function eK(a,b){this.a=a
this.b=b},
fy:function fy(a,b,c){this.a=a
this.b=b
this.$ti=c},
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dH:function dH(a,b,c){this.a=a
this.b=b
this.$ti=c},
fw:function fw(a,b,c){this.a=a
this.b=b
this.$ti=c},
k9:function k9(a,b,c){this.a=a
this.b=b
this.$ti=c},
cp:function cp(a,b,c){this.a=a
this.b=b
this.$ti=c},
e9:function e9(a,b,c){this.a=a
this.b=b
this.$ti=c},
jV:function jV(a,b){this.a=a
this.b=b},
dp:function dp(a){this.$ti=a},
iN:function iN(){},
bt:function bt(a,b){this.a=a
this.$ti=b},
ko:function ko(a,b){this.a=a
this.$ti=b},
fB:function fB(){},
kf:function kf(){},
eE:function eE(){},
dD:function dD(a,b){this.a=a
this.$ti=b},
k7:function k7(a){this.a=a},
i3:function i3(){},
Aw(){throw A.b(A.a0("Cannot modify constant Set"))},
zo(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
z8(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
p(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.am(a)
return s},
h5(a){var s,r=$.xi
if(r==null)r=$.xi=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
en(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
Bo(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.cz(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
jE(a){var s,r,q,p
if(a instanceof A.j)return A.bf(A.bh(a),null)
s=J.d9(a)
if(s===B.be||s===B.bg||t.cx.b(a)){r=B.an(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bf(A.bh(a),null)},
xk(a){var s,r,q
if(a==null||typeof a=="number"||A.bN(a))return J.am(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.di)return a.l(0)
if(a instanceof A.eZ)return a.l6(!0)
s=$.zZ()
for(r=0;r<1;++r){q=s[r].vj(a)
if(q!=null)return q}return"Instance of '"+A.jE(a)+"'"},
Bk(){return Date.now()},
Bn(){var s,r
if($.py!==0)return
$.py=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.py=1e6
$.vG=new A.px(r)},
Bj(){if(!!self.location)return self.location.href
return null},
xh(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Bp(a){var s,r,q,p=A.n([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.L)(a),++r){q=a[r]
if(!A.az(q))throw A.b(A.dY(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.b.a2(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.dY(q))}return A.xh(p)},
xl(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.az(q))throw A.b(A.dY(q))
if(q<0)throw A.b(A.dY(q))
if(q>65535)return A.Bp(a)}return A.xh(a)},
Bq(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
b6(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.b.a2(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.af(a,0,1114111,null,null))},
Br(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.b.ar(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.b.N(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
b5(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
vF(a){return a.c?A.b5(a).getUTCFullYear()+0:A.b5(a).getFullYear()+0},
vD(a){return a.c?A.b5(a).getUTCMonth()+1:A.b5(a).getMonth()+1},
pw(a){return a.c?A.b5(a).getUTCDate()+0:A.b5(a).getDate()+0},
vB(a){return a.c?A.b5(a).getUTCHours()+0:A.b5(a).getHours()+0},
vC(a){return a.c?A.b5(a).getUTCMinutes()+0:A.b5(a).getMinutes()+0},
vE(a){return a.c?A.b5(a).getUTCSeconds()+0:A.b5(a).getSeconds()+0},
xj(a){return a.c?A.b5(a).getUTCMilliseconds()+0:A.b5(a).getMilliseconds()+0},
Bm(a){return B.b.ar((a.c?A.b5(a).getUTCDay()+0:A.b5(a).getDay()+0)+6,7)+1},
Bl(a){var s=a.$thrownJsError
if(s==null)return null
return A.ad(s)},
jF(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aA(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
uM(a,b){var s,r="index"
if(!A.az(b))return new A.bD(!0,b,r,null)
s=J.ar(a)
if(b<0||b>=s)return A.j_(b,s,a,null,r)
return A.pO(b,r)},
En(a,b,c){if(a<0||a>c)return A.af(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.af(b,a,c,"end",null)
return new A.bD(!0,b,"end",null)},
dY(a){return new A.bD(!0,a,null,null)},
b(a){return A.aA(a,new Error())},
aA(a,b){var s
if(a==null)a=new A.cu()
b.dartException=a
s=A.F_
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
F_(){return J.am(this.dartException)},
w(a,b){throw A.aA(a,b==null?new Error():b)},
C(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.w(A.D5(a,b,c),s)},
D5(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.hj("'"+s+"': Cannot "+o+" "+l+k+n)},
L(a){throw A.b(A.av(a))},
cv(a){var s,r,q,p,o,n
a=A.zf(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.n([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.qv(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
qw(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
xx(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
vv(a,b){var s=b==null,r=s?null:b.method
return new A.j6(a,r,s?null:b.receiver)},
E(a){if(a==null)return new A.ju(a)
if(a instanceof A.fx)return A.db(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.db(a,a.dartException)
return A.DQ(a)},
db(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
DQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.a2(r,16)&8191)===10)switch(q){case 438:return A.db(a,A.vv(A.p(s)+" (Error "+q+")",null))
case 445:case 5007:A.p(s)
return A.db(a,new A.h1())}}if(a instanceof TypeError){p=$.zx()
o=$.zy()
n=$.zz()
m=$.zA()
l=$.zD()
k=$.zE()
j=$.zC()
$.zB()
i=$.zG()
h=$.zF()
g=p.bt(s)
if(g!=null)return A.db(a,A.vv(s,g))
else{g=o.bt(s)
if(g!=null){g.method="call"
return A.db(a,A.vv(s,g))}else if(n.bt(s)!=null||m.bt(s)!=null||l.bt(s)!=null||k.bt(s)!=null||j.bt(s)!=null||m.bt(s)!=null||i.bt(s)!=null||h.bt(s)!=null)return A.db(a,new A.h1())}return A.db(a,new A.ke(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.he()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.db(a,new A.bD(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.he()
return a},
ad(a){var s
if(a instanceof A.fx)return a.b
if(a==null)return new A.hP(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.hP(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
lu(a){if(a==null)return J.aL(a)
if(typeof a=="object")return A.h5(a)
return J.aL(a)},
Es(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
Et(a,b){var s,r=a.length
for(s=0;s<r;++s)b.t(0,a[s])
return b},
Dg(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.wW("Unsupported number of arguments for wrapped closure"))},
d8(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.Eh(a,b)
a.$identity=s
return s},
Eh(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Dg)},
Ar(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.q1().constructor.prototype):Object.create(new A.fo(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.wP(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.An(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.wP(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
An(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Aj)}throw A.b("Error in functionType of tearoff")},
Ao(a,b,c,d){var s=A.wN
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
wP(a,b,c,d){if(c)return A.Aq(a,b,d)
return A.Ao(b.length,d,a,b)},
Ap(a,b,c,d){var s=A.wN,r=A.Ak
switch(b?-1:a){case 0:throw A.b(new A.jQ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
Aq(a,b,c){var s,r
if($.wL==null)$.wL=A.wK("interceptor")
if($.wM==null)$.wM=A.wK("receiver")
s=b.length
r=A.Ap(s,c,a,b)
return r},
wb(a){return A.Ar(a)},
Aj(a,b){return A.hX(v.typeUniverse,A.bh(a.a),b)},
wN(a){return a.a},
Ak(a){return a.b},
wK(a){var s,r,q,p=new A.fo("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.P("Field name "+a+" not found.",null))},
Ex(a){return v.getIsolateTag(a)},
F2(a,b){var s=$.v
if(s===B.h)return a
return s.h5(a,b)},
zi(){return v.G},
G6(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
EK(a){var s,r,q,p,o,n=$.z6.$1(a),m=$.uN[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.v_[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.yU.$2(a,n)
if(q!=null){m=$.uN[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.v_[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.v1(s)
$.uN[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.v_[n]=s
return s}if(p==="-"){o=A.v1(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.zc(a,s)
if(p==="*")throw A.b(A.xy(n))
if(v.leafTags[n]===true){o=A.v1(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.zc(a,s)},
zc(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.wk(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
v1(a){return J.wk(a,!1,null,!!a.$ibm)},
EM(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.v1(s)
else return J.wk(s,c,null,null)},
ED(){if(!0===$.wi)return
$.wi=!0
A.EE()},
EE(){var s,r,q,p,o,n,m,l
$.uN=Object.create(null)
$.v_=Object.create(null)
A.EC()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ze.$1(o)
if(n!=null){m=A.EM(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
EC(){var s,r,q,p,o,n,m=B.aU()
m=A.fe(B.aV,A.fe(B.aW,A.fe(B.ao,A.fe(B.ao,A.fe(B.aX,A.fe(B.aY,A.fe(B.aZ(B.an),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.z6=new A.uX(p)
$.yU=new A.uY(o)
$.ze=new A.uZ(n)},
fe(a,b){return a(b)||b},
El(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
vt(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.X("Illegal RegExp pattern ("+String(o)+")",a,null))},
EU(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.ee){s=B.a.a7(a,c)
return b.b.test(s)}else return!J.wB(b,B.a.a7(a,c)).gB(0)},
z5(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
zf(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
H(a,b,c){var s
if(typeof b=="string")return A.EW(a,b,c)
if(b instanceof A.ee){s=b.gkE()
s.lastIndex=0
return a.replace(s,A.z5(c))}return A.EV(a,b,c)},
EV(a,b,c){var s,r,q,p
for(s=J.wB(b,a),s=s.gv(s),r=0,q="";s.m();){p=s.gn()
q=q+a.substring(r,p.gH())+c
r=p.gE()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
EW(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.zf(b),"g"),A.z5(c))},
yQ(a){return a},
zj(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.h1(0,a),s=new A.ks(s.a,s.b,s.c),r=t.lu,q=0,p="";s.m();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.p(A.yQ(B.a.q(a,q,m)))+A.p(c.$1(o))
q=m+n[0].length}s=p+A.p(A.yQ(B.a.a7(a,q)))
return s.charCodeAt(0)==0?s:s},
EX(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.zk(a,s,s+b.length,c)},
zk(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
aF:function aF(a,b){this.a=a
this.b=b},
hL:function hL(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.b=b},
f_:function f_(a,b){this.a=a
this.b=b},
kY:function kY(a,b){this.a=a
this.b=b},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
kZ:function kZ(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function ft(){},
ms:function ms(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(a,b,c){this.a=a
this.b=b
this.$ti=c},
dT:function dT(a,b){this.a=a
this.$ti=b},
eV:function eV(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fu:function fu(){},
cD:function cD(a,b,c){this.a=a
this.b=b
this.$ti=c},
o0:function o0(){},
fH:function fH(a,b){this.a=a
this.$ti=b},
px:function px(a){this.a=a},
ha:function ha(){},
qv:function qv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h1:function h1(){},
j6:function j6(a,b,c){this.a=a
this.b=b
this.c=c},
ke:function ke(a){this.a=a},
ju:function ju(a){this.a=a},
fx:function fx(a,b){this.a=a
this.b=b},
hP:function hP(a){this.a=a
this.b=null},
di:function di(){},
m0:function m0(){},
m1:function m1(){},
qt:function qt(){},
q1:function q1(){},
fo:function fo(a,b){this.a=a
this.b=b},
jQ:function jQ(a){this.a=a},
bn:function bn(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
o7:function o7(a){this.a=a},
o9:function o9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ai:function ai(a,b){this.a=a
this.$ti=b},
dt:function dt(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aO:function aO(a,b){this.a=a
this.$ti=b},
bS:function bS(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aN:function aN(a,b){this.a=a
this.$ti=b},
jc:function jc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fM:function fM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
uX:function uX(a){this.a=a},
uY:function uY(a){this.a=a},
uZ:function uZ(a){this.a=a},
eZ:function eZ(){},
kW:function kW(){},
kX:function kX(){},
ee:function ee(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
eX:function eX(a){this.b=a},
kr:function kr(a,b,c){this.a=a
this.b=b
this.c=c},
ks:function ks(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
eA:function eA(a,b){this.a=a
this.c=b},
lb:function lb(a,b,c){this.a=a
this.b=b
this.c=c},
u0:function u0(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
EZ(a){throw A.aA(A.xb(a),new Error())},
x(){throw A.aA(A.xc(""),new Error())},
zl(){throw A.aA(A.AX(""),new Error())},
v9(){throw A.aA(A.xb(""),new Error())},
xR(){var s=new A.kB("")
return s.b=s},
rw(a){var s=new A.kB(a)
return s.b=s},
kB:function kB(a){this.a=a
this.b=null},
D1(a){return a},
i4(a,b,c){},
bv(a){var s,r,q
if(t.iy.b(a))return a
s=J.I(a)
r=A.aG(s.gk(a),null,!1,t.z)
for(q=0;q<s.gk(a);++q)r[q]=s.h(a,q)
return r},
xe(a,b,c){var s
A.i4(a,b,c)
s=new DataView(a,b)
return s},
cm(a,b,c){A.i4(a,b,c)
c=B.b.N(a.byteLength-b,4)
return new Int32Array(a,b,c)},
Bd(a){return new Int8Array(a)},
Be(a){return new Uint16Array(a)},
Bf(a,b,c){A.i4(a,b,c)
return new Uint32Array(a,b,c)},
vz(a){return new Uint8Array(a)},
bq(a,b,c){A.i4(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
cA(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.uM(b,a))},
cb(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.En(a,b,c))
if(b==null)return c
return b},
ej:function ej(){},
ei:function ei(){},
fY:function fY(){},
lh:function lh(a){this.a=a},
fX:function fX(){},
ek:function ek(){},
cN:function cN(){},
bp:function bp(){},
jm:function jm(){},
jn:function jn(){},
jo:function jo(){},
jp:function jp(){},
jq:function jq(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
dz:function dz(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){},
hK:function hK(){},
vH(a,b){var s=b.c
return s==null?b.c=A.hV(a,"J",[b.x]):s},
xp(a){var s=a.w
if(s===6||s===7)return A.xp(a.x)
return s===11||s===12},
Bw(a){return a.as},
aj(a){return A.u7(v.typeUniverse,a,!1)},
EG(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.d6(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
d6(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.d6(a1,s,a3,a4)
if(r===s)return a2
return A.y6(a1,r,!0)
case 7:s=a2.x
r=A.d6(a1,s,a3,a4)
if(r===s)return a2
return A.y5(a1,r,!0)
case 8:q=a2.y
p=A.fd(a1,q,a3,a4)
if(p===q)return a2
return A.hV(a1,a2.x,p)
case 9:o=a2.x
n=A.d6(a1,o,a3,a4)
m=a2.y
l=A.fd(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.w_(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.fd(a1,j,a3,a4)
if(i===j)return a2
return A.y7(a1,k,i)
case 11:h=a2.x
g=A.d6(a1,h,a3,a4)
f=a2.y
e=A.DM(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.y4(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.fd(a1,d,a3,a4)
o=a2.x
n=A.d6(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.w0(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.ij("Attempted to substitute unexpected RTI kind "+a0))}},
fd(a,b,c,d){var s,r,q,p,o=b.length,n=A.uh(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.d6(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
DN(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.uh(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.d6(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
DM(a,b,c,d){var s,r=b.a,q=A.fd(a,r,c,d),p=b.b,o=A.fd(a,p,c,d),n=b.c,m=A.DN(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.kL()
s.a=q
s.b=o
s.c=m
return s},
n(a,b){a[v.arrayRti]=b
return a},
lq(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Ey(s)
return a.$S()}return null},
EF(a,b){var s
if(A.xp(b))if(a instanceof A.di){s=A.lq(a)
if(s!=null)return s}return A.bh(a)},
bh(a){if(a instanceof A.j)return A.o(a)
if(Array.isArray(a))return A.ap(a)
return A.w7(J.d9(a))},
ap(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.w7(a)},
w7(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.De(a,s)},
De(a,b){var s=a instanceof A.di?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.CB(v.typeUniverse,s.name)
b.$ccache=r
return r},
Ey(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.u7(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ia(a){return A.by(A.o(a))},
wh(a){var s=A.lq(a)
return A.by(s==null?A.bh(a):s)},
wa(a){var s
if(a instanceof A.eZ)return a.ku()
s=a instanceof A.di?A.lq(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.bC(a).a
if(Array.isArray(a))return A.ap(a)
return A.bh(a)},
by(a){var s=a.r
return s==null?a.r=new A.u5(a):s},
Ep(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.hX(v.typeUniverse,A.wa(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.y8(v.typeUniverse,s,A.wa(q[r]))
return A.hX(v.typeUniverse,s,a)},
bO(a){return A.by(A.u7(v.typeUniverse,a,!1))},
Dd(a){var s=this
s.b=A.DK(s)
return s.b(a)},
DK(a){var s,r,q,p
if(a===t.K)return A.Dm
if(A.e1(a))return A.Dq
s=a.w
if(s===6)return A.Db
if(s===1)return A.yz
if(s===7)return A.Dh
r=A.DJ(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.e1)){a.f="$i"+q
if(q==="q")return A.Dk
if(a===t.m)return A.Dj
return A.Dp}}else if(s===10){p=A.El(a.x,a.y)
return p==null?A.yz:p}return A.D9},
DJ(a){if(a.w===8){if(a===t.S)return A.az
if(a===t.i||a===t.o)return A.Dl
if(a===t.N)return A.Do
if(a===t.y)return A.bN}return null},
Dc(a){var s=this,r=A.D8
if(A.e1(s))r=A.CR
else if(s===t.K)r=A.CQ
else if(A.fh(s)){r=A.Da
if(s===t.I)r=A.a7
else if(s===t.v)r=A.R
else if(s===t.o9)r=A.yn
else if(s===t.jh)r=A.CP
else if(s===t.dz)r=A.yo
else if(s===t.B)r=A.yp}else if(s===t.S)r=A.Z
else if(s===t.N)r=A.t
else if(s===t.y)r=A.f9
else if(s===t.o)r=A.CO
else if(s===t.i)r=A.dX
else if(s===t.m)r=A.aT
s.a=r
return s.a(a)},
D9(a){var s=this
if(a==null)return A.fh(s)
return A.EJ(v.typeUniverse,A.EF(a,s),s)},
Db(a){if(a==null)return!0
return this.x.b(a)},
Dp(a){var s,r=this
if(a==null)return A.fh(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.d9(a)[s]},
Dk(a){var s,r=this
if(a==null)return A.fh(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.d9(a)[s]},
Dj(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
yy(a){if(typeof a=="object"){if(a instanceof A.j)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
D8(a){var s=this
if(a==null){if(A.fh(s))return a}else if(s.b(a))return a
throw A.aA(A.yt(a,s),new Error())},
Da(a){var s=this
if(a==null||s.b(a))return a
throw A.aA(A.yt(a,s),new Error())},
yt(a,b){return new A.hT("TypeError: "+A.xU(a,A.bf(b,null)))},
xU(a,b){return A.iP(a)+": type '"+A.bf(A.wa(a),null)+"' is not a subtype of type '"+b+"'"},
bM(a,b){return new A.hT("TypeError: "+A.xU(a,b))},
Dh(a){var s=this
return s.x.b(a)||A.vH(v.typeUniverse,s).b(a)},
Dm(a){return a!=null},
CQ(a){if(a!=null)return a
throw A.aA(A.bM(a,"Object"),new Error())},
Dq(a){return!0},
CR(a){return a},
yz(a){return!1},
bN(a){return!0===a||!1===a},
f9(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aA(A.bM(a,"bool"),new Error())},
yn(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aA(A.bM(a,"bool?"),new Error())},
dX(a){if(typeof a=="number")return a
throw A.aA(A.bM(a,"double"),new Error())},
yo(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aA(A.bM(a,"double?"),new Error())},
az(a){return typeof a=="number"&&Math.floor(a)===a},
Z(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aA(A.bM(a,"int"),new Error())},
a7(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aA(A.bM(a,"int?"),new Error())},
Dl(a){return typeof a=="number"},
CO(a){if(typeof a=="number")return a
throw A.aA(A.bM(a,"num"),new Error())},
CP(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aA(A.bM(a,"num?"),new Error())},
Do(a){return typeof a=="string"},
t(a){if(typeof a=="string")return a
throw A.aA(A.bM(a,"String"),new Error())},
R(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aA(A.bM(a,"String?"),new Error())},
aT(a){if(A.yy(a))return a
throw A.aA(A.bM(a,"JSObject"),new Error())},
yp(a){if(a==null)return a
if(A.yy(a))return a
throw A.aA(A.bM(a,"JSObject?"),new Error())},
yL(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bf(a[q],b)
return s},
DB(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.yL(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bf(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
yw(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.n([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.bf(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.bf(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.bf(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.bf(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.bf(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
bf(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.bf(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.bf(a.x,b)+">"
if(m===8){p=A.DP(a.x)
o=a.y
return o.length>0?p+("<"+A.yL(o,b)+">"):p}if(m===10)return A.DB(a,b)
if(m===11)return A.yw(a,b,null)
if(m===12)return A.yw(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
DP(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
CC(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
CB(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.u7(a,b,!1)
else if(typeof m=="number"){s=m
r=A.hW(a,5,"#")
q=A.uh(s)
for(p=0;p<s;++p)q[p]=r
o=A.hV(a,b,q)
n[b]=o
return o}else return m},
CA(a,b){return A.yl(a.tR,b)},
Cz(a,b){return A.yl(a.eT,b)},
u7(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.y0(A.xZ(a,null,b,!1))
r.set(b,s)
return s},
hX(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.y0(A.xZ(a,b,c,!0))
q.set(c,r)
return r},
y8(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.w_(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
d5(a,b){b.a=A.Dc
b.b=A.Dd
return b},
hW(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bT(null,null)
s.w=b
s.as=c
r=A.d5(a,s)
a.eC.set(c,r)
return r},
y6(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Cx(a,b,r,c)
a.eC.set(r,s)
return s},
Cx(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.e1(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.fh(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.bT(null,null)
q.w=6
q.x=b
q.as=c
return A.d5(a,q)},
y5(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Cv(a,b,r,c)
a.eC.set(r,s)
return s},
Cv(a,b,c,d){var s,r
if(d){s=b.w
if(A.e1(b)||b===t.K)return b
else if(s===1)return A.hV(a,"J",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.bT(null,null)
r.w=7
r.x=b
r.as=c
return A.d5(a,r)},
Cy(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bT(null,null)
s.w=13
s.x=b
s.as=q
r=A.d5(a,s)
a.eC.set(q,r)
return r},
hU(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Cu(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
hV(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.hU(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bT(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.d5(a,r)
a.eC.set(p,q)
return q},
w_(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.hU(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bT(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.d5(a,o)
a.eC.set(q,n)
return n},
y7(a,b,c){var s,r,q="+"+(b+"("+A.hU(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.bT(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.d5(a,s)
a.eC.set(q,r)
return r},
y4(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.hU(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.hU(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Cu(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bT(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.d5(a,p)
a.eC.set(r,o)
return o},
w0(a,b,c,d){var s,r=b.as+("<"+A.hU(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Cw(a,b,c,r,d)
a.eC.set(r,s)
return s},
Cw(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.uh(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.d6(a,b,r,0)
m=A.fd(a,c,r,0)
return A.w0(a,n,m,c!==m)}}l=new A.bT(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.d5(a,l)},
xZ(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
y0(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Cn(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.y_(a,r,l,k,!1)
else if(q===46)r=A.y_(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.dV(a.u,a.e,k.pop()))
break
case 94:k.push(A.Cy(a.u,k.pop()))
break
case 35:k.push(A.hW(a.u,5,"#"))
break
case 64:k.push(A.hW(a.u,2,"@"))
break
case 126:k.push(A.hW(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Cp(a,k)
break
case 38:A.Co(a,k)
break
case 63:p=a.u
k.push(A.y6(p,A.dV(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.y5(p,A.dV(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Cm(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.y1(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Cr(a.u,a.e,o)
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
return A.dV(a.u,a.e,m)},
Cn(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
y_(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.CC(s,o.x)[p]
if(n==null)A.w('No "'+p+'" in "'+A.Bw(o)+'"')
d.push(A.hX(s,o,n))}else d.push(p)
return m},
Cp(a,b){var s,r=a.u,q=A.xY(a,b),p=b.pop()
if(typeof p=="string")b.push(A.hV(r,p,q))
else{s=A.dV(r,a.e,p)
switch(s.w){case 11:b.push(A.w0(r,s,q,a.n))
break
default:b.push(A.w_(r,s,q))
break}}},
Cm(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.xY(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.dV(p,a.e,o)
q=new A.kL()
q.a=s
q.b=n
q.c=m
b.push(A.y4(p,r,q))
return
case-4:b.push(A.y7(p,b.pop(),s))
return
default:throw A.b(A.ij("Unexpected state under `()`: "+A.p(o)))}},
Co(a,b){var s=b.pop()
if(0===s){b.push(A.hW(a.u,1,"0&"))
return}if(1===s){b.push(A.hW(a.u,4,"1&"))
return}throw A.b(A.ij("Unexpected extended operation "+A.p(s)))},
xY(a,b){var s=b.splice(a.p)
A.y1(a.u,a.e,s)
a.p=b.pop()
return s},
dV(a,b,c){if(typeof c=="string")return A.hV(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Cq(a,b,c)}else return c},
y1(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.dV(a,b,c[s])},
Cr(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.dV(a,b,c[s])},
Cq(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.ij("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.ij("Bad index "+c+" for "+b.l(0)))},
EJ(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aC(a,b,null,c,null)
r.set(c,s)}return s},
aC(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.e1(d))return!0
s=b.w
if(s===4)return!0
if(A.e1(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aC(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.aC(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aC(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aC(a,b.x,c,d,e))return!1
return A.aC(a,A.vH(a,b),c,d,e)}if(s===6)return A.aC(a,p,c,d,e)&&A.aC(a,b.x,c,d,e)
if(q===7){if(A.aC(a,b,c,d.x,e))return!0
return A.aC(a,b,c,A.vH(a,d),e)}if(q===6)return A.aC(a,b,c,p,e)||A.aC(a,b,c,d.x,e)
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
if(!A.aC(a,j,c,i,e)||!A.aC(a,i,e,j,c))return!1}return A.yx(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.yx(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Di(a,b,c,d,e)}if(o&&q===10)return A.Dn(a,b,c,d,e)
return!1},
yx(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aC(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aC(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aC(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aC(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aC(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
Di(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.hX(a,b,r[o])
return A.ym(a,p,null,c,d.y,e)}return A.ym(a,b.y,null,c,d.y,e)},
ym(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aC(a,b[s],d,e[s],f))return!1
return!0},
Dn(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aC(a,r[s],c,q[s],e))return!1
return!0},
fh(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.e1(a))if(s!==6)r=s===7&&A.fh(a.x)
return r},
e1(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
yl(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
uh(a){return a>0?new Array(a):v.typeUniverse.sEA},
bT:function bT(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
kL:function kL(){this.c=this.b=this.a=null},
u5:function u5(a){this.a=a},
kI:function kI(){},
hT:function hT(a){this.a=a},
BU(){var s,r,q
if(self.scheduleImmediate!=null)return A.DS()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.d8(new A.rb(s),1)).observe(r,{childList:true})
return new A.ra(s,r,q)}else if(self.setImmediate!=null)return A.DT()
return A.DU()},
BV(a){self.scheduleImmediate(A.d8(new A.rc(a),0))},
BW(a){self.setImmediate(A.d8(new A.rd(a),0))},
BX(a){A.vM(B.aq,a)},
vM(a,b){var s=B.b.N(a.a,1000)
return A.Cs(s<0?0:s,b)},
xv(a,b){var s=B.b.N(a.a,1000)
return A.Ct(s<0?0:s,b)},
Cs(a,b){var s=new A.hS(!0)
s.ng(a,b)
return s},
Ct(a,b){var s=new A.hS(!1)
s.nh(a,b)
return s},
h(a){return new A.hn(new A.r($.v,a.i("r<0>")),a.i("hn<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.yq(a,b)},
e(a,b){b.ai(a)},
d(a,b){b.bO(A.E(a),A.ad(a))},
yq(a,b){var s,r,q=new A.ul(b),p=new A.um(b)
if(a instanceof A.r)a.l4(q,p,t.z)
else{s=t.z
if(a instanceof A.r)a.bY(q,p,s)
else{r=new A.r($.v,t._)
r.a=8
r.c=a
r.l4(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.v.eP(new A.uD(s),t.H,t.S,t.z)},
bu(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.cI(null)
else{s=c.a
s===$&&A.x()
s.p()}return}else if(b===1){s=c.c
if(s!=null){r=A.E(a)
q=A.ad(a)
s.al(new A.aa(r,q))}else{s=A.E(a)
r=A.ad(a)
q=c.a
q===$&&A.x()
q.bN(s,r)
c.a.p()}return}if(a instanceof A.hD){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.x()
r.t(0,s)
A.ib(new A.uj(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.x()
s.rk(p,!1).bh(new A.uk(c,b),t.P)
return}}A.yq(a,b)},
yP(a){var s=a.a
s===$&&A.x()
return new A.aY(s,A.o(s).i("aY<1>"))},
BY(a,b){var s=new A.ku(b.i("ku<0>"))
s.nc(a,b)
return s},
yA(a,b){return A.BY(a,b)},
Ci(a){return new A.hD(a,1)},
d0(a){return new A.hD(a,0)},
y3(a,b,c){return 0},
fm(a){var s
if(t.C.b(a)){s=a.gc0()
if(s!=null)return s}return B.t},
ec(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.E(q)
r=A.ad(q)
p=new A.r($.v,b.i("r<0>"))
o=s
n=r
m=A.i5(o,n)
if(m==null)o=new A.aa(o,n==null?A.fm(o):n)
else o=m
p.c2(o)
return p}return b.i("J<0>").b(l)?l:A.be(l,b)},
cg(a,b){var s=a==null?b.a(a):a,r=new A.r($.v,b.i("r<0>"))
r.aW(s)
return r},
AL(a,b){var s
if(!b.b(null))throw A.b(A.aU(null,"computation","The type parameter is not nullable"))
s=new A.r($.v,b.i("r<0>"))
A.cU(a,new A.nv(null,s,b))
return s},
x3(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.r($.v,b.i("r<q<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.nx(i,h,g,f)
try{for(n=J.M(a),m=t.P;n.m();){r=n.gn()
q=i.b
r.bY(new A.nw(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cI(A.n([],b.i("z<0>")))
return n}i.a=A.aG(n,null,!1,b.i("0?"))}catch(l){p=A.E(l)
o=A.ad(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.i5(m,k)
if(j==null)m=new A.aa(m,k==null?A.fm(m):k)
else m=j
n.c2(m)
return n}else{i.d=p
i.c=o}}return f},
vn(a,b,c,d){var s=new A.nq(d,null,b,c),r=$.v,q=new A.r(r,c.i("r<0>"))
if(r!==B.h)s=r.eP(s,c.i("0/"),t.K,t.l)
a.dk(new A.bK(q,2,null,s,a.$ti.i("@<1>").U(c).i("bK<1,2>")))
return q},
AJ(a,b){var s,r,q,p=A.n([],b.i("z<hB<0>>"))
for(s=a.length,r=b.i("hB<0>"),q=0;q<a.length;a.length===s||(0,A.L)(a),++q)p.push(new A.hB(a[q],r))
if(p.length===0)return A.cg(A.n([],b.i("z<0>")),b.i("q<0>"))
s=new A.r($.v,b.i("r<q<0>>"))
A.Cc(p,new A.nr(new A.a8(s,b.i("a8<q<0>>")),p,b))
return s},
Du(a){return a!=null},
Cc(a,b){var s,r={},q=r.a=r.b=0,p=new A.t3(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.L)(a),++q)a[q].r7(p)},
i5(a,b){var s,r,q,p=$.v
if(p===B.h)return null
s=p.ly(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.jF(r,q)
return s},
uu(a,b){var s
if($.v!==B.h){s=A.i5(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gc0()
if(b==null){A.jF(a,B.t)
b=B.t}}else b=B.t
else if(t.C.b(a))A.jF(a,b)
return new A.aa(a,b)},
Cb(a,b,c){var s=new A.r(b,c.i("r<0>"))
s.a=8
s.c=a
return s},
be(a,b){var s=new A.r($.v,b.i("r<0>"))
s.a=8
s.c=a
return s},
t9(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.xs()
b.c2(new A.aa(new A.bD(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.kK(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.ef()
b.fa(p.a)
A.dR(b,q)
return}b.a^=2
b.b.cC(new A.ta(p,b))},
dR(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.eA(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.dR(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.gbQ()===k.gbQ())}else f=!1
if(f){f=g.a
r=f.c
f.b.eA(r.a,r.b)
return}j=$.v
if(j!==k)$.v=k
else j=null
f=s.a.c
if((f&15)===8)new A.te(s,g,p).$0()
else if(q){if((f&1)!==0)new A.td(s,m).$0()}else if((f&2)!==0)new A.tc(g,s).$0()
if(j!=null)$.v=j
f=s.c
if(f instanceof A.r){r=s.a.$ti
r=r.i("J<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.fT(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.t9(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.fT(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
yF(a,b){if(t.ng.b(a))return b.eP(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.d3(a,t.z,t.K)
throw A.b(A.aU(a,"onError",u.w))},
Dt(){var s,r
for(s=$.fb;s!=null;s=$.fb){$.i7=null
r=s.b
$.fb=r
if(r==null)$.i6=null
s.a.$0()}},
DL(){$.w8=!0
try{A.Dt()}finally{$.i7=null
$.w8=!1
if($.fb!=null)$.wt().$1(A.yV())}},
yN(a){var s=new A.kt(a),r=$.i6
if(r==null){$.fb=$.i6=s
if(!$.w8)$.wt().$1(A.yV())}else $.i6=r.b=s},
DI(a){var s,r,q,p=$.fb
if(p==null){A.yN(a)
$.i7=$.i6
return}s=new A.kt(a)
r=$.i7
if(r==null){s.b=p
$.fb=$.i7=s}else{q=r.b
s.b=q
$.i7=r.b=s
if(q==null)$.i6=s}},
ib(a){var s,r=null,q=$.v
if(B.h===q){A.uB(r,r,B.h,a)
return}if(B.h===q.giL().a)s=B.h.gbQ()===q.gbQ()
else s=!1
if(s){A.uB(r,r,q,q.by(a,t.H))
return}s=$.v
s.cC(s.eq(a))},
q4(a,b){var s=null,r=b.i("c9<0>"),q=new A.c9(s,s,s,s,r)
q.b9(a)
q.k7()
return new A.aY(q,r.i("aY<1>"))},
Fk(a){return new A.c1(A.bg(a,"stream",t.K))},
vJ(a,b,c,d,e){return d?new A.f4(b,null,c,a,e.i("f4<0>")):new A.c9(b,null,c,a,e.i("c9<0>"))},
ey(a,b,c){return new A.ho(b,a,c.i("ho<0>"))},
lo(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.E(q)
r=A.ad(q)
$.v.eA(s,r)}},
C9(a,b,c,d,e,f){var s=$.v,r=e?1:0,q=c!=null?32:0,p=A.kz(s,b,f),o=A.rr(s,c),n=d==null?A.uF():d
return new A.cY(a,p,o,s.by(n,t.H),s,r|q,f.i("cY<0>"))},
BR(a){return new A.r3(a)},
kz(a,b,c){var s=b==null?A.DW():b
return a.d3(s,t.H,c)},
rr(a,b){if(b==null)b=A.DX()
if(t.b9.b(b))return a.eP(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.d3(b,t.z,t.K)
throw A.b(A.P("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
Dv(a){},
Dx(a,b){$.v.eA(a,b)},
Dw(){},
xT(a,b){var s=$.v,r=new A.eR(s,b.i("eR<0>"))
A.ib(r.gkG())
if(a!=null)r.c=s.by(a,t.H)
return r},
CZ(a,b,c){var s=a.A()
if(s!==$.dc())s.aD(new A.uo(b,c))
else b.al(c)},
D_(a,b,c){var s=a.A()
if(s!==$.dc())s.aD(new A.up(b,c))
else b.c4(c)},
cU(a,b){var s=$.v
if(s===B.h)return s.j_(a,b)
return s.j_(a,s.eq(b))},
BH(a,b){var s,r=$.v
if(r===B.h)return r.iZ(a,b)
s=r.h5(b,t.E)
return $.v.iZ(a,s)},
DF(a,b,c,d,e){A.i8(d,e)},
i8(a,b){A.DI(new A.ux(a,b))},
uy(a,b,c,d){var s,r=$.v
if(r===c)return d.$0()
$.v=c
s=r
try{r=d.$0()
return r}finally{$.v=s}},
uA(a,b,c,d,e){var s,r=$.v
if(r===c)return d.$1(e)
$.v=c
s=r
try{r=d.$1(e)
return r}finally{$.v=s}},
uz(a,b,c,d,e,f){var s,r=$.v
if(r===c)return d.$2(e,f)
$.v=c
s=r
try{r=d.$2(e,f)
return r}finally{$.v=s}},
yJ(a,b,c,d){return d},
yK(a,b,c,d){return d},
yI(a,b,c,d){return d},
DE(a,b,c,d,e){return null},
uB(a,b,c,d){var s,r
if(B.h!==c){s=B.h.gbQ()
r=c.gbQ()
d=s!==r?c.eq(d):c.iU(d,t.H)}A.yN(d)},
DD(a,b,c,d,e){return A.vM(d,B.h!==c?c.iU(e,t.H):e)},
DC(a,b,c,d,e){return A.xv(d,B.h!==c?c.ln(e,t.H,t.E):e)},
DG(a,b,c,d){A.wm(d)},
Dy(a){$.v.lN(a)},
yH(a,b,c,d,e){var s,r,q,p
$.zd=A.DY()
if(d==null)d=B.cz
if(e==null)s=c.gkA()
else{r=t.X
s=A.AM(e,r,r)}r=new A.kD(c.gkV(),c.gkY(),c.gkW(),c.gkR(),c.gkS(),c.gkQ(),c.gko(),c.giL(),c.gkg(),c.gkf(),c.gkL(),c.gkr(),c.giB(),c,s)
q=d.x
if(q!=null)r.w=new A.aK(r,q)
p=d.a
if(p!=null)r.as=new A.aK(r,p)
return r},
zh(a,b,c,d){return A.DH(a,c,b,d)},
DH(a,b,c,d){return $.v.lA(c,b).bX(a,d)},
rb:function rb(a){this.a=a},
ra:function ra(a,b,c){this.a=a
this.b=b
this.c=c},
rc:function rc(a){this.a=a},
rd:function rd(a){this.a=a},
hS:function hS(a){this.a=a
this.b=null
this.c=0},
u3:function u3(a,b){this.a=a
this.b=b},
u2:function u2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hn:function hn(a,b){this.a=a
this.b=!1
this.$ti=b},
ul:function ul(a){this.a=a},
um:function um(a){this.a=a},
uD:function uD(a){this.a=a},
uj:function uj(a,b){this.a=a
this.b=b},
uk:function uk(a,b){this.a=a
this.b=b},
ku:function ku(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
rf:function rf(a){this.a=a},
rg:function rg(a){this.a=a},
ri:function ri(a){this.a=a},
rj:function rj(a,b){this.a=a
this.b=b},
rh:function rh(a,b){this.a=a
this.b=b},
re:function re(a){this.a=a},
hD:function hD(a,b){this.a=a
this.b=b},
ld:function ld(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
f3:function f3(a,b){this.a=a
this.$ti=b},
aa:function aa(a,b){this.a=a
this.b=b},
aR:function aR(a,b){this.a=a
this.$ti=b},
dN:function dN(a,b,c,d,e,f,g){var _=this
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
hr:function hr(){},
ho:function ho(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
nv:function nv(a,b,c){this.a=a
this.b=b
this.c=c},
nx:function nx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nw:function nw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nq:function nq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ka:function ka(a,b){this.a=a
this.b=b},
nr:function nr(a,b,c){this.a=a
this.b=b
this.c=c},
h3:function h3(a,b){this.c=a
this.d=b},
hB:function hB(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
t4:function t4(a,b){this.a=a
this.b=b},
t5:function t5(a,b){this.a=a
this.b=b},
t3:function t3(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(){},
aI:function aI(a,b){this.a=a
this.$ti=b},
a8:function a8(a,b){this.a=a
this.$ti=b},
bK:function bK(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
r:function r(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
t6:function t6(a,b){this.a=a
this.b=b},
tb:function tb(a,b){this.a=a
this.b=b},
ta:function ta(a,b){this.a=a
this.b=b},
t8:function t8(a,b){this.a=a
this.b=b},
t7:function t7(a,b){this.a=a
this.b=b},
te:function te(a,b,c){this.a=a
this.b=b
this.c=c},
tf:function tf(a,b){this.a=a
this.b=b},
tg:function tg(a){this.a=a},
td:function td(a,b){this.a=a
this.b=b},
tc:function tc(a,b){this.a=a
this.b=b},
th:function th(a,b){this.a=a
this.b=b},
ti:function ti(a,b,c){this.a=a
this.b=b
this.c=c},
tj:function tj(a,b){this.a=a
this.b=b},
kt:function kt(a){this.a=a
this.b=null},
a_:function a_(){},
q7:function q7(a,b){this.a=a
this.b=b},
q8:function q8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q9:function q9(a,b){this.a=a
this.b=b},
qa:function qa(a,b){this.a=a
this.b=b},
q5:function q5(a){this.a=a},
q6:function q6(a,b,c){this.a=a
this.b=b
this.c=c},
hf:function hf(){},
d3:function d3(){},
tX:function tX(a){this.a=a},
tW:function tW(a){this.a=a},
le:function le(){},
kv:function kv(){},
c9:function c9(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
f4:function f4(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
aY:function aY(a,b){this.a=a
this.$ti=b},
cY:function cY(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
kq:function kq(){},
r3:function r3(a){this.a=a},
r2:function r2(a){this.a=a},
l9:function l9(a,b,c){this.c=a
this.a=b
this.b=c},
aS:function aS(){},
rt:function rt(a,b,c){this.a=a
this.b=b
this.c=c},
rs:function rs(a){this.a=a},
f2:function f2(){},
kH:function kH(){},
cZ:function cZ(a){this.b=a
this.a=null},
eQ:function eQ(a,b){this.b=a
this.c=b
this.a=null},
rX:function rX(){},
eY:function eY(){this.a=0
this.c=this.b=null},
tH:function tH(a,b){this.a=a
this.b=b},
eR:function eR(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
c1:function c1(a){this.a=null
this.b=a
this.c=!1},
hw:function hw(a){this.$ti=a},
cz:function cz(a,b){this.b=a
this.$ti=b},
tF:function tF(a,b){this.a=a
this.b=b},
hG:function hG(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
uo:function uo(a,b){this.a=a
this.b=b},
up:function up(a,b){this.a=a
this.b=b},
hz:function hz(){},
eU:function eU(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
dU:function dU(a,b,c){this.b=a
this.a=b
this.$ti=c},
hx:function hx(a){this.a=a},
f0:function f0(a,b,c,d,e,f){var _=this
_.w=$
_.x=null
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
hq:function hq(a,b,c){this.a=a
this.b=b
this.$ti=c},
aK:function aK(a,b){this.a=a
this.b=b},
i2:function i2(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
f8:function f8(a){this.a=a},
ll:function ll(){},
kD:function kD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.at=null
_.ax=n
_.ay=o},
rT:function rT(a,b,c){this.a=a
this.b=b
this.c=c},
rV:function rV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rS:function rS(a,b){this.a=a
this.b=b},
rU:function rU(a,b,c){this.a=a
this.b=b
this.c=c},
ux:function ux(a,b){this.a=a
this.b=b},
l1:function l1(){},
tM:function tM(a,b,c){this.a=a
this.b=b
this.c=c},
tO:function tO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tL:function tL(a,b){this.a=a
this.b=b},
tN:function tN(a,b,c){this.a=a
this.b=b
this.c=c},
nz(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.cx(d.i("@<0>").U(e).i("cx<1,2>"))
b=A.wd()}else{if(A.z0()===b&&A.z_()===a)return new A.d_(d.i("@<0>").U(e).i("d_<1,2>"))
if(a==null)a=A.wc()}else{if(b==null)b=A.wd()
if(a==null)a=A.wc()}return A.Ca(a,b,c,d,e)},
xV(a,b){var s=a[b]
return s===a?null:s},
vY(a,b,c){if(c==null)a[b]=a
else a[b]=c},
vX(){var s=Object.create(null)
A.vY(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
Ca(a,b,c,d,e){var s=c!=null?c:new A.rR(d)
return new A.ht(a,b,s,d.i("@<0>").U(e).i("ht<1,2>"))},
jd(a,b,c,d){if(b==null){if(a==null)return new A.bn(c.i("@<0>").U(d).i("bn<1,2>"))
b=A.wd()}else{if(A.z0()===b&&A.z_()===a)return new A.fM(c.i("@<0>").U(d).i("fM<1,2>"))
if(a==null)a=A.wc()}return A.Cl(a,b,null,c,d)},
l(a,b,c){return A.Es(a,new A.bn(b.i("@<0>").U(c).i("bn<1,2>")))},
G(a,b){return new A.bn(a.i("@<0>").U(b).i("bn<1,2>"))},
Cl(a,b,c,d,e){return new A.hE(a,b,new A.tC(d),d.i("@<0>").U(e).i("hE<1,2>"))},
vw(a){return new A.cy(a.i("cy<0>"))},
bo(a){return new A.cy(a.i("cy<0>"))},
al(a,b){return A.Et(a,new A.cy(b.i("cy<0>")))},
vZ(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
tE(a,b,c){var s=new A.d1(a,b,c.i("d1<0>"))
s.c=a.e
return s},
D2(a,b){return J.y(a,b)},
D3(a){return J.aL(a)},
AM(a,b,c){var s=A.nz(null,null,null,b,c)
a.a9(0,new A.nA(s,b,c))
return s},
b4(a,b,c){var s=A.jd(null,null,b,c)
a.a9(0,new A.oa(s,b,c))
return s},
cj(a,b,c){var s=A.jd(null,null,b,c)
s.G(0,a)
return s},
AY(a,b){var s,r,q=A.vw(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.L)(a),++r)q.t(0,b.a(a[r]))
return q},
ob(a,b){var s=A.vw(b)
s.G(0,a)
return s},
AZ(a,b){var s=t.bP
return J.wC(s.a(a),s.a(b))},
oL(a){var s,r
if(A.wj(a))return"{...}"
s=new A.O("")
try{r={}
$.e3.push(a)
s.a+="{"
r.a=!0
a.a9(0,new A.oM(r,s))
s.a+="}"}finally{$.e3.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
vx(a){return new A.fO(A.aG(A.B_(null),null,!1,a.i("0?")),a.i("fO<0>"))},
B_(a){return 8},
cx:function cx(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
tk:function tk(a){this.a=a},
d_:function d_(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
ht:function ht(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
rR:function rR(a){this.a=a},
dS:function dS(a,b){this.a=a
this.$ti=b},
kM:function kM(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hE:function hE(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
tC:function tC(a){this.a=a},
cy:function cy(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
tD:function tD(a){this.a=a
this.c=this.b=null},
d1:function d1(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
nA:function nA(a,b,c){this.a=a
this.b=b
this.c=c},
oa:function oa(a,b,c){this.a=a
this.b=b
this.c=c},
du:function du(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
kS:function kS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
aP:function aP(){},
A:function A(){},
T:function T(){},
oK:function oK(a){this.a=a},
oM:function oM(a,b){this.a=a
this.b=b},
hF:function hF(a,b){this.a=a
this.$ti=b},
kU:function kU(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
lg:function lg(){},
fU:function fU(){},
eF:function eF(a,b){this.a=a
this.$ti=b},
fO:function fO(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
kT:function kT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
bU:function bU(){},
hO:function hO(){},
hY:function hY(){},
yD(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.E(r)
q=A.X(String(s),null,null)
throw A.b(q)}q=A.uq(p)
return q},
uq(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.kQ(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.uq(a[s])
return a},
CN(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.zQ()
else s=new Uint8Array(o)
for(r=J.I(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
CM(a,b,c,d){var s=a?$.zP():$.zO()
if(s==null)return null
if(0===c&&d===b.length)return A.yj(s,b)
return A.yj(s,b.subarray(c,d))},
yj(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
wH(a,b,c,d,e,f){if(B.b.ar(f,4)!==0)throw A.b(A.X("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.X("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.X("Invalid base64 padding, more than two '=' characters",a,b))},
C1(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
for(s=J.I(b),r=f.$flags|0,q=c,p=0;q<d;++q){o=s.h(b,q)
p=(p|o)>>>0
l=(l<<8|o)&16777215;--k
if(k===0){n=g+1
r&2&&A.C(f)
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
if(3-k===1){r&2&&A.C(f)
f[g]=a.charCodeAt(l>>>2&63)
f[n]=a.charCodeAt(l<<4&63)
f[m]=61
f[m+1]=61}else{r&2&&A.C(f)
f[g]=a.charCodeAt(l>>>10&63)
f[n]=a.charCodeAt(l>>>4&63)
f[m]=a.charCodeAt(l<<2&63)
f[m+1]=61}return 0}return(l<<2|3-k)>>>0}for(q=c;q<d;){o=s.h(b,q)
if(o<0||o>255)break;++q}throw A.b(A.aU(b,"Not a byte value at index "+q+": 0x"+B.b.m_(s.h(b,q),16),null))},
C0(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.b.a2(f,2),i=f&3,h=$.wu()
for(s=d.$flags|0,r=b,q=0;r<c;++r){p=a.charCodeAt(r)
q|=p
o=h[p&127]
if(o>=0){j=(j<<6|o)&16777215
i=i+1&3
if(i===0){n=e+1
s&2&&A.C(d)
d[e]=j>>>16&255
e=n+1
d[n]=j>>>8&255
n=e+1
d[e]=j&255
e=n
j=0}continue}else if(o===-1&&i>1){if(q>127)break
if(i===3){if((j&3)!==0)throw A.b(A.X(l,a,r))
s&2&&A.C(d)
d[e]=j>>>10
d[e+1]=j>>>2}else{if((j&15)!==0)throw A.b(A.X(l,a,r))
s&2&&A.C(d)
d[e]=j>>>4}m=(3-i)*3
if(p===37)m+=2
return A.xI(a,r+1,c,-m-1)}throw A.b(A.X(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.X(k,a,r))},
BZ(a,b,c,d){var s=A.C_(a,b,c),r=(d&3)+(s-b),q=B.b.a2(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.zI()},
C_(a,b,c){var s,r=c,q=r,p=0
for(;;){if(!(q>b&&p<2))break
c$0:{--q
s=a.charCodeAt(q)
if(s===61){++p
r=q
break c$0}if((s|32)===100){if(q===b)break;--q
s=a.charCodeAt(q)}if(s===51){if(q===b)break;--q
s=a.charCodeAt(q)}if(s===37){++p
r=q
break c$0}break}}return r},
xI(a,b,c,d){var s,r
if(b===c)return d
s=-d-1
while(s>0){r=a.charCodeAt(b)
if(s===3){if(r===61){s-=3;++b
break}if(r===37){--s;++b
if(b===c)break
r=a.charCodeAt(b)}else break}if((s>3?s-3:s)===2){if(r!==51)break;++b;--s
if(b===c)break
r=a.charCodeAt(b)}if((r|32)!==100)break;++b;--s
if(b===c)break}if(b!==c)throw A.b(A.X("Invalid padding character",a,b))
return-s-1},
AA(a){return $.zs().h(0,a.toLowerCase())},
xa(a,b,c){return new A.fN(a,b)},
D4(a){return a.aC()},
Cj(a,b){return new A.tz(a,[],A.Ei())},
Ck(a,b,c){var s,r=new A.O("")
A.xX(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
xX(a,b,c,d){var s=A.Cj(b,c)
s.hQ(a)},
yk(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
kQ:function kQ(a,b){this.a=a
this.b=b
this.c=null},
ty:function ty(a){this.a=a},
kR:function kR(a){this.a=a},
tw:function tw(a,b,c){this.b=a
this.c=b
this.a=c},
uf:function uf(){},
ue:function ue(){},
ig:function ig(){},
lf:function lf(){},
ih:function ih(a){this.a=a},
u6:function u6(a,b){this.a=a
this.b=b},
lM:function lM(){},
im:function im(){},
kx:function kx(a){this.a=0
this.b=a},
rq:function rq(a){this.c=null
this.a=0
this.b=a},
rl:function rl(){},
r9:function r9(a,b){this.a=a
this.b=b},
il:function il(){},
kw:function kw(){this.a=0},
rk:function rk(a,b){this.a=a
this.b=b},
lR:function lR(){},
eM:function eM(a){this.a=a},
kA:function kA(a,b){this.a=a
this.b=b
this.c=0},
iy:function iy(){},
l7:function l7(a,b,c){this.a=a
this.b=b
this.$ti=c},
dP:function dP(a,b){this.a=a
this.b=b},
iz:function iz(){},
an:function an(){},
mw:function mw(a){this.a=a},
dq:function dq(){},
fN:function fN(a,b){this.a=a
this.b=b},
j7:function j7(a,b){this.a=a
this.b=b},
o8:function o8(){},
j9:function j9(a){this.b=a},
tx:function tx(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
j8:function j8(a){this.a=a},
tA:function tA(){},
tB:function tB(a,b){this.a=a
this.b=b},
tz:function tz(a,b,c){this.c=a
this.a=b
this.b=c},
ja:function ja(){},
jb:function jb(a){this.a=a},
k5:function k5(){},
u1:function u1(a,b){this.a=a
this.b=b},
hR:function hR(){},
la:function la(a){this.a=a},
ud:function ud(a,b,c){this.a=a
this.b=b
this.c=c},
kk:function kk(){},
kl:function kl(){},
lk:function lk(a){this.b=this.a=0
this.c=a},
ug:function ug(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
hk:function hk(a){this.a=a},
ca:function ca(a){this.a=a
this.b=16
this.c=0},
lm:function lm(){},
vW(a,b){var s=A.C7(a,b)
if(s==null)throw A.b(A.X("Could not parse BigInt",a,null))
return s},
C4(a,b){var s,r,q=$.ce(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.aT(0,$.wv()).f0(0,A.rm(s))
s=0
o=0}}if(b)return q.bA(0)
return q},
xJ(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
C5(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.u.rA(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.xJ(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.xJ(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.ce()
l=A.bd(j,i)
return new A.ay(l===0?!1:c,i,l)},
C7(a,b){var s,r,q,p,o
if(a==="")return null
s=$.zJ().dK(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.C4(p,q)
if(o!=null)return A.C5(o,2,q)
return null},
bd(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
vU(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
rm(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bd(4,s)
return new A.ay(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bd(1,s)
return new A.ay(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.b.a2(a,16)
r=A.bd(2,s)
return new A.ay(r===0?!1:o,s,r)}r=B.b.N(B.b.glo(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.b.N(a,65536)}r=A.bd(r,s)
return new A.ay(r===0?!1:o,s,r)},
vV(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.C(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.C(d)
d[s]=0}return b+c},
xP(a,b,c,d){var s,r,q,p,o,n=B.b.N(c,16),m=B.b.ar(c,16),l=16-m,k=B.b.c_(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.b.e1(p,l)
r&2&&A.C(d)
d[s+n+1]=(o|q)>>>0
q=B.b.c_((p&k)>>>0,m)}r&2&&A.C(d)
d[n]=q},
xK(a,b,c,d){var s,r,q,p,o=B.b.N(c,16)
if(B.b.ar(c,16)===0)return A.vV(a,b,o,d)
s=b+o+1
A.xP(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.C(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
C6(a,b,c,d){var s,r,q,p,o=B.b.N(c,16),n=B.b.ar(c,16),m=16-n,l=B.b.c_(1,n)-1,k=B.b.e1(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.b.c_((q&l)>>>0,m)
s&2&&A.C(d)
d[r]=(p|k)>>>0
k=B.b.e1(q,n)}s&2&&A.C(d)
d[j]=k},
rn(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
C2(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.C(e)
e[q]=r&65535
r=B.b.a2(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.C(e)
e[q]=r&65535
r=B.b.a2(r,16)}s&2&&A.C(e)
e[b]=r},
ky(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.C(e)
e[q]=r&65535
r=0-(B.b.a2(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.C(e)
e[q]=r&65535
r=0-(B.b.a2(r,16)&1)}},
xQ(a,b,c,d,e,f){var s,r,q,p,o,n
if(a===0)return
for(s=d.$flags|0,r=0;--f,f>=0;e=o,c=q){q=c+1
p=a*b[c]+d[e]+r
o=e+1
s&2&&A.C(d)
d[e]=p&65535
r=B.b.N(p,65536)}for(;r!==0;e=o){n=d[e]+r
o=e+1
s&2&&A.C(d)
d[e]=n&65535
r=B.b.N(n,65536)}},
C3(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.b.jT((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
EB(a){return A.lu(a)},
wX(a){return new A.iR(new WeakMap(),a)},
wY(a){if(A.bN(a)||typeof a=="number"||typeof a=="string"||a instanceof A.eZ)A.AF(a)},
AF(a){throw A.b(A.aU(a,"object","Expandos are not allowed on strings, numbers, bools, records or null"))},
t2(a,b){var s=$.zK()
s=s==null?null:new s(A.d8(A.F2(a,b),1))
return new A.kK(s,b.i("kK<0>"))},
aq(a){var s=A.en(a,null)
if(s!=null)return s
throw A.b(A.X(a,null,null))},
AE(a,b){a=A.aA(a,new Error())
a.stack=b.l(0)
throw a},
aG(a,b,c,d){var s,r=c?J.vr(a,d):J.vq(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
B1(a,b,c){var s,r=A.n([],c.i("z<0>"))
for(s=J.M(a);s.m();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
Q(a,b){var s,r
if(Array.isArray(a))return A.n(a.slice(0),b.i("z<0>"))
s=A.n([],b.i("z<0>"))
for(r=J.M(a);r.m();)s.push(r.gn())
return s},
cK(a,b){var s=A.B1(a,!1,b)
s.$flags=3
return s},
cS(a,b,c){var s,r,q,p,o
A.aQ(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.af(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.xl(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.BE(a,b,c)
if(r)a=J.vf(a,c)
if(b>0)a=J.lC(a,b)
s=A.Q(a,t.S)
return A.xl(s)},
BE(a,b,c){var s=a.length
if(b>=s)return""
return A.Bq(a,b,c==null||c>s?s:c)},
ac(a,b){return new A.ee(a,A.vt(a,!1,b,!1,!1,""))},
EA(a,b){return a==null?b==null:a===b},
qb(a,b,c){var s=J.M(b)
if(!s.m())return a
if(c.length===0){do a+=A.p(s.gn())
while(s.m())}else{a+=A.p(s.gn())
while(s.m())a=a+c+A.p(s.gn())}return a},
vO(){var s,r,q=A.Bj()
if(q==null)throw A.b(A.a0("'Uri.base' is not supported"))
s=$.xB
if(s!=null&&q===$.xA)return s
r=A.kj(q)
$.xB=r
$.xA=q
return r},
lj(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.k){s=$.zM()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.f.u(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.b6(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
CH(a){var s,r,q
if(!$.zN())return A.CI(a)
s=new URLSearchParams()
a.a9(0,new A.uc(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.q(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
xs(){return A.ad(new Error())},
vj(a,b,c,d,e,f,g){var s=A.Br(a,b,c,d,e,f,g,0,!0)
return new A.b2(s==null?new A.n4(a,b,c,d,e,f,g,0).$0():s,0,!0)},
vk(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.af(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.af(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.aU(b,s,u.B))
A.bg(c,"isUtc",t.y)
return a},
Ax(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
wT(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
iJ(a){if(a>=10)return""+a
return"0"+a},
dm(a,b,c){return new A.aw(a+1000*b+1e6*c)},
ea(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.aU(b,"name","No enum value with that name"))},
iP(a){if(typeof a=="number"||A.bN(a)||a==null)return J.am(a)
if(typeof a=="string")return JSON.stringify(a)
return A.xk(a)},
wV(a,b){A.bg(a,"error",t.K)
A.bg(b,"stackTrace",t.l)
A.AE(a,b)},
ij(a){return new A.ii(a)},
P(a,b){return new A.bD(!1,null,b,a)},
aU(a,b,c){return new A.bD(!0,a,b,c)},
ie(a,b){return a},
aD(a){var s=null
return new A.ep(s,s,!1,s,s,a)},
pO(a,b){return new A.ep(null,null,!0,a,b,"Value not in range")},
af(a,b,c,d,e){return new A.ep(b,c,!0,a,d,"Invalid value")},
xo(a,b,c,d){if(a<b||a>c)throw A.b(A.af(a,b,c,d,null))
return a},
bc(a,b,c){if(0>a||a>c)throw A.b(A.af(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.af(b,a,c,"end",null))
return b}return c},
aQ(a,b){if(a<0)throw A.b(A.af(a,0,null,b,null))
return a},
x5(a,b){var s=b.b
return new A.fF(s,!0,a,null,"Index out of range")},
j_(a,b,c,d,e){return new A.fF(b,!0,a,e,"Index out of range")},
AQ(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.j_(a,b,c,d,e==null?"index":e))
return a},
a0(a){return new A.hj(a)},
xy(a){return new A.kc(a)},
u(a){return new A.bs(a)},
av(a){return new A.iA(a)},
wW(a){return new A.kJ(a)},
X(a,b,c){return new A.bb(a,b,c)},
AR(a,b,c){var s,r
if(A.wj(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.n([],t.s)
$.e3.push(a)
try{A.Dr(a,s)}finally{$.e3.pop()}r=A.qb(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
o5(a,b,c){var s,r
if(A.wj(a))return b+"..."+c
s=new A.O(b)
$.e3.push(a)
try{r=s
r.a=A.qb(r.a,a,", ")}finally{$.e3.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Dr(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.p(l.gn())
b.push(s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){b.push(A.p(p))
return}r=A.p(p)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
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
EP(a){var s=B.a.cz(a),r=A.en(s,null)
if(r==null)r=A.Bo(s)
if(r!=null)return r
throw A.b(A.X(a,null,null))},
el(a,b,c,d){var s
if(B.o===c){s=J.aL(a)
b=J.aL(b)
return A.qs(A.cs(A.cs($.lz(),s),b))}if(B.o===d){s=J.aL(a)
b=J.aL(b)
c=J.aL(c)
return A.qs(A.cs(A.cs(A.cs($.lz(),s),b),c))}s=J.aL(a)
b=J.aL(b)
c=J.aL(c)
d=J.aL(d)
d=A.qs(A.cs(A.cs(A.cs(A.cs($.lz(),s),b),c),d))
return d},
Bh(a){var s,r,q=$.lz()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.L)(a),++r)q=A.cs(q,J.aL(a[r]))
return A.qs(q)},
kj(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.xz(a4<a4?B.a.q(a5,0,a4):a5,5,a3).gm2()
else if(s===32)return A.xz(B.a.q(a5,5,a4),0,a3).gm2()}r=A.aG(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.yM(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.yM(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.a.a1(a5,"\\",n))if(p>0)h=B.a.a1(a5,"\\",p-1)||B.a.a1(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.a.a1(a5,"..",n)))h=m>n+2&&B.a.a1(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.a.a1(a5,"file",0)){if(p<=0){if(!B.a.a1(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.a.q(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.a.d4(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.a1(a5,"http",0)){if(i&&o+3===n&&B.a.a1(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.d4(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.a1(a5,"https",0)){if(i&&o+4===n&&B.a.a1(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.d4(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.bL(a4<a5.length?B.a.q(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.w2(a5,0,q)
else{if(q===0)A.f6(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.yf(a5,c,p-1):""
a=A.yd(a5,p,o,!1)
i=o+1
if(i<n){a0=A.en(B.a.q(a5,i,n),a3)
d=A.u8(a0==null?A.w(A.X("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.ye(a5,n,m,a3,j,a!=null)
a2=m<l?A.u9(a5,m+1,l,a3):a3
return A.i_(j,b,a,d,a1,a2,l<a4?A.yc(a5,l+1,a4):a3)},
BN(a){return A.w5(a,0,a.length,B.k,!1)},
ki(a,b,c){throw A.b(A.X("Illegal IPv4 address, "+a,b,c))},
BK(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.ki("each part must be in the range 0..255",a,r)}A.ki("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.ki(k,a,q)}l=p+1
s&2&&A.C(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.ki(k,a,q)
p=l}A.ki("IPv4 address should contain exactly 4 parts",a,q)},
BL(a,b,c){var s
if(b===c)throw A.b(A.X("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.BM(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.xC(a,b,c)
return!0},
BM(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
for(s=b;;s=r){if(s<c){r=s+1
q=a.charCodeAt(s)
if((q^48)<=9)continue
p=q|32
if(p>=97&&p<=102)continue
if(q===46){if(r-1===b)return new A.bb(o,a,r)
s=r
break}return new A.bb("Unexpected character",a,r-1)}if(s-1===b)return new A.bb(o,a,s)
return new A.bb("Missing '.' in IPvFuture address",a,s)}if(s===c)return new A.bb("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if((u.S.charCodeAt(a.charCodeAt(s))&16)!==0){++s
if(s<c)continue
return null}return new A.bb("Invalid IPvFuture address character",a,s)}},
xC(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.qB(a1)
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
$label0$0:{k=l^48
j=!1
if(k<=9)i=k
else{h=l|32
if(h>=97&&h<=102)i=h-87
else break $label0$0
m=j}if(p<o+4){n=n*16+i;++p
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.BK(a1,o,a3,s,q*2)
q+=2
p=a3
break}a0.$2(a,o)}break}g=q*2
s[g]=B.b.a2(n,8)
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
B.d.a6(s,b,16,s,c)
B.d.he(s,c,b,0)}}return s},
i_(a,b,c,d,e,f,g){return new A.hZ(a,b,c,d,e,f,g)},
y9(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
f6(a,b,c){throw A.b(A.X(c,a,b))},
CE(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.D(q,"/")){s=A.a0("Illegal path character "+q)
throw A.b(s)}}},
u8(a,b){if(a!=null&&a===A.y9(b))return null
return a},
yd(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.f6(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.CF(a,r,s)
if(p<s){o=p+1
q=A.yi(a,B.a.a1(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.BL(a,r,s)
m=B.a.q(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.bS(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.yi(a,B.a.a1(a,"25",o)?s+3:o,c,"%25")}else q=""
A.xC(a,b,s)
return"["+B.a.q(a,b,s)+q+"]"}return A.CK(a,b,c)},
CF(a,b,c){var s=B.a.bS(a,"%",b)
return s>=b&&s<c?s:c},
yi(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.O(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.w3(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.O("")
m=i.a+=B.a.q(a,r,s)
if(n)o=B.a.q(a,s,s+3)
else if(o==="%")A.f6(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else if(p<127&&(u.S.charCodeAt(p)&1)!==0){if(q&&65<=p&&90>=p){if(i==null)i=new A.O("")
if(r<s){i.a+=B.a.q(a,r,s)
r=s}q=!1}++s}else{l=1
if((p&64512)===55296&&s+1<c){k=a.charCodeAt(s+1)
if((k&64512)===56320){p=65536+((p&1023)<<10)+(k&1023)
l=2}}j=B.a.q(a,r,s)
if(i==null){i=new A.O("")
n=i}else n=i
n.a+=j
m=A.w1(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.q(a,b,c)
if(r<c){j=B.a.q(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
CK(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.w3(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.O("")
l=B.a.q(a,r,s)
if(!p)l=l.toLowerCase()
k=q.a+=l
j=3
if(m)n=B.a.q(a,s,s+3)
else if(n==="%"){n="%25"
j=1}q.a=k+n
s+=j
r=s
p=!0}else if(o<127&&(h.charCodeAt(o)&32)!==0){if(p&&65<=o&&90>=o){if(q==null)q=new A.O("")
if(r<s){q.a+=B.a.q(a,r,s)
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.f6(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.q(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.O("")
m=q}else m=q
m.a+=l
k=A.w1(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.q(a,b,c)
if(r<c){l=B.a.q(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
w2(a,b,c){var s,r,q
if(b===c)return""
if(!A.yb(a.charCodeAt(b)))A.f6(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.f6(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.q(a,b,c)
return A.CD(r?a.toLowerCase():a)},
CD(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
yf(a,b,c){if(a==null)return""
return A.i0(a,b,c,16,!1,!1)},
ye(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.i0(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.L(s,"/"))s="/"+s
return A.CJ(s,e,f)},
CJ(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.L(a,"/")&&!B.a.L(a,"\\"))return A.w4(a,!s||c)
return A.dW(a)},
u9(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.P("Both query and queryParameters specified",null))
return A.i0(a,b,c,256,!0,!1)}if(d==null)return null
return A.CH(d)},
CI(a){var s={},r=new A.O("")
s.a=""
a.a9(0,new A.ua(new A.ub(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
yc(a,b,c){if(a==null)return null
return A.i0(a,b,c,256,!0,!1)},
w3(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.uW(s)
p=A.uW(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.b6(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.q(a,b,b+3).toUpperCase()
return null},
w1(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.b.iN(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.cS(s,0,null)},
i0(a,b,c,d,e,f){var s=A.yh(a,b,c,d,e,f)
return s==null?B.a.q(a,b,c):s},
yh(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.w3(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.f6(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.w1(o)}if(p==null){p=new A.O("")
l=p}else l=p
l.a=(l.a+=B.a.q(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.q(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
yg(a){if(B.a.L(a,"."))return!0
return B.a.bR(a,"/.")!==-1},
dW(a){var s,r,q,p,o,n
if(!A.yg(a))return a
s=A.n([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.c.K(s,"/")},
w4(a,b){var s,r,q,p,o,n
if(!A.yg(a))return!b?A.ya(a):a
s=A.n([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.c.ga_(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.ya(s[0])
return B.c.K(s,"/")},
ya(a){var s,r,q=a.length
if(q>=2&&A.yb(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.q(a,0,s)+"%3A"+B.a.a7(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
CL(a,b){if(a.ua("package")&&a.c==null)return A.yO(b,0,b.length)
return-1},
CG(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.P("Invalid URL encoding",null))}}return s},
w5(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.k===d)return B.a.q(a,b,c)
else p=new A.bP(B.a.q(a,b,c))
else{p=A.n([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.P("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.P("Truncated URI",null))
p.push(A.CG(a,o+1))
o+=2}else p.push(r)}}return d.j1(p)},
yb(a){var s=a|32
return 97<=s&&s<=122},
xz(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.n([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.X(k,a,r))}}if(q<0&&r>b)throw A.b(A.X(k,a,r))
while(p!==44){j.push(r);++r
for(o=-1;r<s;++r){p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.c.ga_(j)
if(p!==44||r!==n+7||!B.a.a1(a,"base64",n+1))throw A.b(A.X("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.ak.ux(a,m,s)
else{l=A.yh(a,m,s,256,!0,!1)
if(l!=null)a=B.a.d4(a,m,s,l)}return new A.qA(a,j,c)},
yM(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
y2(a){if(a.b===7&&B.a.L(a.a,"package")&&a.c<=0)return A.yO(a.a,a.e,a.f)
return-1},
yO(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
D0(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
ay:function ay(a,b,c){this.a=a
this.b=b
this.c=c},
ro:function ro(){},
rp:function rp(){},
kK:function kK(a,b){this.a=a
this.$ti=b},
uc:function uc(a){this.a=a},
n4:function n4(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
b2:function b2(a,b,c){this.a=a
this.b=b
this.c=c},
aw:function aw(a){this.a=a},
rY:function rY(){},
a4:function a4(){},
ii:function ii(a){this.a=a},
cu:function cu(){},
bD:function bD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ep:function ep(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fF:function fF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hj:function hj(a){this.a=a},
kc:function kc(a){this.a=a},
bs:function bs(a){this.a=a},
iA:function iA(a){this.a=a},
jw:function jw(){},
he:function he(){},
kJ:function kJ(a){this.a=a},
bb:function bb(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(){},
m:function m(){},
V:function V(a,b,c){this.a=a
this.b=b
this.$ti=c},
U:function U(){},
j:function j(){},
lc:function lc(){},
q2:function q2(){this.b=this.a=0},
O:function O(a){this.a=a},
qB:function qB(a){this.a=a},
hZ:function hZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
ub:function ub(a,b){this.a=a
this.b=b},
ua:function ua(a){this.a=a},
qA:function qA(a,b,c){this.a=a
this.b=b
this.c=c},
bL:function bL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
kE:function kE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
iR:function iR(a,b){this.a=a
this.b=b},
B0(a){return a},
AU(a){return a},
AS(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.yp(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
AK(a){return new v.G.Promise(A.bw(new A.nu(a)))},
jt:function jt(a){this.a=a},
nu:function nu(a){this.a=a},
ns:function ns(a){this.a=a},
nt:function nt(a){this.a=a},
ut(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.CT,a)
s[$.e4()]=a
return s},
cc(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.CU,a)
s[$.e4()]=a
return s},
bw(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.CV,a)
s[$.e4()]=a
return s},
ln(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.CW,a)
s[$.e4()]=a
return s},
fa(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.CX,a)
s[$.e4()]=a
return s},
w6(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.CY,a)
s[$.e4()]=a
return s},
CT(a){return a.$0()},
CU(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
CV(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
CW(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
CX(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
CY(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
yC(a){return a==null||A.bN(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
da(a){if(A.yC(a))return a
return new A.v0(new A.d_(t.mp)).$1(a)},
wg(a,b){return a[b]},
yW(a,b,c){return a[b].apply(a,c)},
Eb(a,b){var s,r
if(b==null)return new a()
if(b instanceof Array)switch(b.length){case 0:return new a()
case 1:return new a(b[0])
case 2:return new a(b[0],b[1])
case 3:return new a(b[0],b[1],b[2])
case 4:return new a(b[0],b[1],b[2],b[3])}s=[null]
B.c.G(s,b)
r=a.bind.apply(a,s)
String(r)
return new r()},
a2(a,b){var s=new A.r($.v,b.i("r<0>")),r=new A.aI(s,b.i("aI<0>"))
a.then(A.d8(new A.v4(r),1),A.d8(new A.v5(r),1))
return s},
yB(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
uJ(a){if(A.yB(a))return a
return new A.uK(new A.d_(t.mp)).$1(a)},
v0:function v0(a){this.a=a},
v4:function v4(a){this.a=a},
v5:function v5(a){this.a=a},
uK:function uK(a){this.a=a},
z9(a,b){return Math.max(a,b)},
xm(){return B.ap},
xn(){return $.vb()},
tt:function tt(){},
tu:function tu(a){this.a=a},
iO:function iO(){},
W:function W(){},
lT:function lT(a){this.a=a},
lU:function lU(a){this.a=a},
lV:function lV(a,b){this.a=a
this.b=b},
lW:function lW(a){this.a=a},
lX:function lX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lY:function lY(a){this.a=a},
iL:function iL(){},
fJ:function fJ(a,b){this.a=a
this.$ti=b},
dv:function dv(a,b){this.a=a
this.$ti=b},
f5:function f5(){},
es:function es(a,b){this.a=a
this.$ti=b},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
fS:function fS(a,b,c){this.a=a
this.b=b
this.$ti=c},
iK:function iK(){},
xf(){throw A.b(A.a0(u.O))},
jr:function jr(){},
kg:function kg(){},
au(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.cS(m,0,null)},
bR:function bR(a){this.a=a},
c4:function c4(){this.a=null},
iX:function iX(){},
nB:function nB(){},
d2(a){var s=new Uint32Array(A.bv(A.n([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.l5(s,r,a,q,new Uint32Array(16))},
l4:function l4(){},
tP:function tP(){},
l5:function l5(a,b,c,d,e){var _=this
_.y=a
_.z=b
_.a=c
_.c=null
_.d=d
_.e=0
_.f=e
_.r=0
_.w=!1},
jO:function jO(a,b){this.a=a
this.b=b},
io:function io(){},
ip:function ip(){},
iq:function iq(){},
ir:function ir(){},
lN:function lN(){},
yR(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.jO("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.dh)){s=J.am(a)
if(B.a.L(s,"TypeError: "))s=B.a.a7(s,11)
a=new A.dh(s,b.b)}return a},
yG(a,b,c){A.wV(A.yR(a,c),b)},
CS(a,b){return new A.cz(new A.un(a,b),t.fb)},
fc(a,b,c){return A.DA(a,b,c)},
DA(a0,a1,a2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$fc=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:d={}
c=a1.body
b=c==null?null:c.getReader()
s=b==null?3:4
break
case 3:s=5
return A.a(a2.p(),$async$fc)
case 5:s=1
break
case 4:d.a=null
d.b=d.c=!1
a2.f=new A.uv(d)
a2.r=new A.uw(d,b,a0)
c=t.Z,k=t.m,j=t.D,i=t.Q
case 6:n=null
p=9
s=12
return A.a(A.a2(b.read(),k),$async$fc)
case 12:n=a4
p=2
s=11
break
case 9:p=8
a=o.pop()
m=A.E(a)
l=A.ad(a)
s=!d.c?13:14
break
case 13:d.b=!0
c=A.yR(m,a0)
k=l
j=a2.b
if(j>=4)A.w(a2.bk())
if((j&1)!==0){g=a2.a
if((j&8)!==0)g=g.c
g.b8(c,k==null?B.t:k)}s=15
return A.a(a2.p(),$async$fc)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a2.rC()
s=7
break}else{f=n.value
f.toString
c.a(f)
e=a2.b
if(e>=4)A.w(a2.bk())
if((e&1)!==0){g=a2.a;((e&8)!==0?g.c:g).b9(f)}}f=a2.b
if((f&1)!==0){g=a2.a
e=(((f&8)!==0?g.c:g).e&4)!==0
f=e}else f=(f&2)===0
s=f?16:17
break
case 16:f=d.a
s=18
return A.a((f==null?d.a=new A.aI(new A.r($.v,j),i):f).a,$async$fc)
case 18:case 17:if((a2.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fc,r)},
iu:function iu(a){this.b=!1
this.c=a},
lQ:function lQ(a){this.a=a},
un:function un(a,b){this.a=a
this.b=b},
uv:function uv(a){this.a=a},
uw:function uw(a,b,c){this.a=a
this.b=b
this.c=c},
cC:function cC(a){this.a=a},
lS:function lS(a){this.a=a},
wO(a,b){return new A.dh(a,b)},
dh:function dh(a,b){this.a=a
this.b=b},
jl:function jl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
Bc(a,b){var s=t.N,r=A.n([],t.e8),q=$.wo()
if(!q.b.test(a))A.w(A.aU(a,"method","Not a valid method"))
return new A.oU(A.G(s,s),r,a,b,A.jd(new A.iq(),new A.ir(),s,s))},
oU:function oU(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
oV:function oV(a,b){this.a=a
this.b=b},
Bt(a,b){var s=new Uint8Array(0),r=$.wo()
if(!r.b.test(a))A.w(A.aU(a,"method","Not a valid method"))
r=t.N
return new A.pQ(s,a,b,A.jd(new A.iq(),new A.ir(),r,r))},
pQ:function pQ(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
hg:function hg(){},
k4:function k4(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
Al(a){return a.toLowerCase()},
fp:function fp(a,b,c){this.a=a
this.c=b
this.$ti=c},
Ba(a){return A.F1("media type",a,new A.oN(a))},
vy(a,b,c){var s=t.N
if(c==null)s=A.G(s,s)
else{s=new A.fp(A.Ec(),A.G(s,t.gc),t.kj)
s.G(0,c)}return new A.eg(a.toLowerCase(),b.toLowerCase(),new A.eF(s,t.ph))},
eg:function eg(a,b,c){this.a=a
this.b=b
this.c=c},
oN:function oN(a){this.a=a},
oP:function oP(a){this.a=a},
oO:function oO(){},
Eq(a){var s
a.lz($.zW(),"quoted string")
s=a.gjj().h(0,0)
return A.zj(B.a.q(s,1,s.length-1),$.zV(),new A.uR(),null)},
uR:function uR(){},
a9(a,b){var s,r,q,p,o,n,m
if(b==null)a.a+="null"
else if(A.bN(b)){s=b?"true":"false"
a.a+=s}else if(A.az(b))a.a+=B.b.l(b)
else if(typeof b=="number"){s=isFinite(b)&&b===B.u.v7(b)&&Math.abs(b)<1e15
r=a.a
if(s)a.a=r+B.b.l(B.u.lX(b))
else a.a=r+B.u.l(b)}else if(typeof b=="number")a.a+=B.u.l(b)
else if(typeof b=="string"){s=B.e.a8(b,null)
a.a+=s}else if(t.j.b(b)){a.a+="["
for(q=0;s=J.I(b),q<s.gk(b);++q){if(q>0)a.a+=","
A.a9(a,s.h(b,q))}a.a+="]"}else if(t.f.b(b)){p=J.aB(b.gR(),new A.uE(),t.N).d8(0)
B.c.b7(p)
a.a+="{"
for(s=p.length,o=!0,n=0;n<p.length;p.length===s||(0,A.L)(p),++n,o=!1){m=p[n]
if(!o)a.a+=","
r=B.e.a8(m,null)
a.a=(a.a+=r)+":"
A.a9(a,b.h(0,m))}a.a+="}"}else throw A.b(A.P("Cannot canonicalize value of type "+J.bC(b).l(0),null))},
uE:function uE(){},
BA(a){var s,r,q,p=A.ac("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0).dK(a)
if(p==null)return B.bQ
s=p.b
r=s[1]
r.toString
r=A.aq(r)
q=s[2]
q.toString
q=A.aq(q)
s=s[3]
s=A.en(s==null?"":s,null)
return new A.hN(r,q,s==null?0:s)},
dE(a,b){return A.BB(a,b)},
BB(a1,a2){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dE=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:b=A
a=J
a0=J
s=3
return A.a(a1.bw("SELECT sqlite_version() AS v"),$async$dE)
case 3:h=b.t(a.ae(a0.bB(a4),"v"))
g=t.lS
b=A
a=A
a0=J
s=4
return A.a(a1.bw("PRAGMA compile_options"),$async$dE)
case 4:f=b.Q(new a.bt(a0.aB(a4,new A.pZ(),t.X),g),g.i("m.E"))
e=B.c.dE(f,new A.q_())
s=!e?5:6
break
case 5:p=8
s=11
return A.a(a1.Z("CREATE VIRTUAL TABLE lp__fts5_probe USING fts5(lp__probe)"),$async$dE)
case 11:s=12
return A.a(a1.Z("DROP TABLE lp__fts5_probe"),$async$dE)
case 12:e=!0
p=2
s=10
break
case 8:p=7
d=o.pop()
e=!1
s=10
break
case 7:s=2
break
case 10:case 6:n=null
g=a2===B.aD
s=g?13:14
break
case 13:p=16
s=19
return A.a(a1.bw("PRAGMA journal_mode"),$async$dE)
case 19:m=a4
if(J.fk(m))n=A.R(J.bB(J.bB(m).gb6()))
p=2
s=18
break
case 16:p=15
c=o.pop()
n=null
s=18
break
case 15:s=2
break
case 18:case 14:k=A.BA(h)
j=k.a
if(j<=3)i=j===3&&k.b>=37
else i=!0
g=g&&J.y(n,"wal")
q=new A.k1(h,i,g,e,a2)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dE,r)},
jB:function jB(a,b){this.a=a
this.b=b},
k1:function k1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pZ:function pZ(){},
q_:function q_(){},
a3:function a3(a,b){this.a=a
this.b=b},
lZ:function lZ(a){this.a=a},
wG(a){return new Uint8Array(A.bv(a))},
BT(a,b,c){var s,r,q,p,o,n,m=new Uint8Array(16)
a.es(m,m)
s=new Uint8Array(16)
B.d.aa(s,0,12,b)
s[15]=1
r=A.xE(a,s,c)
q=A.xG(m,r)
p=new Uint8Array(16)
o=new Uint8Array(16)
a.es(s,o)
for(n=0;n<16;++n)p[n]=q[n]^o[n]
return new A.aF(r,p)},
BS(a,b,c,d){var s,r,q,p,o,n=new Uint8Array(16)
a.es(n,n)
s=new Uint8Array(16)
B.d.aa(s,0,12,b)
s[15]=1
r=A.xG(n,c)
q=new Uint8Array(16)
a.es(s,q)
for(p=0,o=0;o<16;++o)p|=r[o]^q[o]^d[o]
if(p!==0)return null
return A.xE(a,s,c)},
xE(a,b,c){var s,r,q,p,o,n=c.length,m=new Uint8Array(n),l=new Uint8Array(A.bv(b))
A.xH(l)
s=new Uint8Array(16)
for(r=0;r<n;){a.es(l,s)
A.xH(l)
q=Math.min(16,n-r)
for(p=0;p<q;++p){o=r+p
m[o]=c[o]^s[p]}r+=q}return m},
xH(a){var s,r,q
for(s=a.$flags|0,r=15;r>=12;--r){q=a[r]
s&2&&A.C(a)
a[r]=q+1&255
if(a[r]!==0)break}},
xG(a,b){var s,r,q,p,o,n,m,l=new Uint8Array(16),k=new Uint8Array(16)
for(s=b.length,r=0;r<s;r=p){q=Math.min(16,s-r)
B.d.he(k,0,16,0)
p=r+q
B.d.aa(k,0,q,new Uint8Array(b.subarray(r,A.cb(r,p,s))))
for(o=0;o<16;++o)l[o]=l[o]^k[o]
A.xF(l,a)}n=new Uint8Array(16)
m=s*8
for(o=7;o>=0;--o)n[15-o]=B.b.iN(m,o*8)&255
for(o=0;o<16;++o)l[o]=l[o]^n[o]
A.xF(l,a)
return l},
xF(a,b){var s,r,q,p=t.t,o=A.n([(b[0]<<24|b[1]<<16|b[2]<<8|b[3])>>>0,(b[4]<<24|b[5]<<16|b[6]<<8|b[7])>>>0,(b[8]<<24|b[9]<<16|b[10]<<8|b[11])>>>0,(b[12]<<24|b[13]<<16|b[14]<<8|b[15])>>>0],p),n=A.n([0,0,0,0],p)
for(s=0;s<128;++s){if((B.b.iN(a[s>>>3],7-(s&7))&1)!==0){n[0]=(n[0]^o[0])>>>0
n[1]=(n[1]^o[1])>>>0
n[2]=(n[2]^o[2])>>>0
n[3]=(n[3]^o[3])>>>0}p=o[3]
r=o[2]
o[3]=(p>>>1|(r&1)<<31)>>>0
q=o[1]
o[2]=(r>>>1|(q&1)<<31)>>>0
r=o[0]
o[1]=(q>>>1|(r&1)<<31)>>>0
r=r>>>1
o[0]=r
if((p&1)!==0)o[0]=(r^3774873600)>>>0}for(p=a.$flags|0,s=0;s<4;++s){r=s*4
q=n[s]
p&2&&A.C(a)
a[r]=q>>>24&255
a[r+1]=q>>>16&255
a[r+2]=q>>>8&255
a[r+3]=q&255}},
xD(a){return(B.i[a>>>24&255]<<24|B.i[a>>>16&255]<<16|B.i[a>>>8&255]<<8|B.i[a&255])>>>0},
r5(a){var s=B.i[a>>>24&255]
return(A.dL(s)<<24|s<<16|s<<8|A.dL(s)^s)>>>0},
r6(a){var s=B.i[a>>>16&255]
return((A.dL(s)^s)<<24|A.dL(s)<<16|s<<8|s)>>>0},
r7(a){var s=B.i[a>>>8&255]
return(s<<24|(A.dL(s)^s)<<16|A.dL(s)<<8|s)>>>0},
r8(a){var s=B.i[a&255]
return(s<<24|s<<16|(A.dL(s)^s)<<8|A.dL(s))>>>0},
dL(a){var s=a<<1
return(a&128)!==0?(s^283)&255:s&255},
lD:function lD(a,b){this.b=a
this.c=b},
r4:function r4(a){this.a=a},
uP(a2,a3,a4,a5){var s=0,r=A.h(t.G),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$uP=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)$async$outer:switch(s){case 0:a0=a4.b
a1=a4.r
if(a0==="explain")a1="EXPLAIN QUERY PLAN "+a1
if(a0==="query"&&a5===0){q=A.l(["items",A.n([],t.d),"lastRow",null,"hasMore",!1],t.N,t.X)
s=1
break}s=3
return A.a(a3.$2(a1,a4.w),$async$uP)
case 3:p=a7
switch(a0){case"query":a0=a5==null
o=!a0&&J.ar(p)>a5
n=a0?p:J.vf(p,a5).d8(0)
m=A.z2(a2.af(a4.d).a,n,a2.z,a2.Q)
l=a4.y
if(l==null)k=m
else{a0=A.n([],t.d)
for(j=m.length,i=l.$ti,h=i.i("a5<A.E>"),i=i.i("A.E"),g=t.N,f=t.X,e=0;e<m.length;m.length===j||(0,A.L)(m),++e){d=m[e]
c=A.G(g,f)
for(b=new A.a5(l,l.gk(0),h);b.m();){a=b.d
if(a==null)a=i.a(a)
if(d.I(a))c.j(0,a,d.h(0,a))}a0.push(c)}k=a0}q=A.l(["items",k,"lastRow",o&&m.length!==0?B.c.ga_(m):null,"hasMore",o],t.N,t.X)
s=1
break $async$outer
case"count":case"countDistinct":a0=A.wf(p)
q=A.l(["value",a0==null?0:a0],t.N,t.X)
s=1
break $async$outer
case"distinct":a0=[]
for(j=J.M(p);j.m();){i=j.gn()
if(i.gW(i))a0.push(J.bB(i.gb6()))}q=A.l(["values",a0],t.N,t.X)
s=1
break $async$outer
case"ids":a0=A.n([],t.s)
for(j=J.M(p);j.m();)a0.push(A.t(j.gn().h(0,"id")))
q=A.l(["ids",a0],t.N,t.X)
s=1
break $async$outer
case"explain":a0=t.X
q=A.l(["plan",J.aB(p,new A.uQ(),a0).K(0,"\n")],t.N,a0)
s=1
break $async$outer
case"sum":case"avg":case"min":case"max":a0=J.I(p)
q=A.l(["value",a0.gB(p)?null:J.ae(a0.gC(p),"v")],t.N,t.X)
s=1
break $async$outer
case"search":a0=A.n([],t.d)
for(j=J.M(p),i=t.N,h=t.X;j.m();){g=j.gn()
a0.push(A.l(["id",A.t(g.h(0,"id")),"score",g.h(0,"score")],i,h))}q=A.l(["results",a0],i,h)
s=1
break $async$outer
default:throw A.b(A.u("Unsupported compiled operation: "+a0))}case 1:return A.e(q,r)}})
return A.f($async$uP,r)},
uQ:function uQ(){},
wU(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
iB:function iB(a,b){this.a=a
this.b=b},
iM:function iM(a,b){this.a=a
this.b=b
this.c=!0},
nd:function nd(){},
nc:function nc(){},
ne:function ne(){},
Az(a){return'"'+A.H(a,'"','""')+'"'},
Ay(a,b){var s,r,q,p=a.a,o=J.I(p),n=b.a,m=J.I(n)
if(o.gk(p)>=m.gk(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gk(p);++q)if(!J.y(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
m8:function m8(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
n5:function n5(a){this.a=a},
nb:function nb(a){this.a=a},
na:function na(){},
n9:function n9(a){this.a=a},
n6:function n6(){},
n7:function n7(){},
n8:function n8(){},
ax(a,b){return new A.km(a)},
q3(a){return new A.dF(a)},
jK(a){return new A.jJ(a)},
cO(a){return new A.hb(a)},
wR(a){return new A.iC(a)},
zn(a,b){var s,r="UNIQUE constraint failed",q=J.am(a),p=a instanceof A.cQ,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.D(q,"PRIMARY KEY")&&!B.a.D(q,r)
else p=!0
if(p)return new A.jD("PRIMARY KEY constraint violated.")
if(o===2067||B.a.D(q,r)){s=A.yv(q,"UNIQUE constraint failed:")
b.h(0,s)
return new A.kd('Unique constraint violated on "'+s+'".')}if(o===1299||B.a.D(q,"NOT NULL constraint failed")){p=A.yv(q,"NOT NULL constraint failed:")
return new A.js('NOT NULL constraint violated on "'+p+'".')}if(B.a.D(q,"CHECK constraint failed")||o===275||n===275)return new A.ix("CHECK constraint violated.")
if(B.a.D(q,"FOREIGN KEY")||o===787||n===787)return new A.iV("FOREIGN KEY constraint violated.")
if(B.a.D(q,"database or disk is full"))return new A.dF("Database full: "+A.p(a))
return new A.dF("SQLite error: "+A.p(a))},
yv(a,b){var s,r,q,p,o,n,m=B.a.bR(a,b)
if(m<0)return"?"
s=B.a.a7(a,m+b.length)
r=s.length
q=B.a.bR(s,",")
if(q>=0)r=q
p=B.a.bR(s,"(")
s=B.a.cz(B.a.q(s,0,p>=0&&p<r?p:r))
o=B.a.dP(s,".")
s=B.a.cz(o>=0?B.a.a7(s,o+1):s)
if(B.a.L(s,'"')&&B.a.cm(s,'"')){n=B.a.q(s,1,s.length-1)
s=A.H(n,'""','"')}return s.length===0?"?":s},
jf:function jf(){},
km:function km(a){this.a=a},
kd:function kd(a){this.a=a},
js:function js(a){this.a=a},
ix:function ix(a){this.a=a},
jD:function jD(a){this.a=a},
iV:function iV(a){this.a=a},
dF:function dF(a){this.a=a},
jJ:function jJ(a){this.a=a},
jR:function jR(a){this.a=a},
hb:function hb(a){this.a=a},
iW:function iW(a){this.a=a},
iC:function iC(a){this.a=a},
ck(a,b,c,d,e,f,g,h){var s=null,r=null
return A.B9(a,b,c,d,e,f,g,h)},
B9(a1,a2,a3,a4,a5,a6,a7,a8){var s=0,r=A.h(t.kM),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$ck=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:d=null
c=null
b=null
b=a2
p=4
s=7
return A.a(A.c5(b,a7),$async$ck)
case 7:s=8
return A.a(A.dE(b,a7),$async$ck)
case 8:n=b0
i=0
case 9:if(!(i<3)){s=11
break}m=B.bq[i]
s=12
return A.a(b.Z(m),$async$ck)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.bz[i]
s=16
return A.a(b.Z(l),$async$ck)
case 16:case 14:++i
s=13
break
case 15:h=new A.jz()
g=new A.je(a6,b,n,h,new A.lZ(A.ey(null,null,t.iv)),a5,a3,c,a1,a4,d,A.G(t.N,t.nv))
g.d=new A.r0(A.cg(null,t.H),h.guS())
h=$.vb()
g.as=new A.p6(g,h)
g.at=new A.p_(g,h)
g.ax=new A.mm(g)
g.ay=new A.oi(g,a1)
k=g
s=17
return A.a(A.jh(b),$async$ck)
case 17:h=a8.length,i=0
case 18:if(!(i<a8.length)){s=20
break}j=a8[i]
s=21
return A.a(k.b4(j),$async$ck)
case 21:case 19:a8.length===h||(0,A.L)(a8),++i
s=18
break
case 20:q=k
s=1
break
p=2
s=6
break
case 4:p=3
a=o.pop()
p=23
s=26
return A.a(b.p(),$async$ck)
case 26:p=3
s=25
break
case 23:p=22
a0=o.pop()
s=25
break
case 22:s=3
break
case 25:throw a
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ck,r)},
c5(a,b){return A.B8(a,b)},
B8(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
var $async$c5=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:s=b===B.aD?2:3
break
case 2:q=5
s=8
return A.a(a.Z("PRAGMA journal_mode=WAL"),$async$c5)
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
return A.a(a.Z("PRAGMA wal_autocheckpoint=1000"),$async$c5)
case 9:s=10
return A.a(a.Z("PRAGMA mmap_size=67108864"),$async$c5)
case 10:case 3:s=11
return A.a(a.Z("PRAGMA synchronous=NORMAL"),$async$c5)
case 11:s=12
return A.a(a.Z("PRAGMA foreign_keys=ON"),$async$c5)
case 12:s=13
return A.a(a.Z("PRAGMA busy_timeout=5000"),$async$c5)
case 13:s=14
return A.a(a.Z("PRAGMA cache_size=-8000"),$async$c5)
case 14:s=15
return A.a(a.Z("PRAGMA temp_store=MEMORY"),$async$c5)
case 15:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$c5,r)},
jh(a){var s=0,r=A.h(t.H),q,p
var $async$jh=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.eM("lp_migrations","version = ?",[1]),$async$jh)
case 3:if(p.fk(c)){s=1
break}s=4
return A.a(a.aj(0,"lp_migrations",A.l(["version",1,"name","core:v1","applied_at",Date.now(),"duration_ms",0],t.N,t.X)),$async$jh)
case 4:case 1:return A.e(q,r)}})
return A.f($async$jh,r)},
nf:function nf(a,b){this.a=a
this.b=b},
k2:function k2(a,b){this.a=a
this.d=b},
pt:function pt(a){this.a=a},
je:function je(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
_.cx="NORMAL"},
oJ:function oJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oG:function oG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oF:function oF(a,b,c){this.a=a
this.b=b
this.c=c},
oI:function oI(a,b){this.a=a
this.b=b},
oH:function oH(a,b,c){this.a=a
this.b=b
this.c=c},
oR(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m
var $async$oR=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=t.h2
m=A.Q(new A.c_(B.bv,new A.oS(c,b),n),n.i("m.E"))
B.c.df(m,new A.oT())
for(n=b.a,q='Migration gap for "'+n+'": expected v'+(c+1)+", found v";0<m.length;){p=m[0]
p.geV()
o=A.cO(q+A.p(p.geV())+".")
throw A.b(o)}s=2
return A.a(a.b.F("lp_stores",A.l(["schema_ver",b.b],t.N,t.X),"store = ?",[n]),$async$oR)
case 2:return A.e(null,r)}})
return A.f($async$oR,r)},
jk(a,b,c,d,e){var s=0,r=A.h(t.H),q,p
var $async$jk=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.bw("SELECT MAX(version) AS m FROM lp_migrations"),$async$jk)
case 2:q=p.wf(g)
if(q==null)q=0
s=3
return A.a(a.aj(0,"lp_migrations",A.l(["version",q+1,"name",d,"applied_at",Date.now(),"duration_ms",b],t.N,t.X)),$async$jk)
case 3:return A.e(null,r)}})
return A.f($async$jk,r)},
oS:function oS(a,b){this.a=a
this.b=b},
oT:function oT(){},
jz:function jz(){var _=this
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.f=_.e=_.d=_.c=_.b=_.a=0},
pN:function pN(a,b,c,d,e){var _=this
_.b=a
_.d=b
_.r=c
_.w=d
_.y=e},
AG(a){var s,r=null,q=A.ea(B.bt,A.t(a.h(0,"kind"))),p=A.t(a.h(0,"name")),o=J.y(a.h(0,"required"),!0),n=J.y(a.h(0,"encrypted"),!0)
switch(q.a){case 0:return new A.b9(p,B.a0,o,J.y(a.h(0,"uniqueWhenActive"),!0),n,r,r,!1)
case 1:return new A.b9(p,B.a1,o,!1,n,r,r,!1)
case 2:return new A.b9(p,B.a2,o,!1,n,r,r,!1)
case 3:return new A.b9(p,B.T,o,!1,!1,r,r,!1)
case 4:return new A.b9(p,B.a3,o,!1,!1,r,r,!1)
case 5:s=t.N
return new A.b9(p,B.x,o,!1,!1,A.cK(J.e5(t.j.a(a.h(0,"enumValues")),s),s),r,!1)
case 6:return new A.b9(p,B.a4,!1,!1,n,r,r,!1)
case 7:return new A.b9(p,B.a5,!1,!1,n,r,r,!1)
case 8:return new A.b9(p,B.B,!1,!1,!1,r,A.t(a.h(0,"refTo")),J.y(a.h(0,"enforceFk"),!0))}},
wQ(a){var s,r,q,p,o,n,m=A.t(a.h(0,"name")),l=A.Z(a.h(0,"version")),k=A.n([],t.mK)
for(s=t.j,r=J.M(s.a(a.h(0,"fields"))),q=t.G;r.m();)k.push(A.AG(q.a(r.gn())))
r=A.n([],t.mr)
for(p=J.M(s.a(a.h(0,"indexes"))),o=t.N;p.m();){n=q.a(p.gn())
r.push(new A.ed(J.e5(s.a(n.h(0,"columns")),o),J.y(n.h(0,"unique"),!0),A.ea(B.bp,A.t(n.h(0,"scope")))))}p=J.y(a.h(0,"keepUnsyncedArchives"),!0)
return new A.bQ(m,l,k,r,p,t.f.b(a.h(0,"fts"))?new A.np(J.e5(s.a(q.a(a.h(0,"fts")).h(0,"fields")),o)):null)},
DR(a,b,c,d){var s
for(s=c+1;s<=d;++s)B.bG.h(0,s)
return b},
bF:function bF(a,b){this.a=a
this.b=b},
b9:function b9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
fG:function fG(a,b){this.a=a
this.b=b},
ed:function ed(a,b,c){this.a=a
this.b=b
this.c=c},
np:function np(a){this.a=a},
mj:function mj(){},
bQ:function bQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=e
_.w=f},
dy:function dy(a,b){this.a=a
this.b=b},
e8:function e8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m6:function m6(a,b){this.a=a
this.b=b},
m4:function m4(a,b,c){this.a=a
this.b=b
this.c=c},
m3:function m3(a,b){this.a=a
this.b=b},
m7:function m7(a,b){this.a=a
this.b=b},
m5:function m5(a,b){this.a=a
this.b=b},
m2:function m2(){},
qu(a){var s=$.v.h(0,$.wr())
if(s instanceof A.c7&&s.a===a)return s
return null},
c7:function c7(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function jv(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.r=_.f=_.e=null
_.x=_.w=!1
_.y=null},
oZ:function oZ(a){this.a=a},
r0:function r0(a,b){this.a=a
this.b=0
this.c=b},
r1:function r1(a,b,c){this.a=a
this.b=b
this.c=c},
lP:function lP(){},
fz:function fz(a){this.d=a},
nh:function nh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nj:function nj(a,b){this.a=a
this.b=b},
nk:function nk(a,b,c){this.a=a
this.b=b
this.c=c},
ni:function ni(a,b,c){this.a=a
this.b=b
this.c=c},
nl:function nl(){},
wZ(a){var s,r=A.t(a.h(0,"ref_id")),q=A.t(a.h(0,"store")),p=A.t(a.h(0,"record_id")),o=A.t(a.h(0,"field")),n=A.t(a.h(0,"hash")),m=A.R(a.h(0,"remote_name")),l=A.t(a.h(0,"state")),k=A.a7(a.h(0,"next_retry_at"))
if(k==null)k=0
s=A.a7(a.h(0,"attempt_count"))
if(s==null)s=0
return new A.ba(r,q,p,o,n,m,l,k,s,A.R(a.h(0,"last_error")))},
ba:function ba(a,b,c,d,e,f,g,h,i,j){var _=this
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
oi:function oi(a,b){this.a=a
this.b=b},
oj:function oj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ok:function ok(a){this.a=a},
ol:function ol(a){this.a=a},
om:function om(a){this.a=a},
on:function on(a){this.a=a},
oo:function oo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qQ:function qQ(a){this.b=a},
qR:function qR(a){this.a=a},
xw(a){var s=Date.now()
return new A.kb(a,new A.b2(s,0,!1))},
kb:function kb(a,b){this.a=a
this.c=b},
lL:function lL(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
jC:function jC(a,b,c,d,e,f,g,h){var _=this
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
pr:function pr(a,b){this.a=a
this.b=b},
ps:function ps(){},
pg:function pg(a,b,c){this.a=a
this.b=b
this.c=c},
ph:function ph(a){this.a=a},
h4:function h4(a,b){this.a=a
this.b=b},
f1:function f1(a,b){this.a=a
this.b=b},
pi:function pi(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1
_.w=_.r=null
_.x=f
_.y=0},
pn:function pn(){},
po:function po(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pj:function pj(a,b,c){this.a=a
this.b=b
this.c=c},
pk:function pk(){},
pl:function pl(a,b,c){this.a=a
this.b=b
this.c=c},
pm:function pm(){},
pp:function pp(a){this.a=a},
pq:function pq(a){this.a=a},
tV:function tV(a){this.a=a
this.b=null},
iY(a,b){return new A.ci(a)},
fD:function fD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cF:function cF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fC:function fC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
ci:function ci(a){this.a=a},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
pd:function pd(a){this.a=a},
pe:function pe(a){this.a=a},
vi(a){var s,r="base_json",q="local_json",p="remote_json",o="dirty_local",n="dirty_remote",m="resolved_json",l=new A.mk(),k=new A.ml(),j=A.t(a.h(0,"store")),i=A.t(a.h(0,"record_id")),h=l.$2(a.h(0,r),r),g=l.$2(a.h(0,q),q),f=l.$2(a.h(0,p),p),e=k.$2(a.h(0,o),o)
k=k.$2(a.h(0,n),n)
s=A.Z(a.h(0,"detected_at"))
return new A.bE(j,i,h,g,f,e,k,s,a.h(0,m)!=null?l.$2(a.h(0,m),m):null)},
bE:function bE(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
mk:function mk(){},
ml:function ml(){},
mm:function mm(a){this.a=a},
mr:function mr(a,b,c){this.a=a
this.b=b
this.c=c},
mq:function mq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mo:function mo(a,b){this.a=a
this.b=b},
mp:function mp(a){this.a=a},
mn:function mn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
k8:function k8(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.x=_.w=_.r=_.f=_.e=$
_.y=e
_.at=_.as=_.Q=_.z=!1
_.ax=f
_.ay=g
_.CW=_.ch=null
_.cx=!1
_.cy=h
_.fx=_.fr=_.dy=_.dx=_.db=null
_.fy=!1
_.go=i
_.id=j
_.k1=null
_.k2=k
_.k3=l},
qo:function qo(a){this.a=a},
qh:function qh(a){this.a=a},
qm:function qm(a,b){this.a=a
this.b=b},
ql:function ql(a){this.a=a},
qn:function qn(a){this.a=a},
qi:function qi(a,b){this.a=a
this.b=b},
qj:function qj(){},
qk:function qk(){},
cL(a){return new A.fT(a)},
zb(a,b){var s,r,q,p,o,n,m,l,k,j=null
try{s=A.e2(a,b)
r=A.b0(a,s)
m=new A.O("")
A.a9(m,r)
l=m.a
q=l.charCodeAt(0)==0?l:l
p=A.au(B.l.u(B.f.u(q)).a)
return new A.dA(b,s,q,p,j)}catch(k){l=A.E(k)
if(l instanceof A.fT){o=l
return new A.dA(b,j,j,j,o.a)}else{n=l
l=A.p(n)
return new A.dA(b,j,j,j,l)}}},
EO(a,b){var s,r=A.n([],t.i7)
for(s=J.M(b);s.m();)r.push(A.zb(a,s.gn()))
return r},
wl(a,b){var s=0,r=A.h(t.eT),q
var $async$wl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.EO(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wl,r)},
e2(a,b){var s,r,q,p,o,n,m,l,k,j="archived",i=t.N,h=t.X,g=A.b4(b.d,i,h),f=a.gj0(),e=g.h(0,"id")
if(e==null){s=b.a
g.j(0,"id",s)}else{s=b.a
if(!J.y(e,s))throw A.b(A.cL('data.id "'+A.p(e)+'" does not match record id "'+s+'"'))}r=A.l(["id",s],i,h)
for(i=a.c,h=i.length,s=t.j,q=t.f,p=0;p<i.length;i.length===h||(0,A.L)(i),++p){o=i[p]
n=o.a
m=g.h(0,n)
if(m==null){if(o.c)throw A.b(A.cL('Required field "'+n+'" is missing.'))
r.j(0,n,null)
continue}l=o.b
switch(l.a){case 0:case 5:case 8:if(typeof m!="string")throw A.b(A.cL('Field "'+n+'" must be a string, got '+J.bC(m).l(0)+"."))
if(l===B.x){l=o.f
l.toString
l=!B.c.D(l,m)}else l=!1
if(l)throw A.b(A.cL('Field "'+n+'" has unknown enum value "'+m+'".'))
break
case 1:case 4:if(!A.az(m))throw A.b(A.cL('Field "'+n+'" must be an integer, got '+J.bC(m).l(0)+"."))
break
case 2:if(typeof m!="number")throw A.b(A.cL('Field "'+n+'" must be a number, got '+J.bC(m).l(0)+"."))
break
case 3:if(!A.bN(m))throw A.b(A.cL('Field "'+n+'" must be a boolean, got '+J.bC(m).l(0)+"."))
break
case 6:if(!q.b(m)&&!s.b(m))throw A.b(A.cL('Field "'+n+'" must be JSON, got '+J.bC(m).l(0)+"."))
break
case 7:if(!s.b(m))throw A.b(A.cL('Field "'+n+'" must be a JSON array, got '+J.bC(m).l(0)+"."))
break}r.j(0,n,m)}for(i=new A.aN(g,A.o(g).i("aN<1,2>")).gv(0);i.m();){k=i.d
h=k.a
if(h==="id"||h==="archived"||f.D(0,h))continue
r.j(0,h,k.b)}r.j(0,j,J.y(g.h(0,j),!0))
return r},
fT:function fT(a){this.a=a},
dA:function dA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dZ(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.bo(i),g=A.ob(a.gR(),i)
g.G(0,b.gR())
for(g=A.tE(g,g.r,A.o(g).c),s=g.$ti.c,r=t.f,q=t.X;g.m();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.E.ah(o,n)){h.t(0,p)
if(r.b(o)&&r.b(n)){m=A.dZ(A.b4(o,i,q),A.b4(n,i,q))
for(l=A.o(m),k=new A.d1(m,m.r,l.i("d1<1>")),k.c=m.e,p+=".",l=l.c;k.m();){j=k.d
h.t(0,p+(j==null?l.a(j):j))}}}}return h},
Bb(a,b,c,d,e,f,g){return new A.oQ()},
lt(a,b,c,d,e,a0){var s=0,r=A.h(t.r),q,p,o,n,m,l,k,j,i,h,g,f
var $async$lt=A.c(function(a1,a2){if(a1===1)return A.d(a2,r)
for(;;)switch(s){case 0:A.Bb(a,A.dZ(a,b),A.dZ(a,e),b,d,e,a0)
p=t.N
o=A.ob(b.gR(),p)
o.G(0,new A.ai(e,A.o(e).i("ai<1>")))
o.G(0,a.gR())
n=A.G(p,t.X)
for(p=A.tE(o,o.r,A.o(o).c),o=c.b,m=p.$ti.c;p.m();){l=p.d
if(l==null)l=m.a(l)
k=b.h(0,l)
j=e.h(0,l)
i=a.h(0,l)
if(l==="archived"){h=J.y(i,!0)
g=J.y(k,!0)
f=J.y(j,!0)
if(g===f)n.j(0,l,g)
else if(g===h)n.j(0,l,f)
else if(f===h)n.j(0,l,g)
else{o.h(0,l)
n.j(0,l,f)}continue}if(B.E.ah(k,j))n.j(0,l,k)
else if(B.E.ah(k,i))n.j(0,l,j)
else if(B.E.ah(j,i))n.j(0,l,k)
else{o.h(0,l)
n.j(0,l,j)}}q=new A.eh(n,!1,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lt,r)},
oQ:function oQ(){},
eh:function eh(a,b,c){this.a=a
this.b=b
this.c=c},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
p_:function p_(a,b){this.a=a
this.b=b},
p1:function p1(){},
p2:function p2(){},
p3:function p3(a){this.a=a},
p4:function p4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lO:function lO(a,b,c){this.a=a
this.b=b
this.c=c},
fR:function fR(){},
h9:function h9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
p6:function p6(a,b){this.a=a
this.b=b},
p8:function p8(){},
p9:function p9(){},
pc:function pc(a,b){this.a=a
this.b=b},
pb:function pb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pa:function pa(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jH:function jH(a){this.b=a},
pF:function pF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pJ:function pJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pG:function pG(a,b,c){this.a=a
this.b=b
this.c=c},
pH:function pH(a,b,c){this.a=a
this.b=b
this.c=c},
pI:function pI(a,b,c){this.a=a
this.b=b
this.c=c},
aV:function aV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pK:function pK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
pL:function pL(a){this.a=a},
pM:function pM(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
bJ:function bJ(a,b){this.a=a
this.b=b},
aW:function aW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eC:function eC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eB:function eB(a,b){this.a=a
this.b=b},
qe:function qe(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qf:function qf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vN(a){return new A.hi(a)},
Ai(a){return new A.b1(a)},
AI(a){return new A.bk(a)},
Bg(a){return new A.br(a)},
c6(a){return new A.h6(a)},
Eu(a){var s=a.vf(),r=new A.uT()
return A.p(r.$2(A.vF(s),4))+"-"+A.p(r.$1(A.vD(s)))+"-"+A.p(r.$1(A.pw(s)))+" "+A.p(r.$1(A.vB(s)))+":"+A.p(r.$1(A.vC(s)))+":"+A.p(r.$1(A.vE(s)))+"."+A.p(r.$2(A.xj(s),3))+"Z"},
aE:function aE(){},
hi:function hi(a){this.a=a},
er:function er(a,b){this.b=a
this.a=b},
jS:function jS(a){this.a=a},
b1:function b1(a){this.a=a},
bk:function bk(a){this.a=a},
br:function br(a){this.a=a},
dC:function dC(a){this.a=a},
h6:function h6(a){this.a=a},
fv:function fv(a){this.a=a},
e7:function e7(a){this.a=a},
ez:function ez(a,b,c){this.a=a
this.b=b
this.c=c},
co:function co(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cn:function cn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h8:function h8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ik:function ik(a,b){this.a=a
this.b=b},
c2:function c2(a,b,c){this.a=a
this.b=b
this.c=c},
uT:function uT(){},
xt(a){return 0.5+B.ap.uw()},
bI(){return Date.now()},
vK(a){var s,r=a.toLowerCase()
$label0$0:{if("jan"===r){s=1
break $label0$0}if("feb"===r){s=2
break $label0$0}if("mar"===r){s=3
break $label0$0}if("apr"===r){s=4
break $label0$0}if("may"===r){s=5
break $label0$0}if("jun"===r){s=6
break $label0$0}if("jul"===r){s=7
break $label0$0}if("aug"===r){s=8
break $label0$0}if("sep"===r){s=9
break $label0$0}if("oct"===r){s=10
break $label0$0}if("nov"===r){s=11
break $label0$0}if("dec"===r){s=12
break $label0$0}s=null
break $label0$0}return s},
BG(a){var s,r,q,p,o,n,m,l,k=null,j=A.ac("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0).dK(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.vK(r)
if(q==null)return k
r=s[3]
r.toString
r=A.aq(r)
p=s[1]
p.toString
p=A.aq(p)
o=s[4]
o.toString
o=A.aq(o)
n=s[5]
n.toString
n=A.aq(n)
s=s[6]
s.toString
return A.vL(r,q,p,o,n,A.aq(s))}j=A.ac("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0).dK(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.vK(r)
if(q==null)return k
r=s[3]
r.toString
m=A.aq(r)
l=m>=70?1900+m:2000+m
r=s[1]
r.toString
r=A.aq(r)
p=s[4]
p.toString
p=A.aq(p)
o=s[5]
o.toString
o=A.aq(o)
s=s[6]
s.toString
return A.vL(l,q,r,p,o,A.aq(s))}j=A.ac("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0).dK(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.vK(r)
if(q==null)return k
r=s[6]
r.toString
r=A.aq(r)
p=s[2]
p.toString
p=A.aq(p)
o=s[3]
o.toString
o=A.aq(o)
n=s[4]
n.toString
n=A.aq(n)
s=s[5]
s.toString
return A.vL(r,q,p,o,n,A.aq(s))}return k},
vL(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.vj(a,b,c,d,e,f,0)
return s}catch(r){return null}},
qg:function qg(){},
h7:function h7(a,b){this.a=a
this.b=b},
hh:function hh(a,b){this.a=a
this.b=b},
qr:function qr(a,b){this.a=a
this.b=b},
w9(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.E(q)
if(r instanceof A.dF)throw q
else{s=r
r=A.q3("Corrupt "+a+" row: "+A.p(s))
throw A.b(r)}}},
qp(a){return A.w9("lp_sync_row",new A.qq(a))},
vA(a){return A.w9("lp_outbox",new A.p7(a))},
Bi(a){return A.w9("lp_op_queue",new A.p0(a))},
ys(a){var s,r,q,p,o=null
if(a==null)return B.m
A.t(a)
if(a.length===0)return B.m
s=B.e.an(a,o)
if(!t.j.b(s))throw A.b(A.X("expected a JSON array, got "+J.bC(s).l(0),o,o))
r=A.n([],t.s)
for(q=J.M(s);q.m();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.w(A.X("dirty-field member is "+J.bC(p).l(0)+", expected String",o,o)))}return r},
cr:function cr(a,b){this.a=a
this.b=b},
fl:function fl(a,b){this.a=a
this.b=b},
em:function em(a,b){this.a=a
this.b=b},
h2:function h2(a,b){this.a=a
this.b=b},
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
qq:function qq(a){this.a=a},
bG:function bG(a,b,c,d,e,f,g,h,i,j){var _=this
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
p7:function p7(a){this.a=a},
dB:function dB(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
p0:function p0(a){this.a=a},
B2(a){var s,r,q,p,o,n="stores",m="maxDocBytes",l="destructiveBackup"
if(a==null)return A.G(t.N,t.X)
try{s=A.uJ(a)
if(t.f.b(s)){r=A.fP(s)
q=A.G(t.N,t.X)
p=t.j
if(p.b(J.ae(r,n))){p=J.aB(p.a(J.ae(r,n)),new A.of(),t.bU)
p=A.Q(p,p.$ti.i("S.E"))
J.bA(q,n,p)}if(A.az(J.ae(r,m)))J.bA(q,m,J.ae(r,m))
if(A.bN(J.ae(r,l)))J.bA(q,l,J.ae(r,l))
return q}}catch(o){}return A.G(t.N,t.X)},
B3(a,b){var s,r,q
if(a==null)return null
try{s=A.uJ(a)
if(t.f.b(s)){r=A.fP(s).h(0,b)
return r}}catch(q){}return null},
B4(a){if(!t.f.b(a))throw A.b(A.X("Schema must be a map: "+A.p(a),null,null))
return A.wQ(A.fP(a))},
fP(a){var s=A.G(t.N,t.X)
a.a9(0,new A.oe(s))
return s},
B5(a){var s,r,q
try{s=A.uJ(a)
if(t.f.b(s)){r=s.cs(0,new A.op(),t.N,t.X)
return r}}catch(q){}return null},
jg(a,b,c,d){return A.da(new A.kn(2,a,null,new A.qS(b,c,d)).aC())},
B7(a,b){var s,r=J.I(a)
if(r.gk(a)!==b.length)return!1
for(s=0;s<r.gk(a);++s)if(r.h(a,s)!==b[s])return!1
return!0},
B6(a){var s,r=A.G(t.N,t.X)
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
xd(a){var s,r=A.G(t.N,t.X)
r.j(0,"state",a.a.b)
r.j(0,"pending",a.b)
r.j(0,"conflicts",a.c)
r.j(0,"hidden",a.d)
s=a.e
if(s!=null)r.j(0,"lastError",s)
s=a.f
if(s!=null)r.j(0,"lastSyncAt",A.bz(s))
return r},
oc:function oc(){},
oh:function oh(){},
og:function og(){},
of:function of(){},
oe:function oe(a){this.a=a},
od:function od(){},
u4:function u4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eL:function eL(a){this.b=a},
ui:function ui(a,b){this.a=a
this.b=b},
li:function li(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=0
_.x=g},
fQ:function fQ(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=null
_.e=1
_.f=c
_.r=d
_.w=1
_.Q=_.z=_.y=_.x=null
_.as=$},
op:function op(){},
ov:function ov(a,b){this.a=a
this.b=b},
ow:function ow(){},
oz:function oz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oA:function oA(a){this.a=a},
oD:function oD(a,b){this.a=a
this.b=b},
oE:function oE(a){this.a=a},
oC:function oC(a,b){this.a=a
this.b=b},
oB:function oB(a){this.a=a},
ox:function ox(a){this.a=a},
oy:function oy(a,b){this.a=a
this.b=b},
ou:function ou(a){this.a=a},
ot:function ot(a,b){this.a=a
this.b=b},
os:function os(a){this.a=a},
oq:function oq(a){this.a=a},
or:function or(a){this.a=a},
kC:function kC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=null
_.Q=_.z=!1
_.as=null},
bz(a){var s,r,q
if(a instanceof A.b2)return A.l(["lp:datetime",1000*a.a+a.b],t.N,t.S)
if(a instanceof A.ay){s=t.N
return A.l(["lp:bigint",a.l(0)],s,s)}if(t.p.b(a))return A.l(["lp:bytes",A.cK(a,t.S)],t.N,t.L)
if(t.j.b(a)){s=t.X
r=J.aB(a,A.yZ(),s)
r=A.Q(r,r.$ti.i("S.E"))
return A.cK(r,s)}if(t.f.b(a)){q=A.G(t.N,t.X)
a.a9(0,new A.uO(q))
return q}if(a==null||A.bN(a)||A.az(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.P("Value of type "+J.bC(a).l(0)+" is not wire-safe. Only null, bool, int, double, String, DateTime, BigInt, Uint8List, List, and Map are supported.",null))},
e_(a){var s,r,q,p,o,n,m,l="lp:datetime",k=null,j="lp:bigint",i="lp:bytes"
if(t.f.b(a)){if(a.gk(a)===1&&a.I(l)){s=a.h(0,l)
if(A.az(s)){r=B.b.ar(s,1000)
q=B.b.N(s-r,1000)
if(q<-864e13||q>864e13)A.w(A.af(q,-864e13,864e13,"millisecondsSinceEpoch",k))
if(q===864e13&&r!==0)A.w(A.aU(r,"microsecond",u.B))
A.bg(!0,"isUtc",t.y)
return new A.b2(q,r,!0)}throw A.b(A.P("Malformed wire DateTime: "+A.p(s),k))}if(a.gk(a)===1&&a.I(j)){s=a.h(0,j)
if(typeof s=="string")return A.vW(s,k)
throw A.b(A.P("Malformed wire BigInt: "+A.p(s),k))}if(a.gk(a)===1&&a.I(i)){s=a.h(0,i)
if(t.j.b(s)){r=J.I(s)
q=r.gk(s)
p=new Uint8Array(q)
for(o=0;o<r.gk(s);++o){n=r.h(s,o)
if(!A.az(n)||n<0||n>255)throw A.b(A.P("Malformed wire byte at index "+o+": "+A.p(n),k))
p[o]=n}return p}throw A.b(A.P("Malformed wire bytes: "+A.p(s),k))}m=A.G(t.N,t.X)
a.a9(0,new A.uL(m))
return m}if(t.j.b(a)){r=t.X
q=J.aB(a,A.yY(),r)
q=A.Q(q,q.$ti.i("S.E"))
return A.cK(q,r)}return a},
uO:function uO(a){this.a=a},
uL:function uL(a){this.a=a},
BP(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.az(s))throw A.b(A.eo('Request "v" must be an int.'))
if(!A.az(r))throw A.b(A.eo('Request "i" must be an int.'))
if(typeof q!="string"||!B.bU.D(0,q))throw A.b(A.eo("Unknown request operation: "+A.p(q)))
if(!t.f.b(p))throw A.b(A.eo('Request "a" must be a map.'))
return new A.eJ(s,r,q,p.cs(0,new A.qV(),t.N,t.X))},
eo(a){return new A.jG(a)},
eJ:function eJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qV:function qV(){},
kn:function kn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qS:function qS(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(a){this.a=a},
jG:function jG(a){this.a=a},
jN:function jN(a,b){this.a=a
this.b=b},
yE(a){return a},
yS(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.O("")
o=a+"("
p.a=o
n=A.ap(b)
m=n.i("dG<1>")
l=new A.dG(b,0,s,m)
l.na(b,0,s,n.c)
m=o+new A.ab(l,new A.uC(),m.i("ab<S.E,k>")).K(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.P(p.l(0),null))}},
mt:function mt(a){this.a=a},
mu:function mu(){},
mv:function mv(){},
uC:function uC(){},
o4:function o4(){},
jx(a,b){var s,r,q,p,o,n=b.mC(a),m=b.cq(a)
if(n!=null)a=B.a.a7(a,n.length)
s=t.s
r=A.n([],s)
q=A.n([],s)
s=a.length
if(s!==0&&b.bT(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.bT(a.charCodeAt(o))){r.push(B.a.q(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.a7(a,p))
q.push("")}return new A.pf(b,n,m,r,q)},
pf:function pf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xg(a){return new A.jy(a)},
jy:function jy(a){this.a=a},
BF(){var s,r,q,p,o,n,m,l,k=null
if(A.vO().gaE()!=="file")return $.ic()
if(!B.a.cm(A.vO().gb3(),"/"))return $.ic()
s=A.yf(k,0,0)
r=A.yd(k,0,0,!1)
q=A.u9(k,0,0,k)
p=A.yc(k,0,0)
o=A.u8(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.ye("a/b",0,3,k,"",m)
if(n&&!B.a.L(l,"/"))l=A.w4(l,m)
else l=A.dW(l)
if(A.i_("",s,n&&B.a.L(l,"//")?"":r,o,l,q,p).jv()==="a\\b")return $.lx()
return $.zw()},
qd:function qd(){},
pu:function pu(a,b,c){this.d=a
this.e=b
this.f=c},
qC:function qC(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
qW:function qW(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
vm(a,b){if(b<0)A.w(A.aD("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.w(A.aD("Offset "+b+u.D+a.gk(0)+"."))
return new A.iU(a,b)},
pW:function pW(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
iU:function iU(a,b){this.a=a
this.b=b},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
AN(a,b){var s=A.AO(A.n([A.Cd(a,!0)],t.g7)),r=new A.nW(b).$0(),q=B.b.l(B.c.ga_(s).b+1),p=A.AP(s)?0:3,o=A.ap(s)
return new A.nC(s,r,null,1+Math.max(q.length,p),new A.ab(s,new A.nE(),o.i("ab<1,i>")).v_(0,B.aO),!A.EH(new A.ab(s,new A.nF(),o.i("ab<1,j?>"))),new A.O(""))},
AP(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.y(r.c,q.c))return!1}return!0},
AO(a){var s,r,q=A.Ez(a,new A.nH(),t.nf,t.K)
for(s=new A.bS(q,q.r,q.e);s.m();)J.wE(s.d,new A.nI())
s=A.o(q).i("aN<1,2>")
r=s.i("fy<m.E,c0>")
s=A.Q(new A.fy(new A.aN(q,s),new A.nJ(),r),r.i("m.E"))
return s},
Cd(a,b){var s=new A.tl(a).$0()
return new A.b_(s,!0,null)},
Cf(a){var s,r,q,p,o,n,m=a.gaq()
if(!B.a.D(m,"\r\n"))return a
s=a.gE().gae()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gH()
p=a.gT()
o=a.gE().ga4()
p=A.jX(s,a.gE().gad(),o,p)
o=A.H(m,"\r\n","\n")
n=a.gaS()
return A.pX(r,p,o,A.H(n,"\r\n","\n"))},
Cg(a){var s,r,q,p,o,n,m
if(!B.a.cm(a.gaS(),"\n"))return a
if(B.a.cm(a.gaq(),"\n\n"))return a
s=B.a.q(a.gaS(),0,a.gaS().length-1)
r=a.gaq()
q=a.gH()
p=a.gE()
if(B.a.cm(a.gaq(),"\n")){o=A.uS(a.gaS(),a.gaq(),a.gH().gad())
o.toString
o=o+a.gH().gad()+a.gk(a)===a.gaS().length}else o=!1
if(o){r=B.a.q(a.gaq(),0,a.gaq().length-1)
if(r.length===0)p=q
else{o=a.gE().gae()
n=a.gT()
m=a.gE().ga4()
p=A.jX(o-1,A.xW(s),m-1,n)
q=a.gH().gae()===a.gE().gae()?p:a.gH()}}return A.pX(q,p,r,s)},
Ce(a){var s,r,q,p,o
if(a.gE().gad()!==0)return a
if(a.gE().ga4()===a.gH().ga4())return a
s=B.a.q(a.gaq(),0,a.gaq().length-1)
r=a.gH()
q=a.gE().gae()
p=a.gT()
o=a.gE().ga4()
p=A.jX(q-1,s.length-B.a.dP(s,"\n")-1,o-1,p)
return A.pX(r,p,s,B.a.cm(a.gaS(),"\n")?B.a.q(a.gaS(),0,a.gaS().length-1):a.gaS())},
xW(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.hs(a,"\n",s-2)-1
else return s-B.a.dP(a,"\n")-1},
nC:function nC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nW:function nW(a){this.a=a},
nE:function nE(){},
nD:function nD(){},
nF:function nF(){},
nH:function nH(){},
nI:function nI(){},
nJ:function nJ(){},
nG:function nG(a){this.a=a},
nX:function nX(){},
nK:function nK(a){this.a=a},
nR:function nR(a,b,c){this.a=a
this.b=b
this.c=c},
nS:function nS(a,b){this.a=a
this.b=b},
nT:function nT(a){this.a=a},
nU:function nU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nP:function nP(a,b){this.a=a
this.b=b},
nQ:function nQ(a,b){this.a=a
this.b=b},
nL:function nL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nM:function nM(a,b,c){this.a=a
this.b=b
this.c=c},
nN:function nN(a,b,c){this.a=a
this.b=b
this.c=c},
nO:function nO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nV:function nV(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a,b,c){this.a=a
this.b=b
this.c=c},
tl:function tl(a){this.a=a},
c0:function c0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jX(a,b,c,d){if(a<0)A.w(A.aD("Offset may not be negative, was "+a+"."))
else if(c<0)A.w(A.aD("Line may not be negative, was "+c+"."))
else if(b<0)A.w(A.aD("Column may not be negative, was "+b+"."))
return new A.bV(d,a,c,b)},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jY:function jY(){},
k_:function k_(){},
Bz(a,b,c){return new A.eu(c,a,b)},
k0:function k0(){},
eu:function eu(a,b,c){this.c=a
this.a=b
this.b=c},
ev:function ev(){},
pX(a,b,c,d){var s=new A.cq(d,a,b,c)
s.n9(a,b,c)
if(!B.a.D(d,c))A.w(A.P('The context line "'+d+'" must contain "'+c+'".',null))
if(A.uS(d,c,a.gad())==null)A.w(A.P('The span text "'+c+'" must start at column '+(a.gad()+1)+' in a line within "'+d+'".',null))
return s},
cq:function cq(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
BD(a){var s
$label0$0:{if(18===a){s=B.bV
break $label0$0}if(23===a){s=B.bW
break $label0$0}if(9===a){s=B.bX
break $label0$0}s=null
break $label0$0}return s},
hd:function hd(a,b){this.a=a
this.b=b},
bW:function bW(a,b,c){this.a=a
this.b=b
this.c=c},
BC(a,b,c,d,e,f,g){return new A.cQ(d,b,c,e,f,a,g)},
cQ:function cQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
q0:function q0(){},
mO:function mO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
mX:function mX(a){this.a=a},
mW:function mW(a){this.a=a},
mY:function mY(a){this.a=a},
mU:function mU(a){this.a=a},
mT:function mT(a){this.a=a},
mV:function mV(a){this.a=a},
mQ:function mQ(a){this.a=a},
mP:function mP(a){this.a=a},
mR:function mR(a){this.a=a},
mS:function mS(a,b){this.a=a
this.b=b},
d4:function d4(a,b,c,d,e){var _=this
_.a=a
_.b=!1
_.c=b
_.d=null
_.e=c
_.f=d
_.r=null
_.$ti=e},
tY:function tY(a,b){this.a=a
this.b=b},
tZ:function tZ(a,b,c){this.a=a
this.b=b
this.c=c},
u_:function u_(a,b,c){this.a=a
this.b=b
this.c=c},
pY:function pY(){},
ew:function ew(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
vo(a,b){var s=$.lw()
return new A.iZ(A.G(t.N,t.a_),s,a)},
iZ:function iZ(a,b,c){this.d=a
this.b=b
this.a=c},
kN:function kN(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
ER(a){var s=J.Ae(new v.G.URL(a,"file:///").pathname,"/")
return new A.c_(s,new A.v3(),A.ap(s).i("c_<1>"))},
v3:function v3(){},
mx:function mx(){},
jP:function jP(a,b,c){this.d=a
this.a=b
this.c=c},
bH:function bH(a,b){this.a=a
this.b=b},
tJ:function tJ(a){this.a=a
this.b=-1},
l_:function l_(){},
l0:function l0(){},
l2:function l2(){},
l3:function l3(){},
p5:function p5(a,b){this.a=a
this.b=b},
Bs(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
$label0$0:{if(100===r){s=!0
break $label0$0}if(101===r||0===r)break $label0$0
s=a.bi(r,"step")}return s},
dj:function dj(){},
dr:function dr(a){this.a=a},
iE:function iE(a){this.a=a},
eG(a){return new A.cw(a)},
wI(a,b){var s,r,q,p
if(b==null)b=$.lw()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.ct(256)
r&2&&A.C(a)
a[q]=p}},
cw:function cw(a){this.a=a},
hc:function hc(a){this.a=a},
aH:function aH(){},
it:function it(){},
is:function is(){},
ET(a,b){var s=null,r=new A.du(t.kk)
return A.zh(a,new A.i2(s,s,s,s,s,s,s,s,new A.v7(new A.v6(r,A.ut(new A.v8(r)))),s,s,s,s),s,b)},
dM:function dM(a){var _=this
_.d=a
_.c=_.b=_.a=null},
v8:function v8(a){this.a=a},
v6:function v6(a,b){this.a=a
this.b=b},
v7:function v7(a){this.a=a},
qN:function qN(a){this.a=a},
qI:function qI(a,b,c){this.a=a
this.b=b
this.c=c},
qP:function qP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qO:function qO(a,b,c){this.b=a
this.c=b
this.d=c},
dI:function dI(){},
cW:function cW(){},
eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},
bx(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.E(r)
if(q instanceof A.cw){s=q
return s.a}else return 1}},
iF:function iF(a){this.b=this.a=$
this.d=a},
mC:function mC(a,b,c){this.a=a
this.b=b
this.c=c},
mz:function mz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mE:function mE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mG:function mG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mI:function mI(a,b){this.a=a
this.b=b},
mB:function mB(a){this.a=a},
mH:function mH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mM:function mM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mK:function mK(a,b){this.a=a
this.b=b},
mJ:function mJ(a,b){this.a=a
this.b=b},
mD:function mD(a,b,c){this.a=a
this.b=b
this.c=c},
mF:function mF(a,b){this.a=a
this.b=b},
mL:function mL(a,b){this.a=a
this.b=b},
mA:function mA(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a,b){this.a=a
this.$ti=b},
lE:function lE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lG:function lG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lF:function lF(a,b,c){this.a=a
this.b=b
this.c=c},
c3(a,b){var s=new A.r($.v,b.i("r<0>")),r=new A.a8(s,b.i("a8<0>")),q=t.m
A.aZ(a,"success",new A.mb(r,a,b),!1,q)
A.aZ(a,"error",new A.mc(r,a),!1,q)
return s},
Av(a,b){var s=new A.r($.v,b.i("r<0>")),r=new A.a8(s,b.i("a8<0>")),q=t.m
A.aZ(a,"success",new A.mg(r,a,b),!1,q)
A.aZ(a,"error",new A.mh(r,a),!1,q)
A.aZ(a,"blocked",new A.mi(r),!1,q)
return s},
dQ:function dQ(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
rP:function rP(a,b){this.a=a
this.b=b},
rQ:function rQ(a,b){this.a=a
this.b=b},
mb:function mb(a,b,c){this.a=a
this.b=b
this.c=c},
mc:function mc(a,b){this.a=a
this.b=b},
mg:function mg(a,b,c){this.a=a
this.b=b
this.c=c},
mh:function mh(a,b){this.a=a
this.b=b},
mi:function mi(a){this.a=a},
lv(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
x1(a,b,c){var s=a.read(b,c)
return s},
x2(a,b,c){var s=a.write(b,c)
return s},
x0(a,b){return A.a2(a.removeEntry(b,{recursive:!1}),t.X)},
x_(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.w(A.P("Target object does not implement the async iterable interface",null))
return new A.dU(new A.nm(),new A.fn(a,s),s.i("dU<a_.T,D>"))},
nm:function nm(){},
qJ:function qJ(a){this.a=a},
qK:function qK(a){this.a=a},
qM(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$qM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a2(p.fetch(new p.URL(a,A.aT(p.location).href),null),t.m),$async$qM)
case 3:q=o.qL(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$qM,r)},
qL(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$qL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.iF(A.G(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.qJ(p).hu(a),$async$qL)
case 3:q=new o.eH(new n.qN(m.BO(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$qL,r)},
eH:function eH(a){this.a=a},
Ch(a){var s=new A.hC(a,new A.a8(new A.r($.v,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.ne(a)
return s},
j0(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$j0=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.lH(a)
n=A.vo("dart-memory",null)
m=$.lw()
l=new A.cG(o,n,new A.du(t.p3),A.bo(p),A.G(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.hz(),$async$j0)
case 3:s=4
return A.a(l.ec(),$async$j0)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j0,r)},
lH:function lH(a){this.a=null
this.b=a},
lK:function lK(a){this.a=a},
lJ:function lJ(a,b,c){this.a=a
this.b=b
this.c=c},
lI:function lI(a){this.a=a},
hC:function hC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
to:function to(a){this.a=a},
tp:function tp(a){this.a=a},
tn:function tn(a){this.a=a},
tq:function tq(a,b,c){this.a=a
this.b=b
this.c=c},
ts:function ts(a,b){this.a=a
this.b=b},
tr:function tr(a,b){this.a=a
this.b=b},
t0:function t0(a,b,c){this.a=a
this.b=b
this.c=c},
t1:function t1(a,b){this.a=a
this.b=b},
kV:function kV(a,b){this.a=a
this.b=b},
cG:function cG(a,b,c,d,e,f,g){var _=this
_.d=a
_.f=_.e=!1
_.r=!0
_.w=b
_.x=c
_.y=d
_.z=e
_.b=f
_.a=g},
nZ:function nZ(a,b,c){this.a=a
this.b=b
this.c=c},
o_:function o_(){},
nY:function nY(a,b){this.a=a
this.b=b},
kO:function kO(a,b,c){this.a=a
this.b=b
this.c=c},
tm:function tm(a,b){this.a=a
this.b=b},
aJ:function aJ(){},
hA:function hA(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
hu:function hu(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
eP:function eP(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
f7:function f7(a,b,c,d,e){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.d=e
_.c=_.b=_.a=null},
xq(a){var s=A.vo("dart-memory",null),r=$.lw()
return new A.et(s,r,a)},
jT(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$jT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.lv()
if(j==null)throw A.b(A.eG(1))
p=t.m
s=3
return A.a(A.a2(j.getDirectory(),p),$async$jT)
case 3:o=d
n=A.ER(a),m=J.M(n.a),n=new A.eK(m,n.b),l=null
case 4:if(!n.m()){s=6
break}s=7
return A.a(A.a2(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$jT)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.aF(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jT,r)},
jU(a){var s=0,r=A.h(t.m),q
var $async$jU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.jT(a,!0),$async$jU)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jU,r)},
pU(a,b){var s=0,r=A.h(t.g_),q,p
var $async$pU=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.lv()==null)throw A.b(A.eG(1))
p=A
s=3
return A.a(A.jU(a),$async$pU)
case 3:q=p.pT(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$pU,r)},
pT(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$pT=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.xq(c)
s=3
return A.a(p.cu(a,!1),$async$pT)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$pT,r)},
eb:function eb(a,b,c){this.c=a
this.a=b
this.b=c},
et:function et(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
pV:function pV(a,b){this.a=a
this.b=b},
l8:function l8(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
tG:function tG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
BO(a,b){var s=A.aT(a.exports.memory)
b.b!==$&&A.zl()
b.b=s
s=new A.qD(s,b,a.exports)
s.nb(a,b)
return s},
kp(a,b){var s,r=A.bq(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
dK(a,b){var s=a.buffer,r=A.kp(a,b)
return B.k.j1(A.bq(s,b,r))},
vP(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.k.j1(A.bq(s,b,c==null?A.kp(a,b):c))},
qD:function qD(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
qE:function qE(a){this.a=a},
qF:function qF(a){this.a=a},
qG:function qG(a){this.a=a},
qH:function qH(a){this.a=a},
uI(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$uI=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.id()
s=l!=null?3:5
break
case 3:p=A.Dz()
s=6
return A.a(A.hm(l,p,null,null,!1),$async$uI)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.aF({port:m.port1,lockName:p},new A.fs(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$uI,r)},
Dz(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.b6(97+$.zX().ct(26))
return r.charCodeAt(0)==0?r:r},
Am(a){return new A.fq(a)},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
pz:function pz(){},
pD:function pD(a){this.a=a},
pE:function pE(a){this.a=a},
pC:function pC(a){this.a=a},
pB:function pB(a){this.a=a},
pA:function pA(a){this.a=a},
fq:function fq(a){this.a=a},
mN:function mN(){},
iD:function iD(a){this.a=a},
my:function my(a){this.a=a},
dJ:function dJ(){},
iT(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$iT=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.jU(a),$async$iT)
case 3:p=e
o=A.xq(c)
s=b?4:5
break
case 4:s=6
return A.a(o.cu(p,!0),$async$iT)
case 6:case 5:q=new A.iS(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iT,r)},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
ny:function ny(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
hm(a,b,c,d,e){var s,r,q={},p=new A.r($.v,t.nI),o=new A.a8(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.vn(A.a2(a.request(b,s,A.cc(new A.qT(q,o))),r),new A.qU(q,d,o),r,t.K)
return p},
qT:function qT(a,b){this.a=a
this.b=b},
qU:function qU(a,b,c){this.a=a
this.b=b
this.c=c},
ch:function ch(a){this.a=a},
iG:function iG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
n_:function n_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mZ:function mZ(a,b){this.a=a
this.b=b},
n0:function n0(a){this.a=a},
fW:function fW(a){this.a=!1
this.b=a},
oY:function oY(a,b){this.a=a
this.b=b},
oX:function oX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oW:function oW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
As(a){var s,r,q,p,o=A.n([],t.kC),n=t.c.a(a.a),m=t.bF.b(n)?n:new A.bi(n,A.ap(n).i("bi<1,k>"))
for(s=J.I(m),r=0;r<s.gk(m)/2;++r){q=r*2
o.push(new A.aF(A.ea(B.bE,s.h(m,q)),s.h(m,q+1)))}s=A.f9(a.b)
q=A.f9(a.c)
p=A.f9(a.d)
return new A.dk(o,s,q,A.f9(a.g),p)},
dk:function dk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Bu(a){var s
if(J.y(a.t,"errorResponse")){s=A.AB(a)
if(s!=null&&s instanceof A.cB)return s
else return new A.eq(a.e)}else return new A.eq("Did not respond with expected type, got "+A.p(a))},
AB(a){var s=a.s,r=s==null?null:A.Z(s)
$label0$0:{if(0===r){s=A.AC(t.c.a(a.r))
break $label0$0}if(1===r){s=B.Z
break $label0$0}s=null
break $label0$0}return s},
AC(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.u("Pattern matching error"))
n=new A.ng()
l=A.Z(A.dX(l))
A.t(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.dl(i,h,A.bq(h,0,o))}else p=o
n=n.$1(k)
A.yo(g)
return new A.cQ(s,r,l,g==null?o:A.Z(g),n,q,p)},
AD(a){var s,r,q,p,o,n,m=null,l=a.r
$label0$0:{if(l==null){s=m
break $label0$0}s=A.BJ(l)
break $label0$0}r=a.b
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
Bv(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.ny(a2,512,"transfer" in a2)
a5.lm(a4)
for(s=a4.a,r=s.c,s=s.b,q=r.d,r=r.b,p=0,o=!0;A.Bs(a4);){if(o){p=q.sqlite3_column_count(s)
o=!1}n=a3.d
m=a3.d=n+p
if(m>a3.b)a3.o4(m)
m=new a0.DataView(a3.a,n,p)
l=new a0.Array(p)
for(k=0;k<p;++k){switch(q.sqlite3_column_type(s,k)){case 1:j=q.sqlite3_column_int64(s,k)
i=a0.Number(j)
if(a0.Number.isSafeInteger(i)){j=i
h=B.aa}else h=B.ab
break
case 2:j=q.sqlite3_column_double(s,k)
h=B.ac
break
case 3:g=q.sqlite3_column_text(s,k)
f=r.buffer
e=A.kp(r,g)
g=new Uint8Array(f,g,e)
d=new A.ca(!1).c7(g,0,a,!0)
j=d
h=B.ad
break
case 4:g=q.sqlite3_column_bytes(s,k)
f=q.sqlite3_column_blob(s,k)
c=new Uint8Array(g)
e=r.buffer
g=new Uint8Array(e,f,g)
B.d.cE(c,0,g)
j=c
h=B.ae
break
case 5:default:j=a
h=B.af}l[k]=j
m.setUint8(k,h.a)}a1.push(l)}b=new a0.Array(p)
for(k=0;k<p;++k){a0=q.sqlite3_column_name(s,k)
m=r.buffer
g=A.kp(r,a0)
a0=new Uint8Array(m,a0,g)
b[k]=new A.ca(!1).c7(a0,0,a,!0)}return A.za(!1,b,0,0,a1,a,a3.vc(0))},
EI(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
ng:function ng(){},
za(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
fg(a){var s,r,q,p,o=v.G,n=new o.Array()
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
Eo(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
jj:function jj(a,b){this.a=a
this.b=b},
pR:function pR(){},
AH(a){var s,r
for(s=0;s<5;++s){r=B.bs[s]
if(r.c===a)return r}throw A.b(A.P("Unknown FS implementation: "+a,null))},
BI(a){var s,r,q,p,o,n,m,l,k,j=null
$label0$0:{if(a==null){s=j
r=B.af
break $label0$0}q=A.az(a)
p=q?a:j
if(q){s=p
r=B.aa
break $label0$0}q=a instanceof A.ay
if(q)o=a
else o=j
if(q){s=v.G.BigInt(o.l(0))
r=B.ab
break $label0$0}q=typeof a=="number"
n=q?a:j
if(q){s=n
r=B.ac
break $label0$0}q=typeof a=="string"
m=q?a:j
if(q){s=m
r=B.ad
break $label0$0}q=t.p.b(a)
l=q?a:j
if(q){s=l
r=B.ae
break $label0$0}q=A.bN(a)
k=q?a:j
if(q){s=k
r=B.aK
break $label0$0}throw A.b(A.P("Unsupported value: "+A.p(a),j))}return new A.aF(r,s)},
BJ(a){var s,r,q,p,o,n
if(a instanceof A.dl)return new A.aF(a.a,a.b)
s=[]
r=J.I(a)
q=r.gk(a)
p=new Uint8Array(q)
for(o=0;o<r.gk(a);++o){n=A.BI(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.aF(s,t.a.a(B.d.gaz(p)))},
cE:function cE(a,b,c){this.c=a
this.a=b
this.b=c},
bY:function bY(a,b){this.a=a
this.b=b},
dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},
lp(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$lp=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.aT(i.indexedDB)
i=$.id()
i=i==null?null:A.hm(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.be(i,t.b3),$async$lp)
case 3:l=b
p=5
s=8
return A.a(A.Au(m.open("drift_mock_db"),t.m),$async$lp)
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
if(i!=null)i.a.am()
s=n.pop()
break
case 7:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$lp,r)},
uG(a){return A.Ed(a)},
Ed(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$uG=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.aT(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.cc(new A.uH(j,m))
s=7
return A.a(A.At(m,t.m),$async$uG)
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
return A.f($async$uG,r)},
fi(){var s=0,r=A.h(t.bF),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$fi=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.lv()
if(h==null){q=B.m
s=1
break}j=t.m
s=3
return A.a(A.a2(h.getDirectory(),j),$async$fi)
case 3:m=b
p=5
s=8
return A.a(A.a2(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$fi)
case 8:m=b
p=2
s=7
break
case 5:p=4
g=o.pop()
q=B.m
s=1
break
s=7
break
case 4:s=2
break
case 7:l=A.n([],t.s)
j=new A.c1(A.bg(A.x_(m),"stream",t.K))
p=9
case 12:s=14
return A.a(j.m(),$async$fi)
case 14:if(!b){s=13
break}k=j.gn()
if(J.y(k.kind,"directory"))J.dd(l,k.name)
s=12
break
case 13:n.push(11)
s=10
break
case 9:n=[2]
case 10:p=2
s=15
return A.a(j.A(),$async$fi)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fi,r)},
At(a,b){var s=new A.r($.v,b.i("r<0>")),r=new A.a8(s,b.i("a8<0>")),q=t.m
A.aZ(a,"success",new A.m9(r,a,b),!1,q)
A.aZ(a,"error",new A.ma(r,a),!1,q)
return s},
Au(a,b){var s=new A.r($.v,b.i("r<0>")),r=new A.a8(s,b.i("a8<0>")),q=t.m
A.aZ(a,"success",new A.md(r,a,b),!1,q)
A.aZ(a,"error",new A.me(r,a),!1,q)
A.aZ(a,"blocked",new A.mf(r,a),!1,q)
return s},
uH:function uH(a,b){this.a=a
this.b=b},
m9:function m9(a,b,c){this.a=a
this.b=b
this.c=c},
ma:function ma(a,b){this.a=a
this.b=b},
md:function md(a,b,c){this.a=a
this.b=b
this.c=c},
me:function me(a,b){this.a=a
this.b=b},
mf:function mf(a,b){this.a=a
this.b=b},
pv:function pv(a,b){this.a=a
this.b=b},
fA:function fA(a,b){this.a=a
this.b=b},
cR:function cR(a,b){this.a=a
this.b=b},
eq:function eq(a){this.a=a},
cB:function cB(a){this.a=a},
D7(a){var s=a.glC()
return new A.dU(new A.us(),s,A.o(s).i("dU<a_.T,D>"))},
xS(a,b){var s=A.n([],t.W),r=b==null?a.b:b
return new A.eO(a,r,new A.hQ(),new A.hQ(),new A.hQ(),s)},
C8(a,b,c){var s=t.S
s=new A.eN(c,A.n([],t.fV),a.a,new A.aI(new A.r($.v,t.D),t.Q),A.G(s,t.br),A.G(s,t.m))
s.n7(a)
s.nd(a,b,c)
return s},
yu(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
d7(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$d7=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.lv()
if(b==null){q=B.a8
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.id()
d=d==null?null:A.hm(d,"_drift_feature_detection",null,null,!1)
s=7
return A.a(t.fP.b(d)?d:A.be(d,t.b3),$async$d7)
case 7:j=a1
d=t.m
s=8
return A.a(A.a2(b.getDirectory(),d),$async$d7)
case 8:m=a1
s=9
return A.a(A.a2(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$d7)
case 9:l=a1
s=10
return A.a(A.i9(l),$async$d7)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.vs(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a2(A.aT(e),t.X),$async$d7)
case 13:q=B.a8
n=[1]
s=5
break
case 12:g=i
q=new A.hL(!0,g)
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:p=3
a=o.pop()
q=B.a8
n=[1]
s=5
break
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
g=j
if(g!=null)g.a.am()
if(k!=null)k.close()
s=m!=null&&l!=null?14:15
break
case 14:s=16
return A.a(A.x0(m,"_drift_feature_detection"),$async$d7)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d7,r)},
i9(a){return A.DO(a)},
DO(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$i9=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.a(A.a2(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$i9)
case 7:j=c
s=8
return A.a(A.a2(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$i9)
case 8:n=c
n.close()
l=j
q=new A.aF(!0,l)
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
return A.a(A.a2(a.createSyncAccessHandle(),t.m),$async$i9)
case 9:m=c
q=new A.aF(!1,m)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i9,r)},
us:function us(){},
hQ:function hQ(){this.a=null},
eO:function eO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
rJ:function rJ(a){this.a=a},
rN:function rN(a,b){this.a=a
this.b=b},
rK:function rK(a,b){this.a=a
this.b=b},
rL:function rL(a){this.a=a},
rM:function rM(a,b){this.a=a
this.b=b},
eN:function eN(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
ry:function ry(a){this.a=a},
rD:function rD(a,b){this.a=a
this.b=b},
rG:function rG(a,b,c){this.a=a
this.b=b
this.c=c},
rA:function rA(a,b){this.a=a
this.b=b},
rz:function rz(a,b){this.a=a
this.b=b},
rF:function rF(a,b){this.a=a
this.b=b},
rE:function rE(a,b){this.a=a
this.b=b},
rI:function rI(a,b){this.a=a
this.b=b},
rH:function rH(a,b){this.a=a
this.b=b},
rB:function rB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rC:function rC(a,b){this.a=a
this.b=b},
rx:function rx(a){this.a=a},
iH:function iH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
n3:function n3(a){this.a=a},
n2:function n2(a){this.a=a},
n1:function n1(a,b){this.a=a
this.b=b},
qX:function qX(a,b,c,d,e,f){var _=this
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
qY:function qY(a,b){this.a=a
this.b=b},
qZ:function qZ(a,b){this.a=a
this.b=b},
r_:function r_(a){this.a=a},
BQ(){var s=v.G
if(A.AS(s,"DedicatedWorkerGlobalScope"))return new A.kF(s,new A.kG(s.location.href))
else return new A.l6(s,new A.kG(s.location.href))},
i1:function i1(){},
kF:function kF(a,b){this.a=a
this.b=b},
l6:function l6(a,b){this.a=a
this.b=b},
tT:function tT(a){this.a=a},
tU:function tU(a,b,c){this.a=a
this.b=b
this.c=c},
tS:function tS(a){this.a=a},
tQ:function tQ(a){this.a=a},
tR:function tR(a){this.a=a},
kG:function kG(a){this.a=a},
rW:function rW(a){this.a=a},
k6:function k6(a,b,c){this.c=a
this.a=b
this.b=c},
qc:function qc(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
eD:function eD(){},
kP:function kP(){},
bZ:function bZ(a,b){this.a=a
this.b=b},
aZ(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.yT(new A.rZ(c),t.m)
s=s==null?null:A.cc(s)}s=new A.hy(a,b,s,!1,e.i("hy<0>"))
s.iP()
return s},
yT(a,b){var s=$.v
if(s===B.h)return a
return s.h5(a,b)},
vl:function vl(a,b){this.a=a
this.$ti=b},
eS:function eS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hy:function hy(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
rZ:function rZ(a){this.a=a},
t_:function t_(a){this.a=a},
wm(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
AV(a,b){return b in a},
vs(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
Ez(a,b,c,d){var s,r,q,p,o,n=A.G(d,c.i("q<0>"))
for(s=c.i("z<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.n([],s)
n.j(0,p,o)
p=o}else p=o
J.dd(p,q)}return n},
F0(a){return a},
zm(a){if(a instanceof A.cC)return a
return new A.cC(a)},
F1(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.E(p)
if(q instanceof A.eu){s=q
throw A.b(A.Bz("Invalid "+a+": "+s.a,s.b,s.gf5()))}else if(t.lW.b(q)){r=q
throw A.b(A.X("Invalid "+a+' "'+b+'": '+r.gjl(),r.gf5(),r.gae()))}else throw p}},
e0(a,b,c,d,e,a0){var s,r,q,p,o,n,m,l,k,j,i=a.gj0(),h=t.N,g=t.X,f=A.l(["id",e],h,g)
for(s=a.c,r=s.length,q=c==null,p=0;p<s.length;s.length===r||(0,A.L)(s),++p){o=s[p]
if(q)n=null
else n=c
m=o.a
f.j(0,m,A.D6(o,a0.h(0,m),n))}l=A.G(h,g)
for(h=new A.aN(a0,A.o(a0).i("aN<1,2>")).gv(0);h.m();){k=h.d
g=k.a
if(g==="id"||g==="archived"||i.D(0,g))continue
l.j(0,g,k.b)}if(l.a===0)h=""
else{j=new A.O("")
A.a9(j,l)
h=j.a
h=h.charCodeAt(0)==0?h:h}f.j(0,"extra",h)
f.j(0,"archived",b?1:0)
f.j(0,"hidden",0)
return f},
ff(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="archived",e=t.N,d=t.X,c=A.l(["id",b.h(0,"id")],e,d)
for(s=a.c,r=s.length,q=a0==null,p=0;p<s.length;s.length===r||(0,A.L)(s),++p){o=s[p]
n=o.a
m=b.h(0,n)
if(m==null){c.j(0,n,g)
continue}if(o.e){if(q)l=g
else l=a0
if(l==null)throw A.b(A.u('Field "'+n+u.C))
k=l.rO(B.aP.u(A.t(m)))
j=new A.ca(!1).c7(k,0,g,!0)
switch(o.b.a){case 3:c.j(0,n,j==="1"||j==="true")
break
case 1:case 4:c.j(0,n,A.aq(j))
break
case 2:c.j(0,n,A.EP(j))
break
case 6:case 7:c.j(0,n,B.e.an(j,g))
break
default:c.j(0,n,j)}continue}switch(o.b.a){case 3:c.j(0,n,J.y(m,1))
break
case 6:case 7:c.j(0,n,B.e.an(A.t(m),g))
break
default:c.j(0,n,m)}}c.j(0,f,J.y(b.h(0,f),1))
i=b.h(0,"extra")
if(typeof i=="string"&&i.length!==0){h=B.e.an(i,g)
if(t.f.b(h))c.G(0,A.b4(h,e,d))}return c},
z2(a,b,c,d){var s,r=A.n([],t.d)
for(s=J.M(b);s.m();)r.push(A.ff(a,s.gn(),c,d))
return r},
D6(a,b,c){var s,r,q,p
if(b==null)return null
if(a.e){if(c==null)throw A.b(A.u('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.y(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.am(b)
break
case 6:case 7:r=new A.O("")
A.a9(r,b)
q=r.a
s=q.charCodeAt(0)==0?q:q
break
default:A.t(b)
s=b}p=c.tq(B.f.u(s))
return B.ak.gj6().u(p)}switch(a.b.a){case 3:return J.y(b,!0)?1:0
case 6:case 7:r=new A.O("")
A.a9(r,b)
q=r.a
return q.charCodeAt(0)==0?q:q
default:return b}},
b0(a,b){var s,r,q,p,o,n,m="archived",l=a.gj0(),k=A.l(["id",b.h(0,"id")],t.N,t.X)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.L)(s),++q){p=s[q]
o=p.a
n=b.h(0,o)
if(n!=null)k.j(0,o,p.b===B.T?J.y(n,!0):n)}for(s=b.gbP(),s=s.gv(s);s.m();){r=s.gn()
o=r.a
if(o==="id"||o==="archived"||l.D(0,o))continue
k.j(0,o,r.b)}if(J.y(b.h(0,m),!0))k.j(0,m,!0)
return k},
lr(){var s,r=$.zY(),q=J.vp(15,t.N)
for(s=0;s<15;++s)q[s]="abcdefghijklmnopqrstuvwxyz0123456789"[r.ct(36)]
return B.c.d_(q)},
wf(a){var s,r=J.I(a)
if(r.gB(a))return null
s=J.bB(r.gC(a).gb6())
if(A.az(s))return s
if(typeof s=="string")return A.en(s,null)
return null},
EY(a,b,c){var s,r,q=A.H(a,"\\","\\\\")
q=A.H(q,"'","\\'")
s=A.H(b+"%","\\","\\\\")
r="(store="+("'"+q+"'")+" && id~"+("'"+A.H(s,"'","\\'")+"'")
if(c==null)return r+")"
q=A.H(c,"\\","\\\\")
return r+" && id>"+("'"+A.H(q,"'","\\'")+"'")+")"},
EQ(a){var s,r,q,p,o,n,m,l,k=null
if(a==null)return k
if(!t.f.b(a))throw A.b(A.X("fieldCipher envelope must be a map.",k,k))
s=a.h(0,"type")
if(!J.y(s,"aes-gcm"))throw A.b(A.X("Unsupported fieldCipher type: "+A.p(s),k,k))
r=a.h(0,"key")
if(!t.j.b(r)||J.ar(r)!==32)throw A.b(A.X("AES-256-GCM fieldCipher key must be 32 bytes.",k,k))
q=new Uint8Array(32)
for(p=J.I(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.az(n)||n<0||n>255)throw A.b(A.X("Malformed AES-256-GCM key byte at index "+o+": "+A.p(n),k,k))
q[o]=n}A.wG(q)
p=$.vb()
m=A.wG(q)
l=new A.r4(new Uint32Array(60))
l.pS(m)
return new A.lD(l,p)},
z4(a){var s,r=A.G(t.N,t.X)
r.j(0,"store",a.a)
r.j(0,"record_id",a.b)
r.j(0,"base",A.bz(a.c))
r.j(0,"local",A.bz(a.d))
r.j(0,"remote",A.bz(a.e))
s=a.f
s=A.Q(s,A.o(s).c)
B.c.b7(s)
r.j(0,"dirty_local",s)
s=a.r
s=A.Q(s,A.o(s).c)
B.c.b7(s)
r.j(0,"dirty_remote",s)
r.j(0,"detected_at",a.w)
s=a.x
if(s!=null)r.j(0,"resolved",A.bz(s))
return r},
EL(){var s=A.BQ(),r=t.cj
new A.qX(s,B.b_,A.n([],t.az),A.G(t.S,t.lp),new A.fW(A.vx(r)),new A.fW(A.vx(r))).dM()},
z1(){var s,r,q,p,o=null
try{o=A.vO()}catch(s){if(t.mA.b(A.E(s))){r=$.ur
if(r!=null)return r
throw s}else throw s}if(J.y(o,$.yr)){r=$.ur
r.toString
return r}$.yr=o
if($.wq()===$.ic())r=$.ur=o.bg(".").l(0)
else{q=o.jv()
p=q.length-1
r=$.ur=p===0?q:B.a.q(q,0,p)}return r},
z7(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
z3(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.z7(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.q(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
EH(a){var s,r,q,p
if(a.gk(0)===0)return!0
s=a.gC(0)
for(r=A.bX(a,1,null,a.$ti.i("S.E")),q=r.$ti,r=new A.a5(r,r.gk(0),q.i("a5<S.E>")),q=q.i("S.E");r.m();){p=r.d
if(!J.y(p==null?q.a(p):p,s))return!1}return!0},
ES(a,b){var s=B.c.bR(a,null)
if(s<0)throw A.b(A.P(A.p(a)+" contains no null elements.",null))
a[s]=b},
zg(a,b){var s=B.c.bR(a,b)
if(s<0)throw A.b(A.P(A.p(a)+" contains no elements matching "+b.l(0)+".",null))
a[s]=null},
Ek(a,b){var s,r,q,p
for(s=new A.bP(a),r=t.V,s=new A.a5(s,s.gk(0),r.i("a5<A.E>")),r=r.i("A.E"),q=0;s.m();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
uS(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.bS(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.bR(a,b)
while(r!==-1){q=r===0?0:B.a.hs(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.bS(a,b,r+1)}return null},
we(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
$label0$0:{if(n<0){n=null
break $label0$0}break $label0$0}s=a.a
return new A.cQ(A.dK(r.b,p.sqlite3_errmsg(q)),A.dK(s.b,s.d.sqlite3_errstr(o))+" (code "+A.p(o)+")",c,n,d,e,f)},
wn(a,b,c,d,e){throw A.b(A.we(a.a,a.b,b,c,d,e))},
x4(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.b6("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.ct(61)))
return s.charCodeAt(0)==0?s:s},
pP(a){var s=0,r=A.h(t.lo),q
var $async$pP=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a2(a.arrayBuffer(),t.a),$async$pP)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$pP,r)}},B={}
var w=[A,J,B]
var $={}
A.vu.prototype={}
J.j2.prototype={
V(a,b){return a===b},
gJ(a){return A.h5(a)},
l(a){return"Instance of '"+A.jE(a)+"'"},
gab(a){return A.by(A.w7(this))}}
J.j4.prototype={
l(a){return String(a)},
gJ(a){return a?519018:218159},
gab(a){return A.by(t.y)},
$ia6:1,
$iY:1}
J.fL.prototype={
V(a,b){return null==b},
l(a){return"null"},
gJ(a){return 0},
gab(a){return A.by(t.P)},
$ia6:1,
$iU:1}
J.ao.prototype={$iD:1}
J.cJ.prototype={
gJ(a){return 0},
gab(a){return B.cc},
l(a){return String(a)}}
J.jA.prototype={}
J.cV.prototype={}
J.bl.prototype={
l(a){var s=a[$.e4()]
if(s==null)return this.mY(a)
return"JavaScript function for "+J.am(s)}}
J.b3.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.ef.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.z.prototype={
h6(a,b){return new A.bi(a,A.ap(a).i("@<1>").U(b).i("bi<1,2>"))},
t(a,b){a.$flags&1&&A.C(a,29)
a.push(b)},
hJ(a,b){var s
a.$flags&1&&A.C(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.pO(b,null))
return a.splice(b,1)[0]},
aj(a,b,c){var s
a.$flags&1&&A.C(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.pO(b,null))
a.splice(b,0,c)},
jf(a,b,c){var s,r
a.$flags&1&&A.C(a,"insertAll",2)
A.xo(b,0,a.length,"index")
if(!t.O.b(c))c=J.Ag(c)
s=J.ar(c)
a.length=a.length+s
r=b+s
this.a6(a,r,a.length,a,b)
this.aa(a,b,r,c)},
lT(a){a.$flags&1&&A.C(a,"removeLast",1)
if(a.length===0)throw A.b(A.uM(a,-1))
return a.pop()},
O(a,b){var s
a.$flags&1&&A.C(a,"remove",1)
for(s=0;s<a.length;++s)if(J.y(a[s],b)){a.splice(s,1)
return!0}return!1},
qF(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.av(a))}q=p.length
if(q===o)return
this.sk(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
G(a,b){var s
a.$flags&1&&A.C(a,"addAll",2)
if(Array.isArray(b)){this.nk(a,b)
return}for(s=J.M(b);s.m();)a.push(s.gn())},
nk(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.av(a))
for(s=0;s<r;++s)a.push(b[s])},
aK(a){a.$flags&1&&A.C(a,"clear","clear")
a.length=0},
cr(a,b,c){return new A.ab(a,b,A.ap(a).i("@<1>").U(c).i("ab<1,2>"))},
K(a,b){var s,r=A.aG(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.p(a[s])
return r.join(b)},
d_(a){return this.K(a,"")},
cv(a,b){return A.bX(a,0,A.bg(b,"count",t.S),A.ap(a).c)},
aV(a,b){return A.bX(a,b,null,A.ap(a).c)},
cW(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.av(a))}if(c!=null)return c.$0()
throw A.b(A.ak())},
ew(a,b){return this.cW(a,b,null)},
a3(a,b){return a[b]},
M(a,b,c){if(b<0||b>a.length)throw A.b(A.af(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.af(c,b,a.length,"end",null))
if(b===c)return A.n([],A.ap(a))
return A.n(a.slice(b,c),A.ap(a))},
aQ(a,b){return this.M(a,b,null)},
f2(a,b,c){A.bc(b,c,a.length)
return A.bX(a,b,c,A.ap(a).c)},
gC(a){if(a.length>0)return a[0]
throw A.b(A.ak())},
ga_(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.ak())},
gaU(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.ak())
throw A.b(A.fI())},
a6(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.C(a,5)
A.bc(b,c,a.length)
s=c-b
if(s===0)return
A.aQ(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.lC(d,e).bj(0,!1)
q=0}p=J.I(r)
if(q+s>p.gk(r))throw A.b(A.x6())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
aa(a,b,c,d){return this.a6(a,b,c,d,0)},
dE(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.av(a))}return!1},
df(a,b){var s,r,q,p,o
a.$flags&2&&A.C(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Df()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.ap(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.d8(b,2))
if(p>0)this.qG(a,p)},
b7(a){return this.df(a,null)},
qG(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bR(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.y(a[s],b))return s
return-1},
dP(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.y(a[s],b))return s
return-1},
D(a,b){var s
for(s=0;s<a.length;++s)if(J.y(a[s],b))return!0
return!1},
gB(a){return a.length===0},
gW(a){return a.length!==0},
l(a){return A.o5(a,"[","]")},
bj(a,b){var s=A.n(a.slice(0),A.ap(a))
return s},
d8(a){return this.bj(a,!0)},
gv(a){return new J.e6(a,a.length,A.ap(a).i("e6<1>"))},
gJ(a){return A.h5(a)},
gk(a){return a.length},
sk(a,b){a.$flags&1&&A.C(a,"set length","change the length of")
if(b<0)throw A.b(A.af(b,0,null,"newLength",null))
if(b>a.length)A.ap(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.uM(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.C(a)
if(!(b>=0&&b<a.length))throw A.b(A.uM(a,b))
a[b]=c},
jy(a,b){return new A.bt(a,b.i("bt<0>"))},
u7(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gab(a){return A.by(A.ap(a))},
$iaM:1,
$iB:1,
$im:1,
$iq:1}
J.j3.prototype={
vj(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.jE(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.o6.prototype={}
J.e6.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.L(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.ds.prototype={
S(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gji(b)
if(this.gji(a)===s)return 0
if(this.gji(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gji(a){return a===0?1/a<0:a<0},
rA(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.a0(""+a+".ceil()"))},
tE(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.a0(""+a+".floor()"))},
lX(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.a0(""+a+".round()"))},
v7(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
iW(a,b,c){if(this.S(b,c)>0)throw A.b(A.dY(b))
if(this.S(a,b)<0)return b
if(this.S(a,c)>0)return c
return a},
m_(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.af(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.w(A.a0("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.a.aT("0",q)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
f0(a,b){return a+b},
ar(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
jT(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.l2(a,b)},
N(a,b){return(a|0)===a?a/b|0:this.l2(a,b)},
l2(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.a0("Result of truncating division is "+A.p(s)+": "+A.p(a)+" ~/ "+b))},
c_(a,b){if(b<0)throw A.b(A.dY(b))
return b>31?0:a<<b>>>0},
e1(a,b){var s
if(b<0)throw A.b(A.dY(b))
if(a>0)s=this.iM(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
a2(a,b){var s
if(a>0)s=this.iM(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
iN(a,b){if(0>b)throw A.b(A.dY(b))
return this.iM(a,b)},
iM(a,b){return b>31?0:a>>>b},
jJ(a,b){return a>b},
gab(a){return A.by(t.o)},
$iah:1,
$ia1:1}
J.fK.prototype={
glo(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.N(q,4294967296)
s+=32}return s-Math.clz32(q)},
gab(a){return A.by(t.S)},
$ia6:1,
$ii:1}
J.j5.prototype={
gab(a){return A.by(t.i)},
$ia6:1}
J.cH.prototype={
iT(a,b,c){var s=b.length
if(c>s)throw A.b(A.af(c,0,s,null,null))
return new A.lb(b,a,c)},
h1(a,b){return this.iT(a,b,0)},
dR(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.af(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.eA(c,a)},
cm(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.a7(a,r-s)},
v5(a,b,c){A.xo(0,0,a.length,"startIndex")
return A.EX(a,b,c,0)},
f6(a,b){var s=A.n(a.split(b),t.s)
return s},
d4(a,b,c,d){var s=A.bc(b,c,a.length)
return A.zk(a,b,s,d)},
a1(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.af(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
L(a,b){return this.a1(a,b,0)},
q(a,b,c){return a.substring(b,A.bc(b,c,a.length))},
a7(a,b){return this.q(a,b,null)},
cz(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.AW(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.x9(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
vh(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.x9(r,s))},
aT(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.b1)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
lK(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aT(c,s)+a},
uH(a,b){var s=b-a.length
if(s<=0)return a
return a+this.aT(" ",s)},
bS(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.af(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bR(a,b){return this.bS(a,b,0)},
hs(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.af(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
dP(a,b){return this.hs(a,b,null)},
D(a,b){return A.EU(a,b,0)},
S(a,b){var s
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
gab(a){return A.by(t.N)},
gk(a){return a.length},
$iaM:1,
$ia6:1,
$iah:1,
$ik:1}
A.rO.prototype={
t(a,b){var s,r,q,p,o,n,m,l,k=this,j=J.I(b),i=j.gk(b)
if(i===0)return
s=k.a+i
r=k.b
q=r.length
if(q<s){p=s*2
if(p<1024)p=1024
else{o=p-1
o|=B.b.a2(o,1)
o|=o>>>2
o|=o>>>4
o|=o>>>8
p=((o|o>>>16)>>>0)+1}n=new Uint8Array(p)
B.d.aa(n,0,q,r)
k.b=n
r=n}if(t.p.b(b))B.d.aa(r,k.a,s,b)
else for(m=0;m<i;++m){r=k.b
q=k.a
l=j.h(b,m)
r.$flags&2&&A.C(r)
r[q+m]=l}k.a=s},
ju(){var s,r=this
if(r.a===0)return $.ly()
s=J.de(B.d.gaz(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.ly()
return s},
gk(a){return this.a}}
A.ru.prototype={
t(a,b){var s=t.p.b(b)?b:new Uint8Array(A.bv(b))
this.b.push(s)
this.a=this.a+s.length},
ju(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.ly()
s=l.b
r=s.length
if(r===1){q=s[0]
l.a=0
B.c.aK(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.L)(s),++o,p=m){n=s[o]
m=p+n.length
B.d.aa(q,p,m,n)}l.a=0
B.c.aK(s)
return q},
gk(a){return this.a}}
A.cX.prototype={
gv(a){return new A.iw(J.M(this.gb0()),A.o(this).i("iw<1,2>"))},
gk(a){return J.ar(this.gb0())},
gB(a){return J.cf(this.gb0())},
gW(a){return J.fk(this.gb0())},
aV(a,b){var s=A.o(this)
return A.iv(J.lC(this.gb0(),b),s.c,s.y[1])},
cv(a,b){var s=A.o(this)
return A.iv(J.vf(this.gb0(),b),s.c,s.y[1])},
a3(a,b){return A.o(this).y[1].a(J.lA(this.gb0(),b))},
gC(a){return A.o(this).y[1].a(J.bB(this.gb0()))},
ga_(a){return A.o(this).y[1].a(J.ve(this.gb0()))},
gaU(a){return A.o(this).y[1].a(J.lB(this.gb0()))},
l(a){return J.am(this.gb0())}}
A.iw.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.dg.prototype={
gb0(){return this.a}}
A.hv.prototype={$iB:1}
A.hs.prototype={
h(a,b){return this.$ti.y[1].a(J.ae(this.a,b))},
j(a,b,c){J.bA(this.a,b,this.$ti.c.a(c))},
sk(a,b){J.Ac(this.a,b)},
t(a,b){J.dd(this.a,this.$ti.c.a(b))},
df(a,b){var s=b==null?null:new A.rv(this,b)
J.wE(this.a,s)},
f2(a,b,c){var s=this.$ti
return A.iv(J.Aa(this.a,b,c),s.c,s.y[1])},
a6(a,b,c,d,e){var s=this.$ti
J.Ad(this.a,b,c,A.iv(d,s.y[1],s.c),e)},
aa(a,b,c,d){return this.a6(0,b,c,d,0)},
$iB:1,
$iq:1}
A.rv.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bi.prototype={
h6(a,b){return new A.bi(this.a,this.$ti.i("@<1>").U(b).i("bi<1,2>"))},
gb0(){return this.a}}
A.cI.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.jI.prototype={
l(a){return"ReachabilityError: "+this.a}}
A.bP.prototype={
gk(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.v2.prototype={
$0(){return A.cg(null,t.H)},
$S:4}
A.pS.prototype={}
A.B.prototype={}
A.S.prototype={
gv(a){var s=this
return new A.a5(s,s.gk(s),A.o(s).i("a5<S.E>"))},
gB(a){return this.gk(this)===0},
gC(a){if(this.gk(this)===0)throw A.b(A.ak())
return this.a3(0,0)},
ga_(a){var s=this
if(s.gk(s)===0)throw A.b(A.ak())
return s.a3(0,s.gk(s)-1)},
gaU(a){var s=this
if(s.gk(s)===0)throw A.b(A.ak())
if(s.gk(s)>1)throw A.b(A.fI())
return s.a3(0,0)},
K(a,b){var s,r,q,p=this,o=p.gk(p)
if(b.length!==0){if(o===0)return""
s=A.p(p.a3(0,0))
if(o!==p.gk(p))throw A.b(A.av(p))
for(r=s,q=1;q<o;++q){r=r+b+A.p(p.a3(0,q))
if(o!==p.gk(p))throw A.b(A.av(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.p(p.a3(0,q))
if(o!==p.gk(p))throw A.b(A.av(p))}return r.charCodeAt(0)==0?r:r}},
d_(a){return this.K(0,"")},
cr(a,b,c){return new A.ab(this,b,A.o(this).i("@<S.E>").U(c).i("ab<1,2>"))},
v_(a,b){var s,r,q=this,p=q.gk(q)
if(p===0)throw A.b(A.ak())
s=q.a3(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a3(0,r))
if(p!==q.gk(q))throw A.b(A.av(q))}return s},
aV(a,b){return A.bX(this,b,null,A.o(this).i("S.E"))},
cv(a,b){return A.bX(this,0,A.bg(b,"count",t.S),A.o(this).i("S.E"))},
bj(a,b){var s=A.Q(this,A.o(this).i("S.E"))
return s},
d8(a){return this.bj(0,!0)}}
A.dG.prototype={
na(a,b,c,d){var s,r=this.b
A.aQ(r,"start")
s=this.c
if(s!=null){A.aQ(s,"end")
if(r>s)throw A.b(A.af(r,0,s,"start",null))}},
gnV(){var s=J.ar(this.a),r=this.c
if(r==null||r>s)return s
return r},
gqX(){var s=J.ar(this.a),r=this.b
if(r>s)return s
return r},
gk(a){var s,r=J.ar(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a3(a,b){var s=this,r=s.gqX()+b
if(b<0||r>=s.gnV())throw A.b(A.j_(b,s.gk(0),s,null,"index"))
return J.lA(s.a,r)},
aV(a,b){var s,r,q=this
A.aQ(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.dp(q.$ti.i("dp<1>"))
return A.bX(q.a,s,r,q.$ti.c)},
cv(a,b){var s,r,q,p=this
A.aQ(b,"count")
s=p.c
r=p.b
if(s==null)return A.bX(p.a,r,B.b.f0(r,b),p.$ti.c)
else{q=B.b.f0(r,b)
if(s<q)return p
return A.bX(p.a,r,q,p.$ti.c)}},
bj(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.I(n),l=m.gk(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.vr(0,n):J.vq(0,n)}r=A.aG(s,m.a3(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a3(n,o+q)
if(m.gk(n)<l)throw A.b(A.av(p))}return r},
d8(a){return this.bj(0,!0)}}
A.a5.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.I(q),o=p.gk(q)
if(r.b!==o)throw A.b(A.av(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a3(q,s);++r.c
return!0}}
A.cl.prototype={
gv(a){return new A.ji(J.M(this.a),this.b,A.o(this).i("ji<1,2>"))},
gk(a){return J.ar(this.a)},
gB(a){return J.cf(this.a)},
gC(a){return this.b.$1(J.bB(this.a))},
ga_(a){return this.b.$1(J.ve(this.a))},
gaU(a){return this.b.$1(J.lB(this.a))},
a3(a,b){return this.b.$1(J.lA(this.a,b))}}
A.dn.prototype={$iB:1}
A.ji.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.ab.prototype={
gk(a){return J.ar(this.a)},
a3(a,b){return this.b.$1(J.lA(this.a,b))}}
A.c_.prototype={
gv(a){return new A.eK(J.M(this.a),this.b)},
cr(a,b,c){return new A.cl(this,b,this.$ti.i("@<1>").U(c).i("cl<1,2>"))}}
A.eK.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.fy.prototype={
gv(a){return new A.iQ(J.M(this.a),this.b,B.al,this.$ti.i("iQ<1,2>"))}}
A.iQ.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.M(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0}}
A.dH.prototype={
gv(a){var s=this.a
return new A.k9(s.gv(s),this.b,A.o(this).i("k9<1>"))}}
A.fw.prototype={
gk(a){var s=this.a,r=s.gk(s)
s=this.b
if(B.b.jJ(r,s))return s
return r},
$iB:1}
A.k9.prototype={
m(){if(--this.b>=0)return this.a.m()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.cp.prototype={
aV(a,b){A.ie(b,"count")
A.aQ(b,"count")
return new A.cp(this.a,this.b+b,A.o(this).i("cp<1>"))},
gv(a){var s=this.a
return new A.jV(s.gv(s),this.b)}}
A.e9.prototype={
gk(a){var s=this.a,r=s.gk(s)-this.b
if(r>=0)return r
return 0},
aV(a,b){A.ie(b,"count")
A.aQ(b,"count")
return new A.e9(this.a,this.b+b,this.$ti)},
$iB:1}
A.jV.prototype={
m(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.m()
this.b=0
return s.m()},
gn(){return this.a.gn()}}
A.dp.prototype={
gv(a){return B.al},
gB(a){return!0},
gk(a){return 0},
gC(a){throw A.b(A.ak())},
ga_(a){throw A.b(A.ak())},
gaU(a){throw A.b(A.ak())},
a3(a,b){throw A.b(A.af(b,0,0,"index",null))},
cr(a,b,c){return new A.dp(c.i("dp<0>"))},
aV(a,b){A.aQ(b,"count")
return this},
cv(a,b){A.aQ(b,"count")
return this},
bj(a,b){var s=this.$ti.c
return b?J.vr(0,s):J.vq(0,s)},
d8(a){return this.bj(0,!0)}}
A.iN.prototype={
m(){return!1},
gn(){throw A.b(A.ak())}}
A.bt.prototype={
gv(a){return new A.ko(J.M(this.a),this.$ti.i("ko<1>"))}}
A.ko.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.fB.prototype={
sk(a,b){throw A.b(A.a0(u.O))},
t(a,b){throw A.b(A.a0("Cannot add to a fixed-length list"))}}
A.kf.prototype={
j(a,b,c){throw A.b(A.a0("Cannot modify an unmodifiable list"))},
sk(a,b){throw A.b(A.a0("Cannot change the length of an unmodifiable list"))},
t(a,b){throw A.b(A.a0("Cannot add to an unmodifiable list"))},
df(a,b){throw A.b(A.a0("Cannot modify an unmodifiable list"))},
a6(a,b,c,d,e){throw A.b(A.a0("Cannot modify an unmodifiable list"))},
aa(a,b,c,d){return this.a6(0,b,c,d,0)}}
A.eE.prototype={}
A.dD.prototype={
gk(a){return J.ar(this.a)},
a3(a,b){var s=this.a,r=J.I(s)
return r.a3(s,r.gk(s)-1-b)}}
A.k7.prototype={
gJ(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gJ(this.a)&536870911
this._hashCode=s
return s},
l(a){return'Symbol("'+this.a+'")'},
V(a,b){if(b==null)return!1
return b instanceof A.k7&&this.a===b.a}}
A.i3.prototype={}
A.aF.prototype={$r:"+(1,2)",$s:1}
A.hL.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.hM.prototype={$r:"+controller,sync(1,2)",$s:3}
A.f_.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.kY.prototype={$r:"+result,resultCode(1,2)",$s:5}
A.hN.prototype={$r:"+(1,2,3)",$s:6}
A.kZ.prototype={$r:"+conflicts,hidden,pending(1,2,3)",$s:7}
A.ft.prototype={
gB(a){return this.gk(this)===0},
gW(a){return this.gk(this)!==0},
l(a){return A.oL(this)},
gbP(){return new A.f3(this.ts(),A.o(this).i("f3<V<1,2>>"))},
ts(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$gbP(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gR(),o=o.gv(o),n=A.o(s).i("V<1,2>")
case 2:if(!o.m()){r=3
break}m=o.gn()
r=4
return a.b=new A.V(m,s.h(0,m),n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
cs(a,b,c,d){var s=A.G(c,d)
this.a9(0,new A.ms(this,b,s))
return s},
$iN:1}
A.ms.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.bj.prototype={
gk(a){return this.b.length},
gky(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
I(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.I(b))return null
return this.b[this.a[b]]},
a9(a,b){var s,r,q=this.gky(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gR(){return new A.dT(this.gky(),this.$ti.i("dT<1>"))},
gb6(){return new A.dT(this.b,this.$ti.i("dT<2>"))}}
A.dT.prototype={
gk(a){return this.a.length},
gB(a){return 0===this.a.length},
gW(a){return 0!==this.a.length},
gv(a){var s=this.a
return new A.eV(s,s.length,this.$ti.i("eV<1>"))}}
A.eV.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.fu.prototype={
t(a,b){A.Aw()}}
A.cD.prototype={
gk(a){return this.b},
gB(a){return this.b===0},
gW(a){return this.b!==0},
gv(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.eV(s,s.length,r.$ti.i("eV<1>"))},
D(a,b){if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.o0.prototype={
V(a,b){if(b==null)return!1
return b instanceof A.fH&&this.a.V(0,b.a)&&A.wh(this)===A.wh(b)},
gJ(a){return A.el(this.a,A.wh(this),B.o,B.o)},
l(a){var s=B.c.K([A.by(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.fH.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.EG(A.lq(this.a),this.$ti)}}
A.px.prototype={
$0(){return B.u.tE(1000*this.a.now())},
$S:10}
A.ha.prototype={}
A.qv.prototype={
bt(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.h1.prototype={
l(a){return"Null check operator used on a null value"}}
A.j6.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.ke.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ju.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iF:1}
A.fx.prototype={}
A.hP.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ias:1}
A.di.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.zo(r==null?"unknown":r)+"'"},
gab(a){var s=A.lq(this)
return A.by(s==null?A.bh(this):s)},
gw9(){return this},
$C:"$1",
$R:1,
$D:null}
A.m0.prototype={$C:"$0",$R:0}
A.m1.prototype={$C:"$2",$R:2}
A.qt.prototype={}
A.q1.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.zo(s)+"'"}}
A.fo.prototype={
V(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fo))return!1
return this.$_target===b.$_target&&this.a===b.a},
gJ(a){return(A.lu(this.a)^A.h5(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.jE(this.a)+"'")}}
A.jQ.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bn.prototype={
gk(a){return this.a},
gB(a){return this.a===0},
gW(a){return this.a!==0},
gR(){return new A.ai(this,A.o(this).i("ai<1>"))},
gb6(){return new A.aO(this,A.o(this).i("aO<2>"))},
gbP(){return new A.aN(this,A.o(this).i("aN<1,2>"))},
I(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.lE(a)},
lE(a){var s=this.d
if(s==null)return!1
return this.dO(s[this.dN(a)],a)>=0},
G(a,b){b.a9(0,new A.o7(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.lF(b)},
lF(a){var s,r,q=this.d
if(q==null)return null
s=q[this.dN(a)]
r=this.dO(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.jU(s==null?q.b=q.iF():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.jU(r==null?q.c=q.iF():r,b,c)}else q.lH(b,c)},
lH(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.iF()
s=p.dN(a)
r=o[s]
if(r==null)o[s]=[p.i1(a,b)]
else{q=p.dO(r,a)
if(q>=0)r[q].b=b
else r.push(p.i1(a,b))}},
lO(a,b){var s,r,q=this
if(q.I(a)){s=q.h(0,a)
return s==null?A.o(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
O(a,b){var s=this
if(typeof b=="string")return s.kT(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.kT(s.c,b)
else return s.lG(b)},
lG(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.dN(a)
r=n[s]
q=o.dO(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.l8(p)
if(r.length===0)delete n[s]
return p.b},
aK(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.i0()}},
a9(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.av(s))
r=r.c}},
jU(a,b,c){var s=a[b]
if(s==null)a[b]=this.i1(b,c)
else s.b=c},
kT(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.l8(s)
delete a[b]
return s.b},
i0(){this.r=this.r+1&1073741823},
i1(a,b){var s,r=this,q=new A.o9(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.i0()
return q},
l8(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.i0()},
dN(a){return J.aL(a)&1073741823},
dO(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.y(a[r].a,b))return r
return-1},
l(a){return A.oL(this)},
iF(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.o7.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.o9.prototype={}
A.ai.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gv(a){var s=this.a
return new A.dt(s,s.r,s.e)},
D(a,b){return this.a.I(b)}}
A.dt.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.av(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.aO.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gv(a){var s=this.a
return new A.bS(s,s.r,s.e)}}
A.bS.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.av(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.aN.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gv(a){var s=this.a
return new A.jc(s,s.r,s.e,this.$ti.i("jc<1,2>"))}}
A.jc.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.av(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.V(s.a,s.b,r.$ti.i("V<1,2>"))
r.c=s.c
return!0}}}
A.fM.prototype={
dN(a){return A.lu(a)&1073741823},
dO(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.uX.prototype={
$1(a){return this.a(a)},
$S:29}
A.uY.prototype={
$2(a,b){return this.a(a,b)},
$S:123}
A.uZ.prototype={
$1(a){return this.a(a)},
$S:53}
A.eZ.prototype={
gab(a){return A.by(this.ku())},
ku(){return A.Ep(this.$r,this.ii())},
l(a){return this.l6(!1)},
l6(a){var s,r,q,p,o,n=this.o0(),m=this.ii(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.xk(o):l+A.p(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
o0(){var s,r=this.$s
while($.tI.length<=r)$.tI.push(null)
s=$.tI[r]
if(s==null){s=this.nG()
$.tI[r]=s}return s},
nG(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.vp(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.cK(j,k)}}
A.kW.prototype={
ii(){return[this.a,this.b]},
V(a,b){if(b==null)return!1
return b instanceof A.kW&&this.$s===b.$s&&J.y(this.a,b.a)&&J.y(this.b,b.b)},
gJ(a){return A.el(this.$s,this.a,this.b,B.o)}}
A.kX.prototype={
ii(){return[this.a,this.b,this.c]},
V(a,b){var s=this
if(b==null)return!1
return b instanceof A.kX&&s.$s===b.$s&&J.y(s.a,b.a)&&J.y(s.b,b.b)&&J.y(s.c,b.c)},
gJ(a){var s=this
return A.el(s.$s,s.a,s.b,s.c)}}
A.ee.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
gkE(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.vt(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gq_(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.vt(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
dK(a){var s=this.b.exec(a)
if(s==null)return null
return new A.eX(s)},
iT(a,b,c){var s=b.length
if(c>s)throw A.b(A.af(c,0,s,null,null))
return new A.kr(this,b,c)},
h1(a,b){return this.iT(0,b,0)},
nY(a,b){var s,r=this.gkE()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.eX(s)},
nX(a,b){var s,r=this.gq_()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.eX(s)},
dR(a,b,c){if(c<0||c>b.length)throw A.b(A.af(c,0,b.length,null,null))
return this.nX(b,c)}}
A.eX.prototype={
gH(){return this.b.index},
gE(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$idx:1,
$ijL:1}
A.kr.prototype={
gv(a){return new A.ks(this.a,this.b,this.c)}}
A.ks.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.nY(l,s)
if(p!=null){m.d=p
o=p.gE()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){r=l.charCodeAt(q)
if(r>=55296&&r<=56319){s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1}}
A.eA.prototype={
gE(){return this.a+this.c.length},
h(a,b){if(b!==0)A.w(A.pO(b,null))
return this.c},
$idx:1,
gH(){return this.a}}
A.lb.prototype={
gv(a){return new A.u0(this.a,this.b,this.c)},
gC(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.eA(r,s)
throw A.b(A.ak())}}
A.u0.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.eA(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s}}
A.kB.prototype={
bp(){var s=this.b
if(s===this)throw A.b(new A.cI("Local '"+this.a+"' has not been initialized."))
return s},
bb(){var s=this.b
if(s===this)throw A.b(A.xc(this.a))
return s}}
A.ej.prototype={
gab(a){return B.c5},
h4(a,b,c){A.i4(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
lk(a){return this.h4(a,0,null)},
h3(a,b,c){var s
A.i4(a,b,c)
s=new DataView(a,b)
return s},
lj(a){return this.h3(a,0,null)},
$ia6:1,
$idf:1}
A.ei.prototype={$iei:1}
A.fY.prototype={
gaz(a){if(((a.$flags|0)&2)!==0)return new A.lh(a.buffer)
else return a.buffer},
pO(a,b,c,d){var s=A.af(b,0,c,d,null)
throw A.b(s)},
k6(a,b,c,d){if(b>>>0!==b||b>c)this.pO(a,b,c,d)}}
A.lh.prototype={
h4(a,b,c){var s=A.bq(this.a,b,c)
s.$flags=3
return s},
lk(a){return this.h4(0,0,null)},
h3(a,b,c){var s=A.xe(this.a,b,c)
s.$flags=3
return s},
lj(a){return this.h3(0,0,null)},
$idf:1}
A.fX.prototype={
gab(a){return B.c6},
$ia6:1,
$ivg:1}
A.ek.prototype={
gk(a){return a.length},
l0(a,b,c,d,e){var s,r,q=a.length
this.k6(a,b,q,"start")
this.k6(a,c,q,"end")
if(b>c)throw A.b(A.af(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.P(e,null))
r=d.length
if(r-e<s)throw A.b(A.u("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iaM:1,
$ibm:1}
A.cN.prototype={
h(a,b){A.cA(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.C(a)
A.cA(b,a,a.length)
a[b]=c},
a6(a,b,c,d,e){a.$flags&2&&A.C(a,5)
if(t.dQ.b(d)){this.l0(a,b,c,d,e)
return}this.jS(a,b,c,d,e)},
aa(a,b,c,d){return this.a6(a,b,c,d,0)},
$iB:1,
$im:1,
$iq:1}
A.bp.prototype={
j(a,b,c){a.$flags&2&&A.C(a)
A.cA(b,a,a.length)
a[b]=c},
a6(a,b,c,d,e){a.$flags&2&&A.C(a,5)
if(t.aj.b(d)){this.l0(a,b,c,d,e)
return}this.jS(a,b,c,d,e)},
aa(a,b,c,d){return this.a6(a,b,c,d,0)},
$iB:1,
$im:1,
$iq:1}
A.jm.prototype={
gab(a){return B.c7},
M(a,b,c){return new Float32Array(a.subarray(b,A.cb(b,c,a.length)))},
aQ(a,b){return this.M(a,b,null)},
$ia6:1,
$inn:1}
A.jn.prototype={
gab(a){return B.c8},
M(a,b,c){return new Float64Array(a.subarray(b,A.cb(b,c,a.length)))},
aQ(a,b){return this.M(a,b,null)},
$ia6:1,
$ino:1}
A.jo.prototype={
gab(a){return B.c9},
h(a,b){A.cA(b,a,a.length)
return a[b]},
M(a,b,c){return new Int16Array(a.subarray(b,A.cb(b,c,a.length)))},
aQ(a,b){return this.M(a,b,null)},
$ia6:1,
$io1:1}
A.jp.prototype={
gab(a){return B.ca},
h(a,b){A.cA(b,a,a.length)
return a[b]},
M(a,b,c){return new Int32Array(a.subarray(b,A.cb(b,c,a.length)))},
aQ(a,b){return this.M(a,b,null)},
$ia6:1,
$io2:1}
A.jq.prototype={
gab(a){return B.cb},
h(a,b){A.cA(b,a,a.length)
return a[b]},
M(a,b,c){return new Int8Array(a.subarray(b,A.cb(b,c,a.length)))},
aQ(a,b){return this.M(a,b,null)},
$ia6:1,
$io3:1}
A.fZ.prototype={
gab(a){return B.ce},
h(a,b){A.cA(b,a,a.length)
return a[b]},
M(a,b,c){return new Uint16Array(a.subarray(b,A.cb(b,c,a.length)))},
aQ(a,b){return this.M(a,b,null)},
$ia6:1,
$iqx:1}
A.h_.prototype={
gab(a){return B.cf},
h(a,b){A.cA(b,a,a.length)
return a[b]},
M(a,b,c){return new Uint32Array(a.subarray(b,A.cb(b,c,a.length)))},
aQ(a,b){return this.M(a,b,null)},
$ia6:1,
$iqy:1}
A.h0.prototype={
gab(a){return B.cg},
gk(a){return a.length},
h(a,b){A.cA(b,a,a.length)
return a[b]},
M(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.cb(b,c,a.length)))},
aQ(a,b){return this.M(a,b,null)},
$ia6:1,
$iqz:1}
A.dz.prototype={
gab(a){return B.ch},
gk(a){return a.length},
h(a,b){A.cA(b,a,a.length)
return a[b]},
M(a,b,c){return new Uint8Array(a.subarray(b,A.cb(b,c,a.length)))},
aQ(a,b){return this.M(a,b,null)},
$ia6:1,
$idz:1,
$ic8:1}
A.hH.prototype={}
A.hI.prototype={}
A.hJ.prototype={}
A.hK.prototype={}
A.bT.prototype={
i(a){return A.hX(v.typeUniverse,this,a)},
U(a){return A.y8(v.typeUniverse,this,a)}}
A.kL.prototype={}
A.u5.prototype={
l(a){return A.bf(this.a,null)}}
A.kI.prototype={
l(a){return this.a}}
A.hT.prototype={$icu:1}
A.rb.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:22}
A.ra.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:109}
A.rc.prototype={
$0(){this.a.$0()},
$S:3}
A.rd.prototype={
$0(){this.a.$0()},
$S:3}
A.hS.prototype={
ng(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.d8(new A.u3(this,b),0),a)
else throw A.b(A.a0("`setTimeout()` not found."))},
nh(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.d8(new A.u2(this,a,Date.now(),b),0),a)
else throw A.b(A.a0("Periodic timer."))},
A(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.a0("Canceling a timer."))},
$ict:1}
A.u3.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.u2.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.b.jT(s,o)}q.c=p
r.d.$1(q)},
$S:3}
A.hn.prototype={
ai(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aW(a)
else{s=r.a
if(r.$ti.i("J<1>").b(a))s.k5(a)
else s.cI(a)}},
bO(a,b){var s
if(b==null)b=A.fm(a)
s=this.a
if(this.b)s.al(new A.aa(a,b))
else s.c2(new A.aa(a,b))},
ao(a){return this.bO(a,null)},
$ifr:1}
A.ul.prototype={
$1(a){return this.a.$2(0,a)},
$S:19}
A.um.prototype={
$2(a,b){this.a.$2(1,new A.fx(a,b))},
$S:125}
A.uD.prototype={
$2(a,b){this.a(a,b)},
$S:127}
A.uj.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.x()
s=q.b
if((s&1)!==0?(q.gb1().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.uk.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:22}
A.ku.prototype={
nc(a,b){var s=new A.rf(a)
this.a=A.vJ(new A.rh(this,a),new A.ri(s),new A.rj(this,s),!1,b)}}
A.rf.prototype={
$0(){A.ib(new A.rg(this.a))},
$S:3}
A.rg.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.ri.prototype={
$0(){this.a.$0()},
$S:0}
A.rj.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.rh.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.x()
if((r.b&4)===0){s.c=new A.r($.v,t._)
if(s.b){s.b=!1
A.ib(new A.re(this.b))}return s.c}},
$S:101}
A.re.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.hD.prototype={
l(a){return"IterationMarker("+this.b+", "+A.p(this.a)+")"}}
A.ld.prototype={
gn(){return this.b},
qH(a,b){var s,r,q
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
o.d=null}q=o.qH(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.y3
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.y3
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.u("sync*"))}return!1},
wb(a){var s,r,q=this
if(a instanceof A.f3){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.M(a)
return 2}}}
A.f3.prototype={
gv(a){return new A.ld(this.a())}}
A.aa.prototype={
l(a){return A.p(this.a)},
$ia4:1,
gc0(){return this.b}}
A.aR.prototype={}
A.dN.prototype={
bn(){},
bo(){}}
A.hr.prototype={
gcG(){return new A.aR(this,A.o(this).i("aR<1>"))},
ghr(){return(this.c&4)!==0},
giD(){return this.c<4},
qE(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
iO(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.xT(c,A.o(j).c)
s=A.o(j)
r=$.v
q=d?1:0
p=b!=null?32:0
o=A.kz(r,a,s.c)
n=A.rr(r,b)
m=c==null?A.uF():c
l=new A.dN(j,o,n,r.by(m,t.H),r,q|p,s.i("dN<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.lo(j.a)
return l},
kN(a){var s,r=this
A.o(r).i("dN<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.qE(a)
if((r.c&2)===0&&r.d==null)r.ny()}return null},
kO(a){},
kP(a){},
i3(){if((this.c&4)!==0)return new A.bs("Cannot add new events after calling close")
return new A.bs("Cannot add new events while doing an addStream")},
t(a,b){if(!this.giD())throw A.b(this.i3())
this.cf(b)},
bN(a,b){var s
if(!this.giD())throw A.b(this.i3())
s=A.uu(a,b)
this.cg(s.a,s.b)},
p(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.giD())throw A.b(q.i3())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.r($.v,t.D)
q.cP()
return r},
b8(a,b){this.cg(a,b)},
c3(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aW(null)},
ny(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aW(null)}A.lo(this.b)},
$ib8:1}
A.ho.prototype={
cf(a){var s
for(s=this.d;s!=null;s=s.ch)s.bE(new A.cZ(a))},
cg(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.bE(new A.eQ(a,b))},
cP(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.bE(B.P)
else this.r.aW(null)}}
A.nv.prototype={
$0(){this.c.a(null)
this.b.c4(null)},
$S:0}
A.nx.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.al(new A.aa(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.al(new A.aa(q,r))}},
$S:11}
A.nw.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.bA(j,m.b,a)
if(J.y(k,0)){l=m.d
s=A.n([],l.i("z<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.L)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.dd(s,n)}m.c.cI(s)}}else if(J.y(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.al(new A.aa(s,l))}},
$S(){return this.d.i("U(0)")}}
A.nq.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(j,as)")}}
A.ka.prototype={
l(a){var s=this.b.l(0)
return"TimeoutException after "+s+": "+this.a},
$iF:1}
A.nr.prototype={
$1(a){var s,r,q,p,o,n,m=this
if(a===0){s=A.n([],m.c.i("z<0>"))
for(r=m.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.L)(r),++p){o=r[p]
n=o.b
if(n==null)o.$ti.c.a(n)
s.push(n)}m.a.ai(s)}else{s=A.n([],t.fQ)
for(r=m.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.L)(r),++p)s.push(r[p].c)
q=A.n([],m.c.i("z<0?>"))
for(n=r.length,p=0;p<r.length;r.length===n||(0,A.L)(r),++p)q.push(r[p].b)
m.a.ao(new A.h3(B.c.ew(s,A.DV()),a))}},
$S:8}
A.h3.prototype={
l(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.p(p.a)},
gc0(){var s=this.c
s=s==null?null:s.b
return s==null?A.a4.prototype.gc0.call(this):s}}
A.hB.prototype={
r7(a){this.a.bY(new A.t4(this,a),new A.t5(this,a),t.P)}}
A.t4.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("U(1)")}}
A.t5.prototype={
$2(a,b){this.a.c=new A.aa(a,b)
this.b.$1(1)},
$S:9}
A.t3.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:8}
A.dO.prototype={
bO(a,b){if((this.a.a&30)!==0)throw A.b(A.u("Future already completed"))
this.al(A.uu(a,b))},
ao(a){return this.bO(a,null)},
$ifr:1}
A.aI.prototype={
ai(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.u("Future already completed"))
s.aW(a)},
am(){return this.ai(null)},
al(a){this.a.c2(a)}}
A.a8.prototype={
ai(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.u("Future already completed"))
s.c4(a)},
am(){return this.ai(null)},
al(a){this.a.al(a)}}
A.bK.prototype={
uv(a){if((this.c&15)!==6)return!0
return this.b.b.d7(this.d,a.a,t.y,t.K)},
tO(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.jt(r,n,a.b,p,o,t.l)
else q=m.d7(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.E(s))){if((this.c&1)!==0)throw A.b(A.P("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.P("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.r.prototype={
bY(a,b,c){var s,r,q=$.v
if(q===B.h){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.aU(b,"onError",u.w))}else{a=q.d3(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.yF(b,q)}s=new A.r($.v,c.i("r<0>"))
r=b==null?1:3
this.dk(new A.bK(s,r,a,b,this.$ti.i("@<1>").U(c).i("bK<1,2>")))
return s},
bh(a,b){return this.bY(a,null,b)},
l4(a,b,c){var s=new A.r($.v,c.i("r<0>"))
this.dk(new A.bK(s,19,a,b,this.$ti.i("@<1>").U(c).i("bK<1,2>")))
return s},
iV(a){var s=this.$ti,r=$.v,q=new A.r(r,s)
if(r!==B.h)a=A.yF(a,r)
this.dk(new A.bK(q,2,null,a,s.i("bK<1,1>")))
return q},
aD(a){var s=this.$ti,r=$.v,q=new A.r(r,s)
if(r!==B.h)a=r.by(a,t.z)
this.dk(new A.bK(q,8,a,null,s.i("bK<1,1>")))
return q},
qS(a){this.a=this.a&1|16
this.c=a},
fa(a){this.a=a.a&30|this.a&1
this.c=a.c},
dk(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dk(a)
return}s.fa(r)}s.b.cC(new A.t6(s,a))}},
kK(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.kK(a)
return}n.fa(s)}m.a=n.fT(a)
n.b.cC(new A.tb(m,n))}},
ef(){var s=this.c
this.c=null
return this.fT(s)},
fT(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
c4(a){var s,r=this
if(r.$ti.i("J<1>").b(a))A.t9(a,r,!0)
else{s=r.ef()
r.a=8
r.c=a
A.dR(r,s)}},
cI(a){var s=this,r=s.ef()
s.a=8
s.c=a
A.dR(s,r)},
nF(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gbQ()===r.gbQ())}else s=!1
if(s)return
q=p.ef()
p.fa(a)
A.dR(p,q)},
al(a){var s=this.ef()
this.qS(a)
A.dR(this,s)},
nE(a,b){this.al(new A.aa(a,b))},
aW(a){if(this.$ti.i("J<1>").b(a)){this.k5(a)
return}this.jZ(a)},
jZ(a){this.a^=2
this.b.cC(new A.t8(this,a))},
k5(a){A.t9(a,this,!1)
return},
c2(a){this.a^=2
this.b.cC(new A.t7(this,a))},
hL(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.r($.v,r.$ti)
q.aW(r)
return q}s=new A.r($.v,r.$ti)
q.a=null
q.a=A.cU(a,new A.th(s,a))
r.bY(new A.ti(q,r,s),new A.tj(q,s),t.P)
return s},
$iJ:1}
A.t6.prototype={
$0(){A.dR(this.a,this.b)},
$S:0}
A.tb.prototype={
$0(){A.dR(this.b,this.a.a)},
$S:0}
A.ta.prototype={
$0(){A.t9(this.a.a,this.b,!0)},
$S:0}
A.t8.prototype={
$0(){this.a.cI(this.b)},
$S:0}
A.t7.prototype={
$0(){this.a.al(this.b)},
$S:0}
A.te.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.bX(q.d,t.z)}catch(p){s=A.E(p)
r=A.ad(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.fm(q)
n=k.a
n.c=new A.aa(q,o)
q=n}q.b=!0
return}if(j instanceof A.r&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.r){m=k.b.a
l=new A.r(m.b,m.$ti)
j.bY(new A.tf(l,m),new A.tg(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.tf.prototype={
$1(a){this.a.nF(this.b)},
$S:22}
A.tg.prototype={
$2(a,b){this.a.al(new A.aa(a,b))},
$S:9}
A.td.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.d7(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.E(n)
r=A.ad(n)
q=s
p=r
if(p==null)p=A.fm(q)
o=this.a
o.c=new A.aa(q,p)
o.b=!0}},
$S:0}
A.tc.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.uv(s)&&p.a.e!=null){p.c=p.a.tO(s)
p.b=!1}}catch(o){r=A.E(o)
q=A.ad(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.fm(p)
m=l.b
m.c=new A.aa(p,n)
p=m}p.b=!0}},
$S:0}
A.th.prototype={
$0(){var s=A.xs()
this.a.al(new A.aa(new A.ka("Future not completed",this.b),s))},
$S:0}
A.ti.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.A()
this.c.cI(a)}},
$S(){return this.b.$ti.i("U(1)")}}
A.tj.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.A()
this.b.al(new A.aa(a,b))}},
$S:9}
A.kt.prototype={}
A.a_.prototype={
d_(a){var s=new A.r($.v,t.os),r=new A.O(""),q=this.a0(null,!0,new A.q7(s,r),s.gi7())
q.hy(new A.q8(this,r,q,s))
return s},
gk(a){var s={},r=new A.r($.v,t.hy)
s.a=0
this.a0(new A.q9(s,this),!0,new A.qa(s,r),r.gi7())
return r},
gC(a){var s=new A.r($.v,A.o(this).i("r<a_.T>")),r=this.a0(null,!0,new A.q5(s),s.gi7())
r.hy(new A.q6(this,r,s))
return s}}
A.q7.prototype={
$0(){var s=this.b.a
this.a.c4(s.charCodeAt(0)==0?s:s)},
$S:0}
A.q8.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.p(a)
q.a+=p}catch(o){s=A.E(o)
r=A.ad(o)
q=s
p=r
n=A.i5(q,p)
if(n==null)q=new A.aa(q,p)
else q=n
A.CZ(this.c,this.d,q)}},
$S(){return A.o(this.a).i("~(a_.T)")}}
A.q9.prototype={
$1(a){++this.a.a},
$S(){return A.o(this.b).i("~(a_.T)")}}
A.qa.prototype={
$0(){this.b.c4(this.a.a)},
$S:0}
A.q5.prototype={
$0(){var s,r=new A.bs("No element")
A.jF(r,B.t)
s=A.i5(r,B.t)
if(s==null)s=new A.aa(r,B.t)
this.a.al(s)},
$S:0}
A.q6.prototype={
$1(a){A.D_(this.b,this.c,a)},
$S(){return A.o(this.a).i("~(a_.T)")}}
A.hf.prototype={
a0(a,b,c,d){return this.a.a0(a,b,c,d)},
bs(a,b,c){return this.a0(a,null,b,c)},
aL(a){return this.a0(a,null,null,null)}}
A.d3.prototype={
gcG(){return new A.aY(this,A.o(this).i("aY<1>"))},
ghr(){return(this.b&4)!==0},
gqi(){if((this.b&8)===0)return this.a
return this.a.c},
fe(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.eY():s}r=q.a
s=r.c
return s==null?r.c=new A.eY():s},
gb1(){var s=this.a
return(this.b&8)!==0?s.c:s},
bk(){if((this.b&4)!==0)return new A.bs("Cannot add event after closing")
return new A.bs("Cannot add event while adding a stream")},
rk(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bk())
if((o&2)!==0){o=new A.r($.v,t._)
o.aW(null)
return o}o=p.a
s=b===!0
r=new A.r($.v,t._)
q=s?A.BR(p):p.gnl()
q=a.a0(p.gnm(),s,p.gnA(),q)
s=p.b
if((s&1)!==0?(p.gb1().e&4)!==0:(s&2)===0)q.bf()
p.a=new A.l9(o,r,q)
p.b|=8
return r},
km(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.dc():new A.r($.v,t.D)
return s},
t(a,b){if(this.b>=4)throw A.b(this.bk())
this.b9(b)},
bN(a,b){var s
if(this.b>=4)throw A.b(this.bk())
s=A.uu(a,b)
this.b8(s.a,s.b)},
lg(a){return this.bN(a,null)},
p(){var s=this,r=s.b
if((r&4)!==0)return s.km()
if(r>=4)throw A.b(s.bk())
s.k7()
return s.km()},
k7(){var s=this.b|=4
if((s&1)!==0)this.cP()
else if((s&3)===0)this.fe().t(0,B.P)},
b9(a){var s=this.b
if((s&1)!==0)this.cf(a)
else if((s&3)===0)this.fe().t(0,new A.cZ(a))},
b8(a,b){var s=this.b
if((s&1)!==0)this.cg(a,b)
else if((s&3)===0)this.fe().t(0,new A.eQ(a,b))},
c3(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aW(null)},
iO(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.u("Stream has already been listened to."))
s=A.C9(p,a,b,c,d,A.o(p).c)
r=p.gqi()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.b5()}else p.a=s
s.qT(r)
s.ij(new A.tX(p))
return s},
kN(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.A()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.r)k=r}catch(o){q=A.E(o)
p=A.ad(o)
n=new A.r($.v,t.D)
n.c2(new A.aa(q,p))
k=n}else k=k.aD(s)
m=new A.tW(l)
if(k!=null)k=k.aD(m)
else m.$0()
return k},
kO(a){if((this.b&8)!==0)this.a.b.bf()
A.lo(this.e)},
kP(a){if((this.b&8)!==0)this.a.b.b5()
A.lo(this.f)},
$ib8:1}
A.tX.prototype={
$0(){A.lo(this.a.d)},
$S:0}
A.tW.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aW(null)},
$S:0}
A.le.prototype={
cf(a){this.gb1().b9(a)},
cg(a,b){this.gb1().b8(a,b)},
cP(){this.gb1().c3()}}
A.kv.prototype={
cf(a){this.gb1().bE(new A.cZ(a))},
cg(a,b){this.gb1().bE(new A.eQ(a,b))},
cP(){this.gb1().bE(B.P)}}
A.c9.prototype={}
A.f4.prototype={}
A.aY.prototype={
gJ(a){return(A.h5(this.a)^892482866)>>>0},
V(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.aY&&b.a===this.a}}
A.cY.prototype={
fR(){return this.w.kN(this)},
bn(){this.w.kO(this)},
bo(){this.w.kP(this)}}
A.kq.prototype={
A(){var s=this.b.A()
return s.aD(new A.r2(this))}}
A.r3.prototype={
$2(a,b){var s=this.a
s.b8(a,b)
s.c3()},
$S:9}
A.r2.prototype={
$0(){this.a.a.aW(null)},
$S:3}
A.l9.prototype={}
A.aS.prototype={
qT(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.f3(s)}},
hy(a){this.a=A.kz(this.d,a,A.o(this).i("aS.T"))},
bf(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.ij(q.ge8())},
b5(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.f3(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.ij(s.ge9())}}},
A(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.i4()
r=s.f
return r==null?$.dc():r},
i4(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.fR()},
b9(a){var s=this.e
if((s&8)!==0)return
if(s<64)this.cf(a)
else this.bE(new A.cZ(a))},
b8(a,b){var s
if(t.C.b(a))A.jF(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cg(a,b)
else this.bE(new A.eQ(a,b))},
c3(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.cP()
else s.bE(B.P)},
bn(){},
bo(){},
fR(){return null},
bE(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.eY()
q.t(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.f3(r)}},
cf(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.eU(s.a,a,A.o(s).i("aS.T"))
s.e=(s.e&4294967231)>>>0
s.i6((r&4)!==0)},
cg(a,b){var s,r=this,q=r.e,p=new A.rt(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.i4()
s=r.f
if(s!=null&&s!==$.dc())s.aD(p)
else p.$0()}else{p.$0()
r.i6((q&4)!==0)}},
cP(){var s,r=this,q=new A.rs(r)
r.i4()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.dc())s.aD(q)
else q.$0()},
ij(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.i6((r&4)!==0)},
i6(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.bn()
else q.bo()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.f3(q)},
$ib7:1}
A.rt.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.lY(s,o,this.c,r,t.l)
else q.eU(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.rs.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.eT(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.f2.prototype={
a0(a,b,c,d){return this.a.iO(a,d,c,b===!0)},
bs(a,b,c){return this.a0(a,null,b,c)},
aL(a){return this.a0(a,null,null,null)}}
A.kH.prototype={
gdS(){return this.a},
sdS(a){return this.a=a}}
A.cZ.prototype={
jq(a){a.cf(this.b)}}
A.eQ.prototype={
jq(a){a.cg(this.b,this.c)}}
A.rX.prototype={
jq(a){a.cP()},
gdS(){return null},
sdS(a){throw A.b(A.u("No events after a done."))}}
A.eY.prototype={
f3(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.ib(new A.tH(s,a))
s.a=1},
t(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.sdS(b)
s.c=b}}}
A.tH.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.gdS()
q.b=r
if(r==null)q.c=null
s.jq(this.b)},
$S:0}
A.eR.prototype={
hy(a){},
bf(){var s=this.a
if(s>=0)this.a=s+2},
b5(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.ib(s.gkG())}else s.a=r},
A(){this.a=-1
this.c=null
return $.dc()},
qc(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.eT(s)}}else r.a=q},
$ib7:1}
A.c1.prototype={
gn(){if(this.c)return this.b
return null},
m(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.r($.v,t.k)
r.b=s
r.c=!1
q.b5()
return s}throw A.b(A.u("Already waiting for next."))}return r.pN()},
pN(){var s,r,q=this,p=q.b
if(p!=null){s=new A.r($.v,t.k)
q.b=s
r=p.a0(q.gq4(),!0,q.gq6(),q.gq8())
if(q.b!=null)q.a=r
return s}return $.zu()},
A(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aW(!1)
else s.c=!1
return r.A()}return $.dc()},
q5(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.c4(!0)
if(q.c){r=q.a
if(r!=null)r.bf()}},
q9(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.al(new A.aa(a,b))
else q.c2(new A.aa(a,b))},
q7(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.cI(!1)
else q.jZ(!1)}}
A.hw.prototype={
a0(a,b,c,d){return A.xT(c,this.$ti.c)},
bs(a,b,c){return this.a0(a,null,b,c)}}
A.cz.prototype={
a0(a,b,c,d){var s=null,r=new A.hG(s,s,s,s,this.$ti.i("hG<1>"))
r.d=new A.tF(this,r)
return r.iO(a,d,c,b===!0)},
bs(a,b,c){return this.a0(a,null,b,c)},
aL(a){return this.a0(a,null,null,null)}}
A.tF.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.hG.prototype={
rl(a){var s=this.b
if(s>=4)throw A.b(this.bk())
if((s&1)!==0)this.gb1().b9(a)},
rC(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bk())
r|=4
s.b=r
if((r&1)!==0)s.gb1().c3()},
gcG(){throw A.b(A.a0("Not available"))},
$icM:1}
A.uo.prototype={
$0(){return this.a.al(this.b)},
$S:0}
A.up.prototype={
$0(){return this.a.c4(this.b)},
$S:0}
A.hz.prototype={
a0(a,b,c,d){var s=this.$ti,r=$.v,q=b===!0?1:0,p=d!=null?32:0,o=A.kz(r,a,s.y[1]),n=A.rr(r,d),m=c==null?A.uF():c
s=new A.eU(this,o,n,r.by(m,t.H),r,q|p,s.i("eU<1,2>"))
s.x=this.a.bs(s.gio(),s.giq(),s.gis())
return s},
bs(a,b,c){return this.a0(a,null,b,c)}}
A.eU.prototype={
b9(a){if((this.e&2)!==0)return
this.bC(a)},
b8(a,b){if((this.e&2)!==0)return
this.dh(a,b)},
bn(){var s=this.x
if(s!=null)s.bf()},
bo(){var s=this.x
if(s!=null)s.b5()},
fR(){var s=this.x
if(s!=null){this.x=null
return s.A()}return null},
ip(a){this.w.ot(a,this)},
it(a,b){this.b8(a,b)},
ir(){this.c3()}}
A.dU.prototype={
ot(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.E(q)
r=A.ad(q)
p=s
o=r
n=A.i5(p,o)
if(n!=null){p=n.a
o=n.b}b.b8(p,o)
return}b.b9(m)}}
A.hx.prototype={
t(a,b){var s=this.a
if((s.e&2)!==0)A.w(A.u("Stream is already closed"))
s.bC(b)},
bN(a,b){var s=this.a
if((s.e&2)!==0)A.w(A.u("Stream is already closed"))
s.dh(a,b)},
p(){var s=this.a
if((s.e&2)!==0)A.w(A.u("Stream is already closed"))
s.cH()},
$ib8:1}
A.f0.prototype={
bn(){var s=this.x
if(s!=null)s.bf()},
bo(){var s=this.x
if(s!=null)s.b5()},
fR(){var s=this.x
if(s!=null){this.x=null
return s.A()}return null},
ip(a){var s,r,q,p
try{q=this.w
q===$&&A.x()
q.t(0,a)}catch(p){s=A.E(p)
r=A.ad(p)
if((this.e&2)!==0)A.w(A.u("Stream is already closed"))
this.dh(s,r)}},
it(a,b){var s,r,q,p,o=this,n="Stream is already closed"
try{q=o.w
q===$&&A.x()
q.bN(a,b)}catch(p){s=A.E(p)
r=A.ad(p)
if(s===a){if((o.e&2)!==0)A.w(A.u(n))
o.dh(a,b)}else{if((o.e&2)!==0)A.w(A.u(n))
o.dh(s,r)}}},
ir(){var s,r,q,p,o=this
try{o.x=null
q=o.w
q===$&&A.x()
q.p()}catch(p){s=A.E(p)
r=A.ad(p)
if((o.e&2)!==0)A.w(A.u("Stream is already closed"))
o.dh(s,r)}}}
A.hq.prototype={
a0(a,b,c,d){var s=this.$ti,r=$.v,q=b===!0?1:0,p=d!=null?32:0,o=A.kz(r,a,s.y[1]),n=A.rr(r,d),m=c==null?A.uF():c,l=new A.f0(o,n,r.by(m,t.H),r,q|p,s.i("f0<1,2>"))
l.w=this.a.$1(new A.hx(l))
l.x=this.b.bs(l.gio(),l.giq(),l.gis())
return l},
bs(a,b,c){return this.a0(a,null,b,c)}}
A.aK.prototype={}
A.i2.prototype={$ivQ:1}
A.f8.prototype={$iag:1}
A.ll.prototype={
eb(a,b,c){var s,r,q,p,o,n,m,l,k=this.giB(),j=k.a
if(j===B.h){A.i8(b,c)
return}s=k.b
r=j.gaI()
m=j.glL()
m.toString
q=m
p=$.v
try{$.v=q
s.$5(j,r,a,b,c)
$.v=p}catch(l){o=A.E(l)
n=A.ad(l)
$.v=p
m=b===o?c:n
q.eb(j,o,m)}},
$iK:1}
A.kD.prototype={
gki(){var s=this.at
return s==null?this.at=new A.f8(this):s},
gaI(){return this.ax.gki()},
gbQ(){return this.as.a},
eT(a){var s,r,q
try{this.bX(a,t.H)}catch(q){s=A.E(q)
r=A.ad(q)
this.eb(this,s,r)}},
eU(a,b,c){var s,r,q
try{this.d7(a,b,t.H,c)}catch(q){s=A.E(q)
r=A.ad(q)
this.eb(this,s,r)}},
lY(a,b,c,d,e){var s,r,q
try{this.jt(a,b,c,t.H,d,e)}catch(q){s=A.E(q)
r=A.ad(q)
this.eb(this,s,r)}},
iU(a,b){return new A.rT(this,this.by(a,b),b)},
ln(a,b,c){return new A.rV(this,this.d3(a,b,c),c,b)},
eq(a){return new A.rS(this,this.by(a,t.H))},
h5(a,b){return new A.rU(this,this.d3(a,t.H,b),b)},
h(a,b){var s,r=this.ay,q=r.h(0,b)
if(q!=null||r.I(b))return q
s=this.ax.h(0,b)
if(s!=null)r.j(0,b,s)
return s},
eA(a,b){this.eb(this,a,b)},
lA(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gaI(),this,a,b)},
bX(a){var s=this.a,r=s.a
return s.b.$4(r,r.gaI(),this,a)},
d7(a,b){var s=this.b,r=s.a
return s.b.$5(r,r.gaI(),this,a,b)},
jt(a,b,c){var s=this.c,r=s.a
return s.b.$6(r,r.gaI(),this,a,b,c)},
by(a){var s=this.d,r=s.a
return s.b.$4(r,r.gaI(),this,a)},
d3(a){var s=this.e,r=s.a
return s.b.$4(r,r.gaI(),this,a)},
eP(a){var s=this.f,r=s.a
return s.b.$4(r,r.gaI(),this,a)},
ly(a,b){var s=this.r,r=s.a
if(r===B.h)return null
return s.b.$5(r,r.gaI(),this,a,b)},
cC(a){var s=this.w,r=s.a
return s.b.$4(r,r.gaI(),this,a)},
j_(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gaI(),this,a,b)},
iZ(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gaI(),this,a,b)},
lN(a){var s=this.z,r=s.a
return s.b.$4(r,r.gaI(),this,a)},
gkV(){return this.a},
gkY(){return this.b},
gkW(){return this.c},
gkR(){return this.d},
gkS(){return this.e},
gkQ(){return this.f},
gko(){return this.r},
giL(){return this.w},
gkg(){return this.x},
gkf(){return this.y},
gkL(){return this.z},
gkr(){return this.Q},
giB(){return this.as},
glL(){return this.ax},
gkA(){return this.ay}}
A.rT.prototype={
$0(){return this.a.bX(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.rV.prototype={
$1(a){var s=this
return s.a.d7(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").U(this.c).i("1(2)")}}
A.rS.prototype={
$0(){return this.a.eT(this.b)},
$S:0}
A.rU.prototype={
$1(a){return this.a.eU(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.ux.prototype={
$0(){A.wV(this.a,this.b)},
$S:0}
A.l1.prototype={
gkV(){return B.cu},
gkY(){return B.cw},
gkW(){return B.cv},
gkR(){return B.ct},
gkS(){return B.co},
gkQ(){return B.cy},
gko(){return B.cq},
giL(){return B.cx},
gkg(){return B.cp},
gkf(){return B.cn},
gkL(){return B.cs},
gkr(){return B.cr},
giB(){return B.cm},
glL(){return null},
gkA(){return $.zL()},
gki(){var s=$.tK
return s==null?$.tK=new A.f8(this):s},
gaI(){var s=$.tK
return s==null?$.tK=new A.f8(this):s},
gbQ(){return this},
eT(a){var s,r,q
try{if(B.h===$.v){a.$0()
return}A.uy(null,null,this,a)}catch(q){s=A.E(q)
r=A.ad(q)
A.i8(s,r)}},
eU(a,b){var s,r,q
try{if(B.h===$.v){a.$1(b)
return}A.uA(null,null,this,a,b)}catch(q){s=A.E(q)
r=A.ad(q)
A.i8(s,r)}},
lY(a,b,c){var s,r,q
try{if(B.h===$.v){a.$2(b,c)
return}A.uz(null,null,this,a,b,c)}catch(q){s=A.E(q)
r=A.ad(q)
A.i8(s,r)}},
iU(a,b){return new A.tM(this,a,b)},
ln(a,b,c){return new A.tO(this,a,c,b)},
eq(a){return new A.tL(this,a)},
h5(a,b){return new A.tN(this,a,b)},
h(a,b){return null},
eA(a,b){A.i8(a,b)},
lA(a,b){return A.yH(null,null,this,a,b)},
bX(a){if($.v===B.h)return a.$0()
return A.uy(null,null,this,a)},
d7(a,b){if($.v===B.h)return a.$1(b)
return A.uA(null,null,this,a,b)},
jt(a,b,c){if($.v===B.h)return a.$2(b,c)
return A.uz(null,null,this,a,b,c)},
by(a){return a},
d3(a){return a},
eP(a){return a},
ly(a,b){return null},
cC(a){A.uB(null,null,this,a)},
j_(a,b){return A.vM(a,b)},
iZ(a,b){return A.xv(a,b)},
lN(a){A.wm(a)}}
A.tM.prototype={
$0(){return this.a.bX(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.tO.prototype={
$1(a){var s=this
return s.a.d7(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").U(this.c).i("1(2)")}}
A.tL.prototype={
$0(){return this.a.eT(this.b)},
$S:0}
A.tN.prototype={
$1(a){return this.a.eU(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.cx.prototype={
gk(a){return this.a},
gB(a){return this.a===0},
gW(a){return this.a!==0},
gR(){return new A.dS(this,A.o(this).i("dS<1>"))},
gb6(){var s=A.o(this)
return A.dw(new A.dS(this,s.i("dS<1>")),new A.tk(this),s.c,s.y[1])},
I(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.kb(a)},
kb(a){var s=this.d
if(s==null)return!1
return this.bG(this.kt(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.xV(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.xV(q,b)
return r}else return this.ks(b)},
ks(a){var s,r,q=this.d
if(q==null)return null
s=this.kt(q,a)
r=this.bG(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.jY(s==null?q.b=A.vX():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.jY(r==null?q.c=A.vX():r,b,c)}else q.l_(b,c)},
l_(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.vX()
s=p.c5(a)
r=o[s]
if(r==null){A.vY(o,s,[a,b]);++p.a
p.e=null}else{q=p.bG(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a9(a,b){var s,r,q,p,o,n=this,m=n.ka()
for(s=m.length,r=A.o(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.av(n))}},
ka(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
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
jY(a,b,c){if(a[b]==null){++this.a
this.e=null}A.vY(a,b,c)},
c5(a){return J.aL(a)&1073741823},
kt(a,b){return a[this.c5(b)]},
bG(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.y(a[r],b))return r
return-1}}
A.tk.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.o(s).y[1].a(r):r},
$S(){return A.o(this.a).i("2(1)")}}
A.d_.prototype={
c5(a){return A.lu(a)&1073741823},
bG(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.ht.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.n1(b)},
j(a,b,c){this.n2(b,c)},
I(a){if(!this.w.$1(a))return!1
return this.n0(a)},
c5(a){return this.r.$1(a)&1073741823},
bG(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.rR.prototype={
$1(a){return this.a.b(a)},
$S:18}
A.dS.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gW(a){return this.a.a!==0},
gv(a){var s=this.a
return new A.kM(s,s.ka(),this.$ti.i("kM<1>"))},
D(a,b){return this.a.I(b)}}
A.kM.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.av(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.hE.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.mV(b)},
j(a,b,c){this.mX(b,c)},
I(a){if(!this.y.$1(a))return!1
return this.mU(a)},
O(a,b){if(!this.y.$1(b))return null
return this.mW(b)},
dN(a){return this.x.$1(a)&1073741823},
dO(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.tC.prototype={
$1(a){return this.a.b(a)},
$S:18}
A.cy.prototype={
gv(a){var s=this,r=new A.d1(s,s.r,A.o(s).i("d1<1>"))
r.c=s.e
return r},
gk(a){return this.a},
gB(a){return this.a===0},
gW(a){return this.a!==0},
D(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.nJ(b)
return r}},
nJ(a){var s=this.d
if(s==null)return!1
return this.bG(s[this.c5(a)],a)>=0},
gC(a){var s=this.e
if(s==null)throw A.b(A.u("No elements"))
return s.a},
ga_(a){var s=this.f
if(s==null)throw A.b(A.u("No elements"))
return s.a},
t(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.jX(s==null?q.b=A.vZ():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.jX(r==null?q.c=A.vZ():r,b)}else return q.nj(b)},
nj(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.vZ()
s=q.c5(a)
r=p[s]
if(r==null)p[s]=[q.iG(a)]
else{if(q.bG(r,a)>=0)return!1
r.push(q.iG(a))}return!0},
O(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.k8(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.k8(s.c,b)
else return s.iK(b)},
iK(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.c5(a)
r=n[s]
q=o.bG(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.k9(p)
return!0},
jX(a,b){if(a[b]!=null)return!1
a[b]=this.iG(b)
return!0},
k8(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.k9(s)
delete a[b]
return!0},
iE(){this.r=this.r+1&1073741823},
iG(a){var s,r=this,q=new A.tD(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.iE()
return q},
k9(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.iE()},
c5(a){return J.aL(a)&1073741823},
bG(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.y(a[r].a,b))return r
return-1}}
A.tD.prototype={}
A.d1.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.av(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.nA.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:13}
A.oa.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:13}
A.du.prototype={
gv(a){var s=this
return new A.kS(s,s.a,s.c,s.$ti.i("kS<1>"))},
gk(a){return this.b},
aK(a){var s,r,q,p=this;++p.a
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
gC(a){var s
if(this.b===0)throw A.b(A.u("No such element"))
s=this.c
s.toString
return s},
ga_(a){var s
if(this.b===0)throw A.b(A.u("No such element"))
s=this.c.c
s.toString
return s},
gaU(a){var s=this.b
if(s===0)throw A.b(A.u("No such element"))
if(s>1)throw A.b(A.u("Too many elements"))
s=this.c
s.toString
return s},
gB(a){return this.b===0},
fQ(a,b,c){var s,r,q=this
if(b.a!=null)throw A.b(A.u("LinkedListEntry is already in a LinkedList"));++q.a
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
iQ(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.kS.prototype={
gn(){var s=this.c
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.a
if(s.b!==r.a)throw A.b(A.av(s))
if(r.b!==0)r=s.e&&s.d===r.gC(0)
else r=!0
if(r){s.c=null
return!1}s.e=!0
r=s.d
s.c=r
s.d=r.b
return!0}}
A.aP.prototype={
geH(){var s=this.a
if(s==null||this===s.gC(0))return null
return this.c}}
A.A.prototype={
gv(a){return new A.a5(a,this.gk(a),A.bh(a).i("a5<A.E>"))},
a3(a,b){return this.h(a,b)},
gB(a){return this.gk(a)===0},
gW(a){return!this.gB(a)},
gC(a){if(this.gk(a)===0)throw A.b(A.ak())
return this.h(a,0)},
ga_(a){if(this.gk(a)===0)throw A.b(A.ak())
return this.h(a,this.gk(a)-1)},
gaU(a){if(this.gk(a)===0)throw A.b(A.ak())
if(this.gk(a)>1)throw A.b(A.fI())
return this.h(a,0)},
D(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){if(J.y(this.h(a,s),b))return!0
if(r!==this.gk(a))throw A.b(A.av(a))}return!1},
cW(a,b,c){var s,r,q=this.gk(a)
for(s=0;s<q;++s){r=this.h(a,s)
if(b.$1(r))return r
if(q!==this.gk(a))throw A.b(A.av(a))}if(c!=null)return c.$0()
throw A.b(A.ak())},
ew(a,b){return this.cW(a,b,null)},
K(a,b){var s
if(this.gk(a)===0)return""
s=A.qb("",a,b)
return s.charCodeAt(0)==0?s:s},
jy(a,b){return new A.bt(a,b.i("bt<0>"))},
cr(a,b,c){return new A.ab(a,b,A.bh(a).i("@<A.E>").U(c).i("ab<1,2>"))},
aV(a,b){return A.bX(a,b,null,A.bh(a).i("A.E"))},
cv(a,b){return A.bX(a,0,A.bg(b,"count",t.S),A.bh(a).i("A.E"))},
ve(a){var s,r=A.vw(A.bh(a).i("A.E"))
for(s=0;s<this.gk(a);++s)r.t(0,this.h(a,s))
return r},
t(a,b){var s=this.gk(a)
this.sk(a,s+1)
this.j(a,s,b)},
h6(a,b){return new A.bi(a,A.bh(a).i("@<A.E>").U(b).i("bi<1,2>"))},
df(a,b){var s=b==null?A.Ee():b
A.jW(a,0,this.gk(a)-1,s)},
M(a,b,c){var s,r=this.gk(a)
if(c==null)c=r
A.bc(b,c,r)
s=A.Q(this.f2(a,b,c),A.bh(a).i("A.E"))
return s},
aQ(a,b){return this.M(a,b,null)},
f2(a,b,c){A.bc(b,c,this.gk(a))
return A.bX(a,b,c,A.bh(a).i("A.E"))},
he(a,b,c,d){var s
A.bc(b,c,this.gk(a))
for(s=b;s<c;++s)this.j(a,s,d)},
a6(a,b,c,d,e){var s,r,q,p,o
A.bc(b,c,this.gk(a))
s=c-b
if(s===0)return
A.aQ(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.lC(d,e).bj(0,!1)
r=0}p=J.I(q)
if(r+s>p.gk(q))throw A.b(A.x6())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
aa(a,b,c,d){return this.a6(a,b,c,d,0)},
cE(a,b,c){var s,r
if(t.j.b(c))this.aa(a,b,b+c.length,c)
else for(s=J.M(c);s.m();b=r){r=b+1
this.j(a,b,s.gn())}},
l(a){return A.o5(a,"[","]")},
$iB:1,
$im:1,
$iq:1}
A.T.prototype={
a9(a,b){var s,r,q,p
for(s=J.M(this.gR()),r=A.o(this).i("T.V");s.m();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
gbP(){return J.aB(this.gR(),new A.oK(this),A.o(this).i("V<T.K,T.V>"))},
cs(a,b,c,d){var s,r,q,p,o,n=A.G(c,d)
for(s=J.M(this.gR()),r=A.o(this).i("T.V");s.m();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
I(a){return J.A8(this.gR(),a)},
gk(a){return J.ar(this.gR())},
gB(a){return J.cf(this.gR())},
gW(a){return J.fk(this.gR())},
gb6(){return new A.hF(this,A.o(this).i("hF<T.K,T.V>"))},
l(a){return A.oL(this)},
$iN:1}
A.oK.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.o(s).i("T.V").a(r)
return new A.V(a,r,A.o(s).i("V<T.K,T.V>"))},
$S(){return A.o(this.a).i("V<T.K,T.V>(T.K)")}}
A.oM.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.p(a)
r.a=(r.a+=s)+": "
s=A.p(b)
r.a+=s},
$S:42}
A.hF.prototype={
gk(a){var s=this.a
return s.gk(s)},
gB(a){var s=this.a
return s.gB(s)},
gW(a){var s=this.a
return s.gW(s)},
gC(a){var s=this.a
s=s.h(0,J.bB(s.gR()))
return s==null?this.$ti.y[1].a(s):s},
gaU(a){var s=this.a
s=s.h(0,J.lB(s.gR()))
return s==null?this.$ti.y[1].a(s):s},
ga_(a){var s=this.a
s=s.h(0,J.ve(s.gR()))
return s==null?this.$ti.y[1].a(s):s},
gv(a){var s=this.a
return new A.kU(J.M(s.gR()),s,this.$ti.i("kU<1,2>"))}}
A.kU.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.lg.prototype={}
A.fU.prototype={
h(a,b){return this.a.h(0,b)},
I(a){return this.a.I(a)},
a9(a,b){this.a.a9(0,b)},
gB(a){var s=this.a
return s.gB(s)},
gW(a){var s=this.a
return s.gW(s)},
gk(a){var s=this.a
return s.gk(s)},
gR(){return this.a.gR()},
l(a){return this.a.l(0)},
gb6(){return this.a.gb6()},
gbP(){return this.a.gbP()},
cs(a,b,c,d){return this.a.cs(0,b,c,d)},
$iN:1}
A.eF.prototype={}
A.fO.prototype={
gv(a){var s=this
return new A.kT(s,s.c,s.d,s.b,s.$ti.i("kT<1>"))},
gB(a){return this.b===this.c},
gk(a){return(this.c-this.b&this.a.length-1)>>>0},
gC(a){var s=this,r=s.b
if(r===s.c)throw A.b(A.ak())
r=s.a[r]
return r==null?s.$ti.c.a(r):r},
ga_(a){var s=this,r=s.b,q=s.c
if(r===q)throw A.b(A.ak())
r=s.a
r=r[(q-1&r.length-1)>>>0]
return r==null?s.$ti.c.a(r):r},
gaU(a){var s,r=this
if(r.b===r.c)throw A.b(A.ak())
if(r.gk(0)>1)throw A.b(A.fI())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a3(a,b){var s,r=this
A.AQ(b,r.gk(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
O(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.y(r.a[s],b)){r.iK(s);++r.d
return!0}return!1},
l(a){return A.o5(this,"{","}")},
iK(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.kT.prototype={
gn(){var s=this.e
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a
if(r.c!==q.d)A.w(A.av(q))
s=r.d
if(s===r.b){r.e=null
return!1}q=q.a
r.e=q[s]
r.d=(s+1&q.length-1)>>>0
return!0}}
A.bU.prototype={
gB(a){return this.gk(this)===0},
gW(a){return this.gk(this)!==0},
G(a,b){var s
for(s=J.M(b);s.m();)this.t(0,s.gn())},
cr(a,b,c){return new A.dn(this,b,A.o(this).i("@<1>").U(c).i("dn<1,2>"))},
gaU(a){var s,r=this
if(r.gk(r)>1)throw A.b(A.fI())
s=r.gv(r)
if(!s.m())throw A.b(A.ak())
return s.gn()},
l(a){return A.o5(this,"{","}")},
cv(a,b){return A.xu(this,b,A.o(this).c)},
aV(a,b){return A.xr(this,b,A.o(this).c)},
gC(a){var s=this.gv(this)
if(!s.m())throw A.b(A.ak())
return s.gn()},
ga_(a){var s,r=this.gv(this)
if(!r.m())throw A.b(A.ak())
do s=r.gn()
while(r.m())
return s},
a3(a,b){var s,r
A.aQ(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.j_(b,b-r,this,null,"index"))},
$iB:1,
$im:1,
$icP:1}
A.hO.prototype={}
A.hY.prototype={}
A.kQ.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.qm(b):s}},
gk(a){return this.b==null?this.c.a:this.e5().length},
gB(a){return this.gk(0)===0},
gW(a){return this.gk(0)>0},
gR(){if(this.b==null){var s=this.c
return new A.ai(s,A.o(s).i("ai<1>"))}return new A.kR(this)},
gb6(){var s,r=this
if(r.b==null){s=r.c
return new A.aO(s,A.o(s).i("aO<2>"))}return A.dw(r.e5(),new A.ty(r),t.N,t.z)},
I(a){if(this.b==null)return this.c.I(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
a9(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a9(0,b)
s=o.e5()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.uq(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.av(o))}},
e5(){var s=this.c
if(s==null)s=this.c=A.n(Object.keys(this.a),t.s)
return s},
qm(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.uq(this.a[a])
return this.b[a]=s}}
A.ty.prototype={
$1(a){return this.a.h(0,a)},
$S:53}
A.kR.prototype={
gk(a){return this.a.gk(0)},
a3(a,b){var s=this.a
return s.b==null?s.gR().a3(0,b):s.e5()[b]},
gv(a){var s=this.a
if(s.b==null){s=s.gR()
s=s.gv(s)}else{s=s.e5()
s=new J.e6(s,s.length,A.ap(s).i("e6<1>"))}return s},
D(a,b){return this.a.I(b)}}
A.tw.prototype={
p(){var s,r,q,p=this,o="Stream is already closed"
p.n3()
s=p.a
r=s.a
s.a=""
q=A.yD(r.charCodeAt(0)==0?r:r,p.b)
r=p.c.a
if((r.e&2)!==0)A.w(A.u(o))
r.bC(q)
if((r.e&2)!==0)A.w(A.u(o))
r.cH()}}
A.uf.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:37}
A.ue.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:37}
A.ig.prototype={
gaA(){return"us-ascii"},
j5(a){return B.aM.u(a)}}
A.lf.prototype={
u(a){var s,r,q,p=A.bc(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.aU(a,"string","Contains invalid characters."))
o[r]=q}return o},
bB(a){return new A.u6(new A.eM(a),this.a)}}
A.ih.prototype={}
A.u6.prototype={
p(){this.a.a.p()},
br(a,b,c,d){var s,r,q,p
A.bc(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.P("Source contains invalid character with code point: "+q+".",null))}s=new A.bP(a)
p=this.a.a
p.t(0,s.M(s,b,c))
if(d)p.p()}}
A.lM.prototype={
gj6(){return B.aQ},
ux(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.bc(a1,a2,a0.length)
s=$.wu()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.uW(a0.charCodeAt(l))
h=A.uW(a0.charCodeAt(l+1))
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
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new A.O("")
e=p}else e=p
e.a+=B.a.q(a0,q,r)
d=A.b6(k)
e.a+=d
q=l
continue}}throw A.b(A.X("Invalid base64 data",a0,r))}if(p!=null){e=B.a.q(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.wH(a0,n,a2,o,m,d)
else{c=B.b.ar(d-1,4)+1
if(c===1)throw A.b(A.X(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.d4(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.wH(a0,n,a2,o,m,b)
else{c=B.b.ar(b,4)
if(c===1)throw A.b(A.X(a,a0,a2))
if(c>1)a0=B.a.d4(a0,a2,a2,c===2?"==":"=")}return a0}}
A.im.prototype={
u(a){var s=a.length
if(s===0)return""
s=new A.kx(u.U).lx(a,0,s,!0)
s.toString
return A.cS(s,0,null)},
bB(a){return new A.r9(a,new A.rq(u.U))}}
A.kx.prototype={
lr(a){return new Uint8Array(a)},
lx(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.b.N(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.lr(o)
r.a=A.C1(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.rq.prototype={
lr(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.de(B.d.gaz(s),s.byteOffset,a)}}
A.rl.prototype={
t(a,b){this.kd(b,0,J.ar(b),!1)},
p(){this.kd(B.bx,0,0,!0)}}
A.r9.prototype={
kd(a,b,c,d){var s,r,q="Stream is already closed",p=this.b.lx(a,b,c,d)
if(p!=null){s=A.cS(p,0,null)
r=this.a.a
if((r.e&2)!==0)A.w(A.u(q))
r.bC(s)}if(d){r=this.a.a
if((r.e&2)!==0)A.w(A.u(q))
r.cH()}}}
A.il.prototype={
u(a){var s,r,q=A.bc(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.kw()
r=s.j2(a,0,q)
r.toString
s.iX(a,q)
return r},
bB(a){return new A.rk(a,new A.kw())}}
A.kw.prototype={
j2(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.xI(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.BZ(a,b,c,q)
r.a=A.C0(a,b,c,s,0,r.a)
return s},
iX(a,b){var s=this.a
if(s<-1)throw A.b(A.X("Missing padding character",a,b))
if(s>0)throw A.b(A.X("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.rk.prototype={
t(a,b){var s,r=b.length
if(r===0)return
s=this.b.j2(b,0,r)
if(s!=null){r=this.a.a
if((r.e&2)!==0)A.w(A.u("Stream is already closed"))
r.bC(s)}},
p(){this.b.iX(null,null)
var s=this.a.a
if((s.e&2)!==0)A.w(A.u("Stream is already closed"))
s.cH()},
br(a,b,c,d){var s,r,q,p="Stream is already closed"
A.bc(b,c,a.length)
if(b===c)return
s=this.b
r=s.j2(a,b,c)
if(r!=null){q=this.a.a
if((q.e&2)!==0)A.w(A.u(p))
q.bC(r)}if(d){s.iX(a,c)
s=this.a.a
if((s.e&2)!==0)A.w(A.u(p))
s.cH()}}}
A.lR.prototype={}
A.eM.prototype={
t(a,b){this.a.t(0,b)},
p(){this.a.p()}}
A.kA.prototype={
t(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.I(b)
if(n.gk(b)>p.length-o){p=q.b
s=n.gk(b)+p.length-1
s|=B.b.a2(s,1)
s|=s>>>2
s|=s>>>4
s|=s>>>8
r=new Uint8Array((((s|s>>>16)>>>0)+1)*2)
p=q.b
B.d.aa(r,0,p.length,p)
q.b=r}p=q.b
o=q.c
B.d.aa(p,o,o+n.gk(b),b)
q.c=q.c+n.gk(b)},
p(){this.a.$1(B.d.M(this.b,0,this.c))}}
A.iy.prototype={}
A.l7.prototype={
t(a,b){this.b.push(b)},
p(){this.a.$1(this.b)}}
A.dP.prototype={
t(a,b){this.b.t(0,b)},
bN(a,b){A.bg(a,"error",t.K)
this.a.bN(a,b)},
p(){this.b.p()},
$ib8:1}
A.iz.prototype={}
A.an.prototype={
bB(a){throw A.b(A.a0("This converter does not support chunked conversions: "+this.l(0)))},
rv(a){return new A.hq(new A.mw(this),a,t.fM.U(A.o(this).i("an.T")).i("hq<1,2>"))}}
A.mw.prototype={
$1(a){return new A.dP(a,this.a.bB(a))},
$S:80}
A.dq.prototype={}
A.fN.prototype={
l(a){var s=A.iP(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.j7.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.o8.prototype={
an(a,b){var s=A.yD(a,this.grN().a)
return s},
a8(a,b){var s=A.Ck(a,this.gj6().b,null)
return s},
gj6(){return B.bi},
grN(){return B.bh}}
A.j9.prototype={
bB(a){return new A.tx(null,this.b,new A.la(a))}}
A.tx.prototype={
t(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.u("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.O("")
q=new A.u1(r,s)
A.xX(b,q,p.b,p.a)
if(r.a.length!==0)q.ih()
s.p()},
p(){}}
A.j8.prototype={
bB(a){return new A.tw(this.a,a,new A.O(""))}}
A.tA.prototype={
m4(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.hR(a,s,r)
s=r+1
n.ac(92)
n.ac(117)
n.ac(100)
p=q>>>8&15
n.ac(p<10?48+p:87+p)
p=q>>>4&15
n.ac(p<10?48+p:87+p)
p=q&15
n.ac(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.hR(a,s,r)
s=r+1
n.ac(92)
switch(q){case 8:n.ac(98)
break
case 9:n.ac(116)
break
case 10:n.ac(110)
break
case 12:n.ac(102)
break
case 13:n.ac(114)
break
default:n.ac(117)
n.ac(48)
n.ac(48)
p=q>>>4&15
n.ac(p<10?48+p:87+p)
p=q&15
n.ac(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)n.hR(a,s,r)
s=r+1
n.ac(92)
n.ac(q)}}if(s===0)n.aO(a)
else if(s<m)n.hR(a,s,m)},
i5(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.j7(a,null))}s.push(a)},
hQ(a){var s,r,q,p,o=this
if(o.m3(a))return
o.i5(a)
try{s=o.b.$1(a)
if(!o.m3(s)){q=A.xa(a,null,o.gkI())
throw A.b(q)}o.a.pop()}catch(p){r=A.E(p)
q=A.xa(a,r,o.gkI())
throw A.b(q)}},
m3(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.vy(a)
return!0}else if(a===!0){r.aO("true")
return!0}else if(a===!1){r.aO("false")
return!0}else if(a==null){r.aO("null")
return!0}else if(typeof a=="string"){r.aO('"')
r.m4(a)
r.aO('"')
return!0}else if(t.j.b(a)){r.i5(a)
r.vw(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.i5(a)
s=r.vx(a)
r.a.pop()
return s}else return!1},
vw(a){var s,r,q=this
q.aO("[")
s=J.I(a)
if(s.gW(a)){q.hQ(s.h(a,0))
for(r=1;r<s.gk(a);++r){q.aO(",")
q.hQ(s.h(a,r))}}q.aO("]")},
vx(a){var s,r,q,p,o=this,n={}
if(a.gB(a)){o.aO("{}")
return!0}s=a.gk(a)*2
r=A.aG(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a9(0,new A.tB(n,r))
if(!n.b)return!1
o.aO("{")
for(p='"';q<s;q+=2,p=',"'){o.aO(p)
o.m4(A.t(r[q]))
o.aO('":')
o.hQ(r[q+1])}o.aO("}")
return!0}}
A.tB.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:42}
A.tz.prototype={
gkI(){var s=this.c
return s instanceof A.O?s.l(0):null},
vy(a){this.c.hP(B.u.l(a))},
aO(a){this.c.hP(a)},
hR(a,b,c){this.c.hP(B.a.q(a,b,c))},
ac(a){this.c.ac(a)}}
A.ja.prototype={
gaA(){return"iso-8859-1"},
j5(a){return B.bj.u(a)}}
A.jb.prototype={}
A.k5.prototype={
t(a,b){this.br(b,0,b.length,!1)}}
A.u1.prototype={
ac(a){var s=this.a,r=A.b6(a)
if((s.a+=r).length>16)this.ih()},
hP(a){if(this.a.a.length!==0)this.ih()
this.b.t(0,a)},
ih(){var s=this.a,r=s.a
s.a=""
this.b.t(0,r.charCodeAt(0)==0?r:r)}}
A.hR.prototype={
p(){},
br(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.b6(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.p()},
t(a,b){this.a.a+=b}}
A.la.prototype={
t(a,b){var s=this.a.a
if((s.e&2)!==0)A.w(A.u("Stream is already closed"))
s.bC(b)},
br(a,b,c,d){var s="Stream is already closed",r=b===0&&c===a.length,q=this.a.a
if(r){if((q.e&2)!==0)A.w(A.u(s))
q.bC(a)}else{r=B.a.q(a,b,c)
if((q.e&2)!==0)A.w(A.u(s))
q.bC(r)}if(d){if((q.e&2)!==0)A.w(A.u(s))
q.cH()}},
p(){var s=this.a.a
if((s.e&2)!==0)A.w(A.u("Stream is already closed"))
s.cH()}}
A.ud.prototype={
p(){var s,r,q,p=this.c
this.a.tH(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.br(q,0,q.length,!0)}else r.p()},
t(a,b){this.br(b,0,J.ar(b),!1)},
br(a,b,c,d){var s,r=this.c,q=this.a.c7(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.br(s,0,s.length,!1)
r.a=""
return}}}
A.kk.prototype={
gaA(){return"utf-8"},
rK(a,b){return new A.ca((b===!0?B.ci:B.ah).a).c7(a,0,null,!0)},
j1(a){return this.rK(a,null)},
j5(a){return B.f.u(a)}}
A.kl.prototype={
u(a){var s,r,q=A.bc(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.lk(s)
if(r.kq(a,0,q)!==q)r.fY()
return B.d.M(s,0,r.b)},
bB(a){return new A.ug(new A.eM(a),new Uint8Array(1024))}}
A.lk.prototype={
fY(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.C(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
lf(a,b){var s,r,q,p,o=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=o.c
q=o.b
p=o.b=q+1
r.$flags&2&&A.C(r)
r[q]=s>>>18|240
q=o.b=p+1
r[p]=s>>>12&63|128
p=o.b=q+1
r[q]=s>>>6&63|128
o.b=p+1
r[p]=s&63|128
return!0}else{o.fY()
return!1}},
kq(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.C(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.lf(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.fY()}else if(o<=2047){n=k.b
l=n+1
if(l>=q)break
k.b=l
r&2&&A.C(s)
s[n]=o>>>6|192
k.b=l+1
s[l]=o&63|128}else{n=k.b
if(n+2>=q)break
l=k.b=n+1
r&2&&A.C(s)
s[n]=o>>>12|224
n=k.b=l+1
s[l]=o>>>6&63|128
k.b=n+1
s[n]=o&63|128}}}return p}}
A.ug.prototype={
p(){if(this.a!==0){this.br("",0,0,!0)
return}this.d.a.p()},
br(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.lf(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.kq(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.fY()
else n.a=a.charCodeAt(b);++b}s.t(0,B.d.M(r,0,n.b))
if(o)s.p()
n.b=0}while(b<c)
if(d)n.p()}}
A.hk.prototype={
bB(a){return new A.ud(new A.ca(this.a),new A.la(a),new A.O(""))}}
A.ca.prototype={
c7(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.bc(b,c,J.ar(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.CN(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.CM(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.i9(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.yk(p)
m.b=0
throw A.b(A.X(n,a,q+m.c))}return o},
i9(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.b.N(b+c,2)
r=q.i9(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.i9(a,s,c,d)}return q.rM(a,b,c,d)},
tH(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.b6(65533)
a.a+=s}else throw A.b(A.X(A.yk(77),null,null))},
rM(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.O(""),g=b+1,f=a[b]
$label0$0:for(s=l.a;;){for(;;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){q=A.b6(i)
h.a+=q
if(g===c)break $label0$0
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:q=A.b6(k)
h.a+=q
break
case 65:q=A.b6(k)
h.a+=q;--g
break
default:q=A.b6(k)
h.a=(h.a+=q)+q
break}else{l.b=j
l.c=g-1
return""}j=0}if(g===c)break $label0$0
p=g+1
f=a[g]}p=g+1
f=a[g]
if(f<128){for(;;){if(!(p<c)){o=c
break}n=p+1
f=a[p]
if(f>=128){o=n-1
p=n
break}p=n}if(o-g<20)for(m=g;m<o;++m){q=A.b6(a[m])
h.a+=q}else{q=A.cS(a,g,o)
h.a+=q}if(o===c)break $label0$0
g=p}else g=p}if(d&&j>32)if(s){s=A.b6(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.lm.prototype={}
A.ay.prototype={
bA(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bd(p,r)
return new A.ay(p===0?!1:s,r,p)},
nR(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.ce()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bd(s,q)
return new A.ay(n===0?!1:o,q,n)},
nT(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.ce()
s=k-a
if(s<=0)return l.a?$.ww():$.ce()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bd(s,q)
m=new A.ay(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.f8(0,$.fj())
return m},
c_(a,b){var s,r,q,p,o=this,n=o.c
if(n===0)return o
s=b/16|0
if(B.b.ar(b,16)===0)return o.nR(s)
r=n+s+1
q=new Uint16Array(r)
A.xP(o.b,n,b,q)
n=o.a
p=A.bd(r,q)
return new A.ay(p===0?!1:n,q,p)},
e1(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.P("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.b.N(b,16)
q=B.b.ar(b,16)
if(q===0)return j.nT(r)
p=s-r
if(p<=0)return j.a?$.ww():$.ce()
o=j.b
n=new Uint16Array(p)
A.C6(o,s,b,n)
s=j.a
m=A.bd(p,n)
l=new A.ay(m===0?!1:s,n,m)
if(s){if((o[r]&B.b.c_(1,q)-1)>>>0!==0)return l.f8(0,$.fj())
for(k=0;k<r;++k)if(o[k]!==0)return l.f8(0,$.fj())}return l},
S(a,b){var s,r=this.a
if(r===b.a){s=A.rn(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
i2(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.i2(p,b)
if(o===0)return $.ce()
if(n===0)return p.a===b?p:p.bA(0)
s=o+1
r=new Uint16Array(s)
A.C2(p.b,o,a.b,n,r)
q=A.bd(s,r)
return new A.ay(q===0?!1:b,r,q)},
f9(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.ce()
s=a.c
if(s===0)return p.a===b?p:p.bA(0)
r=new Uint16Array(o)
A.ky(p.b,o,a.b,s,r)
q=A.bd(o,r)
return new A.ay(q===0?!1:b,r,q)},
f0(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.i2(b,r)
if(A.rn(q.b,p,b.b,s)>=0)return q.f9(b,r)
return b.f9(q,!r)},
f8(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bA(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.i2(b,r)
if(A.rn(q.b,p,b.b,s)>=0)return q.f9(b,r)
return b.f9(q,!r)},
aT(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.ce()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.xQ(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bd(s,p)
return new A.ay(m===0?!1:n,p,m)},
nQ(a){var s,r,q,p
if(this.c<a.c)return $.ce()
this.kl(a)
s=$.vS.bb()-$.hp.bb()
r=A.vU($.vR.bb(),$.hp.bb(),$.vS.bb(),s)
q=A.bd(s,r)
p=new A.ay(!1,r,q)
return this.a!==a.a&&q>0?p.bA(0):p},
qD(a){var s,r,q,p=this
if(p.c<a.c)return p
p.kl(a)
s=A.vU($.vR.bb(),0,$.hp.bb(),$.hp.bb())
r=A.bd($.hp.bb(),s)
q=new A.ay(!1,s,r)
if($.vT.bb()>0)q=q.e1(0,$.vT.bb())
return p.a&&q.c>0?q.bA(0):q},
kl(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.xM&&a.c===$.xO&&c.b===$.xL&&a.b===$.xN)return
s=a.b
r=a.c
q=16-B.b.glo(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.xK(s,r,q,p)
n=new Uint16Array(b+5)
m=A.xK(c.b,b,q,n)}else{n=A.vU(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.vV(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.rn(n,m,j,i)>=0){g&2&&A.C(n)
n[m]=1
A.ky(n,h,j,i,n)}else{g&2&&A.C(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.ky(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.C3(l,n,e);--k
A.xQ(d,f,0,n,k,o)
if(n[e]<d){i=A.vV(f,o,k,j)
A.ky(n,h,j,i,n)
while(--d,n[e]<d)A.ky(n,h,j,i,n)}--e}$.xL=c.b
$.xM=b
$.xN=s
$.xO=r
$.vR.b=n
$.vS.b=h
$.hp.b=o
$.vT.b=q},
gJ(a){var s,r,q,p=new A.ro(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.rp().$1(s)},
V(a,b){if(b==null)return!1
return b instanceof A.ay&&this.S(0,b)===0},
l(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.b.l(-n.b[0])
return B.b.l(n.b[0])}s=A.n([],t.s)
m=n.a
r=m?n.bA(0):n
while(r.c>1){q=$.wv()
if(q.c===0)A.w(B.aT)
p=r.qD(q).l(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.nQ(q)}s.push(B.b.l(r.b[0]))
if(m)s.push("-")
return new A.dD(s,t.hF).d_(0)},
$iah:1}
A.ro.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:82}
A.rp.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:89}
A.kK.prototype={
ll(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
lw(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.uc.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.M(b),r=this.a;s.m();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.R(b)}},
$S:40}
A.n4.prototype={
$0(){var s=this
return A.w(A.P("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:28}
A.b2.prototype={
V(a,b){if(b==null)return!1
return b instanceof A.b2&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ(a){return A.el(this.a,this.b,B.o,B.o)},
S(a,b){var s=B.b.S(this.a,b.a)
if(s!==0)return s
return B.b.S(this.b,b.b)},
vf(){var s=this
if(s.c)return s
return new A.b2(s.a,s.b,!0)},
l(a){var s=this,r=A.Ax(A.vF(s)),q=A.iJ(A.vD(s)),p=A.iJ(A.pw(s)),o=A.iJ(A.vB(s)),n=A.iJ(A.vC(s)),m=A.iJ(A.vE(s)),l=A.wT(A.xj(s)),k=s.b,j=k===0?"":A.wT(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iah:1}
A.aw.prototype={
V(a,b){if(b==null)return!1
return b instanceof A.aw&&this.a===b.a},
gJ(a){return B.b.gJ(this.a)},
S(a,b){return B.b.S(this.a,b.a)},
l(a){var s,r,q,p,o,n=this.a,m=B.b.N(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.b.N(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.b.N(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.a.lK(B.b.l(n%1e6),6,"0")},
$iah:1}
A.rY.prototype={
l(a){return this.ag()}}
A.a4.prototype={
gc0(){return A.Bl(this)}}
A.ii.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.iP(s)
return"Assertion failed"}}
A.cu.prototype={}
A.bD.prototype={
gig(){return"Invalid argument"+(!this.a?"(s)":"")},
gie(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.p(p),n=s.gig()+q+o
if(!s.a)return n
return n+s.gie()+": "+A.iP(s.gjh())},
gjh(){return this.b}}
A.ep.prototype={
gjh(){return this.b},
gig(){return"RangeError"},
gie(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.p(q):""
else if(q==null)s=": Not greater than or equal to "+A.p(r)
else if(q>r)s=": Not in inclusive range "+A.p(r)+".."+A.p(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.p(r)
return s}}
A.fF.prototype={
gjh(){return this.b},
gig(){return"RangeError"},
gie(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.hj.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.kc.prototype={
l(a){return"UnimplementedError: "+this.a}}
A.bs.prototype={
l(a){return"Bad state: "+this.a}}
A.iA.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.iP(s)+"."}}
A.jw.prototype={
l(a){return"Out of Memory"},
gc0(){return null},
$ia4:1}
A.he.prototype={
l(a){return"Stack Overflow"},
gc0(){return null},
$ia4:1}
A.kJ.prototype={
l(a){return"Exception: "+this.a},
$iF:1}
A.bb.prototype={
l(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
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
k=""}return g+l+B.a.q(e,i,j)+k+"\n"+B.a.aT(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.p(f)+")"):g},
$iF:1,
gjl(){return this.a},
gf5(){return this.b},
gae(){return this.c}}
A.j1.prototype={
gc0(){return null},
l(a){return"IntegerDivisionByZeroException"},
$ia4:1,
$iF:1}
A.m.prototype={
h6(a,b){return A.iv(this,A.o(this).i("m.E"),b)},
cr(a,b,c){return A.dw(this,b,A.o(this).i("m.E"),c)},
jy(a,b){return new A.bt(this,b.i("bt<0>"))},
K(a,b){var s,r,q=this.gv(this)
if(!q.m())return""
s=J.am(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=J.am(q.gn())
while(q.m())}else{r=s
do r=r+b+J.am(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
bj(a,b){var s=A.o(this).i("m.E")
if(b)s=A.Q(this,s)
else{s=A.Q(this,s)
s.$flags=1
s=s}return s},
d8(a){return this.bj(0,!0)},
gk(a){var s,r=this.gv(this)
for(s=0;r.m();)++s
return s},
gB(a){return!this.gv(this).m()},
gW(a){return!this.gB(this)},
cv(a,b){return A.xu(this,b,A.o(this).i("m.E"))},
aV(a,b){return A.xr(this,b,A.o(this).i("m.E"))},
gC(a){var s=this.gv(this)
if(!s.m())throw A.b(A.ak())
return s.gn()},
ga_(a){var s,r=this.gv(this)
if(!r.m())throw A.b(A.ak())
do s=r.gn()
while(r.m())
return s},
gaU(a){var s,r=this.gv(this)
if(!r.m())throw A.b(A.ak())
s=r.gn()
if(r.m())throw A.b(A.fI())
return s},
cW(a,b,c){var s,r
for(s=this.gv(this);s.m();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
ew(a,b){return this.cW(0,b,null)},
a3(a,b){var s,r
A.aQ(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.j_(b,b-r,this,null,"index"))},
l(a){return A.AR(this,"(",")")}}
A.V.prototype={
l(a){return"MapEntry("+A.p(this.a)+": "+A.p(this.b)+")"}}
A.U.prototype={
gJ(a){return A.j.prototype.gJ.call(this,0)},
l(a){return"null"}}
A.j.prototype={$ij:1,
V(a,b){return this===b},
gJ(a){return A.h5(this)},
l(a){return"Instance of '"+A.jE(this)+"'"},
gab(a){return A.ia(this)},
toString(){return this.l(this)}}
A.lc.prototype={
l(a){return""},
$ias:1}
A.q2.prototype={
gtm(){var s=this.gtn()
if($.wp()===1e6)return s
return s*1000},
aF(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.vG.$0()-r)
s.b=null}},
gtn(){var s=this.b
if(s==null)s=$.vG.$0()
return s-this.a}}
A.O.prototype={
gk(a){return this.a.length},
hP(a){var s=A.p(a)
this.a+=s},
ac(a){var s=A.b6(a)
this.a+=s},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.qB.prototype={
$2(a,b){throw A.b(A.X("Illegal IPv6 address, "+a,this.a,b))},
$S:171}
A.hZ.prototype={
gl3(){var s,r,q,p,o=this,n=o.w
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
guI(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.a7(s,1)
r=s.length===0?B.m:A.cK(new A.ab(A.n(s.split("/"),t.s),A.Ej(),t.iZ),t.N)
q.x!==$&&A.v9()
p=q.x=r}return p},
gJ(a){var s,r=this,q=r.y
if(q===$){s=B.a.gJ(r.gl3())
r.y!==$&&A.v9()
r.y=s
q=s}return q},
gjx(){return this.b},
gcY(){var s=this.c
if(s==null)return""
if(B.a.L(s,"[")&&!B.a.a1(s,"v",1))return B.a.q(s,1,s.length-1)
return s},
geG(){var s=this.d
return s==null?A.y9(this.a):s},
geL(){var s=this.f
return s==null?"":s},
ghg(){var s=this.r
return s==null?"":s},
ua(a){var s=this.a
if(a.length!==s.length)return!1
return A.D0(a,s,0)>=0},
eR(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.w2(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.u8(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.L(n,"/"))n="/"+n
l=n
if(a!=null)k=A.u9(null,0,0,a)
else k=j.f
return A.i_(b,q,o,p,l,k,j.r)},
lW(a){return this.eR(null,a)},
lV(a){return this.eR(a,null)},
kC(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.a1(b,"../",r);){r+=3;++s}q=B.a.dP(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.hs(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.d4(a,q+1,null,B.a.a7(b,r-3*s))},
bg(a){return this.eS(A.kj(a))},
eS(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gaE().length!==0)return a
else{s=h.a
if(a.gjc()){r=a.lW(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.glB())m=a.ghp()?a.geL():h.f
else{l=A.CL(h,n)
if(l>0){k=B.a.q(n,0,l)
n=a.gjb()?k+A.dW(a.gb3()):k+A.dW(h.kC(B.a.a7(n,k.length),a.gb3()))}else if(a.gjb())n=A.dW(a.gb3())
else if(n.length===0)if(p==null)n=s.length===0?a.gb3():A.dW(a.gb3())
else n=A.dW("/"+a.gb3())
else{j=h.kC(n,a.gb3())
r=s.length===0
if(!r||p!=null||B.a.L(n,"/"))n=A.dW(j)
else n=A.w4(j,!r||p!=null)}m=a.ghp()?a.geL():null}}}i=a.gjd()?a.ghg():null
return A.i_(s,q,p,o,n,m,i)},
gjc(){return this.c!=null},
ghp(){return this.f!=null},
gjd(){return this.r!=null},
glB(){return this.e.length===0},
gjb(){return B.a.L(this.e,"/")},
jv(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.a0("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.a0(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.a0(u.A))
if(r.c!=null&&r.gcY()!=="")A.w(A.a0(u.Q))
s=r.guI()
A.CE(s,!1)
q=A.qb(B.a.L(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
l(a){return this.gl3()},
V(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gaE())if(p.c!=null===b.gjc())if(p.b===b.gjx())if(p.gcY()===b.gcY())if(p.geG()===b.geG())if(p.e===b.gb3()){r=p.f
q=r==null
if(!q===b.ghp()){if(q)r=""
if(r===b.geL()){r=p.r
q=r==null
if(!q===b.gjd()){s=q?"":r
s=s===b.ghg()}}}}return s},
$ikh:1,
gaE(){return this.a},
gb3(){return this.e}}
A.ub.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.lj(1,a,B.k,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.lj(1,b,B.k,!0)
s.a+=r}},
$S:110}
A.ua.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.M(b),r=this.a;s.m();)r.$2(a,s.gn())},
$S:40}
A.qA.prototype={
gm2(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.bS(m,"?",s)
q=m.length
if(r>=0){p=A.i0(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.kE("data","",n,n,A.i0(m,s,q,128,!1,!1),p,n)}return m},
l(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.bL.prototype={
gjc(){return this.c>0},
gje(){return this.c>0&&this.d+1<this.e},
ghp(){return this.f<this.r},
gjd(){return this.r<this.a.length},
gjb(){return B.a.a1(this.a,"/",this.e)},
glB(){return this.e===this.f},
gaE(){var s=this.w
return s==null?this.w=this.nH():s},
nH(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.L(r.a,"http"))return"http"
if(q===5&&B.a.L(r.a,"https"))return"https"
if(s&&B.a.L(r.a,"file"))return"file"
if(q===7&&B.a.L(r.a,"package"))return"package"
return B.a.q(r.a,0,q)},
gjx(){var s=this.c,r=this.b+3
return s>r?B.a.q(this.a,r,s-1):""},
gcY(){var s=this.c
return s>0?B.a.q(this.a,s,this.d):""},
geG(){var s,r=this
if(r.gje())return A.aq(B.a.q(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.L(r.a,"http"))return 80
if(s===5&&B.a.L(r.a,"https"))return 443
return 0},
gb3(){return B.a.q(this.a,this.e,this.f)},
geL(){var s=this.f,r=this.r
return s<r?B.a.q(this.a,s+1,r):""},
ghg(){var s=this.r,r=this.a
return s<r.length?B.a.a7(r,s+1):""},
kx(a){var s=this.d+1
return s+a.length===this.e&&B.a.a1(this.a,a,s)},
v4(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.bL(B.a.q(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
eR(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.w2(b,0,b.length)
s=!(h.b===b.length&&B.a.L(h.a,b))}else{b=h.gaE()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.q(h.a,h.b+3,q):""
o=h.gje()?h.geG():g
if(s)o=A.u8(o,b)
q=h.c
if(q>0)n=B.a.q(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.q(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.L(l,"/"))l="/"+l
if(a!=null)j=A.u9(g,0,0,a)
else{k=h.r
j=m<k?B.a.q(q,m+1,k):g}m=h.r
i=m<q.length?B.a.a7(q,m+1):g
return A.i_(b,p,n,o,l,j,i)},
lW(a){return this.eR(null,a)},
lV(a){return this.eR(a,null)},
bg(a){return this.eS(A.kj(a))},
eS(a){if(a instanceof A.bL)return this.qW(this,a)
return this.l5().eS(a)},
qW(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.L(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.L(a.a,"http"))p=!b.kx("80")
else p=!(r===5&&B.a.L(a.a,"https"))||!b.kx("443")
if(p){o=r+1
return new A.bL(B.a.q(a.a,0,o)+B.a.a7(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.l5().eS(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.bL(B.a.q(a.a,0,r)+B.a.a7(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.bL(B.a.q(a.a,0,r)+B.a.a7(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.v4()}s=b.a
if(B.a.a1(s,"/",n)){m=a.e
l=A.y2(this)
k=l>0?l:m
o=k-n
return new A.bL(B.a.q(a.a,0,k)+B.a.a7(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.a1(s,"../",n))n+=3
o=j-n+1
return new A.bL(B.a.q(a.a,0,j)+"/"+B.a.a7(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.y2(this)
if(l>=0)g=l
else for(g=j;B.a.a1(h,"../",g);)g+=3
f=0
for(;;){e=n+3
if(!(e<=c&&B.a.a1(s,"../",n)))break;++f
n=e}for(d="";i>g;){--i
if(h.charCodeAt(i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.a.a1(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.bL(B.a.q(h,0,i)+d+B.a.a7(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
jv(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.L(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.a0("Cannot extract a file path from a "+r.gaE()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.b(A.a0(u.z))
throw A.b(A.a0(u.A))}if(r.c<r.d)A.w(A.a0(u.Q))
q=B.a.q(s,r.e,q)
return q},
gJ(a){var s=this.x
return s==null?this.x=B.a.gJ(this.a):s},
V(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.l(0)},
l5(){var s=this,r=null,q=s.gaE(),p=s.gjx(),o=s.c>0?s.gcY():r,n=s.gje()?s.geG():r,m=s.a,l=s.f,k=B.a.q(m,s.e,l),j=s.r
l=l<j?s.geL():r
return A.i_(q,p,o,n,k,l,j<m.length?s.ghg():r)},
l(a){return this.a},
$ikh:1}
A.kE.prototype={}
A.iR.prototype={
j(a,b,c){this.a.set(b,c)},
l(a){return"Expando:"+A.p(this.b)}}
A.jt.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iF:1}
A.nu.prototype={
$2(a,b){this.a.bY(new A.ns(a),new A.nt(b),t.X)},
$S:112}
A.ns.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:122}
A.nt.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.Eb(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.d9.b(a))A.w("Attempting to box non-Dart object.")
s={}
s[$.zS()]=a
p.error=s
p.stack=b.l(0)
r=this.a
r.call(r,p)},
$S:9}
A.v0.prototype={
$1(a){var s,r,q,p
if(A.yC(a))return a
s=this.a
if(s.I(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.M(a.gR());s.m();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.U.b(a)){p=[]
s.j(0,a,p)
B.c.G(p,J.aB(a,this,t.z))
return p}else return a},
$S:20}
A.v4.prototype={
$1(a){return this.a.ai(a)},
$S:19}
A.v5.prototype={
$1(a){if(a==null)return this.a.ao(new A.jt(a===undefined))
return this.a.ao(a)},
$S:19}
A.uK.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.yB(a))return a
s=this.a
a.toString
if(s.I(a))return s.h(0,a)
if(a instanceof Date)return new A.b2(A.vk(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.P("structured clone of RegExp",null))
if(a instanceof Promise)return A.a2(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.G(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.at(o),q=s.gv(o);q.m();)n.push(A.uJ(q.gn()))
for(m=0;m<s.gk(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.I(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:20}
A.tt.prototype={
ct(a){if(a<=0||a>4294967296)throw A.b(A.aD(u.E+a))
return Math.random()*a>>>0},
uw(){return Math.random()}}
A.tu.prototype={
nf(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.a0("No source of cryptographically secure random numbers available."))},
ct(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.aD(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.C(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.Z(Math.pow(256,s))
for(o=a-1,n=(a&o)===0;;){crypto.getRandomValues(J.de(B.bJ.gaz(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.iO.prototype={}
A.W.prototype={
h(a,b){var s,r=this
if(!r.iC(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("W.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.iC(b))return
s.c.j(0,s.a.$1(b),new A.V(b,c,s.$ti.i("V<W.K,W.V>")))},
G(a,b){b.a9(0,new A.lT(this))},
I(a){var s=this
if(!s.iC(a))return!1
return s.c.I(s.a.$1(s.$ti.i("W.K").a(a)))},
gbP(){var s=this.c,r=A.o(s).i("aN<1,2>")
return A.dw(new A.aN(s,r),new A.lU(this),r.i("m.E"),this.$ti.i("V<W.K,W.V>"))},
a9(a,b){this.c.a9(0,new A.lV(this,b))},
gB(a){return this.c.a===0},
gW(a){return this.c.a!==0},
gR(){var s=this.c,r=A.o(s).i("aO<2>")
return A.dw(new A.aO(s,r),new A.lW(this),r.i("m.E"),this.$ti.i("W.K"))},
gk(a){return this.c.a},
cs(a,b,c,d){return this.c.cs(0,new A.lX(this,b,c,d),c,d)},
gb6(){var s=this.c,r=A.o(s).i("aO<2>")
return A.dw(new A.aO(s,r),new A.lY(this),r.i("m.E"),this.$ti.i("W.V"))},
l(a){return A.oL(this)},
iC(a){return this.$ti.i("W.K").b(a)},
$iN:1}
A.lT.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(W.K,W.V)")}}
A.lU.prototype={
$1(a){var s=a.b
return new A.V(s.a,s.b,this.a.$ti.i("V<W.K,W.V>"))},
$S(){return this.a.$ti.i("V<W.K,W.V>(V<W.C,V<W.K,W.V>>)")}}
A.lV.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(W.C,V<W.K,W.V>)")}}
A.lW.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("W.K(V<W.K,W.V>)")}}
A.lX.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.U(this.c).U(this.d).i("V<1,2>(W.C,V<W.K,W.V>)")}}
A.lY.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("W.V(V<W.K,W.V>)")}}
A.iL.prototype={
ah(a,b){return J.y(a,b)},
ap(a){return J.aL(a)}}
A.fJ.prototype={
ah(a,b){var s,r,q,p
if(a===b)return!0
s=J.M(a)
r=J.M(b)
for(q=this.a;;){p=s.m()
if(p!==r.m())return!1
if(!p)return!0
if(!q.ah(s.gn(),r.gn()))return!1}},
ap(a){var s,r,q
for(s=J.M(a),r=this.a,q=0;s.m();){q=q+r.ap(s.gn())&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.dv.prototype={
ah(a,b){var s,r,q,p,o
if(a===b)return!0
s=J.I(a)
r=s.gk(a)
q=J.I(b)
if(r!==q.gk(b))return!1
for(p=this.a,o=0;o<r;++o)if(!p.ah(s.h(a,o),q.h(b,o)))return!1
return!0},
ap(a){var s,r,q,p
for(s=J.I(a),r=this.a,q=0,p=0;p<s.gk(a);++p){q=q+r.ap(s.h(a,p))&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.f5.prototype={
ah(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.nz(s.gtt(),s.gu4(),s.guc(),A.o(this).i("f5.E"),t.S)
for(s=J.M(a),q=0;s.m();){p=s.gn()
o=r.h(0,p)
r.j(0,p,(o==null?0:o)+1);++q}for(s=J.M(b);s.m();){p=s.gn()
o=r.h(0,p)
if(o==null||o===0)return!1
r.j(0,p,o-1);--q}return q===0},
ap(a){var s,r,q
for(s=J.M(a),r=this.a,q=0;s.m();)q=q+r.ap(s.gn())&2147483647
q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.es.prototype={}
A.eW.prototype={
gJ(a){var s=this.a
return 3*s.a.ap(this.b)+7*s.b.ap(this.c)&2147483647},
V(a,b){var s
if(b==null)return!1
if(b instanceof A.eW){s=this.a
s=s.a.ah(this.b,b.b)&&s.b.ah(this.c,b.c)}else s=!1
return s}}
A.fS.prototype={
ah(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gk(a)!==b.gk(b))return!1
s=A.nz(null,null,null,t.fA,t.S)
for(r=J.M(a.gR());r.m();){q=r.gn()
p=new A.eW(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.M(b.gR());r.m();){q=r.gn()
p=new A.eW(this,q,b.h(0,q))
o=s.h(0,p)
if(o==null||o===0)return!1
s.j(0,p,o-1)}return!0},
ap(a){var s,r,q,p,o,n,m,l
for(s=J.M(a.gR()),r=this.a,q=this.b,p=this.$ti.y[1],o=0;s.m();){n=s.gn()
m=r.ap(n)
l=a.h(0,n)
o=o+3*m+7*q.ap(l==null?p.a(l):l)&2147483647}o=o+(o<<3>>>0)&2147483647
o^=o>>>11
return o+(o<<15>>>0)&2147483647}}
A.iK.prototype={
ah(a,b){var s,r=this
if(a instanceof A.bU)return b instanceof A.bU&&new A.es(r,t.cu).ah(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.fS(r,r,t.a3).ah(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.dv(r,t.hI).ah(a,b)
s=t.U
if(s.b(a))return s.b(b)&&new A.fJ(r,t.nZ).ah(a,b)
return J.y(a,b)},
ap(a){var s=this
if(a instanceof A.bU)return new A.es(s,t.cu).ap(a)
if(t.f.b(a))return new A.fS(s,s,t.a3).ap(a)
if(t.j.b(a))return new A.dv(s,t.hI).ap(a)
if(t.U.b(a))return new A.fJ(s,t.nZ).ap(a)
return J.aL(a)},
ud(a){return!0}}
A.jr.prototype={
sk(a,b){A.xf()},
t(a,b){return A.xf()}}
A.kg.prototype={}
A.bR.prototype={
V(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.bR){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gJ(a){return A.Bh(this.a)},
l(a){return A.au(this.a)}}
A.c4.prototype={
t(a,b){if(this.a!=null)throw A.b(A.u("add may only be called once."))
this.a=b},
p(){if(this.a==null)throw A.b(A.u("add must be called once."))}}
A.iX.prototype={
u(a){var s=new A.c4(),r=A.d2(s)
r.t(0,a)
r.p()
r=s.a
r.toString
return r}}
A.nB.prototype={
t(a,b){var s=this
if(s.w)throw A.b(A.u("Hash.add() called after close()."))
s.r=s.r+J.ar(b)
s.jW(b)},
jW(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.vd(B.d.gaz(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.I(a),o=0;;j=0){n=j+p.gk(a)-o
if(n<h){B.d.a6(i,j,n,a,o)
k.e=n
return}B.d.a6(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.C(s)
s[m]=l;++m}while(m<q)
k.vl(s)}},
p(){var s,r,q,p,o,n,m,l=this
if(l.w)return
l.w=!0
s=l.r
if(s>1125899906842623)A.w(A.a0("Hashing is unsupported for messages with more than 2^53 bits."))
r=l.d.byteLength
r=((s+1+8+r-1&-r)>>>0)-s
q=new Uint8Array(r)
q[0]=128
p=s*8
o=r-8
n=J.vd(B.d.gaz(q))
m=B.b.N(p,4294967296)
n.$flags&2&&A.C(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.jW(q)
s=l.a
s.t(0,new A.bR(l.nw()))
s.p()},
nw(){var s,r,q,p,o,n,m
if(B.am===$.zt())return J.A6(B.V.gaz(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.vd(B.d.gaz(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.C(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.l4.prototype={
bB(a){var s=new Uint32Array(A.bv(A.n([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.eM(new A.l5(s,r,a,q,new Uint32Array(16)))}}
A.tP.prototype={
vl(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
for(s=this.z,r=s.$flags|0,q=0;q<16;++q){p=a0[q]
r&2&&A.C(s)
s[q]=p}for(q=16;q<64;++q){p=s[q-2]
o=s[q-7]
n=s[q-15]
m=s[q-16]
r&2&&A.C(s)
s[q]=((((p>>>17|p<<15)^(p>>>19|p<<13)^p>>>10)>>>0)+o>>>0)+((((n>>>7|n<<25)^(n>>>18|n<<14)^n>>>3)>>>0)+m>>>0)>>>0}r=this.y
l=r[0]
k=r[1]
j=r[2]
i=r[3]
h=r[4]
g=r[5]
f=r[6]
e=r[7]
for(d=l,q=0;q<64;++q,e=f,f=g,g=h,h=b,i=j,j=k,k=d,d=a){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.bo[q]+s[q]>>>0)>>>0)>>>0
b=i+c>>>0
a=c+((((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))>>>0)+((d&k^d&j^k&j)>>>0)>>>0)>>>0}r.$flags&2&&A.C(r)
r[0]=d+l>>>0
r[1]=k+r[1]>>>0
r[2]=j+r[2]>>>0
r[3]=i+r[3]>>>0
r[4]=h+r[4]>>>0
r[5]=g+r[5]>>>0
r[6]=f+r[6]>>>0
r[7]=e+r[7]>>>0}}
A.l5.prototype={}
A.jO.prototype={}
A.io.prototype={$ivh:1}
A.ip.prototype={
hf(){if(this.w)throw A.b(A.u("Can't finalize a finalized Request."))
this.w=!0
return B.aN},
l(a){return this.a+" "+this.b.l(0)}}
A.iq.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:147}
A.ir.prototype={
$1(a){return B.a.gJ(a.toLowerCase())},
$S:59}
A.lN.prototype={
n6(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.P("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.P("Invalid content length "+A.p(s)+".",null))}}}
A.iu.prototype={
aP(a){return this.mF(a)},
mF(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$aP=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.wO("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.hf().vd(),$async$aP)
case 3:k=b6
p=5
j=b4
i=null
h=!1
g=null
a6=b4.b
a7=a6.l(0)
a8=!J.cf(k)?k:null
a9=t.N
f=A.G(a9,t.K)
e=b4.glq()
d=null
if(e!=null){d=e
J.bA(f,"content-length",d)}for(b0=b4.r,b0=new A.aN(b0,A.o(b0).i("aN<1,2>")).gv(0);b0.m();){b1=b0.d
b1.toString
c=b1
J.bA(f,c.a,c.b)}f=A.da(f)
f.toString
A.aT(f)
b0=l.signal
s=8
return A.a(A.a2(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$aP)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.en(a,null):null
if(a0==null&&a!=null){f=A.wO("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.G(a9,a9)
b.headers.forEach(A.ln(new A.lQ(a1)))
f=A.CS(b4,b)
a4=b.status
a6=a1
a8=a0
A.kj(b.url)
a9=b.statusText
f=new A.k4(A.zm(f),a4,a8,a6)
f.n6(a4,a8,a6,!1,!0,a9,b4)
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
A.yG(a2,a3,b4)
n.push(7)
s=6
break
case 4:n=[2]
case 6:p=2
B.c.O(a5,l)
s=n.pop()
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aP,r)},
p(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.L)(s),++q)s[q].abort()
this.b=!0}}
A.lQ.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:64}
A.un.prototype={
$1(a){return A.fc(this.a,this.b,a)},
$S:73}
A.uv.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.am()}},
$S:0}
A.uw.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
o.a.c=!0
s=6
return A.a(A.a2(o.b.cancel(),t.X),$async$$0)
case 6:q=1
s=5
break
case 3:q=2
k=p.pop()
n=A.E(k)
m=A.ad(k)
if(!o.a.b)A.yG(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:4}
A.cC.prototype={
vd(){var s=new A.r($.v,t.jz),r=new A.aI(s,t.iq),q=new A.kA(new A.lS(r),new Uint8Array(1024))
this.a0(q.gri(q),!0,q.gdF(),r.grG())
return s}}
A.lS.prototype={
$1(a){return this.a.ai(new Uint8Array(A.bv(a)))},
$S:34}
A.dh.prototype={
l(a){var s=this.b.l(0)
return"ClientException: "+this.a+", uri="+s},
$iF:1}
A.jl.prototype={
gk(a){return this.b}}
A.oU.prototype={
glq(){var s,r,q,p=this,o={},n=o.a=0
p.x.a9(0,new A.oV(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.L)(s),++n){q=s[n]
o.a=o.a+(74+B.f.u(p.kv(q)).length+q.b+2)}return o.a+2+70+4},
hf(){var s=this,r=s.ns()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.jQ()
return new A.cC(s.aY(r))},
aY(a){return this.o2(a)},
o2(a){var $async$aY=A.c(function(b,c){switch(b){case 2:n=q
s=n.pop()
break
case 1:o.push(c)
s=p}for(;;)switch(s){case 0:f="--"+a
e=B.f.u(f+"\r\n")
d=B.f.u(f+"--\r\n")
f=m.x,f=new A.aN(f,A.o(f).i("aN<1,2>")).gv(0)
case 3:if(!f.m()){s=4
break}l=f.d
l.toString
s=5
q=[1]
return A.bu(A.d0(e),$async$aY,r)
case 5:k=l.b
j=$.vc()
l=A.H(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.H(l,'"',"%22")+'"'
l=$.wx()
s=6
q=[1]
return A.bu(A.d0(B.f.u((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$aY,r)
case 6:s=7
q=[1]
return A.bu(A.d0(B.f.u(k)),$async$aY,r)
case 7:s=8
q=[1]
return A.bu(A.d0(B.aw),$async$aY,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.bu(A.d0(e),$async$aY,r)
case 12:s=13
q=[1]
return A.bu(A.d0(B.f.u(m.kv(g))),$async$aY,r)
case 13:if(g.f)A.w(A.u("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bu(A.Ci(g.e),$async$aY,r)
case 14:s=15
q=[1]
return A.bu(A.d0(B.aw),$async$aY,r)
case 15:case 10:f.length===l||(0,A.L)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bu(A.d0(d),$async$aY,r)
case 16:case 1:return A.bu(null,0,r)
case 2:return A.bu(o.at(-1),1,r)}})
var s=0,r=A.yA($async$aY,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.yP(r)},
pL(a,b){var s,r=$.vc()
r=A.H(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.H(r,'"',"%22")+'"'
r=$.wx()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
kv(a){var s=a.d.l(0),r=$.vc(),q=A.H(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.H(q,'"',"%22")+'"'
s=A.H(a.c,r,"%0D%0A")
p=p+'; filename="'+A.H(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
ns(){var s,r=J.x7(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.bD[$.zv().ct(66)]
return"dart-http-boundary-"+A.cS(r,0,null)}}
A.oV.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.f.u(this.b.pL(a,b)).length+B.f.u(b).length+2)},
$S:26}
A.pQ.prototype={
glq(){return this.y.length},
gj7(){var s,r
if(this.gc6()==null||!this.gc6().c.a.I("charset"))return B.k
s=this.gc6().c.a.h(0,"charset")
s.toString
r=A.AA(s)
return r==null?A.w(A.X('Unsupported encoding "'+s+'".',null,null)):r},
hf(){this.jQ()
return new A.cC(A.q4(this.y,t.L))},
gc6(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.Ba(s)},
sc6(a){this.r.j(0,"content-type",a.l(0))},
nz(){if(!this.w)return
throw A.b(A.u("Can't modify a finalized Request."))}}
A.hg.prototype={}
A.k4.prototype={}
A.fp.prototype={}
A.eg.prototype={
l(a){var s=new A.O(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a9(0,new A.oP(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.oN.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.qc(null,j),h=$.A3()
i.hY(h)
s=$.A2()
i.ev(s)
r=i.gjj().h(0,0)
r.toString
i.ev("/")
i.ev(s)
q=i.gjj().h(0,0)
q.toString
i.hY(h)
p=t.N
o=A.G(p,p)
for(;;){p=i.d=B.a.dR(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gE():n
if(!m)break
p=i.d=h.dR(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gE()
i.ev(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.ev("=")
n=i.d=s.dR(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gE()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.Eq(i)
n=i.d=h.dR(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gE()
o.j(0,p,k)}i.ty()
return A.vy(r,q,o)},
$S:83}
A.oP.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.A0()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.zj(b,$.zR(),new A.oO(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:26}
A.oO.prototype={
$1(a){return"\\"+A.p(a.h(0,0))},
$S:54}
A.uR.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:54}
A.uE.prototype={
$1(a){return J.am(a)},
$S:93}
A.jB.prototype={
ag(){return"PlatformProfile."+this.b}}
A.k1.prototype={
aC(){var s=this
return A.l(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.pZ.prototype={
$1(a){return J.bB(a.gb6())},
$S:55}
A.q_.prototype={
$1(a){return B.a.D(a,"ENABLE_FTS5")},
$S:21}
A.a3.prototype={}
A.lZ.prototype={
tp(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)}}
A.lD.prototype={
tq(a){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.c,r=0;r<12;++r)m[r]=s.ct(256)
q=A.BT(this.b,m,new Uint8Array(A.bv(a)))
p=q.a
s=12+p.length
o=s+16
n=new Uint8Array(o)
B.d.aa(n,0,12,m)
B.d.aa(n,12,s,p)
B.d.aa(n,s,o,q.b)
return n},
rO(a){var s,r,q,p=a.length
if(p<28)throw A.b(A.P("Ciphertext too short for AES-GCM (minimum 28 bytes).",null))
s=new Uint8Array(A.bv(B.d.M(a,0,12)))
p-=16
r=new Uint8Array(A.bv(B.d.aQ(a,p)))
q=A.BS(this.b,s,new Uint8Array(A.bv(B.d.M(a,12,p))),r)
if(q==null)throw A.b(A.u("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
return q}}
A.r4.prototype={
es(b0,b1){var s,r,q,p,o,n,m,l,k=b0[0],j=b0[1],i=b0[2],h=b0[3],g=b0[4],f=b0[5],e=b0[6],d=b0[7],c=b0[8],b=b0[9],a=b0[10],a0=b0[11],a1=b0[12],a2=b0[13],a3=b0[14],a4=b0[15],a5=this.a,a6=((k<<24|j<<16|i<<8|h)^a5[0])>>>0,a7=((g<<24|f<<16|e<<8|d)^a5[1])>>>0,a8=((c<<24|b<<16|a<<8|a0)^a5[2])>>>0,a9=((a1<<24|a2<<16|a3<<8|a4)^a5[3])>>>0
for(s=4,r=1;r<14;++r,a9=i,a8=j,a7=k,a6=p){q=s+1
p=(A.r5(a6)^A.r6(a7)^A.r7(a8)^A.r8(a9)^a5[s])>>>0
s=q+1
k=(A.r5(a7)^A.r6(a8)^A.r7(a9)^A.r8(a6)^a5[q])>>>0
q=s+1
j=(A.r5(a8)^A.r6(a9)^A.r7(a6)^A.r8(a7)^a5[s])>>>0
s=q+1
i=(A.r5(a9)^A.r6(a6)^A.r7(a7)^A.r8(a8)^a5[q])>>>0}q=s+1
o=(B.i[a6>>>24&255]<<24|B.i[a7>>>16&255]<<16|B.i[a8>>>8&255]<<8|B.i[a9&255])^a5[s]
s=q+1
n=(B.i[a7>>>24&255]<<24|B.i[a8>>>16&255]<<16|B.i[a9>>>8&255]<<8|B.i[a6&255])^a5[q]
m=(B.i[a8>>>24&255]<<24|B.i[a9>>>16&255]<<16|B.i[a6>>>8&255]<<8|B.i[a7&255])^a5[s]
l=(B.i[a9>>>24&255]<<24|B.i[a6>>>16&255]<<16|B.i[a7>>>8&255]<<8|B.i[a8&255])^a5[s+1]
b1.$flags&2&&A.C(b1)
b1[0]=o>>>24&255
b1[1]=o>>>16&255
b1[2]=o>>>8&255
b1[3]=o&255
b1[4]=n>>>24&255
b1[5]=n>>>16&255
b1[6]=n>>>8&255
b1[7]=n&255
b1[8]=m>>>24&255
b1[9]=m>>>16&255
b1[10]=m>>>8&255
b1[11]=m&255
b1[12]=l>>>24&255
b1[13]=l>>>16&255
b1[14]=l>>>8&255
b1[15]=l&255},
pS(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.$flags|0,q=0;q<8;++q){p=4*q
o=a[p]
n=a[p+1]
m=a[p+2]
p=a[p+3]
r&2&&A.C(s)
s[q]=(o<<24|n<<16|m<<8|p)>>>0}for(q=8;q<60;++q){l=s[q-1]
p=B.b.ar(q,8)
if(p===0)l=A.xD((l<<8|l>>>24)>>>0)^B.bm[B.b.N(q,8)-1]
else if(p===4)l=A.xD(l)
p=s[q-8]
r&2&&A.C(s)
s[q]=(p^l)>>>0}}}
A.uQ.prototype={
$1(a){return a.h(0,"detail")},
$S:55}
A.iB.prototype={
ag(){return"ConflictAlgorithm."+this.b}}
A.iM.prototype={
p(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.c){s=1
break}p.c=!1
for(o=p.a,n=new A.bS(o,o.r,o.e);n.m();){m=n.d
if(!m.r){m.r=!0
if(!m.f){l=m.a
l.c.d.sqlite3_reset(l.b)
m.f=!0}m=m.a
l=m.c
l.d.sqlite3_finalize(m.b)
l=l.w
if(l!=null){l=l.a
if(l!=null)l.unregister(m.d)}}}o.aK(0)
p.b.p()
case 1:return A.e(q,r)}})
return A.f($async$p,r)},
jI(a){var s,r=this.a,q=r.h(0,a)
if(q==null){if(r.a>=256){s=r.O(0,new A.ai(r,A.o(r).i("ai<1>")).gC(0))
if(s!=null)s.p()}q=this.b.uJ(a)
r.j(0,a,q)}return q},
mE(a,b){var s=this.a.a,r=s>=256?this.b.jK(a,b):this.jI(a).jL(new A.dr(b))
s=A.o(r).i("ab<A.E,N<k,j?>>")
s=A.Q(new A.ab(r,new A.nd(),s),s.i("S.E"))
return s},
eu(a,b){var s=this.a.a
if(s>=256)this.b.av(a,b)
else this.jI(a).j9(new A.dr(b))},
j8(a){return this.eu(a,B.v)},
av(a,b){return this.tw(a,b)},
Z(a){return this.av(a,B.v)},
tw(a,b){var s=0,r=A.h(t.H),q=this
var $async$av=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.eu(a,b)
return A.e(null,r)}})
return A.f($async$av,r)},
ak(a,b){return this.uU(a,b)},
bw(a){return this.ak(a,B.v)},
uU(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ak=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.mE(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ak,r)},
bW(a,b,c,d,e,f){return this.uR(a,b,c,d,e,f)},
aM(a,b,c,d){return this.bW(a,null,b,null,c,d)},
eM(a,b,c){return this.bW(a,null,null,null,b,c)},
uP(a,b,c,d){return this.bW(a,null,null,b,c,d)},
eN(a,b,c,d,e){return this.bW(a,b,c,null,d,e)},
uQ(a,b,c,d,e){return this.bW(a,null,b,c,d,e)},
lP(a,b,c,d){return this.bW(a,b,null,null,c,d)},
uR(a,b,c,d,e,f){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bW=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:n=b!=null&&b.length!==0?"SELECT "+B.c.K(b,", "):"SELECT *"
n+=' FROM "'+a+'"'
if(e.length!==0)n+=" WHERE "+e
if(d!=null&&d.length!==0)n+=" ORDER BY "+d
if(c!=null)n+=" LIMIT "+A.p(c)
o=f==null?B.v:f
q=p.ak(n.charCodeAt(0)==0?n:n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bW,r)},
cZ(a,b,c,d){return this.u8(0,b,c,d)},
aj(a,b,c){return this.cZ(0,b,c,null)},
u8(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$cZ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.P("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.o(c)
n=o.i("ai<1>")
m=t.N
l=A.dw(new A.ai(c,n),new A.nc(),n.i("m.E"),m).K(0,", ")
k=B.c.K(A.aG(c.a,"?",!1,m),", ")
j=A.wU(d)
o=o.i("aO<2>")
o=A.Q(new A.aO(c,o),o.i("m.E"))
p.eu("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.Z(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cZ,r)},
F(a,b,c,d){return this.vk(a,b,c,d)},
vk(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$F=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.o(b)
n=o.i("ai<1>")
m=A.dw(new A.ai(b,n),new A.ne(),n.i("m.E"),t.N).K(0,", ")
n="UPDATE"+A.wU(null)+' "'+a+'" SET '+m
o=A.Q(new A.aO(b,o.i("aO<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.c.G(o,d)}p.eu(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$F,r)},
P(a,b,c){return this.rQ(a,b,c)},
rQ(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$P=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
B.c.G(n,c)}p.eu(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$P,r)},
a5(a,b){return this.vg(a,b,b)},
vg(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j
var $async$a5=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.j8("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$a5)
case 7:m=e
n.j8("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
try{n.j8("ROLLBACK")}catch(i){}throw j
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a5,r)},
$iwS:1}
A.nd.prototype={
$1(a){return A.b4(a,t.N,t.X)},
$S:108}
A.nc.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.ne.prototype={
$1(a){return'"'+a+'" = ?'},
$S:7}
A.m8.prototype={}
A.n5.prototype={
rF(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f='Encrypted field "',e=A.n([],t.s),d=A.bo(t.N)
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.L)(s),++n){m=s[n]
l=m.a
if(B.bR.D(0,l))throw A.b(A.cO('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!d.t(0,l))throw A.b(A.cO('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.cO(f+l+'" cannot be unique.'))
if(B.c.dE(o,new A.nb(m)))throw A.b(A.cO(f+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.D(k,l)}else k=!1
if(k)throw A.b(A.cO(f+l+'" cannot be included in FTS.'))}}for(j=0;j<o.length;j=i)for(i=j+1,r=i,h=0;h<o.length;++h){if(j===h)continue
if(B.bk.ah(o[j].a,o[h].a)){if(j<h){l=o[j].a
e.push("Duplicate index columns "+l.l(l)+" (declarations "+r+" and "+(h+1)+").")}}else if(A.Ay(o[h].a,o[j].a)&&!o[h].b){l=o[h].a
l=l.l(l)
k=o[j].a
e.push("Index "+l+" is prefix-subsumed by index "+k.l(k)+".")}}if(p){if(!g.a.d)throw A.b(new A.iW("FTS5 is not available on this SQLite engine."))
for(r=q.a,q=r.$ti,r=new A.a5(r,r.gk(0),q.i("a5<A.E>")),q=q.i("A.E");r.m();){p=r.d
if(p==null)p=q.a(p)
if(!d.D(0,p))throw A.b(A.cO('FTS field "'+p+'" is not a declared field.'))}}for(r=s.length,n=0;n<r;++n){m=s[n]
q=m.b
if(q===B.x){p=m.f
p=p==null||p.length===0}else p=!1
if(p)throw A.b(A.cO('Enum field "'+m.a+'" must declare values.'))
if(q===B.B){q=m.r
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.cO('Ref field "'+m.a+'" must declare its target store.'))}return new A.m8(g.nv(a),g.nu(a),g.nt(a),e)},
nv(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.n(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.L)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.H(n,'"',i)+'"')+" "+o.gmM()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.x&&q){k=o.f
k.toString
j=new A.ab(k,new A.na(),A.ap(k).i("ab<1,k>")).K(0,", ")
m+=" CHECK ("+('"'+A.H(n,'"',i)+'"')+" IN ("+j+"))"}if(l===B.B&&o.w){n=o.r
n.toString
n=A.H(n,'"',i)
m+=" REFERENCES "+('"'+n+'"')+"("+('"'+A.H("id",'"',i)+'"')+")"}h.push(m)}h.push("  archived INTEGER NOT NULL DEFAULT 0")
h.push("  hidden INTEGER NOT NULL DEFAULT 0")
h.push("  extra TEXT")
s=A.H(a.a,'"',i)
r=B.c.K(h,",\n")
q=q?"\n) STRICT;":"\n);"
q="CREATE TABLE "+('"'+s+'"')+" (\n"+r+q
return q.charCodeAt(0)==0?q:q},
nu(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.n([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.L)(s),++n){m=s[n]
l=m.a
k=l.$ti.i("ab<A.E,k>")
j=A.Q(new A.ab(l,A.Em(),k),k.i("S.E"))
if(!l.D(l,"id"))j.push('"'+A.H("id",e,d)+'"')
i=m.c===B.av?"archived = 0 AND hidden = 0":"archived = 0"
if(m.b){l=l.K(l,"_")
l=A.H(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.H(q,e,d)+'"')+" ("+B.c.K(j,", ")+") WHERE "+i+";")}else{l=l.K(l,"_")
l=A.H(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.H(q,e,d)+'"')+" ("+B.c.K(j,", ")+") WHERE "+i+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.L)(r),++n){h=r[n]
if(h.b!==B.B)continue
if(B.c.dE(s,new A.n9(h)))continue
k=h.a
g=A.H(p+k,e,d)
f=A.H(q,e,d)
k=A.H(k,e,d)
b.push("CREATE INDEX "+('"'+g+'"')+" ON "+('"'+f+'"')+" ("+('"'+k+'"')+", "+('"'+A.H("id",e,d)+'"')+") WHERE archived = 0 AND hidden = 0;")}for(n=0;n<r.length;r.length===k||(0,A.L)(r),++n){h=r[n]
if(h.d){s=h.a
p=A.H(o+s,e,d)
l=A.H(q,e,d)
g=A.H(s,e,d)
b.push(c+('"'+p+'"')+" ON "+('"'+l+'"')+" ("+('"'+g+'"')+") WHERE "+('"'+A.H(s,e,d)+'"')+" IS NOT NULL AND archived = 0;")}}return b},
nt(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=", ",f='"',e='""',d=" BEGIN\n  INSERT INTO ",c=") VALUES (new.rowid, ",b=") VALUES ('delete', old.rowid, ",a=a0.w
if(a==null)return B.m
s=A.n([],t.s)
r=a0.a
q=r+"_fts"
p=a.a
o=p.$ti.i("ab<A.E,k>")
n=new A.ab(p,new A.n6(),o).K(0,g)
m=new A.ab(p,new A.n7(),o).K(0,g)
s.push("CREATE VIRTUAL TABLE "+('"'+A.H(q,f,e)+'"')+" USING fts5(\n  "+p.K(p,g)+",\n  content = '"+r+"',\n  content_rowid = 'rowid'\n);")
l=A.H(r+"_ai",f,e)
k=A.H(r,f,e)
s.push("CREATE TRIGGER "+('"'+l+'"')+" AFTER INSERT ON "+('"'+k+'"')+d+('"'+A.H(q,f,e)+'"')+"(rowid, "+p.K(p,g)+c+n+");\nEND;")
l=A.H(r+"_ad",f,e)
k=A.H(r,f,e)
j=A.H(q,f,e)
s.push("CREATE TRIGGER "+('"'+l+'"')+" AFTER DELETE ON "+('"'+k+'"')+d+('"'+j+'"')+"("+('"'+A.H(q,f,e)+'"')+", rowid, "+p.K(p,g)+b+m+");\nEND;")
i=new A.ab(p,new A.n8(),o).K(0," OR ")
o=A.H(r+"_au",f,e)
l=A.H(r,f,e)
k=A.H(q,f,e)
j=A.H(q,f,e)
h=p.K(p,g)
s.push("CREATE TRIGGER "+('"'+o+'"')+" AFTER UPDATE ON "+('"'+l+'"')+" WHEN "+i+d+('"'+k+'"')+"("+('"'+j+'"')+", rowid, "+h+b+m+");\n  INSERT INTO "+('"'+A.H(q,f,e)+'"')+"(rowid, "+p.K(p,g)+c+n+");\nEND;")
return s}}
A.nb.prototype={
$1(a){var s=a.a
return s.D(s,this.a.a)},
$S:38}
A.na.prototype={
$1(a){return"'"+A.H(a,"'","''")+"'"},
$S:7}
A.n9.prototype={
$1(a){var s=a.a
return s.D(s,this.a.a)},
$S:38}
A.n6.prototype={
$1(a){return"new."+('"'+A.H(a,'"','""')+'"')},
$S:7}
A.n7.prototype={
$1(a){return"old."+('"'+A.H(a,'"','""')+'"')},
$S:7}
A.n8.prototype={
$1(a){var s=A.H(a,'"','""')
return"new."+('"'+s+'"')+" IS NOT old."+('"'+A.H(a,'"','""')+'"')},
$S:7}
A.jf.prototype={
l(a){return A.ia(this).l(0)+": "+this.a},
$iF:1}
A.km.prototype={}
A.kd.prototype={}
A.js.prototype={}
A.ix.prototype={}
A.jD.prototype={}
A.iV.prototype={}
A.dF.prototype={}
A.jJ.prototype={}
A.jR.prototype={}
A.hb.prototype={}
A.iW.prototype={}
A.iC.prototype={}
A.nf.prototype={
ag(){return"DurabilityClass."+this.b}}
A.k2.prototype={}
A.pt.prototype={
bZ(a){var s,r=this.a
if(!r.I(a))return null
s=r.O(0,a)
r.j(0,a,s)
return s==null?null:A.b4(s,t.N,t.X)},
jM(a,b){var s=this.a
if(s.a>=256)s.O(0,new A.ai(s,A.o(s).i("ai<1>")).gC(0))
s.j(0,a,b==null?null:A.b4(b,t.N,t.X))},
u9(a){var s,r,q,p
if(a.a===0)this.a.aK(0)
else for(s=A.tE(a,a.r,A.o(a).c),r=this.a,q=s.$ti.c;s.m();){p=s.d
r.O(0,p==null?q.a(p):p)}}}
A.je.prototype={
b4(a){return this.v1(a)},
v1(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i
var $async$b4=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=new A.n5(q.c).rF(a)
l=q.b
k=a.a
s=2
return A.a(l.aM("lp_stores",1,"store = ?",[k]),$async$b4)
case 2:j=c
i=J.I(j)
s=i.gB(j)?3:5
break
case 3:s=6
return A.a(l.Z(m.b),$async$b4)
case 6:i=m.c,p=i.length,o=0
case 7:if(!(o<i.length)){s=9
break}s=10
return A.a(l.Z(i[o]),$async$b4)
case 10:case 8:i.length===p||(0,A.L)(i),++o
s=7
break
case 9:i=m.d,p=i.length,o=0
case 11:if(!(o<i.length)){s=13
break}s=14
return A.a(l.Z(i[o]),$async$b4)
case 14:case 12:i.length===p||(0,A.L)(i),++o
s=11
break
case 13:i=a.b
s=15
return A.a(l.aj(0,"lp_stores",A.l(["store",k,"table_name",k,"schema_ver",i,"definition_json",B.e.a8(a.aC(),null),"created_at",Date.now()],t.N,t.X)),$async$b4)
case 15:s=16
return A.a(A.jk(l,0,0,"create:"+k,i),$async$b4)
case 16:s=4
break
case 5:n=A.Z(J.ae(i.gC(j),"schema_ver"))
i=a.b
if(n>i)throw A.b(new A.jR('Store "'+k+'" on disk is schema v'+n+", but this package supports v"+i+"."))
s=n<i?17:18
break
case 17:s=19
return A.a(A.oR(q,a,n),$async$b4)
case 19:case 18:s=20
return A.a(l.F("lp_stores",A.l(["definition_json",B.e.a8(a.aC(),null),"schema_ver",i],t.N,t.X),"store = ?",[k]),$async$b4)
case 20:case 4:q.ch.j(0,k,new A.k2(a,new A.pt(A.G(t.N,t.b))))
return A.e(null,r)}})
return A.f($async$b4,r)},
af(a){var s=this.ch.h(0,a)
if(s==null)throw A.b(A.u('No store "'+a+'" registered in this LocalPocket.'))
return s},
dX(a,b,c){var s
if(A.qu(this)!=null)A.w(A.u(u.L))
s=this.d
s===$&&A.x()
return s.bX(new A.oJ(this,a,b,c),c)},
a5(a,b){return this.dX(a,B.w,b)},
du(a,b,c){return this.qL(a,b,c,c)},
qL(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$du=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a0=new A.q2()
$.wp()
a0.aF()
l=a0
k=a3===B.w&&m.a!==":memory:"
s=k&&m.cx!=="FULL"?3:4
break
case 3:s=5
return A.a(m.m0("PRAGMA synchronous=FULL"),$async$du)
case 5:m.cx="FULL"
case 4:p=6
j=A.n([],t.gi)
s=9
return A.a(m.b.a5(new A.oG(m,j,a2,a4),a4),$async$du)
case 9:i=a7
for(g=j,f=g.length,e=m.f,d=m.ch,c=0;c<g.length;g.length===f||(0,A.L)(g),++c){h=g[c]
b=d.h(0,h.a)
if(b!=null)b.d.u9(h.b)
e.tp(h)}q=i
n=[1]
s=7
break
n.push(8)
s=7
break
case 6:n=[2]
case 7:p=2
s=k&&m.cx!=="NORMAL"?10:11
break
case 10:p=13
s=16
return A.a(m.m0("PRAGMA synchronous=NORMAL"),$async$du)
case 16:m.cx="NORMAL"
p=2
s=15
break
case 13:p=12
a1=o.pop()
s=15
break
case 12:s=2
break
case 15:case 11:g=m.e
f=l.gtm();++g.a
g.b+=f
s=n.pop()
break
case 8:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$du,r)},
m0(a){++this.e.c
return this.b.av(a,B.v)},
m1(a,b){++this.e.d
return this.b.ak(a,b)},
dD(a){return this.rp(a)},
ro(){return this.dD(null)},
rp(a){var s=0,r=A.h(t.H),q=this,p
var $async$dD=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.b
s=a==null?2:4
break
case 2:s=5
return A.a(p.Z("ANALYZE"),$async$dD)
case 5:s=3
break
case 4:s=6
return A.a(p.Z("ANALYZE "+('"'+A.H(a,'"','""')+'"')),$async$dD)
case 6:case 3:return A.e(null,r)}})
return A.f($async$dD,r)},
eY(){var s=0,r=A.h(t.H),q=this
var $async$eY=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.c.c?2:3
break
case 2:s=4
return A.a(q.b.Z("PRAGMA wal_checkpoint(TRUNCATE)"),$async$eY)
case 4:case 3:return A.e(null,r)}})
return A.f($async$eY,r)},
eX(a){return this.vr(a)},
vr(a){var s=0,r=A.h(t.H),q=this,p
var $async$eX=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.b
s=a!=null?2:4
break
case 2:s=5
return A.a(p.Z("PRAGMA incremental_vacuum("+A.p(a)+")"),$async$eX)
case 5:s=3
break
case 4:s=6
return A.a(p.Z("VACUUM"),$async$eX)
case 6:case 3:return A.e(null,r)}})
return A.f($async$eX,r)},
eI(a){return this.uL(a)},
uK(){return this.eI(1e4)},
uL(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$eI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.a5(new A.oI(o,a),t.P),$async$eI)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eI,r)},
d6(a){return this.vb(a)},
vb(a){var s=0,r=A.h(t.H),q=this,p
var $async$d6=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.ch,p=new A.dt(p,p.r,p.e)
case 2:if(!p.m()){s=3
break}s=4
return A.a(q.dG(p.d,a),$async$d6)
case 4:s=2
break
case 3:s=5
return A.a(q.uK(),$async$d6)
case 5:s=6
return A.a(q.eY(),$async$d6)
case 6:s=7
return A.a(q.ro(),$async$d6)
case 7:return A.e(null,r)}})
return A.f($async$d6,r)},
dG(a,b){return this.rE(a,b)},
rE(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$dG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l={}
k=Date.now()
j=k-B.b.N(b.a,1000)
l.a=0
o=t.P,n=p.b
case 3:s=5
return A.a(n.ak("SELECT b.id FROM "+('"'+A.H(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",j,250]),$async$dG)
case 5:m=d
if(J.cf(m)){s=4
break}s=6
return A.a(p.a5(new A.oH(l,m,a),o),$async$dG)
case 6:s=3
break
case 4:q=l.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dG,r)},
p(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l
var $async$p=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.CW){s=1
break}n.CW=!0
n.f.a.p()
p=4
s=7
return A.a(n.b.Z("PRAGMA optimize"),$async$p)
case 7:p=2
s=6
break
case 4:p=3
l=o.pop()
s=6
break
case 3:s=2
break
case 6:s=8
return A.a(n.b.p(),$async$p)
case 8:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$p,r)}}
A.oJ.prototype={
$0(){var s=this
return s.a.du(s.b,s.c,s.d)},
$S(){return this.d.i("J<0>()")}}
A.oG.prototype={
$1(a){return this.mg(a,this.d)},
mg(a,b){var s=0,r=A.h(b),q,p=this,o,n,m
var $async$$1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.c7(p.a,a,p.b)
n=p.d
m=t.X
q=A.zh(new A.oF(p.c,o,n),null,A.l([$.wr(),o],m,m),n.i("J<0>"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S(){return this.d.i("J<0>(wS)")}}
A.oF.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("J<0>()")}}
A.oI.prototype={
$1(a){return this.mi(a)},
mi(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=J
s=2
return A.a(l.bw("SELECT o.store, o.record_id FROM lp_outbox o LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.record_id IS NULL OR s.sync_state = 'clean'"),$async$$1)
case 2:p=k.M(c),o=q.a
case 3:if(!p.m()){s=4
break}n=p.gn()
s=5
return A.a(l.P("lp_outbox","store = ? AND record_id = ?",[A.t(n.h(0,"store")),A.t(n.h(0,"record_id"))]),$async$$1)
case 5:++o.a
s=3
break
case 4:k=A
j=J
i=J
s=6
return A.a(l.bw("SELECT COUNT(*) c FROM lp_outbox"),$async$$1)
case 6:m=k.a7(j.ae(i.bB(c),"c"))
if(m==null)m=0
p=q.b
s=m>p?7:8
break
case 7:k=J
s=9
return A.a(l.ak("SELECT o.store, o.record_id FROM lp_outbox o JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.sync_state NOT IN ('dirty', 'conflict') ORDER BY o.created_at ASC LIMIT ?",[m-p]),$async$$1)
case 9:p=k.M(c)
case 10:if(!p.m()){s=11
break}n=p.gn()
s=12
return A.a(l.P("lp_outbox","store = ? AND record_id = ?",[A.t(n.h(0,"store")),A.t(n.h(0,"record_id"))]),$async$$1)
case 12:++o.a
s=10
break
case 11:case 8:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.oH.prototype={
$1(a){return this.mh(a)},
mh(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=a.b
p=J.M(q.b),o=q.c,n=t.N,m=t.X,l=a.c,k=a.a.e,j=q.a,i=t.s
case 2:if(!p.m()){s=3
break}h=A.t(p.gn().h(0,"id"))
d=J
s=4
return A.a(e.lP("lp_file_refs",A.n(["ref_id","hash"],i),"store = ? AND record_id = ?",[o,h]),$async$$1)
case 4:g=d.M(c)
case 5:if(!g.m()){s=6
break}f=g.gn()
s=7
return A.a(e.P("lp_file_refs","ref_id = ?",[f.h(0,"ref_id")]),$async$$1)
case 7:s=8
return A.a(e.av(u.y,[f.h(0,"hash")]),$async$$1)
case 8:s=5
break
case 6:s=9
return A.a(e.P("lp_conflicts","store = ? AND record_id = ?",[o,h]),$async$$1)
case 9:s=10
return A.a(e.F("lp_op_queue",A.l(["state","done"],n,m),u.l,[o,h]),$async$$1)
case 10:s=11
return A.a(e.P("lp_outbox","store = ? AND record_id = ?",[o,h]),$async$$1)
case 11:s=12
return A.a(e.P("lp_sync_row","store = ? AND record_id = ?",[o,h]),$async$$1)
case 12:s=13
return A.a(e.P(o,"id = ?",[h]),$async$$1)
case 13:g=A.al([h],n)
l.push(new A.a3(o,g))
k.e+=g.a;++j.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.oS.prototype={
$1(a){return a.geV().jJ(0,this.a)&&a.geV().wa(0,this.b.b)},
$S:116}
A.oT.prototype={
$2(a,b){return a.geV().S(0,b.geV())},
$S:117}
A.jz.prototype={
uT(a){if(a>this.f)this.f=a}}
A.pN.prototype={}
A.bF.prototype={
ag(){return"FieldKind."+this.b}}
A.b9.prototype={
gmM(){var s,r
if(this.e)return"TEXT"
s=this.b
$label0$0:{if(B.a0===s||B.x===s||B.a4===s||B.a5===s||B.B===s){r="TEXT"
break $label0$0}if(B.a1===s||B.T===s||B.a3===s){r="INTEGER"
break $label0$0}if(B.a2===s){r="REAL"
break $label0$0}throw A.b(new A.jI("None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details."))}return r},
aC(){var s,r=this,q=A.G(t.N,t.X)
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
A.fG.prototype={
ag(){return"IndexScope."+this.b}}
A.ed.prototype={
aC(){return A.l(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.np.prototype={
aC(){return A.l(["fields",this.a],t.N,t.X)}}
A.mj.prototype={}
A.bQ.prototype={
gj0(){var s,r,q,p,o=this,n=$.zr()
A.wY(o)
s=n.a.get(o)
if(s==null){s=A.bo(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.L)(r),++p)s.t(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
aC(){var s,r,q,p,o,n,m=this,l=t.N,k=t.X,j=A.G(l,k)
j.j(0,"name",m.a)
j.j(0,"version",m.b)
s=t.d
r=A.n([],s)
for(q=m.c,p=q.length,o=0;o<q.length;q.length===p||(0,A.L)(q),++o)r.push(q[o].aC())
j.j(0,"fields",r)
s=A.n([],s)
for(r=m.d,q=r.length,o=0;o<r.length;r.length===q||(0,A.L)(r),++o){n=r[o]
s.push(A.l(["columns",n.a,"unique",n.b,"scope",n.c.b],l,k))}j.j(0,"indexes",s)
j.j(0,"keepUnsyncedArchives",m.r)
s=m.w
if(s!=null)j.j(0,"fts",A.l(["fields",s.a],l,k))
return j}}
A.dy.prototype={
ag(){return"MutationAction."+this.b}}
A.e8.prototype={
gbl(){var s=this.c
return s==null?this.a.b:s},
gaA(){return this.b.a.a},
ic(){},
hG(a){var s=this
if(s.d!=null)return s.pY(B.az,a)
return s.a.dX(new A.m6(s,a),B.w,t.H)},
hB(a,b){var s=this
if(s.d!=null)return s.cN(a,b)
return s.a.dX(new A.m4(s,a,b),B.w,t.H)},
h2(a){var s=this
if(s.d!=null)return s.kD(B.C,a)
return s.a.dX(new A.m3(s,a),B.w,t.H)},
hK(a){var s=this
if(s.d!=null)return s.kD(B.G,a)
return s.a.dX(new A.m7(s,a),B.w,t.H)},
hF(a){var s=this
if(s.d!=null)return s.ba(a)
return s.a.dX(new A.m5(s,a),B.w,t.H)},
ba(a){return this.qp(a)},
qp(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$ba=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.ic()
p=q.d
o=p.b
n=q.b.a.a
j=J
s=2
return A.a(o.eM("lp_file_refs","store = ? AND record_id = ?",[n,a]),$async$ba)
case 2:m=j.M(c)
case 3:if(!m.m()){s=4
break}l=m.gn()
k=A.t(l.h(0,"hash"))
s=5
return A.a(o.P("lp_file_refs","ref_id = ?",[l.h(0,"ref_id")]),$async$ba)
case 5:s=6
return A.a(o.av(u.y,[k]),$async$ba)
case 6:s=3
break
case 4:s=7
return A.a(o.P("lp_conflicts","store = ? AND record_id = ?",[n,a]),$async$ba)
case 7:m=t.N
s=8
return A.a(o.F("lp_op_queue",A.l(["state","done"],m,t.X),u.l,[n,a]),$async$ba)
case 8:s=9
return A.a(o.P("lp_outbox","store = ? AND record_id = ?",[n,a]),$async$ba)
case 9:s=10
return A.a(o.P("lp_sync_row","store = ? AND record_id = ?",[n,a]),$async$ba)
case 10:s=11
return A.a(o.P(n,"id = ?",[a]),$async$ba)
case 11:p.X(new A.a3(n,A.al([a],m)))
return A.e(null,r)}})
return A.f($async$ba,r)},
cN(a,b){return this.qg(a,b)},
qg(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h
var $async$cN=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.ic()
s=3
return A.a(p.gbl().ak("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$cN)
case 3:o=d
n=J.I(o)
if(n.gW(o)){m=n.gC(o)
l=A.qp(m)
k=m.h(0,"o_kind")!=null?A.vA(A.l(["store",m.h(0,"o_store"),"record_id",m.h(0,"o_record_id"),"kind",m.h(0,"o_kind"),"payload_json",m.h(0,"o_payload_json"),"base_updated",m.h(0,"o_base_updated"),"base_hash",m.h(0,"o_base_hash"),"dirty_fields",m.h(0,"o_dirty_fields"),"op_id",m.h(0,"o_op_id"),"created_at",m.h(0,"o_created_at"),"updated_at",m.h(0,"o_updated_at"),"depends_on_op",m.h(0,"o_depends_on_op")],t.N,t.X)):null}else{l=null
k=null}s=l!=null&&l.w===B.X&&k!=null?4:5
break
case 4:s=6
return A.a(p.bI(a,b,l,k),$async$cN)
case 6:s=1
break
case 5:s=7
return A.a(p.bK(a),$async$cN)
case 7:j=d
if(j==null)throw A.b(A.jK("No record "+p.gaA()+"/"+a+" to patch."))
n=t.N
i=t.X
h=A.cj(j,n,i)
h.G(0,b)
i=A.G(n,i)
i.j(0,"id",a)
i.G(0,h)
s=8
return A.a(p.aw(B.z,j,a,k,l,i),$async$cN)
case 8:case 1:return A.e(q,r)}})
return A.f($async$cN,r)},
bI(a,b,c,d){return this.qh(a,b,c,d)},
qh(a3,a4,a5,a6){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$bI=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=null
try{a1=B.e.an(a6.d,null)}catch(a7){a1=null}s=!t.G.b(a1)?3:4
break
case 3:s=5
return A.a(n.bK(a3),$async$bI)
case 5:i=a9
if(i==null)throw A.b(A.jK("No record "+n.gaA()+"/"+a3+" to patch."))
h=t.N
g=t.X
f=A.cj(i,h,g)
f.G(0,a4)
g=A.G(h,g)
g.j(0,"id",a3)
g.G(0,f)
s=6
return A.a(n.aw(B.z,i,a3,a6,a5,g),$async$bI)
case 6:s=1
break
case 4:e=a1.h(0,"id")
s=e!=null&&!J.y(e,a3)?7:8
break
case 7:s=9
return A.a(n.bK(a3),$async$bI)
case 9:i=a9
if(i==null)throw A.b(A.jK("No record "+n.gaA()+"/"+a3+" to patch."))
h=t.N
g=t.X
f=A.cj(i,h,g)
f.G(0,a4)
g=A.G(h,g)
g.j(0,"id",a3)
g.G(0,f)
s=10
return A.a(n.aw(B.z,i,a3,a6,a5,g),$async$bI)
case 10:s=1
break
case 8:h=t.N
g=t.X
f=A.cj(a1,h,g)
f.G(0,a4)
m=f
J.bA(m,"id",a3)
f=n.b
d=f.a
c=new A.O("")
A.a9(c,A.b0(d,m))
b=c.a
a=b.charCodeAt(0)==0?b:b
g=A.cj(m,h,g)
g.O(0,"id")
n.la(a3,g,a)
g=n.a
l=A.e0(d,J.y(J.ae(m,"archived"),!0),g.z,g.Q,a3,m)
p=12
s=15
return A.a(n.gbl().F(d.a,l,"id = ?",[a3]),$async$bI)
case 15:p=2
s=14
break
case 12:p=11
a2=o.pop()
k=A.E(a2)
h=A.zn(k,m)
throw A.b(h)
s=14
break
case 11:s=2
break
case 14:a0=n.kk(a1,m,B.z)
g=g.as
g===$&&A.x()
s=16
return A.a(g.b2(B.z,null,a0,n.gbl(),a3,m,a1,a6,a,l,a5,f),$async$bI)
case 16:g=n.d
if(g!=null)g.X(new A.a3(d.a,A.al([a3],h)))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bI,r)},
aw(a,b,c,d,e,f){return this.pZ(a,b,c,d,e,f)},
kD(a,b){var s=null
return this.aw(a,s,b,s,s,s)},
pY(a,b){var s=null
return this.aw(a,s,s,s,s,b)},
pZ(b1,b2,b3,b4,b5,b6){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aw=A.c(function(b7,b8){if(b7===1){o.push(b8)
s=p}for(;;)switch(s){case 0:n.ic()
m=null
l=b2
k=null
s=b1===B.az?3:5
break
case 3:h=A.R(b6.h(0,"id"))
if(h==null)h=A.lr()
g=$.wz()
if(!g.b.test(h))throw A.b(A.ax('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
f=l
s=f==null?6:8
break
case 6:s=9
return A.a(n.bK(m),$async$aw)
case 9:s=7
break
case 8:b8=f
case 7:l=b8
k=n.kz(b6,m)
b1=l==null?B.bI:B.z
s=4
break
case 5:s=b1===B.z?10:12
break
case 10:b3.toString
m=b3
f=l
s=f==null?13:15
break
case 13:s=16
return A.a(n.bK(m),$async$aw)
case 16:s=14
break
case 15:b8=f
case 14:l=b8
if(l==null)throw A.b(A.jK("No record "+n.gaA()+"/"+A.p(m)+" to update."))
b6.toString
k=n.kz(b6,m)
s=11
break
case 12:b3.toString
m=b3
f=l
s=f==null?17:19
break
case 17:s=20
return A.a(n.bK(m),$async$aw)
case 20:s=18
break
case 19:b8=f
case 18:l=b8
if(l==null)throw A.b(A.jK("No record "+n.gaA()+"/"+A.p(m)+" to archive/restore."))
g=A.cj(l,t.N,t.X)
g.j(0,"archived",b1===B.C)
k=g
case 11:case 4:g=n.b
e=g.a
d=t.N
c=A.cj(k,d,t.X)
if(J.ar(m)!==0)c.j(0,"id",m)
b=new A.O("")
A.a9(b,A.b0(e,c))
c=b.a
a=c.charCodeAt(0)==0?c:c
n.la(m,k,a)
s=l==null?21:23
break
case 21:a0=null
s=22
break
case 23:s=b5==null?24:26
break
case 24:c=n.a.as
c===$&&A.x()
s=27
return A.a(c.bx(n.gbl(),e.a,m),$async$aw)
case 27:c=b8
a0=c
s=25
break
case 26:a0=b5
case 25:case 22:s=l==null?28:30
break
case 28:a1=null
s=29
break
case 30:s=b4==null?31:33
break
case 31:c=n.a.as
c===$&&A.x()
s=34
return A.a(c.dU(n.gbl(),e.a,m),$async$aw)
case 34:c=b8
a1=c
s=32
break
case 33:a1=b4
case 32:case 29:c=a0==null
a2=!c
if(a2&&a0.w===B.N)throw A.b(A.wR("Record "+n.gaA()+"/"+A.p(m)+u.W))
if(l!=null)a3=!a2||a0.w===B.r
else a3=!1
if(l!=null&&a3){b=new A.O("")
A.a9(b,A.b0(e,l))
a2=b.a
a4=a2.charCodeAt(0)==0?a2:a2
a2=A.au(B.l.u(B.f.u(a4)).a)
a5=new A.lO(a4,a2,c?null:a0.c)}else a5=null
c=m
a2=k
a6=n.a
j=A.e0(e,J.y(J.ae(k,"archived"),!0),a6.z,a6.Q,c,a2)
p=36
c=e.a
s=l==null?39:41
break
case 39:s=42
return A.a(n.gbl().aj(0,c,j),$async$aw)
case 42:s=40
break
case 41:s=43
return A.a(n.gbl().F(c,j,"id = ?",[m]),$async$aw)
case 43:case 40:p=2
s=38
break
case 36:p=35
b0=o.pop()
i=A.E(b0)
g=A.zn(i,k)
throw A.b(g)
s=38
break
case 35:s=2
break
case 38:a8=n.kk(l,k,b1)
c=a6.as
c===$&&A.x()
a2=n.gbl()
a6=m
a9=l
s=44
return A.a(c.b2(b1,a5,a8,a2,a6,k,a9,a1,a,j,a0,g),$async$aw)
case 44:g=n.d
if(g!=null)g.X(new A.a3(e.a,A.al([m],d)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aw,r)},
kz(a,b){var s,r,q,p=A.G(t.N,t.X)
for(s=a.gbP(),s=s.gv(s);s.m();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.lO("archived",new A.m2())
return p},
kk(a,b,c){var s,r,q,p,o
if(a==null)return B.bA
s=t.N
r=A.bo(s)
s=A.ob(a.gR(),s)
s.G(0,new A.ai(b,A.o(b).i("ai<1>")))
for(s=A.tE(s,s.r,A.o(s).c),q=s.$ti.c;s.m();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.E.ah(a.h(0,p),b.h(0,p)))r.t(0,p)}o=A.Q(r,r.$ti.c)
B.c.b7(o)
return o},
bK(a){return this.qy(a)},
qy(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$bK=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.gbl().ak('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$bK)
case 3:m=c
l=J.I(m)
if(l.gB(m)){q=null
s=1
break}o=p.a
q=A.ff(n,l.gC(m),o.z,o.Q)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bK,r)},
bZ(a){return this.mz(a)},
mz(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h
var $async$bZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.d==null
if(h&&p.b.d.a.I(a)){q=p.b.d.bZ(a)
s=1
break}o=p.b
n=o.a
m=n.a
s=3
return A.a(p.gbl().ak("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+m+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[m,a]),$async$bZ)
case 3:l=c
m=J.I(l)
if(m.gB(l)){if(h)o.d.jM(a,null)
q=null
s=1
break}k=m.gC(l)
m=p.a
j=A.ff(n,k,m.z,m.Q)
i=A.a7(k.h(0,"lp_schema_ver"))
if(i==null)i=1
m=n.b
if(i<m)j=A.DR(n,j,i,m)
if(h)o.d.jM(a,j)
q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bZ,r)},
la(a,b,c){var s,r,q,p,o,n,m,l,k,j
for(s=this.b.a.c,r=s.length,q=t.j,p=t.f,o=0;o<s.length;s.length===r||(0,A.L)(s),++o){n=s[o]
m=n.a
l=b.h(0,m)
if(n.c&&l==null)throw A.b(A.ax('Field "'+m+'" is required.',m))
if(l==null)continue
k=n.b
switch(k.a){case 0:case 5:case 8:if(typeof l!="string")throw A.b(A.ax('Field "'+m+'" must be a string.',m))
if(k===B.x){k=n.f
k.toString
k=!B.c.D(k,l)}else k=!1
if(k){s=n.f
s.toString
throw A.b(A.ax('Field "'+m+'" must be one of '+B.c.K(s,", ")+".",m))}break
case 1:case 4:if(!A.az(l))throw A.b(A.ax('Field "'+m+'" must be an integer.',m))
break
case 2:if(typeof l!="number")throw A.b(A.ax('Field "'+m+'" must be a number.',m))
break
case 3:if(!A.bN(l))throw A.b(A.ax('Field "'+m+'" must be a boolean.',m))
break
case 6:if(!p.b(l)&&!q.b(l))throw A.b(A.ax('Field "'+m+'" must be a JSON object or array.',m))
break
case 7:if(!q.b(l))throw A.b(A.ax('Field "'+m+'" must be a JSON array.',m))
break}}j=B.f.u(c).length
s=this.a.r
if(j>s)throw A.b(A.ax("Document exceeds max size ("+j+" > "+s+" bytes).",null))}}
A.m6.prototype={
$1(a){return a.ck(this.a.b.a.a).hG(this.b)},
$S:6}
A.m4.prototype={
$1(a){return a.ck(this.a.b.a.a).hB(this.b,this.c)},
$S:6}
A.m3.prototype={
$1(a){return a.ck(this.a.b.a.a).h2(this.b)},
$S:6}
A.m7.prototype={
$1(a){return a.ck(this.a.b.a.a).hK(this.b)},
$S:6}
A.m5.prototype={
$1(a){return a.ck(this.a.b.a.a).hF(this.b)},
$S:6}
A.m2.prototype={
$0(){return!1},
$S:56}
A.c7.prototype={
X(a){this.c.push(a)
this.a.e.e+=a.b.a},
ck(a){var s=this.a
return new A.e8(s,s.af(a),this.b,this)}}
A.jv.prototype={
aF(){var s=this.e=A.vJ(this.gth(),new A.oZ(this),null,!1,t.b)
return new A.aY(s,A.o(s).i("aY<1>"))},
q3(a){var s,r=this
if(a.a!==r.b.a.a)return
s=a.b
if(s.a!==0&&!s.D(0,r.c))return
if(r.w){r.x=!0
return}s=r.r
if(s!=null)s.A()
r.r=A.cU(B.Q,r.glb())},
ek(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$ek=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.w=!0
q=3
i=n.a
h=n.b.a
s=6
return A.a(i.b.aM(h.a,1,"id = ?",[n.c]),$async$ek)
case 6:m=b
l=null
if(J.fk(m))l=A.ff(h,J.bB(m),i.z,i.Q)
if(l==null)g="<null>"
else{f=new A.O("")
A.a9(f,l)
i=f.a
g=A.au(B.l.u(B.f.u(i.charCodeAt(0)==0?i:i)).a)}k=g
if(!J.y(k,n.y)){n.y=k
i=n.e
if(i!=null)i.t(0,l)}o.push(5)
s=4
break
case 3:q=2
d=p.pop()
j=A.E(d)
i=n.e
if(i!=null)i.lg(j)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.w=!1
if(n.x){n.x=!1
i=n.r
if(i!=null)i.A()
n.r=A.cU(B.Q,n.glb())}s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$ek,r)},
ti(){var s=this.r
if(s!=null)s.A()
s=this.f
if(s!=null)s.A()
s=this.e
if(s!=null)s.p()}}
A.oZ.prototype={
$0(){var s=this.a,r=s.a.f.a
s.f=new A.aR(r,A.o(r).i("aR<1>")).aL(s.gq2())
s.ek()},
$S:0}
A.r0.prototype={
bX(a,b){var s,r=this
r.c.$1(++r.b)
s=new A.r($.v,b.i("r<0>"))
r.a=r.a.bh(new A.r1(r,new A.aI(s,b.i("aI<0>")),a),t.H)
return s}}
A.r1.prototype={
$1(a){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
h=n.b
s=6
return A.a(n.c.$0(),$async$$1)
case 6:h.ai(c)
o.push(5)
s=4
break
case 3:q=2
i=p.pop()
m=A.E(i)
l=A.ad(i)
n.b.bO(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a
j.c.$1(--j.b)
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:24}
A.lP.prototype={}
A.fz.prototype={}
A.nh.prototype={
bD(){var s=0,r=A.h(t.k4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$bD=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:a6=n.d
if(a6==null){q=B.b7
s=1
break}m=0
l=0
k=0
j=!1
b=n.a
a=b.at
a===$&&A.x()
a8=J
s=3
return A.a(a.dI(25),$async$bD)
case 3:a0=a8.M(b0),a1=n.c
case 4:if(!a0.m()){s=5
break}i=a0.gn()
p=7
s=i.e===B.aA?10:12
break
case 10:s=13
return A.a(n.cb(i,a6),$async$bD)
case 13:h=b0
s=h?14:15
break
case 14:s=16
return A.a(a.lJ(i.b),$async$bD)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.aB?17:18
break
case 17:s=19
return A.a(n.ea(i),$async$bD)
case 19:g=b0
s=g?20:21
break
case 20:s=22
return A.a(a.lJ(i.b),$async$bD)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
a7=o.pop()
f=A.E(a7)
j=!0
e=i.w+1
d=a1.rP(e)
a3=i.b
a4=J.am(f)
a5=A.bI()
s=23
return A.a(a.ut(a3,a4,e,a5+B.b.N(d.a,1000)),$async$bD)
case 23:s=9
break
case 6:s=2
break
case 9:s=4
break
case 5:for(b=b.ch,a=new A.dt(b,b.r,b.e);a.m();){c=a.d
a0=c
if(b.h(0,a0)==null)A.w(A.u('No store "'+a0+'" registered in this LocalPocket.'))}q=new A.fz(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bD,r)},
cb(a,b){return this.qo(a,b)},
qo(a1,a2){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$cb=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:e={}
d=t.G.a(B.e.an(a1.f,null))
c=A.t(d.h(0,"ref_id"))
b=A.t(d.h(0,"hash"))
a=A.R(d.h(0,"name"))
if(a==null)a=b+".bin"
s=3
return A.a(a2.co(b),$async$cb)
case 3:if(!a4)throw A.b(A.u("Blob for hash "+b+" not found in store"))
s=4
return A.a(a2.cF(b),$async$cb)
case 4:l=a4
if(l==null)throw A.b(A.u("Blob size for hash "+b+" is unavailable"))
m=null
p=6
k=n.b.z
k===$&&A.x()
s=9
return A.a(k.bz(a1.d),$async$cb)
case 9:m=a4
p=2
s=8
break
case 6:p=5
a0=o.pop()
s=8
break
case 5:s=2
break
case 8:i=null
if(m!=null)for(k=m.e,h=k.length,g=0;g<h;++g){f=k[g]
if(B.a.L(f,B.a.q(b,0,10))||B.a.L(f,a)){i=f
break}}e.a=null
s=i!=null?10:12
break
case 10:e.a=i
s=11
break
case 12:s=13
return A.a(n.b.vp(a1.d,A.l([a,new A.ez(a,l,new A.nj(a2,b))],t.N,t.h3)),$async$cb)
case 13:k=a4.e
e.a=k.length!==0?B.c.ga_(k):a
case 11:s=14
return A.a(n.a.a5(new A.nk(e,c,a1),t.P),$async$cb)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cb,r)},
ea(a){return this.qn(a)},
qn(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$ea=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.G.a(B.e.an(a.f,null))
n=A.t(o.h(0,"ref_id"))
m=A.R(o.h(0,"remote_name"))
l=A.t(o.h(0,"hash"))
s=m!=null?3:4
break
case 3:s=5
return A.a(p.b.vn(a.d,A.n([m],t.s)),$async$ea)
case 5:case 4:s=6
return A.a(p.a.a5(new A.ni(n,l,a),t.P),$async$ea)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ea,r)},
d1(a,b,c,d){return this.uy(a,b,c,d)},
uy(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$d1=A.c(function(e,a0){if(e===1)return A.d(a0,r)
for(;;)switch(s){case 0:s=2
return A.a(a.eM("lp_file_refs","store = ? AND record_id = ?",[d,b]),$async$d1)
case 2:j=a0
i=A.AY(c,A.ap(c).c)
h=J.at(j)
g=t.lS
f=A.ob(new A.bt(h.cr(j,new A.nl(),t.v),g),g.i("m.E"))
g=c.length,q=t.N,p=t.X,o=0
case 3:if(!(o<c.length)){s=5
break}n=c[o]
s=!f.D(0,n)?6:7
break
case 6:s=8
return A.a(a.cZ(0,"lp_file_refs",A.l(["ref_id",A.lr(),"store",d,"record_id",b,"field","imgs","hash","unknown_"+n,"remote_name",n,"state","remote_only"],q,p),B.b3),$async$d1)
case 8:case 7:case 4:c.length===g||(0,A.L)(c),++o
s=3
break
case 5:h=h.gv(j)
case 9:if(!h.m()){s=10
break}g=h.gn()
m=A.R(g.h(0,"remote_name"))
if(m==null){s=9
break}if(i.D(0,m)){s=9
break}l=A.t(g.h(0,"state"))
if(l==="pending_remove"||l==="pending_upload"){s=9
break}s=11
return A.a(a.P("lp_file_refs","ref_id = ?",[g.h(0,"ref_id")]),$async$d1)
case 11:k=A.R(g.h(0,"hash"))
s=k!=null&&k.length!==0&&!B.a.L(k,"unknown_")?12:13
break
case 12:s=14
return A.a(a.av(u.y,[k]),$async$d1)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$d1,r)}}
A.nj.prototype={
$0(){return this.a.bu(this.b)},
$S:142}
A.nk.prototype={
$1(a){return this.m9(a)},
m9(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.F("lp_file_refs",A.l(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.X(new A.a3(p.c,A.al([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.ni.prototype={
$1(a){return this.m8(a)},
m8(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.P("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.av(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.X(new A.a3(p.c,A.al([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.nl.prototype={
$1(a){return A.R(a.h(0,"remote_name"))},
$S:58}
A.ba.prototype={}
A.oi.prototype={
gkU(){return this.b},
d0(a,b,c){return this.ui(a,b,c)},
uh(a,b){return this.d0("imgs",a,b)},
ui(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$d0=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=J
s=3
return A.a(p.a.b.eM("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,a]),$async$d0)
case 3:o=n.aB(e,A.Er(),t.A)
o=A.Q(o,o.$ti.i("S.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d0,r)},
cT(a,b,c,d,e,f,g){return this.ru(a,b,c,d,e,f,g)},
rt(a,b,c,d){return this.cT(a,null,b,"imgs",null,c,d)},
ru(a,b,c,d,e,f,g){var s=0,r=A.h(t.A),q,p=this,o,n,m
var $async$cT=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:o=p.gkU()
s=3
return A.a(o.bv(a,b,c),$async$cT)
case 3:n=i
s=4
return A.a(o.cF(n),$async$cT)
case 4:m=i
if(m==null)m=0
s=5
return A.a(p.a.a5(new A.oj(g,f,d,n,m,A.lr(),e),t.A),$async$cT)
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cT,r)},
dT(a,b,c,d,e){return this.uC(a,b,c,d,e)},
uB(a,b,c){return this.dT("imgs",0,a,b,c)},
uC(a,b,c,d,e){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l,k
var $async$dT=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:m=p.gkU()
s=3
return A.a(p.d0(a,c,e),$async$dT)
case 3:l=g
k=J.I(l)
if(k.gB(l))throw A.b(A.u("No files found for "+e+"/"+c+"/"+a))
o=d!=null?k.cW(l,new A.ok(d),new A.ol(d)):k.h(l,b)
if(o.r==="remote_only")throw A.b(A.u("File is remote_only; download it before opening."))
k=Date.now()
n=o.e
s=4
return A.a(p.a.b.av("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[k,n]),$async$dT)
case 4:q=m.bu(n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dT,r)},
eQ(a,b,c,d,e,f){return this.v3(0,b,c,d,e,f)},
v3(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$eQ=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.d0(b,d,f),$async$eQ)
case 3:n=h
m=J.I(n)
if(m.gB(n)){s=1
break}o=e!=null?m.cW(n,new A.om(e),new A.on(e)):m.h(n,c)
s=4
return A.a(p.a.a5(new A.oo(o,f,d,b),t.P),$async$eQ)
case 4:case 1:return A.e(q,r)}})
return A.f($async$eQ,r)},
cB(a,b){return this.my(a,b)},
my(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h
var $async$cB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=p.b
s=3
return A.a(j.cU(b),$async$cB)
case 3:i=0+d
h=Date.now()-B.b.N(a.a,1000)
o=p.a.b,n=t.s
case 4:s=6
return A.a(o.bW("lp_blobs",A.n(["hash"],n),250,"hash ASC","refcount <= 0 AND last_access <= ?",[h]),$async$cB)
case 6:m=d
l=J.I(m)
if(l.gB(m)){s=5
break}l=l.gv(m)
case 7:if(!l.m()){s=8
break}k=A.t(l.gn().h(0,"hash"))
s=9
return A.a(j.dH(k),$async$cB)
case 9:s=10
return A.a(o.P("lp_blobs","hash = ?",[k]),$async$cB)
case 10:++i
s=7
break
case 8:s=4
break
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cB,r)},
cn(a){return this.tr(a)},
tr(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cn=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.b
f=p.a.b
d=A
s=3
return A.a(f.bw("SELECT SUM(size) as total FROM lp_blobs"),$async$cn)
case 3:e=d.wf(c)
if(e==null)e=0
if(e<=a){q=0
s=1
break}o=t.N,n=t.X,m=0
case 4:if(!(e>a)){s=5
break}s=6
return A.a(f.bw("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$cn)
case 6:l=c
k=J.I(l)
if(k.gB(l)){s=5
break}k=k.gv(l)
case 7:if(!k.m()){s=8
break}j=k.gn()
if(e<=a){s=8
break}i=A.t(j.h(0,"hash"))
h=A.Z(j.h(0,"size"))
s=9
return A.a(g.dH(i),$async$cn)
case 9:s=10
return A.a(f.F("lp_file_refs",A.l(["state","remote_only"],o,n),"hash = ? AND state = ?",[i,"synced"]),$async$cn)
case 10:s=11
return A.a(f.P("lp_blobs","hash = ?",[i]),$async$cn)
case 11:e-=h;++m
s=7
break
case 8:s=4
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cn,r)}}
A.oj.prototype={
$1(a){return this.mc(a)},
mc(a0){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$1=A.c(function(a1,a2){if(a1===1)return A.d(a2,r)
for(;;)switch(s){case 0:j=a0.b
i=Date.now()
h=t.s
g=p.a
f=p.b
e=p.c
d=p.d
s=3
return A.a(j.eN("lp_file_refs",A.n(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],h),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[g,f,e,d]),$async$$1)
case 3:c=a2
b=J.I(c)
if(b.gW(c)){q=A.wZ(b.gC(c))
s=1
break}a=J
s=7
return A.a(j.eN("lp_blobs",A.n(["hash","refcount"],h),1,"hash = ?",[d]),$async$$1)
case 7:s=a.cf(a2)?4:6
break
case 4:s=8
return A.a(j.aj(0,"lp_blobs",A.l(["hash",d,"size",p.e,"state","local","refcount",1,"last_access",i,"created_at",i],t.N,t.X)),$async$$1)
case 8:s=5
break
case 6:s=9
return A.a(j.av("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",[i,d]),$async$$1)
case 9:case 5:s=10
return A.a(j.eN("lp_outbox",A.n(["op_id","base_updated"],h),1,"store = ? AND record_id = ?",[g,f]),$async$$1)
case 10:o=a2
h=J.I(o)
n=h.gW(o)&&J.ae(h.gC(o),"base_updated")==null?A.R(J.ae(h.gC(o),"op_id")):null
h=p.f
b=p.r
m=t.N
l=t.X
s=11
return A.a(j.cZ(0,"lp_file_refs",A.l(["ref_id",h,"store",g,"record_id",f,"field",e,"hash",d,"remote_name",b,"state","pending_upload"],m,l),B.a_),$async$$1)
case 11:k=A.lr()
s=12
return A.a(j.aj(0,"lp_op_queue",A.l(["op_id",k,"store",g,"record_id",f,"kind","fileUpload","payload_json",B.e.a8(A.l(["ref_id",h,"field",e,"hash",d,"name",b==null?d+".bin":b],m,m),null),"state","pending","depends_on_op",n,"created_at",i],m,l)),$async$$1)
case 12:a0.X(new A.a3(g,A.al([f],m)))
q=new A.ba(h,g,f,e,d,b,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:151}
A.ok.prototype={
$1(a){return a.a===this.a},
$S:43}
A.ol.prototype={
$0(){return A.w(A.u("FileRef "+this.a+" not found"))},
$S:28}
A.om.prototype={
$1(a){return a.a===this.a},
$S:43}
A.on.prototype={
$0(){return A.w(A.u("FileRef "+this.a+" not found"))},
$S:28}
A.oo.prototype={
$1(a){return this.md(a)},
md(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=Date.now()
n=q.a
m=n.r==="pending_upload"&&n.f==null
l=t.N
k=t.X
j=n.a
i=n.e
s=m?2:4
break
case 2:s=5
return A.a(p.P("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 5:s=6
return A.a(p.av(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.F("lp_op_queue",A.l(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.F("lp_file_refs",A.l(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.aj(0,"lp_op_queue",A.l(["op_id",A.lr(),"store",q.b,"record_id",q.c,"kind","fileRemove","payload_json",B.e.a8(A.l(["ref_id",j,"field",q.d,"remote_name",n.f,"hash",i],l,t.v),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.X(new A.a3(q.b,A.al([q.c],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.qQ.prototype={
ej(a){var s=$.zH()
if(!s.b.test(a))throw A.b(A.P('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
bm(){var s=0,r=A.h(t.B),q,p=2,o=[],n,m,l,k,j
var $async$bm=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.lv()
if(n==null){q=null
s=1
break}l=t.m
s=7
return A.a(A.a2(n.getDirectory(),l),$async$bm)
case 7:m=b
s=8
return A.a(A.a2(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$bm)
case 8:l=b
q=l
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
q=null
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bm,r)},
bv(a,b,c){var s=null
return this.uO(a,b,c)},
uO(a3,a4,a5){var s=0,r=A.h(t.N),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$bv=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a=null
a0=A.n([],t.bs)
a1=new A.ru(a0)
a0=t.i4
l=A.n([],a0)
k=new A.eM(A.d2(new A.l7(new A.qR(l),A.n([],a0),t.mI)))
j=0
p=4
a0=new A.c1(A.bg(a3,"stream",t.K))
p=7
case 10:s=12
return A.a(a0.m(),$async$bv)
case 12:if(!a7){s=11
break}i=a0.gn()
J.dd(a1,i)
k.a.t(0,i)
j+=J.ar(i)
s=10
break
case 11:n.push(9)
s=8
break
case 7:n=[4]
case 8:p=4
s=13
return A.a(a0.A(),$async$bv)
case 13:s=n.pop()
break
case 9:k.a.p()
if(a5!=null&&!J.y(j,a5)){a0=A.u("Size mismatch: expected "+A.p(a5)+" but got "+A.p(j))
throw A.b(a0)}c=a
h=c==null?A.au(J.lB(l).a):c
m.ej(h)
if(a4!=null&&!J.y(h,a4)){a0=A.u("SHA-256 mismatch: expected "+a4+" but got "+A.p(h))
throw A.b(a0)}g=a1.ju()
s=14
return A.a(m.bm(),$async$bv)
case 14:f=a7
s=f!=null?15:17
break
case 15:a0=t.m
s=18
return A.a(A.a2(f.getFileHandle(h,{create:!0}),a0),$async$bv)
case 18:e=a7
s=19
return A.a(A.a2(e.createWritable(),a0),$async$bv)
case 19:d=a7
a0=t.X
s=20
return A.a(A.a2(d.write(t.a.a(J.wD(g))),a0),$async$bv)
case 20:s=21
return A.a(A.a2(d.close(),a0),$async$bv)
case 21:s=16
break
case 17:m.b.j(0,h,g)
case 16:q=h
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
throw a2
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bv,r)},
bu(a){return this.uE(a)},
uE(a){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$bu=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:n.ej(a)
h=n.b
if(h.I(a)){h=h.h(0,a)
h.toString
q=A.q4(h,t.L)
s=1
break}s=3
return A.a(n.bm(),$async$bu)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
h=t.m
s=10
return A.a(A.a2(m.getFileHandle(a,{create:!1}),h),$async$bu)
case 10:l=c
s=11
return A.a(A.a2(l.getFile(),h),$async$bu)
case 11:k=c
s=12
return A.a(A.a2(k.arrayBuffer(),t.a),$async$bu)
case 12:j=c
i=A.bq(j,0,null)
i=A.q4(i,t.L)
q=i
s=1
break
p=2
s=9
break
case 7:p=6
f=o.pop()
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.u("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bu,r)},
dH(a){return this.rR(a)},
rR(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$dH=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:o.ej(a)
o.b.O(0,a)
s=2
return A.a(o.bm(),$async$dH)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(A.x0(n,a),$async$dH)
case 9:q=1
s=8
break
case 6:q=5
l=p.pop()
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dH,r)},
co(a){return this.tx(a)},
tx(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k
var $async$co=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:n.ej(a)
if(n.b.I(a)){q=!0
s=1
break}s=3
return A.a(n.bm(),$async$co)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(A.a2(m.getFileHandle(a,{create:!1}),t.m),$async$co)
case 10:q=!0
s=1
break
p=2
s=9
break
case 7:p=6
k=o.pop()
q=!1
s=1
break
s=9
break
case 6:s=2
break
case 9:case 5:q=!1
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$co,r)},
cF(a){return this.mK(a)},
mK(a){var s=0,r=A.h(t.I),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$cF=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:n.ej(a)
j=n.b
if(j.I(a)){q=j.h(0,a).length
s=1
break}s=3
return A.a(n.bm(),$async$cF)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
j=t.m
s=10
return A.a(A.a2(m.getFileHandle(a,{create:!1}),j),$async$cF)
case 10:l=c
s=11
return A.a(A.a2(l.getFile(),j),$async$cF)
case 11:k=c
j=k.size
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
s=9
break
case 6:s=2
break
case 9:case 5:q=null
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cF,r)},
cU(a){return this.rB(a)},
rB(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
var $async$cU=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(m.bm(),$async$cU)
case 3:f=c
if(f==null){q=0
s=1
break}l=0
p=5
i=new A.c1(A.bg(A.x_(f),"stream",t.K))
p=8
h=t.X
case 11:s=13
return A.a(i.m(),$async$cU)
case 13:if(!c){s=12
break}k=i.gn()
j=k.name
if(!J.Af(j,"tmp_")){s=11
break}p=15
s=18
return A.a(A.a2(f.removeEntry(j,{recursive:!1}),h),$async$cU)
case 18:++l
p=8
s=17
break
case 15:p=14
e=o.pop()
s=17
break
case 14:s=8
break
case 17:s=11
break
case 12:n.push(10)
s=9
break
case 8:n=[5]
case 9:p=5
s=19
return A.a(i.A(),$async$cU)
case 19:s=n.pop()
break
case 10:p=2
s=7
break
case 5:p=4
d=o.pop()
s=7
break
case 4:s=2
break
case 7:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cU,r)}}
A.qR.prototype={
$1(a){return B.c.G(this.a,a)},
$S:60}
A.kb.prototype={
glS(){return 1}}
A.lL.prototype={
cw(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h
var $async$cw=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=m.b
s=h==null?3:4
break
case 3:j=m.d
l=j==null?m.d=m.a.ha():j
p=5
s=8
return A.a(l,$async$cw)
case 8:k=b
m.b=k
s=k.glS()<0.25?9:10
break
case 9:s=11
return A.a(m.iJ(),$async$cw)
case 11:case 10:i=m.b
i.toString
q=i
n=[1]
s=6
break
n.push(7)
s=6
break
case 5:n=[2]
case 6:p=2
m.d=null
s=n.pop()
break
case 7:case 4:s=h.glS()<0.25?12:13
break
case 12:s=14
return A.a(m.iJ(),$async$cw)
case 14:case 13:i=m.b
i.toString
q=i
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cw,r)},
eO(){var s=0,r=A.h(t.q),q,p=this
var $async$eO=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=p.b==null?3:4
break
case 3:s=5
return A.a(p.a.ha(),$async$eO)
case 5:p.b=b
case 4:q=p.iJ()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eO,r)},
iJ(){var s=this.c
if(s!=null)return s
return this.c=this.fd()},
fd(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$fd=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:++m.e
p=3
k=m.b
k.toString
s=6
return A.a(m.a.jr(k),$async$fd)
case 6:l=b
m.b=l
q=l
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
return A.f($async$fd,r)}}
A.jC.prototype={
hC(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$hC=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.at){s=1
break}n.at=!0
if(n.ax){s=1
break}p=4
m=n.z
m===$&&A.x()
s=7
return A.a(m.hE(),$async$hC)
case 7:n.as=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.E(k)
if(m instanceof A.bk){n.as=!1
n.ax=!0}else if(m instanceof A.aE)n.at=n.as=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hC,r)},
f7(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$f7=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.Q!=null){s=1
break}o=p.z
o===$&&A.x()
n=new A.pi(o,A.n(["data"],t.s),B.b4,p.gqa(),p.gqd(),A.cg(null,t.H))
p.Q=n
s=3
return A.a(n.aF(),$async$f7)
case 3:case 1:return A.e(q,r)}})
return A.f($async$f7,r)},
e3(){var s=0,r=A.h(t.H),q=this,p,o
var $async$e3=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.Q
o=o==null?null:o.aG()
s=2
return A.a(o instanceof A.r?o:A.be(o,t.H),$async$e3)
case 2:q.Q=null
for(o=q.ch,p=new A.bS(o,o.r,o.e);p.m();)p.d.A()
o.aK(0)
q.CW.aK(0)
return A.e(null,r)}})
return A.f($async$e3,r)},
qb(){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.L)(s),++q){p=s[q]
this.e6(p,new A.c2(p,B.O,null))}},
qe(a){var s,r
if(a.a==="delete"){this.fW(a.b)
return}s=a.b
r=s.b
this.e6(r,new A.c2(r,B.O,s))},
fW(a){return this.r6(a)},
r6(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j
var $async$fW=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:k=null
p=4
m=n.z
m===$&&A.x()
s=7
return A.a(m.bz(a.a),$async$fW)
case 7:k=c
p=2
s=6
break
case 4:p=3
j=o.pop()
m=A.E(j)
if(m instanceof A.br){m=a.b
n.e6(m,new A.c2(m,B.aj,null))
s=1
break}else if(m instanceof A.aE){s=1
break}else throw j
s=6
break
case 3:s=2
break
case 6:if(k==null){m=a.b
n.e6(m,new A.c2(m,B.aj,null))
s=1
break}m=a.b
n.e6(m,new A.c2(m,B.O,k))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fW,r)},
e6(a,b){var s,r
this.CW.j(0,a,b)
s=this.ch
r=s.h(0,a)
if(r!=null)r.A()
s.j(0,a,A.cU(B.b5,new A.pr(this,a)))},
vn(a,b){return this.hN(null,a,null,b,null)},
hN(a,b,c,d,e){return this.vq(a,b,c,d,e)},
vp(a,b){return this.hN(null,a,null,null,b)},
vq(a,b,c,d,e){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$hN=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.cs(0,new A.ps(),t.N,t.co)
n=p.z
n===$&&A.x()
q=n.hM(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hN,r)}}
A.pr.prototype={
$0(){var s,r=this.a,q=this.b
r.ch.O(0,q)
s=r.CW.O(0,q)
if(s!=null&&(r.ay.c&4)===0)r.ay.t(0,s)},
$S:0}
A.ps.prototype={
$2(a,b){return new A.V(a,new A.cF("imgs+",b.a,b.b,b.c),t.ia)},
$S:62}
A.pg.prototype={
eC(a,b,c,d,e,f){return this.uk(a,b,c,d,e,f)},
uk(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$eC=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.EY(a,e,c)
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m=A.H(a,"\\","\\\\")
m=A.H(m,"'","\\'")
n=A.H(n,"\\","\\\\")
l="(store="+("'"+m+"'")+" && updated>="+("'"+A.H(n,"'","\\'")+"'")+")"
if(c==null)o=l
else{n=A.H(c,"\\","\\\\")
o=l+" && id>"+("'"+A.H(n,"'","\\'")+"'")}}n=t.N
n=A.G(n,n)
n.j(0,"filter",o)
n.j(0,"sort",h?"updated,id":"id")
n.j(0,"perPage",""+f)
n.j(0,"skipTotal","1")
if(b!=null)n.j(0,"fields",B.c.K(b,","))
k=p.b.bg("/api/collections/data/records").lV(n)
s=3
return A.a(p.kZ("GET",k),$async$eC)
case 3:j=a0
p.dm(j,A.n([200],t.t),k)
i=p.cL(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.c6("List response has no items array."))
h=J.aB(i,new A.ph(p),t.h)
h=A.Q(h,h.$ti.i("S.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eC,r)},
bz(a){return this.mB(a)},
mB(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$bz=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.bg("/api/collections/data/records/"+A.lj(2,a,B.k,!1))
s=3
return A.a(p.kZ("GET",o),$async$bz)
case 3:n=c
if(n.a===404)throw A.b(A.Bg("not found"))
p.dm(n,A.n([200],t.t),o)
q=p.dz(p.cL(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bz,r)},
h9(a,b,c){return this.rJ(a,b,c)},
rJ(a,b,c){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$h9=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bg("/api/collections/data/records")
s=3
return A.a(p.be("POST",o,B.e.a8(A.l(["id",b,"store",c,"data",B.e.an(a,null)],t.N,t.z),null)),$async$h9)
case 3:n=e
if(n.a===400&&p.pP(n))throw A.b(new A.fv(p.e7(n)))
p.dm(n,A.n([200,201],t.t),o)
q=p.dz(p.cL(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h9,r)},
pP(a){var s,r,q,p,o,n
try{s=this.cL(a)
r=J.ae(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.y(p,"validation_not_unique")||J.y(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
eW(a,b){return this.vm(a,b)},
vm(a,b){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$eW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.b.bg("/api/collections/data/records/"+A.lj(2,b,B.k,!1))
s=3
return A.a(p.be("PATCH",o,B.e.a8(A.l(["data",B.e.an(a,null)],t.N,t.z),null)),$async$eW)
case 3:n=d
p.dm(n,A.n([200],t.t),o)
q=p.dz(p.cL(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eW,r)},
hM(a,b,c,d,e){return this.vo(a,b,c,d,e)},
vo(a,b,c,d,e){var s=0,r=A.h(t.h),q,p=this,o,n,m,l
var $async$hM=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.b.bg("/api/collections/data/records/"+A.lj(2,b,B.k,!1))
m=t.N
l=A.G(m,m)
if(d!=null)l.j(0,"imgs-",B.e.a8(d,null))
if(e==null)m=null
else{m=A.o(e).i("aO<2>")
m=A.Q(new A.aO(e,m),m.i("m.E"))}s=3
return A.a(p.cQ(new A.fC("PATCH",n,B.bF,l,m==null?B.bw:m)),$async$hM)
case 3:o=g
p.dm(o,A.n([200],t.t),n)
q=p.dz(p.cL(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hM,r)},
eJ(a){return this.uN(a)},
uN(a3){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$eJ=A.c(function(a4,a5){if(a4===1)return A.d(a5,r)
for(;;)switch(s){case 0:a1=p.b.bg("/api/batch")
a2=A.n([],t.ic)
for(o=J.at(a3),n=o.gv(a3),m=t.N,l=t.z,k=t.K;n.m();){j=n.gn()
a2.push(A.l(["method","PUT","url","/api/collections/data/records","body",A.l(["id",j.c,"store",j.b,"data",B.e.an(j.d,null)],m,l)],m,k))}s=3
return A.a(p.be("POST",a1,B.e.a8(A.l(["requests",a2],m,t.ew),null)),$async$eJ)
case 3:i=a5
a2=i.a
if(a2===403)throw A.b(A.AI(p.e7(i)))
if(a2===400)throw A.b(new A.e7(p.e7(i)))
p.dm(i,A.n([200],t.t),a1)
h=B.e.an(i.c,null)
a2=t.j
if(a2.b(h))g=h
else{n=t.f
if(n.b(h)){f=h.h(0,"data")
e=n.b(f)?f.h(0,"results"):h.h(0,"results")
if(!a2.b(e))throw A.b(A.c6("Batch response has no results array."))}else throw A.b(A.c6("Batch response is not a list or envelope."))
g=e}a2=A.n([],t.g2)
n=J.I(g)
m=t.f
d=0
for(;;){if(!(d<n.gk(g)&&d<o.gk(a3)))break
if(m.b(n.h(g,d))){l=m.a(n.h(g,d))
k=o.h(a3,d)
c=l.h(0,"status")
j=J.d9(c)
b=j.V(c,200)||j.V(c,201)
a=l.h(0,"body")
j=b&&m.b(a)?p.dz(a):null
l=b?null:p.nW(l)
a0=b&&m.b(a)?B.e.a8(a.h(0,"data"),null):null
a2.push(new A.h8(k.a,b,j,l,a0))}++d}q=a2
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eJ,r)},
hE(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$hE=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.be("POST",p.b.bg("/api/batch"),B.e.a8(A.l(["requests",[]],t.N,t.kS),null)),$async$hE)
case 3:o=b
n=o.a
if(n===403){q=!1
s=1
break}if(n===401)throw A.b(A.Ai(p.e7(o)))
if(n===408||n===429||n>=500)throw A.b(A.vN("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hE,r)},
be(a,b,c){return this.qP(a,b,c)},
kZ(a,b){return this.be(a,b,null)},
qP(a,b,c){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$be=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:p=4
i=n.c
s=7
return A.a(i.cw(),$async$be)
case 7:m=e
s=8
return A.a(n.fV(a,b,c,m.a),$async$be)
case 8:l=e
s=l.a===401?9:10
break
case 9:s=11
return A.a(i.eO(),$async$be)
case 11:k=e
s=12
return A.a(n.fV(a,b,c,k.a),$async$be)
case 12:l=e
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
if(i instanceof A.ci){j=i
throw A.b(A.vN(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$be,r)},
cQ(a){return this.qR(a)},
qR(a3){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$cQ=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:p=4
f=n.c
s=7
return A.a(f.cw(),$async$cQ)
case 7:m=a5
e=a3.a
d=a3.b
c=a3.c
b=t.N
l=A.cj(c,b,b)
J.bA(l,"Authorization","Bearer "+m.a)
a=a3.d
a0=a3.e
k=new A.fC(e,d,l,a,a0)
l=n.a
s=8
return A.a(l.cD(k),$async$cQ)
case 8:j=a5
s=j.a===401?9:10
break
case 9:s=11
return A.a(f.eO(),$async$cQ)
case 11:i=a5
h=A.cj(c,b,b)
J.bA(h,"Authorization","Bearer "+i.a)
k=new A.fC(e,d,h,a,a0)
s=12
return A.a(l.cD(k),$async$cQ)
case 12:j=a5
case 10:l=j
q=l
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
l=A.E(a2)
if(l instanceof A.ci){g=l
throw A.b(A.vN(g.a))}else throw a2
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cQ,r)},
fV(a,b,c,d){return this.qO(a,b,c,d)},
qO(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$fV=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.G(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.aP(new A.fD(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fV,r)},
dm(a,b,c){if(B.c.D(b,a.a))return
throw A.b(this.pT(a,c))},
pT(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.e7(a)
if(401===s)return new A.b1(q)
if(403===s)return new A.bk(q)
if(404===s)return new A.br(q)
if(408===s||429===s)return new A.er(r,q)
if(400===s)return new A.dC(q)
if(s>=500)return new A.jS(q)
return new A.h6("Unexpected status "+s+" for "+b.l(0)+": "+q)},
e7(a){var s,r,q,p,o
try{s=this.cL(a)
r=J.ae(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.ae(s,"data")
if(t.f.b(q)){p=q
p=p.gW(p)}else p=!1
if(p){p=B.e.a8(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.q(p,0,500)},
cL(a){var s,r,q,p=null
try{p=B.e.an(a.c,null)}catch(r){q=A.E(r)
if(t.lW.b(q)){s=q
throw A.b(A.c6("Response is not valid JSON: "+s.gjl()))}else throw r}if(t.f.b(p))return A.b4(p,t.N,t.X)
throw A.b(A.c6("Expected a JSON object, got "+J.bC(p).l(0)+"."))},
dz(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.c6("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"store")
q=a.h(0,"updated")
if(typeof s!="string"||typeof q!="string")throw A.b(A.c6("Record missing id/updated."))
p=typeof r=="string"?r:""
o=a.h(0,"data")
n=t.N
m=t.X
l=j.b(o)?A.b4(o,n,m):A.G(n,m)
k=a.h(0,"imgs")
if(t.j.b(k)){j=J.wF(k,n)
j=A.Q(j,j.$ti.i("m.E"))}else j=B.m
return new A.co(s,p,q,l,j)},
nW(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.p(r)+")"}}
A.ph.prototype={
$1(a){return this.a.dz(a)},
$S:63}
A.h4.prototype={}
A.f1.prototype={}
A.pi.prototype={
aF(){var s=0,r=A.h(t.H),q,p=this
var $async$aF=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.f){s=1
break}p.f=!0
p.eg()
case 1:return A.e(q,r)}})
return A.f($async$aF,r)},
aG(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.f=!1
n=q.r
n=n==null?null:n.A()
s=2
return A.a(n instanceof A.r?n:A.be(n,t.H),$async$aG)
case 2:q.r=null
p=q.w
if(p!=null?(p.a.a&30)===0:o)p.am()
return A.e(null,r)}})
return A.f($async$aG,r)},
eg(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$eg=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n=o.c,m=t.H
case 2:if(!o.f){s=3
break}q=5
s=8
return A.a(o.cJ(),$async$eg)
case 8:q=1
s=7
break
case 5:q=4
k=p.pop()
s=7
break
case 4:s=1
break
case 7:if(!o.f){s=3
break}s=9
return A.a(A.AL(n,m),$async$eg)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eg,r)},
cJ(){return this.nI()},
nI(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cJ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
n=p.a
s=3
return A.a(n.c.cw(),$async$cJ)
case 3:m=b
l=t.N
s=4
return A.a(n.a.eF(new A.fD("GET",n.b.bg("/api/realtime"),A.l(["Authorization","Bearer "+m.a],l,l),null)),$async$cJ)
case 4:k=b
n=k.a
if(n!==200)throw A.b(A.iY("realtime connect status "+n,null))
s=!p.f?5:6
break
case 5:s=7
return A.a(k.c.aL(new A.pn()).A(),$async$cJ)
case 7:s=1
break
case 6:++p.y
p.w=new A.aI(new A.r($.v,t.D),t.Q)
n=$.ly()
o.a=!1
p.r=k.c.bs(new A.po(o,p,new A.tV(new A.rO(n)),m),new A.pp(p),new A.pq(p))
s=8
return A.a(p.w.a,$async$cJ)
case 8:p.r=null
case 1:return A.e(q,r)}})
return A.f($async$cJ,r)},
ft(a,b){return this.oM(a,b)},
oM(a0,a1){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$ft=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a=a0.a
s=a!=null?3:4
break
case 3:l=p.a
k=t.N
s=5
return A.a(l.a.aP(new A.fD("POST",l.b.bg("/api/realtime"),A.l(["Authorization","Bearer "+a1.a,"Content-Type","application/json"],k,k),B.e.a8(A.l(["clientId",a,"subscriptions",p.b],k,t.K),null))),$async$ft)
case 5:l=a4.a
if(l!==204&&l!==200)throw A.b(A.iY("realtime subscribe status "+l,null))
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
l=l.b(j)?A.b4(j,t.N,t.X):B.y
if(t.j.b(f)){c=J.wF(f,t.N)
c=A.Q(c,c.$ti.i("m.E"))}else c=B.m
m=new A.co(k,e,d,l,c)
p.e.$1(new A.h4(o,m))}catch(a2){}case 1:return A.e(q,r)}})
return A.f($async$ft,r)}}
A.pn.prototype={
$1(a){},
$S:34}
A.po.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.c.tA(a)
for(s=j.length,r=k.b,q=k.d,p=t.H,o=k.a,n=t.P,m=0;m<j.length;j.length===s||(0,A.L)(j),++m){l=j[m]
r.x=r.x.bh(new A.pj(r,l,q),p).iV(new A.pk()).bh(new A.pl(o,r,l),n).iV(new A.pm())}},
$S:34}
A.pj.prototype={
$1(a){return this.a.ft(this.b,this.c)},
$S:24}
A.pk.prototype={
$1(a){},
$S:27}
A.pl.prototype={
$1(a){var s=this.a
if(!s.a&&this.c.a!=null){s.a=!0
this.b.d.$0()}},
$S:65}
A.pm.prototype={
$1(a){},
$S:27}
A.pp.prototype={
$0(){var s=this.a.w
if((s.a.a&30)===0)s.am()},
$S:0}
A.pq.prototype={
$1(a){var s=this.a.w
if((s.a.a&30)===0)s.am()},
$S:27}
A.tV.prototype={
tA(a){var s,r,q,p,o,n,m,l=this.a
l.t(0,a)
s=l.ju()
r=A.n([],t.bi)
for(q=s.length,p=0;;){o=this.pM(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.cb(p,o,q)))
p=o+1
m=this.nP(B.a.vh(new A.ca(!0).c7(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.t(0,B.d.aQ(s,p))
return r},
pM(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
nP(a){var s,r,q,p,o,n,m=null
if(B.a.L(a,"PB_CONNECT:"))return new A.f1(B.a.cz(B.a.a7(a,11)),m)
if(B.a.L(a,"event:")){this.b=B.a.cz(B.a.a7(a,6))
return m}if(B.a.L(a,"data:")){s=B.a.cz(B.a.a7(a,5))
if(J.ar(s)===0)return m
try{r=B.e.an(s,m)
if(t.f.b(r)){q=A.b4(r,t.N,t.X)
p=this.b
this.b=null
o=J.ae(q,"clientId")
if(J.y(p,"PB_CONNECT")&&typeof o=="string")return new A.f1(o,m)
return new A.f1(m,q)}}catch(n){}return m}return m}}
A.fD.prototype={}
A.cF.prototype={
mS(){return this.d.$0()},
gk(a){return this.c}}
A.fC.prototype={}
A.fE.prototype={}
A.ci.prototype={
l(a){return"HttpTransportException: "+this.a},
$iF:1}
A.k3.prototype={}
A.pd.prototype={
aP(a){return this.mG(a)},
mG(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$aP=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.eF(a),$async$aP)
case 7:m=c
j=m.c
s=8
return A.a(B.ah.jR(j).d_(0).hL(B.R),$async$aP)
case 8:l=c
j=m.a
i=m.b
q=new A.fE(j,i,l)
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.E(g)
if(j instanceof A.ci)throw g
else{k=j
j=A.iY("HTTP "+a.a+" "+a.b.l(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aP,r)},
cD(a){return this.mH(a)},
mH(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$cD=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.Bc(a6.a,a6.b)
h.r.G(0,a6.c)
h.x.G(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.mS(),$async$cD)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.zm(a0)
a3=new A.eg("application".toLowerCase(),"octet-stream".toLowerCase(),new A.eF(A.G(d,d),e))
b.push(new A.jl(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.L)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.aP(m).hL(B.R),$async$cD)
case 11:k=a8
g=k.w
s=12
return A.a(B.ah.jR(g).d_(0).hL(B.R),$async$cD)
case 12:j=a8
g=k.b
f=k.e
q=new A.fE(g,f,j)
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
g=A.E(a5)
if(g instanceof A.ci)throw a5
else{i=g
g=A.iY("HTTP multipart "+a6.a+" "+a6.b.l(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cD,r)},
eF(a){return this.uG(a)},
uG(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$eF=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.Bt(a,a0)
a1.r.G(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gj7().j5(j)
i.nz()
i.y=A.F0(j)
h=i.gc6()
if(h==null){j=t.N
i.sc6(A.vy("text","plain",A.l(["charset",i.gj7().gaA()],j,j)))}else{j=i.gc6()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.cm(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.I("charset")){j=t.N
f=A.l(["charset",i.gj7().gaA()],j,j)
e=h.a
d=h.b
c=A.b4(h.c,j,j)
c.G(0,f)
i.sc6(A.vy(e,d,c))}}}p=4
s=7
return A.a(n.a.aP(a1).hL(B.R),$async$eF)
case 7:m=a5
j=t.N
l=A.G(j,j)
m.e.a9(0,new A.pe(l))
j=m.b
i=m.w
q=new A.k3(j,l,i)
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
j=A.E(a2)
if(j instanceof A.ci)throw a2
else{k=j
a=A.iY("HTTP "+a+" "+a0.l(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eF,r)}}
A.pe.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:26}
A.bE.prototype={}
A.mk.prototype={
$2(a,b){var s,r,q,p
if(typeof a=="string"&&a.length!==0)try{s=B.e.an(a,null)
if(t.f.b(s)){q=A.b4(s,t.N,t.X)
return q}}catch(p){r=A.E(p)
q=A.q3("Corrupt lp_conflicts row: "+b+": "+A.p(r))
throw A.b(q)}return B.y},
$S:66}
A.ml.prototype={
$2(a,b){var s,r,q,p,o,n="Corrupt lp_conflicts row: "
if(typeof a=="string"&&a.length!==0)try{s=B.e.an(a,null)
if(t.j.b(s))try{p=J.e5(s,t.N)
p=p.ve(p)
return p}catch(o){r=A.E(o)
p=A.q3(n+b+": "+A.p(r))
throw A.b(p)}}catch(o){q=A.E(o)
p=A.q3(n+b+": "+A.p(q))
throw A.b(p)}return B.bT},
$S:67}
A.mm.prototype={
eB(a){return this.uj(a)},
uj(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m
var $async$eB=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
m=J
s=3
return A.a(p.a.b.uP("lp_conflicts","detected_at ASC",n,o),$async$eB)
case 3:o=m.aB(c,A.Ef(),t.n8)
o=A.Q(o,o.$ti.i("S.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eB,r)},
dd(a,b){return this.mA(a,b)},
mA(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$dd=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.aM("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$dd)
case 3:o=d
n=J.I(o)
if(n.gB(o)){q=null
s=1
break}q=A.vi(n.gC(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dd,r)},
vs(a){var s={},r=A.xR()
s.a=null
s=A.ey(new A.mp(s),new A.mq(s,this,a,new A.mr(this,r,a)),t.ba)
if(r.b!==r)A.w(new A.cI("Local '"+r.a+"' has already been initialized."))
r.b=s
return r.bp().gcG()},
dV(a,b,c){return this.v6(a,b,c)},
v6(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dV=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.af(c)
s=2
return A.a(p.a5(new A.mn(q,c,a,o.a,o,b),t.P),$async$dV)
case 2:return A.e(null,r)}})
return A.f($async$dV,r)},
el(a,b){return this.rg(a,b)},
rg(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$el=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dd(a,b),$async$el)
case 2:p=d
if(p==null)throw A.b(A.u("No conflict found for "+a+"/"+b))
s=3
return A.a(q.dV(b,p.d,a),$async$el)
case 3:return A.e(null,r)}})
return A.f($async$el,r)},
em(a,b){return this.rh(a,b)},
rh(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$em=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dd(a,b),$async$em)
case 2:p=d
if(p==null)throw A.b(A.u("No conflict found for "+a+"/"+b))
s=3
return A.a(q.dV(b,p.e,a),$async$em)
case 3:return A.e(null,r)}})
return A.f($async$em,r)}}
A.mr.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.bp().ghr()){s=1
break}p=4
s=7
return A.a(n.a.eB(n.c),$async$$0)
case 7:m=b
if(!i.bp().ghr())J.dd(i.bp(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.E(h)
k=A.ad(h)
if(!i.bp().ghr())i.bp().bN(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:4}
A.mq.prototype={
$0(){var s=this,r=s.b.a.f.a,q=s.d
s.a.a=new A.aR(r,A.o(r).i("aR<1>")).aL(new A.mo(s.c,q))
q.$0()},
$S:0}
A.mo.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:23}
A.mp.prototype={
$0(){var s=this.a.a
if(s!=null)s.A()},
$S:0}
A.mn.prototype={
$1(a){return this.m7(a)},
m7(a5){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$$1=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:a=a5.b
a0=p.b
a1=p.c
s=3
return A.a(a.aM("lp_conflicts",1,"store = ? AND record_id = ?",[a0,a1]),$async$$1)
case 3:a2=a7
a3=J.I(a2)
if(a3.gB(a2))throw A.b(A.u("No conflict found for "+a0+"/"+a1))
a3=A.vi(a3.gC(a2)).e
o=new A.O("")
A.a9(o,a3)
n=o.a
m=p.d
o=new A.O("")
A.a9(o,A.b0(m,a3))
l=o.a
k=A.au(B.l.u(B.f.u(l.charCodeAt(0)==0?l:l)).a)
l=p.e.a.a
a4=J
s=6
return A.a(a.aM(l,1,"id = ?",[a1]),$async$$1)
case 6:s=a4.cf(a7)?4:5
break
case 4:s=7
return A.a(a.P("lp_conflicts","store = ? AND record_id = ?",[a0,a1]),$async$$1)
case 7:s=8
return A.a(a.P("lp_sync_row","store = ? AND record_id = ?",[a0,a1]),$async$$1)
case 8:s=9
return A.a(a.P("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$$1)
case 9:a3=t.N
a5.X(new A.a3(a0,A.al([a1],a3)))
a5.X(new A.a3("lp_conflicts",A.al([a1],a3)))
s=1
break
case 5:s=10
return A.a(a.aM("lp_sync_row",1,"store = ? AND record_id = ?",[a0,a1]),$async$$1)
case 10:j=a7
i=J.I(j)
h=i.gW(j)?A.R(J.ae(i.gC(j),"remote_updated")):null
s=11
return A.a(a.P("lp_conflicts","store = ? AND record_id = ?",[a0,a1]),$async$$1)
case 11:i=t.N
g=t.X
f=A.cj(p.f,i,g)
f.j(0,"id",a1)
e=J.y(f.h(0,"archived"),!0)
s=12
return A.a(a.F(l,A.e0(m,e,null,null,a1,f),"id = ?",[a1]),$async$$1)
case 12:a3=A.dZ(a3,f)
d=A.Q(a3,A.o(a3).c)
B.c.b7(d)
o=new A.O("")
A.a9(o,A.b0(m,f))
a3=o.a
c=a3.charCodeAt(0)==0?a3:a3
s=13
return A.a(a.F("lp_sync_row",A.l(["sync_state","dirty","base_json",n.charCodeAt(0)==0?n:n,"base_hash",k,"base_updated",h,"dirty_fields",B.e.a8(d,null)],i,g),"store = ? AND record_id = ?",[a0,a1]),$async$$1)
case 13:a4=J
s=17
return A.a(a.aM("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$$1)
case 17:s=a4.cf(a7)?14:16
break
case 14:b=Date.now()
a3=p.a.a.as
a3===$&&A.x()
a3=a3.jH()
n=e?"archive":"upsert"
s=18
return A.a(a.aj(0,"lp_outbox",A.l(["op_id",a3,"store",a0,"record_id",a1,"kind",n,"payload_json",c,"base_updated",h,"base_hash",k,"dirty_fields",B.e.a8(d,null),"created_at",b,"updated_at",b],i,g)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a.F("lp_outbox",A.l(["kind",e?"archive":"upsert","payload_json",c,"base_updated",h,"base_hash",k],i,g),"store = ? AND record_id = ?",[a0,a1]),$async$$1)
case 19:case 15:a5.X(new A.a3(a0,A.al([a1],i)))
a5.X(new A.a3("lp_conflicts",A.al([a1],i)))
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.k8.prototype={
aF(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$aF=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.ey(null,null,t.n6)
n.ay=A.ey(null,null,t.em)}n.z=!0
n.aJ(B.c0)
p=4
m=n.b
s=7
return A.a(m.hC(),$async$aF)
case 7:l=n.w
l===$&&A.x()
l.f=m.as
p=2
s=6
break
case 4:p=3
j=o.pop()
s=6
break
case 3:s=2
break
case 6:p=9
m=n.a.f.a
n.db=new A.aR(m,A.o(m).i("aR<1>")).aL(n.gtV())
m=n.b.ay
n.dx=new A.aR(m,A.o(m).i("aR<1>")).aL(n.gtT())
p=2
s=11
break
case 9:p=8
i=o.pop()
s=12
return A.a(n.aG(),$async$aF)
case 12:throw i
s=11
break
case 8:s=2
break
case 11:n.dy=A.BH(B.b6,new A.qo(n))
n.aJ(n.dl())
n.k2.push("cycle")
s=13
return A.a(n.cO(),$async$aF)
case 13:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aF,r)},
aG(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$aG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.z){s=1
break}p.z=!1
o=p.dy
if(o!=null)o.A()
o=p.fr
if(o!=null)o.A()
o=p.fx
if(o!=null)o.A()
s=3
return A.a(p.id,$async$aG)
case 3:s=4
return A.a(p.cy,$async$aG)
case 4:s=5
return A.a(p.k3,$async$aG)
case 5:o=p.db
o=o==null?null:o.A()
n=t.H
s=6
return A.a(o instanceof A.r?o:A.be(o,n),$async$aG)
case 6:o=p.dx
o=o==null?null:o.A()
s=7
return A.a(o instanceof A.r?o:A.be(o,n),$async$aG)
case 7:o=p.ax
if((o.c&4)===0){p.y=B.L
o.t(0,B.L)
p.ax.p()}else p.y=B.L
o=p.ay
if((o.c&4)===0)o.p()
p.y=B.L
case 1:return A.e(q,r)}})
return A.f($async$aG,r)},
dl(){if(this.at)return B.aI
if(this.Q)return B.aG
if(this.as)return B.W
return B.aH},
aJ(a){var s,r=this
if(!r.z){r.y=a
return}r.y=a
s=r.ax
if((s.c&4)===0)s.t(0,a)
r.nU()},
nU(){return this.k3=this.k3.bh(new A.qh(this),t.H)},
fc(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$fc=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(!n.z){s=1
break}m=0
l=0
k=0
p=4
i=n.e
i===$&&A.x()
s=7
return A.a(i.h7(),$async$fc)
case 7:j=b
m=j.c
l=j.a
k=j.b
p=2
s=6
break
case 4:p=3
g=o.pop()
s=6
break
case 3:s=2
break
case 6:i=n.ay
if((i.c&4)===0)i.t(0,new A.eC(n.y,m,l,k,n.ch,n.CW))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fc,r)},
tW(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.k2.push("push")
s.qM(B.S)},
tU(a){var s,r,q=this
if(!q.z)return
s=a.c
if(s!=null&&a.b===B.O){q.k2.push("fast:"+a.a)
q.cy=q.cy.bh(new A.qm(q,s),t.H)
return}r=a.a
q.k2.push("pull:"+r)
q.fU(B.S,A.n([r],t.s))},
ff(a){return this.o_(a)},
o_(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j
var $async$ff=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(!n.z||n.at||n.as||n.Q){n.fU(B.S,A.n([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.x()
s=7
return A.a(l.hc(a),$async$ff)
case 7:m=c
p=2
s=6
break
case 4:p=3
j=o.pop()
m=!1
s=6
break
case 3:s=2
break
case 6:if(!m)n.fU(B.S,A.n([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ff,r)},
u2(){if(!this.z)return
this.k2.push("cycle")
this.cO()},
fU(a,b){var s=this,r=s.fr
if(r!=null)r.A()
if(b==null)s.fy=!0
else s.go.G(0,b)
s.fr=A.cU(a,new A.ql(s))},
qM(a){return this.fU(a,null)},
kF(){this.as=!0
this.aJ(B.W)
A.ec(this.d,t.H)},
hv(){var s=0,r=A.h(t.H),q,p=this
var $async$hv=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cx=!0
p.aJ(p.dl())
p.k2.push("cycle")
s=3
return A.a(p.cO(),$async$hv)
case 3:case 1:return A.e(q,r)}})
return A.f($async$hv,r)},
i_(a){return this.mJ(a)},
mJ(a){var s=0,r=A.h(t.H),q=this,p
var $async$i_=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
if(a){p=q.fx
if(p!=null)p.A()
q.fx=A.cU(B.ar,new A.qn(q))}else q.aJ(B.aG)
return A.e(null,r)}})
return A.f($async$i_,r)},
bf(){var s=0,r=A.h(t.H),q=this
var $async$bf=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
q.aJ(B.aI)
return A.e(null,r)}})
return A.f($async$bf,r)},
b5(){var s=0,r=A.h(t.H),q,p=this
var $async$b5=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
p.aJ(p.dl())
p.k2.push("cycle")
s=3
return A.a(p.cO(),$async$b5)
case 3:case 1:return A.e(q,r)}})
return A.f($async$b5,r)},
kX(a){var s=t.Y,r=this.id.bh(new A.qi(this,a),s)
this.id=r.bY(new A.qj(),new A.qk(),s)
return r},
cO(){return this.kX(null)},
c8(a){return this.nS(a)},
nS(b4){var s=0,r=A.h(t.Y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$c8=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(!n.z){q=B.M
s=1
break}if(n.at||n.as||n.Q){n.aJ(n.dl())
q=B.M
s=1
break}a2=t.N
a3=t.S
m=A.G(a2,a3)
l=A.G(a2,a3)
k=!1
n.aJ(B.c1)
a2=b4==null
if(a2){a3=n.a.ch
a4=A.o(a3).i("ai<1>")
a5=A.Q(new A.ai(a3,a4),a4.i("m.E"))}else a5=b4
a3=a5.length,a6=0
case 3:if(!(a6<a5.length)){s=5
break}j=a5[a6]
p=7
a4=n.f
a4===$&&A.x()
s=10
return A.a(a4.d2(j),$async$c8)
case 10:i=b6
J.bA(m,j,i.b)
p=2
s=9
break
case 7:p=6
b0=o.pop()
a4=A.E(b0)
if(a4 instanceof A.b1){n.as=!0
n.aJ(B.W)
A.ec(n.d,t.H)
s=5
break}else if(a4 instanceof A.aE){h=a4
k=!0
n.ch=h.a}else throw b0
s=9
break
case 6:s=2
break
case 9:case 4:a5.length===a3||(0,A.L)(a5),++a6
s=3
break
case 5:if(n.as){n.aJ(B.W)
q=n.k1=new A.aW(m,B.U,0,0,!0)
s=1
break}s=a2?11:12
break
case 11:p=14
g=n.cx
n.cx=!1
a2=n.r
a2===$&&A.x()
s=17
return A.a(a2.di(g),$async$c8)
case 17:f=b6
for(a2=J.M(f);a2.m();){e=a2.gn()
a3=e.a
a4=J.ae(l,e.a)
if(a4==null)a4=0
J.bA(l,a3,a4+e.b)}p=2
s=16
break
case 14:p=13
b1=o.pop()
a2=A.E(b1)
if(a2 instanceof A.aE){d=a2
k=!0
n.ch=d.a}else throw b1
s=16
break
case 13:s=2
break
case 16:case 12:n.aJ(B.c2)
c=B.J
p=19
a2=n.w
a2===$&&A.x()
s=22
return A.a(a2.eK(),$async$c8)
case 22:c=b6
s=c.d&&n.ch==null?23:24
break
case 23:s=25
return A.a(n.a.b.bw("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$c8)
case 25:b=b6
if(J.fk(b)&&typeof J.ae(J.bB(b),"last_error")=="string")n.ch=A.t(J.ae(J.bB(b),"last_error"))
else n.ch="push failed"
case 24:p=2
s=21
break
case 19:p=18
b2=o.pop()
a2=A.E(b2)
if(a2 instanceof A.b1)n.kF()
else if(a2 instanceof A.aE){a=a2
k=!0
n.ch=a.a}else throw b2
s=21
break
case 18:s=2
break
case 21:p=27
a2=n.x
a2===$&&A.x()
s=30
return A.a(a2.bD(),$async$c8)
case 30:a0=b6
k=k||a0.d
if(a0.d&&n.ch==null)n.ch="file sync failed"
p=2
s=29
break
case 27:p=26
b3=o.pop()
a1=A.E(b3)
k=!0
n.ch=A.p(a1)
s=29
break
case 26:s=2
break
case 29:a8=k||c.d
n.CW=new A.b2(Date.now(),0,!1)
if(!a8)n.ch=null
a9=n.dl()
n.aJ(a8&&a9===B.aH?B.c3:a9)
q=n.k1=new A.aW(m,l,c.a,c.b,a8)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c8,r)}}
A.qo.prototype={
$1(a){return this.a.u2()},
$S:69}
A.qh.prototype={
$1(a){return this.a.fc()},
$S:24}
A.qm.prototype={
$1(a){return this.a.ff(this.b)},
$S:24}
A.ql.prototype={
$0(){var s=this.a,r=s.fy,q=s.go,p=A.Q(q,A.o(q).c)
s.fy=!1
if(q.a>0){q.b=q.c=q.d=q.e=q.f=null
q.a=0
q.iE()}if(r||p.length===0)s.cO()
else s.kX(p)},
$S:0}
A.qn.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.aJ(p.dl())
p.k2.push("cycle")
s=2
return A.a(p.cO(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.qi.prototype={
$1(a){return this.a.c8(this.b)},
$S:70}
A.qj.prototype={
$1(a){return B.M},
$S:71}
A.qk.prototype={
$1(a){return B.M},
$S:72}
A.fT.prototype={
l(a){return"MapFailure: "+this.a},
$iF:1}
A.dA.prototype={}
A.oQ.prototype={}
A.eh.prototype={}
A.fV.prototype={}
A.p_.prototype={
dI(a){return this.tk(a)},
tk(a2){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$dI=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:e=Date.now()
d=p.a.b
s=3
return A.a(d.uQ("lp_op_queue",a2*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[e]),$async$dI)
case 3:c=a4
b=t.ox
a=A.n([],b)
for(o=J.M(c);o.m();)a.push(A.Bi(o.gn()))
o=t.N
n=A.bo(o)
for(m=a.length,l=0;l<a.length;a.length===m||(0,A.L)(a),++l){k=a[l].z
if(k!=null)n.t(0,k)}j=A.bo(o)
s=n.a!==0?4:5
break
case 4:i=A.Q(n,n.$ti.c)
h=B.c.K(A.aG(i.length,"?",!1,o),", ")
a0=j
a1=J
s=6
return A.a(d.ak(u.M+h+")",i),$async$dI)
case 6:a0.G(0,a1.aB(a4,new A.p1(),o))
a0=j
a1=J
s=7
return A.a(d.ak(u.V+h+") AND state IN ('pending','failed')",i),$async$dI)
case 7:a0.G(0,a1.aB(a4,new A.p2(),o))
case 5:g=A.n([],b)
for(d=a.length,l=0;l<a.length;a.length===d||(0,A.L)(a),++l){f=a[l]
if(g.length>=a2)break
b=f.z
if(b!=null&&j.D(0,b))continue
g.push(f)}q=g
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dI,r)},
lJ(a){return this.a.a5(new A.p3(a),t.H)},
ut(a,b,c,d){return this.a.a5(new A.p4(c,d,b,a),t.H)}}
A.p1.prototype={
$1(a){return A.t(a.h(0,"op_id"))},
$S:25}
A.p2.prototype={
$1(a){return A.t(a.h(0,"op_id"))},
$S:25}
A.p3.prototype={
$1(a){return this.mj(a)},
mj(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.F("lp_op_queue",A.l(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.p4.prototype={
$1(a){return this.mk(a)},
mk(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.F("lp_op_queue",A.l(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.lO.prototype={}
A.fR.prototype={}
A.h9.prototype={}
A.p6.prototype={
jH(){var s,r=this.b,q=J.vp(32,t.N)
for(s=0;s<32;++s)q[s]=B.b.m_(r.ct(16),16)
return B.c.d_(q)},
dU(a,b,c){return this.uW(a,b,c)},
uW(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$dU=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aM("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$dU)
case 3:p=e
o=J.I(p)
q=o.gB(p)?null:A.vA(o.gC(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dU,r)},
bx(a,b,c){return this.uY(a,b,c)},
uY(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bx=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aM("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bx)
case 3:p=e
o=J.I(p)
q=o.gB(p)?null:A.qp(o.gC(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bx,r)},
b2(a,b,c,d,e,f,g,h,i,j,k,l){return this.rq(a,b,c,d,e,f,g,h,i,j,k,l)},
rq(b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$b2=A.c(function(c2,c3){if(c2===1)return A.d(c3,r)
for(;;)switch(s){case 0:a6=c1.a
a7=a6.a
a8=c0==null
a9=!a8
if(a9&&c0.w===B.N)throw A.b(A.wR("Record "+a7+"/"+b4+u.W))
o=a9&&c0.w===B.Y
a9=b7==null
n=a9?null:b7.c
m=!1
if(a9){$label0$0:{if(B.C===b0){l=b1==null?B.p:B.H
break $label0$0}if(B.G===b0){l=b1==null?B.p:B.I
break $label0$0}l=B.p
break $label0$0}n=l}else{l=b7.e
switch(b7.c.a){case 0:if(l==null){m=b0===B.C&&!a6.r
n=m?n:B.p}else{$label1$2:{if(B.C===b0){l=B.H
break $label1$2}if(B.G===b0){l=B.I
break $label1$2}l=B.p
break $label1$2}n=l}break
case 1:$label2$3:{if(B.G===b0){l=B.I
break $label2$3}l=B.H
break $label2$3}n=l
break
case 2:$label3$4:{if(B.C===b0){l=B.H
break $label3$4}if(B.G===b0){l=B.I
break $label3$4}l=B.p
break $label3$4}n=l
break}}s=m?3:4
break
case 3:s=5
return A.a(b3.P("lp_outbox","store = ? AND record_id = ?",[a7,b4]),$async$b2)
case 5:s=6
return A.a(b3.P("lp_sync_row","store = ? AND record_id = ?",[a7,b4]),$async$b2)
case 6:s=7
return A.a(p.cS(b3,a7,b4),$async$b2)
case 7:s=8
return A.a(b3.P(a7,"id = ?",[b4]),$async$b2)
case 8:q=B.b0
s=1
break
case 4:k=Date.now()
j=a9?null:b7.w
if(j==null)j=p.jH()
i=a9?null:b7.e
if(i==null)i=b1==null?null:b1.c
l=a9?null:b7.f
if(l==null){l=b1==null?null:b1.b
h=l}else h=l
if(h==null)h=""
g=a8?null:c0.r
if(g==null)g=b1==null?null:b1.a
l=t.N
f=A.bo(l)
e=a9?null:b7.r
if(e!=null)f.G(0,e)
f.G(0,b2)
d=A.Q(f,f.$ti.c)
B.c.b7(d)
c=a9?null:b7.x
if(c==null)c=k
f=n.b
e=B.e.a8(d,null)
b=a9?null:b7.z
a=t.X
a0=A.l(["store",a7,"record_id",b4,"kind",f,"payload_json",b8,"base_updated",i,"base_hash",h,"dirty_fields",e,"op_id",j,"created_at",c,"updated_at",k,"depends_on_op",b],l,a)
s=a9?9:11
break
case 9:s=12
return A.a(b3.aj(0,"lp_outbox",a0),$async$b2)
case 12:s=10
break
case 11:s=13
return A.a(b3.F("lp_outbox",a0,"store = ? AND record_id = ?",[a7,b4]),$async$b2)
case 13:case 10:a1=a8?null:c0.y
if(a1==null)a1=0
a9=a8?null:c0.c
f=a8?null:c0.d
e=B.e.a8(d,null)
b=a8?null:c0.z.b
if(b==null)b="visible"
if(o)a2=0
else{a2=a8?null:c0.as
if(a2==null)a2=0}if(o)a3=0
else{a3=a8?null:c0.at
if(a3==null)a3=0}if(o)a4=null
else a4=a8?null:c0.ax
a5=A.l(["store",a7,"record_id",b4,"remote_updated",a9,"last_seen_at",f,"base_updated",i,"base_hash",h,"base_json",g,"sync_state","dirty","dirty_fields",e,"local_rev",a1+1,"access_state",b,"op_id",j,"attempt_count",a2,"next_retry_at",a3,"last_error",a4,"schema_ver",a6.b],l,a)
s=a8?14:16
break
case 14:s=17
return A.a(b3.aj(0,"lp_sync_row",a5),$async$b2)
case 17:s=15
break
case 16:s=18
return A.a(b3.F("lp_sync_row",a5,"store = ? AND record_id = ?",[a7,b4]),$async$b2)
case 18:case 15:q=new A.fR()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$b2,r)},
cS(a,b,c){return this.r5(a,b,c)},
r5(a,b,c){var s=0,r=A.h(t.H),q,p,o,n
var $async$cS=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=J
s=2
return A.a(a.lP("lp_file_refs",A.n(["ref_id","hash"],t.s),"store = ? AND record_id = ?",[b,c]),$async$cS)
case 2:q=n.M(e)
case 3:if(!q.m()){s=4
break}p=q.gn()
s=5
return A.a(a.P("lp_file_refs","ref_id = ?",[p.h(0,"ref_id")]),$async$cS)
case 5:o=A.R(p.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(a.av(u.y,[o]),$async$cS)
case 8:case 7:s=3
break
case 4:s=9
return A.a(a.F("lp_op_queue",A.l(["state","done"],t.N,t.X),u.l,[b,c]),$async$cS)
case 9:return A.e(null,r)}})
return A.f($async$cS,r)},
dJ(a,b){return this.tl(a,b)},
tl(a1,a2){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dJ=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:d=p.a.b
c=new A.O("s.sync_state NOT IN ('error','quarantine','conflict') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").l(0)
b=A.Q([a2],t.X)
b.push(a1*4+16)
s=3
return A.a(d.ak("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+c+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",b),$async$dJ)
case 3:o=a4
c=J.I(o)
if(c.gB(o)){q=B.by
s=1
break}b=t.my
n=A.n([],b)
for(c=c.gv(o);c.m();)n.push(A.vA(c.gn()))
c=t.N
m=A.bo(c)
for(l=n.length,k=0;k<n.length;n.length===l||(0,A.L)(n),++k){j=n[k].z
if(j!=null)m.t(0,j)}i=A.bo(c)
s=m.a!==0?4:5
break
case 4:h=A.Q(m,m.$ti.c)
g=B.c.K(A.aG(h.length,"?",!1,c),", ")
a=i
a0=J
s=6
return A.a(d.ak(u.M+g+")",h),$async$dJ)
case 6:a.G(0,a0.aB(a4,new A.p8(),c))
a=i
a0=J
s=7
return A.a(d.ak(u.V+g+") AND state IN ('pending','failed')",h),$async$dJ)
case 7:a.G(0,a0.aB(a4,new A.p9(),c))
case 5:f=A.n([],b)
for(d=n.length,k=0;k<n.length;n.length===d||(0,A.L)(n),++k){e=n[k]
if(f.length>=a1)break
c=e.z
if(c!=null&&i.D(0,c))continue
f.push(e)}q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dJ,r)},
jN(a){if(a.length===0)return A.cg(null,t.H)
return this.a.a5(new A.pc(this,a),t.H)},
au(a,b){return this.qV(a,b)},
qV(a3,a4){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$au=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:e=a3.b
d=a4.a
c=d.a
b=d.b
a=p.a
a0=a.af(c).a
a1=Date.now()
a2=a4.e
s=a2!=null?3:4
break
case 3:s=5
return A.a(e.aM("lp_outbox",1,"store = ? AND record_id = ?",[c,b]),$async$au)
case 5:o=a6
n=J.I(o)
s=!(n.gW(o)&&!J.y(J.ae(n.gC(o),"payload_json"),d.d))?6:7
break
case 6:s=8
return A.a(e.F(a0.a,A.e0(a0,J.y(a2.h(0,"archived"),!0),a.z,a.Q,b,a2),"id = ?",[b]),$async$au)
case 8:a3.X(new A.a3(c,A.al([b],t.N)))
case 7:case 4:d=a0.a
s=9
return A.a(e.aM(d,1,"id = ?",[b]),$async$au)
case 9:m=a6
a2=J.I(m)
s=a2.gB(m)?10:11
break
case 10:s=12
return A.a(e.P("lp_outbox","store = ? AND record_id = ?",[c,b]),$async$au)
case 12:s=13
return A.a(p.cM(e,c,b,a4.c,a1),$async$au)
case 13:a3.X(new A.a3(c,A.al([b],t.N)))
s=1
break
case 11:n=a.z
a=a.Q
l=new A.O("")
A.a9(l,A.b0(a0,A.ff(a0,a2.gC(m),n,a)))
a2=l.a
k=A.au(B.l.u(B.f.u(a2.charCodeAt(0)==0?a2:a2)).a)
a2=a4.b
j=A.au(B.l.u(B.f.u(a2)).a)
i=a4.d
h=k===i
s=h&&j===i?14:16
break
case 14:s=17
return A.a(e.P("lp_outbox","store = ? AND record_id = ?",[c,b]),$async$au)
case 17:s=18
return A.a(p.cM(e,c,b,a4.c,a1),$async$au)
case 18:a3.X(new A.a3(c,A.al([b],t.N)))
s=15
break
case 16:s=h?19:21
break
case 19:g=B.e.an(a2,null)
a2=t.N
i=t.X
f=t.f.b(g)?A.b4(g,a2,i):A.G(a2,i)
s=22
return A.a(e.F(d,A.e0(a0,J.y(f.h(0,"archived"),!0),n,a,b,f),"id = ?",[b]),$async$au)
case 22:s=23
return A.a(e.P("lp_outbox","store = ? AND record_id = ?",[c,b]),$async$au)
case 23:s=24
return A.a(p.cM(e,c,b,a4.c,a1),$async$au)
case 24:a3.X(new A.a3(c,A.al([b],a2)))
s=20
break
case 21:j=A.au(B.l.u(B.f.u(a2)).a)
a=a4.c
n=t.N
i=t.X
s=25
return A.a(e.F("lp_sync_row",A.l(["base_json",a2,"base_hash",j,"base_updated",a,"remote_updated",a,"last_seen_at",a1,"access_state","visible"],n,i),"store = ? AND record_id = ?",[c,b]),$async$au)
case 25:s=26
return A.a(e.F("lp_outbox",A.l(["base_updated",a,"base_hash",j],n,i),"store = ? AND record_id = ?",[c,b]),$async$au)
case 26:s=27
return A.a(e.F(d,A.l(["hidden",0],n,i),"id = ?",[b]),$async$au)
case 27:a3.X(new A.a3(c,A.al([b],n)))
case 20:case 15:case 1:return A.e(q,r)}})
return A.f($async$au,r)},
cM(a,b,c,d,e){return this.pU(a,b,c,d,e)},
pU(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$cM=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.F("lp_sync_row",A.l(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$cM)
case 2:s=3
return A.a(a.F(q.a.af(b).a.a,A.l(["hidden",0],p,o),"id = ?",[c]),$async$cM)
case 3:return A.e(null,r)}})
return A.f($async$cM,r)},
uZ(a,b,c,d,e){return this.a.a5(new A.pb(c,e,d,B.X,a,b),t.H)},
lI(a,b,c,d,e,f){return this.a.a5(new A.pa(c,f,b,a,d,e),t.H)},
hw(a,b,c,d,e){return this.lI(a,b,c,d,B.Y,e)},
en(a,b,c,d,e,f,g){return this.rn(a,b,c,d,e,f,g)},
rn(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$en=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.F("lp_sync_row",A.l(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$en)
case 2:p=A.G(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.F("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$en)
case 3:return A.e(null,r)}})
return A.f($async$en,r)}}
A.p8.prototype={
$1(a){return A.t(a.h(0,"op_id"))},
$S:25}
A.p9.prototype={
$1(a){return A.t(a.h(0,"op_id"))},
$S:25}
A.pc.prototype={
$1(a){return this.mn(a)},
mn(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=q.a
n=o.a.e
m=n.Q
l=q.b
k=l.length
n.Q=m+k
p=0
case 2:if(!(p<l.length)){s=4
break}s=5
return A.a(o.au(a,l[p]),$async$$1)
case 5:case 3:l.length===k||(0,A.L)(l),++p
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.pb.prototype={
$1(a){return this.mm(a)},
mm(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.F("lp_sync_row",A.l(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.pa.prototype={
$1(a){return this.ml(a)},
ml(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=q.c
m=q.d
l=t.N
k=t.X
s=2
return A.a(p.aj(0,"lp_dead_letter",A.l(["at",Date.now(),"kind",q.a,"store",o,"record_id",n,"error",m,"payload_json",q.e],l,k)),$async$$1)
case 2:s=3
return A.a(p.F("lp_sync_row",A.l(["sync_state",q.f.b,"last_error",m],l,k),"store = ? AND record_id = ?",[o,n]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.jH.prototype={}
A.pF.prototype={
d2(a){return this.uM(a)},
uM(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$d2=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.hH(b4),$async$d2)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.zU().dK(n)
if(m==null)A.w(A.c6('Bad timestamp "'+n+'"'))
l=m.b
k=l[1]
k.toString
j=A.aq(k)
k=l[2]
k.toString
i=A.aq(k)
k=l[3]
k.toString
h=A.aq(k)
k=l[4]
k.toString
g=A.aq(k)
k=l[5]
k.toString
f=A.aq(k)
k=l[6]
k.toString
e=A.aq(k)
l=l[7]
l.toString
d=A.aq(l)
if(i<1||i>12||g>23||f>59||e>59)A.w(A.c6('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.vj(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.pw(k))A.w(A.c6('Bad timestamp "'+n+'"'))
n=A.vj(j,i,h,g,f,e,d)
c=n.b
b=B.b.ar(c,1000)
l=n.c
o=A.Eu(new A.b2(A.vk(n.a+B.b.N(c-b,1000)+-5000,b,l),b,l))}a=a8.b=0
n=p.a,l=t.P,k=n.e,a0=n.ch,a1=p.b,a2='No store "'+b4+'" registered in this LocalPocket.',a3=null
case 4:a4=a1.z
a4===$&&A.x()
s=6
return A.a(a4.eC(b4,null,a3,o,null,200),$async$d2)
case 6:a5=b6
a4=J.I(a5)
if(a4.gB(a5)){s=5
break}++k.as
a6=p.pW(a5)
a7=a0.h(0,b4)
if(a7==null)A.w(A.u(a2))
b0=n
b1=A
b2=a8
b3=b4
s=8
return A.a(A.wl(a7.a,a5),$async$d2)
case 8:s=7
return A.a(b0.a5(new b1.pJ(b2,p,b3,b6,a6),l),$async$d2)
case 7:o=a6.c
a3=a6.a;++a
if(a4.gk(a5)<200){s=5
break}if(a>=100){s=5
break}s=4
break
case 5:q=new A.jH(a8.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d2,r)},
l7(a,b){var s=B.a.S(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.S(a.a,b.b)<=0},
r0(a,b){var s=B.a.S(a.c,b.c)
if(s!==0)return s>0
return B.a.S(a.a,b.a)>0},
pW(a){var s,r,q,p=J.at(a),o=p.gC(a)
for(p=p.aV(a,1),s=p.$ti,p=new A.a5(p,p.gk(0),s.i("a5<S.E>")),s=s.i("S.E");p.m();){r=p.d
q=r==null?s.a(r):r
if(this.r0(q,o))o=q}return o},
hc(a){return this.tz(a)},
tz(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hc=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.a.a5(new A.pG(o,p,a),t.P),$async$hc)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hc,r)},
cV(a,b){return this.tB(a,b)},
tB(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$cV=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:k={}
k.a=null
p=4
m=n.b.z
m===$&&A.x()
i=k
s=7
return A.a(m.bz(b),$async$cV)
case 7:m=i.a=d
p=2
s=6
break
case 4:p=3
j=o.pop()
k=A.E(j)
s=k instanceof A.br?8:10
break
case 8:s=11
return A.a(n.dQ(a,b),$async$cV)
case 11:s=1
break
s=9
break
case 10:if(k instanceof A.b1)throw j
else if(k instanceof A.aE){s=1
break}else throw j
case 9:s=6
break
case 3:s=2
break
case 6:s=m==null?12:13
break
case 12:s=14
return A.a(n.dQ(a,b),$async$cV)
case 14:s=1
break
case 13:s=15
return A.a(n.a.a5(new A.pH(k,n,a),t.P),$async$cV)
case 15:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cV,r)},
li(a,b,c,d,e){return this.Y(a,b,A.zb(this.a.af(b).a,c),null,!1,d,e)},
lh(a,b,c){return this.li(a,b,c,null,!1)},
Y(a,b,c,d,e,f,g){return this.rs(a,b,c,d,e,f,g)},
rr(a,b,c){return this.Y(a,b,c,null,!1,null,!1)},
rs(a5,a6,a7,a8,a9,b0,b1){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$Y=A.c(function(b2,b3){if(b2===1)return A.d(b3,r)
for(;;)switch(s){case 0:a0=a5.b
a1=p.a
a2=a1.af(a6).a
a3=a7.a
a4=a7.e
s=a4!=null?3:4
break
case 3:s=5
return A.a(p.bJ(a0,a2,a6,a3,a4),$async$Y)
case 5:s=1
break
case 4:a4=a7.b
a4.toString
o=A.b0(a2,a4)
n=a7.c
n.toString
m=a7.d
m.toString
l=a3.b
s=l!==a6?6:7
break
case 6:s=8
return A.a(p.bJ(a0,a2,a6,a3,'Remote store "'+l+'" does not match requested store "'+a6+'".'),$async$Y)
case 8:s=1
break
case 7:l=a3.a
k=$.wz()
s=!k.b.test(l)?9:10
break
case 9:s=11
return A.a(p.bJ(a0,a2,a6,a3,'Invalid remote record id "'+l+'".'),$async$Y)
case 11:s=1
break
case 10:s=b1?12:14
break
case 12:j=b0
s=13
break
case 14:k=a1.as
k===$&&A.x()
s=15
return A.a(k.bx(a0,a6,l),$async$Y)
case 15:j=b3
case 13:s=a9?16:18
break
case 16:i=a8
s=17
break
case 18:s=19
return A.a(a0.aM(a2.a,1,"id = ?",[l]),$async$Y)
case 19:h=b3
k=J.I(h)
i=k.gB(h)?null:A.ff(a2,k.gC(h),a1.z,a1.Q)
case 17:k=a3.e
g=k.length
s=g!==0?20:21
break
case 20:s=22
return A.a(p.e.d1(a0,l,k,a6),$async$Y)
case 22:case 21:s=i==null?23:24
break
case 23:s=25
return A.a(a0.aj(0,a2.a,A.e0(a2,J.y(a4.h(0,"archived"),!0),a1.z,a1.Q,l,a4)),$async$Y)
case 25:s=26
return A.a(p.cR(a0,a6,l,A.bI(),j,a3.c,B.r,!0),$async$Y)
case 26:a5.X(new A.a3(a6,A.al([l],t.N)))
s=1
break
case 24:k=j==null
f=k?null:j.w
if(f==null)f=B.r
s=f===B.r?27:28
break
case 27:n=k?null:j.c
m=a3.c
s=n===m?29:30
break
case 29:s=31
return A.a(p.bM(a5,a6,l,m),$async$Y)
case 31:s=1
break
case 30:s=32
return A.a(a0.F(a2.a,A.e0(a2,J.y(a4.h(0,"archived"),!0),a1.z,a1.Q,l,a4),"id = ?",[l]),$async$Y)
case 32:s=33
return A.a(p.cR(a0,a6,l,A.bI(),j,m,B.r,!0),$async$Y)
case 33:a5.X(new A.a3(a6,A.al([l],t.N)))
s=1
break
case 28:s=f===B.X||f===B.aJ||f===B.N?34:35
break
case 34:a4=k?null:j.e
g=a3.c
s=a4===g?36:37
break
case 36:s=38
return A.a(p.bM(a5,a6,l,g),$async$Y)
case 38:s=1
break
case 37:s=f===B.N?39:40
break
case 39:s=41
return A.a(p.bM(a5,a6,l,g),$async$Y)
case 41:s=1
break
case 40:e=A.b0(a2,i)
d=new A.O("")
A.a9(d,e)
a4=d.a
s=(a4.charCodeAt(0)==0?a4:a4)===n?42:43
break
case 42:s=44
return A.a(a0.P("lp_outbox","store = ? AND record_id = ?",[a6,l]),$async$Y)
case 44:s=45
return A.a(p.cR(a0,a6,l,A.bI(),j,g,B.r,!0),$async$Y)
case 45:a5.X(new A.a3(a6,A.al([l],t.N)))
s=1
break
case 43:c=p.kM(k?null:j.r)
a4=A.lt(c,e,new A.fV(null,B.a7,!1),l,o,a6)
s=46
return A.a(t.x.b(a4)?a4:A.be(a4,t.r),$async$Y)
case 46:b=b3
s=b.b?47:48
break
case 47:s=49
return A.a(p.ee(a0,a6,a3,a2,j,e,b),$async$Y)
case 49:s=50
return A.a(p.bM(a5,a6,l,g),$async$Y)
case 50:a1=t.N
a5.X(new A.a3(a6,A.al([l],a1)))
a5.X(new A.a3("lp_conflicts",A.al([l],a1)))
s=1
break
case 48:a=b.a
s=51
return A.a(a0.F(a2.a,A.e0(a2,J.y(a.h(0,"archived"),!0),a1.z,a1.Q,l,a),"id = ?",[l]),$async$Y)
case 51:a1=a1.as
a1===$&&A.x()
d=new A.O("")
A.a9(d,a)
a4=d.a
s=52
return A.a(a1.en(a0,a6,l,m,n,g,a4.charCodeAt(0)==0?a4:a4),$async$Y)
case 52:s=53
return A.a(p.bM(a5,a6,l,g),$async$Y)
case 53:a5.X(new A.a3(a6,A.al([l],t.N)))
s=1
break
case 35:case 1:return A.e(q,r)}})
return A.f($async$Y,r)},
kM(a){var s
if(a==null||a.length===0)return B.y
s=B.e.an(a,null)
if(t.f.b(s))return A.b4(s,t.N,t.X)
return B.y},
ee(a,b,c,d,e,f,g){return this.qB(a,b,c,d,e,f,g)},
qB(a,b,c,d,e,a0,a1){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$ee=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:j=e==null
i=q.kM(j?null:e.r)
h=A.b0(d,A.e2(d,c))
g=A.dZ(i,a0)
f=A.Q(g,A.o(g).c)
B.c.b7(f)
g=A.dZ(i,h)
p=A.Q(g,A.o(g).c)
B.c.b7(p)
g=c.a
j=j?null:e.r
if(j==null){o=new A.O("")
A.a9(o,i)
j=o.a
j=j.charCodeAt(0)==0?j:j}o=new A.O("")
A.a9(o,a0)
n=o.a
o=new A.O("")
A.a9(o,h)
m=o.a
l=t.N
k=t.X
s=2
return A.a(a.cZ(0,"lp_conflicts",A.l(["store",b,"record_id",g,"base_json",j,"local_json",n.charCodeAt(0)==0?n:n,"remote_json",m.charCodeAt(0)==0?m:m,"dirty_local",B.e.a8(f,null),"dirty_remote",B.e.a8(p,null),"detected_at",A.bI()],l,k),B.a_),$async$ee)
case 2:s=3
return A.a(a.F("lp_sync_row",A.l(["sync_state","conflict"],l,k),"store = ? AND record_id = ?",[b,g]),$async$ee)
case 3:return A.e(null,r)}})
return A.f($async$ee,r)},
bJ(a,b,c,d,e){return this.qv(a,b,c,d,e)},
qv(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$bJ=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:j=null
try{j=B.e.a8(d.d,null)}catch(i){o=t.N
j=B.e.a8(A.l(["raw",d.d.l(0)],o,o),null)}o=d.a
n=t.N
m=t.X
s=2
return A.a(a.aj(0,"lp_dead_letter",A.l(["at",A.bI(),"kind","map_failure","store",c,"record_id",o,"error",e,"payload_json",j],n,m)),$async$bJ)
case 2:l=q.a.as
l===$&&A.x()
k=d.c
s=6
return A.a(l.bx(a,c,o),$async$bJ)
case 6:s=g==null?3:5
break
case 3:s=7
return A.a(a.aj(0,"lp_sync_row",A.l(["store",c,"record_id",o,"remote_updated",k,"sync_state","quarantine","schema_ver",b.b],n,m)),$async$bJ)
case 7:s=4
break
case 5:s=8
return A.a(a.F("lp_sync_row",A.l(["sync_state","quarantine","last_error",e,"remote_updated",k],n,m),"store = ? AND record_id = ?",[c,o]),$async$bJ)
case 8:case 4:return A.e(null,r)}})
return A.f($async$bJ,r)},
cR(a,b,c,d,e,f,g,h){return this.r4(a,b,c,d,e,f,g,!0)},
r4(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$cR=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:p=q.a.af(b)
o=A.G(t.N,t.X)
o.j(0,"store",b)
o.j(0,"record_id",c)
o.j(0,"remote_updated",f)
o.j(0,"last_seen_at",d)
o.j(0,"sync_state",g.b)
o.j(0,"access_state","visible")
o.j(0,"schema_ver",p.a.b)
p=g===B.r
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
return A.a(a.aj(0,"lp_sync_row",o),$async$cR)
case 5:s=3
break
case 4:s=6
return A.a(a.F("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$cR)
case 6:case 3:return A.e(null,r)}})
return A.f($async$cR,r)},
bM(a,b,c,d){return this.r_(a,b,c,d)},
r_(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$bM=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
s=2
return A.a(p.F("lp_sync_row",A.l(["last_seen_at",A.bI(),"access_state","visible","remote_updated",d],o,n),"store = ? AND record_id = ?",[b,c]),$async$bM)
case 2:s=3
return A.a(p.F(q.a.af(b).a.a,A.l(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$bM)
case 3:if(f>0)a.X(new A.a3(b,A.al([c],o)))
return A.e(null,r)}})
return A.f($async$bM,r)},
dQ(a,b){return this.uu(a,b)},
uu(a,b){var s=0,r=A.h(t.H),q=this
var $async$dQ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.a5(new A.pI(q,a,b),t.P),$async$dQ)
case 2:return A.e(null,r)}})
return A.f($async$dQ,r)}}
A.pJ.prototype={
$1(a){return this.ms(a)},
ms(b4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$$1=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a2=q.a
a3=a2.a
a4=b4.b
a5=q.b
a6=a5.a
a7=q.c
a8=a6.af(a7).a
a9=t.N
b0=A.G(a9,t.nw)
b1=A.G(a9,t.G)
b2=A.n([],t.s)
for(p=q.d,o=J.at(p),n=o.gv(p);n.m();)b2.push(n.gn().a.a)
n=a6.z,m=a6.Q,l=a6.ch,k='No store "'+a7+'" registered in this LocalPocket.',j=0
case 2:if(!(i=b2.length,j<i)){s=4
break}h=j+500
g=B.c.M(b2,j,B.b.iW(h,0,i))
f=B.c.K(A.aG(g.length,"?",!1,a9),", ")
i=[a7]
B.c.G(i,g)
b3=J
s=5
return A.a(a4.ak(u.m+f+")",i),$async$$1)
case 5:i=b3.M(b6)
case 6:if(!i.m()){s=7
break}e=i.gn()
b0.j(0,A.t(e.h(0,"record_id")),A.qp(e))
s=6
break
case 7:d=l.h(0,a7)
if(d==null)A.w(A.u(k))
b3=J
s=8
return A.a(a4.eM(d.a.a,"id IN ("+f+")",g),$async$$1)
case 8:i=b3.M(b6)
case 9:if(!i.m()){s=10
break}e=i.gn()
b1.j(0,A.t(e.h(0,"id")),A.ff(a8,e,n,m))
s=9
break
case 10:case 3:j=h
s=2
break
case 4:c=A.bo(a9)
a9=o.gv(p),a6=a6.e
case 11:if(!a9.m()){s=12
break}b2=a9.gn()
b=b2.a
if(a3!=null&&a5.l7(b,a3)){s=11
break}p=b.a
s=c.D(0,p)?13:15
break
case 13:s=16
return A.a(a5.rr(b4,a7,b2),$async$$1)
case 16:s=14
break
case 15:o=b0.h(0,p)
s=17
return A.a(a5.Y(b4,a7,b2,b1.h(0,p),!0,o,!0),$async$$1)
case 17:c.t(0,p)
case 14:++a2.b;++a6.at
s=11
break
case 12:a=a3==null||!a5.l7(q.e,a3)
a0=a?q.e.c:a3.a
a1=a?q.e.a:a3.b
s=18
return A.a(a5.d.dY(a4,a7,a1,a0),$async$$1)
case 18:a2.a=new A.h7(a0,a1)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.pG.prototype={
$1(a){return this.mp(a)},
mp(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.as
k===$&&A.x()
o=p.c
n=o.b
s=3
return A.a(k.bx(a.b,n,o.a),$async$$1)
case 3:m=c
s=m==null?4:5
break
case 4:s=6
return A.a(l.lh(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.r){s=1
break}k=m.c
if(k!=null&&B.a.S(o.c,k)<=0){s=1
break}s=7
return A.a(l.li(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.pH.prototype={
$1(a){return this.mq(a)},
mq(a){var s=0,r=A.h(t.P),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a.a
p.toString
s=2
return A.a(q.b.lh(a,q.c,p),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.pI.prototype={
$1(a){return this.mr(a)},
mr(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=q.b
l=q.c
s=2
return A.a(p.F("lp_sync_row",A.l(["access_state","hidden"],o,n),"store = ? AND record_id = ?",[m,l]),$async$$1)
case 2:s=3
return A.a(p.F(q.a.a.af(m).a.a,A.l(["hidden",1],o,n),"id = ?",[l]),$async$$1)
case 3:a.X(new A.a3(m,A.al([l],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.aV.prototype={}
A.pK.prototype={
eK(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h
var $async$eK=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:h=p.a.as
h===$&&A.x()
s=3
return A.a(h.dJ(25,A.bI()),$async$eK)
case 3:o=b
h=J.I(o)
if(h.gB(o)){q=B.J
s=1
break}if(p.f){q=p.aR(o)
s=1
break}h=h.gv(o),n=B.J
case 4:if(!h.m()){s=5
break}s=6
return A.a(p.dA(h.gn()),$async$eK)
case 6:m=b
l=m.a
k=m.b
j=m.c
i=n.d||m.d
n=new A.aV(n.a+l,n.b+k,n.c+j,i)
s=4
break
case 5:q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eK,r)},
dA(a){return this.qs(a)},
qs(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dA=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.as
l===$&&A.x()
m=m.b
s=3
return A.a(l.dU(m,a.a,a.b),$async$dA)
case 3:o=c
if(o==null){q=B.J
s=1
break}s=4
return A.a(l.bx(m,o.a,o.b),$async$dA)
case 4:n=c
if(n==null){q=B.J
s=1
break}if(o.e==null){q=p.cc(o,n)
s=1
break}q=p.aZ(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dA,r)},
cc(a,b){return this.qr(a,b)},
qr(a,b){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$cc=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:p=4
j=n.b.z
j===$&&A.x()
s=7
return A.a(j.h9(a.d,a.b,a.a),$async$cc)
case 7:m=d
s=8
return A.a(n.eh(a,m),$async$cc)
case 8:q=B.K
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
j=A.E(h)
s=j instanceof A.fv?9:11
break
case 9:q=n.cd(a,b)
s=1
break
s=10
break
case 11:s=j instanceof A.b1?12:14
break
case 12:n.e.$0()
q=B.A
s=1
break
s=13
break
case 14:s=j instanceof A.bk?15:17
break
case 15:s=18
return A.a(n.aH(a,"forbidden_push"),$async$cc)
case 18:q=B.j
s=1
break
s=16
break
case 17:s=j instanceof A.dC?19:21
break
case 19:l=j
s=22
return A.a(n.cK(a,"validation_push",l.a),$async$cc)
case 22:q=B.j
s=1
break
s=20
break
case 21:s=j instanceof A.br?23:25
break
case 23:s=26
return A.a(n.aH(a,"missing_target"),$async$cc)
case 26:q=B.j
s=1
break
s=24
break
case 25:if(j instanceof A.aE){k=j
q=n.bd(a,b,k)
s=1
break}else throw h
case 24:case 20:case 16:case 13:case 10:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cc,r)},
cd(a,b){return this.qC(a,b)},
qC(a,b){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$cd=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:f=n.a.af(a.a).a
p=4
i=n.b.z
i===$&&A.x()
s=7
return A.a(i.bz(a.b),$async$cd)
case 7:m=d
s=m==null?8:9
break
case 8:s=10
return A.a(n.aH(a,"duplicate_id_missing"),$async$cd)
case 10:q=B.j
s=1
break
case 9:h=new A.O("")
A.a9(h,A.b0(f,A.e2(f,m)))
i=h.a
l=A.au(B.l.u(B.f.u(i.charCodeAt(0)==0?i:i)).a)
k=A.au(B.l.u(B.f.u(a.d)).a)
s=J.y(l,k)?11:12
break
case 11:s=13
return A.a(n.eh(a,m),$async$cd)
case 13:q=B.K
s=1
break
case 12:i=n.b_(a,b,m)
q=i
s=1
break
p=2
s=6
break
case 4:p=3
e=o.pop()
i=A.E(e)
s=i instanceof A.b1?14:16
break
case 14:n.e.$0()
q=B.A
s=1
break
s=15
break
case 16:s=i instanceof A.br?17:19
break
case 17:s=20
return A.a(n.aH(a,"missing_target"),$async$cd)
case 20:q=B.j
s=1
break
s=18
break
case 19:s=i instanceof A.bk?21:23
break
case 21:s=24
return A.a(n.aH(a,"forbidden_push"),$async$cd)
case 24:q=B.j
s=1
break
s=22
break
case 23:if(i instanceof A.aE){j=i
q=n.bd(a,b,j)
s=1
break}else throw e
case 22:case 18:case 15:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cd,r)},
aZ(a,b){return this.qt(a,b)},
qt(a,b){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$aZ=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=null
p=4
i=n.b.z
i===$&&A.x()
s=7
return A.a(i.bz(a.b),$async$aZ)
case 7:g=d
p=2
s=6
break
case 4:p=3
f=o.pop()
i=A.E(f)
s=i instanceof A.b1?8:10
break
case 8:n.e.$0()
q=B.A
s=1
break
s=9
break
case 10:s=i instanceof A.br?11:13
break
case 11:s=14
return A.a(n.aH(a,"missing_target"),$async$aZ)
case 14:q=B.j
s=1
break
s=12
break
case 13:s=i instanceof A.bk?15:17
break
case 15:s=18
return A.a(n.aH(a,"forbidden_push"),$async$aZ)
case 18:q=B.j
s=1
break
s=16
break
case 17:if(i instanceof A.aE){m=i
q=n.bd(a,b,m)
s=1
break}else throw f
case 16:case 12:case 9:s=6
break
case 3:s=2
break
case 6:s=g==null?19:20
break
case 19:s=21
return A.a(n.aH(a,"missing_target"),$async$aZ)
case 21:q=B.j
s=1
break
case 20:s=g.c===a.e?22:23
break
case 22:p=25
i=n.b.z
i===$&&A.x()
s=28
return A.a(i.eW(a.d,a.b),$async$aZ)
case 28:l=d
s=29
return A.a(n.eh(a,l),$async$aZ)
case 29:q=B.K
s=1
break
p=2
s=27
break
case 25:p=24
e=o.pop()
i=A.E(e)
s=i instanceof A.b1?30:32
break
case 30:n.e.$0()
q=B.A
s=1
break
s=31
break
case 32:s=i instanceof A.br?33:35
break
case 33:s=36
return A.a(n.aH(a,"missing_target"),$async$aZ)
case 36:q=B.j
s=1
break
s=34
break
case 35:s=i instanceof A.bk?37:39
break
case 37:s=40
return A.a(n.aH(a,"forbidden_push"),$async$aZ)
case 40:q=B.j
s=1
break
s=38
break
case 39:s=i instanceof A.dC?41:43
break
case 41:k=i
s=44
return A.a(n.cK(a,"validation_push",k.a),$async$aZ)
case 44:q=B.j
s=1
break
s=42
break
case 43:if(i instanceof A.aE){j=i
q=n.bd(a,b,j)
s=1
break}else throw e
case 42:case 38:case 34:case 31:s=27
break
case 24:s=2
break
case 27:case 23:q=n.b_(a,b,g)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aZ,r)},
b_(a,b,c){return this.qu(a,b,c)},
qu(a0,a1,a2){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$b_=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:e=a0.a
d=n.a.af(e).a
c=A.e2(d,a2)
b=new A.O("")
A.a9(b,A.b0(d,c))
h=b.a
g=a0.d
s=A.au(B.l.u(B.f.u(h.charCodeAt(0)==0?h:h)).a)===A.au(B.l.u(B.f.u(g)).a)?3:4
break
case 3:s=5
return A.a(n.eh(a0,a2),$async$b_)
case 5:q=B.K
s=1
break
case 4:h=a0.b
e=A.lt(n.dw(a1.r),n.dw(g),new A.fV(null,B.a7,!1),h,A.b0(d,c),e)
s=6
return A.a(t.x.b(e)?e:A.be(e,t.r),$async$b_)
case 6:m=a4
s=m.b?7:8
break
case 7:s=9
return A.a(n.ed(a0,a1,a2,m),$async$b_)
case 9:q=B.bP
s=1
break
case 8:b=new A.O("")
A.a9(b,m.a)
e=b.a
l=e.charCodeAt(0)==0?e:e
p=11
e=n.b.z
e===$&&A.x()
s=14
return A.a(e.eW(l,h),$async$b_)
case 14:k=a4
s=15
return A.a(n.dC(a0,k,m.a,l),$async$b_)
case 15:q=B.K
s=1
break
p=2
s=13
break
case 11:p=10
a=o.pop()
e=A.E(a)
s=e instanceof A.b1?16:18
break
case 16:n.e.$0()
q=B.A
s=1
break
s=17
break
case 18:s=e instanceof A.br?19:21
break
case 19:s=22
return A.a(n.aH(a0,"missing_target"),$async$b_)
case 22:q=B.j
s=1
break
s=20
break
case 21:s=e instanceof A.bk?23:25
break
case 23:s=26
return A.a(n.aH(a0,"forbidden_push"),$async$b_)
case 26:q=B.j
s=1
break
s=24
break
case 25:s=e instanceof A.dC?27:29
break
case 27:j=e
s=30
return A.a(n.cK(a0,"validation_push",j.a),$async$b_)
case 30:q=B.j
s=1
break
s=28
break
case 29:if(e instanceof A.aE){i=e
q=n.bd(a0,a1,i)
s=1
break}else throw a
case 28:case 24:case 20:case 17:s=13
break
case 10:s=2
break
case 13:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b_,r)},
aR(a){return this.qq(a)},
qq(c1){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0
var $async$aR=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:b4=A.n([],t.k1)
b5=t.N
b6=A.G(b5,t.G)
b7=0
b8=0
b9=A.G(b5,b5)
b5=J.M(c1),h=n.a,g=h.e,f=n.b,e=h.ch,d=h.b,c=0
case 3:if(!b5.m()){s=4
break}b=b5.gn()
a=h.as
a===$&&A.x()
s=5
return A.a(a.dU(d,b.a,b.b),$async$aR)
case 5:m=c3
if(m==null){s=3
break}b9.j(0,m.w,m.d)
s=6
return A.a(a.bx(d,m.a,m.b),$async$aR)
case 6:l=c3
if(l==null){s=3
break}b=m.a
a0=e.h(0,b)
if(a0==null)A.w(A.u('No store "'+b+'" registered in this LocalPocket.'))
a1=a0.a
k=null
p=8;++g.z
b=m.b
a=f.z
a===$&&A.x()
s=11
return A.a(a.bz(b),$async$aR)
case 11:k=c3
p=2
s=10
break
case 8:p=7
c0=o.pop()
b=A.E(c0)
s=b instanceof A.br?12:14
break
case 12:s=m.e!=null?15:16
break
case 15:s=17
return A.a(n.aH(m,"missing_target"),$async$aR)
case 17:++b8
s=3
break
case 16:k=null
s=13
break
case 14:s=b instanceof A.b1?18:20
break
case 18:n.e.$0()
q=new A.aV(0,0,0,!0)
s=1
break
s=19
break
case 20:s=b instanceof A.bk?21:23
break
case 21:s=24
return A.a(n.aH(m,"forbidden_push"),$async$aR)
case 24:++b8
s=3
break
s=22
break
case 23:s=b instanceof A.aE?25:27
break
case 25:j=b
s=28
return A.a(n.bd(m,l,j),$async$aR)
case 28:i=c3
b7+=i.a
b8+=i.b
s=3
break
s=26
break
case 27:throw c0
case 26:case 22:case 19:case 13:s=10
break
case 7:s=2
break
case 10:s=k!=null?29:30
break
case 29:a3=new A.O("")
A.a9(a3,A.b0(a1,A.e2(a1,k)))
b=a3.a
b=B.f.u(b.charCodeAt(0)==0?b:b)
a4=new A.c4()
a=A.d2(a4)
a.t(0,b)
a.p()
a5=A.au(a4.a.a)
a=B.f.u(m.d)
a4=new A.c4()
b=A.d2(a4)
b.t(0,a)
b.p()
s=a5===A.au(a4.a.a)?31:32
break
case 31:s=33
return A.a(n.eh(m,k),$async$aR)
case 33:++b7
s=3
break
case 32:s=m.e==null?34:35
break
case 34:s=36
return A.a(n.dv(m,l,k,a1),$async$aR)
case 36:a6=c3
if(a6==null){++c
s=3
break}b=m.w
a=m.a
a7=m.b
a8=a6.a
a3=new A.O("")
A.a9(a3,a8)
a9=a3.a
b4.push(new A.cn(b,a,a7,a9.charCodeAt(0)==0?a9:a9,null))
b6.j(0,m.w,a8)
s=3
break
case 35:s=37
return A.a(n.dv(m,l,k,a1),$async$aR)
case 37:a6=c3
if(a6==null){++c
s=3
break}b=m.w
a=m.a
a7=m.b
a8=a6.a
a3=new A.O("")
A.a9(a3,a8)
a9=a3.a
b4.push(new A.cn(b,a,a7,a9.charCodeAt(0)==0?a9:a9,k.c))
b6.j(0,m.w,a8)
s=3
break
case 30:b4.push(new A.cn(m.w,m.a,m.b,m.d,m.e))
s=3
break
case 4:s=b4.length!==0?38:39
break
case 38:b0=0
case 40:if(!(b1=b4.length,b0<b1)){s=42
break}b2=b0+25
s=43
return A.a(n.bL(B.c.M(b4,b0,b2<b1?b2:b1),b6,b9),$async$aR)
case 43:b3=c3
b7+=b3.a
b8+=b3.b
c+=b3.c
if(b3.d){q=new A.aV(b7,b8,c,!0)
s=1
break}case 41:b0=b2
s=40
break
case 42:case 39:q=new A.aV(b7,b8,c,!1)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aR,r)},
dv(a,b,c,d){return this.pX(a,b,c,d)},
pX(a,b,c,d){var s=0,r=A.h(t.nh),q,p=this,o,n,m
var $async$dv=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.e2(d,c)
n=A.lt(p.dw(b.r),p.dw(a.d),new A.fV(null,B.a7,!1),a.b,A.b0(d,o),a.a)
s=3
return A.a(t.x.b(n)?n:A.be(n,t.r),$async$dv)
case 3:m=f
s=m.b?4:5
break
case 4:s=6
return A.a(p.ed(a,b,c,m),$async$dv)
case 6:q=null
s=1
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dv,r)},
bL(a,b,c){return this.qQ(a,b,c)},
qQ(b6,b7,b8){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bL=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b3=0
b4=0
p=4
a1=n.b.z
a1===$&&A.x()
s=7
return A.a(a1.eJ(b6),$async$bL)
case 7:m=c0
l=A.G(t.N,t.gq)
for(a1=b6.length,a2=0;a2<b6.length;b6.length===a1||(0,A.L)(b6),++a2){k=b6[a2]
J.bA(l,k.a,k)}j=l
i=A.n([],t.bo)
l=J.M(m),a1=n.a
case 8:if(!l.m()){s=9
break}h=l.gn()
g=J.ae(j,h.a)
if(g==null){l=A.c6("Batch response references unknown op "+h.a+".")
throw A.b(l)}s=h.b&&h.c!=null?10:12
break
case 10:a3=g.b
a4=g.c
a5=b8.h(0,g.a)
if(a5==null)a5=g.d
a6=g.e
a7=B.f.u(g.d)
a8=new A.c4()
a9=A.d2(a8)
a9.t(0,a7)
a9.p()
a9=A.au(a8.a.a)
a7=g.a
b0=B.f.u(g.d)
a8=new A.c4()
b1=A.d2(a8)
b1.t(0,b0)
b1.p()
b1=A.au(a8.a.a)
b0=h.e
if(b0==null)b0=g.d
J.dd(i,new A.h9(new A.bG(a3,a4,B.p,a5,a6,a9,B.m,a7,0,null),b0,h.c.c,b1,b7.h(0,g.a)));++b3
s=11
break
case 12:a3=a1.as
a3===$&&A.x()
a4=g.b
a5=g.c
a6=h.d
if(a6==null)a6="batch_failed"
a7=h.d
if(a7==null)a7="batch_failed"
s=13
return A.a(a3.hw(a7,a5,a6,g.d,a4),$async$bL)
case 13:++b4
case 11:s=8
break
case 9:l=a1.as
l===$&&A.x()
s=14
return A.a(l.jN(i),$async$bL)
case 14:l=b3
a1=b4
q=new A.aV(l,a1,0,!1)
s=1
break
p=2
s=6
break
case 4:p=3
b5=o.pop()
l=A.E(b5)
s=l instanceof A.e7?15:17
break
case 15:q=n.bF(b6,b7,b8)
s=1
break
s=16
break
case 17:s=l instanceof A.bk?18:20
break
case 18:n.f=!1
l=b6.length,a2=0
case 21:if(!(a2<b6.length)){s=23
break}f=b6[a2]
a1=f.b
a3=f.c
a4=f.d
a5=f.e
a6=B.f.u(f.d)
a8=new A.c4()
a7=A.d2(a8)
a7.t(0,a6)
a7.p()
s=24
return A.a(n.dA(new A.bG(a1,a3,B.p,a4,a5,A.au(a8.a.a),B.m,f.a,0,null)),$async$bL)
case 24:e=c0
b3+=e.a
b4+=e.b
case 22:b6.length===l||(0,A.L)(b6),++a2
s=21
break
case 23:q=new A.aV(b3,b4,0,!1)
s=1
break
s=19
break
case 20:s=l instanceof A.b1?25:27
break
case 25:n.e.$0()
q=B.A
s=1
break
s=26
break
case 27:s=l instanceof A.aE?28:30
break
case 28:d=l
c=d instanceof A.er?d:new A.hi("network error")
l=b6.length,a1=n.a,a3=a1.b,a2=0
case 31:if(!(a2<b6.length)){s=33
break}b=b6[a2]
a4=a1.as
a4===$&&A.x()
s=34
return A.a(a4.bx(a3,b.b,b.c),$async$bL)
case 34:a=c0
s=a!=null?35:36
break
case 35:a4=b.b
a5=b.c
a6=b.d
a7=b.e
a9=B.f.u(b.d)
a8=new A.c4()
b0=A.d2(a8)
b0.t(0,a9)
b0.p()
s=37
return A.a(n.bd(new A.bG(a4,a5,B.p,a6,a7,A.au(a8.a.a),B.m,b.a,0,null),a,c),$async$bL)
case 37:a0=c0
b3+=a0.a
b4+=a0.b
case 36:case 32:b6.length===l||(0,A.L)(b6),++a2
s=31
break
case 33:q=new A.aV(b3,b4,0,!0)
s=1
break
s=29
break
case 30:throw b5
case 29:case 26:case 19:case 16:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bL,r)},
bF(a,b,c){return this.no(a,b,c)},
no(b4,b5,b6){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bF=A.c(function(b7,b8){if(b7===1){o.push(b8)
s=p}for(;;)switch(s){case 0:b2=J.I(b4)
s=b2.gk(b4)===1?3:4
break
case 3:e=b2.gaU(b4)
b2=n.a.as
b2===$&&A.x()
d=e.b
s=5
return A.a(b2.hw("batch_request_failed",e.c,"batch_poison",e.d,d),$async$bF)
case 5:q=B.j
s=1
break
case 4:c=B.b.N(b2.gk(b4),2)
m=0
l=0
k=!1
b2=[b2.M(b4,0,c),b2.aQ(b4,c)],d=n.a,b=n.b,a=0
case 6:if(!(a<2)){s=8
break}j=b2[a]
p=10
a0=b.z
a0===$&&A.x()
s=13
return A.a(a0.eJ(j),$async$bF)
case 13:i=b8
a0=J.M(i)
case 14:if(!a0.m()){s=15
break}h=a0.gn()
g=J.A9(j,new A.pL(h))
s=h.b&&h.c!=null?16:18
break
case 16:a1=g.b
a2=g.c
a3=b6.h(0,g.a)
if(a3==null)a3=g.d
a4=g.e
a5=B.f.u(g.d)
a6=new A.c4()
a7=A.d2(a6)
a7.t(0,a5)
a7.p()
a7=A.au(a6.a.a)
a5=g.a
a8=h.c
a8.toString
a9=b5.h(0,g.a)
b0=h.e
if(b0==null)b0=g.d
s=19
return A.a(n.dC(new A.bG(a1,a2,B.p,a3,a4,a7,B.m,a5,0,null),a8,a9,b0),$async$bF)
case 19:++m
s=17
break
case 18:a1=d.as
a1===$&&A.x()
a2=g.b
a3=g.c
a4=h.d
if(a4==null)a4="batch_poison"
a5=h.d
if(a5==null)a5="batch_poison"
s=20
return A.a(a1.hw(a5,a3,a4,g.d,a2),$async$bF)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b3=o.pop()
a0=A.E(b3)
s=a0 instanceof A.e7?21:23
break
case 21:s=24
return A.a(n.bF(j,b5,b6),$async$bF)
case 24:f=b8
m+=f.a
l+=f.b
k=k||f.d
s=22
break
case 23:if(a0 instanceof A.aE){k=!0
s=7
break}else throw b3
case 22:s=12
break
case 9:s=2
break
case 12:case 7:++a
s=6
break
case 8:q=new A.aV(m,l,0,k)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bF,r)},
dC(a,b,c,d){return this.qU(a,b,c,d)},
eh(a,b){return this.dC(a,b,null,null)},
qU(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$dC=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=q.a
l=m.af(a.a).a
k=A.e2(l,b)
j=d==null
if(j){p=new A.O("")
A.a9(p,A.b0(l,k))
o=p.a
n=o.charCodeAt(0)==0?o:o}else n=d
m=m.as
m===$&&A.x()
s=2
return A.a(m.jN(A.n([new A.h9(a,n,b.c,A.au(B.l.u(B.f.u(j?a.d:d)).a),c)],t.bo)),$async$dC)
case 2:return A.e(null,r)}})
return A.f($async$dC,r)},
bd(a,b,c){return this.qI(a,b,c)},
qI(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$bd=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:m=b.as+1
l=c instanceof A.er?c.b:null
s=m>=8?3:4
break
case 3:o=p.a.as
o===$&&A.x()
s=5
return A.a(o.lI(c.a,a.b,"max_attempts",a.d,B.Y,a.a),$async$bd)
case 5:q=B.j
s=1
break
case 4:n=p.c.lv(m,l)
o=p.a.as
o===$&&A.x()
s=6
return A.a(o.uZ(a.a,a.b,m,c.a,A.bI()+B.b.N(n.a,1000)),$async$bd)
case 6:q=B.A
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bd,r)},
cK(a,b,c){return this.nM(a,b,c)},
aH(a,b){return this.cK(a,b,null)},
nM(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$cK=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.as
o===$&&A.x()
p=c==null?b:c
s=2
return A.a(o.hw(p,a.b,b,a.d,a.a),$async$cK)
case 2:return A.e(null,r)}})
return A.f($async$cK,r)},
ed(a,b,c,d){return this.qA(a,b,c,d)},
qA(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h
var $async$ed=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=q.a
n=o.af(a.a).a
m=A.e2(n,c)
l=q.dw(b.r)
k=q.dw(a.d)
j=A.b0(n,m)
i=A.dZ(l,k)
h=A.Q(i,A.o(i).c)
B.c.b7(h)
i=A.dZ(l,j)
p=A.Q(i,A.o(i).c)
B.c.b7(p)
s=2
return A.a(o.a5(new A.pM(q,a,b,l,k,j,h,p),t.P),$async$ed)
case 2:return A.e(null,r)}})
return A.f($async$ed,r)},
dw(a){var s
if(a==null||a.length===0)return B.y
s=B.e.an(a,null)
if(t.f.b(s))return A.b4(s,t.N,t.X)
return B.y}}
A.pL.prototype={
$1(a){return a.a===this.a.a},
$S:74}
A.pM.prototype={
$1(a){return this.mt(a)},
mt(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:j=a.b
i=q.b
h=i.a
i=i.b
p=q.c.r
if(p==null){o=new A.O("")
A.a9(o,q.d)
p=o.a
p=p.charCodeAt(0)==0?p:p}o=new A.O("")
A.a9(o,q.e)
n=o.a
o=new A.O("")
A.a9(o,q.f)
m=o.a
l=t.N
k=t.X
s=2
return A.a(j.cZ(0,"lp_conflicts",A.l(["store",h,"record_id",i,"base_json",p,"local_json",n.charCodeAt(0)==0?n:n,"remote_json",m.charCodeAt(0)==0?m:m,"dirty_local",B.e.a8(q.r,null),"dirty_remote",B.e.a8(q.w,null),"detected_at",A.bI()],l,k),B.a_),$async$$1)
case 2:s=3
return A.a(j.F("lp_sync_row",A.l(["sync_state","conflict"],l,k),"store = ? AND record_id = ?",[h,i]),$async$$1)
case 3:a.X(new A.a3(h,A.al([i],l)))
a.X(new A.a3("lp_conflicts",A.al([i],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.bJ.prototype={
ag(){return"SyncEngineState."+this.b}}
A.aW.prototype={
l(a){var s=this
return"SyncReport(pulled: "+s.a.l(0)+", swept: "+s.b.l(0)+", pushed: "+s.c+", deadLettered: "+s.d+", hadError: "+s.e+")"}}
A.eC.prototype={}
A.eB.prototype={}
A.qe.prototype={
gk0(){return 36},
di(a){return this.n5(a)},
n5(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$di=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.n([],t.en)
a2=null
a3=A.bI()
h=n.a,g=h.ch,g=new A.dt(g,g.r,g.e),f=t.P,e=!a7,d=n.d
case 3:if(!g.m()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.hI(m),$async$di)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.gk0():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.b.ar(c.a+1,n.gk0())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.c1(m,a),$async$di)
case 13:a5.dd(a6,a9)
case 11:++j
s=10
break
case 12:s=14
return A.a(h.a5(new A.qf(c,n,m,a3),f),$async$di)
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
case 4:if(a2!=null){if(a2 instanceof A.aE)throw A.b(a2)
if(t.mA.b(a2))throw A.b(a2)
throw A.b(t.C.a(a2))}q=a1
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$di,r)},
c1(a,b){return this.n4(a,b)},
n4(a2,a3){var s=0,r=A.h(t.eg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$c1=A.c(function(a4,a5){if(a4===1)return A.d(a5,r)
for(;;)switch(s){case 0:if(a3<0||a3>=36)throw A.b(A.P("Sweep bucket "+a3+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a3]
n=A.bo(t.N)
m=p.e,l=t.s,k=p.b,j=0,i=null
case 3:h=k.z
h===$&&A.x()
s=5
return A.a(h.eC(a2,B.bC,i,null,o,200),$async$c1)
case 5:g=a5
h=J.I(g)
if(h.gB(g)){s=4
break}for(f=h.gv(g);f.m();)n.t(0,f.gn().a)
f=A.n([],l)
for(e=h.gv(g);e.m();)f.push(e.gn().a)
s=6
return A.a(p.fS(a2,f),$async$c1)
case 6:d=a5
f=h.gv(g)
case 7:if(!f.m()){s=8
break}e=f.gn()
c=e.a
b=d.h(0,c)
s=b==null||b.z===B.ai||b.c!==e.c?9:10
break
case 9:s=11
return A.a(m.cV(a2,c),$async$c1)
case 11:++j
case 10:s=7
break
case 8:i=h.ga_(g).a
if(h.gk(g)<200){s=4
break}s=3
break
case 4:a1=J
s=12
return A.a(p.a.b.ak("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a2,o+"%"]),$async$c1)
case 12:l=a1.M(a5),a=0
case 13:if(!l.m()){s=14
break}k=l.gn()
a0=A.t(k.h(0,"record_id"))
s=!n.D(0,a0)?15:16
break
case 15:if(J.y(k.h(0,"access_state"),"hidden")){s=13
break}s=17
return A.a(m.dQ(a2,a0),$async$c1)
case 17:++a
case 16:s=13
break
case 14:q=new A.eB(a2,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c1,r)},
fS(a,b){return this.ql(a,b)},
ql(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fS=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:h=t.N
g=A.G(h,t.nw)
o=p.a.b,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.c.M(b,n,B.b.iW(l,0,m))
j=B.c.K(A.aG(k.length,"?",!1,h),", ")
m=[a]
B.c.G(m,k)
f=J
s=6
return A.a(o.ak(u.m+j+")",m),$async$fS)
case 6:m=f.M(d)
case 7:if(!m.m()){s=8
break}i=m.gn()
g.j(0,A.t(i.h(0,"record_id")),A.qp(i))
s=7
break
case 8:case 4:n=l
s=3
break
case 5:q=g
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fS,r)}}
A.qf.prototype={
$1(a){return this.mv(a)},
mv(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.dZ(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.aE.prototype={
l(a){return A.ia(this).l(0)+": "+this.a},
$iF:1}
A.hi.prototype={}
A.er.prototype={}
A.jS.prototype={}
A.b1.prototype={}
A.bk.prototype={}
A.br.prototype={}
A.dC.prototype={}
A.h6.prototype={}
A.fv.prototype={}
A.e7.prototype={}
A.ez.prototype={
gk(a){return this.b}}
A.co.prototype={}
A.cn.prototype={}
A.h8.prototype={}
A.ik.prototype={
ag(){return"BackendHintKind."+this.b}}
A.c2.prototype={}
A.uT.prototype={
$2(a,b){return B.a.lK(B.b.l(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:75}
A.qg.prototype={
lv(a,b){var s,r,q,p,o,n
if(b!=null){s=this.qf(b)
if(A.az(s))return A.dm(0,0,s<0?0:s)
if(s instanceof A.b2){r=s.a-A.bI()
return r<=0?B.aq:A.dm(0,r,0)}return B.ar}q=a<1?1:a
p=1e6
o=1
for(;;){if(!(o<q&&p<3e8))break
n=p*2
p=n>3e8?3e8:n;++o}return A.dm(B.u.lX(p*J.A7(A.xt(q),0.5,1.5)),0,0)},
rP(a){return this.lv(a,null)},
qf(a){var s=B.a.cz(a),r=A.en(s,null)
if(r!=null)return r
return A.BG(s)}}
A.h7.prototype={}
A.hh.prototype={}
A.qr.prototype={
hH(a){return this.uV(a)},
uV(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$hH=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.eN("lp_sync_state",A.n(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$hH)
case 3:m=c
l=J.I(m)
if(l.gB(m)){q=null
s=1
break}o=A.R(J.ae(l.gC(m),"cursor_updated"))
n=A.R(J.ae(l.gC(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.h7(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hH,r)},
dY(a,b,c,d){return this.vv(a,b,c,d)},
vv(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$dY=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aM("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$dY)
case 5:s=m.cf(f)?2:4
break
case 2:s=6
return A.a(a.aj(0,"lp_sync_state",A.l(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$dY)
case 6:s=3
break
case 4:s=7
return A.a(a.F("lp_sync_state",A.l(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$dY)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dY,r)},
hI(a){return this.uX(a)},
uX(a){var s=0,r=A.h(t.k5),q,p=this,o,n,m
var $async$hI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.eN("lp_sync_state",A.n(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$hI)
case 3:n=c
m=J.I(n)
if(m.gB(n)){q=B.bZ
s=1
break}o=A.a7(J.ae(m.gC(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.hh(o,A.a7(J.ae(m.gC(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hI,r)},
dZ(a,b,c,d){return this.vz(a,b,c,d)},
vz(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$dZ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aM("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$dZ)
case 5:s=m.cf(f)?2:4
break
case 2:s=6
return A.a(a.aj(0,"lp_sync_state",A.l(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$dZ)
case 6:s=3
break
case 4:s=7
return A.a(a.F("lp_sync_state",A.l(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$dZ)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dZ,r)},
h7(){var s=0,r=A.h(t.gU),q,p=this,o,n,m,l,k
var $async$h7=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.bw("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden\n      FROM lp_sync_row\n    "),$async$h7)
case 3:m=b
l=J.I(m)
k=l.gB(m)?B.y:l.gC(m)
l=A.a7(k.h(0,"pending"))
if(l==null)l=0
o=A.a7(k.h(0,"conflicts"))
if(o==null)o=0
n=A.a7(k.h(0,"hidden"))
q=new A.kZ(o,n==null?0:n,l)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h7,r)}}
A.cr.prototype={
ag(){return"SyncState."+this.b}}
A.fl.prototype={
ag(){return"AccessState."+this.b}}
A.em.prototype={
ag(){return"OutboxKind."+this.b}}
A.h2.prototype={
ag(){return"OpQueueKind."+this.b}}
A.cT.prototype={}
A.qq.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i=this.a
A.t(i.h(0,"store"))
A.t(i.h(0,"record_id"))
s=A.R(i.h(0,"remote_updated"))
r=A.a7(i.h(0,"last_seen_at"))
q=A.R(i.h(0,"base_updated"))
A.R(i.h(0,"base_hash"))
p=A.R(i.h(0,"base_json"))
o=A.ea(B.bn,A.t(i.h(0,"sync_state")))
A.ys(i.h(0,"dirty_fields"))
n=A.a7(i.h(0,"local_rev"))
if(n==null)n=0
m=A.ea(B.bl,A.t(i.h(0,"access_state")))
A.R(i.h(0,"op_id"))
l=A.a7(i.h(0,"attempt_count"))
if(l==null)l=0
k=A.a7(i.h(0,"next_retry_at"))
if(k==null)k=0
j=A.R(i.h(0,"last_error"))
A.a7(i.h(0,"schema_ver"))
return new A.cT(s,r,q,p,o,n,m,l,k,j)},
$S:76}
A.bG.prototype={}
A.p7.prototype={
$0(){var s,r,q,p=this.a,o=A.t(p.h(0,"store")),n=A.t(p.h(0,"record_id")),m=A.ea(B.bu,A.t(p.h(0,"kind"))),l=A.t(p.h(0,"payload_json")),k=A.R(p.h(0,"base_updated")),j=A.R(p.h(0,"base_hash"))
if(j==null)j=""
s=A.ys(p.h(0,"dirty_fields"))
r=A.t(p.h(0,"op_id"))
q=A.Z(p.h(0,"created_at"))
A.Z(p.h(0,"updated_at"))
return new A.bG(o,n,m,l,k,j,s,r,q,A.R(p.h(0,"depends_on_op")))},
$S:77}
A.dB.prototype={}
A.p0.prototype={
$0(){var s,r,q,p,o,n,m,l=this.a
A.Z(l.h(0,"seq"))
s=A.t(l.h(0,"op_id"))
r=A.t(l.h(0,"store"))
q=A.t(l.h(0,"record_id"))
p=A.ea(B.br,A.t(l.h(0,"kind")))
o=A.t(l.h(0,"payload_json"))
A.t(l.h(0,"state"))
n=A.a7(l.h(0,"attempt_count"))
if(n==null)n=0
A.a7(l.h(0,"next_retry_at"))
A.R(l.h(0,"last_error"))
m=A.R(l.h(0,"depends_on_op"))
A.Z(l.h(0,"created_at"))
return new A.dB(s,r,q,p,o,n,m)},
$S:78}
A.oc.prototype={
cp(a,b){return this.tM(a,b)},
tM(a,b){var s=0,r=A.h(t.X),q,p
var $async$cp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.da(A.l(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cp,r)},
hA(a,b,c,d){return this.uF(a,b,c,d)},
uF(a,b,c,d){var s=0,r=A.h(t.u),q,p,o,n,m,l,k,j,i,h,g,f
var $async$hA=A.c(function(e,a0){if(e===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=a.uA(b,c)
h.Z("PRAGMA journal_mode=TRUNCATE")
p=h.hZ("PRAGMA journal_mode")
o=p.gC(p).b[0]
if(J.am(o).toLowerCase()!=="truncate"){h.p()
throw A.b(A.u("journal_mode read-back was "+A.p(o)+", expected truncate"))}p=t.N
n=A.B2(d)
m=t.bE.a(n.h(0,"stores"))
if(m==null)m=A.n([],t.aw)
l=A.a7(n.h(0,"maxDocBytes"))
if(l==null)l=19e5
k=A.yn(n.h(0,"destructiveBackup"))
j=A.EQ(A.B3(d,"fieldCipher"))
if(J.A4(m,new A.oh())&&j==null)throw A.b(A.ax("Store declares encrypted fields but no fieldCipher was provided.",null))
i=t.S
g=A
f=h
s=3
return A.a(A.ck(new A.qQ(A.G(p,t.p)),new A.iM(A.G(p,t.fw),h),k!==!1,j,l,b,B.bO,m),$async$hA)
case 3:q=new g.fQ(f,a0,A.G(i,t.oS),A.G(i,t.on))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hA,r)}}
A.oh.prototype={
$1(a){return B.c.dE(a.c,new A.og())},
$S:79}
A.og.prototype={
$1(a){return a.e},
$S:45}
A.of.prototype={
$1(a){return A.B4(a)},
$S:81}
A.oe.prototype={
$2(a,b){var s,r,q=J.am(a)
if(t.f.b(b))this.a.j(0,q,A.fP(b))
else{s=this.a
if(t.j.b(b)){r=J.aB(b,new A.od(),t.z)
r=A.Q(r,r.$ti.i("S.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:13}
A.od.prototype={
$1(a){return t.f.b(a)?A.fP(a):a},
$S:29}
A.u4.prototype={}
A.eL.prototype={}
A.ui.prototype={
ha(){var s=0,r=A.h(t.q),q,p=this,o
var $async$ha=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=A.xw(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ha,r)},
jr(a){return this.v0(a)},
v0(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$jr=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
q=A.xw(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jr,r)}}
A.li.prototype={}
A.fQ.prototype={
cp(a,b){return this.tN(a,b)},
tN(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$cp=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:e=b.a
if(e==null){q=A.jg(0,"protocol_envelope","Payload is null",null)
s=1
break}m=A.B5(e)
if(m==null){q=A.jg(0,"protocol_envelope","Payload must be a map",null)
s=1
break}l=null
try{l=A.BP(m)}catch(c){k=A.E(c)
f=A.jg(0,"protocol_envelope",J.am(k),null)
q=f
s=1
break}if(l.a!==2){q=A.jg(l.b,"protocol_mismatch","Version mismatch: expected 2, got "+l.a,A.l(["expected",2,"actual",l.a],t.N,t.X))
s=1
break}p=4
s=7
return A.a(n.ia(a,l,b),$async$cp)
case 7:j=a1
i=new A.kn(2,l.b,j,null)
f=A.da(i.aC())
q=f
s=1
break
p=2
s=6
break
case 4:p=3
d=o.pop()
h=A.E(d)
f=A.jg(l.b,"localpocket",J.am(h),A.l(["type",A.bf(J.bC(h).a,null)],t.N,t.X))
q=f
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cp,r)},
ia(a,b,c){return this.nN(a,b,c)},
nN(a,b,c){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$ia=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=p.as
if(l===$){o=A.l(["health",p.goP(),"capabilities",p.go7(),"get",p.goN(),"mutate_batch",p.goS(),"compiled_query",p.goe(),"open",p.goU(),"analyze",p.go5(),"wal_checkpoint",p.gpD(),"vacuum",p.gpB(),"prune_outbox",p.goY(),"compact",p.gob(),"run_maintenance",p.gp_(),"tx_begin",p.gpl(),"tx_get",p.gpp(),"tx_mutate_batch",p.gpr(),"tx_savepoint",p.gpz(),"tx_rollback_to",p.gpx(),"tx_release",p.gpt(),"tx_commit",p.gpn(),"tx_rollback",p.gpv(),"watch_query",p.gpJ(),"watch_one",p.gpH(),"watch_cancel",p.gpF(),"sync_start",p.gpd(),"sync_stop",p.gph(),"sync_now",p.gp5(),"sync_pause",p.gp7(),"sync_resume",p.gp9(),"sync_set_connectivity",p.gpb(),"sync_update_auth",p.gpj(),"sync_status",p.gpf(),"file_probe",p.goC(),"file_upload_begin",p.goG(),"file_upload_chunk",p.goI(),"file_upload_finish",p.goK(),"file_list",p.goy(),"file_open",p.goA(),"file_remove",p.goE(),"file_gc",p.gow(),"file_enforce_storage_cap",p.gou(),"conflicts_list",p.gon(),"conflicts_get",p.gol(),"conflicts_resolve",p.gop(),"conflicts_accept_local",p.gog(),"conflicts_accept_remote",p.goi(),"conflicts_watch",p.gor(),"close",p.go9()],t.N,t.an)
p.as!==$&&A.v9()
p.as=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.eo("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ia,r)},
iw(a,b){return this.oQ(a,b)},
oQ(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$iw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.a
n=o.hZ("SELECT sqlite_version() AS v")
m=n.gC(n).h(0,"v")
o=o.hZ("PRAGMA journal_mode")
q=A.l(["ok",!0,"sqliteVersion",m,"journalMode",o.gC(o).b[0]],t.N,t.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iw,r)},
ik(a,b){return this.o8(a,b)},
o8(a,b){var s=0,r=A.h(t.X),q
var $async$ik=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.l(["storage","opfs","durable",!0,"persistent",!0,"journal","truncate","multiTabStorage",!0,"multiTabSync",!1,"worker",!0],t.N,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ik,r)},
fu(a,b){return this.oO(a,b)},
oO(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$fu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=A.t(o.h(0,"store"))
m=A.t(o.h(0,"id"))
o=p.c
if(A.qu(o)!=null)A.w(A.u(u.L))
l=A
s=3
return A.a(new A.e8(o,o.af(n),null,null).bZ(m),$async$fu)
case 3:q=l.bz(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fu,r)},
bH(a,b){return this.oT(a,b)},
oT(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h
var $async$bH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=b.d
i=A.t(j.h(0,"store"))
h=J.e5(t.j.a(j.h(0,"mutations")),t.f)
s=J.ar(h.a)===1?3:4
break
case 3:o=h.gC(h)
n=A.t(o.h(0,"action"))
m=t.b.a(A.e_(o.h(0,"record")))
l=A.R(o.h(0,"id"))
j=p.c
if(A.qu(j)!=null)A.w(A.u(u.L))
k=new A.e8(j,j.af(i),null,null)
case 5:switch(n){case"put":s=7
break
case"patch":s=8
break
case"archive":s=9
break
case"restore":s=10
break
case"purge":s=11
break
default:s=12
break}break
case 7:m.toString
s=13
return A.a(k.hG(m),$async$bH)
case 13:s=6
break
case 8:l.toString
m.toString
s=14
return A.a(k.hB(l,m),$async$bH)
case 14:s=6
break
case 9:l.toString
s=15
return A.a(k.h2(l),$async$bH)
case 15:s=6
break
case 10:l.toString
s=16
return A.a(k.hK(l),$async$bH)
case 16:s=6
break
case 11:l.toString
s=17
return A.a(k.hF(l),$async$bH)
case 17:s=6
break
case 12:throw A.b(A.ax("Unknown mutation action: "+n,null))
case 6:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 4:s=18
return A.a(p.c.a5(new A.ov(i,h),t.P),$async$bH)
case 18:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bH,r)},
il(a,b){return this.of(a,b)},
of(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$il=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.ib(b.d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$il,r)},
fv(a,b){return this.oV(a,b)},
oV(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h
var $async$fv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:h=t.lH.a(b.d.h(0,"stores"))
s=h!=null?3:4
break
case 3:o=J.M(h),n=p.c,m=n.ch,l=t.f,k=n.z==null
case 5:if(!o.m()){s=6
break}j=o.gn()
if(!l.b(j))A.w(A.X("Schema must be a map: "+A.p(j),null,null))
i=A.wQ(A.fP(j))
if(B.c.dE(i.c,new A.ow())&&k)throw A.b(A.ax('Store "'+i.a+'" declares encrypted fields but no fieldCipher was provided.',null))
s=!m.I(i.a)?7:8
break
case 7:s=9
return A.a(n.b4(i),$async$fv)
case 9:case 8:s=5
break
case 6:case 4:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fv,r)},
fg(a,b){return this.o6(a,b)},
o6(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$fg=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.dD(A.R(b.d.h(0,"store"))),$async$fg)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fg,r)},
fM(a,b){return this.pE(a,b)},
pE(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$fM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.eY(),$async$fM)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fM,r)},
fL(a,b){return this.pC(a,b)},
pC(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$fL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.eX(A.a7(b.d.h(0,"pages"))),$async$fL)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fL,r)},
fw(a,b){return this.oZ(a,b)},
oZ(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.a7(b.d.h(0,"maxEntries"))
if(o==null)o=1e4
n=A
s=3
return A.a(p.c.eI(o),$async$fw)
case 3:q=n.l(["pruned",d],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fw,r)},
fh(a,b){return this.oc(a,b)},
oc(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=A
s=3
return A.a(p.c.dG(A.t(o.h(0,"store")),A.dm(0,A.Z(o.h(0,"olderThanMs")),0)),$async$fh)
case 3:q=n.l(["compacted",d],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fh,r)},
fz(a,b){return this.p0(a,b)},
p0(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.a7(b.d.h(0,"compactOlderThanMs"))
s=3
return A.a(p.c.d6(A.dm(0,o==null?7776e6:o,0)),$async$fz)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fz,r)},
fG(a,b){return this.pm(a,b)},
pm(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(p.d!=null)throw A.b(A.u("A transaction session is already active on this database."))
o=p.e++
n=$.v
m=t.D
l=t.Q
k=new A.r(n,m)
p.c.a5(new A.oz(p,o,new A.aI(new A.r(n,m),l),new A.aI(k,l)),t.P).iV(new A.oA(p))
s=3
return A.a(k,$async$fG)
case 3:q=A.l(["sessionId",o],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fG,r)},
fH(a,b){return this.pq(a,b)},
pq(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=p.ce(A.a7(o.h(0,"sessionId")))
m=A.t(o.h(0,"store"))
l=A.t(o.h(0,"id"))
k=A
s=3
return A.a(n.c.ck(m).bZ(l),$async$fH)
case 3:q=k.bz(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fH,r)},
ca(a,b){return this.ps(a,b)},
ps(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$ca=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:i=b.d
h=p.ce(A.a7(i.h(0,"sessionId")))
g=A.t(i.h(0,"store"))
f=J.e5(t.j.a(i.h(0,"mutations")),t.f)
e=h.c.ck(g)
i=f.$ti,o=new A.a5(f,f.gk(0),i.i("a5<A.E>")),n=t.b,i=i.i("A.E")
case 3:if(!o.m()){s=4
break}m=o.d
if(m==null)m=i.a(m)
l=A.t(m.h(0,"action"))
k=n.a(A.e_(m.h(0,"record")))
j=A.R(m.h(0,"id"))
case 5:switch(l){case"put":s=7
break
case"patch":s=8
break
case"archive":s=9
break
case"restore":s=10
break
case"purge":s=11
break
default:s=12
break}break
case 7:k.toString
s=13
return A.a(e.hG(k),$async$ca)
case 13:s=6
break
case 8:j.toString
k.toString
s=14
return A.a(e.hB(j,k),$async$ca)
case 14:s=6
break
case 9:j.toString
s=15
return A.a(e.h2(j),$async$ca)
case 15:s=6
break
case 10:j.toString
s=16
return A.a(e.hK(j),$async$ca)
case 16:s=6
break
case 11:j.toString
s=17
return A.a(e.hF(j),$async$ca)
case 17:s=6
break
case 12:throw A.b(A.ax("Unknown mutation action: "+l,null))
case 6:s=3
break
case 4:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ca,r)},
fK(a,b){return this.pA(a,b)},
pA(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.ce(A.a7(b.d.h(0,"sessionId")))
n=o.d
m="lp_sp_wire_"+n.length
n.push(m)
s=3
return A.a(o.c.b.Z("SAVEPOINT "+m),$async$fK)
case 3:n=t.N
q=A.l(["savepoint",m],n,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fK,r)},
fJ(a,b){return this.py(a,b)},
py(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
s=3
return A.a(p.ce(A.a7(o.h(0,"sessionId"))).c.b.Z("ROLLBACK TO "+A.t(o.h(0,"savepoint"))),$async$fJ)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fJ,r)},
fI(a,b){return this.pu(a,b)},
pu(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=p.ce(A.a7(o.h(0,"sessionId")))
m=A.t(o.h(0,"savepoint"))
s=3
return A.a(n.c.b.Z("RELEASE "+m),$async$fI)
case 3:B.c.O(n.d,m)
q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fI,r)},
iz(a,b){return this.po(a,b)},
po(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$iz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.ce(A.a7(b.d.h(0,"sessionId")))
p.d=null
o.b.am()
q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iz,r)},
iA(a,b){return this.pw(a,b)},
pw(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$iA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.ce(A.a7(b.d.h(0,"sessionId")))
p.d=null
o.b.ao(new A.jN("rollback","Transaction rolled back."))
q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iA,r)},
fP(a,b){return this.pK(a,b)},
pK(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fP=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.d
m=A.Z(n.h(0,"watchId"))
l=p.kH(n)
n=p.c
o=new A.kC(n,n.af(l.d).a,l.r,l.w,l.y,null,new A.oD(a,m))
n=n.f.a
o.x=new A.aR(n,A.o(n).i("aR<1>")).aL(o.gnK())
p.f.j(0,m,new A.eL(new A.oE(o)))
k=J
s=3
return A.a(o.hq(),$async$fP)
case 3:n=k.aB(d,A.yZ(),t.X)
n=A.Q(n,n.$ti.i("S.E"))
q=A.l(["watchId",m,"items",n],t.N,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fP,r)},
fO(a,b){return this.pI(a,b)},
pI(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$fO=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=A.Z(o.h(0,"watchId"))
m=A.t(o.h(0,"store"))
l=A.t(o.h(0,"id"))
o=p.c
p.f.j(0,n,new A.eL(new A.oB(new A.jv(o,o.af(m),l).aF().aL(new A.oC(a,n)))))
if(A.qu(o)!=null)A.w(A.u(u.L))
k=A
j=n
i=A
s=3
return A.a(new A.e8(o,o.af(m),null,null).bZ(l),$async$fO)
case 3:q=k.l(["watchId",j,"item",i.bz(d)],t.N,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fO,r)},
fN(a,b){return this.pG(a,b)},
pG(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fN=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.f.O(0,A.Z(b.d.h(0,"watchId")))
s=o!=null?3:4
break
case 3:s=5
return A.a(o.b.$0(),$async$fN)
case 5:case 4:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fN,r)},
dt(a,b){return this.pe(a,b)},
pe(a1,a2){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dt=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a=a2.d
a0=A.R(a.h(0,"baseUrl"))
if(a0==null||a0.length===0)throw A.b(A.ax("syncStart requires baseUrl.",null))
s=3
return A.a(p.cj(),$async$dt)
case 3:o=A.R(a.h(0,"token"))
n=A.R(a.h(0,"scopeId"))
if(n==null)n="web-sync"
m=new A.ui(o,n)
a=A.kj(a0)
l=p.c
k=l.ch
j=A.o(k).i("ai<1>")
k=A.Q(new A.ai(k,j),j.i("m.E"))
j=t.hw
i=A.ey(null,null,j)
h=t.N
g=$.v.h(0,B.c_)
f=g==null?null:t.dF.a(g).$0()
if(f==null)f=new A.iu(A.n([],t.W))
f=new A.pd(f)
e=new A.jC(a,m,k,n,f,i,A.G(h,t.E),A.G(h,j))
j=new A.lL(m)
e.y=j
e.z=new A.pg(f,a,j)
d=A.xR()
j=A.ey(null,null,t.n6)
f=A.ey(null,null,t.em)
i=t.H
k=A.cg(null,i)
c=A.cg(B.M,t.Y)
b=A.n([],t.s)
i=A.cg(null,i)
k=new A.k8(l,e,B.F,new A.ox(a1),B.L,j,f,k,A.bo(h),c,b,i)
a=k.e=new A.qr(l,B.a.q(A.au(B.l.u(B.f.u(a.l(0)+"|"+n)).a),0,12))
j=new A.nh(l,e,B.F,l.y)
k.x=j
j=new A.pF(l,e,B.F,a,j)
k.f=j
k.r=new A.qe(l,e,B.F,a,j)
k.w=new A.pK(l,e,B.F,k.gq1(),e.as)
d.b=k
p.y=m
p.x=d.bp()
k=d.bp().ay
p.z=new A.aR(k,A.o(k).i("aR<1>")).aL(new A.oy(p,a1))
s=4
return A.a(d.bp().aF(),$async$dt)
case 4:s=5
return A.a(e.f7(),$async$dt)
case 5:q=A.l(["ok",!0,"state",d.bp().y.b],h,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dt,r)},
fE(a,b){return this.pi(a,b)},
pi(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$fE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cj(),$async$fE)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fE,r)},
fA(a,b){return this.p6(a,b)},
p6(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x
if(n==null)throw A.b(A.u("Sync is not started."))
n.k2.push("cycle")
s=3
return A.a(n.cO(),$async$fA)
case 3:o=d
q=A.l(["pulled",o.a,"swept",o.b,"pushed",o.c,"deadLettered",o.d,"hadError",o.e],t.N,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fA,r)},
fB(a,b){return this.p8(a,b)},
p8(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.x
if(o==null)throw A.b(A.u("Sync is not started."))
s=3
return A.a(o.bf(),$async$fB)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fB,r)},
fC(a,b){return this.pa(a,b)},
pa(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fC=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.x
if(o==null)throw A.b(A.u("Sync is not started."))
s=3
return A.a(o.b5(),$async$fC)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fC,r)},
fD(a,b){return this.pc(a,b)},
pc(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x
if(n==null)throw A.b(A.u("Sync is not started."))
o=b.d.h(0,"online")
if(!A.bN(o))throw A.b(A.ax("online must be bool.",null))
s=3
return A.a(n.i_(o),$async$fD)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fD,r)},
fF(a,b){return this.pk(a,b)},
pk(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.y
n=p.x
if(o==null||n==null)throw A.b(A.u("Sync is not started."))
o.a=A.R(b.d.h(0,"token"))
s=3
return A.a(n.hv(),$async$fF)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fF,r)},
iy(a,b){return this.pg(a,b)},
pg(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$iy=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.Q
if(o==null){o=t.N
o=A.l(["state","closed"],o,o)}else o=A.xd(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iy,r)},
c9(a,b){return this.oD(a,b)},
oD(a1,a2){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$c9=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:d=a2.d
c=A.t(d.h(0,"store"))
b=A.t(d.h(0,"recordId"))
a=t.L
a0=a.a(A.e_(d.h(0,"bytes")))
d=m.c.ay
d===$&&A.x()
i=J.I(a0)
s=3
return A.a(d.rt(A.q4(a0,a),i.gk(a0),b,c),$async$c9)
case 3:h=a4
s=4
return A.a(d.uB(b,h.a,c),$async$c9)
case 4:l=a4
k=A.n([],t.t)
a=t.K
g=new A.c1(A.bg(l,"stream",a))
p=5
case 8:s=10
return A.a(g.m(),$async$c9)
case 10:if(!a4){s=9
break}j=g.gn()
J.wA(k,j)
s=8
break
case 9:n.push(7)
s=6
break
case 5:n=[2]
case 6:p=2
s=11
return A.a(g.A(),$async$c9)
case 11:s=n.pop()
break
case 7:s=12
return A.a(d.uh(b,c),$async$c9)
case 12:f=a4
d=h.e
g=h.r
e=J.ar(f)
i=i.gk(a0)===J.ar(k)&&A.B7(a0,k)
q=A.l(["hash",d,"state",g,"refCount",e,"readBack",k,"match",i],t.N,a)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c9,r)},
iu(a,b){return this.oH(a,b)},
oH(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h
var $async$iu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.w++
k=b.d
j=A.t(k.h(0,"store"))
i=A.t(k.h(0,"recordId"))
h=A.R(k.h(0,"field"))
if(h==null)h="imgs"
o=A.R(k.h(0,"name"))
if(o==null)o="blob.bin"
n=A.Z(k.h(0,"size"))
k=A.R(k.h(0,"expectedSha256"))
m=A.n([],t.bs)
if(n<0||n>4294967296)throw A.b(A.ax("Invalid file size: "+n,null))
p.r.j(0,l,new A.li(j,i,h,o,n,k,m))
q=A.l(["uploadId",l],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iu,r)},
iv(a,b){return this.oJ(a,b)},
oJ(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$iv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.d
l=A.Z(m.h(0,"uploadId"))
k=p.r.h(0,l)
if(k==null)throw A.b(A.ax("Unknown upload session: "+l,null))
o=t.L.a(A.e_(m.h(0,"chunk")))
m=J.I(o)
if(m.gk(o)>262144)throw A.b(A.ax("Chunk too large: "+m.gk(o)+" > 262144",null))
k.x.push(new Uint8Array(A.bv(o)))
m=k.w+m.gk(o)
k.w=m
n=k.f
if(m>n)throw A.b(A.ax("Upload exceeds declared size "+n,null))
q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iv,r)},
fs(a,b){return this.oL(a,b)},
oL(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fs=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=A.Z(b.d.h(0,"uploadId"))
f=p.r.O(0,g)
if(f==null)throw A.b(A.ax("Unknown upload session: "+g,null))
o=f.w
n=f.f
if(o!==n)throw A.b(A.ax("Upload size mismatch: expected "+n+" but got "+o,null))
o=p.c.ay
o===$&&A.x()
m=f.b
l=f.c
k=new A.ou(f).$0()
j=f.d
i=f.e
s=3
return A.a(o.cT(k,f.r,n,j,i,l,m),$async$fs)
case 3:h=d
q=A.l(["refId",h.a,"hash",h.e,"state",h.r,"remoteName",h.f],t.N,t.v)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fs,r)},
fp(a,b){return this.oz(a,b)},
oz(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.c.ay
l===$&&A.x()
o=b.d
n=A.t(o.h(0,"store"))
m=A.t(o.h(0,"recordId"))
o=A.R(o.h(0,"field"))
k=J
s=3
return A.a(l.d0(o==null?"imgs":o,m,n),$async$fp)
case 3:l=k.aB(d,A.Eg(),t.G)
l=A.Q(l,l.$ti.i("S.E"))
q=A.l(["refs",l],t.N,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fp,r)},
ds(a,b){return this.oB(a,b)},
oB(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
var $async$ds=A.c(function(c,a0){if(c===1){o.push(a0)
s=p}for(;;)switch(s){case 0:d=m.c.ay
d===$&&A.x()
i=b.d
h=A.t(i.h(0,"store"))
g=A.t(i.h(0,"recordId"))
f=A.R(i.h(0,"field"))
if(f==null)f="imgs"
e=A.a7(i.h(0,"index"))
if(e==null)e=0
s=3
return A.a(d.dT(f,e,g,A.R(i.h(0,"refId")),h),$async$ds)
case 3:l=a0
k=A.n([],t.t)
h=new A.c1(A.bg(l,"stream",t.K))
p=4
case 7:s=9
return A.a(h.m(),$async$ds)
case 9:if(!a0){s=8
break}j=h.gn()
J.wA(k,j)
s=7
break
case 8:n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
s=10
return A.a(h.A(),$async$ds)
case 10:s=n.pop()
break
case 6:q=A.l(["bytes",A.bz(new Uint8Array(A.bv(k))),"size",J.ar(k)],t.N,t.X)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ds,r)},
fq(a,b){return this.oF(a,b)},
oF(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=p.c.ay
j===$&&A.x()
o=b.d
n=A.t(o.h(0,"store"))
m=A.t(o.h(0,"recordId"))
l=A.R(o.h(0,"field"))
if(l==null)l="imgs"
k=A.a7(o.h(0,"index"))
if(k==null)k=0
s=3
return A.a(j.eQ(0,l,k,m,A.R(o.h(0,"refId")),n),$async$fq)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fq,r)},
fo(a,b){return this.ox(a,b)},
ox(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$fo=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.c.ay
m===$&&A.x()
o=b.d
n=A.a7(o.h(0,"blobGraceMs"))
n=A.dm(0,n==null?6048e5:n,0)
o=A.a7(o.h(0,"tmpGraceMs"))
l=A
s=3
return A.a(m.cB(n,A.dm(0,o==null?864e5:o,0)),$async$fo)
case 3:q=l.l(["cleaned",d],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fo,r)},
fn(a,b){return this.ov(a,b)},
ov(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fn=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c.ay
o===$&&A.x()
n=A
s=3
return A.a(o.cn(A.Z(b.d.h(0,"maxBytes"))),$async$fn)
case 3:q=n.l(["evicted",d],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fn,r)},
fl(a,b){return this.oo(a,b)},
oo(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.R(b.d.h(0,"store"))
n=p.c.ax
n===$&&A.x()
m=J
s=3
return A.a(n.eB(o),$async$fl)
case 3:n=m.aB(d,A.yX(),t.G)
n=A.Q(n,n.$ti.i("S.E"))
q=A.l(["conflicts",n],t.N,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fl,r)},
fk(a,b){return this.om(a,b)},
om(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$fk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.d
m=A.t(n.h(0,"store"))
l=A.t(n.h(0,"id"))
n=p.c.ax
n===$&&A.x()
s=3
return A.a(n.dd(m,l),$async$fk)
case 3:o=d
q=o==null?null:A.z4(o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fk,r)},
fm(a,b){return this.oq(a,b)},
oq(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$fm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=A.t(o.h(0,"store"))
m=A.t(o.h(0,"id"))
l=t.G.a(A.e_(o.h(0,"merged")))
o=p.c.ax
o===$&&A.x()
s=3
return A.a(o.dV(m,l,n),$async$fm)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fm,r)},
fi(a,b){return this.oh(a,b)},
oh(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fi=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=A.t(o.h(0,"store"))
m=A.t(o.h(0,"id"))
o=p.c.ax
o===$&&A.x()
s=3
return A.a(o.el(n,m),$async$fi)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fi,r)},
fj(a,b){return this.oj(a,b)},
oj(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=A.t(o.h(0,"store"))
m=A.t(o.h(0,"id"))
o=p.c.ax
o===$&&A.x()
s=3
return A.a(o.em(n,m),$async$fj)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fj,r)},
im(a,b){return this.os(a,b)},
os(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$im=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=A.Z(o.h(0,"watchId"))
m=A.R(o.h(0,"store"))
o=p.c.ax
o===$&&A.x()
p.f.j(0,n,new A.eL(new A.os(o.vs(m).aL(new A.ot(a,n)))))
q=A.l(["watchId",n],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$im,r)},
dq(a,b){return this.oa(a,b)},
oa(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$dq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cj(),$async$dq)
case 3:o=p.f,n=new A.bS(o,o.r,o.e)
case 4:if(!n.m()){s=5
break}s=6
return A.a(n.d.b.$0(),$async$dq)
case 6:s=4
break
case 5:o.aK(0)
o=p.d
if(o!=null&&(o.b.a.a&30)===0)o.b.ao(new A.iI("Database closed."))
p.d=null
s=7
return A.a(p.c.p(),$async$dq)
case 7:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dq,r)},
cj(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$cj=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=q.x
q.x=null
p=q.z
p=p==null?null:p.A()
s=2
return A.a(p instanceof A.r?p:A.be(p,t.H),$async$cj)
case 2:q.z=null
s=n!=null?3:4
break
case 3:o=n.b
s=5
return A.a(n.aG(),$async$cj)
case 5:s=6
return A.a(o.e3(),$async$cj)
case 6:o.e3()
p=o.ay
if((p.c&4)===0)p.p()
o.x.a.p()
case 4:q.Q=q.y=null
return A.e(null,r)}})
return A.f($async$cj,r)},
ce(a){var s
if(a!=null){s=this.d
s=s==null||s.a!==a}else s=!0
if(s)throw A.b(A.u("No active transaction session matching ID "+A.p(a)+"."))
s=this.d
s.toString
return s},
kH(a){var s,r,q,p,o,n,m=a.h(0,"type"),l=a.h(0,"operation"),k=a.h(0,"compilerVersion"),j=a.h(0,"store"),i=a.h(0,"schemaVersion"),h=a.h(0,"schemaFingerprint"),g=a.h(0,"argumentCount"),f=a.h(0,"sql"),e=a.h(0,"args")
if(!J.y(m,"query_plan")||typeof l!="string"||!B.bS.D(0,l)||!J.y(k,1)||typeof j!="string"||!A.az(i)||typeof h!="string"||!A.az(g)||typeof f!="string"||!t.j.b(e))throw A.b(A.eo("Malformed or stale compiled query plan."))
s=this.c.af(j).a
r=new A.O("")
A.a9(r,s.aC())
q=r.a
p=A.au(B.l.u(B.f.u(q.charCodeAt(0)==0?q:q)).a)
if(s.b!==i||p!==h||J.ar(e)!==g||!B.a.L(f,"SELECT "))throw A.b(A.eo("Stale or mismatched compiled query plan."))
o=a.h(0,"projection")
a.h(0,"limit")
a.h(0,"shape")
A.t(m)
q=t.X
n=J.aB(e,A.yY(),q)
n=A.Q(n,n.$ti.i("S.E"))
q=A.cK(n,q)
n=t.j.b(o)?J.e5(o,t.N):null
return new A.pN(l,j,f,q,n)},
ib(a){return this.nO(a)},
nO(a){var s=0,r=A.h(t.G),q,p=this,o,n,m,l,k
var $async$ib=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.kH(a)
n=a.h(0,"sessionId")
m=A.az(n)?new A.oq(p.ce(n)):new A.or(p)
l=a.h(0,"pageLimit")
k=A.az(l)?l:null
q=A.uP(p.c,m,o,k)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ib,r)}}
A.op.prototype={
$2(a,b){return new A.V(J.am(a),b,t.eB)},
$S:47}
A.ov.prototype={
$1(a){return this.me(a)},
me(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.ck(q.a)
p=q.b,o=p.$ti,p=new A.a5(p,p.gk(0),o.i("a5<A.E>")),n=t.b,o=o.i("A.E")
case 2:if(!p.m()){s=3
break}m=p.d
if(m==null)m=o.a(m)
l=A.t(m.h(0,"action"))
k=n.a(A.e_(m.h(0,"record")))
j=A.R(m.h(0,"id"))
case 4:switch(l){case"put":s=6
break
case"patch":s=7
break
case"archive":s=8
break
case"restore":s=9
break
case"purge":s=10
break
default:s=11
break}break
case 6:k.toString
s=12
return A.a(i.hG(k),$async$$1)
case 12:s=5
break
case 7:j.toString
k.toString
s=13
return A.a(i.hB(j,k),$async$$1)
case 13:s=5
break
case 8:j.toString
s=14
return A.a(i.h2(j),$async$$1)
case 14:s=5
break
case 9:j.toString
s=15
return A.a(i.hK(j),$async$$1)
case 15:s=5
break
case 10:j.toString
s=16
return A.a(i.hF(j),$async$$1)
case 16:s=5
break
case 11:throw A.b(A.ax("Unknown mutation action: "+l,null))
case 5:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.ow.prototype={
$1(a){return a.e},
$S:45}
A.oz.prototype={
$1(a){return this.mf(a)},
mf(a){var s=0,r=A.h(t.P),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.c
q.a.d=new A.u4(q.b,p,a,A.n([],t.s))
q.d.am()
s=2
return A.a(p.a,$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.oA.prototype={
$1(a){this.a.d=null},
$S:22}
A.oD.prototype={
$1(a){this.a.cl(A.da(A.l(["v",2,"op","worker_event","watchId",this.b,"value",A.bz(a)],t.N,t.X)))},
$S:84}
A.oE.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
o=p.y
if(o!=null)o.A()
p=p.x
if(p!=null)p.A()
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.oC.prototype={
$1(a){this.a.cl(A.da(A.l(["v",2,"op","worker_event","watchId",this.b,"value",A.bz(a)],t.N,t.X)))},
$S:85}
A.oB.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.A()
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.ox.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.cl(A.da(A.l(["v",2,"op","auth_required"],t.N,t.K)))
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.oy.prototype={
$1(a){this.a.Q=a
this.b.cl(A.da(A.l(["v",2,"op","sync_status","status",A.xd(a)],t.N,t.K)))},
$S:86}
A.ou.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.x,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.bu(A.d0(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.L)(l),++j
s=3
break
case 5:case 1:return A.bu(null,0,r)
case 2:return A.bu(o.at(-1),1,r)}})
var s=0,r=A.yA($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.yP(r)},
$S:87}
A.ot.prototype={
$1(a){var s=J.aB(a,A.yX(),t.G)
s=A.Q(s,s.$ti.i("S.E"))
this.a.cl(A.da(A.l(["v",2,"op","worker_event","watchId",this.b,"value",A.bz(s)],t.N,t.X)))},
$S:88}
A.os.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.A()
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.oq.prototype={
$2(a,b){return this.a.c.b.ak(a,b)},
$S:48}
A.or.prototype={
$2(a,b){return this.a.c.m1(a,b)},
$S:48}
A.kC.prototype={
hq(){var s=0,r=A.h(t.J),q,p=this,o
var $async$hq=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.e4(),$async$hq)
case 3:o=b
p.as=p.kj(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hq,r)},
nL(a){var s,r=this
if(a.a!==r.b.a)return
if(r.z){r.Q=!0
return}s=r.y
if(s!=null)s.A()
r.y=A.cU(B.Q,r.gkc())},
fb(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i
var $async$fb=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.z=!0
k=n.a.e;++k.w
q=3
s=6
return A.a(n.e4(),$async$fb)
case 6:m=b
l=n.kj(m)
if(!J.y(l,n.as)){n.as=l;++k.x
n.r.$1(m)}o.push(5)
s=4
break
case 3:q=2
i=p.pop()
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.z=!1
if(n.Q){n.Q=!1
k=n.y
if(k!=null)k.A()
n.y=A.cU(B.Q,n.gkc())}s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$fb,r)},
e4(){var s=0,r=A.h(t.J),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$e4=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:e=p.a
b=A
a=p.b
s=3
return A.a(e.m1(p.c,p.d),$async$e4)
case 3:d=b.z2(a,a1,e.z,e.Q)
c=p.e
if(c==null){q=d
s=1
break}e=A.n([],t.d)
for(o=d.length,n=c.$ti,m=n.i("a5<A.E>"),n=n.i("A.E"),l=t.N,k=t.X,j=0;j<d.length;d.length===o||(0,A.L)(d),++j){i=d[j]
h=A.G(l,k)
for(g=new A.a5(c,c.gk(0),m);g.m();){f=g.d
if(f==null)f=n.a(f)
if(i.I(f))h.j(0,f,i.h(0,f))}e.push(h)}q=e
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e4,r)},
kj(a){var s,r,q,p,o=A.n([],t.s)
for(s=J.M(a);s.m();){r=new A.O("")
A.a9(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}p=B.c.K(o,"|")
s=this.a.e
s.y=s.y+p.length
return A.au(B.l.u(B.f.u(p)).a)}}
A.uO.prototype={
$2(a,b){this.a.j(0,J.am(a),A.bz(b))},
$S:13}
A.uL.prototype={
$2(a,b){this.a.j(0,J.am(a),A.e_(b))},
$S:13}
A.eJ.prototype={
aC(){var s=this
return A.l(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.qV.prototype={
$2(a,b){return new A.V(J.am(a),b,t.eB)},
$S:47}
A.kn.prototype={
aC(){var s,r=this,q=A.G(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.aC())
else q.j(0,"r",r.c)
return q}}
A.qS.prototype={
aC(){var s,r=A.G(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.iI.prototype={
l(a){return"DatabaseWorkerClosedException: "+this.a},
$iF:1}
A.jG.prototype={
l(a){return"ProtocolEnvelopeException: "+this.a},
$iF:1}
A.jN.prototype={
l(a){return"RemoteLocalPocketException["+this.a+"]: "+this.b},
$iF:1}
A.mt.prototype={
rf(a){var s,r=null
A.yS("absolute",A.n([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.aN(a)>0&&!s.cq(a)
if(s)return a
s=A.z1()
return this.ue(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
ue(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.n([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.yS("join",s)
return this.uf(new A.bt(s,t.lS))},
uf(a){var s,r,q,p,o,n,m,l,k
for(s=a.gv(0),r=new A.eK(s,new A.mu()),q=this.a,p=!1,o=!1,n="";r.m();){m=s.gn()
if(q.cq(m)&&o){l=A.jx(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.q(k,0,q.dW(k,!0))
l.b=n
if(q.eE(n))l.e[0]=q.gde()
n=l.l(0)}else if(q.aN(m)>0){o=!q.cq(m)
n=m}else{if(!(m.length!==0&&q.iY(m[0])))if(p)n+=q.gde()
n+=m}p=q.eE(m)}return n.charCodeAt(0)==0?n:n},
f6(a,b){var s=A.jx(b,this.a),r=s.d,q=A.ap(r).i("c_<1>")
r=A.Q(new A.c_(r,new A.mv(),q),q.i("m.E"))
s.d=r
q=s.b
if(q!=null)B.c.aj(r,0,q)
return s.d},
jn(a){var s
if(!this.q0(a))return a
s=A.jx(a,this.a)
s.jm()
return s.l(0)},
q0(a){var s,r,q,p,o,n,m,l=this.a,k=l.aN(a)
if(k!==0){if(l===$.lx())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.bT(n)){if(l===$.lx()&&n===47)return!0
if(q!=null&&l.bT(q))return!0
if(q===46)m=o==null||o===46||l.bT(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.bT(q))return!0
if(q===46)l=o==null||l.bT(o)||o===46
else l=!1
if(l)return!0
return!1},
v2(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.aN(a)
if(l<=0)return o.jn(a)
s=A.z1()
if(m.aN(s)<=0&&m.aN(a)>0)return o.jn(a)
if(m.aN(a)<=0||m.cq(a))a=o.rf(a)
if(m.aN(a)<=0&&m.aN(s)>0)throw A.b(A.xg(n+a+'" from "'+s+'".'))
r=A.jx(s,m)
r.jm()
q=A.jx(a,m)
q.jm()
l=r.d
if(l.length!==0&&l[0]===".")return q.l(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.jp(l,p)
else l=!1
if(l)return q.l(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.jp(l[0],p[0])}else l=!1
if(!l)break
B.c.hJ(r.d,0)
B.c.hJ(r.e,1)
B.c.hJ(q.d,0)
B.c.hJ(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.xg(n+a+'" from "'+s+'".'))
l=t.N
B.c.jf(q.d,0,A.aG(p,"..",!1,l))
p=q.e
p[0]=""
B.c.jf(p,1,A.aG(r.d.length,m.gde(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.c.ga_(m)==="."){B.c.lT(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.lU()
return q.l(0)},
lM(a){var s,r,q=this,p=A.yE(a)
if(p.gaE()==="file"&&q.a===$.ic())return p.l(0)
else if(p.gaE()!=="file"&&p.gaE()!==""&&q.a!==$.ic())return p.l(0)
s=q.jn(q.a.jo(A.yE(p)))
r=q.v2(s)
return q.f6(0,r).length>q.f6(0,s).length?s:r}}
A.mu.prototype={
$1(a){return a!==""},
$S:21}
A.mv.prototype={
$1(a){return a.length!==0},
$S:21}
A.uC.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:90}
A.o4.prototype={
mC(a){var s=this.aN(a)
if(s>0)return B.a.q(a,0,s)
return this.cq(a)?a[0]:null},
jp(a,b){return a===b}}
A.pf.prototype={
lU(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.c.ga_(s)===""))break
B.c.lT(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
jm(){var s,r,q,p,o,n=this,m=A.n([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.L)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.c.jf(m,0,A.aG(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.aG(m.length+1,s.gde(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.eE(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.lx())n.b=A.H(r,"/","\\")
n.lU()},
l(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.c.ga_(q)
return o.charCodeAt(0)==0?o:o}}
A.jy.prototype={
l(a){return"PathException: "+this.a},
$iF:1}
A.qd.prototype={
l(a){return this.gaA()}}
A.pu.prototype={
iY(a){return B.a.D(a,"/")},
bT(a){return a===47},
eE(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
dW(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
aN(a){return this.dW(a,!1)},
cq(a){return!1},
jo(a){var s
if(a.gaE()===""||a.gaE()==="file"){s=a.gb3()
return A.w5(s,0,s.length,B.k,!1)}throw A.b(A.P("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gaA(){return"posix"},
gde(){return"/"}}
A.qC.prototype={
iY(a){return B.a.D(a,"/")},
bT(a){return a===47},
eE(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.cm(a,"://")&&this.aN(a)===s},
dW(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.bS(a,"/",B.a.a1(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.L(a,"file://"))return q
p=A.z3(a,q+1)
return p==null?q:p}}return 0},
aN(a){return this.dW(a,!1)},
cq(a){return a.length!==0&&a.charCodeAt(0)===47},
jo(a){return a.l(0)},
gaA(){return"url"},
gde(){return"/"}}
A.qW.prototype={
iY(a){return B.a.D(a,"/")},
bT(a){return a===47||a===92},
eE(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
dW(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.bS(a,"\\",2)
if(s>0){s=B.a.bS(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.z7(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
aN(a){return this.dW(a,!1)},
cq(a){return this.aN(a)===1},
jo(a){var s,r
if(a.gaE()!==""&&a.gaE()!=="file")throw A.b(A.P("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gb3()
if(a.gcY()===""){if(s.length>=3&&B.a.L(s,"/")&&A.z3(s,1)!=null)s=B.a.v5(s,"/","")}else s="\\\\"+a.gcY()+s
r=A.H(s,"/","\\")
return A.w5(r,0,r.length,B.k,!1)},
rD(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
jp(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.rD(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gaA(){return"windows"},
gde(){return"\\"}}
A.pW.prototype={
gk(a){return this.c.length},
gug(){return this.b.length},
n8(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.C(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
e0(a){var s,r=this
if(a<0)throw A.b(A.aD("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.aD("Offset "+a+u.D+r.gk(0)+"."))
s=r.b
if(a<B.c.gC(s))return-1
if(a>=B.c.ga_(s))return s.length-1
if(r.pQ(a)){s=r.d
s.toString
return s}return r.d=r.nn(a)-1},
pQ(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
nn(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.b.N(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
hX(a){var s,r,q=this
if(a<0)throw A.b(A.aD("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.aD("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gk(0)+"."))
s=q.e0(a)
r=q.b[s]
if(r>a)throw A.b(A.aD("Line "+s+" comes after offset "+a+"."))
return a-r},
f1(a){var s,r,q,p
if(a<0)throw A.b(A.aD("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.aD("Line "+a+" must be less than the number of lines in the file, "+this.gug()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.aD("Line "+a+" doesn't have 0 columns."))
return q}}
A.iU.prototype={
gT(){return this.a.a},
ga4(){return this.a.e0(this.b)},
gad(){return this.a.hX(this.b)},
gae(){return this.b}}
A.eT.prototype={
gT(){return this.a.a},
gk(a){return this.c-this.b},
gH(){return A.vm(this.a,this.b)},
gE(){return A.vm(this.a,this.c)},
gaq(){return A.cS(B.V.M(this.a.c,this.b,this.c),0,null)},
gaS(){var s=this,r=s.a,q=s.c,p=r.e0(q)
if(r.hX(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.cS(B.V.M(r.c,r.f1(p),r.f1(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.f1(p+1)
return A.cS(B.V.M(r.c,r.f1(r.e0(s.b)),q),0,null)},
S(a,b){var s
if(!(b instanceof A.eT))return this.n_(0,b)
s=B.b.S(this.b,b.b)
return s===0?B.b.S(this.c,b.c):s},
V(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.eT))return s.mZ(0,b)
return s.b===b.b&&s.c===b.c&&J.y(s.a.a,b.a.a)},
gJ(a){return A.el(this.b,this.c,this.a.a,B.o)},
$icq:1}
A.nC.prototype={
u5(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.ld(B.c.gC(a1).c)
s=a.e
r=A.aG(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.y(m.c,l)){a.fZ("\u2575")
q.a+="\n"
a.ld(l)}else if(m.b+1!==n.b){a.re("...")
q.a+="\n"}}for(l=n.d,k=A.ap(l).i("dD<1>"),j=new A.dD(l,k),j=new A.a5(j,j.gk(0),k.i("a5<S.E>")),k=k.i("S.E"),i=n.b,h=n.a;j.m();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gH().ga4()!==f.gE().ga4()&&f.gH().ga4()===i&&a.pR(B.a.q(h,0,f.gH().gad()))){e=B.c.bR(r,a0)
if(e<0)A.w(A.P(A.p(r)+" contains no null elements.",a0))
r[e]=g}}a.rd(i)
q.a+=" "
a.rb(n,r)
if(s)q.a+=" "
d=B.c.u7(l,new A.nX())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gH().ga4()===i?j.gH().gad():0
a.r9(h,g,j.gE().ga4()===i?j.gE().gad():h.length,p)}else a.h0(h)
q.a+="\n"
if(k)a.ra(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.fZ("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
ld(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.fZ("\u2577")
else{q.fZ("\u250c")
q.aX(new A.nK(q),"\x1b[34m")
s=q.r
r=" "+$.wy().lM(a)
s.a+=r}q.r.a+="\n"},
fX(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gH().ga4()
i=k?null:l.a.gE().ga4()
if(s&&l===c){h.aX(new A.nR(h,j,a),r)
n=!0}else if(n)h.aX(new A.nS(h,l),r)
else if(k)if(g.a)h.aX(new A.nT(h),g.b)
else o.a+=" "
else h.aX(new A.nU(g,h,c,j,a,l,i),p)}},
rb(a,b){return this.fX(a,b,null)},
r9(a,b,c,d){var s=this
s.h0(B.a.q(a,0,b))
s.aX(new A.nL(s,a,b,c),d)
s.h0(B.a.q(a,c,a.length))},
ra(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gH().ga4()===p.gE().ga4()){r.iS()
p=r.r
p.a+=" "
r.fX(a,c,b)
if(c.length!==0)p.a+=" "
r.le(b,c,r.aX(new A.nM(r,a,b),q))}else{s=a.b
if(p.gH().ga4()===s){if(B.c.D(c,b))return
A.ES(c,b)
r.iS()
p=r.r
p.a+=" "
r.fX(a,c,b)
r.aX(new A.nN(r,a,b),q)
p.a+="\n"}else if(p.gE().ga4()===s){p=p.gE().gad()
if(p===a.a.length){A.zg(c,b)
return}r.iS()
r.r.a+=" "
r.fX(a,c,b)
r.le(b,c,r.aX(new A.nO(r,!1,a,b),q))
A.zg(c,b)}}},
lc(a,b,c){var s=c?0:1,r=this.r
s=B.a.aT("\u2500",1+b+this.i8(B.a.q(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
r8(a,b){return this.lc(a,b,!0)},
le(a,b,c){this.r.a+="\n"
return},
h0(a){var s,r,q,p
for(s=new A.bP(a),r=t.V,s=new A.a5(s,s.gk(0),r.i("a5<A.E>")),q=this.r,r=r.i("A.E");s.m();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.aT(" ",4)
else{p=A.b6(p)
q.a+=p}}},
h_(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.b.l(b+1)
this.aX(new A.nV(s,this,a),"\x1b[34m")},
fZ(a){return this.h_(a,null,null)},
re(a){return this.h_(null,null,a)},
rd(a){return this.h_(null,a,null)},
iS(){return this.h_(null,null,null)},
i8(a){var s,r,q,p
for(s=new A.bP(a),r=t.V,s=new A.a5(s,s.gk(0),r.i("a5<A.E>")),r=r.i("A.E"),q=0;s.m();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
pR(a){var s,r,q
for(s=new A.bP(a),r=t.V,s=new A.a5(s,s.gk(0),r.i("a5<A.E>")),r=r.i("A.E");s.m();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
nB(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
aX(a,b){return this.nB(a,b,t.z)}}
A.nW.prototype={
$0(){return this.a},
$S:91}
A.nE.prototype={
$1(a){var s=a.d
return new A.c_(s,new A.nD(),A.ap(s).i("c_<1>")).gk(0)},
$S:92}
A.nD.prototype={
$1(a){var s=a.a
return s.gH().ga4()!==s.gE().ga4()},
$S:31}
A.nF.prototype={
$1(a){return a.c},
$S:94}
A.nH.prototype={
$1(a){var s=a.a.gT()
return s==null?new A.j():s},
$S:95}
A.nI.prototype={
$2(a,b){return a.a.S(0,b.a)},
$S:96}
A.nJ.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.n([],t.dg)
for(s=J.at(c),r=s.gv(c),q=t.g7;r.m();){p=r.gn().a
o=p.gaS()
n=A.uS(o,p.gaq(),p.gH().gad())
n.toString
m=B.a.h1("\n",B.a.q(o,0,n)).gk(0)
l=p.gH().ga4()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.c.ga_(b).b)b.push(new A.c0(j,l,d,A.n([],q)));++l}}i=A.n([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.L)(b),++k){j=b[k]
h&1&&A.C(i,16)
B.c.qF(i,new A.nG(j),!0)
f=i.length
for(q=s.aV(c,g),p=q.$ti,q=new A.a5(q,q.gk(0),p.i("a5<S.E>")),n=j.b,p=p.i("S.E");q.m();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gH().ga4()>n)break
i.push(e)}g+=i.length-f
B.c.G(j.d,i)}return b},
$S:97}
A.nG.prototype={
$1(a){return a.a.gE().ga4()<this.a.b},
$S:31}
A.nX.prototype={
$1(a){return!0},
$S:31}
A.nK.prototype={
$0(){this.a.r.a+=B.a.aT("\u2500",2)+">"
return null},
$S:0}
A.nR.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:3}
A.nS.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:3}
A.nT.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.nU.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.aX(new A.nP(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gE().gad()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.aX(new A.nQ(r,o),p.b)}}},
$S:3}
A.nP.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:3}
A.nQ.prototype={
$0(){this.a.r.a+=this.b},
$S:3}
A.nL.prototype={
$0(){var s=this
return s.a.h0(B.a.q(s.b,s.c,s.d))},
$S:0}
A.nM.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gH().gad(),l=n.gE().gad()
n=this.b.a
s=q.i8(B.a.q(n,0,m))
r=q.i8(B.a.q(n,m,l))
m+=s*3
n=(p.a+=B.a.aT(" ",m))+B.a.aT("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:10}
A.nN.prototype={
$0(){return this.a.r8(this.b,this.c.a.gH().gad())},
$S:0}
A.nO.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.aT("\u2500",3)
else r.lc(s.c,Math.max(s.d.a.gE().gad()-1,0),!1)
return q.a.length-p.length},
$S:10}
A.nV.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.uH(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:3}
A.b_.prototype={
l(a){var s=this.a
s="primary "+(""+s.gH().ga4()+":"+s.gH().gad()+"-"+s.gE().ga4()+":"+s.gE().gad())
return s.charCodeAt(0)==0?s:s}}
A.tl.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.uS(o.gaS(),o.gaq(),o.gH().gad())!=null)){s=A.jX(o.gH().gae(),0,0,o.gT())
r=o.gE().gae()
q=o.gT()
p=A.Ek(o.gaq(),10)
o=A.pX(s,A.jX(r,A.xW(o.gaq()),p,q),o.gaq(),o.gaq())}return A.Ce(A.Cg(A.Cf(o)))},
$S:98}
A.c0.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.c.K(this.d,", ")+")"}}
A.bV.prototype={
j4(a){var s=this.a
if(!J.y(s,a.gT()))throw A.b(A.P('Source URLs "'+A.p(s)+'" and "'+A.p(a.gT())+"\" don't match.",null))
return Math.abs(this.b-a.gae())},
S(a,b){var s=this.a
if(!J.y(s,b.gT()))throw A.b(A.P('Source URLs "'+A.p(s)+'" and "'+A.p(b.gT())+"\" don't match.",null))
return this.b-b.gae()},
V(a,b){if(b==null)return!1
return t.hq.b(b)&&J.y(this.a,b.gT())&&this.b===b.gae()},
gJ(a){var s=this.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.ia(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.p(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iah:1,
gT(){return this.a},
gae(){return this.b},
ga4(){return this.c},
gad(){return this.d}}
A.jY.prototype={
j4(a){if(!J.y(this.a.a,a.gT()))throw A.b(A.P('Source URLs "'+A.p(this.gT())+'" and "'+A.p(a.gT())+"\" don't match.",null))
return Math.abs(this.b-a.gae())},
S(a,b){if(!J.y(this.a.a,b.gT()))throw A.b(A.P('Source URLs "'+A.p(this.gT())+'" and "'+A.p(b.gT())+"\" don't match.",null))
return this.b-b.gae()},
V(a,b){if(b==null)return!1
return t.hq.b(b)&&J.y(this.a.a,b.gT())&&this.b===b.gae()},
gJ(a){var s=this.a.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.ia(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.p(p==null?"unknown source":p)+":"+(q.e0(r)+1)+":"+(q.hX(r)+1))+">"},
$iah:1,
$ibV:1}
A.k_.prototype={
n9(a,b,c){var s,r=this.b,q=this.a
if(!J.y(r.gT(),q.gT()))throw A.b(A.P('Source URLs "'+A.p(q.gT())+'" and  "'+A.p(r.gT())+"\" don't match.",null))
else if(r.gae()<q.gae())throw A.b(A.P("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.j4(r))throw A.b(A.P('Text "'+s+'" must be '+q.j4(r)+" characters long.",null))}},
gH(){return this.a},
gE(){return this.b},
gaq(){return this.c}}
A.k0.prototype={
gjl(){return this.a},
l(a){var s,r,q,p=this.b,o="line "+(p.gH().ga4()+1)+", column "+(p.gH().gad()+1)
if(p.gT()!=null){s=p.gT()
r=$.wy()
s.toString
s=o+(" of "+r.lM(s))
o=s}o+=": "+this.a
q=p.u6(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iF:1}
A.eu.prototype={
gae(){var s=this.b
s=A.vm(s.a,s.b)
return s.b},
$ibb:1,
gf5(){return this.c}}
A.ev.prototype={
gT(){return this.gH().gT()},
gk(a){return this.gE().gae()-this.gH().gae()},
S(a,b){var s=this.gH().S(0,b.gH())
return s===0?this.gE().S(0,b.gE()):s},
u6(a){var s=this
if(!t.ol.b(s)&&s.gk(s)===0)return""
return A.AN(s,a).u5()},
V(a,b){if(b==null)return!1
return b instanceof A.ev&&this.gH().V(0,b.gH())&&this.gE().V(0,b.gE())},
gJ(a){return A.el(this.gH(),this.gE(),B.o,B.o)},
l(a){var s=this
return"<"+A.ia(s).l(0)+": from "+s.gH().l(0)+" to "+s.gE().l(0)+' "'+s.gaq()+'">'},
$iah:1}
A.cq.prototype={
gaS(){return this.d}}
A.hd.prototype={
ag(){return"SqliteUpdateKind."+this.b}}
A.bW.prototype={
gJ(a){return A.el(this.a,this.b,this.c,B.o)},
V(a,b){if(b==null)return!1
return b instanceof A.bW&&b.a===this.a&&b.b===this.b&&b.c===this.c},
l(a){return"SqliteUpdate: "+this.a.l(0)+" on "+this.b+", rowid = "+this.c}}
A.cQ.prototype={
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
p=p!=null?s+(", parameters: "+J.aB(p,new A.q0(),t.N).K(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iF:1}
A.q0.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.am(a)},
$S:99}
A.mO.prototype={
r3(){var s=this,r=s.d
return r==null?s.d=new A.d4(s,A.n([],t.fU),new A.mX(s),new A.mY(s),t.jy):r},
qJ(){var s=this,r=s.e
return r==null?s.e=new A.d4(s,A.n([],t.lw),new A.mU(s),new A.mV(s),t.lU):r},
nD(){var s=this,r=s.f
return r==null?s.f=new A.d4(s,A.n([],t.lw),new A.mQ(s),new A.mR(s),t.af):r},
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
r=s.jO()
q=r!==0?A.we(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
av(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.w(A.u("This database has already been closed"))
r=p.b
q=r.a
s=q.ep(B.f.u(a),1)
q=q.d
r=A.yW(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.wn(p,r,"executing",a,b)}else{s=p.hD(a,!0)
try{s.j9(new A.dr(b))}finally{s.p()}}},
Z(a){return this.av(a,B.v)},
qk(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.w(A.u("This database has already been closed"))
s=B.f.u(a)
r=e.b
q=r.a
p=q.eo(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.qP(r,p,n,o)
l=A.n([],t.lE)
k=new A.mS(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.jP(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.wn(e,n,"preparing statement",a,null)}n=q.buffer
h=B.b.N(n.byteLength,4)
g=new Int32Array(n,0,h)[B.b.a2(o,2)]-p
f=i.a
if(f!=null)l.push(new A.ew(f,e,new A.ca(!1).c7(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.jP(j,r-j,0)
n=q.buffer
h=B.b.N(n.byteLength,4)
j=new Int32Array(n,0,h)[B.b.a2(o,2)]-p
f=i.a
if(f!=null){l.push(new A.ew(f,e,""))
k.$0()
throw A.b(A.aU(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.aU(a,"sql","Has trailing data after the first sql statement:"))}}m.p()
return l},
hD(a,b){var s=this.qk(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.aU(a,"sql","Must contain an SQL statement."))
return B.c.gC(s)},
uJ(a){return this.hD(a,!1)},
jK(a,b){var s,r=this.hD(a,!0)
try{s=r.jL(new A.dr(b))
return s}finally{r.p()}},
hZ(a){return this.jK(a,B.v)}}
A.mX.prototype={
$0(){var s=this.a,r=s.b
r.a.lu(r.b,new A.mW(s))},
$S:0}
A.mW.prototype={
$3(a,b,c){var s=A.BD(a)
if(s==null)return
this.a.d.j3(new A.bW(s,b,c))},
$S:100}
A.mY.prototype={
$0(){var s=this.a.b
s.a.lu(s.b,null)
return null},
$S:0}
A.mU.prototype={
$0(){var s=this.a,r=s.b
r.a.lt(r.b,new A.mT(s))
return null},
$S:0}
A.mT.prototype={
$0(){this.a.e.j3(null)},
$S:0}
A.mV.prototype={
$0(){var s=this.a.b
s.a.lt(s.b,null)
return null},
$S:0}
A.mQ.prototype={
$0(){var s=this.a,r=s.b
r.a.ls(r.b,new A.mP(s))
return null},
$S:0}
A.mP.prototype={
$0(){var s=this.a.f
s.j3(null)
return 0},
$S:10}
A.mR.prototype={
$0(){var s=this.a.b
s.a.ls(s.b,null)
return null},
$S:0}
A.mS.prototype={
$0(){var s,r,q,p,o,n
this.a.p()
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.L)(s),++q){p=s[q]
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
A.d4.prototype={
gcG(){var s=this.r
return s==null?this.r=this.o3(!1):s},
o3(a){return new A.cz(new A.tY(this,!1),this.$ti.i("cz<1>"))},
j3(a){var s,r,q,p,o,n,m,l
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.L)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.w(o.bk())
if((n&1)!==0){m=o.a;((n&8)!==0?m.c:m).b9(a)}}else{n=o.b
if(n>=4)A.w(o.bk())
if((n&1)!==0)o.cf(a)
else if((n&3)===0){o=o.fe()
n=new A.cZ(a)
l=o.c
if(l==null)o.b=o.c=n
else{l.sdS(n)
o.c=n}}}}},
p(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.L)(s),++q)s[q].a.p()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.tY.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.p()
return}s=this.b
r=new A.tZ(q,a,s)
a.r=a.e=new A.u_(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(cM<1>)")}}
A.tZ.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.hM(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.u_.prototype={
$0(){var s=this.a,r=s.c
B.c.O(r,new A.hM(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.pY.prototype={
lD(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.BC(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
uA(a,b){var s,r,q,p,o,n,m,l,k,j
this.lD()
switch(2){case 2:break}s=this.a
r=s.a
q=r.ep(B.f.u(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.ep(B.f.u(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.cm(r.b.buffer,0,null)[B.b.a2(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.j()
k=new A.qI(r,l,o)
r=r.r
if(r!=null)r.ll(k,l,o)
if(m!==0){j=A.we(s,k,m,"opening the database",null,null)
k.jO()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.mO(s,k,!1)}}
A.ew.prototype={
gnC(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.n([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.kp(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.ca(!1).c7(o,0,null,!0))}return q},
gqZ(){return null},
bi(a,b){A.wn(this.b,a,b,this.d,this.e)},
kn(){if(this.r||this.b.r)throw A.b(A.u("Tried to operate on a released prepared statement"))},
nZ(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.d5()
if(s!==0?s!==101:q)r.bi(s,"executing statement")},
qN(){var s,r,q,p,o,n,m=this,l=A.n([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.qz(o))
l.push(p)}m.d5()
if(p!==0?p!==101:k)m.bi(p,"selecting from statement")
n=m.gnC()
m.gqZ()
k=new A.jP(l,n,B.U)
k.nx()
return k},
qz(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.Z(r.Number(s)):A.vW(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.mQ(a)
case 4:return s.mP(a)
case 5:default:return null}},
nq(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.w(A.aU(a,"parameters","Expected "+A.p(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.nr(a[s-1],s)
this.e=a},
nr(a,b){var s,r,q=this
$label0$0:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break $label0$0}if(A.az(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break $label0$0}if(a instanceof A.ay){s=q.a
if(a.S(0,$.zq())<0||a.S(0,$.zp())>0)A.w(A.wW("BigInt value exceeds the range of 64 bits"))
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a.l(0)))
break $label0$0}if(A.bN(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break $label0$0}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break $label0$0}if(typeof a=="string"){s=q.a.mO(b,a)
break $label0$0}if(t.L.b(a)){s=q.a.mN(b,a)
break $label0$0}s=q.np(a,b)
break $label0$0}if(s!==0)q.bi(s,"binding parameter")},
np(a,b){throw A.b(A.aU(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
k_(a){$label0$0:{if(a instanceof A.dr){this.nq(a.a)
break $label0$0}if(a instanceof A.iE)a.a.$1(this)}},
d5(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
p(){var s,r,q=this
if(!q.r){q.r=!0
q.d5()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.lw(s.d)}},
jL(a){var s=this
s.kn()
s.d5()
s.k_(a)
return s.qN()},
j9(a){var s=this
s.kn()
s.d5()
s.k_(a)
s.nZ()}}
A.iZ.prototype={
hS(a,b){return this.d.I(a)?1:0},
jB(a,b){this.d.O(0,a)},
jC(a){return new v.G.URL(a,"file:///").pathname},
dc(a,b){var s,r=a.a
if(r==null)r=A.x4(this.b,"/")
s=this.d
if(!s.I(r))if((b&4)!==0)s.j(0,r,new A.bZ(new Uint8Array(0),0))
else throw A.b(A.eG(14))
return new A.f_(new A.kN(this,r,(b&8)!==0),0)},
jE(a){}}
A.kN.prototype={
lQ(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.d.a6(a,0,s,J.de(B.d.gaz(r.a),0,r.b),b)
return s},
jA(){return this.d>=2?1:0},
hT(){if(this.c)this.a.d.O(0,this.b)},
eZ(){return this.a.d.h(0,this.b).b},
jD(a){this.d=a},
jF(a){},
f_(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.bZ(new Uint8Array(0),0))
s.h(0,r).sk(0,a)}else q.sk(0,a)},
jG(a){this.d=a},
e_(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.bZ(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sk(0,s)
p.aa(0,b,s,a)}}
A.v3.prototype={
$1(a){return a.length!==0},
$S:21}
A.mx.prototype={
nx(){var s,r,q,p,o=A.G(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.L)(s),++q){p=s[q]
o.j(0,p,B.c.dP(s,p))}this.c=o}}
A.jP.prototype={
gv(a){return new A.tJ(this)},
h(a,b){return new A.bH(this,A.cK(this.d[b],t.X))},
j(a,b,c){throw A.b(A.a0("Can't change rows from a result set"))},
gk(a){return this.d.length},
$iB:1,
$im:1,
$iq:1}
A.bH.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.az(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gR(){return this.a.a},
gb6(){return this.b},
$iN:1}
A.tJ.prototype={
gn(){var s=this.a
return new A.bH(s,A.cK(s.d[this.b],t.X))},
m(){return++this.b<this.a.d.length}}
A.l_.prototype={}
A.l0.prototype={}
A.l2.prototype={}
A.l3.prototype={}
A.p5.prototype={
ag(){return"OpenMode."+this.b}}
A.dj.prototype={}
A.dr.prototype={}
A.iE.prototype={}
A.cw.prototype={
l(a){return"VfsException("+this.a+")"},
$iF:1}
A.hc.prototype={}
A.aH.prototype={}
A.it.prototype={}
A.is.prototype={
ghU(){return 0},
m5(a,b){return 12},
ghW(){return 4096},
hV(a,b){var s=this.lQ(a,b),r=a.length
if(s<r){B.d.he(a,s,r,0)
throw A.b(B.ck)}},
$iaX:1,
$ihl:1}
A.dM.prototype={}
A.v8.prototype={
$0(){var s,r,q
for(s=this.a;!s.gB(0);){if(s.b===0)A.w(A.u("No such element"))
r=s.c
q=r.a
q.toString
q.iQ(A.o(r).i("aP.E").a(r))
r.d.$0()}},
$S:0}
A.v6.prototype={
$1(a){var s=this.a,r=s.b
s.fQ(s.c,new A.dM(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:14}
A.v7.prototype={
$4(a,b,c,d){this.a.$1(c.eq(d))},
$S:102}
A.qN.prototype={}
A.qI.prototype={
jO(){var s=this.a,r=s.r
if(r!=null)r.lw(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.qP.prototype={
p(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
jP(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.yW(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.cm(o.b.buffer,0,null)[B.b.a2(n,2)]
if(s===0)r=null
else{n=new A.j()
r=new A.qO(s,o,n)
o=o.w
if(o!=null)o.ll(r,s,n)}return new A.kY(r,p)}}
A.qO.prototype={
mN(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.eo(b),J.ar(b))},
mO(a,b){var s=B.f.u(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.eo(s),s.length)},
mP(a){var s,r=this.c,q=this.b,p=r.d,o=p.sqlite3_column_bytes(q,a)
q=p.sqlite3_column_blob(q,a)
s=new Uint8Array(o)
B.d.cE(s,0,A.bq(r.b.buffer,q,o))
return s},
mQ(a){var s=this.c
return A.dK(s.b,s.d.sqlite3_column_text(this.b,a))}}
A.dI.prototype={}
A.cW.prototype={}
A.eI.prototype={
sk(a,b){throw A.b(A.a0("Setting length in WasmValueList"))},
h(a,b){A.cm(this.a.b.buffer,0,null)
B.b.a2(this.c+b*4,2)
return new A.cW()},
j(a,b,c){throw A.b(A.a0("Setting element in WasmValueList"))},
gk(a){return this.b}}
A.iF.prototype={
us(a){var s,r,q=this.b
q===$&&A.x()
s="[sqlite3] "+A.dK(q,a)
r=$.zd
if(r==null)A.wm(s)
else r.$1(s)},
uq(a,b){var s,r=new A.b2(A.vk(A.Z(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.x()
s=A.Bf(q.buffer,b,8)
s.$flags&2&&A.C(s)
s[0]=A.vE(r)
s[1]=A.vC(r)
s[2]=A.vB(r)
s[3]=A.pw(r)
s[4]=A.vD(r)-1
s[5]=A.vF(r)-1900
s[6]=B.b.ar(A.Bm(r),7)},
vU(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.x()
s=new A.hc(A.vP(j,b,k))
try{r=a.dc(s,d)
if(e!==0){p=r.b
o=A.cm(j.buffer,0,k)
n=B.b.a2(e,2)
o.$flags&2&&A.C(o)
o[n]=p}p=A.cm(j.buffer,0,k)
o=B.b.a2(c,2)
p.$flags&2&&A.C(p)
p[o]=0
m=r.a
return m}catch(l){p=A.E(l)
if(p instanceof A.cw){q=p
p=q.a
j=A.cm(j.buffer,0,k)
o=B.b.a2(c,2)
j.$flags&2&&A.C(j)
j[o]=p}else{j=j.buffer
j=A.cm(j,0,k)
p=B.b.a2(c,2)
j.$flags&2&&A.C(j)
j[p]=1}}return k},
vJ(a,b,c){var s=this.b
s===$&&A.x()
return A.bx(new A.mC(a,A.dK(s,b),c))},
vB(a,b,c,d){var s=this.b
s===$&&A.x()
return A.bx(new A.mz(this,a,A.dK(s,b),c,d))},
vQ(a,b,c,d){var s=this.b
s===$&&A.x()
return A.bx(new A.mE(this,a,A.dK(s,b),c,d))},
vW(a,b,c){return A.bx(new A.mG(this,c,b,a))},
w0(a,b){return A.bx(new A.mI(a,b))},
vH(a,b){var s,r=Date.now(),q=this.b
q===$&&A.x()
s=v.G.BigInt(r)
A.vs(A.xe(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
vF(a){return A.bx(new A.mB(a))},
vY(a,b,c,d){return A.bx(new A.mH(this,a,b,c,d))},
w8(a,b,c,d){return A.bx(new A.mM(this,a,b,c,d))},
w4(a,b){return A.bx(new A.mK(a,b))},
w2(a,b){return A.bx(new A.mJ(a,b))},
vO(a,b){return A.bx(new A.mD(this,a,b))},
vS(a,b){return A.bx(new A.mF(a,b))},
w6(a,b){return A.bx(new A.mL(a,b))},
vD(a,b){return A.bx(new A.mA(this,a,b))},
vK(a){return a.ghU()},
vM(a,b,c){if(t.j2.b(a))return a.m5(b,c)
return 12},
vZ(a){if(t.j2.b(a))return a.ghW()
return 4096},
t4(a){a.$0()},
t_(a){return a.$0()},
t2(a,b,c,d,e){var s=this.b
s===$&&A.x()
a.$3(b,A.dK(s,d),A.Z(v.G.Number(e)))},
ta(a,b,c,d){var s=a.gwg(),r=this.a
r===$&&A.x()
s.$2(new A.dI(),new A.eI(r,c,d))},
te(a,b,c,d){var s=a.gwi(),r=this.a
r===$&&A.x()
s.$2(new A.dI(),new A.eI(r,c,d))},
tc(a,b,c,d){var s=a.gwh(),r=this.a
r===$&&A.x()
s.$2(new A.dI(),new A.eI(r,c,d))},
tg(a,b){var s=a.gwj()
this.a===$&&A.x()
s.$1(new A.dI())},
t8(a,b){var s=a.gwf()
this.a===$&&A.x()
s.$1(new A.dI())},
t6(a,b,c,d,e){var s,r,q=this.b
q===$&&A.x()
s=A.vP(q,c,b)
r=A.vP(q,e,d)
return a.gwc().$2(s,r)},
rY(a,b){return a.$1(b)},
rW(a,b){return a.gwe().$1(b)},
rU(a,b,c){return a.gwd().$2(b,c)}}
A.mC.prototype={
$0(){return this.a.jB(this.b,this.c)},
$S:0}
A.mz.prototype={
$0(){var s,r=this,q=r.b.hS(r.c,r.d),p=r.a.b
p===$&&A.x()
p=A.cm(p.buffer,0,null)
s=B.b.a2(r.e,2)
p.$flags&2&&A.C(p)
p[s]=q},
$S:0}
A.mE.prototype={
$0(){var s,r,q=this,p=B.f.u(q.b.jC(q.c)),o=p.length
if(o>q.d)throw A.b(A.eG(14))
s=q.a.b
s===$&&A.x()
s=A.bq(s.buffer,0,null)
r=q.e
B.d.cE(s,r,p)
s.$flags&2&&A.C(s)
s[r+o]=0},
$S:0}
A.mG.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.x()
s=A.bq(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.wI(s,q.b)
else return A.wI(s,null)},
$S:0}
A.mI.prototype={
$0(){this.a.jE(A.dm(this.b,0,0))},
$S:0}
A.mB.prototype={
$0(){return this.a.hT()},
$S:0}
A.mH.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.x()
s.b.hV(A.bq(r.buffer,s.c,s.d),A.Z(v.G.Number(s.e)))},
$S:0}
A.mM.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.x()
s.b.e_(A.bq(r.buffer,s.c,s.d),A.Z(v.G.Number(s.e)))},
$S:0}
A.mK.prototype={
$0(){return this.a.f_(A.Z(v.G.Number(this.b)))},
$S:0}
A.mJ.prototype={
$0(){return this.a.jF(this.b)},
$S:0}
A.mD.prototype={
$0(){var s,r=this.b.eZ(),q=this.a.b
q===$&&A.x()
q=A.cm(q.buffer,0,null)
s=B.b.a2(this.c,2)
q.$flags&2&&A.C(q)
q[s]=r},
$S:0}
A.mF.prototype={
$0(){return this.a.jD(this.b)},
$S:0}
A.mL.prototype={
$0(){return this.a.jG(this.b)},
$S:0}
A.mA.prototype={
$0(){var s,r=this.b.jA(),q=this.a.b
q===$&&A.x()
q=A.cm(q.buffer,0,null)
s=B.b.a2(this.c,2)
q.$flags&2&&A.C(q)
q[s]=r},
$S:0}
A.fn.prototype={
a0(a,b,c,d){var s,r=null,q={},p=A.aT(A.vs(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.vJ(r,r,r,!0,this.$ti.c)
q.a=null
s=new A.lE(q,this,p,o)
o.d=s
o.f=new A.lF(q,o,s)
return new A.aY(o,A.o(o).i("aY<1>")).a0(a,b,c,d)},
bs(a,b,c){return this.a0(a,null,b,c)}}
A.lE.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a2(q,t.m).bY(new A.lG(p,r.b,s,r),s.grj(),t.P)},
$S:0}
A.lG.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.p()
q.a.a=null}else{r.t(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gb1().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:16}
A.lF.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gb1().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.dQ.prototype={
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
return s==null?A.w(A.u("Await moveNext() first")):s},
m(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.r($.v,t.k)
s=new A.a8(o,t.ex)
r=p.d
q=t.m
p.b=A.aZ(r,"success",new A.rP(p,s),!1,q)
p.c=A.aZ(r,"error",new A.rQ(p,s),!1,q)
return o}}
A.rP.prototype={
$1(a){var s,r=this.a
r.A()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.ai(s!=null)},
$S:2}
A.rQ.prototype={
$1(a){var s=this.a
s.A()
s=s.d.error
if(s==null)s=a
this.b.ao(s)},
$S:2}
A.mb.prototype={
$1(a){this.a.ai(this.c.a(this.b.result))},
$S:2}
A.mc.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.ao(s)},
$S:2}
A.mg.prototype={
$1(a){this.a.ai(this.c.a(this.b.result))},
$S:2}
A.mh.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.ao(s)},
$S:2}
A.mi.prototype={
$1(a){this.a.ao(new A.bs("IndexedDB open blocked"))},
$S:2}
A.nm.prototype={
$1(a){return A.aT(a[1])},
$S:124}
A.qJ.prototype={
rI(){var s={}
s.dart=new A.qK(this).$0()
return s},
hu(a){return this.ul(a)},
ul(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hu=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a2(v.G.WebAssembly.instantiateStreaming(a,p.rI()),t.m),$async$hu)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hu,r)}}
A.qK.prototype={
$0(){var s=this.a.a,r=A.aT(v.G.Object),q=A.aT(r.create.apply(r,[null]))
q.error_log=A.cc(s.gur())
q.localtime=A.bw(s.guo())
q.xOpen=A.w6(s.gvT())
q.xDelete=A.ln(s.gvI())
q.xAccess=A.fa(s.gvA())
q.xFullPathname=A.fa(s.gvP())
q.xRandomness=A.ln(s.gvV())
q.xSleep=A.bw(s.gw_())
q.xCurrentTimeInt64=A.bw(s.gvG())
q.xClose=A.cc(s.gvE())
q.xRead=A.fa(s.gvX())
q.xWrite=A.fa(s.gw7())
q.xTruncate=A.bw(s.gw3())
q.xSync=A.bw(s.gw1())
q.xFileSize=A.bw(s.gvN())
q.xLock=A.bw(s.gvR())
q.xUnlock=A.bw(s.gw5())
q.xCheckReservedLock=A.bw(s.gvC())
q.xDeviceCharacteristics=A.cc(s.ghU())
q.xFileControl=A.ln(s.gvL())
q.xSectorSize=A.cc(s.ghW())
q["dispatch_()v"]=A.cc(s.gt3())
q["dispatch_()i"]=A.cc(s.grZ())
q.dispatch_update=A.w6(s.gt1())
q.dispatch_xFunc=A.fa(s.gt9())
q.dispatch_xStep=A.fa(s.gtd())
q.dispatch_xInverse=A.fa(s.gtb())
q.dispatch_xValue=A.bw(s.gtf())
q.dispatch_xFinal=A.bw(s.gt7())
q.dispatch_compare=A.w6(s.gt5())
q.dispatch_busy=A.bw(s.grX())
q.changeset_apply_filter=A.bw(s.grV())
q.changeset_apply_conflict=A.ln(s.grT())
return q},
$S:36}
A.eH.prototype={}
A.lH.prototype={
hz(){var s=0,r=A.h(t.H),q=this,p,o
var $async$hz=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.r($.v,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.cc(new A.lK(o))
new A.a8(p,t.h1).ai(A.Av(o,t.m))
s=2
return A.a(p,$async$hz)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$hz,r)},
dB(a,b){return this.qK(a,b)},
qK(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$dB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.A_(),b)
o=A.Ch(p)
s=2
return A.a(A.ET(new A.lJ(a,o,p),t.mj),$async$dB)
case 2:s=3
return A.a(o.b.a,$async$dB)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$dB,r)},
qj(a){return this.dB(new A.lI(a),"readwrite")}}
A.lK.prototype={
$1(a){var s=A.aT(this.a.result)
if(J.y(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:16}
A.lJ.prototype={
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
$S:126}
A.lI.prototype={
$1(a){return this.m6(a)},
m6(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].aB(a),$async$$1)
case 5:case 3:p.length===o||(0,A.L)(p),++n
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:17}
A.hC.prototype={
ne(a){var s=A.ut(new A.to(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.ut(new A.tp(this))},
iH(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.n([a,c],s),A.n([a,b],s))},
qw(a){return this.iH(a,9007199254740992,0)},
qx(a,b){return this.iH(a,9007199254740992,b)},
ht(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$ht=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.G(t.N,t.S)
k=new A.dQ(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.m(),$async$ht)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.w(A.u("Await moveNext() first"))
n=o.key
n.toString
A.t(n)
m=o.primaryKey
m.toString
l.j(0,n,A.Z(A.dX(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ht,r)},
hd(a){return this.tC(a)},
tC(a){var s=0,r=A.h(t.I),q,p=this,o
var $async$hd=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.c3(p.d.index("fileName").getKey(a),t.i),$async$hd)
case 3:q=o.Z(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hd,r)},
iI(a){return A.c3(this.d.get(a),t.B).bh(new A.tn(a),t.m)},
e2(a,b){return this.mR(a,b)},
mR(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$e2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.iI(a),$async$e2)
case 3:h=d
g=h.length
f=new A.bZ(new Uint8Array(g),g)
e=new A.dQ(p.e.openCursor(p.qw(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.m(),$async$e2)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.w(A.u("Await moveNext() first"))
k=n.a(l.key)
j=A.Z(A.dX(k[1]))
if(j>=h.length){s=5
break}i=new A.tq(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.pP(A.aT(l.value)).bh(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e2,r)},
h8(a){return this.rH(a)},
rH(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$h8=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.w(A.u("IDB transaction already completed"))
o=A
s=3
return A.a(A.c3(p.d.put({name:a,length:0}),t.i),$async$h8)
case 3:q=o.Z(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h8,r)},
da(a,b){return this.vu(a,b)},
vu(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$da=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.w(A.u("IDB transaction already completed"))
s=2
return A.a(q.iI(a),$async$da)
case 2:p=d
o=b.b
n=A.o(o).i("ai<1>")
m=A.Q(new A.ai(o,n),n.i("m.E"))
B.c.b7(m)
s=3
return A.a(A.x3(new A.ab(m,new A.tr(new A.ts(q,a),b),A.ap(m).i("ab<1,J<~>>")),t.H),$async$da)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.dQ(q.d.openCursor(a),t.R)
s=6
return A.a(l.m(),$async$da)
case 6:s=7
return A.a(A.c3(l.gn().update({name:p.name,length:b.c}),t.X),$async$da)
case 7:case 5:return A.e(null,r)}})
return A.f($async$da,r)},
d9(a,b,c){return this.vi(0,b,c)},
vi(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$d9=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.w(A.u("IDB transaction already completed"))
s=2
return A.a(q.iI(b),$async$d9)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.c3(q.e.delete(q.qx(b,B.b.N(c,4096)*4096)),t.X),$async$d9)
case 5:case 4:o=new A.dQ(q.d.openCursor(b),t.R)
s=6
return A.a(o.m(),$async$d9)
case 6:s=7
return A.a(A.c3(o.gn().update({name:p.name,length:c}),t.X),$async$d9)
case 7:return A.e(null,r)}})
return A.f($async$d9,r)},
hb(a){return this.rS(a)},
rS(a){var s=0,r=A.h(t.H),q=this,p
var $async$hb=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.w(A.u("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.x3(A.n([A.c3(q.e.delete(q.iH(a,9007199254740992,0)),p),A.c3(q.d.delete(a),p)],t.iw),t.H),$async$hb)
case 2:return A.e(null,r)}})
return A.f($async$hb,r)}}
A.to.prototype={
$0(){this.a.b.am()},
$S:3}
A.tp.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.ao(r)},
$S:3}
A.tn.prototype={
$1(a){if(a==null)throw A.b(A.aU(this.a,"fileId","File not found in database"))
else return a},
$S:128}
A.tq.prototype={
$1(a){var s=this.a
s.cE(s,this.b,J.de(a,0,this.c))},
$S:129}
A.ts.prototype={
mx(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.c3(p.openCursor(v.G.IDBKeyRange.only(A.n([o,a],n))),t.B),$async$$2)
case 2:m=d
l=t.a.a(B.d.gaz(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.c3(p.put(l,A.n([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.c3(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.mx(a,b)},
$S:130}
A.tr.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:131}
A.t0.prototype={
r2(a,b,c){B.d.cE(this.b.lO(a,new A.t1(this,a)),b,c)},
rm(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.b.N(q,4096)
o=B.b.ar(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.r2(p*4096,o,J.de(B.d.gaz(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.t1.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.d.cE(s,0,J.de(B.d.gaz(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:132}
A.kV.prototype={}
A.cG.prototype={
ei(a){var s=this
if(s.e||s.d.a==null)A.w(A.eG(10))
if(a.jg(s.x)){s.ci(!0)
return a.d.a}else return A.cg(null,t.H)},
ci(a){return this.qY(a)},
qY(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$ci=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gB(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.Q(o,o.$ti.i("m.E"))
o.aK(0)
s=5
return A.a(p.d.qj(n).aD(new A.nZ(p,n,a)),$async$ci)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$ci,r)},
p(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.ei(new A.hA(new A.o_(),new A.a8(new A.r($.v,t.D),t.F)))
p.e=!0
p.ci(!1)
q=o
s=1
break}else{n=p.x
if(!n.gB(0)){q=n.ga_(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$p,r)},
dn(a,b){return this.o1(a,b)},
o1(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$dn=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(a.hd(b),$async$dn)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$dn,r)},
ec(){var s=0,r=A.h(t.H),q=this,p
var $async$ec=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.n([],t.iw)
s=2
return A.a(q.d.dB(new A.nY(q,p),"readonly"),$async$ec)
case 2:s=3
return A.a(A.AJ(p,t.H),$async$ec)
case 3:return A.e(null,r)}})
return A.f($async$ec,r)},
tG(){return this.ci(!1)},
hS(a,b){return this.w.d.I(a)?1:0},
jB(a,b){var s=this
s.w.d.O(0,a)
if(!s.y.O(0,a))s.ei(new A.hu(s,a,new A.a8(new A.r($.v,t.D),t.F)))},
jC(a){return new v.G.URL(a,"file:///").pathname},
dc(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.x4(p.b,"/")
s=p.w
r=s.d.I(o)?1:0
q=s.dc(new A.hc(o),b)
if(r===0)if((b&8)!==0)p.y.t(0,o)
else p.ei(new A.eP(p,o,new A.a8(new A.r($.v,t.D),t.F)))
return new A.f_(new A.kO(p,q.a,o),0)},
jE(a){}}
A.nZ.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.L)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.w(A.u("Future already completed"))
p.c4(null)}o.ci(this.c)},
$S:3}
A.o_.prototype={
$1(a){return this.mb(a)},
mb(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:17}
A.nY.prototype={
$1(a){return this.ma(a)},
ma(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.ht(),$async$$1)
case 2:m=c
l=q.a
l.z.G(0,m)
p=m.gbP(),p=p.gv(p),o=q.b,l=l.w.d
case 3:if(!p.m()){s=4
break}n=p.gn()
k=l
j=n.a
s=5
return A.a(a.e2(n.b,o),$async$$1)
case 5:k.j(0,j,c)
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:17}
A.kO.prototype={
hV(a,b){this.b.hV(a,b)},
ghU(){return 0},
ghW(){return 4096},
jA(){return this.b.d>=2?1:0},
hT(){},
eZ(){return this.b.eZ()},
jD(a){this.b.d=a
return null},
jF(a){},
m5(a,b){return 12},
f_(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.w(A.eG(10))
s.b.f_(a)
if(!r.y.D(0,s.c))r.ei(new A.hA(new A.tm(s,a),new A.a8(new A.r($.v,t.D),t.F)))},
jG(a){this.b.d=a
return null},
e_(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.w(A.eG(10))
s=m.c
if(l.y.D(0,s)){m.b.e_(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.bZ(new Uint8Array(0),0)
q=J.de(B.d.gaz(r.a),0,r.b)
m.b.e_(a,b)
p=new Uint8Array(a.length)
B.d.cE(p,0,a)
o=A.n([],t.p8)
n=$.v
o.push(new A.kV(b,p))
l.ei(new A.f7(l,s,q,o,new A.a8(new A.r(n,t.D),t.F)))},
$iaX:1,
$ihl:1}
A.tm.prototype={
$1(a){return this.mw(a)},
mw(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.dn(a,o.c),$async$$1)
case 3:q=n.d9(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:17}
A.aJ.prototype={
jg(a){a.fQ(a.c,this,!1)
return!0}}
A.hA.prototype={
aB(a){return this.w.$1(a)}}
A.hu.prototype={
jg(a){var s,r,q,p
if(!a.gB(0)){s=a.ga_(0)
for(r=this.x;s!=null;)if(s instanceof A.hu)if(s.x===r)return!1
else s=s.geH()
else if(s instanceof A.f7){q=s.geH()
if(s.x===r){p=s.a
p.toString
p.iQ(A.o(s).i("aP.E").a(s))}s=q}else if(s instanceof A.eP){if(s.x===r){r=s.a
r.toString
r.iQ(A.o(s).i("aP.E").a(s))
return!1}s=s.geH()}else break}a.fQ(a.c,this,!1)
return!0},
aB(a){return this.v9(a)},
v9(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aB=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.dn(a,o),$async$aB)
case 2:n=c
p.z.O(0,o)
s=3
return A.a(a.hb(n),$async$aB)
case 3:return A.e(null,r)}})
return A.f($async$aB,r)}}
A.eP.prototype={
aB(a){return this.v8(a)},
v8(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aB=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.h8(p),$async$aB)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aB,r)}}
A.f7.prototype={
jg(a){var s,r=a.b===0?null:a.ga_(0)
for(s=this.x;r!=null;)if(r instanceof A.f7)if(r.x===s){B.c.G(r.z,this.z)
return!1}else r=r.geH()
else if(r instanceof A.eP){if(r.x===s)break
r=r.geH()}else break
a.fQ(a.c,this,!1)
return!0},
aB(a){return this.va(a)},
va(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aB=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.t0(m,A.G(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.L)(m),++o){n=m[o]
l.rm(n.a,n.b)}k=a
s=3
return A.a(q.w.dn(a,q.x),$async$aB)
case 3:s=2
return A.a(k.da(c,l),$async$aB)
case 2:return A.e(null,r)}})
return A.f($async$aB,r)}}
A.eb.prototype={
ag(){return"FileType."+this.b}}
A.et.prototype={
bq(){var s=this.d
if(s!=null)return s
throw A.b(A.u("VFS closed"))},
hS(a,b){var s=$.va().h(0,a)
if(s==null)return this.e.d.I(a)?1:0
else return this.bq().co(s)?1:0},
jB(a,b){var s=$.va().h(0,a)
if(s==null){this.e.d.O(0,a)
return null}else this.bq().eD(s,!1)},
jC(a){return new v.G.URL(a,"file:///").pathname},
dc(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.dc(a,b)
s=$.va().h(0,p)
if(s==null)return q.e.dc(a,b)
r=q.bq()
if(!r.co(s))if((b&4)!==0){r.cX(s).truncate(0)
r.eD(s,!0)}else throw A.b(B.cj)
return new A.f_(new A.l8(q,s,(b&8)!==0),0)},
jE(a){},
p(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cu(a,b){return this.uD(a,b)},
bu(a){return this.cu(a,!1)},
uD(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.pV(a,b)
s=2
return A.a(m.$1("meta"),$async$cu)
case 2:l=d
k=J.y(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$cu)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$cu)
case 4:o=d
n=q.d=new A.tG(new Uint8Array(2),l,p,o)
if(k){n.eD(B.at,p.getSize()>0)
n.eD(B.au,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cu,r)}}
A.pV.prototype={
mu(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.m
s=3
return A.a(A.a2(p.a.getFileHandle(a,{create:!0}),o),$async$$1)
case 3:n=c
s=4
return A.a(A.a2(p.b?n.createSyncAccessHandle({mode:"readwrite-unsafe"}):n.createSyncAccessHandle(),o),$async$$1)
case 4:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$1(a){return this.mu(a)},
$S:133}
A.l8.prototype={
lQ(a,b){return A.x1(this.a.bq().cX(this.b),a,{at:b})},
jA(){return this.d>=2?1:0},
hT(){var s=this.a,r=this.b
s.bq().cX(r).flush()
if(this.c)s.bq().eD(r,!1)},
eZ(){return this.a.bq().cX(this.b).getSize()},
jD(a){this.d=a},
jF(a){this.a.bq().cX(this.b).flush()},
f_(a){this.a.bq().cX(this.b).truncate(a)},
jG(a){this.d=a},
e_(a,b){if(A.x2(this.a.bq().cX(this.b),a,{at:b})<a.length)throw A.b(B.cl)}}
A.tG.prototype={
co(a){var s=this.a
A.x1(this.b,s,{at:0})
return s[a.a]!==0},
eD(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.C(s)
s[a.a]=r
A.x2(this.b,s,{at:0})},
cX(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.qD.prototype={
nb(a,b){var s=this,r=s.c
r.a!==$&&A.zl()
r.a=s
r=t.S
A.t2(new A.qE(s),r)
A.t2(new A.qF(s),r)
s.r=A.t2(new A.qG(s),r)
s.w=A.t2(new A.qH(s),r)},
ep(a,b){var s=J.I(a),r=this.d.dart_sqlite3_malloc(s.gk(a)+b),q=A.bq(this.b.buffer,0,null)
B.d.aa(q,r,r+s.gk(a),a)
B.d.he(q,r+s.gk(a),r+s.gk(a)+b,0)
return r},
eo(a){return this.ep(a,0)},
lu(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
ls(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
lt(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.qE.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:8}
A.qF.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:8}
A.qG.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:8}
A.qH.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:8}
A.fs.prototype={}
A.pz.prototype={
n7(a){var s,r=this,q=r.a
q.start()
r.c=A.aZ(q,"message",new A.pD(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.id()
q.toString
A.hm(q,s,null,null,!1).bh(new A.pE(r),t.P)}},
ix(a){return this.oR(a)},
oR(a){var s=0,r=A.h(t.H),q=this
var $async$ix=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.Eo(a,new A.pA(q),q.gtX(),new A.pB(q),new A.pC(q))
return A.e(null,r)}})
return A.f($async$ix,r)},
f4(a,b,c){return this.mI(a,b,c,c)},
mI(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$f4=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.Am(null))
o=p.e++
n=new A.r($.v,t.a7)
p.f.j(0,o,new A.a8(n,t.h1))
a.i=o
p.a.postMessage(a,A.fg(a))
s=3
return A.a(n,$async$f4)
case 3:m=f
if(J.y(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.Bu(m))
case 1:return A.e(q,r)}})
return A.f($async$f4,r)},
pV(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.A()
s=q.d
if(s!=null)s.A()
for(s=q.f,r=new A.bS(s,s.r,s.e);r.m();)r.d.ao(new A.fq(a))
s.aK(0)
p.am()},
kB(){return this.pV(null)}}
A.pD.prototype={
$1(a){if(a.data=="_disconnect"){this.a.kB()
return}this.a.ix(A.aT(a.data))},
$S:2}
A.pE.prototype={
$1(a){this.a.kB()
a.a.am()},
$S:134}
A.pC.prototype={
$1(a){var s=this.a.f.O(0,a.i)
if(s!=null)s.ai(a)},
$S:16}
A.pB.prototype={
$1(a){return this.mo(a)},
mo(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=d.t0(a1,m.signal)
s=6
return A.a(t.nW.b(j)?j:A.be(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.E(a0)
k=A.ad(a0)
if(!(l instanceof A.cB)){b.console.error("Error in worker: "+J.am(l))
b.console.error("Original trace: "+A.p(k))}b=l
if(b instanceof A.cQ){h=A.AD(b)
g=0}else{g=b instanceof A.cB?1:null
h=null}f={e:J.am(b),s:g,r:h,i:e,t:"errorResponse"}
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
c.O(0,e)
s=o.pop()
break
case 5:c=f
d.a.postMessage(c,A.fg(c))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:135}
A.pA.prototype={
$1(a){var s=this.a.r.O(0,a.i)
if(s!=null)s.abort()},
$S:16}
A.fq.prototype={
l(a){return"Channel to database worker is closed: "+A.p(this.a)},
$iF:1}
A.mN.prototype={
bU(a){return this.um(a)},
um(a){var s=0,r=A.h(t.n),q
var $async$bU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.qM(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bU,r)}}
A.iD.prototype={}
A.my.prototype={}
A.dJ.prototype={}
A.iS.prototype={
hx(){var s=0,r=A.h(t.H),q=this
var $async$hx=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.bu(q.b),$async$hx)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hx,r)},
js(){var s=0,r=A.h(t.H),q=this
var $async$js=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.p()
return A.e(null,r)}})
return A.f($async$js,r)}}
A.ny.prototype={
vc(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
o4(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.qT.prototype={
$1(a){var s=new A.r($.v,t.D),r=new A.ch(new A.a8(s,t.F))
this.a.a=r
this.b.ai(r)
return A.AK(s)},
$S:136}
A.qU.prototype={
$2(a,b){var s,r,q
A.aT(a)
s=J.y(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.bO(new A.cB("Operation was cancelled"),b)
else q.bO(a,b)}return null},
$S:137}
A.ch.prototype={}
A.iG.prototype={
grz(){if(this.c.a)return!1
return!this.d||this.f!=null},
dj(a){return this.ni(a)},
ni(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dj=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.id()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.hm(n,o.a,null,o.goW(),!0),$async$dj)
case 6:m=c
s=7
return A.a(A.hm(n,o.b,a,null,!1),$async$dj)
case 7:l=c
j=o.e
j=j==null?null:j.hx()
s=8
return A.a(j instanceof A.r?j:A.be(j,t.H),$async$dj)
case 8:o.f=new A.aF(m,l)
q=1
s=5
break
case 3:q=2
i=p.pop()
j=m
if(j!=null)j.a.am()
j=l
if(j!=null)j.a.am()
throw i
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dj,r)},
oX(){this.lR()},
jk(a,b,c){return this.c.hO(new A.n_(this,a,b,c),b,c)},
lR(){return this.c.jz(new A.n0(this),t.H)}}
A.n_.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dj(r.c).bh(new A.mZ(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.mZ.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.n0.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.js()
s.a.am()
r.a.am()
p.f=null}},
$S:3}
A.fW.prototype={
hO(a,b,c){return this.vt(a,b,c,c)},
jz(a,b){return this.hO(a,null,b)},
vt(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$hO=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.y(g?null:b.aborted,!0))throw A.b(B.Z)
h.a=!1
o=new A.oY(h,p)
if(!p.a){h.a=p.a=!0
q=A.ec(a,c).aD(o)
s=1
break}else{n={}
m=new A.r($.v,c.i("r<0>"))
l=new A.a8(m,c.i("a8<0>"))
n.a=null
h=new A.oX(h,n,l,a,c)
if(!g)n.a=A.aZ(b,"abort",new A.oW(n,p,l,h),!1,t.m)
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
B.c.a6(j,0,i,h,n)
B.c.a6(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.aD(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$hO,r)}}
A.oY.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gB(0)){s=r.b
if(s===r.c)A.w(A.ak());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.oX.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.A()
r.c.ai(A.ec(r.d,r.e))},
$S:0}
A.oW.prototype={
$1(a){var s,r=this
r.a.a.A()
s=r.c
if((s.a.a&30)===0){r.b.b.O(0,r.d)
s.ao(B.Z)}},
$S:2}
A.dk.prototype={
glZ(){var s,r,q,p,o,n=this,m=t.s,l=A.n([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.L)(s),++q){p=s[q]
B.c.G(l,A.n([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.ng.prototype={
$1(a){if(a!=null)return A.t(a)
return null},
$S:138}
A.jj.prototype={
ag(){return"MessageType."+this.b}}
A.pR.prototype={
t0(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.hk(a,b)
case"connect":return p.ja(a,b)
case"custom":return p.dL(a,b)
case"fileSystemExists":return p.ey(a,b)
case"fileSystemFlush":return p.ez(a,b)
case"fileSystemAccess":return p.ex(a,b)
case"runQuery":return p.hn(a,b)
case"exclusiveLock":return p.hj(a,b)
case"releaseLock":s=p.bc(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.w(A.u("Lock to be released is not active."))
q.b.am()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.hh(a,b)
case"openAdditionalConnection":return p.hl(a,b)
case"updateRequest":return p.ho(a,b)
case"rollbackRequest":return p.hm(a,b)
case"commitRequest":return p.hi(a,b)
case"dedicatedCompatibilityCheck":return p.dr(a,b)
case"sharedCompatibilityCheck":return p.dr(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.dr(a,b)
default:r=A.uu(new A.bD(!1,o,o,"Unsupported request "+A.p(a.t)),o)
q=new A.r($.v,t.hl)
q.c2(r)
return q}}}
A.cE.prototype={
ag(){return"FileSystemImplementation."+this.b}}
A.bY.prototype={
ag(){return"TypeCode."+this.b},
rL(a){var s=null
switch(this.a){case 0:s=A.w(A.P("Unsupported type code",null))
break
case 1:a=A.Z(A.dX(a))
s=a
break
case 2:s=A.vW(t.bJ.a(a).toString(),null)
break
case 3:A.dX(a)
s=a
break
case 4:A.t(a)
s=a
break
case 5:t.Z.a(a)
s=a
break
case 7:A.f9(a)
s=a
break
case 6:break}return s}}
A.dl.prototype={
lm(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.P("Expected "+A.p(r)+" parameters, got "+A.p(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.a9:B.ax[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.Z(A.dX(h))))
if(k!==0)a.bi(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bi(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.dX(h))
if(k!==0)a.bi(k,e)
break
case 4:g=B.f.u(A.t(h))
k=s.dart_sqlite3_bind_text(d,i,c.eo(g),g.length)
if(k!==0)a.bi(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.eo(h),h.length)
if(k!==0)a.bi(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bi(k,e)
break
case 7:f=A.f9(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bi(k,e)
break
case 0:throw A.b(A.a0("Unknown type code"))}}},
gk(a){return this.a.length},
sk(a,b){this.l9()},
h(a,b){var s=this.c[b],r=s>=8?B.a9:B.ax[s]
return r.rL(this.a[b])},
j(a,b,c){this.l9()},
l9(){throw A.b(A.a0("decodeValues list is unmodifiable"))}}
A.uH.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:16}
A.m9.prototype={
$1(a){this.a.ai(this.c.a(this.b.result))},
$S:2}
A.ma.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.ao(s)},
$S:2}
A.md.prototype={
$1(a){this.a.ai(this.c.a(this.b.result))},
$S:2}
A.me.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.ao(s)},
$S:2}
A.mf.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.ao(s)},
$S:2}
A.pv.prototype={
tj(){var s,r,q,p
for(s=this.b,r=new A.bS(s,s.r,s.e);r.m();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.aK(0)}}
A.fA.prototype={
ag(){return"FileType."+this.b}}
A.cR.prototype={
ag(){return"StorageMode."+this.b}}
A.eq.prototype={
l(a){return"Remote error: "+this.a},
$iF:1}
A.cB.prototype={}
A.us.prototype={
$1(a){return A.aT(a.data)},
$S:140}
A.hQ.prototype={
A(){var s=this.a
if(s!=null)s.A()
this.a=null}}
A.eO.prototype={
p(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.c.A()
q.d.A()
q.e.A()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.L)(p),++n)p[n].abort()
B.c.aK(p)
p=q.f
if(p!=null)p.b.am()
s=2
return A.a(q.a.er(),$async$p)
case 2:return A.e(null,r)}})
return A.f($async$p,r)},
l1(a){var s=new v.G.AbortController()
a.onabort=A.ut(new A.rJ(s))
this.w.push(s)
return s},
jw(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.grz()){r=p.l1(b)
o=s.jk(c,r.signal,d).aD(new A.rN(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.u("Requested operation on inactive lock state."))}if(o==null)o=A.ec(c,d)
q=p.a.z
return q instanceof A.cG?o.aD(q.gtF()):o},
uz(a){var s=this,r=s.l1(a),q=new A.r($.v,t.hy),p=new A.aI(q,t.ho),o=t.H
A.vn(s.a.f.jk(new A.rK(s,p),r.signal,o),new A.rL(p),o,t.K)
return q.aD(new A.rM(s,r))}}
A.rJ.prototype={
$0(){return this.a.abort()},
$S:0}
A.rN.prototype={
$0(){B.c.O(this.a.w,this.b)},
$S:3}
A.rK.prototype={
$0(){var s=this.a,r=s.r++,q=new A.r($.v,t.D)
s.f=new A.aF(r,new A.aI(q,t.Q))
this.b.ai(r)
return q},
$S:4}
A.rL.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.bO(a,b)},
$S:9}
A.rM.prototype={
$0(){B.c.O(this.a.w,this.b)},
$S:3}
A.eN.prototype={
nd(a,b,c){this.b.a.aD(new A.ry(this))},
dr(a,b){return this.od(a,b)},
od(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$dr=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.lp(a),$async$dr)
case 3:q={r:d.glZ(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dr,r)},
ja(a,b){return this.tK(a,b)},
tK(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ja=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.gkw()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.fg(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ja,r)},
dL(a,b){return this.tL(a,b)},
tL(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$dL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.kh(l)
n=a.r
s=7
return A.a(o.a.gbV(),$async$dL)
case 7:s=6
return A.a(d.cp(p,new A.my(n)),$async$dL)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cp(p,new A.iD(a)),$async$dL)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dL,r)},
hk(a,b){return this.tZ(a,b)},
tZ(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.jz(new A.rD(p,a),t.m),$async$hk)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hk,r)},
hn(a,b){return this.u1(a,b)},
u1(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$hn=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bc(a)
n=o.a
s=3
return A.a(n.gbV(),$async$hn)
case 3:m=d
q=o.jw(a.z,b,new A.rG(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hn,r)},
hj(a,b){return this.tP(a,b)},
tP(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bc(a).uz(b),$async$hj)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hj,r)},
hi(a,b){return this.tJ(a,b)},
tJ(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hi=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bc(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.dg(n,new A.rA(p,o),a),$async$hi)
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
return A.f($async$hi,r)},
hm(a,b){return this.u0(a,b)},
u0(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bc(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.dg(n,new A.rF(p,o),a),$async$hm)
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
return A.f($async$hm,r)},
ho(a,b){return this.u3(a,b)},
u3(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ho=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bc(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.dg(n,new A.rI(p,o),a),$async$ho)
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
return A.f($async$ho,r)},
hl(a,b){return this.u_(a,b)},
u_(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$hl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bc(a).a;++m.w
s=3
return A.a(A.uI(),$async$hl)
case 3:o=d
n=o.a
p.w.jV(o.b).x.push(A.xS(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hl,r)},
hh(a,b){return this.tI(a,b)},
tI(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$hh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bc(a)
B.c.O(p.x,o)
s=3
return A.a(o.p(),$async$hh)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hh,r)},
ez(a,b){return this.tS(a,b)},
tS(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$ez=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bc(a).a.gcA(),$async$ez)
case 3:o=d
s=o instanceof A.cG?4:5
break
case 4:s=6
return A.a(o.ci(!1),$async$ez)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ez,r)},
ex(a,b){return this.tQ(a,b)},
tQ(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$ex=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bc(a)
n=B.ay[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gcA(),$async$ex)
case 4:s=3
return A.a(l.jw(null,k,new j.rB(d,n,m,a),t.m),$async$ex)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ex,r)},
ey(a,b){return this.tR(a,b)},
tR(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$ey=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bc(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gcA(),$async$ey)
case 4:s=3
return A.a(n.jw(null,m,new l.rC(d,a),t.y),$async$ey)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ey,r)},
dg(a,b,c){return this.mT(a,b,c)},
mT(a,b,c){var s=0,r=A.h(t.m),q,p
var $async$dg=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.a(b.$0(),$async$dg)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dg,r)},
tY(a){},
cl(a){var s=0,r=A.h(t.X),q,p=this
var $async$cl=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.f4({r:a,z:null,i:0,d:null,t:"custom"},B.bH,t.m),$async$cl)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cl,r)},
kh(a){return B.c.ew(this.x,new A.rx(a))},
bc(a){var s=a.d
if(s!=null)return this.kh(s)
else throw A.b(A.P("Request requires database id",null))},
$im_:1}
A.ry.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].p(),$async$$0)
case 5:case 3:p.length===o||(0,A.L)(p),++n
s=2
break
case 4:B.c.aK(p)
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.rD.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.bU(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.tD(h.d,A.AH(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gcA():m.gbV(),$async$$0)
case 8:l=A.xS(m,null)
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
case 9:B.c.O(j.x,l)
s=11
return A.a(m.er(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:141}
A.rG.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.u("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.dl(s,r,A.bq(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.mD(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.Z(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.tv(l,k.s,q)
s=o.d
return A.za(s.sqlite3_get_autocommit(p)!==0,m,A.Z(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:36}
A.rA.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gbV(),$async$$0)
case 3:q=b.a.nD().gcG().aL(new A.rz(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:46}
A.rz.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.fg(s))},
$S:57}
A.rF.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gbV(),$async$$0)
case 3:q=b.a.qJ().gcG().aL(new A.rE(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:46}
A.rE.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.fg(s))},
$S:57}
A.rI.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gbV(),$async$$0)
case 3:q=b.a.r3().gcG().aL(new A.rH(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:144}
A.rH.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.fg(s))},
$S:145}
A.rB.prototype={
$0(){var s,r,q,p=this,o=p.a.dc(new A.hc(A.yu(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.f_(s.byteLength)
o.e_(A.bq(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.eZ()
r=new Uint8Array(q)
o.hV(r,0)
q={r:t.a.a(J.wD(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.hT()}},
$S:36}
A.rC.prototype={
$0(){return this.a.hS(A.yu(B.ay[this.b.f]),0)===1},
$S:56}
A.rx.prototype={
$1(a){return a.b===this.a},
$S:146}
A.iH.prototype={
gcA(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gcA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.ec(new A.n3(p),t.H):o,$async$gcA)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcA,r)},
gbV(){var s=0,r=A.h(t.u),q,p=this,o
var $async$gbV=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.ec(new A.n2(p),t.u):o,$async$gbV)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gbV,r)},
er(){var s=0,r=A.h(t.H),q=this
var $async$er=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.a(q.p(),$async$er)
case 4:case 3:return A.e(null,r)}})
return A.f($async$er,r)},
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
if(j!=null)j.tj()
n.a.p()
m=q.z
if(m!=null){j=p.a
l=$.ws()
A.wY(m)
k=l.a.get(m)
if(k==null)A.w(A.u("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.r?j:A.be(j,t.H),$async$p)
case 6:q.f.lR()
return A.e(null,r)}})
return A.f($async$p,r)},
kJ(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.O(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.aF(s,!0)
p=a.hD(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.O(0,new A.ai(n,A.o(n).i("ai<1>")).gC(0)).p()
n.j(0,p.d,p)
return new A.aF(p,!0)}return new A.aF(p,!1)},
tv(a,b,c){var s,r,q
if(c.gk(0)===0)return a.av(b,B.v)
else{s=null
r=null
q=this.kJ(a,b)
s=q.a
r=q.b
try{s.j9(new A.iE(c.grw()))}finally{if(r)s.d5()
else s.p()}}},
mD(a,b,c){var s,r=null,q=null,p=this.kJ(a,b)
r=p.a
q=p.b
try{s=A.Bv(r,c)
return s}finally{if(q)r.d5()
else r.p()}}}
A.n3.prototype={
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
return A.a(A.pU("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.gdF()
s=3
break
case 5:case 6:s=10
return A.a(A.iT("drift_db/"+l.c,k===B.a6,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.gdF()
s=3
break
case 7:s=11
return A.a(A.j0(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.gdF()
s=3
break
case 8:l.z=A.vo("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.n2.prototype={
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
o.lD()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.ep(B.f.u(n.a),1),n,0)
if(m===0)A.w(A.u("could not register vfs"))
$.ws().j(0,n,m)
s=5
return A.a(l.f.jk(new A.n1(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:44}
A.n1.prototype={
$0(){var s=this.a
return s.a.b.hA(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:44}
A.qX.prototype={
gkw(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.mL()
r.Q!==$&&A.v9()
r.Q=s
q=s}return q},
dM(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$dM=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.c1(A.bg(A.D7(n.a),"stream",t.K))
q=2
j=v.G
case 5:s=7
return A.a(h.m(),$async$dM)
case 7:if(!b){s=6
break}m=h.gn()
s=J.y(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.fs(i.port,i.lockName,null)
n.jV(l)
s=9
break
case 10:s=A.EI(m.t)?11:12
break
case 11:s=13
return A.a(n.lp(m),$async$dM)
case 13:k=b
j.postMessage(k.glZ())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.a(h.A(),$async$dM)
case 14:s=o.pop()
break
case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dM,r)},
jV(a){var s=this,r=A.C8(a,s.d++,s)
s.c.push(r)
r.b.a.aD(new A.qY(s,r))
return r},
lp(a){return this.x.jz(new A.qZ(this,a),t.p6)},
bU(a){return this.un(a)},
un(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$bU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.aT(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.u("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.p(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.be(n,t.he),$async$bU)
case 5:s=3
break
case 4:o=A.vn(q.b.bU(m),new A.r_(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$bU)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$bU,r)},
tD(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.bS(s,s.r,s.e);r.m();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.a6||b===B.as
o=A.vx(t.cj)
n=c===0?null:new A.pv(c,A.jd(null,null,t.N,t.fw))
n=new A.iH(this,r,a,b,d,new A.iG(q+"-outer",q,new A.fW(o),p),n)
s.j(0,r,n)
return n}}
A.qY.prototype={
$0(){var s=this.a,r=s.c
B.c.O(r,this.b)
if(r.length===0)s.a.p()
return null},
$S:0}
A.qZ.prototype={
$0(){var s=0,r=A.h(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.y(d.t,"dedicatedCompatibilityCheck")||J.y(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.a(A.d7(),$async$$0)
case 6:o=a1
n=o.a
m=o.b
l=m
k=n
s=4
break
case 5:k=!1
l=!1
case 4:b=J.y(d.t,"dedicatedCompatibilityCheck")||J.y(d.t,"sharedCompatibilityCheck")
if(b){s=7
break}else a1=b
s=8
break
case 7:s=9
return A.a(A.lp(),$async$$0)
case 9:case 8:j=a1
i=A.bo(t.cU)
s=J.y(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.gkw()
g=h!=null
s=g?13:14
break
case 13:d={d:c,i:0,t:"dedicatedInSharedCompatibilityCheck"}
f=A.fg(d)
n=h.a
n.postMessage(d,f)
b=A
a=A
s=15
return A.a(new A.eS(n,"message",!1,t.d4).gC(0),$async$$0)
case 15:e=b.As(a.aT(a1.data))
k=e.c
l=e.d
i.G(0,e.a)
case 14:s=11
break
case 12:g=!1
case 11:s=k?16:17
break
case 16:b=J
s=18
return A.a(A.fi(),$async$$0)
case 18:d=b.M(a1)
case 19:if(!d.m()){s=20
break}i.t(0,new A.aF(B.aE,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.uG(c),$async$$0)
case 23:if(a1)i.t(0,new A.aF(B.aF,c))
case 22:d=A.Q(i,i.$ti.c)
q=new A.dk(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:148}
A.r_.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:149}
A.i1.prototype={}
A.kF.prototype={
glC(){return new A.eS(this.a,"message",!1,t.d4)},
p(){return this.a.close()}}
A.l6.prototype={
glC(){return new A.cz(new A.tT(this),t.k8)},
p(){}}
A.tT.prototype={
$1(a){var s=A.n([],t.W),r=A.n([],t.dw)
r.push(A.aZ(this.a.a,"connect",new A.tQ(new A.tU(s,r,a)),!1,t.m))
a.r=new A.tR(r)},
$S:150}
A.tU.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.aZ(a,"message",new A.tS(this.c),!1,t.m))},
$S:2}
A.tS.prototype={
$1(a){this.a.rl(a)},
$S:2}
A.tQ.prototype={
$1(a){var s,r=a.ports
r=J.M(t.ip.b(r)?r:new A.bi(r,A.ap(r).i("bi<1,D>")))
s=this.a
while(r.m())s.$1(r.gn())},
$S:2}
A.tR.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.L)(s),++q)s[q].A()},
$S:3}
A.kG.prototype={
mL(){var s=v.G
if(!("Worker" in s))return null
return new A.rW(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.rW.prototype={}
A.k6.prototype={
gf5(){return A.t(this.c)}}
A.qc.prototype={
gjj(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
hY(a){var s,r=this,q=r.d=J.Ab(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gE()
return s},
lz(a,b){var s
if(this.hY(a))return
if(b==null)if(a instanceof A.ee)b="/"+a.a+"/"
else{s=J.am(a)
s=A.H(s,"\\","\\\\")
b='"'+A.H(s,'"','\\"')+'"'}this.kp(b)},
ev(a){return this.lz(a,null)},
ty(){if(this.c===this.b.length)return
this.kp("no more input")},
tu(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.w(A.aD("position must be greater than or equal to 0."))
else if(c>n.length)A.w(A.aD("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.w(A.aD("position plus length must not go beyond the end of the string."))
s=this.a
r=A.n([0],t.t)
q=n.length
p=new A.pW(s,r,new Uint32Array(q))
p.n8(new A.bP(n),s)
o=c+b
if(o>q)A.w(A.aD("End "+o+u.D+p.gk(0)+"."))
else if(c<0)A.w(A.aD("Start may not be negative, was "+c+"."))
throw A.b(new A.k6(n,a,new A.eT(p,c,o)))},
kp(a){this.tu("expected "+a+".",0,this.c)}}
A.eD.prototype={
gk(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.x5(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.x5(b,this))
s=this.a
s.$flags&2&&A.C(s)
s[b]=c},
sk(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.C(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.ke(b)
B.d.aa(p,0,o.b,o.a)
o.a=p}}o.b=b},
t(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.r1(q)
q=r.a
s=r.b++
q.$flags&2&&A.C(q)
q[s]=b},
ke(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
r1(a){var s=this.ke(null)
B.d.aa(s,0,a,this.a)
this.a=s},
a6(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.af(c,0,s,null,null))
s=this.a
if(d instanceof A.bZ)B.d.a6(s,b,c,d.a,e)
else B.d.a6(s,b,c,d,e)},
aa(a,b,c,d){return this.a6(0,b,c,d,0)}}
A.kP.prototype={}
A.bZ.prototype={}
A.vl.prototype={}
A.eS.prototype={
a0(a,b,c,d){return A.aZ(this.a,this.b,a,!1,this.$ti.c)},
bs(a,b,c){return this.a0(a,null,b,c)}}
A.hy.prototype={
A(){var s=this,r=A.cg(null,t.H)
if(s.b==null)return r
s.iR()
s.d=s.b=null
return r},
hy(a){var s,r=this
if(r.b==null)throw A.b(A.u("Subscription has been canceled."))
r.iR()
s=A.yT(new A.t_(a),t.m)
s=s==null?null:A.cc(s)
r.d=s
r.iP()},
bf(){if(this.b==null)return;++this.a
this.iR()},
b5(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.iP()},
iP(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
iR(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ib7:1}
A.rZ.prototype={
$1(a){return this.a.$1(a)},
$S:2}
A.t_.prototype={
$1(a){return this.a.$1(a)},
$S:2};(function aliases(){var s=J.cJ.prototype
s.mY=s.l
s=A.bn.prototype
s.mU=s.lE
s.mV=s.lF
s.mX=s.lH
s.mW=s.lG
s=A.aS.prototype
s.bC=s.b9
s.dh=s.b8
s.cH=s.c3
s=A.cx.prototype
s.n0=s.kb
s.n1=s.ks
s.n2=s.l_
s=A.A.prototype
s.jS=s.a6
s=A.an.prototype
s.jR=s.rv
s=A.hR.prototype
s.n3=s.p
s=A.ip.prototype
s.jQ=s.hf
s=A.ev.prototype
s.n_=s.S
s.mZ=s.V})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"Df","AT",41)
r(A,"Ds","Bk",10)
q(A,"DS","BV",14)
q(A,"DT","BW",14)
q(A,"DU","BX",14)
q(A,"DV","Du",18)
r(A,"yV","DL",0)
q(A,"DW","Dv",19)
s(A,"DX","Dx",11)
r(A,"uF","Dw",0)
p(A,"E2",5,null,["$5"],["DF"],152,0)
p(A,"E7",4,null,["$1$4","$4"],["uy",function(a,b,c,d){return A.uy(a,b,c,d,t.z)}],153,0)
p(A,"E9",5,null,["$2$5","$5"],["uA",function(a,b,c,d,e){var i=t.z
return A.uA(a,b,c,d,e,i,i)}],154,0)
p(A,"E8",6,null,["$3$6","$6"],["uz",function(a,b,c,d,e,f){var i=t.z
return A.uz(a,b,c,d,e,f,i,i,i)}],155,0)
p(A,"E5",4,null,["$1$4","$4"],["yJ",function(a,b,c,d){return A.yJ(a,b,c,d,t.z)}],156,0)
p(A,"E6",4,null,["$2$4","$4"],["yK",function(a,b,c,d){var i=t.z
return A.yK(a,b,c,d,i,i)}],157,0)
p(A,"E4",4,null,["$3$4","$4"],["yI",function(a,b,c,d){var i=t.z
return A.yI(a,b,c,d,i,i,i)}],158,0)
p(A,"E0",5,null,["$5"],["DE"],159,0)
p(A,"Ea",4,null,["$4"],["uB"],160,0)
p(A,"E_",5,null,["$5"],["DD"],161,0)
p(A,"DZ",5,null,["$5"],["DC"],162,0)
p(A,"E3",4,null,["$4"],["DG"],163,0)
q(A,"DY","Dy",164)
p(A,"E1",5,null,["$5"],["yH"],165,0)
var j
o(j=A.dN.prototype,"ge8","bn",0)
o(j,"ge9","bo",0)
n(A.dO.prototype,"grG",0,1,null,["$2","$1"],["bO","ao"],39,0,0)
m(A.r.prototype,"gi7","nE",11)
n(j=A.d3.prototype,"grj",0,1,null,["$2","$1"],["bN","lg"],39,0,0)
l(j,"gnm","b9",12)
m(j,"gnl","b8",11)
o(j,"gnA","c3",0)
o(j=A.cY.prototype,"ge8","bn",0)
o(j,"ge9","bo",0)
o(j=A.aS.prototype,"ge8","bn",0)
o(j,"ge9","bo",0)
o(A.eR.prototype,"gkG","qc",0)
l(j=A.c1.prototype,"gq4","q5",12)
m(j,"gq8","q9",11)
o(j,"gq6","q7",0)
o(j=A.eU.prototype,"ge8","bn",0)
o(j,"ge9","bo",0)
l(j,"gio","ip",12)
m(j,"gis","it",106)
o(j,"giq","ir",0)
o(j=A.f0.prototype,"ge8","bn",0)
o(j,"ge9","bo",0)
l(j,"gio","ip",12)
m(j,"gis","it",11)
o(j,"giq","ir",0)
s(A,"wc","D2",30)
q(A,"wd","D3",32)
s(A,"Ee","AZ",41)
q(A,"Ei","D4",29)
k(j=A.kA.prototype,"gri","t",12)
o(j,"gdF","p",0)
q(A,"z0","EB",32)
s(A,"z_","EA",30)
q(A,"Ej","BN",7)
p(A,"EN",2,null,["$1$2","$2"],["z9",function(a,b){return A.z9(a,b,t.o)}],166,0)
m(j=A.iK.prototype,"gtt","ah",30)
l(j,"gu4","ap",32)
l(j,"guc","ud",18)
q(A,"Ec","Al",7)
q(A,"Em","Az",7)
l(A.jz.prototype,"guS","uT",8)
l(j=A.jv.prototype,"gq2","q3",23)
o(j,"glb","ek",4)
o(j,"gth","ti",0)
q(A,"Er","wZ",167)
o(j=A.jC.prototype,"gqa","qb",0)
l(j,"gqd","qe",61)
q(A,"Ef","vi",168)
l(j=A.k8.prototype,"gtV","tW",23)
l(j,"gtT","tU",68)
o(j,"gq1","kF",0)
q(A,"Ga","xt",169)
r(A,"Gb","bI",10)
q(A,"Eg","B6",170)
m(j=A.fQ.prototype,"goP","iw",1)
m(j,"go7","ik",1)
m(j,"goN","fu",1)
m(j,"goS","bH",1)
m(j,"goe","il",1)
m(j,"goU","fv",1)
m(j,"go5","fg",1)
m(j,"gpD","fM",1)
m(j,"gpB","fL",1)
m(j,"goY","fw",1)
m(j,"gob","fh",1)
m(j,"gp_","fz",1)
m(j,"gpl","fG",1)
m(j,"gpp","fH",1)
m(j,"gpr","ca",1)
m(j,"gpz","fK",1)
m(j,"gpx","fJ",1)
m(j,"gpt","fI",1)
m(j,"gpn","iz",1)
m(j,"gpv","iA",1)
m(j,"gpJ","fP",1)
m(j,"gpH","fO",1)
m(j,"gpF","fN",1)
m(j,"gpd","dt",1)
m(j,"gph","fE",1)
m(j,"gp5","fA",1)
m(j,"gp7","fB",1)
m(j,"gp9","fC",1)
m(j,"gpb","fD",1)
m(j,"gpj","fF",1)
m(j,"gpf","iy",1)
m(j,"goC","c9",1)
m(j,"goG","iu",1)
m(j,"goI","iv",1)
m(j,"goK","fs",1)
m(j,"goy","fp",1)
m(j,"goA","ds",1)
m(j,"goE","fq",1)
m(j,"gow","fo",1)
m(j,"gou","fn",1)
m(j,"gon","fl",1)
m(j,"gol","fk",1)
m(j,"gop","fm",1)
m(j,"gog","fi",1)
m(j,"goi","fj",1)
m(j,"gor","im",1)
m(j,"go9","dq",1)
l(j=A.kC.prototype,"gnK","nL",23)
o(j,"gkc","fb",4)
q(A,"yZ","bz",20)
q(A,"yY","e_",20)
l(j=A.iF.prototype,"gur","us",8)
m(j,"guo","uq",103)
n(j,"gvT",0,5,null,["$5"],["vU"],104,0,0)
n(j,"gvI",0,3,null,["$3"],["vJ"],105,0,0)
n(j,"gvA",0,4,null,["$4"],["vB"],49,0,0)
n(j,"gvP",0,4,null,["$4"],["vQ"],49,0,0)
n(j,"gvV",0,3,null,["$3"],["vW"],107,0,0)
m(j,"gw_","w0",50)
m(j,"gvG","vH",50)
l(j,"gvE","vF",33)
n(j,"gvX",0,4,null,["$4"],["vY"],51,0,0)
n(j,"gw7",0,4,null,["$4"],["w8"],51,0,0)
m(j,"gw3","w4",111)
m(j,"gw1","w2",15)
m(j,"gvN","vO",15)
m(j,"gvR","vS",15)
m(j,"gw5","w6",15)
m(j,"gvC","vD",15)
l(j,"ghU","vK",33)
n(j,"gvL",0,3,null,["$3"],["vM"],143,0,0)
l(j,"ghW","vZ",33)
l(j,"gt3","t4",14)
l(j,"grZ","t_",114)
n(j,"gt1",0,5,null,["$5"],["t2"],115,0,0)
n(j,"gt9",0,4,null,["$4"],["ta"],35,0,0)
n(j,"gtd",0,4,null,["$4"],["te"],35,0,0)
n(j,"gtb",0,4,null,["$4"],["tc"],35,0,0)
m(j,"gtf","tg",52)
m(j,"gt7","t8",52)
n(j,"gt5",0,5,null,["$5"],["t6"],118,0,0)
m(j,"grX","rY",119)
m(j,"grV","rW",120)
n(j,"grT",0,3,null,["$3"],["rU"],121,0,0)
o(j=A.cG.prototype,"gdF","p",4)
o(j,"gtF","tG",4)
o(A.et.prototype,"gdF","p",0)
o(A.iG.prototype,"goW","oX",0)
l(A.dl.prototype,"grw","lm",139)
l(A.eN.prototype,"gtX","tY",2)
q(A,"yX","z4",113)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.vu,J.j2,A.ha,J.e6,A.rO,A.ru,A.m,A.iw,A.di,A.a4,A.A,A.pS,A.a5,A.ji,A.eK,A.iQ,A.k9,A.jV,A.iN,A.ko,A.fB,A.kf,A.k7,A.eZ,A.ft,A.eV,A.bU,A.qv,A.ju,A.fx,A.hP,A.T,A.o9,A.dt,A.bS,A.jc,A.ee,A.eX,A.ks,A.eA,A.u0,A.kB,A.lh,A.bT,A.kL,A.u5,A.hS,A.hn,A.ku,A.hD,A.ld,A.aa,A.a_,A.aS,A.hr,A.ka,A.hB,A.dO,A.bK,A.r,A.kt,A.d3,A.le,A.kv,A.kq,A.kH,A.rX,A.eY,A.eR,A.c1,A.hx,A.aK,A.i2,A.f8,A.ll,A.kM,A.tD,A.d1,A.kS,A.aP,A.kU,A.lg,A.fU,A.kT,A.k5,A.iz,A.an,A.kx,A.lR,A.kw,A.iy,A.l7,A.dP,A.tA,A.u1,A.lk,A.ca,A.ay,A.kK,A.b2,A.aw,A.rY,A.jw,A.he,A.kJ,A.bb,A.j1,A.V,A.U,A.lc,A.q2,A.O,A.hZ,A.qA,A.bL,A.iR,A.jt,A.tt,A.tu,A.iO,A.W,A.iL,A.fJ,A.dv,A.f5,A.eW,A.fS,A.iK,A.jr,A.kg,A.bR,A.c4,A.nB,A.dh,A.io,A.ip,A.lN,A.jl,A.eg,A.k1,A.a3,A.lZ,A.lD,A.r4,A.iM,A.m8,A.n5,A.jf,A.k2,A.pt,A.je,A.jz,A.pN,A.b9,A.ed,A.np,A.mj,A.bQ,A.e8,A.c7,A.jv,A.r0,A.lP,A.fz,A.nh,A.ba,A.oi,A.kb,A.lL,A.jC,A.pg,A.h4,A.f1,A.pi,A.tV,A.fD,A.cF,A.fC,A.fE,A.ci,A.k3,A.pd,A.bE,A.mm,A.k8,A.fT,A.dA,A.oQ,A.eh,A.fV,A.p_,A.lO,A.fR,A.h9,A.p6,A.jH,A.pF,A.aV,A.pK,A.aW,A.eC,A.eB,A.qe,A.aE,A.ez,A.co,A.cn,A.h8,A.c2,A.qg,A.h7,A.hh,A.qr,A.cT,A.bG,A.dB,A.mN,A.u4,A.eL,A.ui,A.li,A.dJ,A.kC,A.eJ,A.kn,A.qS,A.iI,A.jG,A.jN,A.mt,A.qd,A.pf,A.jy,A.pW,A.jY,A.ev,A.nC,A.b_,A.c0,A.bV,A.k0,A.bW,A.cQ,A.mO,A.d4,A.pY,A.dj,A.aH,A.is,A.mx,A.l2,A.tJ,A.dr,A.iE,A.cw,A.hc,A.qN,A.qI,A.qP,A.qO,A.dI,A.cW,A.iF,A.dQ,A.qJ,A.lH,A.hC,A.t0,A.kV,A.kO,A.tG,A.qD,A.fs,A.pR,A.fq,A.iD,A.iS,A.ny,A.ch,A.iG,A.fW,A.dk,A.pv,A.eq,A.hQ,A.eO,A.iH,A.qX,A.i1,A.kG,A.rW,A.qc,A.vl,A.hy])
q(J.j2,[J.j4,J.fL,J.ao,J.b3,J.ef,J.ds,J.cH])
q(J.ao,[J.cJ,J.z,A.ej,A.fY])
q(J.cJ,[J.jA,J.cV,J.bl])
r(J.j3,A.ha)
r(J.o6,J.z)
q(J.ds,[J.fK,J.j5])
q(A.m,[A.cX,A.B,A.cl,A.c_,A.fy,A.dH,A.cp,A.bt,A.dT,A.kr,A.lb,A.f3,A.du])
q(A.cX,[A.dg,A.i3])
r(A.hv,A.dg)
r(A.hs,A.i3)
q(A.di,[A.m1,A.m0,A.o0,A.qt,A.uX,A.uZ,A.rb,A.ra,A.ul,A.uk,A.nw,A.nr,A.t4,A.t3,A.tf,A.ti,A.q8,A.q9,A.q6,A.rV,A.rU,A.tO,A.tN,A.tk,A.rR,A.tC,A.oK,A.ty,A.mw,A.rp,A.ns,A.v0,A.v4,A.v5,A.uK,A.lU,A.lW,A.lY,A.ir,A.lQ,A.un,A.lS,A.oO,A.uR,A.uE,A.pZ,A.q_,A.uQ,A.nd,A.nc,A.ne,A.nb,A.na,A.n9,A.n6,A.n7,A.n8,A.oG,A.oI,A.oH,A.oS,A.m6,A.m4,A.m3,A.m7,A.m5,A.r1,A.nk,A.ni,A.nl,A.oj,A.ok,A.om,A.oo,A.qR,A.ph,A.pn,A.po,A.pj,A.pk,A.pl,A.pm,A.pq,A.mo,A.mn,A.qo,A.qh,A.qm,A.qi,A.qj,A.qk,A.p1,A.p2,A.p3,A.p4,A.p8,A.p9,A.pc,A.pb,A.pa,A.pJ,A.pG,A.pH,A.pI,A.pL,A.pM,A.qf,A.uT,A.oh,A.og,A.of,A.od,A.ov,A.ow,A.oz,A.oA,A.oD,A.oC,A.oy,A.ot,A.mu,A.mv,A.uC,A.nE,A.nD,A.nF,A.nH,A.nJ,A.nG,A.nX,A.q0,A.mW,A.tY,A.v3,A.v6,A.v7,A.lG,A.rP,A.rQ,A.mb,A.mc,A.mg,A.mh,A.mi,A.nm,A.lK,A.lI,A.tn,A.tq,A.tr,A.o_,A.nY,A.tm,A.pV,A.qE,A.qF,A.qG,A.qH,A.pD,A.pE,A.pC,A.pB,A.pA,A.qT,A.mZ,A.oW,A.ng,A.uH,A.m9,A.ma,A.md,A.me,A.mf,A.us,A.rz,A.rE,A.rH,A.rx,A.tT,A.tU,A.tS,A.tQ,A.rZ,A.t_])
q(A.m1,[A.rv,A.ms,A.o7,A.uY,A.um,A.uD,A.nx,A.nq,A.t5,A.tg,A.tj,A.r3,A.nA,A.oa,A.oM,A.tB,A.ro,A.uc,A.qB,A.ub,A.ua,A.nu,A.nt,A.lT,A.lV,A.lX,A.iq,A.oV,A.oP,A.oT,A.ps,A.pe,A.mk,A.ml,A.oe,A.op,A.oq,A.or,A.uO,A.uL,A.qV,A.nI,A.ts,A.qU,A.rL,A.r_])
r(A.bi,A.hs)
q(A.a4,[A.cI,A.jI,A.cu,A.j6,A.ke,A.jQ,A.kI,A.h3,A.fN,A.ii,A.bD,A.hj,A.kc,A.bs,A.iA])
q(A.A,[A.eE,A.eI,A.dl,A.eD])
r(A.bP,A.eE)
q(A.m0,[A.v2,A.px,A.rc,A.rd,A.u3,A.u2,A.uj,A.rf,A.rg,A.ri,A.rj,A.rh,A.re,A.nv,A.t6,A.tb,A.ta,A.t8,A.t7,A.te,A.td,A.tc,A.th,A.q7,A.qa,A.q5,A.tX,A.tW,A.r2,A.rt,A.rs,A.tH,A.tF,A.uo,A.up,A.rT,A.rS,A.ux,A.tM,A.tL,A.uf,A.ue,A.n4,A.uv,A.uw,A.oN,A.oJ,A.oF,A.m2,A.oZ,A.nj,A.ol,A.on,A.pr,A.pp,A.mr,A.mq,A.mp,A.ql,A.qn,A.qq,A.p7,A.p0,A.oE,A.oB,A.ox,A.ou,A.os,A.nW,A.nK,A.nR,A.nS,A.nT,A.nU,A.nP,A.nQ,A.nL,A.nM,A.nN,A.nO,A.nV,A.tl,A.mX,A.mY,A.mU,A.mT,A.mV,A.mQ,A.mP,A.mR,A.mS,A.tZ,A.u_,A.v8,A.mC,A.mz,A.mE,A.mG,A.mI,A.mB,A.mH,A.mM,A.mK,A.mJ,A.mD,A.mF,A.mL,A.mA,A.lE,A.lF,A.qK,A.lJ,A.to,A.tp,A.t1,A.nZ,A.n_,A.n0,A.oY,A.oX,A.rJ,A.rN,A.rK,A.rM,A.ry,A.rD,A.rG,A.rA,A.rF,A.rI,A.rB,A.rC,A.n3,A.n2,A.n1,A.qY,A.qZ,A.tR])
q(A.B,[A.S,A.dp,A.ai,A.aO,A.aN,A.dS,A.hF])
q(A.S,[A.dG,A.ab,A.dD,A.fO,A.kR])
r(A.dn,A.cl)
r(A.fw,A.dH)
r(A.e9,A.cp)
q(A.eZ,[A.kW,A.kX])
q(A.kW,[A.aF,A.hL,A.hM,A.f_,A.kY])
q(A.kX,[A.hN,A.kZ])
r(A.bj,A.ft)
q(A.bU,[A.fu,A.hO])
r(A.cD,A.fu)
r(A.fH,A.o0)
r(A.h1,A.cu)
q(A.qt,[A.q1,A.fo])
q(A.T,[A.bn,A.cx,A.kQ])
q(A.bn,[A.fM,A.hE])
r(A.ei,A.ej)
q(A.fY,[A.fX,A.ek])
q(A.ek,[A.hH,A.hJ])
r(A.hI,A.hH)
r(A.cN,A.hI)
r(A.hK,A.hJ)
r(A.bp,A.hK)
q(A.cN,[A.jm,A.jn])
q(A.bp,[A.jo,A.jp,A.jq,A.fZ,A.h_,A.h0,A.dz])
r(A.hT,A.kI)
q(A.a_,[A.f2,A.hf,A.hw,A.cz,A.hz,A.hq,A.fn,A.eS])
r(A.aY,A.f2)
r(A.aR,A.aY)
q(A.aS,[A.cY,A.eU,A.f0])
r(A.dN,A.cY)
r(A.ho,A.hr)
q(A.dO,[A.aI,A.a8])
q(A.d3,[A.c9,A.f4])
r(A.l9,A.kq)
q(A.kH,[A.cZ,A.eQ])
r(A.hG,A.c9)
r(A.dU,A.hz)
q(A.ll,[A.kD,A.l1])
q(A.cx,[A.d_,A.ht])
r(A.cy,A.hO)
r(A.hY,A.fU)
r(A.eF,A.hY)
q(A.k5,[A.hR,A.u6,A.rk,A.la])
r(A.tw,A.hR)
q(A.iz,[A.dq,A.lM,A.o8])
q(A.dq,[A.ig,A.ja,A.kk])
q(A.an,[A.lf,A.im,A.il,A.j9,A.j8,A.kl,A.hk,A.iX])
q(A.lf,[A.ih,A.jb])
r(A.rq,A.kx)
q(A.lR,[A.rl,A.eM,A.kA,A.ud])
r(A.r9,A.rl)
r(A.j7,A.fN)
r(A.tx,A.iy)
r(A.tz,A.tA)
r(A.lm,A.lk)
r(A.ug,A.lm)
q(A.bD,[A.ep,A.fF])
r(A.kE,A.hZ)
r(A.es,A.f5)
r(A.l4,A.iX)
r(A.tP,A.nB)
r(A.l5,A.tP)
r(A.jO,A.dh)
r(A.iu,A.io)
r(A.cC,A.hf)
q(A.ip,[A.oU,A.pQ])
r(A.hg,A.lN)
r(A.k4,A.hg)
r(A.fp,A.W)
q(A.rY,[A.jB,A.iB,A.nf,A.bF,A.fG,A.dy,A.bJ,A.ik,A.cr,A.fl,A.em,A.h2,A.hd,A.p5,A.eb,A.jj,A.cE,A.bY,A.fA,A.cR])
q(A.jf,[A.km,A.kd,A.js,A.ix,A.jD,A.iV,A.dF,A.jJ,A.jR,A.hb,A.iC])
r(A.iW,A.hb)
r(A.qQ,A.lP)
q(A.aE,[A.hi,A.er,A.jS,A.b1,A.bk,A.br,A.dC,A.h6,A.fv,A.e7])
r(A.oc,A.mN)
r(A.fQ,A.dJ)
r(A.o4,A.qd)
q(A.o4,[A.pu,A.qC,A.qW])
r(A.iU,A.jY)
q(A.ev,[A.eT,A.k_])
r(A.eu,A.k0)
r(A.cq,A.k_)
r(A.ew,A.dj)
r(A.it,A.aH)
q(A.it,[A.iZ,A.cG,A.et])
q(A.is,[A.kN,A.l8])
r(A.l_,A.mx)
r(A.l0,A.l_)
r(A.jP,A.l0)
r(A.l3,A.l2)
r(A.bH,A.l3)
q(A.aP,[A.dM,A.aJ])
r(A.eH,A.pY)
q(A.aJ,[A.hA,A.hu,A.eP,A.f7])
r(A.pz,A.pR)
r(A.my,A.iD)
r(A.cB,A.eq)
r(A.eN,A.pz)
q(A.i1,[A.kF,A.l6])
r(A.k6,A.eu)
r(A.kP,A.eD)
r(A.bZ,A.kP)
s(A.eE,A.kf)
s(A.i3,A.A)
s(A.hH,A.A)
s(A.hI,A.fB)
s(A.hJ,A.A)
s(A.hK,A.fB)
s(A.c9,A.kv)
s(A.f4,A.le)
s(A.hY,A.lg)
s(A.lm,A.k5)
s(A.l_,A.A)
s(A.l0,A.jr)
s(A.l2,A.kg)
s(A.l3,A.T)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",a1:"double",cd:"num",k:"String",Y:"bool",U:"Null",q:"List",j:"Object",N:"Map",D:"JSObject"},mangledNames:{},types:["~()","J<j?>(m_,eJ)","~(D)","U()","J<~>()","J<U>(c7)","J<~>(c7)","k(k)","~(i)","U(j,as)","i()","~(j,as)","~(j?)","~(@,@)","~(~())","i(aX,i)","U(D)","J<~>(hC)","Y(j?)","~(@)","j?(j?)","Y(k)","U(@)","~(a3)","J<~>(~)","k(N<k,j?>)","~(k,k)","U(j)","0&()","@(@)","Y(j?,j?)","Y(b_)","i(j?)","i(aX)","~(q<i>)","~(jM,i,i,i)","D()","@()","Y(ed)","~(j[as?])","~(k,@)","i(@,@)","~(j?,j?)","Y(ba)","J<dJ>()","Y(b9)","J<b7<~>>()","V<k,j?>(@,@)","J<q<N<k,j?>>>(k,q<j?>)","i(aH,i,i,i)","i(aH,i)","i(aX,i,i,b3)","~(jM,i)","@(k)","k(dx)","j?(N<k,j?>)","Y()","~(~)","k?(N<k,j?>)","i(k)","~(q<bR>)","~(h4)","V<k,cF>(k,ez)","co(@)","U(k,k[j?])","U(~)","N<k,j?>(j?,k)","cP<k>(j?,k)","~(c2)","~(ct)","J<aW>(aW)","aW(aW)","aW(j)","~(cM<q<i>>)","Y(cn)","k(i[i])","cT()","bG()","dB()","Y(bQ<@>)","dP<@,@>(b8<@>)","bQ<j?>(@)","i(i,i)","eg()","~(q<N<k,j?>>)","~(N<k,j?>?)","~(eC)","a_<q<i>>()","~(q<bE>)","i(i)","k(k?)","k?()","i(c0)","k(@)","j(c0)","j(b_)","i(b_,b_)","q<c0>(V<j,q<b_>>)","cq()","k(j?)","~(i,k,i)","r<@>?()","~(K,ag,K,~())","~(b3,i)","aX?(aH,i,i,i,i)","i(aH,i,i)","~(@,as)","i(aH?,i,i)","N<k,j?>(bH)","U(~())","~(k,k?)","i(aX,b3)","U(bl,bl)","N<k,j?>(bE)","i(i())","~(~(i,k,i),i,i,i,b3)","Y(ex)","i(ex,ex)","i(jM,i,i,i,i)","i(i(i),i)","i(vI,i)","i(vI,i,i)","j?(~)","@(@,k)","D(z<j?>)","U(@,as)","J<U>()","~(i,@)","D(D?)","~(df)","J<~>(i,c8)","J<~>(i)","c8()","J<D>(k)","U(ch)","J<U>(D)","D(j)","U(j?,as)","k?(j?)","~(dj)","D(D)","J<D>()","J<a_<q<i>>>()","i(aX,i,i)","J<b7<bW>>()","~(bW)","Y(eO)","Y(k,k)","J<dk>()","0&(j?,as)","~(cM<D>)","J<ba>(c7)","~(K?,ag?,K,j,as)","0^(K?,ag?,K,0^())<j?>","0^(K?,ag?,K,0^(1^),1^)<j?,j?>","0^(K?,ag?,K,0^(1^,2^),1^,2^)<j?,j?,j?>","0^()(K,ag,K,0^())<j?>","0^(1^)(K,ag,K,0^(1^))<j?,j?>","0^(1^,2^)(K,ag,K,0^(1^,2^))<j?,j?,j?>","aa?(K,ag,K,j,as?)","~(K?,ag?,K,~())","ct(K,ag,K,aw,~())","ct(K,ag,K,aw,~(ct))","~(K,ag,K,k)","~(k)","K(K?,ag?,K,vQ?,N<j?,j?>?)","0^(0^,0^)<cd>","ba(N<k,j?>)","bE(N<k,j?>)","a1(i)","N<k,j?>(ba)","0&(k,i?)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aF&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.hL&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.hM&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.f_&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.kY&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.hN&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;conflicts,hidden,pending":(a,b,c)=>d=>d instanceof A.kZ&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.CA(v.typeUniverse,JSON.parse('{"bl":"cJ","jA":"cJ","cV":"cJ","Fg":"ej","z":{"q":["1"],"ao":[],"B":["1"],"D":[],"m":["1"],"aM":["1"]},"j4":{"Y":[],"a6":[]},"fL":{"U":[],"a6":[]},"ao":{"D":[]},"cJ":{"ao":[],"D":[]},"j3":{"ha":[]},"o6":{"z":["1"],"q":["1"],"ao":[],"B":["1"],"D":[],"m":["1"],"aM":["1"]},"ds":{"a1":[],"ah":["cd"]},"fK":{"a1":[],"i":[],"ah":["cd"],"a6":[]},"j5":{"a1":[],"ah":["cd"],"a6":[]},"cH":{"k":[],"ah":["k"],"aM":["@"],"a6":[]},"cX":{"m":["2"]},"dg":{"cX":["1","2"],"m":["2"],"m.E":"2"},"hv":{"dg":["1","2"],"cX":["1","2"],"B":["2"],"m":["2"],"m.E":"2"},"hs":{"A":["2"],"q":["2"],"cX":["1","2"],"B":["2"],"m":["2"]},"bi":{"hs":["1","2"],"A":["2"],"q":["2"],"cX":["1","2"],"B":["2"],"m":["2"],"A.E":"2","m.E":"2"},"cI":{"a4":[]},"jI":{"a4":[]},"bP":{"A":["i"],"q":["i"],"B":["i"],"m":["i"],"A.E":"i"},"B":{"m":["1"]},"S":{"B":["1"],"m":["1"]},"dG":{"S":["1"],"B":["1"],"m":["1"],"S.E":"1","m.E":"1"},"cl":{"m":["2"],"m.E":"2"},"dn":{"cl":["1","2"],"B":["2"],"m":["2"],"m.E":"2"},"ab":{"S":["2"],"B":["2"],"m":["2"],"S.E":"2","m.E":"2"},"c_":{"m":["1"],"m.E":"1"},"fy":{"m":["2"],"m.E":"2"},"dH":{"m":["1"],"m.E":"1"},"fw":{"dH":["1"],"B":["1"],"m":["1"],"m.E":"1"},"cp":{"m":["1"],"m.E":"1"},"e9":{"cp":["1"],"B":["1"],"m":["1"],"m.E":"1"},"dp":{"B":["1"],"m":["1"],"m.E":"1"},"bt":{"m":["1"],"m.E":"1"},"eE":{"A":["1"],"q":["1"],"B":["1"],"m":["1"]},"dD":{"S":["1"],"B":["1"],"m":["1"],"S.E":"1","m.E":"1"},"ft":{"N":["1","2"]},"bj":{"ft":["1","2"],"N":["1","2"]},"dT":{"m":["1"],"m.E":"1"},"fu":{"bU":["1"],"cP":["1"],"B":["1"],"m":["1"]},"cD":{"bU":["1"],"cP":["1"],"B":["1"],"m":["1"]},"h1":{"cu":[],"a4":[]},"j6":{"a4":[]},"ke":{"a4":[]},"ju":{"F":[]},"hP":{"as":[]},"jQ":{"a4":[]},"bn":{"T":["1","2"],"N":["1","2"],"T.V":"2","T.K":"1"},"ai":{"B":["1"],"m":["1"],"m.E":"1"},"aO":{"B":["1"],"m":["1"],"m.E":"1"},"aN":{"B":["V<1,2>"],"m":["V<1,2>"],"m.E":"V<1,2>"},"fM":{"bn":["1","2"],"T":["1","2"],"N":["1","2"],"T.V":"2","T.K":"1"},"eX":{"jL":[],"dx":[]},"kr":{"m":["jL"],"m.E":"jL"},"eA":{"dx":[]},"lb":{"m":["dx"],"m.E":"dx"},"ei":{"ao":[],"D":[],"df":[],"a6":[]},"ej":{"ao":[],"D":[],"df":[],"a6":[]},"fY":{"ao":[],"D":[]},"lh":{"df":[]},"fX":{"ao":[],"vg":[],"D":[],"a6":[]},"ek":{"bm":["1"],"ao":[],"D":[],"aM":["1"]},"cN":{"A":["a1"],"q":["a1"],"bm":["a1"],"ao":[],"B":["a1"],"D":[],"aM":["a1"],"m":["a1"]},"bp":{"A":["i"],"q":["i"],"bm":["i"],"ao":[],"B":["i"],"D":[],"aM":["i"],"m":["i"]},"jm":{"cN":[],"nn":[],"A":["a1"],"q":["a1"],"bm":["a1"],"ao":[],"B":["a1"],"D":[],"aM":["a1"],"m":["a1"],"a6":[],"A.E":"a1"},"jn":{"cN":[],"no":[],"A":["a1"],"q":["a1"],"bm":["a1"],"ao":[],"B":["a1"],"D":[],"aM":["a1"],"m":["a1"],"a6":[],"A.E":"a1"},"jo":{"bp":[],"o1":[],"A":["i"],"q":["i"],"bm":["i"],"ao":[],"B":["i"],"D":[],"aM":["i"],"m":["i"],"a6":[],"A.E":"i"},"jp":{"bp":[],"o2":[],"A":["i"],"q":["i"],"bm":["i"],"ao":[],"B":["i"],"D":[],"aM":["i"],"m":["i"],"a6":[],"A.E":"i"},"jq":{"bp":[],"o3":[],"A":["i"],"q":["i"],"bm":["i"],"ao":[],"B":["i"],"D":[],"aM":["i"],"m":["i"],"a6":[],"A.E":"i"},"fZ":{"bp":[],"qx":[],"A":["i"],"q":["i"],"bm":["i"],"ao":[],"B":["i"],"D":[],"aM":["i"],"m":["i"],"a6":[],"A.E":"i"},"h_":{"bp":[],"qy":[],"A":["i"],"q":["i"],"bm":["i"],"ao":[],"B":["i"],"D":[],"aM":["i"],"m":["i"],"a6":[],"A.E":"i"},"h0":{"bp":[],"qz":[],"A":["i"],"q":["i"],"bm":["i"],"ao":[],"B":["i"],"D":[],"aM":["i"],"m":["i"],"a6":[],"A.E":"i"},"dz":{"bp":[],"c8":[],"A":["i"],"q":["i"],"bm":["i"],"ao":[],"B":["i"],"D":[],"aM":["i"],"m":["i"],"a6":[],"A.E":"i"},"kI":{"a4":[]},"hT":{"cu":[],"a4":[]},"aa":{"a4":[]},"r":{"J":["1"]},"cM":{"b8":["1"]},"hS":{"ct":[]},"hn":{"fr":["1"]},"f3":{"m":["1"],"m.E":"1"},"aR":{"aY":["1"],"f2":["1"],"a_":["1"],"a_.T":"1"},"dN":{"cY":["1"],"aS":["1"],"b7":["1"],"aS.T":"1"},"hr":{"b8":["1"]},"ho":{"hr":["1"],"b8":["1"]},"ka":{"F":[]},"h3":{"a4":[]},"dO":{"fr":["1"]},"aI":{"dO":["1"],"fr":["1"]},"a8":{"dO":["1"],"fr":["1"]},"hf":{"a_":["1"]},"d3":{"b8":["1"]},"c9":{"d3":["1"],"b8":["1"]},"f4":{"d3":["1"],"b8":["1"]},"aY":{"f2":["1"],"a_":["1"],"a_.T":"1"},"cY":{"aS":["1"],"b7":["1"],"aS.T":"1"},"aS":{"b7":["1"],"aS.T":"1"},"f2":{"a_":["1"]},"eR":{"b7":["1"]},"hw":{"a_":["1"],"a_.T":"1"},"cz":{"a_":["1"],"a_.T":"1"},"hG":{"c9":["1"],"d3":["1"],"cM":["1"],"b8":["1"]},"hz":{"a_":["2"]},"eU":{"aS":["2"],"b7":["2"],"aS.T":"2"},"dU":{"hz":["1","2"],"a_":["2"],"a_.T":"2"},"hx":{"b8":["1"]},"f0":{"aS":["2"],"b7":["2"],"aS.T":"2"},"hq":{"a_":["2"],"a_.T":"2"},"i2":{"vQ":[]},"f8":{"ag":[]},"ll":{"K":[]},"kD":{"K":[]},"l1":{"K":[]},"cx":{"T":["1","2"],"N":["1","2"],"T.V":"2","T.K":"1"},"d_":{"cx":["1","2"],"T":["1","2"],"N":["1","2"],"T.V":"2","T.K":"1"},"ht":{"cx":["1","2"],"T":["1","2"],"N":["1","2"],"T.V":"2","T.K":"1"},"dS":{"B":["1"],"m":["1"],"m.E":"1"},"hE":{"bn":["1","2"],"T":["1","2"],"N":["1","2"],"T.V":"2","T.K":"1"},"cy":{"bU":["1"],"cP":["1"],"B":["1"],"m":["1"]},"du":{"m":["1"],"m.E":"1"},"A":{"q":["1"],"B":["1"],"m":["1"]},"T":{"N":["1","2"]},"hF":{"B":["2"],"m":["2"],"m.E":"2"},"fU":{"N":["1","2"]},"eF":{"N":["1","2"]},"fO":{"S":["1"],"B":["1"],"m":["1"],"S.E":"1","m.E":"1"},"bU":{"cP":["1"],"B":["1"],"m":["1"]},"hO":{"bU":["1"],"cP":["1"],"B":["1"],"m":["1"]},"dP":{"b8":["1"]},"kQ":{"T":["k","@"],"N":["k","@"],"T.V":"@","T.K":"k"},"kR":{"S":["k"],"B":["k"],"m":["k"],"S.E":"k","m.E":"k"},"ig":{"dq":[]},"lf":{"an":["k","q<i>"]},"ih":{"an":["k","q<i>"],"an.T":"q<i>"},"im":{"an":["q<i>","k"],"an.T":"k"},"il":{"an":["k","q<i>"],"an.T":"q<i>"},"fN":{"a4":[]},"j7":{"a4":[]},"j9":{"an":["j?","k"],"an.T":"k"},"j8":{"an":["k","j?"],"an.T":"j?"},"ja":{"dq":[]},"jb":{"an":["k","q<i>"],"an.T":"q<i>"},"kk":{"dq":[]},"kl":{"an":["k","q<i>"],"an.T":"q<i>"},"hk":{"an":["q<i>","k"],"an.T":"k"},"wJ":{"ah":["wJ"]},"b2":{"ah":["b2"]},"a1":{"ah":["cd"]},"aw":{"ah":["aw"]},"i":{"ah":["cd"]},"q":{"B":["1"],"m":["1"]},"cd":{"ah":["cd"]},"jL":{"dx":[]},"cP":{"B":["1"],"m":["1"]},"k":{"ah":["k"]},"ay":{"ah":["wJ"]},"ii":{"a4":[]},"cu":{"a4":[]},"bD":{"a4":[]},"ep":{"a4":[]},"fF":{"a4":[]},"hj":{"a4":[]},"kc":{"a4":[]},"bs":{"a4":[]},"iA":{"a4":[]},"jw":{"a4":[]},"he":{"a4":[]},"kJ":{"F":[]},"bb":{"F":[]},"j1":{"F":[],"a4":[]},"lc":{"as":[]},"hZ":{"kh":[]},"bL":{"kh":[]},"kE":{"kh":[]},"jt":{"F":[]},"o3":{"q":["i"],"B":["i"],"m":["i"]},"c8":{"q":["i"],"B":["i"],"m":["i"]},"qz":{"q":["i"],"B":["i"],"m":["i"]},"o1":{"q":["i"],"B":["i"],"m":["i"]},"qx":{"q":["i"],"B":["i"],"m":["i"]},"o2":{"q":["i"],"B":["i"],"m":["i"]},"qy":{"q":["i"],"B":["i"],"m":["i"]},"nn":{"q":["a1"],"B":["a1"],"m":["a1"]},"no":{"q":["a1"],"B":["a1"],"m":["a1"]},"W":{"N":["2","3"]},"es":{"f5":["1","cP<1>"],"f5.E":"1"},"iX":{"an":["q<i>","bR"]},"l4":{"an":["q<i>","bR"],"an.T":"bR"},"jO":{"F":[]},"io":{"vh":[]},"iu":{"vh":[]},"cC":{"a_":["q<i>"],"a_.T":"q<i>"},"dh":{"F":[]},"k4":{"hg":[]},"fp":{"W":["k","k","1"],"N":["k","1"],"W.V":"1","W.K":"k","W.C":"k"},"iM":{"wS":[]},"jf":{"F":[]},"km":{"F":[]},"kd":{"F":[]},"js":{"F":[]},"ix":{"F":[]},"jD":{"F":[]},"iV":{"F":[]},"dF":{"F":[]},"jJ":{"F":[]},"jR":{"F":[]},"hb":{"F":[]},"iW":{"F":[]},"iC":{"F":[]},"ci":{"F":[]},"fT":{"F":[]},"aE":{"F":[]},"hi":{"F":[]},"er":{"F":[]},"jS":{"F":[]},"b1":{"F":[]},"bk":{"F":[]},"br":{"F":[]},"dC":{"F":[]},"h6":{"F":[]},"fv":{"F":[]},"e7":{"F":[]},"fQ":{"dJ":[]},"iI":{"F":[]},"jG":{"F":[]},"jN":{"F":[]},"jy":{"F":[]},"iU":{"bV":[],"ah":["bV"]},"eT":{"cq":[],"ah":["jZ"]},"bV":{"ah":["bV"]},"jY":{"bV":[],"ah":["bV"]},"jZ":{"ah":["jZ"]},"k_":{"ah":["jZ"]},"k0":{"F":[]},"eu":{"bb":[],"F":[]},"ev":{"ah":["jZ"]},"cq":{"ah":["jZ"]},"cQ":{"F":[]},"ew":{"dj":[]},"iZ":{"aH":[]},"kN":{"hl":[],"aX":[]},"bH":{"T":["k","@"],"N":["k","@"],"T.V":"@","T.K":"k"},"jP":{"A":["bH"],"q":["bH"],"B":["bH"],"m":["bH"],"A.E":"bH"},"cw":{"F":[]},"it":{"aH":[]},"is":{"hl":[],"aX":[]},"dM":{"aP":["dM"],"aP.E":"dM"},"eI":{"A":["cW"],"q":["cW"],"B":["cW"],"m":["cW"],"A.E":"cW"},"fn":{"a_":["1"],"a_.T":"1"},"cG":{"aH":[]},"aJ":{"aP":["aJ"]},"kO":{"hl":[],"aX":[]},"hA":{"aJ":[],"aP":["aJ"],"aP.E":"aJ"},"hu":{"aJ":[],"aP":["aJ"],"aP.E":"aJ"},"eP":{"aJ":[],"aP":["aJ"],"aP.E":"aJ"},"f7":{"aJ":[],"aP":["aJ"],"aP.E":"aJ"},"et":{"aH":[]},"l8":{"hl":[],"aX":[]},"fq":{"F":[]},"dl":{"A":["j?"],"q":["j?"],"B":["j?"],"m":["j?"],"A.E":"j?"},"eq":{"F":[]},"cB":{"F":[]},"eN":{"m_":[]},"kF":{"i1":["D"]},"l6":{"i1":["D"]},"k6":{"bb":[],"F":[]},"bZ":{"eD":["i"],"A":["i"],"q":["i"],"B":["i"],"m":["i"],"A.E":"i"},"eD":{"A":["1"],"q":["1"],"B":["1"],"m":["1"]},"kP":{"eD":["i"],"A":["i"],"q":["i"],"B":["i"],"m":["i"]},"eS":{"a_":["1"],"a_.T":"1"},"hy":{"b7":["1"]}}'))
A.Cz(v.typeUniverse,JSON.parse('{"eK":1,"jV":1,"iN":1,"fB":1,"kf":1,"eE":1,"i3":2,"fu":1,"dt":1,"bS":1,"ek":1,"b8":1,"ld":1,"h3":2,"hf":1,"le":1,"kv":1,"kq":1,"l9":1,"kH":1,"cZ":1,"eY":1,"c1":1,"hx":1,"aK":1,"lg":2,"fU":2,"hO":1,"hY":2,"dP":2,"iy":1,"iz":2,"hR":1,"iR":1,"iL":1,"jr":1,"kg":2,"bQ":1,"jj":1,"Ah":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",V:"SELECT op_id FROM lp_op_queue WHERE op_id IN (",M:"SELECT op_id FROM lp_outbox WHERE op_id IN (",B:"Time including microseconds is outside valid range",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was ",l:"store = ? AND record_id = ? AND state IN ('pending','failed')"}
var t=(function rtii(){var s=A.aj
return{fM:s("@<@>"),ie:s("Ah<j?>"),om:s("fn<z<j?>>"),hw:s("c2"),lo:s("df"),fW:s("vg"),kj:s("fp<k>"),iv:s("a3"),dF:s("vh()"),V:s("bP"),bU:s("bQ<j?>"),fw:s("dj"),bP:s("ah<@>"),p6:s("dk"),br:s("fr<D>"),n8:s("bE"),M:s("cD<k>"),lp:s("iH"),O:s("B<@>"),C:s("a4"),mA:s("F"),eZ:s("iS"),A:s("ba"),k4:s("fz"),pk:s("nn"),kI:s("no"),lW:s("bb"),gY:s("Fc"),nW:s("J<D>"),x:s("J<eh>"),mj:s("J<U>"),fP:s("J<ch?>"),an:s("J<j?>(m_,eJ)"),jN:s("J<eH?>"),co:s("cF"),w:s("fE"),cF:s("cG"),m6:s("o1"),bW:s("o2"),jx:s("o3"),nZ:s("fJ<@>"),U:s("m<@>"),gi:s("z<a3>"),aw:s("z<bQ<@>>"),i4:s("z<bR>"),mK:s("z<b9>"),iw:s("z<J<~>>"),mr:s("z<ed>"),W:s("z<D>"),dO:s("z<q<j?>>"),ic:s("z<N<k,j>>"),d:s("z<N<k,j?>>"),e8:s("z<jl>"),i7:s("z<dA>"),ox:s("z<dB>"),my:s("z<bG>"),k1:s("z<cn>"),g2:s("z<h8>"),bo:s("z<h9>"),fU:s("z<+controller,sync(cM<bW>,Y)>"),lw:s("z<+controller,sync(cM<~>,Y)>"),kC:s("z<+(cR,k)>"),lE:s("z<ew>"),dw:s("z<b7<@>>"),s:s("z<k>"),en:s("z<eB>"),bs:s("z<c8>"),az:s("z<eN>"),fV:s("z<eO>"),g7:s("z<b_>"),dg:s("z<c0>"),p8:s("z<kV>"),bi:s("z<f1>"),gk:s("z<a1>"),dG:s("z<@>"),t:s("z<i>"),fQ:s("z<aa?>"),c:s("z<j?>"),mf:s("z<k?>"),iy:s("aM<@>"),T:s("fL"),m:s("D"),bJ:s("b3"),g:s("bl"),dX:s("bm<@>"),d9:s("ao"),kk:s("du<dM>"),p3:s("du<aJ>"),hI:s("dv<@>"),ba:s("q<bE>"),ck:s("q<ba>"),ip:s("q<D>"),ew:s("q<N<k,j>>"),J:s("q<N<k,j?>>"),eT:s("q<dA>"),hg:s("q<dB>"),a6:s("q<bG>"),jX:s("q<h8>"),kR:s("q<co>"),bF:s("q<k>"),bR:s("q<eB>"),j:s("q<@>"),L:s("q<i>"),kS:s("q<j?>"),kM:s("je"),jD:s("fR"),ia:s("V<k,cF>"),gc:s("V<k,k>"),eB:s("V<k,j?>"),a3:s("fS<@,@>"),cy:s("N<k,cT>"),dV:s("N<k,i>"),f:s("N<@,@>"),G:s("N<k,j?>"),iZ:s("ab<k,@>"),r:s("eh"),a:s("ei"),dQ:s("cN"),aj:s("bp"),Z:s("dz"),P:s("U"),K:s("j"),ot:s("jH"),gq:s("cn"),e:s("aV"),lZ:s("Fi"),aK:s("+()"),ja:s("+(D,fs)"),cU:s("+(cR,k)"),mk:s("+(Y,D)"),kO:s("+basicSupport,supportsReadWriteUnsafe(Y,Y)"),mt:s("+(D?,D)"),gU:s("+conflicts,hidden,pending(i,i,i)"),lu:s("jL"),h:s("co"),hF:s("dD<k>"),cu:s("es<@>"),g_:s("et"),hq:s("bV"),ol:s("cq"),gE:s("k1"),l:s("as"),nv:s("k2"),h3:s("ez"),ha:s("b7<bW>"),ey:s("b7<~>"),ku:s("a_<q<i>>"),lI:s("k3"),hL:s("hg"),N:s("k"),eg:s("eB"),k5:s("hh"),n6:s("bJ"),Y:s("aW"),nw:s("cT"),em:s("eC"),E:s("ct"),q:s("kb"),aJ:s("a6"),do:s("cu"),hM:s("qx"),mC:s("qy"),oR:s("bZ"),nn:s("qz"),p:s("c8"),cx:s("cV"),ph:s("eF<k,k>"),jJ:s("kh"),e6:s("aH"),j2:s("hl"),n:s("eH"),h2:s("c_<ex>"),lS:s("bt<k>"),u:s("dJ"),oS:s("eL"),iq:s("aI<c8>"),ho:s("aI<i>"),Q:s("aI<~>"),R:s("dQ<D>"),d4:s("eS<D>"),nI:s("r<ch>"),a7:s("r<D>"),hl:s("r<0&>"),os:s("r<k>"),jz:s("r<c8>"),k:s("r<Y>"),_:s("r<@>"),hy:s("r<i>"),D:s("r<~>"),nf:s("b_"),mp:s("d_<j?,j?>"),fA:s("eW"),k8:s("cz<D>"),fb:s("cz<q<i>>"),mI:s("l7<bR>"),jy:s("d4<bW,~()>"),af:s("d4<~,Y()>"),lU:s("d4<~,~()>"),aP:s("a8<ch>"),h1:s("a8<D>"),ex:s("a8<Y>"),F:s("a8<~>"),on:s("li"),y:s("Y"),i:s("a1"),z:s("@"),mq:s("@(j)"),ng:s("@(j,as)"),S:s("i"),ma:s("bE?"),gK:s("J<U>?"),b3:s("ch?"),B:s("D?"),bE:s("q<bQ<@>>?"),lH:s("q<@>?"),b:s("N<k,j?>?"),nh:s("eh?"),X:s("j?"),dY:s("bG?"),lY:s("h7?"),jB:s("co?"),v:s("k?"),f8:s("cT?"),a_:s("bZ?"),he:s("eH?"),dd:s("b_?"),o9:s("Y?"),dz:s("a1?"),I:s("i?"),jh:s("cd?"),o:s("cd"),H:s("~"),cj:s("~()"),i6:s("~(j)"),b9:s("~(j,as)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.be=J.j2.prototype
B.c=J.z.prototype
B.b=J.fK.prototype
B.u=J.ds.prototype
B.a=J.cH.prototype
B.bf=J.bl.prototype
B.bg=J.ao.prototype
B.bJ=A.fX.prototype
B.bK=A.fZ.prototype
B.V=A.h_.prototype
B.d=A.dz.prototype
B.aC=J.jA.prototype
B.ag=J.cV.prototype
B.Z=new A.cB("Operation was cancelled")
B.ai=new A.fl(1,"hidden")
B.aM=new A.ih(127)
B.O=new A.ik(0,"changed")
B.aj=new A.ik(1,"deleted")
B.b2=new A.hw(A.aj("hw<q<i>>"))
B.aN=new A.cC(B.b2)
B.aO=new A.fH(A.EN(),A.aj("fH<i>"))
B.n=new A.ig()
B.aQ=new A.im()
B.ak=new A.lM()
B.aP=new A.il()
B.D={}
B.a7=new A.bj(B.D,[],A.aj("bj<k,j>"))
B.cA=new A.mj()
B.aR=new A.iL()
B.E=new A.iK()
B.al=new A.iN()
B.am=new A.iO()
B.aS=new A.iO()
B.aT=new A.j1()
B.an=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.aU=function() {
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
B.aZ=function(getTagFallback) {
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
B.aV=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.aY=function(hooks) {
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
B.aX=function(hooks) {
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
B.aW=function(hooks) {
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
B.ao=function(hooks) { return hooks; }

B.e=new A.o8()
B.q=new A.ja()
B.b_=new A.oc()
B.b0=new A.fR()
B.b1=new A.jw()
B.o=new A.pS()
B.cB=new A.aw(5e6)
B.cE=new A.aw(864e8)
B.S=new A.aw(5e5)
B.b6=new A.aw(3e8)
B.ar=new A.aw(1e6)
B.F=new A.qg()
B.k=new A.kk()
B.f=new A.kl()
B.P=new A.rX()
B.ap=new A.tt()
B.h=new A.l1()
B.l=new A.l4()
B.t=new A.lc()
B.b3=new A.iB(3,"ignore")
B.a_=new A.iB(4,"replace")
B.w=new A.nf(1,"full")
B.aq=new A.aw(0)
B.Q=new A.aw(16e3)
B.b4=new A.aw(2e5)
B.b5=new A.aw(3e5)
B.R=new A.aw(3e7)
B.cC=new A.aw(6048e8)
B.cD=new A.aw(7776e9)
B.a0=new A.bF(0,"text")
B.a1=new A.bF(1,"int")
B.a2=new A.bF(2,"real")
B.T=new A.bF(3,"bool")
B.a3=new A.bF(4,"date")
B.x=new A.bF(5,"enumValue")
B.a4=new A.bF(6,"json")
B.a5=new A.bF(7,"jsonList")
B.B=new A.bF(8,"ref")
B.b7=new A.fz(!1)
B.a6=new A.cE("x",1,"opfsExternalLocks")
B.as=new A.cE("y",2,"opfsExternalLocksWorkaround")
B.at=new A.eb("/database",0,"database")
B.au=new A.eb("/database-journal",1,"journal")
B.av=new A.fG(0,"live")
B.bh=new A.j8(null)
B.bi=new A.j9(null)
B.bj=new A.jb(255)
B.bk=new A.dv(B.aR,A.aj("dv<k>"))
B.aw=s([13,10],t.t)
B.a9=new A.bY(0,"unknown")
B.aa=new A.bY(1,"integer")
B.ab=new A.bY(2,"bigInt")
B.ac=new A.bY(3,"float")
B.ad=new A.bY(4,"text")
B.ae=new A.bY(5,"blob")
B.af=new A.bY(6,"$null")
B.aK=new A.bY(7,"boolean")
B.ax=s([B.a9,B.aa,B.ab,B.ac,B.ad,B.ae,B.af,B.aK],A.aj("z<bY>"))
B.aL=new A.fl(0,"visible")
B.bl=s([B.aL,B.ai],A.aj("z<fl>"))
B.bm=s([16777216,33554432,67108864,134217728,268435456,536870912,1073741824,2147483648,452984832,905969664],t.t)
B.r=new A.cr(0,"clean")
B.X=new A.cr(1,"dirty")
B.aJ=new A.cr(2,"inFlight")
B.N=new A.cr(3,"conflict")
B.Y=new A.cr(4,"error")
B.c4=new A.cr(5,"quarantine")
B.bn=s([B.r,B.X,B.aJ,B.N,B.Y,B.c4],A.aj("z<cr>"))
B.bb=new A.fA(0,"database")
B.bc=new A.fA(1,"journal")
B.ay=s([B.bb,B.bc],A.aj("z<fA>"))
B.bo=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.bd=new A.fG(1,"notArchived")
B.bp=s([B.av,B.bd],A.aj("z<fG>"))
B.bq=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.aA=new A.h2(0,"fileUpload")
B.aB=new A.h2(1,"fileRemove")
B.br=s([B.aA,B.aB],A.aj("z<h2>"))
B.ba=new A.cE("s",0,"opfsShared")
B.b8=new A.cE("i",3,"indexedDb")
B.b9=new A.cE("m",4,"inMemory")
B.bs=s([B.ba,B.a6,B.as,B.b8,B.b9],A.aj("z<cE>"))
B.bt=s([B.a0,B.a1,B.a2,B.T,B.a3,B.x,B.a4,B.a5,B.B],A.aj("z<bF>"))
B.i=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.p=new A.em(0,"upsert")
B.H=new A.em(1,"archive")
B.I=new A.em(2,"restore")
B.bu=s([B.p,B.H,B.I],A.aj("z<em>"))
B.bw=s([],A.aj("z<cF>"))
B.by=s([],t.my)
B.bv=s([],A.aj("z<ex>"))
B.m=s([],t.s)
B.bx=s([],t.t)
B.v=s([],t.c)
B.bz=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.bA=s(["*"],t.s)
B.bB=s([B.at,B.au],A.aj("z<eb>"))
B.bC=s(["id","updated"],t.s)
B.bD=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.aE=new A.cR(0,"opfs")
B.aF=new A.cR(1,"indexedDb")
B.bY=new A.cR(2,"inMemory")
B.bE=s([B.aE,B.aF,B.bY],A.aj("z<cR>"))
B.bF=new A.bj(B.D,[],A.aj("bj<k,k>"))
B.U=new A.bj(B.D,[],A.aj("bj<k,i>"))
B.y=new A.bj(B.D,[],A.aj("bj<k,j?>"))
B.bG=new A.bj(B.D,[],A.aj("bj<i,N<k,j?>(N<k,j?>)>"))
B.bH=new A.jj(11,"simpleSuccessResponse")
B.az=new A.dy(0,"createOrUpdate")
B.bI=new A.dy(1,"create")
B.z=new A.dy(2,"update")
B.C=new A.dy(3,"archive")
B.G=new A.dy(4,"restore")
B.cF=new A.p5(2,"readWriteCreate")
B.aD=new A.jB(0,"native")
B.bO=new A.jB(1,"web")
B.J=new A.aV(0,0,0,!1)
B.A=new A.aV(0,0,0,!0)
B.bP=new A.aV(0,0,1,!1)
B.j=new A.aV(0,1,0,!1)
B.K=new A.aV(1,0,0,!1)
B.a8=new A.hL(!1,!1)
B.bQ=new A.hN(0,0,0)
B.bL={id:0,archived:1,hidden:2,extra:3}
B.bR=new A.cD(B.bL,4,t.M)
B.bM={query:0,count:1,countDistinct:2,distinct:3,ids:4,explain:5,sum:6,avg:7,min:8,max:9,search:10}
B.bS=new A.cD(B.bM,11,t.M)
B.bT=new A.cD(B.D,0,t.M)
B.bN={open:0,close:1,health:2,capabilities:3,get:4,mutate_batch:5,compiled_query:6,analyze:7,wal_checkpoint:8,vacuum:9,prune_outbox:10,compact:11,run_maintenance:12,tx_begin:13,tx_get:14,tx_mutate_batch:15,tx_savepoint:16,tx_rollback_to:17,tx_release:18,tx_commit:19,tx_rollback:20,watch_query:21,watch_one:22,watch_cancel:23,sync_start:24,sync_stop:25,sync_now:26,sync_status:27,auth_required:28,sync_pause:29,sync_resume:30,sync_update_auth:31,sync_set_connectivity:32,file_probe:33,file_upload_begin:34,file_upload_chunk:35,file_upload_finish:36,file_list:37,file_open:38,file_remove:39,file_gc:40,file_enforce_storage_cap:41,conflicts_list:42,conflicts_get:43,conflicts_resolve:44,conflicts_accept_local:45,conflicts_accept_remote:46,conflicts_watch:47}
B.bU=new A.cD(B.bN,48,t.M)
B.bV=new A.hd(0,"insert")
B.bW=new A.hd(1,"update")
B.bX=new A.hd(2,"delete")
B.bZ=new A.hh(-1,null)
B.c_=new A.k7("_clientToken")
B.L=new A.bJ(0,"closed")
B.c0=new A.bJ(1,"opening")
B.aG=new A.bJ(2,"offline")
B.W=new A.bJ(3,"authRequired")
B.aH=new A.bJ(4,"idle")
B.c1=new A.bJ(5,"pulling")
B.c2=new A.bJ(6,"pushing")
B.c3=new A.bJ(7,"backoff")
B.aI=new A.bJ(8,"paused")
B.M=new A.aW(B.U,B.U,0,0,!1)
B.c5=A.bO("df")
B.c6=A.bO("vg")
B.c7=A.bO("nn")
B.c8=A.bO("no")
B.c9=A.bO("o1")
B.ca=A.bO("o2")
B.cb=A.bO("o3")
B.cc=A.bO("D")
B.cd=A.bO("j")
B.ce=A.bO("qx")
B.cf=A.bO("qy")
B.cg=A.bO("qz")
B.ch=A.bO("c8")
B.ah=new A.hk(!1)
B.ci=new A.hk(!0)
B.cj=new A.cw(14)
B.ck=new A.cw(522)
B.cl=new A.cw(778)
B.cm=new A.aK(B.h,A.E2())
B.cn=new A.aK(B.h,A.DZ())
B.co=new A.aK(B.h,A.E6())
B.cp=new A.aK(B.h,A.E_())
B.cq=new A.aK(B.h,A.E0())
B.cr=new A.aK(B.h,A.E1())
B.cs=new A.aK(B.h,A.E3())
B.ct=new A.aK(B.h,A.E5())
B.cu=new A.aK(B.h,A.E7())
B.cv=new A.aK(B.h,A.E8())
B.cw=new A.aK(B.h,A.E9())
B.cx=new A.aK(B.h,A.Ea())
B.cy=new A.aK(B.h,A.E4())
B.cz=new A.i2(null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.tv=null
$.e3=A.n([],A.aj("z<j>"))
$.zd=null
$.xi=null
$.py=0
$.vG=A.Ds()
$.wM=null
$.wL=null
$.z6=null
$.yU=null
$.ze=null
$.uN=null
$.v_=null
$.wi=null
$.tI=A.n([],A.aj("z<q<j>?>"))
$.fb=null
$.i6=null
$.i7=null
$.w8=!1
$.v=B.h
$.tK=null
$.xL=null
$.xM=null
$.xN=null
$.xO=null
$.vR=A.rw("_lastQuoRemDigits")
$.vS=A.rw("_lastQuoRemUsed")
$.hp=A.rw("_lastRemUsed")
$.vT=A.rw("_lastRem_nsh")
$.xA=""
$.xB=null
$.yr=null
$.ur=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"F8","e4",()=>A.Ex("_$dart_dartClosure"))
s($,"FL","ly",()=>A.vz(0))
s($,"G8","A1",()=>B.h.bX(new A.v2(),A.aj("J<~>")))
s($,"G3","zZ",()=>A.n([new J.j3()],A.aj("z<ha>")))
s($,"Fq","zx",()=>A.cv(A.qw({
toString:function(){return"$receiver$"}})))
s($,"Fr","zy",()=>A.cv(A.qw({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Fs","zz",()=>A.cv(A.qw(null)))
s($,"Ft","zA",()=>A.cv(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Fw","zD",()=>A.cv(A.qw(void 0)))
s($,"Fx","zE",()=>A.cv(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Fv","zC",()=>A.cv(A.xx(null)))
s($,"Fu","zB",()=>A.cv(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Fz","zG",()=>A.cv(A.xx(void 0)))
s($,"Fy","zF",()=>A.cv(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"FD","wt",()=>A.BU())
s($,"Fe","dc",()=>$.A1())
s($,"Fd","zu",()=>A.Cb(!1,B.h,t.y))
s($,"FN","zL",()=>{var q=t.z
return A.nz(null,null,null,q,q)})
s($,"FS","zQ",()=>A.vz(4096))
s($,"FQ","zO",()=>new A.uf().$0())
s($,"FR","zP",()=>new A.ue().$0())
s($,"FF","wu",()=>A.Bd(A.bv(A.n([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
r($,"FE","zI",()=>A.vz(0))
s($,"F9","zs",()=>A.l(["iso_8859-1:1987",B.q,"iso-ir-100",B.q,"iso_8859-1",B.q,"iso-8859-1",B.q,"latin1",B.q,"l1",B.q,"ibm819",B.q,"cp819",B.q,"csisolatin1",B.q,"iso-ir-6",B.n,"ansi_x3.4-1968",B.n,"ansi_x3.4-1986",B.n,"iso_646.irv:1991",B.n,"iso646-us",B.n,"us-ascii",B.n,"us",B.n,"ibm367",B.n,"cp367",B.n,"csascii",B.n,"ascii",B.n,"csutf8",B.k,"utf-8",B.k],t.N,A.aj("dq")))
s($,"FK","ce",()=>A.rm(0))
s($,"FJ","fj",()=>A.rm(1))
s($,"FH","ww",()=>$.fj().bA(0))
s($,"FG","wv",()=>A.rm(1e4))
r($,"FI","zJ",()=>A.ac("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1))
s($,"FM","zK",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"FO","zM",()=>A.ac("^[\\-\\.0-9A-Z_a-z~]*$",!0))
s($,"FP","zN",()=>typeof URLSearchParams=="function")
s($,"FV","lz",()=>A.lu(B.cd))
s($,"Fj","wp",()=>{A.Bn()
return $.py})
s($,"FW","zS",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"Fh","vb",()=>{var q=new A.tu(new DataView(new ArrayBuffer(A.D1(8))))
q.nf()
return q})
s($,"Fa","zt",()=>J.A5(B.bK.gaz(A.Be(A.bv(A.n([1],t.t)))),0,null).getInt8(0)===1?B.aS:B.am)
s($,"F3","wo",()=>A.ac("^[\\w!#%&'*+\\-.^`|~]+$",!0))
s($,"FY","vc",()=>A.ac("\\r\\n|\\r|\\n",!0))
s($,"Ff","zv",()=>A.xm())
s($,"FT","wx",()=>A.ac("^[\\x00-\\x7F]+$",!0))
s($,"FU","zR",()=>A.ac('["\\x00-\\x1F\\x7F]',!0))
s($,"Gc","A2",()=>A.ac('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0))
s($,"FX","zT",()=>A.ac("(?:\\r\\n)?[ \\t]+",!0))
s($,"G0","zW",()=>A.ac('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0))
s($,"G_","zV",()=>A.ac("\\\\(.)",!0))
s($,"G7","A0",()=>A.ac('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0))
s($,"Gd","A3",()=>A.ac("(?:"+$.zT().a+")*",!0))
s($,"G2","zY",()=>A.xn())
s($,"G9","wz",()=>A.ac("^[a-z0-9]{15}$",!0))
s($,"F7","zr",()=>A.wX("declaredNames"))
s($,"Fp","wr",()=>new A.j())
s($,"FB","zH",()=>A.ac("^[0-9a-f]{64}$",!0))
s($,"FZ","zU",()=>A.ac("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0))
s($,"G5","wy",()=>new A.mt($.wq()))
s($,"Fm","zw",()=>new A.pu(A.ac("/",!0),A.ac("[^/]$",!0),A.ac("^/",!0)))
s($,"Fo","lx",()=>new A.qW(A.ac("[/\\\\]",!0),A.ac("[^/\\\\]$",!0),A.ac("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0),A.ac("^[/\\\\](?![/\\\\])",!0)))
s($,"Fn","ic",()=>new A.qC(A.ac("/",!0),A.ac("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0),A.ac("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0),A.ac("^/",!0)))
s($,"Fl","wq",()=>A.BF())
s($,"F6","zq",()=>$.fj().c_(0,63).bA(0))
s($,"F5","zp",()=>{var q=$.fj()
return q.c_(0,63).f8(0,q)})
s($,"F4","lw",()=>A.xn())
s($,"FA","ws",()=>A.wX(null))
s($,"G4","A_",()=>A.B0(A.n(["files","blocks"],t.s)))
s($,"Fb","va",()=>{var q,p,o=A.G(t.N,A.aj("eb"))
for(q=0;q<2;++q){p=B.bB[q]
o.j(0,p.c,p)}return o})
s($,"G1","zX",()=>A.xm())
r($,"FC","id",()=>{var q="navigator"
return A.AU(A.AV(A.wg(A.zi(),q),"locks"))?A.wg(A.wg(A.zi(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.ej,ArrayBuffer:A.ei,ArrayBufferView:A.fY,DataView:A.fX,Float32Array:A.jm,Float64Array:A.jn,Int16Array:A.jo,Int32Array:A.jp,Int8Array:A.jq,Uint16Array:A.fZ,Uint32Array:A.h_,Uint8ClampedArray:A.h0,CanvasPixelArray:A.h0,Uint8Array:A.dz})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ek.$nativeSuperclassTag="ArrayBufferView"
A.hH.$nativeSuperclassTag="ArrayBufferView"
A.hI.$nativeSuperclassTag="ArrayBufferView"
A.cN.$nativeSuperclassTag="ArrayBufferView"
A.hJ.$nativeSuperclassTag="ArrayBufferView"
A.hK.$nativeSuperclassTag="ArrayBufferView"
A.bp.$nativeSuperclassTag="ArrayBufferView"})()
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
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.EL
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
