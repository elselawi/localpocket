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
if(a[b]!==s){A.GS(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.l(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.xP(b)
return new s(c,this)}:function(){if(s===null)s=A.xP(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.xP(a).prototype
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
xX(a,b,c,d){return{i:a,p:b,e:c,x:d}},
wo(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.xV==null){A.Go()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.z8("Return interceptor for "+A.q(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.uH
if(o==null)o=$.uH=A.wn(n)
p=q[o]}if(p!=null)return p
p=A.Gx(a)
if(p!=null)return p
if(typeof a=="function")return B.bw
s=Object.getPrototypeOf(a)
if(s==null)return B.aO
if(s===Object.prototype)return B.aO
if(typeof q=="function"){o=$.uH
if(o==null)o=$.uH=A.wn(n)
Object.defineProperty(q,o,{value:B.al,enumerable:false,writable:true,configurable:true})
return B.al}return B.al},
x1(a,b){if(a<0||a>4294967295)throw A.b(A.ai(a,0,4294967295,"length",null))
return J.yJ(new Array(a),b)},
yI(a,b){if(a<0)throw A.b(A.O("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("z<0>"))},
x0(a,b){if(a<0)throw A.b(A.O("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("z<0>"))},
yJ(a,b){var s=A.l(a,b.i("z<0>"))
s.$flags=1
return s},
Cz(a,b){return J.yb(a,b)},
yK(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
CC(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.yK(r))break;++b}return b},
yL(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.yK(r))break}return b},
dn(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.h3.prototype
return J.jH.prototype}if(typeof a=="string")return J.cW.prototype
if(a==null)return J.h4.prototype
if(typeof a=="boolean")return J.jG.prototype
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
if(typeof a=="symbol")return J.ev.prototype
if(typeof a=="bigint")return J.b9.prototype
return a}if(a instanceof A.j)return a
return J.wo(a)},
J(a){if(typeof a=="string")return J.cW.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
if(typeof a=="symbol")return J.ev.prototype
if(typeof a=="bigint")return J.b9.prototype
return a}if(a instanceof A.j)return a
return J.wo(a)},
aw(a){if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
if(typeof a=="symbol")return J.ev.prototype
if(typeof a=="bigint")return J.b9.prototype
return a}if(a instanceof A.j)return a
return J.wo(a)},
Gg(a){if(typeof a=="number")return J.dI.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.d7.prototype
return a},
Gh(a){if(typeof a=="number")return J.dI.prototype
if(typeof a=="string")return J.cW.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.d7.prototype
return a},
wm(a){if(typeof a=="string")return J.cW.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.d7.prototype
return a},
mi(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
if(typeof a=="symbol")return J.ev.prototype
if(typeof a=="bigint")return J.b9.prototype
return a}if(a instanceof A.j)return a
return J.wo(a)},
v(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dn(a).W(a,b)},
a1(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.AN(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.J(a).h(a,b)},
bT(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.AN(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.aw(a).j(a,b,c)},
bU(a,b){return J.aw(a).t(a,b)},
BJ(a,b){return J.aw(a).J(a,b)},
ya(a,b){return J.wm(a).h_(a,b)},
wO(a){return J.mi(a).lw(a)},
BK(a,b,c){return J.mi(a).h0(a,b,c)},
BL(a){return J.mi(a).lx(a)},
dr(a,b,c){return J.mi(a).h1(a,b,c)},
em(a,b){return J.aw(a).h3(a,b)},
BM(a,b,c){return J.Gg(a).j3(a,b,c)},
yb(a,b){return J.Gh(a).T(a,b)},
BN(a,b){return J.J(a).E(a,b)},
mq(a,b){return J.aw(a).a2(a,b)},
yc(a,b){return J.aw(a).dv(a,b)},
BO(a){return J.mi(a).gaF(a)},
bV(a){return J.aw(a).gC(a)},
Z(a){return J.dn(a).gL(a)},
c8(a){return J.J(a).gB(a)},
iS(a){return J.J(a).gV(a)},
K(a){return J.aw(a).gu(a)},
wP(a){return J.aw(a).gZ(a)},
av(a){return J.J(a).gk(a)},
ds(a){return J.dn(a).gag(a)},
wQ(a){return J.aw(a).gaR(a)},
BP(a,b,c){return J.aw(a).eY(a,b,c)},
aE(a,b,c){return J.aw(a).cj(a,b,c)},
BQ(a,b,c){return J.wm(a).dE(a,b,c)},
BR(a,b){return J.J(a).sk(a,b)},
BS(a,b,c,d,e){return J.aw(a).a9(a,b,c,d,e)},
mr(a,b){return J.aw(a).b_(a,b)},
yd(a,b){return J.aw(a).cs(a,b)},
BT(a,b){return J.wm(a).f2(a,b)},
BU(a,b){return J.wm(a).N(a,b)},
wR(a,b){return J.aw(a).cn(a,b)},
BV(a){return J.aw(a).dM(a)},
ao(a){return J.dn(a).m(a)},
ye(a,b){return J.aw(a).jL(a,b)},
jE:function jE(){},
jG:function jG(){},
h4:function h4(){},
as:function as(){},
cY:function cY(){},
kb:function kb(){},
d7:function d7(){},
bs:function bs(){},
b9:function b9(){},
ev:function ev(){},
z:function z(a){this.$ti=a},
jF:function jF(){},
p1:function p1(a){this.$ti=a},
en:function en(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dI:function dI(){},
h3:function h3(){},
jH:function jH(){},
cW:function cW(){}},A={x4:function x4(){},
j8(a,b,c){if(t.O.b(a))return new A.i_(a,b.i("@<0>").a_(c).i("i_<1,2>"))
return new A.dw(a,b.i("@<0>").a_(c).i("dw<1,2>"))},
yN(a){return new A.cX("Field '"+a+"' has been assigned during initialization.")},
yO(a){return new A.cX("Field '"+a+"' has not been initialized.")},
CD(a){return new A.cX("Field '"+a+"' has already been initialized.")},
wr(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
an(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
eS(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
bD(a,b,c){return a},
xW(a){var s,r
for(s=$.ef.length,r=0;r<s;++r)if(a===$.ef[r])return!0
return!1},
c3(a,b,c,d){A.aU(b,"start")
if(c!=null){A.aU(c,"end")
if(b>c)A.y(A.ai(b,0,c,"start",null))}return new A.c2(a,b,c,d.i("c2<0>"))},
dM(a,b,c,d){if(t.O.b(a))return new A.dD(a,b,c.i("@<0>").a_(d).i("dD<1,2>"))
return new A.cx(a,b,c.i("@<0>").a_(d).i("cx<1,2>"))},
z3(a,b,c){var s="takeCount"
A.iT(b,s)
A.aU(b,s)
if(t.O.b(a))return new A.fP(a,b,c.i("fP<0>"))
return new A.dX(a,b,c.i("dX<0>"))},
z2(a,b,c){var s="count"
if(t.O.b(a)){A.iT(b,s)
A.aU(b,s)
return new A.er(a,b,c.i("er<0>"))}A.iT(b,s)
A.aU(b,s)
return new A.cB(a,b,c.i("cB<0>"))},
ar(){return new A.bl("No element")},
h1(){return new A.bl("Too many elements")},
yH(){return new A.bl("Too few elements")},
kr(a,b,c,d){if(c-b<=32)A.Da(a,b,c,d)
else A.D9(a,b,c,d)},
Da(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.J(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
D9(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.b.O(a5-a4+1,6),h=a4+i,g=a5-i,f=B.b.O(a4+a5,2),e=f-i,d=f+i,c=J.J(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
A.kr(a3,a4,r-2,a6)
A.kr(a3,q+2,a5,a6)
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
break}}A.kr(a3,r,q,a6)}else A.kr(a3,r,q,a6)},
tZ:function tZ(a){this.a=0
this.b=a},
tF:function tF(a){this.a=0
this.b=a},
da:function da(){},
j9:function j9(a,b){this.a=a
this.$ti=b},
dw:function dw(a,b){this.a=a
this.$ti=b},
i_:function i_(a,b){this.a=a
this.$ti=b},
hW:function hW(){},
tG:function tG(a,b){this.a=a
this.b=b},
br:function br(a,b){this.a=a
this.$ti=b},
cX:function cX(a){this.a=a},
kh:function kh(a){this.a=a},
bX:function bX(a){this.a=a},
wy:function wy(){},
qF:function qF(){},
D:function D(){},
Q:function Q(){},
c2:function c2(a,b,c,d){var _=this
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
cx:function cx(a,b,c){this.a=a
this.b=b
this.$ti=c},
dD:function dD(a,b,c){this.a=a
this.b=b
this.$ti=c},
jV:function jV(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ac:function ac(a,b,c){this.a=a
this.b=b
this.$ti=c},
bf:function bf(a,b,c){this.a=a
this.b=b
this.$ti=c},
d9:function d9(a,b,c){this.a=a
this.b=b
this.$ti=c},
fR:function fR(a,b,c){this.a=a
this.b=b
this.$ti=c},
js:function js(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dX:function dX(a,b,c){this.a=a
this.b=b
this.$ti=c},
fP:function fP(a,b,c){this.a=a
this.b=b
this.$ti=c},
kG:function kG(a,b,c){this.a=a
this.b=b
this.$ti=c},
cB:function cB(a,b,c){this.a=a
this.b=b
this.$ti=c},
er:function er(a,b,c){this.a=a
this.b=b
this.$ti=c},
kq:function kq(a,b,c){this.a=a
this.b=b
this.$ti=c},
dE:function dE(a){this.$ti=a},
jp:function jp(a){this.$ti=a},
by:function by(a,b){this.a=a
this.$ti=b},
kU:function kU(a,b){this.a=a
this.$ti=b},
fU:function fU(){},
kL:function kL(){},
eV:function eV(){},
dS:function dS(a,b){this.a=a
this.$ti=b},
kE:function kE(a){this.a=a},
iA:function iA(){},
Cb(){throw A.b(A.Y("Cannot modify unmodifiable Map"))},
Cc(){throw A.b(A.Y("Cannot modify constant Set"))},
B3(a){var s=A.B2(a)
if(s!=null)return s
return"minified:"+a},
AN(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ao(a)
return s},
ht(a){var s,r=$.yU
if(r==null)r=$.yU=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
hu(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
D0(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.cX(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
ke(a){var s,r,q,p
if(a instanceof A.j)return A.bh(A.bp(a),null)
s=J.dn(a)
if(s===B.bv||s===B.bx||t.cx.b(a)){r=B.au(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bh(A.bp(a),null)},
yW(a){var s,r,q
if(a==null||typeof a=="number"||A.co(a))return J.ao(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dy)return a.m(0)
if(a instanceof A.fd)return a.lj(!0)
s=$.BD()
for(r=0;r<1;++r){q=s[r].vR(a)
if(q!=null)return q}return"Instance of '"+A.ke(a)+"'"},
CX(){return Date.now()},
D_(){var s,r
if($.qf!==0)return
$.qf=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.qf=1e6
$.qg=new A.qe(r)},
CW(){if(!!self.location)return self.location.href
return null},
yT(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
D1(a){var s,r,q,p=A.l([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.E)(a),++r){q=a[r]
if(!A.aC(q))throw A.b(A.eg(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.b.a6(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.eg(q))}return A.yT(p)},
yX(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.aC(q))throw A.b(A.eg(q))
if(q<0)throw A.b(A.eg(q))
if(q>65535)return A.D1(a)}return A.yT(a)},
D2(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bc(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.b.a6(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.ai(a,0,1114111,null,null))},
D3(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.b.aC(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.b.O(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
bb(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
xg(a){return a.c?A.bb(a).getUTCFullYear()+0:A.bb(a).getFullYear()+0},
xe(a){return a.c?A.bb(a).getUTCMonth()+1:A.bb(a).getMonth()+1},
qd(a){return a.c?A.bb(a).getUTCDate()+0:A.bb(a).getDate()+0},
xc(a){return a.c?A.bb(a).getUTCHours()+0:A.bb(a).getHours()+0},
xd(a){return a.c?A.bb(a).getUTCMinutes()+0:A.bb(a).getMinutes()+0},
xf(a){return a.c?A.bb(a).getUTCSeconds()+0:A.bb(a).getSeconds()+0},
yV(a){return a.c?A.bb(a).getUTCMilliseconds()+0:A.bb(a).getMilliseconds()+0},
CZ(a){return B.b.aC((a.c?A.bb(a).getUTCDay()+0:A.bb(a).getDay()+0)+6,7)+1},
CY(a){var s=a.$thrownJsError
if(s==null)return null
return A.ab(s)},
kf(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aA(a,s)
a.$thrownJsError=s
s.stack=b.m(0)}},
we(a,b){var s,r="index"
if(!A.aC(b))return new A.bq(!0,b,r,null)
s=J.av(a)
if(b<0||b>=s)return A.jB(b,s,a,null,r)
return A.qA(b,r)},
G7(a,b,c){if(a<0||a>c)return A.ai(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ai(b,a,c,"end",null)
return new A.bq(!0,b,"end",null)},
eg(a){return new A.bq(!0,a,null,null)},
b(a){return A.aA(a,new Error())},
aA(a,b){var s
if(a==null)a=new A.cG()
b.dartException=a
s=A.GT
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
GT(){return J.ao(this.dartException)},
y(a,b){throw A.aA(a,b==null?new Error():b)},
C(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.y(A.EQ(a,b,c),s)},
EQ(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.ck("'"+s+"': Cannot "+o+" "+l+k+n)},
E(a){throw A.b(A.ap(a))},
cH(a){var s,r,q,p,o,n
a=A.AU(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.l([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.rh(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ri(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
z7(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
x5(a,b){var s=b==null,r=s?null:b.method
return new A.jI(a,r,s?null:b.receiver)},
M(a){if(a==null)return new A.k6(a)
if(a instanceof A.fQ)return A.dp(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.dp(a,a.dartException)
return A.FB(a)},
dp(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
FB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.a6(r,16)&8191)===10)switch(q){case 438:return A.dp(a,A.x5(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.dp(a,new A.hn())}}if(a instanceof TypeError){p=$.Bd()
o=$.Be()
n=$.Bf()
m=$.Bg()
l=$.Bj()
k=$.Bk()
j=$.Bi()
$.Bh()
i=$.Bm()
h=$.Bl()
g=p.bv(s)
if(g!=null)return A.dp(a,A.x5(s,g))
else{g=o.bv(s)
if(g!=null){g.method="call"
return A.dp(a,A.x5(s,g))}else if(n.bv(s)!=null||m.bv(s)!=null||l.bv(s)!=null||k.bv(s)!=null||j.bv(s)!=null||m.bv(s)!=null||i.bv(s)!=null||h.bv(s)!=null)return A.dp(a,new A.hn())}return A.dp(a,new A.kK(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.hF()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.dp(a,new A.bq(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.hF()
return a},
ab(a){var s
if(a instanceof A.fQ)return a.b
if(a==null)return new A.ik(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.ik(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
mj(a){if(a==null)return J.Z(a)
if(typeof a=="object")return A.ht(a)
return J.Z(a)},
Gd(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
Ge(a,b){var s,r=a.length
for(s=0;s<r;++s)b.t(0,a[s])
return b},
F0(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.yv("Unsupported number of arguments for wrapped closure"))},
dl(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.G1(a,b)
a.$identity=s
return s},
G1(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.F0)},
C5(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.qP().constructor.prototype):Object.create(new A.fD(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.yo(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.C1(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.yo(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
C1(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.BY)}throw A.b("Error in functionType of tearoff")},
C2(a,b,c,d){var s=A.ym
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
yo(a,b,c,d){if(c)return A.C4(a,b,d)
return A.C2(b.length,d,a,b)},
C3(a,b,c,d){var s=A.ym,r=A.BZ
switch(b?-1:a){case 0:throw A.b(new A.kn("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
C4(a,b,c){var s,r
if($.yk==null)$.yk=A.yj("interceptor")
if($.yl==null)$.yl=A.yj("receiver")
s=b.length
r=A.C3(s,c,a,b)
return r},
xP(a){return A.C5(a)},
BY(a,b){return A.iu(v.typeUniverse,A.bp(a.a),b)},
ym(a){return a.a},
BZ(a){return a.b},
yj(a){var s,r,q,p=new A.fD("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.O("Field name "+a+" not found.",null))},
wn(a){return v.getIsolateTag(a)},
GX(a,b){var s=$.t
if(s===B.f)return a
return s.h2(a,b)},
AX(){return v.G},
I_(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Gx(a){var s,r,q,p,o,n=$.AL.$1(a),m=$.wf[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.wv[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.Au.$2(a,n)
if(q!=null){m=$.wf[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.wv[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.wx(s)
$.wf[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.wv[n]=s
return s}if(p==="-"){o=A.wx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.AR(a,s)
if(p==="*")throw A.b(A.z8(n))
if(v.leafTags[n]===true){o=A.wx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.AR(a,s)},
AR(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.xX(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
wx(a){return J.xX(a,!1,null,!!a.$ibt)},
Gz(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.wx(s)
else return J.xX(s,c,null,null)},
Go(){if(!0===$.xV)return
$.xV=!0
A.Gp()},
Gp(){var s,r,q,p,o,n,m,l
$.wf=Object.create(null)
$.wv=Object.create(null)
A.Gn()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.AT.$1(o)
if(n!=null){m=A.Gz(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Gn(){var s,r,q,p,o,n,m=B.b6()
m=A.fu(B.b7,A.fu(B.b8,A.fu(B.av,A.fu(B.av,A.fu(B.b9,A.fu(B.ba,A.fu(B.bb(B.au),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.AL=new A.ws(p)
$.Au=new A.wt(o)
$.AT=new A.wu(n)},
fu(a,b){return a(b)||b},
E9(a,b){var s
for(s=0;s<a.length;++s)if(!J.v(a[s],b[s]))return!1
return!0},
G5(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
x3(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.X("Illegal RegExp pattern ("+String(o)+")",a,null))},
GM(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.eu){s=B.a.aa(a,c)
return b.b.test(s)}else return!J.ya(b,B.a.aa(a,c)).gB(0)},
AJ(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
AU(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
x(a,b,c){var s
if(typeof b=="string")return A.GO(a,b,c)
if(b instanceof A.eu){s=b.gkU()
s.lastIndex=0
return a.replace(s,A.AJ(c))}return A.GN(a,b,c)},
GN(a,b,c){var s,r,q,p
for(s=J.ya(b,a),s=s.gu(s),r=0,q="";s.l();){p=s.gn()
q=q+a.substring(r,p.gH())+c
r=p.gG()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
GO(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.AU(b),"g"),A.AJ(c))},
Aq(a){return a},
AY(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.h_(0,a),s=new A.l6(s.a,s.b,s.c),r=t.lu,q=0,p="";s.l();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.q(A.Aq(B.a.q(a,q,m)))+A.q(c.$1(o))
q=m+n[0].length}s=p+A.q(A.Aq(B.a.aa(a,q)))
return s.charCodeAt(0)==0?s:s},
GP(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.AZ(a,s,s+b.length,c)},
AZ(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
aB:function aB(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
ih:function ih(a,b){this.a=a
this.b=b},
fe:function fe(a,b){this.a=a
this.b=b},
lE:function lE(a,b){this.a=a
this.b=b},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
lF:function lF(a){this.a=a},
fL:function fL(){},
nk:function nk(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a,b,c){this.a=a
this.b=b
this.$ti=c},
ea:function ea(a,b){this.a=a
this.$ti=b},
fa:function fa(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fM:function fM(){},
cs:function cs(a,b,c){this.a=a
this.b=b
this.$ti=c},
oW:function oW(){},
h0:function h0(a,b){this.a=a
this.$ti=b},
qe:function qe(a){this.a=a},
hA:function hA(){},
rh:function rh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hn:function hn(){},
jI:function jI(a,b,c){this.a=a
this.b=b
this.c=c},
kK:function kK(a){this.a=a},
k6:function k6(a){this.a=a},
fQ:function fQ(a,b){this.a=a
this.b=b},
ik:function ik(a){this.a=a
this.b=null},
dy:function dy(){},
mR:function mR(){},
mS:function mS(){},
rf:function rf(){},
qP:function qP(){},
fD:function fD(a,b){this.a=a
this.b=b},
kn:function kn(a){this.a=a},
bu:function bu(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
p2:function p2(a){this.a=a},
p4:function p4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
a7:function a7(a,b){this.a=a
this.$ti=b},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aS:function aS(a,b){this.a=a
this.$ti=b},
aI:function aI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aR:function aR(a,b){this.a=a
this.$ti=b},
jO:function jO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
h5:function h5(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ws:function ws(a){this.a=a},
wt:function wt(a){this.a=a},
wu:function wu(a){this.a=a},
fd:function fd(){},
lB:function lB(){},
lC:function lC(){},
lD:function lD(){},
eu:function eu(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
fc:function fc(a){this.b=a},
l5:function l5(a,b,c){this.a=a
this.b=b
this.c=c},
l6:function l6(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
eP:function eP(a,b){this.a=a
this.c=b},
lS:function lS(a,b,c){this.a=a
this.b=b
this.c=c},
vc:function vc(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
GS(a){throw A.aA(A.yN(a),new Error())},
u(){throw A.aA(A.yO(""),new Error())},
B_(){throw A.aA(A.CD(""),new Error())},
wJ(){throw A.aA(A.yN(""),new Error())},
xz(){var s=new A.le("")
return s.b=s},
tH(a){var s=new A.le(a)
return s.b=s},
le:function le(a){this.a=a
this.b=null},
EK(a){return a},
iB(a,b,c){},
bA(a){var s,r,q
if(t.iy.b(a))return a
s=J.J(a)
r=A.aJ(s.gk(a),null,!1,t.z)
for(q=0;q<s.gk(a);++q)r[q]=s.h(a,q)
return r},
yP(a,b,c){var s
A.iB(a,b,c)
s=new DataView(a,b)
return s},
cy(a,b,c){A.iB(a,b,c)
c=B.b.O(a.byteLength-b,4)
return new Int32Array(a,b,c)},
CR(a){return new Int8Array(a)},
CS(a){return new Uint16Array(a)},
CT(a,b,c){A.iB(a,b,c)
return new Uint32Array(a,b,c)},
xa(a){return new Uint8Array(a)},
bx(a,b,c){A.iB(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
cN(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.we(b,a))},
cm(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.G7(a,b,c))
if(b==null)return c
return b},
eA:function eA(){},
ez:function ez(){},
hi:function hi(){},
lY:function lY(a){this.a=a},
hh:function hh(){},
eB:function eB(){},
d0:function d0(){},
bw:function bw(){},
k_:function k_(){},
k0:function k0(){},
k1:function k1(){},
k2:function k2(){},
k3:function k3(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
dP:function dP(){},
ib:function ib(){},
ic:function ic(){},
id:function id(){},
ie:function ie(){},
xi(a,b){var s=b.c
return s==null?b.c=A.is(a,"A",[b.x]):s},
z0(a){var s=a.w
if(s===6||s===7)return A.z0(a.x)
return s===11||s===12},
D8(a){return a.as},
GC(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ah(a){return A.vj(v.typeUniverse,a,!1)},
Gs(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.dj(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
dj(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.dj(a1,s,a3,a4)
if(r===s)return a2
return A.zH(a1,r,!0)
case 7:s=a2.x
r=A.dj(a1,s,a3,a4)
if(r===s)return a2
return A.zG(a1,r,!0)
case 8:q=a2.y
p=A.ft(a1,q,a3,a4)
if(p===q)return a2
return A.is(a1,a2.x,p)
case 9:o=a2.x
n=A.dj(a1,o,a3,a4)
m=a2.y
l=A.ft(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.xD(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ft(a1,j,a3,a4)
if(i===j)return a2
return A.zI(a1,k,i)
case 11:h=a2.x
g=A.dj(a1,h,a3,a4)
f=a2.y
e=A.Fx(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.zF(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ft(a1,d,a3,a4)
o=a2.x
n=A.dj(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.xE(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.iX("Attempted to substitute unexpected RTI kind "+a0))}},
ft(a,b,c,d){var s,r,q,p,o=b.length,n=A.vt(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.dj(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Fy(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.vt(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.dj(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Fx(a,b,c,d){var s,r=b.a,q=A.ft(a,r,c,d),p=b.b,o=A.ft(a,p,c,d),n=b.c,m=A.Fy(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.lp()
s.a=q
s.b=o
s.c=m
return s},
l(a,b){a[v.arrayRti]=b
return a},
mf(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Gi(s)
return a.$S()}return null},
Gr(a,b){var s
if(A.z0(b))if(a instanceof A.dy){s=A.mf(a)
if(s!=null)return s}return A.bp(a)},
bp(a){if(a instanceof A.j)return A.o(a)
if(Array.isArray(a))return A.a8(a)
return A.xL(J.dn(a))},
a8(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.xL(a)},
xL(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.EZ(a,s)},
EZ(a,b){var s=a instanceof A.dy?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Ej(v.typeUniverse,s.name)
b.$ccache=r
return r},
Gi(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.vj(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
iK(a){return A.bo(A.o(a))},
xU(a){var s=A.mf(a)
return A.bo(s==null?A.bp(a):s)},
xO(a){var s
if(a instanceof A.fd)return a.kJ()
s=a instanceof A.dy?A.mf(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.ds(a).a
if(Array.isArray(a))return A.a8(a)
return A.bp(a)},
bo(a){var s=a.r
return s==null?a.r=new A.vh(a):s},
Ga(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.iu(v.typeUniverse,A.xO(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.zK(v.typeUniverse,s,A.xO(q[r]))
return A.iu(v.typeUniverse,s,a)},
bS(a){return A.bo(A.vj(v.typeUniverse,a,!1))},
EY(a){var s=this
s.b=A.Fv(s)
return s.b(a)},
Fv(a){var s,r,q,p
if(a===t.K)return A.F6
if(A.eh(a))return A.Fa
s=a.w
if(s===6)return A.EW
if(s===1)return A.A9
if(s===7)return A.F1
r=A.Fu(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.eh)){a.f="$i"+q
if(q==="p")return A.F4
if(a===t.m)return A.F3
return A.F9}}else if(s===10){p=A.G5(a.x,a.y)
return p==null?A.A9:p}return A.EU},
Fu(a){if(a.w===8){if(a===t.S)return A.aC
if(a===t.i||a===t.o)return A.F5
if(a===t.N)return A.F8
if(a===t.y)return A.co}return null},
EX(a){var s=this,r=A.ET
if(A.eh(s))r=A.Ez
else if(s===t.K)r=A.Ey
else if(A.fw(s)){r=A.EV
if(s===t.aV)r=A.aO
else if(s===t.v)r=A.ag
else if(s===t.o9)r=A.zZ
else if(s===t.jh)r=A.Ex
else if(s===t.dz)r=A.A_
else if(s===t.B)r=A.A0}else if(s===t.S)r=A.af
else if(s===t.N)r=A.H
else if(s===t.y)r=A.fp
else if(s===t.o)r=A.Ew
else if(s===t.i)r=A.ee
else if(s===t.m)r=A.aW
s.a=r
return s.a(a)},
EU(a){var s=this
if(a==null)return A.fw(s)
return A.Gv(v.typeUniverse,A.Gr(a,s),s)},
EW(a){if(a==null)return!0
return this.x.b(a)},
F9(a){var s,r=this
if(a==null)return A.fw(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dn(a)[s]},
F4(a){var s,r=this
if(a==null)return A.fw(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dn(a)[s]},
F3(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
A8(a){if(typeof a=="object"){if(a instanceof A.j)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
ET(a){var s=this
if(a==null){if(A.fw(s))return a}else if(s.b(a))return a
throw A.aA(A.A3(a,s),new Error())},
EV(a){var s=this
if(a==null||s.b(a))return a
throw A.aA(A.A3(a,s),new Error())},
A3(a,b){return new A.iq("TypeError: "+A.zw(a,A.bh(b,null)))},
zw(a,b){return A.jr(a)+": type '"+A.bh(A.xO(a),null)+"' is not a subtype of type '"+b+"'"},
bR(a,b){return new A.iq("TypeError: "+A.zw(a,b))},
F1(a){var s=this
return s.x.b(a)||A.xi(v.typeUniverse,s).b(a)},
F6(a){return a!=null},
Ey(a){if(a!=null)return a
throw A.aA(A.bR(a,"Object"),new Error())},
Fa(a){return!0},
Ez(a){return a},
A9(a){return!1},
co(a){return!0===a||!1===a},
fp(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aA(A.bR(a,"bool"),new Error())},
zZ(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aA(A.bR(a,"bool?"),new Error())},
ee(a){if(typeof a=="number")return a
throw A.aA(A.bR(a,"double"),new Error())},
A_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aA(A.bR(a,"double?"),new Error())},
aC(a){return typeof a=="number"&&Math.floor(a)===a},
af(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aA(A.bR(a,"int"),new Error())},
aO(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aA(A.bR(a,"int?"),new Error())},
F5(a){return typeof a=="number"},
Ew(a){if(typeof a=="number")return a
throw A.aA(A.bR(a,"num"),new Error())},
Ex(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aA(A.bR(a,"num?"),new Error())},
F8(a){return typeof a=="string"},
H(a){if(typeof a=="string")return a
throw A.aA(A.bR(a,"String"),new Error())},
ag(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aA(A.bR(a,"String?"),new Error())},
aW(a){if(A.A8(a))return a
throw A.aA(A.bR(a,"JSObject"),new Error())},
A0(a){if(a==null)return a
if(A.A8(a))return a
throw A.aA(A.bR(a,"JSObject?"),new Error())},
Al(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bh(a[q],b)
return s},
Fl(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.Al(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bh(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
A6(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.l([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.bh(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.bh(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.bh(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.bh(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.bh(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
bh(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.bh(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.bh(a.x,b)+">"
if(m===8){p=A.FA(a.x)
o=a.y
return o.length>0?p+("<"+A.Al(o,b)+">"):p}if(m===10)return A.Fl(a,b)
if(m===11)return A.A6(a,b,null)
if(m===12)return A.A6(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
FA(a){var s=A.B2(a)
if(s!=null)return s
return"minified:"+a},
Ek(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Ej(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.vj(a,b,!1)
else if(typeof m=="number"){s=m
r=A.it(a,5,"#")
q=A.vt(s)
for(p=0;p<s;++p)q[p]=r
o=A.is(a,b,q)
n[b]=o
return o}else return m},
Ei(a,b){return A.zX(a.tR,b)},
Eh(a,b){return A.zX(a.eT,b)},
vj(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.zJ(a,null,b,!1)
r.set(b,s)
return s},
iu(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.zJ(a,b,c,!0)
q.set(c,r)
return r},
zK(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.xD(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
zJ(a,b,c,d){return A.E7(A.E1(a,b,c,d))},
di(a,b){b.a=A.EX
b.b=A.EY
return b},
it(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bZ(null,null)
s.w=b
s.as=c
r=A.di(a,s)
a.eC.set(c,r)
return r},
zH(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Ef(a,b,r,c)
a.eC.set(r,s)
return s},
Ef(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.eh(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.fw(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.bZ(null,null)
q.w=6
q.x=b
q.as=c
return A.di(a,q)},
zG(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Ed(a,b,r,c)
a.eC.set(r,s)
return s},
Ed(a,b,c,d){var s,r
if(d){s=b.w
if(A.eh(b)||b===t.K)return b
else if(s===1)return A.is(a,"A",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.bZ(null,null)
r.w=7
r.x=b
r.as=c
return A.di(a,r)},
Eg(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bZ(null,null)
s.w=13
s.x=b
s.as=q
r=A.di(a,s)
a.eC.set(q,r)
return r},
ir(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Ec(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
is(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.ir(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bZ(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.di(a,r)
a.eC.set(p,q)
return q},
xD(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.ir(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bZ(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.di(a,o)
a.eC.set(q,n)
return n},
zI(a,b,c){var s,r,q="+"+(b+"("+A.ir(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.bZ(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.di(a,s)
a.eC.set(q,r)
return r},
zF(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.ir(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.ir(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Ec(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bZ(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.di(a,p)
a.eC.set(r,o)
return o},
xE(a,b,c,d){var s,r=b.as+("<"+A.ir(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Ee(a,b,c,r,d)
a.eC.set(r,s)
return s},
Ee(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.vt(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.dj(a,b,r,0)
m=A.ft(a,c,r,0)
return A.xE(a,n,m,c!==m)}}l=new A.bZ(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.di(a,l)},
E1(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
E7(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.E3(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.zB(a,r,l,k,!1)
else if(q===46)r=A.zB(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ec(a.u,a.e,k.pop()))
break
case 94:k.push(A.Eg(a.u,k.pop()))
break
case 35:k.push(A.it(a.u,5,"#"))
break
case 64:k.push(A.it(a.u,2,"@"))
break
case 126:k.push(A.it(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.E5(a,k)
break
case 38:A.E4(a,k)
break
case 63:p=a.u
k.push(A.zH(p,A.ec(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.zG(p,A.ec(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.E2(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.zC(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.E8(a.u,a.e,o)
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
return A.ec(a.u,a.e,m)},
E3(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
zB(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Ek(s,o.x)[p]
if(n==null)A.y('No "'+p+'" in "'+A.D8(o)+'"')
d.push(A.iu(s,o,n))}else d.push(p)
return m},
E5(a,b){var s,r=a.u,q=A.zA(a,b),p=b.pop()
if(typeof p=="string")b.push(A.is(r,p,q))
else{s=A.ec(r,a.e,p)
switch(s.w){case 11:b.push(A.xE(r,s,q,a.n))
break
default:b.push(A.xD(r,s,q))
break}}},
E2(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.zA(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ec(p,a.e,o)
q=new A.lp()
q.a=s
q.b=n
q.c=m
b.push(A.zF(p,r,q))
return
case-4:b.push(A.zI(p,b.pop(),s))
return
default:throw A.b(A.iX("Unexpected state under `()`: "+A.q(o)))}},
E4(a,b){var s=b.pop()
if(0===s){b.push(A.it(a.u,1,"0&"))
return}if(1===s){b.push(A.it(a.u,4,"1&"))
return}throw A.b(A.iX("Unexpected extended operation "+A.q(s)))},
zA(a,b){var s=b.splice(a.p)
A.zC(a.u,a.e,s)
a.p=b.pop()
return s},
ec(a,b,c){if(typeof c=="string")return A.is(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.E6(a,b,c)}else return c},
zC(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ec(a,b,c[s])},
E8(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ec(a,b,c[s])},
E6(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.iX("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.iX("Bad index "+c+" for "+b.m(0)))},
Gv(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aD(a,b,null,c,null)
r.set(c,s)}return s},
aD(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.eh(d))return!0
s=b.w
if(s===4)return!0
if(A.eh(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aD(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.aD(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aD(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aD(a,b.x,c,d,e))return!1
return A.aD(a,A.xi(a,b),c,d,e)}if(s===6)return A.aD(a,p,c,d,e)&&A.aD(a,b.x,c,d,e)
if(q===7){if(A.aD(a,b,c,d.x,e))return!0
return A.aD(a,b,c,A.xi(a,d),e)}if(q===6)return A.aD(a,b,c,p,e)||A.aD(a,b,c,d.x,e)
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
if(!A.aD(a,j,c,i,e)||!A.aD(a,i,e,j,c))return!1}return A.A7(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.A7(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.F2(a,b,c,d,e)}if(o&&q===10)return A.F7(a,b,c,d,e)
return!1},
A7(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aD(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aD(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aD(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aD(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aD(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
F2(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iu(a,b,r[o])
return A.zY(a,p,null,c,d.y,e)}return A.zY(a,b.y,null,c,d.y,e)},
zY(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aD(a,b[s],d,e[s],f))return!1
return!0},
F7(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aD(a,r[s],c,q[s],e))return!1
return!0},
fw(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.eh(a))if(s!==6)r=s===7&&A.fw(a.x)
return r},
eh(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
zX(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
vt(a){return a>0?new Array(a):v.typeUniverse.sEA},
bZ:function bZ(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
lp:function lp(){this.c=this.b=this.a=null},
vh:function vh(a){this.a=a},
lm:function lm(){},
iq:function iq(a){this.a=a},
Dz(){var s,r,q
if(self.scheduleImmediate!=null)return A.FD()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.dl(new A.tm(s),1)).observe(r,{childList:true})
return new A.tl(s,r,q)}else if(self.setImmediate!=null)return A.FE()
return A.FF()},
DA(a){self.scheduleImmediate(A.dl(new A.tn(a),0))},
DB(a){self.setImmediate(A.dl(new A.to(a),0))},
DC(a){A.xq(B.a8,a)},
xq(a,b){var s=B.b.O(a.a,1000)
return A.Ea(s<0?0:s,b)},
z4(a,b){var s=B.b.O(a.a,1000)
return A.Eb(s<0?0:s,b)},
Ea(a,b){var s=new A.ip(!0)
s.nD(a,b)
return s},
Eb(a,b){var s=new A.ip(!1)
s.nE(a,b)
return s},
h(a){return new A.hQ(new A.r($.t,a.i("r<0>")),a.i("hQ<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.A1(a,b)},
e(a,b){b.aq(a)},
d(a,b){b.bK(A.M(a),A.ab(a))},
A1(a,b){var s,r,q=new A.vI(b),p=new A.vJ(b)
if(a instanceof A.r)a.lh(q,p,t.z)
else{s=t.z
if(a instanceof A.r)a.bV(q,p,s)
else{r=new A.r($.t,t._)
r.a=8
r.c=a
r.lh(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.t.eK(new A.vZ(s),t.H,t.S,t.z)},
bz(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.cu(null)
else{s=c.a
s===$&&A.u()
s.p()}return}else if(b===1){s=c.c
if(s!=null){r=A.M(a)
q=A.ab(a)
s.ar(new A.a9(r,q))}else{s=A.M(a)
r=A.ab(a)
q=c.a
q===$&&A.u()
q.bs(s,r)
c.a.p()}return}if(a instanceof A.i7){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.u()
r.t(0,s)
A.iP(new A.vG(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.u()
s.rR(p,!1).bh(new A.vH(c,b),t.P)
return}}A.A1(a,b)},
Ap(a){var s=a.a
s===$&&A.u()
return new A.b5(s,A.o(s).i("b5<1>"))},
DD(a,b){var s=new A.l8(b.i("l8<0>"))
s.nz(a,b)
return s},
Aa(a,b){return A.DD(a,b)},
DY(a){return new A.i7(a,1)},
dd(a){return new A.i7(a,0)},
zE(a,b,c){return 0},
fB(a){var s
if(t.C.b(a)){s=a.gbZ()
if(s!=null)return s}return B.H},
fY(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.M(q)
r=A.ab(q)
p=new A.r($.t,b.i("r<0>"))
o=s
n=r
m=A.iC(o,n)
if(m==null)o=new A.a9(o,n==null?A.fB(o):n)
else o=m
p.c_(o)
return p}return b.i("A<0>").b(l)?l:A.bg(l,b)},
ct(a,b){var s=a==null?b.a(a):a,r=new A.r($.t,b.i("r<0>"))
r.b1(s)
return r},
Cr(a,b){var s
if(!b.b(null))throw A.b(A.aY(null,"computation","The type parameter is not nullable"))
s=new A.r($.t,b.i("r<0>"))
A.dY(a,new A.or(null,s,b))
return s},
yE(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.r($.t,b.i("r<p<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.ot(i,h,g,f)
try{for(n=J.K(a),m=t.P;n.l();){r=n.gn()
q=i.b
r.bV(new A.os(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cu(A.l([],b.i("z<0>")))
return n}i.a=A.aJ(n,null,!1,b.i("0?"))}catch(l){p=A.M(l)
o=A.ab(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.iC(m,k)
if(j==null)m=new A.a9(m,k==null?A.fB(m):k)
else m=j
n.c_(m)
return n}else{i.d=p
i.c=o}}return f},
wY(a,b,c,d){var s=new A.om(d,null,b,c),r=$.t,q=new A.r(r,c.i("r<0>"))
if(r!==B.f)s=r.eK(s,c.i("0/"),t.K,t.l)
a.d7(new A.bO(q,2,null,s,a.$ti.i("@<1>").a_(c).i("bO<1,2>")))
return q},
Cp(a,b){var s,r,q,p=A.l([],b.i("z<i5<0>>"))
for(s=a.length,r=b.i("i5<0>"),q=0;q<a.length;a.length===s||(0,A.E)(a),++q)p.push(new A.i5(a[q],r))
if(p.length===0)return A.ct(A.l([],b.i("z<0>")),b.i("p<0>"))
s=new A.r($.t,b.i("r<p<0>>"))
A.DS(p,new A.on(new A.aa(s,b.i("aa<p<0>>")),p,b))
return s},
Fe(a){return a!=null},
DS(a,b){var s,r={},q=r.a=r.b=0,p=new A.ue(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.E)(a),++q)a[q].rD(p)},
iC(a,b){var s,r,q,p=$.t
if(p===B.f)return null
s=p.lN(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.kf(r,q)
return s},
vR(a,b){var s
if($.t!==B.f){s=A.iC(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gbZ()
if(b==null){A.kf(a,B.H)
b=B.H}}else b=B.H
else if(t.C.b(a))A.kf(a,b)
return new A.a9(a,b)},
DR(a,b,c){var s=new A.r(b,c.i("r<0>"))
s.a=8
s.c=a
return s},
bg(a,b){var s=new A.r($.t,b.i("r<0>"))
s.a=8
s.c=a
return s},
uk(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.xk()
b.c_(new A.a9(new A.bq(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.kZ(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.e7()
b.f6(p.a)
A.e8(b,q)
return}b.a^=2
b.b.cr(new A.ul(p,b))},
e8(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.eu(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.e8(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.gbM()===k.gbM())}else f=!1
if(f){f=g.a
r=f.c
f.b.eu(r.a,r.b)
return}j=$.t
if(j!==k)$.t=k
else j=null
f=s.a.c
if((f&15)===8)new A.up(s,g,p).$0()
else if(q){if((f&1)!==0)new A.uo(s,m).$0()}else if((f&2)!==0)new A.un(g,s).$0()
if(j!=null)$.t=j
f=s.c
if(f instanceof A.r){r=s.a.$ti
r=r.i("A<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.fR(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.uk(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.fR(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
Af(a,b){if(t.ng.b(a))return b.eK(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.cS(a,t.z,t.K)
throw A.b(A.aY(a,"onError",u.w))},
Fd(){var s,r
for(s=$.fr;s!=null;s=$.fr){$.iE=null
r=s.b
$.fr=r
if(r==null)$.iD=null
s.a.$0()}},
Fw(){$.xM=!0
try{A.Fd()}finally{$.iE=null
$.xM=!1
if($.fr!=null)$.y4().$1(A.Av())}},
An(a){var s=new A.l7(a),r=$.iD
if(r==null){$.fr=$.iD=s
if(!$.xM)$.y4().$1(A.Av())}else $.iD=r.b=s},
Ft(a){var s,r,q,p=$.fr
if(p==null){A.An(a)
$.iE=$.iD
return}s=new A.l7(a)
r=$.iE
if(r==null){s.b=p
$.fr=$.iE=s}else{q=r.b
s.b=q
$.iE=r.b=s
if(q==null)$.iD=s}},
iP(a){var s,r=null,q=$.t
if(B.f===q){A.vX(r,r,B.f,a)
return}if(B.f===q.giR().a)s=B.f.gbM()===q.gbM()
else s=!1
if(s){A.vX(r,r,q,q.bz(a,t.H))
return}s=$.t
s.cr(s.ei(a))},
xm(a,b){var s=null,r=b.i("cl<0>"),q=new A.cl(s,s,s,s,r)
q.ap(a)
q.kn()
return new A.b5(q,r.i("b5<1>"))},
Hf(a,b){return new A.bQ(A.bD(a,"stream",t.K),b.i("bQ<0>"))},
xl(a,b,c,d,e){return d?new A.fj(b,null,c,a,e.i("fj<0>")):new A.cl(b,null,c,a,e.i("cl<0>"))},
dW(a,b,c){return new A.hR(b,a,c.i("hR<0>"))},
md(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.M(q)
r=A.ab(q)
$.t.eu(s,r)}},
DP(a,b,c,d,e,f){var s=$.t,r=e?1:0,q=c!=null?32:0,p=A.lc(s,b,f),o=A.tC(s,c),n=d==null?A.w1():d
return new A.db(a,p,o,s.bz(n,t.H),s,r|q,f.i("db<0>"))},
Dw(a){return new A.td(a)},
lc(a,b,c){var s=b==null?A.FH():b
return a.cS(s,t.H,c)},
tC(a,b){if(b==null)b=A.FI()
if(t.b9.b(b))return a.eK(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.cS(b,t.z,t.K)
throw A.b(A.O("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
Ff(a){},
Fh(a,b){$.t.eu(a,b)},
Fg(){},
zv(a,b){var s=$.t,r=new A.f6(s,b.i("f6<0>"))
A.iP(r.gkV())
if(a!=null)r.c=s.bz(a,t.H)
return r},
EH(a,b,c){var s=a.A()
if(s!==$.dq())s.aJ(new A.vL(b,c))
else b.ar(c)},
EI(a,b,c){var s=a.A()
if(s!==$.dq())s.aJ(new A.vM(b,c))
else b.c0(c)},
dY(a,b){var s=$.t
if(s===B.f)return s.j8(a,b)
return s.j8(a,s.ei(b))},
Dl(a,b){var s,r=$.t
if(r===B.f)return r.j7(a,b)
s=r.h2(b,t.hU)
return $.t.j7(a,s)},
AW(a,b,c,d){return A.Fs(a,c,b,d)},
Fs(a,b,c,d){return $.t.lR(c,b).bU(a,d)},
Fq(a,b,c,d,e){A.iF(d,e)},
iF(a,b){A.Ft(new A.vU(a,b))},
vV(a,b,c,d){var s,r=$.t
if(r===c)return d.$0()
$.t=c
s=r
try{r=d.$0()
return r}finally{$.t=s}},
vW(a,b,c,d,e){var s,r=$.t
if(r===c)return d.$1(e)
$.t=c
s=r
try{r=d.$1(e)
return r}finally{$.t=s}},
xN(a,b,c,d,e,f){var s,r=$.t
if(r===c)return d.$2(e,f)
$.t=c
s=r
try{r=d.$2(e,f)
return r}finally{$.t=s}},
Aj(a,b,c,d){return d},
Ak(a,b,c,d){return d},
Ai(a,b,c,d){return d},
Fp(a,b,c,d,e){return null},
vX(a,b,c,d){var s,r
if(B.f!==c){s=B.f.gbM()
r=c.gbM()
d=s!==r?c.ei(d):c.j1(d,t.H)}A.An(d)},
Fo(a,b,c,d,e){return A.xq(d,B.f!==c?c.j1(e,t.H):e)},
Fn(a,b,c,d,e){e=c.t3(e,t.H,t.hU)
return A.z4(d,e)},
Fr(a,b,c,d){A.AS(d)},
Ah(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.wZ(o,o,o,s,s)
r.J(0,e)}else r=o
s=new A.lh(c.gl8(),c.gla(),c.gl9(),c.gl4(),c.gl5(),c.gl3(),c.gkD(),c.giR(),c.gkw(),c.gkv(),c.gl_(),c.gkG(),c.giB(),c.gj_(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.m8(s,q)
p=d.a
if(p!=null)s.as=new A.m7(s,p)}if(r!=null)s.at=new A.m9(s,r)
return s},
tm:function tm(a){this.a=a},
tl:function tl(a,b,c){this.a=a
this.b=b
this.c=c},
tn:function tn(a){this.a=a},
to:function to(a){this.a=a},
ip:function ip(a){this.a=a
this.b=null
this.c=0},
vf:function vf(a,b){this.a=a
this.b=b},
ve:function ve(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hQ:function hQ(a,b){this.a=a
this.b=!1
this.$ti=b},
vI:function vI(a){this.a=a},
vJ:function vJ(a){this.a=a},
vZ:function vZ(a){this.a=a},
vG:function vG(a,b){this.a=a
this.b=b},
vH:function vH(a,b){this.a=a
this.b=b},
l8:function l8(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
tq:function tq(a){this.a=a},
tr:function tr(a){this.a=a},
tt:function tt(a){this.a=a},
tu:function tu(a,b){this.a=a
this.b=b},
ts:function ts(a,b){this.a=a
this.b=b},
tp:function tp(a){this.a=a},
i7:function i7(a,b){this.a=a
this.b=b},
lU:function lU(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
fi:function fi(a,b){this.a=a
this.$ti=b},
a9:function a9(a,b){this.a=a
this.b=b},
aV:function aV(a,b){this.a=a
this.$ti=b},
e4:function e4(a,b,c,d,e,f,g){var _=this
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
hV:function hV(){},
hR:function hR(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
or:function or(a,b,c){this.a=a
this.b=b
this.c=c},
ot:function ot(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
os:function os(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
om:function om(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kH:function kH(a,b){this.a=a
this.b=b},
on:function on(a,b,c){this.a=a
this.b=b
this.c=c},
hq:function hq(a,b,c){this.c=a
this.d=b
this.$ti=c},
i5:function i5(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
uf:function uf(a,b){this.a=a
this.b=b},
ug:function ug(a,b){this.a=a
this.b=b},
ue:function ue(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(){},
aM:function aM(a,b){this.a=a
this.$ti=b},
aa:function aa(a,b){this.a=a
this.$ti=b},
bO:function bO(a,b,c,d,e){var _=this
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
uh:function uh(a,b){this.a=a
this.b=b},
um:function um(a,b){this.a=a
this.b=b},
ul:function ul(a,b){this.a=a
this.b=b},
uj:function uj(a,b){this.a=a
this.b=b},
ui:function ui(a,b){this.a=a
this.b=b},
up:function up(a,b,c){this.a=a
this.b=b
this.c=c},
uq:function uq(a,b){this.a=a
this.b=b},
ur:function ur(a){this.a=a},
uo:function uo(a,b){this.a=a
this.b=b},
un:function un(a,b){this.a=a
this.b=b},
us:function us(a,b){this.a=a
this.b=b},
ut:function ut(a,b,c){this.a=a
this.b=b
this.c=c},
uu:function uu(a,b){this.a=a
this.b=b},
l7:function l7(a){this.a=a
this.b=null},
a_:function a_(){},
qU:function qU(a,b){this.a=a
this.b=b},
qV:function qV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qW:function qW(a,b){this.a=a
this.b=b},
qX:function qX(a,b){this.a=a
this.b=b},
qS:function qS(a){this.a=a},
qT:function qT(a,b,c){this.a=a
this.b=b
this.c=c},
hG:function hG(){},
dg:function dg(){},
v8:function v8(a){this.a=a},
v7:function v7(a){this.a=a},
lV:function lV(){},
hS:function hS(){},
cl:function cl(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
fj:function fj(a,b,c,d,e){var _=this
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
db:function db(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
l4:function l4(){},
td:function td(a){this.a=a},
tc:function tc(a){this.a=a},
il:function il(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
aH:function aH(){},
tE:function tE(a,b,c){this.a=a
this.b=b
this.c=c},
tD:function tD(a){this.a=a},
fh:function fh(){},
ll:function ll(){},
bN:function bN(a,b){this.b=a
this.a=null
this.$ti=b},
f5:function f5(a,b){this.b=a
this.c=b
this.a=null},
u7:function u7(){},
df:function df(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
uT:function uT(a,b){this.a=a
this.b=b},
f6:function f6(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
bQ:function bQ(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
i0:function i0(a){this.$ti=a},
cL:function cL(a,b){this.b=a
this.$ti=b},
uR:function uR(a,b){this.a=a
this.b=b},
ia:function ia(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
vL:function vL(a,b){this.a=a
this.b=b},
vM:function vM(a,b){this.a=a
this.b=b},
i3:function i3(){},
f9:function f9(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
eb:function eb(a,b,c){this.b=a
this.a=b
this.$ti=c},
i1:function i1(a,b){this.a=a
this.$ti=b},
ff:function ff(a,b,c,d,e,f){var _=this
_.w=$
_.x=null
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
hU:function hU(a,b,c){this.a=a
this.b=b
this.$ti=c},
vD:function vD(a,b){this.a=a
this.b=b},
vF:function vF(a,b){this.a=a
this.b=b},
vE:function vE(a,b){this.a=a
this.b=b},
vB:function vB(a,b){this.a=a
this.b=b},
vC:function vC(a,b){this.a=a
this.b=b},
vA:function vA(a,b){this.a=a
this.b=b},
vx:function vx(a,b){this.a=a
this.b=b},
m8:function m8(a,b){this.a=a
this.b=b},
vw:function vw(a,b){this.a=a
this.b=b},
vv:function vv(a,b){this.a=a
this.b=b},
vz:function vz(a,b){this.a=a
this.b=b},
vy:function vy(a,b){this.a=a
this.b=b},
m7:function m7(a,b){this.a=a
this.b=b},
m9:function m9(a,b){this.a=a
this.b=b},
m6:function m6(){},
lh:function lh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
u3:function u3(a,b,c){this.a=a
this.b=b
this.c=c},
u5:function u5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
u2:function u2(a,b){this.a=a
this.b=b},
u4:function u4(a,b,c){this.a=a
this.b=b
this.c=c},
lI:function lI(){},
uZ:function uZ(a,b,c){this.a=a
this.b=b
this.c=c},
uY:function uY(a,b){this.a=a
this.b=b},
v_:function v_(a,b,c){this.a=a
this.b=b
this.c=c},
fo:function fo(a){this.a=a},
vU:function vU(a,b){this.a=a
this.b=b},
hP:function hP(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
wZ(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.cJ(d.i("@<0>").a_(e).i("cJ<1,2>"))
b=A.xR()}else{if(A.AC()===b&&A.AB()===a)return new A.dc(d.i("@<0>").a_(e).i("dc<1,2>"))
if(a==null)a=A.xQ()}else{if(b==null)b=A.xR()
if(a==null)a=A.xQ()}return A.DQ(a,b,c,d,e)},
zx(a,b){var s=a[b]
return s===a?null:s},
xB(a,b,c){if(c==null)a[b]=a
else a[b]=c},
xA(){var s=Object.create(null)
A.xB(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
DQ(a,b,c,d,e){var s=c!=null?c:new A.u1(d)
return new A.hY(a,b,s,d.i("@<0>").a_(e).i("hY<1,2>"))},
h7(a,b,c,d){if(b==null){if(a==null)return new A.bu(c.i("@<0>").a_(d).i("bu<1,2>"))
b=A.xR()}else{if(A.AC()===b&&A.AB()===a)return new A.h5(c.i("@<0>").a_(d).i("h5<1,2>"))
if(a==null)a=A.xQ()}return A.E0(a,b,null,c,d)},
m(a,b,c){return A.Gd(a,new A.bu(b.i("@<0>").a_(c).i("bu<1,2>")))},
G(a,b){return new A.bu(a.i("@<0>").a_(b).i("bu<1,2>"))},
E0(a,b,c,d,e){return new A.i8(a,b,new A.uO(d),d.i("@<0>").a_(e).i("i8<1,2>"))},
jP(a){return new A.cK(a.i("cK<0>"))},
b0(a){return new A.cK(a.i("cK<0>"))},
am(a,b){return A.Ge(a,new A.cK(b.i("cK<0>")))},
xC(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
uQ(a,b,c){var s=new A.de(a,b,c.i("de<0>"))
s.c=a.e
return s},
EM(a,b){return J.v(a,b)},
EN(a){return J.Z(a)},
bv(a,b,c){var s=A.h7(null,null,b,c)
a.ac(0,new A.p5(s,b,c))
return s},
dJ(a,b,c){var s=A.h7(null,null,b,c)
s.J(0,a)
return s},
p6(a,b){var s,r,q=A.jP(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.E)(a),++r)q.t(0,b.a(a[r]))
return q},
jQ(a,b){var s=A.jP(b)
s.J(0,a)
return s},
CE(a,b){var s=t.bP
return J.yb(s.a(a),s.a(b))},
pn(a){var s,r
if(A.xW(a))return"{...}"
s=new A.ae("")
try{r={}
$.ef.push(a)
s.a+="{"
r.a=!0
a.ac(0,new A.po(r,s))
s.a+="}"}finally{$.ef.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
x6(a){return new A.h8(A.aJ(A.CF(null),null,!1,a.i("0?")),a.i("h8<0>"))},
CF(a){return 8},
cJ:function cJ(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
uw:function uw(a){this.a=a},
uv:function uv(a){this.a=a},
dc:function dc(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
hY:function hY(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
u1:function u1(a){this.a=a},
e9:function e9(a,b){this.a=a
this.$ti=b},
lq:function lq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
i8:function i8(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
uO:function uO(a){this.a=a},
cK:function cK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
uP:function uP(a){this.a=a
this.c=this.b=null},
de:function de(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
p5:function p5(a,b,c){this.a=a
this.b=b
this.c=c},
dK:function dK(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
lw:function lw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
aT:function aT(){},
B:function B(){},
T:function T(){},
pm:function pm(a){this.a=a},
po:function po(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.$ti=b},
lz:function lz(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
lX:function lX(){},
hd:function hd(){},
eW:function eW(a,b){this.a=a
this.$ti=b},
h8:function h8(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
lx:function lx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
c_:function c_(){},
ij:function ij(){},
iv:function iv(){},
Ad(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.M(r)
q=A.X(String(s),null,null)
throw A.b(q)}q=A.vN(p)
return q},
vN(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.lu(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.vN(a[s])
return a},
Ev(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Bu()
else s=new Uint8Array(o)
for(r=J.J(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Eu(a,b,c,d){var s=a?$.Bt():$.Bs()
if(s==null)return null
if(0===c&&d===b.length)return A.zV(s,b)
return A.zV(s,b.subarray(c,d))},
zV(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
yg(a,b,c,d,e,f){if(B.b.aC(f,4)!==0)throw A.b(A.X("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.X("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.X("Invalid base64 padding, more than two '=' characters",a,b))},
DH(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
for(s=J.J(b),r=f.$flags|0,q=c,p=0;q<d;++q){o=s.h(b,q)
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
if(o<0||o>255)break;++q}throw A.b(A.aY(b,"Not a byte value at index "+q+": 0x"+B.b.mh(s.h(b,q),16),null))},
DG(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.b.a6(f,2),i=f&3,h=$.y5()
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
return A.zl(a,r+1,c,-m-1)}throw A.b(A.X(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.X(k,a,r))},
DE(a,b,c,d){var s=A.DF(a,b,c),r=(d&3)+(s-b),q=B.b.a6(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.Bn()},
DF(a,b,c){var s,r=c,q=r,p=0
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
zl(a,b,c,d){var s,r
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
Cg(a){return B.c1.h(0,a.toLowerCase())},
yM(a,b,c){return new A.h6(a,b)},
EP(a){return a.ao()},
DZ(a,b){return new A.uL(a,[],A.G2())},
E_(a,b,c){var s,r=new A.ae("")
A.zz(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
zz(a,b,c,d){var s=A.DZ(b,c)
s.hO(a)},
zW(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
lu:function lu(a,b){this.a=a
this.b=b
this.c=null},
uK:function uK(a){this.a=a},
lv:function lv(a){this.a=a},
uI:function uI(a,b,c){this.b=a
this.c=b
this.a=c},
vr:function vr(){},
vq:function vq(){},
iU:function iU(){},
lW:function lW(){},
iV:function iV(a){this.a=a},
vi:function vi(a,b){this.a=a
this.b=b},
mB:function mB(){},
j_:function j_(){},
la:function la(a){this.a=0
this.b=a},
tB:function tB(a){this.c=null
this.a=0
this.b=a},
tw:function tw(){},
tj:function tj(a,b){this.a=a
this.b=b},
iZ:function iZ(){},
l9:function l9(){this.a=0},
tv:function tv(a,b){this.a=a
this.b=b},
mG:function mG(){},
f2:function f2(a){this.a=a},
ld:function ld(a,b){this.a=a
this.b=b
this.c=0},
ja:function ja(){},
lP:function lP(a,b,c){this.a=a
this.b=b
this.$ti=c},
e6:function e6(a,b,c){this.a=a
this.b=b
this.$ti=c},
jb:function jb(){},
aq:function aq(){},
no:function no(a){this.a=a},
dF:function dF(){},
h6:function h6(a,b){this.a=a
this.b=b},
jJ:function jJ(a,b){this.a=a
this.b=b},
p3:function p3(){},
jL:function jL(a){this.b=a},
uJ:function uJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
jK:function jK(a){this.a=a},
uM:function uM(){},
uN:function uN(a,b){this.a=a
this.b=b},
uL:function uL(a,b,c){this.c=a
this.a=b
this.b=c},
jM:function jM(){},
jN:function jN(a){this.a=a},
kC:function kC(){},
vd:function vd(a,b){this.a=a
this.b=b},
io:function io(){},
lR:function lR(a){this.a=a},
vp:function vp(a,b,c){this.a=a
this.b=b
this.c=c},
kR:function kR(){},
kS:function kS(){},
lZ:function lZ(a){this.b=this.a=0
this.c=a},
vs:function vs(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
hK:function hK(a){this.a=a},
cM:function cM(a){this.a=a
this.b=16
this.c=0},
ma:function ma(){},
xy(a,b){var s=A.DN(a,b)
if(s==null)throw A.b(A.X("Could not parse BigInt",a,null))
return s},
DK(a,b){var s,r,q=$.cr(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.aZ(0,$.y6()).eW(0,A.tx(s))
s=0
o=0}}if(b)return q.bB(0)
return q},
zm(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
DL(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.u.t5(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.zm(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.zm(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.cr()
l=A.bn(j,i)
return new A.ay(l===0?!1:c,i,l)},
DN(a,b){var s,r,q,p,o
if(a==="")return null
s=$.Bo().dw(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.DK(p,q)
if(o!=null)return A.DL(o,2,q)
return null},
bn(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
xw(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
tx(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bn(4,s)
return new A.ay(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bn(1,s)
return new A.ay(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.b.a6(a,16)
r=A.bn(2,s)
return new A.ay(r===0?!1:o,s,r)}r=B.b.O(B.b.glA(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.b.O(a,65536)}r=A.bn(r,s)
return new A.ay(r===0?!1:o,s,r)},
xx(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.C(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.C(d)
d[s]=0}return b+c},
zs(a,b,c,d){var s,r,q,p,o,n=B.b.O(c,16),m=B.b.aC(c,16),l=16-m,k=B.b.bX(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.b.dS(p,l)
r&2&&A.C(d)
d[s+n+1]=(o|q)>>>0
q=B.b.bX((p&k)>>>0,m)}r&2&&A.C(d)
d[n]=q},
zn(a,b,c,d){var s,r,q,p,o=B.b.O(c,16)
if(B.b.aC(c,16)===0)return A.xx(a,b,o,d)
s=b+o+1
A.zs(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.C(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
DM(a,b,c,d){var s,r,q,p,o=B.b.O(c,16),n=B.b.aC(c,16),m=16-n,l=B.b.bX(1,n)-1,k=B.b.dS(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.b.bX((q&l)>>>0,m)
s&2&&A.C(d)
d[r]=(p|k)>>>0
k=B.b.dS(q,n)}s&2&&A.C(d)
d[j]=k},
ty(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
DI(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.C(e)
e[q]=r&65535
r=B.b.a6(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.C(e)
e[q]=r&65535
r=B.b.a6(r,16)}s&2&&A.C(e)
e[b]=r},
lb(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.C(e)
e[q]=r&65535
r=0-(B.b.a6(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.C(e)
e[q]=r&65535
r=0-(B.b.a6(r,16)&1)}},
zt(a,b,c,d,e,f){var s,r,q,p,o,n
if(a===0)return
for(s=d.$flags|0,r=0;--f,f>=0;e=o,c=q){q=c+1
p=a*b[c]+d[e]+r
o=e+1
s&2&&A.C(d)
d[e]=p&65535
r=B.b.O(p,65536)}for(;r!==0;e=o){n=d[e]+r
o=e+1
s&2&&A.C(d)
d[e]=n&65535
r=B.b.O(n,65536)}},
DJ(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.b.kc((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
Gm(a){return A.mj(a)},
yw(a,b){return new A.jt(new WeakMap(),a,b.i("jt<0>"))},
yx(a){if(A.co(a)||typeof a=="number"||typeof a=="string"||a instanceof A.fd)A.Cl(a)},
Cl(a){throw A.b(A.aY(a,"object","Expandos are not allowed on strings, numbers, bools, records or null"))},
ud(a,b){var s=$.Bp()
s=s==null?null:new s(A.dl(A.GX(a,b),1))
return new A.lo(s,b.i("lo<0>"))},
at(a){var s=A.hu(a,null)
if(s!=null)return s
throw A.b(A.X(a,null,null))},
G9(a){var s=A.D0(a)
if(s!=null)return s
throw A.b(A.X("Invalid double",a,null))},
Ck(a,b){a=A.aA(a,new Error())
a.stack=b.m(0)
throw a},
aJ(a,b,c,d){var s,r=c?J.yI(a,d):J.x1(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
jR(a,b,c){var s,r=A.l([],c.i("z<0>"))
for(s=J.K(a);s.l();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
P(a,b){var s,r
if(Array.isArray(a))return A.l(a.slice(0),b.i("z<0>"))
s=A.l([],b.i("z<0>"))
for(r=J.K(a);r.l();)s.push(r.gn())
return s},
cZ(a,b){var s=A.jR(a,!1,b)
s.$flags=3
return s},
d6(a,b,c){var s,r,q,p,o
A.aU(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.ai(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.yX(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.Dh(a,b,c)
if(r)a=J.wR(a,c)
if(b>0)a=J.mr(a,b)
s=A.P(a,t.S)
return A.yX(s)},
Dh(a,b,c){var s=a.length
if(b>=s)return""
return A.D2(a,b,c==null||c>s?s:c)},
ad(a,b){return new A.eu(a,A.x3(a,!1,b,!1,!1,""))},
Gl(a,b){return a==null?b==null:a===b},
qY(a,b,c){var s=J.K(b)
if(!s.l())return a
if(c.length===0){do a+=A.q(s.gn())
while(s.l())}else{a+=A.q(s.gn())
while(s.l())a=a+c+A.q(s.gn())}return a},
xr(){var s,r,q=A.CW()
if(q==null)throw A.b(A.Y("'Uri.base' is not supported"))
s=$.zb
if(s!=null&&q===$.za)return s
r=A.kQ(q)
$.zb=r
$.za=q
return r},
fm(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.k){s=$.Bq()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.h.v(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bc(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
Ep(a){var s,r,q
if(!$.Br())return A.Eq(a)
s=new URLSearchParams()
a.ac(0,new A.vo(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.q(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
xk(){return A.ab(new Error())},
wV(a,b,c,d,e,f,g){var s=A.D3(a,b,c,d,e,f,g,0,!0)
return new A.b8(s==null?new A.nY(a,b,c,d,e,f,g,0).$0():s,0,!0)},
nZ(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.ai(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.ai(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.aY(b,s,u.B))
A.bD(c,"isUtc",t.y)
return a},
Cd(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
yr(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
jk(a){if(a>=10)return""+a
return"0"+a},
dC(a,b,c){return new A.ax(a+1000*b+1e6*c)},
es(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.aY(b,"name","No enum value with that name"))},
jr(a){if(typeof a=="number"||A.co(a)||a==null)return J.ao(a)
if(typeof a=="string")return JSON.stringify(a)
return A.yW(a)},
yu(a,b){A.bD(a,"error",t.K)
A.bD(b,"stackTrace",t.l)
A.Ck(a,b)},
iX(a){return new A.iW(a)},
O(a,b){return new A.bq(!1,null,b,a)},
aY(a,b,c){return new A.bq(!0,a,b,c)},
iT(a,b){return a},
aG(a){var s=null
return new A.cA(s,s,!1,s,s,a)},
qA(a,b){return new A.cA(null,null,!0,a,b,"Value not in range")},
ai(a,b,c,d,e){return new A.cA(b,c,!0,a,d,"Invalid value")},
z_(a,b,c,d){if(a<b||a>c)throw A.b(A.ai(a,b,c,d,null))
return a},
b1(a,b,c){if(0>a||a>c)throw A.b(A.ai(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.ai(b,a,c,"end",null))
return b}return c},
aU(a,b){if(a<0)throw A.b(A.ai(a,0,null,b,null))
return a},
yG(a,b){var s=b.b
return new A.fZ(s,!0,a,null,"Index out of range")},
jB(a,b,c,d,e){return new A.fZ(b,!0,a,e,"Index out of range")},
Cv(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.jB(a,b,c,d,e==null?"index":e))
return a},
Y(a){return new A.ck(a)},
z8(a){return new A.kJ(a)},
w(a){return new A.bl(a)},
ap(a){return new A.jd(a)},
yv(a){return new A.ln(a)},
X(a,b,c){return new A.bk(a,b,c)},
Cx(a,b,c){var s,r
if(A.xW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.l([],t.s)
$.ef.push(a)
try{A.Fb(a,s)}finally{$.ef.pop()}r=A.qY(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
p0(a,b,c){var s,r
if(A.xW(a))return b+"..."+c
s=new A.ae(b)
$.ef.push(a)
try{r=s
r.a=A.qY(r.a,a,", ")}finally{$.ef.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Fb(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.l())return
s=A.q(l.gn())
b.push(s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gn();++j
if(!l.l()){if(j<=4){b.push(A.q(p))
return}r=A.q(p)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.l();p=o,o=n){n=l.gn();++j
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
d1(a,b,c,d,e,f,g){var s
if(B.i===c){s=J.Z(a)
b=J.Z(b)
return A.eS(A.an(A.an($.el(),s),b))}if(B.i===d){s=J.Z(a)
b=J.Z(b)
c=J.Z(c)
return A.eS(A.an(A.an(A.an($.el(),s),b),c))}if(B.i===e){s=J.Z(a)
b=J.Z(b)
c=J.Z(c)
d=J.Z(d)
return A.eS(A.an(A.an(A.an(A.an($.el(),s),b),c),d))}if(B.i===f){s=J.Z(a)
b=J.Z(b)
c=J.Z(c)
d=J.Z(d)
e=J.Z(e)
return A.eS(A.an(A.an(A.an(A.an(A.an($.el(),s),b),c),d),e))}if(B.i===g){s=J.Z(a)
b=J.Z(b)
c=J.Z(c)
d=J.Z(d)
e=J.Z(e)
f=J.Z(f)
return A.eS(A.an(A.an(A.an(A.an(A.an(A.an($.el(),s),b),c),d),e),f))}s=J.Z(a)
b=J.Z(b)
c=J.Z(c)
d=J.Z(d)
e=J.Z(e)
f=J.Z(f)
g=J.Z(g)
g=A.eS(A.an(A.an(A.an(A.an(A.an(A.an(A.an($.el(),s),b),c),d),e),f),g))
return g},
yR(a){var s,r,q=$.el()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.E)(a),++r)q=A.an(q,J.Z(a[r]))
return A.eS(q)},
kQ(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.z9(a4<a4?B.a.q(a5,0,a4):a5,5,a3).gmk()
else if(s===32)return A.z9(B.a.q(a5,5,a4),0,a3).gmk()}r=A.aJ(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.Am(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.Am(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.a.a5(a5,"\\",n))if(p>0)h=B.a.a5(a5,"\\",p-1)||B.a.a5(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.a.a5(a5,"..",n)))h=m>n+2&&B.a.a5(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.a.a5(a5,"file",0)){if(p<=0){if(!B.a.a5(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.a.q(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.a.cT(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.a5(a5,"http",0)){if(i&&o+3===n&&B.a.a5(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.cT(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.a5(a5,"https",0)){if(i&&o+4===n&&B.a.a5(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.cT(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.bP(a4<a5.length?B.a.q(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.xG(a5,0,q)
else{if(q===0)A.fl(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.zR(a5,c,p-1):""
a=A.zP(a5,p,o,!1)
i=o+1
if(i<n){a0=A.hu(B.a.q(a5,i,n),a3)
d=A.vk(a0==null?A.y(A.X("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.zQ(a5,n,m,a3,j,a!=null)
a2=m<l?A.vl(a5,m+1,l,a3):a3
return A.ix(j,b,a,d,a1,a2,l<a4?A.zO(a5,l+1,a4):a3)},
Dr(a){return A.xJ(a,0,a.length,B.k,!1)},
kP(a,b,c){throw A.b(A.X("Illegal IPv4 address, "+a,b,c))},
Do(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.kP("each part must be in the range 0..255",a,r)}A.kP("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.kP(k,a,q)}l=p+1
s&2&&A.C(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.kP(k,a,q)
p=l}A.kP("IPv4 address should contain exactly 4 parts",a,q)},
Dp(a,b,c){var s
if(b===c)throw A.b(A.X("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.Dq(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.zc(a,b,c)
return!0},
Dq(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
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
zc(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.ro(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.Do(a1,o,a3,s,q*2)
q+=2
p=a3
break}a0.$2(a,o)}break}g=q*2
s[g]=B.b.a6(n,8)
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
B.d.a9(s,b,16,s,c)
B.d.he(s,c,b,0)}}return s},
ix(a,b,c,d,e,f,g){return new A.iw(a,b,c,d,e,f,g)},
zL(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
fl(a,b,c){throw A.b(A.X(c,a,b))},
Em(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.E(q,"/")){s=A.Y("Illegal path character "+q)
throw A.b(s)}}},
vk(a,b){if(a!=null&&a===A.zL(b))return null
return a},
zP(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.fl(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.En(a,r,s)
if(p<s){o=p+1
q=A.zU(a,B.a.a5(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.Dp(a,r,s)
m=B.a.q(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.bP(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.zU(a,B.a.a5(a,"25",o)?s+3:o,c,"%25")}else q=""
A.zc(a,b,s)
return"["+B.a.q(a,b,s)+q+"]"}return A.Es(a,b,c)},
En(a,b,c){var s=B.a.bP(a,"%",b)
return s>=b&&s<c?s:c},
zU(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.ae(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.xH(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.ae("")
m=i.a+=B.a.q(a,r,s)
if(n)o=B.a.q(a,s,s+3)
else if(o==="%")A.fl(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else if(p<127&&(u.S.charCodeAt(p)&1)!==0){if(q&&65<=p&&90>=p){if(i==null)i=new A.ae("")
if(r<s){i.a+=B.a.q(a,r,s)
r=s}q=!1}++s}else{l=1
if((p&64512)===55296&&s+1<c){k=a.charCodeAt(s+1)
if((k&64512)===56320){p=65536+((p&1023)<<10)+(k&1023)
l=2}}j=B.a.q(a,r,s)
if(i==null){i=new A.ae("")
n=i}else n=i
n.a+=j
m=A.xF(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.q(a,b,c)
if(r<c){j=B.a.q(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
Es(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.xH(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.ae("")
l=B.a.q(a,r,s)
if(!p)l=l.toLowerCase()
k=q.a+=l
j=3
if(m)n=B.a.q(a,s,s+3)
else if(n==="%"){n="%25"
j=1}q.a=k+n
s+=j
r=s
p=!0}else if(o<127&&(h.charCodeAt(o)&32)!==0){if(p&&65<=o&&90>=o){if(q==null)q=new A.ae("")
if(r<s){q.a+=B.a.q(a,r,s)
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.fl(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.q(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.ae("")
m=q}else m=q
m.a+=l
k=A.xF(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.q(a,b,c)
if(r<c){l=B.a.q(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
xG(a,b,c){var s,r,q
if(b===c)return""
if(!A.zN(a.charCodeAt(b)))A.fl(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.fl(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.q(a,b,c)
return A.El(r?a.toLowerCase():a)},
El(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
zR(a,b,c){if(a==null)return""
return A.iy(a,b,c,16,!1,!1)},
zQ(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.iy(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.N(s,"/"))s="/"+s
return A.Er(s,e,f)},
Er(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.N(a,"/")&&!B.a.N(a,"\\"))return A.xI(a,!s||c)
return A.ed(a)},
vl(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.O("Both query and queryParameters specified",null))
return A.iy(a,b,c,256,!0,!1)}if(d==null)return null
return A.Ep(d)},
Eq(a){var s={},r=new A.ae("")
s.a=""
a.ac(0,new A.vm(new A.vn(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
zO(a,b,c){if(a==null)return null
return A.iy(a,b,c,256,!0,!1)},
xH(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.wr(s)
p=A.wr(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bc(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.q(a,b,b+3).toUpperCase()
return null},
xF(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.b.iU(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.d6(s,0,null)},
iy(a,b,c,d,e,f){var s=A.zT(a,b,c,d,e,f)
return s==null?B.a.q(a,b,c):s},
zT(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.xH(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.fl(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.xF(o)}if(p==null){p=new A.ae("")
l=p}else l=p
l.a=(l.a+=B.a.q(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.q(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
zS(a){if(B.a.N(a,"."))return!0
return B.a.bO(a,"/.")!==-1},
ed(a){var s,r,q,p,o,n
if(!A.zS(a))return a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.c.M(s,"/")},
xI(a,b){var s,r,q,p,o,n
if(!A.zS(a))return!b?A.zM(a):a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.c.gZ(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.zM(s[0])
return B.c.M(s,"/")},
zM(a){var s,r,q=a.length
if(q>=2&&A.zN(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.q(a,0,s)+"%3A"+B.a.aa(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
Et(a,b){if(a.uN("package")&&a.c==null)return A.Ao(b,0,b.length)
return-1},
Eo(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.O("Invalid URL encoding",null))}}return s},
xJ(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.k===d)return B.a.q(a,b,c)
else p=new A.bX(B.a.q(a,b,c))
else{p=A.l([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.O("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.O("Truncated URI",null))
p.push(A.Eo(a,o+1))
o+=2}else p.push(r)}}return d.h8(p)},
zN(a){var s=a|32
return 97<=s&&s<=122},
z9(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.l([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.X(k,a,r))}}if(q<0&&r>b)throw A.b(A.X(k,a,r))
while(p!==44){j.push(r);++r
for(o=-1;r<s;++r){p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.c.gZ(j)
if(p!==44||r!==n+7||!B.a.a5(a,"base64",n+1))throw A.b(A.X("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.ar.v5(a,m,s)
else{l=A.zT(a,m,s,256,!0,!1)
if(l!=null)a=B.a.cT(a,m,s,l)}return new A.rn(a,j,c)},
Am(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
zD(a){if(a.b===7&&B.a.N(a.a,"package")&&a.c<=0)return A.Ao(a.a,a.e,a.f)
return-1},
Ao(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
EJ(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
ay:function ay(a,b,c){this.a=a
this.b=b
this.c=c},
tz:function tz(){},
tA:function tA(){},
lo:function lo(a,b){this.a=a
this.$ti=b},
vo:function vo(a){this.a=a},
nY:function nY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
ax:function ax(a){this.a=a},
u8:function u8(){},
a4:function a4(){},
iW:function iW(a){this.a=a},
cG:function cG(){},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cA:function cA(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fZ:function fZ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ck:function ck(a){this.a=a},
kJ:function kJ(a){this.a=a},
bl:function bl(a){this.a=a},
jd:function jd(a){this.a=a},
k7:function k7(){},
hF:function hF(){},
ln:function ln(a){this.a=a},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
jD:function jD(){},
n:function n(){},
U:function U(a,b,c){this.a=a
this.b=b
this.$ti=c},
R:function R(){},
j:function j(){},
lT:function lT(){},
ky:function ky(){this.b=this.a=0},
ae:function ae(a){this.a=a},
ro:function ro(a){this.a=a},
iw:function iw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
vn:function vn(a,b){this.a=a
this.b=b},
vm:function vm(a){this.a=a},
rn:function rn(a,b,c){this.a=a
this.b=b
this.c=c},
bP:function bP(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
li:function li(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
jt:function jt(a,b,c){this.a=a
this.b=b
this.$ti=c},
CG(a){return a},
CA(a){return a},
xn(a){return a},
Cy(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.A0(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
Cq(a){return new v.G.Promise(A.bB(new A.oq(a)))},
k5:function k5(a){this.a=a},
oq:function oq(a){this.a=a},
oo:function oo(a){this.a=a},
op:function op(a){this.a=a},
vQ(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.EB,a)
s[$.ek()]=a
return s},
cn(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.EC,a)
s[$.ek()]=a
return s},
bB(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.ED,a)
s[$.ek()]=a
return s},
mb(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.EE,a)
s[$.ek()]=a
return s},
fq(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.EF,a)
s[$.ek()]=a
return s},
xK(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.EG,a)
s[$.ek()]=a
return s},
EB(a){return a.$0()},
EC(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
ED(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
EE(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
EF(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
EG(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
Ac(a){return a==null||A.co(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
ei(a){if(A.Ac(a))return a
return new A.ww(new A.dc(t.mp)).$1(a)},
xT(a,b){return a[b]},
Ax(a,b,c){return a[b].apply(a,c)},
FW(a,b){var s,r
if(b==null)return new a()
if(b instanceof Array)switch(b.length){case 0:return new a()
case 1:return new a(b[0])
case 2:return new a(b[0],b[1])
case 3:return new a(b[0],b[1],b[2])
case 4:return new a(b[0],b[1],b[2],b[3])}s=[null]
B.c.J(s,b)
r=a.bind.apply(a,s)
String(r)
return new r()},
a3(a,b){var s=new A.r($.t,b.i("r<0>")),r=new A.aM(s,b.i("aM<0>"))
a.then(A.dl(new A.wC(r),1),A.dl(new A.wD(r),1))
return s},
Ab(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
w7(a){if(A.Ab(a))return a
return new A.w8(new A.dc(t.mp)).$1(a)},
ww:function ww(a){this.a=a},
wC:function wC(a){this.a=a},
wD:function wD(a){this.a=a},
w8:function w8(a){this.a=a},
AO(a,b){return Math.max(a,b)},
yY(){return B.aw},
yZ(){return $.wL()},
uF:function uF(){},
uG:function uG(a){this.a=a},
jq:function jq(){},
W:function W(){},
mI:function mI(a){this.a=a},
mJ:function mJ(a){this.a=a},
mK:function mK(a,b){this.a=a
this.b=b},
mL:function mL(a){this.a=a},
mM:function mM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mN:function mN(a){this.a=a},
jn:function jn(a){this.$ti=a},
h2:function h2(a,b){this.a=a
this.$ti=b},
dL:function dL(a,b){this.a=a
this.$ti=b},
fk:function fk(){},
eJ:function eJ(a,b){this.a=a
this.$ti=b},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
hb:function hb(a,b,c){this.a=a
this.b=b
this.$ti=c},
jm:function jm(){},
yQ(){throw A.b(A.Y(u.O))},
k4:function k4(){},
kM:function kM(){},
az(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.d6(m,0,null)},
bY:function bY(a){this.a=a},
ep:function ep(){this.a=null},
jx:function jx(){},
ov:function ov(){},
lN(a){var s=new Uint32Array(A.bA(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.lM(s,r,a,q,new Uint32Array(16))},
lL:function lL(){},
v0:function v0(){},
lM:function lM(a,b,c,d,e){var _=this
_.y=a
_.z=b
_.a=c
_.c=null
_.d=d
_.e=0
_.f=e
_.r=0
_.w=!1},
kl:function kl(a,b){this.a=a
this.b=b},
j0:function j0(){},
j1:function j1(){},
j2:function j2(){},
j3:function j3(){},
mC:function mC(){},
Ar(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.kl("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.dx)){s=J.ao(a)
if(B.a.N(s,"TypeError: "))s=B.a.aa(s,11)
a=new A.dx(s,b.b)}return a},
Ag(a,b,c){A.yu(A.Ar(a,c),b)},
EA(a,b){return new A.cL(new A.vK(a,b),t.fb)},
fs(a,b,c){return A.Fk(a,b,c)},
Fk(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$fs=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:e={}
d=a0.body
c=d==null?null:d.getReader()
s=c==null?3:4
break
case 3:s=5
return A.a(a1.p(),$async$fs)
case 5:s=1
break
case 4:e.a=null
e.b=e.c=!1
a1.f=new A.vS(e)
a1.r=new A.vT(e,c,a)
d=t.Z,k=t.m,j=t.D,i=t.Q
case 6:n=null
p=9
s=12
return A.a(A.a3(c.read(),k),$async$fs)
case 12:n=a3
p=2
s=11
break
case 9:p=8
b=o.pop()
m=A.M(b)
l=A.ab(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.Ar(m,a)
k=l
j=a1.b
if(j>=4)A.y(a1.bl())
if((j&1)!==0){j=a1.gaE()
j.aw(d,k==null?B.H:k)}s=15
return A.a(a1.p(),$async$fs)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a1.t7()
s=7
break}else{g=n.value
g.toString
d.a(g)
f=a1.b
if(f>=4)A.y(a1.bl())
if((f&1)!==0)a1.gaE().ap(g)}g=a1.b
s=((g&1)!==0?(a1.gaE().e&4)!==0:(g&2)===0)?16:17
break
case 16:g=e.a
s=18
return A.a((g==null?e.a=new A.aM(new A.r($.t,j),i):g).a,$async$fs)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fs,r)},
j7:function j7(a){this.b=!1
this.c=a},
mF:function mF(a){this.a=a},
vK:function vK(a,b){this.a=a
this.b=b},
vS:function vS(a){this.a=a},
vT:function vT(a,b,c){this.a=a
this.b=b
this.c=c},
cP:function cP(a){this.a=a},
mH:function mH(a){this.a=a},
yn(a,b){return new A.dx(a,b)},
dx:function dx(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
CQ(a,b){var s=t.N,r=A.l([],t.e8),q=$.y0()
if(!q.b.test(a))A.y(A.aY(a,"method","Not a valid method"))
return new A.py(A.G(s,s),r,a,b,A.h7(new A.j2(),new A.j3(),s,s))},
py:function py(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
pz:function pz(a,b){this.a=a
this.b=b},
D5(a,b){var s=new Uint8Array(0),r=$.y0()
if(!r.b.test(a))A.y(A.aY(a,"method","Not a valid method"))
r=t.N
return new A.qD(s,a,b,A.h7(new A.j2(),new A.j3(),r,r))},
qD:function qD(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
hH:function hH(){},
kB:function kB(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
C_(a){return a.toLowerCase()},
fE:function fE(a,b,c){this.a=a
this.c=b
this.$ti=c},
CL(a){return A.GW("media type",a,new A.pp(a))},
x9(a,b,c){var s=t.N
if(c==null)s=A.G(s,s)
else{s=new A.fE(A.FX(),A.G(s,t.gc),t.kj)
s.J(0,c)}return new A.ew(a.toLowerCase(),b.toLowerCase(),new A.eW(s,t.ph))},
ew:function ew(a,b,c){this.a=a
this.b=b
this.c=c},
pp:function pp(a){this.a=a},
pr:function pr(a){this.a=a},
pq:function pq(){},
Gb(a){var s
a.lO($.BA(),"quoted string")
s=a.gjr().h(0,0)
return A.AY(B.a.q(s,1,s.length-1),$.Bz(),new A.wj(),null)},
wj:function wj(){},
ak(a){var s,r=new A.ae("")
A.iH(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
iH(a,b){var s,r,q,p,o,n,m,l,k,j=null
if(b==null)a.a+="null"
else if(A.co(b)){s=b?"true":"false"
a.a+=s}else if(A.aC(b))a.a+=B.b.m(b)
else if(typeof b=="number"){s=isFinite(b)&&b===B.u.vG(b)&&Math.abs(b)<1e15
r=a.a
if(s)a.a=r+B.b.m(B.u.me(b))
else a.a=r+B.u.m(b)}else if(typeof b=="number")a.a+=B.u.m(b)
else if(typeof b=="string"){s=B.e.a7(b,j)
a.a+=s}else if(t.j.b(b)){a.a+="["
for(q=0;s=J.J(b),q<s.gk(b);++q){if(q>0)a.a+=","
A.iH(a,s.h(b,q))}a.a+="]"}else if(t.f.b(b)){p=A.l([],t.l5)
for(s=J.K(b.gS());s.l();){o=s.gn()
n=J.ao(o)
if(B.c.cH(p,new A.w_(n)))throw A.b(A.O('Cannot canonicalize map: keys collide after toString() ("'+n+'").',j))
p.push(new A.aB(n,o))}B.c.cs(p,new A.w0())
a.a+="{"
for(s=p.length,m=!0,l=0;l<p.length;p.length===s||(0,A.E)(p),++l,m=!1){r=p[l]
if(!m)a.a+=","
k=B.e.a7(r.a,j)
a.a=(a.a+=k)+":"
A.iH(a,b.h(0,r.b))}a.a+="}"}else throw A.b(A.O("Cannot canonicalize value of type "+J.ds(b).m(0),j))},
w_:function w_(a){this.a=a},
w0:function w0(){},
Dc(a){var s,r,q,p=A.ad("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0).dw(a)
if(p==null)return B.cg
s=p.b
r=s[1]
r.toString
r=A.at(r)
q=s[2]
q.toString
q=A.at(q)
s=s[3]
s=A.hu(s==null?"":s,null)
return new A.ii(r,q,s==null?0:s)},
dV(a,b){return A.Dd(a,b)},
Dd(a1,a2){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dV=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:b=A
a=J
a0=J
s=3
return A.a(a1.aN("SELECT sqlite_version() AS v"),$async$dV)
case 3:h=b.H(a.a1(a0.bV(a4),"v"))
g=t.lS
b=A
a=A
a0=J
s=4
return A.a(a1.aN("PRAGMA compile_options"),$async$dV)
case 4:f=b.P(new a.by(a0.aE(a4,new A.qM(),t.X),g),g.i("n.E"))
e=B.c.cH(f,new A.qN())
s=!e?5:6
break
case 5:p=8
s=11
return A.a(a1.P("CREATE VIRTUAL TABLE lp__fts5_probe USING fts5(lp__probe)"),$async$dV)
case 11:s=12
return A.a(a1.P("DROP TABLE lp__fts5_probe"),$async$dV)
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
g=a2===B.aP
s=g?13:14
break
case 13:p=16
s=19
return A.a(a1.aN("PRAGMA journal_mode"),$async$dV)
case 19:m=a4
if(J.iS(m))n=A.ag(J.bV(J.bV(m).gbb()))
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
case 18:case 14:k=A.Dc(h)
j=k.a
if(j<=3)i=j===3&&k.b>=37
else i=!0
g=g&&J.v(n,"wal")
q=new A.kx(h,i,g,e,a2)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dV,r)},
kc:function kc(a,b){this.a=a
this.b=b},
kx:function kx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qM:function qM(){},
qN:function qN(){},
fF:function fF(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
aK:function aK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
a2:function a2(a,b){this.a=a
this.b=b},
mO:function mO(a,b){this.a=a
this.b=b},
mP:function mP(){},
mQ:function mQ(){},
yf(a){return new Uint8Array(A.bA(a))},
Dy(a,b,c){var s,r,q,p,o,n,m=new Uint8Array(16)
a.em(m,m)
s=new Uint8Array(16)
B.d.ad(s,0,12,b)
s[15]=1
r=A.zh(a,s,c)
q=A.zj(m,r)
p=new Uint8Array(16)
o=new Uint8Array(16)
a.em(s,o)
for(n=0;n<16;++n)p[n]=q[n]^o[n]
return new A.aB(r,p)},
Dx(a,b,c,d){var s,r,q,p,o,n=new Uint8Array(16)
a.em(n,n)
s=new Uint8Array(16)
B.d.ad(s,0,12,b)
s[15]=1
r=A.zj(n,c)
q=new Uint8Array(16)
a.em(s,q)
for(p=0,o=0;o<16;++o)p|=r[o]^q[o]^d[o]
if(p!==0)return null
return A.zh(a,s,c)},
zh(a,b,c){var s,r,q,p,o,n=c.length,m=new Uint8Array(n),l=new Uint8Array(A.bA(b))
A.zk(l)
s=new Uint8Array(16)
for(r=0;r<n;){a.em(l,s)
A.zk(l)
q=Math.min(16,n-r)
for(p=0;p<q;++p){o=r+p
m[o]=c[o]^s[p]}r+=q}return m},
zk(a){var s,r,q
for(s=a.$flags|0,r=15;r>=12;--r){q=a[r]
s&2&&A.C(a)
a[r]=q+1&255
if(a[r]!==0)break}},
zj(a,b){var s,r,q,p,o,n,m,l=new Uint8Array(16),k=new Uint8Array(16)
for(s=b.length,r=0;r<s;r=p){q=Math.min(16,s-r)
B.d.he(k,0,16,0)
p=r+q
B.d.ad(k,0,q,new Uint8Array(b.subarray(r,A.cm(r,p,s))))
for(o=0;o<16;++o)l[o]=l[o]^k[o]
A.zi(l,a)}n=new Uint8Array(16)
m=s*8
for(o=7;o>=0;--o)n[15-o]=B.b.iU(m,o*8)&255
for(o=0;o<16;++o)l[o]=l[o]^n[o]
A.zi(l,a)
return l},
zi(a,b){var s,r,q,p=t.t,o=A.l([(b[0]<<24|b[1]<<16|b[2]<<8|b[3])>>>0,(b[4]<<24|b[5]<<16|b[6]<<8|b[7])>>>0,(b[8]<<24|b[9]<<16|b[10]<<8|b[11])>>>0,(b[12]<<24|b[13]<<16|b[14]<<8|b[15])>>>0],p),n=A.l([0,0,0,0],p)
for(s=0;s<128;++s){if((B.b.iU(a[s>>>3],7-(s&7))&1)!==0){n[0]=(n[0]^o[0])>>>0
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
zg(a){return(B.j[a>>>24&255]<<24|B.j[a>>>16&255]<<16|B.j[a>>>8&255]<<8|B.j[a&255])>>>0},
tf(a){var s=B.j[a>>>24&255]
return(A.e2(s)<<24|s<<16|s<<8|A.e2(s)^s)>>>0},
tg(a){var s=B.j[a>>>16&255]
return((A.e2(s)^s)<<24|A.e2(s)<<16|s<<8|s)>>>0},
th(a){var s=B.j[a>>>8&255]
return(s<<24|(A.e2(s)^s)<<16|A.e2(s)<<8|s)>>>0},
ti(a){var s=B.j[a&255]
return(s<<24|s<<16|(A.e2(s)^s)<<8|A.e2(s))>>>0},
e2(a){var s=a<<1
return(a&128)!==0?(s^283)&255:s&255},
ms:function ms(a,b){this.b=a
this.c=b},
te:function te(a){this.a=a},
AK(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.bA
if(r===B.B){r=a.f
r.toString
r=!B.c.E(r,b)}else r=!1
if(r)return B.bG
return s
case 1:case 4:return!A.aC(b)?B.bB:s
case 2:return typeof b!="number"?B.bC:s
case 3:return!A.co(b)?B.bD:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.bE:s
case 7:return!t.j.b(b)?B.bF:s}},
dm(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=a.gj9(),i=t.N,h=t.X,g=A.m(["id",e],i,h)
for(s=a.c,r=s.length,q=c==null,p=0;p<s.length;s.length===r||(0,A.E)(s),++p){o=s[p]
if(q)n=null
else n=c
m=o.a
g.j(0,m,A.ER(o,f.h(0,m),n))}l=A.G(i,h)
for(i=new A.aR(f,A.o(f).i("aR<1,2>")).gu(0);i.l();){k=i.d
h=k.a
if(h==="id"||h==="archived"||j.E(0,h))continue
l.j(0,h,k.b)}g.j(0,"extra",l.a===0?"":A.ak(l))
g.j(0,"archived",b?1:0)
g.j(0,"hidden",0)
return g},
cp(a,b,c,d){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.m(["id",b.h(0,"id")],j,i)
for(s=a.c,r=s.length,q=a.a,p=0;p<s.length;s.length===r||(0,A.E)(s),++p){o=s[p]
n=o.a
h.j(0,n,A.EL(o,b.h(0,n),c,d,q))}h.j(0,k,J.v(b.h(0,k),1))
m=b.h(0,"extra")
if(typeof m=="string"&&m.length!==0){l=B.e.av(m,null)
if(t.f.b(l))h.J(0,A.bv(l,j,i))}return h},
AE(a,b,c,d){var s,r=A.l([],t.d)
for(s=J.K(b);s.l();)r.push(A.cp(a,s.gn(),c,d))
return r},
EL(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i=null
if(b==null)return i
if(a.e){if(c==null)s=i
else s=c
if(s==null)throw A.b(A.w('Field "'+a.a+u.C))
r=B.b1.v(A.H(b))
q=r.length
if(q<28)A.y(A.O("Ciphertext too short for AES-GCM (minimum 28 bytes).",i))
p=new Uint8Array(A.bA(B.d.R(r,0,12)))
q-=16
o=new Uint8Array(A.bA(B.d.aS(r,q)))
n=new Uint8Array(A.bA(B.d.R(r,12,q)))
m=A.Dx(s.b,p,n,o)
if(m==null)A.y(A.w("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
l=B.k.h8(m)
k=a.b
A:{if(B.A===k){r=l==="1"||l==="true"
break A}if(B.Y===k||B.a_===k){r=A.at(l)
break A}if(B.Z===k){r=A.G9(l)
break A}if(B.I===k||B.J===k){r=B.e.av(l,i)
break A}r=l
break A}return r}j=a.b
B:{if(B.A===j){r=J.v(b,1)
break B}if(B.I===j||B.J===j){r=B.e.av(A.H(b),i)
break B}r=b
break B}return r},
ER(a,b,c){var s,r
if(b==null)return null
if(a.e){if(c==null)throw A.b(A.w('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.v(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.ao(b)
break
case 6:case 7:s=A.ak(b)
break
default:A.H(b)
s=b}r=c.tX(B.h.v(s))
return B.ar.gje().v(r)}switch(a.b.a){case 3:return J.v(b,!0)?1:0
case 6:case 7:return A.ak(b)
default:return b}},
aX(a,b){var s,r,q,p,o,n,m="archived",l=a.gj9(),k=A.m(["id",b.h(0,"id")],t.N,t.X)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.E)(s),++q){p=s[q]
o=p.a
n=b.h(0,o)
if(n!=null)k.j(0,o,p.b===B.A?J.v(n,!0):n)}for(s=b.gbL(),s=s.gu(s);s.l();){r=s.gn()
o=r.a
if(o==="id"||o==="archived"||l.E(0,o))continue
k.j(0,o,r.b)}if(J.v(b.h(0,m),!0))k.j(0,m,!0)
return k},
cv:function cv(a,b){this.a=a
this.b=b},
wh(a2,a3,a4,a5){var s=0,r=A.h(t.G),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$wh=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)A:switch(s){case 0:a0=a4.b
a1=a4.r
if(a0==="explain")a1="EXPLAIN QUERY PLAN "+a1
if(a0==="query"&&a5===0){q=A.m(["items",A.l([],t.d),"lastRow",null,"hasMore",!1],t.N,t.X)
s=1
break}s=3
return A.a(a3.$2(a1,a4.w),$async$wh)
case 3:p=a7
switch(a0){case"query":a0=a5==null
o=!a0&&J.av(p)>a5
n=a0?p:J.wR(p,a5).dM(0)
m=A.AE(a2.af(a4.d).a,n,a2.y,a2.z)
l=a4.y
if(l==null)k=m
else{a0=A.l([],t.d)
for(j=m.length,i=l.$ti,h=i.i("a5<B.E>"),i=i.i("B.E"),g=t.N,f=t.X,e=0;e<m.length;m.length===j||(0,A.E)(m),++e){d=m[e]
c=A.G(g,f)
for(b=new A.a5(l,l.gk(0),h);b.l();){a=b.d
if(a==null)a=i.a(a)
if(d.I(a))c.j(0,a,d.h(0,a))}a0.push(c)}k=a0}q=A.m(["items",k,"lastRow",o&&m.length!==0?B.c.gZ(m):null,"hasMore",o],t.N,t.X)
s=1
break A
case"count":case"countDistinct":a0=A.iJ(p)
q=A.m(["value",a0==null?0:a0],t.N,t.X)
s=1
break A
case"distinct":a0=[]
for(j=J.K(p);j.l();){i=j.gn()
if(i.gV(i))a0.push(J.bV(i.gbb()))}q=A.m(["values",a0],t.N,t.X)
s=1
break A
case"ids":a0=A.l([],t.s)
for(j=J.K(p);j.l();)a0.push(A.H(j.gn().h(0,"id")))
q=A.m(["ids",a0],t.N,t.X)
s=1
break A
case"explain":a0=t.X
q=A.m(["plan",J.aE(p,new A.wi(),a0).M(0,"\n")],t.N,a0)
s=1
break A
case"sum":case"avg":case"min":case"max":a0=J.J(p)
q=A.m(["value",a0.gB(p)?null:J.a1(a0.gC(p),"v")],t.N,t.X)
s=1
break A
case"search":a0=A.l([],t.d)
for(j=J.K(p),i=t.N,h=t.X;j.l();){g=j.gn()
a0.push(A.m(["id",A.H(g.h(0,"id")),"score",g.h(0,"score")],i,h))}q=A.m(["results",a0],i,h)
s=1
break A
default:throw A.b(A.w("Unsupported compiled operation: "+a0))}case 1:return A.e(q,r)}})
return A.f($async$wh,r)},
wi:function wi(){},
yt(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
je:function je(a,b){this.a=a
this.b=b},
jo:function jo(a,b){this.a=a
this.b=b
this.c=!0},
o6:function o6(){},
o5:function o5(){},
o7:function o7(){},
Cf(a){return'"'+A.x(a,'"','""')+'"'},
Ce(a,b){var s,r,q,p=a.a,o=J.J(p),n=b.a,m=J.J(n)
if(o.gk(p)>=m.gk(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gk(p);++q)if(!J.v(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
n0:function n0(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jl:function jl(a){this.a=a},
o4:function o4(a){this.a=a},
o3:function o3(){},
o2:function o2(a){this.a=a},
o_:function o_(){},
o0:function o0(){},
o1:function o1(){},
bm(a,b){return new A.hL(a)},
qQ(a){return new A.cD(a)},
xh(a){return new A.hz(a)},
ch(a){return new A.eI(a)},
yq(a){return new A.fJ(a)},
ys(a){return new A.fO(a)},
B1(a,b){var s,r="UNIQUE constraint failed",q=J.ao(a),p=a instanceof A.d3,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.E(q,"PRIMARY KEY")&&!B.a.E(q,r)
else p=!0
if(p)return new A.hs("PRIMARY KEY constraint violated.")
if(o===2067||B.a.E(q,r)){s=A.A5(q,"UNIQUE constraint failed:")
b.h(0,s)
return new A.hJ('Unique constraint violated on "'+s+'".')}if(o===1299||B.a.E(q,"NOT NULL constraint failed")){p=A.A5(q,"NOT NULL constraint failed:")
return new A.hm('NOT NULL constraint violated on "'+p+'".')}if(B.a.E(q,"CHECK constraint failed")||o===275||n===275)return new A.fH("CHECK constraint violated.")
if(B.a.E(q,"FOREIGN KEY")||o===787||n===787)return new A.fV("FOREIGN KEY constraint violated.")
if(B.a.E(q,"database or disk is full"))return new A.cD("Database full: "+A.q(a))
return new A.cD("SQLite error: "+A.q(a))},
A5(a,b){var s,r,q,p,o,n,m=B.a.bO(a,b)
if(m<0)return"?"
s=B.a.aa(a,m+b.length)
r=s.length
q=B.a.bO(s,",")
if(q>=0)r=q
p=B.a.bO(s,"(")
s=B.a.cX(B.a.q(s,0,p>=0&&p<r?p:r))
o=B.a.dC(s,".")
s=B.a.cX(o>=0?B.a.aa(s,o+1):s)
if(B.a.N(s,'"')&&B.a.cd(s,'"')){n=B.a.q(s,1,s.length-1)
s=A.x(n,'""','"')}return s.length===0?"?":s},
h9:function h9(){},
hL:function hL(a){this.a=a},
hJ:function hJ(a){this.a=a},
hm:function hm(a){this.a=a},
fH:function fH(a){this.a=a},
hs:function hs(a){this.a=a},
fV:function fV(a){this.a=a},
cD:function cD(a){this.a=a},
hz:function hz(a){this.a=a},
hB:function hB(a){this.a=a},
eI:function eI(a){this.a=a},
fX:function fX(a){this.a=a},
fJ:function fJ(a){this.a=a},
fO:function fO(a){this.a=a},
qC:function qC(){},
EO(){return Date.now()},
cw(a,b,c,d,e,f,g,h){var s=null,r=null,q=null
return A.CK(a,b,c,d,e,f,g,h)},
CK(a4,a5,a6,a7,a8,a9,b0,b1){var s=0,r=A.h(t.kM),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$cw=A.c(function(b2,b3){if(b2===1){o.push(b3)
s=p}for(;;)switch(s){case 0:b=null
a=null
a0=null
a1=null
a1=a5
p=4
s=7
return A.a(A.ce(a1,b0),$async$cw)
case 7:s=8
return A.a(A.dV(a1,b0),$async$cw)
case 8:n=b3
i=0
case 9:if(!(i<3)){s=11
break}m=B.bO[i]
s=12
return A.a(a1.P(m),$async$cw)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.c0[i]
s=16
return A.a(a1.P(l),$async$cw)
case 16:case 14:++i
s=13
break
case 15:h=a1
g=a
if(g==null)g=A.Gw()
f=new A.ka()
e=new A.jS(a9,h,n,f,a8,a6,a0,a4,a7,b,g,A.G(t.N,t.nv),new A.mO(A.dW(null,null,t.iv),A.dW(null,null,t.oZ)))
e.d=new A.ta(A.ct(null,t.H),f.gvq())
f=$.wL()
e.as=new A.pJ(e,f)
e.at=new A.pE(e,f)
e.ax=new A.ne(e)
e.ay=new A.p8(e,a4)
k=e
s=17
return A.a(A.jU(a1,k.Q),$async$cw)
case 17:h=b1.length,i=0
case 18:if(!(i<b1.length)){s=20
break}j=b1[i]
s=21
return A.a(k.b8(j),$async$cw)
case 21:case 19:b1.length===h||(0,A.E)(b1),++i
s=18
break
case 20:q=k
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
p=23
s=26
return A.a(a1.p(),$async$cw)
case 26:p=3
s=25
break
case 23:p=22
a3=o.pop()
s=25
break
case 22:s=3
break
case 25:throw a2
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cw,r)},
ce(a,b){return A.CJ(a,b)},
CJ(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
var $async$ce=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:s=b===B.aP?2:3
break
case 2:q=5
s=8
return A.a(a.P("PRAGMA journal_mode=WAL"),$async$ce)
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
return A.a(a.P("PRAGMA wal_autocheckpoint=1000"),$async$ce)
case 9:s=10
return A.a(a.P("PRAGMA mmap_size=67108864"),$async$ce)
case 10:case 3:s=11
return A.a(a.P("PRAGMA synchronous=NORMAL"),$async$ce)
case 11:s=12
return A.a(a.P("PRAGMA foreign_keys=ON"),$async$ce)
case 12:s=13
return A.a(a.P("PRAGMA busy_timeout=5000"),$async$ce)
case 13:s=14
return A.a(a.P("PRAGMA cache_size=-8000"),$async$ce)
case 14:s=15
return A.a(a.P("PRAGMA temp_store=MEMORY"),$async$ce)
case 15:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$ce,r)},
jU(a,b){var s=0,r=A.h(t.H),q,p
var $async$jU=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.dH("lp_migrations","version = ?",[1]),$async$jU)
case 3:if(p.iS(d)){s=1
break}s=4
return A.a(a.an(0,"lp_migrations",A.m(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$jU)
case 4:case 1:return A.e(q,r)}})
return A.f($async$jU,r)},
o8:function o8(a,b){this.a=a
this.b=b},
kz:function kz(a,b){this.a=a
this.d=b},
qa:function qa(a){this.a=a},
jS:function jS(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
_.cx="NORMAL"
_.a$=m},
pl:function pl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ph:function ph(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pg:function pg(a,b,c){this.a=a
this.b=b
this.c=c},
pk:function pk(a,b){this.a=a
this.b=b},
pj:function pj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pi:function pi(){},
ly:function ly(){},
ey(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g
var $async$ey=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:j=a.b
i=b.x
h=A.a8(i).i("bf<1>")
g=A.P(new A.bf(i,new A.pw(c,b),h),h.i("n.E"))
B.c.cs(g,new A.px())
i=g.length,h=b.a,q="migrate:"+h+":v",p=c,o=0
case 2:if(!(o<g.length)){s=4
break}n=g[o]
m=n.a
l=p+1
if(m!==l)throw A.b(A.ch('Migration gap for "'+h+'": expected v'+l+", found v"+m+"."))
k=new A.ky()
$.mn()
k.aD()
s=n.b?5:7
break
case 5:s=8
return A.a(A.ba(a,b,n),$async$ey)
case 8:s=6
break
case 7:s=9
return A.a(A.jY(a,b,n),$async$ey)
case 9:case 6:if(k.b==null)k.b=$.qg.$0()
s=10
return A.a(A.hf(j,k.gtU(),p,q+m,m),$async$ey)
case 10:case 3:g.length===i||(0,A.E)(g),++o,p=m
s=2
break
case 4:i=b.b
if(c<i&&p!==i)throw A.b(A.ch('Missing migration steps for "'+h+'": migrated to v'+p+" but expected v"+i+"."))
s=11
return A.a(j.F("lp_stores",A.m(["schema_ver",i],t.N,t.X),"store = ?",[h]),$async$ey)
case 11:return A.e(null,r)}})
return A.f($async$ey,r)},
hf(a,b,c,d,e){var s=0,r=A.h(t.H),q,p
var $async$hf=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.aN("SELECT MAX(version) AS m FROM lp_migrations"),$async$hf)
case 2:q=p.iJ(g)
if(q==null)q=0
s=3
return A.a(a.an(0,"lp_migrations",A.m(["version",q+1,"name",d,"applied_at",Date.now(),"duration_ms",b],t.N,t.X)),$async$hf)
case 3:return A.e(null,r)}})
return A.f($async$hf,r)},
jY(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h
var $async$jY=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:k=a.b
j=b.a
h=J
s=2
return A.a(k.aN("PRAGMA table_info("+('"'+A.x(j,'"','""')+'"')+")"),$async$jY)
case 2:i=h.aE(e,new A.pu(),t.X).jI(0)
q=c.c,p=q.length,o=0
case 3:if(!(o<q.length)){s=5
break}n=q[o]
if(n.c)throw A.b(A.ch('Additive migration on "'+j+'" cannot add a required column "'+n.a+'" (existing rows would violate NOT NULL).'))
m=n.a
if(i.E(0,m)){s=4
break}l=A.x(j,'"','""')
s=6
return A.a(k.P("ALTER TABLE "+('"'+l+'"')+" ADD COLUMN "+('"'+A.x(m,'"','""')+'"')+" "+n.gk_()),$async$jY)
case 6:case 4:q.length===p||(0,A.E)(q),++o
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$jY,r)},
ba(a,b,c){return A.CO(a,b,c)},
CO(a3,a4,a5){var s=0,r=A.h(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$ba=A.c(function(a6,a7){if(a6===1){p.push(a7)
s=q}for(;;)switch(s){case 0:a0=a3.b
if(!a3.r)throw A.b(A.ys('Destructive migration for "'+a4.a+'" requires the backup step, which is disabled.'))
m=a4.a
l=a5.a
k=m+"__new_"+l
o=A.CP(a3.a,m,l)
q=3
s=6
return A.a(a0.P("VACUUM INTO '"+A.x(o,"'","''")+"'"),$async$ba)
case 6:q=1
s=5
break
case 3:q=2
a1=p.pop()
n=A.M(a1)
l=A.ys('Backup failed for destructive migration of "'+m+'": '+A.q(n))
throw A.b(l)
s=5
break
case 2:s=1
break
case 5:i=new A.jl(a3.c).lC(a4)
l=A.x(m,'"','""')
s=7
return A.a(a0.P(B.a.mc(i.b,'"'+l+'"','"'+A.x(k,'"','""')+'"')),$async$ba)
case 7:l=t.P,h=0
case 8:s=10
return A.a(a0.al("SELECT rowid, * FROM "+('"'+A.x(m,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[h,1e4]),$async$ba)
case 10:g=a7
f=J.J(g)
if(f.gB(g)){s=9
break}s=11
return A.a(a0.X(new A.pv(g,a4,a5,k),l),$async$ba)
case 11:h=A.af(J.a1(f.gZ(g),"rowid"))
if(f.gk(g)<1e4){s=9
break}s=8
break
case 9:a2=A
s=12
return A.a(a0.aN("SELECT COUNT(*) c FROM "+('"'+A.x(m,'"','""')+'"')),$async$ba)
case 12:e=a2.iJ(a7)
if(e==null)e=0
a2=A
s=13
return A.a(a0.aN("SELECT COUNT(*) c FROM "+('"'+A.x(k,'"','""')+'"')),$async$ba)
case 13:d=a2.iJ(a7)
if(d==null)d=0
if(e!==d)throw A.b(A.w('Rebuild of "'+m+'" count mismatch: '+e+" vs "+d+"."))
s=14
return A.a(a0.P("DROP TABLE "+('"'+A.x(m,'"','""')+'"')),$async$ba)
case 14:l=A.x(k,'"','""')
s=15
return A.a(a0.P("ALTER TABLE "+('"'+l+'"')+" RENAME TO "+('"'+A.x(m,'"','""')+'"')),$async$ba)
case 15:l=i.c,f=l.length,c=0
case 16:if(!(c<l.length)){s=18
break}s=19
return A.a(a0.P(l[c]),$async$ba)
case 19:case 17:l.length===f||(0,A.E)(l),++c
s=16
break
case 18:l=a4.w!=null
s=l?20:21
break
case 20:s=22
return A.a(a0.P("DROP TABLE IF EXISTS "+('"'+A.x(m+"_fts",'"','""')+'"')),$async$ba)
case 22:case 21:f=i.d,b=f.length,c=0
case 23:if(!(c<f.length)){s=25
break}s=26
return A.a(a0.P(f[c]),$async$ba)
case 26:case 24:f.length===b||(0,A.E)(f),++c
s=23
break
case 25:s=l?27:28
break
case 27:l=m+"_fts"
f=A.x(l,'"','""')
s=29
return A.a(a0.P("INSERT INTO "+('"'+f+'"')+"("+('"'+A.x(l,'"','""')+'"')+") VALUES('rebuild')"),$async$ba)
case 29:case 28:a2=A
s=30
return A.a(a0.aN("SELECT COUNT(*) c FROM "+('"'+A.x(m,'"','""')+'"')),$async$ba)
case 30:a=a2.iJ(a7)
if((a==null?0:a)!==e)throw A.b(A.w('Post-rebuild verification of "'+m+'" failed.'))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$ba,r)},
CP(a,b,c){var s=null,r=$.wN(),q=r.tm(a),p=A.eD(a,r.a).gt0()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.lZ(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
pw:function pw(a,b){this.a=a
this.b=b},
px:function px(){},
pu:function pu(){},
pv:function pv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ka:function ka(){var _=this
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.f=_.e=_.d=_.c=_.b=_.a=0},
qz:function qz(a,b,c,d,e){var _=this
_.b=a
_.d=b
_.r=c
_.w=d
_.y=e},
mc(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.M(q)
if(r instanceof A.cD)throw q
else{s=r
r=A.qQ("Malformed schema JSON: "+A.q(s))
throw A.b(r)}}},
yy(a){return A.mc(new A.oa(a))},
Cw(a){return A.mc(new A.oS(a))},
Co(a){return A.mc(new A.ol(a))},
Dg(a){return A.mc(new A.qR(a))},
yp(a,b){return A.mc(new A.mT(a,b))},
FC(a,b,c,d){var s
for(s=c+1;s<=d;++s)B.c2.h(0,s)
return b},
bI:function bI(a,b){this.a=a
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
oa:function oa(a){this.a=a},
h_:function h_(a,b){this.a=a
this.b=b},
cU:function cU(a,b,c){this.a=a
this.b=b
this.c=c},
oS:function oS(a){this.a=a},
fW:function fW(a){this.a=a},
ol:function ol(a){this.a=a},
bK:function bK(a,b,c){this.a=a
this.b=b
this.c=c},
qR:function qR(a){this.a=a},
nc:function nc(){},
bH:function bH(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.$ti=i},
mT:function mT(a,b){this.a=a
this.b=b},
C6(a,b){var s,r=a.a
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
s='Field "'+r+'" must be one of '+B.c.M(s,", ")+"."
break
default:s=null}return s},
dO:function dO(a,b){this.a=a
this.b=b},
eo:function eo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mZ:function mZ(a,b){this.a=a
this.b=b},
mX:function mX(a,b,c){this.a=a
this.b=b
this.c=c},
mW:function mW(a,b){this.a=a
this.b=b},
n_:function n_(a,b){this.a=a
this.b=b},
mY:function mY(a,b){this.a=a
this.b=b},
mV:function mV(){},
mU:function mU(){},
lf:function lf(){},
rg(a){var s=$.t.h(0,$.y2())
if(s instanceof A.bM&&s.a===a)return s
return null},
bM:function bM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G_(a,b,c){var s,r,q,p,o=A.l([],t.s)
for(s=J.K(a);s.l();){r=new A.ae("")
A.iH(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}B.c.b0(o)
p=B.c.M(o,"|")
b.$1(p.length)
return A.az(B.l.v(B.h.v(p)).a)},
ho:function ho(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=null
_.a=c
_.b=d
_.d=_.c=null
_.f=_.e=!1
_.r=null},
pD:function pD(a){this.a=a},
bW:function bW(){},
ta:function ta(a,b){this.a=a
this.b=0
this.c=b},
tb:function tb(a,b,c){this.a=a
this.b=b
this.c=c},
j6(a){var s=$.B6()
if(!s.b.test(a))throw A.b(A.O('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
iN(a,b,c,d,e){return A.GH(a,b,c,d,e)},
GH(a,b,c,d,a0){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e
var $async$iN=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:h=t.i4
g=A.l([],h)
f=new A.f2(A.lN(new A.lP(new A.wB(g),A.l([],h),t.mI)))
e=0
h=new A.bQ(A.bD(a,"stream",t.K),t.lj)
p=3
l=t.D
case 6:s=8
return A.a(h.l(),$async$iN)
case 8:if(!a2){s=7
break}m=h.gn()
k=a0.$1(m)
if(!(k instanceof A.r)){j=new A.r($.t,l)
j.a=8
j.c=k
k=j}s=9
return A.a(k,$async$iN)
case 9:f.a.t(0,m)
e+=J.av(m)
s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=10
return A.a(h.A(),$async$iN)
case 10:s=n.pop()
break
case 5:f.a.p()
if(c!=null&&!J.v(e,c))throw A.b(A.w("Size mismatch: expected "+A.q(c)+" but got "+A.q(e)))
i=A.az(B.c.gaR(g).a)
A.j6(i)
if(b!=null&&i!==b)throw A.b(A.w("SHA-256 mismatch: expected "+b+" but got "+i))
q=new A.kA(i)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iN,r)},
mE:function mE(){},
kA:function kA(a){this.a=a},
wB:function wB(a){this.a=a},
fS:function fS(a){this.d=a},
oc:function oc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oe:function oe(a,b){this.a=a
this.b=b},
of:function of(a,b,c){this.a=a
this.b=b
this.c=c},
od:function od(a,b,c){this.a=a
this.b=b
this.c=c},
og:function og(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oh:function oh(){},
yz(a){return A.mk("lp_file_refs",new A.ob(a))},
b_:function b_(a,b,c,d,e,f,g,h,i,j){var _=this
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
ob:function ob(a){this.a=a},
p8:function p8(a,b){this.a=a
this.b=b},
p9:function p9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
pa:function pa(a){this.a=a},
pb:function pb(a){this.a=a},
pc:function pc(a){this.a=a},
pd:function pd(a){this.a=a},
pe:function pe(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rD:function rD(a){this.b=a},
rE:function rE(a){this.a=a},
z5(a){var s=Date.now()
return new A.kI(a,new A.b8(s,0,!1))},
kI:function kI(a,b){this.a=a
this.c=b},
mA:function mA(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
kd:function kd(a,b,c,d,e,f,g,h){var _=this
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
q8:function q8(a,b){this.a=a
this.b=b},
q9:function q9(){},
pS:function pS(a,b,c){this.a=a
this.b=b
this.c=c},
pZ:function pZ(a){this.a=a},
pV:function pV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pW:function pW(){},
pX:function pX(a,b){this.a=a
this.b=b},
pY:function pY(){},
pT:function pT(a,b){this.a=a
this.b=b},
pU:function pU(){},
hr:function hr(a,b){this.a=a
this.b=b},
fg:function fg(a,b){this.a=a
this.b=b},
q_:function q_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1
_.w=_.r=null
_.x=f
_.y=0},
q4:function q4(){},
q5:function q5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q0:function q0(a,b,c){this.a=a
this.b=b
this.c=c},
q1:function q1(){},
q2:function q2(a,b,c){this.a=a
this.b=b
this.c=c},
q3:function q3(){},
q6:function q6(a){this.a=a},
q7:function q7(a){this.a=a},
v6:function v6(a,b){this.a=a
this.b=null
this.c=b},
jz(a,b){return new A.cT(a)},
dG:function dG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cS:function cS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jy:function jy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cc:function cc(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(a){this.a=a},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
pQ:function pQ(a){this.a=a},
pR:function pR(a){this.a=a},
wU(a){return A.mk("lp_conflicts",new A.nd(a))},
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
nd:function nd(a){this.a=a},
ne:function ne(a){this.a=a},
nj:function nj(a,b,c){this.a=a
this.b=b
this.c=c},
ni:function ni(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ng:function ng(a,b){this.a=a
this.b=b},
nh:function nh(a){this.a=a},
nf:function nf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kF:function kF(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
_.id=_.go=_.fy=_.fx=_.fr=_.dy=null
_.k1=!1
_.k2=i
_.k3=j
_.k4=null
_.ok=k
_.p1=l},
rb:function rb(a){this.a=a},
r3:function r3(a){this.a=a},
r9:function r9(a,b){this.a=a
this.b=b},
r8:function r8(a){this.a=a},
r7:function r7(a,b){this.a=a
this.b=b},
ra:function ra(a){this.a=a},
r4:function r4(a,b){this.a=a
this.b=b},
r5:function r5(){},
r6:function r6(){},
x8(a){return new A.hc(a)},
xZ(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.ej(a,b)
r=A.aX(a,s)
q=A.ak(r)
p=A.az(B.l.v(B.h.v(q)).a)
return new A.dQ(b,s,q,p,k)}catch(m){l=A.M(m)
if(l instanceof A.hc){o=l
return new A.dQ(b,k,k,k,o.a)}else{n=l
l=A.q(n)
return new A.dQ(b,k,k,k,l)}}},
GB(a,b){var s,r=A.l([],t.i7)
for(s=J.K(b);s.l();)r.push(A.xZ(a,s.gn()))
return r},
xY(a,b){var s=0,r=A.h(t.eT),q
var $async$xY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.GB(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xY,r)},
ej(a,b){var s,r,q,p,o,n,m,l="archived",k=t.N,j=t.X,i=A.bv(b.d,k,j),h=a.gj9(),g=i.h(0,"id")
if(g==null){s=b.a
i.j(0,"id",s)}else{s=b.a
if(!J.v(g,s))throw A.b(A.x8('data.id "'+A.q(g)+'" does not match record id "'+s+'"'))}r=A.m(["id",s],k,j)
for(k=a.c,j=k.length,q=0;q<k.length;k.length===j||(0,A.E)(k),++q){p=k[q]
s=p.a
o=i.h(0,s)
if(o==null){if(p.c)throw A.b(A.x8('Required field "'+s+'" is missing.'))
r.j(0,s,null)
continue}n=A.AK(p,o)
if(n!=null)throw A.b(A.x8(A.Fm(p,o,n)))
r.j(0,s,o)}for(k=new A.aR(i,A.o(i).i("aR<1,2>")).gu(0);k.l();){m=k.d
j=m.a
if(j==="id"||j==="archived"||h.E(0,j))continue
r.j(0,j,m.b)}r.j(0,l,J.v(i.h(0,l),!0))
return r},
Fm(a,b,c){var s,r=a.a,q=J.ds(b)
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
case 6:s='Field "'+r+'" has unknown enum value "'+A.q(b)+'".'
break
default:s=null}return s},
iM(a){var s,r,q
if(a==null||a.length===0)return B.w
try{s=B.e.av(a,null)
if(t.f.b(s)){r=A.bv(s,t.N,t.X)
return r}}catch(q){}return B.w},
hc:function hc(a){this.a=a},
dQ:function dQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bE(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.b0(i),g=A.jQ(a.gS(),i)
g.J(0,b.gS())
for(g=A.uQ(g,g.r,A.o(g).c),s=g.$ti.c,r=t.f,q=t.X;g.l();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.n.ae(o,n)){h.t(0,p)
if(r.b(o)&&r.b(n)&&J.yc(o.gS(),new A.w4())&&J.yc(n.gS(),new A.w5())){m=A.bE(A.bv(o,i,q),A.bv(n,i,q))
for(l=A.o(m),k=new A.de(m,m.r,l.i("de<1>")),k.c=m.e,p+=".",l=l.c;k.l();){j=k.d
h.t(0,p+(j==null?l.a(j):j))}}}}return h},
CM(a,b,c,d,e,f,g){return new A.ps()},
pt(a,b,c,d,e,f){var s=0,r=A.h(t.r),q,p
var $async$pt=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p=A.bg(A.CN(B.bf,a,b,c,d,e,f),t.r)
s=3
return A.a(p,$async$pt)
case 3:q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$pt,r)},
CN(a,b,c,d,e,f,g){var s,r,q=A.bE(b,c),p=A.bE(b,f)
A.CM(b,q,p,c,e,f,g)
s=t.N
r=A.P(c.gS(),s)
B.c.J(r,new A.a7(f,A.o(f).i("a7<1>")))
B.c.J(r,b.gS())
return A.he(a,b,q,p,0,r,c,!1,A.G(s,t.X),d,e,f,g)},
he(a,b,c,d,e,f,g,h,i,j,k,l,a0){var s,r,q,p,o,n,m
if(e>=f.length)return new A.ex(i,h,null)
s=f[e]
r=g.h(0,s)
q=l.h(0,s)
p=b.h(0,s)
if(s==="archived"){o=J.v(p,!0)
n=J.v(r,!0)
m=J.v(q,!0)
if(n===m)i.j(0,s,n)
else if(n===o)i.j(0,s,m)
else if(m===o)i.j(0,s,n)
else{j.b.h(0,s)
i.j(0,s,m)}return A.he(a,b,c,d,e+1,f,g,h,i,j,k,l,a0)}if(B.n.ae(r,q)){i.j(0,s,r)
return A.he(a,b,c,d,e+1,f,g,h,i,j,k,l,a0)}if(B.n.ae(r,p)){i.j(0,s,q)
return A.he(a,b,c,d,e+1,f,g,h,i,j,k,l,a0)}if(B.n.ae(q,p)){i.j(0,s,r)
return A.he(a,b,c,d,e+1,f,g,h,i,j,k,l,a0)}j.b.h(0,s)
i.j(0,s,q)
return A.he(a,b,c,d,e+1,f,g,h,i,j,k,l,a0)},
AP(a,b,c,d,e,f){return A.pt(a,b,c,d,e,f)},
w4:function w4(){},
w5:function w5(){},
ps:function ps(){},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
uV:function uV(){},
tk:function tk(){},
pE:function pE(a,b){this.a=a
this.b=b},
pG:function pG(a){this.a=a},
pH:function pH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mD:function mD(a,b,c){this.a=a
this.b=b
this.c=c},
ha:function ha(){},
hy:function hy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pJ:function pJ(a,b){this.a=a
this.b=b},
pP:function pP(a,b){this.a=a
this.b=b},
pN:function pN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pM:function pM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
pL:function pL(a,b,c){this.a=a
this.b=b
this.c=c},
pO:function pO(a){this.a=a},
dt:function dt(a,b){this.a=a
this.b=b},
kg:function kg(a,b){this.b=a
this.f=b},
qn:function qn(a,b,c,d,e){var _=this
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
qo:function qo(a,b,c){this.a=a
this.b=b
this.c=c},
qp:function qp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qq:function qq(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qs:function qs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
qt:function qt(a,b,c){this.a=a
this.b=b
this.c=c},
qy:function qy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qw:function qw(a,b,c){this.a=a
this.b=b
this.c=c},
qv:function qv(a,b){this.a=a
this.b=b},
qu:function qu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qx:function qx(a,b,c,d,e,f,g,h,i,j){var _=this
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
bL:function bL(a,b){this.a=a
this.b=b},
b3:function b3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eR:function eR(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eQ:function eQ(a,b){this.a=a
this.b=b},
r0:function r0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
r1:function r1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
z6(a){return new A.eT(a)},
BX(a){return new A.bG(a)},
Cn(a){return new A.cb(a)},
CU(a){return new A.cf(a)},
bd(a){return new A.eF(a)},
Gf(a){var s=a.vN(),r=new A.wl()
return A.q(r.$2(A.xg(s),4))+"-"+A.q(r.$1(A.xe(s)))+"-"+A.q(r.$1(A.qd(s)))+" "+A.q(r.$1(A.xc(s)))+":"+A.q(r.$1(A.xd(s)))+":"+A.q(r.$1(A.xf(s)))+"."+A.q(r.$2(A.yV(s),3))+"Z"},
b2:function b2(){},
eT:function eT(a){this.a=a},
dT:function dT(a,b){this.b=a
this.a=b},
hC:function hC(a){this.a=a},
bG:function bG(a){this.a=a},
cb:function cb(a){this.a=a},
cf:function cf(a){this.a=a},
eE:function eE(a){this.a=a},
eF:function eF(a){this.a=a},
eq:function eq(a){this.a=a},
du:function du(a){this.a=a},
eO:function eO(a,b,c){this.a=a
this.b=b
this.c=c},
cg:function cg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eG:function eG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hx:function hx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iY:function iY(a,b){this.a=a
this.b=b},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
wl:function wl(){},
Dj(a){return 0.5+B.aw.v4()},
xo(a){var s,r=a.toLowerCase()
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
Dk(a){var s,r,q,p,o,n,m,l,k=null,j=A.ad("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0).dw(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.xo(r)
if(q==null)return k
r=s[3]
r.toString
r=A.at(r)
p=s[1]
p.toString
p=A.at(p)
o=s[4]
o.toString
o=A.at(o)
n=s[5]
n.toString
n=A.at(n)
s=s[6]
s.toString
return A.xp(r,q,p,o,n,A.at(s))}j=A.ad("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0).dw(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.xo(r)
if(q==null)return k
r=s[3]
r.toString
m=A.at(r)
l=m>=70?1900+m:2000+m
r=s[1]
r.toString
r=A.at(r)
p=s[4]
p.toString
p=A.at(p)
o=s[5]
o.toString
o=A.at(o)
s=s[6]
s.toString
return A.xp(l,q,r,p,o,A.at(s))}j=A.ad("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0).dw(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.xo(r)
if(q==null)return k
r=s[6]
r.toString
r=A.at(r)
p=s[2]
p.toString
p=A.at(p)
o=s[3]
o.toString
o=A.at(o)
n=s[4]
n.toString
n=A.at(n)
s=s[5]
s.toString
return A.xp(r,q,p,o,n,A.at(s))}return k},
xp(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.wV(a,b,c,d,e,f,0)
return s}catch(r){return null}},
r2:function r2(a,b){this.at=a
this.ay=b},
hw:function hw(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
re:function re(a,b){this.a=a
this.b=b},
Aw(a,b,c,d,e,f,g,h,i,j,k){return A.m(["store",j,"record_id",i,"kind",f.b,"payload_json",h,"base_updated",b,"base_hash",a,"dirty_fields",e,"op_id",g,"created_at",c,"updated_at",k,"depends_on_op",d],t.N,t.X)},
rc(a){return A.mk("lp_sync_row",new A.rd(a))},
xb(a){return A.mk("lp_outbox",new A.pK(a))},
CV(a){return A.mk("lp_op_queue",new A.pF(a))},
iO(a,b){var s=0,r=A.h(t.gi),q,p,o,n,m,l,k,j,i,h
var $async$iO=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=t.N
m=A.b0(n)
l=A.P(b,A.o(b).c)
k=l.length
if(k===0){q=m
s=1
break}p=B.c.M(A.aJ(k,"?",!1,n),", ")
k=a.al("SELECT op_id FROM lp_outbox WHERE op_id IN ("+p+")",l)
o=t.J
j=m
i=J
h=o
s=3
return A.a(k,$async$iO)
case 3:j.J(0,i.aE(h.a(d),new A.wE(),n))
k=A.P(l,n)
k.push("pending")
k.push("failed")
k=a.al("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$iO)
case 4:j.J(0,i.aE(h.a(d),new A.wF(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iO,r)},
fy(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$fy=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.eJ("lp_blobs",A.l(["hash"],q),1,"hash = ?",A.l([b],q))
p=J
o=t.J
s=5
return A.a(q,$async$fy)
case 5:s=p.c8(o.a(f))?2:4
break
case 2:q=a.an(0,"lp_blobs",A.m(["hash",b,"size",d,"state","local","refcount",1,"last_access",c,"created_at",c],t.N,t.K))
s=6
return A.a(q,$async$fy)
case 6:s=3
break
case 4:q=a.aX("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",A.l([c,b],t.hf))
s=7
return A.a(q,$async$fy)
case 7:case 3:return A.e(null,r)}})
return A.f($async$fy,r)},
wb(a,b){var s=0,r=A.h(t.H),q,p
var $async$wb=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aX(u.y,A.l([b],t.s))
s=3
return A.a(p,$async$wb)
case 3:case 1:return A.e(q,r)}})
return A.f($async$wb,r)},
c7(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$c7=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.vm("lp_file_refs",A.l(["ref_id","hash"],n),"store = ? AND record_id = ?",A.l([b,c],n))
l=J
k=t.J
s=2
return A.a(m,$async$c7)
case 2:m=l.K(k.a(f))
case 3:if(!m.l()){s=4
break}q=m.gn()
p=a.a3("lp_file_refs","ref_id = ?",[q.h(0,"ref_id")])
s=5
return A.a(p,$async$c7)
case 5:o=A.ag(q.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(A.wb(a,o),$async$c7)
case 8:case 7:s=3
break
case 4:m=a.a3("lp_conflicts","store = ? AND record_id = ?",A.l([b,c],n))
s=9
return A.a(m,$async$c7)
case 9:m=t.N
m=a.F("lp_op_queue",A.m(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.l([b,c],n))
s=10
return A.a(m,$async$c7)
case 10:s=d?11:12
break
case 11:m=a.a3("lp_outbox","store = ? AND record_id = ?",A.l([b,c],n))
s=13
return A.a(m,$async$c7)
case 13:n=a.a3("lp_sync_row","store = ? AND record_id = ?",A.l([b,c],n))
s=14
return A.a(n,$async$c7)
case 14:case 12:return A.e(null,r)}})
return A.f($async$c7,r)},
ci:function ci(a,b){this.a=a
this.b=b},
fA:function fA(a,b){this.a=a
this.b=b},
eC:function eC(a,b){this.a=a
this.b=b},
hp:function hp(a,b){this.a=a
this.b=b},
cE:function cE(a,b,c,d,e,f,g,h,i,j){var _=this
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
rd:function rd(a){this.a=a},
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
pK:function pK(a){this.a=a},
dR:function dR(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
pF:function pF(a){this.a=a},
wE:function wE(){},
wF:function wF(){},
jc:function jc(a,b,c,d,e,f,g,h){var _=this
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
n1:function n1(a){this.a=a},
CH(a){var s,r,q
try{s=A.w7(a)
if(t.f.b(s)){r=s.ck(0,new A.pf(),t.N,t.X)
return r}}catch(q){}return null},
CI(a){if(a instanceof A.hO)return A.ei(new A.kT(2,a.a,a.b,null).ao())
t.bp.a(a)
return A.x7(a.a,a.b,a.c,a.d)},
x7(a,b,c,d){return A.ei(new A.kT(2,a,null,new A.rF(b,c,d)).ao())},
p7:function p7(){},
jT:function jT(a,b){this.a=a
this.d=b},
pf:function pf(){},
lg:function lg(a){this.a=a},
bF(a){var s,r,q
if(a instanceof A.b8)return A.m(["lp:datetime",1000*a.a+a.b],t.N,t.S)
if(a instanceof A.ay){s=t.N
return A.m(["lp:bigint",a.m(0)],s,s)}if(t.p.b(a))return A.m(["lp:bytes",A.cZ(a,t.S)],t.N,t.L)
if(t.j.b(a)){s=t.X
r=J.aE(a,A.AA(),s)
r=A.P(r,r.$ti.i("Q.E"))
return A.cZ(r,s)}if(t.f.b(a)){q=A.G(t.N,t.X)
a.ac(0,new A.wg(q))
return q}if(a==null||A.co(a)||A.aC(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.O("Value of type "+J.ds(a).m(0)+" is not wire-safe. Only null, bool, int, double, String, DateTime, BigInt, Uint8List, List, and Map are supported.",null))},
mg(a){var s,r,q,p,o,n,m,l="lp:datetime",k=null,j="lp:bigint",i="lp:bytes"
if(t.f.b(a)){if(a.gk(a)===1&&a.I(l)){s=a.h(0,l)
if(A.aC(s)){r=B.b.aC(s,1000)
q=B.b.O(s-r,1000)
if(q<-864e13||q>864e13)A.y(A.ai(q,-864e13,864e13,"millisecondsSinceEpoch",k))
if(q===864e13&&r!==0)A.y(A.aY(r,"microsecond",u.B))
A.bD(!0,"isUtc",t.y)
return new A.b8(q,r,!0)}throw A.b(A.O("Malformed wire DateTime: "+A.q(s),k))}if(a.gk(a)===1&&a.I(j)){s=a.h(0,j)
if(typeof s=="string")return A.xy(s,k)
throw A.b(A.O("Malformed wire BigInt: "+A.q(s),k))}if(a.gk(a)===1&&a.I(i)){s=a.h(0,i)
if(t.j.b(s)){r=J.J(s)
q=r.gk(s)
p=new Uint8Array(q)
for(o=0;o<r.gk(s);++o){n=r.h(s,o)
if(!A.aC(n)||n<0||n>255)throw A.b(A.O("Malformed wire byte at index "+o+": "+A.q(n),k))
p[o]=n}return p}throw A.b(A.O("Malformed wire bytes: "+A.q(s),k))}m=A.G(t.N,t.X)
a.ac(0,new A.wa(m))
return m}if(t.j.b(a)){r=t.X
q=J.aE(a,A.Az(),r)
q=A.P(q,q.$ti.i("Q.E"))
return A.cZ(q,r)}return a},
wg:function wg(a){this.a=a},
wa:function wa(a){this.a=a},
iL(a,b,c,d,e){return A.Gq(a,b,c,d,e,e)},
Gq(a,b,c,d,e,f){var s=0,r=A.h(f),q,p=2,o=[],n,m,l
var $async$iL=A.c(function(g,h){if(g===1){o.push(h)
s=p}for(;;)switch(s){case 0:d.$0()
c.$0()
p=4
s=7
return A.a(b.$0(),$async$iL)
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
return A.a(a.$0(),$async$iL)
case 8:throw l
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iL,r)},
kN:function kN(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=0
_.x=g},
rm:function rm(a){this.d=a},
GE(a){var s,r,q,p,o="stores",n="maxDocBytes",m="destructiveBackup"
if(a==null)return A.G(t.N,t.X)
try{if(t.f.b(a)){s=A.iI(a)
r=A.G(t.N,t.X)
q=t.j
if(q.b(J.a1(s,o))){q=J.aE(q.a(J.a1(s,o)),new A.wz(),t.bU)
q=A.P(q,q.$ti.i("Q.E"))
J.bT(r,o,q)}if(A.aC(J.a1(s,n)))J.bT(r,n,J.a1(s,n))
if(A.co(J.a1(s,m)))J.bT(r,m,J.a1(s,m))
return r}}catch(p){}return A.G(t.N,t.X)},
GI(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.iI(a).h(0,b)
return s}}catch(r){}return null},
Gk(a,b){if(b!=null)return!1
return B.c.cH(a,new A.wq())},
wz:function wz(){},
wq:function wq(){},
wp:function wp(){},
GL(a){if(a instanceof A.h9){if(a instanceof A.hL)return"ValidationException"
if(a instanceof A.hJ)return"UniqueConstraintException"
if(a instanceof A.hm)return"NotNullConstraintException"
if(a instanceof A.fH)return"CheckConstraintException"
if(a instanceof A.hs)return"PrimaryKeyConstraintException"
if(a instanceof A.fV)return"ForeignKeyConstraintException"
if(a instanceof A.cD)return"StorageError"
if(a instanceof A.hz)return"RecordNotFoundException"
if(a instanceof A.hB)return"SchemaTooNewError"
if(a instanceof A.fX)return"FtsUnavailableError"
if(a instanceof A.eI)return"SchemaRegistrationError"
if(a instanceof A.fJ)return"ConflictBlockedError"
if(a instanceof A.fO)return"DestructiveMigrationRefusedError"
if(a instanceof A.qC)return"ReadOnlyTxError"
return"LocalPocketError"}if(a instanceof A.b2){if(a instanceof A.eT)return"TransientNetworkError"
if(a instanceof A.dT)return"ServerBusyError"
if(a instanceof A.hC)return"ServerError"
if(a instanceof A.bG)return"AuthError"
if(a instanceof A.cb)return"ForbiddenError"
if(a instanceof A.cf)return"NotFoundError"
if(a instanceof A.eE)return"PayloadError"
if(a instanceof A.eF)return"ProtocolError"
if(a instanceof A.eq)return"DuplicateIdError"
if(a instanceof A.du)return"BatchFailedError"
return"SyncError"}if(a instanceof A.hv)return"ProtocolEnvelopeException"
if(a instanceof A.fN)return"DatabaseWorkerClosedException"
if(t.b0.b(a))return"RangeError"
if(a instanceof A.bl)return"StateError"
if(a instanceof A.bq)return"ArgumentError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
return"unknown"},
Dt(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.aC(s))throw A.b(A.d2('Request "v" must be an int.'))
if(!A.aC(r)||r<0)throw A.b(A.d2('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.ck.E(0,q))throw A.b(A.d2("Unknown request operation: "+A.q(q)))
if(!t.f.b(p))throw A.b(A.d2('Request "a" must be a map.'))
return new A.f_(s,r,q,p.ck(0,new A.rI(),t.N,t.X))},
d2(a){return new A.hv(a)},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rI:function rI(){},
kT:function kT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rF:function rF(a,b,c){this.a=a
this.b=b
this.c=c},
fN:function fN(a){this.a=a},
hv:function hv(a){this.a=a},
kk:function kk(a,b){this.a=a
this.b=b},
zd(a){return A.bh(A.bo(a).a,null)},
ze(a){return A.bh(J.ds(a).a,null)},
S:function S(a){this.a=a},
GF(a){if(!t.f.b(a))throw A.b(A.X("Schema must be a map: "+A.q(a),null,null))
return A.yp(A.iI(a),t.X)},
iI(a){var s=A.G(t.N,t.X)
a.ac(0,new A.wd(s))
return s},
Dv(a){var s,r=A.G(t.N,t.X)
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
zf(a){var s,r=A.G(t.N,t.X)
r.j(0,"state",a.a.b)
r.j(0,"pending",a.b)
r.j(0,"conflicts",a.c)
r.j(0,"hidden",a.d)
r.j(0,"blocked",a.e)
s=a.f
if(s!=null)r.j(0,"lastError",s)
s=a.r
if(s!=null)r.j(0,"lastSyncAt",A.bF(s))
s=a.w
if(s!=null)r.j(0,"lastSuccessfulSyncAt",A.bF(s))
return r},
f0:function f0(){},
hO:function hO(a,b){this.b=a
this.a=b},
e0:function e0(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
wd:function wd(a){this.a=a},
wc:function wc(){},
kX:function kX(){},
rP:function rP(a){this.a=a},
rQ:function rQ(a){this.a=a},
rO:function rO(a,b,c,d,e){var _=this
_.ax=$
_.a=a
_.c=b
_.d=null
_.e=1
_.f=c
_.r=d
_.w=1
_.Q=_.z=_.y=_.x=null
_.as=e
_.at=null},
rR:function rR(a){this.a=a},
kV:function kV(){},
rL:function rL(a,b,c){this.a=a
this.b=b
this.c=c},
rK:function rK(a){this.a=a},
kW:function kW(){},
rM:function rM(a,b,c){this.a=a
this.b=b
this.c=c},
rN:function rN(){},
kZ:function kZ(){},
rS:function rS(a){this.a=a},
l_:function l_(){},
vu:function vu(a,b){this.a=a
this.b=b},
l0:function l0(){},
rX:function rX(a){this.a=a},
rY:function rY(a,b){this.a=a
this.b=b},
vg:function vg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l1:function l1(){},
rZ:function rZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t_:function t_(a){this.a=a},
f1:function f1(a){this.a=a},
l2:function l2(){},
t6:function t6(a,b,c){this.a=a
this.b=b
this.c=c},
t7:function t7(a){this.a=a},
t9:function t9(a,b,c){this.a=a
this.b=b
this.c=c},
t8:function t8(a,b,c){this.a=a
this.b=b
this.c=c},
t1:function t1(a){this.a=a},
t5:function t5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
t0:function t0(a,b,c){this.a=a
this.b=b
this.c=c},
t4:function t4(a,b,c){this.a=a
this.b=b
this.c=c},
t3:function t3(a,b,c){this.a=a
this.b=b
this.c=c},
t2:function t2(a,b,c){this.a=a
this.b=b
this.c=c},
m_:function m_(){},
m0:function m0(){},
m1:function m1(){},
m2:function m2(){},
m3:function m3(){},
m4:function m4(){},
m5:function m5(){},
Ae(a){return a},
As(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.ae("")
o=a+"("
p.a=o
n=A.a8(b)
m=n.i("c2<1>")
l=new A.c2(b,0,s,m)
l.hZ(b,0,s,n.c)
m=o+new A.ac(l,new A.vY(),m.i("ac<Q.E,k>")).M(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.O(p.m(0),null))}},
nl:function nl(a){this.a=a},
nm:function nm(){},
nn:function nn(){},
vY:function vY(){},
p_:function p_(){},
eD(a,b){var s,r,q,p,o,n=b.mY(a),m=b.ci(a)
if(n!=null)a=B.a.aa(a,n.length)
s=t.s
r=A.l([],s)
q=A.l([],s)
s=a.length
if(s!==0&&b.bQ(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.bQ(a.charCodeAt(o))){r.push(B.a.q(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.aa(a,p))
q.push("")}return new A.k8(b,n,m,r,q)},
k8:function k8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yS(a){return new A.k9(a)},
k9:function k9(a){this.a=a},
Di(){var s,r,q,p,o,n,m,l,k=null
if(A.xr().gaK()!=="file")return $.iQ()
if(!B.a.cd(A.xr().gb7(),"/"))return $.iQ()
s=A.zR(k,0,0)
r=A.zP(k,0,0,!1)
q=A.vl(k,0,0,k)
p=A.zO(k,0,0)
o=A.vk(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.zQ("a/b",0,3,k,"",m)
if(n&&!B.a.N(l,"/"))l=A.xI(l,m)
else l=A.ed(l)
if(A.ix("",s,n&&B.a.N(l,"//")?"":r,o,l,q,p).jH()==="a\\b")return $.mo()
return $.Bc()},
r_:function r_(){},
qb:function qb(a,b,c){this.d=a
this.e=b
this.f=c},
rp:function rp(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
rJ:function rJ(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
wX(a,b){if(b<0)A.y(A.aG("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.y(A.aG("Offset "+b+u.D+a.gk(0)+"."))
return new A.jw(a,b)},
qJ:function qJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
jw:function jw(a,b){this.a=a
this.b=b},
f8:function f8(a,b,c){this.a=a
this.b=b
this.c=c},
Cs(a,b){var s=A.Ct(A.l([A.DT(a,!0)],t.g7)),r=new A.oQ(b).$0(),q=B.b.m(B.c.gZ(s).b+1),p=A.Cu(s)?0:3,o=A.a8(s)
return new A.ow(s,r,null,1+Math.max(q.length,p),new A.ac(s,new A.oy(),o.i("ac<1,i>")).vy(0,B.b0),!A.Gt(new A.ac(s,new A.oz(),o.i("ac<1,j?>"))),new A.ae(""))},
Cu(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.v(r.c,q.c))return!1}return!0},
Ct(a){var s,r,q=A.Gj(a,new A.oB(),t.nf,t.K)
for(s=A.o(q),r=new A.aI(q,q.r,q.e,s.i("aI<2>"));r.l();)J.yd(r.d,new A.oC())
s=s.i("aR<1,2>")
r=s.i("fR<n.E,c6>")
s=A.P(new A.fR(new A.aR(q,s),new A.oD(),r),r.i("n.E"))
return s},
DT(a,b){var s=new A.ux(a).$0()
return new A.b7(s,!0,null)},
DV(a){var s,r,q,p,o,n,m=a.gaB()
if(!B.a.E(m,"\r\n"))return a
s=a.gG().gak()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gH()
p=a.gY()
o=a.gG().ga8()
p=A.ks(s,a.gG().gaj(),o,p)
o=A.x(m,"\r\n","\n")
n=a.gaW()
return A.qK(r,p,o,A.x(n,"\r\n","\n"))},
DW(a){var s,r,q,p,o,n,m
if(!B.a.cd(a.gaW(),"\n"))return a
if(B.a.cd(a.gaB(),"\n\n"))return a
s=B.a.q(a.gaW(),0,a.gaW().length-1)
r=a.gaB()
q=a.gH()
p=a.gG()
if(B.a.cd(a.gaB(),"\n")){o=A.wk(a.gaW(),a.gaB(),a.gH().gaj())
o.toString
o=o+a.gH().gaj()+a.gk(a)===a.gaW().length}else o=!1
if(o){r=B.a.q(a.gaB(),0,a.gaB().length-1)
if(r.length===0)p=q
else{o=a.gG().gak()
n=a.gY()
m=a.gG().ga8()
p=A.ks(o-1,A.zy(s),m-1,n)
q=a.gH().gak()===a.gG().gak()?p:a.gH()}}return A.qK(q,p,r,s)},
DU(a){var s,r,q,p,o
if(a.gG().gaj()!==0)return a
if(a.gG().ga8()===a.gH().ga8())return a
s=B.a.q(a.gaB(),0,a.gaB().length-1)
r=a.gH()
q=a.gG().gak()
p=a.gY()
o=a.gG().ga8()
p=A.ks(q-1,s.length-B.a.dC(s,"\n")-1,o-1,p)
return A.qK(r,p,s,B.a.cd(a.gaW(),"\n")?B.a.q(a.gaW(),0,a.gaW().length-1):a.gaW())},
zy(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.ht(a,"\n",s-2)-1
else return s-B.a.dC(a,"\n")-1},
ow:function ow(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oQ:function oQ(a){this.a=a},
oy:function oy(){},
ox:function ox(){},
oz:function oz(){},
oB:function oB(){},
oC:function oC(){},
oD:function oD(){},
oA:function oA(a){this.a=a},
oR:function oR(){},
oE:function oE(a){this.a=a},
oL:function oL(a,b,c){this.a=a
this.b=b
this.c=c},
oM:function oM(a,b){this.a=a
this.b=b},
oN:function oN(a){this.a=a},
oO:function oO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oJ:function oJ(a,b){this.a=a
this.b=b},
oK:function oK(a,b){this.a=a
this.b=b},
oF:function oF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oG:function oG(a,b,c){this.a=a
this.b=b
this.c=c},
oH:function oH(a,b,c){this.a=a
this.b=b
this.c=c},
oI:function oI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oP:function oP(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a,b,c){this.a=a
this.b=b
this.c=c},
ux:function ux(a){this.a=a},
c6:function c6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ks(a,b,c,d){if(a<0)A.y(A.aG("Offset may not be negative, was "+a+"."))
else if(c<0)A.y(A.aG("Line may not be negative, was "+c+"."))
else if(b<0)A.y(A.aG("Column may not be negative, was "+b+"."))
return new A.c0(d,a,c,b)},
c0:function c0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kt:function kt(){},
kv:function kv(){},
Db(a,b,c){return new A.eL(c,a,b)},
kw:function kw(){},
eL:function eL(a,b,c){this.c=a
this.a=b
this.b=c},
eM:function eM(){},
qK(a,b,c,d){var s=new A.cC(d,a,b,c)
s.nx(a,b,c)
if(!B.a.E(d,c))A.y(A.O('The context line "'+d+'" must contain "'+c+'".',null))
if(A.wk(d,c,a.gaj())==null)A.y(A.O('The span text "'+c+'" must start at column '+(a.gaj()+1)+' in a line within "'+d+'".',null))
return s},
cC:function cC(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
Df(a){var s
A:{if(18===a){s=B.cl
break A}if(23===a){s=B.cm
break A}if(9===a){s=B.cn
break A}s=null
break A}return s},
hE:function hE(a,b){this.a=a
this.b=b},
c1:function c1(a,b,c){this.a=a
this.b=b
this.c=c},
De(a,b,c,d,e,f,g){return new A.d3(d,b,c,e,f,a,g)},
d3:function d3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
qO:function qO(){},
nH:function nH(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
nQ:function nQ(a){this.a=a},
nP:function nP(a){this.a=a},
nR:function nR(a){this.a=a},
nN:function nN(a){this.a=a},
nM:function nM(a){this.a=a},
nO:function nO(a){this.a=a},
nJ:function nJ(a){this.a=a},
nI:function nI(a){this.a=a},
nK:function nK(a){this.a=a},
nL:function nL(a,b){this.a=a
this.b=b},
dh:function dh(a,b,c,d,e){var _=this
_.a=a
_.b=!1
_.c=b
_.d=null
_.e=c
_.f=d
_.r=null
_.$ti=e},
v9:function v9(a,b){this.a=a
this.b=b},
va:function va(a,b,c){this.a=a
this.b=b
this.c=c},
vb:function vb(a,b,c){this.a=a
this.b=b
this.c=c},
qL:function qL(){},
eN:function eN(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
x_(a,b){var s=$.mm()
return new A.jA(A.G(t.N,t.a_),s,a)},
jA:function jA(a,b,c){this.d=a
this.b=b
this.a=c},
lr:function lr(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
GG(a){var s=J.BT(new v.G.URL(a,"file:///").pathname,"/")
return new A.bf(s,new A.wA(),A.a8(s).i("bf<1>"))},
wA:function wA(){},
np:function np(){},
km:function km(a,b,c){this.d=a
this.a=b
this.c=c},
bJ:function bJ(a,b){this.a=a
this.b=b},
uW:function uW(a){this.a=a
this.b=-1},
lG:function lG(){},
lH:function lH(){},
lJ:function lJ(){},
lK:function lK(){},
pI:function pI(a,b){this.a=a
this.b=b},
D4(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bi(r,"step")}return s},
dz:function dz(){},
dH:function dH(a){this.a=a},
jg:function jg(a){this.a=a},
eX(a){return new A.cI(a)},
yh(a,b){var s,r,q,p
if(b==null)b=$.mm()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.cl(256)
r&2&&A.C(a)
a[q]=p}},
cI:function cI(a){this.a=a},
hD:function hD(a){this.a=a},
aL:function aL(){},
j5:function j5(){},
j4:function j4(){},
GK(a,b){var s=null,r=new A.dK(t.kk)
return A.AW(a,new A.hP(s,s,s,s,s,s,s,s,new A.wH(new A.wG(r,A.vQ(new A.wI(r)))),s,s,s,s),s,b)},
e3:function e3(a){var _=this
_.d=a
_.c=_.b=_.a=null},
wI:function wI(a){this.a=a},
wG:function wG(a,b){this.a=a
this.b=b},
wH:function wH(a){this.a=a},
rA:function rA(a){this.a=a},
rv:function rv(a,b,c){this.a=a
this.b=b
this.c=c},
rC:function rC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rB:function rB(a,b,c){this.b=a
this.c=b
this.d=c},
dZ:function dZ(){},
d8:function d8(){},
eZ:function eZ(a,b,c){this.a=a
this.b=b
this.c=c},
bC(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.M(r)
if(q instanceof A.cI){s=q
return s.a}else return 1}},
jh:function jh(a){this.b=this.a=$
this.d=a},
nu:function nu(a,b,c){this.a=a
this.b=b
this.c=c},
nr:function nr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nw:function nw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ny:function ny(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nA:function nA(a,b){this.a=a
this.b=b},
nt:function nt(a){this.a=a},
nz:function nz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nE:function nE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nC:function nC(a,b){this.a=a
this.b=b},
nB:function nB(a,b){this.a=a
this.b=b},
nv:function nv(a,b,c){this.a=a
this.b=b
this.c=c},
nx:function nx(a,b){this.a=a
this.b=b},
nD:function nD(a,b){this.a=a
this.b=b},
ns:function ns(a,b,c){this.a=a
this.b=b
this.c=c},
fC:function fC(a,b){this.a=a
this.$ti=b},
mt:function mt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mv:function mv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mu:function mu(a,b,c){this.a=a
this.b=b
this.c=c},
ca(a,b){var s=new A.r($.t,b.i("r<0>")),r=new A.aa(s,b.i("aa<0>")),q=t.m
A.b6(a,"success",new A.n4(r,a,b),!1,q)
A.b6(a,"error",new A.n5(r,a),!1,q)
return s},
Ca(a,b){var s=new A.r($.t,b.i("r<0>")),r=new A.aa(s,b.i("aa<0>")),q=t.m
A.b6(a,"success",new A.n9(r,a,b),!1,q)
A.b6(a,"error",new A.na(r,a),!1,q)
A.b6(a,"blocked",new A.nb(r),!1,q)
return s},
e7:function e7(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
u_:function u_(a,b){this.a=a
this.b=b},
u0:function u0(a,b){this.a=a
this.b=b},
n4:function n4(a,b,c){this.a=a
this.b=b
this.c=c},
n5:function n5(a,b){this.a=a
this.b=b},
n9:function n9(a,b,c){this.a=a
this.b=b
this.c=c},
na:function na(a,b){this.a=a
this.b=b},
nb:function nb(a){this.a=a},
ml(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
yC(a,b,c){var s=a.read(b,c)
return s},
yD(a,b,c){var s=a.write(b,c)
return s},
yB(a,b){return A.a3(a.removeEntry(b,{recursive:!1}),t.X)},
yA(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.y(A.O("Target object does not implement the async iterable interface",null))
return new A.eb(new A.oi(),new A.fC(a,s),s.i("eb<a_.T,F>"))},
oi:function oi(){},
rw:function rw(a){this.a=a},
rx:function rx(a){this.a=a},
rz(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$rz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a3(p.fetch(new p.URL(a,A.aW(p.location).href),null),t.m),$async$rz)
case 3:q=o.ry(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$rz,r)},
ry(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$ry=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.jh(A.G(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.rw(p).hv(a),$async$ry)
case 3:q=new o.eY(new n.rA(m.Ds(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ry,r)},
eY:function eY(a){this.a=a},
DX(a){var s=new A.i6(a,new A.aa(new A.r($.t,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.nB(a)
return s},
jC(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$jC=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.mw(a)
n=A.x_("dart-memory",null)
m=$.mm()
l=new A.cV(o,n,new A.dK(t.p3),A.b0(p),A.G(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.hz(),$async$jC)
case 3:s=4
return A.a(l.e5(),$async$jC)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jC,r)},
mw:function mw(a){this.a=null
this.b=a},
mz:function mz(a){this.a=a},
my:function my(a,b,c){this.a=a
this.b=b
this.c=c},
mx:function mx(a){this.a=a},
i6:function i6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
uA:function uA(a){this.a=a},
uB:function uB(a){this.a=a},
uz:function uz(a){this.a=a},
uC:function uC(a,b,c){this.a=a
this.b=b
this.c=c},
uE:function uE(a,b){this.a=a
this.b=b},
uD:function uD(a,b){this.a=a
this.b=b},
ub:function ub(a,b,c){this.a=a
this.b=b
this.c=c},
uc:function uc(a,b){this.a=a
this.b=b},
lA:function lA(a,b){this.a=a
this.b=b},
cV:function cV(a,b,c,d,e,f,g){var _=this
_.d=a
_.f=_.e=!1
_.r=!0
_.w=b
_.x=c
_.y=d
_.z=e
_.b=f
_.a=g},
oU:function oU(a,b,c){this.a=a
this.b=b
this.c=c},
oV:function oV(){},
oT:function oT(a,b){this.a=a
this.b=b},
ls:function ls(a,b,c){this.a=a
this.b=b
this.c=c},
uy:function uy(a,b){this.a=a
this.b=b},
aN:function aN(){},
i4:function i4(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
hZ:function hZ(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
f4:function f4(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
fn:function fn(a,b,c,d,e){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.d=e
_.c=_.b=_.a=null},
z1(a){var s=A.x_("dart-memory",null),r=$.mm()
return new A.eK(s,r,a)},
ko(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$ko=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.ml()
if(j==null)throw A.b(A.eX(1))
p=t.m
s=3
return A.a(A.a3(j.getDirectory(),p),$async$ko)
case 3:o=d
n=A.GG(a),m=J.K(n.a),n=new A.d9(m,n.b,n.$ti.i("d9<1>")),l=null
case 4:if(!n.l()){s=6
break}s=7
return A.a(A.a3(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$ko)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.aB(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ko,r)},
kp(a){var s=0,r=A.h(t.m),q
var $async$kp=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.ko(a,!0),$async$kp)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kp,r)},
qH(a,b){var s=0,r=A.h(t.g_),q,p
var $async$qH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.ml()==null)throw A.b(A.eX(1))
p=A
s=3
return A.a(A.kp(a),$async$qH)
case 3:q=p.qG(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$qH,r)},
qG(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$qG=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.z1(c)
s=3
return A.a(p.cm(a,!1),$async$qG)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$qG,r)},
et:function et(a,b,c){this.c=a
this.a=b
this.b=c},
eK:function eK(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
qI:function qI(a,b){this.a=a
this.b=b},
lQ:function lQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
uS:function uS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ds(a,b){var s=A.aW(a.exports.memory)
b.b!==$&&A.B_()
b.b=s
s=new A.rq(s,b,a.exports)
s.ny(a,b)
return s},
l3(a,b){var s,r=A.bx(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
e1(a,b){var s=a.buffer,r=A.l3(a,b)
return B.k.h8(A.bx(s,b,r))},
xs(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.k.h8(A.bx(s,b,c==null?A.l3(a,b):c))},
rq:function rq(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
rr:function rr(a){this.a=a},
rs:function rs(a){this.a=a},
rt:function rt(a){this.a=a},
ru:function ru(a){this.a=a},
w6(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$w6=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.iR()
s=l!=null?3:5
break
case 3:p=A.Fj()
s=6
return A.a(A.hN(l,p,null,null,!1),$async$w6)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.aB({port:m.port1,lockName:p},new A.fK(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$w6,r)},
Fj(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bc(97+$.BB().cl(26))
return r.charCodeAt(0)==0?r:r},
C0(a){return new A.fG(a)},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
qh:function qh(){},
ql:function ql(a){this.a=a},
qm:function qm(a){this.a=a},
qk:function qk(a){this.a=a},
qj:function qj(a){this.a=a},
qi:function qi(a){this.a=a},
fG:function fG(a){this.a=a},
nF:function nF(){},
jf:function jf(a){this.a=a},
nq:function nq(a){this.a=a},
e_:function e_(){},
jv(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$jv=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.kp(a),$async$jv)
case 3:p=e
o=A.z1(c)
s=b?4:5
break
case 4:s=6
return A.a(o.cm(p,!0),$async$jv)
case 6:case 5:q=new A.ju(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jv,r)},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
ou:function ou(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
hN(a,b,c,d,e){var s,r,q={},p=new A.r($.t,t.nI),o=new A.aa(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.wY(A.a3(a.request(b,s,A.cn(new A.rG(q,o))),r),new A.rH(q,d,o),r,t.K)
return p},
rG:function rG(a,b){this.a=a
this.b=b},
rH:function rH(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a){this.a=a},
ji:function ji(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
nT:function nT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nS:function nS(a,b){this.a=a
this.b=b},
nU:function nU(a){this.a=a},
hg:function hg(a){this.a=!1
this.b=a},
pC:function pC(a,b){this.a=a
this.b=b},
pB:function pB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pA:function pA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
C7(a){var s,r,q,p,o=A.l([],t.kC),n=t.c.a(a.a),m=t.bF.b(n)?n:new A.br(n,A.a8(n).i("br<1,k>"))
for(s=J.J(m),r=0;r<s.gk(m)/2;++r){q=r*2
o.push(new A.aB(A.es(B.c_,s.h(m,q)),s.h(m,q+1)))}s=A.fp(a.b)
q=A.fp(a.c)
p=A.fp(a.d)
return new A.dA(o,s,q,A.fp(a.g),p)},
dA:function dA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
D6(a){var s
if(J.v(a.t,"errorResponse")){s=A.Ch(a)
if(s!=null&&s instanceof A.cO)return s
else return new A.eH(a.e)}else return new A.eH("Did not respond with expected type, got "+A.q(a))},
Ch(a){var s=a.s,r=s==null?null:A.af(s)
A:{if(0===r){s=A.Ci(t.c.a(a.r))
break A}if(1===r){s=B.a4
break A}s=null
break A}return s},
Ci(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.w("Pattern matching error"))
n=new A.o9()
l=A.af(A.ee(l))
A.H(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.dB(i,h,A.bx(h,0,o))}else p=o
n=n.$1(k)
A.A_(g)
return new A.d3(s,r,l,g==null?o:A.af(g),n,q,p)},
Cj(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.Dn(l)
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
D7(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.ou(a2,512,"transfer" in a2)
a5.lz(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.D4(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.ot(l)
l=new a0.DataView(a3.a,m,o)
k=new a0.Array(o)
for(j=0;j<o;++j){switch(p.sqlite3_column_type(q,j)){case 1:i=p.sqlite3_column_int64(q,j)
h=a0.Number(i)
if(a0.Number.isSafeInteger(h)){i=h
g=B.af}else g=B.ag
break
case 2:i=p.sqlite3_column_double(q,j)
g=B.ah
break
case 3:f=p.sqlite3_column_text(q,j)
e=r.buffer
d=A.l3(r,f)
f=new Uint8Array(e,f,d)
c=new A.cM(!1).cw(f,0,a,!0)
i=c
g=B.ai
break
case 4:i=s.k5(j)
g=B.aj
break
case 5:default:i=a
g=B.ak}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.l3(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.cM(!1).cw(a0,0,a,!0)}return A.AQ(!1,b,0,0,a1,a,a3.vL(0))},
Gu(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
o9:function o9(){},
AQ(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
fv(a){var s,r,q,p,o=v.G,n=new o.Array()
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
G8(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
jX:function jX(a,b,c){this.a=a
this.b=b
this.$ti=c},
qE:function qE(){},
Cm(a){var s,r
for(s=0;s<5;++s){r=B.bQ[s]
if(r.c===a)return r}throw A.b(A.O("Unknown FS implementation: "+a,null))},
Dm(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.ak
break A}q=A.aC(a)
p=q?a:j
if(q){s=p
r=B.af
break A}q=a instanceof A.ay
if(q)o=a
else o=j
if(q){s=v.G.BigInt(o.m(0))
r=B.ag
break A}q=typeof a=="number"
n=q?a:j
if(q){s=n
r=B.ah
break A}q=typeof a=="string"
m=q?a:j
if(q){s=m
r=B.ai
break A}q=t.p.b(a)
l=q?a:j
if(q){s=l
r=B.aj
break A}q=A.co(a)
k=q?a:j
if(q){s=k
r=B.aX
break A}throw A.b(A.O("Unsupported value: "+A.q(a),j))}return new A.aB(r,s)},
Dn(a){var s,r,q,p,o,n
if(a instanceof A.dB)return new A.aB(a.a,a.b)
s=[]
r=J.J(a)
q=r.gk(a)
p=new Uint8Array(q)
for(o=0;o<r.gk(a);++o){n=A.Dm(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.aB(s,t.a.a(B.d.gaF(p)))},
cR:function cR(a,b,c){this.c=a
this.a=b
this.b=c},
c4:function c4(a,b){this.a=a
this.b=b},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
me(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$me=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.aW(i.indexedDB)
i=$.iR()
i=i==null?null:A.hN(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bg(i,t.b3),$async$me)
case 3:l=b
p=5
s=8
return A.a(A.C9(m.open("drift_mock_db"),t.m),$async$me)
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
if(i!=null)i.a.au()
s=n.pop()
break
case 7:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$me,r)},
w2(a){return A.FY(a)},
FY(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$w2=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.aW(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.cn(new A.w3(j,m))
s=7
return A.a(A.C8(m,t.m),$async$w2)
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
return A.f($async$w2,r)},
fx(){var s=0,r=A.h(t.bF),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$fx=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.ml()
if(h==null){q=B.p
s=1
break}j=t.m
s=3
return A.a(A.a3(h.getDirectory(),j),$async$fx)
case 3:m=b
p=5
s=8
return A.a(A.a3(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$fx)
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
j=new A.bQ(A.bD(A.yA(m),"stream",t.K),t.I)
p=9
case 12:s=14
return A.a(j.l(),$async$fx)
case 14:if(!b){s=13
break}k=j.gn()
if(J.v(k.kind,"directory"))J.bU(l,k.name)
s=12
break
case 13:n.push(11)
s=10
break
case 9:n=[2]
case 10:p=2
s=15
return A.a(j.A(),$async$fx)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fx,r)},
C8(a,b){var s=new A.r($.t,b.i("r<0>")),r=new A.aa(s,b.i("aa<0>")),q=t.m
A.b6(a,"success",new A.n2(r,a,b),!1,q)
A.b6(a,"error",new A.n3(r,a),!1,q)
return s},
C9(a,b){var s=new A.r($.t,b.i("r<0>")),r=new A.aa(s,b.i("aa<0>")),q=t.m
A.b6(a,"success",new A.n6(r,a,b),!1,q)
A.b6(a,"error",new A.n7(r,a),!1,q)
A.b6(a,"blocked",new A.n8(r,a),!1,q)
return s},
w3:function w3(a,b){this.a=a
this.b=b},
n2:function n2(a,b,c){this.a=a
this.b=b
this.c=c},
n3:function n3(a,b){this.a=a
this.b=b},
n6:function n6(a,b,c){this.a=a
this.b=b
this.c=c},
n7:function n7(a,b){this.a=a
this.b=b},
n8:function n8(a,b){this.a=a
this.b=b},
qc:function qc(a,b){this.a=a
this.b=b},
fT:function fT(a,b){this.a=a
this.b=b},
d4:function d4(a,b){this.a=a
this.b=b},
eH:function eH(a){this.a=a},
cO:function cO(a){this.a=a},
ES(a){var s=a.glT()
return new A.eb(new A.vP(),s,A.o(s).i("eb<a_.T,F>"))},
zu(a,b){var s=A.l([],t.W),r=b==null?a.b:b
return new A.f3(a,r,new A.im(),new A.im(),new A.im(),s)},
DO(a,b,c){var s=t.S
s=new A.hX(c,A.l([],t.fV),a.a,new A.aM(new A.r($.t,t.D),t.Q),A.G(s,t.br),A.G(s,t.m))
s.nv(a)
s.nA(a,b,c)
return s},
A4(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
dk(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dk=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.ml()
if(b==null){q=B.ac
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.iR()
d=d==null?null:A.hN(d,"_drift_feature_detection",null,null,!1)
s=7
return A.a(t.fP.b(d)?d:A.bg(d,t.b3),$async$dk)
case 7:j=a1
d=t.m
s=8
return A.a(A.a3(b.getDirectory(),d),$async$dk)
case 8:m=a1
s=9
return A.a(A.a3(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$dk)
case 9:l=a1
s=10
return A.a(A.iG(l),$async$dk)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.x2(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a3(A.aW(e),t.X),$async$dk)
case 13:q=B.ac
n=[1]
s=5
break
case 12:g=i
q=new A.ig(!0,g)
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:p=3
a=o.pop()
q=B.ac
n=[1]
s=5
break
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
g=j
if(g!=null)g.a.au()
if(k!=null)k.close()
s=m!=null&&l!=null?14:15
break
case 14:s=16
return A.a(A.yB(m,"_drift_feature_detection"),$async$dk)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dk,r)},
iG(a){return A.Fz(a)},
Fz(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$iG=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.a(A.a3(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$iG)
case 7:j=c
s=8
return A.a(A.a3(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$iG)
case 8:n=c
n.close()
l=j
q=new A.aB(!0,l)
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
return A.a(A.a3(a.createSyncAccessHandle(),t.m),$async$iG)
case 9:m=c
q=new A.aB(!1,m)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iG,r)},
vP:function vP(){},
im:function im(){this.a=null},
f3:function f3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
tU:function tU(a){this.a=a},
tY:function tY(a,b){this.a=a
this.b=b},
tV:function tV(a,b){this.a=a
this.b=b},
tW:function tW(a){this.a=a},
tX:function tX(a,b){this.a=a
this.b=b},
hX:function hX(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
tJ:function tJ(a){this.a=a},
tO:function tO(a,b){this.a=a
this.b=b},
tR:function tR(a,b,c){this.a=a
this.b=b
this.c=c},
tL:function tL(a,b){this.a=a
this.b=b},
tK:function tK(a,b){this.a=a
this.b=b},
tQ:function tQ(a,b){this.a=a
this.b=b},
tP:function tP(a,b){this.a=a
this.b=b},
tT:function tT(a,b){this.a=a
this.b=b},
tS:function tS(a,b){this.a=a
this.b=b},
tM:function tM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tN:function tN(a,b){this.a=a
this.b=b},
tI:function tI(a){this.a=a},
jj:function jj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
nX:function nX(a){this.a=a},
nW:function nW(a){this.a=a},
nV:function nV(a,b){this.a=a
this.b=b},
rT:function rT(a,b,c,d,e,f){var _=this
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
rU:function rU(a,b){this.a=a
this.b=b},
rV:function rV(a,b){this.a=a
this.b=b},
rW:function rW(a){this.a=a},
Du(){var s=v.G
if(A.Cy(s,"DedicatedWorkerGlobalScope"))return new A.lj(s,new A.lk(s.location.href))
else return new A.lO(s,new A.lk(s.location.href))},
iz:function iz(){},
lj:function lj(a,b){this.a=a
this.b=b},
lO:function lO(a,b){this.a=a
this.b=b},
v4:function v4(a){this.a=a},
v5:function v5(a,b,c){this.a=a
this.b=b
this.c=c},
v3:function v3(a){this.a=a},
v1:function v1(a){this.a=a},
v2:function v2(a){this.a=a},
lk:function lk(a){this.a=a},
u6:function u6(a){this.a=a},
kD:function kD(a,b,c){this.c=a
this.a=b
this.b=c},
qZ:function qZ(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
eU:function eU(){},
lt:function lt(){},
c5:function c5(a,b){this.a=a
this.b=b},
b6(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.At(new A.u9(c),t.m)
s=s==null?null:A.cn(s)}s=new A.i2(a,b,s,!1,e.i("i2<0>"))
s.iW()
return s},
At(a,b){var s=$.t
if(s===B.f)return a
return s.h2(a,b)},
wW:function wW(a,b){this.a=a
this.$ti=b},
f7:function f7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i2:function i2(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
u9:function u9(a){this.a=a},
ua:function ua(a){this.a=a},
B2(a){return v.mangledGlobalNames[a]},
AS(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
CB(a,b){return b in a},
x2(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
Gj(a,b,c,d){var s,r,q,p,o,n=A.G(d,c.i("p<0>"))
for(s=c.i("z<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.l([],s)
n.j(0,p,o)
p=o}else p=o
J.bU(p,q)}return n},
GU(a){return a},
B0(a){if(a instanceof A.cP)return a
return new A.cP(a)},
GW(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.M(p)
if(q instanceof A.eL){s=q
throw A.b(A.Db("Invalid "+a+": "+s.a,s.b,s.gf1()))}else if(t.Y.b(q)){r=q
throw A.b(A.X("Invalid "+a+' "'+b+'": '+r.gjt(),r.gf1(),r.gak()))}else throw p}},
mh(){var s,r=$.BC(),q=J.x0(15,t.N)
for(s=0;s<15;++s)q[s]="abcdefghijklmnopqrstuvwxyz0123456789"[r.cl(36)]
return B.c.cP(q)},
mk(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.M(q)
if(r instanceof A.cD)throw q
else{s=r
r=A.qQ("Corrupt "+a+" row: "+A.q(s))
throw A.b(r)}}},
w9(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.w
try{s=B.e.av(a,null)
if(t.f.b(s)){q=A.bv(s,t.N,t.X)
return q}return B.w}catch(p){r=A.M(p)
q=A.qQ("Corrupt "+c+" row: "+b+": "+A.q(r))
throw A.b(q)}},
AG(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.aQ
try{s=B.e.av(a,null)
if(t.j.b(s)){q=J.em(s,t.N)
q=q.jI(q)
return q}return B.aQ}catch(p){r=A.M(p)
q=A.qQ("Corrupt "+c+" row: "+b+": "+A.q(r))
throw A.b(q)}},
AF(a){var s,r,q,p,o=null
if(a==null)return B.p
A.H(a)
if(a.length===0)return B.p
s=B.e.av(a,o)
if(!t.j.b(s))throw A.b(A.X("expected a JSON array, got "+J.ds(s).m(0),o,o))
r=A.l([],t.s)
for(q=J.K(s);q.l();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.y(A.X("dirty-field member is "+J.ds(p).m(0)+", expected String",o,o)))}return r},
iJ(a){var s,r=J.J(a)
if(r.gB(a))return null
s=J.bV(r.gC(a).gbb())
if(A.aC(s))return s
if(typeof s=="string")return A.hu(s,null)
return null},
GQ(a,b,c){var s,r,q=A.x(a,"\\","\\\\")
q=A.x(q,"'","\\'")
s=A.x(b+"%","\\","\\\\")
r="(store="+("'"+q+"'")+" && id~"+("'"+A.x(s,"'","\\'")+"'")
if(c==null)return r+")"
q=A.x(c,"\\","\\\\")
return r+" && id>"+("'"+A.x(q,"'","\\'")+"'")+")"},
GD(a){var s,r,q,p,o,n,m,l,k=null
if(a==null)return k
if(!t.f.b(a))throw A.b(A.X("fieldCipher envelope must be a map.",k,k))
s=a.h(0,"type")
if(!J.v(s,"aes-gcm"))throw A.b(A.X("Unsupported fieldCipher type: "+A.q(s),k,k))
r=a.h(0,"key")
if(!t.j.b(r)||J.av(r)!==32)throw A.b(A.X("AES-256-GCM fieldCipher key must be 32 bytes.",k,k))
q=new Uint8Array(32)
for(p=J.J(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.aC(n)||n<0||n>255)throw A.b(A.X("Malformed AES-256-GCM key byte at index "+o+": "+A.q(n),k,k))
q[o]=n}A.yf(q)
p=$.wL()
m=A.yf(q)
l=new A.te(new Uint32Array(60))
l.qg(m)
return new A.ms(l,p)},
AI(a){var s,r=A.G(t.N,t.X)
r.j(0,"store",a.a)
r.j(0,"record_id",a.b)
r.j(0,"base",A.bF(a.c))
r.j(0,"local",A.bF(a.d))
r.j(0,"remote",A.bF(a.e))
s=a.f
s=A.P(s,A.o(s).c)
B.c.b0(s)
r.j(0,"dirty_local",s)
s=a.r
s=A.P(s,A.o(s).c)
B.c.b0(s)
r.j(0,"dirty_remote",s)
r.j(0,"detected_at",a.w)
s=a.x
if(s!=null)r.j(0,"resolved",A.bF(s))
return r},
Gy(){var s=A.Du(),r=t.cj
new A.rT(s,B.bc,A.l([],t.az),A.G(t.S,t.lp),new A.hg(A.x6(r)),new A.hg(A.x6(r))).dA()},
AD(){var s,r,q,p,o=null
try{o=A.xr()}catch(s){if(t.mA.b(A.M(s))){r=$.vO
if(r!=null)return r
throw s}else throw s}if(J.v(o,$.A2)){r=$.vO
r.toString
return r}$.A2=o
if($.y1()===$.iQ())r=$.vO=o.b9(".").m(0)
else{q=o.jH()
p=q.length-1
r=$.vO=p===0?q:B.a.q(q,0,p)}return r},
AM(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
AH(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.AM(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.q(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
Gt(a){var s,r,q,p
if(a.gk(0)===0)return!0
s=a.gC(0)
for(r=A.c3(a,1,null,a.$ti.i("Q.E")),q=r.$ti,r=new A.a5(r,r.gk(0),q.i("a5<Q.E>")),q=q.i("Q.E");r.l();){p=r.d
if(!J.v(p==null?q.a(p):p,s))return!1}return!0},
GJ(a,b){var s=B.c.bO(a,null)
if(s<0)throw A.b(A.O(A.q(a)+" contains no null elements.",null))
a[s]=b},
AV(a,b){var s=B.c.bO(a,b)
if(s<0)throw A.b(A.O(A.q(a)+" contains no elements matching "+b.m(0)+".",null))
a[s]=null},
G4(a,b){var s,r,q,p
for(s=new A.bX(a),r=t.V,s=new A.a5(s,s.gk(0),r.i("a5<B.E>")),r=r.i("B.E"),q=0;s.l();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
wk(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.bP(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.bO(a,b)
while(r!==-1){q=r===0?0:B.a.ht(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.bP(a,b,r+1)}return null},
xS(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.d3(A.e1(r.b,p.sqlite3_errmsg(q)),A.e1(s.b,s.d.sqlite3_errstr(o))+" (code "+A.q(o)+")",c,n,d,e,f)},
y_(a,b,c,d,e){throw A.b(A.xS(a.a,a.b,b,c,d,e))},
yF(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.cl(61)))
return s.charCodeAt(0)==0?s:s},
qB(a){var s=0,r=A.h(t.lo),q
var $async$qB=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a3(a.arrayBuffer(),t.a),$async$qB)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$qB,r)}},B={}
var w=[A,J,B]
var $={}
A.x4.prototype={}
J.jE.prototype={
W(a,b){return a===b},
gL(a){return A.ht(a)},
m(a){return"Instance of '"+A.ke(a)+"'"},
gag(a){return A.bo(A.xL(this))}}
J.jG.prototype={
m(a){return String(a)},
gL(a){return a?519018:218159},
gag(a){return A.bo(t.y)},
$ia6:1,
$iV:1}
J.h4.prototype={
W(a,b){return null==b},
m(a){return"null"},
gL(a){return 0},
gag(a){return A.bo(t.P)},
$ia6:1,
$iR:1}
J.as.prototype={$iF:1}
J.cY.prototype={
gL(a){return 0},
gag(a){return B.cE},
m(a){return String(a)}}
J.kb.prototype={}
J.d7.prototype={}
J.bs.prototype={
m(a){var s=a[$.B8()]
if(s==null)s=a[$.ek()]
if(s==null)return this.nl(a)
return"JavaScript function for "+J.ao(s)}}
J.b9.prototype={
gL(a){return 0},
m(a){return String(a)}}
J.ev.prototype={
gL(a){return 0},
m(a){return String(a)}}
J.z.prototype={
h3(a,b){return new A.br(a,A.a8(a).i("@<1>").a_(b).i("br<1,2>"))},
t(a,b){a.$flags&1&&A.C(a,29)
a.push(b)},
hI(a,b){var s
a.$flags&1&&A.C(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.qA(b,null))
return a.splice(b,1)[0]},
an(a,b,c){var s
a.$flags&1&&A.C(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.qA(b,null))
a.splice(b,0,c)},
jn(a,b,c){var s,r
a.$flags&1&&A.C(a,"insertAll",2)
A.z_(b,0,a.length,"index")
if(!t.O.b(c))c=J.BV(c)
s=J.av(c)
a.length=a.length+s
r=b+s
this.a9(a,r,a.length,a,b)
this.ad(a,b,r,c)},
jD(a){a.$flags&1&&A.C(a,"removeLast",1)
if(a.length===0)throw A.b(A.we(a,-1))
return a.pop()},
D(a,b){var s
a.$flags&1&&A.C(a,"remove",1)
for(s=0;s<a.length;++s)if(J.v(a[s],b)){a.splice(s,1)
return!0}return!1},
r6(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.ap(a))}q=p.length
if(q===o)return
this.sk(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
J(a,b){var s
a.$flags&1&&A.C(a,"addAll",2)
if(Array.isArray(b)){this.nH(a,b)
return}for(s=J.K(b);s.l();)a.push(s.gn())},
nH(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.ap(a))
for(s=0;s<r;++s)a.push(b[s])},
ai(a){a.$flags&1&&A.C(a,"clear","clear")
a.length=0},
cj(a,b,c){return new A.ac(a,b,A.a8(a).i("@<1>").a_(c).i("ac<1,2>"))},
M(a,b){var s,r=A.aJ(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.q(a[s])
return r.join(b)},
cP(a){return this.M(a,"")},
cn(a,b){return A.c3(a,0,A.bD(b,"count",t.S),A.a8(a).c)},
b_(a,b){return A.c3(a,b,null,A.a8(a).c)},
ep(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.ap(a))}if(c!=null)return c.$0()
throw A.b(A.ar())},
lQ(a,b){return this.ep(a,b,null)},
a2(a,b){return a[b]},
R(a,b,c){if(b<0||b>a.length)throw A.b(A.ai(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.ai(c,b,a.length,"end",null))
if(b===c)return A.l([],A.a8(a))
return A.l(a.slice(b,c),A.a8(a))},
aS(a,b){return this.R(a,b,null)},
eY(a,b,c){A.b1(b,c,a.length)
return A.c3(a,b,c,A.a8(a).c)},
gC(a){if(a.length>0)return a[0]
throw A.b(A.ar())},
gZ(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.ar())},
gaR(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.ar())
throw A.b(A.h1())},
a9(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.C(a,5)
A.b1(b,c,a.length)
s=c-b
if(s===0)return
A.aU(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.mr(d,e).co(0,!1)
q=0}p=J.J(r)
if(q+s>p.gk(r))throw A.b(A.yH())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
ad(a,b,c,d){return this.a9(a,b,c,d,0)},
cH(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.ap(a))}return!1},
dv(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.ap(a))}return!0},
cs(a,b){var s,r,q,p,o
a.$flags&2&&A.C(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.F_()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a8(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.dl(b,2))
if(p>0)this.r7(a,p)},
b0(a){return this.cs(a,null)},
r7(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bO(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.v(a[s],b))return s
return-1},
dC(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.v(a[s],b))return s
return-1},
E(a,b){var s
for(s=0;s<a.length;++s)if(J.v(a[s],b))return!0
return!1},
gB(a){return a.length===0},
gV(a){return a.length!==0},
m(a){return A.p0(a,"[","]")},
co(a,b){var s=A.l(a.slice(0),A.a8(a))
return s},
dM(a){return this.co(a,!0)},
gu(a){return new J.en(a,a.length,A.a8(a).i("en<1>"))},
gL(a){return A.ht(a)},
gk(a){return a.length},
sk(a,b){a.$flags&1&&A.C(a,"set length","change the length of")
if(b<0)throw A.b(A.ai(b,0,null,"newLength",null))
if(b>a.length)A.a8(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.we(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.C(a)
if(!(b>=0&&b<a.length))throw A.b(A.we(a,b))
a[b]=c},
jL(a,b){return new A.by(a,b.i("by<0>"))},
uI(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gag(a){return A.bo(A.a8(a))},
$iaQ:1,
$iD:1,
$in:1,
$ip:1}
J.jF.prototype={
vR(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.ke(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.p1.prototype={}
J.en.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.E(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.dI.prototype={
T(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gjq(b)
if(this.gjq(a)===s)return 0
if(this.gjq(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gjq(a){return a===0?1/a<0:a<0},
t5(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".ceil()"))},
ua(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".floor()"))},
me(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.Y(""+a+".round()"))},
vG(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
j3(a,b,c){if(this.T(b,c)>0)throw A.b(A.eg(b))
if(this.T(a,b)<0)return b
if(this.T(a,c)>0)return c
return a},
mh(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.ai(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.y(A.Y("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.a.aZ("0",q)},
m(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
eW(a,b){return a+b},
aC(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
kc(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.lf(a,b)},
O(a,b){return(a|0)===a?a/b|0:this.lf(a,b)},
lf(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.Y("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
bX(a,b){if(b<0)throw A.b(A.eg(b))
return b>31?0:a<<b>>>0},
dS(a,b){var s
if(b<0)throw A.b(A.eg(b))
if(a>0)s=this.iT(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
a6(a,b){var s
if(a>0)s=this.iT(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
iU(a,b){if(0>b)throw A.b(A.eg(b))
return this.iT(a,b)},
iT(a,b){return b>31?0:a>>>b},
mZ(a,b){return a>b},
gag(a){return A.bo(t.o)},
$ial:1,
$ia0:1}
J.h3.prototype={
glA(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.O(q,4294967296)
s+=32}return s-Math.clz32(q)},
gag(a){return A.bo(t.S)},
$ia6:1,
$ii:1}
J.jH.prototype={
gag(a){return A.bo(t.i)},
$ia6:1}
J.cW.prototype={
j0(a,b,c){var s=b.length
if(c>s)throw A.b(A.ai(c,0,s,null,null))
return new A.lS(b,a,c)},
h_(a,b){return this.j0(a,b,0)},
dE(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.ai(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.eP(c,a)},
cd(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aa(a,r-s)},
mc(a,b,c){A.z_(0,0,a.length,"startIndex")
return A.GP(a,b,c,0)},
f2(a,b){var s=A.l(a.split(b),t.s)
return s},
cT(a,b,c,d){var s=A.b1(b,c,a.length)
return A.AZ(a,b,s,d)},
a5(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ai(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
N(a,b){return this.a5(a,b,0)},
q(a,b,c){return a.substring(b,A.b1(b,c,a.length))},
aa(a,b){return this.q(a,b,null)},
cX(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.CC(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.yL(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
vP(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.yL(r,s))},
aZ(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.be)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
m3(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aZ(c,s)+a},
ve(a,b){var s=b-a.length
if(s<=0)return a
return a+this.aZ(" ",s)},
bP(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ai(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bO(a,b){return this.bP(a,b,0)},
ht(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.ai(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
dC(a,b){return this.ht(a,b,null)},
E(a,b){return A.GM(a,b,0)},
T(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
m(a){return a},
gL(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gag(a){return A.bo(t.N)},
gk(a){return a.length},
$iaQ:1,
$ia6:1,
$ial:1,
$ik:1}
A.tZ.prototype={
t(a,b){var s,r,q,p,o,n,m,l,k=this,j=J.J(b),i=j.gk(b)
if(i===0)return
s=k.a+i
r=k.b
q=r.length
if(q<s){p=s*2
if(p<1024)p=1024
else{o=p-1
o|=B.b.a6(o,1)
o|=o>>>2
o|=o>>>4
o|=o>>>8
p=((o|o>>>16)>>>0)+1}n=new Uint8Array(p)
B.d.ad(n,0,q,r)
k.b=n
r=n}if(t.p.b(b))B.d.ad(r,k.a,s,b)
else for(m=0;m<i;++m){r=k.b
q=k.a
l=j.h(b,m)
r.$flags&2&&A.C(r)
r[q+m]=l}k.a=s},
jG(){var s,r=this
if(r.a===0)return $.mp()
s=J.dr(B.d.gaF(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.mp()
return s},
gk(a){return this.a}}
A.tF.prototype={
t(a,b){var s=t.p.b(b)?b:new Uint8Array(A.bA(b))
this.b.push(s)
this.a=this.a+s.length},
jG(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.mp()
s=l.b
r=s.length
if(r===1){q=s[0]
l.a=0
B.c.ai(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.E)(s),++o,p=m){n=s[o]
m=p+n.length
B.d.ad(q,p,m,n)}l.a=0
B.c.ai(s)
return q},
gk(a){return this.a}}
A.da.prototype={
gu(a){return new A.j9(J.K(this.gb5()),A.o(this).i("j9<1,2>"))},
gk(a){return J.av(this.gb5())},
gB(a){return J.c8(this.gb5())},
gV(a){return J.iS(this.gb5())},
b_(a,b){var s=A.o(this)
return A.j8(J.mr(this.gb5(),b),s.c,s.y[1])},
cn(a,b){var s=A.o(this)
return A.j8(J.wR(this.gb5(),b),s.c,s.y[1])},
a2(a,b){return A.o(this).y[1].a(J.mq(this.gb5(),b))},
gC(a){return A.o(this).y[1].a(J.bV(this.gb5()))},
gZ(a){return A.o(this).y[1].a(J.wP(this.gb5()))},
gaR(a){return A.o(this).y[1].a(J.wQ(this.gb5()))},
m(a){return J.ao(this.gb5())}}
A.j9.prototype={
l(){return this.a.l()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.dw.prototype={
gb5(){return this.a}}
A.i_.prototype={$iD:1}
A.hW.prototype={
h(a,b){return this.$ti.y[1].a(J.a1(this.a,b))},
j(a,b,c){J.bT(this.a,b,this.$ti.c.a(c))},
sk(a,b){J.BR(this.a,b)},
t(a,b){J.bU(this.a,this.$ti.c.a(b))},
cs(a,b){var s=b==null?null:new A.tG(this,b)
J.yd(this.a,s)},
eY(a,b,c){var s=this.$ti
return A.j8(J.BP(this.a,b,c),s.c,s.y[1])},
a9(a,b,c,d,e){var s=this.$ti
J.BS(this.a,b,c,A.j8(d,s.y[1],s.c),e)},
ad(a,b,c,d){return this.a9(0,b,c,d,0)},
$iD:1,
$ip:1}
A.tG.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.br.prototype={
h3(a,b){return new A.br(this.a,this.$ti.i("@<1>").a_(b).i("br<1,2>"))},
gb5(){return this.a}}
A.cX.prototype={
m(a){return"LateInitializationError: "+this.a}}
A.kh.prototype={
m(a){return"ReachabilityError: "+this.a}}
A.bX.prototype={
gk(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.wy.prototype={
$0(){return A.ct(null,t.H)},
$S:4}
A.qF.prototype={}
A.D.prototype={}
A.Q.prototype={
gu(a){var s=this
return new A.a5(s,s.gk(s),A.o(s).i("a5<Q.E>"))},
gB(a){return this.gk(this)===0},
gC(a){if(this.gk(this)===0)throw A.b(A.ar())
return this.a2(0,0)},
gZ(a){var s=this
if(s.gk(s)===0)throw A.b(A.ar())
return s.a2(0,s.gk(s)-1)},
gaR(a){var s=this
if(s.gk(s)===0)throw A.b(A.ar())
if(s.gk(s)>1)throw A.b(A.h1())
return s.a2(0,0)},
dv(a,b){var s,r=this,q=r.gk(r)
for(s=0;s<q;++s){if(!b.$1(r.a2(0,s)))return!1
if(q!==r.gk(r))throw A.b(A.ap(r))}return!0},
M(a,b){var s,r,q,p=this,o=p.gk(p)
if(b.length!==0){if(o===0)return""
s=A.q(p.a2(0,0))
if(o!==p.gk(p))throw A.b(A.ap(p))
for(r=s,q=1;q<o;++q){r=r+b+A.q(p.a2(0,q))
if(o!==p.gk(p))throw A.b(A.ap(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.q(p.a2(0,q))
if(o!==p.gk(p))throw A.b(A.ap(p))}return r.charCodeAt(0)==0?r:r}},
cP(a){return this.M(0,"")},
cj(a,b,c){return new A.ac(this,b,A.o(this).i("@<Q.E>").a_(c).i("ac<1,2>"))},
vy(a,b){var s,r,q=this,p=q.gk(q)
if(p===0)throw A.b(A.ar())
s=q.a2(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a2(0,r))
if(p!==q.gk(q))throw A.b(A.ap(q))}return s},
b_(a,b){return A.c3(this,b,null,A.o(this).i("Q.E"))},
cn(a,b){return A.c3(this,0,A.bD(b,"count",t.S),A.o(this).i("Q.E"))},
jI(a){var s,r=this,q=A.jP(A.o(r).i("Q.E"))
for(s=0;s<r.gk(r);++s)q.t(0,r.a2(0,s))
return q}}
A.c2.prototype={
hZ(a,b,c,d){var s,r=this.b
A.aU(r,"start")
s=this.c
if(s!=null){A.aU(s,"end")
if(r>s)throw A.b(A.ai(r,0,s,"start",null))}},
gog(){var s=J.av(this.a),r=this.c
if(r==null||r>s)return s
return r},
grp(){var s=J.av(this.a),r=this.b
if(r>s)return s
return r},
gk(a){var s,r=J.av(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a2(a,b){var s=this,r=s.grp()+b
if(b<0||r>=s.gog())throw A.b(A.jB(b,s.gk(0),s,null,"index"))
return J.mq(s.a,r)},
b_(a,b){var s,r,q=this
A.aU(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.dE(q.$ti.i("dE<1>"))
return A.c3(q.a,s,r,q.$ti.c)},
cn(a,b){var s,r,q,p=this
A.aU(b,"count")
s=p.c
r=p.b
if(s==null)return A.c3(p.a,r,B.b.eW(r,b),p.$ti.c)
else{q=B.b.eW(r,b)
if(s<q)return p
return A.c3(p.a,r,q,p.$ti.c)}},
co(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.J(n),l=m.gk(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.yI(0,n):J.x1(0,n)}r=A.aJ(s,m.a2(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a2(n,o+q)
if(m.gk(n)<l)throw A.b(A.ap(p))}return r},
dM(a){return this.co(0,!0)}}
A.a5.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.J(q),o=p.gk(q)
if(r.b!==o)throw A.b(A.ap(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a2(q,s);++r.c
return!0}}
A.cx.prototype={
gu(a){return new A.jV(J.K(this.a),this.b,A.o(this).i("jV<1,2>"))},
gk(a){return J.av(this.a)},
gB(a){return J.c8(this.a)},
gC(a){return this.b.$1(J.bV(this.a))},
gZ(a){return this.b.$1(J.wP(this.a))},
gaR(a){return this.b.$1(J.wQ(this.a))},
a2(a,b){return this.b.$1(J.mq(this.a,b))}}
A.dD.prototype={$iD:1}
A.jV.prototype={
l(){var s=this,r=s.b
if(r.l()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.ac.prototype={
gk(a){return J.av(this.a)},
a2(a,b){return this.b.$1(J.mq(this.a,b))}}
A.bf.prototype={
gu(a){return new A.d9(J.K(this.a),this.b,this.$ti.i("d9<1>"))},
cj(a,b,c){return new A.cx(this,b,this.$ti.i("@<1>").a_(c).i("cx<1,2>"))}}
A.d9.prototype={
l(){var s,r
for(s=this.a,r=this.b;s.l();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.fR.prototype={
gu(a){return new A.js(J.K(this.a),this.b,B.as,this.$ti.i("js<1,2>"))}}
A.js.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
l(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.l();){q.d=null
if(s.l()){q.c=null
p=J.K(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0}}
A.dX.prototype={
gu(a){var s=this.a
return new A.kG(s.gu(s),this.b,A.o(this).i("kG<1>"))}}
A.fP.prototype={
gk(a){var s=this.a,r=s.gk(s)
s=this.b
if(B.b.mZ(r,s))return s
return r},
$iD:1}
A.kG.prototype={
l(){if(--this.b>=0)return this.a.l()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.cB.prototype={
b_(a,b){A.iT(b,"count")
A.aU(b,"count")
return new A.cB(this.a,this.b+b,A.o(this).i("cB<1>"))},
gu(a){var s=this.a
return new A.kq(s.gu(s),this.b,A.o(this).i("kq<1>"))}}
A.er.prototype={
gk(a){var s=this.a,r=s.gk(s)-this.b
if(r>=0)return r
return 0},
b_(a,b){A.iT(b,"count")
A.aU(b,"count")
return new A.er(this.a,this.b+b,this.$ti)},
$iD:1}
A.kq.prototype={
l(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.l()
this.b=0
return s.l()},
gn(){return this.a.gn()}}
A.dE.prototype={
gu(a){return B.as},
gB(a){return!0},
gk(a){return 0},
gC(a){throw A.b(A.ar())},
gZ(a){throw A.b(A.ar())},
gaR(a){throw A.b(A.ar())},
a2(a,b){throw A.b(A.ai(b,0,0,"index",null))},
dv(a,b){return!0},
cj(a,b,c){return new A.dE(c.i("dE<0>"))},
b_(a,b){A.aU(b,"count")
return this},
cn(a,b){A.aU(b,"count")
return this},
co(a,b){var s=J.x1(0,this.$ti.c)
return s}}
A.jp.prototype={
l(){return!1},
gn(){throw A.b(A.ar())}}
A.by.prototype={
gu(a){return new A.kU(J.K(this.a),this.$ti.i("kU<1>"))}}
A.kU.prototype={
l(){var s,r
for(s=this.a,r=this.$ti.c;s.l();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.fU.prototype={
sk(a,b){throw A.b(A.Y(u.O))},
t(a,b){throw A.b(A.Y("Cannot add to a fixed-length list"))}}
A.kL.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
sk(a,b){throw A.b(A.Y("Cannot change the length of an unmodifiable list"))},
t(a,b){throw A.b(A.Y("Cannot add to an unmodifiable list"))},
cs(a,b){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
a9(a,b,c,d,e){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
ad(a,b,c,d){return this.a9(0,b,c,d,0)}}
A.eV.prototype={}
A.dS.prototype={
gk(a){return J.av(this.a)},
a2(a,b){var s=this.a,r=J.J(s)
return r.a2(s,r.gk(s)-1-b)}}
A.kE.prototype={
gL(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gL(this.a)&536870911
this._hashCode=s
return s},
m(a){return'Symbol("'+this.a+'")'},
W(a,b){if(b==null)return!1
return b instanceof A.kE&&this.a===b.a}}
A.iA.prototype={}
A.aB.prototype={$r:"+(1,2)",$s:1}
A.ig.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.ih.prototype={$r:"+controller,sync(1,2)",$s:3}
A.fe.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.lE.prototype={$r:"+result,resultCode(1,2)",$s:5}
A.ii.prototype={$r:"+(1,2,3)",$s:6}
A.lF.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:7}
A.fL.prototype={
gB(a){return this.gk(this)===0},
gV(a){return this.gk(this)!==0},
m(a){return A.pn(this)},
j(a,b,c){A.Cb()},
gbL(){return new A.fi(this.tZ(),A.o(this).i("fi<U<1,2>>"))},
tZ(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$gbL(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gS(),o=o.gu(o),n=A.o(s).i("U<1,2>")
case 2:if(!o.l()){r=3
break}m=o.gn()
r=4
return a.b=new A.U(m,s.h(0,m),n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
ck(a,b,c,d){var s=A.G(c,d)
this.ac(0,new A.nk(this,b,s))
return s},
$iL:1}
A.nk.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.aP.prototype={
gk(a){return this.b.length},
gkO(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
I(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.I(b))return null
return this.b[this.a[b]]},
ac(a,b){var s,r,q=this.gkO(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gS(){return new A.ea(this.gkO(),this.$ti.i("ea<1>"))},
gbb(){return new A.ea(this.b,this.$ti.i("ea<2>"))}}
A.ea.prototype={
gk(a){return this.a.length},
gB(a){return 0===this.a.length},
gV(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.fa(s,s.length,this.$ti.i("fa<1>"))}}
A.fa.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.fM.prototype={
t(a,b){A.Cc()}}
A.cs.prototype={
gk(a){return this.b},
gB(a){return this.b===0},
gV(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.fa(s,s.length,r.$ti.i("fa<1>"))},
E(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.oW.prototype={
W(a,b){if(b==null)return!1
return b instanceof A.h0&&this.a.W(0,b.a)&&A.xU(this)===A.xU(b)},
gL(a){return A.d1(this.a,A.xU(this),B.i,B.i,B.i,B.i,B.i)},
m(a){var s=B.c.M([A.bo(this.$ti.c)],", ")
return this.a.m(0)+" with "+("<"+s+">")}}
A.h0.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.Gs(A.mf(this.a),this.$ti)}}
A.qe.prototype={
$0(){return B.u.ua(1000*this.a.now())},
$S:12}
A.hA.prototype={}
A.rh.prototype={
bv(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.hn.prototype={
m(a){return"Null check operator used on a null value"}}
A.jI.prototype={
m(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.kK.prototype={
m(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.k6.prototype={
m(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iI:1}
A.fQ.prototype={}
A.ik.prototype={
m(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iau:1}
A.dy.prototype={
m(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.B3(r==null?"unknown":r)+"'"},
gag(a){var s=A.mf(this)
return A.bo(s==null?A.bp(this):s)},
gwH(){return this},
$C:"$1",
$R:1,
$D:null}
A.mR.prototype={$C:"$0",$R:0}
A.mS.prototype={$C:"$2",$R:2}
A.rf.prototype={}
A.qP.prototype={
m(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.B3(s)+"'"}}
A.fD.prototype={
W(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fD))return!1
return this.$_target===b.$_target&&this.a===b.a},
gL(a){return(A.mj(this.a)^A.ht(this.$_target))>>>0},
m(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ke(this.a)+"'")}}
A.kn.prototype={
m(a){return"RuntimeError: "+this.a}}
A.bu.prototype={
gk(a){return this.a},
gB(a){return this.a===0},
gV(a){return this.a!==0},
gS(){return new A.a7(this,A.o(this).i("a7<1>"))},
gbb(){return new A.aS(this,A.o(this).i("aS<2>"))},
gbL(){return new A.aR(this,A.o(this).i("aR<1,2>"))},
I(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.lV(a)},
lV(a){var s=this.d
if(s==null)return!1
return this.dB(this.kI(s,a),a)>=0},
J(a,b){b.ac(0,new A.p2(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.lW(b)},
lW(a){var s,r,q=this.d
if(q==null)return null
s=this.kI(q,a)
r=this.dB(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.kd(s==null?q.b=q.iG():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.kd(r==null?q.c=q.iG():r,b,c)}else q.lY(b,c)},
lY(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.iG()
s=p.ev(a)
r=o[s]
if(r==null)o[s]=[p.i0(a,b)]
else{q=p.dB(r,a)
if(q>=0)r[q].b=b
else r.push(p.i0(a,b))}},
m7(a,b){var s,r,q=this
if(q.I(a)){s=q.h(0,a)
return s==null?A.o(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
D(a,b){var s=this
if(typeof b=="string")return s.l6(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.l6(s.c,b)
else return s.lX(b)},
lX(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ev(a)
r=n[s]
q=o.dB(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.ll(p)
if(r.length===0)delete n[s]
return p.b},
ai(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.i_()}},
ac(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.ap(s))
r=r.c}},
kd(a,b,c){var s=a[b]
if(s==null)a[b]=this.i0(b,c)
else s.b=c},
l6(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.ll(s)
delete a[b]
return s.b},
i_(){this.r=this.r+1&1073741823},
i0(a,b){var s,r=this,q=new A.p4(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.i_()
return q},
ll(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.i_()},
ev(a){return J.Z(a)&1073741823},
kI(a,b){return a[this.ev(b)]},
dB(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.v(a[r].a,b))return r
return-1},
m(a){return A.pn(this)},
iG(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.p2.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.p4.prototype={}
A.a7.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cd(s,s.r,s.e,this.$ti.i("cd<1>"))},
E(a,b){return this.a.I(b)}}
A.cd.prototype={
gn(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ap(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.aS.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gu(a){var s=this.a
return new A.aI(s,s.r,s.e,this.$ti.i("aI<1>"))}}
A.aI.prototype={
gn(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ap(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.aR.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gu(a){var s=this.a
return new A.jO(s,s.r,s.e,this.$ti.i("jO<1,2>"))}}
A.jO.prototype={
gn(){var s=this.d
s.toString
return s},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ap(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.U(s.a,s.b,r.$ti.i("U<1,2>"))
r.c=s.c
return!0}}}
A.h5.prototype={
ev(a){return A.mj(a)&1073741823},
dB(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.ws.prototype={
$1(a){return this.a(a)},
$S:34}
A.wt.prototype={
$2(a,b){return this.a(a,b)},
$S:156}
A.wu.prototype={
$1(a){return this.a(a)},
$S:56}
A.fd.prototype={
gag(a){return A.bo(this.kJ())},
kJ(){return A.Ga(this.$r,this.fc())},
m(a){return this.lj(!1)},
lj(a){var s,r,q,p,o,n=this.oo(),m=this.fc(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.yW(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
oo(){var s,r=this.$s
while($.uU.length<=r)$.uU.push(null)
s=$.uU[r]
if(s==null){s=this.o3()
$.uU[r]=s}return s},
o3(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.x0(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.cZ(j,k)}}
A.lB.prototype={
fc(){return[this.a,this.b]},
W(a,b){if(b==null)return!1
return b instanceof A.lB&&this.$s===b.$s&&J.v(this.a,b.a)&&J.v(this.b,b.b)},
gL(a){return A.d1(this.$s,this.a,this.b,B.i,B.i,B.i,B.i)}}
A.lC.prototype={
fc(){return[this.a,this.b,this.c]},
W(a,b){var s=this
if(b==null)return!1
return b instanceof A.lC&&s.$s===b.$s&&J.v(s.a,b.a)&&J.v(s.b,b.b)&&J.v(s.c,b.c)},
gL(a){var s=this
return A.d1(s.$s,s.a,s.b,s.c,B.i,B.i,B.i)}}
A.lD.prototype={
fc(){return this.a},
W(a,b){if(b==null)return!1
return b instanceof A.lD&&this.$s===b.$s&&A.E9(this.a,b.a)},
gL(a){return A.d1(this.$s,A.yR(this.a),B.i,B.i,B.i,B.i,B.i)}}
A.eu.prototype={
m(a){return"RegExp/"+this.a+"/"+this.b.flags},
gkU(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.x3(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gqo(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.x3(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
dw(a){var s=this.b.exec(a)
if(s==null)return null
return new A.fc(s)},
j0(a,b,c){var s=b.length
if(c>s)throw A.b(A.ai(c,0,s,null,null))
return new A.l5(this,b,c)},
h_(a,b){return this.j0(0,b,0)},
oj(a,b){var s,r=this.gkU()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.fc(s)},
oi(a,b){var s,r=this.gqo()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.fc(s)},
dE(a,b,c){if(c<0||c>b.length)throw A.b(A.ai(c,0,b.length,null,null))
return this.oi(b,c)}}
A.fc.prototype={
gH(){return this.b.index},
gG(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$idN:1,
$iki:1}
A.l5.prototype={
gu(a){return new A.l6(this.a,this.b,this.c)}}
A.l6.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
l(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.oj(l,s)
if(p!=null){m.d=p
o=p.gG()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){r=l.charCodeAt(q)
if(r>=55296&&r<=56319){s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1}}
A.eP.prototype={
gG(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.b(A.qA(b,null))
return this.c},
$idN:1,
gH(){return this.a}}
A.lS.prototype={
gu(a){return new A.vc(this.a,this.b,this.c)},
gC(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.eP(r,s)
throw A.b(A.ar())}}
A.vc.prototype={
l(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.eP(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s}}
A.le.prototype={
be(){var s=this.b
if(s===this)throw A.b(new A.cX("Local '"+this.a+"' has not been initialized."))
return s},
bd(){var s=this.b
if(s===this)throw A.b(A.yO(this.a))
return s},
slP(a){var s=this
if(s.b!==s)throw A.b(new A.cX("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.eA.prototype={
gag(a){return B.cx},
h1(a,b,c){A.iB(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
lx(a){return this.h1(a,0,null)},
h0(a,b,c){var s
A.iB(a,b,c)
s=new DataView(a,b)
return s},
lw(a){return this.h0(a,0,null)},
$ia6:1,
$idv:1}
A.ez.prototype={$iez:1}
A.hi.prototype={
gaF(a){if(((a.$flags|0)&2)!==0)return new A.lY(a.buffer)
else return a.buffer},
qc(a,b,c,d){var s=A.ai(b,0,c,d,null)
throw A.b(s)},
km(a,b,c,d){if(b>>>0!==b||b>c)this.qc(a,b,c,d)}}
A.lY.prototype={
h1(a,b,c){var s=A.bx(this.a,b,c)
s.$flags=3
return s},
lx(a){return this.h1(0,0,null)},
h0(a,b,c){var s=A.yP(this.a,b,c)
s.$flags=3
return s},
lw(a){return this.h0(0,0,null)},
$idv:1}
A.hh.prototype={
gag(a){return B.cy},
$ia6:1,
$iwS:1}
A.eB.prototype={
gk(a){return a.length},
ld(a,b,c,d,e){var s,r,q=a.length
this.km(a,b,q,"start")
this.km(a,c,q,"end")
if(b>c)throw A.b(A.ai(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.O(e,null))
r=d.length
if(r-e<s)throw A.b(A.w("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iaQ:1,
$ibt:1}
A.d0.prototype={
h(a,b){A.cN(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.C(a)
A.cN(b,a,a.length)
a[b]=c},
a9(a,b,c,d,e){a.$flags&2&&A.C(a,5)
if(t.dQ.b(d)){this.ld(a,b,c,d,e)
return}this.k9(a,b,c,d,e)},
ad(a,b,c,d){return this.a9(a,b,c,d,0)},
$iD:1,
$in:1,
$ip:1}
A.bw.prototype={
j(a,b,c){a.$flags&2&&A.C(a)
A.cN(b,a,a.length)
a[b]=c},
a9(a,b,c,d,e){a.$flags&2&&A.C(a,5)
if(t.aj.b(d)){this.ld(a,b,c,d,e)
return}this.k9(a,b,c,d,e)},
ad(a,b,c,d){return this.a9(a,b,c,d,0)},
$iD:1,
$in:1,
$ip:1}
A.k_.prototype={
gag(a){return B.cz},
R(a,b,c){return new Float32Array(a.subarray(b,A.cm(b,c,a.length)))},
aS(a,b){return this.R(a,b,null)},
$ia6:1,
$ioj:1}
A.k0.prototype={
gag(a){return B.cA},
R(a,b,c){return new Float64Array(a.subarray(b,A.cm(b,c,a.length)))},
aS(a,b){return this.R(a,b,null)},
$ia6:1,
$iok:1}
A.k1.prototype={
gag(a){return B.cB},
h(a,b){A.cN(b,a,a.length)
return a[b]},
R(a,b,c){return new Int16Array(a.subarray(b,A.cm(b,c,a.length)))},
aS(a,b){return this.R(a,b,null)},
$ia6:1,
$ioX:1}
A.k2.prototype={
gag(a){return B.cC},
h(a,b){A.cN(b,a,a.length)
return a[b]},
R(a,b,c){return new Int32Array(a.subarray(b,A.cm(b,c,a.length)))},
aS(a,b){return this.R(a,b,null)},
$ia6:1,
$ioY:1}
A.k3.prototype={
gag(a){return B.cD},
h(a,b){A.cN(b,a,a.length)
return a[b]},
R(a,b,c){return new Int8Array(a.subarray(b,A.cm(b,c,a.length)))},
aS(a,b){return this.R(a,b,null)},
$ia6:1,
$ioZ:1}
A.hj.prototype={
gag(a){return B.cG},
h(a,b){A.cN(b,a,a.length)
return a[b]},
R(a,b,c){return new Uint16Array(a.subarray(b,A.cm(b,c,a.length)))},
aS(a,b){return this.R(a,b,null)},
$ia6:1,
$irj:1}
A.hk.prototype={
gag(a){return B.cH},
h(a,b){A.cN(b,a,a.length)
return a[b]},
R(a,b,c){return new Uint32Array(a.subarray(b,A.cm(b,c,a.length)))},
aS(a,b){return this.R(a,b,null)},
$ia6:1,
$irk:1}
A.hl.prototype={
gag(a){return B.cI},
gk(a){return a.length},
h(a,b){A.cN(b,a,a.length)
return a[b]},
R(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.cm(b,c,a.length)))},
aS(a,b){return this.R(a,b,null)},
$ia6:1,
$irl:1}
A.dP.prototype={
gag(a){return B.cJ},
gk(a){return a.length},
h(a,b){A.cN(b,a,a.length)
return a[b]},
R(a,b,c){return new Uint8Array(a.subarray(b,A.cm(b,c,a.length)))},
aS(a,b){return this.R(a,b,null)},
$ia6:1,
$idP:1,
$icj:1}
A.ib.prototype={}
A.ic.prototype={}
A.id.prototype={}
A.ie.prototype={}
A.bZ.prototype={
i(a){return A.iu(v.typeUniverse,this,a)},
a_(a){return A.zK(v.typeUniverse,this,a)}}
A.lp.prototype={}
A.vh.prototype={
m(a){return A.bh(this.a,null)}}
A.lm.prototype={
m(a){return this.a}}
A.iq.prototype={$icG:1}
A.tm.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:21}
A.tl.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:123}
A.tn.prototype={
$0(){this.a.$0()},
$S:3}
A.to.prototype={
$0(){this.a.$0()},
$S:3}
A.ip.prototype={
nD(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.dl(new A.vf(this,b),0),a)
else throw A.b(A.Y("`setTimeout()` not found."))},
nE(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.dl(new A.ve(this,a,Date.now(),b),0),a)
else throw A.b(A.Y("Periodic timer."))},
A(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.Y("Canceling a timer."))},
$icF:1}
A.vf.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.ve.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.b.kc(s,o)}q.c=p
r.d.$1(q)},
$S:3}
A.hQ.prototype={
aq(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.b1(a)
else{s=r.a
if(r.$ti.i("A<1>").b(a))s.kl(a)
else s.cu(a)}},
bK(a,b){var s
if(b==null)b=A.fB(a)
s=this.a
if(this.b)s.ar(new A.a9(a,b))
else s.c_(new A.a9(a,b))},
aA(a){return this.bK(a,null)},
$ifI:1}
A.vI.prototype={
$1(a){return this.a.$2(0,a)},
$S:25}
A.vJ.prototype={
$2(a,b){this.a.$2(1,new A.fQ(a,b))},
$S:157}
A.vZ.prototype={
$2(a,b){this.a(a,b)},
$S:161}
A.vG.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.u()
s=q.b
if((s&1)!==0?(q.gaE().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.vH.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:21}
A.l8.prototype={
nz(a,b){var s=new A.tq(a)
this.a=A.xl(new A.ts(this,a),new A.tt(s),new A.tu(this,s),!1,b)}}
A.tq.prototype={
$0(){A.iP(new A.tr(this.a))},
$S:3}
A.tr.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.tt.prototype={
$0(){this.a.$0()},
$S:0}
A.tu.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.ts.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.u()
if((r.b&4)===0){s.c=new A.r($.t,t._)
if(s.b){s.b=!1
A.iP(new A.tp(this.b))}return s.c}},
$S:95}
A.tp.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.i7.prototype={
m(a){return"IterationMarker("+this.b+", "+A.q(this.a)+")"}}
A.lU.prototype={
gn(){return this.b},
r8(a,b){var s,r,q
a=a
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
l(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.l()){o.b=s.gn()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.r8(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.zE
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.zE
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.w("sync*"))}return!1},
wI(a){var s,r,q=this
if(a instanceof A.fi){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.K(a)
return 2}}}
A.fi.prototype={
gu(a){return new A.lU(this.a(),this.$ti.i("lU<1>"))}}
A.a9.prototype={
m(a){return A.q(this.a)},
$ia4:1,
gbZ(){return this.b}}
A.aV.prototype={}
A.e4.prototype={
bp(){},
bq(){}}
A.hV.prototype={
gct(){return new A.aV(this,A.o(this).i("aV<1>"))},
ghs(){return(this.c&4)!==0},
giE(){return this.c<4},
r5(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
iV(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.zv(c,A.o(j).c)
s=A.o(j)
r=$.t
q=d?1:0
p=b!=null?32:0
o=A.lc(r,a,s.c)
n=A.tC(r,b)
m=c==null?A.w1():c
l=new A.e4(j,o,n,r.bz(m,t.H),r,q|p,s.i("e4<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.md(j.a)
return l},
l0(a){var s,r=this
A.o(r).i("e4<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.r5(a)
if((r.c&2)===0&&r.d==null)r.nW()}return null},
l1(a){},
l2(a){},
i2(){if((this.c&4)!==0)return new A.bl("Cannot add new events after calling close")
return new A.bl("Cannot add new events while doing an addStream")},
t(a,b){if(!this.giE())throw A.b(this.i2())
this.c8(b)},
bs(a,b){var s
if(!this.giE())throw A.b(this.i2())
s=A.vR(a,b)
this.c9(s.a,s.b)},
p(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.giE())throw A.b(q.i2())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.r($.t,t.D)
q.cF()
return r},
aw(a,b){this.c9(a,b)},
aG(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.b1(null)},
nW(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.b1(null)}A.md(this.b)},
$ibj:1}
A.hR.prototype={
c8(a){var s,r
for(s=this.d,r=this.$ti.i("bN<1>");s!=null;s=s.ch)s.bD(new A.bN(a,r))},
c9(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.bD(new A.f5(a,b))},
cF(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.bD(B.T)
else this.r.b1(null)}}
A.or.prototype={
$0(){this.c.a(null)
this.b.c0(null)},
$S:0}
A.ot.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.ar(new A.a9(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.ar(new A.a9(q,r))}},
$S:10}
A.os.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.bT(j,m.b,a)
if(J.v(k,0)){l=m.d
s=A.l([],l.i("z<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.E)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.bU(s,n)}m.c.cu(s)}}else if(J.v(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.ar(new A.a9(s,l))}},
$S(){return this.d.i("R(0)")}}
A.om.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(j,au)")}}
A.kH.prototype={
m(a){var s=this.b.m(0)
return"TimeoutException after "+s+": "+this.a},
$iI:1}
A.on.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
if(a===0){s=A.l([],l.c.i("z<0>"))
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.E)(r),++p){o=r[p]
n=o.b
if(n==null)o.$ti.c.a(n)
s.push(n)}l.a.aq(s)}else{s=A.l([],t.fQ)
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.E)(r),++p)s.push(r[p].c)
q=l.c
n=A.l([],q.i("z<0?>"))
for(m=r.length,p=0;p<r.length;r.length===m||(0,A.E)(r),++p)n.push(r[p].b)
l.a.aA(new A.hq(B.c.lQ(s,A.FG()),a,q.i("hq<p<0?>,p<a9?>>")))}},
$S:7}
A.hq.prototype={
m(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.q(p.a)},
gbZ(){var s=this.c
s=s==null?null:s.b
return s==null?A.a4.prototype.gbZ.call(this):s}}
A.i5.prototype={
rD(a){this.a.bV(new A.uf(this,a),new A.ug(this,a),t.P)}}
A.uf.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("R(1)")}}
A.ug.prototype={
$2(a,b){this.a.c=new A.a9(a,b)
this.b.$1(1)},
$S:9}
A.ue.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:7}
A.e5.prototype={
bK(a,b){if((this.a.a&30)!==0)throw A.b(A.w("Future already completed"))
this.ar(A.vR(a,b))},
aA(a){return this.bK(a,null)},
$ifI:1}
A.aM.prototype={
aq(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.w("Future already completed"))
s.b1(a)},
au(){return this.aq(null)},
ar(a){this.a.c_(a)}}
A.aa.prototype={
aq(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.w("Future already completed"))
s.c0(a)},
au(){return this.aq(null)},
ar(a){this.a.ar(a)}}
A.bO.prototype={
v3(a){if((this.c&15)!==6)return!0
return this.b.b.dL(this.d,a.a,t.y,t.K)},
um(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.jF(r,n,a.b,p,o,t.l)
else q=m.dL(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.M(s))){if((this.c&1)!==0)throw A.b(A.O("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.O("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.r.prototype={
bV(a,b,c){var s,r,q=$.t
if(q===B.f){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.aY(b,"onError",u.w))}else{a=q.cS(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.Af(b,q)}s=new A.r($.t,c.i("r<0>"))
r=b==null?1:3
this.d7(new A.bO(s,r,a,b,this.$ti.i("@<1>").a_(c).i("bO<1,2>")))
return s},
bh(a,b){return this.bV(a,null,b)},
lh(a,b,c){var s=new A.r($.t,c.i("r<0>"))
this.d7(new A.bO(s,19,a,b,this.$ti.i("@<1>").a_(c).i("bO<1,2>")))
return s},
j2(a){var s=this.$ti,r=$.t,q=new A.r(r,s)
if(r!==B.f)a=A.Af(a,r)
this.d7(new A.bO(q,2,null,a,s.i("bO<1,1>")))
return q},
aJ(a){var s=this.$ti,r=$.t,q=new A.r(r,s)
if(r!==B.f)a=r.bz(a,t.z)
this.d7(new A.bO(q,8,a,null,s.i("bO<1,1>")))
return q},
rk(a){this.a=this.a&1|16
this.c=a},
f6(a){this.a=a.a&30|this.a&1
this.c=a.c},
d7(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.d7(a)
return}s.f6(r)}s.b.cr(new A.uh(s,a))}},
kZ(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.kZ(a)
return}n.f6(s)}m.a=n.fR(a)
n.b.cr(new A.um(m,n))}},
e7(){var s=this.c
this.c=null
return this.fR(s)},
fR(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
c0(a){var s,r=this
if(r.$ti.i("A<1>").b(a))A.uk(a,r,!0)
else{s=r.e7()
r.a=8
r.c=a
A.e8(r,s)}},
cu(a){var s=this,r=s.e7()
s.a=8
s.c=a
A.e8(s,r)},
o2(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gbM()===r.gbM())}else s=!1
if(s)return
q=p.e7()
p.f6(a)
A.e8(p,q)},
ar(a){var s=this.e7()
this.rk(a)
A.e8(this,s)},
o1(a,b){this.ar(new A.a9(a,b))},
b1(a){if(this.$ti.i("A<1>").b(a)){this.kl(a)
return}this.ki(a)},
ki(a){this.a^=2
this.b.cr(new A.uj(this,a))},
kl(a){A.uk(a,this,!1)
return},
c_(a){this.a^=2
this.b.cr(new A.ui(this,a))},
hJ(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.r($.t,r.$ti)
q.b1(r)
return q}s=new A.r($.t,r.$ti)
q.a=null
q.a=A.dY(a,new A.us(s,a))
r.bV(new A.ut(q,r,s),new A.uu(q,s),t.P)
return s},
$iA:1}
A.uh.prototype={
$0(){A.e8(this.a,this.b)},
$S:0}
A.um.prototype={
$0(){A.e8(this.b,this.a.a)},
$S:0}
A.ul.prototype={
$0(){A.uk(this.a.a,this.b,!0)},
$S:0}
A.uj.prototype={
$0(){this.a.cu(this.b)},
$S:0}
A.ui.prototype={
$0(){this.a.ar(this.b)},
$S:0}
A.up.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.bU(q.d,t.z)}catch(p){s=A.M(p)
r=A.ab(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.fB(q)
n=k.a
n.c=new A.a9(q,o)
q=n}q.b=!0
return}if(j instanceof A.r&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.r){m=k.b.a
l=new A.r(m.b,m.$ti)
j.bV(new A.uq(l,m),new A.ur(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.uq.prototype={
$1(a){this.a.o2(this.b)},
$S:21}
A.ur.prototype={
$2(a,b){this.a.ar(new A.a9(a,b))},
$S:9}
A.uo.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.dL(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.M(n)
r=A.ab(n)
q=s
p=r
if(p==null)p=A.fB(q)
o=this.a
o.c=new A.a9(q,p)
o.b=!0}},
$S:0}
A.un.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.v3(s)&&p.a.e!=null){p.c=p.a.um(s)
p.b=!1}}catch(o){r=A.M(o)
q=A.ab(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.fB(p)
m=l.b
m.c=new A.a9(p,n)
p=m}p.b=!0}},
$S:0}
A.us.prototype={
$0(){var s=A.xk()
this.a.ar(new A.a9(new A.kH("Future not completed",this.b),s))},
$S:0}
A.ut.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.A()
this.c.cu(a)}},
$S(){return this.b.$ti.i("R(1)")}}
A.uu.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.A()
this.b.ar(new A.a9(a,b))}},
$S:9}
A.l7.prototype={}
A.a_.prototype={
cP(a){var s=new A.r($.t,t.os),r=new A.ae(""),q=this.a4(null,!0,new A.qU(s,r),s.gi6())
q.hy(new A.qV(this,r,q,s))
return s},
gk(a){var s={},r=new A.r($.t,t.hy)
s.a=0
this.a4(new A.qW(s,this),!0,new A.qX(s,r),r.gi6())
return r},
gC(a){var s=new A.r($.t,A.o(this).i("r<a_.T>")),r=this.a4(null,!0,new A.qS(s),s.gi6())
r.hy(new A.qT(this,r,s))
return s}}
A.qU.prototype={
$0(){var s=this.b.a
this.a.c0(s.charCodeAt(0)==0?s:s)},
$S:0}
A.qV.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.q(a)
q.a+=p}catch(o){s=A.M(o)
r=A.ab(o)
q=s
p=r
n=A.iC(q,p)
if(n==null)q=new A.a9(q,p)
else q=n
A.EH(this.c,this.d,q)}},
$S(){return A.o(this.a).i("~(a_.T)")}}
A.qW.prototype={
$1(a){++this.a.a},
$S(){return A.o(this.b).i("~(a_.T)")}}
A.qX.prototype={
$0(){this.b.c0(this.a.a)},
$S:0}
A.qS.prototype={
$0(){var s,r=A.xk(),q=new A.bl("No element")
A.kf(q,r)
s=A.iC(q,r)
if(s==null)s=new A.a9(q,r)
this.a.ar(s)},
$S:0}
A.qT.prototype={
$1(a){A.EI(this.b,this.c,a)},
$S(){return A.o(this.a).i("~(a_.T)")}}
A.hG.prototype={
a4(a,b,c,d){return this.a.a4(a,b,c,d)},
bu(a,b,c){return this.a4(a,null,b,c)},
aM(a){return this.a4(a,null,null,null)}}
A.dg.prototype={
gct(){return new A.b5(this,A.o(this).i("b5<1>"))},
ghs(){return(this.b&4)!==0},
gqI(){if((this.b&8)===0)return this.a
return this.a.c},
fa(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.df(A.o(q).i("df<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.df(A.o(q).i("df<1>")):s},
gaE(){var s=this.a
return(this.b&8)!==0?s.c:s},
bl(){if((this.b&4)!==0)return new A.bl("Cannot add event after closing")
return new A.bl("Cannot add event while adding a stream")},
rR(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bl())
if((o&2)!==0){o=new A.r($.t,t._)
o.b1(null)
return o}o=p.a
s=b===!0
r=new A.r($.t,t._)
q=s?A.Dw(p):p.gnI()
q=a.a4(p.gnK(),s,p.gnY(),q)
s=p.b
if((s&1)!==0?(p.gaE().e&4)!==0:(s&2)===0)q.bg()
p.a=new A.il(o,r,q,A.o(p).i("il<1>"))
p.b|=8
return r},
kB(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.dq():new A.r($.t,t.D)
return s},
t(a,b){if(this.b>=4)throw A.b(this.bl())
this.ap(b)},
bs(a,b){var s
if(this.b>=4)throw A.b(this.bl())
s=A.vR(a,b)
this.aw(s.a,s.b)},
rQ(a){return this.bs(a,null)},
p(){var s=this,r=s.b
if((r&4)!==0)return s.kB()
if(r>=4)throw A.b(s.bl())
s.kn()
return s.kB()},
kn(){var s=this.b|=4
if((s&1)!==0)this.cF()
else if((s&3)===0)this.fa().t(0,B.T)},
ap(a){var s=this,r=s.b
if((r&1)!==0)s.c8(a)
else if((r&3)===0)s.fa().t(0,new A.bN(a,A.o(s).i("bN<1>")))},
aw(a,b){var s=this.b
if((s&1)!==0)this.c9(a,b)
else if((s&3)===0)this.fa().t(0,new A.f5(a,b))},
aG(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.b1(null)},
iV(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.w("Stream has already been listened to."))
s=A.DP(p,a,b,c,d,A.o(p).c)
r=p.gqI()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.ba()}else p.a=s
s.rl(r)
s.ii(new A.v8(p))
return s},
l0(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.A()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.r)k=r}catch(o){q=A.M(o)
p=A.ab(o)
n=new A.r($.t,t.D)
n.c_(new A.a9(q,p))
k=n}else k=k.aJ(s)
m=new A.v7(l)
if(k!=null)k=k.aJ(m)
else m.$0()
return k},
l1(a){if((this.b&8)!==0)this.a.b.bg()
A.md(this.e)},
l2(a){if((this.b&8)!==0)this.a.b.ba()
A.md(this.f)},
$ibj:1}
A.v8.prototype={
$0(){A.md(this.a.d)},
$S:0}
A.v7.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.b1(null)},
$S:0}
A.lV.prototype={
c8(a){this.gaE().ap(a)},
c9(a,b){this.gaE().aw(a,b)},
cF(){this.gaE().aG()}}
A.hS.prototype={
c8(a){this.gaE().bD(new A.bN(a,A.o(this).i("bN<1>")))},
c9(a,b){this.gaE().bD(new A.f5(a,b))},
cF(){this.gaE().bD(B.T)}}
A.cl.prototype={}
A.fj.prototype={}
A.b5.prototype={
gL(a){return(A.ht(this.a)^892482866)>>>0},
W(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b5&&b.a===this.a}}
A.db.prototype={
fO(){return this.w.l0(this)},
bp(){this.w.l1(this)},
bq(){this.w.l2(this)}}
A.l4.prototype={
A(){var s=this.b.A()
return s.aJ(new A.tc(this))}}
A.td.prototype={
$2(a,b){var s=this.a
s.aw(a,b)
s.aG()},
$S:9}
A.tc.prototype={
$0(){this.a.a.b1(null)},
$S:3}
A.il.prototype={}
A.aH.prototype={
rl(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.eZ(s)}},
hy(a){this.a=A.lc(this.d,a,A.o(this).i("aH.T"))},
bg(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.ii(q.ge0())},
ba(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.eZ(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.ii(s.ge1())}}},
A(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.i3()
r=s.f
return r==null?$.dq():r},
i3(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.fO()},
ap(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.c8(a)
else s.bD(new A.bN(a,A.o(s).i("bN<aH.T>")))},
aw(a,b){var s
if(t.C.b(a))A.kf(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.c9(a,b)
else this.bD(new A.f5(a,b))},
aG(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.cF()
else s.bD(B.T)},
bp(){},
bq(){},
fO(){return null},
bD(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.df(A.o(r).i("df<aH.T>"))
q.t(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.eZ(r)}},
c8(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.eQ(s.a,a,A.o(s).i("aH.T"))
s.e=(s.e&4294967231)>>>0
s.i5((r&4)!==0)},
c9(a,b){var s,r=this,q=r.e,p=new A.tE(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.i3()
s=r.f
if(s!=null&&s!==$.dq())s.aJ(p)
else p.$0()}else{p.$0()
r.i5((q&4)!==0)}},
cF(){var s,r=this,q=new A.tD(r)
r.i3()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.dq())s.aJ(q)
else q.$0()},
ii(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.i5((r&4)!==0)},
i5(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.bp()
else q.bq()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.eZ(q)},
$ibe:1}
A.tE.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.mf(s,o,this.c,r,t.l)
else q.eQ(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.tD.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.eP(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.fh.prototype={
a4(a,b,c,d){return this.a.iV(a,d,c,b===!0)},
bu(a,b,c){return this.a4(a,null,b,c)},
aM(a){return this.a4(a,null,null,null)}}
A.ll.prototype={
gdF(){return this.a},
sdF(a){return this.a=a}}
A.bN.prototype={
jA(a){a.c8(this.b)}}
A.f5.prototype={
jA(a){a.c9(this.b,this.c)}}
A.u7.prototype={
jA(a){a.cF()},
gdF(){return null},
sdF(a){throw A.b(A.w("No events after a done."))}}
A.df.prototype={
eZ(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.iP(new A.uT(s,a))
s.a=1},
t(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.sdF(b)
s.c=b}}}
A.uT.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.gdF()
q.b=r
if(r==null)q.c=null
s.jA(this.b)},
$S:0}
A.f6.prototype={
hy(a){},
bg(){var s=this.a
if(s>=0)this.a=s+2},
ba(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.iP(s.gkV())}else s.a=r},
A(){this.a=-1
this.c=null
return $.dq()},
qB(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.eP(s)}}else r.a=q},
$ibe:1}
A.bQ.prototype={
gn(){if(this.c)return this.b
return null},
l(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.r($.t,t.k)
r.b=s
r.c=!1
q.ba()
return s}throw A.b(A.w("Already waiting for next."))}return r.qb()},
qb(){var s,r,q=this,p=q.b
if(p!=null){s=new A.r($.t,t.k)
q.b=s
r=p.a4(q.gqt(),!0,q.gqv(),q.gqx())
if(q.b!=null)q.a=r
return s}return $.Ba()},
A(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.b1(!1)
else s.c=!1
return r.A()}return $.dq()},
qu(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.c0(!0)
if(q.c){r=q.a
if(r!=null)r.bg()}},
qy(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.ar(new A.a9(a,b))
else q.c_(new A.a9(a,b))},
qw(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.cu(!1)
else q.ki(!1)}}
A.i0.prototype={
a4(a,b,c,d){return A.zv(c,this.$ti.c)},
bu(a,b,c){return this.a4(a,null,b,c)}}
A.cL.prototype={
a4(a,b,c,d){var s=null,r=new A.ia(s,s,s,s,this.$ti.i("ia<1>"))
r.d=new A.uR(this,r)
return r.iV(a,d,c,b===!0)},
bu(a,b,c){return this.a4(a,null,b,c)},
aM(a){return this.a4(a,null,null,null)}}
A.uR.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.ia.prototype={
rS(a){var s=this.b
if(s>=4)throw A.b(this.bl())
if((s&1)!==0)this.gaE().ap(a)},
t7(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bl())
r|=4
s.b=r
if((r&1)!==0)s.gaE().aG()},
gct(){throw A.b(A.Y("Not available"))},
$id_:1}
A.vL.prototype={
$0(){return this.a.ar(this.b)},
$S:0}
A.vM.prototype={
$0(){return this.a.c0(this.b)},
$S:0}
A.i3.prototype={
a4(a,b,c,d){var s=this.$ti,r=$.t,q=b===!0?1:0,p=d!=null?32:0,o=A.lc(r,a,s.y[1]),n=A.tC(r,d),m=c==null?A.w1():c
s=new A.f9(this,o,n,r.bz(m,t.H),r,q|p,s.i("f9<1,2>"))
s.x=this.a.bu(s.gim(),s.gip(),s.gir())
return s},
bu(a,b,c){return this.a4(a,null,b,c)}}
A.f9.prototype={
ap(a){if((this.e&2)!==0)return
this.hY(a)},
aw(a,b){if((this.e&2)!==0)return
this.ka(a,b)},
bp(){var s=this.x
if(s!=null)s.bg()},
bq(){var s=this.x
if(s!=null)s.ba()},
fO(){var s=this.x
if(s!=null){this.x=null
return s.A()}return null},
io(a){this.w.oR(a,this)},
is(a,b){this.aw(a,b)},
iq(){this.aG()}}
A.eb.prototype={
oR(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.M(q)
r=A.ab(q)
p=s
o=r
n=A.iC(p,o)
if(n!=null){p=n.a
o=n.b}b.aw(p,o)
return}b.ap(m)}}
A.i1.prototype={
t(a,b){var s=this.a
if((s.e&2)!==0)A.y(A.w("Stream is already closed"))
s.hY(b)},
bs(a,b){this.a.aw(a,b)},
p(){var s=this.a
if((s.e&2)!==0)A.y(A.w("Stream is already closed"))
s.kb()},
$ibj:1}
A.ff.prototype={
ap(a){if((this.e&2)!==0)throw A.b(A.w("Stream is already closed"))
this.hY(a)},
aw(a,b){if((this.e&2)!==0)throw A.b(A.w("Stream is already closed"))
this.ka(a,b)},
aG(){if((this.e&2)!==0)throw A.b(A.w("Stream is already closed"))
this.kb()},
bp(){var s=this.x
if(s!=null)s.bg()},
bq(){var s=this.x
if(s!=null)s.ba()},
fO(){var s=this.x
if(s!=null){this.x=null
return s.A()}return null},
io(a){var s,r,q,p
try{q=this.w
q===$&&A.u()
q.t(0,a)}catch(p){s=A.M(p)
r=A.ab(p)
this.aw(s,r)}},
is(a,b){var s,r,q,p
try{q=this.w
q===$&&A.u()
q.bs(a,b)}catch(p){s=A.M(p)
r=A.ab(p)
if(s===a)this.aw(a,b)
else this.aw(s,r)}},
iq(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.u()
q.p()}catch(p){s=A.M(p)
r=A.ab(p)
this.aw(s,r)}}}
A.hU.prototype={
a4(a,b,c,d){var s=this.$ti,r=$.t,q=b===!0?1:0,p=d!=null?32:0,o=A.lc(r,a,s.y[1]),n=A.tC(r,d),m=c==null?A.w1():c,l=new A.ff(o,n,r.bz(m,t.H),r,q|p,s.i("ff<1,2>"))
l.w=this.a.$1(new A.i1(l,s.i("i1<2>")))
l.x=this.b.bu(l.gim(),l.gip(),l.gir())
return l},
bu(a,b,c){return this.a4(a,null,b,c)}}
A.vD.prototype={}
A.vF.prototype={}
A.vE.prototype={}
A.vB.prototype={}
A.vC.prototype={}
A.vA.prototype={}
A.vx.prototype={}
A.m8.prototype={}
A.vw.prototype={}
A.vv.prototype={}
A.vz.prototype={}
A.vy.prototype={}
A.m7.prototype={
uf(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.m9.prototype={}
A.m6.prototype={
e4(a,b,c){var s,r,q,p,o,n,m=this.giB(),l=m.a
if(l===B.f){A.iF(b,c)
return}o=l.gjx()
o.toString
s=o
r=$.t
try{$.t=s
m.uf(l,l.gaU(),a,b,c)
$.t=r}catch(n){q=A.M(n)
p=A.ab(n)
$.t=r
o=b===q?c:p
s.e4(l,q,o)}},
$iN:1}
A.lh.prototype={
gky(){var s=this.ax
return s==null?this.ax=new A.fo(this):s},
gaU(){return this.ay.gky()},
gbM(){return this.as.a},
eP(a){var s,r,q
try{this.bU(a,t.H)}catch(q){s=A.M(q)
r=A.ab(q)
this.e4(this,s,r)}},
eQ(a,b,c){var s,r,q
try{this.dL(a,b,t.H,c)}catch(q){s=A.M(q)
r=A.ab(q)
this.e4(this,s,r)}},
mf(a,b,c,d,e){var s,r,q
try{this.jF(a,b,c,t.H,d,e)}catch(q){s=A.M(q)
r=A.ab(q)
this.e4(this,s,r)}},
j1(a,b){return new A.u3(this,this.bz(a,b),b)},
t3(a,b,c){return new A.u5(this,this.cS(a,b,c),c,b)},
ei(a){return new A.u2(this,this.bz(a,t.H))},
h2(a,b){return new A.u4(this,this.cS(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.an)return null
s=q.b
r=s.h(0,b)
return r!=null||s.I(b)?r:this.r3(q,b)},
r3(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gjx().gj_()
if(s===B.an)break
q=s.b
r=q.h(0,b)
if(r!=null||q.I(b)){a.b.j(0,b,r)
break}}return r},
eu(a,b){this.e4(this,a,b)},
lR(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gaU(),this,a,b)},
bU(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gaU(),this,a,b)},
dL(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gaU(),this,a,b,c,d)},
jF(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gaU(),this,a,b,c,d,e,f)},
bz(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gaU(),this,a,b)},
cS(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gaU(),this,a,b,c)},
eK(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gaU(),this,a,b,c,d)},
lN(a,b){var s=this.r,r=s.a
if(r===B.f)return null
return s.b.$5(r,r.gaU(),this,a,b)},
cr(a){var s=this.w,r=s.a
return s.b.$4(r,r.gaU(),this,a)},
j8(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gaU(),this,a,b)},
j7(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gaU(),this,a,b)},
gl8(){return this.a},
gla(){return this.b},
gl9(){return this.c},
gl4(){return this.d},
gl5(){return this.e},
gl3(){return this.f},
gkD(){return this.r},
giR(){return this.w},
gkw(){return this.x},
gkv(){return this.y},
gl_(){return this.z},
gkG(){return this.Q},
giB(){return this.as},
gj_(){return this.at},
gjx(){return this.ay}}
A.u3.prototype={
$0(){return this.a.bU(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.u5.prototype={
$1(a){var s=this
return s.a.dL(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").a_(this.c).i("1(2)")}}
A.u2.prototype={
$0(){return this.a.eP(this.b)},
$S:0}
A.u4.prototype={
$1(a){return this.a.eQ(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.lI.prototype={
gl8(){return B.cZ},
gla(){return B.cY},
gl9(){return B.cX},
gl4(){return B.cV},
gl5(){return B.cW},
gl3(){return B.cU},
gkD(){return B.cQ},
giR(){return B.d_},
gkw(){return B.cP},
gkv(){return B.cO},
gl_(){return B.cT},
gkG(){return B.cR},
giB(){return B.cS},
gj_(){return B.an},
gjx(){return null},
gky(){var s=$.uX
return s==null?$.uX=new A.fo(this):s},
gaU(){var s=$.uX
return s==null?$.uX=new A.fo(this):s},
gbM(){return this},
eP(a){var s,r,q
try{if(B.f===$.t){a.$0()
return}A.vV(null,null,this,a)}catch(q){s=A.M(q)
r=A.ab(q)
A.iF(s,r)}},
eQ(a,b){var s,r,q
try{if(B.f===$.t){a.$1(b)
return}A.vW(null,null,this,a,b)}catch(q){s=A.M(q)
r=A.ab(q)
A.iF(s,r)}},
mf(a,b,c){var s,r,q
try{if(B.f===$.t){a.$2(b,c)
return}A.xN(null,null,this,a,b,c)}catch(q){s=A.M(q)
r=A.ab(q)
A.iF(s,r)}},
j1(a,b){return new A.uZ(this,a,b)},
ei(a){return new A.uY(this,a)},
h2(a,b){return new A.v_(this,a,b)},
h(a,b){return null},
eu(a,b){A.iF(a,b)},
lR(a,b){return A.Ah(null,null,this,a,b)},
bU(a){if($.t===B.f)return a.$0()
return A.vV(null,null,this,a)},
dL(a,b){if($.t===B.f)return a.$1(b)
return A.vW(null,null,this,a,b)},
jF(a,b,c){if($.t===B.f)return a.$2(b,c)
return A.xN(null,null,this,a,b,c)},
bz(a){return a},
cS(a){return a},
eK(a){return a},
lN(a,b){return null},
cr(a){A.vX(null,null,this,a)},
j8(a,b){return A.xq(a,b)},
j7(a,b){return A.z4(a,b)}}
A.uZ.prototype={
$0(){return this.a.bU(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.uY.prototype={
$0(){return this.a.eP(this.b)},
$S:0}
A.v_.prototype={
$1(a){return this.a.eQ(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.fo.prototype={$iaj:1}
A.vU.prototype={
$0(){A.yu(this.a,this.b)},
$S:0}
A.hP.prototype={}
A.cJ.prototype={
gk(a){return this.a},
gB(a){return this.a===0},
gV(a){return this.a!==0},
gS(){return new A.e9(this,A.o(this).i("e9<1>"))},
gbb(){var s=A.o(this)
return A.dM(new A.e9(this,s.i("e9<1>")),new A.uw(this),s.c,s.y[1])},
I(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.ks(a)},
ks(a){var s=this.d
if(s==null)return!1
return this.bF(this.kp(s,a),a)>=0},
J(a,b){b.ac(0,new A.uv(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.zx(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.zx(q,b)
return r}else return this.kH(b)},
kH(a){var s,r,q=this.d
if(q==null)return null
s=this.kp(q,a)
r=this.bF(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.kh(s==null?q.b=A.xA():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.kh(r==null?q.c=A.xA():r,b,c)}else q.lc(b,c)},
lc(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.xA()
s=p.c1(a)
r=o[s]
if(r==null){A.xB(o,s,[a,b]);++p.a
p.e=null}else{q=p.bF(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
ac(a,b){var s,r,q,p,o,n=this,m=n.ko()
for(s=m.length,r=A.o(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.ap(n))}},
ko(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.aJ(i.a,null,!1,t.z)
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
kh(a,b,c){if(a[b]==null){++this.a
this.e=null}A.xB(a,b,c)},
c1(a){return J.Z(a)&1073741823},
kp(a,b){return a[this.c1(b)]},
bF(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.v(a[r],b))return r
return-1}}
A.uw.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.o(s).y[1].a(r):r},
$S(){return A.o(this.a).i("2(1)")}}
A.uv.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.dc.prototype={
c1(a){return A.mj(a)&1073741823},
bF(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.hY.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.np(b)},
j(a,b,c){this.nq(b,c)},
I(a){if(!this.w.$1(a))return!1
return this.no(a)},
c1(a){return this.r.$1(a)&1073741823},
bF(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.u1.prototype={
$1(a){return this.a.b(a)},
$S:22}
A.e9.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gV(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.lq(s,s.ko(),this.$ti.i("lq<1>"))},
E(a,b){return this.a.I(b)}}
A.lq.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.ap(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.i8.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.ni(b)},
j(a,b,c){this.nk(b,c)},
I(a){if(!this.y.$1(a))return!1
return this.nh(a)},
D(a,b){if(!this.y.$1(b))return null
return this.nj(b)},
ev(a){return this.x.$1(a)&1073741823},
dB(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.uO.prototype={
$1(a){return this.a.b(a)},
$S:22}
A.cK.prototype={
gu(a){var s=this,r=new A.de(s,s.r,A.o(s).i("de<1>"))
r.c=s.e
return r},
gk(a){return this.a},
gB(a){return this.a===0},
gV(a){return this.a!==0},
E(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.o6(b)
return r}},
o6(a){var s=this.d
if(s==null)return!1
return this.bF(s[this.c1(a)],a)>=0},
gC(a){var s=this.e
if(s==null)throw A.b(A.w("No elements"))
return s.a},
gZ(a){var s=this.f
if(s==null)throw A.b(A.w("No elements"))
return s.a},
t(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.kg(s==null?q.b=A.xC():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.kg(r==null?q.c=A.xC():r,b)}else return q.nG(b)},
nG(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.xC()
s=q.c1(a)
r=p[s]
if(r==null)p[s]=[q.iH(a)]
else{if(q.bF(r,a)>=0)return!1
r.push(q.iH(a))}return!0},
D(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.kq(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.kq(s.c,b)
else return s.iP(b)},
iP(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.c1(a)
r=n[s]
q=o.bF(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.kr(p)
return!0},
ai(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.iF()}},
kg(a,b){if(a[b]!=null)return!1
a[b]=this.iH(b)
return!0},
kq(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.kr(s)
delete a[b]
return!0},
iF(){this.r=this.r+1&1073741823},
iH(a){var s,r=this,q=new A.uP(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.iF()
return q},
kr(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.iF()},
c1(a){return J.Z(a)&1073741823},
bF(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.v(a[r].a,b))return r
return-1}}
A.uP.prototype={}
A.de.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.ap(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.p5.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:18}
A.dK.prototype={
gu(a){var s=this
return new A.lw(s,s.a,s.c,s.$ti.i("lw<1>"))},
gk(a){return this.b},
ai(a){var s,r,q,p=this;++p.a
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
if(this.b===0)throw A.b(A.w("No such element"))
s=this.c
s.toString
return s},
gZ(a){var s
if(this.b===0)throw A.b(A.w("No such element"))
s=this.c.c
s.toString
return s},
gaR(a){var s=this.b
if(s===0)throw A.b(A.w("No such element"))
if(s>1)throw A.b(A.w("Too many elements"))
s=this.c
s.toString
return s},
gB(a){return this.b===0},
fN(a,b,c){var s,r,q=this
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
iX(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.lw.prototype={
gn(){var s=this.c
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.a
if(s.b!==r.a)throw A.b(A.ap(s))
if(r.b!==0)r=s.e&&s.d===r.gC(0)
else r=!0
if(r){s.c=null
return!1}s.e=!0
r=s.d
s.c=r
s.d=r.b
return!0}}
A.aT.prototype={
geE(){var s=this.a
if(s==null||this===s.gC(0))return null
return this.c}}
A.B.prototype={
gu(a){return new A.a5(a,this.gk(a),A.bp(a).i("a5<B.E>"))},
a2(a,b){return this.h(a,b)},
gB(a){return this.gk(a)===0},
gV(a){return!this.gB(a)},
gC(a){if(this.gk(a)===0)throw A.b(A.ar())
return this.h(a,0)},
gZ(a){if(this.gk(a)===0)throw A.b(A.ar())
return this.h(a,this.gk(a)-1)},
gaR(a){if(this.gk(a)===0)throw A.b(A.ar())
if(this.gk(a)>1)throw A.b(A.h1())
return this.h(a,0)},
E(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){if(J.v(this.h(a,s),b))return!0
if(r!==this.gk(a))throw A.b(A.ap(a))}return!1},
dv(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gk(a))throw A.b(A.ap(a))}return!0},
ep(a,b,c){var s,r,q,p=this.gk(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gk(a))throw A.b(A.ap(a))}q=c.$0()
return q},
M(a,b){var s
if(this.gk(a)===0)return""
s=A.qY("",a,b)
return s.charCodeAt(0)==0?s:s},
jL(a,b){return new A.by(a,b.i("by<0>"))},
cj(a,b,c){return new A.ac(a,b,A.bp(a).i("@<B.E>").a_(c).i("ac<1,2>"))},
b_(a,b){return A.c3(a,b,null,A.bp(a).i("B.E"))},
cn(a,b){return A.c3(a,0,A.bD(b,"count",t.S),A.bp(a).i("B.E"))},
jI(a){var s,r=A.jP(A.bp(a).i("B.E"))
for(s=0;s<this.gk(a);++s)r.t(0,this.h(a,s))
return r},
t(a,b){var s=this.gk(a)
this.sk(a,s+1)
this.j(a,s,b)},
h3(a,b){return new A.br(a,A.bp(a).i("@<B.E>").a_(b).i("br<1,2>"))},
cs(a,b){var s=b==null?A.FZ():b
A.kr(a,0,this.gk(a)-1,s)},
R(a,b,c){var s,r=this.gk(a)
if(c==null)c=r
A.b1(b,c,r)
s=A.P(this.eY(a,b,c),A.bp(a).i("B.E"))
return s},
aS(a,b){return this.R(a,b,null)},
eY(a,b,c){A.b1(b,c,this.gk(a))
return A.c3(a,b,c,A.bp(a).i("B.E"))},
he(a,b,c,d){var s
A.b1(b,c,this.gk(a))
for(s=b;s<c;++s)this.j(a,s,d)},
a9(a,b,c,d,e){var s,r,q,p,o
A.b1(b,c,this.gk(a))
s=c-b
if(s===0)return
A.aU(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.mr(d,e).co(0,!1)
r=0}p=J.J(q)
if(r+s>p.gk(q))throw A.b(A.yH())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
ad(a,b,c,d){return this.a9(a,b,c,d,0)},
d3(a,b,c){var s,r
if(t.j.b(c))this.ad(a,b,b+c.length,c)
else for(s=J.K(c);s.l();b=r){r=b+1
this.j(a,b,s.gn())}},
m(a){return A.p0(a,"[","]")},
$iD:1,
$in:1,
$ip:1}
A.T.prototype={
ac(a,b){var s,r,q,p
for(s=J.K(this.gS()),r=A.o(this).i("T.V");s.l();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
gbL(){return J.aE(this.gS(),new A.pm(this),A.o(this).i("U<T.K,T.V>"))},
ck(a,b,c,d){var s,r,q,p,o,n=A.G(c,d)
for(s=J.K(this.gS()),r=A.o(this).i("T.V");s.l();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
I(a){return J.BN(this.gS(),a)},
gk(a){return J.av(this.gS())},
gB(a){return J.c8(this.gS())},
gV(a){return J.iS(this.gS())},
gbb(){return new A.i9(this,A.o(this).i("i9<T.K,T.V>"))},
m(a){return A.pn(this)},
$iL:1}
A.pm.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.o(s).i("T.V").a(r)
return new A.U(a,r,A.o(s).i("U<T.K,T.V>"))},
$S(){return A.o(this.a).i("U<T.K,T.V>(T.K)")}}
A.po.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
r.a=(r.a+=s)+": "
s=A.q(b)
r.a+=s},
$S:57}
A.i9.prototype={
gk(a){var s=this.a
return s.gk(s)},
gB(a){var s=this.a
return s.gB(s)},
gV(a){var s=this.a
return s.gV(s)},
gC(a){var s=this.a
s=s.h(0,J.bV(s.gS()))
return s==null?this.$ti.y[1].a(s):s},
gaR(a){var s=this.a
s=s.h(0,J.wQ(s.gS()))
return s==null?this.$ti.y[1].a(s):s},
gZ(a){var s=this.a
s=s.h(0,J.wP(s.gS()))
return s==null?this.$ti.y[1].a(s):s},
gu(a){var s=this.a
return new A.lz(J.K(s.gS()),s,this.$ti.i("lz<1,2>"))}}
A.lz.prototype={
l(){var s=this,r=s.a
if(r.l()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.lX.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify unmodifiable map"))}}
A.hd.prototype={
h(a,b){return this.a.h(0,b)},
j(a,b,c){this.a.j(0,b,c)},
I(a){return this.a.I(a)},
ac(a,b){this.a.ac(0,b)},
gB(a){var s=this.a
return s.gB(s)},
gV(a){var s=this.a
return s.gV(s)},
gk(a){var s=this.a
return s.gk(s)},
gS(){return this.a.gS()},
m(a){return this.a.m(0)},
gbb(){return this.a.gbb()},
gbL(){return this.a.gbL()},
ck(a,b,c,d){return this.a.ck(0,b,c,d)},
$iL:1}
A.eW.prototype={}
A.h8.prototype={
gu(a){var s=this
return new A.lx(s,s.c,s.d,s.b,s.$ti.i("lx<1>"))},
gB(a){return this.b===this.c},
gk(a){return(this.c-this.b&this.a.length-1)>>>0},
gC(a){var s=this,r=s.b
if(r===s.c)throw A.b(A.ar())
r=s.a[r]
return r==null?s.$ti.c.a(r):r},
gZ(a){var s=this,r=s.b,q=s.c
if(r===q)throw A.b(A.ar())
r=s.a
r=r[(q-1&r.length-1)>>>0]
return r==null?s.$ti.c.a(r):r},
gaR(a){var s,r=this
if(r.b===r.c)throw A.b(A.ar())
if(r.gk(0)>1)throw A.b(A.h1())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a2(a,b){var s,r=this
A.Cv(b,r.gk(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
D(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.v(r.a[s],b)){r.iP(s);++r.d
return!0}return!1},
m(a){return A.p0(this,"{","}")},
iP(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.lx.prototype={
gn(){var s=this.e
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a
if(r.c!==q.d)A.y(A.ap(q))
s=r.d
if(s===r.b){r.e=null
return!1}q=q.a
r.e=q[s]
r.d=(s+1&q.length-1)>>>0
return!0}}
A.c_.prototype={
gB(a){return this.gk(this)===0},
gV(a){return this.gk(this)!==0},
J(a,b){var s
for(s=J.K(b);s.l();)this.t(0,s.gn())},
cj(a,b,c){return new A.dD(this,b,A.o(this).i("@<1>").a_(c).i("dD<1,2>"))},
gaR(a){var s,r=this
if(r.gk(r)>1)throw A.b(A.h1())
s=r.gu(r)
if(!s.l())throw A.b(A.ar())
return s.gn()},
m(a){return A.p0(this,"{","}")},
dv(a,b){var s
for(s=this.gu(this);s.l();)if(!b.$1(s.gn()))return!1
return!0},
cn(a,b){return A.z3(this,b,A.o(this).c)},
b_(a,b){return A.z2(this,b,A.o(this).c)},
gC(a){var s=this.gu(this)
if(!s.l())throw A.b(A.ar())
return s.gn()},
gZ(a){var s,r=this.gu(this)
if(!r.l())throw A.b(A.ar())
do s=r.gn()
while(r.l())
return s},
a2(a,b){var s,r
A.aU(b,"index")
s=this.gu(this)
for(r=b;s.l();){if(r===0)return s.gn();--r}throw A.b(A.jB(b,b-r,this,null,"index"))},
$iD:1,
$in:1,
$idU:1}
A.ij.prototype={}
A.iv.prototype={}
A.lu.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.qN(b):s}},
gk(a){return this.b==null?this.c.a:this.dV().length},
gB(a){return this.gk(0)===0},
gV(a){return this.gk(0)>0},
gS(){if(this.b==null){var s=this.c
return new A.a7(s,A.o(s).i("a7<1>"))}return new A.lv(this)},
gbb(){var s,r=this
if(r.b==null){s=r.c
return new A.aS(s,A.o(s).i("aS<2>"))}return A.dM(r.dV(),new A.uK(r),t.N,t.z)},
I(a){if(this.b==null)return this.c.I(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
ac(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.ac(0,b)
s=o.dV()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.vN(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.ap(o))}},
dV(){var s=this.c
if(s==null)s=this.c=A.l(Object.keys(this.a),t.s)
return s},
qN(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.vN(this.a[a])
return this.b[a]=s}}
A.uK.prototype={
$1(a){return this.a.h(0,a)},
$S:56}
A.lv.prototype={
gk(a){return this.a.gk(0)},
a2(a,b){var s=this.a
return s.b==null?s.gS().a2(0,b):s.dV()[b]},
gu(a){var s=this.a
if(s.b==null){s=s.gS()
s=s.gu(s)}else{s=s.dV()
s=new J.en(s,s.length,A.a8(s).i("en<1>"))}return s},
E(a,b){return this.a.I(b)}}
A.uI.prototype={
p(){var s,r,q=this
q.nr()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.ap(A.Ad(r.charCodeAt(0)==0?r:r,q.b))
s.aG()}}
A.vr.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:55}
A.vq.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:55}
A.iU.prototype={
gaY(){return"us-ascii"},
jd(a){return B.aZ.v(a)}}
A.lW.prototype={
v(a){var s,r,q,p=A.b1(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.aY(a,"string","Contains invalid characters."))
o[r]=q}return o},
bC(a){return new A.vi(new A.f2(a),this.a)}}
A.iV.prototype={}
A.vi.prototype={
p(){this.a.a.p()},
bt(a,b,c,d){var s,r,q,p
A.b1(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.O("Source contains invalid character with code point: "+q+".",null))}s=new A.bX(a)
p=this.a.a
p.t(0,s.R(s,b,c))
if(d)p.p()}}
A.mB.prototype={
gje(){return B.b2},
v5(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.b1(a1,a2,a0.length)
s=$.y5()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.wr(a0.charCodeAt(l))
h=A.wr(a0.charCodeAt(l+1))
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
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new A.ae("")
e=p}else e=p
e.a+=B.a.q(a0,q,r)
d=A.bc(k)
e.a+=d
q=l
continue}}throw A.b(A.X("Invalid base64 data",a0,r))}if(p!=null){e=B.a.q(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.yg(a0,n,a2,o,m,d)
else{c=B.b.aC(d-1,4)+1
if(c===1)throw A.b(A.X(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.cT(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.yg(a0,n,a2,o,m,b)
else{c=B.b.aC(b,4)
if(c===1)throw A.b(A.X(a,a0,a2))
if(c>1)a0=B.a.cT(a0,a2,a2,c===2?"==":"=")}return a0}}
A.j_.prototype={
v(a){var s=a.length
if(s===0)return""
s=new A.la(u.U).lM(a,0,s,!0)
s.toString
return A.d6(s,0,null)},
bC(a){return new A.tj(a,new A.tB(u.U))}}
A.la.prototype={
lE(a){return new Uint8Array(a)},
lM(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.b.O(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.lE(o)
r.a=A.DH(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.tB.prototype={
lE(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.dr(B.d.gaF(s),s.byteOffset,a)}}
A.tw.prototype={
t(a,b){this.kt(b,0,J.av(b),!1)},
p(){this.kt(B.bU,0,0,!0)}}
A.tj.prototype={
kt(a,b,c,d){var s=this.b.lM(a,b,c,d)
if(s!=null)this.a.a.ap(A.d6(s,0,null))
if(d)this.a.a.aG()}}
A.iZ.prototype={
v(a){var s,r,q=A.b1(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.l9()
r=s.ja(a,0,q)
r.toString
s.j4(a,q)
return r},
bC(a){return new A.tv(a,new A.l9())}}
A.l9.prototype={
ja(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.zl(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.DE(a,b,c,q)
r.a=A.DG(a,b,c,s,0,r.a)
return s},
j4(a,b){var s=this.a
if(s<-1)throw A.b(A.X("Missing padding character",a,b))
if(s>0)throw A.b(A.X("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.tv.prototype={
t(a,b){var s,r=b.length
if(r===0)return
s=this.b.ja(b,0,r)
if(s!=null)this.a.a.ap(s)},
p(){this.b.j4(null,null)
this.a.a.aG()},
bt(a,b,c,d){var s,r
A.b1(b,c,a.length)
if(b===c)return
s=this.b
r=s.ja(a,b,c)
if(r!=null)this.a.a.ap(r)
if(d){s.j4(a,c)
this.a.a.aG()}}}
A.mG.prototype={}
A.f2.prototype={
t(a,b){this.a.t(0,b)},
p(){this.a.p()}}
A.ld.prototype={
t(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.J(b)
if(n.gk(b)>p.length-o){p=q.b
s=n.gk(b)+p.length-1
s|=B.b.a6(s,1)
s|=s>>>2
s|=s>>>4
s|=s>>>8
r=new Uint8Array((((s|s>>>16)>>>0)+1)*2)
p=q.b
B.d.ad(r,0,p.length,p)
q.b=r}p=q.b
o=q.c
B.d.ad(p,o,o+n.gk(b),b)
q.c=q.c+n.gk(b)},
p(){this.a.$1(B.d.R(this.b,0,this.c))}}
A.ja.prototype={}
A.lP.prototype={
t(a,b){this.b.push(b)},
p(){this.a.$1(this.b)}}
A.e6.prototype={
t(a,b){this.b.t(0,b)},
bs(a,b){A.bD(a,"error",t.K)
this.a.bs(a,b)},
p(){this.b.p()},
$ibj:1}
A.jb.prototype={}
A.aq.prototype={
bC(a){throw A.b(A.Y("This converter does not support chunked conversions: "+this.m(0)))},
t1(a){return new A.hU(new A.no(this),a,t.fM.a_(A.o(this).i("aq.T")).i("hU<1,2>"))}}
A.no.prototype={
$1(a){return new A.e6(a,this.a.bC(a),t.oW)},
$S:75}
A.dF.prototype={}
A.h6.prototype={
m(a){var s=A.jr(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.jJ.prototype={
m(a){return"Cyclic error in JSON stringify"}}
A.p3.prototype={
av(a,b){var s=A.Ad(a,this.gti().a)
return s},
a7(a,b){var s=A.E_(a,this.gje().b,null)
return s},
gje(){return B.bz},
gti(){return B.by}}
A.jL.prototype={
bC(a){return new A.uJ(null,this.b,new A.lR(a))}}
A.uJ.prototype={
t(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.w("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.ae("")
q=new A.vd(r,s)
A.zz(b,q,p.b,p.a)
if(r.a.length!==0)q.ih()
s.p()},
p(){}}
A.jK.prototype={
bC(a){return new A.uI(this.a,a,new A.ae(""))}}
A.uM.prototype={
mm(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.hP(a,s,r)
s=r+1
n.ah(92)
n.ah(117)
n.ah(100)
p=q>>>8&15
n.ah(p<10?48+p:87+p)
p=q>>>4&15
n.ah(p<10?48+p:87+p)
p=q&15
n.ah(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.hP(a,s,r)
s=r+1
n.ah(92)
switch(q){case 8:n.ah(98)
break
case 9:n.ah(116)
break
case 10:n.ah(110)
break
case 12:n.ah(102)
break
case 13:n.ah(114)
break
default:n.ah(117)
n.ah(48)
n.ah(48)
p=q>>>4&15
n.ah(p<10?48+p:87+p)
p=q&15
n.ah(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)n.hP(a,s,r)
s=r+1
n.ah(92)
n.ah(q)}}if(s===0)n.aP(a)
else if(s<m)n.hP(a,s,m)},
i4(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.jJ(a,null))}s.push(a)},
hO(a){var s,r,q,p,o=this
if(o.ml(a))return
o.i4(a)
try{s=o.b.$1(a)
if(!o.ml(s)){q=A.yM(a,null,o.gkX())
throw A.b(q)}o.a.pop()}catch(p){r=A.M(p)
q=A.yM(a,r,o.gkX())
throw A.b(q)}},
ml(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.w5(a)
return!0}else if(a===!0){r.aP("true")
return!0}else if(a===!1){r.aP("false")
return!0}else if(a==null){r.aP("null")
return!0}else if(typeof a=="string"){r.aP('"')
r.mm(a)
r.aP('"')
return!0}else if(t.j.b(a)){r.i4(a)
r.w3(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.i4(a)
s=r.w4(a)
r.a.pop()
return s}else return!1},
w3(a){var s,r,q=this
q.aP("[")
s=J.J(a)
if(s.gV(a)){q.hO(s.h(a,0))
for(r=1;r<s.gk(a);++r){q.aP(",")
q.hO(s.h(a,r))}}q.aP("]")},
w4(a){var s,r,q,p,o=this,n={}
if(a.gB(a)){o.aP("{}")
return!0}s=a.gk(a)*2
r=A.aJ(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.ac(0,new A.uN(n,r))
if(!n.b)return!1
o.aP("{")
for(p='"';q<s;q+=2,p=',"'){o.aP(p)
o.mm(A.H(r[q]))
o.aP('":')
o.hO(r[q+1])}o.aP("}")
return!0}}
A.uN.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:57}
A.uL.prototype={
gkX(){var s=this.c
return s instanceof A.ae?s.m(0):null},
w5(a){this.c.hN(B.u.m(a))},
aP(a){this.c.hN(a)},
hP(a,b,c){this.c.hN(B.a.q(a,b,c))},
ah(a){this.c.ah(a)}}
A.jM.prototype={
gaY(){return"iso-8859-1"},
jd(a){return B.bH.v(a)}}
A.jN.prototype={}
A.kC.prototype={
t(a,b){this.bt(b,0,b.length,!1)}}
A.vd.prototype={
ah(a){var s=this.a,r=A.bc(a)
if((s.a+=r).length>16)this.ih()},
hN(a){if(this.a.a.length!==0)this.ih()
this.b.t(0,a)},
ih(){var s=this.a,r=s.a
s.a=""
this.b.t(0,r.charCodeAt(0)==0?r:r)}}
A.io.prototype={
p(){},
bt(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bc(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.p()},
t(a,b){this.a.a+=b}}
A.lR.prototype={
t(a,b){this.a.a.ap(b)},
bt(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.ap(a)
else r.ap(B.a.q(a,b,c))
if(d)r.aG()},
p(){this.a.a.aG()}}
A.vp.prototype={
p(){var s,r,q,p=this.c
this.a.ue(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.bt(q,0,q.length,!0)}else r.p()},
t(a,b){this.bt(b,0,J.av(b),!1)},
bt(a,b,c,d){var s,r=this.c,q=this.a.cw(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.bt(s,0,s.length,!1)
r.a=""
return}}}
A.kR.prototype={
gaY(){return"utf-8"},
tf(a,b){return new A.cM((b===!0?B.cK:B.am).a).cw(a,0,null,!0)},
h8(a){return this.tf(a,null)},
jd(a){return B.h.v(a)}}
A.kS.prototype={
v(a){var s,r,q=A.b1(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.lZ(s)
if(r.kF(a,0,q)!==q)r.fW()
return B.d.R(s,0,r.b)},
bC(a){return new A.vs(new A.f2(a),new Uint8Array(1024))}}
A.lZ.prototype={
fW(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.C(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
ls(a,b){var s,r,q,p,o=this
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
return!0}else{o.fW()
return!1}},
kF(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.C(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.ls(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.fW()}else if(o<=2047){n=k.b
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
A.vs.prototype={
p(){if(this.a!==0){this.bt("",0,0,!0)
return}this.d.a.p()},
bt(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.ls(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.kF(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.fW()
else n.a=a.charCodeAt(b);++b}s.t(0,B.d.R(r,0,n.b))
if(o)s.p()
n.b=0}while(b<c)
if(d)n.p()}}
A.hK.prototype={
bC(a){return new A.vp(new A.cM(this.a),new A.lR(a),new A.ae(""))}}
A.cM.prototype={
cw(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.b1(b,c,J.av(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.Ev(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.Eu(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.i8(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.zW(p)
m.b=0
throw A.b(A.X(n,a,q+m.c))}return o},
i8(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.b.O(b+c,2)
r=q.i8(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.i8(a,s,c,d)}return q.th(a,b,c,d)},
ue(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bc(65533)
a.a+=s}else throw A.b(A.X(A.zW(77),null,null))},
th(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.ae(""),g=b+1,f=a[b]
A:for(s=l.a;;){for(;;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){q=A.bc(i)
h.a+=q
if(g===c)break A
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:q=A.bc(k)
h.a+=q
break
case 65:q=A.bc(k)
h.a+=q;--g
break
default:q=A.bc(k)
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
break}p=n}if(o-g<20)for(m=g;m<o;++m){q=A.bc(a[m])
h.a+=q}else{q=A.d6(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.bc(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.ma.prototype={}
A.ay.prototype={
bB(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bn(p,r)
return new A.ay(p===0?!1:s,r,p)},
oc(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.cr()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bn(s,q)
return new A.ay(n===0?!1:o,q,n)},
oe(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.cr()
s=k-a
if(s<=0)return l.a?$.y7():$.cr()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bn(s,q)
m=new A.ay(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.f4(0,$.fz())
return m},
bX(a,b){var s,r,q,p,o=this,n=o.c
if(n===0)return o
s=b/16|0
if(B.b.aC(b,16)===0)return o.oc(s)
r=n+s+1
q=new Uint16Array(r)
A.zs(o.b,n,b,q)
n=o.a
p=A.bn(r,q)
return new A.ay(p===0?!1:n,q,p)},
dS(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.O("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.b.O(b,16)
q=B.b.aC(b,16)
if(q===0)return j.oe(r)
p=s-r
if(p<=0)return j.a?$.y7():$.cr()
o=j.b
n=new Uint16Array(p)
A.DM(o,s,b,n)
s=j.a
m=A.bn(p,n)
l=new A.ay(m===0?!1:s,n,m)
if(s){if((o[r]&B.b.bX(1,q)-1)>>>0!==0)return l.f4(0,$.fz())
for(k=0;k<r;++k)if(o[k]!==0)return l.f4(0,$.fz())}return l},
T(a,b){var s,r=this.a
if(r===b.a){s=A.ty(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
i1(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.i1(p,b)
if(o===0)return $.cr()
if(n===0)return p.a===b?p:p.bB(0)
s=o+1
r=new Uint16Array(s)
A.DI(p.b,o,a.b,n,r)
q=A.bn(s,r)
return new A.ay(q===0?!1:b,r,q)},
f5(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.cr()
s=a.c
if(s===0)return p.a===b?p:p.bB(0)
r=new Uint16Array(o)
A.lb(p.b,o,a.b,s,r)
q=A.bn(o,r)
return new A.ay(q===0?!1:b,r,q)},
eW(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.i1(b,r)
if(A.ty(q.b,p,b.b,s)>=0)return q.f5(b,r)
return b.f5(q,!r)},
f4(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bB(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.i1(b,r)
if(A.ty(q.b,p,b.b,s)>=0)return q.f5(b,r)
return b.f5(q,!r)},
aZ(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.cr()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.zt(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bn(s,p)
return new A.ay(m===0?!1:n,p,m)},
ob(a){var s,r,q,p
if(this.c<a.c)return $.cr()
this.kA(a)
s=$.xu.bd()-$.hT.bd()
r=A.xw($.xt.bd(),$.hT.bd(),$.xu.bd(),s)
q=A.bn(s,r)
p=new A.ay(!1,r,q)
return this.a!==a.a&&q>0?p.bB(0):p},
r4(a){var s,r,q,p=this
if(p.c<a.c)return p
p.kA(a)
s=A.xw($.xt.bd(),0,$.hT.bd(),$.hT.bd())
r=A.bn($.hT.bd(),s)
q=new A.ay(!1,s,r)
if($.xv.bd()>0)q=q.dS(0,$.xv.bd())
return p.a&&q.c>0?q.bB(0):q},
kA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.zp&&a.c===$.zr&&c.b===$.zo&&a.b===$.zq)return
s=a.b
r=a.c
q=16-B.b.glA(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.zn(s,r,q,p)
n=new Uint16Array(b+5)
m=A.zn(c.b,b,q,n)}else{n=A.xw(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.xx(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.ty(n,m,j,i)>=0){g&2&&A.C(n)
n[m]=1
A.lb(n,h,j,i,n)}else{g&2&&A.C(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.lb(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.DJ(l,n,e);--k
A.zt(d,f,0,n,k,o)
if(n[e]<d){i=A.xx(f,o,k,j)
A.lb(n,h,j,i,n)
while(--d,n[e]<d)A.lb(n,h,j,i,n)}--e}$.zo=c.b
$.zp=b
$.zq=s
$.zr=r
$.xt.b=n
$.xu.b=h
$.hT.b=o
$.xv.b=q},
gL(a){var s,r,q,p=new A.tz(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.tA().$1(s)},
W(a,b){if(b==null)return!1
return b instanceof A.ay&&this.T(0,b)===0},
m(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.b.m(-n.b[0])
return B.b.m(n.b[0])}s=A.l([],t.s)
m=n.a
r=m?n.bB(0):n
while(r.c>1){q=$.y6()
if(q.c===0)A.y(B.b5)
p=r.r4(q).m(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.ob(q)}s.push(B.b.m(r.b[0]))
if(m)s.push("-")
return new A.dS(s,t.hF).cP(0)},
$ial:1}
A.tz.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:83}
A.tA.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:90}
A.lo.prototype={
ly(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
lK(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.vo.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.K(b),r=this.a;s.l();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.ag(b)}},
$S:53}
A.nY.prototype={
$0(){var s=this
return A.y(A.O("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:37}
A.b8.prototype={
W(a,b){if(b==null)return!1
return b instanceof A.b8&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gL(a){return A.d1(this.a,this.b,B.i,B.i,B.i,B.i,B.i)},
T(a,b){var s=B.b.T(this.a,b.a)
if(s!==0)return s
return B.b.T(this.b,b.b)},
vN(){var s=this
if(s.c)return s
return new A.b8(s.a,s.b,!0)},
m(a){var s=this,r=A.Cd(A.xg(s)),q=A.jk(A.xe(s)),p=A.jk(A.qd(s)),o=A.jk(A.xc(s)),n=A.jk(A.xd(s)),m=A.jk(A.xf(s)),l=A.yr(A.yV(s)),k=s.b,j=k===0?"":A.yr(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$ial:1}
A.ax.prototype={
W(a,b){if(b==null)return!1
return b instanceof A.ax&&this.a===b.a},
gL(a){return B.b.gL(this.a)},
T(a,b){return B.b.T(this.a,b.a)},
m(a){var s,r,q,p,o,n=this.a,m=B.b.O(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.b.O(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.b.O(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.a.m3(B.b.m(n%1e6),6,"0")},
$ial:1}
A.u8.prototype={
m(a){return this.ab()}}
A.a4.prototype={
gbZ(){return A.CY(this)}}
A.iW.prototype={
m(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jr(s)
return"Assertion failed"}}
A.cG.prototype={}
A.bq.prototype={
gig(){return"Invalid argument"+(!this.a?"(s)":"")},
gie(){return""},
m(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.q(p),n=s.gig()+q+o
if(!s.a)return n
return n+s.gie()+": "+A.jr(s.gjp())},
gjp(){return this.b}}
A.cA.prototype={
gjp(){return this.b},
gig(){return"RangeError"},
gie(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.fZ.prototype={
gjp(){return this.b},
gig(){return"RangeError"},
gie(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$icA:1,
gk(a){return this.f}}
A.ck.prototype={
m(a){return"Unsupported operation: "+this.a}}
A.kJ.prototype={
m(a){return"UnimplementedError: "+this.a},
$ick:1}
A.bl.prototype={
m(a){return"Bad state: "+this.a}}
A.jd.prototype={
m(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jr(s)+"."}}
A.k7.prototype={
m(a){return"Out of Memory"},
gbZ(){return null},
$ia4:1}
A.hF.prototype={
m(a){return"Stack Overflow"},
gbZ(){return null},
$ia4:1}
A.ln.prototype={
m(a){return"Exception: "+this.a},
$iI:1}
A.bk.prototype={
m(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
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
k=""}return g+l+B.a.q(e,i,j)+k+"\n"+B.a.aZ(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.q(f)+")"):g},
$iI:1,
gjt(){return this.a},
gf1(){return this.b},
gak(){return this.c}}
A.jD.prototype={
gbZ(){return null},
m(a){return"IntegerDivisionByZeroException"},
$ia4:1,
$ick:1,
$iI:1}
A.n.prototype={
h3(a,b){return A.j8(this,A.o(this).i("n.E"),b)},
cj(a,b,c){return A.dM(this,b,A.o(this).i("n.E"),c)},
jL(a,b){return new A.by(this,b.i("by<0>"))},
dv(a,b){var s
for(s=this.gu(this);s.l();)if(!b.$1(s.gn()))return!1
return!0},
M(a,b){var s,r,q=this.gu(this)
if(!q.l())return""
s=J.ao(q.gn())
if(!q.l())return s
if(b.length===0){r=s
do r+=J.ao(q.gn())
while(q.l())}else{r=s
do r=r+b+J.ao(q.gn())
while(q.l())}return r.charCodeAt(0)==0?r:r},
co(a,b){var s=A.o(this).i("n.E")
if(b)s=A.P(this,s)
else{s=A.P(this,s)
s.$flags=1
s=s}return s},
dM(a){return this.co(0,!0)},
gk(a){var s,r=this.gu(this)
for(s=0;r.l();)++s
return s},
gB(a){return!this.gu(this).l()},
gV(a){return!this.gB(this)},
cn(a,b){return A.z3(this,b,A.o(this).i("n.E"))},
b_(a,b){return A.z2(this,b,A.o(this).i("n.E"))},
gC(a){var s=this.gu(this)
if(!s.l())throw A.b(A.ar())
return s.gn()},
gZ(a){var s,r=this.gu(this)
if(!r.l())throw A.b(A.ar())
do s=r.gn()
while(r.l())
return s},
gaR(a){var s,r=this.gu(this)
if(!r.l())throw A.b(A.ar())
s=r.gn()
if(r.l())throw A.b(A.h1())
return s},
ep(a,b,c){var s,r
for(s=this.gu(this);s.l();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a2(a,b){var s,r
A.aU(b,"index")
s=this.gu(this)
for(r=b;s.l();){if(r===0)return s.gn();--r}throw A.b(A.jB(b,b-r,this,null,"index"))},
m(a){return A.Cx(this,"(",")")}}
A.U.prototype={
m(a){return"MapEntry("+A.q(this.a)+": "+A.q(this.b)+")"}}
A.R.prototype={
gL(a){return A.j.prototype.gL.call(this,0)},
m(a){return"null"}}
A.j.prototype={$ij:1,
W(a,b){return this===b},
gL(a){return A.ht(this)},
m(a){return"Instance of '"+A.ke(this)+"'"},
gag(a){return A.iK(this)},
toString(){return this.m(this)}}
A.lT.prototype={
m(a){return""},
$iau:1}
A.ky.prototype={
gtT(){var s=this.glL()
if($.mn()===1e6)return s
return s*1000},
gtU(){var s=this.glL()
if($.mn()===1000)return s
return B.b.O(s,1000)},
aD(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.qg.$0()-r)
s.b=null}},
glL(){var s=this.b
if(s==null)s=$.qg.$0()
return s-this.a}}
A.ae.prototype={
gk(a){return this.a.length},
hN(a){var s=A.q(a)
this.a+=s},
ah(a){var s=A.bc(a)
this.a+=s},
m(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.ro.prototype={
$2(a,b){throw A.b(A.X("Illegal IPv6 address, "+a,this.a,b))},
$S:115}
A.iw.prototype={
glg(){var s,r,q,p,o=this,n=o.w
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
gvf(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.aa(s,1)
r=s.length===0?B.p:A.cZ(new A.ac(A.l(s.split("/"),t.s),A.G3(),t.iZ),t.N)
q.x!==$&&A.wJ()
p=q.x=r}return p},
gL(a){var s,r=this,q=r.y
if(q===$){s=B.a.gL(r.glg())
r.y!==$&&A.wJ()
r.y=s
q=s}return q},
gjK(){return this.b},
gcN(){var s=this.c
if(s==null)return""
if(B.a.N(s,"[")&&!B.a.a5(s,"v",1))return B.a.q(s,1,s.length-1)
return s},
geD(){var s=this.d
return s==null?A.zL(this.a):s},
geI(){var s=this.f
return s==null?"":s},
ghg(){var s=this.r
return s==null?"":s},
uN(a){var s=this.a
if(a.length!==s.length)return!1
return A.EJ(a,s,0)>=0},
eN(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.xG(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.vk(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.N(n,"/"))n="/"+n
l=n
if(a!=null)k=A.vl(null,0,0,a)
else k=j.f
return A.ix(b,q,o,p,l,k,j.r)},
jE(a){return this.eN(a,null)},
mb(a){return this.eN(null,a)},
kS(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.a5(b,"../",r);){r+=3;++s}q=B.a.dC(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.ht(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.cT(a,q+1,null,B.a.aa(b,r-3*s))},
b9(a){return this.eO(A.kQ(a))},
eO(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gaK().length!==0)return a
else{s=h.a
if(a.gjk()){r=a.mb(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.glS())m=a.ghq()?a.geI():h.f
else{l=A.Et(h,n)
if(l>0){k=B.a.q(n,0,l)
n=a.gjj()?k+A.ed(a.gb7()):k+A.ed(h.kS(B.a.aa(n,k.length),a.gb7()))}else if(a.gjj())n=A.ed(a.gb7())
else if(n.length===0)if(p==null)n=s.length===0?a.gb7():A.ed(a.gb7())
else n=A.ed("/"+a.gb7())
else{j=h.kS(n,a.gb7())
r=s.length===0
if(!r||p!=null||B.a.N(n,"/"))n=A.ed(j)
else n=A.xI(j,!r||p!=null)}m=a.ghq()?a.geI():null}}}i=a.gjl()?a.ghg():null
return A.ix(s,q,p,o,n,m,i)},
gjk(){return this.c!=null},
ghq(){return this.f!=null},
gjl(){return this.r!=null},
glS(){return this.e.length===0},
gjj(){return B.a.N(this.e,"/")},
jH(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.Y("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.Y(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.Y(u.A))
if(r.c!=null&&r.gcN()!=="")A.y(A.Y(u.Q))
s=r.gvf()
A.Em(s,!1)
q=A.qY(B.a.N(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
m(a){return this.glg()},
W(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gaK())if(p.c!=null===b.gjk())if(p.b===b.gjK())if(p.gcN()===b.gcN())if(p.geD()===b.geD())if(p.e===b.gb7()){r=p.f
q=r==null
if(!q===b.ghq()){if(q)r=""
if(r===b.geI()){r=p.r
q=r==null
if(!q===b.gjl()){s=q?"":r
s=s===b.ghg()}}}}return s},
$ikO:1,
gaK(){return this.a},
gb7(){return this.e}}
A.vn.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.fm(1,a,B.k,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.fm(1,b,B.k,!0)
s.a+=r}},
$S:120}
A.vm.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.K(b),r=this.a;s.l();)r.$2(a,s.gn())},
$S:53}
A.rn.prototype={
gmk(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.bP(m,"?",s)
q=m.length
if(r>=0){p=A.iy(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.li("data","",n,n,A.iy(m,s,q,128,!1,!1),p,n)}return m},
m(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.bP.prototype={
gjk(){return this.c>0},
gjm(){return this.c>0&&this.d+1<this.e},
ghq(){return this.f<this.r},
gjl(){return this.r<this.a.length},
gjj(){return B.a.a5(this.a,"/",this.e)},
glS(){return this.e===this.f},
gaK(){var s=this.w
return s==null?this.w=this.o4():s},
o4(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.N(r.a,"http"))return"http"
if(q===5&&B.a.N(r.a,"https"))return"https"
if(s&&B.a.N(r.a,"file"))return"file"
if(q===7&&B.a.N(r.a,"package"))return"package"
return B.a.q(r.a,0,q)},
gjK(){var s=this.c,r=this.b+3
return s>r?B.a.q(this.a,r,s-1):""},
gcN(){var s=this.c
return s>0?B.a.q(this.a,s,this.d):""},
geD(){var s,r=this
if(r.gjm())return A.at(B.a.q(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.N(r.a,"http"))return 80
if(s===5&&B.a.N(r.a,"https"))return 443
return 0},
gb7(){return B.a.q(this.a,this.e,this.f)},
geI(){var s=this.f,r=this.r
return s<r?B.a.q(this.a,s+1,r):""},
ghg(){var s=this.r,r=this.a
return s<r.length?B.a.aa(r,s+1):""},
kN(a){var s=this.d+1
return s+a.length===this.e&&B.a.a5(this.a,a,s)},
vD(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.bP(B.a.q(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
eN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.xG(b,0,b.length)
s=!(h.b===b.length&&B.a.N(h.a,b))}else{b=h.gaK()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.q(h.a,h.b+3,q):""
o=h.gjm()?h.geD():g
if(s)o=A.vk(o,b)
q=h.c
if(q>0)n=B.a.q(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.q(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.N(l,"/"))l="/"+l
if(a!=null)j=A.vl(g,0,0,a)
else{k=h.r
j=m<k?B.a.q(q,m+1,k):g}m=h.r
i=m<q.length?B.a.aa(q,m+1):g
return A.ix(b,p,n,o,l,j,i)},
jE(a){return this.eN(a,null)},
mb(a){return this.eN(null,a)},
b9(a){return this.eO(A.kQ(a))},
eO(a){if(a instanceof A.bP)return this.ro(this,a)
return this.li().eO(a)},
ro(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.N(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.N(a.a,"http"))p=!b.kN("80")
else p=!(r===5&&B.a.N(a.a,"https"))||!b.kN("443")
if(p){o=r+1
return new A.bP(B.a.q(a.a,0,o)+B.a.aa(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.li().eO(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.bP(B.a.q(a.a,0,r)+B.a.aa(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.bP(B.a.q(a.a,0,r)+B.a.aa(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.vD()}s=b.a
if(B.a.a5(s,"/",n)){m=a.e
l=A.zD(this)
k=l>0?l:m
o=k-n
return new A.bP(B.a.q(a.a,0,k)+B.a.aa(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.a5(s,"../",n))n+=3
o=j-n+1
return new A.bP(B.a.q(a.a,0,j)+"/"+B.a.aa(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.zD(this)
if(l>=0)g=l
else for(g=j;B.a.a5(h,"../",g);)g+=3
f=0
for(;;){e=n+3
if(!(e<=c&&B.a.a5(s,"../",n)))break;++f
n=e}for(d="";i>g;){--i
if(h.charCodeAt(i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.a.a5(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.bP(B.a.q(h,0,i)+d+B.a.aa(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
jH(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.N(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.Y("Cannot extract a file path from a "+r.gaK()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.b(A.Y(u.z))
throw A.b(A.Y(u.A))}if(r.c<r.d)A.y(A.Y(u.Q))
q=B.a.q(s,r.e,q)
return q},
gL(a){var s=this.x
return s==null?this.x=B.a.gL(this.a):s},
W(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.m(0)},
li(){var s=this,r=null,q=s.gaK(),p=s.gjK(),o=s.c>0?s.gcN():r,n=s.gjm()?s.geD():r,m=s.a,l=s.f,k=B.a.q(m,s.e,l),j=s.r
l=l<j?s.geI():r
return A.ix(q,p,o,n,k,l,j<m.length?s.ghg():r)},
m(a){return this.a},
$ikO:1}
A.li.prototype={}
A.jt.prototype={
j(a,b,c){this.a.set(b,c)},
m(a){return"Expando:"+A.q(this.b)}}
A.k5.prototype={
m(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iI:1}
A.oq.prototype={
$2(a,b){this.a.bV(new A.oo(a),new A.op(b),t.X)},
$S:184}
A.oo.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:141}
A.op.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.FW(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.d9.b(a))A.y("Attempting to box non-Dart object.")
s={}
s[$.Bw()]=a
p.error=s
p.stack=b.m(0)
r=this.a
r.call(r,p)},
$S:9}
A.ww.prototype={
$1(a){var s,r,q,p
if(A.Ac(a))return a
s=this.a
if(s.I(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.K(a.gS());s.l();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.U.b(a)){p=[]
s.j(0,a,p)
B.c.J(p,J.aE(a,this,t.z))
return p}else return a},
$S:23}
A.wC.prototype={
$1(a){return this.a.aq(a)},
$S:25}
A.wD.prototype={
$1(a){if(a==null)return this.a.aA(new A.k5(a===undefined))
return this.a.aA(a)},
$S:25}
A.w8.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.Ab(a))return a
s=this.a
a.toString
if(s.I(a))return s.h(0,a)
if(a instanceof Date)return new A.b8(A.nZ(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.O("structured clone of RegExp",null))
if(a instanceof Promise)return A.a3(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.G(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.aw(o),q=s.gu(o);q.l();)n.push(A.w7(q.gn()))
for(m=0;m<s.gk(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.J(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:23}
A.uF.prototype={
cl(a){if(a<=0||a>4294967296)throw A.b(A.aG(u.E+a))
return Math.random()*a>>>0},
v4(){return Math.random()}}
A.uG.prototype={
nC(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.Y("No source of cryptographically secure random numbers available."))},
cl(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.aG(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.C(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.af(Math.pow(256,s))
for(o=a-1,n=(a&o)===0;;){crypto.getRandomValues(J.dr(B.c6.gaF(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.jq.prototype={}
A.W.prototype={
h(a,b){var s,r=this
if(!r.iC(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("W.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.iC(b))return
s.c.j(0,s.a.$1(b),new A.U(b,c,s.$ti.i("U<W.K,W.V>")))},
J(a,b){b.ac(0,new A.mI(this))},
I(a){var s=this
if(!s.iC(a))return!1
return s.c.I(s.a.$1(s.$ti.i("W.K").a(a)))},
gbL(){var s=this.c,r=A.o(s).i("aR<1,2>")
return A.dM(new A.aR(s,r),new A.mJ(this),r.i("n.E"),this.$ti.i("U<W.K,W.V>"))},
ac(a,b){this.c.ac(0,new A.mK(this,b))},
gB(a){return this.c.a===0},
gV(a){return this.c.a!==0},
gS(){var s=this.c,r=A.o(s).i("aS<2>")
return A.dM(new A.aS(s,r),new A.mL(this),r.i("n.E"),this.$ti.i("W.K"))},
gk(a){return this.c.a},
ck(a,b,c,d){return this.c.ck(0,new A.mM(this,b,c,d),c,d)},
gbb(){var s=this.c,r=A.o(s).i("aS<2>")
return A.dM(new A.aS(s,r),new A.mN(this),r.i("n.E"),this.$ti.i("W.V"))},
m(a){return A.pn(this)},
iC(a){return this.$ti.i("W.K").b(a)},
$iL:1}
A.mI.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(W.K,W.V)")}}
A.mJ.prototype={
$1(a){var s=a.b
return new A.U(s.a,s.b,this.a.$ti.i("U<W.K,W.V>"))},
$S(){return this.a.$ti.i("U<W.K,W.V>(U<W.C,U<W.K,W.V>>)")}}
A.mK.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(W.C,U<W.K,W.V>)")}}
A.mL.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("W.K(U<W.K,W.V>)")}}
A.mM.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.a_(this.c).a_(this.d).i("U<1,2>(W.C,U<W.K,W.V>)")}}
A.mN.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("W.V(U<W.K,W.V>)")}}
A.jn.prototype={
ae(a,b){return J.v(a,b)},
am(a){return J.Z(a)}}
A.h2.prototype={
ae(a,b){var s,r,q,p
if(a===b)return!0
s=J.K(a)
r=J.K(b)
for(q=this.a;;){p=s.l()
if(p!==r.l())return!1
if(!p)return!0
if(!q.ae(s.gn(),r.gn()))return!1}},
am(a){var s,r,q
for(s=J.K(a),r=this.a,q=0;s.l();){q=q+r.am(s.gn())&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.dL.prototype={
ae(a,b){var s,r,q,p,o
if(a===b)return!0
s=J.J(a)
r=s.gk(a)
q=J.J(b)
if(r!==q.gk(b))return!1
for(p=this.a,o=0;o<r;++o)if(!p.ae(s.h(a,o),q.h(b,o)))return!1
return!0},
am(a){var s,r,q,p
for(s=J.J(a),r=this.a,q=0,p=0;p<s.gk(a);++p){q=q+r.am(s.h(a,p))&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.fk.prototype={
ae(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.wZ(s.gu_(),s.guF(),s.guO(),A.o(this).i("fk.E"),t.S)
for(s=J.K(a),q=0;s.l();){p=s.gn()
o=r.h(0,p)
r.j(0,p,(o==null?0:o)+1);++q}for(s=J.K(b);s.l();){p=s.gn()
o=r.h(0,p)
if(o==null||o===0)return!1
r.j(0,p,o-1);--q}return q===0},
am(a){var s,r,q
for(s=J.K(a),r=this.a,q=0;s.l();)q=q+r.am(s.gn())&2147483647
q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.eJ.prototype={}
A.fb.prototype={
gL(a){var s=this.a
return 3*s.a.am(this.b)+7*s.b.am(this.c)&2147483647},
W(a,b){var s
if(b==null)return!1
if(b instanceof A.fb){s=this.a
s=s.a.ae(this.b,b.b)&&s.b.ae(this.c,b.c)}else s=!1
return s}}
A.hb.prototype={
ae(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gk(a)!==b.gk(b))return!1
s=A.wZ(null,null,null,t.fA,t.S)
for(r=J.K(a.gS());r.l();){q=r.gn()
p=new A.fb(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.K(b.gS());r.l();){q=r.gn()
p=new A.fb(this,q,b.h(0,q))
o=s.h(0,p)
if(o==null||o===0)return!1
s.j(0,p,o-1)}return!0},
am(a){var s,r,q,p,o,n,m,l
for(s=J.K(a.gS()),r=this.a,q=this.b,p=this.$ti.y[1],o=0;s.l();){n=s.gn()
m=r.am(n)
l=a.h(0,n)
o=o+3*m+7*q.am(l==null?p.a(l):l)&2147483647}o=o+(o<<3>>>0)&2147483647
o^=o>>>11
return o+(o<<15>>>0)&2147483647}}
A.jm.prototype={
ae(a,b){var s,r=this
if(a instanceof A.c_)return b instanceof A.c_&&new A.eJ(r,t.cu).ae(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.hb(r,r,t.a3).ae(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.dL(r,t.hI).ae(a,b)
s=t.U
if(s.b(a))return s.b(b)&&new A.h2(r,t.nZ).ae(a,b)
return J.v(a,b)},
am(a){var s=this
if(a instanceof A.c_)return new A.eJ(s,t.cu).am(a)
if(t.f.b(a))return new A.hb(s,s,t.a3).am(a)
if(t.j.b(a))return new A.dL(s,t.hI).am(a)
if(t.U.b(a))return new A.h2(s,t.nZ).am(a)
return J.Z(a)},
uP(a){return!0}}
A.k4.prototype={
sk(a,b){A.yQ()},
t(a,b){return A.yQ()}}
A.kM.prototype={}
A.bY.prototype={
W(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.bY){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gL(a){return A.yR(this.a)},
m(a){return A.az(this.a)}}
A.ep.prototype={
t(a,b){if(this.a!=null)throw A.b(A.w("add may only be called once."))
this.a=b},
p(){if(this.a==null)throw A.b(A.w("add must be called once."))}}
A.jx.prototype={
v(a){var s=new A.ep(),r=A.lN(s)
r.t(0,a)
r.p()
r=s.a
r.toString
return r}}
A.ov.prototype={
t(a,b){var s=this
if(s.w)throw A.b(A.w("Hash.add() called after close()."))
s.r=s.r+J.av(b)
s.kf(b)},
kf(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.wO(B.d.gaF(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.J(a),o=0;;j=0){n=j+p.gk(a)-o
if(n<h){B.d.a9(i,j,n,a,o)
k.e=n
return}B.d.a9(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.C(s)
s[m]=l;++m}while(m<q)
k.vT(s)}},
p(){var s,r,q,p,o,n,m,l=this
if(l.w)return
l.w=!0
s=l.r
if(s>1125899906842623)A.y(A.Y("Hashing is unsupported for messages with more than 2^53 bits."))
r=l.d.byteLength
r=((s+1+8+r-1&-r)>>>0)-s
q=new Uint8Array(r)
q[0]=128
p=s*8
o=r-8
n=J.wO(B.d.gaF(q))
m=B.b.O(p,4294967296)
n.$flags&2&&A.C(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.kf(q)
s=l.a
s.t(0,new A.bY(l.nU()))
s.p()},
nU(){var s,r,q,p,o,n,m
if(B.at===$.B9())return J.BL(B.a1.gaF(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.wO(B.d.gaF(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.C(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.lL.prototype={
bC(a){var s=new Uint32Array(A.bA(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.f2(new A.lM(s,r,a,q,new Uint32Array(16)))}}
A.v0.prototype={
vT(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
for(d=l,q=0;q<64;++q,e=f,f=g,g=h,h=b,i=j,j=k,k=d,d=a){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.bM[q]+s[q]>>>0)>>>0)>>>0
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
A.lM.prototype={}
A.kl.prototype={}
A.j0.prototype={$iwT:1}
A.j1.prototype={
hf(){if(this.w)throw A.b(A.w("Can't finalize a finalized Request."))
this.w=!0
return B.b_},
m(a){return this.a+" "+this.b.m(0)}}
A.j2.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:165}
A.j3.prototype={
$1(a){return B.a.gL(a.toLowerCase())},
$S:67}
A.mC.prototype={
nu(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.O("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.O("Invalid content length "+A.q(s)+".",null))}}}
A.j7.prototype={
aQ(a){return this.n2(a)},
n2(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$aQ=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.yn("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.hf().vM(),$async$aQ)
case 3:k=b6
p=5
j=b4
i=null
h=!1
g=null
a6=b4.b
a7=a6.m(0)
a8=!J.c8(k)?k:null
a9=t.N
f=A.G(a9,t.K)
e=b4.glD()
d=null
if(e!=null){d=e
J.bT(f,"content-length",d)}for(b0=b4.r,b0=new A.aR(b0,A.o(b0).i("aR<1,2>")).gu(0);b0.l();){b1=b0.d
b1.toString
c=b1
J.bT(f,c.a,c.b)}f=A.ei(f)
f.toString
A.aW(f)
b0=l.signal
s=8
return A.a(A.a3(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$aQ)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.hu(a,null):null
if(a0==null&&a!=null){f=A.yn("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.G(a9,a9)
b.headers.forEach(A.mb(new A.mF(a1)))
f=A.EA(b4,b)
a4=b.status
a6=a1
a8=a0
A.kQ(b.url)
a9=b.statusText
f=new A.kB(A.B0(f),a4,a8,a6)
f.nu(a4,a8,a6,!1,!0,a9,b4)
q=f
n=[1]
s=6
break
n.push(7)
s=6
break
case 5:p=4
b3=o.pop()
a2=A.M(b3)
a3=A.ab(b3)
A.Ag(a2,a3,b4)
n.push(7)
s=6
break
case 4:n=[2]
case 6:p=2
B.c.D(a5,l)
s=n.pop()
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aQ,r)},
p(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.E)(s),++q)s[q].abort()
this.b=!0}}
A.mF.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:71}
A.vK.prototype={
$1(a){return A.fs(this.a,this.b,a)},
$S:72}
A.vS.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.au()}},
$S:0}
A.vT.prototype={
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
n=A.M(k)
m=A.ab(k)
if(!o.a.b)A.Ag(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:4}
A.cP.prototype={
vM(){var s=new A.r($.t,t.jz),r=new A.aM(s,t.iq),q=new A.ld(new A.mH(r),new Uint8Array(1024))
this.a4(q.grO(q),!0,q.gds(),r.gtb())
return s}}
A.mH.prototype={
$1(a){return this.a.aq(new Uint8Array(A.bA(a)))},
$S:20}
A.dx.prototype={
m(a){var s=this.b.m(0)
return"ClientException: "+this.a+", uri="+s},
$iI:1}
A.jZ.prototype={
gk(a){return this.b}}
A.py.prototype={
glD(){var s,r,q,p=this,o={},n=o.a=0
p.x.ac(0,new A.pz(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.E)(s),++n){q=s[n]
o.a=o.a+(74+B.h.v(p.kL(q)).length+q.b+2)}return o.a+2+70+4},
hf(){var s=this,r=s.nQ()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.k7()
return new A.cP(s.b3(r))},
b3(a){return this.oq(a)},
oq(a){var $async$b3=A.c(function(b,c){switch(b){case 2:n=q
s=n.pop()
break
case 1:o.push(c)
s=p}for(;;)switch(s){case 0:f="--"+a
e=B.h.v(f+"\r\n")
d=B.h.v(f+"--\r\n")
f=m.x,f=new A.aR(f,A.o(f).i("aR<1,2>")).gu(0)
case 3:if(!f.l()){s=4
break}l=f.d
l.toString
s=5
q=[1]
return A.bz(A.dd(e),$async$b3,r)
case 5:k=l.b
j=$.wM()
l=A.x(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.x(l,'"',"%22")+'"'
l=$.y8()
s=6
q=[1]
return A.bz(A.dd(B.h.v((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$b3,r)
case 6:s=7
q=[1]
return A.bz(A.dd(B.h.v(k)),$async$b3,r)
case 7:s=8
q=[1]
return A.bz(A.dd(B.aF),$async$b3,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.bz(A.dd(e),$async$b3,r)
case 12:s=13
q=[1]
return A.bz(A.dd(B.h.v(m.kL(g))),$async$b3,r)
case 13:if(g.f)A.y(A.w("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bz(A.DY(g.e),$async$b3,r)
case 14:s=15
q=[1]
return A.bz(A.dd(B.aF),$async$b3,r)
case 15:case 10:f.length===l||(0,A.E)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bz(A.dd(d),$async$b3,r)
case 16:case 1:return A.bz(null,0,r)
case 2:return A.bz(o.at(-1),1,r)}})
var s=0,r=A.Aa($async$b3,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.Ap(r)},
q9(a,b){var s,r=$.wM()
r=A.x(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.x(r,'"',"%22")+'"'
r=$.y8()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
kL(a){var s=a.d.m(0),r=$.wM(),q=A.x(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.x(q,'"',"%22")+'"'
s=A.x(a.c,r,"%0D%0A")
p=p+'; filename="'+A.x(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
nQ(){var s,r=J.yJ(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.bZ[$.Bb().cl(66)]
return"dart-http-boundary-"+A.d6(r,0,null)}}
A.pz.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.h.v(this.b.q9(a,b)).length+B.h.v(b).length+2)},
$S:31}
A.qD.prototype={
glD(){return this.y.length},
gjf(){var s,r
if(this.gc2()==null||!this.gc2().c.a.I("charset"))return B.k
s=this.gc2().c.a.h(0,"charset")
s.toString
r=A.Cg(s)
return r==null?A.y(A.X('Unsupported encoding "'+s+'".',null,null)):r},
hf(){this.k7()
return new A.cP(A.xm(this.y,t.L))},
gc2(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.CL(s)},
sc2(a){this.r.j(0,"content-type",a.m(0))},
nX(){if(!this.w)return
throw A.b(A.w("Can't modify a finalized Request."))}}
A.hH.prototype={}
A.kB.prototype={}
A.fE.prototype={}
A.ew.prototype={
m(a){var s=new A.ae(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.ac(0,new A.pr(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.pp.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.qZ(null,j),h=$.BI()
i.hW(h)
s=$.BH()
i.eo(s)
r=i.gjr().h(0,0)
r.toString
i.eo("/")
i.eo(s)
q=i.gjr().h(0,0)
q.toString
i.hW(h)
p=t.N
o=A.G(p,p)
for(;;){p=i.d=B.a.dE(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gG():n
if(!m)break
p=i.d=h.dE(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gG()
i.eo(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.eo("=")
n=i.d=s.dE(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gG()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.Gb(i)
n=i.d=h.dE(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gG()
o.j(0,p,k)}i.u4()
return A.x9(r,q,o)},
$S:85}
A.pr.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.BF()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.AY(b,$.Bv(),new A.pq(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:31}
A.pq.prototype={
$1(a){return"\\"+A.q(a.h(0,0))},
$S:47}
A.wj.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:47}
A.w_.prototype={
$1(a){return a.a===this.a},
$S:91}
A.w0.prototype={
$2(a,b){return B.a.T(a.a,b.a)},
$S:94}
A.kc.prototype={
ab(){return"PlatformProfile."+this.b}}
A.kx.prototype={
ao(){var s=this
return A.m(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.qM.prototype={
$1(a){return J.bV(a.gbb())},
$S:33}
A.qN.prototype={
$1(a){return B.a.E(a,"ENABLE_FTS5")},
$S:11}
A.fF.prototype={
ab(){return"ChangeOrigin."+this.b}}
A.cQ.prototype={
ab(){return"ChangeAction."+this.b}}
A.aK.prototype={
ao(){var s,r=this,q=A.G(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"id",r.b)
q.j(0,"origin",r.c.b)
q.j(0,"action",r.d.b)
s=r.e
if(s!=null)q.j(0,"oldRecord",s)
s=r.f
if(s!=null)q.j(0,"newRecord",s)
s=r.r
s=A.P(s,A.o(s).c)
B.c.b0(s)
q.j(0,"changedFields",s)
return q},
W(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.aK))return!1
return b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&B.n.ae(b.e,s.e)&&B.n.ae(b.f,s.f)&&B.n.ae(b.r,s.r)},
gL(a){var s=this
return A.d1(s.a,s.b,s.c,s.d,B.n.am(s.e),B.n.am(s.f),B.n.am(s.r))},
m(a){var s=this
return"RecordChangeEvent("+s.c.m(0)+" "+s.d.m(0)+" "+s.a+"/"+s.b+" changed: "+s.r.m(0)+")"}}
A.a2.prototype={}
A.mO.prototype={
tV(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)},
tW(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)}}
A.mP.prototype={}
A.mQ.prototype={}
A.ms.prototype={
tX(a){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.c,r=0;r<12;++r)m[r]=s.cl(256)
q=A.Dy(this.b,m,new Uint8Array(A.bA(a)))
p=q.a
s=12+p.length
o=s+16
n=new Uint8Array(o)
B.d.ad(n,0,12,m)
B.d.ad(n,12,s,p)
B.d.ad(n,s,o,q.b)
return n}}
A.te.prototype={
em(b0,b1){var s,r,q,p,o,n,m,l,k=b0[0],j=b0[1],i=b0[2],h=b0[3],g=b0[4],f=b0[5],e=b0[6],d=b0[7],c=b0[8],b=b0[9],a=b0[10],a0=b0[11],a1=b0[12],a2=b0[13],a3=b0[14],a4=b0[15],a5=this.a,a6=((k<<24|j<<16|i<<8|h)^a5[0])>>>0,a7=((g<<24|f<<16|e<<8|d)^a5[1])>>>0,a8=((c<<24|b<<16|a<<8|a0)^a5[2])>>>0,a9=((a1<<24|a2<<16|a3<<8|a4)^a5[3])>>>0
for(s=4,r=1;r<14;++r,a9=i,a8=j,a7=k,a6=p){q=s+1
p=(A.tf(a6)^A.tg(a7)^A.th(a8)^A.ti(a9)^a5[s])>>>0
s=q+1
k=(A.tf(a7)^A.tg(a8)^A.th(a9)^A.ti(a6)^a5[q])>>>0
q=s+1
j=(A.tf(a8)^A.tg(a9)^A.th(a6)^A.ti(a7)^a5[s])>>>0
s=q+1
i=(A.tf(a9)^A.tg(a6)^A.th(a7)^A.ti(a8)^a5[q])>>>0}q=s+1
o=(B.j[a6>>>24&255]<<24|B.j[a7>>>16&255]<<16|B.j[a8>>>8&255]<<8|B.j[a9&255])^a5[s]
s=q+1
n=(B.j[a7>>>24&255]<<24|B.j[a8>>>16&255]<<16|B.j[a9>>>8&255]<<8|B.j[a6&255])^a5[q]
m=(B.j[a8>>>24&255]<<24|B.j[a9>>>16&255]<<16|B.j[a6>>>8&255]<<8|B.j[a7&255])^a5[s]
l=(B.j[a9>>>24&255]<<24|B.j[a6>>>16&255]<<16|B.j[a7>>>8&255]<<8|B.j[a8&255])^a5[s+1]
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
qg(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.$flags|0,q=0;q<8;++q){p=4*q
o=a[p]
n=a[p+1]
m=a[p+2]
p=a[p+3]
r&2&&A.C(s)
s[q]=(o<<24|n<<16|m<<8|p)>>>0}for(q=8;q<60;++q){l=s[q-1]
p=B.b.aC(q,8)
if(p===0)l=A.zg((l<<8|l>>>24)>>>0)^B.bK[B.b.O(q,8)-1]
else if(p===4)l=A.zg(l)
p=s[q-8]
r&2&&A.C(s)
s[q]=(p^l)>>>0}}}
A.cv.prototype={
ab(){return"KindViolation."+this.b}}
A.wi.prototype={
$1(a){return a.h(0,"detail")},
$S:33}
A.je.prototype={
ab(){return"ConflictAlgorithm."+this.b}}
A.jo.prototype={
p(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.c){s=1
break}p.c=!1
for(o=p.a,n=new A.aI(o,o.r,o.e,A.o(o).i("aI<2>"));n.l();){m=n.d
if(!m.r){m.r=!0
if(!m.f){l=m.a
l.c.d.sqlite3_reset(l.b)
m.f=!0}m=m.a
l=m.c
l.d.sqlite3_finalize(m.b)
l=l.w
if(l!=null){l=l.a
if(l!=null)l.unregister(m.d)}}}o.ai(0)
p.b.p()
case 1:return A.e(q,r)}})
return A.f($async$p,r)},
jV(a){var s,r=this.a,q=r.D(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.D(0,new A.a7(r,A.o(r).i("a7<1>")).gC(0))
if(s!=null)s.p()}q=this.b.vg(a)
r.j(0,a,q)
return q},
n1(a,b){var s=this.jV(a).jW(new A.dH(b)),r=A.o(s).i("ac<B.E,L<k,j?>>")
r=A.P(new A.ac(s,new A.o6(),r),r.i("Q.E"))
return r},
en(a,b){this.jV(a).jh(new A.dH(b))},
jg(a){return this.en(a,B.v)},
aX(a,b){return this.u2(a,b)},
P(a){return this.aX(a,B.v)},
u2(a,b){var s=0,r=A.h(t.H),q=this
var $async$aX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.en(a,b)
return A.e(null,r)}})
return A.f($async$aX,r)},
al(a,b){return this.vs(a,b)},
aN(a){return this.al(a,B.v)},
vs(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$al=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.n1(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$al,r)},
bT(a,b,c,d,e,f){return this.vp(a,b,c,d,e,f)},
aH(a,b,c,d){return this.bT(a,null,b,null,c,d)},
dH(a,b,c){return this.bT(a,null,null,null,b,c)},
vn(a,b,c,d){return this.bT(a,null,null,b,c,d)},
eJ(a,b,c,d,e){return this.bT(a,b,c,null,d,e)},
vo(a,b,c,d,e){return this.bT(a,null,b,c,d,e)},
vm(a,b,c,d){return this.bT(a,b,null,null,c,d)},
vp(a,b,c,d,e,f){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bT=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:n=b!=null&&b.length!==0?"SELECT "+B.c.M(b,", "):"SELECT *"
n+=' FROM "'+a+'"'
if(e.length!==0)n+=" WHERE "+e
if(d!=null&&d.length!==0)n+=" ORDER BY "+d
if(c!=null)n+=" LIMIT "+A.q(c)
o=f==null?B.v:f
q=p.al(n.charCodeAt(0)==0?n:n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bT,r)},
cO(a,b,c,d){return this.uL(0,b,c,d)},
an(a,b,c){return this.cO(0,b,c,null)},
uL(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$cO=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.O("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.o(c)
n=o.i("a7<1>")
m=t.N
l=A.dM(new A.a7(c,n),new A.o5(),n.i("n.E"),m).M(0,", ")
k=B.c.M(A.aJ(c.a,"?",!1,m),", ")
j=A.yt(d)
o=o.i("aS<2>")
o=A.P(new A.aS(c,o),o.i("n.E"))
p.en("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.af(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cO,r)},
F(a,b,c,d){return this.vS(a,b,c,d)},
vS(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$F=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.o(b)
n=o.i("a7<1>")
m=A.dM(new A.a7(b,n),new A.o7(),n.i("n.E"),t.N).M(0,", ")
n="UPDATE"+A.yt(null)+' "'+a+'" SET '+m
o=A.P(new A.aS(b,o.i("aS<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.c.J(o,d)}p.en(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$F,r)},
a3(a,b,c){return this.tj(a,b,c)},
tj(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$a3=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
B.c.J(n,c)}p.en(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$a3,r)},
X(a,b){return this.vO(a,b,b)},
vO(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j
var $async$X=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.jg("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$X)
case 7:m=e
n.jg("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
try{n.jg("ROLLBACK")}catch(i){}throw j
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$X,r)},
$inG:1}
A.o6.prototype={
$1(a){return A.bv(a,t.N,t.X)},
$S:107}
A.o5.prototype={
$1(a){return'"'+a+'"'},
$S:8}
A.o7.prototype={
$1(a){return'"'+a+'" = ?'},
$S:8}
A.n0.prototype={}
A.jl.prototype={
lC(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f='Encrypted field "',e=A.l([],t.s),d=A.b0(t.N)
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.E)(s),++n){m=s[n]
l=m.a
if(B.ci.E(0,l))throw A.b(A.ch('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!d.t(0,l))throw A.b(A.ch('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.ch(f+l+'" cannot be unique.'))
if(B.c.cH(o,new A.o4(m)))throw A.b(A.ch(f+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.E(k,l)}else k=!1
if(k)throw A.b(A.ch(f+l+'" cannot be included in FTS.'))}}for(j=0;j<o.length;j=i)for(i=j+1,r=i,h=0;h<o.length;++h){if(j===h)continue
if(B.bI.ae(o[j].a,o[h].a)){if(j<h){l=o[j].a
e.push("Duplicate index columns "+l.m(l)+" (declarations "+r+" and "+(h+1)+").")}}else if(A.Ce(o[h].a,o[j].a)&&!o[h].b){l=o[h].a
l=l.m(l)
k=o[j].a
e.push("Index "+l+" is prefix-subsumed by index "+k.m(k)+".")}}if(p){if(!g.a.d)throw A.b(new A.fX("FTS5 is not available on this SQLite engine."))
for(r=q.a,q=r.$ti,r=new A.a5(r,r.gk(0),q.i("a5<B.E>")),q=q.i("B.E");r.l();){p=r.d
if(p==null)p=q.a(p)
if(!d.E(0,p))throw A.b(A.ch('FTS field "'+p+'" is not a declared field.'))}}for(r=s.length,n=0;n<r;++n){m=s[n]
q=m.b
if(q===B.B){p=m.f
p=p==null||p.length===0}else p=!1
if(p)throw A.b(A.ch('Enum field "'+m.a+'" must declare values.'))
if(q===B.C){q=m.r
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.ch('Ref field "'+m.a+'" must declare its target store.'))}return new A.n0(g.nT(a),g.nS(a),g.nR(a),e)},
nT(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.l(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.E)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.x(n,'"',i)+'"')+" "+o.gk_()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.B&&q){k=o.f
k.toString
j=new A.ac(k,new A.o3(),A.a8(k).i("ac<1,k>")).M(0,", ")
m+=" CHECK ("+('"'+A.x(n,'"',i)+'"')+" IN ("+j+"))"}if(l===B.C&&o.w){n=o.r
n.toString
n=A.x(n,'"',i)
m+=" REFERENCES "+('"'+n+'"')+"("+('"'+A.x("id",'"',i)+'"')+")"}h.push(m)}h.push("  archived INTEGER NOT NULL DEFAULT 0")
h.push("  hidden INTEGER NOT NULL DEFAULT 0")
h.push("  extra TEXT")
s=A.x(a.a,'"',i)
r=B.c.M(h,",\n")
q=q?"\n) STRICT;":"\n);"
q="CREATE TABLE "+('"'+s+'"')+" (\n"+r+q
return q.charCodeAt(0)==0?q:q},
nS(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.l([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.E)(s),++n){m=s[n]
l=m.a
k=l.$ti.i("ac<B.E,k>")
j=A.P(new A.ac(l,A.G6(),k),k.i("Q.E"))
if(!l.E(l,"id"))j.push('"'+A.x("id",e,d)+'"')
i=m.c===B.aE?"archived = 0 AND hidden = 0":"archived = 0"
if(m.b){l=l.M(l,"_")
l=A.x(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.x(q,e,d)+'"')+" ("+B.c.M(j,", ")+") WHERE "+i+";")}else{l=l.M(l,"_")
l=A.x(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.x(q,e,d)+'"')+" ("+B.c.M(j,", ")+") WHERE "+i+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.E)(r),++n){h=r[n]
if(h.b!==B.C)continue
if(B.c.cH(s,new A.o2(h)))continue
k=h.a
g=A.x(p+k,e,d)
f=A.x(q,e,d)
k=A.x(k,e,d)
b.push("CREATE INDEX "+('"'+g+'"')+" ON "+('"'+f+'"')+" ("+('"'+k+'"')+", "+('"'+A.x("id",e,d)+'"')+") WHERE archived = 0 AND hidden = 0;")}for(n=0;n<r.length;r.length===k||(0,A.E)(r),++n){h=r[n]
if(h.d){s=h.a
p=A.x(o+s,e,d)
l=A.x(q,e,d)
g=A.x(s,e,d)
b.push(c+('"'+p+'"')+" ON "+('"'+l+'"')+" ("+('"'+g+'"')+") WHERE "+('"'+A.x(s,e,d)+'"')+" IS NOT NULL AND archived = 0;")}}return b},
nR(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=", ",f='"',e='""',d=" BEGIN\n  INSERT INTO ",c=") VALUES (new.rowid, ",b=") VALUES ('delete', old.rowid, ",a=a0.w
if(a==null)return B.p
s=A.l([],t.s)
r=a0.a
q=r+"_fts"
p=a.a
o=p.$ti.i("ac<B.E,k>")
n=new A.ac(p,new A.o_(),o).M(0,g)
m=new A.ac(p,new A.o0(),o).M(0,g)
s.push("CREATE VIRTUAL TABLE "+('"'+A.x(q,f,e)+'"')+" USING fts5(\n  "+p.M(p,g)+",\n  content = '"+r+"',\n  content_rowid = 'rowid'\n);")
l=A.x(r+"_ai",f,e)
k=A.x(r,f,e)
s.push("CREATE TRIGGER "+('"'+l+'"')+" AFTER INSERT ON "+('"'+k+'"')+d+('"'+A.x(q,f,e)+'"')+"(rowid, "+p.M(p,g)+c+n+");\nEND;")
l=A.x(r+"_ad",f,e)
k=A.x(r,f,e)
j=A.x(q,f,e)
s.push("CREATE TRIGGER "+('"'+l+'"')+" AFTER DELETE ON "+('"'+k+'"')+d+('"'+j+'"')+"("+('"'+A.x(q,f,e)+'"')+", rowid, "+p.M(p,g)+b+m+");\nEND;")
i=new A.ac(p,new A.o1(),o).M(0," OR ")
o=A.x(r+"_au",f,e)
l=A.x(r,f,e)
k=A.x(q,f,e)
j=A.x(q,f,e)
h=p.M(p,g)
s.push("CREATE TRIGGER "+('"'+o+'"')+" AFTER UPDATE ON "+('"'+l+'"')+" WHEN "+i+d+('"'+k+'"')+"("+('"'+j+'"')+", rowid, "+h+b+m+");\n  INSERT INTO "+('"'+A.x(q,f,e)+'"')+"(rowid, "+p.M(p,g)+c+n+");\nEND;")
return s}}
A.o4.prototype={
$1(a){var s=a.a
return s.E(s,this.a.a)},
$S:45}
A.o3.prototype={
$1(a){return"'"+A.x(a,"'","''")+"'"},
$S:8}
A.o2.prototype={
$1(a){var s=a.a
return s.E(s,this.a.a)},
$S:45}
A.o_.prototype={
$1(a){return"new."+('"'+A.x(a,'"','""')+'"')},
$S:8}
A.o0.prototype={
$1(a){return"old."+('"'+A.x(a,'"','""')+'"')},
$S:8}
A.o1.prototype={
$1(a){var s=A.x(a,'"','""')
return"new."+('"'+s+'"')+" IS NOT old."+('"'+A.x(a,'"','""')+'"')},
$S:8}
A.h9.prototype={
m(a){return A.iK(this).m(0)+": "+this.a},
$iI:1}
A.hL.prototype={}
A.hJ.prototype={}
A.hm.prototype={}
A.fH.prototype={}
A.hs.prototype={}
A.fV.prototype={}
A.cD.prototype={}
A.hz.prototype={}
A.hB.prototype={}
A.eI.prototype={}
A.fX.prototype={}
A.fJ.prototype={}
A.fO.prototype={}
A.qC.prototype={}
A.o8.prototype={
ab(){return"DurabilityClass."+this.b}}
A.kz.prototype={}
A.qa.prototype={
bW(a){var s,r=null,q=this.a
if(!q.I(a))return r
s=q.D(0,a)
q.j(0,a,s)
return s==null?r:t.G.a(B.e.av(B.e.a7(s,r),r))},
jX(a,b){var s=this.a
if(s.a>=256)s.D(0,new A.a7(s,A.o(s).i("a7<1>")).gC(0))
s.j(0,a,b==null?null:A.bv(b,t.N,t.X))},
uM(a){var s,r,q,p
if(a.a===0)this.a.ai(0)
else for(s=A.uQ(a,a.r,A.o(a).c),r=this.a,q=s.$ti.c;s.l();){p=s.d
r.D(0,p==null?q.a(p):p)}}}
A.jS.prototype={
b8(a){return this.vA(a)},
vA(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i
var $async$b8=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=new A.jl(q.c).lC(a)
l=q.b
k=a.a
s=2
return A.a(l.aH("lp_stores",1,"store = ?",[k]),$async$b8)
case 2:j=c
i=J.J(j)
s=i.gB(j)?3:5
break
case 3:s=6
return A.a(l.P(m.b),$async$b8)
case 6:i=m.c,p=i.length,o=0
case 7:if(!(o<i.length)){s=9
break}s=10
return A.a(l.P(i[o]),$async$b8)
case 10:case 8:i.length===p||(0,A.E)(i),++o
s=7
break
case 9:i=m.d,p=i.length,o=0
case 11:if(!(o<i.length)){s=13
break}s=14
return A.a(l.P(i[o]),$async$b8)
case 14:case 12:i.length===p||(0,A.E)(i),++o
s=11
break
case 13:i=a.b
s=15
return A.a(l.an(0,"lp_stores",A.m(["store",k,"table_name",k,"schema_ver",i,"definition_json",B.e.a7(a.ao(),null),"created_at",q.Q.$0()],t.N,t.X)),$async$b8)
case 15:s=16
return A.a(A.hf(l,0,0,"create:"+k,i),$async$b8)
case 16:s=4
break
case 5:n=A.af(J.a1(i.gC(j),"schema_ver"))
i=a.b
if(n>i)throw A.b(new A.hB('Store "'+k+'" on disk is schema v'+n+", but this package supports v"+i+"."))
s=n<i?17:18
break
case 17:s=19
return A.a(A.ey(q,a,n),$async$b8)
case 19:case 18:s=20
return A.a(l.F("lp_stores",A.m(["definition_json",B.e.a7(a.ao(),null),"schema_ver",i],t.N,t.X),"store = ?",[k]),$async$b8)
case 20:case 4:q.ch.j(0,k,new A.kz(a,new A.qa(A.G(t.N,t.b))))
return A.e(null,r)}})
return A.f($async$b8,r)},
af(a){var s=this.ch.h(0,a)
if(s==null)throw A.b(A.w('No store "'+a+'" registered in this LocalPocket.'))
return s},
dN(a,b,c){var s
if(A.rg(this)!=null)A.y(A.w(u.L))
s=this.d
s===$&&A.u()
return s.bU(new A.pl(this,a,b,c),c)},
X(a,b){return this.dN(a,B.x,b)},
de(a,b,c){return this.rd(a,b,c,c)},
rd(a4,a5,a6,a7){var s=0,r=A.h(a7),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$de=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a2=new A.ky()
$.mn()
a2.aD()
l=a2
k=a5===B.x&&m.a!==":memory:"
s=k&&m.cx!=="FULL"?3:4
break
case 3:s=5
return A.a(m.mi("PRAGMA synchronous=FULL"),$async$de)
case 5:m.cx="FULL"
case 4:p=6
j=A.l([],t.aL)
i=A.l([],t.eb)
s=9
return A.a(m.b.X(new A.ph(m,j,i,a4,a6),a6),$async$de)
case 9:h=a9
for(e=j,d=e.length,c=m.a$,b=m.ch,a=0;a<e.length;e.length===d||(0,A.E)(e),++a){g=e[a]
a0=b.h(0,g.a)
if(a0!=null)a0.d.uM(g.b)
c.tV(g)}for(e=i,d=e.length,a=0;a<e.length;e.length===d||(0,A.E)(e),++a){f=e[a]
c.tW(f)}q=h
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
return A.a(m.mi("PRAGMA synchronous=NORMAL"),$async$de)
case 16:m.cx="NORMAL"
p=2
s=15
break
case 13:p=12
a3=o.pop()
s=15
break
case 12:s=2
break
case 15:case 11:e=m.e
d=l.gtT();++e.a
e.b+=d
s=n.pop()
break
case 8:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$de,r)},
mi(a){++this.e.c
return this.b.aX(a,B.v)},
mj(a,b){++this.e.d
return this.b.al(a,b)},
dq(a){return this.rW(a)},
rV(){return this.dq(null)},
rW(a){var s=0,r=A.h(t.H),q=this,p
var $async$dq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.b
s=a==null?2:4
break
case 2:s=5
return A.a(p.P("ANALYZE"),$async$dq)
case 5:s=3
break
case 4:s=6
return A.a(p.P("ANALYZE "+('"'+A.x(a,'"','""')+'"')),$async$dq)
case 6:case 3:return A.e(null,r)}})
return A.f($async$dq,r)},
eT(){var s=0,r=A.h(t.H),q=this
var $async$eT=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.c.c?2:3
break
case 2:s=4
return A.a(q.b.P("PRAGMA wal_checkpoint(TRUNCATE)"),$async$eT)
case 4:case 3:return A.e(null,r)}})
return A.f($async$eT,r)},
eS(a){return this.vZ(a)},
vZ(a){var s=0,r=A.h(t.H),q=this,p
var $async$eS=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.b
s=a!=null?2:4
break
case 2:s=5
return A.a(p.P("PRAGMA incremental_vacuum("+A.q(a)+")"),$async$eS)
case 5:s=3
break
case 4:s=6
return A.a(p.P("VACUUM"),$async$eS)
case 6:case 3:return A.e(null,r)}})
return A.f($async$eS,r)},
eF(a){return this.vi(a)},
vh(){return this.eF(1e4)},
vi(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$eF=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.X(new A.pk(o,a),t.P),$async$eF)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eF,r)},
cV(a){return this.vK(a)},
vK(a){var s=0,r=A.h(t.H),q=this,p
var $async$cV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.ch,p=new A.cd(p,p.r,p.e,A.o(p).i("cd<1>"))
case 2:if(!p.l()){s=3
break}s=4
return A.a(q.t9(p.d,a),$async$cV)
case 4:s=2
break
case 3:s=5
return A.a(q.vh(),$async$cV)
case 5:s=6
return A.a(q.eT(),$async$cV)
case 6:s=7
return A.a(q.rV(),$async$cV)
case 7:return A.e(null,r)}})
return A.f($async$cV,r)},
dt(a,b,c){return this.ta(a,b,c)},
t9(a,b){return this.dt(a,null,b)},
ta(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i
var $async$dt=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:k={}
j=b==null?p.Q.$0():b
i=j-B.b.O(c.a,1000)
k.a=0
o=p.af(a).a
n=t.P,m=p.b
case 3:s=5
return A.a(m.al("SELECT b.id FROM "+('"'+A.x(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",i,250]),$async$dt)
case 5:l=e
if(J.c8(l)){s=4
break}s=6
return A.a(p.X(new A.pj(k,p,l,a,i,o),n),$async$dt)
case 6:s=3
break
case 4:q=k.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dt,r)},
p(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$p=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.CW){s=1
break}n.CW=!0
m=n.a$
m.a.p()
m.b.p()
p=4
s=7
return A.a(n.b.P("PRAGMA optimize"),$async$p)
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
A.pl.prototype={
$0(){var s=this
return s.a.de(s.b,s.c,s.d)},
$S(){return this.d.i("A<0>()")}}
A.ph.prototype={
$1(a){return this.mx(a,this.e)},
mx(a,b){var s=0,r=A.h(b),q,p=this,o,n,m
var $async$$1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.bM(p.a,a,p.b,p.c)
n=p.e
m=t.X
q=A.AW(new A.pg(p.d,o,n),null,A.m([$.y2(),o],m,m),n.i("A<0>"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S(){return this.e.i("A<0>(nG)")}}
A.pg.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("A<0>()")}}
A.pk.prototype={
$1(a){return this.mz(a)},
mz(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=J
s=2
return A.a(l.aN("SELECT o.store, o.record_id FROM lp_outbox o LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.record_id IS NULL OR s.sync_state = 'clean'"),$async$$1)
case 2:p=k.K(c),o=q.a
case 3:if(!p.l()){s=4
break}n=p.gn()
s=5
return A.a(l.a3("lp_outbox","store = ? AND record_id = ?",[A.H(n.h(0,"store")),A.H(n.h(0,"record_id"))]),$async$$1)
case 5:++o.a
s=3
break
case 4:k=A
j=J
i=J
s=6
return A.a(l.aN("SELECT COUNT(*) c FROM lp_outbox"),$async$$1)
case 6:m=k.aO(j.a1(i.bV(c),"c"))
if(m==null)m=0
p=q.b
s=m>p?7:8
break
case 7:k=J
s=9
return A.a(l.al("SELECT o.store, o.record_id FROM lp_outbox o JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.sync_state NOT IN ('dirty', 'conflict', 'blocked') ORDER BY o.created_at ASC LIMIT ?",[m-p]),$async$$1)
case 9:p=k.K(c)
case 10:if(!p.l()){s=11
break}n=p.gn()
s=12
return A.a(l.a3("lp_outbox","store = ? AND record_id = ?",[A.H(n.h(0,"store")),A.H(n.h(0,"record_id"))]),$async$$1)
case 12:++o.a
s=10
break
case 11:case 8:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.pj.prototype={
$1(a){return this.my(a)},
my(a3){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1)return A.d(a5,r)
for(;;)switch(s){case 0:a1=a3.b
p=J.K(q.c),o=q.a,n=q.d,m=t.N,l=a3.c,k=a3.a.e,j=q.e,i=q.f,h=q.b,g=h.y,h=h.z,f=a3.d
case 2:if(!p.l()){s=3
break}e=A.H(p.gn().h(0,"id"))
a2=J
s=4
return A.a(a1.al("SELECT b.id FROM "+('"'+A.x(n,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? LIMIT 1",[n,e,"clean",j]),$async$$1)
case 4:if(a2.c8(a5)){s=2
break}s=5
return A.a(a1.al("SELECT * FROM "+('"'+A.x(n,'"','""')+'"')+" WHERE id = ? LIMIT 1",[e]),$async$$1)
case 5:d=a5
c=J.J(d)
b=c.gV(d)?A.cp(i,c.gC(d),g,h):null
s=6
return A.a(A.c7(a1,n,e,!0),$async$$1)
case 6:s=7
return A.a(a1.a3(n,"id = ?",[e]),$async$$1)
case 7:c=A.am([e],m)
l.push(new A.a2(n,c))
k.e+=c.a
if(b!=null){c=A.o(b).i("a7<1>")
a=c.i("bf<n.E>")
a0=A.jP(a.i("n.E"))
a0.J(0,new A.bf(new A.a7(b,c),new A.pi(),a))
f.push(new A.aK(n,e,B.U,B.ay,b,null,a0))}++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.pi.prototype={
$1(a){return a!=="id"},
$S:11}
A.ly.prototype={}
A.pw.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:124}
A.px.prototype={
$2(a,b){return B.b.T(a.a,b.a)},
$S:126}
A.pu.prototype={
$1(a){return a.h(0,"name")},
$S:33}
A.pv.prototype={
$1(a){return this.mA(a)},
mA(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=J.K(q.a),o=q.b,n=q.d
case 2:if(!p.l()){s=3
break}m=A.cp(o,p.gn(),null,null)
l=A.H(m.h(0,"id"))
s=4
return A.a(a.an(0,n,A.dm(o,J.v(m.h(0,"archived"),!0),null,null,l,m)),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:130}
A.ka.prototype={
vr(a){if(a>this.f)this.f=a}}
A.qz.prototype={}
A.bI.prototype={
ab(){return"FieldKind."+this.b}}
A.aZ.prototype={
gk_(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.a9===s||B.B===s||B.I===s||B.J===s||B.C===s){r="TEXT"
break A}if(B.Y===s||B.A===s||B.a_===s){r="INTEGER"
break A}if(B.Z===s){r="REAL"
break A}throw A.b(new A.kh("None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details."))}return r},
ao(){var s,r=this,q=A.G(t.N,t.X)
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
A.oa.prototype={
$0(){var s,r=null,q=this.a,p=A.es(B.bR,A.H(q.h(0,"kind"))),o=A.H(q.h(0,"name")),n=J.v(q.h(0,"required"),!0),m=J.v(q.h(0,"encrypted"),!0)
switch(p.a){case 0:return new A.aZ(o,B.a9,n,J.v(q.h(0,"uniqueWhenActive"),!0),m,r,r,!1)
case 1:return new A.aZ(o,B.Y,n,!1,m,r,r,!1)
case 2:return new A.aZ(o,B.Z,n,!1,m,r,r,!1)
case 3:return new A.aZ(o,B.A,n,!1,!1,r,r,!1)
case 4:return new A.aZ(o,B.a_,n,!1,!1,r,r,!1)
case 5:s=t.N
return new A.aZ(o,B.B,n,!1,!1,A.cZ(J.em(t.j.a(q.h(0,"enumValues")),s),s),r,!1)
case 6:return new A.aZ(o,B.I,!1,!1,m,r,r,!1)
case 7:return new A.aZ(o,B.J,!1,!1,m,r,r,!1)
case 8:return new A.aZ(o,B.C,!1,!1,!1,r,A.H(q.h(0,"refTo")),J.v(q.h(0,"enforceFk"),!0))}},
$S:131}
A.h_.prototype={
ab(){return"IndexScope."+this.b}}
A.cU.prototype={
ao(){return A.m(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.oS.prototype={
$0(){var s=this.a
return new A.cU(J.em(t.j.a(s.h(0,"columns")),t.N),J.v(s.h(0,"unique"),!0),A.es(B.bN,A.H(s.h(0,"scope"))))},
$S:136}
A.fW.prototype={
ao(){return A.m(["fields",this.a],t.N,t.X)}}
A.ol.prototype={
$0(){return new A.fW(J.em(t.j.a(this.a.h(0,"fields")),t.N))},
$S:137}
A.bK.prototype={
ao(){var s,r,q,p=A.l([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.E)(s),++q)p.push(s[q].ao())
return A.m(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.qR.prototype={
$0(){var s,r=this.a,q=A.af(r.h(0,"toVersion")),p=J.v(r.h(0,"destructive"),!0),o=A.l([],t.mK)
r=t.lH.a(r.h(0,"addedFields"))
r=J.K(r==null?B.aI:r)
s=t.G
while(r.l())o.push(A.yy(s.a(r.gn())))
return new A.bK(q,p,o)},
$S:139}
A.nc.prototype={}
A.bH.prototype={
gj9(){var s,r,q,p,o=this,n=$.B7()
A.yx(o)
s=n.a.get(o)
if(s==null){s=A.b0(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.E)(r),++p)s.t(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
ao(){var s,r,q,p,o,n,m=this,l=t.N,k=t.X,j=A.G(l,k)
j.j(0,"name",m.a)
j.j(0,"version",m.b)
s=t.d
r=A.l([],s)
for(q=m.c,p=q.length,o=0;o<q.length;q.length===p||(0,A.E)(q),++o)r.push(q[o].ao())
j.j(0,"fields",r)
r=A.l([],s)
for(q=m.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.E)(q),++o){n=q[o]
r.push(A.m(["columns",n.a,"unique",n.b,"scope",n.c.b],l,k))}j.j(0,"indexes",r)
j.j(0,"keepUnsyncedArchives",m.r)
j.j(0,"prefetchFiles",m.f)
r=m.w
if(r!=null)j.j(0,"fts",A.m(["fields",r.a],l,k))
l=A.l([],s)
for(k=m.x,s=k.length,o=0;o<k.length;k.length===s||(0,A.E)(k),++o)l.push(k[o].ao())
j.j(0,"migrations",l)
return j}}
A.mT.prototype={
$0(){var s,r,q,p,o,n,m=this.a,l=A.H(m.h(0,"name")),k=A.af(m.h(0,"version")),j=A.l([],t.mK)
for(s=t.j,r=J.K(s.a(m.h(0,"fields"))),q=t.G;r.l();)j.push(A.yy(q.a(r.gn())))
r=A.l([],t.mr)
for(s=J.K(s.a(m.h(0,"indexes")));s.l();)r.push(A.Cw(q.a(s.gn())))
s=J.v(m.h(0,"keepUnsyncedArchives"),!0)
p=J.v(m.h(0,"prefetchFiles"),!0)
o=t.f.b(m.h(0,"fts"))?A.Co(q.a(m.h(0,"fts"))):null
n=A.l([],t.c0)
m=t.lH.a(m.h(0,"migrations"))
m=J.K(m==null?B.aI:m)
while(m.l())n.push(A.Dg(q.a(m.gn())))
return new A.bH(l,k,j,r,p,s,o,n,this.b.i("bH<0>"))},
$S(){return this.b.i("bH<0>()")}}
A.dO.prototype={
ab(){return"MutationAction."+this.b}}
A.eo.prototype={
gbm(){var s=this.c
return s==null?this.a.b:s},
gaY(){return this.b.a.a},
ic(){},
hE(a){var s=this
if(s.d!=null)return s.qm(B.aL,a)
return s.a.dN(new A.mZ(s,a),B.x,t.H)},
m4(a,b){var s=this
if(s.d!=null)return s.dh(a,b)
return s.a.dN(new A.mX(s,a,b),B.x,t.H)},
lv(a){var s=this
if(s.d!=null)return s.kT(B.y,a)
return s.a.dN(new A.mW(s,a),B.x,t.H)},
md(a){var s=this
if(s.d!=null)return s.kT(B.D,a)
return s.a.dN(new A.n_(s,a),B.x,t.H)},
m6(a){var s=this
if(s.d!=null)return s.dj(a)
return s.a.dN(new A.mY(s,a),B.x,t.H)},
dj(a){return this.qQ(a)},
qQ(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dj=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.ic()
s=2
return A.a(q.c5(a),$async$dj)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.c7(n,m,a,!0),$async$dj)
case 3:s=4
return A.a(n.a3(m,"id = ?",[a]),$async$dj)
case 4:l=t.N
o.a0(new A.a2(m,A.am([a],l)))
if(p!=null){l=A.jQ(p.gS(),l)
l.D(0,"id")
o.d.push(new A.aK(m,a,B.U,B.ay,p,null,l))}return A.e(null,r)}})
return A.f($async$dj,r)},
dh(a,b){return this.qG(a,b)},
qG(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$dh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.ic()
s=3
return A.a(p.gbm().al("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$dh)
case 3:o=d
n=J.J(o)
if(n.gV(o)){m=n.gC(o)
l=A.rc(m)
k=m.h(0,"o_kind")!=null?A.xb(A.m(["store",m.h(0,"o_store"),"record_id",m.h(0,"o_record_id"),"kind",m.h(0,"o_kind"),"payload_json",m.h(0,"o_payload_json"),"base_updated",m.h(0,"o_base_updated"),"base_hash",m.h(0,"o_base_hash"),"dirty_fields",m.h(0,"o_dirty_fields"),"op_id",m.h(0,"o_op_id"),"created_at",m.h(0,"o_created_at"),"updated_at",m.h(0,"o_updated_at"),"depends_on_op",m.h(0,"o_depends_on_op")],t.N,t.X)):null}else{l=null
k=null}s=l!=null&&l.w===B.a2&&k!=null?4:5
break
case 4:s=6
return A.a(p.e2(a,b,l,k),$async$dh)
case 6:s=1
break
case 5:s=7
return A.a(p.cB(a,b,k,l),$async$dh)
case 7:case 1:return A.e(q,r)}})
return A.f($async$dh,r)},
cB(a,b,c,d){return this.om(a,b,c,d)},
om(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cB=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:s=2
return A.a(q.c5(a),$async$cB)
case 2:m=f
if(m==null)throw A.b(A.xh("No record "+q.gaY()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.dJ(m,p,o)
n.J(0,b)
o=A.G(p,o)
o.j(0,"id",a)
o.J(0,n)
s=3
return A.a(q.aT(B.K,m,a,c,d,o),$async$cB)
case 3:return A.e(null,r)}})
return A.f($async$cB,r)},
e2(a,b,c,d){return this.qH(a,b,c,d)},
qH(a0,a1,a2,a3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$e2=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:b=null
try{b=B.e.av(a3.d,null)}catch(a4){b=null}if(!t.G.b(b)){q=n.cB(a0,a1,a3,a2)
s=1
break}i=b.h(0,"id")
if(i!=null&&!J.v(i,a0)){q=n.cB(a0,a1,a3,a2)
s=1
break}h=t.N
g=t.X
f=A.dJ(b,h,g)
f.J(0,a1)
m=f
J.bT(m,"id",a0)
f=n.b
e=f.a
d=A.ak(A.aX(e,m))
g=A.dJ(m,h,g)
g.D(0,"id")
n.ln(a0,g,d)
g=n.a
l=A.dm(e,J.v(J.a1(m,"archived"),!0),g.y,g.z,a0,m)
p=4
s=7
return A.a(n.gbm().F(e.a,l,"id = ?",[a0]),$async$e2)
case 7:p=2
s=6
break
case 4:p=3
a=o.pop()
k=A.M(a)
h=A.B1(k,m)
throw A.b(h)
s=6
break
case 3:s=2
break
case 6:c=n.kz(b,m,B.K)
g=g.as
g===$&&A.u()
s=8
return A.a(g.b6(B.K,null,c,n.gbm(),a0,m,b,a3,d,l,a2,f),$async$e2)
case 8:g=n.d
f=g==null
if(!f)g.a0(new A.a2(e.a,A.am([a0],h)))
if(!f){h=b
f=A.p6(c,A.a8(c).c)
g.d.push(new A.aK(e.a,a0,B.U,B.t,h,m,f))}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e2,r)},
aT(a,b,c,d,e,f){return this.qn(a,b,c,d,e,f)},
kT(a,b){var s=null
return this.aT(a,s,b,s,s,s)},
qm(a,b){var s=null
return this.aT(a,s,s,s,s,b)},
qn(b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$aT=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:n.ic()
m=null
l=b3
k=null
s=b2===B.aL?3:5
break
case 3:h=A.ag(b7.h(0,"id"))
if(h==null)h=A.mh()
g=$.y9()
if(!g.b.test(h))throw A.b(A.bm('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
f=l
s=f==null?6:8
break
case 6:s=9
return A.a(n.c5(m),$async$aT)
case 9:s=7
break
case 8:b9=f
case 7:l=b9
k=n.kP(b7,m)
b2=l==null?B.c5:B.K
s=4
break
case 5:s=b2===B.K?10:12
break
case 10:b4.toString
m=b4
f=l
s=f==null?13:15
break
case 13:s=16
return A.a(n.c5(m),$async$aT)
case 16:s=14
break
case 15:b9=f
case 14:l=b9
if(l==null)throw A.b(A.xh("No record "+n.gaY()+"/"+A.q(m)+" to update."))
b7.toString
k=n.kP(b7,m)
s=11
break
case 12:b4.toString
m=b4
f=l
s=f==null?17:19
break
case 17:s=20
return A.a(n.c5(m),$async$aT)
case 20:s=18
break
case 19:b9=f
case 18:l=b9
if(l==null)throw A.b(A.xh("No record "+n.gaY()+"/"+A.q(m)+" to archive/restore."))
g=A.dJ(l,t.N,t.X)
g.j(0,"archived",b2===B.y)
k=g
case 11:case 4:g=n.b
e=g.a
d=t.N
c=A.dJ(k,d,t.X)
if(J.av(m)!==0)c.j(0,"id",m)
b=A.ak(A.aX(e,c))
n.ln(m,k,b)
s=l==null?21:23
break
case 21:a=null
s=22
break
case 23:s=b6==null?24:26
break
case 24:c=n.a.as
c===$&&A.u()
s=27
return A.a(c.by(n.gbm(),e.a,m),$async$aT)
case 27:c=b9
a=c
s=25
break
case 26:a=b6
case 25:case 22:s=l==null?28:30
break
case 28:a0=null
s=29
break
case 30:s=b5==null?31:33
break
case 31:c=n.a.as
c===$&&A.u()
s=34
return A.a(c.dI(n.gbm(),e.a,m),$async$aT)
case 34:c=b9
a0=c
s=32
break
case 33:a0=b5
case 32:case 29:c=a==null
a1=!c
if(a1&&a.w===B.P)throw A.b(A.yq("Record "+n.gaY()+"/"+A.q(m)+u.W))
if(l!=null)a2=!a1||a.w===B.r
else a2=!1
if(l!=null&&a2){a3=A.ak(A.aX(e,l))
a1=A.az(B.l.v(B.h.v(a3)).a)
a4=new A.mD(a3,a1,c?null:a.c)}else a4=null
c=m
a1=k
a5=n.a
j=A.dm(e,J.v(J.a1(k,"archived"),!0),a5.y,a5.z,c,a1)
p=36
c=e.a
s=l==null?39:41
break
case 39:s=42
return A.a(n.gbm().an(0,c,j),$async$aT)
case 42:s=40
break
case 41:s=43
return A.a(n.gbm().F(c,j,"id = ?",[m]),$async$aT)
case 43:case 40:p=2
s=38
break
case 36:p=35
b1=o.pop()
i=A.M(b1)
g=A.B1(i,k)
throw A.b(g)
s=38
break
case 35:s=2
break
case 38:a7=n.kz(l,k,b2)
c=a5.as
c===$&&A.u()
a1=n.gbm()
a5=m
a8=l
s=44
return A.a(c.b6(b2,a4,a7,a1,a5,k,a8,a0,b,j,a,g),$async$aT)
case 44:switch(b2.a){case 1:case 0:a9=l==null?B.ax:B.t
break
case 2:a9=B.t
break
case 3:a9=B.bh
break
case 4:a9=B.bi
break
default:a9=null}if(b2===B.y||b2===B.D)b0=A.am(["archived"],d)
else if(l==null){g=k
c=A.o(g).i("a7<1>")
a1=c.i("bf<n.E>")
b0=A.jQ(new A.bf(new A.a7(g,c),new A.mV(),a1),a1.i("n.E"))}else b0=A.p6(a7,A.a8(a7).c)
g=n.d
c=g==null
if(!c){a1=m
a5=l
a8=k
g.d.push(new A.aK(e.a,a1,B.U,a9,a5,a8,b0))}if(!c)g.a0(new A.a2(e.a,A.am([m],d)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aT,r)},
kP(a,b){var s,r,q,p=A.G(t.N,t.X)
for(s=a.gbL(),s=s.gu(s);s.l();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.m7("archived",new A.mU())
return p},
kz(a,b,c){var s,r,q,p,o
if(a==null)return B.bW
s=t.N
r=A.b0(s)
s=A.jQ(a.gS(),s)
s.J(0,new A.a7(b,A.o(b).i("a7<1>")))
for(s=A.uQ(s,s.r,A.o(s).c),q=s.$ti.c;s.l();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.n.ae(a.h(0,p),b.h(0,p)))r.t(0,p)}o=A.P(r,r.$ti.c)
B.c.b0(o)
return o},
c5(a){return this.qZ(a)},
qZ(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$c5=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.gbm().al('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$c5)
case 3:m=c
l=J.J(m)
if(l.gB(m)){q=null
s=1
break}o=p.a
q=A.cp(n,l.gC(m),o.y,o.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c5,r)},
bW(a){return this.mV(a)},
mV(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h
var $async$bW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.d==null
if(h&&p.b.d.a.I(a)){q=p.b.d.bW(a)
s=1
break}o=p.b
n=o.a
m=n.a
s=3
return A.a(p.gbm().al("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+m+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[m,a]),$async$bW)
case 3:l=c
m=J.J(l)
if(m.gB(l)){if(h)o.d.jX(a,null)
q=null
s=1
break}k=m.gC(l)
m=p.a
j=A.cp(n,k,m.y,m.z)
i=A.aO(k.h(0,"lp_schema_ver"))
if(i==null)i=1
m=n.b
if(i<m)j=A.FC(n,j,i,m)
if(h)o.d.jX(a,j)
q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bW,r)},
ln(a,b,c){var s,r,q,p,o,n,m,l
for(s=this.b.a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.E)(s),++q){p=s[q]
o=p.a
n=b.h(0,o)
if(p.c&&n==null)throw A.b(A.bm('Field "'+o+'" is required.',o))
if(n==null)continue
m=A.AK(p,n)
if(m!=null)throw A.b(A.bm(A.C6(p,m),o))}l=B.h.v(c).length
s=this.a.f
if(l>s)throw A.b(A.bm("Document exceeds max size ("+l+" > "+s+" bytes).",null))}}
A.mZ.prototype={
$1(a){return a.cc(this.a.b.a.a).hE(this.b)},
$S:6}
A.mX.prototype={
$1(a){return a.cc(this.a.b.a.a).m4(this.b,this.c)},
$S:6}
A.mW.prototype={
$1(a){return a.cc(this.a.b.a.a).lv(this.b)},
$S:6}
A.n_.prototype={
$1(a){return a.cc(this.a.b.a.a).md(this.b)},
$S:6}
A.mY.prototype={
$1(a){return a.cc(this.a.b.a.a).m6(this.b)},
$S:6}
A.mV.prototype={
$1(a){return a!=="id"},
$S:11}
A.mU.prototype={
$0(){return!1},
$S:41}
A.lf.prototype={}
A.bM.prototype={
a0(a){this.c.push(a)
this.a.e.e+=a.b.a},
cc(a){var s=this.a
return new A.eo(s,s.af(a),this.b,this)}}
A.ho.prototype={
jZ(a){var s
if(a.a!==this.w.a.a)return!1
s=a.b
if(s.a!==0&&!s.E(0,this.x))return!1
return!0},
bN(){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$bN=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.w.a
s=3
return A.a(o.b.aH(n.a,1,"id = ?",[p.x]),$async$bN)
case 3:m=b
l=J.J(m)
if(l.gB(m)){q=null
s=1
break}q=A.cp(n,l.gC(m),o.y,o.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bN,r)},
j5(a){return a==null?"<null>":A.az(B.l.v(B.h.v(A.ak(a))).a)},
m2(a){var s=this.y
return s==null?null:s.t(0,a)},
jw(a,b){var s=this.y
return s==null?null:s.bs(a,b)},
nd(){var s=this.y=A.xl(this.gtN(),new A.pD(this),null,!1,t.b)
return new A.b5(s,A.o(s).i("b5<1>"))},
ha(){this.ng()
var s=this.y
if(s!=null)s.p()}}
A.pD.prototype={
$0(){var s=this.a
s.aD()
s.ec()},
$S:0}
A.bW.prototype={
jw(a,b){},
aD(){var s=this.a.a$.a
this.c=new A.aV(s,A.o(s).i("aV<1>")).aM(this.gqr())},
hr(){return this.uK(A.o(this).i("bW.T"))},
uK(a){var s=0,r=A.h(a),q,p=this,o
var $async$hr=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bN(),$async$hr)
case 3:o=c
p.r=p.j5(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hr,r)},
qs(a){var s,r=this
if(!r.jZ(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.A()
r.d=A.dY(r.b,r.glo())},
ec(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g
var $async$ec=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.e=!0
i=n.a.e;++i.w
q=3
s=6
return A.a(n.bN(),$async$ec)
case 6:m=b
l=n.j5(m)
if(!J.v(l,n.r)){n.r=l;++i.x
n.m2(m)}o.push(5)
s=4
break
case 3:q=2
g=p.pop()
k=A.M(g)
j=A.ab(g)
n.jw(k,j)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.e=!1
if(n.f){n.f=!1
i=n.d
if(i!=null)i.A()
n.d=A.dY(n.b,n.glo())}s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$ec,r)},
ha(){var s=this.d
if(s!=null)s.A()
s=this.c
if(s!=null)s.A()}}
A.ta.prototype={
bU(a,b){var s,r=this
r.c.$1(++r.b)
s=new A.r($.t,b.i("r<0>"))
r.a=r.a.bh(new A.tb(r,new A.aM(s,b.i("aM<0>")),a),t.H)
return s}}
A.tb.prototype={
$1(a){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
h=n.b
s=6
return A.a(n.c.$0(),$async$$1)
case 6:h.aq(c)
o.push(5)
s=4
break
case 3:q=2
i=p.pop()
m=A.M(i)
l=A.ab(i)
n.b.bK(m,l)
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
A.mE.prototype={}
A.kA.prototype={}
A.wB.prototype={
$1(a){return B.c.J(this.a,a)},
$S:62}
A.fS.prototype={}
A.oc.prototype={
bc(){var s=0,r=A.h(t.k4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bc=A.c(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)switch(s){case 0:b2=n.d
if(b2==null){q=B.bo
s=1
break}m=0
l=0
k=0
j=!1
a2=n.a
a3=a2.at
a3===$&&A.u()
b5=J
s=3
return A.a(a3.ek(25),$async$bc)
case 3:a4=b5.K(b7),a5=n.c,a6=a5.ay
case 4:if(!a4.l()){s=5
break}i=a4.gn()
p=7
s=i.e===B.aM?10:12
break
case 10:s=13
return A.a(n.c4(i,b2),$async$bc)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.m1(i.b),$async$bc)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.aN?17:18
break
case 17:s=19
return A.a(n.e3(i),$async$bc)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.m1(i.b),$async$bc)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.M(b3)
j=!0
e=i.w+1
d=a5.lI(e)
a8=i.b
a9=J.ao(f)
b0=a6.$0()
s=23
return A.a(a3.v1(a8,a9,e,b0+B.b.O(d.a,1000)),$async$bc)
case 23:s=9
break
case 6:s=2
break
case 9:s=4
break
case 5:a3=a2.ch,a4=new A.cd(a3,a3.r,a3.e,A.o(a3).i("cd<1>")),a2=a2.b
case 24:if(!a4.l()){s=25
break}c=a4.d
a5=c
b1=a3.h(0,a5)
if(b1==null)A.y(A.w('No store "'+a5+'" registered in this LocalPocket.'))
s=b1.a.f?26:27
break
case 26:b5=J
s=28
return A.a(a2.dH("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$bc)
case 28:a5=b5.K(b7)
case 29:if(!a5.l()){s=30
break}b=a5.gn()
p=32
a=A.H(J.a1(b,"ref_id"))
a0=A.H(J.a1(b,"record_id"))
a1=A.ag(J.a1(b,"remote_name"))
s=a1!=null?35:36
break
case 35:s=37
return A.a(n.cK(a0,a,a1,c),$async$bc)
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
case 25:q=new A.fS(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bc,r)},
c4(a,b){return this.qP(a,b)},
qP(a1,a2){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$c4=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:e={}
d=t.G.a(B.e.av(a1.f,null))
c=A.H(d.h(0,"ref_id"))
b=A.H(d.h(0,"hash"))
a=A.ag(d.h(0,"name"))
if(a==null)a=b+".bin"
s=3
return A.a(a2.cf(b),$async$c4)
case 3:if(!a4)throw A.b(A.w("Blob for hash "+b+" not found in store"))
s=4
return A.a(a2.bY(b),$async$c4)
case 4:l=a4
if(l==null)throw A.b(A.w("Blob size for hash "+b+" is unavailable"))
m=null
p=6
k=n.b.z
k===$&&A.u()
s=9
return A.a(k.bA(a1.d),$async$c4)
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
if(B.a.N(f,B.a.q(b,0,10))||B.a.N(f,a)){i=f
break}}e.a=null
s=i!=null?10:12
break
case 10:e.a=i
s=11
break
case 12:s=13
return A.a(n.b.vX(a1.d,A.m([a,new A.eO(a,l,new A.oe(a2,b))],t.N,t.h3)),$async$c4)
case 13:k=a4.e
e.a=k.length!==0?B.c.gZ(k):a
case 11:s=14
return A.a(n.a.X(new A.of(e,c,a1),t.P),$async$c4)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c4,r)},
e3(a){return this.qO(a)},
qO(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$e3=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.G.a(B.e.av(a.f,null))
n=A.H(o.h(0,"ref_id"))
m=A.ag(o.h(0,"remote_name"))
l=A.H(o.h(0,"hash"))
s=m!=null?3:4
break
case 3:s=5
return A.a(p.b.vV(a.d,A.l([m],t.s)),$async$e3)
case 5:case 4:s=6
return A.a(p.a.X(new A.od(n,l,a),t.P),$async$e3)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e3,r)},
cK(a,b,c,d){return this.tP(a,b,c,d)},
tP(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$cK=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=p.d
l=p.b.z
l===$&&A.u()
k=m
s=4
return A.a(l.hb(c,a,null),$async$cK)
case 4:s=3
return A.a(k.hE(f),$async$cK)
case 3:o=f
s=5
return A.a(m.bY(o),$async$cK)
case 5:n=f
if(n==null)n=0
s=6
return A.a(p.a.X(new A.og(o,n,p.c.ay.$0(),c,b,d,a),t.P),$async$cK)
case 6:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cK,r)},
cQ(a,b,c,d){return this.v6(a,b,c,d)},
v6(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$cQ=A.c(function(e,a0){if(e===1)return A.d(a0,r)
for(;;)switch(s){case 0:s=2
return A.a(a.dH("lp_file_refs","store = ? AND record_id = ?",[d,b]),$async$cQ)
case 2:j=a0
i=A.p6(c,A.a8(c).c)
h=J.aw(j)
g=t.lS
f=A.jQ(new A.by(h.cj(j,new A.oh(),t.v),g),g.i("n.E"))
g=c.length,q=t.N,p=t.X,o=0
case 3:if(!(o<c.length)){s=5
break}n=c[o]
s=!f.E(0,n)?6:7
break
case 6:s=8
return A.a(a.cO(0,"lp_file_refs",A.m(["ref_id",A.mh(),"store",d,"record_id",b,"field","imgs","hash","unknown_"+n,"remote_name",n,"state","remote_only"],q,p),B.bk),$async$cQ)
case 8:case 7:case 4:c.length===g||(0,A.E)(c),++o
s=3
break
case 5:h=h.gu(j)
case 9:if(!h.l()){s=10
break}g=h.gn()
m=A.ag(g.h(0,"remote_name"))
if(m==null){s=9
break}if(i.E(0,m)){s=9
break}l=A.H(g.h(0,"state"))
if(l==="pending_remove"||l==="pending_upload"){s=9
break}s=11
return A.a(a.a3("lp_file_refs","ref_id = ?",[g.h(0,"ref_id")]),$async$cQ)
case 11:k=A.ag(g.h(0,"hash"))
s=k!=null&&k.length!==0&&!B.a.N(k,"unknown_")?12:13
break
case 12:s=14
return A.a(a.aX(u.y,[k]),$async$cQ)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$cQ,r)}}
A.oe.prototype={
$0(){return this.a.bw(this.b)},
$S:63}
A.of.prototype={
$1(a){return this.mr(a)},
mr(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.F("lp_file_refs",A.m(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.a0(new A.a2(p.c,A.am([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.od.prototype={
$1(a){return this.mq(a)},
mq(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.a3("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aX(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.a0(new A.a2(p.c,A.am([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.og.prototype={
$1(a){return this.ms(a)},
ms(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.fy(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.F("lp_file_refs",A.m(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.a0(new A.a2(q.f,A.am([q.r],p)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.oh.prototype={
$1(a){return A.ag(a.h(0,"remote_name"))},
$S:64}
A.b_.prototype={}
A.ob.prototype={
$0(){var s,r=this.a,q=A.H(r.h(0,"ref_id")),p=A.H(r.h(0,"store")),o=A.H(r.h(0,"record_id")),n=A.H(r.h(0,"field")),m=A.H(r.h(0,"hash")),l=A.ag(r.h(0,"remote_name")),k=A.H(r.h(0,"state")),j=A.aO(r.h(0,"next_retry_at"))
if(j==null)j=0
s=A.aO(r.h(0,"attempt_count"))
if(s==null)s=0
return new A.b_(q,p,o,n,m,l,k,j,s,A.ag(r.h(0,"last_error")))},
$S:65}
A.p8.prototype={
gl7(){return this.b},
dD(a,b,c){return this.uS(a,b,c)},
uS(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$dD=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=J
s=3
return A.a(p.a.b.dH("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,a]),$async$dD)
case 3:o=n.aE(e,A.Gc(),t.A)
o=A.P(o,o.$ti.i("Q.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dD,r)},
dr(a,b,c,d,e,f,g){return this.t_(a,b,c,d,e,f,g)},
t_(a,b,c,d,e,f,g){var s=0,r=A.h(t.A),q,p=this,o,n,m
var $async$dr=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:o=p.gl7()
s=3
return A.a(o.bx(a,b,c),$async$dr)
case 3:n=i
s=4
return A.a(o.bY(n),$async$dr)
case 4:m=i
if(m==null)m=0
s=5
return A.a(p.a.X(new A.p9(p,g,f,d,n,m,A.mh(),e),t.A),$async$dr)
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dr,r)},
eC(a,b,c,d,e){return this.v9(a,b,c,d,e)},
v9(a,b,c,d,e){var s=0,r=A.h(t.x),q,p=this,o,n,m,l,k,j
var $async$eC=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:l=p.gl7()
s=3
return A.a(p.dD(a,c,e),$async$eC)
case 3:k=g
j=J.J(k)
if(j.gB(k))throw A.b(A.w("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.ep(k,new A.pa(d),new A.pb(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(A.w("File is remote_only; download it before opening."))
j=p.a
n=j.Q.$0()
m=o.e
s=4
return A.a(j.b.aX("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[n,m]),$async$eC)
case 4:q=l.bw(m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eC,r)},
eL(a,b,c,d,e,f){return this.vC(0,b,c,d,e,f)},
vC(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$eL=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.dD(b,d,f),$async$eL)
case 3:n=h
m=J.J(n)
if(m.gB(n)){s=1
break}o=e!=null?m.ep(n,new A.pc(e),new A.pd(e)):m.h(n,c)
s=4
return A.a(p.a.X(new A.pe(p,o,f,d,b),t.P),$async$eL)
case 4:case 1:return A.e(q,r)}})
return A.f($async$eL,r)},
cq(a,b){return this.mU(a,b)},
mU(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h
var $async$cq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=p.b
s=3
return A.a(k.cI(b),$async$cq)
case 3:j=0+d
i=p.a
h=i.Q.$0()-B.b.O(a.a,1000)
i=i.b,o=t.s
case 4:s=6
return A.a(i.bT("lp_blobs",A.l(["hash"],o),250,"hash ASC","refcount <= 0 AND last_access <= ?",[h]),$async$cq)
case 6:n=d
m=J.J(n)
if(m.gB(n)){s=5
break}m=m.gu(n)
case 7:if(!m.l()){s=8
break}l=A.H(m.gn().h(0,"hash"))
s=9
return A.a(k.du(l),$async$cq)
case 9:s=10
return A.a(i.a3("lp_blobs","hash = ?",[l]),$async$cq)
case 10:++j
s=7
break
case 8:s=4
break
case 5:q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cq,r)},
ce(a){return this.tY(a)},
tY(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$ce=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.b
f=p.a.b
d=A
s=3
return A.a(f.aN("SELECT SUM(size) as total FROM lp_blobs"),$async$ce)
case 3:e=d.iJ(c)
if(e==null)e=0
if(e<=a){q=0
s=1
break}o=t.N,n=t.X,m=0
case 4:if(!(e>a)){s=5
break}s=6
return A.a(f.aN("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$ce)
case 6:l=c
k=J.J(l)
if(k.gB(l)){s=5
break}k=k.gu(l)
case 7:if(!k.l()){s=8
break}j=k.gn()
if(e<=a){s=8
break}i=A.H(j.h(0,"hash"))
h=A.af(j.h(0,"size"))
s=9
return A.a(g.du(i),$async$ce)
case 9:s=10
return A.a(f.F("lp_file_refs",A.m(["state","remote_only"],o,n),"hash = ? AND state = ?",[i,"synced"]),$async$ce)
case 10:s=11
return A.a(f.a3("lp_blobs","hash = ?",[i]),$async$ce)
case 11:e-=h;++m
s=7
break
case 8:s=4
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ce,r)}}
A.p9.prototype={
$1(a){return this.mv(a)},
mv(a){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$1=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:j=a.b
i=p.a.a.Q.$0()
h=t.s
g=p.b
f=p.c
e=p.d
d=p.e
s=3
return A.a(j.eJ("lp_file_refs",A.l(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],h),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[g,f,e,d]),$async$$1)
case 3:c=a1
b=J.J(c)
if(b.gV(c)){q=A.yz(b.gC(c))
s=1
break}s=4
return A.a(A.fy(j,d,i,p.f),$async$$1)
case 4:s=5
return A.a(j.eJ("lp_outbox",A.l(["op_id","base_updated"],h),1,"store = ? AND record_id = ?",[g,f]),$async$$1)
case 5:o=a1
h=J.J(o)
n=h.gV(o)&&J.a1(h.gC(o),"base_updated")==null?A.ag(J.a1(h.gC(o),"op_id")):null
h=p.r
b=p.w
m=t.N
l=t.X
s=6
return A.a(j.cO(0,"lp_file_refs",A.m(["ref_id",h,"store",g,"record_id",f,"field",e,"hash",d,"remote_name",b,"state","pending_upload"],m,l),B.a7),$async$$1)
case 6:k=A.mh()
s=7
return A.a(j.an(0,"lp_op_queue",A.m(["op_id",k,"store",g,"record_id",f,"kind","fileUpload","payload_json",B.e.a7(A.m(["ref_id",h,"field",e,"hash",d,"name",b],m,m),null),"state","pending","depends_on_op",n,"created_at",i],m,l)),$async$$1)
case 7:a.a0(new A.a2(g,A.am([f],m)))
q=new A.b_(h,g,f,e,d,b,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:66}
A.pa.prototype={
$1(a){return a.a===this.a},
$S:39}
A.pb.prototype={
$0(){return A.y(A.w("FileRef "+this.a+" not found"))},
$S:37}
A.pc.prototype={
$1(a){return a.a===this.a},
$S:39}
A.pd.prototype={
$0(){return A.y(A.w("FileRef "+this.a+" not found"))},
$S:37}
A.pe.prototype={
$1(a){return this.mw(a)},
mw(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
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
return A.a(p.a3("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 5:s=6
return A.a(p.aX(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.F("lp_op_queue",A.m(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.F("lp_file_refs",A.m(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.an(0,"lp_op_queue",A.m(["op_id",A.mh(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.e.a7(A.m(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.v),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.a0(new A.a2(q.c,A.am([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rD.prototype={
bn(){var s=0,r=A.h(t.B),q,p=2,o=[],n,m,l,k,j
var $async$bn=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.ml()
if(n==null){q=null
s=1
break}l=t.m
s=7
return A.a(A.a3(n.getDirectory(),l),$async$bn)
case 7:m=b
s=8
return A.a(A.a3(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$bn)
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
return A.f($async$bn,r)},
bx(a,b,c){return this.vl(a,b,c)},
hE(a){return this.bx(a,null,null)},
vl(a,b,c){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k,j,i,h
var $async$bx=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:m=new A.tF(A.l([],t.bs))
s=3
return A.a(A.iN(a,b,c,null,new A.rE(m)),$async$bx)
case 3:l=e
k=m.jG()
s=4
return A.a(p.bn(),$async$bx)
case 4:j=e
i=l.a
s=j!=null?5:7
break
case 5:o=t.m
h=A
s=9
return A.a(A.a3(j.getFileHandle(i,{create:!0}),o),$async$bx)
case 9:s=8
return A.a(h.a3(e.createWritable(),o),$async$bx)
case 8:n=e
o=t.X
s=10
return A.a(A.a3(n.write(t.a.a(B.d.gaF(k))),o),$async$bx)
case 10:s=11
return A.a(A.a3(n.close(),o),$async$bx)
case 11:s=6
break
case 7:p.b.j(0,i,k)
case 6:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bx,r)},
bw(a){return this.vb(a)},
vb(a){var s=0,r=A.h(t.x),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$bw=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.j6(a)
h=n.b
if(h.I(a)){h=h.h(0,a)
h.toString
q=A.xm(h,t.L)
s=1
break}s=3
return A.a(n.bn(),$async$bw)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
h=t.m
s=10
return A.a(A.a3(m.getFileHandle(a,{create:!1}),h),$async$bw)
case 10:l=c
s=11
return A.a(A.a3(l.getFile(),h),$async$bw)
case 11:k=c
s=12
return A.a(A.a3(k.arrayBuffer(),t.a),$async$bw)
case 12:j=c
i=A.bx(j,0,null)
i=A.xm(i,t.L)
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
case 9:case 5:throw A.b(A.w("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bw,r)},
du(a){return this.tk(a)},
tk(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$du=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.j6(a)
o.b.D(0,a)
s=2
return A.a(o.bn(),$async$du)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(A.yB(n,a),$async$du)
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
return A.f($async$du,r)},
cf(a){return this.u3(a)},
u3(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k
var $async$cf=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.j6(a)
if(n.b.I(a)){q=!0
s=1
break}s=3
return A.a(n.bn(),$async$cf)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(A.a3(m.getFileHandle(a,{create:!1}),t.m),$async$cf)
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
return A.f($async$cf,r)},
bY(a){return this.n7(a)},
n7(a){var s=0,r=A.h(t.aV),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$bY=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.j6(a)
j=n.b
if(j.I(a)){q=j.h(0,a).length
s=1
break}s=3
return A.a(n.bn(),$async$bY)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
j=t.m
s=10
return A.a(A.a3(m.getFileHandle(a,{create:!1}),j),$async$bY)
case 10:l=c
s=11
return A.a(A.a3(l.getFile(),j),$async$bY)
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
return A.f($async$bY,r)},
cI(a){return this.t6(a)},
t6(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
var $async$cI=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(m.bn(),$async$cI)
case 3:f=c
if(f==null){q=0
s=1
break}l=0
p=5
i=new A.bQ(A.bD(A.yA(f),"stream",t.K),t.I)
p=8
h=t.X
case 11:s=13
return A.a(i.l(),$async$cI)
case 13:if(!c){s=12
break}k=i.gn()
j=k.name
if(!J.BU(j,"tmp_")){s=11
break}p=15
s=18
return A.a(A.a3(f.removeEntry(j,{recursive:!1}),h),$async$cI)
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
return A.a(i.A(),$async$cI)
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
return A.f($async$cI,r)}}
A.rE.prototype={
$1(a){return this.a.t(0,a)},
$S:20}
A.kI.prototype={
gma(){return 1}}
A.mA.prototype={
cW(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h
var $async$cW=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=m.b
s=h==null?3:4
break
case 3:j=m.d
l=j==null?m.d=m.a.h7():j
p=5
s=8
return A.a(l,$async$cW)
case 8:k=b
m.b=k
s=k.gma()<0.25?9:10
break
case 9:s=11
return A.a(m.iO(),$async$cW)
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
case 7:case 4:s=h.gma()<0.25?12:13
break
case 12:s=14
return A.a(m.iO(),$async$cW)
case 14:case 13:i=m.b
i.toString
q=i
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cW,r)},
hH(){var s=0,r=A.h(t.q),q,p=this
var $async$hH=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=p.b==null?3:4
break
case 3:s=5
return A.a(p.a.h7(),$async$hH)
case 5:p.b=b
case 4:q=p.iO()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hH,r)},
iO(){var s=this.c
if(s!=null)return s
return this.c=this.f9()},
f9(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$f9=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:++m.e
p=3
k=m.b
k.toString
s=6
return A.a(m.a.jB(k),$async$f9)
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
return A.f($async$f9,r)}}
A.kd.prototype={
hB(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$hB=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.at){s=1
break}n.at=!0
if(n.ax){s=1
break}p=4
m=n.z
m===$&&A.u()
s=7
return A.a(m.hD(),$async$hB)
case 7:n.as=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.M(k)
if(m instanceof A.cb){n.as=!1
n.ax=!0}else if(m instanceof A.b2)n.at=n.as=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hB,r)},
f3(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$f3=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.Q!=null){s=1
break}o=p.z
o===$&&A.u()
n=new A.q_(o,A.l(["data"],t.s),B.bl,p.gqz(),p.gqC(),A.ct(null,t.H))
p.Q=n
s=3
return A.a(n.aD(),$async$f3)
case 3:case 1:return A.e(q,r)}})
return A.f($async$f3,r)},
dU(){var s=0,r=A.h(t.H),q=this,p,o
var $async$dU=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.Q
o=o==null?null:o.aL()
s=2
return A.a(o instanceof A.r?o:A.bg(o,t.H),$async$dU)
case 2:q.Q=null
for(o=q.ch,p=new A.aI(o,o.r,o.e,A.o(o).i("aI<2>"));p.l();)p.d.A()
o.ai(0)
q.CW.ai(0)
return A.e(null,r)}})
return A.f($async$dU,r)},
qA(){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.E)(s),++q){p=s[q]
this.dX(p,new A.c9(p,B.S,null))}},
qD(a){var s,r
if(a.a==="delete"){this.fU(a.b)
return}s=a.b
r=s.b
this.dX(r,new A.c9(r,B.S,s))},
fU(a){return this.rC(a)},
rC(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j
var $async$fU=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:k=null
p=4
m=n.z
m===$&&A.u()
s=7
return A.a(m.bA(a.a),$async$fU)
case 7:k=c
p=2
s=6
break
case 4:p=3
j=o.pop()
m=A.M(j)
if(m instanceof A.cf){m=a.b
n.dX(m,new A.c9(m,B.aq,null))
s=1
break}else if(m instanceof A.b2){s=1
break}else throw j
s=6
break
case 3:s=2
break
case 6:if(k==null){m=a.b
n.dX(m,new A.c9(m,B.aq,null))
s=1
break}m=a.b
n.dX(m,new A.c9(m,B.S,k))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fU,r)},
dX(a,b){var s,r
this.CW.j(0,a,b)
s=this.ch
r=s.h(0,a)
if(r!=null)r.A()
s.j(0,a,A.dY(B.bm,new A.q8(this,a)))},
vV(a,b){return this.hL(null,a,null,b,null)},
hL(a,b,c,d,e){return this.vY(a,b,c,d,e)},
vX(a,b){return this.hL(null,a,null,null,b)},
vY(a,b,c,d,e){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$hL=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.ck(0,new A.q9(),t.N,t.co)
n=p.z
n===$&&A.u()
q=n.hK(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hL,r)}}
A.q8.prototype={
$0(){var s,r=this.a,q=this.b
r.ch.D(0,q)
s=r.CW.D(0,q)
if(s!=null&&(r.ay.c&4)===0)r.ay.t(0,s)},
$S:0}
A.q9.prototype={
$2(a,b){return new A.U(a,new A.cS("imgs+",b.a,b.b,b.c),t.ia)},
$S:69}
A.pS.prototype={
ex(a,b,c,d,e,f){return this.uU(a,b,c,d,e,f)},
uU(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$ex=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.GQ(a,e,c)
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m=A.x(a,"\\","\\\\")
m=A.x(m,"'","\\'")
n=A.x(n,"\\","\\\\")
l="(store="+("'"+m+"'")+" && updated>="+("'"+A.x(n,"'","\\'")+"'")+")"
if(c==null)o=l
else{n=A.x(c,"\\","\\\\")
o=l+" && id>"+("'"+A.x(n,"'","\\'")+"'")}}n=t.N
n=A.G(n,n)
n.j(0,"filter",o)
n.j(0,"sort",h?"updated,id":"id")
n.j(0,"perPage",""+f)
n.j(0,"skipTotal","1")
if(b!=null)n.j(0,"fields",B.c.M(b,","))
k=p.b.b9("/api/collections/data/records").jE(n)
s=3
return A.a(p.lb("GET",k),$async$ex)
case 3:j=a0
p.cA(j,A.l([200],t.t),k)
i=p.cz(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.bd("List response has no items array."))
h=J.aE(i,new A.pZ(p),t.h)
h=A.P(h,h.$ti.i("Q.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ex,r)},
bA(a){return this.mX(a)},
mX(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$bA=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.b9("/api/collections/data/records/"+A.fm(2,a,B.k,!1))
s=3
return A.a(p.lb("GET",o),$async$bA)
case 3:n=c
if(n.a===404)throw A.b(A.CU("not found"))
p.cA(n,A.l([200],t.t),o)
q=p.dg(p.cz(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bA,r)},
h6(a,b,c){return this.te(a,b,c)},
te(a,b,c){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$h6=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.b9("/api/collections/data/records")
s=3
return A.a(p.e9("POST",o,B.e.a7(A.m(["id",b,"store",c,"data",B.e.av(a,null)],t.N,t.z),null)),$async$h6)
case 3:n=e
if(n.a===400&&p.qd(n))throw A.b(new A.eq(p.dY(n)))
p.cA(n,A.l([200,201],t.t),o)
q=p.dg(p.cz(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h6,r)},
qd(a){var s,r,q,p,o,n
try{s=this.cz(a)
r=J.a1(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.v(p,"validation_not_unique")||J.v(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
eR(a,b){return this.vU(a,b)},
vU(a,b){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$eR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.b.b9("/api/collections/data/records/"+A.fm(2,b,B.k,!1))
s=3
return A.a(p.e9("PATCH",o,B.e.a7(A.m(["data",B.e.av(a,null)],t.N,t.z),null)),$async$eR)
case 3:n=d
p.cA(n,A.l([200],t.t),o)
q=p.dg(p.cz(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eR,r)},
hK(a,b,c,d,e){return this.vW(a,b,c,d,e)},
vW(a,b,c,d,e){var s=0,r=A.h(t.h),q,p=this,o,n,m,l
var $async$hK=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.b.b9("/api/collections/data/records/"+A.fm(2,b,B.k,!1))
m=t.N
l=A.G(m,m)
if(d!=null)l.j(0,"imgs-",B.e.a7(d,null))
if(e==null)m=null
else{m=A.o(e).i("aS<2>")
m=A.P(new A.aS(e,m),m.i("n.E"))}s=3
return A.a(p.rj(new A.jy("PATCH",n,B.aJ,l,m==null?B.bT:m)),$async$hK)
case 3:o=g
p.cA(o,A.l([200],t.t),n)
q=p.dg(p.cz(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hK,r)},
hb(a,b,c){return this.tQ(a,b,c)},
tQ(a,b,c){var s=0,r=A.h(t.x),q,p=this,o,n,m,l
var $async$hb=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=t.N
l=A.G(l,l)
o=p.b.b9("/api/files/data/"+A.fm(2,b,B.k,!1)+"/"+A.fm(2,a,B.k,!1))
n=l.a===0?o:o.jE(l)
s=3
return A.a(p.qE(new A.dG("GET",n,B.aJ,null)),$async$hb)
case 3:m=e
p.cA(new A.cc(m.a,m.b,""),A.l([200],t.t),n)
q=m.c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hb,r)},
eG(a){return this.vk(a)},
vk(a4){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$eG=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a2=p.b.b9("/api/batch")
a3=A.l([],t.ic)
for(o=J.aw(a4),n=o.gu(a4),m=t.N,l=t.z,k=t.K;n.l();){j=n.gn()
a3.push(A.m(["method","PUT","url","/api/collections/data/records","body",A.m(["id",j.c,"store",j.b,"data",B.e.av(j.d,null)],m,l)],m,k))}s=3
return A.a(p.e9("POST",a2,B.e.a7(A.m(["requests",a3],m,t.ew),null)),$async$eG)
case 3:i=a6
a3=i.a
if(a3===403)throw A.b(A.Cn(p.dY(i)))
if(a3===400)throw A.b(new A.du(p.dY(i)))
p.cA(i,A.l([200],t.t),a2)
h=B.e.av(i.c,null)
a3=t.j
if(a3.b(h))g=h
else{n=t.f
if(n.b(h)){f=h.h(0,"data")
e=n.b(f)?f.h(0,"results"):h.h(0,"results")
if(!a3.b(e))throw A.b(A.bd("Batch response has no results array."))}else throw A.b(A.bd("Batch response is not a list or envelope."))
g=e}a3=J.J(g)
if(a3.gk(g)!==o.gk(a4))throw A.b(A.bd("Batch response has "+a3.gk(g)+" results for "+o.gk(a4)+" requests."))
d=A.l([],t.g2)
for(n=t.f,c=0;c<o.gk(a4);++c){b=a3.h(g,c)
if(!n.b(b))throw A.b(A.bd("Batch response entry "+c+" is not a JSON object."))
m=o.h(a4,c)
a=b.h(0,"status")
l=J.dn(a)
a0=l.W(a,200)||l.W(a,201)
a1=b.h(0,"body")
l=a0&&n.b(a1)?p.dg(a1):null
k=a0?null:p.oh(b)
j=a0&&n.b(a1)?B.e.a7(a1.h(0,"data"),null):null
d.push(new A.hx(m.a,a0,l,k,j))}q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eG,r)},
hD(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$hD=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.e9("POST",p.b.b9("/api/batch"),B.e.a7(A.m(["requests",[]],t.N,t.kS),null)),$async$hD)
case 3:o=b
n=o.a
if(n===403){q=!1
s=1
break}if(n===401)throw A.b(A.BX(p.dY(o)))
if(n===408||n===429||n>=500)throw A.b(A.z6("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hD,r)},
e9(a,b,c){return this.bJ(new A.pV(this,a,b,c),new A.pW(),t.w)},
lb(a,b){return this.e9(a,b,null)},
rj(a){return this.bJ(new A.pX(this,a),new A.pY(),t.w)},
qE(a){return this.bJ(new A.pT(this,a),new A.pU(),t.lI)},
bJ(a,b,c){return this.rE(a,b,c,c)},
rE(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$bJ=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
i=n.c
s=7
return A.a(i.cW(),$async$bJ)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$bJ)
case 8:l=f
s=J.v(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(i.hH(),$async$bJ)
case 11:k=f
s=12
return A.a(a.$1(k.a),$async$bJ)
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
i=A.M(g)
if(i instanceof A.cT){j=i
throw A.b(A.z6(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bJ,r)},
iS(a,b,c,d){return this.rh(a,b,c,d)},
rh(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$iS=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.G(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.aQ(new A.dG(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iS,r)},
cA(a,b,c){if(B.c.E(b,a.a))return
throw A.b(this.qh(a,c))},
qh(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.dY(a)
if(401===s)return new A.bG(q)
if(403===s)return new A.cb(q)
if(404===s)return new A.cf(q)
if(408===s||429===s)return new A.dT(r,q)
if(400===s)return new A.eE(q)
if(s>=500)return new A.hC(q)
return new A.eF("Unexpected status "+s+" for "+b.m(0)+": "+q)},
dY(a){var s,r,q,p,o
try{s=this.cz(a)
r=J.a1(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.a1(s,"data")
if(t.f.b(q)){p=q
p=p.gV(p)}else p=!1
if(p){p=B.e.a7(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.q(p,0,500)},
cz(a){var s,r,q,p=null
try{p=B.e.av(a.c,null)}catch(r){q=A.M(r)
if(t.Y.b(q)){s=q
throw A.b(A.bd("Response is not valid JSON: "+s.gjt()))}else throw r}if(t.f.b(p))return A.bv(p,t.N,t.X)
throw A.b(A.bd("Expected a JSON object, got "+J.ds(p).m(0)+"."))},
dg(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.bd("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"store")
q=a.h(0,"updated")
if(typeof s!="string"||typeof q!="string")throw A.b(A.bd("Record missing id/updated."))
p=typeof r=="string"?r:""
o=a.h(0,"data")
n=t.N
m=t.X
l=j.b(o)?A.bv(o,n,m):A.G(n,m)
k=a.h(0,"imgs")
if(t.j.b(k)){j=J.ye(k,n)
j=A.P(j,j.$ti.i("n.E"))}else j=B.p
return new A.cg(s,p,q,l,j)},
oh(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.q(r)+")"}}
A.pZ.prototype={
$1(a){return this.a.dg(a)},
$S:70}
A.pV.prototype={
$1(a){var s=this
return s.a.iS(s.b,s.c,s.d,a)},
$S:60}
A.pW.prototype={
$1(a){return a.a},
$S:38}
A.pX.prototype={
$1(a){var s=this.b,r=t.N
r=A.dJ(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.d1(new A.jy(s.a,s.b,r,s.d,s.e))},
$S:60}
A.pY.prototype={
$1(a){return a.a},
$S:38}
A.pT.prototype={
$1(a){var s=this.b,r=t.N
r=A.dJ(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.dG(new A.dG(s.a,s.b,r,s.d))},
$S:73}
A.pU.prototype={
$1(a){return a.a},
$S:74}
A.hr.prototype={}
A.fg.prototype={}
A.q_.prototype={
aD(){var s=0,r=A.h(t.H),q,p=this
var $async$aD=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.f){s=1
break}p.f=!0
p.e8()
case 1:return A.e(q,r)}})
return A.f($async$aD,r)},
aL(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aL=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.f=!1
n=q.r
n=n==null?null:n.A()
s=2
return A.a(n instanceof A.r?n:A.bg(n,t.H),$async$aL)
case 2:q.r=null
p=q.w
if(p!=null?(p.a.a&30)===0:o)p.au()
return A.e(null,r)}})
return A.f($async$aL,r)},
e8(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$e8=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n=o.c,m=t.H
case 2:if(!o.f){s=3
break}q=5
s=8
return A.a(o.cv(),$async$e8)
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
return A.a(A.Cr(n,m),$async$e8)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$e8,r)},
cv(){return this.o5()},
o5(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cv=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
n=p.a
s=3
return A.a(n.c.cW(),$async$cv)
case 3:m=b
l=t.N
s=4
return A.a(n.a.dG(new A.dG("GET",n.b.b9("/api/realtime"),A.m(["Authorization","Bearer "+m.a],l,l),null)),$async$cv)
case 4:k=b
n=k.a
if(n!==200)throw A.b(A.jz("realtime connect status "+n,null))
s=!p.f?5:6
break
case 5:s=7
return A.a(k.c.aM(new A.q4()).A(),$async$cv)
case 7:s=1
break
case 6:++p.y
p.w=new A.aM(new A.r($.t,t.D),t.Q)
n=$.mp()
l=A.l([],t.s)
o.a=!1
p.r=k.c.bu(new A.q5(o,p,new A.v6(new A.tZ(n),l),m),new A.q6(p),new A.q7(p))
s=8
return A.a(p.w.a,$async$cv)
case 8:p.r=null
case 1:return A.e(q,r)}})
return A.f($async$cv,r)},
fp(a,b){return this.pd(a,b)},
pd(a0,a1){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$fp=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a=a0.a
s=a!=null?3:4
break
case 3:l=p.a
k=t.N
s=5
return A.a(l.a.aQ(new A.dG("POST",l.b.b9("/api/realtime"),A.m(["Authorization","Bearer "+a1.a,"Content-Type","application/json"],k,k),B.e.a7(A.m(["clientId",a,"subscriptions",p.b],k,t.K),null))),$async$fp)
case 5:l=a4.a
if(l!==204&&l!==200)throw A.b(A.jz("realtime subscribe status "+l,null))
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
l=l.b(j)?A.bv(j,t.N,t.X):B.w
if(t.j.b(f)){c=J.ye(f,t.N)
c=A.P(c,c.$ti.i("n.E"))}else c=B.p
m=new A.cg(k,e,d,l,c)
p.e.$1(new A.hr(o,m))}catch(a2){}case 1:return A.e(q,r)}})
return A.f($async$fp,r)}}
A.q4.prototype={
$1(a){},
$S:20}
A.q5.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.c.u6(a)
for(s=j.length,r=k.b,q=k.d,p=t.H,o=k.a,n=t.P,m=0;m<j.length;j.length===s||(0,A.E)(j),++m){l=j[m]
r.x=r.x.bh(new A.q0(r,l,q),p).j2(new A.q1()).bh(new A.q2(o,r,l),n).j2(new A.q3())}},
$S:20}
A.q0.prototype={
$1(a){return this.a.fp(this.b,this.c)},
$S:24}
A.q1.prototype={
$1(a){},
$S:36}
A.q2.prototype={
$1(a){var s=this.a
if(!s.a&&this.c.a!=null){s.a=!0
this.b.d.$0()}},
$S:76}
A.q3.prototype={
$1(a){},
$S:36}
A.q6.prototype={
$0(){var s=this.a.w
if((s.a.a&30)===0)s.au()},
$S:0}
A.q7.prototype={
$1(a){var s=this.a.w
if((s.a.a&30)===0)s.au()},
$S:36}
A.v6.prototype={
u6(a){var s,r,q,p,o,n,m,l=this.a
l.t(0,a)
s=l.jG()
r=A.l([],t.bi)
for(q=s.length,p=0;;){o=this.qa(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.cm(p,o,q)))
p=o+1
m=this.oa(B.a.vP(new A.cM(!0).cw(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.t(0,B.d.aS(s,p))
return r},
qa(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
or(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.c.ai(k)
return l}s=m.b
r=B.c.M(k,"\n")
m.b=null
B.c.ai(k)
try{q=B.e.av(r,l)
if(t.f.b(q)){p=A.bv(q,t.N,t.X)
o=J.a1(p,"clientId")
if(J.v(s,"PB_CONNECT")&&typeof o=="string")return new A.fg(o,l)
return new A.fg(l,p)}}catch(n){}return l},
oa(a){var s,r=this,q=null
if(a.length===0)return r.or()
if(B.a.N(a,"PB_CONNECT:")){r.b=null
B.c.ai(r.c)
return new A.fg(B.a.cX(B.a.aa(a,11)),q)}if(B.a.N(a,":"))return q
if(B.a.N(a,"event:")){r.b=B.a.cX(B.a.aa(a,6))
return q}if(B.a.N(a,"data:")){s=B.a.cX(B.a.aa(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.dG.prototype={}
A.cS.prototype={
ne(){return this.d.$0()},
gk(a){return this.c}}
A.jy.prototype={}
A.cc.prototype={}
A.cT.prototype={
m(a){return"HttpTransportException: "+this.a},
$iI:1}
A.d5.prototype={}
A.pQ.prototype={
aQ(a){return this.n3(a)},
n3(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$aQ=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.dG(a),$async$aQ)
case 7:m=c
j=m.c
s=8
return A.a(B.am.k8(j).cP(0).hJ(B.W),$async$aQ)
case 8:l=c
j=m.a
i=m.b
q=new A.cc(j,i,l)
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.M(g)
if(j instanceof A.cT)throw g
else{k=j
j=A.jz("HTTP "+a.a+" "+a.b.m(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aQ,r)},
d1(a){return this.n4(a)},
n4(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$d1=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.CQ(a6.a,a6.b)
h.r.J(0,a6.c)
h.x.J(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.ne(),$async$d1)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.B0(a0)
a3=new A.ew("application".toLowerCase(),"octet-stream".toLowerCase(),new A.eW(A.G(d,d),e))
b.push(new A.jZ(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.E)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.aQ(m).hJ(B.W),$async$d1)
case 11:k=a8
g=k.w
s=12
return A.a(B.am.k8(g).cP(0).hJ(B.W),$async$d1)
case 12:j=a8
g=k.b
f=k.e
q=new A.cc(g,f,j)
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
g=A.M(a5)
if(g instanceof A.cT)throw a5
else{i=g
g=A.jz("HTTP multipart "+a6.a+" "+a6.b.m(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d1,r)},
dG(a){return this.vd(a)},
vd(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$dG=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.D5(a,a0)
a1.r.J(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gjf().jd(j)
i.nX()
i.y=A.GU(j)
h=i.gc2()
if(h==null){j=t.N
i.sc2(A.x9("text","plain",A.m(["charset",i.gjf().gaY()],j,j)))}else{j=i.gc2()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.cd(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.I("charset")){j=t.N
f=A.m(["charset",i.gjf().gaY()],j,j)
e=h.a
d=h.b
c=A.bv(h.c,j,j)
c.J(0,f)
i.sc2(A.x9(e,d,c))}}}p=4
s=7
return A.a(n.a.aQ(a1).hJ(B.W),$async$dG)
case 7:m=a5
j=t.N
l=A.G(j,j)
m.e.ac(0,new A.pR(l))
j=m.b
i=m.w
q=new A.d5(j,l,i)
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
j=A.M(a2)
if(j instanceof A.cT)throw a2
else{k=j
a=A.jz("HTTP "+a+" "+a0.m(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dG,r)}}
A.pR.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:31}
A.bi.prototype={}
A.nd.prototype={
$0(){var s="base_json",r="lp_conflicts",q="local_json",p="remote_json",o="dirty_local",n="dirty_remote",m="resolved_json",l=this.a,k=A.H(l.h(0,"store")),j=A.H(l.h(0,"record_id")),i=A.w9(l.h(0,s),s,r),h=A.w9(l.h(0,q),q,r),g=A.w9(l.h(0,p),p,r),f=A.AG(l.h(0,o),o,r),e=A.AG(l.h(0,n),n,r),d=A.af(l.h(0,"detected_at"))
return new A.bi(k,j,i,h,g,f,e,d,l.h(0,m)!=null?A.w9(l.h(0,m),m,r):null)},
$S:77}
A.ne.prototype={
ew(a){return this.uT(a)},
uT(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m
var $async$ew=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
m=J
s=3
return A.a(p.a.b.vn("lp_conflicts","detected_at ASC",n,o),$async$ew)
case 3:o=m.aE(c,A.G0(),t.n8)
o=A.P(o,o.$ti.i("Q.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ew,r)},
d0(a,b){return this.mW(a,b)},
mW(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$d0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.aH("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$d0)
case 3:o=d
n=J.J(o)
if(n.gB(o)){q=null
s=1
break}q=A.wU(n.gC(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d0,r)},
w_(a){var s={},r=A.xz()
s.a=null
r.slP(A.dW(new A.nh(s),new A.ni(s,this,a,new A.nj(this,r,a)),t.ba))
return r.be().gct()},
dJ(a,b,c){return this.vF(a,b,c)},
vF(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dJ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.af(c)
s=2
return A.a(p.X(new A.nf(q,c,a,o.a,o,b),t.P),$async$dJ)
case 2:return A.e(null,r)}})
return A.f($async$dJ,r)},
ed(a,b){return this.rM(a,b)},
rM(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$ed=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.d0(a,b),$async$ed)
case 2:p=d
if(p==null)throw A.b(A.w("No conflict found for "+a+"/"+b))
s=3
return A.a(q.dJ(b,p.d,a),$async$ed)
case 3:return A.e(null,r)}})
return A.f($async$ed,r)},
ee(a,b){return this.rN(a,b)},
rN(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$ee=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.d0(a,b),$async$ee)
case 2:p=d
if(p==null)throw A.b(A.w("No conflict found for "+a+"/"+b))
s=3
return A.a(q.dJ(b,p.e,a),$async$ee)
case 3:return A.e(null,r)}})
return A.f($async$ee,r)}}
A.nj.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.be().ghs()){s=1
break}p=4
s=7
return A.a(n.a.ew(n.c),$async$$0)
case 7:m=b
if(!i.be().ghs())J.bU(i.be(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.M(h)
k=A.ab(h)
if(!i.be().ghs())i.be().bs(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:4}
A.ni.prototype={
$0(){var s=this,r=s.b.a.a$.a,q=s.d
s.a.a=new A.aV(r,A.o(r).i("aV<1>")).aM(new A.ng(s.c,q))
q.$0()},
$S:0}
A.ng.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:35}
A.nh.prototype={
$0(){var s=this.a.a
if(s!=null)s.A()},
$S:0}
A.nf.prototype={
$1(a){return this.mp(a)},
mp(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aH("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.J(a3)
if(a4.gB(a3))throw A.b(A.w("No conflict found for "+a1+"/"+a2))
o=A.wU(a4.gC(a3))
a4=o.e
n=A.ak(a4)
m=p.d
l=A.az(B.l.v(B.h.v(A.ak(A.aX(m,a4)))).a)
k=p.e.a.a
a5=J
s=6
return A.a(a0.aH(k,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.c8(a8)?4:5
break
case 4:s=7
return A.a(a0.a3("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.a3("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.a3("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.a0(new A.a2(a1,A.am([a2],a4)))
a6.a0(new A.a2("lp_conflicts",A.am([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aH("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 10:j=a8
i=J.J(j)
if(i.gV(j)){h=A.ag(J.a1(i.gC(j),"base_updated"))
g=h==null?A.ag(J.a1(i.gC(j),"remote_updated")):h}else g=null
s=11
return A.a(a0.a3("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 11:i=t.N
h=t.X
f=A.dJ(p.f,i,h)
f.j(0,"id",a2)
e=J.v(f.h(0,"archived"),!0)
s=12
return A.a(a0.F(k,A.dm(m,e,null,null,a2,f),"id = ?",[a2]),$async$$1)
case 12:a4=A.bE(a4,f)
d=A.P(a4,A.o(a4).c)
B.c.b0(d)
c=A.ak(A.aX(m,f))
s=13
return A.a(a0.F("lp_sync_row",A.m(["sync_state","dirty","base_json",n,"base_hash",l,"base_updated",g,"dirty_fields",B.e.a7(d,null)],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 13:a5=J
s=17
return A.a(a0.aH("lp_outbox",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 17:s=a5.c8(a8)?14:16
break
case 14:a4=p.a.a
b=a4.Q.$0()
m=e?B.E:B.q
k=B.e.a7(d,null)
a4=a4.as
a4===$&&A.u()
s=18
return A.a(a0.an(0,"lp_outbox",A.Aw(l,g,b,null,k,m,a4.jU(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.F("lp_outbox",A.m(["kind",e?"archive":"upsert","payload_json",c,"base_updated",g,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.a0(new A.a2(a1,A.am([a2],i)))
a6.a0(new A.a2("lp_conflicts",A.am([a2],i)))
a4=o.d
a=A.bE(a4,f)
a.D(0,"id")
a6.d.push(new A.aK(a1,a2,B.V,B.t,a4,f,a))
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.kF.prototype={
aD(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$aD=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.dW(null,null,t.n6)
n.ay=A.dW(null,null,t.em)}n.z=!0
n.aV(B.cr)
p=4
l=n.b
s=7
return A.a(l.hB(),$async$aD)
case 7:if(!(n.z&&m===n.db)){s=1
break}k=n.w
k===$&&A.u()
k.f=l.as
p=2
s=6
break
case 4:p=3
i=o.pop()
if(!(n.z&&m===n.db)){s=1
break}s=6
break
case 3:s=2
break
case 6:p=9
l=n.a.a$.a
n.dy=new A.aV(l,A.o(l).i("aV<1>")).aM(n.guu())
l=n.b.ay
n.fr=new A.aV(l,A.o(l).i("aV<1>")).aM(n.gus())
p=2
s=11
break
case 9:p=8
h=o.pop()
s=12
return A.a(n.aL(),$async$aD)
case 12:throw h
s=11
break
case 8:s=2
break
case 11:n.fx=A.Dl(B.bn,new A.rb(n))
n.aV(n.d8())
s=n.z&&m===n.db?13:14
break
case 13:n.ok.push("cycle")
s=15
return A.a(n.cE(),$async$aD)
case 15:case 14:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aD,r)},
aL(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$aL=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.z){s=1
break}p.z=!1;++p.db
o=p.fx
if(o!=null)o.A()
o=p.fy
if(o!=null)o.A()
o=p.go
if(o!=null)o.A()
o=p.id
if(o!=null)o.A()
s=3
return A.a(p.k3,$async$aL)
case 3:s=4
return A.a(p.dx,$async$aL)
case 4:s=5
return A.a(p.p1,$async$aL)
case 5:o=p.dy
o=o==null?null:o.A()
n=t.H
s=6
return A.a(o instanceof A.r?o:A.bg(o,n),$async$aL)
case 6:o=p.fr
o=o==null?null:o.A()
s=7
return A.a(o instanceof A.r?o:A.bg(o,n),$async$aL)
case 7:o=p.ax
if((o.c&4)===0){p.y=B.O
o.t(0,B.O)
p.ax.p()}else p.y=B.O
o=p.ay
if((o.c&4)===0)o.p()
p.y=B.O
case 1:return A.e(q,r)}})
return A.f($async$aL,r)},
d8(){if(this.at)return B.aV
if(this.Q)return B.aT
if(this.as)return B.ad
return B.aU},
aV(a){var s,r=this
if(!r.z){r.y=a
return}r.y=a
s=r.ax
if((s.c&4)===0)s.t(0,a)
r.of()},
of(){return this.p1=this.p1.bh(new A.r3(this),t.H)},
f8(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$f8=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=n.z
if(!g){s=1
break}m=0
l=0
k=0
j=0
p=4
g=n.e
g===$&&A.u()
s=7
return A.a(g.h4(),$async$f8)
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
if((g.c&4)===0)g.t(0,new A.eR(n.y,m,l,k,j,n.ch,n.CW,n.cx))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$f8,r)},
uv(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.ok.push("push")
s.rf(B.X)},
ut(a){var s,r,q=this
if(!q.z)return
s=a.c
if(s!=null&&a.b===B.S){q.ok.push("fast:"+a.a)
q.dx=q.dx.bh(new A.r9(q,s),t.H)
return}r=a.a
q.ok.push("pull:"+r)
q.fS(B.X,A.l([r],t.s))},
fb(a){return this.on(a)},
on(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$fb=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.fS(B.X,A.l([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.u()
s=7
return A.a(l.hc(a),$async$fb)
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
break}if(!m)n.fS(B.X,A.l([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fb,r)},
uD(){if(!this.z)return
this.ok.push("cycle")
this.cE()},
fS(a,b){var s=this,r=s.fy
if(r!=null)r.A()
if(b==null)s.k1=!0
else s.k2.J(0,b)
s.fy=A.dY(a,new A.r8(s))},
rf(a){return this.fS(a,null)},
re(a){var s=this.go
if(s!=null)s.A()
this.go=A.dY(B.a8,new A.r7(this,a))},
iI(){this.as=!0
this.aV(B.ad)
A.fY(this.d,t.H)},
ey(){var s=0,r=A.h(t.H),q,p=this,o
var $async$ey=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.as
o===$&&A.u()
s=3
return A.a(o.vE(),$async$ey)
case 3:p.aV(p.d8())
p.ok.push("cycle")
s=4
return A.a(p.cE(),$async$ey)
case 4:case 1:return A.e(q,r)}})
return A.f($async$ey,r)},
hX(a){return this.n6(a)},
n6(a){var s=0,r=A.h(t.H),q=this,p
var $async$hX=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
if(a){p=q.id
if(p!=null)p.A()
q.id=A.dY(B.az,new A.ra(q))}else q.aV(B.aT)
return A.e(null,r)}})
return A.f($async$hX,r)},
bg(){var s=0,r=A.h(t.H),q=this
var $async$bg=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
q.aV(B.aV)
return A.e(null,r)}})
return A.f($async$bg,r)},
ba(){var s=0,r=A.h(t.H),q,p=this
var $async$ba=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
p.aV(p.d8())
p.ok.push("cycle")
s=3
return A.a(p.cE(),$async$ba)
case 3:case 1:return A.e(q,r)}})
return A.f($async$ba,r)},
iQ(a){var s,r,q=this
if(a==null){s=q.go
if(s!=null)s.A()}s=t.E
r=q.k3.bh(new A.r4(q,a),s)
q.k3=r.bV(new A.r5(),new A.r6(),s)
return r},
cE(){return this.iQ(null)},
c3(a){return this.od(a)},
od(b8){var s=0,r=A.h(t.E),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$c3=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.G
s=1
break}if(n.at||n.as||n.Q){n.aV(n.d8())
q=B.G
s=1
break}b3=t.N
a4=t.S
m=A.G(b3,a4)
l=A.G(b3,a4)
k=!1
j=!1
i=A.l([],t.s)
n.aV(B.cs)
b3=b8==null
if(b3){a4=n.a.ch
a5=A.o(a4).i("a7<1>")
a6=A.P(new A.a7(a4,a5),a5.i("n.E"))}else a6=b8
a4=a6.length,a7=0
case 3:if(!(a7<a6.length)){s=5
break}h=a6[a7]
p=7
a5=n.f
a5===$&&A.u()
s=10
return A.a(a5.cR(h),$async$c3)
case 10:g=c0
J.bT(m,h,g.b)
if(g.f&&g.b>0)J.bU(i,h)
p=2
s=9
break
case 7:p=6
b4=o.pop()
a5=A.M(b4)
if(a5 instanceof A.bG){n.iI()
s=5
break}else if(a5 instanceof A.b2){f=a5
k=!0
j=!0
n.ch=f.a}else throw b4
s=9
break
case 6:s=2
break
case 9:case 4:a6.length===a4||(0,A.E)(a6),++a7
s=3
break
case 5:if(n.as){n.aV(B.ad)
q=n.k4=new A.b3(m,B.a0,0,0,0,!0)
s=1
break}s=b3?11:12
break
case 11:p=14
e=n.cy
n.cy=!1
b3=n.r
b3===$&&A.u()
s=17
return A.a(b3.d5(e),$async$c3)
case 17:d=c0
for(b3=J.K(d);b3.l();){c=b3.gn()
a4=c.a
a5=J.a1(l,c.a)
if(a5==null)a5=0
J.bT(l,a4,a5+c.b)}p=2
s=16
break
case 14:p=13
b5=o.pop()
b3=A.M(b5)
if(b3 instanceof A.b2){b=b3
k=!0
n.ch=b.a}else throw b5
s=16
break
case 13:s=2
break
case 16:case 12:n.aV(B.ct)
a=B.N
s=j?18:20
break
case 18:if(n.ch==null)n.ch="pull failed; push deferred"
s=19
break
case 20:p=22
b3=n.w
b3===$&&A.u()
s=25
return A.a(b3.eH(),$async$c3)
case 25:a=c0
s=a.e&&n.ch==null?26:27
break
case 26:s=28
return A.a(n.a.b.aN("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$c3)
case 28:a0=c0
if(J.iS(a0)&&typeof J.a1(J.bV(a0),"last_error")=="string")n.ch=A.H(J.a1(J.bV(a0),"last_error"))
else n.ch="push failed"
case 27:p=2
s=24
break
case 22:p=21
b6=o.pop()
b3=A.M(b6)
if(b3 instanceof A.bG)n.iI()
else if(b3 instanceof A.b2){a1=b3
k=!0
n.ch=a1.a}else throw b6
s=24
break
case 21:s=2
break
case 24:case 19:p=30
b3=n.x
b3===$&&A.u()
s=33
return A.a(b3.bc(),$async$c3)
case 33:a2=c0
k=k||a2.d
if(a2.d&&n.ch==null)n.ch="file sync failed"
p=2
s=32
break
case 30:p=29
b7=o.pop()
a3=A.M(b7)
k=!0
n.ch=A.q(a3)
s=32
break
case 29:s=2
break
case 32:if(!(n.z&&b2===n.db)){q=B.G
s=1
break}if(J.av(i)!==0)n.re(i)
a9=k||a.e
b0=new A.b8(A.nZ(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.d8()
n.aV(a9&&b1===B.aU?B.cu:b1)
q=n.k4=new A.b3(m,l,a.a,a.b,a.d,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c3,r)}}
A.rb.prototype={
$1(a){return this.a.uD()},
$S:79}
A.r3.prototype={
$1(a){return this.a.f8()},
$S:24}
A.r9.prototype={
$1(a){return this.a.fb(this.b)},
$S:24}
A.r8.prototype={
$0(){var s=this.a,r=s.k1,q=s.k2,p=A.P(q,A.o(q).c)
s.k1=!1
q.ai(0)
if(r||p.length===0)s.cE()
else s.iQ(p)},
$S:0}
A.r7.prototype={
$0(){var s=this.a
s.go=null
if(!s.z)return
s.iQ(this.b)},
$S:0}
A.ra.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.aV(p.d8())
p.ok.push("cycle")
s=2
return A.a(p.cE(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.r4.prototype={
$1(a){return this.a.c3(this.b)},
$S:80}
A.r5.prototype={
$1(a){return B.G},
$S:81}
A.r6.prototype={
$1(a){return B.G},
$S:82}
A.hc.prototype={
m(a){return"MapFailure: "+this.a},
$iI:1}
A.dQ.prototype={}
A.w4.prototype={
$1(a){return typeof a=="string"},
$S:61}
A.w5.prototype={
$1(a){return typeof a=="string"},
$S:61}
A.ps.prototype={}
A.ex.prototype={}
A.jW.prototype={}
A.uV.prototype={}
A.tk.prototype={}
A.pE.prototype={
ek(a){return this.tR(a)},
tR(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$ek=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.Q.$0()
e=e.b
s=3
return A.a(e.vo("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$ek)
case 3:o=c
n=t.ox
m=A.l([],n)
for(l=J.K(o);l.l();)m.push(A.CV(l.gn()))
l=A.b0(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.E)(m),++j){i=m[j].z
if(i!=null)l.t(0,i)}s=4
return A.a(A.iO(e,l),$async$ek)
case 4:h=c
g=A.l([],n)
for(e=m.length,j=0;j<m.length;m.length===e||(0,A.E)(m),++j){f=m[j]
if(g.length>=a)break
n=f.z
if(n!=null&&h.E(0,n))continue
g.push(f)}q=g
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ek,r)},
m1(a){return this.a.X(new A.pG(a),t.H)},
v1(a,b,c,d){return this.a.X(new A.pH(c,d,b,a),t.H)}}
A.pG.prototype={
$1(a){return this.mB(a)},
mB(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.F("lp_op_queue",A.m(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.pH.prototype={
$1(a){return this.mC(a)},
mC(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.F("lp_op_queue",A.m(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.mD.prototype={}
A.ha.prototype={}
A.hy.prototype={}
A.pJ.prototype={
jU(){var s,r=this.b,q=J.x0(32,t.N)
for(s=0;s<32;++s)q[s]=B.b.mh(r.cl(16),16)
return B.c.cP(q)},
dI(a,b,c){return this.vu(a,b,c)},
vu(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$dI=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aH("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$dI)
case 3:p=e
o=J.J(p)
q=o.gB(p)?null:A.xb(o.gC(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dI,r)},
by(a,b,c){return this.vw(a,b,c)},
vw(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$by=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aH("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$by)
case 3:p=e
o=J.J(p)
q=o.gB(p)?null:A.rc(o.gC(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$by,r)},
b6(a,b,c,d,e,f,g,h,i,j,k,l){return this.rX(a,b,c,d,e,f,g,h,i,j,k,l)},
rX(a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$b6=A.c(function(c1,c2){if(c1===1)return A.d(c2,r)
for(;;)switch(s){case 0:a5=c0.a
a6=a5.a
a7=b9==null
a8=!a7
if(a8&&b9.w===B.P)throw A.b(A.yq("Record "+a6+"/"+b3+u.W))
o=a8&&b9.w===B.a3
a8=b6==null
n=a8?null:b6.c
m=!1
if(a8){A:{if(B.y===a9){l=b0==null?B.q:B.E
break A}if(B.D===a9){l=b0==null?B.q:B.L
break A}l=B.q
break A}n=l}else{l=b6.e
switch(b6.c.a){case 0:if(l==null){m=a9===B.y&&!a5.r
n=m?n:B.q}else{B:{if(B.y===a9){l=B.E
break B}if(B.D===a9){l=B.L
break B}l=B.q
break B}n=l}break
case 1:C:{if(B.D===a9){l=B.L
break C}l=B.E
break C}n=l
break
case 2:D:{if(B.y===a9){l=B.E
break D}if(B.D===a9){l=B.L
break D}l=B.q
break D}n=l
break}}s=m?3:4
break
case 3:s=5
return A.a(b2.a3("lp_outbox","store = ? AND record_id = ?",[a6,b3]),$async$b6)
case 5:s=6
return A.a(b2.a3("lp_sync_row","store = ? AND record_id = ?",[a6,b3]),$async$b6)
case 6:s=7
return A.a(p.fT(b2,a6,b3),$async$b6)
case 7:s=8
return A.a(b2.a3(a6,"id = ?",[b3]),$async$b6)
case 8:q=B.bd
s=1
break
case 4:k=p.a.Q.$0()
j=a8?null:b6.w
if(j==null)j=p.jU()
i=a8?null:b6.e
if(i==null)i=b0==null?null:b0.c
l=a8?null:b6.f
if(l==null){l=b0==null?null:b0.b
h=l}else h=l
if(h==null)h=""
g=a7?null:b9.r
if(g==null)g=b0==null?null:b0.a
l=t.N
f=A.b0(l)
e=a8?null:b6.r
if(e!=null)f.J(0,e)
f.J(0,b1)
d=A.P(f,f.$ti.c)
B.c.b0(d)
c=a8?null:b6.x
if(c==null)c=k
n.toString
f=B.e.a7(d,null)
b=A.Aw(h,i,c,a8?null:b6.z,f,n,j,b7,b3,a6,k)
s=a8?9:11
break
case 9:s=12
return A.a(b2.an(0,"lp_outbox",b),$async$b6)
case 12:s=10
break
case 11:s=13
return A.a(b2.F("lp_outbox",b,"store = ? AND record_id = ?",[a6,b3]),$async$b6)
case 13:case 10:a=a7?null:b9.y
if(a==null)a=0
a8=a7?null:b9.c
f=a7?null:b9.d
e=B.e.a7(d,null)
a0=a7?null:b9.z
if(a0==null)a0=B.ao
if(o)a1=0
else{a1=a7?null:b9.as
if(a1==null)a1=0}if(o)a2=0
else{a2=a7?null:b9.at
if(a2==null)a2=0}if(o)a3=null
else a3=a7?null:b9.ax
a4=A.m(["store",a6,"record_id",b3,"remote_updated",a8,"last_seen_at",f,"base_updated",i,"base_hash",h,"base_json",g,"sync_state","dirty","dirty_fields",e,"local_rev",a+1,"access_state",a0.b,"op_id",j,"attempt_count",a1,"next_retry_at",a2,"last_error",a3,"schema_ver",a5.b],l,t.X)
s=a7?14:16
break
case 14:s=17
return A.a(b2.an(0,"lp_sync_row",a4),$async$b6)
case 17:s=15
break
case 16:s=18
return A.a(b2.F("lp_sync_row",a4,"store = ? AND record_id = ?",[a6,b3]),$async$b6)
case 18:case 15:q=new A.ha()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$b6,r)},
fT(a,b,c){return this.rB(a,b,c)},
rB(a,b,c){var s=0,r=A.h(t.H)
var $async$fT=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.c7(a,b,c,!1),$async$fT)
case 2:return A.e(null,r)}})
return A.f($async$fT,r)},
el(a,b){return this.tS(a,b)},
tS(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$el=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.b
f=new A.ae("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").m(0)
e=A.P([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.al("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$el)
case 3:o=d
f=J.J(o)
if(f.gB(o)){q=B.bV
s=1
break}e=t.my
n=A.l([],e)
for(f=f.gu(o);f.l();)n.push(A.xb(f.gn()))
f=A.b0(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.E)(n),++l){k=n[l].z
if(k!=null)f.t(0,k)}s=4
return A.a(A.iO(g,f),$async$el)
case 4:j=d
i=A.l([],e)
for(g=n.length,l=0;l<n.length;n.length===g||(0,A.E)(n),++l){h=n[l]
if(i.length>=a)break
f=h.z
if(f!=null&&j.E(0,f))continue
i.push(h)}q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$el,r)},
jY(a){if(a.length===0)return A.ct(null,t.H)
return this.a.X(new A.pP(this,a),t.H)},
az(a,b){return this.rn(a,b)},
rn(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$az=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:b=a6.b
a=a7.a
a0=a.a
a1=a.b
a2=p.a
a3=a2.af(a0).a
a4=a2.Q.$0()
a5=a7.e
s=a5!=null?3:4
break
case 3:s=5
return A.a(b.aH("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$az)
case 5:o=a9
n=J.J(o)
s=!(n.gV(o)&&!J.v(J.a1(n.gC(o),"payload_json"),a.d))?6:7
break
case 6:a=a3.a
s=8
return A.a(b.aH(a,1,"id = ?",[a1]),$async$az)
case 8:m=a9
n=J.J(m)
l=n.gV(m)?A.cp(a3,n.gC(m),a2.y,a2.z):null
s=9
return A.a(b.F(a,A.dm(a3,J.v(a5.h(0,"archived"),!0),a2.y,a2.z,a1,a5),"id = ?",[a1]),$async$az)
case 9:a6.a0(new A.a2(a0,A.am([a1],t.N)))
k=A.bE(l==null?B.w:l,a5)
k.D(0,"id")
a6.d.push(new A.aK(a0,a1,B.V,B.t,l,a5,k))
case 7:case 4:a=a3.a
s=10
return A.a(b.aH(a,1,"id = ?",[a1]),$async$az)
case 10:j=a9
a5=J.J(j)
s=a5.gB(j)?11:12
break
case 11:s=13
return A.a(b.a3("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$az)
case 13:s=14
return A.a(p.cD(b,a0,a1,a7.c,a4),$async$az)
case 14:a6.a0(new A.a2(a0,A.am([a1],t.N)))
s=1
break
case 12:n=a2.y
a2=a2.z
i=A.cp(a3,a5.gC(j),n,a2)
h=A.az(B.l.v(B.h.v(A.ak(A.aX(a3,i)))).a)
a5=a7.b
g=A.az(B.l.v(B.h.v(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.a3("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$az)
case 18:s=19
return A.a(p.cD(b,a0,a1,a7.c,a4),$async$az)
case 19:a6.a0(new A.a2(a0,A.am([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.e.av(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.bv(d,a5,f):A.G(a5,f)
s=23
return A.a(b.F(a,A.dm(a3,J.v(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$az)
case 23:s=24
return A.a(b.a3("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$az)
case 24:s=25
return A.a(p.cD(b,a0,a1,a7.c,a4),$async$az)
case 25:a6.a0(new A.a2(a0,A.am([a1],a5)))
k=A.bE(i,c)
k.D(0,"id")
a6.d.push(new A.aK(a0,a1,B.V,B.t,i,c,k))
s=21
break
case 22:g=A.az(B.l.v(B.h.v(a5)).a)
a2=a7.c
n=t.N
f=t.X
s=26
return A.a(b.F("lp_sync_row",A.m(["base_json",a5,"base_hash",g,"base_updated",a2,"remote_updated",a2,"last_seen_at",a4,"access_state","visible"],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$az)
case 26:s=27
return A.a(b.F("lp_outbox",A.m(["base_updated",a2,"base_hash",g],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$az)
case 27:s=28
return A.a(b.F(a,A.m(["hidden",0],n,f),"id = ?",[a1]),$async$az)
case 28:a6.a0(new A.a2(a0,A.am([a1],n)))
case 21:case 16:case 1:return A.e(q,r)}})
return A.f($async$az,r)},
cD(a,b,c,d,e){return this.qi(a,b,c,d,e)},
qi(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$cD=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.F("lp_sync_row",A.m(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$cD)
case 2:s=3
return A.a(a.F(q.a.af(b).a.a,A.m(["hidden",0],p,o),"id = ?",[c]),$async$cD)
case 3:return A.e(null,r)}})
return A.f($async$cD,r)},
vx(a,b,c,d,e){return this.a.X(new A.pN(c,e,d,B.a2,a,b),t.H)},
m0(a,b,c,d,e,f){return this.a.X(new A.pM(this,c,f,b,a,d,e),t.H)},
hw(a,b,c,d,e){return this.m0(a,b,c,d,B.a3,e)},
m_(a,b,c){return this.a.X(new A.pL(a,c,b),t.H)},
vE(){return this.a.X(new A.pO(null),t.S)},
ef(a,b,c,d,e,f,g){return this.rU(a,b,c,d,e,f,g)},
rU(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$ef=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.F("lp_sync_row",A.m(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$ef)
case 2:p=A.G(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.F("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$ef)
case 3:return A.e(null,r)}})
return A.f($async$ef,r)}}
A.pP.prototype={
$1(a){return this.mH(a)},
mH(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
return A.a(o.az(a,l[p]),$async$$1)
case 5:case 3:l.length===k||(0,A.E)(l),++p
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.pN.prototype={
$1(a){return this.mF(a)},
mF(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.F("lp_sync_row",A.m(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.pM.prototype={
$1(a){return this.mE(a)},
mE(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.c
n=q.d
m=q.e
l=t.N
k=t.X
s=2
return A.a(p.an(0,"lp_dead_letter",A.m(["at",q.a.a.Q.$0(),"kind",q.b,"store",o,"record_id",n,"error",m,"payload_json",q.f],l,k)),$async$$1)
case 2:s=3
return A.a(p.F("lp_sync_row",A.m(["sync_state",q.r.b,"last_error",m],l,k),"store = ? AND record_id = ?",[o,n]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.pL.prototype={
$1(a){return this.mD(a)},
mD(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.F("lp_sync_row",A.m(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.pO.prototype={
$1(a){return this.mG(a)},
mG(a){var s=0,r=A.h(t.S),q,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=A.l(["blocked"],t.s)
q=a.b.F("lp_sync_row",A.m(["sync_state","dirty","last_error",null,"next_retry_at",0],t.N,t.X),"sync_state = ?",p)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:84}
A.dt.prototype={
ab(){return"ApplyResult."+this.b}}
A.kg.prototype={}
A.qn.prototype={
cR(a){return this.vj(a)},
vj(b5){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$cR=A.c(function(b6,b7){if(b6===1)return A.d(b7,r)
for(;;)switch(s){case 0:a9={}
b1=a9
s=3
return A.a(p.d.hF(b5),$async$cR)
case 3:b0=b1.a=b7
if(b0==null)o="1970-01-01 00:00:00.000Z"
else{n=b0.a
m=$.By().dw(n)
if(m==null)A.y(A.bd('Bad timestamp "'+n+'"'))
l=m.b
k=l[1]
k.toString
j=A.at(k)
k=l[2]
k.toString
i=A.at(k)
k=l[3]
k.toString
h=A.at(k)
k=l[4]
k.toString
g=A.at(k)
k=l[5]
k.toString
f=A.at(k)
k=l[6]
k.toString
e=A.at(k)
l=l[7]
l.toString
d=A.at(l)
if(i<1||i>12||g>23||f>59||e>59)A.y(A.bd('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.wV(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.qd(k))A.y(A.bd('Bad timestamp "'+n+'"'))
n=A.wV(j,i,h,g,f,e,d)
c=n.b
b=B.b.aC(c,1000)
l=n.c
o=A.Gf(new A.b8(A.nZ(n.a+B.b.O(c-b,1000)+-5000,b,l),b,l))}a=a9.b=a9.c=a9.d=0
n=p.a,l=t.P,k=n.e,a0=n.ch,a1=p.b,a2='No store "'+b5+'" registered in this LocalPocket.',a3=null
case 4:if(!(a4=!1,!0)){s=5
break}a5=a1.z
a5===$&&A.u()
s=6
return A.a(a5.ex(b5,null,a3,o,null,200),$async$cR)
case 6:a6=b7
a5=J.J(a6)
if(a5.gB(a6)){s=5
break}++k.as
a7=p.qk(a6)
a8=a0.h(0,b5)
if(a8==null)A.y(A.w(a2))
b1=n
b2=A
b3=a9
b4=b5
s=8
return A.a(A.xY(a8.a,a6),$async$cR)
case 8:s=7
return A.a(b1.X(new b2.qr(b3,p,b4,b7,a7),l),$async$cR)
case 7:o=a7.c
a3=a7.a;++a
if(a5.gk(a6)<200){s=5
break}if(a>=100){a4=!0
s=5
break}s=4
break
case 5:q=new A.kg(a9.d,a4)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cR,r)},
lk(a,b){var s=B.a.T(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.T(a.a,b.b)<=0},
ru(a,b){var s=B.a.T(a.c,b.c)
if(s!==0)return s>0
return B.a.T(a.a,b.a)>0},
qk(a){var s,r,q,p=J.aw(a),o=p.gC(a)
for(p=p.b_(a,1),s=p.$ti,p=new A.a5(p,p.gk(0),s.i("a5<Q.E>")),s=s.i("Q.E");p.l();){r=p.d
q=r==null?s.a(r):r
if(this.ru(q,o))o=q}return o},
hc(a){return this.u5(a)},
u5(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hc=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.a.X(new A.qo(o,p,a),t.P),$async$hc)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hc,r)},
cL(a,b){return this.u7(a,b)},
u7(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$cL=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.jR(b3,!0,t.N)
i=n.a,h=t.P,g=t.i7,f=i.ch,e=n.b,d=A.a8(j),c=d.c,d=d.i("c2<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.c2(j,0,200,d)
a2.hZ(j,0,200,c)
a3=a2.dM(0)
a4=a3.length
b&1&&A.C(j,18)
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
a7===$&&A.u()
s=12
return A.a(a7.bA(l),$async$cL)
case 12:k=b5
p=2
s=11
break
case 9:p=8
b1=o.pop()
a7=A.M(b1)
if(a7 instanceof A.cf){J.bU(m,l)
s=6
break}else if(a7 instanceof A.bG)throw b1
else if(a7 instanceof A.b2){s=6
break}else throw b1
s=11
break
case 8:s=2
break
case 11:if(k==null){J.bU(m,l)
s=6
break}a5.push(k)
case 6:a3.length===a2||(0,A.E)(a3),++a6
s=5
break
case 7:s=J.av(m)!==0?13:14
break
case 13:s=15
return A.a(n.eA(b2,m),$async$cL)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.y(A.w(a1))
b0=a9.a
a2=A.l([],g)
for(a7=a5.length,a6=0;a6<a5.length;a5.length===a7||(0,A.E)(a5),++a6)a2.push(A.xZ(b0,a5[a6]))
s=16
return A.a(i.X(new A.qp(n,a2,b2,b0),h),$async$cL)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cL,r)},
di(a,b,c,d){return this.qL(a,b,c,d)},
qL(a0,a1,a2,a3){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$di=A.c(function(a4,a5){if(a4===1)return A.d(a5,r)
for(;;)switch(s){case 0:d=t.N
c=A.G(d,t.nw)
b=A.G(d,t.G)
o=p.a,n=o.y,m=o.z,o=o.ch,l='No store "'+a1+'" registered in this LocalPocket.',k=0
case 3:if(!(j=a3.length,k<j)){s=5
break}i=k+500
h=B.c.R(a3,k,B.b.j3(i,0,j))
g=B.c.M(A.aJ(h.length,"?",!1,d),", ")
j=[a1]
B.c.J(j,h)
a=J
s=6
return A.a(a0.al(u.m+g+")",j),$async$di)
case 6:j=a.K(a5)
case 7:if(!j.l()){s=8
break}f=j.gn()
c.j(0,A.H(f.h(0,"record_id")),A.rc(f))
s=7
break
case 8:e=o.h(0,a1)
if(e==null)A.y(A.w(l))
a=J
s=9
return A.a(a0.dH(e.a.a,"id IN ("+g+")",h),$async$di)
case 9:j=a.K(a5)
case 10:if(!j.l()){s=11
break}f=j.gn()
b.j(0,A.H(f.h(0,"id")),A.cp(a2,f,n,m))
s=10
break
case 11:case 4:k=i
s=3
break
case 5:q=new A.aB(c,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$di,r)},
lu(a,b,c,d,e){return this.a1(a,b,A.xZ(this.a.af(b).a,c),null,!1,d,e)},
rZ(a,b,c){return this.lu(a,b,c,null,!1)},
a1(a,b,c,d,e,f,g){return this.rY(a,b,c,d,e,f,g)},
lt(a,b,c){return this.a1(a,b,c,null,!1,null,!1)},
rY(a5,a6,a7,a8,a9,b0,b1){var s=0,r=A.h(t.bG),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$a1=A.c(function(b2,b3){if(b2===1)return A.d(b3,r)
for(;;)switch(s){case 0:a0=a5.b
a1=p.a
a2=a1.af(a6).a
a3=a7.a
a4=a7.e
s=a4!=null?3:4
break
case 3:s=5
return A.a(p.bG(a0,a2,a6,a3,a4),$async$a1)
case 5:q=B.a5
s=1
break
case 4:a4=a7.b
a4.toString
o=A.aX(a2,a4)
n=a7.c
n.toString
m=a7.d
m.toString
l=a3.b
s=l!==a6?6:7
break
case 6:s=8
return A.a(p.bG(a0,a2,a6,a3,'Remote store "'+l+'" does not match requested store "'+a6+'".'),$async$a1)
case 8:q=B.a5
s=1
break
case 7:l=a3.a
k=$.y9()
s=!k.b.test(l)?9:10
break
case 9:s=11
return A.a(p.bG(a0,a2,a6,a3,'Invalid remote record id "'+l+'".'),$async$a1)
case 11:q=B.a5
s=1
break
case 10:s=b1?12:14
break
case 12:j=b0
s=13
break
case 14:k=a1.as
k===$&&A.u()
s=15
return A.a(k.by(a0,a6,l),$async$a1)
case 15:j=b3
case 13:s=a9?16:18
break
case 16:i=a8
s=17
break
case 18:s=19
return A.a(a0.aH(a2.a,1,"id = ?",[l]),$async$a1)
case 19:h=b3
k=J.J(h)
i=k.gB(h)?null:A.cp(a2,k.gC(h),a1.y,a1.z)
case 17:k=a3.e
g=k.length
s=g!==0?20:21
break
case 20:s=22
return A.a(p.e.cQ(a0,l,k,a6),$async$a1)
case 22:case 21:s=i==null?23:24
break
case 23:s=25
return A.a(a0.an(0,a2.a,A.dm(a2,J.v(a4.h(0,"archived"),!0),a1.y,a1.z,l,a4)),$async$a1)
case 25:s=26
return A.a(p.cG(a0,a6,l,p.c.ay.$0(),j,a3.c,B.r,!0),$async$a1)
case 26:a5.a0(new A.a2(a6,A.am([l],t.N)))
f=A.bE(B.w,a4)
f.D(0,"id")
a5.d.push(new A.aK(a6,l,B.a6,B.ax,null,a4,f))
q=B.Q
s=1
break
case 24:k=j==null
e=k?null:j.w
if(e==null)e=B.r
s=e===B.r?27:28
break
case 27:n=k?null:j.c
m=a3.c
s=n===m?29:30
break
case 29:s=31
return A.a(p.bI(a5,a6,l,m,!1),$async$a1)
case 31:q=B.R
s=1
break
case 30:s=32
return A.a(a0.F(a2.a,A.dm(a2,J.v(a4.h(0,"archived"),!0),a1.y,a1.z,l,a4),"id = ?",[l]),$async$a1)
case 32:s=33
return A.a(p.cG(a0,a6,l,p.c.ay.$0(),j,m,B.r,!0),$async$a1)
case 33:a5.a0(new A.a2(a6,A.am([l],t.N)))
f=A.bE(i,a4)
f.D(0,"id")
a5.d.push(new A.aK(a6,l,B.a6,B.t,i,a4,f))
q=B.Q
s=1
break
case 28:s=e===B.a2||e===B.aW||e===B.P?34:35
break
case 34:a4=k?null:j.e
g=a3.c
s=a4===g?36:37
break
case 36:s=38
return A.a(p.bI(a5,a6,l,g,!1),$async$a1)
case 38:q=B.R
s=1
break
case 37:s=e===B.P?39:40
break
case 39:s=41
return A.a(p.bI(a5,a6,l,g,!1),$async$a1)
case 41:q=B.R
s=1
break
case 40:d=A.aX(a2,i)
s=A.ak(d)===n?42:43
break
case 42:s=44
return A.a(a0.a3("lp_outbox","store = ? AND record_id = ?",[a6,l]),$async$a1)
case 44:s=45
return A.a(p.cG(a0,a6,l,p.c.ay.$0(),j,g,B.r,!0),$async$a1)
case 45:a5.a0(new A.a2(a6,A.am([l],t.N)))
q=B.Q
s=1
break
case 43:c=A.iM(k?null:j.r)
a4=A.AP(c,d,new A.jW(null,B.aK,!1),l,o,a6)
s=46
return A.a(t.fr.b(a4)?a4:A.bg(a4,t.r),$async$a1)
case 46:b=b3
s=b.b?47:48
break
case 47:s=49
return A.a(p.e6(a0,a6,a3,a2,j,d,b),$async$a1)
case 49:s=50
return A.a(p.bI(a5,a6,l,g,!1),$async$a1)
case 50:a1=t.N
a5.a0(new A.a2(a6,A.am([l],a1)))
a5.a0(new A.a2("lp_conflicts",A.am([l],a1)))
q=B.aY
s=1
break
case 48:a=b.a
s=51
return A.a(a0.F(a2.a,A.dm(a2,J.v(a.h(0,"archived"),!0),a1.y,a1.z,l,a),"id = ?",[l]),$async$a1)
case 51:a1=a1.as
a1===$&&A.u()
s=52
return A.a(a1.ef(a0,a6,l,m,n,g,A.ak(a)),$async$a1)
case 52:s=53
return A.a(p.rs(a5,a6,l,g),$async$a1)
case 53:a5.a0(new A.a2(a6,A.am([l],t.N)))
f=A.bE(i,a)
f.D(0,"id")
a5.d.push(new A.aK(a6,l,B.V,B.t,i,a,f))
q=B.Q
s=1
break
case 35:q=B.R
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$a1,r)},
e6(a,b,c,d,e,f,g){return this.r1(a,b,c,d,e,f,g)},
r1(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i
var $async$e6=A.c(function(h,a0){if(h===1)return A.d(a0,r)
for(;;)switch(s){case 0:m=e==null
l=A.iM(m?null:e.r)
k=A.aX(d,A.ej(d,c))
j=A.bE(l,f)
i=A.P(j,A.o(j).c)
B.c.b0(i)
j=A.bE(l,k)
p=A.P(j,A.o(j).c)
B.c.b0(p)
j=c.a
m=m?null:e.r
if(m==null)m=A.ak(l)
o=t.N
n=t.X
s=2
return A.a(a.cO(0,"lp_conflicts",A.m(["store",b,"record_id",j,"base_json",m,"local_json",A.ak(f),"remote_json",A.ak(k),"dirty_local",B.e.a7(i,null),"dirty_remote",B.e.a7(p,null),"detected_at",q.c.ay.$0()],o,n),B.a7),$async$e6)
case 2:s=3
return A.a(a.F("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ak(k),"base_hash",A.az(B.l.v(B.h.v(A.ak(A.aX(d,k)))).a),"base_updated",c.c],o,n),"store = ? AND record_id = ?",[b,j]),$async$e6)
case 3:return A.e(null,r)}})
return A.f($async$e6,r)},
bG(a,b,c,d,e){return this.qW(a,b,c,d,e)},
qW(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bG=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.e.a7(d.d,null)}catch(a1){o=t.N
e=B.e.a7(A.m(["raw",d.d.m(0)],o,o),null)}o=q.c
n=o.ay
m=d.a
l=t.N
k=t.X
s=2
return A.a(a.an(0,"lp_dead_letter",A.m(["at",n.$0(),"kind","map_failure","store",c,"record_id",m,"error",a0,"payload_json",e],l,k)),$async$bG)
case 2:j=q.a.as
j===$&&A.u()
s=3
return A.a(j.by(a,c,m),$async$bG)
case 3:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=n.$0()+B.b.O(o.lI(g).a,1000)
o=d.c
s=j?4:6
break
case 4:s=7
return A.a(a.an(0,"lp_sync_row",A.m(["store",c,"record_id",m,"remote_updated",o,"sync_state","quarantine","attempt_count",g,"next_retry_at",f,"last_error",a0,"schema_ver",b.b],l,k)),$async$bG)
case 7:s=5
break
case 6:s=8
return A.a(a.F("lp_sync_row",A.m(["sync_state","quarantine","last_error",a0,"remote_updated",o,"attempt_count",g,"next_retry_at",f],l,k),"store = ? AND record_id = ?",[c,m]),$async$bG)
case 8:case 5:return A.e(null,r)}})
return A.f($async$bG,r)},
cG(a,b,c,d,e,f,g,h){return this.rA(a,b,c,d,e,f,g,!0)},
rA(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$cG=A.c(function(i,j){if(i===1)return A.d(j,r)
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
return A.a(a.an(0,"lp_sync_row",o),$async$cG)
case 5:s=3
break
case 4:s=6
return A.a(a.F("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$cG)
case 6:case 3:return A.e(null,r)}})
return A.f($async$cG,r)},
bI(a,b,c,d,e){return this.rt(a,b,c,d,e)},
rs(a,b,c,d){return this.bI(a,b,c,d,!0)},
rt(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$bI=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=A.G(o,n)
m.j(0,"last_seen_at",q.c.ay.$0())
m.j(0,"access_state","visible")
if(e)m.j(0,"remote_updated",d)
s=2
return A.a(p.F("lp_sync_row",m,"store = ? AND record_id = ?",[b,c]),$async$bI)
case 2:s=3
return A.a(p.F(q.a.af(b).a.a,A.m(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$bI)
case 3:if(g>0)a.a0(new A.a2(b,A.am([c],o)))
return A.e(null,r)}})
return A.f($async$bI,r)},
eA(a,b){return this.v2(a,b)},
v2(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$eA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.jR(b,!0,t.N)
n=A.a8(o),m=n.c,n=n.i("c2<1>"),l=o.$flags|0,k=p.a,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.c2(o,0,500,n)
i.hZ(o,0,500,m)
h=i.dM(0)
g=h.length
l&1&&A.C(o,18)
A.b1(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.X(new A.qq(p,a,h),j),$async$eA)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$eA,r)}}
A.qr.prototype={
$1(a){return this.mM(a)},
mM(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$$1=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:d=q.a
c=d.a
b=a4.b
a=q.b
a0=a.a
a1=q.c
a2=a0.af(a1)
a3=A.l([],t.s)
for(p=q.d,o=J.aw(p),n=o.gu(p);n.l();)a3.push(n.gn().a.a)
s=2
return A.a(a.di(b,a1,a2.a,a3),$async$$1)
case 2:m=a6
l=m.a
k=m.b
j=A.b0(t.N)
a2=o.gu(p),a0=a0.e
case 3:if(!a2.l()){s=4
break}a3=a2.gn()
i=a3.a
if(c!=null&&a.lk(i,c)){s=3
break}p=i.a
s=j.E(0,p)?5:7
break
case 5:s=8
return A.a(a.lt(a4,a1,a3),$async$$1)
case 8:h=a6
s=6
break
case 7:o=l.h(0,p)
s=9
return A.a(a.a1(a4,a1,a3,k.h(0,p),!0,o,!0),$async$$1)
case 9:h=a6
j.t(0,p)
case 6:switch(h.a){case 0:++d.d;++a0.at
break
case 1:++d.c
break
case 2:++d.b
break
case 3:break}s=3
break
case 4:g=c==null||!a.lk(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.dO(b,a1,e,f),$async$$1)
case 10:d.a=new A.hw(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.qo.prototype={
$1(a){return this.mJ(a)},
mJ(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.as
k===$&&A.u()
o=p.c
n=o.b
s=3
return A.a(k.by(a.b,n,o.a),$async$$1)
case 3:m=c
s=m==null?4:5
break
case 4:s=6
return A.a(l.rZ(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.r){s=1
break}k=m.c
if(k!=null&&B.a.T(o.c,k)<=0){s=1
break}s=7
return A.a(l.lu(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.qp.prototype={
$1(a){return this.mK(a)},
mK(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=A.l([],t.s)
for(p=q.b,o=p.length,n=0;n<p.length;p.length===o||(0,A.E)(p),++n)e.push(p[n].a.a)
o=q.a
m=q.c
s=2
return A.a(o.di(a.b,m,q.d,e),$async$$1)
case 2:l=c
k=l.a
j=l.b
i=A.b0(t.N)
e=p.length,n=0
case 3:if(!(n<p.length)){s=5
break}h=p[n]
g=h.a.a
s=i.E(0,g)?6:8
break
case 6:s=9
return A.a(o.lt(a,m,h),$async$$1)
case 9:s=7
break
case 8:f=k.h(0,g)
s=10
return A.a(o.a1(a,m,h,j.h(0,g),!0,f,!0),$async$$1)
case 10:i.t(0,g)
case 7:case 4:p.length===e||(0,A.E)(p),++n
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.qq.prototype={
$1(a){return this.mL(a)},
mL(a1){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$$1=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:j=a1.b
i=q.a.a
h=q.b
g=i.af(h).a
f=i.af(h).a.a
e=q.c
d=t.N
c=B.c.M(A.aJ(e.length,"?",!1,d),", ")
b="id IN ("+c+")"
a=A.G(d,t.G)
a0=J
s=2
return A.a(j.dH(f,b,e),$async$$1)
case 2:p=a0.K(a3),o=i.y,i=i.z
case 3:if(!p.l()){s=4
break}n=p.gn()
a.j(0,A.H(n.h(0,"id")),A.cp(g,n,o,i))
s=3
break
case 4:i=t.X
p=A.m(["access_state","hidden"],d,i)
o=[h]
B.c.J(o,e)
s=5
return A.a(j.F("lp_sync_row",p,"store = ? AND record_id IN ("+c+")",o),$async$$1)
case 5:s=6
return A.a(j.F(f,A.m(["hidden",1],d,i),b,e),$async$$1)
case 6:a1.a0(new A.a2(h,A.p6(e,A.a8(e).c)))
for(b=e.length,p=a1.d,m=0;m<e.length;e.length===b||(0,A.E)(e),++m){l=e[m]
k=a.h(0,l)
if(k!=null){o=A.h7(null,null,d,i)
o.J(0,k)
o.j(0,"hidden",!0)
p.push(new A.aK(h,l,B.a6,B.bj,k,o,B.ch))}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.aF.prototype={}
A.qs.prototype={
eH(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g
var $async$eH=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:g=p.a.as
g===$&&A.u()
s=3
return A.a(g.el(25,p.c.ay.$0()),$async$eH)
case 3:o=b
g=J.J(o)
if(g.gB(o)){q=B.N
s=1
break}if(p.f){q=p.b4(o)
s=1
break}g=g.gu(o),n=B.N
case 4:if(!g.l()){s=5
break}s=6
return A.a(p.dk(g.gn()),$async$eH)
case 6:m=b
l=m.a
k=m.b
j=m.c
i=m.d
h=n.e||m.e
n=new A.aF(n.a+l,n.b+k,n.c+j,n.d+i,h)
s=4
break
case 5:q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eH,r)},
dk(a){return this.qT(a)},
qT(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dk=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.as
l===$&&A.u()
m=m.b
s=3
return A.a(l.dI(m,a.a,a.b),$async$dk)
case 3:o=c
if(o==null){q=B.N
s=1
break}s=4
return A.a(l.by(m,o.a,o.b),$async$dk)
case 4:n=c
if(n==null){q=B.N
s=1
break}if(o.e==null){q=p.iJ(o,n)
s=1
break}q=p.iK(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dk,r)},
bo(a,b,c,d){return this.pr(a,b,c,d)},
kK(a,b,c){return this.bo(a,b,c,!1)},
pr(a,b,c,d){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bo=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(c.$0(),$async$bo)
case 7:k=f
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o.pop()
k=A.M(i)
s=k instanceof A.bG?8:10
break
case 8:n.e.$0()
q=B.ab
s=1
break
s=9
break
case 10:s=k instanceof A.cb?11:13
break
case 11:k=n.a.as
k===$&&A.u()
s=14
return A.a(k.m_("forbidden_push",a.b,a.a),$async$bo)
case 14:q=B.cf
s=1
break
s=12
break
case 13:s=k instanceof A.eE?15:17
break
case 15:m=k
s=d?18:19
break
case 18:s=20
return A.a(n.dW(a,"validation_push",m.a),$async$bo)
case 20:q=B.F
s=1
break
case 19:q=n.c7(a,b,m)
s=1
break
s=16
break
case 17:s=k instanceof A.cf?21:23
break
case 21:s=24
return A.a(n.f7(a,"missing_target"),$async$bo)
case 24:q=B.F
s=1
break
s=22
break
case 23:if(k instanceof A.b2){l=k
q=n.c7(a,b,l)
s=1
break}else throw i
case 22:case 16:case 12:case 9:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bo,r)},
iJ(a,b){return this.qS(a,b)},
qS(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$iJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.bo(a,b,new A.qt(p,a,b),!0)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iJ,r)},
iN(a,b){return this.r2(a,b)},
r2(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$iN=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.kK(a,b,new A.qy(p,a,p.a.af(a.a).a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iN,r)},
iK(a,b){return this.qU(a,b)},
qU(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$iK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.kK(a,b,new A.qw(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iK,r)},
dl(a,b,c){return this.qV(a,b,c)},
qV(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n
var $async$dl=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=p.a.af(a.a).a
s=A.az(B.l.v(B.h.v(A.ak(A.aX(n,A.ej(n,c))))).a)===A.az(B.l.v(B.h.v(a.d)).a)?3:4
break
case 3:s=5
return A.a(p.ea(a,c),$async$dl)
case 5:q=B.M
s=1
break
case 4:s=6
return A.a(p.df(a,b,c,n),$async$dl)
case 6:o=e
if(o==null){q=B.ce
s=1
break}q=p.bo(a,b,new A.qu(p,a,A.ak(o.a),o),!0)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dl,r)},
b4(a){return this.qR(a)},
qR(c3){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2
var $async$b4=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:b5=A.l([],t.k1)
b6=t.N
b7=A.G(b6,t.G)
b8=0
b9=0
c0=0
c1=A.G(b6,b6)
b6=J.K(c3),h=n.a,g=h.e,f=n.b,e=h.ch,d=h.b,c=0
case 3:if(!b6.l()){s=4
break}b=b6.gn()
a=h.as
a===$&&A.u()
s=5
return A.a(a.dI(d,b.a,b.b),$async$b4)
case 5:m=c5
if(m==null){s=3
break}c1.j(0,m.w,m.d)
s=6
return A.a(a.by(d,m.a,m.b),$async$b4)
case 6:l=c5
if(l==null){s=3
break}b=m.a
a0=e.h(0,b)
if(a0==null)A.y(A.w('No store "'+b+'" registered in this LocalPocket.'))
a1=a0.a
k=null
p=8;++g.z
b=m.b
a2=f.z
a2===$&&A.u()
s=11
return A.a(a2.bA(b),$async$b4)
case 11:k=c5
p=2
s=10
break
case 8:p=7
c2=o.pop()
b=A.M(c2)
s=b instanceof A.cf?12:14
break
case 12:s=m.e!=null?15:16
break
case 15:s=17
return A.a(n.f7(m,"missing_target"),$async$b4)
case 17:++b9
s=3
break
case 16:k=null
s=13
break
case 14:s=b instanceof A.bG?18:20
break
case 18:n.e.$0()
q=new A.aF(0,0,0,0,!0)
s=1
break
s=19
break
case 20:s=b instanceof A.cb?21:23
break
case 21:b=m.a
s=24
return A.a(a.m_("forbidden_push",m.b,b),$async$b4)
case 24:++c0
s=3
break
s=22
break
case 23:s=b instanceof A.b2?25:27
break
case 25:j=b
s=28
return A.a(n.c7(m,l,j),$async$b4)
case 28:i=c5
b8+=i.a
b9+=i.b
s=3
break
s=26
break
case 27:throw c2
case 26:case 22:case 19:case 13:s=10
break
case 7:s=2
break
case 10:s=k!=null?29:30
break
case 29:a4=new A.ae("")
A.iH(a4,A.aX(a1,A.ej(a1,k)))
b=a4.a
b=B.h.v(b.charCodeAt(0)==0?b:b)
a5=new A.ep()
a=A.lN(a5)
a.t(0,b)
a.p()
a6=A.az(a5.a.a)
a=B.h.v(m.d)
a5=new A.ep()
b=A.lN(a5)
b.t(0,a)
b.p()
s=a6===A.az(a5.a.a)?31:32
break
case 31:s=33
return A.a(n.ea(m,k),$async$b4)
case 33:++b8
s=3
break
case 32:s=34
return A.a(n.df(m,l,k,a1),$async$b4)
case 34:a7=c5
if(a7==null){++c
s=3
break}b=m.w
a=m.a
a2=m.b
a8=a7.a
a4=new A.ae("")
A.iH(a4,a8)
a9=a4.a
b0=m.e==null?null:k.c
b5.push(new A.eG(b,a,a2,a9.charCodeAt(0)==0?a9:a9,b0))
b7.j(0,m.w,a8)
s=3
break
case 30:b5.push(new A.eG(m.w,m.a,m.b,m.d,m.e))
s=3
break
case 4:s=b5.length!==0?35:36
break
case 35:b1=0
case 37:if(!(b2=b5.length,b1<b2)){s=39
break}b3=b1+25
s=40
return A.a(n.bH(B.c.R(b5,b1,b3<b2?b3:b2),b7,c1),$async$b4)
case 40:b4=c5
b8+=b4.a
b9+=b4.b
c+=b4.c
if(b4.e){q=new A.aF(b8,b9,c,c0,!0)
s=1
break}case 38:b1=b3
s=37
break
case 39:case 36:q=new A.aF(b8,b9,c,c0,!1)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b4,r)},
df(a,b,c,d){return this.ql(a,b,c,d)},
ql(a,b,c,d){var s=0,r=A.h(t.nh),q,p=this,o,n,m
var $async$df=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.ej(d,c)
n=A.AP(A.iM(b.r),A.iM(a.d),new A.jW(null,B.aK,!1),a.b,A.aX(d,o),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bg(n,t.r),$async$df)
case 3:m=f
s=m.b?4:5
break
case 4:s=6
return A.a(p.fQ(a,b,c,m),$async$df)
case 6:q=null
s=1
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$df,r)},
bH(a,b,c){return this.ri(a,b,c)},
ri(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$bH=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b2=0
b3=0
p=4
a3=n.b.z
a3===$&&A.u()
s=7
return A.a(a3.eG(b5),$async$bH)
case 7:m=b9
a3=t.N
l=A.G(a3,t.gq)
for(a4=b5.length,a5=0;a5<b5.length;b5.length===a4||(0,A.E)(b5),++a5){k=b5[a5]
J.bT(l,k.a,k)}j=l
i=A.b0(a3)
for(l=J.K(m);l.l();){h=l.gn()
if(!J.bU(i,h.a)){l=A.bd("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.I(h.a)){l=A.bd("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.l([],t.bo)
l=J.K(m),a3=n.a
case 8:if(!l.l()){s=9
break}f=l.gn()
a4=J.a1(j,f.a)
a4.toString
e=a4
s=f.b&&f.c!=null?10:12
break
case 10:a4=n.iD(e,b7.h(0,e.a))
a6=B.h.v(e.d)
a7=new A.ep()
a8=A.lN(a7)
a8.t(0,a6)
a8.p()
a8=A.az(a7.a.a)
a6=f.e
if(a6==null)a6=e.d
J.bU(g,new A.hy(a4,a6,f.c.c,a8,b6.h(0,e.a)));++b2
s=11
break
case 12:a4=a3.as
a4===$&&A.u()
a6=e.b
a8=e.c
a9=f.d
if(a9==null)a9="batch_failed"
b0=f.d
if(b0==null)b0="batch_failed"
s=13
return A.a(a4.hw(b0,a8,a9,e.d,a6),$async$bH)
case 13:++b3
case 11:s=8
break
case 9:l=a3.as
l===$&&A.u()
s=14
return A.a(l.jY(g),$async$bH)
case 14:l=b2
a3=b3
q=new A.aF(l,a3,0,0,!1)
s=1
break
p=2
s=6
break
case 4:p=3
b4=o.pop()
l=A.M(b4)
s=l instanceof A.du?15:17
break
case 15:q=n.bE(b5,b6,b7)
s=1
break
s=16
break
case 17:s=l instanceof A.cb?18:20
break
case 18:n.f=!1
l=b5.length,a5=0
case 21:if(!(a5<b5.length)){s=23
break}d=b5[a5]
s=24
return A.a(n.dk(n.kQ(d)),$async$bH)
case 24:c=b9
b2+=c.a
b3+=c.b
case 22:b5.length===l||(0,A.E)(b5),++a5
s=21
break
case 23:q=new A.aF(b2,b3,0,0,!1)
s=1
break
s=19
break
case 20:s=l instanceof A.bG?25:27
break
case 25:n.e.$0()
q=B.ab
s=1
break
s=26
break
case 27:s=l instanceof A.b2?28:30
break
case 28:b=l
a=b instanceof A.dT?b:new A.eT("network error")
l=b5.length,a3=n.a,a4=a3.b,a5=0
case 31:if(!(a5<b5.length)){s=33
break}a0=b5[a5]
a6=a3.as
a6===$&&A.u()
s=34
return A.a(a6.by(a4,a0.b,a0.c),$async$bH)
case 34:a1=b9
s=a1!=null?35:36
break
case 35:s=37
return A.a(n.c7(n.kQ(a0),a1,a),$async$bH)
case 37:a2=b9
b2+=a2.a
b3+=a2.b
case 36:case 32:b5.length===l||(0,A.E)(b5),++a5
s=31
break
case 33:q=new A.aF(b2,b3,0,0,!0)
s=1
break
s=29
break
case 30:throw b4
case 29:case 26:case 19:case 16:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bH,r)},
bE(a,b,c){return this.nM(a,b,c)},
nM(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$bE=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.J(b5)
s=b3.gk(b5)===1?3:4
break
case 3:g=b3.gaR(b5)
h=n.a.as
h===$&&A.u()
b3=g.b
s=5
return A.a(h.hw("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$bE)
case 5:q=B.F
s=1
break
case 4:a0=B.b.O(b3.gk(b5),2)
m=0
l=0
k=!1
b3=[b3.R(b5,0,a0),b3.aS(b5,a0)],a1=n.a,a2=t.N,a3=n.b,a4=t.gq,a5=0
case 6:if(!(a5<2)){s=8
break}j=b3[a5]
p=10
a6=a3.z
a6===$&&A.u()
s=13
return A.a(a6.eG(j),$async$bE)
case 13:i=b9
h=A.G(a2,a4)
for(a6=J.K(j);a6.l();){g=a6.gn()
J.bT(h,g.a,g)}f=h
e=A.b0(a2)
for(a6=J.K(i);a6.l();){d=a6.gn()
if(!J.bU(e,d.a)){a6=A.bd("Batch response references duplicate op "+d.a+".")
throw A.b(a6)}if(!f.I(d.a)){a6=A.bd("Batch response references unknown op "+d.a+".")
throw A.b(a6)}}a6=J.K(i)
case 14:if(!a6.l()){s=15
break}c=a6.gn()
a7=J.a1(f,c.a)
a7.toString
b=a7
s=c.b&&c.c!=null?16:18
break
case 16:a7=n.iD(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.dn(a7,a8,a9,b0==null?b.d:b0),$async$bE)
case 19:++m
s=17
break
case 18:a7=a1.as
a7===$&&A.u()
a8=b.b
a9=b.c
b0=c.d
if(b0==null)b0="batch_poison"
b1=c.d
if(b1==null)b1="batch_poison"
s=20
return A.a(a7.hw(b1,a9,b0,b.d,a8),$async$bE)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b4=o.pop()
a6=A.M(b4)
s=a6 instanceof A.du?21:23
break
case 21:s=24
return A.a(n.bE(j,b6,b7),$async$bE)
case 24:a=b9
m+=a.a
l+=a.b
k=k||a.e
s=22
break
case 23:if(a6 instanceof A.b2){k=!0
s=7
break}else throw b4
case 22:s=12
break
case 9:s=2
break
case 12:case 7:++a5
s=6
break
case 8:q=new A.aF(m,l,0,0,k)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bE,r)},
iD(a,b){var s=b==null?a.d:b
return new A.cz(a.b,a.c,B.q,s,a.e,A.az(B.l.v(B.h.v(a.d)).a),B.p,a.a,0,null)},
kQ(a){return this.iD(a,null)},
dn(a,b,c,d){return this.rm(a,b,c,d)},
ea(a,b){return this.dn(a,b,null,null)},
rm(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dn=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.af(a.a).a
n=A.ej(o,b)
m=d==null
l=m?A.ak(A.aX(o,n)):d
p=p.as
p===$&&A.u()
s=2
return A.a(p.jY(A.l([new A.hy(a,l,b.c,A.az(B.l.v(B.h.v(m?a.d:d)).a),c)],t.bo)),$async$dn)
case 2:return A.e(null,r)}})
return A.f($async$dn,r)},
c7(a,b,c){return this.r9(a,b,c)},
r9(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$c7=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.dT?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.as
o===$&&A.u()
s=5
return A.a(o.m0(c.a,a.b,"max_attempts",a.d,B.a3,a.a),$async$c7)
case 5:q=B.F
s=1
break
case 4:o=p.c
n=o.lJ(l,k)
m=p.a.as
m===$&&A.u()
s=6
return A.a(m.vx(a.a,a.b,l,c.a,o.ay.$0()+B.b.O(n.a,1000)),$async$c7)
case 6:q=B.ab
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c7,r)},
dW(a,b,c){return this.o7(a,b,c)},
f7(a,b){return this.dW(a,b,null)},
o7(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dW=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.as
o===$&&A.u()
p=c==null?b:c
s=2
return A.a(o.hw(p,a.b,b,a.d,a.a),$async$dW)
case 2:return A.e(null,r)}})
return A.f($async$dW,r)},
fQ(a,b,c,d){return this.r0(a,b,c,d)},
r0(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h
var $async$fQ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=q.a
n=o.af(a.a).a
m=A.ej(n,c)
l=A.iM(b.r)
k=A.iM(a.d)
j=A.aX(n,m)
i=A.bE(l,k)
h=A.P(i,A.o(i).c)
B.c.b0(h)
i=A.bE(l,j)
p=A.P(i,A.o(i).c)
B.c.b0(p)
s=2
return A.a(o.X(new A.qx(q,a,b,l,k,j,h,p,n,c),t.P),$async$fQ)
case 2:return A.e(null,r)}})
return A.f($async$fQ,r)}}
A.qt.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.z
j===$&&A.u()
s=7
return A.a(j.h6(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.ea(k,m),$async$$0)
case 8:q=B.M
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
if(A.M(h) instanceof A.eq){q=n.a.iN(n.b,n.c)
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
A.qy.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.z
l===$&&A.u()
s=3
return A.a(l.bA(m.b),$async$$0)
case 3:o=b
s=o==null?4:5
break
case 4:s=6
return A.a(n.f7(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.F
s=1
break
case 5:l=p.c
s=A.az(B.l.v(B.h.v(A.ak(A.aX(l,A.ej(l,o))))).a)===A.az(B.l.v(B.h.v(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.ea(m,o),$async$$0)
case 9:q=B.M
s=1
break
case 8:s=10
return A.a(n.dl(m,p.d,o),$async$$0)
case 10:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:17}
A.qw.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.z
l===$&&A.u()
s=3
return A.a(l.bA(m.b),$async$$0)
case 3:o=b
s=o==null?4:5
break
case 4:s=6
return A.a(n.f7(m,"missing_target"),$async$$0)
case 6:q=B.F
s=1
break
case 5:if(o.c===m.e){q=n.bo(m,p.c,new A.qv(n,m),!0)
s=1
break}q=n.dl(m,p.c,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:17}
A.qv.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.b
m=o.b.z
m===$&&A.u()
l=o
k=n
s=4
return A.a(m.eR(n.d,n.b),$async$$0)
case 4:s=3
return A.a(l.ea(k,b),$async$$0)
case 3:q=B.M
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:17}
A.qu.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.b
m=p.c
l=o.b.z
l===$&&A.u()
k=o
j=n
s=4
return A.a(l.eR(m,n.b),$async$$0)
case 4:s=3
return A.a(k.dn(j,b,p.d.a,m),$async$$0)
case 3:q=B.M
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:17}
A.qx.prototype={
$1(a){return this.mN(a)},
mN(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
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
return A.a(l.cO(0,"lp_conflicts",A.m(["store",j,"record_id",k,"base_json",p,"local_json",A.ak(q.e),"remote_json",A.ak(o),"dirty_local",B.e.a7(q.r,null),"dirty_remote",B.e.a7(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.a7),$async$$1)
case 2:s=3
return A.a(l.F("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ak(o),"base_hash",A.az(B.l.v(B.h.v(A.ak(A.aX(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.a0(new A.a2(j,A.am([k],n)))
a.a0(new A.a2("lp_conflicts",A.am([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.bL.prototype={
ab(){return"SyncEngineState."+this.b}}
A.b3.prototype={
m(a){var s=this
return"SyncReport(pulled: "+s.a.m(0)+", swept: "+s.b.m(0)+", pushed: "+s.c+", deadLettered: "+s.d+", blocked: "+s.e+", hadError: "+s.f+")"}}
A.eR.prototype={}
A.eQ.prototype={}
A.r0.prototype={
gkk(){return 36},
d5(a){return this.nt(a)},
nt(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$d5=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.l([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.ch,g=new A.cd(g,g.r,g.e,A.o(g).i("cd<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.l()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.hG(m),$async$d5)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.gkk():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.b.aC(c.a+1,n.gkk())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.bj(m,a),$async$d5)
case 13:a5.bU(a6,a9)
case 11:++j
s=10
break
case 12:s=14
return A.a(h.X(new A.r1(c,n,m,a3),f),$async$d5)
case 14:p=2
s=8
break
case 6:p=5
a4=o.pop()
i=A.M(a4)
if(a2==null)a2=i
s=8
break
case 5:s=2
break
case 8:s=3
break
case 4:if(a2!=null){if(a2 instanceof A.b2)throw A.b(a2)
if(t.mA.b(a2))throw A.b(a2)
throw A.b(t.C.a(a2))}q=a1
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d5,r)},
bj(a,b){return this.ns(a,b)},
ns(a4,a5){var s=0,r=A.h(t.eg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bj=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.O("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.b0(t.N)
m=t.s,l=p.b,k=p.e,j=0,i=null
case 3:h=l.z
h===$&&A.u()
s=5
return A.a(h.ex(a4,B.bY,i,null,o,200),$async$bj)
case 5:g=a7
h=J.J(g)
if(h.gB(g)){s=4
break}for(f=h.gu(g);f.l();)n.t(0,f.gn().a)
f=A.l([],m)
for(e=h.gu(g);e.l();)f.push(e.gn().a)
s=6
return A.a(p.fP(a4,f),$async$bj)
case 6:d=a7
c=A.l([],m)
for(f=h.gu(g);f.l();){e=f.gn()
b=e.a
a=d.h(0,b)
if(a==null||a.z===B.ap||a.c!==e.c)c.push(b)}s=c.length!==0?7:8
break
case 7:s=9
return A.a(k.cL(a4,c),$async$bj)
case 9:j+=c.length
case 8:i=h.gZ(g).a
if(h.gk(g)<200){s=4
break}s=3
break
case 4:l=p.a.b
h=o+"%"
s=10
return A.a(l.al("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a4,h]),$async$bj)
case 10:a0=a7
a1=A.l([],m)
for(f=J.K(a0);f.l();){e=f.gn()
a2=A.H(e.h(0,"record_id"))
if(!n.E(0,a2)){if(J.v(e.h(0,"access_state"),"hidden"))continue
a1.push(a2)}}s=a1.length!==0?11:12
break
case 11:s=13
return A.a(k.eA(a4,a1),$async$bj)
case 13:case 12:s=14
return A.a(l.al("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,h,p.c.ay.$0()]),$async$bj)
case 14:a3=a7
l=J.J(a3)
s=l.gV(a3)?15:16
break
case 15:m=A.l([],m)
for(l=l.gu(a3);l.l();)m.push(A.H(l.gn().h(0,"record_id")))
s=17
return A.a(k.cL(a4,m),$async$bj)
case 17:case 16:q=new A.eQ(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bj,r)},
fP(a,b){return this.qM(a,b)},
qM(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fP=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:h=t.N
g=A.G(h,t.nw)
o=p.a.b,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.c.R(b,n,B.b.j3(l,0,m))
j=B.c.M(A.aJ(k.length,"?",!1,h),", ")
m=[a]
B.c.J(m,k)
f=J
s=6
return A.a(o.al(u.m+j+")",m),$async$fP)
case 6:m=f.K(d)
case 7:if(!m.l()){s=8
break}i=m.gn()
g.j(0,A.H(i.h(0,"record_id")),A.rc(i))
s=7
break
case 8:case 4:n=l
s=3
break
case 5:q=g
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fP,r)}}
A.r1.prototype={
$1(a){return this.mP(a)},
mP(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.dP(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.b2.prototype={
m(a){return A.iK(this).m(0)+": "+this.a},
$iI:1}
A.eT.prototype={}
A.dT.prototype={}
A.hC.prototype={}
A.bG.prototype={}
A.cb.prototype={}
A.cf.prototype={}
A.eE.prototype={}
A.eF.prototype={}
A.eq.prototype={}
A.du.prototype={}
A.eO.prototype={
gk(a){return this.b}}
A.cg.prototype={}
A.eG.prototype={}
A.hx.prototype={}
A.iY.prototype={
ab(){return"BackendHintKind."+this.b}}
A.c9.prototype={}
A.wl.prototype={
$2(a,b){return B.a.m3(B.b.m(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:86}
A.r2.prototype={
lJ(a,b){var s,r,q,p,o,n
if(b!=null){s=this.qF(b)
if(A.aC(s))return A.dC(0,0,s<0?0:s)
if(s instanceof A.b8){r=s.a-this.ay.$0()
return r<=0?B.a8:A.dC(0,r,0)}return B.az}q=a<1?1:a
p=1e6
o=1
for(;;){if(!(o<q&&p<3e8))break
n=p*2
p=n>3e8?3e8:n;++o}return A.dC(B.u.me(p*J.BM(this.at.$1(q),0.5,1.5)),0,0)},
lI(a){return this.lJ(a,null)},
qF(a){var s=B.a.cX(a),r=A.hu(s,null)
if(r!=null)return r
return A.Dk(s)}}
A.hw.prototype={}
A.hI.prototype={}
A.re.prototype={
hF(a){return this.vt(a)},
vt(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$hF=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.eJ("lp_sync_state",A.l(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$hF)
case 3:m=c
l=J.J(m)
if(l.gB(m)){q=null
s=1
break}o=A.ag(J.a1(l.gC(m),"cursor_updated"))
n=A.ag(J.a1(l.gC(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.hw(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hF,r)},
dO(a,b,c,d){return this.w2(a,b,c,d)},
w2(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$dO=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aH("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$dO)
case 5:s=m.c8(f)?2:4
break
case 2:s=6
return A.a(a.an(0,"lp_sync_state",A.m(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$dO)
case 6:s=3
break
case 4:s=7
return A.a(a.F("lp_sync_state",A.m(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$dO)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dO,r)},
hG(a){return this.vv(a)},
vv(a){var s=0,r=A.h(t.k5),q,p=this,o,n,m
var $async$hG=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.eJ("lp_sync_state",A.l(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$hG)
case 3:n=c
m=J.J(n)
if(m.gB(n)){q=B.cp
s=1
break}o=A.aO(J.a1(m.gC(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.hI(o,A.aO(J.a1(m.gC(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hG,r)},
dP(a,b,c,d){return this.w6(a,b,c,d)},
w6(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$dP=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aH("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$dP)
case 5:s=m.c8(f)?2:4
break
case 2:s=6
return A.a(a.an(0,"lp_sync_state",A.m(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$dP)
case 6:s=3
break
case 4:s=7
return A.a(a.F("lp_sync_state",A.m(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$dP)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dP,r)},
h4(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$h4=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.aN("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$h4)
case 3:l=b
k=J.J(l)
j=k.gB(l)?B.w:k.gC(l)
k=A.aO(j.h(0,"pending"))
if(k==null)k=0
o=A.aO(j.h(0,"conflicts"))
if(o==null)o=0
n=A.aO(j.h(0,"hidden"))
if(n==null)n=0
m=A.aO(j.h(0,"blocked"))
q=new A.lF([m==null?0:m,o,n,k])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h4,r)}}
A.ci.prototype={
ab(){return"SyncState."+this.b}}
A.fA.prototype={
ab(){return"AccessState."+this.b}}
A.eC.prototype={
ab(){return"OutboxKind."+this.b}}
A.hp.prototype={
ab(){return"OpQueueKind."+this.b}}
A.cE.prototype={}
A.rd.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i=this.a
A.H(i.h(0,"store"))
A.H(i.h(0,"record_id"))
s=A.ag(i.h(0,"remote_updated"))
r=A.aO(i.h(0,"last_seen_at"))
q=A.ag(i.h(0,"base_updated"))
A.ag(i.h(0,"base_hash"))
p=A.ag(i.h(0,"base_json"))
o=A.es(B.bL,A.H(i.h(0,"sync_state")))
A.AF(i.h(0,"dirty_fields"))
n=A.aO(i.h(0,"local_rev"))
if(n==null)n=0
m=A.es(B.bJ,A.H(i.h(0,"access_state")))
A.ag(i.h(0,"op_id"))
l=A.aO(i.h(0,"attempt_count"))
if(l==null)l=0
k=A.aO(i.h(0,"next_retry_at"))
if(k==null)k=0
j=A.ag(i.h(0,"last_error"))
A.aO(i.h(0,"schema_ver"))
return new A.cE(s,r,q,p,o,n,m,l,k,j)},
$S:87}
A.cz.prototype={}
A.pK.prototype={
$0(){var s,r,q,p=this.a,o=A.H(p.h(0,"store")),n=A.H(p.h(0,"record_id")),m=A.es(B.bS,A.H(p.h(0,"kind"))),l=A.H(p.h(0,"payload_json")),k=A.ag(p.h(0,"base_updated")),j=A.ag(p.h(0,"base_hash"))
if(j==null)j=""
s=A.AF(p.h(0,"dirty_fields"))
r=A.H(p.h(0,"op_id"))
q=A.af(p.h(0,"created_at"))
A.af(p.h(0,"updated_at"))
return new A.cz(o,n,m,l,k,j,s,r,q,A.ag(p.h(0,"depends_on_op")))},
$S:88}
A.dR.prototype={}
A.pF.prototype={
$0(){var s,r,q,p,o,n,m,l=this.a
A.af(l.h(0,"seq"))
s=A.H(l.h(0,"op_id"))
r=A.H(l.h(0,"store"))
q=A.H(l.h(0,"record_id"))
p=A.es(B.bP,A.H(l.h(0,"kind")))
o=A.H(l.h(0,"payload_json"))
A.H(l.h(0,"state"))
n=A.aO(l.h(0,"attempt_count"))
if(n==null)n=0
A.aO(l.h(0,"next_retry_at"))
A.ag(l.h(0,"last_error"))
m=A.ag(l.h(0,"depends_on_op"))
A.af(l.h(0,"created_at"))
return new A.dR(s,r,q,p,o,n,m)},
$S:89}
A.wE.prototype={
$1(a){return A.H(a.h(0,"op_id"))},
$S:42}
A.wF.prototype={
$1(a){return A.H(a.h(0,"op_id"))},
$S:42}
A.jc.prototype={
jZ(a){return a.a===this.w.a},
bN(){var s=0,r=A.h(t.J),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$bN=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:e=p.a
b=A
a=p.w
s=3
return A.a(e.mj(p.x,p.y),$async$bN)
case 3:d=b.AE(a,a1,e.y,e.z)
c=p.z
if(c==null){q=d
s=1
break}e=A.l([],t.d)
for(o=d.length,n=c.$ti,m=n.i("a5<B.E>"),n=n.i("B.E"),l=t.N,k=t.X,j=0;j<d.length;d.length===o||(0,A.E)(d),++j){i=d[j]
h=A.G(l,k)
for(g=new A.a5(c,c.gk(0),m);g.l();){f=g.d
if(f==null)f=n.a(f)
if(i.I(f))h.j(0,f,i.h(0,f))}e.push(h)}q=e
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bN,r)},
j5(a){return A.G_(a,new A.n1(this),!1)},
m2(a){return this.as.$1(a)},
jw(a,b){return null}}
A.n1.prototype={
$1(a){return this.a.a.e.y+=a},
$S:7}
A.p7.prototype={
cg(a,b){return this.uk(a,b)},
uk(a,b){var s=0,r=A.h(t.X),q,p
var $async$cg=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.ei(A.m(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cg,r)},
hA(a,b,c,d){return this.vc(a,b,c,d)},
vc(a,b,c,a0){var s=0,r=A.h(t.u),q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$hA=A.c(function(a1,a2){if(a1===1)return A.d(a2,r)
for(;;)switch(s){case 0:h=a.v8(b,c)
h.P("PRAGMA journal_mode=TRUNCATE")
p=h.f_("PRAGMA journal_mode")
o=p.gC(p).b[0]
if(J.ao(o).toLowerCase()!=="truncate"){h.p()
throw A.b(A.w("journal_mode read-back was "+A.q(o)+", expected truncate"))}p=t.N
n=a0==null
m=A.GE(n?null:A.w7(a0))
l=t.bE.a(m.h(0,"stores"))
if(l==null)l=A.l([],t.aw)
k=A.aO(m.h(0,"maxDocBytes"))
if(k==null)k=19e5
j=A.zZ(m.h(0,"destructiveBackup"))
i=A.GD(A.GI(n?null:A.w7(a0),"fieldCipher"))
if(A.Gk(l,i))throw A.b(A.bm("Store declares encrypted fields but no fieldCipher was provided.",null))
n=t.S
g=A
f=h
e=A
d=h
s=3
return A.a(A.cw(new A.rD(A.G(p,t.p)),new A.jo(A.G(p,t.fw),h),j!==!1,i,k,b,B.cd,l),$async$hA)
case 3:q=new g.jT(f,new e.rO(d,a2,A.G(n,t.oS),new A.rm(A.G(n,t.oc)),A.b0(t.be)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hA,r)}}
A.jT.prototype={
cg(a,b){return this.ul(a,b)},
ul(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$cg=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.a
if(n==null){q=A.x7(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.CH(n)
if(o==null){q=A.x7(0,"protocol_envelope","Payload must be a map",null)
s=1
break}m=A
s=3
return A.a(p.d.hm(new A.lg(a),o),$async$cg)
case 3:q=m.CI(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cg,r)}}
A.pf.prototype={
$2(a,b){return new A.U(J.ao(a),b,t.eB)},
$S:52}
A.lg.prototype={$ikY:1}
A.wg.prototype={
$2(a,b){this.a.j(0,J.ao(a),A.bF(b))},
$S:18}
A.wa.prototype={
$2(a,b){this.a.j(0,J.ao(a),A.mg(b))},
$S:18}
A.kN.prototype={}
A.rm.prototype={}
A.wz.prototype={
$1(a){return A.GF(a)},
$S:92}
A.wq.prototype={
$1(a){return B.c.cH(a.c,new A.wp())},
$S:93}
A.wp.prototype={
$1(a){return a.e},
$S:44}
A.f_.prototype={
ao(){var s=this
return A.m(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.rI.prototype={
$2(a,b){return new A.U(J.ao(a),b,t.eB)},
$S:52}
A.kT.prototype={
ao(){var s,r=this,q=A.G(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.ao())
else q.j(0,"r",r.c)
return q}}
A.rF.prototype={
ao(){var s,r=A.G(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.fN.prototype={
m(a){return"DatabaseWorkerClosedException: "+this.a},
$iI:1}
A.hv.prototype={
m(a){return"ProtocolEnvelopeException: "+this.a},
$iI:1}
A.kk.prototype={
m(a){return"RemoteLocalPocketException["+this.a+"]: "+this.b},
$iI:1}
A.S.prototype={
K(a,b,c){var s,r,q=this.a.h(0,a)
if(!c.b(q)){s=A.zd(c)
r=q==null?"null":A.ze(q)
throw A.b(A.d2('Missing or invalid "'+a+'" argument'+(" for "+b)+": expected "+s+", got "+r+"."))}return q},
U(a,b){var s=this.a
if(!s.I(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.d2('Invalid "'+a+'" argument: expected '+A.zd(b)+", got "+A.ze(s)+"."))
return b.a(s)}}
A.f0.prototype={}
A.hO.prototype={}
A.e0.prototype={}
A.wd.prototype={
$2(a,b){var s,r,q=J.ao(a)
if(t.f.b(b))this.a.j(0,q,A.iI(b))
else{s=this.a
if(t.j.b(b)){r=J.aE(b,new A.wc(),t.z)
r=A.P(r,r.$ti.i("Q.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:18}
A.wc.prototype={
$1(a){return t.f.b(a)?A.iI(a):a},
$S:34}
A.kX.prototype={
ik(a,b){return this.oE(a,b)},
oE(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$ik=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.ia(b.d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ik,r)},
kW(a){var s,r,q,p,o,n=a.h(0,"type"),m=a.h(0,"operation"),l=a.h(0,"compilerVersion"),k=a.h(0,"store"),j=a.h(0,"schemaVersion"),i=a.h(0,"schemaFingerprint"),h=a.h(0,"argumentCount"),g=a.h(0,"sql"),f=a.h(0,"args")
if(!J.v(n,"query_plan")||typeof m!="string"||!B.cj.E(0,m)||!J.v(l,2)||typeof k!="string"||!A.aC(j)||typeof i!="string"||!A.aC(h)||typeof g!="string"||!t.j.b(f))throw A.b(A.d2("Malformed or stale compiled query plan."))
s=this.c.af(k).a
r=A.az(B.l.v(B.h.v(A.ak(s.ao()))).a)
if(s.b!==j||r!==i||J.av(f)!==h||!B.a.N(g,"SELECT "))throw A.b(A.d2("Stale or mismatched compiled query plan."))
q=a.h(0,"projection")
a.h(0,"limit")
a.h(0,"shape")
A.H(n)
p=t.X
o=J.aE(f,A.Az(),p)
o=A.P(o,o.$ti.i("Q.E"))
p=A.cZ(o,p)
o=t.j.b(q)?J.em(q,t.N):null
return new A.qz(m,k,g,p,o)},
ia(a){return this.o9(a)},
o9(a){var s=0,r=A.h(t.G),q,p=this,o,n,m,l,k
var $async$ia=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.kW(a)
n=a.h(0,"sessionId")
m=A.aC(n)?new A.rP(p.c6(n)):new A.rQ(p)
l=a.h(0,"pageLimit")
k=A.aC(l)?l:null
q=A.wh(p.c,m,o,k)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ia,r)},
cC(a,b){return this.oz(a,b)},
oz(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$cC=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cb(),$async$cC)
case 3:o=p.f,n=new A.aI(o,o.r,o.e,A.o(o).i("aI<2>"))
case 4:if(!n.l()){s=5
break}s=6
return A.a(n.d.a.$0(),$async$cC)
case 6:s=4
break
case 5:o.ai(0)
p.r.d.ai(0)
o=p.d
if(o!=null&&(o.b.a.a&30)===0)o.b.aA(new A.fN("Database closed."))
p.d=null
o=p.at
o=o==null?null:o.A()
s=7
return A.a(o instanceof A.r?o:A.bg(o,t.H),$async$cC)
case 7:p.at=null
p.as.ai(0)
s=8
return A.a(p.c.p(),$async$cC)
case 8:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cC,r)},
cb(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$cb=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=q.x
q.x=null
p=q.z
p=p==null?null:p.A()
s=2
return A.a(p instanceof A.r?p:A.bg(p,t.H),$async$cb)
case 2:q.z=null
s=n!=null?3:4
break
case 3:o=n.b
s=5
return A.a(n.aL(),$async$cb)
case 5:s=6
return A.a(o.dU(),$async$cb)
case 6:o.dU()
p=o.ay
if((p.c&4)===0)p.p()
o.x.a.p()
case 4:q.Q=q.y=null
return A.e(null,r)}})
return A.f($async$cb,r)},
bk(a,b){return this.nJ(a,b)},
nJ(a,b){var s=0,r=A.h(t.H),q,p,o
var $async$bk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.H(b.h(0,"action"))
p=t.b.a(A.mg(b.h(0,"record")))
o=A.ag(b.h(0,"id"))
case 2:switch(q){case"put":s=4
break
case"patch":s=5
break
case"archive":s=6
break
case"restore":s=7
break
case"purge":s=8
break
default:s=9
break}break
case 4:p.toString
s=10
return A.a(a.hE(p),$async$bk)
case 10:s=3
break
case 5:o.toString
p.toString
s=11
return A.a(a.m4(o,p),$async$bk)
case 11:s=3
break
case 6:o.toString
s=12
return A.a(a.lv(o),$async$bk)
case 12:s=3
break
case 7:o.toString
s=13
return A.a(a.md(o),$async$bk)
case 13:s=3
break
case 8:o.toString
s=14
return A.a(a.m6(o),$async$bk)
case 14:s=3
break
case 9:throw A.b(A.bm("Unknown mutation action: "+q,null))
case 3:return A.e(null,r)}})
return A.f($async$bk,r)},
ib(a,b,c){a.a.cJ(A.ei(A.m(["v",2,"op","worker_event","watchId",b,"value",A.bF(c)],t.N,t.X)))},
c6(a){var s
if(a!=null){s=this.d
s=s==null||s.a!==a}else s=!0
if(s)throw A.b(A.w("No active transaction session matching ID "+A.q(a)+"."))
s=this.d
s.toString
return s}}
A.rP.prototype={
$2(a,b){return this.a.c.b.al(a,b)},
$S:46}
A.rQ.prototype={
$2(a,b){return this.a.c.mj(a,b)},
$S:46}
A.rO.prototype={
hm(a,b){return this.uA(a,b)},
uA(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hm=A.c(function(c,a0){if(c===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.as.t(0,a)
if(n.at==null){i=n.c.a$.b
n.at=new A.aV(i,A.o(i).i("aV<1>")).aM(new A.rR(n))}m=null
try{m=A.Dt(b)}catch(d){l=A.M(d)
i=J.ao(l)
q=new A.e0("protocol_envelope",i,null,0)
s=1
break}if(m.a!==2){i=m.b
q=new A.e0("protocol_mismatch","Version mismatch: expected 2, got "+m.a,A.m(["expected",2,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.i9(a,m),$async$hm)
case 7:k=a0
i=m.b
q=new A.hO(k,i)
s=1
break
p=2
s=6
break
case 4:p=3
e=o.pop()
j=A.M(e)
i=m.b
g=J.ao(j)
f=A.m(["type",A.GL(j)],t.N,t.X)
q=new A.e0("localpocket",g,f,i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hm,r)},
i9(a,b){return this.o8(a,b)},
o8(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$i9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.ax
if(l===$){o=A.m(["health",p.gpg(),"capabilities",p.gow(),"get",p.gpe(),"mutate_batch",p.gpj(),"compiled_query",p.goD(),"open",p.gpl(),"analyze",p.gou(),"wal_checkpoint",p.gq1(),"vacuum",p.gq_(),"prune_outbox",p.gpp(),"compact",p.goA(),"run_maintenance",p.gps(),"tx_begin",p.gpK(),"tx_get",p.gpO(),"tx_mutate_batch",p.gpQ(),"tx_savepoint",p.gpY(),"tx_rollback_to",p.gpW(),"tx_release",p.gpS(),"tx_commit",p.gpM(),"tx_rollback",p.gpU(),"watch_query",p.gq7(),"watch_one",p.gq5(),"watch_cancel",p.gq3(),"sync_start",p.gpC(),"sync_stop",p.gpG(),"sync_now",p.gpu(),"sync_pause",p.gpw(),"sync_resume",p.gpy(),"sync_set_connectivity",p.gpA(),"sync_update_auth",p.gpI(),"sync_status",p.gpE(),"file_upload_begin",p.gp7(),"file_upload_chunk",p.gp9(),"file_upload_finish",p.gpb(),"file_upload_abort",p.gp5(),"file_list",p.goW(),"file_open",p.goY(),"file_remove",p.gp_(),"file_gc",p.goU(),"file_enforce_storage_cap",p.goS(),"conflicts_list",p.goL(),"conflicts_get",p.goJ(),"conflicts_resolve",p.goN(),"conflicts_accept_local",p.goF(),"conflicts_accept_remote",p.goH(),"conflicts_watch",p.goP(),"close",p.goy()],t.N,t.n1)
p.ax!==$&&A.wJ()
p.ax=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.d2("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i9,r)}}
A.rR.prototype={
$1(a){var s,r,q,p=A.m(["v",2,"op","record_event","event",A.bF(a.ao())],t.N,t.X)
for(s=this.a.as,s=A.uQ(s,s.r,A.o(s).c),r=s.$ti.c;s.l();){q=s.d;(q==null?r.a(q):q).a.cJ(A.ei(p))}},
$S:97}
A.kV.prototype={
fi(a,b){return this.oM(a,b)},
oM(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$fi=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.N
n=new A.S(b.d).U("store",o)
m=p.c.ax
m===$&&A.u()
l=J
s=3
return A.a(m.ew(n),$async$fi)
case 3:m=l.aE(d,A.Ay(),t.G)
m=A.P(m,m.$ti.i("Q.E"))
q=A.m(["conflicts",m],o,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fi,r)},
fh(a,b){return this.oK(a,b)},
oK(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=new A.S(b.d)
m=t.N
l=n.K("store","conflicts_get",m)
k=n.K("id","conflicts_get",m)
m=p.c.ax
m===$&&A.u()
s=3
return A.a(m.d0(l,k),$async$fh)
case 3:o=d
q=o==null?null:A.AI(o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fh,r)},
fj(a,b){return this.oO(a,b)},
oO(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=new A.S(o)
m=t.N
l=n.K("store","conflicts_resolve",m)
k=n.K("id","conflicts_resolve",m)
j=t.G.a(A.mg(o.h(0,"merged")))
o=p.c.ax
o===$&&A.u()
s=3
return A.a(o.dJ(k,j,l),$async$fj)
case 3:q=A.m(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fj,r)},
ff(a,b){return this.oG(a,b)},
oG(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$ff=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.S(b.d)
n=t.N
m=o.K("store","conflicts_accept_local",n)
l=o.K("id","conflicts_accept_local",n)
k=p.c.ax
k===$&&A.u()
s=3
return A.a(k.ed(m,l),$async$ff)
case 3:q=A.m(["ok",!0],n,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ff,r)},
fg(a,b){return this.oI(a,b)},
oI(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fg=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.S(b.d)
n=t.N
m=o.K("store","conflicts_accept_remote",n)
l=o.K("id","conflicts_accept_remote",n)
k=p.c.ax
k===$&&A.u()
s=3
return A.a(k.ee(m,l),$async$fg)
case 3:q=A.m(["ok",!0],n,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fg,r)},
il(a,b){return this.oQ(a,b)},
oQ(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$il=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.S(b.d)
n=t.S
m=o.K("watchId","conflicts_watch",n)
l=t.N
k=o.U("store",l)
j=p.c.ax
j===$&&A.u()
p.f.j(0,m,new A.f1(new A.rK(j.w_(k).aM(new A.rL(p,a,m)))))
q=A.m(["watchId",m],l,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$il,r)}}
A.rL.prototype={
$1(a){var s=J.aE(a,A.Ay(),t.G)
s=A.P(s,s.$ti.i("Q.E"))
this.a.ib(this.b,this.c,s)},
$S:98}
A.rK.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.A()
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.kW.prototype={
fq(a,b){return this.pf(a,b)},
pf(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.S(b.d)
n=t.N
m=o.K("store","get",n)
l=o.K("id","get",n)
n=p.c
if(A.rg(n)!=null)A.y(A.w(u.L))
k=A
s=3
return A.a(new A.eo(n,n.af(m),null,null).bW(l),$async$fq)
case 3:q=k.bF(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fq,r)},
dZ(a,b){return this.pk(a,b)},
pk(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$dZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=new A.S(b.d)
m=t.N
l=n.K("store","mutate_batch",m)
k=J.em(n.K("mutations","mutate_batch",t.j),t.f)
s=J.av(k.a)===1?3:4
break
case 3:o=p.c
if(A.rg(o)!=null)A.y(A.w(u.L))
s=5
return A.a(p.bk(new A.eo(o,o.af(l),null,null),k.gC(k)),$async$dZ)
case 5:q=A.m(["ok",!0],m,t.y)
s=1
break
case 4:s=6
return A.a(p.c.X(new A.rM(p,l,k),t.P),$async$dZ)
case 6:q=A.m(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dZ,r)},
fs(a,b){return this.pm(a,b)},
pm(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fs=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=new A.S(b.d).U("stores",t.j)
s=g!=null?3:4
break
case 3:o=J.K(g),n=p.c,m=n.ch,l=t.X,k=t.f,j=n.y==null
case 5:if(!o.l()){s=6
break}i=o.gn()
if(!k.b(i))A.y(A.X("Schema must be a map: "+A.q(i),null,null))
h=A.yp(A.iI(i),l)
if(B.c.cH(h.c,new A.rN())&&j)throw A.b(A.bm('Store "'+h.a+'" declares encrypted fields but no fieldCipher was provided.',null))
s=!m.I(h.a)?7:8
break
case 7:s=9
return A.a(n.b8(h),$async$fs)
case 9:case 8:s=5
break
case 6:case 4:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fs,r)}}
A.rM.prototype={
$1(a){return this.mQ(a)},
mQ(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.cc(q.b)
p=q.c,o=p.$ti,p=new A.a5(p,p.gk(0),o.i("a5<B.E>")),n=q.a,o=o.i("B.E")
case 2:if(!p.l()){s=3
break}m=p.d
s=4
return A.a(n.bk(l,m==null?o.a(m):m),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rN.prototype={
$1(a){return a.e},
$S:44}
A.kZ.prototype={
iu(a,b){return this.p8(a,b)},
p8(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$iu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=new A.S(b.d)
i=p.w++
h=t.N
g=j.K("store","file_upload_begin",h)
f=j.K("recordId","file_upload_begin",h)
e=j.U("field",h)
if(e==null)e="imgs"
o=j.U("name",h)
if(o==null)o="blob.bin"
n=t.S
m=j.K("size","file_upload_begin",n)
l=j.U("expectedSha256",h)
k=p.r.d
if(k.a>=16)A.y(A.bm("Maximum concurrent uploads exceeded (16).",null))
if(m<0||m>4294967296)A.y(A.bm("Invalid file size: "+m,null))
k.j(0,i,new A.kN(g,f,e,o,m,l,A.l([],t.bs)))
q=A.m(["uploadId",i],h,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iu,r)},
iv(a,b){return this.pa(a,b)},
pa(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$iv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=b.d
i=new A.S(j).K("uploadId","file_upload_chunk",t.S)
j=new Uint8Array(A.bA(t.L.a(A.mg(j.h(0,"chunk")))))
o=p.r.d
n=o.h(0,i)
if(n==null)A.y(A.bm("Unknown upload session: "+i,null))
m=j.length
if(m>262144){o.D(0,i)
A.y(A.bm("Chunk too large: "+m+" > 262144",null))}l=n.w
k=n.f
if(l+m>k){o.D(0,i)
A.y(A.bm("Upload exceeds declared size "+k,null))}n.x.push(j)
n.w+=m
q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iv,r)},
fo(a,b){return this.pc(a,b)},
pc(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fo=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=new A.S(b.d).K("uploadId","file_upload_finish",t.S)
f=p.r.d.D(0,g)
if(f==null)A.y(A.bm("Unknown upload session: "+g,null))
o=f.w
n=f.f
if(o!==n)A.y(A.bm("Upload size mismatch: expected "+n+" but got "+o,null))
o=p.c.ay
o===$&&A.u()
m=f.b
l=f.c
k=new A.rS(f).$0()
j=f.d
i=f.e
s=3
return A.a(o.dr(k,f.r,n,j,i,l,m),$async$fo)
case 3:h=d
q=A.m(["refId",h.a,"hash",h.e,"state",h.r,"remoteName",h.f],t.N,t.v)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fo,r)},
it(a,b){return this.p6(a,b)},
p6(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$it=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.r.d.D(0,new A.S(b.d).K("uploadId","file_upload_abort",t.S))
q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$it,r)},
fm(a,b){return this.oX(a,b)},
oX(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$fm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=new A.S(b.d)
j=p.c.ay
j===$&&A.u()
o=t.N
n=k.K("store","file_list",o)
m=k.K("recordId","file_list",o)
l=k.U("field",o)
i=J
s=3
return A.a(j.dD(l==null?"imgs":l,m,n),$async$fm)
case 3:j=i.aE(d,A.GV(),t.G)
j=A.P(j,j.$ti.i("Q.E"))
q=A.m(["refs",j],o,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fm,r)},
dc(a,b){return this.oZ(a,b)},
oZ(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c
var $async$dc=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=new A.S(b.d)
c=m.c.ay
c===$&&A.u()
i=t.N
h=d.K("store","file_open",i)
g=d.K("recordId","file_open",i)
f=d.U("field",i)
if(f==null)f="imgs"
e=d.U("index",t.S)
if(e==null)e=0
s=3
return A.a(c.eC(f,e,g,d.U("refId",i),h),$async$dc)
case 3:l=a1
k=A.l([],t.t)
h=new A.bQ(A.bD(l,"stream",t.K),t.lj)
p=4
case 7:s=9
return A.a(h.l(),$async$dc)
case 9:if(!a1){s=8
break}j=h.gn()
J.BJ(k,j)
s=7
break
case 8:n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
s=10
return A.a(h.A(),$async$dc)
case 10:s=n.pop()
break
case 6:q=A.m(["bytes",A.bF(new Uint8Array(A.bA(k))),"size",J.av(k)],i,t.X)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dc,r)},
fn(a,b){return this.p0(a,b)},
p0(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$fn=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=new A.S(b.d)
i=p.c.ay
i===$&&A.u()
o=t.N
n=j.K("store","file_remove",o)
m=j.K("recordId","file_remove",o)
l=j.U("field",o)
if(l==null)l="imgs"
k=j.U("index",t.S)
if(k==null)k=0
s=3
return A.a(i.eL(0,l,k,m,j.U("refId",o),n),$async$fn)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fn,r)},
fl(a,b){return this.oV(a,b)},
oV(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=new A.S(b.d)
k=p.c.ay
k===$&&A.u()
o=t.S
n=l.U("blobGraceMs",o)
n=A.dC(0,n==null?6048e5:n,0)
m=l.U("tmpGraceMs",o)
j=A
s=3
return A.a(k.cq(n,A.dC(0,m==null?864e5:m,0)),$async$fl)
case 3:q=j.m(["cleaned",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fl,r)},
fk(a,b){return this.oT(a,b)},
oT(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.c.ay
n===$&&A.u()
o=t.S
m=A
s=3
return A.a(n.ce(new A.S(b.d).K("maxBytes","file_enforce_storage_cap",o)),$async$fk)
case 3:q=m.m(["evicted",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fk,r)}}
A.rS.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.x,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.bz(A.dd(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.E)(l),++j
s=3
break
case 5:case 1:return A.bz(null,0,r)
case 2:return A.bz(o.at(-1),1,r)}})
var s=0,r=A.Aa($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.Ap(r)},
$S:99}
A.l_.prototype={
iw(a,b){return this.ph(a,b)},
ph(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$iw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.a
n=o.f_("SELECT sqlite_version() AS v")
m=n.gC(n).h(0,"v")
o=o.f_("PRAGMA journal_mode")
q=A.m(["ok",!0,"sqliteVersion",m,"journalMode",o.gC(o).b[0]],t.N,t.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iw,r)},
ij(a,b){return this.ox(a,b)},
ox(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$ij=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c.c
n=p.a.f_("PRAGMA journal_mode")
q=A.m(["storage","opfs","durable",!0,"persistent",!0,"journal",n.gC(n).b[0],"multiTabStorage",!0,"multiTabSync",!1,"worker",!0,"sqliteVersion",o.a,"hasStrict",o.b,"walSupported",o.c,"hasFts5",o.d],t.N,t.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ij,r)},
fd(a,b){return this.ov(a,b)},
ov(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fd=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.N
s=3
return A.a(p.c.dq(new A.S(b.d).U("store",o)),$async$fd)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fd,r)},
fJ(a,b){return this.q2(a,b)},
q2(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$fJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.eT(),$async$fJ)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fJ,r)},
fI(a,b){return this.q0(a,b)},
q0(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$fI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.eS(new A.S(b.d).U("pages",t.S)),$async$fI)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fI,r)},
ft(a,b){return this.pq(a,b)},
pq(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$ft=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.S
n=new A.S(b.d).U("maxEntries",o)
if(n==null)n=1e4
m=A
s=3
return A.a(p.c.eF(n),$async$ft)
case 3:q=m.m(["pruned",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ft,r)},
fe(a,b){return this.oB(a,b)},
oB(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fe=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.S(b.d)
n=t.N
m=o.K("store","compact",n)
l=t.S
k=o.K("olderThanMs","compact",l)
j=A
s=3
return A.a(p.c.dt(m,o.U("nowMs",l),A.dC(0,k,0)),$async$fe)
case 3:q=j.m(["compacted",d],n,l)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fe,r)},
fu(a,b){return this.pt(a,b)},
pt(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.S(b.d).U("compactOlderThanMs",t.S)
s=3
return A.a(p.c.cV(A.dC(0,o==null?7776e6:o,0)),$async$fu)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fu,r)}}
A.vu.prototype={
h7(){var s=0,r=A.h(t.q),q,p=this,o
var $async$h7=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=A.z5(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h7,r)},
jB(a){return this.vz(a)},
vz(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$jB=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
q=A.z5(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jB,r)}}
A.l0.prototype={
dd(a,b){return this.pD(a,b)},
pD(a3,a4){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$dd=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a0=new A.S(a4.d)
a1=t.N
a2=a0.U("baseUrl",a1)
if(a2==null||a2.length===0)throw A.b(A.bm("syncStart requires baseUrl.",null))
s=3
return A.a(p.cb(),$async$dd)
case 3:o=a0.U("token",a1)
n=a0.U("scopeId",a1)
if(n==null)n="web-sync"
m=new A.vu(o,n)
l=A.kQ(a2)
k=p.c
j=k.ch
i=A.o(j).i("a7<1>")
j=A.P(new A.a7(j,i),i.i("n.E"))
i=t.hw
h=A.dW(null,null,i)
g=$.t.h(0,B.cq)
f=g==null?null:t.dF.a(g).$0()
if(f==null)f=new A.j7(A.l([],t.W))
f=new A.pQ(f)
e=new A.kd(l,m,j,n,f,h,A.G(a1,t.hU),A.G(a1,i))
i=new A.mA(m)
e.y=i
e.z=new A.pS(f,l,i)
d=A.xz()
i=A.dW(null,null,t.n6)
f=A.dW(null,null,t.em)
h=t.H
j=A.ct(null,h)
c=A.ct(B.G,t.E)
b=A.l([],t.s)
h=A.ct(null,h)
a=new A.r2(A.GR(),k.Q)
h=new A.kF(k,e,a,new A.rX(a3),B.O,i,f,j,A.b0(a1),c,b,h)
l=h.e=new A.re(k,B.a.q(A.az(B.l.v(B.h.v(l.m(0)+"|"+n)).a),0,12))
j=new A.oc(k,e,a,k.x)
h.x=j
j=new A.qn(k,e,a,l,j)
h.f=j
h.r=new A.r0(k,e,a,l,j)
h.w=new A.qs(k,e,a,h.gqq(),e.as)
d.b=h
p.y=m
p.x=d.be()
h=d.be().ay
p.z=new A.aV(h,A.o(h).i("aV<1>")).aM(new A.rY(p,a3))
s=4
return A.a(d.be().aD(),$async$dd)
case 4:s=5
return A.a(e.f3(),$async$dd)
case 5:q=A.m(["ok",!0,"state",d.be().y.b],a1,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dd,r)},
fB(a,b){return this.pH(a,b)},
pH(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$fB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cb(),$async$fB)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fB,r)},
fv(a,b){return this.pv(a,b)},
pv(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x
if(n==null)throw A.b(A.w("Sync is not started."))
n.ok.push("cycle")
s=3
return A.a(n.cE(),$async$fv)
case 3:o=d
q=A.m(["pulled",o.a,"swept",o.b,"pushed",o.c,"deadLettered",o.d,"hadError",o.f],t.N,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fv,r)},
fw(a,b){return this.px(a,b)},
px(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.x
if(o==null)throw A.b(A.w("Sync is not started."))
s=3
return A.a(o.bg(),$async$fw)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fw,r)},
fz(a,b){return this.pz(a,b)},
pz(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.x
if(o==null)throw A.b(A.w("Sync is not started."))
s=3
return A.a(o.ba(),$async$fz)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fz,r)},
fA(a,b){return this.pB(a,b)},
pB(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x
if(n==null)throw A.b(A.w("Sync is not started."))
o=t.y
s=3
return A.a(n.hX(new A.S(b.d).K("online","sync_set_connectivity",o)),$async$fA)
case 3:q=A.m(["ok",!0],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fA,r)},
fC(a,b){return this.pJ(a,b)},
pJ(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fC=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.y
m=p.x
if(n==null||m==null)throw A.b(A.w("Sync is not started."))
o=t.N
n.a=new A.S(b.d).U("token",o)
s=3
return A.a(m.ey(),$async$fC)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fC,r)},
iy(a,b){return this.pF(a,b)},
pF(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$iy=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.Q
if(o==null){o=t.N
o=A.m(["state","closed"],o,o)}else o=A.zf(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iy,r)}}
A.rX.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.a.cJ(A.ei(A.m(["v",2,"op","auth_required"],t.N,t.X)))
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.rY.prototype={
$1(a){this.a.Q=a
this.b.a.cJ(A.ei(A.m(["v",2,"op","sync_status","status",A.zf(a)],t.N,t.X)))},
$S:100}
A.vg.prototype={}
A.l1.prototype={
fD(a,b){return this.pL(a,b)},
pL(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(p.d!=null)throw A.b(A.w("A transaction session is already active on this database."))
o=p.e++
n=$.t
m=t.D
l=t.Q
k=new A.r(n,m)
p.c.X(new A.rZ(p,o,new A.aM(new A.r(n,m),l),new A.aM(k,l)),t.P).j2(new A.t_(p))
s=3
return A.a(k,$async$fD)
case 3:q=A.m(["sessionId",o],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fD,r)},
fE(a,b){return this.pP(a,b)},
pP(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.d
l=p.c6(new A.S(m).U("sessionId",t.S))
k=new A.S(m)
m=t.N
o=k.K("store","tx_get",m)
n=k.K("id","tx_get",m)
j=A
s=3
return A.a(l.c.cc(o).bW(n),$async$fE)
case 3:q=j.bF(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fE,r)},
fF(a,b){return this.pR(a,b)},
pR(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:i=b.d
h=p.c6(new A.S(i).U("sessionId",t.S))
g=new A.S(i)
i=t.N
o=g.K("store","tx_mutate_batch",i)
n=J.em(g.K("mutations","tx_mutate_batch",t.j),t.f)
m=h.c.cc(o)
l=n.$ti,k=new A.a5(n,n.gk(0),l.i("a5<B.E>")),l=l.i("B.E")
case 3:if(!k.l()){s=4
break}j=k.d
s=5
return A.a(p.bk(m,j==null?l.a(j):j),$async$fF)
case 5:s=3
break
case 4:q=A.m(["ok",!0],i,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fF,r)},
fH(a,b){return this.pZ(a,b)},
pZ(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c6(new A.S(b.d).U("sessionId",t.S))
n=o.d
m="lp_sp_wire_"+n.length
n.push(m)
s=3
return A.a(o.c.b.P("SAVEPOINT "+m),$async$fH)
case 3:n=t.N
q=A.m(["savepoint",m],n,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fH,r)},
e_(a,b){return this.pX(a,b)},
pX(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$e_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=p.c6(new A.S(o).U("sessionId",t.S))
m=t.N
l=new A.S(o).K("savepoint","tx_rollback_to",m)
o=n.c.b
s=3
return A.a(o.P("ROLLBACK TO "+l),$async$e_)
case 3:s=4
return A.a(o.P("RELEASE "+l),$async$e_)
case 4:B.c.D(n.d,l)
q=A.m(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e_,r)},
fG(a,b){return this.pT(a,b)},
pT(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$fG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=p.c6(new A.S(o).U("sessionId",t.S))
m=t.N
l=new A.S(o).K("savepoint","tx_release",m)
s=3
return A.a(n.c.b.P("RELEASE "+l),$async$fG)
case 3:B.c.D(n.d,l)
q=A.m(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fG,r)},
iz(a,b){return this.pN(a,b)},
pN(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$iz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c6(new A.S(b.d).U("sessionId",t.S))
p.d=null
o.b.au()
q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iz,r)},
iA(a,b){return this.pV(a,b)},
pV(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$iA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c6(new A.S(b.d).U("sessionId",t.S))
p.d=null
o.b.aA(new A.kk("rollback","Transaction rolled back."))
q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iA,r)}}
A.rZ.prototype={
$1(a){return this.mR(a)},
mR(a){var s=0,r=A.h(t.P),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.c
q.a.d=new A.vg(q.b,p,a,A.l([],t.s))
q.d.au()
s=2
return A.a(p.a,$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.t_.prototype={
$1(a){this.a.d=null},
$S:21}
A.f1.prototype={}
A.l2.prototype={
fM(a,b){return this.q8(a,b)},
q8(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.d
l=new A.S(m).K("watchId","watch_query",t.S)
k=p.kW(m)
m=p.c
o=new A.jc(m.af(k.d).a,k.r,k.w,k.y,null,new A.t6(p,a,l),m,B.aA)
n=new A.f1(new A.t7(o))
j=J
s=3
return A.a(A.iL(new A.t8(p,l,n),o.guJ(),new A.t9(p,l,n),o.gH(),t.J),$async$fM)
case 3:m=j.aE(d,A.AA(),t.X)
m=A.P(m,m.$ti.i("Q.E"))
q=A.m(["watchId",l,"items",m],t.N,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fM,r)},
fL(a,b){return this.q6(a,b)},
q6(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$fL=A.c(function(c,a0){if(c===1)return A.d(a0,r)
for(;;)switch(s){case 0:o=new A.S(b.d)
n=o.K("watchId","watch_one",t.S)
m=t.N
l=o.K("store","watch_one",m)
k=o.K("id","watch_one",m)
j=p.c
i=j.af(l)
h=A.xz()
g=new A.f1(new A.t1(h))
f=A
e=n
d=A
s=3
return A.a(A.iL(new A.t2(p,n,g),new A.t3(p,l,k),new A.t4(p,n,g),new A.t5(p,h,new A.ho(i,k,j,B.aA),a,n),t.b),$async$fL)
case 3:q=f.m(["watchId",e,"item",d.bF(a0)],m,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fL,r)},
fK(a,b){return this.q4(a,b)},
q4(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.f.D(0,new A.S(b.d).K("watchId","watch_cancel",t.S))
s=o!=null?3:4
break
case 3:s=5
return A.a(o.a.$0(),$async$fK)
case 5:case 4:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fK,r)}}
A.t6.prototype={
$1(a){return this.a.ib(this.b,this.c,a)},
$S:101}
A.t7.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.ha()
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.t9.prototype={
$0(){var s=this.c
this.a.f.j(0,this.b,s)
return s},
$S:0}
A.t8.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.f
o=q.b
n=q.c
if(p.h(0,o)===n)p.D(0,o)
s=2
return A.a(n.a.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.t1.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.be().A(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.t5.prototype={
$0(){var s=this
s.b.slP(s.c.nd().aM(new A.t0(s.a,s.d,s.e)))},
$S:0}
A.t0.prototype={
$1(a){this.a.ib(this.b,this.c,a)},
$S:102}
A.t4.prototype={
$0(){var s=this.c
this.a.f.j(0,this.b,s)
return s},
$S:0}
A.t3.prototype={
$0(){var s=this.a.c
if(A.rg(s)!=null)A.y(A.w(u.L))
return new A.eo(s,s.af(this.b),null,null).bW(this.c)},
$S:103}
A.t2.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.f
o=q.b
n=q.c
if(p.h(0,o)===n)p.D(0,o)
s=2
return A.a(n.a.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.m_.prototype={}
A.m0.prototype={}
A.m1.prototype={}
A.m2.prototype={}
A.m3.prototype={}
A.m4.prototype={}
A.m5.prototype={}
A.nl.prototype={
rL(a){var s,r=null
A.As("absolute",A.l([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.aO(a)>0&&!s.ci(a)
if(s)return a
s=A.AD()
return this.lZ(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
tm(a){var s,r,q=A.eD(a,this.a)
q.eM()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.c.jD(s)
q.e.pop()
q.eM()
return q.m(0)},
lZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.l([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.As("join",s)
return this.uQ(new A.by(s,t.lS))},
uQ(a){var s,r,q,p,o,n,m,l,k
for(s=a.gu(0),r=new A.d9(s,new A.nm(),a.$ti.i("d9<n.E>")),q=this.a,p=!1,o=!1,n="";r.l();){m=s.gn()
if(q.ci(m)&&o){l=A.eD(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.q(k,0,q.dK(k,!0))
l.b=n
if(q.eB(n))l.e[0]=q.gd2()
n=l.m(0)}else if(q.aO(m)>0){o=!q.ci(m)
n=m}else{if(!(m.length!==0&&q.j6(m[0])))if(p)n+=q.gd2()
n+=m}p=q.eB(m)}return n.charCodeAt(0)==0?n:n},
f2(a,b){var s=A.eD(b,this.a),r=s.d,q=A.a8(r).i("bf<1>")
r=A.P(new A.bf(r,new A.nn(),q),q.i("n.E"))
s.d=r
q=s.b
if(q!=null)B.c.an(r,0,q)
return s.d},
jv(a){var s
if(!this.qp(a))return a
s=A.eD(a,this.a)
s.ju()
return s.m(0)},
qp(a){var s,r,q,p,o,n,m,l=this.a,k=l.aO(a)
if(k!==0){if(l===$.mo())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.bQ(n)){if(l===$.mo()&&n===47)return!0
if(q!=null&&l.bQ(q))return!0
if(q===46)m=o==null||o===46||l.bQ(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.bQ(q))return!0
if(q===46)l=o==null||l.bQ(o)||o===46
else l=!1
if(l)return!0
return!1},
vB(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.aO(a)
if(l<=0)return o.jv(a)
s=A.AD()
if(m.aO(s)<=0&&m.aO(a)>0)return o.jv(a)
if(m.aO(a)<=0||m.ci(a))a=o.rL(a)
if(m.aO(a)<=0&&m.aO(s)>0)throw A.b(A.yS(n+a+'" from "'+s+'".'))
r=A.eD(s,m)
r.ju()
q=A.eD(a,m)
q.ju()
l=r.d
if(l.length!==0&&l[0]===".")return q.m(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.jz(l,p)
else l=!1
if(l)return q.m(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.jz(l[0],p[0])}else l=!1
if(!l)break
B.c.hI(r.d,0)
B.c.hI(r.e,1)
B.c.hI(q.d,0)
B.c.hI(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.yS(n+a+'" from "'+s+'".'))
l=t.N
B.c.jn(q.d,0,A.aJ(p,"..",!1,l))
p=q.e
p[0]=""
B.c.jn(p,1,A.aJ(r.d.length,m.gd2(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.c.gZ(m)==="."){B.c.jD(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.eM()
return q.m(0)},
m5(a){var s,r,q=this,p=A.Ae(a)
if(p.gaK()==="file"&&q.a===$.iQ())return p.m(0)
else if(p.gaK()!=="file"&&p.gaK()!==""&&q.a!==$.iQ())return p.m(0)
s=q.jv(q.a.jy(A.Ae(p)))
r=q.vB(s)
return q.f2(0,r).length>q.f2(0,s).length?s:r}}
A.nm.prototype={
$1(a){return a!==""},
$S:11}
A.nn.prototype={
$1(a){return a.length!==0},
$S:11}
A.vY.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:104}
A.p_.prototype={
mY(a){var s=this.aO(a)
if(s>0)return B.a.q(a,0,s)
return this.ci(a)?a[0]:null},
jz(a,b){return a===b}}
A.k8.prototype={
gt0(){var s=this,r=t.N,q=new A.k8(s.a,s.b,s.c,A.jR(s.d,!0,r),A.jR(s.e,!0,r))
q.eM()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.c.gZ(r)},
eM(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.c.gZ(s)===""))break
B.c.jD(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
ju(){var s,r,q,p,o,n=this,m=A.l([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.E)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.c.jn(m,0,A.aJ(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.aJ(m.length+1,s.gd2(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.eB(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.mo())n.b=A.x(r,"/","\\")
n.eM()},
m(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.c.gZ(q)
return o.charCodeAt(0)==0?o:o}}
A.k9.prototype={
m(a){return"PathException: "+this.a},
$iI:1}
A.r_.prototype={
m(a){return this.gaY()}}
A.qb.prototype={
j6(a){return B.a.E(a,"/")},
bQ(a){return a===47},
eB(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
dK(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
aO(a){return this.dK(a,!1)},
ci(a){return!1},
jy(a){var s
if(a.gaK()===""||a.gaK()==="file"){s=a.gb7()
return A.xJ(s,0,s.length,B.k,!1)}throw A.b(A.O("Uri "+a.m(0)+" must have scheme 'file:'.",null))},
gaY(){return"posix"},
gd2(){return"/"}}
A.rp.prototype={
j6(a){return B.a.E(a,"/")},
bQ(a){return a===47},
eB(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.cd(a,"://")&&this.aO(a)===s},
dK(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.bP(a,"/",B.a.a5(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.N(a,"file://"))return q
p=A.AH(a,q+1)
return p==null?q:p}}return 0},
aO(a){return this.dK(a,!1)},
ci(a){return a.length!==0&&a.charCodeAt(0)===47},
jy(a){return a.m(0)},
gaY(){return"url"},
gd2(){return"/"}}
A.rJ.prototype={
j6(a){return B.a.E(a,"/")},
bQ(a){return a===47||a===92},
eB(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
dK(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.bP(a,"\\",2)
if(s>0){s=B.a.bP(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.AM(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
aO(a){return this.dK(a,!1)},
ci(a){return this.aO(a)===1},
jy(a){var s,r
if(a.gaK()!==""&&a.gaK()!=="file")throw A.b(A.O("Uri "+a.m(0)+" must have scheme 'file:'.",null))
s=a.gb7()
if(a.gcN()===""){if(s.length>=3&&B.a.N(s,"/")&&A.AH(s,1)!=null)s=B.a.mc(s,"/","")}else s="\\\\"+a.gcN()+s
r=A.x(s,"/","\\")
return A.xJ(r,0,r.length,B.k,!1)},
t8(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
jz(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.t8(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gaY(){return"windows"},
gd2(){return"\\"}}
A.qJ.prototype={
gk(a){return this.c.length},
guR(){return this.b.length},
nw(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.C(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
dR(a){var s,r=this
if(a<0)throw A.b(A.aG("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.aG("Offset "+a+u.D+r.gk(0)+"."))
s=r.b
if(a<B.c.gC(s))return-1
if(a>=B.c.gZ(s))return s.length-1
if(r.qe(a)){s=r.d
s.toString
return s}return r.d=r.nL(a)-1},
qe(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
nL(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.b.O(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
hV(a){var s,r,q=this
if(a<0)throw A.b(A.aG("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.aG("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gk(0)+"."))
s=q.dR(a)
r=q.b[s]
if(r>a)throw A.b(A.aG("Line "+s+" comes after offset "+a+"."))
return a-r},
eX(a){var s,r,q,p
if(a<0)throw A.b(A.aG("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.aG("Line "+a+" must be less than the number of lines in the file, "+this.guR()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.aG("Line "+a+" doesn't have 0 columns."))
return q}}
A.jw.prototype={
gY(){return this.a.a},
ga8(){return this.a.dR(this.b)},
gaj(){return this.a.hV(this.b)},
gak(){return this.b}}
A.f8.prototype={
gY(){return this.a.a},
gk(a){return this.c-this.b},
gH(){return A.wX(this.a,this.b)},
gG(){return A.wX(this.a,this.c)},
gaB(){return A.d6(B.a1.R(this.a.c,this.b,this.c),0,null)},
gaW(){var s=this,r=s.a,q=s.c,p=r.dR(q)
if(r.hV(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.d6(B.a1.R(r.c,r.eX(p),r.eX(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.eX(p+1)
return A.d6(B.a1.R(r.c,r.eX(r.dR(s.b)),q),0,null)},
T(a,b){var s
if(!(b instanceof A.f8))return this.nn(0,b)
s=B.b.T(this.b,b.b)
return s===0?B.b.T(this.c,b.c):s},
W(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.f8))return s.nm(0,b)
return s.b===b.b&&s.c===b.c&&J.v(s.a.a,b.a.a)},
gL(a){return A.d1(this.b,this.c,this.a.a,B.i,B.i,B.i,B.i)},
$icC:1}
A.ow.prototype={
uG(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.lq(B.c.gC(a1).c)
s=a.e
r=A.aJ(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.v(m.c,l)){a.fX("\u2575")
q.a+="\n"
a.lq(l)}else if(m.b+1!==n.b){a.rK("...")
q.a+="\n"}}for(l=n.d,k=A.a8(l).i("dS<1>"),j=new A.dS(l,k),j=new A.a5(j,j.gk(0),k.i("a5<Q.E>")),k=k.i("Q.E"),i=n.b,h=n.a;j.l();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gH().ga8()!==f.gG().ga8()&&f.gH().ga8()===i&&a.qf(B.a.q(h,0,f.gH().gaj()))){e=B.c.bO(r,a0)
if(e<0)A.y(A.O(A.q(r)+" contains no null elements.",a0))
r[e]=g}}a.rJ(i)
q.a+=" "
a.rI(n,r)
if(s)q.a+=" "
d=B.c.uI(l,new A.oR())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gH().ga8()===i?j.gH().gaj():0
a.rG(h,g,j.gG().ga8()===i?j.gG().gaj():h.length,p)}else a.fZ(h)
q.a+="\n"
if(k)a.rH(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.fX("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
lq(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.fX("\u2577")
else{q.fX("\u250c")
q.b2(new A.oE(q),"\x1b[34m")
s=q.r
r=" "+$.wN().m5(a)
s.a+=r}q.r.a+="\n"},
fV(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gH().ga8()
i=k?null:l.a.gG().ga8()
if(s&&l===c){h.b2(new A.oL(h,j,a),r)
n=!0}else if(n)h.b2(new A.oM(h,l),r)
else if(k)if(g.a)h.b2(new A.oN(h),g.b)
else o.a+=" "
else h.b2(new A.oO(g,h,c,j,a,l,i),p)}},
rI(a,b){return this.fV(a,b,null)},
rG(a,b,c,d){var s=this
s.fZ(B.a.q(a,0,b))
s.b2(new A.oF(s,a,b,c),d)
s.fZ(B.a.q(a,c,a.length))},
rH(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gH().ga8()===p.gG().ga8()){r.iZ()
p=r.r
p.a+=" "
r.fV(a,c,b)
if(c.length!==0)p.a+=" "
r.lr(b,c,r.b2(new A.oG(r,a,b),q))}else{s=a.b
if(p.gH().ga8()===s){if(B.c.E(c,b))return
A.GJ(c,b)
r.iZ()
p=r.r
p.a+=" "
r.fV(a,c,b)
r.b2(new A.oH(r,a,b),q)
p.a+="\n"}else if(p.gG().ga8()===s){p=p.gG().gaj()
if(p===a.a.length){A.AV(c,b)
return}r.iZ()
r.r.a+=" "
r.fV(a,c,b)
r.lr(b,c,r.b2(new A.oI(r,!1,a,b),q))
A.AV(c,b)}}},
lp(a,b,c){var s=c?0:1,r=this.r
s=B.a.aZ("\u2500",1+b+this.i7(B.a.q(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
rF(a,b){return this.lp(a,b,!0)},
lr(a,b,c){this.r.a+="\n"
return},
fZ(a){var s,r,q,p
for(s=new A.bX(a),r=t.V,s=new A.a5(s,s.gk(0),r.i("a5<B.E>")),q=this.r,r=r.i("B.E");s.l();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.aZ(" ",4)
else{p=A.bc(p)
q.a+=p}}},
fY(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.b.m(b+1)
this.b2(new A.oP(s,this,a),"\x1b[34m")},
fX(a){return this.fY(a,null,null)},
rK(a){return this.fY(null,null,a)},
rJ(a){return this.fY(null,a,null)},
iZ(){return this.fY(null,null,null)},
i7(a){var s,r,q,p
for(s=new A.bX(a),r=t.V,s=new A.a5(s,s.gk(0),r.i("a5<B.E>")),r=r.i("B.E"),q=0;s.l();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
qf(a){var s,r,q
for(s=new A.bX(a),r=t.V,s=new A.a5(s,s.gk(0),r.i("a5<B.E>")),r=r.i("B.E");s.l();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
nZ(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
b2(a,b){return this.nZ(a,b,t.z)}}
A.oQ.prototype={
$0(){return this.a},
$S:105}
A.oy.prototype={
$1(a){var s=a.d
return new A.bf(s,new A.ox(),A.a8(s).i("bf<1>")).gk(0)},
$S:106}
A.ox.prototype={
$1(a){var s=a.a
return s.gH().ga8()!==s.gG().ga8()},
$S:32}
A.oz.prototype={
$1(a){return a.c},
$S:108}
A.oB.prototype={
$1(a){var s=a.a.gY()
return s==null?new A.j():s},
$S:109}
A.oC.prototype={
$2(a,b){return a.a.T(0,b.a)},
$S:110}
A.oD.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.l([],t.dg)
for(s=J.aw(c),r=s.gu(c),q=t.g7;r.l();){p=r.gn().a
o=p.gaW()
n=A.wk(o,p.gaB(),p.gH().gaj())
n.toString
m=B.a.h_("\n",B.a.q(o,0,n)).gk(0)
l=p.gH().ga8()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.c.gZ(b).b)b.push(new A.c6(j,l,d,A.l([],q)));++l}}i=A.l([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.E)(b),++k){j=b[k]
h&1&&A.C(i,16)
B.c.r6(i,new A.oA(j),!0)
f=i.length
for(q=s.b_(c,g),p=q.$ti,q=new A.a5(q,q.gk(0),p.i("a5<Q.E>")),n=j.b,p=p.i("Q.E");q.l();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gH().ga8()>n)break
i.push(e)}g+=i.length-f
B.c.J(j.d,i)}return b},
$S:111}
A.oA.prototype={
$1(a){return a.a.gG().ga8()<this.a.b},
$S:32}
A.oR.prototype={
$1(a){return!0},
$S:32}
A.oE.prototype={
$0(){this.a.r.a+=B.a.aZ("\u2500",2)+">"
return null},
$S:0}
A.oL.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:3}
A.oM.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:3}
A.oN.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.oO.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.b2(new A.oJ(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gG().gaj()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.b2(new A.oK(r,o),p.b)}}},
$S:3}
A.oJ.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:3}
A.oK.prototype={
$0(){this.a.r.a+=this.b},
$S:3}
A.oF.prototype={
$0(){var s=this
return s.a.fZ(B.a.q(s.b,s.c,s.d))},
$S:0}
A.oG.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gH().gaj(),l=n.gG().gaj()
n=this.b.a
s=q.i7(B.a.q(n,0,m))
r=q.i7(B.a.q(n,m,l))
m+=s*3
n=(p.a+=B.a.aZ(" ",m))+B.a.aZ("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:12}
A.oH.prototype={
$0(){return this.a.rF(this.b,this.c.a.gH().gaj())},
$S:0}
A.oI.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.aZ("\u2500",3)
else r.lp(s.c,Math.max(s.d.a.gG().gaj()-1,0),!1)
return q.a.length-p.length},
$S:12}
A.oP.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.ve(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:3}
A.b7.prototype={
m(a){var s=this.a
s="primary "+(""+s.gH().ga8()+":"+s.gH().gaj()+"-"+s.gG().ga8()+":"+s.gG().gaj())
return s.charCodeAt(0)==0?s:s}}
A.ux.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.wk(o.gaW(),o.gaB(),o.gH().gaj())!=null)){s=A.ks(o.gH().gak(),0,0,o.gY())
r=o.gG().gak()
q=o.gY()
p=A.G4(o.gaB(),10)
o=A.qK(s,A.ks(r,A.zy(o.gaB()),p,q),o.gaB(),o.gaB())}return A.DU(A.DW(A.DV(o)))},
$S:112}
A.c6.prototype={
m(a){return""+this.b+': "'+this.a+'" ('+B.c.M(this.d,", ")+")"}}
A.c0.prototype={
jc(a){var s=this.a
if(!J.v(s,a.gY()))throw A.b(A.O('Source URLs "'+A.q(s)+'" and "'+A.q(a.gY())+"\" don't match.",null))
return Math.abs(this.b-a.gak())},
T(a,b){var s=this.a
if(!J.v(s,b.gY()))throw A.b(A.O('Source URLs "'+A.q(s)+'" and "'+A.q(b.gY())+"\" don't match.",null))
return this.b-b.gak()},
W(a,b){if(b==null)return!1
return t.hq.b(b)&&J.v(this.a,b.gY())&&this.b===b.gak()},
gL(a){var s=this.a
s=s==null?null:s.gL(s)
if(s==null)s=0
return s+this.b},
m(a){var s=this,r=A.iK(s).m(0),q=s.a
return"<"+r+": "+s.b+" "+(A.q(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$ial:1,
gY(){return this.a},
gak(){return this.b},
ga8(){return this.c},
gaj(){return this.d}}
A.kt.prototype={
jc(a){if(!J.v(this.a.a,a.gY()))throw A.b(A.O('Source URLs "'+A.q(this.gY())+'" and "'+A.q(a.gY())+"\" don't match.",null))
return Math.abs(this.b-a.gak())},
T(a,b){if(!J.v(this.a.a,b.gY()))throw A.b(A.O('Source URLs "'+A.q(this.gY())+'" and "'+A.q(b.gY())+"\" don't match.",null))
return this.b-b.gak()},
W(a,b){if(b==null)return!1
return t.hq.b(b)&&J.v(this.a.a,b.gY())&&this.b===b.gak()},
gL(a){var s=this.a.a
s=s==null?null:s.gL(s)
if(s==null)s=0
return s+this.b},
m(a){var s=A.iK(this).m(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.q(p==null?"unknown source":p)+":"+(q.dR(r)+1)+":"+(q.hV(r)+1))+">"},
$ial:1,
$ic0:1}
A.kv.prototype={
nx(a,b,c){var s,r=this.b,q=this.a
if(!J.v(r.gY(),q.gY()))throw A.b(A.O('Source URLs "'+A.q(q.gY())+'" and  "'+A.q(r.gY())+"\" don't match.",null))
else if(r.gak()<q.gak())throw A.b(A.O("End "+r.m(0)+" must come after start "+q.m(0)+".",null))
else{s=this.c
if(s.length!==q.jc(r))throw A.b(A.O('Text "'+s+'" must be '+q.jc(r)+" characters long.",null))}},
gH(){return this.a},
gG(){return this.b},
gaB(){return this.c}}
A.kw.prototype={
gjt(){return this.a},
m(a){var s,r,q,p=this.b,o="line "+(p.gH().ga8()+1)+", column "+(p.gH().gaj()+1)
if(p.gY()!=null){s=p.gY()
r=$.wN()
s.toString
s=o+(" of "+r.m5(s))
o=s}o+=": "+this.a
q=p.uH(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iI:1}
A.eL.prototype={
gak(){var s=this.b
s=A.wX(s.a,s.b)
return s.b},
$ibk:1,
gf1(){return this.c}}
A.eM.prototype={
gY(){return this.gH().gY()},
gk(a){return this.gG().gak()-this.gH().gak()},
T(a,b){var s=this.gH().T(0,b.gH())
return s===0?this.gG().T(0,b.gG()):s},
uH(a){var s=this
if(!t.ol.b(s)&&s.gk(s)===0)return""
return A.Cs(s,a).uG()},
W(a,b){if(b==null)return!1
return b instanceof A.eM&&this.gH().W(0,b.gH())&&this.gG().W(0,b.gG())},
gL(a){return A.d1(this.gH(),this.gG(),B.i,B.i,B.i,B.i,B.i)},
m(a){var s=this
return"<"+A.iK(s).m(0)+": from "+s.gH().m(0)+" to "+s.gG().m(0)+' "'+s.gaB()+'">'},
$ial:1}
A.cC.prototype={
gaW(){return this.d}}
A.hE.prototype={
ab(){return"SqliteUpdateKind."+this.b}}
A.c1.prototype={
gL(a){return A.d1(this.a,this.b,this.c,B.i,B.i,B.i,B.i)},
W(a,b){if(b==null)return!1
return b instanceof A.c1&&b.a===this.a&&b.b===this.b&&b.c===this.c},
m(a){return"SqliteUpdate: "+this.a.m(0)+" on "+this.b+", rowid = "+this.c}}
A.d3.prototype={
m(a){var s,r,q=this,p=q.e
p=p==null?"":"while "+p+", "
p="SqliteException("+q.c+"): "+p+q.a
s=q.b
if(s!=null)p=p+", "+s
s=q.f
if(s!=null){r=q.d
r=r!=null?" (at position "+A.q(r)+"): ":": "
s=p+"\n  Causing statement"+r+s
p=q.r
p=p!=null?s+(", parameters: "+J.aE(p,new A.qO(),t.N).M(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iI:1}
A.qO.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.ao(a)},
$S:113}
A.nH.prototype={
rz(){var s=this,r=s.d
return r==null?s.d=new A.dh(s,A.l([],t.fU),new A.nQ(s),new A.nR(s),t.jy):r},
ra(){var s=this,r=s.e
return r==null?s.e=new A.dh(s,A.l([],t.lw),new A.nN(s),new A.nO(s),t.lU):r},
o0(){var s=this,r=s.f
return r==null?s.f=new A.dh(s,A.l([],t.lw),new A.nJ(s),new A.nK(s),t.af):r},
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
r=s.k0()
q=r!==0?A.xS(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aX(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.y(A.w("This database has already been closed"))
r=p.b
q=r.a
s=q.eh(B.h.v(a),1)
q=q.d
r=A.Ax(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.y_(p,r,"executing",a,b)}else{s=p.hC(a,!0)
try{s.jh(new A.dH(b))}finally{s.p()}}},
P(a){return this.aX(a,B.v)},
qK(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.y(A.w("This database has already been closed"))
s=B.h.v(a)
r=e.b
q=r.a
p=q.eg(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.rC(r,p,n,o)
l=A.l([],t.lE)
k=new A.nL(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.k6(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.y_(e,n,"preparing statement",a,null)}n=q.buffer
h=B.b.O(n.byteLength,4)
g=new Int32Array(n,0,h)[B.b.a6(o,2)]-p
f=i.a
if(f!=null)l.push(new A.eN(f,e,new A.cM(!1).cw(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.k6(j,r-j,0)
n=q.buffer
h=B.b.O(n.byteLength,4)
j=new Int32Array(n,0,h)[B.b.a6(o,2)]-p
f=i.a
if(f!=null){l.push(new A.eN(f,e,""))
k.$0()
throw A.b(A.aY(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.aY(a,"sql","Has trailing data after the first sql statement:"))}}m.p()
return l},
hC(a,b){var s=this.qK(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.aY(a,"sql","Must contain an SQL statement."))
return B.c.gC(s)},
vg(a){return this.hC(a,!1)},
n_(a,b){var s,r=this.hC(a,!0)
try{s=r.jW(new A.dH(b))
return s}finally{r.p()}},
f_(a){return this.n_(a,B.v)}}
A.nQ.prototype={
$0(){var s=this.a,r=s.b
r.a.lH(r.b,new A.nP(s))},
$S:0}
A.nP.prototype={
$3(a,b,c){var s=A.Df(a)
if(s==null)return
this.a.d.jb(new A.c1(s,b,c))},
$S:114}
A.nR.prototype={
$0(){var s=this.a.b
s.a.lH(s.b,null)
return null},
$S:0}
A.nN.prototype={
$0(){var s=this.a,r=s.b
r.a.lG(r.b,new A.nM(s))
return null},
$S:0}
A.nM.prototype={
$0(){this.a.e.jb(null)},
$S:0}
A.nO.prototype={
$0(){var s=this.a.b
s.a.lG(s.b,null)
return null},
$S:0}
A.nJ.prototype={
$0(){var s=this.a,r=s.b
r.a.lF(r.b,new A.nI(s))
return null},
$S:0}
A.nI.prototype={
$0(){var s=this.a.f
s.jb(null)
return 0},
$S:12}
A.nK.prototype={
$0(){var s=this.a.b
s.a.lF(s.b,null)
return null},
$S:0}
A.nL.prototype={
$0(){var s,r,q,p,o,n
this.a.p()
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.E)(s),++q){p=s[q]
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
A.dh.prototype={
gct(){var s=this.r
return s==null?this.r=this.os(!1):s},
os(a){return new A.cL(new A.v9(this,!1),this.$ti.i("cL<1>"))},
jb(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.E)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.y(o.bl())
if((n&1)!==0)o.gaE().ap(a)}else{n=o.b
if(n>=4)A.y(o.bl())
if((n&1)!==0)o.c8(a)
else if((n&3)===0){n=o.fa()
o=new A.bN(a,o.$ti.i("bN<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.sdF(o)
n.c=o}}}}},
p(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.E)(s),++q)s[q].a.p()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.v9.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.p()
return}s=this.b
r=new A.va(q,a,s)
a.r=a.e=new A.vb(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(d_<1>)")}}
A.va.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.ih(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.vb.prototype={
$0(){var s=this.a,r=s.c
B.c.D(r,new A.ih(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.qL.prototype={
lU(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.De(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
v8(a,b){var s,r,q,p,o,n,m,l,k,j
this.lU()
switch(2){case 2:break}s=this.a
r=s.a
q=r.eh(B.h.v(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.eh(B.h.v(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.cy(r.b.buffer,0,null)[B.b.a6(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.j()
k=new A.rv(r,l,o)
r=r.r
if(r!=null)r.ly(k,l,o)
if(m!==0){j=A.xS(s,k,m,"opening the database",null,null)
k.k0()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.nH(s,k,!1)}}
A.eN.prototype={
go_(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.l([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.l3(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.cM(!1).cw(o,0,null,!0))}return q},
grr(){return null},
bi(a,b){A.y_(this.b,a,b,this.d,this.e)},
kC(){if(this.r||this.b.r)throw A.b(A.w("Tried to operate on a released prepared statement"))},
ol(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.cU()
if(s!==0?s!==101:q)r.bi(s,"executing statement")},
rg(){var s,r,q,p,o,n,m=this,l=A.l([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.r_(o))
l.push(p)}m.cU()
if(p!==0?p!==101:k)m.bi(p,"selecting from statement")
n=m.go_()
m.grr()
k=new A.km(l,n,B.a0)
k.nV()
return k},
r_(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.af(r.Number(s)):A.xy(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.nb(a)
case 4:return s.k5(a)
case 5:default:return null}},
nO(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.y(A.aY(a,"parameters","Expected "+A.q(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.nP(a[s-1],s)
this.e=a},
nP(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.aC(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.ay){s=q.a
if(a.T(0,$.B5())<0||a.T(0,$.B4())>0)A.y(A.yv("BigInt value exceeds the range of 64 bits"))
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a.m(0)))
break A}if(A.co(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.na(b,a)
break A}if(t.L.b(a)){s=q.a.n9(b,a)
break A}s=q.nN(a,b)
break A}if(s!==0)q.bi(s,"binding parameter")},
nN(a,b){throw A.b(A.aY(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
kj(a){A:{if(a instanceof A.dH){this.nO(a.a)
break A}if(a instanceof A.jg)a.a.$1(this)}},
cU(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
p(){var s,r,q=this
if(!q.r){q.r=!0
q.cU()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.lK(s.d)}},
jW(a){var s=this
s.kC()
s.cU()
s.kj(a)
return s.rg()},
jh(a){var s=this
s.kC()
s.cU()
s.kj(a)
s.ol()}}
A.jA.prototype={
hQ(a,b){return this.d.I(a)?1:0},
jO(a,b){this.d.D(0,a)},
jP(a){return new v.G.URL(a,"file:///").pathname},
d_(a,b){var s,r=a.a
if(r==null)r=A.yF(this.b,"/")
s=this.d
if(!s.I(r))if((b&4)!==0)s.j(0,r,new A.c5(new Uint8Array(0),0))
else throw A.b(A.eX(14))
return new A.fe(new A.lr(this,r,(b&8)!==0),0)},
jR(a){}}
A.lr.prototype={
m8(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.d.a9(a,0,s,J.dr(B.d.gaF(r.a),0,r.b),b)
return s},
jN(){return this.d>=2?1:0},
hR(){if(this.c)this.a.d.D(0,this.b)},
eU(){return this.a.d.h(0,this.b).b},
jQ(a){this.d=a},
jS(a){},
eV(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.c5(new Uint8Array(0),0))
s.h(0,r).sk(0,a)}else q.sk(0,a)},
jT(a){this.d=a},
dQ(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.c5(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sk(0,s)
p.ad(0,b,s,a)}}
A.wA.prototype={
$1(a){return a.length!==0},
$S:11}
A.np.prototype={
nV(){var s,r,q,p,o=A.G(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.E)(s),++q){p=s[q]
o.j(0,p,B.c.dC(s,p))}this.c=o}}
A.km.prototype={
gu(a){return new A.uW(this)},
h(a,b){return new A.bJ(this,A.cZ(this.d[b],t.X))},
j(a,b,c){throw A.b(A.Y("Can't change rows from a result set"))},
gk(a){return this.d.length},
$iD:1,
$in:1,
$ip:1}
A.bJ.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.aC(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gS(){return this.a.a},
gbb(){return this.b},
$iL:1}
A.uW.prototype={
gn(){var s=this.a
return new A.bJ(s,A.cZ(s.d[this.b],t.X))},
l(){return++this.b<this.a.d.length}}
A.lG.prototype={}
A.lH.prototype={}
A.lJ.prototype={}
A.lK.prototype={}
A.pI.prototype={
ab(){return"OpenMode."+this.b}}
A.dz.prototype={}
A.dH.prototype={}
A.jg.prototype={}
A.cI.prototype={
m(a){return"VfsException("+this.a+")"},
$iI:1}
A.hD.prototype={}
A.aL.prototype={}
A.j5.prototype={}
A.j4.prototype={
ghS(){return 0},
mn(a,b){return 12},
ghU(){return 4096},
hT(a,b){var s=this.m8(a,b),r=a.length
if(s<r){B.d.he(a,s,r,0)
throw A.b(B.cM)}},
$ib4:1,
$ihM:1}
A.e3.prototype={}
A.wI.prototype={
$0(){var s,r,q
for(s=this.a;!s.gB(0);){if(s.b===0)A.y(A.w("No such element"))
r=s.c
q=r.a
q.toString
q.iX(A.o(r).i("aT.E").a(r))
r.d.$0()}},
$S:0}
A.wG.prototype={
$1(a){var s=this.a,r=s.b
s.fN(s.c,new A.e3(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:15}
A.wH.prototype={
$4(a,b,c,d){this.a.$1(c.ei(d))},
$S:116}
A.rA.prototype={}
A.rv.prototype={
k0(){var s=this.a,r=s.r
if(r!=null)r.lK(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.rC.prototype={
p(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
k6(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.Ax(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.cy(o.b.buffer,0,null)[B.b.a6(n,2)]
if(s===0)r=null
else{n=new A.j()
r=new A.rB(s,o,n)
o=o.w
if(o!=null)o.ly(r,s,n)}return new A.lE(r,p)}}
A.rB.prototype={
n9(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.eg(b),J.av(b))},
na(a,b){var s=B.h.v(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.eg(s),s.length)},
k5(a){var s,r=this.c,q=this.b,p=r.d,o=p.sqlite3_column_bytes(q,a)
q=p.sqlite3_column_blob(q,a)
s=new Uint8Array(o)
B.d.d3(s,0,A.bx(r.b.buffer,q,o))
return s},
nb(a){var s=this.c
return A.e1(s.b,s.d.sqlite3_column_text(this.b,a))}}
A.dZ.prototype={}
A.d8.prototype={}
A.eZ.prototype={
sk(a,b){throw A.b(A.Y("Setting length in WasmValueList"))},
h(a,b){A.cy(this.a.b.buffer,0,null)
B.b.a6(this.c+b*4,2)
return new A.d8()},
j(a,b,c){throw A.b(A.Y("Setting element in WasmValueList"))},
gk(a){return this.b}}
A.jh.prototype={
v0(a){var s,r,q=this.b
q===$&&A.u()
s="[sqlite3] "+A.e1(q,a)
r=$.Fi
if(r==null)A.AS(s)
else r.$1(s)},
uZ(a,b){var s,r=new A.b8(A.nZ(A.af(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.u()
s=A.CT(q.buffer,b,8)
s.$flags&2&&A.C(s)
s[0]=A.xf(r)
s[1]=A.xd(r)
s[2]=A.xc(r)
s[3]=A.qd(r)
s[4]=A.xe(r)-1
s[5]=A.xg(r)-1900
s[6]=B.b.aC(A.CZ(r),7)},
wr(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.u()
s=new A.hD(A.xs(j,b,k))
try{r=a.d_(s,d)
if(e!==0){p=r.b
o=A.cy(j.buffer,0,k)
n=B.b.a6(e,2)
o.$flags&2&&A.C(o)
o[n]=p}p=A.cy(j.buffer,0,k)
o=B.b.a6(c,2)
p.$flags&2&&A.C(p)
p[o]=0
m=r.a
return m}catch(l){p=A.M(l)
if(p instanceof A.cI){q=p
p=q.a
j=A.cy(j.buffer,0,k)
o=B.b.a6(c,2)
j.$flags&2&&A.C(j)
j[o]=p}else{j=j.buffer
j=A.cy(j,0,k)
p=B.b.a6(c,2)
j.$flags&2&&A.C(j)
j[p]=1}}return k},
wg(a,b,c){var s=this.b
s===$&&A.u()
return A.bC(new A.nu(a,A.e1(s,b),c))},
w8(a,b,c,d){var s=this.b
s===$&&A.u()
return A.bC(new A.nr(this,a,A.e1(s,b),c,d))},
wn(a,b,c,d){var s=this.b
s===$&&A.u()
return A.bC(new A.nw(this,a,A.e1(s,b),c,d))},
wt(a,b,c){return A.bC(new A.ny(this,c,b,a))},
wy(a,b){return A.bC(new A.nA(a,b))},
we(a,b){var s,r=Date.now(),q=this.b
q===$&&A.u()
s=v.G.BigInt(r)
A.x2(A.yP(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
wc(a){return A.bC(new A.nt(a))},
wv(a,b,c,d){return A.bC(new A.nz(this,a,b,c,d))},
wG(a,b,c,d){return A.bC(new A.nE(this,a,b,c,d))},
wC(a,b){return A.bC(new A.nC(a,b))},
wA(a,b){return A.bC(new A.nB(a,b))},
wl(a,b){return A.bC(new A.nv(this,a,b))},
wp(a,b){return A.bC(new A.nx(a,b))},
wE(a,b){return A.bC(new A.nD(a,b))},
wa(a,b){return A.bC(new A.ns(this,a,b))},
wh(a){return a.ghS()},
wj(a,b,c){if(t.j2.b(a))return a.mn(b,c)
return 12},
ww(a){if(t.j2.b(a))return a.ghU()
return 4096},
tA(a){a.$0()},
tv(a){return a.$0()},
ty(a,b,c,d,e){var s=this.b
s===$&&A.u()
a.$3(b,A.e1(s,d),A.af(v.G.Number(e)))},
tG(a,b,c,d){var s=a.gwN(),r=this.a
r===$&&A.u()
s.$2(new A.dZ(),new A.eZ(r,c,d))},
tK(a,b,c,d){var s=a.gwP(),r=this.a
r===$&&A.u()
s.$2(new A.dZ(),new A.eZ(r,c,d))},
tI(a,b,c,d){var s=a.gwO(),r=this.a
r===$&&A.u()
s.$2(new A.dZ(),new A.eZ(r,c,d))},
tM(a,b){var s=a.gwQ()
this.a===$&&A.u()
s.$1(new A.dZ())},
tE(a,b){var s=a.gwM()
this.a===$&&A.u()
s.$1(new A.dZ())},
tC(a,b,c,d,e){var s,r,q=this.b
q===$&&A.u()
s=A.xs(q,c,b)
r=A.xs(q,e,d)
return a.gwJ().$2(s,r)},
tt(a,b){return a.$1(b)},
tr(a,b){return a.gwL().$1(b)},
tp(a,b,c){return a.gwK().$2(b,c)}}
A.nu.prototype={
$0(){return this.a.jO(this.b,this.c)},
$S:0}
A.nr.prototype={
$0(){var s,r=this,q=r.b.hQ(r.c,r.d),p=r.a.b
p===$&&A.u()
p=A.cy(p.buffer,0,null)
s=B.b.a6(r.e,2)
p.$flags&2&&A.C(p)
p[s]=q},
$S:0}
A.nw.prototype={
$0(){var s,r,q=this,p=B.h.v(q.b.jP(q.c)),o=p.length
if(o>q.d)throw A.b(A.eX(14))
s=q.a.b
s===$&&A.u()
s=A.bx(s.buffer,0,null)
r=q.e
B.d.d3(s,r,p)
s.$flags&2&&A.C(s)
s[r+o]=0},
$S:0}
A.ny.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.u()
s=A.bx(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.yh(s,q.b)
else return A.yh(s,null)},
$S:0}
A.nA.prototype={
$0(){this.a.jR(A.dC(this.b,0,0))},
$S:0}
A.nt.prototype={
$0(){return this.a.hR()},
$S:0}
A.nz.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.u()
s.b.hT(A.bx(r.buffer,s.c,s.d),A.af(v.G.Number(s.e)))},
$S:0}
A.nE.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.u()
s.b.dQ(A.bx(r.buffer,s.c,s.d),A.af(v.G.Number(s.e)))},
$S:0}
A.nC.prototype={
$0(){return this.a.eV(A.af(v.G.Number(this.b)))},
$S:0}
A.nB.prototype={
$0(){return this.a.jS(this.b)},
$S:0}
A.nv.prototype={
$0(){var s,r=this.b.eU(),q=this.a.b
q===$&&A.u()
q=A.cy(q.buffer,0,null)
s=B.b.a6(this.c,2)
q.$flags&2&&A.C(q)
q[s]=r},
$S:0}
A.nx.prototype={
$0(){return this.a.jQ(this.b)},
$S:0}
A.nD.prototype={
$0(){return this.a.jT(this.b)},
$S:0}
A.ns.prototype={
$0(){var s,r=this.b.jN(),q=this.a.b
q===$&&A.u()
q=A.cy(q.buffer,0,null)
s=B.b.a6(this.c,2)
q.$flags&2&&A.C(q)
q[s]=r},
$S:0}
A.fC.prototype={
a4(a,b,c,d){var s,r=null,q={},p=A.aW(A.x2(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.xl(r,r,r,!0,this.$ti.c)
q.a=null
s=new A.mt(q,this,p,o)
o.d=s
o.f=new A.mu(q,o,s)
return new A.b5(o,A.o(o).i("b5<1>")).a4(a,b,c,d)},
bu(a,b,c){return this.a4(a,null,b,c)}}
A.mt.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a3(q,t.m).bV(new A.mv(p,r.b,s,r),s.grP(),t.P)},
$S:0}
A.mv.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.p()
q.a.a=null}else{r.t(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gaE().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:14}
A.mu.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gaE().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.e7.prototype={
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
return s==null?A.y(A.w("Await moveNext() first")):s},
l(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.r($.t,t.k)
s=new A.aa(o,t.ex)
r=p.d
q=t.m
p.b=A.b6(r,"success",new A.u_(p,s),!1,q)
p.c=A.b6(r,"error",new A.u0(p,s),!1,q)
return o}}
A.u_.prototype={
$1(a){var s,r=this.a
r.A()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.aq(s!=null)},
$S:2}
A.u0.prototype={
$1(a){var s=this.a
s.A()
s=s.d.error
if(s==null)s=a
this.b.aA(s)},
$S:2}
A.n4.prototype={
$1(a){this.a.aq(this.c.a(this.b.result))},
$S:2}
A.n5.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aA(s)},
$S:2}
A.n9.prototype={
$1(a){this.a.aq(this.c.a(this.b.result))},
$S:2}
A.na.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aA(s)},
$S:2}
A.nb.prototype={
$1(a){this.a.aA(new A.bl("IndexedDB open blocked"))},
$S:2}
A.oi.prototype={
$1(a){return A.aW(a[1])},
$S:138}
A.rw.prototype={
td(){var s={}
s.dart=new A.rx(this).$0()
return s},
hv(a){return this.uV(a)},
uV(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hv=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a3(v.G.WebAssembly.instantiateStreaming(a,p.td()),t.m),$async$hv)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hv,r)}}
A.rx.prototype={
$0(){var s=this.a.a,r=A.aW(v.G.Object),q=A.aW(r.create.apply(r,[null]))
q.error_log=A.cn(s.gv_())
q.localtime=A.bB(s.guY())
q.xOpen=A.xK(s.gwq())
q.xDelete=A.mb(s.gwf())
q.xAccess=A.fq(s.gw7())
q.xFullPathname=A.fq(s.gwm())
q.xRandomness=A.mb(s.gws())
q.xSleep=A.bB(s.gwx())
q.xCurrentTimeInt64=A.bB(s.gwd())
q.xClose=A.cn(s.gwb())
q.xRead=A.fq(s.gwu())
q.xWrite=A.fq(s.gwF())
q.xTruncate=A.bB(s.gwB())
q.xSync=A.bB(s.gwz())
q.xFileSize=A.bB(s.gwk())
q.xLock=A.bB(s.gwo())
q.xUnlock=A.bB(s.gwD())
q.xCheckReservedLock=A.bB(s.gw9())
q.xDeviceCharacteristics=A.cn(s.ghS())
q.xFileControl=A.mb(s.gwi())
q.xSectorSize=A.cn(s.ghU())
q["dispatch_()v"]=A.cn(s.gtz())
q["dispatch_()i"]=A.cn(s.gtu())
q.dispatch_update=A.xK(s.gtx())
q.dispatch_xFunc=A.fq(s.gtF())
q.dispatch_xStep=A.fq(s.gtJ())
q.dispatch_xInverse=A.fq(s.gtH())
q.dispatch_xValue=A.bB(s.gtL())
q.dispatch_xFinal=A.bB(s.gtD())
q.dispatch_compare=A.xK(s.gtB())
q.dispatch_busy=A.bB(s.gts())
q.changeset_apply_filter=A.bB(s.gtq())
q.changeset_apply_conflict=A.mb(s.gtn())
return q},
$S:26}
A.eY.prototype={}
A.mw.prototype={
hz(){var s=0,r=A.h(t.H),q=this,p,o
var $async$hz=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.r($.t,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.cn(new A.mz(o))
new A.aa(p,t.h1).aq(A.Ca(o,t.m))
s=2
return A.a(p,$async$hz)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$hz,r)},
dm(a,b){return this.rb(a,b)},
rb(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$dm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.BE(),b)
o=A.DX(p)
s=2
return A.a(A.GK(new A.my(a,o,p),t.mj),$async$dm)
case 2:s=3
return A.a(o.b.a,$async$dm)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$dm,r)},
qJ(a){return this.dm(new A.mx(a),"readwrite")}}
A.mz.prototype={
$1(a){var s=A.aW(this.a.result)
if(J.v(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:14}
A.my.prototype={
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
$S:140}
A.mx.prototype={
$1(a){return this.mo(a)},
mo(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].aI(a),$async$$1)
case 5:case 3:p.length===o||(0,A.E)(p),++n
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:19}
A.i6.prototype={
nB(a){var s=A.vQ(new A.uA(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.vQ(new A.uB(this))},
iL(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.l([a,c],s),A.l([a,b],s))},
qX(a){return this.iL(a,9007199254740992,0)},
qY(a,b){return this.iL(a,9007199254740992,b)},
hu(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$hu=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.G(t.N,t.S)
k=new A.e7(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.l(),$async$hu)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.y(A.w("Await moveNext() first"))
n=o.key
n.toString
A.H(n)
m=o.primaryKey
m.toString
l.j(0,n,A.af(A.ee(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hu,r)},
hd(a){return this.u8(a)},
u8(a){var s=0,r=A.h(t.aV),q,p=this,o
var $async$hd=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.ca(p.d.index("fileName").getKey(a),t.i),$async$hd)
case 3:q=o.af(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hd,r)},
iM(a){return A.ca(this.d.get(a),t.B).bh(new A.uz(a),t.m)},
dT(a,b){return this.nc(a,b)},
nc(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$dT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.iM(a),$async$dT)
case 3:h=d
g=h.length
f=new A.c5(new Uint8Array(g),g)
e=new A.e7(p.e.openCursor(p.qX(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.l(),$async$dT)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.y(A.w("Await moveNext() first"))
k=n.a(l.key)
j=A.af(A.ee(k[1]))
if(j>=h.length){s=5
break}i=new A.uC(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.qB(A.aW(l.value)).bh(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dT,r)},
h5(a){return this.tc(a)},
tc(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$h5=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.y(A.w("IDB transaction already completed"))
o=A
s=3
return A.a(A.ca(p.d.put({name:a,length:0}),t.i),$async$h5)
case 3:q=o.af(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h5,r)},
cZ(a,b){return this.w1(a,b)},
w1(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$cZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.y(A.w("IDB transaction already completed"))
s=2
return A.a(q.iM(a),$async$cZ)
case 2:p=d
o=b.b
n=A.o(o).i("a7<1>")
m=A.P(new A.a7(o,n),n.i("n.E"))
B.c.b0(m)
s=3
return A.a(A.yE(new A.ac(m,new A.uD(new A.uE(q,a),b),A.a8(m).i("ac<1,A<~>>")),t.H),$async$cZ)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.e7(q.d.openCursor(a),t.R)
s=6
return A.a(l.l(),$async$cZ)
case 6:s=7
return A.a(A.ca(l.gn().update({name:p.name,length:b.c}),t.X),$async$cZ)
case 7:case 5:return A.e(null,r)}})
return A.f($async$cZ,r)},
cY(a,b,c){return this.vQ(0,b,c)},
vQ(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$cY=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.y(A.w("IDB transaction already completed"))
s=2
return A.a(q.iM(b),$async$cY)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.ca(q.e.delete(q.qY(b,B.b.O(c,4096)*4096)),t.X),$async$cY)
case 5:case 4:o=new A.e7(q.d.openCursor(b),t.R)
s=6
return A.a(o.l(),$async$cY)
case 6:s=7
return A.a(A.ca(o.gn().update({name:p.name,length:c}),t.X),$async$cY)
case 7:return A.e(null,r)}})
return A.f($async$cY,r)},
h9(a){return this.tl(a)},
tl(a){var s=0,r=A.h(t.H),q=this,p
var $async$h9=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.y(A.w("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.yE(A.l([A.ca(q.e.delete(q.iL(a,9007199254740992,0)),p),A.ca(q.d.delete(a),p)],t.iw),t.H),$async$h9)
case 2:return A.e(null,r)}})
return A.f($async$h9,r)}}
A.uA.prototype={
$0(){this.a.b.au()},
$S:3}
A.uB.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aA(r)},
$S:3}
A.uz.prototype={
$1(a){if(a==null)throw A.b(A.aY(this.a,"fileId","File not found in database"))
else return a},
$S:142}
A.uC.prototype={
$1(a){var s=this.a
s.d3(s,this.b,J.dr(a,0,this.c))},
$S:143}
A.uE.prototype={
mT(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.ca(p.openCursor(v.G.IDBKeyRange.only(A.l([o,a],n))),t.B),$async$$2)
case 2:m=d
l=t.a.a(B.d.gaF(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.ca(p.put(l,A.l([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.ca(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.mT(a,b)},
$S:144}
A.uD.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:145}
A.ub.prototype={
rw(a,b,c){B.d.d3(this.b.m7(a,new A.uc(this,a)),b,c)},
rT(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.b.O(q,4096)
o=B.b.aC(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.rw(p*4096,o,J.dr(B.d.gaF(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.uc.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.d.d3(s,0,J.dr(B.d.gaF(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:146}
A.lA.prototype={}
A.cV.prototype={
eb(a){var s=this
if(s.e||s.d.a==null)A.y(A.eX(10))
if(a.jo(s.x)){s.ca(!0)
return a.d.a}else return A.ct(null,t.H)},
ca(a){return this.rq(a)},
rq(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$ca=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gB(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.P(o,o.$ti.i("n.E"))
o.ai(0)
s=5
return A.a(p.d.qJ(n).aJ(new A.oU(p,n,a)),$async$ca)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$ca,r)},
p(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.eb(new A.i4(new A.oV(),new A.aa(new A.r($.t,t.D),t.F)))
p.e=!0
p.ca(!1)
q=o
s=1
break}else{n=p.x
if(!n.gB(0)){q=n.gZ(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$p,r)},
d9(a,b){return this.op(a,b)},
op(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$d9=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(a.hd(b),$async$d9)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$d9,r)},
e5(){var s=0,r=A.h(t.H),q=this,p
var $async$e5=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.l([],t.iw)
s=2
return A.a(q.d.dm(new A.oT(q,p),"readonly"),$async$e5)
case 2:s=3
return A.a(A.Cp(p,t.H),$async$e5)
case 3:return A.e(null,r)}})
return A.f($async$e5,r)},
ud(){return this.ca(!1)},
hQ(a,b){return this.w.d.I(a)?1:0},
jO(a,b){var s=this
s.w.d.D(0,a)
if(!s.y.D(0,a))s.eb(new A.hZ(s,a,new A.aa(new A.r($.t,t.D),t.F)))},
jP(a){return new v.G.URL(a,"file:///").pathname},
d_(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.yF(p.b,"/")
s=p.w
r=s.d.I(o)?1:0
q=s.d_(new A.hD(o),b)
if(r===0)if((b&8)!==0)p.y.t(0,o)
else p.eb(new A.f4(p,o,new A.aa(new A.r($.t,t.D),t.F)))
return new A.fe(new A.ls(p,q.a,o),0)},
jR(a){}}
A.oU.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.E)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.y(A.w("Future already completed"))
p.c0(null)}o.ca(this.c)},
$S:3}
A.oV.prototype={
$1(a){return this.mu(a)},
mu(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:19}
A.oT.prototype={
$1(a){return this.mt(a)},
mt(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.hu(),$async$$1)
case 2:m=c
l=q.a
l.z.J(0,m)
p=m.gbL(),p=p.gu(p),o=q.b,l=l.w.d
case 3:if(!p.l()){s=4
break}n=p.gn()
k=l
j=n.a
s=5
return A.a(a.dT(n.b,o),$async$$1)
case 5:k.j(0,j,c)
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:19}
A.ls.prototype={
hT(a,b){this.b.hT(a,b)},
ghS(){return 0},
ghU(){return 4096},
jN(){return this.b.d>=2?1:0},
hR(){},
eU(){return this.b.eU()},
jQ(a){this.b.d=a
return null},
jS(a){},
mn(a,b){return 12},
eV(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.y(A.eX(10))
s.b.eV(a)
if(!r.y.E(0,s.c))r.eb(new A.i4(new A.uy(s,a),new A.aa(new A.r($.t,t.D),t.F)))},
jT(a){this.b.d=a
return null},
dQ(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.y(A.eX(10))
s=m.c
if(l.y.E(0,s)){m.b.dQ(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.c5(new Uint8Array(0),0)
q=J.dr(B.d.gaF(r.a),0,r.b)
m.b.dQ(a,b)
p=new Uint8Array(a.length)
B.d.d3(p,0,a)
o=A.l([],t.p8)
n=$.t
o.push(new A.lA(b,p))
l.eb(new A.fn(l,s,q,o,new A.aa(new A.r(n,t.D),t.F)))},
$ib4:1,
$ihM:1}
A.uy.prototype={
$1(a){return this.mS(a)},
mS(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.d9(a,o.c),$async$$1)
case 3:q=n.cY(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:19}
A.aN.prototype={
jo(a){a.fN(a.c,this,!1)
return!0}}
A.i4.prototype={
aI(a){return this.w.$1(a)}}
A.hZ.prototype={
jo(a){var s,r,q,p
if(!a.gB(0)){s=a.gZ(0)
for(r=this.x;s!=null;)if(s instanceof A.hZ)if(s.x===r)return!1
else s=s.geE()
else if(s instanceof A.fn){q=s.geE()
if(s.x===r){p=s.a
p.toString
p.iX(A.o(s).i("aT.E").a(s))}s=q}else if(s instanceof A.f4){if(s.x===r){r=s.a
r.toString
r.iX(A.o(s).i("aT.E").a(s))
return!1}s=s.geE()}else break}a.fN(a.c,this,!1)
return!0},
aI(a){return this.vI(a)},
vI(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.d9(a,o),$async$aI)
case 2:n=c
p.z.D(0,o)
s=3
return A.a(a.h9(n),$async$aI)
case 3:return A.e(null,r)}})
return A.f($async$aI,r)}}
A.f4.prototype={
aI(a){return this.vH(a)},
vH(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.h5(p),$async$aI)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aI,r)}}
A.fn.prototype={
jo(a){var s,r=a.b===0?null:a.gZ(0)
for(s=this.x;r!=null;)if(r instanceof A.fn)if(r.x===s){B.c.J(r.z,this.z)
return!1}else r=r.geE()
else if(r instanceof A.f4){if(r.x===s)break
r=r.geE()}else break
a.fN(a.c,this,!1)
return!0},
aI(a){return this.vJ(a)},
vJ(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.ub(m,A.G(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.E)(m),++o){n=m[o]
l.rT(n.a,n.b)}k=a
s=3
return A.a(q.w.d9(a,q.x),$async$aI)
case 3:s=2
return A.a(k.cZ(c,l),$async$aI)
case 2:return A.e(null,r)}})
return A.f($async$aI,r)}}
A.et.prototype={
ab(){return"FileType."+this.b}}
A.eK.prototype={
br(){var s=this.d
if(s!=null)return s
throw A.b(A.w("VFS closed"))},
hQ(a,b){var s=$.wK().h(0,a)
if(s==null)return this.e.d.I(a)?1:0
else return this.br().cf(s)?1:0},
jO(a,b){var s=$.wK().h(0,a)
if(s==null){this.e.d.D(0,a)
return null}else this.br().ez(s,!1)},
jP(a){return new v.G.URL(a,"file:///").pathname},
d_(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.d_(a,b)
s=$.wK().h(0,p)
if(s==null)return q.e.d_(a,b)
r=q.br()
if(!r.cf(s))if((b&4)!==0){r.cM(s).truncate(0)
r.ez(s,!0)}else throw A.b(B.cL)
return new A.fe(new A.lQ(q,s,(b&8)!==0),0)},
jR(a){},
p(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cm(a,b){return this.va(a,b)},
bw(a){return this.cm(a,!1)},
va(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.qI(a,b)
s=2
return A.a(m.$1("meta"),$async$cm)
case 2:l=d
k=J.v(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$cm)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$cm)
case 4:o=d
n=q.d=new A.uS(new Uint8Array(2),l,p,o)
if(k){n.ez(B.aC,p.getSize()>0)
n.ez(B.aD,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cm,r)}}
A.qI.prototype={
mO(a){var s=0,r=A.h(t.m),q,p=this,o,n
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
$1(a){return this.mO(a)},
$S:147}
A.lQ.prototype={
m8(a,b){return A.yC(this.a.br().cM(this.b),a,{at:b})},
jN(){return this.d>=2?1:0},
hR(){var s=this.a,r=this.b
s.br().cM(r).flush()
if(this.c)s.br().ez(r,!1)},
eU(){return this.a.br().cM(this.b).getSize()},
jQ(a){this.d=a},
jS(a){this.a.br().cM(this.b).flush()},
eV(a){this.a.br().cM(this.b).truncate(a)},
jT(a){this.d=a},
dQ(a,b){if(A.yD(this.a.br().cM(this.b),a,{at:b})<a.length)throw A.b(B.cN)}}
A.uS.prototype={
cf(a){var s=this.a
A.yC(this.b,s,{at:0})
return s[a.a]!==0},
ez(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.C(s)
s[a.a]=r
A.yD(this.b,s,{at:0})},
cM(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.rq.prototype={
ny(a,b){var s=this,r=s.c
r.a!==$&&A.B_()
r.a=s
r=t.S
A.ud(new A.rr(s),r)
A.ud(new A.rs(s),r)
s.r=A.ud(new A.rt(s),r)
s.w=A.ud(new A.ru(s),r)},
eh(a,b){var s=J.J(a),r=this.d.dart_sqlite3_malloc(s.gk(a)+b),q=A.bx(this.b.buffer,0,null)
B.d.ad(q,r,r+s.gk(a),a)
B.d.he(q,r+s.gk(a),r+s.gk(a)+b,0)
return r},
eg(a){return this.eh(a,0)},
lH(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
lF(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
lG(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.rr.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:7}
A.rs.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:7}
A.rt.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:7}
A.ru.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:7}
A.fK.prototype={}
A.qh.prototype={
nv(a){var s,r=this,q=r.a
q.start()
r.c=A.b6(q,"message",new A.ql(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.iR()
q.toString
A.hN(q,s,null,null,!1).bh(new A.qm(r),t.P)}},
ix(a){return this.pi(a)},
pi(a){var s=0,r=A.h(t.H),q=this
var $async$ix=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.G8(a,new A.qi(q),q.guw(),new A.qj(q),new A.qk(q))
return A.e(null,r)}})
return A.f($async$ix,r)},
f0(a,b,c){return this.n5(a,b,c,c)},
n5(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$f0=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.C0(null))
o=p.e++
n=new A.r($.t,t.a7)
p.f.j(0,o,new A.aa(n,t.h1))
a.i=o
p.a.postMessage(a,A.fv(a))
s=3
return A.a(n,$async$f0)
case 3:m=f
if(J.v(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.D6(m))
case 1:return A.e(q,r)}})
return A.f($async$f0,r)},
qj(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.A()
s=q.d
if(s!=null)s.A()
for(s=q.f,r=new A.aI(s,s.r,s.e,A.o(s).i("aI<2>"));r.l();)r.d.aA(new A.fG(a))
s.ai(0)
p.au()},
kR(){return this.qj(null)}}
A.ql.prototype={
$1(a){if(a.data=="_disconnect"){this.a.kR()
return}this.a.ix(A.aW(a.data))},
$S:2}
A.qm.prototype={
$1(a){this.a.kR()
a.a.au()},
$S:148}
A.qk.prototype={
$1(a){var s=this.a.f.D(0,a.i)
if(s!=null)s.aq(a)},
$S:14}
A.qj.prototype={
$1(a){return this.mI(a)},
mI(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=d.tw(a1,m.signal)
s=6
return A.a(t.nW.b(j)?j:A.bg(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.M(a0)
k=A.ab(a0)
if(!(l instanceof A.cO)){b.console.error("Error in worker: "+J.ao(l))
b.console.error("Original trace: "+A.q(k))}b=l
if(b instanceof A.d3){h=A.Cj(b)
g=0}else{g=b instanceof A.cO?1:null
h=null}f={e:J.ao(b),s:g,r:h,i:e,t:"errorResponse"}
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
c.D(0,e)
s=o.pop()
break
case 5:c=f
d.a.postMessage(c,A.fv(c))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:149}
A.qi.prototype={
$1(a){var s=this.a.r.D(0,a.i)
if(s!=null)s.abort()},
$S:14}
A.fG.prototype={
m(a){return"Channel to database worker is closed: "+A.q(this.a)},
$iI:1}
A.nF.prototype={
bR(a){return this.uW(a)},
uW(a){var s=0,r=A.h(t.n),q
var $async$bR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.rz(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bR,r)}}
A.jf.prototype={}
A.nq.prototype={}
A.e_.prototype={}
A.ju.prototype={
hx(){var s=0,r=A.h(t.H),q=this
var $async$hx=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.bw(q.b),$async$hx)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hx,r)},
jC(){var s=0,r=A.h(t.H),q=this
var $async$jC=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.p()
return A.e(null,r)}})
return A.f($async$jC,r)}}
A.ou.prototype={
vL(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
ot(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.rG.prototype={
$1(a){var s=new A.r($.t,t.D),r=new A.cu(new A.aa(s,t.F))
this.a.a=r
this.b.aq(r)
return A.Cq(s)},
$S:150}
A.rH.prototype={
$2(a,b){var s,r,q
A.aW(a)
s=J.v(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.bK(new A.cO("Operation was cancelled"),b)
else q.bK(a,b)}return null},
$S:151}
A.cu.prototype={}
A.ji.prototype={
gt4(){if(this.c.a)return!1
return!this.d||this.f!=null},
d6(a){return this.nF(a)},
nF(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$d6=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.iR()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.hN(n,o.a,null,o.gpn(),!0),$async$d6)
case 6:m=c
s=7
return A.a(A.hN(n,o.b,a,null,!1),$async$d6)
case 7:l=c
j=o.e
j=j==null?null:j.hx()
s=8
return A.a(j instanceof A.r?j:A.bg(j,t.H),$async$d6)
case 8:o.f=new A.aB(m,l)
q=1
s=5
break
case 3:q=2
i=p.pop()
j=m
if(j!=null)j.a.au()
j=l
if(j!=null)j.a.au()
throw i
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$d6,r)},
po(){this.m9()},
js(a,b,c){return this.c.hM(new A.nT(this,a,b,c),b,c)},
m9(){return this.c.jM(new A.nU(this),t.H)}}
A.nT.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.d6(r.c).bh(new A.nS(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.nS.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.nU.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.jC()
s.a.au()
r.a.au()
p.f=null}},
$S:3}
A.hg.prototype={
hM(a,b,c){return this.w0(a,b,c,c)},
jM(a,b){return this.hM(a,null,b)},
w0(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$hM=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.v(g?null:b.aborted,!0))throw A.b(B.a4)
h.a=!1
o=new A.pC(h,p)
if(!p.a){h.a=p.a=!0
q=A.fY(a,c).aJ(o)
s=1
break}else{n={}
m=new A.r($.t,c.i("r<0>"))
l=new A.aa(m,c.i("aa<0>"))
n.a=null
h=new A.pB(h,n,l,a,c)
if(!g)n.a=A.b6(b,"abort",new A.pA(n,p,l,h),!1,t.m)
g=p.b
n=g.a
k=g.c
n[k]=h
n=n.length
k=(k+1&n-1)>>>0
g.c=k
if(g.b===k){j=A.aJ(n*2,null,!1,g.$ti.i("1?"))
h=g.a
n=g.b
i=h.length-n
B.c.a9(j,0,i,h,n)
B.c.a9(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.aJ(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$hM,r)}}
A.pC.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gB(0)){s=r.b
if(s===r.c)A.y(A.ar());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.pB.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.A()
r.c.aq(A.fY(r.d,r.e))},
$S:0}
A.pA.prototype={
$1(a){var s,r=this
r.a.a.A()
s=r.c
if((s.a.a&30)===0){r.b.b.D(0,r.d)
s.aA(B.a4)}},
$S:2}
A.dA.prototype={
gmg(){var s,r,q,p,o,n=this,m=t.s,l=A.l([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.E)(s),++q){p=s[q]
B.c.J(l,A.l([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.o9.prototype={
$1(a){if(a!=null)return A.H(a)
return null},
$S:152}
A.jX.prototype={
ab(){return"MessageType."+this.b}}
A.qE.prototype={
tw(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.hk(a,b)
case"connect":return p.ji(a,b)
case"custom":return p.dz(a,b)
case"fileSystemExists":return p.er(a,b)
case"fileSystemFlush":return p.es(a,b)
case"fileSystemAccess":return p.eq(a,b)
case"runQuery":return p.ho(a,b)
case"exclusiveLock":return p.hj(a,b)
case"releaseLock":s=p.bf(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.y(A.w("Lock to be released is not active."))
q.b.au()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.hh(a,b)
case"openAdditionalConnection":return p.hl(a,b)
case"updateRequest":return p.hp(a,b)
case"rollbackRequest":return p.hn(a,b)
case"commitRequest":return p.hi(a,b)
case"dedicatedCompatibilityCheck":return p.da(a,b)
case"sharedCompatibilityCheck":return p.da(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.da(a,b)
default:r=A.vR(new A.bq(!1,o,o,"Unsupported request "+A.q(a.t)),o)
q=new A.r($.t,t.hl)
q.c_(r)
return q}}}
A.cR.prototype={
ab(){return"FileSystemImplementation."+this.b}}
A.c4.prototype={
ab(){return"TypeCode."+this.b},
tg(a){var s=null
switch(this.a){case 0:s=A.y(A.O("Unsupported type code",null))
break
case 1:a=A.af(A.ee(a))
s=a
break
case 2:s=A.xy(t.bJ.a(a).toString(),null)
break
case 3:A.ee(a)
s=a
break
case 4:A.H(a)
s=a
break
case 5:t.Z.a(a)
s=a
break
case 7:A.fp(a)
s=a
break
case 6:break}return s}}
A.dB.prototype={
lz(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.O("Expected "+A.q(r)+" parameters, got "+A.q(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.ae:B.aG[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.af(A.ee(h))))
if(k!==0)a.bi(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bi(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.ee(h))
if(k!==0)a.bi(k,e)
break
case 4:g=B.h.v(A.H(h))
k=s.dart_sqlite3_bind_text(d,i,c.eg(g),g.length)
if(k!==0)a.bi(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.eg(h),h.length)
if(k!==0)a.bi(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bi(k,e)
break
case 7:f=A.fp(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bi(k,e)
break
case 0:throw A.b(A.Y("Unknown type code"))}}},
gk(a){return this.a.length},
sk(a,b){this.lm()},
h(a,b){var s=this.c[b],r=s>=8?B.ae:B.aG[s]
return r.tg(this.a[b])},
j(a,b,c){this.lm()},
lm(){throw A.b(A.Y("decodeValues list is unmodifiable"))}}
A.w3.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:14}
A.n2.prototype={
$1(a){this.a.aq(this.c.a(this.b.result))},
$S:2}
A.n3.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aA(s)},
$S:2}
A.n6.prototype={
$1(a){this.a.aq(this.c.a(this.b.result))},
$S:2}
A.n7.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aA(s)},
$S:2}
A.n8.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aA(s)},
$S:2}
A.qc.prototype={
tO(){var s,r,q,p
for(s=this.b,r=new A.aI(s,s.r,s.e,A.o(s).i("aI<2>"));r.l();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.ai(0)}}
A.fT.prototype={
ab(){return"FileType."+this.b}}
A.d4.prototype={
ab(){return"StorageMode."+this.b}}
A.eH.prototype={
m(a){return"Remote error: "+this.a},
$iI:1}
A.cO.prototype={}
A.vP.prototype={
$1(a){return A.aW(a.data)},
$S:154}
A.im.prototype={
A(){var s=this.a
if(s!=null)s.A()
this.a=null}}
A.f3.prototype={
p(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.c.A()
q.d.A()
q.e.A()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.E)(p),++n)p[n].abort()
B.c.ai(p)
p=q.f
if(p!=null)p.b.au()
s=2
return A.a(q.a.ej(),$async$p)
case 2:return A.e(null,r)}})
return A.f($async$p,r)},
le(a){var s=new v.G.AbortController()
a.onabort=A.vQ(new A.tU(s))
this.w.push(s)
return s},
jJ(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gt4()){r=p.le(b)
o=s.js(c,r.signal,d).aJ(new A.tY(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.w("Requested operation on inactive lock state."))}if(o==null)o=A.fY(c,d)
q=p.a.z
return q instanceof A.cV?o.aJ(q.guc()):o},
v7(a){var s=this,r=s.le(a),q=new A.r($.t,t.hy),p=new A.aM(q,t.ho),o=t.H
A.wY(s.a.f.js(new A.tV(s,p),r.signal,o),new A.tW(p),o,t.K)
return q.aJ(new A.tX(s,r))}}
A.tU.prototype={
$0(){return this.a.abort()},
$S:0}
A.tY.prototype={
$0(){B.c.D(this.a.w,this.b)},
$S:3}
A.tV.prototype={
$0(){var s=this.a,r=s.r++,q=new A.r($.t,t.D)
s.f=new A.aB(r,new A.aM(q,t.Q))
this.b.aq(r)
return q},
$S:4}
A.tW.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.bK(a,b)},
$S:9}
A.tX.prototype={
$0(){B.c.D(this.a.w,this.b)},
$S:3}
A.hX.prototype={
nA(a,b,c){this.b.a.aJ(new A.tJ(this))},
da(a,b){return this.oC(a,b)},
oC(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$da=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.lB(a),$async$da)
case 3:q={r:d.gmg(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$da,r)},
ji(a,b){return this.ui(a,b)},
ui(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ji=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.gkM()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.fv(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ji,r)},
dz(a,b){return this.uj(a,b)},
uj(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$dz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.kx(l)
n=a.r
s=7
return A.a(o.a.gbS(),$async$dz)
case 7:s=6
return A.a(d.cg(p,new A.nq(n)),$async$dz)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cg(p,new A.jf(a)),$async$dz)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dz,r)},
hk(a,b){return this.uy(a,b)},
uy(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.jM(new A.tO(p,a),t.m),$async$hk)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hk,r)},
ho(a,b){return this.uC(a,b)},
uC(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$ho=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bf(a)
n=o.a
s=3
return A.a(n.gbS(),$async$ho)
case 3:m=d
q=o.jJ(a.z,b,new A.tR(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ho,r)},
hj(a,b){return this.un(a,b)},
un(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bf(a).v7(b),$async$hj)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hj,r)},
hi(a,b){return this.uh(a,b)},
uh(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hi=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bf(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.d4(n,new A.tL(p,o),a),$async$hi)
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
hn(a,b){return this.uB(a,b)},
uB(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hn=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bf(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.d4(n,new A.tQ(p,o),a),$async$hn)
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
return A.f($async$hn,r)},
hp(a,b){return this.uE(a,b)},
uE(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bf(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.d4(n,new A.tT(p,o),a),$async$hp)
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
return A.f($async$hp,r)},
hl(a,b){return this.uz(a,b)},
uz(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$hl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bf(a).a;++m.w
s=3
return A.a(A.w6(),$async$hl)
case 3:o=d
n=o.a
p.w.ke(o.b).x.push(A.zu(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hl,r)},
hh(a,b){return this.ug(a,b)},
ug(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$hh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bf(a)
B.c.D(p.x,o)
s=3
return A.a(o.p(),$async$hh)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hh,r)},
es(a,b){return this.ur(a,b)},
ur(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$es=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bf(a).a.gcp(),$async$es)
case 3:o=d
s=o instanceof A.cV?4:5
break
case 4:s=6
return A.a(o.ca(!1),$async$es)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$es,r)},
eq(a,b){return this.uo(a,b)},
uo(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$eq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bf(a)
n=B.aH[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gcp(),$async$eq)
case 4:s=3
return A.a(l.jJ(null,k,new j.tM(d,n,m,a),t.m),$async$eq)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eq,r)},
er(a,b){return this.uq(a,b)},
uq(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$er=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bf(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gcp(),$async$er)
case 4:s=3
return A.a(n.jJ(null,m,new l.tN(d,a),t.y),$async$er)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$er,r)},
d4(a,b,c){return this.nf(a,b,c)},
nf(a,b,c){var s=0,r=A.h(t.m),q,p
var $async$d4=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.a(b.$0(),$async$d4)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d4,r)},
ux(a){},
cJ(a){var s=0,r=A.h(t.X),q,p=this
var $async$cJ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.f0({r:a,z:null,i:0,d:null,t:"custom"},B.c4,t.m),$async$cJ)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cJ,r)},
kx(a){return B.c.lQ(this.x,new A.tI(a))},
bf(a){var s=a.d
if(s!=null)return this.kx(s)
else throw A.b(A.O("Request requires database id",null))}}
A.tJ.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].p(),$async$$0)
case 5:case 3:p.length===o||(0,A.E)(p),++n
s=2
break
case 4:B.c.ai(p)
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.tO.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.bR(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.u9(h.d,A.Cm(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gcp():m.gbS(),$async$$0)
case 8:l=A.zu(m,null)
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
case 9:B.c.D(j.x,l)
s=11
return A.a(m.ej(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:155}
A.tR.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.w("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.dB(s,r,A.bx(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.n0(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.af(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.u1(l,k.s,q)
s=o.d
return A.AQ(s.sqlite3_get_autocommit(p)!==0,m,A.af(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:26}
A.tL.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gbS(),$async$$0)
case 3:q=b.a.o0().gct().aM(new A.tK(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:59}
A.tK.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.fv(s))},
$S:43}
A.tQ.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gbS(),$async$$0)
case 3:q=b.a.ra().gct().aM(new A.tP(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:59}
A.tP.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.fv(s))},
$S:43}
A.tT.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gbS(),$async$$0)
case 3:q=b.a.rz().gct().aM(new A.tS(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:158}
A.tS.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.fv(s))},
$S:159}
A.tM.prototype={
$0(){var s,r,q,p=this,o=p.a.d_(new A.hD(A.A4(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.eV(s.byteLength)
o.dQ(A.bx(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.eU()
r=new Uint8Array(q)
o.hT(r,0)
q={r:t.a.a(J.BO(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.hR()}},
$S:26}
A.tN.prototype={
$0(){return this.a.hQ(A.A4(B.aH[this.b.f]),0)===1},
$S:41}
A.tI.prototype={
$1(a){return a.b===this.a},
$S:160}
A.jj.prototype={
gcp(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gcp=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.fY(new A.nX(p),t.H):o,$async$gcp)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcp,r)},
gbS(){var s=0,r=A.h(t.u),q,p=this,o
var $async$gbS=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.fY(new A.nW(p),t.u):o,$async$gbS)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gbS,r)},
ej(){var s=0,r=A.h(t.H),q=this
var $async$ej=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.a(q.p(),$async$ej)
case 4:case 3:return A.e(null,r)}})
return A.f($async$ej,r)},
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
if(j!=null)j.tO()
n.a.p()
m=q.z
if(m!=null){j=p.a
l=$.y3()
A.yx(m)
k=l.a.get(m)
if(k==null)A.y(A.w("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.r?j:A.bg(j,t.H),$async$p)
case 6:q.f.m9()
return A.e(null,r)}})
return A.f($async$p,r)},
kY(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.D(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.aB(s,!0)
p=a.hC(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.D(0,new A.a7(n,A.o(n).i("a7<1>")).gC(0)).p()
n.j(0,p.d,p)
return new A.aB(p,!0)}return new A.aB(p,!1)},
u1(a,b,c){var s,r,q
if(c.gk(0)===0)return a.aX(b,B.v)
else{s=null
r=null
q=this.kY(a,b)
s=q.a
r=q.b
try{s.jh(new A.jg(c.gt2()))}finally{if(r)s.cU()
else s.p()}}},
n0(a,b,c){var s,r=null,q=null,p=this.kY(a,b)
r=p.a
q=p.b
try{s=A.D7(r,c)
return s}finally{if(q)r.cU()
else r.p()}}}
A.nX.prototype={
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
return A.a(A.qH("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.gds()
s=3
break
case 5:case 6:s=10
return A.a(A.jv("drift_db/"+l.c,k===B.aa,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.gds()
s=3
break
case 7:s=11
return A.a(A.jC(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.gds()
s=3
break
case 8:l.z=A.x_("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.nW.prototype={
$0(){var s=0,r=A.h(t.u),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.a(k,$async$$0)
case 3:o=b
s=4
return A.a(l.gcp(),$async$$0)
case 4:n=b
o.lU()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.eh(B.h.v(n.a),1),n,0)
if(m===0)A.y(A.w("could not register vfs"))
$.y3().j(0,n,m)
s=5
return A.a(l.f.js(new A.nV(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:40}
A.nV.prototype={
$0(){var s=this.a
return s.a.b.hA(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:40}
A.rT.prototype={
gkM(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.n8()
r.Q!==$&&A.wJ()
r.Q=s
q=s}return q},
dA(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$dA=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.bQ(A.bD(A.ES(n.a),"stream",t.K),t.I)
q=2
j=v.G
case 5:s=7
return A.a(h.l(),$async$dA)
case 7:if(!b){s=6
break}m=h.gn()
s=J.v(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.fK(i.port,i.lockName,null)
n.ke(l)
s=9
break
case 10:s=A.Gu(m.t)?11:12
break
case 11:s=13
return A.a(n.lB(m),$async$dA)
case 13:k=b
j.postMessage(k.gmg())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.a(h.A(),$async$dA)
case 14:s=o.pop()
break
case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dA,r)},
ke(a){var s=this,r=A.DO(a,s.d++,s)
s.c.push(r)
r.b.a.aJ(new A.rU(s,r))
return r},
lB(a){return this.x.jM(new A.rV(this,a),t.p6)},
bR(a){return this.uX(a)},
uX(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$bR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.aW(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.w("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.q(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bg(n,t.he),$async$bR)
case 5:s=3
break
case 4:o=A.wY(q.b.bR(m),new A.rW(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$bR)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$bR,r)},
u9(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.aI(s,s.r,s.e,A.o(s).i("aI<2>"));r.l();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.aa||b===B.aB
o=A.x6(t.cj)
n=c===0?null:new A.qc(c,A.h7(null,null,t.N,t.fw))
n=new A.jj(this,r,a,b,d,new A.ji(q+"-outer",q,new A.hg(o),p),n)
s.j(0,r,n)
return n}}
A.rU.prototype={
$0(){var s=this.a,r=s.c
B.c.D(r,this.b)
if(r.length===0)s.a.p()
return null},
$S:0}
A.rV.prototype={
$0(){var s=0,r=A.h(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.v(d.t,"dedicatedCompatibilityCheck")||J.v(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.a(A.dk(),$async$$0)
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
return A.a(A.me(),$async$$0)
case 9:case 8:j=a1
i=A.b0(t.cU)
s=J.v(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.gkM()
g=h!=null
s=g?13:14
break
case 13:d={d:c,i:0,t:"dedicatedInSharedCompatibilityCheck"}
f=A.fv(d)
n=h.a
n.postMessage(d,f)
b=A
a=A
s=15
return A.a(new A.f7(n,"message",!1,t.d4).gC(0),$async$$0)
case 15:e=b.C7(a.aW(a1.data))
k=e.c
l=e.d
i.J(0,e.a)
case 14:s=11
break
case 12:g=!1
case 11:s=k?16:17
break
case 16:b=J
s=18
return A.a(A.fx(),$async$$0)
case 18:d=b.K(a1)
case 19:if(!d.l()){s=20
break}i.t(0,new A.aB(B.aR,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.w2(c),$async$$0)
case 23:if(a1)i.t(0,new A.aB(B.aS,c))
case 22:d=A.P(i,i.$ti.c)
q=new A.dA(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:162}
A.rW.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:163}
A.iz.prototype={}
A.lj.prototype={
glT(){return new A.f7(this.a,"message",!1,t.d4)},
p(){return this.a.close()}}
A.lO.prototype={
glT(){return new A.cL(new A.v4(this),t.k8)},
p(){}}
A.v4.prototype={
$1(a){var s=A.l([],t.W),r=A.l([],t.dw)
r.push(A.b6(this.a.a,"connect",new A.v1(new A.v5(s,r,a)),!1,t.m))
a.r=new A.v2(r)},
$S:164}
A.v5.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.b6(a,"message",new A.v3(this.c),!1,t.m))},
$S:2}
A.v3.prototype={
$1(a){this.a.rS(a)},
$S:2}
A.v1.prototype={
$1(a){var s,r=a.ports
r=J.K(t.ip.b(r)?r:new A.br(r,A.a8(r).i("br<1,F>")))
s=this.a
while(r.l())s.$1(r.gn())},
$S:2}
A.v2.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.E)(s),++q)s[q].A()},
$S:3}
A.lk.prototype={
n8(){var s=v.G
if(!("Worker" in s))return null
return new A.u6(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.u6.prototype={}
A.kD.prototype={
gf1(){return A.H(this.c)}}
A.qZ.prototype={
gjr(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
hW(a){var s,r=this,q=r.d=J.BQ(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gG()
return s},
lO(a,b){var s
if(this.hW(a))return
if(b==null)if(a instanceof A.eu)b="/"+a.a+"/"
else{s=J.ao(a)
s=A.x(s,"\\","\\\\")
b='"'+A.x(s,'"','\\"')+'"'}this.kE(b)},
eo(a){return this.lO(a,null)},
u4(){if(this.c===this.b.length)return
this.kE("no more input")},
u0(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.y(A.aG("position must be greater than or equal to 0."))
else if(c>n.length)A.y(A.aG("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.y(A.aG("position plus length must not go beyond the end of the string."))
s=this.a
r=A.l([0],t.t)
q=n.length
p=new A.qJ(s,r,new Uint32Array(q))
p.nw(new A.bX(n),s)
o=c+b
if(o>q)A.y(A.aG("End "+o+u.D+p.gk(0)+"."))
else if(c<0)A.y(A.aG("Start may not be negative, was "+c+"."))
throw A.b(new A.kD(n,a,new A.f8(p,c,o)))},
kE(a){this.u0("expected "+a+".",0,this.c)}}
A.eU.prototype={
gk(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.yG(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.yG(b,this))
s=this.a
s.$flags&2&&A.C(s)
s[b]=c},
sk(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.C(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.ku(b)
B.d.ad(p,0,o.b,o.a)
o.a=p}}o.b=b},
t(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.rv(q)
q=r.a
s=r.b++
q.$flags&2&&A.C(q)
q[s]=b},
ku(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
rv(a){var s=this.ku(null)
B.d.ad(s,0,a,this.a)
this.a=s},
a9(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.ai(c,0,s,null,null))
s=this.a
if(d instanceof A.c5)B.d.a9(s,b,c,d.a,e)
else B.d.a9(s,b,c,d,e)},
ad(a,b,c,d){return this.a9(0,b,c,d,0)}}
A.lt.prototype={}
A.c5.prototype={}
A.wW.prototype={}
A.f7.prototype={
a4(a,b,c,d){return A.b6(this.a,this.b,a,!1,this.$ti.c)},
bu(a,b,c){return this.a4(a,null,b,c)}}
A.i2.prototype={
A(){var s=this,r=A.ct(null,t.H)
if(s.b==null)return r
s.iY()
s.d=s.b=null
return r},
hy(a){var s,r=this
if(r.b==null)throw A.b(A.w("Subscription has been canceled."))
r.iY()
s=A.At(new A.ua(a),t.m)
s=s==null?null:A.cn(s)
r.d=s
r.iW()},
bg(){if(this.b==null)return;++this.a
this.iY()},
ba(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.iW()},
iW(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
iY(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibe:1}
A.u9.prototype={
$1(a){return this.a.$1(a)},
$S:2}
A.ua.prototype={
$1(a){return this.a.$1(a)},
$S:2};(function aliases(){var s=J.cY.prototype
s.nl=s.m
s=A.bu.prototype
s.nh=s.lV
s.ni=s.lW
s.nk=s.lY
s.nj=s.lX
s=A.aH.prototype
s.hY=s.ap
s.ka=s.aw
s.kb=s.aG
s=A.cJ.prototype
s.no=s.ks
s.np=s.kH
s.nq=s.lc
s=A.B.prototype
s.k9=s.a9
s=A.aq.prototype
s.k8=s.t1
s=A.io.prototype
s.nr=s.p
s=A.j1.prototype
s.k7=s.hf
s=A.bW.prototype
s.ng=s.ha
s=A.eM.prototype
s.nn=s.T
s.nm=s.W})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"F_","Cz",48)
r(A,"Fc","CX",12)
q(A,"FD","DA",15)
q(A,"FE","DB",15)
q(A,"FF","DC",15)
q(A,"FG","Fe",22)
r(A,"Av","Fw",0)
q(A,"FH","Ff",25)
s(A,"FI","Fh",10)
r(A,"w1","Fg",0)
p(A,"FN",5,null,["$5"],["Fq"],166,0)
p(A,"FS",4,null,["$1$4","$4"],["vV",function(a,b,c,d){return A.vV(a,b,c,d,t.z)}],167,0)
p(A,"FU",5,null,["$2$5","$5"],["vW",function(a,b,c,d,e){var i=t.z
return A.vW(a,b,c,d,e,i,i)}],168,0)
p(A,"FT",6,null,["$3$6"],["xN"],169,0)
p(A,"FQ",4,null,["$1$4","$4"],["Aj",function(a,b,c,d){return A.Aj(a,b,c,d,t.z)}],170,0)
p(A,"FR",4,null,["$2$4","$4"],["Ak",function(a,b,c,d){var i=t.z
return A.Ak(a,b,c,d,i,i)}],171,0)
p(A,"FP",4,null,["$3$4","$4"],["Ai",function(a,b,c,d){var i=t.z
return A.Ai(a,b,c,d,i,i,i)}],172,0)
p(A,"FL",5,null,["$5"],["Fp"],173,0)
p(A,"FV",4,null,["$4"],["vX"],174,0)
p(A,"FK",5,null,["$5"],["Fo"],175,0)
p(A,"FJ",5,null,["$5"],["Fn"],176,0)
p(A,"FO",4,null,["$4"],["Fr"],177,0)
p(A,"FM",5,null,["$5"],["Ah"],178,0)
var j
o(j=A.e4.prototype,"ge0","bp",0)
o(j,"ge1","bq",0)
n(A.e5.prototype,"gtb",0,1,null,["$2","$1"],["bK","aA"],58,0,0)
m(A.r.prototype,"gi6","o1",10)
n(j=A.dg.prototype,"grP",0,1,null,["$2","$1"],["bs","rQ"],58,0,0)
l(j,"gnK","ap",16)
m(j,"gnI","aw",10)
o(j,"gnY","aG",0)
o(j=A.db.prototype,"ge0","bp",0)
o(j,"ge1","bq",0)
o(j=A.aH.prototype,"ge0","bp",0)
o(j,"ge1","bq",0)
o(A.f6.prototype,"gkV","qB",0)
l(j=A.bQ.prototype,"gqt","qu",16)
m(j,"gqx","qy",10)
o(j,"gqv","qw",0)
o(j=A.f9.prototype,"ge0","bp",0)
o(j,"ge1","bq",0)
l(j,"gim","io",16)
m(j,"gir","is",96)
o(j,"gip","iq",0)
o(j=A.ff.prototype,"ge0","bp",0)
o(j,"ge1","bq",0)
l(j,"gim","io",16)
m(j,"gir","is",10)
o(j,"gip","iq",0)
s(A,"xQ","EM",29)
q(A,"xR","EN",30)
s(A,"FZ","CE",48)
q(A,"G2","EP",34)
k(j=A.ld.prototype,"grO","t",16)
o(j,"gds","p",0)
q(A,"AC","Gm",30)
s(A,"AB","Gl",29)
q(A,"G3","Dr",8)
p(A,"GA",2,null,["$1$2","$2"],["AO",function(a,b){return A.AO(a,b,t.o)}],179,0)
m(j=A.jm.prototype,"gu_","ae",29)
l(j,"guF","am",30)
l(j,"guO","uP",22)
q(A,"FX","C_",8)
q(A,"G6","Cf",8)
r(A,"Gw","EO",12)
l(A.ka.prototype,"gvq","vr",7)
o(A.ho.prototype,"gtN","ha",0)
o(j=A.bW.prototype,"gH","aD",0)
o(j,"guJ","hr","A<bW.T>()")
l(j,"gqr","qs",35)
o(j,"glo","ec",4)
q(A,"Gc","yz",180)
o(j=A.kd.prototype,"gqz","qA",0)
l(j,"gqC","qD",68)
q(A,"G0","wU",181)
l(j=A.kF.prototype,"guu","uv",35)
l(j,"gus","ut",78)
o(j,"gqq","iI",0)
q(A,"GR","Dj",182)
q(A,"AA","bF",23)
q(A,"Az","mg",23)
q(A,"GV","Dv",183)
m(j=A.kX.prototype,"goD","ik",1)
m(j,"goy","cC",1)
m(j=A.kV.prototype,"goL","fi",1)
m(j,"goJ","fh",1)
m(j,"goN","fj",1)
m(j,"goF","ff",1)
m(j,"goH","fg",1)
m(j,"goP","il",1)
m(j=A.kW.prototype,"gpe","fq",1)
m(j,"gpj","dZ",1)
m(j,"gpl","fs",1)
m(j=A.kZ.prototype,"gp7","iu",1)
m(j,"gp9","iv",1)
m(j,"gpb","fo",1)
m(j,"gp5","it",1)
m(j,"goW","fm",1)
m(j,"goY","dc",1)
m(j,"gp_","fn",1)
m(j,"goU","fl",1)
m(j,"goS","fk",1)
m(j=A.l_.prototype,"gpg","iw",1)
m(j,"gow","ij",1)
m(j,"gou","fd",1)
m(j,"gq1","fJ",1)
m(j,"gq_","fI",1)
m(j,"gpp","ft",1)
m(j,"goA","fe",1)
m(j,"gps","fu",1)
m(j=A.l0.prototype,"gpC","dd",1)
m(j,"gpG","fB",1)
m(j,"gpu","fv",1)
m(j,"gpw","fw",1)
m(j,"gpy","fz",1)
m(j,"gpA","fA",1)
m(j,"gpI","fC",1)
m(j,"gpE","iy",1)
m(j=A.l1.prototype,"gpK","fD",1)
m(j,"gpO","fE",1)
m(j,"gpQ","fF",1)
m(j,"gpY","fH",1)
m(j,"gpW","e_",1)
m(j,"gpS","fG",1)
m(j,"gpM","iz",1)
m(j,"gpU","iA",1)
m(j=A.l2.prototype,"gq7","fM",1)
m(j,"gq5","fL",1)
m(j,"gq3","fK",1)
l(j=A.jh.prototype,"gv_","v0",7)
m(j,"guY","uZ",117)
n(j,"gwq",0,5,null,["$5"],["wr"],118,0,0)
n(j,"gwf",0,3,null,["$3"],["wg"],119,0,0)
n(j,"gw7",0,4,null,["$4"],["w8"],49,0,0)
n(j,"gwm",0,4,null,["$4"],["wn"],49,0,0)
n(j,"gws",0,3,null,["$3"],["wt"],121,0,0)
m(j,"gwx","wy",50)
m(j,"gwd","we",50)
l(j,"gwb","wc",28)
n(j,"gwu",0,4,null,["$4"],["wv"],51,0,0)
n(j,"gwF",0,4,null,["$4"],["wG"],51,0,0)
m(j,"gwB","wC",125)
m(j,"gwz","wA",13)
m(j,"gwk","wl",13)
m(j,"gwo","wp",13)
m(j,"gwD","wE",13)
m(j,"gw9","wa",13)
l(j,"ghS","wh",28)
n(j,"gwi",0,3,null,["$3"],["wj"],127,0,0)
l(j,"ghU","ww",28)
l(j,"gtz","tA",15)
l(j,"gtu","tv",128)
n(j,"gtx",0,5,null,["$5"],["ty"],129,0,0)
n(j,"gtF",0,4,null,["$4"],["tG"],27,0,0)
n(j,"gtJ",0,4,null,["$4"],["tK"],27,0,0)
n(j,"gtH",0,4,null,["$4"],["tI"],27,0,0)
m(j,"gtL","tM",54)
m(j,"gtD","tE",54)
n(j,"gtB",0,5,null,["$5"],["tC"],132,0,0)
m(j,"gts","tt",133)
m(j,"gtq","tr",134)
n(j,"gtn",0,3,null,["$3"],["tp"],135,0,0)
o(j=A.cV.prototype,"gds","p",4)
o(j,"guc","ud",4)
o(A.eK.prototype,"gds","p",0)
o(A.ji.prototype,"gpn","po",0)
l(A.dB.prototype,"gt2","lz",153)
l(A.hX.prototype,"guw","ux",2)
q(A,"Ay","AI",122)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.x4,J.jE,A.hA,J.en,A.tZ,A.tF,A.n,A.j9,A.dy,A.a4,A.B,A.qF,A.a5,A.jV,A.d9,A.js,A.kG,A.kq,A.jp,A.kU,A.fU,A.kL,A.kE,A.fd,A.fL,A.fa,A.c_,A.rh,A.k6,A.fQ,A.ik,A.T,A.p4,A.cd,A.aI,A.jO,A.eu,A.fc,A.l6,A.eP,A.vc,A.le,A.lY,A.bZ,A.lp,A.vh,A.ip,A.hQ,A.l8,A.i7,A.lU,A.a9,A.a_,A.aH,A.hV,A.kH,A.i5,A.e5,A.bO,A.r,A.l7,A.dg,A.lV,A.hS,A.l4,A.ll,A.u7,A.df,A.f6,A.bQ,A.i1,A.vD,A.vF,A.vE,A.vB,A.vC,A.vA,A.vx,A.m8,A.vw,A.vv,A.vz,A.vy,A.m7,A.m9,A.m6,A.fo,A.hP,A.lq,A.uP,A.de,A.lw,A.aT,A.lz,A.lX,A.hd,A.lx,A.kC,A.jb,A.aq,A.la,A.mG,A.l9,A.ja,A.lP,A.e6,A.uM,A.vd,A.lZ,A.cM,A.ay,A.lo,A.b8,A.ax,A.u8,A.k7,A.hF,A.ln,A.bk,A.jD,A.U,A.R,A.lT,A.ky,A.ae,A.iw,A.rn,A.bP,A.jt,A.k5,A.uF,A.uG,A.jq,A.W,A.jn,A.h2,A.dL,A.fk,A.fb,A.hb,A.jm,A.k4,A.kM,A.bY,A.ep,A.ov,A.dx,A.j0,A.j1,A.mC,A.jZ,A.ew,A.kx,A.aK,A.a2,A.mO,A.mP,A.mQ,A.ms,A.te,A.jo,A.n0,A.jl,A.h9,A.kz,A.qa,A.ly,A.ka,A.qz,A.aZ,A.cU,A.fW,A.bK,A.nc,A.bH,A.lf,A.bM,A.bW,A.ta,A.mE,A.kA,A.fS,A.oc,A.b_,A.p8,A.kI,A.mA,A.kd,A.pS,A.hr,A.fg,A.q_,A.v6,A.dG,A.cS,A.jy,A.cc,A.cT,A.d5,A.pQ,A.bi,A.ne,A.kF,A.hc,A.dQ,A.ps,A.ex,A.jW,A.uV,A.pE,A.mD,A.ha,A.hy,A.pJ,A.kg,A.qn,A.aF,A.qs,A.b3,A.eR,A.eQ,A.r0,A.b2,A.eO,A.cg,A.eG,A.hx,A.c9,A.r2,A.hw,A.hI,A.re,A.cE,A.cz,A.dR,A.nF,A.e_,A.lg,A.kN,A.rm,A.f_,A.kT,A.rF,A.fN,A.hv,A.kk,A.S,A.f0,A.kX,A.kV,A.kW,A.kZ,A.l_,A.vu,A.l0,A.vg,A.l1,A.f1,A.l2,A.nl,A.r_,A.k8,A.k9,A.qJ,A.kt,A.eM,A.ow,A.b7,A.c6,A.c0,A.kw,A.c1,A.d3,A.nH,A.dh,A.qL,A.dz,A.aL,A.j4,A.np,A.lJ,A.uW,A.dH,A.jg,A.cI,A.hD,A.rA,A.rv,A.rC,A.rB,A.dZ,A.d8,A.jh,A.e7,A.rw,A.mw,A.i6,A.ub,A.lA,A.ls,A.uS,A.rq,A.fK,A.qE,A.fG,A.jf,A.ju,A.ou,A.cu,A.ji,A.hg,A.dA,A.qc,A.eH,A.im,A.f3,A.jj,A.rT,A.iz,A.lk,A.u6,A.qZ,A.wW,A.i2])
q(J.jE,[J.jG,J.h4,J.as,J.b9,J.ev,J.dI,J.cW])
q(J.as,[J.cY,J.z,A.eA,A.hi])
q(J.cY,[J.kb,J.d7,J.bs])
r(J.jF,A.hA)
r(J.p1,J.z)
q(J.dI,[J.h3,J.jH])
q(A.n,[A.da,A.D,A.cx,A.bf,A.fR,A.dX,A.cB,A.by,A.ea,A.l5,A.lS,A.fi,A.dK])
q(A.da,[A.dw,A.iA])
r(A.i_,A.dw)
r(A.hW,A.iA)
q(A.dy,[A.mS,A.mR,A.oW,A.rf,A.ws,A.wu,A.tm,A.tl,A.vI,A.vH,A.os,A.on,A.uf,A.ue,A.uq,A.ut,A.qV,A.qW,A.qT,A.u5,A.u4,A.v_,A.uw,A.u1,A.uO,A.pm,A.uK,A.no,A.tA,A.oo,A.ww,A.wC,A.wD,A.w8,A.mJ,A.mL,A.mN,A.j3,A.mF,A.vK,A.mH,A.pq,A.wj,A.w_,A.qM,A.qN,A.wi,A.o6,A.o5,A.o7,A.o4,A.o3,A.o2,A.o_,A.o0,A.o1,A.ph,A.pk,A.pj,A.pi,A.pw,A.pu,A.pv,A.mZ,A.mX,A.mW,A.n_,A.mY,A.mV,A.tb,A.wB,A.of,A.od,A.og,A.oh,A.p9,A.pa,A.pc,A.pe,A.rE,A.pZ,A.pV,A.pW,A.pX,A.pY,A.pT,A.pU,A.q4,A.q5,A.q0,A.q1,A.q2,A.q3,A.q7,A.ng,A.nf,A.rb,A.r3,A.r9,A.r4,A.r5,A.r6,A.w4,A.w5,A.pG,A.pH,A.pP,A.pN,A.pM,A.pL,A.pO,A.qr,A.qo,A.qp,A.qq,A.qx,A.r1,A.wl,A.wE,A.wF,A.n1,A.wz,A.wq,A.wp,A.wc,A.rR,A.rL,A.rM,A.rN,A.rY,A.rZ,A.t_,A.t6,A.t0,A.nm,A.nn,A.vY,A.oy,A.ox,A.oz,A.oB,A.oD,A.oA,A.oR,A.qO,A.nP,A.v9,A.wA,A.wG,A.wH,A.mv,A.u_,A.u0,A.n4,A.n5,A.n9,A.na,A.nb,A.oi,A.mz,A.mx,A.uz,A.uC,A.uD,A.oV,A.oT,A.uy,A.qI,A.rr,A.rs,A.rt,A.ru,A.ql,A.qm,A.qk,A.qj,A.qi,A.rG,A.nS,A.pA,A.o9,A.w3,A.n2,A.n3,A.n6,A.n7,A.n8,A.vP,A.tK,A.tP,A.tS,A.tI,A.v4,A.v5,A.v3,A.v1,A.u9,A.ua])
q(A.mS,[A.tG,A.nk,A.p2,A.wt,A.vJ,A.vZ,A.ot,A.om,A.ug,A.ur,A.uu,A.td,A.uv,A.p5,A.po,A.uN,A.tz,A.vo,A.ro,A.vn,A.vm,A.oq,A.op,A.mI,A.mK,A.mM,A.j2,A.pz,A.pr,A.w0,A.px,A.q9,A.pR,A.pf,A.wg,A.wa,A.rI,A.wd,A.rP,A.rQ,A.oC,A.uE,A.rH,A.tW,A.rW])
r(A.br,A.hW)
q(A.a4,[A.cX,A.kh,A.cG,A.jI,A.kK,A.kn,A.lm,A.hq,A.h6,A.iW,A.bq,A.ck,A.kJ,A.bl,A.jd])
q(A.B,[A.eV,A.eZ,A.dB,A.eU])
r(A.bX,A.eV)
q(A.mR,[A.wy,A.qe,A.tn,A.to,A.vf,A.ve,A.vG,A.tq,A.tr,A.tt,A.tu,A.ts,A.tp,A.or,A.uh,A.um,A.ul,A.uj,A.ui,A.up,A.uo,A.un,A.us,A.qU,A.qX,A.qS,A.v8,A.v7,A.tc,A.tE,A.tD,A.uT,A.uR,A.vL,A.vM,A.u3,A.u2,A.uZ,A.uY,A.vU,A.vr,A.vq,A.nY,A.vS,A.vT,A.pp,A.pl,A.pg,A.oa,A.oS,A.ol,A.qR,A.mT,A.mU,A.pD,A.oe,A.ob,A.pb,A.pd,A.q8,A.q6,A.nd,A.nj,A.ni,A.nh,A.r8,A.r7,A.ra,A.qt,A.qy,A.qw,A.qv,A.qu,A.rd,A.pK,A.pF,A.rK,A.rS,A.rX,A.t7,A.t9,A.t8,A.t1,A.t5,A.t4,A.t3,A.t2,A.oQ,A.oE,A.oL,A.oM,A.oN,A.oO,A.oJ,A.oK,A.oF,A.oG,A.oH,A.oI,A.oP,A.ux,A.nQ,A.nR,A.nN,A.nM,A.nO,A.nJ,A.nI,A.nK,A.nL,A.va,A.vb,A.wI,A.nu,A.nr,A.nw,A.ny,A.nA,A.nt,A.nz,A.nE,A.nC,A.nB,A.nv,A.nx,A.nD,A.ns,A.mt,A.mu,A.rx,A.my,A.uA,A.uB,A.uc,A.oU,A.nT,A.nU,A.pC,A.pB,A.tU,A.tY,A.tV,A.tX,A.tJ,A.tO,A.tR,A.tL,A.tQ,A.tT,A.tM,A.tN,A.nX,A.nW,A.nV,A.rU,A.rV,A.v2])
q(A.D,[A.Q,A.dE,A.a7,A.aS,A.aR,A.e9,A.i9])
q(A.Q,[A.c2,A.ac,A.dS,A.h8,A.lv])
r(A.dD,A.cx)
r(A.fP,A.dX)
r(A.er,A.cB)
q(A.fd,[A.lB,A.lC,A.lD])
q(A.lB,[A.aB,A.ig,A.ih,A.fe,A.lE])
r(A.ii,A.lC)
r(A.lF,A.lD)
r(A.aP,A.fL)
q(A.c_,[A.fM,A.ij])
r(A.cs,A.fM)
r(A.h0,A.oW)
r(A.hn,A.cG)
q(A.rf,[A.qP,A.fD])
q(A.T,[A.bu,A.cJ,A.lu])
q(A.bu,[A.h5,A.i8])
r(A.ez,A.eA)
q(A.hi,[A.hh,A.eB])
q(A.eB,[A.ib,A.id])
r(A.ic,A.ib)
r(A.d0,A.ic)
r(A.ie,A.id)
r(A.bw,A.ie)
q(A.d0,[A.k_,A.k0])
q(A.bw,[A.k1,A.k2,A.k3,A.hj,A.hk,A.hl,A.dP])
r(A.iq,A.lm)
q(A.a_,[A.fh,A.hG,A.i0,A.cL,A.i3,A.hU,A.fC,A.f7])
r(A.b5,A.fh)
r(A.aV,A.b5)
q(A.aH,[A.db,A.f9,A.ff])
r(A.e4,A.db)
r(A.hR,A.hV)
q(A.e5,[A.aM,A.aa])
q(A.dg,[A.cl,A.fj])
r(A.il,A.l4)
q(A.ll,[A.bN,A.f5])
r(A.ia,A.cl)
r(A.eb,A.i3)
q(A.m6,[A.lh,A.lI])
q(A.cJ,[A.dc,A.hY])
r(A.cK,A.ij)
r(A.iv,A.hd)
r(A.eW,A.iv)
q(A.kC,[A.io,A.vi,A.tv,A.lR])
r(A.uI,A.io)
q(A.jb,[A.dF,A.mB,A.p3])
q(A.dF,[A.iU,A.jM,A.kR])
q(A.aq,[A.lW,A.j_,A.iZ,A.jL,A.jK,A.kS,A.hK,A.jx])
q(A.lW,[A.iV,A.jN])
r(A.tB,A.la)
q(A.mG,[A.tw,A.f2,A.ld,A.vp])
r(A.tj,A.tw)
r(A.jJ,A.h6)
r(A.uJ,A.ja)
r(A.uL,A.uM)
r(A.ma,A.lZ)
r(A.vs,A.ma)
q(A.bq,[A.cA,A.fZ])
r(A.li,A.iw)
r(A.eJ,A.fk)
r(A.lL,A.jx)
r(A.v0,A.ov)
r(A.lM,A.v0)
r(A.kl,A.dx)
r(A.j7,A.j0)
r(A.cP,A.hG)
q(A.j1,[A.py,A.qD])
r(A.hH,A.mC)
r(A.kB,A.hH)
r(A.fE,A.W)
q(A.u8,[A.kc,A.fF,A.cQ,A.cv,A.je,A.o8,A.bI,A.h_,A.dO,A.dt,A.bL,A.iY,A.ci,A.fA,A.eC,A.hp,A.hE,A.pI,A.et,A.jX,A.cR,A.c4,A.fT,A.d4])
q(A.h9,[A.hL,A.hJ,A.hm,A.fH,A.hs,A.fV,A.cD,A.hz,A.hB,A.eI,A.fJ,A.fO,A.qC])
r(A.fX,A.eI)
r(A.jS,A.ly)
r(A.eo,A.lf)
q(A.bW,[A.ho,A.jc])
r(A.rD,A.mE)
r(A.tk,A.uV)
q(A.b2,[A.eT,A.dT,A.hC,A.bG,A.cb,A.cf,A.eE,A.eF,A.eq,A.du])
r(A.p7,A.nF)
r(A.jT,A.e_)
q(A.f0,[A.hO,A.e0])
r(A.m_,A.kX)
r(A.m0,A.m_)
r(A.m1,A.m0)
r(A.m2,A.m1)
r(A.m3,A.m2)
r(A.m4,A.m3)
r(A.m5,A.m4)
r(A.rO,A.m5)
r(A.p_,A.r_)
q(A.p_,[A.qb,A.rp,A.rJ])
r(A.jw,A.kt)
q(A.eM,[A.f8,A.kv])
r(A.eL,A.kw)
r(A.cC,A.kv)
r(A.eN,A.dz)
r(A.j5,A.aL)
q(A.j5,[A.jA,A.cV,A.eK])
q(A.j4,[A.lr,A.lQ])
r(A.lG,A.np)
r(A.lH,A.lG)
r(A.km,A.lH)
r(A.lK,A.lJ)
r(A.bJ,A.lK)
q(A.aT,[A.e3,A.aN])
r(A.eY,A.qL)
q(A.aN,[A.i4,A.hZ,A.f4,A.fn])
r(A.qh,A.qE)
r(A.nq,A.jf)
r(A.cO,A.eH)
r(A.hX,A.qh)
q(A.iz,[A.lj,A.lO])
r(A.kD,A.eL)
r(A.lt,A.eU)
r(A.c5,A.lt)
s(A.eV,A.kL)
s(A.iA,A.B)
s(A.ib,A.B)
s(A.ic,A.fU)
s(A.id,A.B)
s(A.ie,A.fU)
s(A.cl,A.hS)
s(A.fj,A.lV)
s(A.iv,A.lX)
s(A.ma,A.kC)
s(A.ly,A.mP)
s(A.lf,A.mQ)
s(A.m_,A.kW)
s(A.m0,A.l_)
s(A.m1,A.l1)
s(A.m2,A.l2)
s(A.m3,A.l0)
s(A.m4,A.kZ)
s(A.m5,A.kV)
s(A.lG,A.B)
s(A.lH,A.k4)
s(A.lJ,A.kM)
s(A.lK,A.T)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",a0:"double",cq:"num",k:"String",V:"bool",R:"Null",p:"List",j:"Object",L:"Map",F:"JSObject"},mangledNames:{},types:["~()","A<j?>(kY,f_)","~(F)","R()","A<~>()","A<R>(bM)","A<~>(bM)","~(i)","k(k)","R(j,au)","~(j,au)","V(k)","i()","i(b4,i)","R(F)","~(~())","~(j?)","A<aF>()","~(@,@)","A<~>(i6)","~(p<i>)","R(@)","V(j?)","j?(j?)","A<~>(~)","~(@)","F()","~(kj,i,i,i)","i(b4)","V(j?,j?)","i(j?)","~(k,k)","V(b7)","j?(L<k,j?>)","@(@)","~(a2)","R(j)","0&()","i(cc)","V(b_)","A<e_>()","V()","k(L<k,j?>)","~(~)","V(aZ)","V(cU)","A<p<L<k,j?>>>(k,p<j?>)","k(dN)","i(@,@)","i(aL,i,i,i)","i(aL,i)","i(b4,i,i,b9)","U<k,j?>(@,@)","~(k,@)","~(kj,i)","@()","@(k)","~(j?,j?)","~(j[au?])","A<be<~>>()","A<cc>(k)","V(@)","~(p<bY>)","A<a_<p<i>>>()","k?(L<k,j?>)","b_()","A<b_>(bM)","i(k)","~(hr)","U<k,cS>(k,eO)","cg(@)","R(k,k[j?])","~(d_<p<i>>)","A<d5>(k)","i(d5)","e6<@,@>(bj<@>)","R(~)","bi()","~(c9)","~(cF)","A<b3>(b3)","b3(b3)","b3(j)","i(i,i)","A<i>(bM)","ew()","k(i[i])","cE()","cz()","dR()","i(i)","V(+(k,j))","bH<j?>(@)","V(bH<@>)","i(+(k,j),+(k,j))","r<@>?()","~(@,au)","~(aK)","~(p<bi>)","a_<p<i>>()","~(eR)","~(p<L<k,j?>>)","~(L<k,j?>?)","A<L<k,j?>?>()","k(k?)","k?()","i(c6)","L<k,j?>(bJ)","j(c6)","j(b7)","i(b7,b7)","p<c6>(U<j,p<b7>>)","cC()","k(j?)","~(i,k,i)","0&(k,i?)","~(N,aj,N,~())","~(b9,i)","b4?(aL,i,i,i,i)","i(aL,i,i)","~(k,k?)","i(aL?,i,i)","L<k,j?>(bi)","R(~())","V(bK)","i(b4,b9)","i(bK,bK)","i(b4,i,i)","i(i())","~(~(i,k,i),i,i,i,b9)","A<R>(nG)","aZ()","i(kj,i,i,i,i)","i(i(i),i)","i(xj,i)","i(xj,i,i)","cU()","fW()","F(z<j?>)","bK()","A<R>()","j?(~)","F(F?)","~(dv)","A<~>(i,cj)","A<~>(i)","cj()","A<F>(k)","R(cu)","A<R>(F)","F(j)","R(j?,au)","k?(j?)","~(dz)","F(F)","A<F>()","@(@,k)","R(@,au)","A<be<c1>>()","~(c1)","V(f3)","~(i,@)","A<dA>()","0&(j?,au)","~(d_<F>)","V(k,k)","~(N?,aj?,N,j,au)","0^(N?,aj?,N,0^())<j?>","0^(N?,aj?,N,0^(1^),1^)<j?,j?>","0^(N?,aj?,N,0^(1^,2^),1^,2^)<j?,j?,j?>","0^()(N,aj,N,0^())<j?>","0^(1^)(N,aj,N,0^(1^))<j?,j?>","0^(1^,2^)(N,aj,N,0^(1^,2^))<j?,j?,j?>","a9?(N,aj,N,j,au?)","~(N?,aj?,N,~())","cF(N,aj,N,ax,~())","cF(N,aj,N,ax,~(cF))","~(N,aj,N,k)","N(N?,aj?,N,hP?,L<j?,j?>?)","0^(0^,0^)<cq>","b_(L<k,j?>)","bi(L<k,j?>)","a0(i)","L<k,j?>(b_)","R(bs,bs)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aB&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.ig&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.ih&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.fe&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.lE&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ii&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.lF&&A.GC(a,b.a)}}
A.Ei(v.typeUniverse,JSON.parse('{"bs":"cY","kb":"cY","d7":"cY","Hb":"eA","z":{"p":["1"],"as":[],"D":["1"],"F":[],"n":["1"],"aQ":["1"]},"jG":{"V":[],"a6":[]},"h4":{"R":[],"a6":[]},"as":{"F":[]},"cY":{"as":[],"F":[]},"jF":{"hA":[]},"p1":{"z":["1"],"p":["1"],"as":[],"D":["1"],"F":[],"n":["1"],"aQ":["1"]},"dI":{"a0":[],"al":["cq"]},"h3":{"a0":[],"i":[],"al":["cq"],"a6":[]},"jH":{"a0":[],"al":["cq"],"a6":[]},"cW":{"k":[],"al":["k"],"aQ":["@"],"a6":[]},"da":{"n":["2"]},"dw":{"da":["1","2"],"n":["2"],"n.E":"2"},"i_":{"dw":["1","2"],"da":["1","2"],"D":["2"],"n":["2"],"n.E":"2"},"hW":{"B":["2"],"p":["2"],"da":["1","2"],"D":["2"],"n":["2"]},"br":{"hW":["1","2"],"B":["2"],"p":["2"],"da":["1","2"],"D":["2"],"n":["2"],"B.E":"2","n.E":"2"},"cX":{"a4":[]},"kh":{"a4":[]},"bX":{"B":["i"],"p":["i"],"D":["i"],"n":["i"],"B.E":"i"},"D":{"n":["1"]},"Q":{"D":["1"],"n":["1"]},"c2":{"Q":["1"],"D":["1"],"n":["1"],"Q.E":"1","n.E":"1"},"cx":{"n":["2"],"n.E":"2"},"dD":{"cx":["1","2"],"D":["2"],"n":["2"],"n.E":"2"},"ac":{"Q":["2"],"D":["2"],"n":["2"],"Q.E":"2","n.E":"2"},"bf":{"n":["1"],"n.E":"1"},"fR":{"n":["2"],"n.E":"2"},"dX":{"n":["1"],"n.E":"1"},"fP":{"dX":["1"],"D":["1"],"n":["1"],"n.E":"1"},"cB":{"n":["1"],"n.E":"1"},"er":{"cB":["1"],"D":["1"],"n":["1"],"n.E":"1"},"dE":{"D":["1"],"n":["1"],"n.E":"1"},"by":{"n":["1"],"n.E":"1"},"eV":{"B":["1"],"p":["1"],"D":["1"],"n":["1"]},"dS":{"Q":["1"],"D":["1"],"n":["1"],"Q.E":"1","n.E":"1"},"fL":{"L":["1","2"]},"aP":{"fL":["1","2"],"L":["1","2"]},"ea":{"n":["1"],"n.E":"1"},"fM":{"c_":["1"],"dU":["1"],"D":["1"],"n":["1"]},"cs":{"c_":["1"],"dU":["1"],"D":["1"],"n":["1"]},"hn":{"cG":[],"a4":[]},"jI":{"a4":[]},"kK":{"a4":[]},"k6":{"I":[]},"ik":{"au":[]},"kn":{"a4":[]},"bu":{"T":["1","2"],"L":["1","2"],"T.V":"2","T.K":"1"},"a7":{"D":["1"],"n":["1"],"n.E":"1"},"aS":{"D":["1"],"n":["1"],"n.E":"1"},"aR":{"D":["U<1,2>"],"n":["U<1,2>"],"n.E":"U<1,2>"},"h5":{"bu":["1","2"],"T":["1","2"],"L":["1","2"],"T.V":"2","T.K":"1"},"fc":{"ki":[],"dN":[]},"l5":{"n":["ki"],"n.E":"ki"},"eP":{"dN":[]},"lS":{"n":["dN"],"n.E":"dN"},"ez":{"as":[],"F":[],"dv":[],"a6":[]},"eA":{"as":[],"F":[],"dv":[],"a6":[]},"hi":{"as":[],"F":[]},"lY":{"dv":[]},"hh":{"as":[],"wS":[],"F":[],"a6":[]},"eB":{"bt":["1"],"as":[],"F":[],"aQ":["1"]},"d0":{"B":["a0"],"p":["a0"],"bt":["a0"],"as":[],"D":["a0"],"F":[],"aQ":["a0"],"n":["a0"]},"bw":{"B":["i"],"p":["i"],"bt":["i"],"as":[],"D":["i"],"F":[],"aQ":["i"],"n":["i"]},"k_":{"d0":[],"oj":[],"B":["a0"],"p":["a0"],"bt":["a0"],"as":[],"D":["a0"],"F":[],"aQ":["a0"],"n":["a0"],"a6":[],"B.E":"a0"},"k0":{"d0":[],"ok":[],"B":["a0"],"p":["a0"],"bt":["a0"],"as":[],"D":["a0"],"F":[],"aQ":["a0"],"n":["a0"],"a6":[],"B.E":"a0"},"k1":{"bw":[],"oX":[],"B":["i"],"p":["i"],"bt":["i"],"as":[],"D":["i"],"F":[],"aQ":["i"],"n":["i"],"a6":[],"B.E":"i"},"k2":{"bw":[],"oY":[],"B":["i"],"p":["i"],"bt":["i"],"as":[],"D":["i"],"F":[],"aQ":["i"],"n":["i"],"a6":[],"B.E":"i"},"k3":{"bw":[],"oZ":[],"B":["i"],"p":["i"],"bt":["i"],"as":[],"D":["i"],"F":[],"aQ":["i"],"n":["i"],"a6":[],"B.E":"i"},"hj":{"bw":[],"rj":[],"B":["i"],"p":["i"],"bt":["i"],"as":[],"D":["i"],"F":[],"aQ":["i"],"n":["i"],"a6":[],"B.E":"i"},"hk":{"bw":[],"rk":[],"B":["i"],"p":["i"],"bt":["i"],"as":[],"D":["i"],"F":[],"aQ":["i"],"n":["i"],"a6":[],"B.E":"i"},"hl":{"bw":[],"rl":[],"B":["i"],"p":["i"],"bt":["i"],"as":[],"D":["i"],"F":[],"aQ":["i"],"n":["i"],"a6":[],"B.E":"i"},"dP":{"bw":[],"cj":[],"B":["i"],"p":["i"],"bt":["i"],"as":[],"D":["i"],"F":[],"aQ":["i"],"n":["i"],"a6":[],"B.E":"i"},"lm":{"a4":[]},"iq":{"cG":[],"a4":[]},"a9":{"a4":[]},"r":{"A":["1"]},"d_":{"bj":["1"]},"ip":{"cF":[]},"hQ":{"fI":["1"]},"fi":{"n":["1"],"n.E":"1"},"aV":{"b5":["1"],"fh":["1"],"a_":["1"],"a_.T":"1"},"e4":{"db":["1"],"aH":["1"],"be":["1"],"aH.T":"1"},"hV":{"bj":["1"]},"hR":{"hV":["1"],"bj":["1"]},"kH":{"I":[]},"hq":{"a4":[]},"e5":{"fI":["1"]},"aM":{"e5":["1"],"fI":["1"]},"aa":{"e5":["1"],"fI":["1"]},"hG":{"a_":["1"]},"dg":{"bj":["1"]},"cl":{"hS":["1"],"dg":["1"],"bj":["1"]},"fj":{"dg":["1"],"bj":["1"]},"b5":{"fh":["1"],"a_":["1"],"a_.T":"1"},"db":{"aH":["1"],"be":["1"],"aH.T":"1"},"il":{"l4":["1"]},"aH":{"be":["1"],"aH.T":"1"},"fh":{"a_":["1"]},"f6":{"be":["1"]},"i0":{"a_":["1"],"a_.T":"1"},"cL":{"a_":["1"],"a_.T":"1"},"ia":{"cl":["1"],"hS":["1"],"dg":["1"],"d_":["1"],"bj":["1"]},"i3":{"a_":["2"]},"f9":{"aH":["2"],"be":["2"],"aH.T":"2"},"eb":{"i3":["1","2"],"a_":["2"],"a_.T":"2"},"i1":{"bj":["1"]},"ff":{"aH":["2"],"be":["2"],"aH.T":"2"},"hU":{"a_":["2"],"a_.T":"2"},"m6":{"N":[]},"lh":{"N":[]},"lI":{"N":[]},"fo":{"aj":[]},"cJ":{"T":["1","2"],"L":["1","2"],"T.V":"2","T.K":"1"},"dc":{"cJ":["1","2"],"T":["1","2"],"L":["1","2"],"T.V":"2","T.K":"1"},"hY":{"cJ":["1","2"],"T":["1","2"],"L":["1","2"],"T.V":"2","T.K":"1"},"e9":{"D":["1"],"n":["1"],"n.E":"1"},"i8":{"bu":["1","2"],"T":["1","2"],"L":["1","2"],"T.V":"2","T.K":"1"},"cK":{"c_":["1"],"dU":["1"],"D":["1"],"n":["1"]},"dK":{"n":["1"],"n.E":"1"},"B":{"p":["1"],"D":["1"],"n":["1"]},"T":{"L":["1","2"]},"i9":{"D":["2"],"n":["2"],"n.E":"2"},"hd":{"L":["1","2"]},"eW":{"L":["1","2"]},"h8":{"Q":["1"],"D":["1"],"n":["1"],"Q.E":"1","n.E":"1"},"c_":{"dU":["1"],"D":["1"],"n":["1"]},"ij":{"c_":["1"],"dU":["1"],"D":["1"],"n":["1"]},"e6":{"bj":["1"]},"lu":{"T":["k","@"],"L":["k","@"],"T.V":"@","T.K":"k"},"lv":{"Q":["k"],"D":["k"],"n":["k"],"Q.E":"k","n.E":"k"},"iU":{"dF":[]},"lW":{"aq":["k","p<i>"]},"iV":{"aq":["k","p<i>"],"aq.T":"p<i>"},"j_":{"aq":["p<i>","k"],"aq.T":"k"},"iZ":{"aq":["k","p<i>"],"aq.T":"p<i>"},"h6":{"a4":[]},"jJ":{"a4":[]},"jL":{"aq":["j?","k"],"aq.T":"k"},"jK":{"aq":["k","j?"],"aq.T":"j?"},"jM":{"dF":[]},"jN":{"aq":["k","p<i>"],"aq.T":"p<i>"},"kR":{"dF":[]},"kS":{"aq":["k","p<i>"],"aq.T":"p<i>"},"hK":{"aq":["p<i>","k"],"aq.T":"k"},"yi":{"al":["yi"]},"b8":{"al":["b8"]},"a0":{"al":["cq"]},"ax":{"al":["ax"]},"i":{"al":["cq"]},"p":{"D":["1"],"n":["1"]},"cq":{"al":["cq"]},"ki":{"dN":[]},"dU":{"D":["1"],"n":["1"]},"k":{"al":["k"]},"ay":{"al":["yi"]},"iW":{"a4":[]},"cG":{"a4":[]},"bq":{"a4":[]},"cA":{"a4":[]},"fZ":{"cA":[],"a4":[]},"ck":{"a4":[]},"kJ":{"ck":[],"a4":[]},"bl":{"a4":[]},"jd":{"a4":[]},"k7":{"a4":[]},"hF":{"a4":[]},"ln":{"I":[]},"bk":{"I":[]},"jD":{"ck":[],"I":[],"a4":[]},"lT":{"au":[]},"iw":{"kO":[]},"bP":{"kO":[]},"li":{"kO":[]},"k5":{"I":[]},"oZ":{"p":["i"],"D":["i"],"n":["i"]},"cj":{"p":["i"],"D":["i"],"n":["i"]},"rl":{"p":["i"],"D":["i"],"n":["i"]},"oX":{"p":["i"],"D":["i"],"n":["i"]},"rj":{"p":["i"],"D":["i"],"n":["i"]},"oY":{"p":["i"],"D":["i"],"n":["i"]},"rk":{"p":["i"],"D":["i"],"n":["i"]},"oj":{"p":["a0"],"D":["a0"],"n":["a0"]},"ok":{"p":["a0"],"D":["a0"],"n":["a0"]},"W":{"L":["2","3"]},"eJ":{"fk":["1","dU<1>"],"fk.E":"1"},"jx":{"aq":["p<i>","bY"]},"lL":{"aq":["p<i>","bY"],"aq.T":"bY"},"kl":{"I":[]},"j0":{"wT":[]},"j7":{"wT":[]},"cP":{"a_":["p<i>"],"a_.T":"p<i>"},"dx":{"I":[]},"kB":{"hH":[]},"fE":{"W":["k","k","1"],"L":["k","1"],"W.K":"k","W.V":"1","W.C":"k"},"jo":{"nG":[]},"h9":{"I":[]},"hL":{"I":[]},"hJ":{"I":[]},"hm":{"I":[]},"fH":{"I":[]},"hs":{"I":[]},"fV":{"I":[]},"cD":{"I":[]},"hz":{"I":[]},"hB":{"I":[]},"eI":{"I":[]},"fX":{"I":[]},"fJ":{"I":[]},"fO":{"I":[]},"ho":{"bW":["L<k,j?>?"],"bW.T":"L<k,j?>?"},"cT":{"I":[]},"hc":{"I":[]},"b2":{"I":[]},"eT":{"I":[]},"dT":{"I":[]},"hC":{"I":[]},"bG":{"I":[]},"cb":{"I":[]},"cf":{"I":[]},"eE":{"I":[]},"eF":{"I":[]},"eq":{"I":[]},"du":{"I":[]},"jc":{"bW":["p<L<k,j?>>"],"bW.T":"p<L<k,j?>>"},"jT":{"e_":[]},"lg":{"kY":[]},"fN":{"I":[]},"hv":{"I":[]},"kk":{"I":[]},"hO":{"f0":[]},"e0":{"f0":[]},"k9":{"I":[]},"jw":{"c0":[],"al":["c0"]},"f8":{"cC":[],"al":["ku"]},"c0":{"al":["c0"]},"kt":{"c0":[],"al":["c0"]},"ku":{"al":["ku"]},"kv":{"al":["ku"]},"kw":{"I":[]},"eL":{"bk":[],"I":[]},"eM":{"al":["ku"]},"cC":{"al":["ku"]},"d3":{"I":[]},"eN":{"dz":[]},"jA":{"aL":[]},"lr":{"hM":[],"b4":[]},"bJ":{"T":["k","@"],"L":["k","@"],"T.V":"@","T.K":"k"},"km":{"B":["bJ"],"p":["bJ"],"D":["bJ"],"n":["bJ"],"B.E":"bJ"},"cI":{"I":[]},"j5":{"aL":[]},"j4":{"hM":[],"b4":[]},"e3":{"aT":["e3"],"aT.E":"e3"},"eZ":{"B":["d8"],"p":["d8"],"D":["d8"],"n":["d8"],"B.E":"d8"},"fC":{"a_":["1"],"a_.T":"1"},"cV":{"aL":[]},"aN":{"aT":["aN"]},"ls":{"hM":[],"b4":[]},"i4":{"aN":[],"aT":["aN"],"aT.E":"aN"},"hZ":{"aN":[],"aT":["aN"],"aT.E":"aN"},"f4":{"aN":[],"aT":["aN"],"aT.E":"aN"},"fn":{"aN":[],"aT":["aN"],"aT.E":"aN"},"eK":{"aL":[]},"lQ":{"hM":[],"b4":[]},"fG":{"I":[]},"dB":{"B":["j?"],"p":["j?"],"D":["j?"],"n":["j?"],"B.E":"j?"},"eH":{"I":[]},"cO":{"I":[]},"lj":{"iz":["F"]},"lO":{"iz":["F"]},"kD":{"bk":[],"I":[]},"c5":{"eU":["i"],"B":["i"],"p":["i"],"D":["i"],"n":["i"],"B.E":"i"},"eU":{"B":["1"],"p":["1"],"D":["1"],"n":["1"]},"lt":{"eU":["i"],"B":["i"],"p":["i"],"D":["i"],"n":["i"]},"f7":{"a_":["1"],"a_.T":"1"},"i2":{"be":["1"]}}'))
A.Eh(v.typeUniverse,JSON.parse('{"fU":1,"kL":1,"eV":1,"iA":2,"fM":1,"eB":1,"bj":1,"hG":1,"lV":1,"ll":1,"lX":2,"hd":2,"ij":1,"iv":2,"ja":1,"jb":2,"io":1,"k4":1,"kM":2,"BW":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",B:"Time including microseconds is outside valid range",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ah
return{fM:s("@<@>"),ie:s("BW<j?>"),bG:s("dt"),om:s("fC<z<j?>>"),hw:s("c9"),lo:s("dv"),fW:s("wS"),kj:s("fE<k>"),iv:s("a2"),dF:s("wT()"),V:s("bX"),bU:s("bH<j?>"),fw:s("dz"),bP:s("al<@>"),p6:s("dA"),br:s("fI<F>"),n8:s("bi"),M:s("cs<k>"),lp:s("jj"),O:s("D<@>"),C:s("a4"),mA:s("I"),eZ:s("ju"),A:s("b_"),k4:s("fS"),pk:s("oj"),kI:s("ok"),Y:s("bk"),gY:s("H7"),nW:s("A<F>"),fr:s("A<ex>"),mj:s("A<R>"),fP:s("A<cu?>"),n1:s("A<j?>(kY,f_)"),jN:s("A<eY?>"),co:s("cS"),w:s("cc"),cF:s("cV"),m6:s("oX"),bW:s("oY"),jx:s("oZ"),nZ:s("h2<@>"),U:s("n<@>"),aL:s("z<a2>"),aw:s("z<bH<@>>"),i4:s("z<bY>"),mK:s("z<aZ>"),iw:s("z<A<~>>"),mr:s("z<cU>"),W:s("z<F>"),dO:s("z<p<j?>>"),ic:s("z<L<k,j>>"),d:s("z<L<k,j?>>"),e8:s("z<jZ>"),i7:s("z<dQ>"),hf:s("z<j>"),ox:s("z<dR>"),my:s("z<cz>"),k1:s("z<eG>"),g2:s("z<hx>"),bo:s("z<hy>"),eb:s("z<aK>"),fU:s("z<+controller,sync(d_<c1>,V)>"),lw:s("z<+controller,sync(d_<~>,V)>"),kC:s("z<+(d4,k)>"),l5:s("z<+(k,j)>"),g1:s("z<cg>"),lE:s("z<eN>"),c0:s("z<bK>"),dw:s("z<be<@>>"),s:s("z<k>"),en:s("z<eQ>"),bs:s("z<cj>"),az:s("z<hX>"),fV:s("z<f3>"),g7:s("z<b7>"),dg:s("z<c6>"),p8:s("z<lA>"),bi:s("z<fg>"),gk:s("z<a0>"),dG:s("z<@>"),t:s("z<i>"),fQ:s("z<a9?>"),c:s("z<j?>"),mf:s("z<k?>"),iy:s("aQ<@>"),T:s("h4"),m:s("F"),bJ:s("b9"),g:s("bs"),dX:s("bt<@>"),d9:s("as"),kk:s("dK<e3>"),p3:s("dK<aN>"),hI:s("dL<@>"),ba:s("p<bi>"),ck:s("p<b_>"),ip:s("p<F>"),ew:s("p<L<k,j>>"),J:s("p<L<k,j?>>"),eT:s("p<dQ>"),hg:s("p<dR>"),a6:s("p<cz>"),jX:s("p<hx>"),kR:s("p<cg>"),bF:s("p<k>"),bR:s("p<eQ>"),j:s("p<@>"),L:s("p<i>"),kS:s("p<j?>"),kM:s("jS"),jD:s("ha"),ia:s("U<k,cS>"),gc:s("U<k,k>"),eB:s("U<k,j?>"),a3:s("hb<@,@>"),cy:s("L<k,cE>"),dV:s("L<k,i>"),f:s("L<@,@>"),G:s("L<k,j?>"),iZ:s("ac<k,@>"),r:s("ex"),a:s("ez"),dQ:s("d0"),aj:s("bw"),Z:s("dP"),P:s("R"),K:s("j"),ot:s("kg"),gq:s("eG"),e:s("aF"),b0:s("cA"),lZ:s("Hd"),oZ:s("aK"),aK:s("+()"),ja:s("+(F,fK)"),hP:s("+(L<k,cE>,L<k,L<k,j?>>)"),cU:s("+(d4,k)"),mk:s("+(V,F)"),kO:s("+basicSupport,supportsReadWriteUnsafe(V,V)"),mt:s("+(F?,F)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("ki"),h:s("cg"),hF:s("dS<k>"),cu:s("eJ<@>"),gi:s("dU<k>"),g_:s("eK"),hq:s("c0"),ol:s("cC"),gE:s("kx"),l:s("au"),nv:s("kz"),h3:s("eO"),ha:s("be<c1>"),ey:s("be<~>"),bv:s("kA"),x:s("a_<p<i>>"),lI:s("d5"),hL:s("hH"),N:s("k"),eg:s("eQ"),k5:s("hI"),n6:s("bL"),E:s("b3"),nw:s("cE"),em:s("eR"),hU:s("cF"),q:s("kI"),aJ:s("a6"),do:s("cG"),hM:s("rj"),mC:s("rk"),oR:s("c5"),nn:s("rl"),p:s("cj"),cx:s("d7"),ph:s("eW<k,k>"),eo:s("ck"),oc:s("kN"),jJ:s("kO"),e6:s("aL"),j2:s("hM"),n:s("eY"),lS:s("by<k>"),u:s("e_"),bp:s("e0"),be:s("kY"),ec:s("f0"),oS:s("f1"),iq:s("aM<cj>"),ho:s("aM<i>"),Q:s("aM<~>"),oW:s("e6<@,@>"),R:s("e7<F>"),d4:s("f7<F>"),nI:s("r<cu>"),a7:s("r<F>"),hl:s("r<0&>"),os:s("r<k>"),jz:s("r<cj>"),k:s("r<V>"),_:s("r<@>"),hy:s("r<i>"),D:s("r<~>"),nf:s("b7"),mp:s("dc<j?,j?>"),fA:s("fb"),k8:s("cL<F>"),fb:s("cL<p<i>>"),mI:s("lP<bY>"),jy:s("dh<c1,~()>"),af:s("dh<~,V()>"),lU:s("dh<~,~()>"),I:s("bQ<F>"),lj:s("bQ<p<i>>"),aP:s("aa<cu>"),h1:s("aa<F>"),ex:s("aa<V>"),F:s("aa<~>"),y:s("V"),i:s("a0"),z:s("@"),mq:s("@(j)"),ng:s("@(j,au)"),S:s("i"),ma:s("bi?"),gK:s("A<R>?"),b3:s("cu?"),B:s("F?"),bE:s("p<bH<@>>?"),lH:s("p<@>?"),b:s("L<k,j?>?"),nh:s("ex?"),X:s("j?"),dY:s("cz?"),lY:s("hw?"),jB:s("cg?"),v:s("k?"),f8:s("cE?"),a_:s("c5?"),he:s("eY?"),dd:s("b7?"),o9:s("V?"),dz:s("a0?"),aV:s("i?"),jh:s("cq?"),o:s("cq"),H:s("~"),cj:s("~()"),i6:s("~(j)"),b9:s("~(j,au)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.bv=J.jE.prototype
B.c=J.z.prototype
B.b=J.h3.prototype
B.u=J.dI.prototype
B.a=J.cW.prototype
B.bw=J.bs.prototype
B.bx=J.as.prototype
B.c6=A.hh.prototype
B.c7=A.hj.prototype
B.a1=A.hk.prototype
B.d=A.dP.prototype
B.aO=J.kb.prototype
B.al=J.d7.prototype
B.a4=new A.cO("Operation was cancelled")
B.ao=new A.fA(0,"visible")
B.ap=new A.fA(1,"hidden")
B.Q=new A.dt(0,"applied")
B.a5=new A.dt(1,"quarantined")
B.aY=new A.dt(2,"conflict")
B.R=new A.dt(3,"skipped")
B.aZ=new A.iV(127)
B.S=new A.iY(0,"changed")
B.aq=new A.iY(1,"deleted")
B.bg=new A.i0(A.ah("i0<p<i>>"))
B.b_=new A.cP(B.bg)
B.b0=new A.h0(A.GA(),A.ah("h0<i>"))
B.b2=new A.j_()
B.ar=new A.mB()
B.b1=new A.iZ()
B.z={}
B.aK=new A.aP(B.z,[],A.ah("aP<k,j>"))
B.d0=new A.nc()
B.b3=new A.jn(A.ah("jn<0&>"))
B.n=new A.jm()
B.as=new A.jp(A.ah("jp<0&>"))
B.at=new A.jq()
B.b4=new A.jq()
B.b5=new A.jD()
B.au=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.b6=function() {
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
B.bb=function(getTagFallback) {
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
B.b7=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.ba=function(hooks) {
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
B.b9=function(hooks) {
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
B.b8=function(hooks) {
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
B.av=function(hooks) { return hooks; }

B.e=new A.p3()
B.bc=new A.p7()
B.bd=new A.ha()
B.be=new A.k7()
B.i=new A.qF()
B.k=new A.kR()
B.h=new A.kS()
B.bf=new A.tk()
B.T=new A.u7()
B.aw=new A.uF()
B.f=new A.lI()
B.l=new A.lL()
B.H=new A.lT()
B.ax=new A.cQ(0,"create")
B.t=new A.cQ(1,"update")
B.bh=new A.cQ(2,"archive")
B.bi=new A.cQ(3,"restore")
B.ay=new A.cQ(4,"purge")
B.bj=new A.cQ(5,"hide")
B.U=new A.fF(0,"local")
B.a6=new A.fF(1,"remote")
B.V=new A.fF(2,"resolution")
B.bk=new A.je(3,"ignore")
B.a7=new A.je(4,"replace")
B.x=new A.o8(1,"full")
B.a8=new A.ax(0)
B.az=new A.ax(1e6)
B.aA=new A.ax(16e3)
B.bl=new A.ax(2e5)
B.bm=new A.ax(3e5)
B.W=new A.ax(3e7)
B.bn=new A.ax(3e8)
B.X=new A.ax(5e5)
B.d1=new A.ax(5e6)
B.d2=new A.ax(6048e8)
B.d3=new A.ax(7776e9)
B.d4=new A.ax(864e8)
B.a9=new A.bI(0,"text")
B.Y=new A.bI(1,"int")
B.Z=new A.bI(2,"real")
B.A=new A.bI(3,"bool")
B.a_=new A.bI(4,"date")
B.B=new A.bI(5,"enumValue")
B.I=new A.bI(6,"json")
B.J=new A.bI(7,"jsonList")
B.C=new A.bI(8,"ref")
B.bo=new A.fS(!1)
B.aa=new A.cR("x",1,"opfsExternalLocks")
B.aB=new A.cR("y",2,"opfsExternalLocksWorkaround")
B.aC=new A.et("/database",0,"database")
B.aD=new A.et("/database-journal",1,"journal")
B.aE=new A.h_(0,"live")
B.by=new A.jK(null)
B.bz=new A.jL(null)
B.bA=new A.cv(0,"textExpected")
B.bB=new A.cv(1,"intExpected")
B.bC=new A.cv(2,"numberExpected")
B.bD=new A.cv(3,"boolExpected")
B.bE=new A.cv(4,"jsonExpected")
B.bF=new A.cv(5,"jsonListExpected")
B.bG=new A.cv(6,"enumValueRejected")
B.bH=new A.jN(255)
B.bI=new A.dL(B.b3,A.ah("dL<k>"))
B.aF=s([13,10],t.t)
B.ae=new A.c4(0,"unknown")
B.af=new A.c4(1,"integer")
B.ag=new A.c4(2,"bigInt")
B.ah=new A.c4(3,"float")
B.ai=new A.c4(4,"text")
B.aj=new A.c4(5,"blob")
B.ak=new A.c4(6,"$null")
B.aX=new A.c4(7,"boolean")
B.aG=s([B.ae,B.af,B.ag,B.ah,B.ai,B.aj,B.ak,B.aX],A.ah("z<c4>"))
B.bJ=s([B.ao,B.ap],A.ah("z<fA>"))
B.bK=s([16777216,33554432,67108864,134217728,268435456,536870912,1073741824,2147483648,452984832,905969664],t.t)
B.bs=new A.fT(0,"database")
B.bt=new A.fT(1,"journal")
B.aH=s([B.bs,B.bt],A.ah("z<fT>"))
B.r=new A.ci(0,"clean")
B.a2=new A.ci(1,"dirty")
B.aW=new A.ci(2,"inFlight")
B.P=new A.ci(3,"conflict")
B.a3=new A.ci(4,"error")
B.cv=new A.ci(5,"quarantine")
B.cw=new A.ci(6,"blocked")
B.bL=s([B.r,B.a2,B.aW,B.P,B.a3,B.cv,B.cw],A.ah("z<ci>"))
B.bM=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.bu=new A.h_(1,"notArchived")
B.bN=s([B.aE,B.bu],A.ah("z<h_>"))
B.bO=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.aM=new A.hp(0,"fileUpload")
B.aN=new A.hp(1,"fileRemove")
B.bP=s([B.aM,B.aN],A.ah("z<hp>"))
B.br=new A.cR("s",0,"opfsShared")
B.bp=new A.cR("i",3,"indexedDb")
B.bq=new A.cR("m",4,"inMemory")
B.bQ=s([B.br,B.aa,B.aB,B.bp,B.bq],A.ah("z<cR>"))
B.bR=s([B.a9,B.Y,B.Z,B.A,B.a_,B.B,B.I,B.J,B.C],A.ah("z<bI>"))
B.j=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.q=new A.eC(0,"upsert")
B.E=new A.eC(1,"archive")
B.L=new A.eC(2,"restore")
B.bS=s([B.q,B.E,B.L],A.ah("z<eC>"))
B.bT=s([],A.ah("z<cS>"))
B.bV=s([],t.my)
B.p=s([],t.s)
B.bU=s([],t.t)
B.aI=s([],t.dG)
B.v=s([],t.c)
B.bW=s(["*"],t.s)
B.bX=s([B.aC,B.aD],A.ah("z<et>"))
B.bY=s(["id","updated"],t.s)
B.bZ=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.aR=new A.d4(0,"opfs")
B.aS=new A.d4(1,"indexedDb")
B.co=new A.d4(2,"inMemory")
B.c_=s([B.aR,B.aS,B.co],A.ah("z<d4>"))
B.c0=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.cc={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.o=new A.jM()
B.m=new A.iU()
B.c1=new A.aP(B.cc,[B.o,B.o,B.o,B.o,B.o,B.o,B.o,B.o,B.o,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.k,B.k],A.ah("aP<k,dF>"))
B.aJ=new A.aP(B.z,[],A.ah("aP<k,k>"))
B.a0=new A.aP(B.z,[],A.ah("aP<k,i>"))
B.w=new A.aP(B.z,[],A.ah("aP<k,j?>"))
B.c2=new A.aP(B.z,[],A.ah("aP<i,L<k,j?>(L<k,j?>)>"))
B.c4=new A.jX(11,"simpleSuccessResponse",A.ah("jX<F>"))
B.aL=new A.dO(0,"createOrUpdate")
B.c5=new A.dO(1,"create")
B.K=new A.dO(2,"update")
B.y=new A.dO(3,"archive")
B.D=new A.dO(4,"restore")
B.d5=new A.pI(2,"readWriteCreate")
B.aP=new A.kc(0,"native")
B.cd=new A.kc(1,"web")
B.ab=new A.aF(0,0,0,0,!0)
B.M=new A.aF(1,0,0,0,!1)
B.F=new A.aF(0,1,0,0,!1)
B.N=new A.aF(0,0,0,0,!1)
B.ce=new A.aF(0,0,1,0,!1)
B.cf=new A.aF(0,0,0,1,!1)
B.ac=new A.ig(!1,!1)
B.cg=new A.ii(0,0,0)
B.cb={hidden:0}
B.ch=new A.cs(B.cb,1,t.M)
B.c8={id:0,archived:1,hidden:2,extra:3}
B.ci=new A.cs(B.c8,4,t.M)
B.c9={query:0,count:1,countDistinct:2,distinct:3,ids:4,explain:5,sum:6,avg:7,min:8,max:9,search:10}
B.cj=new A.cs(B.c9,11,t.M)
B.ca={open:0,close:1,health:2,worker_event:3,record_event:4,capabilities:5,get:6,mutate_batch:7,compiled_query:8,analyze:9,wal_checkpoint:10,vacuum:11,prune_outbox:12,compact:13,run_maintenance:14,tx_begin:15,tx_get:16,tx_mutate_batch:17,tx_savepoint:18,tx_rollback_to:19,tx_release:20,tx_commit:21,tx_rollback:22,watch_query:23,watch_one:24,watch_cancel:25,sync_start:26,sync_stop:27,sync_now:28,sync_status:29,auth_required:30,sync_pause:31,sync_resume:32,sync_update_auth:33,sync_set_connectivity:34,file_upload_begin:35,file_upload_chunk:36,file_upload_finish:37,file_upload_abort:38,file_list:39,file_open:40,file_remove:41,file_gc:42,file_enforce_storage_cap:43,conflicts_list:44,conflicts_get:45,conflicts_resolve:46,conflicts_accept_local:47,conflicts_accept_remote:48,conflicts_watch:49}
B.ck=new A.cs(B.ca,50,t.M)
B.aQ=new A.cs(B.z,0,t.M)
B.cl=new A.hE(0,"insert")
B.cm=new A.hE(1,"update")
B.cn=new A.hE(2,"delete")
B.cp=new A.hI(-1,null)
B.cq=new A.kE("_clientToken")
B.O=new A.bL(0,"closed")
B.cr=new A.bL(1,"opening")
B.aT=new A.bL(2,"offline")
B.ad=new A.bL(3,"authRequired")
B.aU=new A.bL(4,"idle")
B.cs=new A.bL(5,"pulling")
B.ct=new A.bL(6,"pushing")
B.cu=new A.bL(7,"backoff")
B.aV=new A.bL(8,"paused")
B.G=new A.b3(B.a0,B.a0,0,0,0,!1)
B.cx=A.bS("dv")
B.cy=A.bS("wS")
B.cz=A.bS("oj")
B.cA=A.bS("ok")
B.cB=A.bS("oX")
B.cC=A.bS("oY")
B.cD=A.bS("oZ")
B.cE=A.bS("F")
B.cF=A.bS("j")
B.cG=A.bS("rj")
B.cH=A.bS("rk")
B.cI=A.bS("rl")
B.cJ=A.bS("cj")
B.am=new A.hK(!1)
B.cK=new A.hK(!0)
B.cL=new A.cI(14)
B.cM=new A.cI(522)
B.cN=new A.cI(778)
B.cO=new A.vv(B.f,A.FJ())
B.cP=new A.vw(B.f,A.FK())
B.cQ=new A.vx(B.f,A.FL())
B.cR=new A.vy(B.f,A.FM())
B.cS=new A.m7(B.f,A.FN())
B.cT=new A.vz(B.f,A.FO())
B.cU=new A.vA(B.f,A.FP())
B.cV=new A.vB(B.f,A.FQ())
B.cW=new A.vC(B.f,A.FR())
B.cX=new A.vE(B.f,A.FT())
B.cY=new A.vF(B.f,A.FU())
B.cZ=new A.vD(B.f,A.FS())
B.d_=new A.m8(B.f,A.FV())
B.c3=new A.aP(B.z,[],A.ah("aP<j?,j?>"))
B.an=new A.m9(B.f,B.c3)})();(function staticFields(){$.uH=null
$.ef=A.l([],t.hf)
$.Fi=null
$.yU=null
$.qf=0
$.qg=A.Fc()
$.yl=null
$.yk=null
$.AL=null
$.Au=null
$.AT=null
$.wf=null
$.wv=null
$.xV=null
$.uU=A.l([],A.ah("z<p<j>?>"))
$.fr=null
$.iD=null
$.iE=null
$.xM=!1
$.t=B.f
$.uX=null
$.zo=null
$.zp=null
$.zq=null
$.zr=null
$.xt=A.tH("_lastQuoRemDigits")
$.xu=A.tH("_lastQuoRemUsed")
$.hT=A.tH("_lastRemUsed")
$.xv=A.tH("_lastRem_nsh")
$.za=""
$.zb=null
$.A2=null
$.vO=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"H4","B8",()=>A.wn("_$dart_dartClosure"))
s($,"H3","ek",()=>A.wn("_$dart_dartClosure_dartJSInterop"))
s($,"HF","mp",()=>A.xa(0))
s($,"I1","BG",()=>B.f.bU(new A.wy(),A.ah("A<~>")))
s($,"HX","BD",()=>A.l([new J.jF()],A.ah("z<hA>")))
s($,"Hl","Bd",()=>A.cH(A.ri({
toString:function(){return"$receiver$"}})))
s($,"Hm","Be",()=>A.cH(A.ri({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Hn","Bf",()=>A.cH(A.ri(null)))
s($,"Ho","Bg",()=>A.cH(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Hr","Bj",()=>A.cH(A.ri(void 0)))
s($,"Hs","Bk",()=>A.cH(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Hq","Bi",()=>A.cH(A.z7(null)))
s($,"Hp","Bh",()=>A.cH(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Hu","Bm",()=>A.cH(A.z7(void 0)))
s($,"Ht","Bl",()=>A.cH(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Hx","y4",()=>A.Dz())
s($,"H9","dq",()=>$.BG())
s($,"H8","Ba",()=>A.DR(!1,B.f,t.y))
s($,"HL","Bu",()=>A.xa(4096))
s($,"HJ","Bs",()=>new A.vr().$0())
s($,"HK","Bt",()=>new A.vq().$0())
s($,"Hz","y5",()=>A.CR(A.bA(A.l([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Hy","Bn",()=>A.xa(0))
s($,"HE","cr",()=>A.tx(0))
s($,"HD","fz",()=>A.tx(1))
s($,"HB","y7",()=>$.fz().bB(0))
s($,"HA","y6",()=>A.tx(1e4))
r($,"HC","Bo",()=>A.ad("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1))
s($,"HG","Bp",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"HH","Bq",()=>A.ad("^[\\-\\.0-9A-Z_a-z~]*$",!0))
s($,"HI","Br",()=>typeof URLSearchParams=="function")
s($,"HO","el",()=>A.mj(B.cF))
s($,"He","mn",()=>{A.D_()
return $.qf})
s($,"HP","Bw",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"Hc","wL",()=>{var q=new A.uG(new DataView(new ArrayBuffer(A.EK(8))))
q.nC()
return q})
s($,"H5","B9",()=>J.BK(B.c7.gaF(A.CS(A.bA(A.l([1],t.t)))),0,null).getInt8(0)===1?B.b4:B.at)
s($,"GY","y0",()=>A.ad("^[\\w!#%&'*+\\-.^`|~]+$",!0))
s($,"HR","wM",()=>A.ad("\\r\\n|\\r|\\n",!0))
s($,"Ha","Bb",()=>A.yY())
s($,"HM","y8",()=>A.ad("^[\\x00-\\x7F]+$",!0))
s($,"HN","Bv",()=>A.ad('["\\x00-\\x1F\\x7F]',!0))
s($,"I3","BH",()=>A.ad('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0))
s($,"HQ","Bx",()=>A.ad("(?:\\r\\n)?[ \\t]+",!0))
s($,"HU","BA",()=>A.ad('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0))
s($,"HT","Bz",()=>A.ad("\\\\(.)",!0))
s($,"I0","BF",()=>A.ad('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0))
s($,"I4","BI",()=>A.ad("(?:"+$.Bx().a+")*",!0))
s($,"HW","BC",()=>A.yZ())
s($,"I2","y9",()=>A.ad("^[a-z0-9]{15}$",!0))
s($,"H2","B7",()=>A.yw("declaredNames",t.gi))
s($,"Hk","y2",()=>new A.j())
s($,"H1","B6",()=>A.ad("^[0-9a-f]{64}$",!0))
s($,"HS","By",()=>A.ad("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0))
s($,"HZ","wN",()=>new A.nl($.y1()))
s($,"Hh","Bc",()=>new A.qb(A.ad("/",!0),A.ad("[^/]$",!0),A.ad("^/",!0)))
s($,"Hj","mo",()=>new A.rJ(A.ad("[/\\\\]",!0),A.ad("[^/\\\\]$",!0),A.ad("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0),A.ad("^[/\\\\](?![/\\\\])",!0)))
s($,"Hi","iQ",()=>new A.rp(A.ad("/",!0),A.ad("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0),A.ad("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0),A.ad("^/",!0)))
s($,"Hg","y1",()=>A.Di())
s($,"H0","B5",()=>$.fz().bX(0,63).bB(0))
s($,"H_","B4",()=>{var q=$.fz()
return q.bX(0,63).f4(0,q)})
s($,"GZ","mm",()=>A.yZ())
s($,"Hv","y3",()=>A.yw(null,t.S))
s($,"HY","BE",()=>A.CG(A.l([A.xn("files"),A.xn("blocks")],t.s)))
s($,"H6","wK",()=>{var q,p,o=A.G(t.N,A.ah("et"))
for(q=0;q<2;++q){p=B.bX[q]
o.j(0,p.c,p)}return o})
s($,"HV","BB",()=>A.yY())
r($,"Hw","iR",()=>{var q="navigator"
return A.CA(A.CB(A.xT(A.AX(),q),A.xn("locks")))?A.xT(A.xT(A.AX(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.eA,ArrayBuffer:A.ez,ArrayBufferView:A.hi,DataView:A.hh,Float32Array:A.k_,Float64Array:A.k0,Int16Array:A.k1,Int32Array:A.k2,Int8Array:A.k3,Uint16Array:A.hj,Uint32Array:A.hk,Uint8ClampedArray:A.hl,CanvasPixelArray:A.hl,Uint8Array:A.dP})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.eB.$nativeSuperclassTag="ArrayBufferView"
A.ib.$nativeSuperclassTag="ArrayBufferView"
A.ic.$nativeSuperclassTag="ArrayBufferView"
A.d0.$nativeSuperclassTag="ArrayBufferView"
A.id.$nativeSuperclassTag="ArrayBufferView"
A.ie.$nativeSuperclassTag="ArrayBufferView"
A.bw.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.Gy
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
