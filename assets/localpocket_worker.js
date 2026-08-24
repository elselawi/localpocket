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
if(a[b]!==s){A.HB(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.l(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.yq(b)
return new s(c,this)}:function(){if(s===null)s=A.yq(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.yq(a).prototype
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
yy(a,b,c,d){return{i:a,p:b,e:c,x:d}},
wU(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.yw==null){A.H8()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.zJ("Return interceptor for "+A.r(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.vd
if(o==null)o=$.vd=A.wT(n)
p=q[o]}if(p!=null)return p
p=A.Hh(a)
if(p!=null)return p
if(typeof a=="function")return B.bB
s=Object.getPrototypeOf(a)
if(s==null)return B.aO
if(s===Object.prototype)return B.aO
if(typeof q=="function"){o=$.vd
if(o==null)o=$.vd=A.wT(n)
Object.defineProperty(q,o,{value:B.al,enumerable:false,writable:true,configurable:true})
return B.al}return B.al},
xE(a,b){if(a<0||a>4294967295)throw A.b(A.ak(a,0,4294967295,"length",null))
return J.zh(new Array(a),b)},
zg(a,b){if(a<0)throw A.b(A.O("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("y<0>"))},
zf(a,b){if(a<0)throw A.b(A.O("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("y<0>"))},
zh(a,b){var s=A.l(a,b.i("y<0>"))
s.$flags=1
return s},
Dg(a,b){return J.yN(a,b)},
zi(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Dj(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.zi(r))break;++b}return b},
zj(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.zi(r))break}return b},
dr(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hc.prototype
return J.jO.prototype}if(typeof a=="string")return J.cY.prototype
if(a==null)return J.hd.prototype
if(typeof a=="boolean")return J.jN.prototype
if(Array.isArray(a))return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
if(typeof a=="symbol")return J.ey.prototype
if(typeof a=="bigint")return J.b9.prototype
return a}if(a instanceof A.j)return a
return J.wU(a)},
J(a){if(typeof a=="string")return J.cY.prototype
if(a==null)return a
if(Array.isArray(a))return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
if(typeof a=="symbol")return J.ey.prototype
if(typeof a=="bigint")return J.b9.prototype
return a}if(a instanceof A.j)return a
return J.wU(a)},
ax(a){if(a==null)return a
if(Array.isArray(a))return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
if(typeof a=="symbol")return J.ey.prototype
if(typeof a=="bigint")return J.b9.prototype
return a}if(a instanceof A.j)return a
return J.wU(a)},
H0(a){if(typeof a=="number")return J.dL.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.da.prototype
return a},
H1(a){if(typeof a=="number")return J.dL.prototype
if(typeof a=="string")return J.cY.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.da.prototype
return a},
wS(a){if(typeof a=="string")return J.cY.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.da.prototype
return a},
mr(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
if(typeof a=="symbol")return J.ey.prototype
if(typeof a=="bigint")return J.b9.prototype
return a}if(a instanceof A.j)return a
return J.wU(a)},
u(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dr(a).X(a,b)},
U(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Bp(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.J(a).h(a,b)},
bU(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.Bp(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.ax(a).j(a,b,c)},
bV(a,b){return J.ax(a).t(a,b)},
Cp(a,b){return J.ax(a).E(a,b)},
yM(a,b){return J.wS(a).h7(a,b)},
xn(a){return J.mr(a).lG(a)},
Cq(a,b,c){return J.mr(a).h8(a,b,c)},
Cr(a){return J.mr(a).lH(a)},
du(a,b,c){return J.mr(a).h9(a,b,c)},
eq(a,b){return J.ax(a).hb(a,b)},
Cs(a,b,c){return J.H0(a).cK(a,b,c)},
yN(a,b){return J.H1(a).T(a,b)},
Ct(a,b){return J.J(a).D(a,b)},
mA(a,b){return J.ax(a).a3(a,b)},
iX(a,b){return J.ax(a).dC(a,b)},
Cu(a){return J.mr(a).gaJ(a)},
bW(a){return J.ax(a).gC(a)},
a0(a){return J.dr(a).gN(a)},
cc(a){return J.J(a).gB(a)},
iY(a){return J.J(a).gW(a)},
K(a){return J.ax(a).gu(a)},
xo(a){return J.ax(a).ga_(a)},
aw(a){return J.J(a).gl(a)},
cP(a){return J.dr(a).gah(a)},
xp(a){return J.ax(a).gan(a)},
Cv(a,b,c){return J.ax(a).f3(a,b,c)},
aG(a,b,c){return J.ax(a).co(a,b,c)},
Cw(a,b,c){return J.wS(a).dK(a,b,c)},
Cx(a,b){return J.J(a).sl(a,b)},
Cy(a,b,c,d,e){return J.ax(a).ab(a,b,c,d,e)},
mB(a,b){return J.ax(a).b5(a,b)},
yO(a,b){return J.ax(a).c1(a,b)},
Cz(a,b){return J.wS(a).f9(a,b)},
CA(a,b){return J.wS(a).O(a,b)},
xq(a,b){return J.ax(a).cr(a,b)},
CB(a){return J.ax(a).dS(a)},
av(a){return J.dr(a).m(a)},
yP(a,b){return J.ax(a).jT(a,b)},
jL:function jL(){},
jN:function jN(){},
hd:function hd(){},
ar:function ar(){},
d_:function d_(){},
kg:function kg(){},
da:function da(){},
bx:function bx(){},
b9:function b9(){},
ey:function ey(){},
y:function y(a){this.$ti=a},
jM:function jM(){},
pe:function pe(a){this.$ti=a},
er:function er(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dL:function dL(){},
hc:function hc(){},
jO:function jO(){},
cY:function cY(){}},A={xH:function xH(){},
je(a,b,c){if(t.O.b(a))return new A.i8(a,b.i("@<0>").a0(c).i("i8<1,2>"))
return new A.dy(a,b.i("@<0>").a0(c).i("dy<1,2>"))},
zl(a){return new A.cZ("Field '"+a+"' has been assigned during initialization.")},
zm(a){return new A.cZ("Field '"+a+"' has not been initialized.")},
Dk(a){return new A.cZ("Field '"+a+"' has already been initialized.")},
wX(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
an(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
eW(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
bF(a,b,c){return a},
yx(a){var s,r
for(s=$.ei.length,r=0;r<s;++r)if(a===$.ei[r])return!0
return!1},
c5(a,b,c,d){A.aW(b,"start")
if(c!=null){A.aW(c,"end")
if(b>c)A.x(A.ak(b,0,c,"start",null))}return new A.c4(a,b,c,d.i("c4<0>"))},
dO(a,b,c,d){if(t.O.b(a))return new A.dG(a,b,c.i("@<0>").a0(d).i("dG<1,2>"))
return new A.cA(a,b,c.i("@<0>").a0(d).i("cA<1,2>"))},
zD(a,b,c){var s="takeCount"
A.iZ(b,s)
A.aW(b,s)
if(t.O.b(a))return new A.fY(a,b,c.i("fY<0>"))
return new A.dZ(a,b,c.i("dZ<0>"))},
zC(a,b,c){var s="count"
if(t.O.b(a)){A.iZ(b,s)
A.aW(b,s)
return new A.eu(a,b,c.i("eu<0>"))}A.iZ(b,s)
A.aW(b,s)
return new A.cD(a,b,c.i("cD<0>"))},
aq(){return new A.bf("No element")},
ha(){return new A.bf("Too many elements")},
ze(){return new A.bf("Too few elements")},
kw(a,b,c,d){if(c-b<=32)A.DS(a,b,c,d)
else A.DR(a,b,c,d)},
DS(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.J(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
DR(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.c.R(a5-a4+1,6),h=a4+i,g=a5-i,f=B.c.R(a4+a5,2),e=f-i,d=f+i,c=J.J(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
p=J.u(a6.$2(a,a1),0)
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
A.kw(a3,a4,r-2,a6)
A.kw(a3,q+2,a5,a6)
if(p)return
if(r<h&&q>g){while(J.u(a6.$2(c.h(a3,r),a),0))++r
while(J.u(a6.$2(c.h(a3,q),a1),0))--q
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
break}}A.kw(a3,r,q,a6)}else A.kw(a3,r,q,a6)},
uv:function uv(a){this.a=0
this.b=a},
u6:function u6(a){this.a=0
this.b=a},
dd:function dd(){},
jf:function jf(a,b){this.a=a
this.$ti=b},
dy:function dy(a,b){this.a=a
this.$ti=b},
i8:function i8(a,b){this.a=a
this.$ti=b},
i4:function i4(){},
u7:function u7(a,b){this.a=a
this.b=b},
bw:function bw(a,b){this.a=a
this.$ti=b},
cZ:function cZ(a){this.a=a},
km:function km(a){this.a=a},
bY:function bY(a){this.a=a},
x3:function x3(){},
r7:function r7(){},
F:function F(){},
R:function R(){},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a8:function a8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cA:function cA(a,b,c){this.a=a
this.b=b
this.$ti=c},
dG:function dG(a,b,c){this.a=a
this.b=b
this.$ti=c},
k_:function k_(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
a6:function a6(a,b,c){this.a=a
this.b=b
this.$ti=c},
bj:function bj(a,b,c){this.a=a
this.b=b
this.$ti=c},
dc:function dc(a,b,c){this.a=a
this.b=b
this.$ti=c},
h_:function h_(a,b,c){this.a=a
this.b=b
this.$ti=c},
jz:function jz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dZ:function dZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
fY:function fY(a,b,c){this.a=a
this.b=b
this.$ti=c},
kM:function kM(a,b,c){this.a=a
this.b=b
this.$ti=c},
cD:function cD(a,b,c){this.a=a
this.b=b
this.$ti=c},
eu:function eu(a,b,c){this.a=a
this.b=b
this.$ti=c},
kv:function kv(a,b,c){this.a=a
this.b=b
this.$ti=c},
dH:function dH(a){this.$ti=a},
jw:function jw(a){this.$ti=a},
bp:function bp(a,b){this.a=a
this.$ti=b},
l0:function l0(a,b){this.a=a
this.$ti=b},
h2:function h2(){},
kS:function kS(){},
eZ:function eZ(){},
dU:function dU(a,b){this.a=a
this.$ti=b},
kJ:function kJ(a){this.a=a},
iI:function iI(){},
CS(){throw A.b(A.Y("Cannot modify unmodifiable Map"))},
CT(){throw A.b(A.Y("Cannot modify constant Set"))},
BI(a){var s=A.BH(a)
if(s!=null)return s
return"minified:"+a},
Bp(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
r(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.av(a)
return s},
hC(a){var s,r=$.zt
if(r==null)r=$.zt=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
hD(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
DI(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.d_(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kj(a){var s,r,q,p
if(a instanceof A.j)return A.bl(A.bu(a),null)
s=J.dr(a)
if(s===B.bA||s===B.bC||t.cx.b(a)){r=B.at(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bl(A.bu(a),null)},
zv(a){var s,r,q
if(a==null||typeof a=="number"||A.c9(a))return J.av(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dA)return a.m(0)
if(a instanceof A.fj)return a.lt(!0)
s=$.Cj()
for(r=0;r<1;++r){q=s[r].wk(a)
if(q!=null)return q}return"Instance of '"+A.kj(a)+"'"},
DE(){return Date.now()},
DH(){var s,r
if($.qC!==0)return
$.qC=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.qC=1e6
$.qD=new A.qB(r)},
DD(){if(!!self.location)return self.location.href
return null},
zs(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
DJ(a){var s,r,q,p=A.l([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.A)(a),++r){q=a[r]
if(!A.aD(q))throw A.b(A.ej(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.c.a8(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.ej(q))}return A.zs(p)},
zw(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.aD(q))throw A.b(A.ej(q))
if(q<0)throw A.b(A.ej(q))
if(q>65535)return A.DJ(a)}return A.zs(a)},
DK(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bd(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.a8(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.ak(a,0,1114111,null,null))},
DL(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.c.aG(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.c.R(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
bc(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
xS(a){return a.c?A.bc(a).getUTCFullYear()+0:A.bc(a).getFullYear()+0},
xQ(a){return a.c?A.bc(a).getUTCMonth()+1:A.bc(a).getMonth()+1},
qA(a){return a.c?A.bc(a).getUTCDate()+0:A.bc(a).getDate()+0},
xO(a){return a.c?A.bc(a).getUTCHours()+0:A.bc(a).getHours()+0},
xP(a){return a.c?A.bc(a).getUTCMinutes()+0:A.bc(a).getMinutes()+0},
xR(a){return a.c?A.bc(a).getUTCSeconds()+0:A.bc(a).getSeconds()+0},
zu(a){return a.c?A.bc(a).getUTCMilliseconds()+0:A.bc(a).getMilliseconds()+0},
DG(a){return B.c.aG((a.c?A.bc(a).getUTCDay()+0:A.bc(a).getDay()+0)+6,7)+1},
DF(a){var s=a.$thrownJsError
if(s==null)return null
return A.aa(s)},
kk(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aC(a,s)
a.$thrownJsError=s
s.stack=b.m(0)}},
wK(a,b){var s,r="index"
if(!A.aD(b))return new A.bv(!0,b,r,null)
s=J.aw(a)
if(b<0||b>=s)return A.jI(b,s,a,null,r)
return A.r1(b,r)},
GS(a,b,c){if(a<0||a>c)return A.ak(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ak(b,a,c,"end",null)
return new A.bv(!0,b,"end",null)},
ej(a){return new A.bv(!0,a,null,null)},
b(a){return A.aC(a,new Error())},
aC(a,b){var s
if(a==null)a=new A.cH()
b.dartException=a
s=A.HC
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
HC(){return J.av(this.dartException)},
x(a,b){throw A.aC(a,b==null?new Error():b)},
C(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.x(A.Fy(a,b,c),s)},
Fy(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.cq("'"+s+"': Cannot "+o+" "+l+k+n)},
A(a){throw A.b(A.ao(a))},
cI(a){var s,r,q,p,o,n
a=A.By(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.l([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.rJ(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
rK(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
zI(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
xI(a,b){var s=b==null,r=s?null:b.method
return new A.jP(a,r,s?null:b.receiver)},
M(a){if(a==null)return new A.kb(a)
if(a instanceof A.fZ)return A.ds(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.ds(a,a.dartException)
return A.Gk(a)},
ds(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Gk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.a8(r,16)&8191)===10)switch(q){case 438:return A.ds(a,A.xI(A.r(s)+" (Error "+q+")",null))
case 445:case 5007:A.r(s)
return A.ds(a,new A.hw())}}if(a instanceof TypeError){p=$.BT()
o=$.BU()
n=$.BV()
m=$.BW()
l=$.BZ()
k=$.C_()
j=$.BY()
$.BX()
i=$.C1()
h=$.C0()
g=p.bz(s)
if(g!=null)return A.ds(a,A.xI(s,g))
else{g=o.bz(s)
if(g!=null){g.method="call"
return A.ds(a,A.xI(s,g))}else if(n.bz(s)!=null||m.bz(s)!=null||l.bz(s)!=null||k.bz(s)!=null||j.bz(s)!=null||m.bz(s)!=null||i.bz(s)!=null||h.bz(s)!=null)return A.ds(a,new A.hw())}return A.ds(a,new A.kR(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.hO()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ds(a,new A.bv(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.hO()
return a},
aa(a){var s
if(a instanceof A.fZ)return a.b
if(a==null)return new A.it(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.it(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
ms(a){if(a==null)return J.a0(a)
if(typeof a=="object")return A.hC(a)
return J.a0(a)},
GY(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
GZ(a,b){var s,r=a.length
for(s=0;s<r;++s)b.t(0,a[s])
return b},
FJ(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.z5("Unsupported number of arguments for wrapped closure"))},
dp(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.GM(a,b)
a.$identity=s
return s},
GM(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.FJ)},
CM(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.rh().constructor.prototype):Object.create(new A.fM(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.yZ(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.CI(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.yZ(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
CI(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.CE)}throw A.b("Error in functionType of tearoff")},
CJ(a,b,c,d){var s=A.yX
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
yZ(a,b,c,d){if(c)return A.CL(a,b,d)
return A.CJ(b.length,d,a,b)},
CK(a,b,c,d){var s=A.yX,r=A.CF
switch(b?-1:a){case 0:throw A.b(new A.ks("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
CL(a,b,c){var s,r
if($.yV==null)$.yV=A.yU("interceptor")
if($.yW==null)$.yW=A.yU("receiver")
s=b.length
r=A.CK(s,c,a,b)
return r},
yq(a){return A.CM(a)},
CE(a,b){return A.iC(v.typeUniverse,A.bu(a.a),b)},
yX(a){return a.a},
CF(a){return a.b},
yU(a){var s,r,q,p=new A.fM("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.O("Field name "+a+" not found.",null))},
wT(a){return v.getIsolateTag(a)},
HG(a,b){var s=$.t
if(s===B.f)return a
return s.ha(a,b)},
BB(){return v.G},
IK(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Hh(a){var s,r,q,p,o,n=$.Bn.$1(a),m=$.wL[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.x0[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.B5.$2(a,n)
if(q!=null){m=$.wL[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.x0[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.x2(s)
$.wL[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.x0[n]=s
return s}if(p==="-"){o=A.x2(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.Bv(a,s)
if(p==="*")throw A.b(A.zJ(n))
if(v.leafTags[n]===true){o=A.x2(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.Bv(a,s)},
Bv(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.yy(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
x2(a){return J.yy(a,!1,null,!!a.$iby)},
Hj(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.x2(s)
else return J.yy(s,c,null,null)},
H8(){if(!0===$.yw)return
$.yw=!0
A.H9()},
H9(){var s,r,q,p,o,n,m,l
$.wL=Object.create(null)
$.x0=Object.create(null)
A.H7()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.Bx.$1(o)
if(n!=null){m=A.Hj(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
H7(){var s,r,q,p,o,n,m=B.b8()
m=A.fB(B.b9,A.fB(B.ba,A.fB(B.au,A.fB(B.au,A.fB(B.bb,A.fB(B.bc,A.fB(B.bd(B.at),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Bn=new A.wY(p)
$.B5=new A.wZ(o)
$.Bx=new A.x_(n)},
fB(a,b){return a(b)||b},
ER(a,b){var s
for(s=0;s<a.length;++s)if(!J.u(a[s],b[s]))return!1
return!0},
GQ(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
xG(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a1("Illegal RegExp pattern ("+String(o)+")",a,null))},
Hv(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.ex){s=B.a.ac(a,c)
return b.b.test(s)}else return!J.yM(b,B.a.ac(a,c)).gB(0)},
Bl(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
By(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
B(a,b,c){var s
if(typeof b=="string")return A.Hx(a,b,c)
if(b instanceof A.ex){s=b.gl2()
s.lastIndex=0
return a.replace(s,A.Bl(c))}return A.Hw(a,b,c)},
Hw(a,b,c){var s,r,q,p
for(s=J.yM(b,a),s=s.gu(s),r=0,q="";s.k();){p=s.gn()
q=q+a.substring(r,p.gJ())+c
r=p.gI()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
Hx(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.By(b),"g"),A.Bl(c))},
B1(a){return a},
BC(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.h7(0,a),s=new A.ld(s.a,s.b,s.c),r=t.lu,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.r(A.B1(B.a.q(a,q,m)))+A.r(c.$1(o))
q=m+n[0].length}s=p+A.r(A.B1(B.a.ac(a,q)))
return s.charCodeAt(0)==0?s:s},
Hy(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.BD(a,s,s+b.length,c)},
BD(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
at:function at(a,b){this.a=a
this.b=b},
iq:function iq(a,b){this.a=a
this.b=b},
ir:function ir(a,b){this.a=a
this.b=b},
fk:function fk(a,b){this.a=a
this.b=b},
lM:function lM(a,b){this.a=a
this.b=b},
ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},
ef:function ef(a){this.a=a},
lN:function lN(a){this.a=a},
fU:function fU(){},
nz:function nz(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a,b,c){this.a=a
this.b=b
this.$ti=c},
eb:function eb(a,b){this.a=a
this.$ti=b},
ff:function ff(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fV:function fV(){},
cw:function cw(a,b,c){this.a=a
this.b=b
this.$ti=c},
p8:function p8(){},
h9:function h9(a,b){this.a=a
this.$ti=b},
qB:function qB(a){this.a=a},
hJ:function hJ(){},
rJ:function rJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hw:function hw(){},
jP:function jP(a,b,c){this.a=a
this.b=b
this.c=c},
kR:function kR(a){this.a=a},
kb:function kb(a){this.a=a},
fZ:function fZ(a,b){this.a=a
this.b=b},
it:function it(a){this.a=a
this.b=null},
dA:function dA(){},
n4:function n4(){},
n5:function n5(){},
rH:function rH(){},
rh:function rh(){},
fM:function fM(a,b){this.a=a
this.b=b},
ks:function ks(a){this.a=a},
bz:function bz(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pf:function pf(a){this.a=a},
ph:function ph(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
Z:function Z(a,b){this.a=a
this.$ti=b},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aT:function aT(a,b){this.a=a
this.$ti=b},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aH:function aH(a,b){this.a=a
this.$ti=b},
jV:function jV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
he:function he(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
wY:function wY(a){this.a=a},
wZ:function wZ(a){this.a=a},
x_:function x_(a){this.a=a},
fj:function fj(){},
lJ:function lJ(){},
lK:function lK(){},
lL:function lL(){},
ex:function ex(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
fi:function fi(a){this.b=a},
lc:function lc(a,b,c){this.a=a
this.b=b
this.c=c},
ld:function ld(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
eT:function eT(a,b){this.a=a
this.c=b},
m_:function m_(a,b,c){this.a=a
this.b=b
this.c=c},
vK:function vK(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
HB(a){throw A.aC(A.zl(a),new Error())},
v(){throw A.aC(A.zm(""),new Error())},
BE(){throw A.aC(A.Dk(""),new Error())},
xg(){throw A.aC(A.zl(""),new Error())},
ya(){var s=new A.ll("")
return s.b=s},
u8(a){var s=new A.ll(a)
return s.b=s},
ll:function ll(a){this.a=a
this.b=null},
Fr(a){return a},
iJ(a,b,c){},
br(a){var s,r,q
if(t.iy.b(a))return a
s=J.J(a)
r=A.aE(s.gl(a),null,!1,t.z)
for(q=0;q<s.gl(a);++q)r[q]=s.h(a,q)
return r},
zo(a,b,c){var s
A.iJ(a,b,c)
s=new DataView(a,b)
return s},
cB(a,b,c){A.iJ(a,b,c)
c=B.c.R(a.byteLength-b,4)
return new Int32Array(a,b,c)},
Dy(a){return new Int8Array(a)},
Dz(a){return new Uint16Array(a)},
DA(a,b,c){A.iJ(a,b,c)
return new Uint32Array(a,b,c)},
xN(a){return new Uint8Array(a)},
bB(a,b,c){A.iJ(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
cO(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.wK(b,a))},
cs(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.GS(a,b,c))
if(b==null)return c
return b},
eE:function eE(){},
eD:function eD(){},
hr:function hr(){},
m5:function m5(a){this.a=a},
hq:function hq(){},
eF:function eF(){},
d3:function d3(){},
bA:function bA(){},
k4:function k4(){},
k5:function k5(){},
k6:function k6(){},
k7:function k7(){},
k8:function k8(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
dR:function dR(){},
il:function il(){},
im:function im(){},
io:function io(){},
ip:function ip(){},
xU(a,b){var s=b.c
return s==null?b.c=A.iA(a,"z",[b.x]):s},
zA(a){var s=a.w
if(s===6||s===7)return A.zA(a.x)
return s===11||s===12},
DQ(a){return a.as},
Bu(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ae(a){return A.vR(v.typeUniverse,a,!1)},
Hc(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.dm(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
dm(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.dm(a1,s,a3,a4)
if(r===s)return a2
return A.Ah(a1,r,!0)
case 7:s=a2.x
r=A.dm(a1,s,a3,a4)
if(r===s)return a2
return A.Ag(a1,r,!0)
case 8:q=a2.y
p=A.fA(a1,q,a3,a4)
if(p===q)return a2
return A.iA(a1,a2.x,p)
case 9:o=a2.x
n=A.dm(a1,o,a3,a4)
m=a2.y
l=A.fA(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.ye(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.fA(a1,j,a3,a4)
if(i===j)return a2
return A.Ai(a1,k,i)
case 11:h=a2.x
g=A.dm(a1,h,a3,a4)
f=a2.y
e=A.Gg(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.Af(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.fA(a1,d,a3,a4)
o=a2.x
n=A.dm(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.yf(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.j2("Attempted to substitute unexpected RTI kind "+a0))}},
fA(a,b,c,d){var s,r,q,p,o=b.length,n=A.w0(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.dm(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Gh(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.w0(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.dm(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Gg(a,b,c,d){var s,r=b.a,q=A.fA(a,r,c,d),p=b.b,o=A.fA(a,p,c,d),n=b.c,m=A.Gh(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.lx()
s.a=q
s.b=o
s.c=m
return s},
l(a,b){a[v.arrayRti]=b
return a},
mo(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.H2(s)
return a.$S()}return null},
Hb(a,b){var s
if(A.zA(b))if(a instanceof A.dA){s=A.mo(a)
if(s!=null)return s}return A.bu(a)},
bu(a){if(a instanceof A.j)return A.o(a)
if(Array.isArray(a))return A.a7(a)
return A.ym(J.dr(a))},
a7(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.ym(a)},
ym(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.FH(a,s)},
FH(a,b){var s=a instanceof A.dA?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.F0(v.typeUniverse,s.name)
b.$ccache=r
return r},
H2(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.vR(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
iQ(a){return A.bt(A.o(a))},
yv(a){var s=A.mo(a)
return A.bt(s==null?A.bu(a):s)},
yp(a){var s
if(a instanceof A.fj)return a.kS()
s=a instanceof A.dA?A.mo(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.cP(a).a
if(Array.isArray(a))return A.a7(a)
return A.bu(a)},
bt(a){var s=a.r
return s==null?a.r=new A.vP(a):s},
GV(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.iC(v.typeUniverse,A.yp(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.Ak(v.typeUniverse,s,A.yp(q[r]))
return A.iC(v.typeUniverse,s,a)},
bT(a){return A.bt(A.vR(v.typeUniverse,a,!1))},
FG(a){var s=this
s.b=A.Ge(s)
return s.b(a)},
Ge(a){var s,r,q,p
if(a===t.K)return A.FP
if(A.ek(a))return A.FT
s=a.w
if(s===6)return A.FD
if(s===1)return A.AL
if(s===7)return A.FK
r=A.Gd(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.ek)){a.f="$i"+q
if(q==="q")return A.FN
if(a===t.m)return A.FM
return A.FS}}else if(s===10){p=A.GQ(a.x,a.y)
return p==null?A.AL:p}return A.FB},
Gd(a){if(a.w===8){if(a===t.S)return A.aD
if(a===t.i||a===t.o)return A.FO
if(a===t.N)return A.FR
if(a===t.y)return A.c9}return null},
FF(a){var s=this,r=A.FA
if(A.ek(s))r=A.Fg
else if(s===t.K)r=A.Ff
else if(A.fE(s)){r=A.FC
if(s===t.aV)r=A.aQ
else if(s===t.x)r=A.ai
else if(s===t.o9)r=A.Az
else if(s===t.jh)r=A.Fe
else if(s===t.dz)r=A.AA
else if(s===t.B)r=A.AB}else if(s===t.S)r=A.ah
else if(s===t.N)r=A.I
else if(s===t.y)r=A.fv
else if(s===t.o)r=A.Fd
else if(s===t.i)r=A.eh
else if(s===t.m)r=A.aZ
s.a=r
return s.a(a)},
FB(a){var s=this
if(a==null)return A.fE(s)
return A.Hf(v.typeUniverse,A.Hb(a,s),s)},
FD(a){if(a==null)return!0
return this.x.b(a)},
FS(a){var s,r=this
if(a==null)return A.fE(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dr(a)[s]},
FN(a){var s,r=this
if(a==null)return A.fE(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dr(a)[s]},
FM(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
AK(a){if(typeof a=="object"){if(a instanceof A.j)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
FA(a){var s=this
if(a==null){if(A.fE(s))return a}else if(s.b(a))return a
throw A.aC(A.AF(a,s),new Error())},
FC(a){var s=this
if(a==null||s.b(a))return a
throw A.aC(A.AF(a,s),new Error())},
AF(a,b){return new A.iy("TypeError: "+A.A6(a,A.bl(b,null)))},
A6(a,b){return A.jy(a)+": type '"+A.bl(A.yp(a),null)+"' is not a subtype of type '"+b+"'"},
bS(a,b){return new A.iy("TypeError: "+A.A6(a,b))},
FK(a){var s=this
return s.x.b(a)||A.xU(v.typeUniverse,s).b(a)},
FP(a){return a!=null},
Ff(a){if(a!=null)return a
throw A.aC(A.bS(a,"Object"),new Error())},
FT(a){return!0},
Fg(a){return a},
AL(a){return!1},
c9(a){return!0===a||!1===a},
fv(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aC(A.bS(a,"bool"),new Error())},
Az(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aC(A.bS(a,"bool?"),new Error())},
eh(a){if(typeof a=="number")return a
throw A.aC(A.bS(a,"double"),new Error())},
AA(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aC(A.bS(a,"double?"),new Error())},
aD(a){return typeof a=="number"&&Math.floor(a)===a},
ah(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aC(A.bS(a,"int"),new Error())},
aQ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aC(A.bS(a,"int?"),new Error())},
FO(a){return typeof a=="number"},
Fd(a){if(typeof a=="number")return a
throw A.aC(A.bS(a,"num"),new Error())},
Fe(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aC(A.bS(a,"num?"),new Error())},
FR(a){return typeof a=="string"},
I(a){if(typeof a=="string")return a
throw A.aC(A.bS(a,"String"),new Error())},
ai(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aC(A.bS(a,"String?"),new Error())},
aZ(a){if(A.AK(a))return a
throw A.aC(A.bS(a,"JSObject"),new Error())},
AB(a){if(a==null)return a
if(A.AK(a))return a
throw A.aC(A.bS(a,"JSObject?"),new Error())},
AX(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bl(a[q],b)
return s},
G4(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.AX(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bl(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
AI(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.l([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.bl(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.bl(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.bl(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.bl(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.bl(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
bl(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.bl(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.bl(a.x,b)+">"
if(m===8){p=A.Gj(a.x)
o=a.y
return o.length>0?p+("<"+A.AX(o,b)+">"):p}if(m===10)return A.G4(a,b)
if(m===11)return A.AI(a,b,null)
if(m===12)return A.AI(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
Gj(a){var s=A.BH(a)
if(s!=null)return s
return"minified:"+a},
F1(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
F0(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.vR(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iB(a,5,"#")
q=A.w0(s)
for(p=0;p<s;++p)q[p]=r
o=A.iA(a,b,q)
n[b]=o
return o}else return m},
F_(a,b){return A.Ax(a.tR,b)},
EZ(a,b){return A.Ax(a.eT,b)},
vR(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.Aj(a,null,b,!1)
r.set(b,s)
return s},
iC(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.Aj(a,b,c,!0)
q.set(c,r)
return r},
Ak(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.ye(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
Aj(a,b,c,d){return A.EP(A.EJ(a,b,c,d))},
dl(a,b){b.a=A.FF
b.b=A.FG
return b},
iB(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.c0(null,null)
s.w=b
s.as=c
r=A.dl(a,s)
a.eC.set(c,r)
return r},
Ah(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.EX(a,b,r,c)
a.eC.set(r,s)
return s},
EX(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.ek(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.fE(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.c0(null,null)
q.w=6
q.x=b
q.as=c
return A.dl(a,q)},
Ag(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.EV(a,b,r,c)
a.eC.set(r,s)
return s},
EV(a,b,c,d){var s,r
if(d){s=b.w
if(A.ek(b)||b===t.K)return b
else if(s===1)return A.iA(a,"z",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.c0(null,null)
r.w=7
r.x=b
r.as=c
return A.dl(a,r)},
EY(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.c0(null,null)
s.w=13
s.x=b
s.as=q
r=A.dl(a,s)
a.eC.set(q,r)
return r},
iz(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
EU(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
iA(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iz(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.c0(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.dl(a,r)
a.eC.set(p,q)
return q},
ye(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.iz(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.c0(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.dl(a,o)
a.eC.set(q,n)
return n},
Ai(a,b,c){var s,r,q="+"+(b+"("+A.iz(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.c0(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.dl(a,s)
a.eC.set(q,r)
return r},
Af(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iz(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iz(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.EU(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.c0(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.dl(a,p)
a.eC.set(r,o)
return o},
yf(a,b,c,d){var s,r=b.as+("<"+A.iz(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.EW(a,b,c,r,d)
a.eC.set(r,s)
return s},
EW(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.w0(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.dm(a,b,r,0)
m=A.fA(a,c,r,0)
return A.yf(a,n,m,c!==m)}}l=new A.c0(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.dl(a,l)},
EJ(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
EP(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.EL(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.Ab(a,r,l,k,!1)
else if(q===46)r=A.Ab(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ed(a.u,a.e,k.pop()))
break
case 94:k.push(A.EY(a.u,k.pop()))
break
case 35:k.push(A.iB(a.u,5,"#"))
break
case 64:k.push(A.iB(a.u,2,"@"))
break
case 126:k.push(A.iB(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.EN(a,k)
break
case 38:A.EM(a,k)
break
case 63:p=a.u
k.push(A.Ah(p,A.ed(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.Ag(p,A.ed(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.EK(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.Ac(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.EQ(a.u,a.e,o)
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
return A.ed(a.u,a.e,m)},
EL(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
Ab(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.F1(s,o.x)[p]
if(n==null)A.x('No "'+p+'" in "'+A.DQ(o)+'"')
d.push(A.iC(s,o,n))}else d.push(p)
return m},
EN(a,b){var s,r=a.u,q=A.Aa(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iA(r,p,q))
else{s=A.ed(r,a.e,p)
switch(s.w){case 11:b.push(A.yf(r,s,q,a.n))
break
default:b.push(A.ye(r,s,q))
break}}},
EK(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.Aa(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ed(p,a.e,o)
q=new A.lx()
q.a=s
q.b=n
q.c=m
b.push(A.Af(p,r,q))
return
case-4:b.push(A.Ai(p,b.pop(),s))
return
default:throw A.b(A.j2("Unexpected state under `()`: "+A.r(o)))}},
EM(a,b){var s=b.pop()
if(0===s){b.push(A.iB(a.u,1,"0&"))
return}if(1===s){b.push(A.iB(a.u,4,"1&"))
return}throw A.b(A.j2("Unexpected extended operation "+A.r(s)))},
Aa(a,b){var s=b.splice(a.p)
A.Ac(a.u,a.e,s)
a.p=b.pop()
return s},
ed(a,b,c){if(typeof c=="string")return A.iA(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.EO(a,b,c)}else return c},
Ac(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ed(a,b,c[s])},
EQ(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ed(a,b,c[s])},
EO(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.j2("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.j2("Bad index "+c+" for "+b.m(0)))},
Hf(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aF(a,b,null,c,null)
r.set(c,s)}return s},
aF(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.ek(d))return!0
s=b.w
if(s===4)return!0
if(A.ek(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aF(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.aF(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aF(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aF(a,b.x,c,d,e))return!1
return A.aF(a,A.xU(a,b),c,d,e)}if(s===6)return A.aF(a,p,c,d,e)&&A.aF(a,b.x,c,d,e)
if(q===7){if(A.aF(a,b,c,d.x,e))return!0
return A.aF(a,b,c,A.xU(a,d),e)}if(q===6)return A.aF(a,b,c,p,e)||A.aF(a,b,c,d.x,e)
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
if(!A.aF(a,j,c,i,e)||!A.aF(a,i,e,j,c))return!1}return A.AJ(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.AJ(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.FL(a,b,c,d,e)}if(o&&q===10)return A.FQ(a,b,c,d,e)
return!1},
AJ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aF(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aF(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aF(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aF(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aF(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
FL(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iC(a,b,r[o])
return A.Ay(a,p,null,c,d.y,e)}return A.Ay(a,b.y,null,c,d.y,e)},
Ay(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aF(a,b[s],d,e[s],f))return!1
return!0},
FQ(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aF(a,r[s],c,q[s],e))return!1
return!0},
fE(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.ek(a))if(s!==6)r=s===7&&A.fE(a.x)
return r},
ek(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
Ax(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
w0(a){return a>0?new Array(a):v.typeUniverse.sEA},
c0:function c0(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
lx:function lx(){this.c=this.b=this.a=null},
vP:function vP(a){this.a=a},
lu:function lu(){},
iy:function iy(a){this.a=a},
Eg(){var s,r,q
if(self.scheduleImmediate!=null)return A.Gm()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.dp(new A.tO(s),1)).observe(r,{childList:true})
return new A.tN(s,r,q)}else if(self.setImmediate!=null)return A.Gn()
return A.Go()},
Eh(a){self.scheduleImmediate(A.dp(new A.tP(a),0))},
Ei(a){self.setImmediate(A.dp(new A.tQ(a),0))},
Ej(a){A.y1(B.x,a)},
y1(a,b){var s=B.c.R(a.a,1000)
return A.ES(s<0?0:s,b)},
zE(a,b){var s=B.c.R(a.a,1000)
return A.ET(s<0?0:s,b)},
ES(a,b){var s=new A.ix(!0)
s.nS(a,b)
return s},
ET(a,b){var s=new A.ix(!1)
s.nT(a,b)
return s},
h(a){return new A.hZ(new A.p($.t,a.i("p<0>")),a.i("hZ<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.AC(a,b)},
e(a,b){b.au(a)},
d(a,b){b.bQ(A.M(a),A.aa(a))},
AC(a,b){var s,r,q=new A.wf(b),p=new A.wg(b)
if(a instanceof A.p)a.lr(q,p,t.z)
else{s=t.z
if(a instanceof A.p)a.bE(q,p,s)
else{r=new A.p($.t,t._)
r.a=8
r.c=a
r.lr(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.t.eQ(new A.wv(s),t.H,t.S,t.z)},
bC(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.cw(null)
else{s=c.a
s===$&&A.v()
s.p()}return}else if(b===1){s=c.c
if(s!=null){r=A.M(a)
q=A.aa(a)
s.ak(new A.ac(r,q))}else{s=A.M(a)
r=A.aa(a)
q=c.a
q===$&&A.v()
q.bw(s,r)
c.a.p()}return}if(a instanceof A.ih){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.v()
r.t(0,s)
A.iU(new A.wd(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.v()
s.ti(p,!1).aK(new A.we(c,b),t.P)
return}}A.AC(a,b)},
B0(a){var s=a.a
s===$&&A.v()
return new A.b6(s,A.o(s).i("b6<1>"))},
Ek(a,b){var s=new A.lf(b.i("lf<0>"))
s.nO(a,b)
return s},
AM(a,b){return A.Ek(a,b)},
EF(a){return new A.ih(a,1)},
dg(a){return new A.ih(a,0)},
Ae(a,b,c){return 0},
fK(a){var s
if(t.C.b(a)){s=a.gc2()
if(s!=null)return s}return B.H},
h6(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.M(q)
r=A.aa(q)
p=new A.p($.t,b.i("p<0>"))
o=s
n=r
m=A.iK(o,n)
if(m==null)o=new A.ac(o,n==null?A.fK(o):n)
else o=m
p.c3(o)
return p}return b.i("z<0>").b(l)?l:A.bk(l,b)},
c_(a,b){var s=a==null?b.a(a):a,r=new A.p($.t,b.i("p<0>"))
r.aY(s)
return r},
D8(a,b){var s
if(!b.b(null))throw A.b(A.b0(null,"computation","The type parameter is not nullable"))
s=new A.p($.t,b.i("p<0>"))
A.co(a,new A.oE(null,s,b))
return s},
xB(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.p($.t,b.i("p<q<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.oG(i,h,g,f)
try{for(n=J.K(a),m=t.P;n.k();){r=n.gn()
q=i.b
r.bE(new A.oF(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cw(A.l([],b.i("y<0>")))
return n}i.a=A.aE(n,null,!1,b.i("0?"))}catch(l){p=A.M(l)
o=A.aa(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.iK(m,k)
if(j==null)m=new A.ac(m,k==null?A.fK(m):k)
else m=j
n.c3(m)
return n}else{i.d=p
i.c=o}}return f},
xA(a,b,c,d){var s=new A.oz(d,null,b,c),r=$.t,q=new A.p(r,c.i("p<0>"))
if(r!==B.f)s=r.eQ(s,c.i("0/"),t.K,t.l)
a.da(new A.bP(q,2,null,s,a.$ti.i("@<1>").a0(c).i("bP<1,2>")))
return q},
D6(a,b){var s,r,q,p=A.l([],b.i("y<ie<0>>"))
for(s=a.length,r=b.i("ie<0>"),q=0;q<a.length;a.length===s||(0,A.A)(a),++q)p.push(new A.ie(a[q],r))
if(p.length===0)return A.c_(A.l([],b.i("y<0>")),b.i("q<0>"))
s=new A.p($.t,b.i("p<q<0>>"))
A.Ez(p,new A.oA(new A.ad(s,b.i("ad<q<0>>")),p,b))
return s},
FX(a){return a!=null},
Ez(a,b){var s,r={},q=r.a=r.b=0,p=new A.uL(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.A)(a),++q)a[q].t3(p)},
iK(a,b){var s,r,q,p=$.t
if(p===B.f)return null
s=p.lX(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.kk(r,q)
return s},
fx(a,b){var s
if($.t!==B.f){s=A.iK(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gc2()
if(b==null){A.kk(a,B.H)
b=B.H}}else b=B.H
else if(t.C.b(a))A.kk(a,b)
return new A.ac(a,b)},
Ey(a,b,c){var s=new A.p(b,c.i("p<0>"))
s.a=8
s.c=a
return s},
bk(a,b){var s=new A.p($.t,b.i("p<0>"))
s.a=8
s.c=a
return s},
uR(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.xW()
b.c3(new A.ac(new A.bv(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.l8(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.ef()
b.fd(p.a)
A.e9(b,q)
return}b.a^=2
b.b.cu(new A.uS(p,b))},
e9(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.eB(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.e9(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.gbR()===k.gbR())}else f=!1
if(f){f=g.a
r=f.c
f.b.eB(r.a,r.b)
return}j=$.t
if(j!==k)$.t=k
else j=null
f=s.a.c
if((f&15)===8)new A.uW(s,g,p).$0()
else if(q){if((f&1)!==0)new A.uV(s,m).$0()}else if((f&2)!==0)new A.uU(g,s).$0()
if(j!=null)$.t=j
f=s.c
if(f instanceof A.p){r=s.a.$ti
r=r.i("z<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.fZ(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.uR(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.fZ(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
AR(a,b){if(t.ng.b(a))return b.eQ(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.cV(a,t.z,t.K)
throw A.b(A.b0(a,"onError",u.w))},
FW(){var s,r
for(s=$.fy;s!=null;s=$.fy){$.iM=null
r=s.b
$.fy=r
if(r==null)$.iL=null
s.a.$0()}},
Gf(){$.yn=!0
try{A.FW()}finally{$.iM=null
$.yn=!1
if($.fy!=null)$.yG().$1(A.B6())}},
AZ(a){var s=new A.le(a),r=$.iL
if(r==null){$.fy=$.iL=s
if(!$.yn)$.yG().$1(A.B6())}else $.iL=r.b=s},
Gc(a){var s,r,q,p=$.fy
if(p==null){A.AZ(a)
$.iM=$.iL
return}s=new A.le(a)
r=$.iM
if(r==null){s.b=p
$.fy=$.iM=s}else{q=r.b
s.b=q
$.iM=r.b=s
if(q==null)$.iL=s}},
iU(a){var s,r=null,q=$.t
if(B.f===q){A.wt(r,r,B.f,a)
return}if(B.f===q.giZ().a)s=B.f.gbR()===q.gbR()
else s=!1
if(s){A.wt(r,r,q,q.bD(a,t.H))
return}s=$.t
s.cu(s.ep(a))},
xY(a,b){var s=null,r=b.i("cr<0>"),q=new A.cr(s,s,s,s,r)
q.aq(a)
q.kw()
return new A.b6(q,r.i("b6<1>"))},
I_(a,b){return new A.bR(A.bF(a,"stream",t.K),b.i("bR<0>"))},
xX(a,b,c,d,e){return d?new A.fp(b,null,c,a,e.i("fp<0>")):new A.cr(b,null,c,a,e.i("cr<0>"))},
dY(a,b,c){return new A.i_(b,a,c.i("i_<0>"))},
mm(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.M(q)
r=A.aa(q)
$.t.eB(s,r)}},
Ew(a,b,c,d,e,f){var s=$.t,r=e?1:0,q=c!=null?32:0,p=A.lj(s,b,f),o=A.u3(s,c),n=d==null?A.ww():d
return new A.de(a,p,o,s.bD(n,t.H),s,r|q,f.i("de<0>"))},
Ed(a){return new A.tF(a)},
lj(a,b,c){var s=b==null?A.Gq():b
return a.cV(s,t.H,c)},
u3(a,b){if(b==null)b=A.Gr()
if(t.b9.b(b))return a.eQ(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.cV(b,t.z,t.K)
throw A.b(A.O("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
FY(a){},
G_(a,b){$.t.eB(a,b)},
FZ(){},
A5(a,b){var s=$.t,r=new A.fb(s,b.i("fb<0>"))
A.iU(r.gl4())
if(a!=null)r.c=s.bD(a,t.H)
return r},
Fo(a,b,c){var s=a.A()
if(s!==$.dt())s.aO(new A.wi(b,c))
else b.ak(c)},
Fp(a,b,c){var s=a.A()
if(s!==$.dt())s.aO(new A.wj(b,c))
else b.c4(c)},
co(a,b){var s=$.t
if(s===B.f)return s.je(a,b)
return s.je(a,s.ep(b))},
E2(a,b){var s,r=$.t
if(r===B.f)return r.jd(a,b)
s=r.ha(b,t.hU)
return $.t.jd(a,s)},
xf(a,b,c,d){return A.Gb(a,c,b,d)},
Gb(a,b,c,d){return $.t.m2(c,b).aT(a,d)},
G9(a,b,c,d,e){A.iN(d,e)},
iN(a,b){A.Gc(new A.wq(a,b))},
wr(a,b,c,d){var s,r=$.t
if(r===c)return d.$0()
$.t=c
s=r
try{r=d.$0()
return r}finally{$.t=s}},
ws(a,b,c,d,e){var s,r=$.t
if(r===c)return d.$1(e)
$.t=c
s=r
try{r=d.$1(e)
return r}finally{$.t=s}},
yo(a,b,c,d,e,f){var s,r=$.t
if(r===c)return d.$2(e,f)
$.t=c
s=r
try{r=d.$2(e,f)
return r}finally{$.t=s}},
AV(a,b,c,d){return d},
AW(a,b,c,d){return d},
AU(a,b,c,d){return d},
G8(a,b,c,d,e){return null},
wt(a,b,c,d){var s,r
if(B.f!==c){s=B.f.gbR()
r=c.gbR()
d=s!==r?c.ep(d):c.j9(d,t.H)}A.AZ(d)},
G7(a,b,c,d,e){return A.y1(d,B.f!==c?c.j9(e,t.H):e)},
G6(a,b,c,d,e){e=c.tw(e,t.H,t.hU)
return A.zE(d,e)},
Ga(a,b,c,d){A.Bw(d)},
AT(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.xC(o,o,o,s,s)
r.E(0,e)}else r=o
s=new A.lp(c.gli(),c.glk(),c.glj(),c.gle(),c.glf(),c.gld(),c.gkM(),c.giZ(),c.gkF(),c.gkE(),c.gl9(),c.gkP(),c.giJ(),c.gj7(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.mg(s,q)
p=d.a
if(p!=null)s.as=new A.mf(s,p)}if(r!=null)s.at=new A.mh(s,r)
return s},
tO:function tO(a){this.a=a},
tN:function tN(a,b,c){this.a=a
this.b=b
this.c=c},
tP:function tP(a){this.a=a},
tQ:function tQ(a){this.a=a},
ix:function ix(a){this.a=a
this.b=null
this.c=0},
vN:function vN(a,b){this.a=a
this.b=b},
vM:function vM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hZ:function hZ(a,b){this.a=a
this.b=!1
this.$ti=b},
wf:function wf(a){this.a=a},
wg:function wg(a){this.a=a},
wv:function wv(a){this.a=a},
wd:function wd(a,b){this.a=a
this.b=b},
we:function we(a,b){this.a=a
this.b=b},
lf:function lf(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
tS:function tS(a){this.a=a},
tT:function tT(a){this.a=a},
tV:function tV(a){this.a=a},
tW:function tW(a,b){this.a=a
this.b=b},
tU:function tU(a,b){this.a=a
this.b=b},
tR:function tR(a){this.a=a},
ih:function ih(a,b){this.a=a
this.b=b},
m1:function m1(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
fo:function fo(a,b){this.a=a
this.$ti=b},
ac:function ac(a,b){this.a=a
this.b=b},
aY:function aY(a,b){this.a=a
this.$ti=b},
e5:function e5(a,b,c,d,e,f,g){var _=this
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
i3:function i3(){},
i_:function i_(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
oE:function oE(a,b,c){this.a=a
this.b=b
this.c=c},
oG:function oG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oF:function oF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oz:function oz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kN:function kN(a,b){this.a=a
this.b=b},
oA:function oA(a,b,c){this.a=a
this.b=b
this.c=c},
hz:function hz(a,b,c){this.c=a
this.d=b
this.$ti=c},
ie:function ie(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
uM:function uM(a,b){this.a=a
this.b=b},
uN:function uN(a,b){this.a=a
this.b=b},
uL:function uL(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(){},
az:function az(a,b){this.a=a
this.$ti=b},
ad:function ad(a,b){this.a=a
this.$ti=b},
bP:function bP(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
p:function p(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
uO:function uO(a,b){this.a=a
this.b=b},
uT:function uT(a,b){this.a=a
this.b=b},
uS:function uS(a,b){this.a=a
this.b=b},
uQ:function uQ(a,b){this.a=a
this.b=b},
uP:function uP(a,b){this.a=a
this.b=b},
uW:function uW(a,b,c){this.a=a
this.b=b
this.c=c},
uX:function uX(a,b){this.a=a
this.b=b},
uY:function uY(a){this.a=a},
uV:function uV(a,b){this.a=a
this.b=b},
uU:function uU(a,b){this.a=a
this.b=b},
uZ:function uZ(a,b){this.a=a
this.b=b},
v_:function v_(a,b,c){this.a=a
this.b=b
this.c=c},
v0:function v0(a,b){this.a=a
this.b=b},
le:function le(a){this.a=a
this.b=null},
a2:function a2(){},
rm:function rm(a,b){this.a=a
this.b=b},
rn:function rn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ro:function ro(a,b){this.a=a
this.b=b},
rp:function rp(a,b){this.a=a
this.b=b},
rk:function rk(a){this.a=a},
rl:function rl(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function hP(){},
dj:function dj(){},
vG:function vG(a){this.a=a},
vF:function vF(a){this.a=a},
m2:function m2(){},
i0:function i0(){},
cr:function cr(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
fp:function fp(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
b6:function b6(a,b){this.a=a
this.$ti=b},
de:function de(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
lb:function lb(){},
tF:function tF(a){this.a=a},
tE:function tE(a){this.a=a},
iu:function iu(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
aJ:function aJ(){},
u5:function u5(a,b,c){this.a=a
this.b=b
this.c=c},
u4:function u4(a){this.a=a},
fn:function fn(){},
lt:function lt(){},
bO:function bO(a,b){this.b=a
this.a=null
this.$ti=b},
fa:function fa(a,b){this.b=a
this.c=b
this.a=null},
uE:function uE(){},
di:function di(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
vo:function vo(a,b){this.a=a
this.b=b},
fb:function fb(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
bR:function bR(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
i9:function i9(a){this.$ti=a},
cM:function cM(a,b){this.b=a
this.$ti=b},
vm:function vm(a,b){this.a=a
this.b=b},
ik:function ik(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
wi:function wi(a,b){this.a=a
this.b=b},
wj:function wj(a,b){this.a=a
this.b=b},
ic:function ic(){},
fe:function fe(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
ec:function ec(a,b,c){this.b=a
this.a=b
this.$ti=c},
ia:function ia(a,b){this.a=a
this.$ti=b},
fl:function fl(a,b,c,d,e,f){var _=this
_.w=$
_.x=null
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
i2:function i2(a,b,c){this.a=a
this.b=b
this.$ti=c},
wa:function wa(a,b){this.a=a
this.b=b},
wc:function wc(a,b){this.a=a
this.b=b},
wb:function wb(a,b){this.a=a
this.b=b},
w8:function w8(a,b){this.a=a
this.b=b},
w9:function w9(a,b){this.a=a
this.b=b},
w7:function w7(a,b){this.a=a
this.b=b},
w4:function w4(a,b){this.a=a
this.b=b},
mg:function mg(a,b){this.a=a
this.b=b},
w3:function w3(a,b){this.a=a
this.b=b},
w2:function w2(a,b){this.a=a
this.b=b},
w6:function w6(a,b){this.a=a
this.b=b},
w5:function w5(a,b){this.a=a
this.b=b},
mf:function mf(a,b){this.a=a
this.b=b},
mh:function mh(a,b){this.a=a
this.b=b},
me:function me(){},
lp:function lp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
uA:function uA(a,b,c){this.a=a
this.b=b
this.c=c},
uC:function uC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uz:function uz(a,b){this.a=a
this.b=b},
uB:function uB(a,b,c){this.a=a
this.b=b
this.c=c},
lQ:function lQ(){},
vv:function vv(a,b,c){this.a=a
this.b=b
this.c=c},
vu:function vu(a,b){this.a=a
this.b=b},
vw:function vw(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a){this.a=a},
wq:function wq(a,b){this.a=a
this.b=b},
hY:function hY(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
xC(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.cK(d.i("@<0>").a0(e).i("cK<1,2>"))
b=A.ys()}else{if(A.Bd()===b&&A.Bc()===a)return new A.df(d.i("@<0>").a0(e).i("df<1,2>"))
if(a==null)a=A.yr()}else{if(b==null)b=A.ys()
if(a==null)a=A.yr()}return A.Ex(a,b,c,d,e)},
A7(a,b){var s=a[b]
return s===a?null:s},
yc(a,b,c){if(c==null)a[b]=a
else a[b]=c},
yb(){var s=Object.create(null)
A.yc(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
Ex(a,b,c,d,e){var s=c!=null?c:new A.uy(d)
return new A.i6(a,b,s,d.i("@<0>").a0(e).i("i6<1,2>"))},
hg(a,b,c,d){if(b==null){if(a==null)return new A.bz(c.i("@<0>").a0(d).i("bz<1,2>"))
b=A.ys()}else{if(A.Bd()===b&&A.Bc()===a)return new A.he(c.i("@<0>").a0(d).i("he<1,2>"))
if(a==null)a=A.yr()}return A.EI(a,b,null,c,d)},
m(a,b,c){return A.GY(a,new A.bz(b.i("@<0>").a0(c).i("bz<1,2>")))},
E(a,b){return new A.bz(a.i("@<0>").a0(b).i("bz<1,2>"))},
EI(a,b,c,d,e){return new A.ii(a,b,new A.vk(d),d.i("@<0>").a0(e).i("ii<1,2>"))},
pj(a){return new A.cL(a.i("cL<0>"))},
aU(a){return new A.cL(a.i("cL<0>"))},
af(a,b){return A.GZ(a,new A.cL(b.i("cL<0>")))},
yd(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fg(a,b,c){var s=new A.dh(a,b,c.i("dh<0>"))
s.c=a.e
return s},
Fu(a,b){return J.u(a,b)},
Fv(a){return J.a0(a)},
ba(a,b,c){var s=A.hg(null,null,b,c)
a.ad(0,new A.pi(s,b,c))
return s},
ez(a,b,c){var s=A.hg(null,null,b,c)
s.E(0,a)
return s},
pk(a,b){var s,r,q=A.pj(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.A)(a),++r)q.t(0,b.a(a[r]))
return q},
eA(a,b){var s=A.pj(b)
s.E(0,a)
return s},
Dl(a,b){var s=t.bP
return J.yN(s.a(a),s.a(b))},
pC(a){var s,r
if(A.yx(a))return"{...}"
s=new A.ab("")
try{r={}
$.ei.push(a)
s.a+="{"
r.a=!0
a.ad(0,new A.pD(r,s))
s.a+="}"}finally{$.ei.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
xJ(a){return new A.hh(A.aE(A.Dm(null),null,!1,a.i("0?")),a.i("hh<0>"))},
Dm(a){return 8},
cK:function cK(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
v2:function v2(a){this.a=a},
v1:function v1(a){this.a=a},
df:function df(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
i6:function i6(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
uy:function uy(a){this.a=a},
ea:function ea(a,b){this.a=a
this.$ti=b},
ly:function ly(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ii:function ii(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
vk:function vk(a){this.a=a},
cL:function cL(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
vl:function vl(a){this.a=a
this.c=this.b=null},
dh:function dh(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
pi:function pi(a,b,c){this.a=a
this.b=b
this.c=c},
dM:function dM(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
lE:function lE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
aV:function aV(){},
D:function D(){},
T:function T(){},
pB:function pB(a){this.a=a},
pD:function pD(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.$ti=b},
lH:function lH(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
m4:function m4(){},
hn:function hn(){},
f_:function f_(a,b){this.a=a
this.$ti=b},
hh:function hh(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
lF:function lF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
c1:function c1(){},
is:function is(){},
iD:function iD(){},
AP(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.M(r)
q=A.a1(String(s),null,null)
throw A.b(q)}q=A.wk(p)
return q},
wk(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.lC(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.wk(a[s])
return a},
Fc(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.C9()
else s=new Uint8Array(o)
for(r=J.J(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Fb(a,b,c,d){var s=a?$.C8():$.C7()
if(s==null)return null
if(0===c&&d===b.length)return A.Av(s,b)
return A.Av(s,b.subarray(c,d))},
Av(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
yR(a,b,c,d,e,f){if(B.c.aG(f,4)!==0)throw A.b(A.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a1("Invalid base64 padding, more than two '=' characters",a,b))},
Eo(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
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
if(o<0||o>255)break;++q}throw A.b(A.b0(b,"Not a byte value at index "+q+": 0x"+B.c.mt(s.h(b,q),16),null))},
En(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.c.a8(f,2),i=f&3,h=$.yH()
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
if(i===3){if((j&3)!==0)throw A.b(A.a1(l,a,r))
s&2&&A.C(d)
d[e]=j>>>10
d[e+1]=j>>>2}else{if((j&15)!==0)throw A.b(A.a1(l,a,r))
s&2&&A.C(d)
d[e]=j>>>4}m=(3-i)*3
if(p===37)m+=2
return A.zW(a,r+1,c,-m-1)}throw A.b(A.a1(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.a1(k,a,r))},
El(a,b,c,d){var s=A.Em(a,b,c),r=(d&3)+(s-b),q=B.c.a8(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.C2()},
Em(a,b,c){var s,r=c,q=r,p=0
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
zW(a,b,c,d){var s,r
if(b===c)return d
s=-d-1
while(s>0){r=a.charCodeAt(b)
if(s===3){if(r===61){s-=3;++b
break}if(r===37){--s;++b
if(b===c)break
r=a.charCodeAt(b)}else break}if((s>3?s-3:s)===2){if(r!==51)break;++b;--s
if(b===c)break
r=a.charCodeAt(b)}if((r|32)!==100)break;++b;--s
if(b===c)break}if(b!==c)throw A.b(A.a1("Invalid padding character",a,b))
return-s-1},
CY(a){return B.c9.h(0,a.toLowerCase())},
zk(a,b,c){return new A.hf(a,b)},
Fx(a){return a.ap()},
EG(a,b){return new A.vh(a,[],A.GN())},
EH(a,b,c){var s,r=new A.ab("")
A.A9(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
A9(a,b,c,d){var s=A.EG(b,c)
s.hX(a)},
Aw(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
lC:function lC(a,b){this.a=a
this.b=b
this.c=null},
vg:function vg(a){this.a=a},
lD:function lD(a){this.a=a},
ve:function ve(a,b,c){this.b=a
this.c=b
this.a=c},
vZ:function vZ(){},
vY:function vY(){},
j_:function j_(){},
m3:function m3(){},
j0:function j0(a){this.a=a},
vQ:function vQ(a,b){this.a=a
this.b=b},
mP:function mP(){},
j5:function j5(){},
lh:function lh(a){this.a=0
this.b=a},
u2:function u2(a){this.c=null
this.a=0
this.b=a},
tY:function tY(){},
tL:function tL(a,b){this.a=a
this.b=b},
j4:function j4(){},
lg:function lg(){this.a=0},
tX:function tX(a,b){this.a=a
this.b=b},
mU:function mU(){},
f6:function f6(a){this.a=a},
lk:function lk(a,b){this.a=a
this.b=b
this.c=0},
jg:function jg(){},
lX:function lX(a,b,c){this.a=a
this.b=b
this.$ti=c},
e7:function e7(a,b,c){this.a=a
this.b=b
this.$ti=c},
jh:function jh(){},
ap:function ap(){},
nD:function nD(a){this.a=a},
dI:function dI(){},
hf:function hf(a,b){this.a=a
this.b=b},
jQ:function jQ(a,b){this.a=a
this.b=b},
pg:function pg(){},
jS:function jS(a){this.b=a},
vf:function vf(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
jR:function jR(a){this.a=a},
vi:function vi(){},
vj:function vj(a,b){this.a=a
this.b=b},
vh:function vh(a,b,c){this.c=a
this.a=b
this.b=c},
jT:function jT(){},
jU:function jU(a){this.a=a},
kH:function kH(){},
vL:function vL(a,b){this.a=a
this.b=b},
iw:function iw(){},
lZ:function lZ(a){this.a=a},
vX:function vX(a,b,c){this.a=a
this.b=b
this.c=c},
kY:function kY(){},
kZ:function kZ(){},
m6:function m6(a){this.b=this.a=0
this.c=a},
w_:function w_(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
hT:function hT(a){this.a=a},
cN:function cN(a){this.a=a
this.b=16
this.c=0},
mi:function mi(){},
y9(a,b){var s=A.Eu(a,b)
if(s==null)throw A.b(A.a1("Could not parse BigInt",a,null))
return s},
Er(a,b){var s,r,q=$.cv(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.b4(0,$.yI()).f1(0,A.tZ(s))
s=0
o=0}}if(b)return q.bH(0)
return q},
zX(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
Es(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.v.ty(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.zX(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.zX(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.cv()
l=A.bq(j,i)
return new A.aA(l===0?!1:c,i,l)},
Eu(a,b){var s,r,q,p,o
if(a==="")return null
s=$.C3().dD(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.Er(p,q)
if(o!=null)return A.Es(o,2,q)
return null},
bq(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
y7(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
tZ(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bq(4,s)
return new A.aA(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bq(1,s)
return new A.aA(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.c.a8(a,16)
r=A.bq(2,s)
return new A.aA(r===0?!1:o,s,r)}r=B.c.R(B.c.glK(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.c.R(a,65536)}r=A.bq(r,s)
return new A.aA(r===0?!1:o,s,r)},
y8(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.C(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.C(d)
d[s]=0}return b+c},
A2(a,b,c,d){var s,r,q,p,o,n=B.c.R(c,16),m=B.c.aG(c,16),l=16-m,k=B.c.c_(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.c.dY(p,l)
r&2&&A.C(d)
d[s+n+1]=(o|q)>>>0
q=B.c.c_((p&k)>>>0,m)}r&2&&A.C(d)
d[n]=q},
zY(a,b,c,d){var s,r,q,p,o=B.c.R(c,16)
if(B.c.aG(c,16)===0)return A.y8(a,b,o,d)
s=b+o+1
A.A2(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.C(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
Et(a,b,c,d){var s,r,q,p,o=B.c.R(c,16),n=B.c.aG(c,16),m=16-n,l=B.c.c_(1,n)-1,k=B.c.dY(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.c.c_((q&l)>>>0,m)
s&2&&A.C(d)
d[r]=(p|k)>>>0
k=B.c.dY(q,n)}s&2&&A.C(d)
d[j]=k},
u_(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
Ep(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.C(e)
e[q]=r&65535
r=B.c.a8(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.C(e)
e[q]=r&65535
r=B.c.a8(r,16)}s&2&&A.C(e)
e[b]=r},
li(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.C(e)
e[q]=r&65535
r=0-(B.c.a8(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.C(e)
e[q]=r&65535
r=0-(B.c.a8(r,16)&1)}},
A3(a,b,c,d,e,f){var s,r,q,p,o,n
if(a===0)return
for(s=d.$flags|0,r=0;--f,f>=0;e=o,c=q){q=c+1
p=a*b[c]+d[e]+r
o=e+1
s&2&&A.C(d)
d[e]=p&65535
r=B.c.R(p,65536)}for(;r!==0;e=o){n=d[e]+r
o=e+1
s&2&&A.C(d)
d[e]=n&65535
r=B.c.R(n,65536)}},
Eq(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.c.kk((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
H6(a){return A.ms(a)},
xx(a,b){return new A.jA(new WeakMap(),a,b.i("jA<0>"))},
xy(a){if(A.c9(a)||typeof a=="number"||typeof a=="string"||a instanceof A.fj)A.D2(a)},
D2(a){throw A.b(A.b0(a,"object","Expandos are not allowed on strings, numbers, bools, records or null"))},
uK(a,b){var s=$.C4()
s=s==null?null:new s(A.dp(A.HG(a,b),1))
return new A.lw(s,b.i("lw<0>"))},
au(a){var s=A.hD(a,null)
if(s!=null)return s
throw A.b(A.a1(a,null,null))},
GU(a){var s=A.DI(a)
if(s!=null)return s
throw A.b(A.a1("Invalid double",a,null))},
D1(a,b){a=A.aC(a,new Error())
a.stack=b.m(0)
throw a},
aE(a,b,c,d){var s,r=c?J.zg(a,d):J.xE(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
jW(a,b,c){var s,r=A.l([],c.i("y<0>"))
for(s=J.K(a);s.k();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
P(a,b){var s,r
if(Array.isArray(a))return A.l(a.slice(0),b.i("y<0>"))
s=A.l([],b.i("y<0>"))
for(r=J.K(a);r.k();)s.push(r.gn())
return s},
d0(a,b){var s=A.jW(a,!1,b)
s.$flags=3
return s},
d9(a,b,c){var s,r,q,p,o
A.aW(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.ak(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.zw(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.DZ(a,b,c)
if(r)a=J.xq(a,c)
if(b>0)a=J.mB(a,b)
s=A.P(a,t.S)
return A.zw(s)},
DZ(a,b,c){var s=a.length
if(b>=s)return""
return A.DK(a,b,c==null||c>s?s:c)},
ag(a,b){return new A.ex(a,A.xG(a,!1,b,!1,!1,""))},
H5(a,b){return a==null?b==null:a===b},
rq(a,b,c){var s=J.K(b)
if(!s.k())return a
if(c.length===0){do a+=A.r(s.gn())
while(s.k())}else{a+=A.r(s.gn())
while(s.k())a=a+c+A.r(s.gn())}return a},
y2(){var s,r,q=A.DD()
if(q==null)throw A.b(A.Y("'Uri.base' is not supported"))
s=$.zM
if(s!=null&&q===$.zL)return s
r=A.kX(q)
$.zM=r
$.zL=q
return r},
fs(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.k){s=$.C5()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.i.v(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bd(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
F6(a){var s,r,q
if(!$.C6())return A.F7(a)
s=new URLSearchParams()
a.ad(0,new A.vW(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.q(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
xW(){return A.aa(new Error())},
xv(a,b,c,d,e,f,g){var s=A.DL(a,b,c,d,e,f,g,0,!0)
return new A.b1(s==null?new A.ob(a,b,c,d,e,f,g,0).$0():s,0,!0)},
CU(){return new A.b1(Date.now(),0,!1)},
oc(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.ak(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.ak(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.b0(b,s,u.B))
A.bF(c,"isUtc",t.y)
return a},
CV(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
z1(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
jq(a){if(a>=10)return""+a
return"0"+a},
dF(a,b,c){return new A.ay(a+1000*b+1e6*c)},
ev(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.b0(b,"name","No enum value with that name"))},
jy(a){if(typeof a=="number"||A.c9(a)||a==null)return J.av(a)
if(typeof a=="string")return JSON.stringify(a)
return A.zv(a)},
z4(a,b){A.bF(a,"error",t.K)
A.bF(b,"stackTrace",t.l)
A.D1(a,b)},
j2(a){return new A.j1(a)},
O(a,b){return new A.bv(!1,null,b,a)},
b0(a,b,c){return new A.bv(!0,a,b,c)},
iZ(a,b){return a},
aI(a){var s=null
return new A.cC(s,s,!1,s,s,a)},
r1(a,b){return new A.cC(null,null,!0,a,b,"Value not in range")},
ak(a,b,c,d,e){return new A.cC(b,c,!0,a,d,"Invalid value")},
zz(a,b,c,d){if(a<b||a>c)throw A.b(A.ak(a,b,c,d,null))
return a},
aX(a,b,c){if(0>a||a>c)throw A.b(A.ak(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.ak(b,a,c,"end",null))
return b}return c},
aW(a,b){if(a<0)throw A.b(A.ak(a,0,null,b,null))
return a},
zd(a,b){var s=b.b
return new A.h7(s,!0,a,null,"Index out of range")},
jI(a,b,c,d,e){return new A.h7(b,!0,a,e,"Index out of range")},
Dc(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.jI(a,b,c,d,e==null?"index":e))
return a},
Y(a){return new A.cq(a)},
zJ(a){return new A.kQ(a)},
w(a){return new A.bf(a)},
ao(a){return new A.jj(a)},
z5(a){return new A.lv(a)},
a1(a,b,c){return new A.b3(a,b,c)},
De(a,b,c){var s,r
if(A.yx(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.l([],t.s)
$.ei.push(a)
try{A.FU(a,s)}finally{$.ei.pop()}r=A.rq(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
pd(a,b,c){var s,r
if(A.yx(a))return b+"..."+c
s=new A.ab(b)
$.ei.push(a)
try{r=s
r.a=A.rq(r.a,a,", ")}finally{$.ei.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
FU(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
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
d4(a,b,c,d,e,f,g){var s
if(B.h===c){s=J.a0(a)
b=J.a0(b)
return A.eW(A.an(A.an($.ep(),s),b))}if(B.h===d){s=J.a0(a)
b=J.a0(b)
c=J.a0(c)
return A.eW(A.an(A.an(A.an($.ep(),s),b),c))}if(B.h===e){s=J.a0(a)
b=J.a0(b)
c=J.a0(c)
d=J.a0(d)
return A.eW(A.an(A.an(A.an(A.an($.ep(),s),b),c),d))}if(B.h===f){s=J.a0(a)
b=J.a0(b)
c=J.a0(c)
d=J.a0(d)
e=J.a0(e)
return A.eW(A.an(A.an(A.an(A.an(A.an($.ep(),s),b),c),d),e))}if(B.h===g){s=J.a0(a)
b=J.a0(b)
c=J.a0(c)
d=J.a0(d)
e=J.a0(e)
f=J.a0(f)
return A.eW(A.an(A.an(A.an(A.an(A.an(A.an($.ep(),s),b),c),d),e),f))}s=J.a0(a)
b=J.a0(b)
c=J.a0(c)
d=J.a0(d)
e=J.a0(e)
f=J.a0(f)
g=J.a0(g)
g=A.eW(A.an(A.an(A.an(A.an(A.an(A.an(A.an($.ep(),s),b),c),d),e),f),g))
return g},
zq(a){var s,r,q=$.ep()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.A)(a),++r)q=A.an(q,J.a0(a[r]))
return A.eW(q)},
Fs(a,b){return 65536+((a&1023)<<10)+(b&1023)},
kX(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.zK(a4<a4?B.a.q(a5,0,a4):a5,5,a3).gmw()
else if(s===32)return A.zK(B.a.q(a5,5,a4),0,a3).gmw()}r=A.aE(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.AY(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.AY(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.a.a6(a5,"\\",n))if(p>0)h=B.a.a6(a5,"\\",p-1)||B.a.a6(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.a.a6(a5,"..",n)))h=m>n+2&&B.a.a6(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.a.a6(a5,"file",0)){if(p<=0){if(!B.a.a6(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.a.q(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.a.cW(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.a6(a5,"http",0)){if(i&&o+3===n&&B.a.a6(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.cW(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.a6(a5,"https",0)){if(i&&o+4===n&&B.a.a6(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.cW(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.bQ(a4<a5.length?B.a.q(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.yh(a5,0,q)
else{if(q===0)A.fr(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Ar(a5,c,p-1):""
a=A.Ap(a5,p,o,!1)
i=o+1
if(i<n){a0=A.hD(B.a.q(a5,i,n),a3)
d=A.vS(a0==null?A.x(A.a1("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Aq(a5,n,m,a3,j,a!=null)
a2=m<l?A.vT(a5,m+1,l,a3):a3
return A.iF(j,b,a,d,a1,a2,l<a4?A.Ao(a5,l+1,a4):a3)},
E8(a){return A.yk(a,0,a.length,B.k,!1)},
kW(a,b,c){throw A.b(A.a1("Illegal IPv4 address, "+a,b,c))},
E5(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.kW("each part must be in the range 0..255",a,r)}A.kW("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.kW(k,a,q)}l=p+1
s&2&&A.C(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.kW(k,a,q)
p=l}A.kW("IPv4 address should contain exactly 4 parts",a,q)},
E6(a,b,c){var s
if(b===c)throw A.b(A.a1("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.E7(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.zN(a,b,c)
return!0},
E7(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
for(s=b;;s=r){if(s<c){r=s+1
q=a.charCodeAt(s)
if((q^48)<=9)continue
p=q|32
if(p>=97&&p<=102)continue
if(q===46){if(r-1===b)return new A.b3(o,a,r)
s=r
break}return new A.b3("Unexpected character",a,r-1)}if(s-1===b)return new A.b3(o,a,s)
return new A.b3("Missing '.' in IPvFuture address",a,s)}if(s===c)return new A.b3("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if((u.S.charCodeAt(a.charCodeAt(s))&16)!==0){++s
if(s<c)continue
return null}return new A.b3("Invalid IPvFuture address character",a,s)}},
zN(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.rQ(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.E5(a1,o,a3,s,q*2)
q+=2
p=a3
break}a0.$2(a,o)}break}g=q*2
s[g]=B.c.a8(n,8)
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
B.d.ab(s,b,16,s,c)
B.d.hm(s,c,b,0)}}return s},
iF(a,b,c,d,e,f,g){return new A.iE(a,b,c,d,e,f,g)},
Al(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
fr(a,b,c){throw A.b(A.a1(c,a,b))},
F3(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.D(q,"/")){s=A.Y("Illegal path character "+q)
throw A.b(s)}}},
vS(a,b){if(a!=null&&a===A.Al(b))return null
return a},
Ap(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.fr(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.F4(a,r,s)
if(p<s){o=p+1
q=A.Au(a,B.a.a6(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.E6(a,r,s)
m=B.a.q(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.bU(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.Au(a,B.a.a6(a,"25",o)?s+3:o,c,"%25")}else q=""
A.zN(a,b,s)
return"["+B.a.q(a,b,s)+q+"]"}return A.F9(a,b,c)},
F4(a,b,c){var s=B.a.bU(a,"%",b)
return s>=b&&s<c?s:c},
Au(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.ab(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.yi(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.ab("")
m=i.a+=B.a.q(a,r,s)
if(n)o=B.a.q(a,s,s+3)
else if(o==="%")A.fr(a,s,"ZoneID should not contain % anymore")
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
m=A.yg(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.q(a,b,c)
if(r<c){j=B.a.q(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
F9(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.yi(a,s,!0)
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
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.fr(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.q(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.ab("")
m=q}else m=q
m.a+=l
k=A.yg(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.q(a,b,c)
if(r<c){l=B.a.q(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
yh(a,b,c){var s,r,q
if(b===c)return""
if(!A.An(a.charCodeAt(b)))A.fr(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.fr(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.q(a,b,c)
return A.F2(r?a.toLowerCase():a)},
F2(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Ar(a,b,c){if(a==null)return""
return A.iG(a,b,c,16,!1,!1)},
Aq(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.iG(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.O(s,"/"))s="/"+s
return A.F8(s,e,f)},
F8(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.O(a,"/")&&!B.a.O(a,"\\"))return A.yj(a,!s||c)
return A.eg(a)},
vT(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.O("Both query and queryParameters specified",null))
return A.iG(a,b,c,256,!0,!1)}if(d==null)return null
return A.F6(d)},
F7(a){var s={},r=new A.ab("")
s.a=""
a.ad(0,new A.vU(new A.vV(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
Ao(a,b,c){if(a==null)return null
return A.iG(a,b,c,256,!0,!1)},
yi(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.wX(s)
p=A.wX(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bd(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.q(a,b,b+3).toUpperCase()
return null},
yg(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.c.j1(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.d9(s,0,null)},
iG(a,b,c,d,e,f){var s=A.At(a,b,c,d,e,f)
return s==null?B.a.q(a,b,c):s},
At(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.yi(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.fr(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.yg(o)}if(p==null){p=new A.ab("")
l=p}else l=p
l.a=(l.a+=B.a.q(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.q(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
As(a){if(B.a.O(a,"."))return!0
return B.a.bT(a,"/.")!==-1},
eg(a){var s,r,q,p,o,n
if(!A.As(a))return a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.b.L(s,"/")},
yj(a,b){var s,r,q,p,o,n
if(!A.As(a))return!b?A.Am(a):a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.ga_(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.Am(s[0])
return B.b.L(s,"/")},
Am(a){var s,r,q=a.length
if(q>=2&&A.An(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.q(a,0,s)+"%3A"+B.a.ac(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
Fa(a,b){if(a.ve("package")&&a.c==null)return A.B_(b,0,b.length)
return-1},
F5(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.O("Invalid URL encoding",null))}}return s},
yk(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.k===d)return B.a.q(a,b,c)
else p=new A.bY(B.a.q(a,b,c))
else{p=A.l([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.O("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.O("Truncated URI",null))
p.push(A.F5(a,o+1))
o+=2}else p.push(r)}}return d.hg(p)},
An(a){var s=a|32
return 97<=s&&s<=122},
zK(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.l([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.a1(k,a,r))}}if(q<0&&r>b)throw A.b(A.a1(k,a,r))
while(p!==44){j.push(r);++r
for(o=-1;r<s;++r){p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.b.ga_(j)
if(p!==44||r!==n+7||!B.a.a6(a,"base64",n+1))throw A.b(A.a1("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.aq.vx(a,m,s)
else{l=A.At(a,m,s,256,!0,!1)
if(l!=null)a=B.a.cW(a,m,s,l)}return new A.rP(a,j,c)},
AY(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
Ad(a){if(a.b===7&&B.a.O(a.a,"package")&&a.c<=0)return A.B_(a.a,a.e,a.f)
return-1},
B_(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
Fq(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},
u0:function u0(){},
u1:function u1(){},
lw:function lw(a,b){this.a=a
this.$ti=b},
vW:function vW(a){this.a=a},
ob:function ob(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
b1:function b1(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function ay(a){this.a=a},
uF:function uF(){},
a5:function a5(){},
j1:function j1(a){this.a=a},
cH:function cH(){},
bv:function bv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cC:function cC(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h7:function h7(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cq:function cq(a){this.a=a},
kQ:function kQ(a){this.a=a},
bf:function bf(a){this.a=a},
jj:function jj(a){this.a=a},
kc:function kc(){},
hO:function hO(){},
lv:function lv(a){this.a=a},
b3:function b3(a,b,c){this.a=a
this.b=b
this.c=c},
jK:function jK(){},
n:function n(){},
X:function X(a,b,c){this.a=a
this.b=b
this.$ti=c},
Q:function Q(){},
j:function j(){},
m0:function m0(){},
kD:function kD(){this.b=this.a=0},
r6:function r6(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
ab:function ab(a){this.a=a},
rQ:function rQ(a){this.a=a},
iE:function iE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
vV:function vV(a,b){this.a=a
this.b=b},
vU:function vU(a){this.a=a},
rP:function rP(a,b,c){this.a=a
this.b=b
this.c=c},
bQ:function bQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
lq:function lq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
jA:function jA(a,b,c){this.a=a
this.b=b
this.$ti=c},
Dn(a){return a},
Dh(a){return a},
xZ(a){return a},
Df(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.AB(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
D7(a){return new v.G.Promise(A.bD(new A.oD(a)))},
ka:function ka(a){this.a=a},
oD:function oD(a){this.a=a},
oB:function oB(a){this.a=a},
oC:function oC(a){this.a=a},
wn(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.Fi,a)
s[$.eo()]=a
return s},
ct(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.Fj,a)
s[$.eo()]=a
return s},
bD(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.Fk,a)
s[$.eo()]=a
return s},
mk(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.Fl,a)
s[$.eo()]=a
return s},
fw(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.Fm,a)
s[$.eo()]=a
return s},
yl(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.Fn,a)
s[$.eo()]=a
return s},
Fi(a){return a.$0()},
Fj(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
Fk(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
Fl(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
Fm(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
Fn(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
AO(a){return a==null||A.c9(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
el(a){if(A.AO(a))return a
return new A.x1(new A.df(t.mp)).$1(a)},
yu(a,b){return a[b]},
B7(a,b,c){return a[b].apply(a,c)},
GG(a,b){var s,r
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
a4(a,b){var s=new A.p($.t,b.i("p<0>")),r=new A.az(s,b.i("az<0>"))
a.then(A.dp(new A.x7(r),1),A.dp(new A.x8(r),1))
return s},
AN(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
wD(a){if(A.AN(a))return a
return new A.wE(new A.df(t.mp)).$1(a)},
x1:function x1(a){this.a=a},
x7:function x7(a){this.a=a},
x8:function x8(a){this.a=a},
wE:function wE(a){this.a=a},
Bq(a,b){return Math.max(a,b)},
zx(){return B.av},
zy(){return $.xk()},
vb:function vb(){},
vc:function vc(a){this.a=a},
jx:function jx(){},
W:function W(){},
mW:function mW(a){this.a=a},
mX:function mX(a){this.a=a},
mY:function mY(a,b){this.a=a
this.b=b},
mZ:function mZ(a){this.a=a},
n_:function n_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n0:function n0(a){this.a=a},
jt:function jt(a){this.$ti=a},
hb:function hb(a,b){this.a=a
this.$ti=b},
dN:function dN(a,b){this.a=a
this.$ti=b},
fq:function fq(){},
eN:function eN(a,b){this.a=a
this.$ti=b},
fh:function fh(a,b,c){this.a=a
this.b=b
this.c=c},
hk:function hk(a,b,c){this.a=a
this.b=b
this.$ti=c},
js:function js(){},
zp(){throw A.b(A.Y(u.O))},
k9:function k9(){},
kT:function kT(){},
aB(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.d9(m,0,null)},
bZ:function bZ(a){this.a=a},
es:function es(){this.a=null},
jE:function jE(){},
oI:function oI(){},
lV(a){var s=new Uint32Array(A.br(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.lU(s,r,a,q,new Uint32Array(16))},
lT:function lT(){},
vy:function vy(){},
lU:function lU(a,b,c,d,e){var _=this
_.y=a
_.z=b
_.a=c
_.c=null
_.d=d
_.e=0
_.f=e
_.r=0
_.w=!1},
kq:function kq(a,b){this.a=a
this.b=b},
j6:function j6(){},
j7:function j7(){},
j8:function j8(){},
j9:function j9(){},
mQ:function mQ(){},
B2(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.kq("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.dz)){s=J.av(a)
if(B.a.O(s,"TypeError: "))s=B.a.ac(s,11)
a=new A.dz(s,b.b)}return a},
AS(a,b,c){A.z4(A.B2(a,c),b)},
Fh(a,b){return new A.cM(new A.wh(a,b),t.fb)},
fz(a,b,c){return A.G3(a,b,c)},
G3(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$fz=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:e={}
d=a0.body
c=d==null?null:d.getReader()
s=c==null?3:4
break
case 3:s=5
return A.a(a1.p(),$async$fz)
case 5:s=1
break
case 4:e.a=null
e.b=e.c=!1
a1.f=new A.wo(e)
a1.r=new A.wp(e,c,a)
d=t.Z,k=t.m,j=t.D,i=t.h
case 6:n=null
p=9
s=12
return A.a(A.a4(c.read(),k),$async$fz)
case 12:n=a3
p=2
s=11
break
case 9:p=8
b=o.pop()
m=A.M(b)
l=A.aa(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.B2(m,a)
k=l
j=a1.b
if(j>=4)A.x(a1.bq())
if((j&1)!==0){j=a1.gaH()
j.aB(d,k==null?B.H:k)}s=15
return A.a(a1.p(),$async$fz)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a1.tA()
s=7
break}else{g=n.value
g.toString
d.a(g)
f=a1.b
if(f>=4)A.x(a1.bq())
if((f&1)!==0)a1.gaH().aq(g)}g=a1.b
s=((g&1)!==0?(a1.gaH().e&4)!==0:(g&2)===0)?16:17
break
case 16:g=e.a
s=18
return A.a((g==null?e.a=new A.az(new A.p($.t,j),i):g).a,$async$fz)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fz,r)},
jd:function jd(a){this.b=!1
this.c=a},
mT:function mT(a){this.a=a},
wh:function wh(a,b){this.a=a
this.b=b},
wo:function wo(a){this.a=a},
wp:function wp(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a){this.a=a},
mV:function mV(a){this.a=a},
yY(a,b){return new A.dz(a,b)},
dz:function dz(a,b){this.a=a
this.b=b},
k3:function k3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
Dx(a,b){var s=t.N,r=A.l([],t.e8),q=$.yD()
if(!q.b.test(a))A.x(A.b0(a,"method","Not a valid method"))
return new A.pU(A.E(s,s),r,a,b,A.hg(new A.j8(),new A.j9(),s,s))},
pU:function pU(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
pV:function pV(a,b){this.a=a
this.b=b},
DN(a,b){var s=new Uint8Array(0),r=$.yD()
if(!r.b.test(a))A.x(A.b0(a,"method","Not a valid method"))
r=t.N
return new A.r4(s,a,b,A.hg(new A.j8(),new A.j9(),r,r))},
r4:function r4(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
hQ:function hQ(){},
kG:function kG(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
CG(a){return a.toLowerCase()},
fN:function fN(a,b,c){this.a=a
this.c=b
this.$ti=c},
Ds(a){return A.HF("media type",a,new A.pE(a))},
xL(a,b,c){var s=t.N
if(c==null)s=A.E(s,s)
else{s=new A.fN(A.GH(),A.E(s,t.gc),t.kj)
s.E(0,c)}return new A.eB(a.toLowerCase(),b.toLowerCase(),new A.f_(s,t.ph))},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
pE:function pE(a){this.a=a},
pG:function pG(a){this.a=a},
pF:function pF(){},
GW(a){var s
a.lY($.Cg(),"quoted string")
s=a.gjx().h(0,0)
return A.BC(B.a.q(s,1,s.length-1),$.Cf(),new A.wP(),null)},
wP:function wP(){},
aj(a){var s,r=new A.ab("")
A.fH(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
yC(a){var s,r,q
for(s=new A.r6(a),r=0;s.k();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
fH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(b==null){a.a+="null"
return 4}if(A.c9(b)){s=b?"true":"false"
a.a+=s
return b?4:5}if(A.aD(b)){r=B.c.m(b)
a.a+=r
return r.length}if(typeof b=="number"){r=isFinite(b)&&b===B.v.w8(b)&&Math.abs(b)<1e15?B.c.m(B.v.mq(b)):B.v.m(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.v.m(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.e.a4(b,h)
a.a+=r
return A.yC(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.J(b),p<s.gl(b);++p){if(p>0){a.a+=",";++q}q+=A.fH(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.l([],t.l5)
for(s=J.K(b.gP());s.k();){n=s.gn()
r=J.av(n)
if(B.b.cJ(o,new A.xh(r)))throw A.b(A.O('Cannot canonicalize map: keys collide after toString() ("'+r+'").',h))
o.push(new A.at(r,n))}B.b.c1(o,new A.xi())
a.a+="{"
for(s=o.length,q=1,m=!0,l=0;l<o.length;o.length===s||(0,A.A)(o),++l,m=!1){k=o[l]
if(!m){a.a+=",";++q}j=B.e.a4(k.a,h)
a.a+=j
i=A.yC(j)
a.a+=":"
q=q+i+1+A.fH(a,b.h(0,k.b))}a.a+="}"
return q+1}throw A.b(A.O("Cannot canonicalize value of type "+J.cP(b).m(0),h))},
xh:function xh(a){this.a=a},
xi:function xi(){},
DU(a){var s,r,q,p=A.ag("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0).dD(a)
if(p==null)return B.co
s=p.b
r=s[1]
r.toString
r=A.au(r)
q=s[2]
q.toString
q=A.au(q)
s=s[3]
s=A.hD(s==null?"":s,null)
return new A.ee(r,q,s==null?0:s)},
dX(a,b){return A.DV(a,b)},
DV(a1,a2){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dX=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:b=J
a=J
s=3
return A.a(a1.aR("SELECT sqlite_version() AS v"),$async$dX)
case 3:e=b.U(a.bW(a4),"v")
e.toString
A.I(e)
k=t.v
b=A
a=A
a0=J
s=4
return A.a(a1.aR("PRAGMA compile_options"),$async$dX)
case 4:j=b.P(new a.bp(a0.aG(a4,new A.re(),t.X),k),k.i("n.E"))
n=B.b.cJ(j,new A.rf())
s=!n?5:6
break
case 5:p=8
s=11
return A.a(a1.K("CREATE VIRTUAL TABLE lp__fts5_probe USING fts5(lp__probe)"),$async$dX)
case 11:s=12
return A.a(a1.K("DROP TABLE lp__fts5_probe"),$async$dX)
case 12:n=!0
p=2
s=10
break
case 8:p=7
d=o.pop()
n=!1
s=10
break
case 7:s=2
break
case 10:case 6:m=null
k=a2===B.aP
s=k?13:14
break
case 13:p=16
s=19
return A.a(a1.aR("PRAGMA journal_mode"),$async$dX)
case 19:l=a4
if(J.iY(l))m=A.ai(J.bW(J.bW(l).gbh()))
p=2
s=18
break
case 16:p=15
c=o.pop()
m=null
s=18
break
case 15:s=2
break
case 18:case 14:h=A.DU(e)
g=h.a
if(g<=3)f=g===3&&h.b>=37
else f=!0
k=k&&J.u(m,"wal")
q=new A.kC(e,f,k,n,a2)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dX,r)},
kh:function kh(a,b){this.a=a
this.b=b},
kC:function kC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
re:function re(){},
rf:function rf(){},
fO:function fO(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
aN:function aN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
a_:function a_(a,b){this.a=a
this.b=b},
n1:function n1(a,b){this.a=a
this.b=b},
n2:function n2(){},
n3:function n3(){},
yQ(a){return new Uint8Array(A.br(a))},
Ef(a,b,c){var s,r,q,p,o,n,m=new Uint8Array(16)
a.eu(m,m)
s=new Uint8Array(16)
B.d.af(s,0,12,b)
s[15]=1
r=A.zS(a,s,c)
q=A.zU(m,r)
p=new Uint8Array(16)
o=new Uint8Array(16)
a.eu(s,o)
for(n=0;n<16;++n)p[n]=q[n]^o[n]
return new A.at(r,p)},
Ee(a,b,c,d){var s,r,q,p,o,n=new Uint8Array(16)
a.eu(n,n)
s=new Uint8Array(16)
B.d.af(s,0,12,b)
s[15]=1
r=A.zU(n,c)
q=new Uint8Array(16)
a.eu(s,q)
for(p=0,o=0;o<16;++o)p|=r[o]^q[o]^d[o]
if(p!==0)return null
return A.zS(a,s,c)},
zS(a,b,c){var s,r,q,p,o,n=c.length,m=new Uint8Array(n),l=new Uint8Array(A.br(b))
A.zV(l)
s=new Uint8Array(16)
for(r=0;r<n;){a.eu(l,s)
A.zV(l)
q=Math.min(16,n-r)
for(p=0;p<q;++p){o=r+p
m[o]=c[o]^s[p]}r+=q}return m},
zV(a){var s,r,q
for(s=a.$flags|0,r=15;r>=12;--r){q=a[r]
s&2&&A.C(a)
a[r]=q+1&255
if(a[r]!==0)break}},
zU(a,b){var s,r,q,p,o,n,m,l=new Uint8Array(16),k=new Uint8Array(16)
for(s=b.length,r=0;r<s;r=p){q=Math.min(16,s-r)
B.d.hm(k,0,16,0)
p=r+q
B.d.af(k,0,q,new Uint8Array(b.subarray(r,A.cs(r,p,s))))
for(o=0;o<16;++o)l[o]=l[o]^k[o]
A.zT(l,a)}n=new Uint8Array(16)
m=s*8
for(o=7;o>=0;--o)n[15-o]=B.c.j1(m,o*8)&255
for(o=0;o<16;++o)l[o]=l[o]^n[o]
A.zT(l,a)
return l},
zT(a,b){var s,r,q,p=t.t,o=A.l([(b[0]<<24|b[1]<<16|b[2]<<8|b[3])>>>0,(b[4]<<24|b[5]<<16|b[6]<<8|b[7])>>>0,(b[8]<<24|b[9]<<16|b[10]<<8|b[11])>>>0,(b[12]<<24|b[13]<<16|b[14]<<8|b[15])>>>0],p),n=A.l([0,0,0,0],p)
for(s=0;s<128;++s){if((B.c.j1(a[s>>>3],7-(s&7))&1)!==0){n[0]=(n[0]^o[0])>>>0
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
zR(a){return(B.j[a>>>24&255]<<24|B.j[a>>>16&255]<<16|B.j[a>>>8&255]<<8|B.j[a&255])>>>0},
tH(a){var s=B.j[a>>>24&255]
return(A.e3(s)<<24|s<<16|s<<8|A.e3(s)^s)>>>0},
tI(a){var s=B.j[a>>>16&255]
return((A.e3(s)^s)<<24|A.e3(s)<<16|s<<8|s)>>>0},
tJ(a){var s=B.j[a>>>8&255]
return(s<<24|(A.e3(s)^s)<<16|A.e3(s)<<8|s)>>>0},
tK(a){var s=B.j[a&255]
return(s<<24|s<<16|(A.e3(s)^s)<<8|A.e3(s))>>>0},
e3(a){var s=a<<1
return(a&128)!==0?(s^283)&255:s&255},
mC:function mC(a,b){this.b=a
this.c=b},
tG:function tG(a){this.a=a},
Bm(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.bF
if(r===B.C){r=a.f
r.toString
r=!B.b.D(r,b)}else r=!1
if(r)return B.bL
return s
case 1:case 4:return!A.aD(b)?B.bG:s
case 2:return typeof b!="number"?B.bH:s
case 3:return!A.c9(b)?B.bI:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.bJ:s
case 7:return!t.j.b(b)?B.bK:s}},
dq(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=a.gdA(),i=t.N,h=t.X,g=A.m(["id",e],i,h)
for(s=a.c,r=s.length,q=c==null,p=0;p<s.length;s.length===r||(0,A.A)(s),++p){o=s[p]
if(q)n=null
else n=c
m=o.a
g.j(0,m,A.AE(o,f.h(0,m),n))}l=A.E(i,h)
for(i=new A.aH(f,A.o(f).i("aH<1,2>")).gu(0);i.k();){k=i.d
h=k.a
if(h==="id"||h==="archived"||j.D(0,h))continue
l.j(0,h,k.b)}g.j(0,"extra",l.a===0?"":A.aj(l))
g.j(0,"archived",b?1:0)
g.j(0,"hidden",0)
return g},
Bk(a,b,c,d,e){var s
if(d==null)s=null
else s=d
return A.AE(b,c,s)},
ca(a,b,c,d){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.m(["id",b.h(0,"id")],j,i)
for(s=a.c,r=s.length,q=a.a,p=0;p<s.length;s.length===r||(0,A.A)(s),++p){o=s[p]
n=o.a
h.j(0,n,A.Ft(o,b.h(0,n),c,d,q))}h.j(0,k,J.u(b.h(0,k),1))
m=b.h(0,"extra")
if(typeof m=="string"&&m.length!==0){l=B.e.aE(m,null)
if(t.f.b(l))h.E(0,A.ba(l,j,i))}return h},
Bf(a,b,c,d){var s,r=A.l([],t.d)
for(s=J.K(b);s.k();)r.push(A.ca(a,s.gn(),c,d))
return r},
Ft(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i=null
if(b==null)return i
if(a.e){if(c==null)s=i
else s=c
if(s==null)throw A.b(A.w('Field "'+a.a+u.C))
r=B.b3.v(A.I(b))
q=r.length
if(q<28)A.x(A.O("Ciphertext too short for AES-GCM (minimum 28 bytes).",i))
p=new Uint8Array(A.br(B.d.S(r,0,12)))
q-=16
o=new Uint8Array(A.br(B.d.aX(r,q)))
n=new Uint8Array(A.br(B.d.S(r,12,q)))
m=A.Ee(s.b,p,n,o)
if(m==null)A.x(A.w("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
l=B.k.hg(m)
k=a.b
A:{if(B.y===k){r=l==="1"||l==="true"
break A}if(B.Z===k||B.a0===k){r=A.au(l)
break A}if(B.a_===k){r=A.GU(l)
break A}if(B.I===k||B.J===k){r=B.e.aE(l,i)
break A}r=l
break A}return r}j=a.b
B:{if(B.y===j){r=J.u(b,1)
break B}if(B.I===j||B.J===j){r=B.e.aE(A.I(b),i)
break B}r=b
break B}return r},
AE(a,b,c){var s,r
if(b==null)return null
if(a.e){if(c==null)throw A.b(A.w('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.u(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.av(b)
break
case 6:case 7:s=A.aj(b)
break
default:A.I(b)
s=b}r=c.uq(B.i.v(s))
return B.aq.gjk().v(r)}switch(a.b.a){case 3:return J.u(b,!0)?1:0
case 6:case 7:return A.aj(b)
default:return b}},
b_(a,b){var s,r,q,p,o,n="archived",m=a.gdA(),l=b.h(0,"id"),k=A.m(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.A)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.y?J.u(o,!0):o)}for(l=b.gbm(),l=l.gu(l);l.k();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.D(0,p))continue
k.j(0,p,s.b)}if(J.u(b.h(0,n),!0))k.j(0,n,!0)
return k},
B8(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=b.gdA(),h=A.l([],t.iE)
h.push(new A.at("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)h.push(new A.at(o,p.b===B.y?J.u(n,!0):n))}for(s=new A.aH(c,A.o(c).i("aH<1,2>")).gu(0);s.k();){m=s.d
r=m.a
if(r==="id"||r==="archived"||i.D(0,r))continue
h.push(new A.at(r,m.b))}if(J.u(c.h(0,"archived"),!0))h.push(B.cn)
B.b.c1(h,new A.wx())
a.a+="{"
for(s=h.length,l=1,k=!0,q=0;q<h.length;h.length===s||(0,A.A)(h),++q,k=!1){r=h[q]
if(!k){a.a+=",";++l}j=B.e.a4(r.a,null)
a.a+=j
o=A.yC(j)
a.a+=":"
l=l+o+1+A.fH(a,r.b)}a.a+="}"
return l+1},
cy:function cy(a,b){this.a=a
this.b=b},
wx:function wx(){},
wN(a2,a3,a4,a5){var s=0,r=A.h(t.G),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$wN=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)A:switch(s){case 0:a0=a4.b
a1=a4.r
if(a0==="explain")a1="EXPLAIN QUERY PLAN "+a1
if(a0==="query"&&a5===0){q=A.m(["items",A.l([],t.d),"lastRow",null,"hasMore",!1],t.N,t.X)
s=1
break}s=3
return A.a(a3.$2(a1,a4.w),$async$wN)
case 3:p=a7
switch(a0){case"query":a0=a5==null
o=!a0&&J.aw(p)>a5
n=a0?p:J.xq(p,a5).dS(0)
m=A.Bf(a2.aa(a4.d).a,n,a2.y,a2.z)
l=a4.y
if(l==null)k=m
else{a0=A.l([],t.d)
for(j=m.length,i=l.$ti,h=i.i("a8<D.E>"),i=i.i("D.E"),g=t.N,f=t.X,e=0;e<m.length;m.length===j||(0,A.A)(m),++e){d=m[e]
c=A.E(g,f)
for(b=new A.a8(l,l.gl(0),h);b.k();){a=b.d
if(a==null)a=i.a(a)
if(d.H(a))c.j(0,a,d.h(0,a))}a0.push(c)}k=a0}q=A.m(["items",k,"lastRow",o&&m.length!==0?B.b.ga_(m):null,"hasMore",o],t.N,t.X)
s=1
break A
case"count":case"countDistinct":a0=A.iP(p)
q=A.m(["value",a0==null?0:a0],t.N,t.X)
s=1
break A
case"distinct":a0=[]
for(j=J.K(p);j.k();){i=j.gn()
if(i.gW(i))a0.push(J.bW(i.gbh()))}q=A.m(["values",a0],t.N,t.X)
s=1
break A
case"ids":a0=A.l([],t.s)
for(j=J.K(p);j.k();){i=j.gn().h(0,"id")
i.toString
a0.push(A.I(i))}q=A.m(["ids",a0],t.N,t.X)
s=1
break A
case"explain":a0=t.X
q=A.m(["plan",J.aG(p,new A.wO(),a0).L(0,"\n")],t.N,a0)
s=1
break A
case"sum":case"avg":case"min":case"max":a0=J.J(p)
q=A.m(["value",a0.gB(p)?null:J.U(a0.gC(p),"v")],t.N,t.X)
s=1
break A
case"search":a0=A.l([],t.d)
for(j=J.K(p),i=t.N,h=t.X;j.k();){g=j.gn()
f=g.h(0,"id")
f.toString
a0.push(A.m(["id",A.I(f),"score",g.h(0,"score")],i,h))}q=A.m(["results",a0],i,h)
s=1
break A
default:throw A.b(A.w("Unsupported compiled operation: "+a0))}case 1:return A.e(q,r)}})
return A.f($async$wN,r)},
wO:function wO(){},
z3(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
jk:function jk(a,b){this.a=a
this.b=b},
ju:function ju(a,b){this.a=a
this.b=b
this.c=!0},
ok:function ok(){},
oj:function oj(){},
ol:function ol(){},
CX(a){return'"'+A.B(a,'"','""')+'"'},
CW(a,b){var s,r,q,p=a.a,o=J.J(p),n=b.a,m=J.J(n)
if(o.gl(p)>=m.gl(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gl(p);++q)if(!J.u(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
nf:function nf(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jr:function jr(a){this.a=a},
oi:function oi(a){this.a=a},
oh:function oh(){},
og:function og(a){this.a=a},
od:function od(){},
oe:function oe(){},
of:function of(){},
bi(a,b){return new A.hU(a)},
ri(a){return new A.cF(a)},
xT(a){return new A.hI(a)},
cl(a){return new A.eM(a)},
z0(a){return new A.fS(a)},
z2(a){return new A.fX(a)},
BG(a,b){var s,r="UNIQUE constraint failed",q=J.av(a),p=a instanceof A.d6,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.D(q,"PRIMARY KEY")&&!B.a.D(q,r)
else p=!0
if(p)return new A.hB("PRIMARY KEY constraint violated.")
if(o===2067||B.a.D(q,r)){s=A.AH(q,"UNIQUE constraint failed:")
b.h(0,s)
return new A.hS('Unique constraint violated on "'+s+'".')}if(o===1299||B.a.D(q,"NOT NULL constraint failed")){p=A.AH(q,"NOT NULL constraint failed:")
return new A.hv('NOT NULL constraint violated on "'+p+'".')}if(B.a.D(q,"CHECK constraint failed")||o===275||n===275)return new A.fQ("CHECK constraint violated.")
if(B.a.D(q,"FOREIGN KEY")||o===787||n===787)return new A.h3("FOREIGN KEY constraint violated.")
if(B.a.D(q,"database or disk is full"))return new A.cF("Database full: "+A.r(a))
return new A.cF("SQLite error: "+A.r(a))},
AH(a,b){var s,r,q,p,o,n,m=B.a.bT(a,b)
if(m<0)return"?"
s=B.a.ac(a,m+b.length)
r=s.length
q=B.a.bT(s,",")
if(q>=0)r=q
p=B.a.bT(s,"(")
s=B.a.d_(B.a.q(s,0,p>=0&&p<r?p:r))
o=B.a.cR(s,".")
s=B.a.d_(o>=0?B.a.ac(s,o+1):s)
if(B.a.O(s,'"')&&B.a.cg(s,'"')){n=B.a.q(s,1,s.length-1)
s=A.B(n,'""','"')}return s.length===0?"?":s},
hi:function hi(){},
hU:function hU(a){this.a=a},
hS:function hS(a){this.a=a},
hv:function hv(a){this.a=a},
fQ:function fQ(a){this.a=a},
hB:function hB(a){this.a=a},
h3:function h3(a){this.a=a},
cF:function cF(a){this.a=a},
hI:function hI(a){this.a=a},
hK:function hK(a){this.a=a},
eM:function eM(a){this.a=a},
h5:function h5(a){this.a=a},
fS:function fS(a){this.a=a},
fX:function fX(a){this.a=a},
r3:function r3(){},
Fw(){return Date.now()},
mj(a){var s,r,q
if(t.G.b(a)){s=A.E(t.N,t.X)
for(r=a.gbm(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,q.a,A.mj(q.b))}return s}if(t.f.b(a)){s=A.E(t.z,t.X)
for(r=a.gbm(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,q.a,A.mj(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.K(a);r.k();)s.push(A.mj(r.gn()))
return s}if(t.p.b(a))return new Uint8Array(A.br(a))
return a},
cz(a,b,c,d,e,f,g,h){var s=null,r=B.x,q=null,p=null
return A.Dr(a,b,c,d,e,f,g,h)},
Dr(a5,a6,a7,a8,a9,b0,b1,b2){var s=0,r=A.h(t.kM),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$cz=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:b=null
a=B.x
a0=null
a1=null
a2=null
a2=a6
p=4
s=7
return A.a(A.ch(a2,b1),$async$cz)
case 7:s=8
return A.a(A.dX(a2,b1),$async$cz)
case 8:n=b4
i=0
case 9:if(!(i<3)){s=11
break}m=B.bV[i]
s=12
return A.a(a2.K(m),$async$cz)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.c8[i]
s=16
return A.a(a2.K(l),$async$cz)
case 16:case 14:++i
s=13
break
case 15:h=a2
g=a0
if(g==null)g=A.Hg()
f=new A.kf()
e=new A.jX(b0,h,n,f,a9,a7,a1,a5,a8,b,g,A.E(t.N,t.nv),a,new A.n1(A.dY(null,null,t.iv),A.dY(null,null,t.oZ)))
e.d=new A.tC(A.c_(null,t.H),f.gvS())
f=$.xk()
e.as=new A.q4(e,f)
e.at=new A.q_(e,f)
e.ax=new A.nt(e)
e.ay=new A.pm(e,a5)
k=e
s=17
return A.a(A.jZ(a2,k.Q),$async$cz)
case 17:h=b2.length,i=0
case 18:if(!(i<b2.length)){s=20
break}j=b2[i]
s=21
return A.a(k.bf(j),$async$cz)
case 21:case 19:b2.length===h||(0,A.A)(b2),++i
s=18
break
case 20:q=k
s=1
break
p=2
s=6
break
case 4:p=3
a3=o.pop()
p=23
s=26
return A.a(a2.p(),$async$cz)
case 26:p=3
s=25
break
case 23:p=22
a4=o.pop()
s=25
break
case 22:s=3
break
case 25:throw a3
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cz,r)},
ch(a,b){return A.Dq(a,b)},
Dq(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
var $async$ch=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:s=b===B.aP?2:3
break
case 2:q=5
s=8
return A.a(a.K("PRAGMA journal_mode=WAL"),$async$ch)
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
return A.a(a.K("PRAGMA wal_autocheckpoint=0"),$async$ch)
case 9:s=10
return A.a(a.K("PRAGMA mmap_size=67108864"),$async$ch)
case 10:case 3:s=11
return A.a(a.K("PRAGMA synchronous=NORMAL"),$async$ch)
case 11:s=12
return A.a(a.K("PRAGMA foreign_keys=ON"),$async$ch)
case 12:s=13
return A.a(a.K("PRAGMA busy_timeout=5000"),$async$ch)
case 13:s=14
return A.a(a.K("PRAGMA cache_size=-8000"),$async$ch)
case 14:s=15
return A.a(a.K("PRAGMA temp_store=MEMORY"),$async$ch)
case 15:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$ch,r)},
jZ(a,b){var s=0,r=A.h(t.H),q,p
var $async$jZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.dN("lp_migrations","version = ?",[1]),$async$jZ)
case 3:if(p.iY(d)){s=1
break}s=4
return A.a(a.az(0,"lp_migrations",A.m(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$jZ)
case 4:case 1:return A.e(q,r)}})
return A.f($async$jZ,r)},
jv:function jv(a,b){this.a=a
this.b=b},
kE:function kE(a,b){this.a=a
this.d=b},
qx:function qx(a){this.a=a},
jX:function jX(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.db=m
_.dx=null
_.dy=0
_.a$=n},
pA:function pA(a){this.a=a},
pw:function pw(a){this.a=a},
pz:function pz(a,b){this.a=a
this.b=b},
py:function py(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
px:function px(){},
pv:function pv(a){this.a=a},
pu:function pu(){},
ln:function ln(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
up:function up(a,b){this.a=a
this.b=b},
uo:function uo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
um:function um(a,b){this.a=a
this.b=b},
un:function un(a,b){this.a=a
this.b=b},
ul:function ul(a){this.a=a},
f7:function f7(a,b){this.a=a
this.b=b},
lG:function lG(){},
eC(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g
var $async$eC=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:j=a.b
i=b.x
h=A.a7(i).i("bj<1>")
g=A.P(new A.bj(i,new A.pR(c,b),h),h.i("n.E"))
B.b.c1(g,new A.pS())
i=g.length,h=b.a,q="migrate:"+h+":v",p=c,o=0
case 2:if(!(o<g.length)){s=4
break}n=g[o]
m=n.a
l=p+1
if(m!==l)throw A.b(A.cl('Migration gap for "'+h+'": expected v'+l+", found v"+m+"."))
k=new A.kD()
$.mw()
k.av()
s=n.b?5:7
break
case 5:s=8
return A.a(A.bb(a,b,n),$async$eC)
case 8:s=6
break
case 7:s=9
return A.a(A.k2(a,b,n),$async$eC)
case 9:case 6:if(k.b==null)k.b=$.qD.$0()
s=10
return A.a(A.ho(j,k.gum(),p,q+m,m),$async$eC)
case 10:case 3:g.length===i||(0,A.A)(g),++o,p=m
s=2
break
case 4:i=b.b
if(c<i&&p!==i)throw A.b(A.cl('Missing migration steps for "'+h+'": migrated to v'+p+" but expected v"+i+"."))
s=11
return A.a(j.G("lp_stores",A.m(["schema_ver",i],t.N,t.X),"store = ?",[h]),$async$eC)
case 11:return A.e(null,r)}})
return A.f($async$eC,r)},
ho(a,b,c,d,e){var s=0,r=A.h(t.H),q,p
var $async$ho=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.aR("SELECT MAX(version) AS m FROM lp_migrations"),$async$ho)
case 2:q=p.iP(g)
if(q==null)q=0
s=3
return A.a(a.az(0,"lp_migrations",A.m(["version",q+1,"name",d,"applied_at",Date.now(),"duration_ms",b],t.N,t.X)),$async$ho)
case 3:return A.e(null,r)}})
return A.f($async$ho,r)},
k2(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$k2=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=a.b
k=b.a
j=t.v
h=A
g=A
f=J
s=2
return A.a(l.aR("PRAGMA table_info("+('"'+A.B(k,'"','""')+'"')+")"),$async$k2)
case 2:i=h.eA(new g.bp(f.aG(e,new A.pP(),t.X),j),j.i("n.E"))
j=c.c,q=j.length,p=0
case 3:if(!(p<j.length)){s=5
break}o=j[p]
if(o.c)throw A.b(A.cl('Additive migration on "'+k+'" cannot add a required column "'+o.a+'" (existing rows would violate NOT NULL).'))
n=o.a
if(i.D(0,n)){s=4
break}m=A.B(k,'"','""')
s=6
return A.a(l.K("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.B(n,'"','""')+'"')+" "+o.gkb()),$async$k2)
case 6:i.t(0,n)
case 4:j.length===q||(0,A.A)(j),++p
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$k2,r)},
bb(a,b,c){return A.Dv(a,b,c)},
Dv(a3,a4,a5){var s=0,r=A.h(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$bb=A.c(function(a6,a7){if(a6===1){p.push(a7)
s=q}for(;;)switch(s){case 0:a0=a3.b
if(!a3.r)throw A.b(A.z2('Destructive migration for "'+a4.a+'" requires the backup step, which is disabled.'))
m=a4.a
l=a5.a
k=m+"__new_"+l
o=A.Dw(a3.a,m,l)
q=3
s=6
return A.a(a0.K("VACUUM INTO '"+A.B(o,"'","''")+"'"),$async$bb)
case 6:q=1
s=5
break
case 3:q=2
a1=p.pop()
n=A.M(a1)
l=A.z2('Backup failed for destructive migration of "'+m+'": '+A.r(n))
throw A.b(l)
s=5
break
case 2:s=1
break
case 5:i=new A.jr(a3.c).lM(a4)
l=A.B(m,'"','""')
s=7
return A.a(a0.K(B.a.mo(i.b,'"'+l+'"','"'+A.B(k,'"','""')+'"')),$async$bb)
case 7:l=t.P,h=0
case 8:s=11
return A.a(a0.ae("SELECT rowid, * FROM "+('"'+A.B(m,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[h,1e4]),$async$bb)
case 11:g=a7
f=J.J(g)
if(f.gB(g)){s=10
break}s=12
return A.a(a0.V(new A.pQ(g,a4,a5,k),l),$async$bb)
case 12:e=J.U(f.ga_(g),"rowid")
e.toString
A.ah(e)
if(f.gl(g)<1e4){s=10
break}case 9:h=e
s=8
break
case 10:a2=A
s=13
return A.a(a0.aR("SELECT COUNT(*) c FROM "+('"'+A.B(m,'"','""')+'"')),$async$bb)
case 13:d=a2.iP(a7)
if(d==null)d=0
a2=A
s=14
return A.a(a0.aR("SELECT COUNT(*) c FROM "+('"'+A.B(k,'"','""')+'"')),$async$bb)
case 14:c=a2.iP(a7)
if(c==null)c=0
if(d!==c)throw A.b(A.w('Rebuild of "'+m+'" count mismatch: '+d+" vs "+c+"."))
s=15
return A.a(a0.K("DROP TABLE "+('"'+A.B(m,'"','""')+'"')),$async$bb)
case 15:l=A.B(k,'"','""')
s=16
return A.a(a0.K("ALTER TABLE "+('"'+l+'"')+" RENAME TO "+('"'+A.B(m,'"','""')+'"')),$async$bb)
case 16:l=i.c,f=l.length,b=0
case 17:if(!(b<l.length)){s=19
break}s=20
return A.a(a0.K(l[b]),$async$bb)
case 20:case 18:l.length===f||(0,A.A)(l),++b
s=17
break
case 19:l=a4.w!=null
s=l?21:22
break
case 21:s=23
return A.a(a0.K("DROP TABLE IF EXISTS "+('"'+A.B(m+"_fts",'"','""')+'"')),$async$bb)
case 23:case 22:f=i.d,e=f.length,b=0
case 24:if(!(b<f.length)){s=26
break}s=27
return A.a(a0.K(f[b]),$async$bb)
case 27:case 25:f.length===e||(0,A.A)(f),++b
s=24
break
case 26:s=l?28:29
break
case 28:l=m+"_fts"
f=A.B(l,'"','""')
s=30
return A.a(a0.K("INSERT INTO "+('"'+f+'"')+"("+('"'+A.B(l,'"','""')+'"')+") VALUES('rebuild')"),$async$bb)
case 30:case 29:a2=A
s=31
return A.a(a0.aR("SELECT COUNT(*) c FROM "+('"'+A.B(m,'"','""')+'"')),$async$bb)
case 31:a=a2.iP(a7)
if((a==null?0:a)!==d)throw A.b(A.w('Post-rebuild verification of "'+m+'" failed.'))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$bb,r)},
Dw(a,b,c){var s=null,r=$.xm(),q=r.tP(a),p=A.eH(a,r.a).gtt()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.ma(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
pR:function pR(a,b){this.a=a
this.b=b},
pS:function pS(){},
pP:function pP(){},
pQ:function pQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kf:function kf(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
r0:function r0(a,b,c,d,e){var _=this
_.b=a
_.d=b
_.r=c
_.w=d
_.y=e},
ml(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.M(q)
if(r instanceof A.cF)throw q
else{s=r
r=A.ri("Malformed schema JSON: "+A.r(s))
throw A.b(r)}}},
z6(a){return A.ml(new A.on(a))},
Dd(a){return A.ml(new A.p4(a))},
D5(a){return A.ml(new A.oy(a))},
DY(a){return A.ml(new A.rj(a))},
z_(a,b){return A.ml(new A.n6(a,b))},
Gl(a,b,c,d){var s
for(s=c+1;s<=d;++s)B.ca.h(0,s)
return b},
bJ:function bJ(a,b){this.a=a
this.b=b},
aK:function aK(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
on:function on(a){this.a=a},
h8:function h8(a,b){this.a=a
this.b=b},
cW:function cW(a,b,c){this.a=a
this.b=b
this.c=c},
p4:function p4(a){this.a=a},
h4:function h4(a){this.a=a},
oy:function oy(a){this.a=a},
bM:function bM(a,b,c){this.a=a
this.b=b
this.c=c},
rj:function rj(a){this.a=a},
pT:function pT(a,b){this.a=a
this.b=b},
nr:function nr(){},
bI:function bI(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.$ti=i},
n6:function n6(a,b){this.a=a
this.b=b},
CN(a,b){var s,r=a.a
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
s='Field "'+r+'" must be one of '+B.b.L(s,", ")+"."
break
default:s=null}return s},
dQ:function dQ(a,b){this.a=a
this.b=b},
dB:function dB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nd:function nd(a,b){this.a=a
this.b=b},
nb:function nb(a,b,c){this.a=a
this.b=b
this.c=c},
na:function na(a,b){this.a=a
this.b=b},
ne:function ne(a,b){this.a=a
this.b=b},
nc:function nc(a,b){this.a=a
this.b=b},
n9:function n9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n8:function n8(){},
n7:function n7(){},
lm:function lm(){},
zH(a,b,c,d){return new A.bo(a,b,c,d,new A.vx())},
kP(a){var s=$.t.h(0,$.my())
if(s instanceof A.bo&&s.a===a)return s
return null},
bo:function bo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
rI:function rI(a,b,c){this.a=a
this.b=b
this.c=c},
vx:function vx(){this.a=0
this.b=null},
GK(a,b,c){var s,r,q,p,o=A.l([],t.s)
for(s=J.K(a);s.k();){r=new A.ab("")
A.fH(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}B.b.aW(o)
p=B.b.L(o,"|")
b.$1(p.length)
return A.aB(B.l.v(B.i.v(p)).a)},
hx:function hx(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=null
_.a=c
_.b=d
_.d=_.c=null
_.f=_.e=!1
_.r=null},
pZ:function pZ(a){this.a=a},
bX:function bX(){},
tC:function tC(a,b){this.a=a
this.b=0
this.c=b},
tD:function tD(a,b,c){this.a=a
this.b=b
this.c=c},
jc(a){var s=$.BL()
if(!s.b.test(a))throw A.b(A.O('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
iS(a,b,c,d,e){return A.Hq(a,b,c,d,e)},
Hq(a,b,c,d,a0){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e
var $async$iS=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:h=t.i5
g=A.l([],h)
f=new A.f6(A.lV(new A.lX(new A.x6(g),A.l([],h),t.mI)))
e=0
h=new A.bR(A.bF(a,"stream",t.K),t.lj)
p=3
l=t.D
case 6:s=8
return A.a(h.k(),$async$iS)
case 8:if(!a2){s=7
break}m=h.gn()
k=a0.$1(m)
if(!(k instanceof A.p)){j=new A.p($.t,l)
j.a=8
j.c=k
k=j}s=9
return A.a(k,$async$iS)
case 9:f.a.t(0,m)
e+=J.aw(m)
s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=10
return A.a(h.A(),$async$iS)
case 10:s=n.pop()
break
case 5:f.a.p()
if(c!=null&&!J.u(e,c))throw A.b(A.w("Size mismatch: expected "+A.r(c)+" but got "+A.r(e)))
i=A.aB(B.b.gan(g).a)
A.jc(i)
if(b!=null&&i!==b)throw A.b(A.w("SHA-256 mismatch: expected "+b+" but got "+i))
q=new A.kF(i)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iS,r)},
mS:function mS(){},
kF:function kF(a){this.a=a},
x6:function x6(a){this.a=a},
h0:function h0(a){this.d=a},
op:function op(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
or:function or(a,b){this.a=a
this.b=b},
os:function os(a,b,c){this.a=a
this.b=b
this.c=c},
oq:function oq(a,b,c){this.a=a
this.b=b
this.c=c},
ot:function ot(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ou:function ou(){},
z7(a){return A.mt("lp_file_refs",new A.oo(a))},
b2:function b2(a,b,c,d,e,f,g,h,i,j){var _=this
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
oo:function oo(a){this.a=a},
pm:function pm(a,b){this.a=a
this.b=b},
pn:function pn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
pp:function pp(a){this.a=a},
pq:function pq(a){this.a=a},
pr:function pr(a){this.a=a},
ps:function ps(a){this.a=a},
pt:function pt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
po:function po(a,b){this.a=a
this.b=b},
t4:function t4(a){this.b=a},
t5:function t5(a){this.a=a},
zF(a){var s=Date.now()
return new A.kO(a,new A.b1(s,0,!1))},
kO:function kO(a,b){this.a=a
this.c=b},
mO:function mO(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
ki:function ki(a,b,c,d,e,f,g,h){var _=this
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
qv:function qv(a,b){this.a=a
this.b=b},
qw:function qw(){},
qe:function qe(a,b,c){this.a=a
this.b=b
this.c=c},
ql:function ql(a){this.a=a},
qh:function qh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qi:function qi(){},
qj:function qj(a,b){this.a=a
this.b=b},
qk:function qk(){},
qf:function qf(a,b){this.a=a
this.b=b},
qg:function qg(){},
hA:function hA(a,b){this.a=a
this.b=b},
fm:function fm(a,b){this.a=a
this.b=b},
qm:function qm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1
_.w=_.r=null
_.x=f
_.y=0},
qr:function qr(){},
qs:function qs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qn:function qn(a,b,c){this.a=a
this.b=b
this.c=c},
qo:function qo(){},
qp:function qp(a,b,c){this.a=a
this.b=b
this.c=c},
qq:function qq(){},
qt:function qt(a){this.a=a},
qu:function qu(a){this.a=a},
vE:function vE(a,b){this.a=a
this.b=null
this.c=b},
jG(a,b){return new A.cV(a)},
dJ:function dJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jF:function jF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
cV:function cV(a){this.a=a},
d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},
qc:function qc(a){this.a=a},
qd:function qd(a){this.a=a},
mD:function mD(a){this.a=a},
mE:function mE(a,b){this.a=a
this.b=b},
mF:function mF(a){this.a=a},
mG:function mG(){},
xt(a){return A.mt("lp_conflicts",new A.ns(a))},
bm:function bm(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
ns:function ns(a){this.a=a},
nt:function nt(a){this.a=a},
ny:function ny(a,b,c){this.a=a
this.b=b
this.c=c},
nx:function nx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nv:function nv(a,b){this.a=a
this.b=b},
nw:function nw(a,b){this.a=a
this.b=b},
nu:function nu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kK:function kK(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
rE:function rE(a){this.a=a},
rw:function rw(a){this.a=a},
rC:function rC(a,b){this.a=a
this.b=b},
rB:function rB(a){this.a=a},
rA:function rA(a,b){this.a=a
this.b=b},
rD:function rD(a){this.a=a},
rx:function rx(a,b){this.a=a
this.b=b},
ry:function ry(){},
rz:function rz(){},
hm(a){return new A.hl(a)},
yA(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.em(a,b)
r=A.b_(a,s)
q=A.aj(r)
p=A.aB(B.l.v(B.i.v(q)).a)
return new A.dS(b,s,q,p,k)}catch(m){l=A.M(m)
if(l instanceof A.hl){o=l
return new A.dS(b,k,k,k,o.a)}else{n=l
l=A.r(n)
return new A.dS(b,k,k,k,l)}}},
Hl(a,b){var s,r=A.l([],t.i7)
for(s=J.K(b);s.k();)r.push(A.yA(a,s.gn()))
return r},
yz(a,b){var s=0,r=A.h(t.eT),q
var $async$yz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.Hl(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$yz,r)},
em(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.ba(b.d,j,i),g=a.gdA(),f=h.h(0,"id")
if(f==null){s=b.a
h.j(0,"id",s)}else{s=b.a
if(!J.u(f,s))throw A.b(A.hm('data.id "'+A.r(f)+'" does not match record id "'+s+'"'))}r=h.h(0,k)
if(r!=null&&!A.c9(r))throw A.b(A.hm('Field "archived" must be a boolean, got '+J.cP(r).m(0)+"."))
q=A.m(["id",s],j,i)
for(j=a.c,i=j.length,p=0;p<j.length;j.length===i||(0,A.A)(j),++p){o=j[p]
s=o.a
n=h.h(0,s)
if(n==null){if(o.c)throw A.b(A.hm('Required field "'+s+'" is missing.'))
q.j(0,s,null)
continue}m=A.Bm(o,n)
if(m!=null)throw A.b(A.hm(A.G5(o,n,m)))
q.j(0,s,n)}for(j=new A.aH(h,A.o(h).i("aH<1,2>")).gu(0);j.k();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.D(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.u(r,!0))
return q},
G5(a,b,c){var s,r=a.a,q=J.cP(b)
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
en(a){var s,r,q
if(a==null||a.length===0)return B.q
try{s=B.e.aE(a,null)
if(t.f.b(s)){r=A.ba(s,t.N,t.X)
return r}}catch(q){}return B.q},
hl:function hl(a){this.a=a},
dS:function dS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bs(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.aU(i),g=A.eA(a.gP(),i)
g.E(0,b.gP())
for(g=A.fg(g,g.r,A.o(g).c),s=g.$ti.c,r=t.f,q=t.X;g.k();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.n.ag(o,n)){h.t(0,p)
if(r.b(o)&&r.b(n)&&J.iX(o.gP(),new A.wA())&&J.iX(n.gP(),new A.wB())){m=A.bs(A.ba(o,i,q),A.ba(n,i,q))
for(l=A.o(m),k=new A.dh(m,m.r,l.i("dh<1>")),k.c=m.e,p+=".",l=l.c;k.k();){j=k.d
h.t(0,p+(j==null?l.a(j):j))}}}}return h},
Dt(a,b,c,d,e,f,g){return new A.pH()},
G0(a,b){var s,r,q=a.b
if(q.gB(q))return null
for(s=b;;){q.h(0,s)
r=B.a.cR(s,".")
if(r<=0)return null
s=B.a.q(s,0,r)}},
xM(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$xM=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.Du(B.bh,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xM,r)},
Du(a,b,c,d,e,f,g){var s,r,q,p=A.bs(b,c),o=A.bs(b,f)
A.Dt(b,p,o,c,e,f,g)
s=t.N
r=A.eA(c.gP(),s)
r.E(0,new A.Z(f,A.o(f).i("Z<1>")))
r.E(0,b.gP())
q=A.P(r,A.o(r).c)
return A.pN(a,b,p,o,0,q,c,A.E(s,t.X),d,e,f,new A.vs(),g)},
pN(a,b,c,d,e,f,g,h,i,j,k,a0,a1){var s,r,q,p,o,n,m,l
if(e>=f.length)return new A.d1(h,a0.a,null)
s=f[e]
r=g.h(0,s)
q=k.h(0,s)
p=b.h(0,s)
if(s==="archived"){o=J.u(p,!0)
n=J.u(r,!0)
m=J.u(q,!0)
if(n===m)h.j(0,s,n)
else if(n===o)h.j(0,s,m)
else if(m===o)h.j(0,s,n)
else{i.b.h(0,s)
h.j(0,s,m)}return A.pN(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)}l=A.zn(a,p,r,s,i,q,j,a0,a1)
if(l instanceof A.p)return l.aK(new A.pO(h,s,f,e,b,g,k,i,a1,j,a,c,d,a0),t.r)
h.j(0,s,l)
return A.pN(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)},
zn(a,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
if(B.n.ag(a1,a4))return a1
if(B.n.ag(a1,a0))return a4
if(B.n.ag(a4,a0))return a1
s=t.f
r=!1
if(s.b(a1))if(s.b(a4))if(J.iX(a1.gP(),new A.pI()))if(J.iX(a4.gP(),new A.pJ()))if(a0!=null)r=s.b(a0)&&J.iX(a0.gP(),new A.pK())
else r=!0
if(r){r=t.N
q=t.X
p=A.ba(a1,r,q)
o=A.ba(a4,r,q)
n=a0==null?null:A.ba(s.a(a0),r,q)
s=A.aU(r)
m=n==null
l=m?null:new A.Z(n,A.o(n).i("Z<1>"))
if(l!=null)s.E(0,l)
s.E(0,new A.Z(p,A.o(p).i("Z<1>")))
s.E(0,new A.Z(o,A.o(o).i("Z<1>")))
k=A.E(r,q)
j=[]
for(r=s.$ti.c,l=A.fg(s,s.r,r),i=a2+".",h=l.$ti.c,g=!1;l.k();){f=l.d
if(f==null)f=h.a(f)
e=m?null:n.h(0,f)
d=A.zn(a,e,p.h(0,f),i+f,a3,o.h(0,f),a5,a6,a7)
if(d instanceof A.p)g=!0
j.push(d)}if(!g){for(s=A.fg(s,s.r,r),r=s.$ti.c,c=0;s.k();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.xB(new A.a6(j,new A.pL(),A.a7(j).i("a6<1,z<j?>>")),q).aK(new A.pM(s,k),q)}A.G0(a3,a2)
return a4},
Br(a,b,c,d,e,f){return A.xM(a,b,c,d,e,f)},
wA:function wA(){},
wB:function wB(){},
pH:function pH(){},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
vs:function vs(){this.a=!1},
vq:function vq(){},
tM:function tM(){},
pO:function pO(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
pI:function pI(){},
pJ:function pJ(){},
pK:function pK(){},
pL:function pL(){},
pM:function pM(a,b){this.a=a
this.b=b},
q_:function q_(a,b){this.a=a
this.b=b},
q1:function q1(a){this.a=a},
q2:function q2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mR:function mR(a,b,c){this.a=a
this.b=b
this.c=c},
hj:function hj(){},
hH:function hH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
q4:function q4(a,b){this.a=a
this.b=b},
qb:function qb(a,b){this.a=a
this.b=b},
q9:function q9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
q8:function q8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
q7:function q7(a,b,c){this.a=a
this.b=b
this.c=c},
qa:function qa(a){this.a=a},
dv:function dv(a,b){this.a=a
this.b=b},
kl:function kl(a,b){this.b=a
this.f=b},
qK:function qK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qS:function qS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qR:function qR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qM:function qM(a,b,c){this.a=a
this.b=b
this.c=c},
qL:function qL(a,b,c){this.a=a
this.b=b
this.c=c},
qO:function qO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qN:function qN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qQ:function qQ(a,b,c){this.a=a
this.b=b
this.c=c},
qP:function qP(a,b,c){this.a=a
this.b=b
this.c=c},
aM:function aM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qT:function qT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
qV:function qV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r_:function r_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qY:function qY(a,b,c){this.a=a
this.b=b
this.c=c},
qX:function qX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qW:function qW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qU:function qU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qZ:function qZ(a,b,c,d,e,f,g,h,i,j){var _=this
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
bN:function bN(a,b){this.a=a
this.b=b},
b4:function b4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
eV:function eV(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eU:function eU(a,b){this.a=a
this.b=b},
rt:function rt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ru:function ru(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zG(a){return new A.eX(a)},
CD(a){return new A.bH(a)},
D4(a){return new A.cf(a)},
DB(a){return new A.ci(a)},
be(a){return new A.eJ(a)},
H_(a){var s=a.wg(),r=new A.wR()
return A.r(r.$2(A.xS(s),4))+"-"+A.r(r.$1(A.xQ(s)))+"-"+A.r(r.$1(A.qA(s)))+" "+A.r(r.$1(A.xO(s)))+":"+A.r(r.$1(A.xP(s)))+":"+A.r(r.$1(A.xR(s)))+"."+A.r(r.$2(A.zu(s),3))+"Z"},
bh:function bh(){},
eX:function eX(a){this.a=a},
dV:function dV(a,b){this.b=a
this.a=b},
hL:function hL(a){this.a=a},
bH:function bH(a){this.a=a},
cf:function cf(a){this.a=a},
ci:function ci(a){this.a=a},
eI:function eI(a){this.a=a},
eJ:function eJ(a){this.a=a},
et:function et(a){this.a=a},
dw:function dw(a){this.a=a},
eS:function eS(a,b,c){this.a=a
this.b=b
this.c=c},
ck:function ck(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eK:function eK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hG:function hG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
j3:function j3(a,b){this.a=a
this.b=b},
cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},
wR:function wR(){},
E0(a){return 0.5+B.av.vw()},
y_(a){var s,r=a.toLowerCase()
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
E1(a){var s,r,q,p,o,n,m,l,k=null,j=A.ag("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0).dD(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.y_(r)
if(q==null)return k
r=s[3]
r.toString
r=A.au(r)
p=s[1]
p.toString
p=A.au(p)
o=s[4]
o.toString
o=A.au(o)
n=s[5]
n.toString
n=A.au(n)
s=s[6]
s.toString
return A.y0(r,q,p,o,n,A.au(s))}j=A.ag("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0).dD(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.y_(r)
if(q==null)return k
r=s[3]
r.toString
m=A.au(r)
l=m>=70?1900+m:2000+m
r=s[1]
r.toString
r=A.au(r)
p=s[4]
p.toString
p=A.au(p)
o=s[5]
o.toString
o=A.au(o)
s=s[6]
s.toString
return A.y0(l,q,r,p,o,A.au(s))}j=A.ag("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0).dD(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.y_(r)
if(q==null)return k
r=s[6]
r.toString
r=A.au(r)
p=s[2]
p.toString
p=A.au(p)
o=s[3]
o.toString
o=A.au(o)
n=s[4]
n.toString
n=A.au(n)
s=s[5]
s.toString
return A.y0(r,q,p,o,n,A.au(s))}return k},
y0(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.xv(a,b,c,d,e,f,0)
return s}catch(r){return null}},
rv:function rv(a,b){this.at=a
this.ay=b},
hF:function hF(a,b){this.a=a
this.b=b},
hR:function hR(a,b){this.a=a
this.b=b},
rG:function rG(a,b){this.a=a
this.b=b},
GF(a,b,c,d,e,f,g,h,i,j){var s,r=A.Bt(a,b,c,null,d,e,f,g,h,i,j),q=A.E(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.aH[s],r[s])
return q},
Bt(a,b,c,d,e,f,g,h,i,j,k){var s=[]
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
Bz(a){return new A.a6(a,new A.xb(),A.a7(a).i("a6<1,k>")).L(0,", ")},
kL(a){return A.mt("lp_sync_row",new A.rF(a))},
q5(a){return A.mt("lp_outbox",new A.q6(a))},
DC(a){return A.mt("lp_op_queue",new A.q0(a))},
iT(a,b){var s=0,r=A.h(t.gi),q,p,o,n,m,l,k,j,i,h
var $async$iT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=t.N
m=A.aU(n)
l=A.P(b,A.o(b).c)
k=l.length
if(k===0){q=m
s=1
break}p=B.b.L(A.aE(k,"?",!1,n),", ")
k=a.ae("SELECT op_id FROM lp_outbox WHERE op_id IN ("+p+")",l)
o=t.J
j=m
i=J
h=o
s=3
return A.a(k,$async$iT)
case 3:j.E(0,i.aG(h.a(d),new A.x9(),n))
k=A.P(l,n)
k.push("pending")
k.push("failed")
k=a.ae("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$iT)
case 4:j.E(0,i.aG(h.a(d),new A.xa(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iT,r)},
fG(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$fG=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.eP("lp_blobs",A.l(["hash"],q),1,"hash = ?",A.l([b],q))
p=J
o=t.J
s=5
return A.a(q,$async$fG)
case 5:s=p.cc(o.a(f))?2:4
break
case 2:q=a.az(0,"lp_blobs",A.m(["hash",b,"size",d,"state","local","refcount",1,"last_access",c,"created_at",c],t.N,t.K))
s=6
return A.a(q,$async$fG)
case 6:s=3
break
case 4:q=a.aw("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",A.l([c,b],t.hf))
s=7
return A.a(q,$async$fG)
case 7:case 3:return A.e(null,r)}})
return A.f($async$fG,r)},
wH(a,b){var s=0,r=A.h(t.H),q,p
var $async$wH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aw(u.y,A.l([b],t.s))
s=3
return A.a(p,$async$wH)
case 3:case 1:return A.e(q,r)}})
return A.f($async$wH,r)},
cb(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$cb=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.vO("lp_file_refs",A.l(["ref_id","hash"],n),"store = ? AND record_id = ?",A.l([b,c],n))
l=J
k=t.J
s=2
return A.a(m,$async$cb)
case 2:m=l.K(k.a(f))
case 3:if(!m.k()){s=4
break}q=m.gn()
p=a.a2("lp_file_refs","ref_id = ?",[q.h(0,"ref_id")])
s=5
return A.a(p,$async$cb)
case 5:o=A.ai(q.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(A.wH(a,o),$async$cb)
case 8:case 7:s=3
break
case 4:m=a.a2("lp_conflicts","store = ? AND record_id = ?",A.l([b,c],n))
s=9
return A.a(m,$async$cb)
case 9:m=t.N
m=a.G("lp_op_queue",A.m(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.l([b,c],n))
s=10
return A.a(m,$async$cb)
case 10:s=d?11:12
break
case 11:m=a.a2("lp_outbox","store = ? AND record_id = ?",A.l([b,c],n))
s=13
return A.a(m,$async$cb)
case 13:n=a.a2("lp_sync_row","store = ? AND record_id = ?",A.l([b,c],n))
s=14
return A.a(n,$async$cb)
case 14:case 12:return A.e(null,r)}})
return A.f($async$cb,r)},
cn:function cn(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b){this.a=a
this.b=b},
eG:function eG(a,b){this.a=a
this.b=b},
hy:function hy(a,b){this.a=a
this.b=b},
xb:function xb(){},
cm:function cm(a,b,c,d,e,f,g,h,i,j){var _=this
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
rF:function rF(a){this.a=a},
cj:function cj(a,b,c,d,e,f,g,h,i,j){var _=this
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
q6:function q6(a){this.a=a},
dT:function dT(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
q0:function q0(a){this.a=a},
x9:function x9(){},
xa:function xa(){},
ji:function ji(a,b,c,d,e,f,g,h){var _=this
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
ng:function ng(a){this.a=a},
Do(a){var s,r,q
try{s=A.wD(a)
if(t.f.b(s)){r=A.fC(s)
return r}}catch(q){}return null},
Dp(a){if(a instanceof A.hX)return A.el(new A.l_(2,a.a,a.b,null).ap())
t.bp.a(a)
return A.xK(a.a,a.b,a.c,a.d)},
xK(a,b,c,d){return A.el(new A.l_(2,a,null,new A.t6(b,c,d)).ap())},
pl:function pl(){},
jY:function jY(a,b){this.a=a
this.d=b},
lo:function lo(a){this.a=a},
bG(a){var s,r,q
if(a instanceof A.b1)return A.m(["lp:datetime",1000*a.a+a.b],t.N,t.S)
if(a instanceof A.aA){s=t.N
return A.m(["lp:bigint",a.m(0)],s,s)}if(t.p.b(a))return A.m(["lp:bytes",A.d0(a,t.S)],t.N,t.L)
if(t.j.b(a)){s=t.X
r=J.aG(a,A.Bb(),s)
r=A.P(r,r.$ti.i("R.E"))
return A.d0(r,s)}if(t.f.b(a)){q=A.E(t.N,t.X)
a.ad(0,new A.wM(q))
return q}if(a==null||A.c9(a)||A.aD(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.O("Value of type "+J.cP(a).m(0)+" is not wire-safe. Only null, bool, int, double, String, DateTime, BigInt, Uint8List, List, and Map are supported.",null))},
mp(a){var s,r,q,p,o,n,m,l="lp:datetime",k=null,j="lp:bigint",i="lp:bytes"
if(t.f.b(a)){if(a.gl(a)===1&&a.H(l)){s=a.h(0,l)
if(A.aD(s)){r=B.c.aG(s,1000)
q=B.c.R(s-r,1000)
if(q<-864e13||q>864e13)A.x(A.ak(q,-864e13,864e13,"millisecondsSinceEpoch",k))
if(q===864e13&&r!==0)A.x(A.b0(r,"microsecond",u.B))
A.bF(!0,"isUtc",t.y)
return new A.b1(q,r,!0)}throw A.b(A.O("Malformed wire DateTime: "+A.r(s),k))}if(a.gl(a)===1&&a.H(j)){s=a.h(0,j)
if(typeof s=="string")return A.y9(s,k)
throw A.b(A.O("Malformed wire BigInt: "+A.r(s),k))}if(a.gl(a)===1&&a.H(i)){s=a.h(0,i)
if(t.j.b(s)){r=J.J(s)
q=r.gl(s)
p=new Uint8Array(q)
for(o=0;o<r.gl(s);++o){n=r.h(s,o)
if(!A.aD(n)||n<0||n>255)throw A.b(A.O("Malformed wire byte at index "+o+": "+A.r(n),k))
p[o]=n}return p}throw A.b(A.O("Malformed wire bytes: "+A.r(s),k))}m=A.E(t.N,t.X)
a.ad(0,new A.wG(m))
return m}if(t.j.b(a)){r=t.X
q=J.aG(a,A.Ba(),r)
q=A.P(q,q.$ti.i("R.E"))
return A.d0(q,r)}return a},
wM:function wM(a){this.a=a},
wG:function wG(a){this.a=a},
iR(a,b,c,d,e){return A.Ha(a,b,c,d,e,e)},
Ha(a,b,c,d,e,f){var s=0,r=A.h(f),q,p=2,o=[],n,m,l
var $async$iR=A.c(function(g,h){if(g===1){o.push(h)
s=p}for(;;)switch(s){case 0:p=4
d.$0()
c.$0()
s=7
return A.a(b.$0(),$async$iR)
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
return A.a(a.$0(),$async$iR)
case 8:throw l
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iR,r)},
kU:function kU(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=0
_.x=g},
rO:function rO(a){this.d=a},
Hn(a){var s,r,q,p,o,n="stores",m="maxDocBytes",l="destructiveBackup"
if(a==null)return A.E(t.N,t.X)
try{if(t.f.b(a)){s=A.fC(a)
r=A.E(t.N,t.X)
q=t.j
if(q.b(J.U(s,n))){p=J.U(s,n)
p.toString
p=J.aG(q.a(p),new A.x4(),t.bU)
q=A.P(p,p.$ti.i("R.E"))
J.bU(r,n,q)}if(A.aD(J.U(s,m)))J.bU(r,m,J.U(s,m))
if(A.c9(J.U(s,l)))J.bU(r,l,J.U(s,l))
return r}}catch(o){}return A.E(t.N,t.X)},
Hr(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.fC(a).h(0,b)
return s}}catch(r){}return null},
H4(a,b){if(b!=null)return!1
return B.b.cJ(a,new A.wW())},
x4:function x4(){},
wW:function wW(){},
wV:function wV(){},
Hu(a){if(a instanceof A.hi){if(a instanceof A.hU)return"ValidationException"
if(a instanceof A.hS)return"UniqueConstraintException"
if(a instanceof A.hv)return"NotNullConstraintException"
if(a instanceof A.fQ)return"CheckConstraintException"
if(a instanceof A.hB)return"PrimaryKeyConstraintException"
if(a instanceof A.h3)return"ForeignKeyConstraintException"
if(a instanceof A.cF)return"StorageError"
if(a instanceof A.hI)return"RecordNotFoundException"
if(a instanceof A.hK)return"SchemaTooNewError"
if(a instanceof A.h5)return"FtsUnavailableError"
if(a instanceof A.eM)return"SchemaRegistrationError"
if(a instanceof A.fS)return"ConflictBlockedError"
if(a instanceof A.fX)return"DestructiveMigrationRefusedError"
if(a instanceof A.r3)return"ReadOnlyTxError"
return"LocalPocketError"}if(a instanceof A.bh){if(a instanceof A.eX)return"TransientNetworkError"
if(a instanceof A.dV)return"ServerBusyError"
if(a instanceof A.hL)return"ServerError"
if(a instanceof A.bH)return"AuthError"
if(a instanceof A.cf)return"ForbiddenError"
if(a instanceof A.ci)return"NotFoundError"
if(a instanceof A.eI)return"PayloadError"
if(a instanceof A.eJ)return"ProtocolError"
if(a instanceof A.et)return"DuplicateIdError"
if(a instanceof A.dw)return"BatchFailedError"
return"SyncError"}if(a instanceof A.hE)return"ProtocolEnvelopeException"
if(a instanceof A.fW)return"DatabaseWorkerClosedException"
if(t.b0.b(a))return"RangeError"
if(a instanceof A.bf)return"StateError"
if(a instanceof A.bv)return"ArgumentError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
return"unknown"},
Ea(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.aD(s))throw A.b(A.d5('Request "v" must be an int.'))
if(!A.aD(r)||r<0)throw A.b(A.d5('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.ct.D(0,q))throw A.b(A.d5("Unknown request operation: "+A.r(q)))
if(!t.f.b(p))throw A.b(A.d5('Request "a" must be a map.'))
return new A.f3(s,r,q,p.cS(0,new A.t9(),t.N,t.X))},
d5(a){return new A.hE(a)},
f3:function f3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t9:function t9(){},
l_:function l_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t6:function t6(a,b,c){this.a=a
this.b=b
this.c=c},
fW:function fW(a){this.a=a},
hE:function hE(a){this.a=a},
kp:function kp(a,b){this.a=a
this.b=b},
zO(a){return A.bl(A.bt(a).a,null)},
zP(a){return A.bl(J.cP(a).a,null)},
S:function S(a){this.a=a},
Ho(a){if(!t.f.b(a))throw A.b(A.a1("Schema must be a map: "+A.r(a),null,null))
return A.z_(A.fC(a),t.X)},
fC(a){var s=A.E(t.N,t.X)
a.ad(0,new A.wJ(s))
return s},
Ec(a){var s,r=A.E(t.N,t.X)
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
zQ(a){var s,r=A.E(t.N,t.X)
r.j(0,"state",a.a.b)
r.j(0,"pending",a.b)
r.j(0,"conflicts",a.c)
r.j(0,"hidden",a.d)
r.j(0,"blocked",a.e)
s=a.f
if(s!=null)r.j(0,"lastError",s)
s=a.r
if(s!=null)r.j(0,"lastSyncAt",A.bG(s))
s=a.w
if(s!=null)r.j(0,"lastSuccessfulSyncAt",A.bG(s))
return r},
f4:function f4(){},
hX:function hX(a,b){this.b=a
this.a=b},
e1:function e1(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
wJ:function wJ(a){this.a=a},
wI:function wI(){},
l3:function l3(){},
tg:function tg(a){this.a=a},
th:function th(a){this.a=a},
tf:function tf(a,b,c,d,e){var _=this
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
ti:function ti(a){this.a=a},
l1:function l1(){},
tc:function tc(a,b,c){this.a=a
this.b=b
this.c=c},
tb:function tb(a){this.a=a},
l2:function l2(){},
td:function td(a,b,c){this.a=a
this.b=b
this.c=c},
te:function te(){},
l5:function l5(){},
tj:function tj(a){this.a=a},
l6:function l6(){},
w1:function w1(a,b){this.a=a
this.b=b},
l7:function l7(){},
to:function to(a){this.a=a},
tp:function tp(a,b){this.a=a
this.b=b},
vO:function vO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l8:function l8(){},
tq:function tq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tr:function tr(a){this.a=a},
f5:function f5(a){this.a=a},
l9:function l9(){},
ty:function ty(a,b,c){this.a=a
this.b=b
this.c=c},
tz:function tz(a){this.a=a},
tB:function tB(a,b,c){this.a=a
this.b=b
this.c=c},
tA:function tA(a,b,c){this.a=a
this.b=b
this.c=c},
tt:function tt(a){this.a=a},
tx:function tx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ts:function ts(a,b,c){this.a=a
this.b=b
this.c=c},
tw:function tw(a,b,c){this.a=a
this.b=b
this.c=c},
tv:function tv(a,b,c){this.a=a
this.b=b
this.c=c},
tu:function tu(a,b,c){this.a=a
this.b=b
this.c=c},
m7:function m7(){},
m8:function m8(){},
m9:function m9(){},
ma:function ma(){},
mb:function mb(){},
mc:function mc(){},
md:function md(){},
AQ(a){return a},
B3(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.ab("")
o=a+"("
p.a=o
n=A.a7(b)
m=n.i("c4<1>")
l=new A.c4(b,0,s,m)
l.i6(b,0,s,n.c)
m=o+new A.a6(l,new A.wu(),m.i("a6<R.E,k>")).L(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.O(p.m(0),null))}},
nA:function nA(a){this.a=a},
nB:function nB(){},
nC:function nC(){},
wu:function wu(){},
pc:function pc(){},
eH(a,b){var s,r,q,p,o,n=b.nc(a),m=b.cn(a)
if(n!=null)a=B.a.ac(a,n.length)
s=t.s
r=A.l([],s)
q=A.l([],s)
s=a.length
if(s!==0&&b.bV(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.bV(a.charCodeAt(o))){r.push(B.a.q(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.ac(a,p))
q.push("")}return new A.kd(b,n,m,r,q)},
kd:function kd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
zr(a){return new A.ke(a)},
ke:function ke(a){this.a=a},
E_(){var s,r,q,p,o,n,m,l,k=null
if(A.y2().gaP()!=="file")return $.iV()
if(!B.a.cg(A.y2().gbd(),"/"))return $.iV()
s=A.Ar(k,0,0)
r=A.Ap(k,0,0,!1)
q=A.vT(k,0,0,k)
p=A.Ao(k,0,0)
o=A.vS(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.Aq("a/b",0,3,k,"",m)
if(n&&!B.a.O(l,"/"))l=A.yj(l,m)
else l=A.eg(l)
if(A.iF("",s,n&&B.a.O(l,"//")?"":r,o,l,q,p).jP()==="a\\b")return $.mx()
return $.BS()},
rs:function rs(){},
qy:function qy(a,b,c){this.d=a
this.e=b
this.f=c},
rR:function rR(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
ta:function ta(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
xz(a,b){if(b<0)A.x(A.aI("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.x(A.aI("Offset "+b+u.D+a.gl(0)+"."))
return new A.jD(a,b)},
rb:function rb(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
jD:function jD(a,b){this.a=a
this.b=b},
fd:function fd(a,b,c){this.a=a
this.b=b
this.c=c},
D9(a,b){var s=A.Da(A.l([A.EA(a,!0)],t.pg)),r=new A.p2(b).$0(),q=B.c.m(B.b.ga_(s).b+1),p=A.Db(s)?0:3,o=A.a7(s)
return new A.oJ(s,r,null,1+Math.max(q.length,p),new A.a6(s,new A.oL(),o.i("a6<1,i>")).w_(0,B.b2),!A.Hd(new A.a6(s,new A.oM(),o.i("a6<1,j?>"))),new A.ab(""))},
Db(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.u(r.c,q.c))return!1}return!0},
Da(a){var s,r,q=A.H3(a,new A.oO(),t.nf,t.K)
for(s=A.o(q),r=new A.aL(q,q.r,q.e,s.i("aL<2>"));r.k();)J.yO(r.d,new A.oP())
s=s.i("aH<1,2>")
r=s.i("h_<n.E,c8>")
s=A.P(new A.h_(new A.aH(q,s),new A.oQ(),r),r.i("n.E"))
return s},
EA(a,b){var s=new A.v3(a).$0()
return new A.b8(s,!0,null)},
EC(a){var s,r,q,p,o,n,m=a.gaF()
if(!B.a.D(m,"\r\n"))return a
s=a.gI().gam()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gJ()
p=a.gZ()
o=a.gI().ga9()
p=A.kx(s,a.gI().gal(),o,p)
o=A.B(m,"\r\n","\n")
n=a.gb1()
return A.rc(r,p,o,A.B(n,"\r\n","\n"))},
ED(a){var s,r,q,p,o,n,m
if(!B.a.cg(a.gb1(),"\n"))return a
if(B.a.cg(a.gaF(),"\n\n"))return a
s=B.a.q(a.gb1(),0,a.gb1().length-1)
r=a.gaF()
q=a.gJ()
p=a.gI()
if(B.a.cg(a.gaF(),"\n")){o=A.wQ(a.gb1(),a.gaF(),a.gJ().gal())
o.toString
o=o+a.gJ().gal()+a.gl(a)===a.gb1().length}else o=!1
if(o){r=B.a.q(a.gaF(),0,a.gaF().length-1)
if(r.length===0)p=q
else{o=a.gI().gam()
n=a.gZ()
m=a.gI().ga9()
p=A.kx(o-1,A.A8(s),m-1,n)
q=a.gJ().gam()===a.gI().gam()?p:a.gJ()}}return A.rc(q,p,r,s)},
EB(a){var s,r,q,p,o
if(a.gI().gal()!==0)return a
if(a.gI().ga9()===a.gJ().ga9())return a
s=B.a.q(a.gaF(),0,a.gaF().length-1)
r=a.gJ()
q=a.gI().gam()
p=a.gZ()
o=a.gI().ga9()
p=A.kx(q-1,s.length-B.a.cR(s,"\n")-1,o-1,p)
return A.rc(r,p,s,B.a.cg(a.gb1(),"\n")?B.a.q(a.gb1(),0,a.gb1().length-1):a.gb1())},
A8(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.hB(a,"\n",s-2)-1
else return s-B.a.cR(a,"\n")-1},
oJ:function oJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
p2:function p2(a){this.a=a},
oL:function oL(){},
oK:function oK(){},
oM:function oM(){},
oO:function oO(){},
oP:function oP(){},
oQ:function oQ(){},
oN:function oN(a){this.a=a},
p3:function p3(){},
oR:function oR(a){this.a=a},
oY:function oY(a,b,c){this.a=a
this.b=b
this.c=c},
oZ:function oZ(a,b){this.a=a
this.b=b},
p_:function p_(a){this.a=a},
p0:function p0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oW:function oW(a,b){this.a=a
this.b=b},
oX:function oX(a,b){this.a=a
this.b=b},
oS:function oS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oT:function oT(a,b,c){this.a=a
this.b=b
this.c=c},
oU:function oU(a,b,c){this.a=a
this.b=b
this.c=c},
oV:function oV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p1:function p1(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
v3:function v3(a){this.a=a},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kx(a,b,c,d){if(a<0)A.x(A.aI("Offset may not be negative, was "+a+"."))
else if(c<0)A.x(A.aI("Line may not be negative, was "+c+"."))
else if(b<0)A.x(A.aI("Column may not be negative, was "+b+"."))
return new A.c2(d,a,c,b)},
c2:function c2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ky:function ky(){},
kA:function kA(){},
DT(a,b,c){return new A.eP(c,a,b)},
kB:function kB(){},
eP:function eP(a,b,c){this.c=a
this.a=b
this.b=c},
eQ:function eQ(){},
rc(a,b,c,d){var s=new A.cE(d,a,b,c)
s.nM(a,b,c)
if(!B.a.D(d,c))A.x(A.O('The context line "'+d+'" must contain "'+c+'".',null))
if(A.wQ(d,c,a.gal())==null)A.x(A.O('The span text "'+c+'" must start at column '+(a.gal()+1)+' in a line within "'+d+'".',null))
return s},
cE:function cE(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
DX(a){var s
A:{if(18===a){s=B.cu
break A}if(23===a){s=B.cv
break A}if(9===a){s=B.cw
break A}s=null
break A}return s},
hN:function hN(a,b){this.a=a
this.b=b},
c3:function c3(a,b,c){this.a=a
this.b=b
this.c=c},
DW(a,b,c,d,e,f,g){return new A.d6(d,b,c,e,f,a,g)},
d6:function d6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rg:function rg(){},
nV:function nV(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
o3:function o3(a){this.a=a},
o2:function o2(a){this.a=a},
o4:function o4(a){this.a=a},
o0:function o0(a){this.a=a},
o_:function o_(a){this.a=a},
o1:function o1(a){this.a=a},
nX:function nX(a){this.a=a},
nW:function nW(a){this.a=a},
nY:function nY(a){this.a=a},
nZ:function nZ(a,b){this.a=a
this.b=b},
dk:function dk(a,b,c,d,e){var _=this
_.a=a
_.b=!1
_.c=b
_.d=null
_.e=c
_.f=d
_.r=null
_.$ti=e},
vH:function vH(a,b){this.a=a
this.b=b},
vI:function vI(a,b,c){this.a=a
this.b=b
this.c=c},
vJ:function vJ(a,b,c){this.a=a
this.b=b
this.c=c},
rd:function rd(){},
eR:function eR(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
xD(a,b){var s=$.mv()
return new A.jH(A.E(t.N,t.a_),s,a)},
jH:function jH(a,b,c){this.d=a
this.b=b
this.a=c},
lz:function lz(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
Hp(a){var s=J.Cz(new v.G.URL(a,"file:///").pathname,"/")
return new A.bj(s,new A.x5(),A.a7(s).i("bj<1>"))},
x5:function x5(){},
nE:function nE(){},
kr:function kr(a,b,c){this.d=a
this.a=b
this.c=c},
bL:function bL(a,b){this.a=a
this.b=b},
vr:function vr(a){this.a=a
this.b=-1},
lO:function lO(){},
lP:function lP(){},
lR:function lR(){},
lS:function lS(){},
q3:function q3(a,b){this.a=a
this.b=b},
DM(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bn(r,"step")}return s},
dC:function dC(){},
dK:function dK(a){this.a=a},
jm:function jm(a){this.a=a},
f0(a){return new A.cJ(a)},
yS(a,b){var s,r,q,p
if(b==null)b=$.mv()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.cp(256)
r&2&&A.C(a)
a[q]=p}},
cJ:function cJ(a){this.a=a},
hM:function hM(a){this.a=a},
aO:function aO(){},
jb:function jb(){},
ja:function ja(){},
Ht(a,b){var s=null,r=new A.dM(t.kk)
return A.xf(a,new A.hY(s,s,s,s,s,s,s,s,new A.xd(new A.xc(r,A.wn(new A.xe(r)))),s,s,s,s),s,b)},
e4:function e4(a){var _=this
_.d=a
_.c=_.b=_.a=null},
xe:function xe(a){this.a=a},
xc:function xc(a,b){this.a=a
this.b=b},
xd:function xd(a){this.a=a},
t1:function t1(a){this.a=a},
rX:function rX(a,b,c){this.a=a
this.b=b
this.c=c},
t3:function t3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t2:function t2(a,b,c){this.b=a
this.c=b
this.d=c},
e_:function e_(){},
db:function db(){},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
bE(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.M(r)
if(q instanceof A.cJ){s=q
return s.a}else return 1}},
jn:function jn(a){this.b=this.a=$
this.d=a},
nJ:function nJ(a,b,c){this.a=a
this.b=b
this.c=c},
nG:function nG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nL:function nL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nN:function nN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nP:function nP(a,b){this.a=a
this.b=b},
nI:function nI(a){this.a=a},
nO:function nO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nT:function nT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nR:function nR(a,b){this.a=a
this.b=b},
nQ:function nQ(a,b){this.a=a
this.b=b},
nK:function nK(a,b,c){this.a=a
this.b=b
this.c=c},
nM:function nM(a,b){this.a=a
this.b=b},
nS:function nS(a,b){this.a=a
this.b=b},
nH:function nH(a,b,c){this.a=a
this.b=b
this.c=c},
fL:function fL(a,b){this.a=a
this.$ti=b},
mH:function mH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mJ:function mJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mI:function mI(a,b,c){this.a=a
this.b=b
this.c=c},
ce(a,b){var s=new A.p($.t,b.i("p<0>")),r=new A.ad(s,b.i("ad<0>")),q=t.m
A.b7(a,"success",new A.nj(r,a,b),!1,q)
A.b7(a,"error",new A.nk(r,a),!1,q)
return s},
CR(a,b){var s=new A.p($.t,b.i("p<0>")),r=new A.ad(s,b.i("ad<0>")),q=t.m
A.b7(a,"success",new A.no(r,a,b),!1,q)
A.b7(a,"error",new A.np(r,a),!1,q)
A.b7(a,"blocked",new A.nq(r),!1,q)
return s},
e8:function e8(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
uw:function uw(a,b){this.a=a
this.b=b},
ux:function ux(a,b){this.a=a
this.b=b},
nj:function nj(a,b,c){this.a=a
this.b=b
this.c=c},
nk:function nk(a,b){this.a=a
this.b=b},
no:function no(a,b,c){this.a=a
this.b=b
this.c=c},
np:function np(a,b){this.a=a
this.b=b},
nq:function nq(a){this.a=a},
mu(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
za(a,b,c){var s=a.read(b,c)
return s},
zb(a,b,c){var s=a.write(b,c)
return s},
z9(a,b){return A.a4(a.removeEntry(b,{recursive:!1}),t.X)},
z8(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.x(A.O("Target object does not implement the async iterable interface",null))
return new A.ec(new A.ov(),new A.fL(a,s),s.i("ec<a2.T,H>"))},
ov:function ov(){},
rY:function rY(a){this.a=a},
rZ:function rZ(a){this.a=a},
t0(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$t0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a4(p.fetch(new p.URL(a,A.aZ(p.location).href),null),t.m),$async$t0)
case 3:q=o.t_(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$t0,r)},
t_(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$t_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.jn(A.E(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.rY(p).hD(a),$async$t_)
case 3:q=new o.f1(new n.t1(m.E9(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$t_,r)},
f1:function f1(a){this.a=a},
EE(a){var s=new A.ig(a,new A.ad(new A.p($.t,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.nQ(a)
return s},
jJ(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$jJ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.mK(a)
n=A.xD("dart-memory",null)
m=$.mv()
l=new A.cX(o,n,new A.dM(t.p3),A.aU(p),A.E(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.hH(),$async$jJ)
case 3:s=4
return A.a(l.ed(),$async$jJ)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jJ,r)},
mK:function mK(a){this.a=null
this.b=a},
mN:function mN(a){this.a=a},
mM:function mM(a,b,c){this.a=a
this.b=b
this.c=c},
mL:function mL(a){this.a=a},
ig:function ig(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
v6:function v6(a){this.a=a},
v7:function v7(a){this.a=a},
v5:function v5(a){this.a=a},
v8:function v8(a,b,c){this.a=a
this.b=b
this.c=c},
va:function va(a,b){this.a=a
this.b=b},
v9:function v9(a,b){this.a=a
this.b=b},
uI:function uI(a,b,c){this.a=a
this.b=b
this.c=c},
uJ:function uJ(a,b){this.a=a
this.b=b},
lI:function lI(a,b){this.a=a
this.b=b},
cX:function cX(a,b,c,d,e,f,g){var _=this
_.d=a
_.f=_.e=!1
_.r=!0
_.w=b
_.x=c
_.y=d
_.z=e
_.b=f
_.a=g},
p6:function p6(a,b,c){this.a=a
this.b=b
this.c=c},
p7:function p7(){},
p5:function p5(a,b){this.a=a
this.b=b},
lA:function lA(a,b,c){this.a=a
this.b=b
this.c=c},
v4:function v4(a,b){this.a=a
this.b=b},
aP:function aP(){},
id:function id(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
i7:function i7(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
f9:function f9(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
ft:function ft(a,b,c,d,e){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.d=e
_.c=_.b=_.a=null},
zB(a){var s=A.xD("dart-memory",null),r=$.mv()
return new A.eO(s,r,a)},
kt(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$kt=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.mu()
if(j==null)throw A.b(A.f0(1))
p=t.m
s=3
return A.a(A.a4(j.getDirectory(),p),$async$kt)
case 3:o=d
n=A.Hp(a),m=J.K(n.a),n=new A.dc(m,n.b,n.$ti.i("dc<1>")),l=null
case 4:if(!n.k()){s=6
break}s=7
return A.a(A.a4(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$kt)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.at(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kt,r)},
ku(a){var s=0,r=A.h(t.m),q
var $async$ku=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.kt(a,!0),$async$ku)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ku,r)},
r9(a,b){var s=0,r=A.h(t.g_),q,p
var $async$r9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.mu()==null)throw A.b(A.f0(1))
p=A
s=3
return A.a(A.ku(a),$async$r9)
case 3:q=p.r8(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$r9,r)},
r8(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$r8=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.zB(c)
s=3
return A.a(p.cq(a,!1),$async$r8)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$r8,r)},
ew:function ew(a,b,c){this.c=a
this.a=b
this.b=c},
eO:function eO(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
ra:function ra(a,b){this.a=a
this.b=b},
lY:function lY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
vn:function vn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
E9(a,b){var s=A.aZ(a.exports.memory)
b.b!==$&&A.BE()
b.b=s
s=new A.rS(s,b,a.exports)
s.nN(a,b)
return s},
la(a,b){var s,r=A.bB(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
e2(a,b){var s=a.buffer,r=A.la(a,b)
return B.k.hg(A.bB(s,b,r))},
y3(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.k.hg(A.bB(s,b,c==null?A.la(a,b):c))},
rS:function rS(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
rT:function rT(a){this.a=a},
rU:function rU(a){this.a=a},
rV:function rV(a){this.a=a},
rW:function rW(a){this.a=a},
wC(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$wC=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.iW()
s=l!=null?3:5
break
case 3:p=A.G2()
s=6
return A.a(A.hW(l,p,null,null,!1),$async$wC)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.at({port:m.port1,lockName:p},new A.fT(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wC,r)},
G2(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bd(97+$.Ch().cp(26))
return r.charCodeAt(0)==0?r:r},
CH(a){return new A.fP(a)},
fT:function fT(a,b,c){this.a=a
this.b=b
this.c=c},
qE:function qE(){},
qI:function qI(a){this.a=a},
qJ:function qJ(a){this.a=a},
qH:function qH(a){this.a=a},
qG:function qG(a){this.a=a},
qF:function qF(a){this.a=a},
fP:function fP(a){this.a=a},
nU:function nU(){},
jl:function jl(a){this.a=a},
nF:function nF(a){this.a=a},
e0:function e0(){},
jC(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$jC=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.ku(a),$async$jC)
case 3:p=e
o=A.zB(c)
s=b?4:5
break
case 4:s=6
return A.a(o.cq(p,!0),$async$jC)
case 6:case 5:q=new A.jB(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jC,r)},
jB:function jB(a,b,c){this.a=a
this.b=b
this.c=c},
oH:function oH(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
hW(a,b,c,d,e){var s,r,q={},p=new A.p($.t,t.nI),o=new A.ad(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.xA(A.a4(a.request(b,s,A.ct(new A.t7(q,o))),r),new A.t8(q,d,o),r,t.K)
return p},
t7:function t7(a,b){this.a=a
this.b=b},
t8:function t8(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(a){this.a=a},
jo:function jo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
o6:function o6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o5:function o5(a,b){this.a=a
this.b=b},
o7:function o7(a){this.a=a},
hp:function hp(a){this.a=!1
this.b=a},
pY:function pY(a,b){this.a=a
this.b=b},
pX:function pX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pW:function pW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
CO(a){var s,r,q,p,o=A.l([],t.kC),n=t.c.a(a.a),m=t.bF.b(n)?n:new A.bw(n,A.a7(n).i("bw<1,k>"))
for(s=J.J(m),r=0;r<s.gl(m)/2;++r){q=r*2
o.push(new A.at(A.ev(B.c7,s.h(m,q)),s.h(m,q+1)))}s=A.fv(a.b)
q=A.fv(a.c)
p=A.fv(a.d)
return new A.dD(o,s,q,A.fv(a.g),p)},
dD:function dD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
DO(a){var s
if(J.u(a.t,"errorResponse")){s=A.CZ(a)
if(s!=null&&s instanceof A.cQ)return s
else return new A.eL(a.e)}else return new A.eL("Did not respond with expected type, got "+A.r(a))},
CZ(a){var s=a.s,r=s==null?null:A.ah(s)
A:{if(0===r){s=A.D_(t.c.a(a.r))
break A}if(1===r){s=B.a7
break A}s=null
break A}return s},
D_(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.w("Pattern matching error"))
n=new A.om()
l=A.ah(A.eh(l))
A.I(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.dE(i,h,A.bB(h,0,o))}else p=o
n=n.$1(k)
A.AA(g)
return new A.d6(s,r,l,g==null?o:A.ah(g),n,q,p)},
D0(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.E4(l)
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
DP(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.oH(a2,512,"transfer" in a2)
a5.lJ(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.DM(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.oL(l)
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
d=A.la(r,f)
f=new Uint8Array(e,f,d)
c=new A.cN(!1).cA(f,0,a,!0)
i=c
g=B.ai
break
case 4:i=s.kd(j)
g=B.aj
break
case 5:default:i=a
g=B.ak}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.la(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.cN(!1).cA(a0,0,a,!0)}return A.Bs(!1,b,0,0,a1,a,a3.wd(0))},
He(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
om:function om(){},
Bs(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
fD(a){var s,r,q,p,o=v.G,n=new o.Array()
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
GT(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
k1:function k1(a,b,c){this.a=a
this.b=b
this.$ti=c},
r5:function r5(){},
D3(a){var s,r
for(s=0;s<5;++s){r=B.bX[s]
if(r.c===a)return r}throw A.b(A.O("Unknown FS implementation: "+a,null))},
E3(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.ak
break A}q=A.aD(a)
p=q?a:j
if(q){s=p
r=B.af
break A}q=a instanceof A.aA
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
break A}q=A.c9(a)
k=q?a:j
if(q){s=k
r=B.aY
break A}throw A.b(A.O("Unsupported value: "+A.r(a),j))}return new A.at(r,s)},
E4(a){var s,r,q,p,o,n
if(a instanceof A.dE)return new A.at(a.a,a.b)
s=[]
r=J.J(a)
q=r.gl(a)
p=new Uint8Array(q)
for(o=0;o<r.gl(a);++o){n=A.E3(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.at(s,t.a.a(B.d.gaJ(p)))},
cT:function cT(a,b,c){this.c=a
this.a=b
this.b=c},
c6:function c6(a,b){this.a=a
this.b=b},
dE:function dE(a,b,c){this.a=a
this.b=b
this.c=c},
mn(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$mn=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.aZ(i.indexedDB)
i=$.iW()
i=i==null?null:A.hW(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bk(i,t.b3),$async$mn)
case 3:l=b
p=5
s=8
return A.a(A.CQ(m.open("drift_mock_db"),t.m),$async$mn)
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
if(i!=null)i.a.ar()
s=n.pop()
break
case 7:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$mn,r)},
wy(a){return A.GI(a)},
GI(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$wy=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.aZ(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.ct(new A.wz(j,m))
s=7
return A.a(A.CP(m,t.m),$async$wy)
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
return A.f($async$wy,r)},
fF(){var s=0,r=A.h(t.bF),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$fF=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.mu()
if(h==null){q=B.o
s=1
break}j=t.m
s=3
return A.a(A.a4(h.getDirectory(),j),$async$fF)
case 3:m=b
p=5
s=8
return A.a(A.a4(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$fF)
case 8:m=b
p=2
s=7
break
case 5:p=4
g=o.pop()
q=B.o
s=1
break
s=7
break
case 4:s=2
break
case 7:l=A.l([],t.s)
j=new A.bR(A.bF(A.z8(m),"stream",t.K),t.I)
p=9
case 12:s=14
return A.a(j.k(),$async$fF)
case 14:if(!b){s=13
break}k=j.gn()
if(J.u(k.kind,"directory"))J.bV(l,k.name)
s=12
break
case 13:n.push(11)
s=10
break
case 9:n=[2]
case 10:p=2
s=15
return A.a(j.A(),$async$fF)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fF,r)},
CP(a,b){var s=new A.p($.t,b.i("p<0>")),r=new A.ad(s,b.i("ad<0>")),q=t.m
A.b7(a,"success",new A.nh(r,a,b),!1,q)
A.b7(a,"error",new A.ni(r,a),!1,q)
return s},
CQ(a,b){var s=new A.p($.t,b.i("p<0>")),r=new A.ad(s,b.i("ad<0>")),q=t.m
A.b7(a,"success",new A.nl(r,a,b),!1,q)
A.b7(a,"error",new A.nm(r,a),!1,q)
A.b7(a,"blocked",new A.nn(r,a),!1,q)
return s},
wz:function wz(a,b){this.a=a
this.b=b},
nh:function nh(a,b,c){this.a=a
this.b=b
this.c=c},
ni:function ni(a,b){this.a=a
this.b=b},
nl:function nl(a,b,c){this.a=a
this.b=b
this.c=c},
nm:function nm(a,b){this.a=a
this.b=b},
nn:function nn(a,b){this.a=a
this.b=b},
qz:function qz(a,b){this.a=a
this.b=b},
h1:function h1(a,b){this.a=a
this.b=b},
d7:function d7(a,b){this.a=a
this.b=b},
eL:function eL(a){this.a=a},
cQ:function cQ(a){this.a=a},
Fz(a){var s=a.gm4()
return new A.ec(new A.wm(),s,A.o(s).i("ec<a2.T,H>"))},
A4(a,b){var s=A.l([],t.E),r=b==null?a.b:b
return new A.f8(a,r,new A.iv(),new A.iv(),new A.iv(),s)},
Ev(a,b,c){var s=t.S
s=new A.i5(c,A.l([],t.fV),a.a,new A.az(new A.p($.t,t.D),t.h),A.E(s,t.br),A.E(s,t.m))
s.nK(a)
s.nP(a,b,c)
return s},
AG(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
dn(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dn=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.mu()
if(b==null){q=B.ac
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.iW()
d=d==null?null:A.hW(d,"_drift_feature_detection",null,null,!1)
s=7
return A.a(t.fP.b(d)?d:A.bk(d,t.b3),$async$dn)
case 7:j=a1
d=t.m
s=8
return A.a(A.a4(b.getDirectory(),d),$async$dn)
case 8:m=a1
s=9
return A.a(A.a4(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$dn)
case 9:l=a1
s=10
return A.a(A.iO(l),$async$dn)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.xF(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a4(A.aZ(e),t.X),$async$dn)
case 13:q=B.ac
n=[1]
s=5
break
case 12:g=i
q=new A.iq(!0,g)
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
if(g!=null)g.a.ar()
if(k!=null)k.close()
s=m!=null&&l!=null?14:15
break
case 14:s=16
return A.a(A.z9(m,"_drift_feature_detection"),$async$dn)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dn,r)},
iO(a){return A.Gi(a)},
Gi(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$iO=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.a(A.a4(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$iO)
case 7:j=c
s=8
return A.a(A.a4(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$iO)
case 8:n=c
n.close()
l=j
q=new A.at(!0,l)
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
return A.a(A.a4(a.createSyncAccessHandle(),t.m),$async$iO)
case 9:m=c
q=new A.at(!1,m)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iO,r)},
wm:function wm(){},
iv:function iv(){this.a=null},
f8:function f8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
uq:function uq(a){this.a=a},
uu:function uu(a,b){this.a=a
this.b=b},
ur:function ur(a,b){this.a=a
this.b=b},
us:function us(a){this.a=a},
ut:function ut(a,b){this.a=a
this.b=b},
i5:function i5(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
ua:function ua(a){this.a=a},
uf:function uf(a,b){this.a=a
this.b=b},
ui:function ui(a,b,c){this.a=a
this.b=b
this.c=c},
uc:function uc(a,b){this.a=a
this.b=b},
ub:function ub(a,b){this.a=a
this.b=b},
uh:function uh(a,b){this.a=a
this.b=b},
ug:function ug(a,b){this.a=a
this.b=b},
uk:function uk(a,b){this.a=a
this.b=b},
uj:function uj(a,b){this.a=a
this.b=b},
ud:function ud(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ue:function ue(a,b){this.a=a
this.b=b},
u9:function u9(a){this.a=a},
jp:function jp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
oa:function oa(a){this.a=a},
o9:function o9(a){this.a=a},
o8:function o8(a,b){this.a=a
this.b=b},
tk:function tk(a,b,c,d,e,f){var _=this
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
tl:function tl(a,b){this.a=a
this.b=b},
tm:function tm(a,b){this.a=a
this.b=b},
tn:function tn(a){this.a=a},
Eb(){var s=v.G
if(A.Df(s,"DedicatedWorkerGlobalScope"))return new A.lr(s,new A.ls(s.location.href))
else return new A.lW(s,new A.ls(s.location.href))},
iH:function iH(){},
lr:function lr(a,b){this.a=a
this.b=b},
lW:function lW(a,b){this.a=a
this.b=b},
vC:function vC(a){this.a=a},
vD:function vD(a,b,c){this.a=a
this.b=b
this.c=c},
vB:function vB(a){this.a=a},
vz:function vz(a){this.a=a},
vA:function vA(a){this.a=a},
ls:function ls(a){this.a=a},
uD:function uD(a){this.a=a},
kI:function kI(a,b,c){this.c=a
this.a=b
this.b=c},
rr:function rr(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
eY:function eY(){},
lB:function lB(){},
c7:function c7(a,b){this.a=a
this.b=b},
b7(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.B4(new A.uG(c),t.m)
s=s==null?null:A.ct(s)}s=new A.ib(a,b,s,!1,e.i("ib<0>"))
s.j3()
return s},
B4(a,b){var s=$.t
if(s===B.f)return a
return s.ha(a,b)},
xw:function xw(a,b){this.a=a
this.$ti=b},
fc:function fc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ib:function ib(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
uG:function uG(a){this.a=a},
uH:function uH(a){this.a=a},
BH(a){return v.mangledGlobalNames[a]},
Bw(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
Di(a,b){return b in a},
xF(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
H3(a,b,c,d){var s,r,q,p,o,n=A.E(d,c.i("q<0>"))
for(s=c.i("y<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.l([],s)
n.j(0,p,o)
p=o}else p=o
J.bV(p,q)}return n},
HD(a){return a},
BF(a){if(a instanceof A.cR)return a
return new A.cR(a)},
HF(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.M(p)
if(q instanceof A.eP){s=q
throw A.b(A.DT("Invalid "+a+": "+s.a,s.b,s.gf8()))}else if(t.Y.b(q)){r=q
throw A.b(A.a1("Invalid "+a+' "'+b+'": '+r.gjz(),r.gf8(),r.gam()))}else throw p}},
mq(){var s,r,q,p=$.Ci(),o=$.Cb()+1
$.FE=o
s=B.a.jD(B.c.mt(o,36),8,"0")
r=J.zf(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.cp(36)]
return s+B.b.dH(r)},
mt(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.M(q)
if(r instanceof A.cF)throw q
else{s=r
r=A.ri("Corrupt "+a+" row: "+A.r(s))
throw A.b(r)}}},
wF(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.q
try{s=B.e.aE(a,null)
if(t.f.b(s)){q=A.ba(s,t.N,t.X)
return q}return B.q}catch(p){r=A.M(p)
q=A.ri("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
Bh(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.aR
try{s=B.e.aE(a,null)
if(t.j.b(s)){q=J.eq(s,t.N)
q=q.wf(q)
return q}return B.aR}catch(p){r=A.M(p)
q=A.ri("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
Bg(a){var s,r,q,p,o=null
if(a==null)return B.o
A.I(a)
if(a.length===0)return B.o
s=B.e.aE(a,o)
if(!t.j.b(s))throw A.b(A.a1("expected a JSON array, got "+J.cP(s).m(0),o,o))
r=A.l([],t.s)
for(q=J.K(s);q.k();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.x(A.a1("dirty-field member is "+J.cP(p).m(0)+", expected String",o,o)))}return r},
iP(a){var s,r=J.J(a)
if(r.gB(a))return null
s=J.bW(r.gC(a).gbh())
if(A.aD(s))return s
if(typeof s=="string")return A.hD(s,null)
return null},
Hz(a,b,c){var s=A.B(a,"'","\\'"),r="(store="+("'"+s+"'")+" && id~"+("'"+A.B(b+"%","'","\\'")+"'")
if(c==null)return r+")"
return r+" && id>"+("'"+A.B(c,"'","\\'")+"'")+")"},
Hm(a){var s,r,q,p,o,n,m,l,k=null
if(a==null)return k
if(!t.f.b(a))throw A.b(B.by)
s=a.h(0,"type")
if(!J.u(s,"aes-gcm"))throw A.b(A.a1("Unsupported fieldCipher type: "+A.r(s),k,k))
r=a.h(0,"key")
if(!t.j.b(r)||J.aw(r)!==32)throw A.b(B.bx)
q=new Uint8Array(32)
for(p=J.J(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.aD(n)||n<0||n>255)throw A.b(A.a1("Malformed AES-256-GCM key byte at index "+o+": "+A.r(n),k,k))
q[o]=n}A.yQ(q)
p=$.xk()
m=A.yQ(q)
l=new A.tG(new Uint32Array(60))
l.qC(m)
return new A.mC(l,p)},
Bj(a){var s,r=A.E(t.N,t.X)
r.j(0,"store",a.a)
r.j(0,"record_id",a.b)
r.j(0,"base",A.bG(a.c))
r.j(0,"local",A.bG(a.d))
r.j(0,"remote",A.bG(a.e))
s=a.f
s=A.P(s,A.o(s).c)
B.b.aW(s)
r.j(0,"dirty_local",s)
s=a.r
s=A.P(s,A.o(s).c)
B.b.aW(s)
r.j(0,"dirty_remote",s)
r.j(0,"detected_at",a.w)
s=a.x
if(s!=null)r.j(0,"resolved",A.bG(s))
return r},
Hi(){var s=A.Eb(),r=t.cj
new A.tk(s,B.be,A.l([],t.az),A.E(t.S,t.lp),new A.hp(A.xJ(r)),new A.hp(A.xJ(r))).dF()},
Be(){var s,r,q,p,o=null
try{o=A.y2()}catch(s){if(t.mA.b(A.M(s))){r=$.wl
if(r!=null)return r
throw s}else throw s}if(J.u(o,$.AD)){r=$.wl
r.toString
return r}$.AD=o
if($.yE()===$.iV())r=$.wl=o.bg(".").m(0)
else{q=o.jP()
p=q.length-1
r=$.wl=p===0?q:B.a.q(q,0,p)}return r},
Bo(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
Bi(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.Bo(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.q(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
Hd(a){var s,r,q,p
if(a.gl(0)===0)return!0
s=a.gC(0)
for(r=A.c5(a,1,null,a.$ti.i("R.E")),q=r.$ti,r=new A.a8(r,r.gl(0),q.i("a8<R.E>")),q=q.i("R.E");r.k();){p=r.d
if(!J.u(p==null?q.a(p):p,s))return!1}return!0},
Hs(a,b){var s=B.b.bT(a,null)
if(s<0)throw A.b(A.O(A.r(a)+" contains no null elements.",null))
a[s]=b},
BA(a,b){var s=B.b.bT(a,b)
if(s<0)throw A.b(A.O(A.r(a)+" contains no elements matching "+b.m(0)+".",null))
a[s]=null},
GP(a,b){var s,r,q,p
for(s=new A.bY(a),r=t.V,s=new A.a8(s,s.gl(0),r.i("a8<D.E>")),r=r.i("D.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
wQ(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.bU(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.bT(a,b)
while(r!==-1){q=r===0?0:B.a.hB(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.bU(a,b,r+1)}return null},
yt(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.d6(A.e2(r.b,p.sqlite3_errmsg(q)),A.e2(s.b,s.d.sqlite3_errstr(o))+" (code "+A.r(o)+")",c,n,d,e,f)},
yB(a,b,c,d,e){throw A.b(A.yt(a.a,a.b,b,c,d,e))},
zc(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bd("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.cp(61)))
return s.charCodeAt(0)==0?s:s},
r2(a){var s=0,r=A.h(t.lo),q
var $async$r2=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a4(a.arrayBuffer(),t.a),$async$r2)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$r2,r)}},B={}
var w=[A,J,B]
var $={}
A.xH.prototype={}
J.jL.prototype={
X(a,b){return a===b},
gN(a){return A.hC(a)},
m(a){return"Instance of '"+A.kj(a)+"'"},
gah(a){return A.bt(A.ym(this))}}
J.jN.prototype={
m(a){return String(a)},
gN(a){return a?519018:218159},
gah(a){return A.bt(t.y)},
$ia9:1,
$iV:1}
J.hd.prototype={
X(a,b){return null==b},
m(a){return"null"},
gN(a){return 0},
gah(a){return A.bt(t.P)},
$ia9:1,
$iQ:1}
J.ar.prototype={$iH:1}
J.d_.prototype={
gN(a){return 0},
gah(a){return B.cN},
m(a){return String(a)}}
J.kg.prototype={}
J.da.prototype={}
J.bx.prototype={
m(a){var s=a[$.BO()]
if(s==null)s=a[$.eo()]
if(s==null)return this.nA(a)
return"JavaScript function for "+J.av(s)}}
J.b9.prototype={
gN(a){return 0},
m(a){return String(a)}}
J.ey.prototype={
gN(a){return 0},
m(a){return String(a)}}
J.y.prototype={
hb(a,b){return new A.bw(a,A.a7(a).i("@<1>").a0(b).i("bw<1,2>"))},
t(a,b){a.$flags&1&&A.C(a,29)
a.push(b)},
hQ(a,b){var s
a.$flags&1&&A.C(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.r1(b,null))
return a.splice(b,1)[0]},
az(a,b,c){var s
a.$flags&1&&A.C(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.r1(b,null))
a.splice(b,0,c)},
jt(a,b,c){var s,r
a.$flags&1&&A.C(a,"insertAll",2)
A.zz(b,0,a.length,"index")
if(!t.O.b(c))c=J.CB(c)
s=J.aw(c)
a.length=a.length+s
r=b+s
this.ab(a,r,a.length,a,b)
this.af(a,b,r,c)},
jL(a){a.$flags&1&&A.C(a,"removeLast",1)
if(a.length===0)throw A.b(A.wK(a,-1))
return a.pop()},
F(a,b){var s
a.$flags&1&&A.C(a,"remove",1)
for(s=0;s<a.length;++s)if(J.u(a[s],b)){a.splice(s,1)
return!0}return!1},
rz(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.ao(a))}q=p.length
if(q===o)return
this.sl(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
E(a,b){var s
a.$flags&1&&A.C(a,"addAll",2)
if(Array.isArray(b)){this.nW(a,b)
return}for(s=J.K(b);s.k();)a.push(s.gn())},
nW(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.ao(a))
for(s=0;s<r;++s)a.push(b[s])},
ai(a){a.$flags&1&&A.C(a,"clear","clear")
a.length=0},
co(a,b,c){return new A.a6(a,b,A.a7(a).i("@<1>").a0(c).i("a6<1,2>"))},
L(a,b){var s,r=A.aE(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.r(a[s])
return r.join(b)},
dH(a){return this.L(a,"")},
cr(a,b){return A.c5(a,0,A.bF(b,"count",t.S),A.a7(a).c)},
b5(a,b){return A.c5(a,b,null,A.a7(a).c)},
ex(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.ao(a))}if(c!=null)return c.$0()
throw A.b(A.aq())},
m0(a,b){return this.ex(a,b,null)},
a3(a,b){return a[b]},
S(a,b,c){if(b<0||b>a.length)throw A.b(A.ak(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.ak(c,b,a.length,"end",null))
if(b===c)return A.l([],A.a7(a))
return A.l(a.slice(b,c),A.a7(a))},
aX(a,b){return this.S(a,b,null)},
f3(a,b,c){A.aX(b,c,a.length)
return A.c5(a,b,c,A.a7(a).c)},
gC(a){if(a.length>0)return a[0]
throw A.b(A.aq())},
ga_(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.aq())},
gan(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.aq())
throw A.b(A.ha())},
mm(a,b,c){a.$flags&1&&A.C(a,18)
A.aX(b,c,a.length)
a.splice(b,c-b)},
ab(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.C(a,5)
A.aX(b,c,a.length)
s=c-b
if(s===0)return
A.aW(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.mB(d,e).cs(0,!1)
q=0}p=J.J(r)
if(q+s>p.gl(r))throw A.b(A.ze())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
af(a,b,c,d){return this.ab(a,b,c,d,0)},
cJ(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.ao(a))}return!1},
dC(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.ao(a))}return!0},
c1(a,b){var s,r,q,p,o
a.$flags&2&&A.C(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.FI()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a7(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.dp(b,2))
if(p>0)this.rA(a,p)},
aW(a){return this.c1(a,null)},
rA(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bT(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.u(a[s],b))return s
return-1},
cR(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.u(a[s],b))return s
return-1},
D(a,b){var s
for(s=0;s<a.length;++s)if(J.u(a[s],b))return!0
return!1},
gB(a){return a.length===0},
gW(a){return a.length!==0},
m(a){return A.pd(a,"[","]")},
cs(a,b){var s=A.l(a.slice(0),A.a7(a))
return s},
dS(a){return this.cs(a,!0)},
gu(a){return new J.er(a,a.length,A.a7(a).i("er<1>"))},
gN(a){return A.hC(a)},
gl(a){return a.length},
sl(a,b){a.$flags&1&&A.C(a,"set length","change the length of")
if(b<0)throw A.b(A.ak(b,0,null,"newLength",null))
if(b>a.length)A.a7(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.wK(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.C(a)
if(!(b>=0&&b<a.length))throw A.b(A.wK(a,b))
a[b]=c},
jT(a,b){return new A.bp(a,b.i("bp<0>"))},
v9(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gah(a){return A.bt(A.a7(a))},
$iaS:1,
$iF:1,
$in:1,
$iq:1}
J.jM.prototype={
wk(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kj(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.pe.prototype={}
J.er.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.A(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.dL.prototype={
T(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gjw(b)
if(this.gjw(a)===s)return 0
if(this.gjw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gjw(a){return a===0?1/a<0:a<0},
jQ(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.Y(""+a+".toInt()"))},
ty(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".ceil()"))},
uE(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".floor()"))},
mq(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.Y(""+a+".round()"))},
w8(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
cK(a,b,c){if(this.T(b,c)>0)throw A.b(A.ej(b))
if(this.T(a,b)<0)return b
if(this.T(a,c)>0)return c
return a},
mt(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.ak(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.x(A.Y("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.a.b4("0",q)},
m(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gN(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
f1(a,b){return a+b},
aG(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
kk(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.lp(a,b)},
R(a,b){return(a|0)===a?a/b|0:this.lp(a,b)},
lp(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.Y("Result of truncating division is "+A.r(s)+": "+A.r(a)+" ~/ "+b))},
c_(a,b){if(b<0)throw A.b(A.ej(b))
return b>31?0:a<<b>>>0},
dY(a,b){var s
if(b<0)throw A.b(A.ej(b))
if(a>0)s=this.j0(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
a8(a,b){var s
if(a>0)s=this.j0(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
j1(a,b){if(0>b)throw A.b(A.ej(b))
return this.j0(a,b)},
j0(a,b){return b>31?0:a>>>b},
nd(a,b){return a>b},
gah(a){return A.bt(t.o)},
$iam:1,
$ia3:1}
J.hc.prototype={
glK(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.R(q,4294967296)
s+=32}return s-Math.clz32(q)},
gah(a){return A.bt(t.S)},
$ia9:1,
$ii:1}
J.jO.prototype={
gah(a){return A.bt(t.i)},
$ia9:1}
J.cY.prototype={
j8(a,b,c){var s=b.length
if(c>s)throw A.b(A.ak(c,0,s,null,null))
return new A.m_(b,a,c)},
h7(a,b){return this.j8(a,b,0)},
dK(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.ak(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.eT(c,a)},
cg(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ac(a,r-s)},
mo(a,b,c){A.zz(0,0,a.length,"startIndex")
return A.Hy(a,b,c,0)},
f9(a,b){var s=A.l(a.split(b),t.s)
return s},
cW(a,b,c,d){var s=A.aX(b,c,a.length)
return A.BD(a,b,s,d)},
a6(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ak(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
O(a,b){return this.a6(a,b,0)},
q(a,b,c){return a.substring(b,A.aX(b,c,a.length))},
ac(a,b){return this.q(a,b,null)},
d_(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.Dj(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.zj(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
wi(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.zj(r,s))},
b4(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.bg)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
jD(a,b,c){var s=b-a.length
if(s<=0)return a
return this.b4(c,s)+a},
vG(a,b){var s=b-a.length
if(s<=0)return a
return a+this.b4(" ",s)},
bU(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ak(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bT(a,b){return this.bU(a,b,0)},
hB(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.ak(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
cR(a,b){return this.hB(a,b,null)},
D(a,b){return A.Hv(a,b,0)},
T(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
m(a){return a},
gN(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gah(a){return A.bt(t.N)},
gl(a){return a.length},
$iaS:1,
$ia9:1,
$iam:1,
$ik:1}
A.uv.prototype={
t(a,b){var s,r,q,p,o,n,m,l,k=this,j=J.J(b),i=j.gl(b)
if(i===0)return
s=k.a+i
r=k.b
q=r.length
if(q<s){p=s*2
if(p<1024)p=1024
else{o=p-1
o|=B.c.a8(o,1)
o|=o>>>2
o|=o>>>4
o|=o>>>8
p=((o|o>>>16)>>>0)+1}n=new Uint8Array(p)
B.d.af(n,0,q,r)
k.b=n
r=n}if(t.p.b(b))B.d.af(r,k.a,s,b)
else for(m=0;m<i;++m){r=k.b
q=k.a
l=j.h(b,m)
r.$flags&2&&A.C(r)
r[q+m]=l}k.a=s},
jO(){var s,r=this
if(r.a===0)return $.mz()
s=J.du(B.d.gaJ(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.mz()
return s},
gl(a){return this.a}}
A.u6.prototype={
t(a,b){var s=t.p.b(b)?b:new Uint8Array(A.br(b))
this.b.push(s)
this.a=this.a+s.length},
jO(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.mz()
s=l.b
r=s.length
if(r===1){q=s[0]
l.a=0
B.b.ai(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.A)(s),++o,p=m){n=s[o]
m=p+n.length
B.d.af(q,p,m,n)}l.a=0
B.b.ai(s)
return q},
gl(a){return this.a}}
A.dd.prototype={
gu(a){return new A.jf(J.K(this.gbb()),A.o(this).i("jf<1,2>"))},
gl(a){return J.aw(this.gbb())},
gB(a){return J.cc(this.gbb())},
gW(a){return J.iY(this.gbb())},
b5(a,b){var s=A.o(this)
return A.je(J.mB(this.gbb(),b),s.c,s.y[1])},
cr(a,b){var s=A.o(this)
return A.je(J.xq(this.gbb(),b),s.c,s.y[1])},
a3(a,b){return A.o(this).y[1].a(J.mA(this.gbb(),b))},
gC(a){return A.o(this).y[1].a(J.bW(this.gbb()))},
ga_(a){return A.o(this).y[1].a(J.xo(this.gbb()))},
gan(a){return A.o(this).y[1].a(J.xp(this.gbb()))},
m(a){return J.av(this.gbb())}}
A.jf.prototype={
k(){return this.a.k()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.dy.prototype={
gbb(){return this.a}}
A.i8.prototype={$iF:1}
A.i4.prototype={
h(a,b){return this.$ti.y[1].a(J.U(this.a,b))},
j(a,b,c){J.bU(this.a,b,this.$ti.c.a(c))},
sl(a,b){J.Cx(this.a,b)},
t(a,b){J.bV(this.a,this.$ti.c.a(b))},
c1(a,b){var s=b==null?null:new A.u7(this,b)
J.yO(this.a,s)},
f3(a,b,c){var s=this.$ti
return A.je(J.Cv(this.a,b,c),s.c,s.y[1])},
ab(a,b,c,d,e){var s=this.$ti
J.Cy(this.a,b,c,A.je(d,s.y[1],s.c),e)},
af(a,b,c,d){return this.ab(0,b,c,d,0)},
$iF:1,
$iq:1}
A.u7.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bw.prototype={
hb(a,b){return new A.bw(this.a,this.$ti.i("@<1>").a0(b).i("bw<1,2>"))},
gbb(){return this.a}}
A.cZ.prototype={
m(a){return"LateInitializationError: "+this.a}}
A.km.prototype={
m(a){return"ReachabilityError: "+this.a}}
A.bY.prototype={
gl(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.x3.prototype={
$0(){return A.c_(null,t.H)},
$S:3}
A.r7.prototype={}
A.F.prototype={}
A.R.prototype={
gu(a){var s=this
return new A.a8(s,s.gl(s),A.o(s).i("a8<R.E>"))},
gB(a){return this.gl(this)===0},
gC(a){if(this.gl(this)===0)throw A.b(A.aq())
return this.a3(0,0)},
ga_(a){var s=this
if(s.gl(s)===0)throw A.b(A.aq())
return s.a3(0,s.gl(s)-1)},
gan(a){var s=this
if(s.gl(s)===0)throw A.b(A.aq())
if(s.gl(s)>1)throw A.b(A.ha())
return s.a3(0,0)},
dC(a,b){var s,r=this,q=r.gl(r)
for(s=0;s<q;++s){if(!b.$1(r.a3(0,s)))return!1
if(q!==r.gl(r))throw A.b(A.ao(r))}return!0},
L(a,b){var s,r,q,p=this,o=p.gl(p)
if(b.length!==0){if(o===0)return""
s=A.r(p.a3(0,0))
if(o!==p.gl(p))throw A.b(A.ao(p))
for(r=s,q=1;q<o;++q){r=r+b+A.r(p.a3(0,q))
if(o!==p.gl(p))throw A.b(A.ao(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.r(p.a3(0,q))
if(o!==p.gl(p))throw A.b(A.ao(p))}return r.charCodeAt(0)==0?r:r}},
dH(a){return this.L(0,"")},
co(a,b,c){return new A.a6(this,b,A.o(this).i("@<R.E>").a0(c).i("a6<1,2>"))},
w_(a,b){var s,r,q=this,p=q.gl(q)
if(p===0)throw A.b(A.aq())
s=q.a3(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a3(0,r))
if(p!==q.gl(q))throw A.b(A.ao(q))}return s},
b5(a,b){return A.c5(this,b,null,A.o(this).i("R.E"))},
cr(a,b){return A.c5(this,0,A.bF(b,"count",t.S),A.o(this).i("R.E"))}}
A.c4.prototype={
i6(a,b,c,d){var s,r=this.b
A.aW(r,"start")
s=this.c
if(s!=null){A.aW(s,"end")
if(r>s)throw A.b(A.ak(r,0,s,"start",null))}},
goy(){var s=J.aw(this.a),r=this.c
if(r==null||r>s)return s
return r},
grR(){var s=J.aw(this.a),r=this.b
if(r>s)return s
return r},
gl(a){var s,r=J.aw(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a3(a,b){var s=this,r=s.grR()+b
if(b<0||r>=s.goy())throw A.b(A.jI(b,s.gl(0),s,null,"index"))
return J.mA(s.a,r)},
b5(a,b){var s,r,q=this
A.aW(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.dH(q.$ti.i("dH<1>"))
return A.c5(q.a,s,r,q.$ti.c)},
cr(a,b){var s,r,q,p=this
A.aW(b,"count")
s=p.c
r=p.b
if(s==null)return A.c5(p.a,r,B.c.f1(r,b),p.$ti.c)
else{q=B.c.f1(r,b)
if(s<q)return p
return A.c5(p.a,r,q,p.$ti.c)}},
cs(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.J(n),l=m.gl(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.zg(0,n):J.xE(0,n)}r=A.aE(s,m.a3(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a3(n,o+q)
if(m.gl(n)<l)throw A.b(A.ao(p))}return r},
dS(a){return this.cs(0,!0)}}
A.a8.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.J(q),o=p.gl(q)
if(r.b!==o)throw A.b(A.ao(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a3(q,s);++r.c
return!0}}
A.cA.prototype={
gu(a){return new A.k_(J.K(this.a),this.b,A.o(this).i("k_<1,2>"))},
gl(a){return J.aw(this.a)},
gB(a){return J.cc(this.a)},
gC(a){return this.b.$1(J.bW(this.a))},
ga_(a){return this.b.$1(J.xo(this.a))},
gan(a){return this.b.$1(J.xp(this.a))},
a3(a,b){return this.b.$1(J.mA(this.a,b))}}
A.dG.prototype={$iF:1}
A.k_.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.a6.prototype={
gl(a){return J.aw(this.a)},
a3(a,b){return this.b.$1(J.mA(this.a,b))}}
A.bj.prototype={
gu(a){return new A.dc(J.K(this.a),this.b,this.$ti.i("dc<1>"))},
co(a,b,c){return new A.cA(this,b,this.$ti.i("@<1>").a0(c).i("cA<1,2>"))}}
A.dc.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.h_.prototype={
gu(a){return new A.jz(J.K(this.a),this.b,B.ar,this.$ti.i("jz<1,2>"))}}
A.jz.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
k(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.k();){q.d=null
if(s.k()){q.c=null
p=J.K(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0}}
A.dZ.prototype={
gu(a){var s=this.a
return new A.kM(s.gu(s),this.b,A.o(this).i("kM<1>"))}}
A.fY.prototype={
gl(a){var s=this.a,r=s.gl(s)
s=this.b
if(B.c.nd(r,s))return s
return r},
$iF:1}
A.kM.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.cD.prototype={
b5(a,b){A.iZ(b,"count")
A.aW(b,"count")
return new A.cD(this.a,this.b+b,A.o(this).i("cD<1>"))},
gu(a){var s=this.a
return new A.kv(s.gu(s),this.b,A.o(this).i("kv<1>"))}}
A.eu.prototype={
gl(a){var s=this.a,r=s.gl(s)-this.b
if(r>=0)return r
return 0},
b5(a,b){A.iZ(b,"count")
A.aW(b,"count")
return new A.eu(this.a,this.b+b,this.$ti)},
$iF:1}
A.kv.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gn(){return this.a.gn()}}
A.dH.prototype={
gu(a){return B.ar},
gB(a){return!0},
gl(a){return 0},
gC(a){throw A.b(A.aq())},
ga_(a){throw A.b(A.aq())},
gan(a){throw A.b(A.aq())},
a3(a,b){throw A.b(A.ak(b,0,0,"index",null))},
dC(a,b){return!0},
co(a,b,c){return new A.dH(c.i("dH<0>"))},
b5(a,b){A.aW(b,"count")
return this},
cr(a,b){A.aW(b,"count")
return this},
cs(a,b){var s=J.xE(0,this.$ti.c)
return s}}
A.jw.prototype={
k(){return!1},
gn(){throw A.b(A.aq())}}
A.bp.prototype={
gu(a){return new A.l0(J.K(this.a),this.$ti.i("l0<1>"))}}
A.l0.prototype={
k(){var s,r
for(s=this.a,r=this.$ti.c;s.k();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.h2.prototype={
sl(a,b){throw A.b(A.Y(u.O))},
t(a,b){throw A.b(A.Y("Cannot add to a fixed-length list"))}}
A.kS.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
sl(a,b){throw A.b(A.Y("Cannot change the length of an unmodifiable list"))},
t(a,b){throw A.b(A.Y("Cannot add to an unmodifiable list"))},
c1(a,b){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
ab(a,b,c,d,e){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
af(a,b,c,d){return this.ab(0,b,c,d,0)}}
A.eZ.prototype={}
A.dU.prototype={
gl(a){return J.aw(this.a)},
a3(a,b){var s=this.a,r=J.J(s)
return r.a3(s,r.gl(s)-1-b)}}
A.kJ.prototype={
gN(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gN(this.a)&536870911
this._hashCode=s
return s},
m(a){return'Symbol("'+this.a+'")'},
X(a,b){if(b==null)return!1
return b instanceof A.kJ&&this.a===b.a}}
A.iI.prototype={}
A.at.prototype={$r:"+(1,2)",$s:1}
A.iq.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.ir.prototype={$r:"+controller,sync(1,2)",$s:3}
A.fk.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.lM.prototype={$r:"+result,resultCode(1,2)",$s:5}
A.ee.prototype={$r:"+(1,2,3)",$s:6}
A.ef.prototype={$r:"+(1,2,3,4)",$s:7}
A.lN.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:8}
A.fU.prototype={
gB(a){return this.gl(this)===0},
gW(a){return this.gl(this)!==0},
m(a){return A.pC(this)},
j(a,b,c){A.CS()},
gbm(){return new A.fo(this.us(),A.o(this).i("fo<X<1,2>>"))},
us(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$gbm(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gP(),o=o.gu(o),n=A.o(s).i("X<1,2>")
case 2:if(!o.k()){r=3
break}m=o.gn()
r=4
return a.b=new A.X(m,s.h(0,m),n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
cS(a,b,c,d){var s=A.E(c,d)
this.ad(0,new A.nz(this,b,s))
return s},
$iG:1}
A.nz.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.aR.prototype={
gl(a){return this.b.length},
gkX(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
H(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.H(b))return null
return this.b[this.a[b]]},
ad(a,b){var s,r,q=this.gkX(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gP(){return new A.eb(this.gkX(),this.$ti.i("eb<1>"))},
gbh(){return new A.eb(this.b,this.$ti.i("eb<2>"))}}
A.eb.prototype={
gl(a){return this.a.length},
gB(a){return 0===this.a.length},
gW(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.ff(s,s.length,this.$ti.i("ff<1>"))}}
A.ff.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.fV.prototype={
t(a,b){A.CT()}}
A.cw.prototype={
gl(a){return this.b},
gB(a){return this.b===0},
gW(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.ff(s,s.length,r.$ti.i("ff<1>"))},
D(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.p8.prototype={
X(a,b){if(b==null)return!1
return b instanceof A.h9&&this.a.X(0,b.a)&&A.yv(this)===A.yv(b)},
gN(a){return A.d4(this.a,A.yv(this),B.h,B.h,B.h,B.h,B.h)},
m(a){var s=B.b.L([A.bt(this.$ti.c)],", ")
return this.a.m(0)+" with "+("<"+s+">")}}
A.h9.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.Hc(A.mo(this.a),this.$ti)}}
A.qB.prototype={
$0(){return B.v.uE(1000*this.a.now())},
$S:10}
A.hJ.prototype={}
A.rJ.prototype={
bz(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.hw.prototype={
m(a){return"Null check operator used on a null value"}}
A.jP.prototype={
m(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.kR.prototype={
m(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.kb.prototype={
m(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iL:1}
A.fZ.prototype={}
A.it.prototype={
m(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ias:1}
A.dA.prototype={
m(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.BI(r==null?"unknown":r)+"'"},
gah(a){var s=A.mo(this)
return A.bt(s==null?A.bu(this):s)},
gxc(){return this},
$C:"$1",
$R:1,
$D:null}
A.n4.prototype={$C:"$0",$R:0}
A.n5.prototype={$C:"$2",$R:2}
A.rH.prototype={}
A.rh.prototype={
m(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.BI(s)+"'"}}
A.fM.prototype={
X(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fM))return!1
return this.$_target===b.$_target&&this.a===b.a},
gN(a){return(A.ms(this.a)^A.hC(this.$_target))>>>0},
m(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kj(this.a)+"'")}}
A.ks.prototype={
m(a){return"RuntimeError: "+this.a}}
A.bz.prototype={
gl(a){return this.a},
gB(a){return this.a===0},
gW(a){return this.a!==0},
gP(){return new A.Z(this,A.o(this).i("Z<1>"))},
gbh(){return new A.aT(this,A.o(this).i("aT<2>"))},
gbm(){return new A.aH(this,A.o(this).i("aH<1,2>"))},
H(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.m6(a)},
m6(a){var s=this.d
if(s==null)return!1
return this.dG(this.kR(s,a),a)>=0},
E(a,b){b.ad(0,new A.pf(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.m7(b)},
m7(a){var s,r,q=this.d
if(q==null)return null
s=this.kR(q,a)
r=this.dG(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.kl(s==null?q.b=q.iO():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.kl(r==null?q.c=q.iO():r,b,c)}else q.m9(b,c)},
m9(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.iO()
s=p.eC(a)
r=o[s]
if(r==null)o[s]=[p.i8(a,b)]
else{q=p.dG(r,a)
if(q>=0)r[q].b=b
else r.push(p.i8(a,b))}},
mh(a,b){var s,r,q=this
if(q.H(a)){s=q.h(0,a)
return s==null?A.o(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
F(a,b){var s=this
if(typeof b=="string")return s.lg(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.lg(s.c,b)
else return s.m8(b)},
m8(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.eC(a)
r=n[s]
q=o.dG(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.lv(p)
if(r.length===0)delete n[s]
return p.b},
ai(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.i7()}},
ad(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.ao(s))
r=r.c}},
kl(a,b,c){var s=a[b]
if(s==null)a[b]=this.i8(b,c)
else s.b=c},
lg(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.lv(s)
delete a[b]
return s.b},
i7(){this.r=this.r+1&1073741823},
i8(a,b){var s,r=this,q=new A.ph(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.i7()
return q},
lv(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.i7()},
eC(a){return J.a0(a)&1073741823},
kR(a,b){return a[this.eC(b)]},
dG(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.u(a[r].a,b))return r
return-1},
m(a){return A.pC(this)},
iO(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.pf.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.ph.prototype={}
A.Z.prototype={
gl(a){return this.a.a},
gB(a){return this.a.a===0},
gu(a){var s=this.a
return new A.bK(s,s.r,s.e,this.$ti.i("bK<1>"))},
D(a,b){return this.a.H(b)}}
A.bK.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ao(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.aT.prototype={
gl(a){return this.a.a},
gB(a){return this.a.a===0},
gu(a){var s=this.a
return new A.aL(s,s.r,s.e,this.$ti.i("aL<1>"))}}
A.aL.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ao(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.aH.prototype={
gl(a){return this.a.a},
gB(a){return this.a.a===0},
gu(a){var s=this.a
return new A.jV(s,s.r,s.e,this.$ti.i("jV<1,2>"))}}
A.jV.prototype={
gn(){var s=this.d
s.toString
return s},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ao(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.X(s.a,s.b,r.$ti.i("X<1,2>"))
r.c=s.c
return!0}}}
A.he.prototype={
eC(a){return A.ms(a)&1073741823},
dG(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.wY.prototype={
$1(a){return this.a(a)},
$S:29}
A.wZ.prototype={
$2(a,b){return this.a(a,b)},
$S:164}
A.x_.prototype={
$1(a){return this.a(a)},
$S:52}
A.fj.prototype={
gah(a){return A.bt(this.kS())},
kS(){return A.GV(this.$r,this.fj())},
m(a){return this.lt(!1)},
lt(a){var s,r,q,p,o,n=this.oG(),m=this.fj(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.zv(o):l+A.r(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
oG(){var s,r=this.$s
while($.vp.length<=r)$.vp.push(null)
s=$.vp[r]
if(s==null){s=this.oi()
$.vp[r]=s}return s},
oi(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.zf(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.d0(j,k)}}
A.lJ.prototype={
fj(){return[this.a,this.b]},
X(a,b){if(b==null)return!1
return b instanceof A.lJ&&this.$s===b.$s&&J.u(this.a,b.a)&&J.u(this.b,b.b)},
gN(a){return A.d4(this.$s,this.a,this.b,B.h,B.h,B.h,B.h)}}
A.lK.prototype={
fj(){return[this.a,this.b,this.c]},
X(a,b){var s=this
if(b==null)return!1
return b instanceof A.lK&&s.$s===b.$s&&J.u(s.a,b.a)&&J.u(s.b,b.b)&&J.u(s.c,b.c)},
gN(a){var s=this
return A.d4(s.$s,s.a,s.b,s.c,B.h,B.h,B.h)}}
A.lL.prototype={
fj(){return this.a},
X(a,b){if(b==null)return!1
return b instanceof A.lL&&this.$s===b.$s&&A.ER(this.a,b.a)},
gN(a){return A.d4(this.$s,A.zq(this.a),B.h,B.h,B.h,B.h,B.h)}}
A.ex.prototype={
m(a){return"RegExp/"+this.a+"/"+this.b.flags},
gl2(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.xG(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gqK(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.xG(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
dD(a){var s=this.b.exec(a)
if(s==null)return null
return new A.fi(s)},
j8(a,b,c){var s=b.length
if(c>s)throw A.b(A.ak(c,0,s,null,null))
return new A.lc(this,b,c)},
h7(a,b){return this.j8(0,b,0)},
oC(a,b){var s,r=this.gl2()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.fi(s)},
oB(a,b){var s,r=this.gqK()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.fi(s)},
dK(a,b,c){if(c<0||c>b.length)throw A.b(A.ak(c,0,b.length,null,null))
return this.oB(b,c)}}
A.fi.prototype={
gJ(){return this.b.index},
gI(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$idP:1,
$ikn:1}
A.lc.prototype={
gu(a){return new A.ld(this.a,this.b,this.c)}}
A.ld.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.oC(l,s)
if(p!=null){m.d=p
o=p.gI()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){r=l.charCodeAt(q)
if(r>=55296&&r<=56319){s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1}}
A.eT.prototype={
gI(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.b(A.r1(b,null))
return this.c},
$idP:1,
gJ(){return this.a}}
A.m_.prototype={
gu(a){return new A.vK(this.a,this.b,this.c)},
gC(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.eT(r,s)
throw A.b(A.aq())}}
A.vK.prototype={
k(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.eT(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s}}
A.ll.prototype={
ba(){var s=this.b
if(s===this)throw A.b(new A.cZ("Local '"+this.a+"' has not been initialized."))
return s},
bj(){var s=this.b
if(s===this)throw A.b(A.zm(this.a))
return s},
sm_(a){var s=this
if(s.b!==s)throw A.b(new A.cZ("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.eE.prototype={
gah(a){return B.cG},
h9(a,b,c){A.iJ(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
lH(a){return this.h9(a,0,null)},
h8(a,b,c){var s
A.iJ(a,b,c)
s=new DataView(a,b)
return s},
lG(a){return this.h8(a,0,null)},
$ia9:1,
$idx:1}
A.eD.prototype={$ieD:1}
A.hr.prototype={
gaJ(a){if(((a.$flags|0)&2)!==0)return new A.m5(a.buffer)
else return a.buffer},
qy(a,b,c,d){var s=A.ak(b,0,c,d,null)
throw A.b(s)},
kv(a,b,c,d){if(b>>>0!==b||b>c)this.qy(a,b,c,d)}}
A.m5.prototype={
h9(a,b,c){var s=A.bB(this.a,b,c)
s.$flags=3
return s},
lH(a){return this.h9(0,0,null)},
h8(a,b,c){var s=A.zo(this.a,b,c)
s.$flags=3
return s},
lG(a){return this.h8(0,0,null)},
$idx:1}
A.hq.prototype={
gah(a){return B.cH},
$ia9:1,
$ixr:1}
A.eF.prototype={
gl(a){return a.length},
ln(a,b,c,d,e){var s,r,q=a.length
this.kv(a,b,q,"start")
this.kv(a,c,q,"end")
if(b>c)throw A.b(A.ak(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.O(e,null))
r=d.length
if(r-e<s)throw A.b(A.w("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iaS:1,
$iby:1}
A.d3.prototype={
h(a,b){A.cO(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.C(a)
A.cO(b,a,a.length)
a[b]=c},
ab(a,b,c,d,e){a.$flags&2&&A.C(a,5)
if(t.dQ.b(d)){this.ln(a,b,c,d,e)
return}this.kh(a,b,c,d,e)},
af(a,b,c,d){return this.ab(a,b,c,d,0)},
$iF:1,
$in:1,
$iq:1}
A.bA.prototype={
j(a,b,c){a.$flags&2&&A.C(a)
A.cO(b,a,a.length)
a[b]=c},
ab(a,b,c,d,e){a.$flags&2&&A.C(a,5)
if(t.aj.b(d)){this.ln(a,b,c,d,e)
return}this.kh(a,b,c,d,e)},
af(a,b,c,d){return this.ab(a,b,c,d,0)},
$iF:1,
$in:1,
$iq:1}
A.k4.prototype={
gah(a){return B.cI},
S(a,b,c){return new Float32Array(a.subarray(b,A.cs(b,c,a.length)))},
aX(a,b){return this.S(a,b,null)},
$ia9:1,
$iow:1}
A.k5.prototype={
gah(a){return B.cJ},
S(a,b,c){return new Float64Array(a.subarray(b,A.cs(b,c,a.length)))},
aX(a,b){return this.S(a,b,null)},
$ia9:1,
$iox:1}
A.k6.prototype={
gah(a){return B.cK},
h(a,b){A.cO(b,a,a.length)
return a[b]},
S(a,b,c){return new Int16Array(a.subarray(b,A.cs(b,c,a.length)))},
aX(a,b){return this.S(a,b,null)},
$ia9:1,
$ip9:1}
A.k7.prototype={
gah(a){return B.cL},
h(a,b){A.cO(b,a,a.length)
return a[b]},
S(a,b,c){return new Int32Array(a.subarray(b,A.cs(b,c,a.length)))},
aX(a,b){return this.S(a,b,null)},
$ia9:1,
$ipa:1}
A.k8.prototype={
gah(a){return B.cM},
h(a,b){A.cO(b,a,a.length)
return a[b]},
S(a,b,c){return new Int8Array(a.subarray(b,A.cs(b,c,a.length)))},
aX(a,b){return this.S(a,b,null)},
$ia9:1,
$ipb:1}
A.hs.prototype={
gah(a){return B.cP},
h(a,b){A.cO(b,a,a.length)
return a[b]},
S(a,b,c){return new Uint16Array(a.subarray(b,A.cs(b,c,a.length)))},
aX(a,b){return this.S(a,b,null)},
$ia9:1,
$irL:1}
A.ht.prototype={
gah(a){return B.cQ},
h(a,b){A.cO(b,a,a.length)
return a[b]},
S(a,b,c){return new Uint32Array(a.subarray(b,A.cs(b,c,a.length)))},
aX(a,b){return this.S(a,b,null)},
$ia9:1,
$irM:1}
A.hu.prototype={
gah(a){return B.cR},
gl(a){return a.length},
h(a,b){A.cO(b,a,a.length)
return a[b]},
S(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.cs(b,c,a.length)))},
aX(a,b){return this.S(a,b,null)},
$ia9:1,
$irN:1}
A.dR.prototype={
gah(a){return B.cS},
gl(a){return a.length},
h(a,b){A.cO(b,a,a.length)
return a[b]},
S(a,b,c){return new Uint8Array(a.subarray(b,A.cs(b,c,a.length)))},
aX(a,b){return this.S(a,b,null)},
$ia9:1,
$idR:1,
$icp:1}
A.il.prototype={}
A.im.prototype={}
A.io.prototype={}
A.ip.prototype={}
A.c0.prototype={
i(a){return A.iC(v.typeUniverse,this,a)},
a0(a){return A.Ak(v.typeUniverse,this,a)}}
A.lx.prototype={}
A.vP.prototype={
m(a){return A.bl(this.a,null)}}
A.lu.prototype={
m(a){return this.a}}
A.iy.prototype={$icH:1}
A.tO.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:25}
A.tN.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:134}
A.tP.prototype={
$0(){this.a.$0()},
$S:4}
A.tQ.prototype={
$0(){this.a.$0()},
$S:4}
A.ix.prototype={
nS(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.dp(new A.vN(this,b),0),a)
else throw A.b(A.Y("`setTimeout()` not found."))},
nT(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.dp(new A.vM(this,a,Date.now(),b),0),a)
else throw A.b(A.Y("Periodic timer."))},
A(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.Y("Canceling a timer."))},
$icG:1}
A.vN.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.vM.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.c.kk(s,o)}q.c=p
r.d.$1(q)},
$S:4}
A.hZ.prototype={
au(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aY(a)
else{s=r.a
if(r.$ti.i("z<1>").b(a))s.ku(a)
else s.cw(a)}},
bQ(a,b){var s
if(b==null)b=A.fK(a)
s=this.a
if(this.b)s.ak(new A.ac(a,b))
else s.c3(new A.ac(a,b))},
aD(a){return this.bQ(a,null)},
$ifR:1}
A.wf.prototype={
$1(a){return this.a.$2(0,a)},
$S:26}
A.wg.prototype={
$2(a,b){this.a.$2(1,new A.fZ(a,b))},
$S:168}
A.wv.prototype={
$2(a,b){this.a(a,b)},
$S:76}
A.wd.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.v()
s=q.b
if((s&1)!==0?(q.gaH().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.we.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:25}
A.lf.prototype={
nO(a,b){var s=new A.tS(a)
this.a=A.xX(new A.tU(this,a),new A.tV(s),new A.tW(this,s),!1,b)}}
A.tS.prototype={
$0(){A.iU(new A.tT(this.a))},
$S:4}
A.tT.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.tV.prototype={
$0(){this.a.$0()},
$S:0}
A.tW.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.tU.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.v()
if((r.b&4)===0){s.c=new A.p($.t,t._)
if(s.b){s.b=!1
A.iU(new A.tR(this.b))}return s.c}},
$S:103}
A.tR.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.ih.prototype={
m(a){return"IterationMarker("+this.b+", "+A.r(this.a)+")"}}
A.m1.prototype={
gn(){return this.b},
rB(a,b){var s,r,q
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
o.d=null}q=o.rB(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.Ae
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.Ae
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.w("sync*"))}return!1},
xd(a){var s,r,q=this
if(a instanceof A.fo){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.K(a)
return 2}}}
A.fo.prototype={
gu(a){return new A.m1(this.a(),this.$ti.i("m1<1>"))}}
A.ac.prototype={
m(a){return A.r(this.a)},
$ia5:1,
gc2(){return this.b}}
A.aY.prototype={}
A.e5.prototype={
bt(){},
bu(){}}
A.i3.prototype={
gcv(){return new A.aY(this,A.o(this).i("aY<1>"))},
ghA(){return(this.c&4)!==0},
giM(){return this.c<4},
rw(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
j2(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.A5(c,A.o(j).c)
s=A.o(j)
r=$.t
q=d?1:0
p=b!=null?32:0
o=A.lj(r,a,s.c)
n=A.u3(r,b)
m=c==null?A.ww():c
l=new A.e5(j,o,n,r.bD(m,t.H),r,q|p,s.i("e5<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.mm(j.a)
return l},
la(a){var s,r=this
A.o(r).i("e5<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.rw(a)
if((r.c&2)===0&&r.d==null)r.oa()}return null},
lb(a){},
lc(a){},
ia(){if((this.c&4)!==0)return new A.bf("Cannot add new events after calling close")
return new A.bf("Cannot add new events while doing an addStream")},
t(a,b){if(!this.giM())throw A.b(this.ia())
this.ca(b)},
bw(a,b){var s
if(!this.giM())throw A.b(this.ia())
s=A.fx(a,b)
this.cb(s.a,s.b)},
p(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.giM())throw A.b(q.ia())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.p($.t,t.D)
q.cH()
return r},
aB(a,b){this.cb(a,b)},
aL(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aY(null)},
oa(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aY(null)}A.mm(this.b)},
$ibn:1}
A.i_.prototype={
ca(a){var s,r
for(s=this.d,r=this.$ti.i("bO<1>");s!=null;s=s.ch)s.bJ(new A.bO(a,r))},
cb(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.bJ(new A.fa(a,b))},
cH(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.bJ(B.T)
else this.r.aY(null)}}
A.oE.prototype={
$0(){this.c.a(null)
this.b.c4(null)},
$S:0}
A.oG.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.ak(new A.ac(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.ak(new A.ac(q,r))}},
$S:11}
A.oF.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.bU(j,m.b,a)
if(J.u(k,0)){l=m.d
s=A.l([],l.i("y<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.A)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.bV(s,n)}m.c.cw(s)}}else if(J.u(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.ak(new A.ac(s,l))}},
$S(){return this.d.i("Q(0)")}}
A.oz.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(j,as)")}}
A.kN.prototype={
m(a){var s=this.b.m(0)
return"TimeoutException after "+s+": "+this.a},
$iL:1}
A.oA.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
if(a===0){s=A.l([],l.c.i("y<0>"))
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.A)(r),++p){o=r[p]
n=o.b
if(n==null)o.$ti.c.a(n)
s.push(n)}l.a.au(s)}else{s=A.l([],t.fQ)
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.A)(r),++p)s.push(r[p].c)
q=l.c
n=A.l([],q.i("y<0?>"))
for(m=r.length,p=0;p<r.length;r.length===m||(0,A.A)(r),++p)n.push(r[p].b)
l.a.aD(new A.hz(B.b.m0(s,A.Gp()),a,q.i("hz<q<0?>,q<ac?>>")))}},
$S:8}
A.hz.prototype={
m(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.r(p.a)},
gc2(){var s=this.c
s=s==null?null:s.b
return s==null?A.a5.prototype.gc2.call(this):s}}
A.ie.prototype={
t3(a){this.a.bE(new A.uM(this,a),new A.uN(this,a),t.P)}}
A.uM.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("Q(1)")}}
A.uN.prototype={
$2(a,b){this.a.c=new A.ac(a,b)
this.b.$1(1)},
$S:9}
A.uL.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:8}
A.e6.prototype={
bQ(a,b){if((this.a.a&30)!==0)throw A.b(A.w("Future already completed"))
this.ak(A.fx(a,b))},
aD(a){return this.bQ(a,null)},
$ifR:1}
A.az.prototype={
au(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.w("Future already completed"))
s.aY(a)},
ar(){return this.au(null)},
ak(a){this.a.c3(a)}}
A.ad.prototype={
au(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.w("Future already completed"))
s.c4(a)},
ar(){return this.au(null)},
ak(a){this.a.ak(a)}}
A.bP.prototype={
vv(a){if((this.c&15)!==6)return!0
return this.b.b.dR(this.d,a.a,t.y,t.K)},
uP(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.jN(r,n,a.b,p,o,t.l)
else q=m.dR(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.M(s))){if((this.c&1)!==0)throw A.b(A.O("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.O("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.p.prototype={
bE(a,b,c){var s,r,q=$.t
if(q===B.f){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.b0(b,"onError",u.w))}else{a=q.cV(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.AR(b,q)}s=new A.p($.t,c.i("p<0>"))
r=b==null?1:3
this.da(new A.bP(s,r,a,b,this.$ti.i("@<1>").a0(c).i("bP<1,2>")))
return s},
aK(a,b){return this.bE(a,null,b)},
lr(a,b,c){var s=new A.p($.t,c.i("p<0>"))
this.da(new A.bP(s,19,a,b,this.$ti.i("@<1>").a0(c).i("bP<1,2>")))
return s},
hc(a){var s=this.$ti,r=$.t,q=new A.p(r,s)
if(r!==B.f)a=A.AR(a,r)
this.da(new A.bP(q,2,null,a,s.i("bP<1,1>")))
return q},
aO(a){var s=this.$ti,r=$.t,q=new A.p(r,s)
if(r!==B.f)a=r.bD(a,t.z)
this.da(new A.bP(q,8,a,null,s.i("bP<1,1>")))
return q},
rL(a){this.a=this.a&1|16
this.c=a},
fd(a){this.a=a.a&30|this.a&1
this.c=a.c},
da(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.da(a)
return}s.fd(r)}s.b.cu(new A.uO(s,a))}},
l8(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.l8(a)
return}n.fd(s)}m.a=n.fZ(a)
n.b.cu(new A.uT(m,n))}},
ef(){var s=this.c
this.c=null
return this.fZ(s)},
fZ(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
c4(a){var s,r=this
if(r.$ti.i("z<1>").b(a))A.uR(a,r,!0)
else{s=r.ef()
r.a=8
r.c=a
A.e9(r,s)}},
cw(a){var s=this,r=s.ef()
s.a=8
s.c=a
A.e9(s,r)},
oh(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gbR()===r.gbR())}else s=!1
if(s)return
q=p.ef()
p.fd(a)
A.e9(p,q)},
ak(a){var s=this.ef()
this.rL(a)
A.e9(this,s)},
og(a,b){this.ak(new A.ac(a,b))},
aY(a){if(this.$ti.i("z<1>").b(a)){this.ku(a)
return}this.kr(a)},
kr(a){this.a^=2
this.b.cu(new A.uQ(this,a))},
ku(a){A.uR(a,this,!1)
return},
c3(a){this.a^=2
this.b.cu(new A.uP(this,a))},
hR(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.p($.t,r.$ti)
q.aY(r)
return q}s=new A.p($.t,r.$ti)
q.a=null
q.a=A.co(a,new A.uZ(s,a))
r.bE(new A.v_(q,r,s),new A.v0(q,s),t.P)
return s},
$iz:1}
A.uO.prototype={
$0(){A.e9(this.a,this.b)},
$S:0}
A.uT.prototype={
$0(){A.e9(this.b,this.a.a)},
$S:0}
A.uS.prototype={
$0(){A.uR(this.a.a,this.b,!0)},
$S:0}
A.uQ.prototype={
$0(){this.a.cw(this.b)},
$S:0}
A.uP.prototype={
$0(){this.a.ak(this.b)},
$S:0}
A.uW.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aT(q.d,t.z)}catch(p){s=A.M(p)
r=A.aa(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.fK(q)
n=k.a
n.c=new A.ac(q,o)
q=n}q.b=!0
return}if(j instanceof A.p&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.p){m=k.b.a
l=new A.p(m.b,m.$ti)
j.bE(new A.uX(l,m),new A.uY(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.uX.prototype={
$1(a){this.a.oh(this.b)},
$S:25}
A.uY.prototype={
$2(a,b){this.a.ak(new A.ac(a,b))},
$S:9}
A.uV.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.dR(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.M(n)
r=A.aa(n)
q=s
p=r
if(p==null)p=A.fK(q)
o=this.a
o.c=new A.ac(q,p)
o.b=!0}},
$S:0}
A.uU.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.vv(s)&&p.a.e!=null){p.c=p.a.uP(s)
p.b=!1}}catch(o){r=A.M(o)
q=A.aa(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.fK(p)
m=l.b
m.c=new A.ac(p,n)
p=m}p.b=!0}},
$S:0}
A.uZ.prototype={
$0(){var s=A.xW()
this.a.ak(new A.ac(new A.kN("Future not completed",this.b),s))},
$S:0}
A.v_.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.A()
this.c.cw(a)}},
$S(){return this.b.$ti.i("Q(1)")}}
A.v0.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.A()
this.b.ak(new A.ac(a,b))}},
$S:9}
A.le.prototype={}
A.a2.prototype={
dH(a){var s=new A.p($.t,t.os),r=new A.ab(""),q=this.a5(null,!0,new A.rm(s,r),s.gig())
q.hG(new A.rn(this,r,q,s))
return s},
gl(a){var s={},r=new A.p($.t,t.hy)
s.a=0
this.a5(new A.ro(s,this),!0,new A.rp(s,r),r.gig())
return r},
gC(a){var s=new A.p($.t,A.o(this).i("p<a2.T>")),r=this.a5(null,!0,new A.rk(s),s.gig())
r.hG(new A.rl(this,r,s))
return s}}
A.rm.prototype={
$0(){var s=this.b.a
this.a.c4(s.charCodeAt(0)==0?s:s)},
$S:0}
A.rn.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.r(a)
q.a+=p}catch(o){s=A.M(o)
r=A.aa(o)
q=s
p=r
n=A.iK(q,p)
if(n==null)q=new A.ac(q,p)
else q=n
A.Fo(this.c,this.d,q)}},
$S(){return A.o(this.a).i("~(a2.T)")}}
A.ro.prototype={
$1(a){++this.a.a},
$S(){return A.o(this.b).i("~(a2.T)")}}
A.rp.prototype={
$0(){this.b.c4(this.a.a)},
$S:0}
A.rk.prototype={
$0(){var s,r=A.xW(),q=new A.bf("No element")
A.kk(q,r)
s=A.iK(q,r)
if(s==null)s=new A.ac(q,r)
this.a.ak(s)},
$S:0}
A.rl.prototype={
$1(a){A.Fp(this.b,this.c,a)},
$S(){return A.o(this.a).i("~(a2.T)")}}
A.hP.prototype={
a5(a,b,c,d){return this.a.a5(a,b,c,d)},
by(a,b,c){return this.a5(a,null,b,c)},
aQ(a){return this.a5(a,null,null,null)}}
A.dj.prototype={
gcv(){return new A.b6(this,A.o(this).i("b6<1>"))},
ghA(){return(this.b&4)!==0},
gr4(){if((this.b&8)===0)return this.a
return this.a.c},
fg(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.di(A.o(q).i("di<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.di(A.o(q).i("di<1>")):s},
gaH(){var s=this.a
return(this.b&8)!==0?s.c:s},
bq(){if((this.b&4)!==0)return new A.bf("Cannot add event after closing")
return new A.bf("Cannot add event while adding a stream")},
ti(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bq())
if((o&2)!==0){o=new A.p($.t,t._)
o.aY(null)
return o}o=p.a
s=b===!0
r=new A.p($.t,t._)
q=s?A.Ed(p):p.gnX()
q=a.a5(p.gnZ(),s,p.goc(),q)
s=p.b
if((s&1)!==0?(p.gaH().e&4)!==0:(s&2)===0)q.be()
p.a=new A.iu(o,r,q,A.o(p).i("iu<1>"))
p.b|=8
return r},
kK(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.dt():new A.p($.t,t.D)
return s},
t(a,b){if(this.b>=4)throw A.b(this.bq())
this.aq(b)},
bw(a,b){var s
if(this.b>=4)throw A.b(this.bq())
s=A.fx(a,b)
this.aB(s.a,s.b)},
th(a){return this.bw(a,null)},
p(){var s=this,r=s.b
if((r&4)!==0)return s.kK()
if(r>=4)throw A.b(s.bq())
s.kw()
return s.kK()},
kw(){var s=this.b|=4
if((s&1)!==0)this.cH()
else if((s&3)===0)this.fg().t(0,B.T)},
aq(a){var s=this,r=s.b
if((r&1)!==0)s.ca(a)
else if((r&3)===0)s.fg().t(0,new A.bO(a,A.o(s).i("bO<1>")))},
aB(a,b){var s=this.b
if((s&1)!==0)this.cb(a,b)
else if((s&3)===0)this.fg().t(0,new A.fa(a,b))},
aL(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aY(null)},
j2(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.w("Stream has already been listened to."))
s=A.Ew(p,a,b,c,d,A.o(p).c)
r=p.gr4()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.b3()}else p.a=s
s.rM(r)
s.ir(new A.vG(p))
return s},
la(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.A()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.p)k=r}catch(o){q=A.M(o)
p=A.aa(o)
n=new A.p($.t,t.D)
n.c3(new A.ac(q,p))
k=n}else k=k.aO(s)
m=new A.vF(l)
if(k!=null)k=k.aO(m)
else m.$0()
return k},
lb(a){if((this.b&8)!==0)this.a.b.be()
A.mm(this.e)},
lc(a){if((this.b&8)!==0)this.a.b.b3()
A.mm(this.f)},
$ibn:1}
A.vG.prototype={
$0(){A.mm(this.a.d)},
$S:0}
A.vF.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aY(null)},
$S:0}
A.m2.prototype={
ca(a){this.gaH().aq(a)},
cb(a,b){this.gaH().aB(a,b)},
cH(){this.gaH().aL()}}
A.i0.prototype={
ca(a){this.gaH().bJ(new A.bO(a,A.o(this).i("bO<1>")))},
cb(a,b){this.gaH().bJ(new A.fa(a,b))},
cH(){this.gaH().bJ(B.T)}}
A.cr.prototype={}
A.fp.prototype={}
A.b6.prototype={
gN(a){return(A.hC(this.a)^892482866)>>>0},
X(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b6&&b.a===this.a}}
A.de.prototype={
fV(){return this.w.la(this)},
bt(){this.w.lb(this)},
bu(){this.w.lc(this)}}
A.lb.prototype={
A(){var s=this.b.A()
return s.aO(new A.tE(this))}}
A.tF.prototype={
$2(a,b){var s=this.a
s.aB(a,b)
s.aL()},
$S:9}
A.tE.prototype={
$0(){this.a.a.aY(null)},
$S:4}
A.iu.prototype={}
A.aJ.prototype={
rM(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.f4(s)}},
hG(a){this.a=A.lj(this.d,a,A.o(this).i("aJ.T"))},
be(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.ir(q.ge8())},
b3(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.f4(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.ir(s.ge9())}}},
A(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.ib()
r=s.f
return r==null?$.dt():r},
ib(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.fV()},
aq(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.ca(a)
else s.bJ(new A.bO(a,A.o(s).i("bO<aJ.T>")))},
aB(a,b){var s
if(t.C.b(a))A.kk(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cb(a,b)
else this.bJ(new A.fa(a,b))},
aL(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.cH()
else s.bJ(B.T)},
bt(){},
bu(){},
fV(){return null},
bJ(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.di(A.o(r).i("di<aJ.T>"))
q.t(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.f4(r)}},
ca(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.eW(s.a,a,A.o(s).i("aJ.T"))
s.e=(s.e&4294967231)>>>0
s.ie((r&4)!==0)},
cb(a,b){var s,r=this,q=r.e,p=new A.u5(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.ib()
s=r.f
if(s!=null&&s!==$.dt())s.aO(p)
else p.$0()}else{p.$0()
r.ie((q&4)!==0)}},
cH(){var s,r=this,q=new A.u4(r)
r.ib()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.dt())s.aO(q)
else q.$0()},
ir(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.ie((r&4)!==0)},
ie(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.bt()
else q.bu()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.f4(q)},
$ibg:1}
A.u5.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.mr(s,o,this.c,r,t.l)
else q.eW(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.u4.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.eV(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.fn.prototype={
a5(a,b,c,d){return this.a.j2(a,d,c,b===!0)},
by(a,b,c){return this.a5(a,null,b,c)},
aQ(a){return this.a5(a,null,null,null)}}
A.lt.prototype={
gdL(){return this.a},
sdL(a){return this.a=a}}
A.bO.prototype={
jH(a){a.ca(this.b)}}
A.fa.prototype={
jH(a){a.cb(this.b,this.c)}}
A.uE.prototype={
jH(a){a.cH()},
gdL(){return null},
sdL(a){throw A.b(A.w("No events after a done."))}}
A.di.prototype={
f4(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.iU(new A.vo(s,a))
s.a=1},
t(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.sdL(b)
s.c=b}}}
A.vo.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.gdL()
q.b=r
if(r==null)q.c=null
s.jH(this.b)},
$S:0}
A.fb.prototype={
hG(a){},
be(){var s=this.a
if(s>=0)this.a=s+2},
b3(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.iU(s.gl4())}else s.a=r},
A(){this.a=-1
this.c=null
return $.dt()},
qY(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.eV(s)}}else r.a=q},
$ibg:1}
A.bR.prototype={
gn(){if(this.c)return this.b
return null},
k(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.p($.t,t.k)
r.b=s
r.c=!1
q.b3()
return s}throw A.b(A.w("Already waiting for next."))}return r.qx()},
qx(){var s,r,q=this,p=q.b
if(p!=null){s=new A.p($.t,t.k)
q.b=s
r=p.a5(q.gqQ(),!0,q.gqS(),q.gqU())
if(q.b!=null)q.a=r
return s}return $.BQ()},
A(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aY(!1)
else s.c=!1
return r.A()}return $.dt()},
qR(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.c4(!0)
if(q.c){r=q.a
if(r!=null)r.be()}},
qV(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.ak(new A.ac(a,b))
else q.c3(new A.ac(a,b))},
qT(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.cw(!1)
else q.kr(!1)}}
A.i9.prototype={
a5(a,b,c,d){return A.A5(c,this.$ti.c)},
by(a,b,c){return this.a5(a,null,b,c)}}
A.cM.prototype={
a5(a,b,c,d){var s=null,r=new A.ik(s,s,s,s,this.$ti.i("ik<1>"))
r.d=new A.vm(this,r)
return r.j2(a,d,c,b===!0)},
by(a,b,c){return this.a5(a,null,b,c)},
aQ(a){return this.a5(a,null,null,null)}}
A.vm.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.ik.prototype={
tj(a){var s=this.b
if(s>=4)throw A.b(this.bq())
if((s&1)!==0)this.gaH().aq(a)},
tA(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bq())
r|=4
s.b=r
if((r&1)!==0)s.gaH().aL()},
gcv(){throw A.b(A.Y("Not available"))},
$id2:1}
A.wi.prototype={
$0(){return this.a.ak(this.b)},
$S:0}
A.wj.prototype={
$0(){return this.a.c4(this.b)},
$S:0}
A.ic.prototype={
a5(a,b,c,d){var s=this.$ti,r=$.t,q=b===!0?1:0,p=d!=null?32:0,o=A.lj(r,a,s.y[1]),n=A.u3(r,d),m=c==null?A.ww():c
s=new A.fe(this,o,n,r.bD(m,t.H),r,q|p,s.i("fe<1,2>"))
s.x=this.a.by(s.giv(),s.gix(),s.giz())
return s},
by(a,b,c){return this.a5(a,null,b,c)}}
A.fe.prototype={
aq(a){if((this.e&2)!==0)return
this.i5(a)},
aB(a,b){if((this.e&2)!==0)return
this.ki(a,b)},
bt(){var s=this.x
if(s!=null)s.be()},
bu(){var s=this.x
if(s!=null)s.b3()},
fV(){var s=this.x
if(s!=null){this.x=null
return s.A()}return null},
iw(a){this.w.pc(a,this)},
iA(a,b){this.aB(a,b)},
iy(){this.aL()}}
A.ec.prototype={
pc(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.M(q)
r=A.aa(q)
p=s
o=r
n=A.iK(p,o)
if(n!=null){p=n.a
o=n.b}b.aB(p,o)
return}b.aq(m)}}
A.ia.prototype={
t(a,b){var s=this.a
if((s.e&2)!==0)A.x(A.w("Stream is already closed"))
s.i5(b)},
bw(a,b){this.a.aB(a,b)},
p(){var s=this.a
if((s.e&2)!==0)A.x(A.w("Stream is already closed"))
s.kj()},
$ibn:1}
A.fl.prototype={
aq(a){if((this.e&2)!==0)throw A.b(A.w("Stream is already closed"))
this.i5(a)},
aB(a,b){if((this.e&2)!==0)throw A.b(A.w("Stream is already closed"))
this.ki(a,b)},
aL(){if((this.e&2)!==0)throw A.b(A.w("Stream is already closed"))
this.kj()},
bt(){var s=this.x
if(s!=null)s.be()},
bu(){var s=this.x
if(s!=null)s.b3()},
fV(){var s=this.x
if(s!=null){this.x=null
return s.A()}return null},
iw(a){var s,r,q,p
try{q=this.w
q===$&&A.v()
q.t(0,a)}catch(p){s=A.M(p)
r=A.aa(p)
this.aB(s,r)}},
iA(a,b){var s,r,q,p
try{q=this.w
q===$&&A.v()
q.bw(a,b)}catch(p){s=A.M(p)
r=A.aa(p)
if(s===a)this.aB(a,b)
else this.aB(s,r)}},
iy(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.v()
q.p()}catch(p){s=A.M(p)
r=A.aa(p)
this.aB(s,r)}}}
A.i2.prototype={
a5(a,b,c,d){var s=this.$ti,r=$.t,q=b===!0?1:0,p=d!=null?32:0,o=A.lj(r,a,s.y[1]),n=A.u3(r,d),m=c==null?A.ww():c,l=new A.fl(o,n,r.bD(m,t.H),r,q|p,s.i("fl<1,2>"))
l.w=this.a.$1(new A.ia(l,s.i("ia<2>")))
l.x=this.b.by(l.giv(),l.gix(),l.giz())
return l},
by(a,b,c){return this.a5(a,null,b,c)}}
A.wa.prototype={}
A.wc.prototype={}
A.wb.prototype={}
A.w8.prototype={}
A.w9.prototype={}
A.w7.prototype={}
A.w4.prototype={}
A.mg.prototype={}
A.w3.prototype={}
A.w2.prototype={}
A.w6.prototype={}
A.w5.prototype={}
A.mf.prototype={
uI(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.mh.prototype={}
A.me.prototype={
ec(a,b,c){var s,r,q,p,o,n,m=this.giJ(),l=m.a
if(l===B.f){A.iN(b,c)
return}o=l.gjE()
o.toString
s=o
r=$.t
try{$.t=s
m.uI(l,l.gb0(),a,b,c)
$.t=r}catch(n){q=A.M(n)
p=A.aa(n)
$.t=r
o=b===q?c:p
s.ec(l,q,o)}},
$iN:1}
A.lp.prototype={
gkH(){var s=this.ax
return s==null?this.ax=new A.fu(this):s},
gb0(){return this.ay.gkH()},
gbR(){return this.as.a},
eV(a){var s,r,q
try{this.aT(a,t.H)}catch(q){s=A.M(q)
r=A.aa(q)
this.ec(this,s,r)}},
eW(a,b,c){var s,r,q
try{this.dR(a,b,t.H,c)}catch(q){s=A.M(q)
r=A.aa(q)
this.ec(this,s,r)}},
mr(a,b,c,d,e){var s,r,q
try{this.jN(a,b,c,t.H,d,e)}catch(q){s=A.M(q)
r=A.aa(q)
this.ec(this,s,r)}},
j9(a,b){return new A.uA(this,this.bD(a,b),b)},
tw(a,b,c){return new A.uC(this,this.cV(a,b,c),c,b)},
ep(a){return new A.uz(this,this.bD(a,t.H))},
ha(a,b){return new A.uB(this,this.cV(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.an)return null
s=q.b
r=s.h(0,b)
return r!=null||s.H(b)?r:this.ru(q,b)},
ru(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gjE().gj7()
if(s===B.an)break
q=s.b
r=q.h(0,b)
if(r!=null||q.H(b)){a.b.j(0,b,r)
break}}return r},
eB(a,b){this.ec(this,a,b)},
m2(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gb0(),this,a,b)},
aT(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gb0(),this,a,b)},
dR(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gb0(),this,a,b,c,d)},
jN(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gb0(),this,a,b,c,d,e,f)},
bD(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gb0(),this,a,b)},
cV(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gb0(),this,a,b,c)},
eQ(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gb0(),this,a,b,c,d)},
lX(a,b){var s=this.r,r=s.a
if(r===B.f)return null
return s.b.$5(r,r.gb0(),this,a,b)},
cu(a){var s=this.w,r=s.a
return s.b.$4(r,r.gb0(),this,a)},
je(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gb0(),this,a,b)},
jd(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gb0(),this,a,b)},
gli(){return this.a},
glk(){return this.b},
glj(){return this.c},
gle(){return this.d},
glf(){return this.e},
gld(){return this.f},
gkM(){return this.r},
giZ(){return this.w},
gkF(){return this.x},
gkE(){return this.y},
gl9(){return this.z},
gkP(){return this.Q},
giJ(){return this.as},
gj7(){return this.at},
gjE(){return this.ay}}
A.uA.prototype={
$0(){return this.a.aT(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.uC.prototype={
$1(a){var s=this
return s.a.dR(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").a0(this.c).i("1(2)")}}
A.uz.prototype={
$0(){return this.a.eV(this.b)},
$S:0}
A.uB.prototype={
$1(a){return this.a.eW(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.lQ.prototype={
gli(){return B.d7},
glk(){return B.d6},
glj(){return B.d5},
gle(){return B.d3},
glf(){return B.d4},
gld(){return B.d2},
gkM(){return B.cZ},
giZ(){return B.d8},
gkF(){return B.cY},
gkE(){return B.cX},
gl9(){return B.d1},
gkP(){return B.d_},
giJ(){return B.d0},
gj7(){return B.an},
gjE(){return null},
gkH(){var s=$.vt
return s==null?$.vt=new A.fu(this):s},
gb0(){var s=$.vt
return s==null?$.vt=new A.fu(this):s},
gbR(){return this},
eV(a){var s,r,q
try{if(B.f===$.t){a.$0()
return}A.wr(null,null,this,a)}catch(q){s=A.M(q)
r=A.aa(q)
A.iN(s,r)}},
eW(a,b){var s,r,q
try{if(B.f===$.t){a.$1(b)
return}A.ws(null,null,this,a,b)}catch(q){s=A.M(q)
r=A.aa(q)
A.iN(s,r)}},
mr(a,b,c){var s,r,q
try{if(B.f===$.t){a.$2(b,c)
return}A.yo(null,null,this,a,b,c)}catch(q){s=A.M(q)
r=A.aa(q)
A.iN(s,r)}},
j9(a,b){return new A.vv(this,a,b)},
ep(a){return new A.vu(this,a)},
ha(a,b){return new A.vw(this,a,b)},
h(a,b){return null},
eB(a,b){A.iN(a,b)},
m2(a,b){return A.AT(null,null,this,a,b)},
aT(a){if($.t===B.f)return a.$0()
return A.wr(null,null,this,a)},
dR(a,b){if($.t===B.f)return a.$1(b)
return A.ws(null,null,this,a,b)},
jN(a,b,c){if($.t===B.f)return a.$2(b,c)
return A.yo(null,null,this,a,b,c)},
bD(a){return a},
cV(a){return a},
eQ(a){return a},
lX(a,b){return null},
cu(a){A.wt(null,null,this,a)},
je(a,b){return A.y1(a,b)},
jd(a,b){return A.zE(a,b)}}
A.vv.prototype={
$0(){return this.a.aT(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.vu.prototype={
$0(){return this.a.eV(this.b)},
$S:0}
A.vw.prototype={
$1(a){return this.a.eW(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.fu.prototype={$ial:1}
A.wq.prototype={
$0(){A.z4(this.a,this.b)},
$S:0}
A.hY.prototype={}
A.cK.prototype={
gl(a){return this.a},
gB(a){return this.a===0},
gW(a){return this.a!==0},
gP(){return new A.ea(this,A.o(this).i("ea<1>"))},
gbh(){var s=A.o(this)
return A.dO(new A.ea(this,s.i("ea<1>")),new A.v2(this),s.c,s.y[1])},
H(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.kB(a)},
kB(a){var s=this.d
if(s==null)return!1
return this.bL(this.ky(s,a),a)>=0},
E(a,b){b.ad(0,new A.v1(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.A7(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.A7(q,b)
return r}else return this.kQ(b)},
kQ(a){var s,r,q=this.d
if(q==null)return null
s=this.ky(q,a)
r=this.bL(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.kp(s==null?q.b=A.yb():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.kp(r==null?q.c=A.yb():r,b,c)}else q.lm(b,c)},
lm(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.yb()
s=p.c5(a)
r=o[s]
if(r==null){A.yc(o,s,[a,b]);++p.a
p.e=null}else{q=p.bL(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
ad(a,b){var s,r,q,p,o,n=this,m=n.kx()
for(s=m.length,r=A.o(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.ao(n))}},
kx(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.aE(i.a,null,!1,t.z)
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
kp(a,b,c){if(a[b]==null){++this.a
this.e=null}A.yc(a,b,c)},
c5(a){return J.a0(a)&1073741823},
ky(a,b){return a[this.c5(b)]},
bL(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.u(a[r],b))return r
return-1}}
A.v2.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.o(s).y[1].a(r):r},
$S(){return A.o(this.a).i("2(1)")}}
A.v1.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.df.prototype={
c5(a){return A.ms(a)&1073741823},
bL(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.i6.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.nE(b)},
j(a,b,c){this.nF(b,c)},
H(a){if(!this.w.$1(a))return!1
return this.nD(a)},
c5(a){return this.r.$1(a)&1073741823},
bL(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.uy.prototype={
$1(a){return this.a.b(a)},
$S:21}
A.ea.prototype={
gl(a){return this.a.a},
gB(a){return this.a.a===0},
gW(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.ly(s,s.kx(),this.$ti.i("ly<1>"))},
D(a,b){return this.a.H(b)}}
A.ly.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.ao(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.ii.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.nx(b)},
j(a,b,c){this.nz(b,c)},
H(a){if(!this.y.$1(a))return!1
return this.nw(a)},
F(a,b){if(!this.y.$1(b))return null
return this.ny(b)},
eC(a){return this.x.$1(a)&1073741823},
dG(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.vk.prototype={
$1(a){return this.a.b(a)},
$S:21}
A.cL.prototype={
gu(a){var s=this,r=new A.dh(s,s.r,A.o(s).i("dh<1>"))
r.c=s.e
return r},
gl(a){return this.a},
gB(a){return this.a===0},
gW(a){return this.a!==0},
D(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.om(b)
return r}},
om(a){var s=this.d
if(s==null)return!1
return this.bL(s[this.c5(a)],a)>=0},
gC(a){var s=this.e
if(s==null)throw A.b(A.w("No elements"))
return s.a},
ga_(a){var s=this.f
if(s==null)throw A.b(A.w("No elements"))
return s.a},
t(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ko(s==null?q.b=A.yd():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ko(r==null?q.c=A.yd():r,b)}else return q.nV(b)},
nV(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.yd()
s=q.c5(a)
r=p[s]
if(r==null)p[s]=[q.iP(a)]
else{if(q.bL(r,a)>=0)return!1
r.push(q.iP(a))}return!0},
F(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.kz(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.kz(s.c,b)
else return s.iX(b)},
iX(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.c5(a)
r=n[s]
q=o.bL(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.kA(p)
return!0},
ai(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.iN()}},
ko(a,b){if(a[b]!=null)return!1
a[b]=this.iP(b)
return!0},
kz(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.kA(s)
delete a[b]
return!0},
iN(){this.r=this.r+1&1073741823},
iP(a){var s,r=this,q=new A.vl(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.iN()
return q},
kA(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.iN()},
c5(a){return J.a0(a)&1073741823},
bL(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.u(a[r].a,b))return r
return-1}}
A.vl.prototype={}
A.dh.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.ao(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.pi.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:30}
A.dM.prototype={
gu(a){var s=this
return new A.lE(s,s.a,s.c,s.$ti.i("lE<1>"))},
gl(a){return this.b},
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
ga_(a){var s
if(this.b===0)throw A.b(A.w("No such element"))
s=this.c.c
s.toString
return s},
gan(a){var s=this.b
if(s===0)throw A.b(A.w("No such element"))
if(s>1)throw A.b(A.w("Too many elements"))
s=this.c
s.toString
return s},
gB(a){return this.b===0},
fU(a,b,c){var s,r,q=this
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
j4(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.lE.prototype={
gn(){var s=this.c
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.a
if(s.b!==r.a)throw A.b(A.ao(s))
if(r.b!==0)r=s.e&&s.d===r.gC(0)
else r=!0
if(r){s.c=null
return!1}s.e=!0
r=s.d
s.c=r
s.d=r.b
return!0}}
A.aV.prototype={
geK(){var s=this.a
if(s==null||this===s.gC(0))return null
return this.c}}
A.D.prototype={
gu(a){return new A.a8(a,this.gl(a),A.bu(a).i("a8<D.E>"))},
a3(a,b){return this.h(a,b)},
gB(a){return this.gl(a)===0},
gW(a){return!this.gB(a)},
gC(a){if(this.gl(a)===0)throw A.b(A.aq())
return this.h(a,0)},
ga_(a){if(this.gl(a)===0)throw A.b(A.aq())
return this.h(a,this.gl(a)-1)},
gan(a){if(this.gl(a)===0)throw A.b(A.aq())
if(this.gl(a)>1)throw A.b(A.ha())
return this.h(a,0)},
D(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){if(J.u(this.h(a,s),b))return!0
if(r!==this.gl(a))throw A.b(A.ao(a))}return!1},
dC(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gl(a))throw A.b(A.ao(a))}return!0},
ex(a,b,c){var s,r,q,p=this.gl(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gl(a))throw A.b(A.ao(a))}q=c.$0()
return q},
L(a,b){var s
if(this.gl(a)===0)return""
s=A.rq("",a,b)
return s.charCodeAt(0)==0?s:s},
jT(a,b){return new A.bp(a,b.i("bp<0>"))},
co(a,b,c){return new A.a6(a,b,A.bu(a).i("@<D.E>").a0(c).i("a6<1,2>"))},
b5(a,b){return A.c5(a,b,null,A.bu(a).i("D.E"))},
cr(a,b){return A.c5(a,0,A.bF(b,"count",t.S),A.bu(a).i("D.E"))},
wf(a){var s,r=A.pj(A.bu(a).i("D.E"))
for(s=0;s<this.gl(a);++s)r.t(0,this.h(a,s))
return r},
t(a,b){var s=this.gl(a)
this.sl(a,s+1)
this.j(a,s,b)},
hb(a,b){return new A.bw(a,A.bu(a).i("@<D.E>").a0(b).i("bw<1,2>"))},
c1(a,b){var s=b==null?A.GJ():b
A.kw(a,0,this.gl(a)-1,s)},
S(a,b,c){var s,r=this.gl(a)
if(c==null)c=r
A.aX(b,c,r)
s=A.P(this.f3(a,b,c),A.bu(a).i("D.E"))
return s},
aX(a,b){return this.S(a,b,null)},
f3(a,b,c){A.aX(b,c,this.gl(a))
return A.c5(a,b,c,A.bu(a).i("D.E"))},
hm(a,b,c,d){var s
A.aX(b,c,this.gl(a))
for(s=b;s<c;++s)this.j(a,s,d)},
ab(a,b,c,d,e){var s,r,q,p,o
A.aX(b,c,this.gl(a))
s=c-b
if(s===0)return
A.aW(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.mB(d,e).cs(0,!1)
r=0}p=J.J(q)
if(r+s>p.gl(q))throw A.b(A.ze())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
af(a,b,c,d){return this.ab(a,b,c,d,0)},
d6(a,b,c){var s,r
if(t.j.b(c))this.af(a,b,b+c.length,c)
else for(s=J.K(c);s.k();b=r){r=b+1
this.j(a,b,s.gn())}},
m(a){return A.pd(a,"[","]")},
$iF:1,
$in:1,
$iq:1}
A.T.prototype={
ad(a,b){var s,r,q,p
for(s=J.K(this.gP()),r=A.o(this).i("T.V");s.k();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
gbm(){return J.aG(this.gP(),new A.pB(this),A.o(this).i("X<T.K,T.V>"))},
cS(a,b,c,d){var s,r,q,p,o,n=A.E(c,d)
for(s=J.K(this.gP()),r=A.o(this).i("T.V");s.k();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
H(a){return J.Ct(this.gP(),a)},
gl(a){return J.aw(this.gP())},
gB(a){return J.cc(this.gP())},
gW(a){return J.iY(this.gP())},
gbh(){return new A.ij(this,A.o(this).i("ij<T.K,T.V>"))},
m(a){return A.pC(this)},
$iG:1}
A.pB.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.o(s).i("T.V").a(r)
return new A.X(a,r,A.o(s).i("X<T.K,T.V>"))},
$S(){return A.o(this.a).i("X<T.K,T.V>(T.K)")}}
A.pD.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.r(a)
r.a=(r.a+=s)+": "
s=A.r(b)
r.a+=s},
$S:28}
A.ij.prototype={
gl(a){var s=this.a
return s.gl(s)},
gB(a){var s=this.a
return s.gB(s)},
gW(a){var s=this.a
return s.gW(s)},
gC(a){var s=this.a
s=s.h(0,J.bW(s.gP()))
return s==null?this.$ti.y[1].a(s):s},
gan(a){var s=this.a
s=s.h(0,J.xp(s.gP()))
return s==null?this.$ti.y[1].a(s):s},
ga_(a){var s=this.a
s=s.h(0,J.xo(s.gP()))
return s==null?this.$ti.y[1].a(s):s},
gu(a){var s=this.a
return new A.lH(J.K(s.gP()),s,this.$ti.i("lH<1,2>"))}}
A.lH.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.m4.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify unmodifiable map"))}}
A.hn.prototype={
h(a,b){return this.a.h(0,b)},
j(a,b,c){this.a.j(0,b,c)},
H(a){return this.a.H(a)},
ad(a,b){this.a.ad(0,b)},
gB(a){var s=this.a
return s.gB(s)},
gW(a){var s=this.a
return s.gW(s)},
gl(a){var s=this.a
return s.gl(s)},
gP(){return this.a.gP()},
m(a){return this.a.m(0)},
gbh(){return this.a.gbh()},
gbm(){return this.a.gbm()},
cS(a,b,c,d){return this.a.cS(0,b,c,d)},
$iG:1}
A.f_.prototype={}
A.hh.prototype={
gu(a){var s=this
return new A.lF(s,s.c,s.d,s.b,s.$ti.i("lF<1>"))},
gB(a){return this.b===this.c},
gl(a){return(this.c-this.b&this.a.length-1)>>>0},
gC(a){var s=this,r=s.b
if(r===s.c)throw A.b(A.aq())
r=s.a[r]
return r==null?s.$ti.c.a(r):r},
ga_(a){var s=this,r=s.b,q=s.c
if(r===q)throw A.b(A.aq())
r=s.a
r=r[(q-1&r.length-1)>>>0]
return r==null?s.$ti.c.a(r):r},
gan(a){var s,r=this
if(r.b===r.c)throw A.b(A.aq())
if(r.gl(0)>1)throw A.b(A.ha())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a3(a,b){var s,r=this
A.Dc(b,r.gl(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
F(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.u(r.a[s],b)){r.iX(s);++r.d
return!0}return!1},
m(a){return A.pd(this,"{","}")},
iX(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.lF.prototype={
gn(){var s=this.e
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a
if(r.c!==q.d)A.x(A.ao(q))
s=r.d
if(s===r.b){r.e=null
return!1}q=q.a
r.e=q[s]
r.d=(s+1&q.length-1)>>>0
return!0}}
A.c1.prototype={
gB(a){return this.gl(this)===0},
gW(a){return this.gl(this)!==0},
E(a,b){var s
for(s=J.K(b);s.k();)this.t(0,s.gn())},
co(a,b,c){return new A.dG(this,b,A.o(this).i("@<1>").a0(c).i("dG<1,2>"))},
gan(a){var s,r=this
if(r.gl(r)>1)throw A.b(A.ha())
s=r.gu(r)
if(!s.k())throw A.b(A.aq())
return s.gn()},
m(a){return A.pd(this,"{","}")},
dC(a,b){var s
for(s=this.gu(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
cr(a,b){return A.zD(this,b,A.o(this).c)},
b5(a,b){return A.zC(this,b,A.o(this).c)},
gC(a){var s=this.gu(this)
if(!s.k())throw A.b(A.aq())
return s.gn()},
ga_(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.aq())
do s=r.gn()
while(r.k())
return s},
a3(a,b){var s,r
A.aW(b,"index")
s=this.gu(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.jI(b,b-r,this,null,"index"))},
$iF:1,
$in:1,
$idW:1}
A.is.prototype={}
A.iD.prototype={}
A.lC.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.ra(b):s}},
gl(a){return this.b==null?this.c.a:this.e0().length},
gB(a){return this.gl(0)===0},
gW(a){return this.gl(0)>0},
gP(){if(this.b==null){var s=this.c
return new A.Z(s,A.o(s).i("Z<1>"))}return new A.lD(this)},
gbh(){var s,r=this
if(r.b==null){s=r.c
return new A.aT(s,A.o(s).i("aT<2>"))}return A.dO(r.e0(),new A.vg(r),t.N,t.z)},
H(a){if(this.b==null)return this.c.H(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
ad(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.ad(0,b)
s=o.e0()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.wk(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.ao(o))}},
e0(){var s=this.c
if(s==null)s=this.c=A.l(Object.keys(this.a),t.s)
return s},
ra(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.wk(this.a[a])
return this.b[a]=s}}
A.vg.prototype={
$1(a){return this.a.h(0,a)},
$S:52}
A.lD.prototype={
gl(a){return this.a.gl(0)},
a3(a,b){var s=this.a
return s.b==null?s.gP().a3(0,b):s.e0()[b]},
gu(a){var s=this.a
if(s.b==null){s=s.gP()
s=s.gu(s)}else{s=s.e0()
s=new J.er(s,s.length,A.a7(s).i("er<1>"))}return s},
D(a,b){return this.a.H(b)}}
A.ve.prototype={
p(){var s,r,q=this
q.nG()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.aq(A.AP(r.charCodeAt(0)==0?r:r,q.b))
s.aL()}}
A.vZ.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:58}
A.vY.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:58}
A.j_.prototype={
gb2(){return"us-ascii"},
jj(a){return B.b0.v(a)}}
A.m3.prototype={
v(a){var s,r,q,p=A.aX(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.b0(a,"string","Contains invalid characters."))
o[r]=q}return o},
bI(a){return new A.vQ(new A.f6(a),this.a)}}
A.j0.prototype={}
A.vQ.prototype={
p(){this.a.a.p()},
bx(a,b,c,d){var s,r,q,p
A.aX(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.O("Source contains invalid character with code point: "+q+".",null))}s=new A.bY(a)
p=this.a.a
p.t(0,s.S(s,b,c))
if(d)p.p()}}
A.mP.prototype={
gjk(){return B.b4},
vx(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.aX(a1,a2,a0.length)
s=$.yH()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.wX(a0.charCodeAt(l))
h=A.wX(a0.charCodeAt(l+1))
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
d=A.bd(k)
e.a+=d
q=l
continue}}throw A.b(A.a1("Invalid base64 data",a0,r))}if(p!=null){e=B.a.q(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.yR(a0,n,a2,o,m,d)
else{c=B.c.aG(d-1,4)+1
if(c===1)throw A.b(A.a1(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.cW(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.yR(a0,n,a2,o,m,b)
else{c=B.c.aG(b,4)
if(c===1)throw A.b(A.a1(a,a0,a2))
if(c>1)a0=B.a.cW(a0,a2,a2,c===2?"==":"=")}return a0}}
A.j5.prototype={
v(a){var s=a.length
if(s===0)return""
s=new A.lh(u.U).lW(a,0,s,!0)
s.toString
return A.d9(s,0,null)},
bI(a){return new A.tL(a,new A.u2(u.U))}}
A.lh.prototype={
lO(a){return new Uint8Array(a)},
lW(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.c.R(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.lO(o)
r.a=A.Eo(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.u2.prototype={
lO(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.du(B.d.gaJ(s),s.byteOffset,a)}}
A.tY.prototype={
t(a,b){this.kC(b,0,J.aw(b),!1)},
p(){this.kC(B.c1,0,0,!0)}}
A.tL.prototype={
kC(a,b,c,d){var s=this.b.lW(a,b,c,d)
if(s!=null)this.a.a.aq(A.d9(s,0,null))
if(d)this.a.a.aL()}}
A.j4.prototype={
v(a){var s,r,q=A.aX(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.lg()
r=s.jg(a,0,q)
r.toString
s.ja(a,q)
return r},
bI(a){return new A.tX(a,new A.lg())}}
A.lg.prototype={
jg(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.zW(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.El(a,b,c,q)
r.a=A.En(a,b,c,s,0,r.a)
return s},
ja(a,b){var s=this.a
if(s<-1)throw A.b(A.a1("Missing padding character",a,b))
if(s>0)throw A.b(A.a1("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.tX.prototype={
t(a,b){var s,r=b.length
if(r===0)return
s=this.b.jg(b,0,r)
if(s!=null)this.a.a.aq(s)},
p(){this.b.ja(null,null)
this.a.a.aL()},
bx(a,b,c,d){var s,r
A.aX(b,c,a.length)
if(b===c)return
s=this.b
r=s.jg(a,b,c)
if(r!=null)this.a.a.aq(r)
if(d){s.ja(a,c)
this.a.a.aL()}}}
A.mU.prototype={}
A.f6.prototype={
t(a,b){this.a.t(0,b)},
p(){this.a.p()}}
A.lk.prototype={
t(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.J(b)
if(n.gl(b)>p.length-o){p=q.b
s=n.gl(b)+p.length-1
s|=B.c.a8(s,1)
s|=s>>>2
s|=s>>>4
s|=s>>>8
r=new Uint8Array((((s|s>>>16)>>>0)+1)*2)
p=q.b
B.d.af(r,0,p.length,p)
q.b=r}p=q.b
o=q.c
B.d.af(p,o,o+n.gl(b),b)
q.c=q.c+n.gl(b)},
p(){this.a.$1(B.d.S(this.b,0,this.c))}}
A.jg.prototype={}
A.lX.prototype={
t(a,b){this.b.push(b)},
p(){this.a.$1(this.b)}}
A.e7.prototype={
t(a,b){this.b.t(0,b)},
bw(a,b){A.bF(a,"error",t.K)
this.a.bw(a,b)},
p(){this.b.p()},
$ibn:1}
A.jh.prototype={}
A.ap.prototype={
bI(a){throw A.b(A.Y("This converter does not support chunked conversions: "+this.m(0)))},
tu(a){return new A.i2(new A.nD(this),a,t.fM.a0(A.o(this).i("ap.T")).i("i2<1,2>"))}}
A.nD.prototype={
$1(a){return new A.e7(a,this.a.bI(a),t.oW)},
$S:77}
A.dI.prototype={}
A.hf.prototype={
m(a){var s=A.jy(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.jQ.prototype={
m(a){return"Cyclic error in JSON stringify"}}
A.pg.prototype={
aE(a,b){var s=A.AP(a,this.gtL().a)
return s},
a4(a,b){var s=A.EH(a,this.gjk().b,null)
return s},
gjk(){return B.bE},
gtL(){return B.bD}}
A.jS.prototype={
bI(a){return new A.vf(null,this.b,new A.lZ(a))}}
A.vf.prototype={
t(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.w("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.ab("")
q=new A.vL(r,s)
A.A9(b,q,p.b,p.a)
if(r.a.length!==0)q.iq()
s.p()},
p(){}}
A.jR.prototype={
bI(a){return new A.ve(this.a,a,new A.ab(""))}}
A.vi.prototype={
my(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.hY(a,s,r)
s=r+1
n.aj(92)
n.aj(117)
n.aj(100)
p=q>>>8&15
n.aj(p<10?48+p:87+p)
p=q>>>4&15
n.aj(p<10?48+p:87+p)
p=q&15
n.aj(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.hY(a,s,r)
s=r+1
n.aj(92)
switch(q){case 8:n.aj(98)
break
case 9:n.aj(116)
break
case 10:n.aj(110)
break
case 12:n.aj(102)
break
case 13:n.aj(114)
break
default:n.aj(117)
n.aj(48)
n.aj(48)
p=q>>>4&15
n.aj(p<10?48+p:87+p)
p=q&15
n.aj(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)n.hY(a,s,r)
s=r+1
n.aj(92)
n.aj(q)}}if(s===0)n.aU(a)
else if(s<m)n.hY(a,s,m)},
ic(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.jQ(a,null))}s.push(a)},
hX(a){var s,r,q,p,o=this
if(o.mx(a))return
o.ic(a)
try{s=o.b.$1(a)
if(!o.mx(s)){q=A.zk(a,null,o.gl6())
throw A.b(q)}o.a.pop()}catch(p){r=A.M(p)
q=A.zk(a,r,o.gl6())
throw A.b(q)}},
mx(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.wz(a)
return!0}else if(a===!0){r.aU("true")
return!0}else if(a===!1){r.aU("false")
return!0}else if(a==null){r.aU("null")
return!0}else if(typeof a=="string"){r.aU('"')
r.my(a)
r.aU('"')
return!0}else if(t.j.b(a)){r.ic(a)
r.wx(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.ic(a)
s=r.wy(a)
r.a.pop()
return s}else return!1},
wx(a){var s,r,q=this
q.aU("[")
s=J.J(a)
if(s.gW(a)){q.hX(s.h(a,0))
for(r=1;r<s.gl(a);++r){q.aU(",")
q.hX(s.h(a,r))}}q.aU("]")},
wy(a){var s,r,q,p,o=this,n={}
if(a.gB(a)){o.aU("{}")
return!0}s=a.gl(a)*2
r=A.aE(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.ad(0,new A.vj(n,r))
if(!n.b)return!1
o.aU("{")
for(p='"';q<s;q+=2,p=',"'){o.aU(p)
o.my(A.I(r[q]))
o.aU('":')
o.hX(r[q+1])}o.aU("}")
return!0}}
A.vj.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:28}
A.vh.prototype={
gl6(){var s=this.c
return s instanceof A.ab?s.m(0):null},
wz(a){this.c.hW(B.v.m(a))},
aU(a){this.c.hW(a)},
hY(a,b,c){this.c.hW(B.a.q(a,b,c))},
aj(a){this.c.aj(a)}}
A.jT.prototype={
gb2(){return"iso-8859-1"},
jj(a){return B.bM.v(a)}}
A.jU.prototype={}
A.kH.prototype={
t(a,b){this.bx(b,0,b.length,!1)}}
A.vL.prototype={
aj(a){var s=this.a,r=A.bd(a)
if((s.a+=r).length>16)this.iq()},
hW(a){if(this.a.a.length!==0)this.iq()
this.b.t(0,a)},
iq(){var s=this.a,r=s.a
s.a=""
this.b.t(0,r.charCodeAt(0)==0?r:r)}}
A.iw.prototype={
p(){},
bx(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bd(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.p()},
t(a,b){this.a.a+=b}}
A.lZ.prototype={
t(a,b){this.a.a.aq(b)},
bx(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.aq(a)
else r.aq(B.a.q(a,b,c))
if(d)r.aL()},
p(){this.a.a.aL()}}
A.vX.prototype={
p(){var s,r,q,p=this.c
this.a.uG(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.bx(q,0,q.length,!0)}else r.p()},
t(a,b){this.bx(b,0,J.aw(b),!1)},
bx(a,b,c,d){var s,r=this.c,q=this.a.cA(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.bx(s,0,s.length,!1)
r.a=""
return}}}
A.kY.prototype={
gb2(){return"utf-8"},
tI(a,b){return new A.cN((b===!0?B.cT:B.am).a).cA(a,0,null,!0)},
hg(a){return this.tI(a,null)},
jj(a){return B.i.v(a)}}
A.kZ.prototype={
v(a){var s,r,q=A.aX(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.m6(s)
if(r.kO(a,0,q)!==q)r.h3()
return B.d.S(s,0,r.b)},
bI(a){return new A.w_(new A.f6(a),new Uint8Array(1024))}}
A.m6.prototype={
h3(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.C(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
lC(a,b){var s,r,q,p,o=this
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
return!0}else{o.h3()
return!1}},
kO(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.C(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.lC(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.h3()}else if(o<=2047){n=k.b
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
A.w_.prototype={
p(){if(this.a!==0){this.bx("",0,0,!0)
return}this.d.a.p()},
bx(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.lC(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.kO(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.h3()
else n.a=a.charCodeAt(b);++b}s.t(0,B.d.S(r,0,n.b))
if(o)s.p()
n.b=0}while(b<c)
if(d)n.p()}}
A.hT.prototype={
bI(a){return new A.vX(new A.cN(this.a),new A.lZ(a),new A.ab(""))}}
A.cN.prototype={
cA(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.aX(b,c,J.aw(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.Fc(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.Fb(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.ii(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.Aw(p)
m.b=0
throw A.b(A.a1(n,a,q+m.c))}return o},
ii(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.R(b+c,2)
r=q.ii(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.ii(a,s,c,d)}return q.tK(a,b,c,d)},
uG(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bd(65533)
a.a+=s}else throw A.b(A.a1(A.Aw(77),null,null))},
tK(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.ab(""),g=b+1,f=a[b]
A:for(s=l.a;;){for(;;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){q=A.bd(i)
h.a+=q
if(g===c)break A
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:q=A.bd(k)
h.a+=q
break
case 65:q=A.bd(k)
h.a+=q;--g
break
default:q=A.bd(k)
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
break}p=n}if(o-g<20)for(m=g;m<o;++m){q=A.bd(a[m])
h.a+=q}else{q=A.d9(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.bd(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.mi.prototype={}
A.aA.prototype={
bH(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bq(p,r)
return new A.aA(p===0?!1:s,r,p)},
ot(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.cv()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bq(s,q)
return new A.aA(n===0?!1:o,q,n)},
ow(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.cv()
s=k-a
if(s<=0)return l.a?$.yJ():$.cv()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bq(s,q)
m=new A.aA(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.fb(0,$.fI())
return m},
c_(a,b){var s,r,q,p,o=this,n=o.c
if(n===0)return o
s=b/16|0
if(B.c.aG(b,16)===0)return o.ot(s)
r=n+s+1
q=new Uint16Array(r)
A.A2(o.b,n,b,q)
n=o.a
p=A.bq(r,q)
return new A.aA(p===0?!1:n,q,p)},
dY(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.O("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.c.R(b,16)
q=B.c.aG(b,16)
if(q===0)return j.ow(r)
p=s-r
if(p<=0)return j.a?$.yJ():$.cv()
o=j.b
n=new Uint16Array(p)
A.Et(o,s,b,n)
s=j.a
m=A.bq(p,n)
l=new A.aA(m===0?!1:s,n,m)
if(s){if((o[r]&B.c.c_(1,q)-1)>>>0!==0)return l.fb(0,$.fI())
for(k=0;k<r;++k)if(o[k]!==0)return l.fb(0,$.fI())}return l},
T(a,b){var s,r=this.a
if(r===b.a){s=A.u_(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
i9(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.i9(p,b)
if(o===0)return $.cv()
if(n===0)return p.a===b?p:p.bH(0)
s=o+1
r=new Uint16Array(s)
A.Ep(p.b,o,a.b,n,r)
q=A.bq(s,r)
return new A.aA(q===0?!1:b,r,q)},
fc(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.cv()
s=a.c
if(s===0)return p.a===b?p:p.bH(0)
r=new Uint16Array(o)
A.li(p.b,o,a.b,s,r)
q=A.bq(o,r)
return new A.aA(q===0?!1:b,r,q)},
f1(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.i9(b,r)
if(A.u_(q.b,p,b.b,s)>=0)return q.fc(b,r)
return b.fc(q,!r)},
fb(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bH(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.i9(b,r)
if(A.u_(q.b,p,b.b,s)>=0)return q.fc(b,r)
return b.fc(q,!r)},
b4(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.cv()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.A3(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bq(s,p)
return new A.aA(m===0?!1:n,p,m)},
os(a){var s,r,q,p
if(this.c<a.c)return $.cv()
this.kJ(a)
s=$.y5.bj()-$.i1.bj()
r=A.y7($.y4.bj(),$.i1.bj(),$.y5.bj(),s)
q=A.bq(s,r)
p=new A.aA(!1,r,q)
return this.a!==a.a&&q>0?p.bH(0):p},
rv(a){var s,r,q,p=this
if(p.c<a.c)return p
p.kJ(a)
s=A.y7($.y4.bj(),0,$.i1.bj(),$.i1.bj())
r=A.bq($.i1.bj(),s)
q=new A.aA(!1,s,r)
if($.y6.bj()>0)q=q.dY(0,$.y6.bj())
return p.a&&q.c>0?q.bH(0):q},
kJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.A_&&a.c===$.A1&&c.b===$.zZ&&a.b===$.A0)return
s=a.b
r=a.c
q=16-B.c.glK(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.zY(s,r,q,p)
n=new Uint16Array(b+5)
m=A.zY(c.b,b,q,n)}else{n=A.y7(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.y8(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.u_(n,m,j,i)>=0){g&2&&A.C(n)
n[m]=1
A.li(n,h,j,i,n)}else{g&2&&A.C(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.li(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.Eq(l,n,e);--k
A.A3(d,f,0,n,k,o)
if(n[e]<d){i=A.y8(f,o,k,j)
A.li(n,h,j,i,n)
while(--d,n[e]<d)A.li(n,h,j,i,n)}--e}$.zZ=c.b
$.A_=b
$.A0=s
$.A1=r
$.y4.b=n
$.y5.b=h
$.i1.b=o
$.y6.b=q},
gN(a){var s,r,q,p=new A.u0(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.u1().$1(s)},
X(a,b){if(b==null)return!1
return b instanceof A.aA&&this.T(0,b)===0},
m(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.c.m(-n.b[0])
return B.c.m(n.b[0])}s=A.l([],t.s)
m=n.a
r=m?n.bH(0):n
while(r.c>1){q=$.yI()
if(q.c===0)A.x(B.b7)
p=r.rv(q).m(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.os(q)}s.push(B.c.m(r.b[0]))
if(m)s.push("-")
return new A.dU(s,t.hF).dH(0)},
$iam:1}
A.u0.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:92}
A.u1.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:101}
A.lw.prototype={
lI(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
lU(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.vW.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.K(b),r=this.a;s.k();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.ai(b)}},
$S:57}
A.ob.prototype={
$0(){var s=this
return A.x(A.O("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:36}
A.b1.prototype={
X(a,b){if(b==null)return!1
return b instanceof A.b1&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gN(a){return A.d4(this.a,this.b,B.h,B.h,B.h,B.h,B.h)},
T(a,b){var s=B.c.T(this.a,b.a)
if(s!==0)return s
return B.c.T(this.b,b.b)},
wg(){var s=this
if(s.c)return s
return new A.b1(s.a,s.b,!0)},
m(a){var s=this,r=A.CV(A.xS(s)),q=A.jq(A.xQ(s)),p=A.jq(A.qA(s)),o=A.jq(A.xO(s)),n=A.jq(A.xP(s)),m=A.jq(A.xR(s)),l=A.z1(A.zu(s)),k=s.b,j=k===0?"":A.z1(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iam:1}
A.ay.prototype={
X(a,b){if(b==null)return!1
return b instanceof A.ay&&this.a===b.a},
gN(a){return B.c.gN(this.a)},
T(a,b){return B.c.T(this.a,b.a)},
m(a){var s,r,q,p,o,n=this.a,m=B.c.R(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.c.R(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.c.R(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.a.jD(B.c.m(n%1e6),6,"0")},
$iam:1}
A.uF.prototype={
m(a){return this.a7()}}
A.a5.prototype={
gc2(){return A.DF(this)}}
A.j1.prototype={
m(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jy(s)
return"Assertion failed"}}
A.cH.prototype={}
A.bv.prototype={
gip(){return"Invalid argument"+(!this.a?"(s)":"")},
gio(){return""},
m(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.r(p),n=s.gip()+q+o
if(!s.a)return n
return n+s.gio()+": "+A.jy(s.gjv())},
gjv(){return this.b}}
A.cC.prototype={
gjv(){return this.b},
gip(){return"RangeError"},
gio(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.r(q):""
else if(q==null)s=": Not greater than or equal to "+A.r(r)
else if(q>r)s=": Not in inclusive range "+A.r(r)+".."+A.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.r(r)
return s}}
A.h7.prototype={
gjv(){return this.b},
gip(){return"RangeError"},
gio(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$icC:1,
gl(a){return this.f}}
A.cq.prototype={
m(a){return"Unsupported operation: "+this.a}}
A.kQ.prototype={
m(a){return"UnimplementedError: "+this.a},
$icq:1}
A.bf.prototype={
m(a){return"Bad state: "+this.a}}
A.jj.prototype={
m(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jy(s)+"."}}
A.kc.prototype={
m(a){return"Out of Memory"},
gc2(){return null},
$ia5:1}
A.hO.prototype={
m(a){return"Stack Overflow"},
gc2(){return null},
$ia5:1}
A.lv.prototype={
m(a){return"Exception: "+this.a},
$iL:1}
A.b3.prototype={
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
k=""}return g+l+B.a.q(e,i,j)+k+"\n"+B.a.b4(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.r(f)+")"):g},
$iL:1,
gjz(){return this.a},
gf8(){return this.b},
gam(){return this.c}}
A.jK.prototype={
gc2(){return null},
m(a){return"IntegerDivisionByZeroException"},
$ia5:1,
$icq:1,
$iL:1}
A.n.prototype={
hb(a,b){return A.je(this,A.o(this).i("n.E"),b)},
co(a,b,c){return A.dO(this,b,A.o(this).i("n.E"),c)},
jT(a,b){return new A.bp(this,b.i("bp<0>"))},
dC(a,b){var s
for(s=this.gu(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
L(a,b){var s,r,q=this.gu(this)
if(!q.k())return""
s=J.av(q.gn())
if(!q.k())return s
if(b.length===0){r=s
do r+=J.av(q.gn())
while(q.k())}else{r=s
do r=r+b+J.av(q.gn())
while(q.k())}return r.charCodeAt(0)==0?r:r},
cs(a,b){var s=A.o(this).i("n.E")
if(b)s=A.P(this,s)
else{s=A.P(this,s)
s.$flags=1
s=s}return s},
dS(a){return this.cs(0,!0)},
gl(a){var s,r=this.gu(this)
for(s=0;r.k();)++s
return s},
gB(a){return!this.gu(this).k()},
gW(a){return!this.gB(this)},
cr(a,b){return A.zD(this,b,A.o(this).i("n.E"))},
b5(a,b){return A.zC(this,b,A.o(this).i("n.E"))},
gC(a){var s=this.gu(this)
if(!s.k())throw A.b(A.aq())
return s.gn()},
ga_(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.aq())
do s=r.gn()
while(r.k())
return s},
gan(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.aq())
s=r.gn()
if(r.k())throw A.b(A.ha())
return s},
ex(a,b,c){var s,r
for(s=this.gu(this);s.k();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a3(a,b){var s,r
A.aW(b,"index")
s=this.gu(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.jI(b,b-r,this,null,"index"))},
m(a){return A.De(this,"(",")")}}
A.X.prototype={
m(a){return"MapEntry("+A.r(this.a)+": "+A.r(this.b)+")"}}
A.Q.prototype={
gN(a){return A.j.prototype.gN.call(this,0)},
m(a){return"null"}}
A.j.prototype={$ij:1,
X(a,b){return this===b},
gN(a){return A.hC(this)},
m(a){return"Instance of '"+A.kj(this)+"'"},
gah(a){return A.iQ(this)},
toString(){return this.m(this)}}
A.m0.prototype={
m(a){return""},
$ias:1}
A.kD.prototype={
gul(){var s=this.glV()
if($.mw()===1e6)return s
return s*1000},
gum(){var s=this.glV()
if($.mw()===1000)return s
return B.c.R(s,1000)},
av(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.qD.$0()-r)
s.b=null}},
glV(){var s=this.b
if(s==null)s=$.qD.$0()
return s-this.a}}
A.r6.prototype={
gn(){return this.d},
k(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.Fs(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.ab.prototype={
gl(a){return this.a.length},
hW(a){var s=A.r(a)
this.a+=s},
aj(a){var s=A.bd(a)
this.a+=s},
m(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.rQ.prototype={
$2(a,b){throw A.b(A.a1("Illegal IPv6 address, "+a,this.a,b))},
$S:128}
A.iE.prototype={
glq(){var s,r,q,p,o=this,n=o.w
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
gvH(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.ac(s,1)
r=s.length===0?B.o:A.d0(new A.a6(A.l(s.split("/"),t.s),A.GO(),t.iZ),t.N)
q.x!==$&&A.xg()
p=q.x=r}return p},
gN(a){var s,r=this,q=r.y
if(q===$){s=B.a.gN(r.glq())
r.y!==$&&A.xg()
r.y=s
q=s}return q},
gjS(){return this.b},
gcQ(){var s=this.c
if(s==null)return""
if(B.a.O(s,"[")&&!B.a.a6(s,"v",1))return B.a.q(s,1,s.length-1)
return s},
geJ(){var s=this.d
return s==null?A.Al(this.a):s},
geO(){var s=this.f
return s==null?"":s},
gho(){var s=this.r
return s==null?"":s},
ve(a){var s=this.a
if(a.length!==s.length)return!1
return A.Fq(a,s,0)>=0},
eT(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.yh(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.vS(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.O(n,"/"))n="/"+n
l=n
if(a!=null)k=A.vT(null,0,0,a)
else k=j.f
return A.iF(b,q,o,p,l,k,j.r)},
jM(a){return this.eT(a,null)},
mn(a){return this.eT(null,a)},
l0(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.a6(b,"../",r);){r+=3;++s}q=B.a.cR(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.hB(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.cW(a,q+1,null,B.a.ac(b,r-3*s))},
bg(a){return this.eU(A.kX(a))},
eU(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gaP().length!==0)return a
else{s=h.a
if(a.gjq()){r=a.mn(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gm3())m=a.ghy()?a.geO():h.f
else{l=A.Fa(h,n)
if(l>0){k=B.a.q(n,0,l)
n=a.gjp()?k+A.eg(a.gbd()):k+A.eg(h.l0(B.a.ac(n,k.length),a.gbd()))}else if(a.gjp())n=A.eg(a.gbd())
else if(n.length===0)if(p==null)n=s.length===0?a.gbd():A.eg(a.gbd())
else n=A.eg("/"+a.gbd())
else{j=h.l0(n,a.gbd())
r=s.length===0
if(!r||p!=null||B.a.O(n,"/"))n=A.eg(j)
else n=A.yj(j,!r||p!=null)}m=a.ghy()?a.geO():null}}}i=a.gjr()?a.gho():null
return A.iF(s,q,p,o,n,m,i)},
gjq(){return this.c!=null},
ghy(){return this.f!=null},
gjr(){return this.r!=null},
gm3(){return this.e.length===0},
gjp(){return B.a.O(this.e,"/")},
jP(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.Y("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.Y(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.Y(u.A))
if(r.c!=null&&r.gcQ()!=="")A.x(A.Y(u.Q))
s=r.gvH()
A.F3(s,!1)
q=A.rq(B.a.O(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
m(a){return this.glq()},
X(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gaP())if(p.c!=null===b.gjq())if(p.b===b.gjS())if(p.gcQ()===b.gcQ())if(p.geJ()===b.geJ())if(p.e===b.gbd()){r=p.f
q=r==null
if(!q===b.ghy()){if(q)r=""
if(r===b.geO()){r=p.r
q=r==null
if(!q===b.gjr()){s=q?"":r
s=s===b.gho()}}}}return s},
$ikV:1,
gaP(){return this.a},
gbd(){return this.e}}
A.vV.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.fs(1,a,B.k,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.fs(1,b,B.k,!0)
s.a+=r}},
$S:130}
A.vU.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.K(b),r=this.a;s.k();)r.$2(a,s.gn())},
$S:57}
A.rP.prototype={
gmw(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.bU(m,"?",s)
q=m.length
if(r>=0){p=A.iG(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.lq("data","",n,n,A.iG(m,s,q,128,!1,!1),p,n)}return m},
m(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.bQ.prototype={
gjq(){return this.c>0},
gjs(){return this.c>0&&this.d+1<this.e},
ghy(){return this.f<this.r},
gjr(){return this.r<this.a.length},
gjp(){return B.a.a6(this.a,"/",this.e)},
gm3(){return this.e===this.f},
gaP(){var s=this.w
return s==null?this.w=this.oj():s},
oj(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.O(r.a,"http"))return"http"
if(q===5&&B.a.O(r.a,"https"))return"https"
if(s&&B.a.O(r.a,"file"))return"file"
if(q===7&&B.a.O(r.a,"package"))return"package"
return B.a.q(r.a,0,q)},
gjS(){var s=this.c,r=this.b+3
return s>r?B.a.q(this.a,r,s-1):""},
gcQ(){var s=this.c
return s>0?B.a.q(this.a,s,this.d):""},
geJ(){var s,r=this
if(r.gjs())return A.au(B.a.q(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.O(r.a,"http"))return 80
if(s===5&&B.a.O(r.a,"https"))return 443
return 0},
gbd(){return B.a.q(this.a,this.e,this.f)},
geO(){var s=this.f,r=this.r
return s<r?B.a.q(this.a,s+1,r):""},
gho(){var s=this.r,r=this.a
return s<r.length?B.a.ac(r,s+1):""},
kW(a){var s=this.d+1
return s+a.length===this.e&&B.a.a6(this.a,a,s)},
w4(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.bQ(B.a.q(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
eT(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.yh(b,0,b.length)
s=!(h.b===b.length&&B.a.O(h.a,b))}else{b=h.gaP()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.q(h.a,h.b+3,q):""
o=h.gjs()?h.geJ():g
if(s)o=A.vS(o,b)
q=h.c
if(q>0)n=B.a.q(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.q(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.O(l,"/"))l="/"+l
if(a!=null)j=A.vT(g,0,0,a)
else{k=h.r
j=m<k?B.a.q(q,m+1,k):g}m=h.r
i=m<q.length?B.a.ac(q,m+1):g
return A.iF(b,p,n,o,l,j,i)},
jM(a){return this.eT(a,null)},
mn(a){return this.eT(null,a)},
bg(a){return this.eU(A.kX(a))},
eU(a){if(a instanceof A.bQ)return this.rP(this,a)
return this.ls().eU(a)},
rP(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.O(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.O(a.a,"http"))p=!b.kW("80")
else p=!(r===5&&B.a.O(a.a,"https"))||!b.kW("443")
if(p){o=r+1
return new A.bQ(B.a.q(a.a,0,o)+B.a.ac(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.ls().eU(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.bQ(B.a.q(a.a,0,r)+B.a.ac(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.bQ(B.a.q(a.a,0,r)+B.a.ac(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.w4()}s=b.a
if(B.a.a6(s,"/",n)){m=a.e
l=A.Ad(this)
k=l>0?l:m
o=k-n
return new A.bQ(B.a.q(a.a,0,k)+B.a.ac(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.a6(s,"../",n))n+=3
o=j-n+1
return new A.bQ(B.a.q(a.a,0,j)+"/"+B.a.ac(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.Ad(this)
if(l>=0)g=l
else for(g=j;B.a.a6(h,"../",g);)g+=3
f=0
for(;;){e=n+3
if(!(e<=c&&B.a.a6(s,"../",n)))break;++f
n=e}for(d="";i>g;){--i
if(h.charCodeAt(i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.a.a6(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.bQ(B.a.q(h,0,i)+d+B.a.ac(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
jP(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.O(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.Y("Cannot extract a file path from a "+r.gaP()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.b(A.Y(u.z))
throw A.b(A.Y(u.A))}if(r.c<r.d)A.x(A.Y(u.Q))
q=B.a.q(s,r.e,q)
return q},
gN(a){var s=this.x
return s==null?this.x=B.a.gN(this.a):s},
X(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.m(0)},
ls(){var s=this,r=null,q=s.gaP(),p=s.gjS(),o=s.c>0?s.gcQ():r,n=s.gjs()?s.geJ():r,m=s.a,l=s.f,k=B.a.q(m,s.e,l),j=s.r
l=l<j?s.geO():r
return A.iF(q,p,o,n,k,l,j<m.length?s.gho():r)},
m(a){return this.a},
$ikV:1}
A.lq.prototype={}
A.jA.prototype={
j(a,b,c){this.a.set(b,c)},
m(a){return"Expando:"+A.r(this.b)}}
A.ka.prototype={
m(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iL:1}
A.oD.prototype={
$2(a,b){this.a.bE(new A.oB(a),new A.oC(b),t.X)},
$S:131}
A.oB.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:132}
A.oC.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.GG(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.x("Attempting to box non-Dart object.")
s={}
s[$.Cc()]=a
p.error=s
p.stack=b.m(0)
r=this.a
r.call(r,p)},
$S:9}
A.x1.prototype={
$1(a){var s,r,q,p
if(A.AO(a))return a
s=this.a
if(s.H(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.K(a.gP());s.k();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.U.b(a)){p=[]
s.j(0,a,p)
B.b.E(p,J.aG(a,this,t.z))
return p}else return a},
$S:22}
A.x7.prototype={
$1(a){return this.a.au(a)},
$S:26}
A.x8.prototype={
$1(a){if(a==null)return this.a.aD(new A.ka(a===undefined))
return this.a.aD(a)},
$S:26}
A.wE.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.AN(a))return a
s=this.a
a.toString
if(s.H(a))return s.h(0,a)
if(a instanceof Date)return new A.b1(A.oc(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.O("structured clone of RegExp",null))
if(a instanceof Promise)return A.a4(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.E(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.ax(o),q=s.gu(o);q.k();)n.push(A.wD(q.gn()))
for(m=0;m<s.gl(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.J(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:22}
A.vb.prototype={
cp(a){if(a<=0||a>4294967296)throw A.b(A.aI(u.E+a))
return Math.random()*a>>>0},
vw(){return Math.random()}}
A.vc.prototype={
nR(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.Y("No source of cryptographically secure random numbers available."))},
cp(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.aI(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.C(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.ah(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.du(B.ce.gaJ(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.jx.prototype={}
A.W.prototype={
h(a,b){var s,r=this
if(!r.iK(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("W.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.iK(b))return
s.c.j(0,s.a.$1(b),new A.X(b,c,s.$ti.i("X<W.K,W.V>")))},
E(a,b){b.ad(0,new A.mW(this))},
H(a){var s=this
if(!s.iK(a))return!1
return s.c.H(s.a.$1(s.$ti.i("W.K").a(a)))},
gbm(){var s=this.c,r=A.o(s).i("aH<1,2>")
return A.dO(new A.aH(s,r),new A.mX(this),r.i("n.E"),this.$ti.i("X<W.K,W.V>"))},
ad(a,b){this.c.ad(0,new A.mY(this,b))},
gB(a){return this.c.a===0},
gW(a){return this.c.a!==0},
gP(){var s=this.c,r=A.o(s).i("aT<2>")
return A.dO(new A.aT(s,r),new A.mZ(this),r.i("n.E"),this.$ti.i("W.K"))},
gl(a){return this.c.a},
cS(a,b,c,d){return this.c.cS(0,new A.n_(this,b,c,d),c,d)},
gbh(){var s=this.c,r=A.o(s).i("aT<2>")
return A.dO(new A.aT(s,r),new A.n0(this),r.i("n.E"),this.$ti.i("W.V"))},
m(a){return A.pC(this)},
iK(a){return this.$ti.i("W.K").b(a)},
$iG:1}
A.mW.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(W.K,W.V)")}}
A.mX.prototype={
$1(a){var s=a.b
return new A.X(s.a,s.b,this.a.$ti.i("X<W.K,W.V>"))},
$S(){return this.a.$ti.i("X<W.K,W.V>(X<W.C,X<W.K,W.V>>)")}}
A.mY.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(W.C,X<W.K,W.V>)")}}
A.mZ.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("W.K(X<W.K,W.V>)")}}
A.n_.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.a0(this.c).a0(this.d).i("X<1,2>(W.C,X<W.K,W.V>)")}}
A.n0.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("W.V(X<W.K,W.V>)")}}
A.jt.prototype={
ag(a,b){return J.u(a,b)},
ao(a){return J.a0(a)}}
A.hb.prototype={
ag(a,b){var s,r,q,p
if(a===b)return!0
s=J.K(a)
r=J.K(b)
for(q=this.a;;){p=s.k()
if(p!==r.k())return!1
if(!p)return!0
if(!q.ag(s.gn(),r.gn()))return!1}},
ao(a){var s,r,q
for(s=J.K(a),r=this.a,q=0;s.k();){q=q+r.ao(s.gn())&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.dN.prototype={
ag(a,b){var s,r,q,p,o
if(a===b)return!0
s=J.J(a)
r=s.gl(a)
q=J.J(b)
if(r!==q.gl(b))return!1
for(p=this.a,o=0;o<r;++o)if(!p.ag(s.h(a,o),q.h(b,o)))return!1
return!0},
ao(a){var s,r,q,p
for(s=J.J(a),r=this.a,q=0,p=0;p<s.gl(a);++p){q=q+r.ao(s.h(a,p))&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.fq.prototype={
ag(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.xC(s.gut(),s.gv6(),s.gvf(),A.o(this).i("fq.E"),t.S)
for(s=J.K(a),q=0;s.k();){p=s.gn()
o=r.h(0,p)
r.j(0,p,(o==null?0:o)+1);++q}for(s=J.K(b);s.k();){p=s.gn()
o=r.h(0,p)
if(o==null||o===0)return!1
r.j(0,p,o-1);--q}return q===0},
ao(a){var s,r,q
for(s=J.K(a),r=this.a,q=0;s.k();)q=q+r.ao(s.gn())&2147483647
q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.eN.prototype={}
A.fh.prototype={
gN(a){var s=this.a
return 3*s.a.ao(this.b)+7*s.b.ao(this.c)&2147483647},
X(a,b){var s
if(b==null)return!1
if(b instanceof A.fh){s=this.a
s=s.a.ag(this.b,b.b)&&s.b.ag(this.c,b.c)}else s=!1
return s}}
A.hk.prototype={
ag(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gl(a)!==b.gl(b))return!1
s=A.xC(null,null,null,t.fA,t.S)
for(r=J.K(a.gP());r.k();){q=r.gn()
p=new A.fh(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.K(b.gP());r.k();){q=r.gn()
p=new A.fh(this,q,b.h(0,q))
o=s.h(0,p)
if(o==null||o===0)return!1
s.j(0,p,o-1)}return!0},
ao(a){var s,r,q,p,o,n,m,l
for(s=J.K(a.gP()),r=this.a,q=this.b,p=this.$ti.y[1],o=0;s.k();){n=s.gn()
m=r.ao(n)
l=a.h(0,n)
o=o+3*m+7*q.ao(l==null?p.a(l):l)&2147483647}o=o+(o<<3>>>0)&2147483647
o^=o>>>11
return o+(o<<15>>>0)&2147483647}}
A.js.prototype={
ag(a,b){var s,r=this
if(a instanceof A.c1)return b instanceof A.c1&&new A.eN(r,t.cu).ag(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.hk(r,r,t.a3).ag(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.dN(r,t.hI).ag(a,b)
s=t.U
if(s.b(a))return s.b(b)&&new A.hb(r,t.nZ).ag(a,b)
return J.u(a,b)},
ao(a){var s=this
if(a instanceof A.c1)return new A.eN(s,t.cu).ao(a)
if(t.f.b(a))return new A.hk(s,s,t.a3).ao(a)
if(t.j.b(a))return new A.dN(s,t.hI).ao(a)
if(t.U.b(a))return new A.hb(s,t.nZ).ao(a)
return J.a0(a)},
vg(a){return!0}}
A.k9.prototype={
sl(a,b){A.zp()},
t(a,b){return A.zp()}}
A.kT.prototype={}
A.bZ.prototype={
X(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.bZ){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gN(a){return A.zq(this.a)},
m(a){return A.aB(this.a)}}
A.es.prototype={
t(a,b){if(this.a!=null)throw A.b(A.w("add may only be called once."))
this.a=b},
p(){if(this.a==null)throw A.b(A.w("add must be called once."))}}
A.jE.prototype={
v(a){var s=new A.es(),r=A.lV(s)
r.t(0,a)
r.p()
r=s.a
r.toString
return r}}
A.oI.prototype={
t(a,b){var s=this
if(s.w)throw A.b(A.w("Hash.add() called after close()."))
s.r=s.r+J.aw(b)
s.kn(b)},
kn(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.xn(B.d.gaJ(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.J(a),o=0;;j=0){n=j+p.gl(a)-o
if(n<h){B.d.ab(i,j,n,a,o)
k.e=n
return}B.d.ab(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.C(s)
s[m]=l;++m}while(m<q)
k.wm(s)}},
p(){var s,r,q,p,o,n,m,l=this
if(l.w)return
l.w=!0
s=l.r
if(s>1125899906842623)A.x(A.Y("Hashing is unsupported for messages with more than 2^53 bits."))
r=l.d.byteLength
r=((s+1+8+r-1&-r)>>>0)-s
q=new Uint8Array(r)
q[0]=128
p=s*8
o=r-8
n=J.xn(B.d.gaJ(q))
m=B.c.R(p,4294967296)
n.$flags&2&&A.C(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.kn(q)
s=l.a
s.t(0,new A.bZ(l.o8()))
s.p()},
o8(){var s,r,q,p,o,n,m
if(B.as===$.BP())return J.Cr(B.a2.gaJ(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.xn(B.d.gaJ(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.C(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.lT.prototype={
bI(a){var s=new Uint32Array(A.br(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.f6(new A.lU(s,r,a,q,new Uint32Array(16)))}}
A.vy.prototype={
wm(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
for(d=l,q=0;q<64;++q,e=f,f=g,g=h,h=b,i=j,j=k,k=d,d=a){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.bT[q]+s[q]>>>0)>>>0)>>>0
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
A.lU.prototype={}
A.kq.prototype={}
A.j6.prototype={$ixs:1}
A.j7.prototype={
hn(){if(this.w)throw A.b(A.w("Can't finalize a finalized Request."))
this.w=!0
return B.b1},
m(a){return this.a+" "+this.b.m(0)}}
A.j8.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:172}
A.j9.prototype={
$1(a){return B.a.gN(a.toLowerCase())},
$S:65}
A.mQ.prototype={
nJ(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.O("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.O("Invalid content length "+A.r(s)+".",null))}}}
A.jd.prototype={
aV(a){return this.nh(a)},
nh(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$aV=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.yY("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.hn().we(),$async$aV)
case 3:k=b6
p=5
j=b4
i=null
h=!1
g=null
a6=b4.b
a7=a6.m(0)
a8=!J.cc(k)?k:null
a9=t.N
f=A.E(a9,t.K)
e=b4.glN()
d=null
if(e!=null){d=e
J.bU(f,"content-length",d)}for(b0=b4.r,b0=new A.aH(b0,A.o(b0).i("aH<1,2>")).gu(0);b0.k();){b1=b0.d
b1.toString
c=b1
J.bU(f,c.a,c.b)}f=A.el(f)
f.toString
A.aZ(f)
b0=l.signal
s=8
return A.a(A.a4(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$aV)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.hD(a,null):null
if(a0==null&&a!=null){f=A.yY("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.E(a9,a9)
b.headers.forEach(A.mk(new A.mT(a1)))
f=A.Fh(b4,b)
a4=b.status
a6=a1
a8=a0
A.kX(b.url)
a9=b.statusText
f=new A.kG(A.BF(f),a4,a8,a6)
f.nJ(a4,a8,a6,!1,!0,a9,b4)
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
a3=A.aa(b3)
A.AS(a2,a3,b4)
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
return A.f($async$aV,r)},
p(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q)s[q].abort()
this.b=!0}}
A.mT.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:66}
A.wh.prototype={
$1(a){return A.fz(this.a,this.b,a)},
$S:72}
A.wo.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.ar()}},
$S:0}
A.wp.prototype={
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
n=A.M(k)
m=A.aa(k)
if(!o.a.b)A.AS(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.cR.prototype={
we(){var s=new A.p($.t,t.jz),r=new A.az(s,t.iq),q=new A.lk(new A.mV(r),new Uint8Array(1024))
this.a5(q.gtf(q),!0,q.gdw(),r.gtE())
return s}}
A.mV.prototype={
$1(a){return this.a.au(new Uint8Array(A.br(a)))},
$S:23}
A.dz.prototype={
m(a){var s=this.b.m(0)
return"ClientException: "+this.a+", uri="+s},
$iL:1}
A.k3.prototype={
gl(a){return this.b}}
A.pU.prototype={
glN(){var s,r,q,p=this,o={},n=o.a=0
p.x.ad(0,new A.pV(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.A)(s),++n){q=s[n]
o.a=o.a+(74+B.i.v(p.kU(q)).length+q.b+2)}return o.a+2+70+4},
hn(){var s=this,r=s.o4()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.kf()
return new A.cR(s.b8(r))},
b8(a){return this.oI(a)},
oI(a){var $async$b8=A.c(function(b,c){switch(b){case 2:n=q
s=n.pop()
break
case 1:o.push(c)
s=p}for(;;)switch(s){case 0:f="--"+a
e=B.i.v(f+"\r\n")
d=B.i.v(f+"--\r\n")
f=m.x,f=new A.aH(f,A.o(f).i("aH<1,2>")).gu(0)
case 3:if(!f.k()){s=4
break}l=f.d
l.toString
s=5
q=[1]
return A.bC(A.dg(e),$async$b8,r)
case 5:k=l.b
j=$.xl()
l=A.B(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.B(l,'"',"%22")+'"'
l=$.yK()
s=6
q=[1]
return A.bC(A.dg(B.i.v((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$b8,r)
case 6:s=7
q=[1]
return A.bC(A.dg(B.i.v(k)),$async$b8,r)
case 7:s=8
q=[1]
return A.bC(A.dg(B.aE),$async$b8,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.bC(A.dg(e),$async$b8,r)
case 12:s=13
q=[1]
return A.bC(A.dg(B.i.v(m.kU(g))),$async$b8,r)
case 13:if(g.f)A.x(A.w("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bC(A.EF(g.e),$async$b8,r)
case 14:s=15
q=[1]
return A.bC(A.dg(B.aE),$async$b8,r)
case 15:case 10:f.length===l||(0,A.A)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bC(A.dg(d),$async$b8,r)
case 16:case 1:return A.bC(null,0,r)
case 2:return A.bC(o.at(-1),1,r)}})
var s=0,r=A.AM($async$b8,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.B0(r)},
qv(a,b){var s,r=$.xl()
r=A.B(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.B(r,'"',"%22")+'"'
r=$.yK()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
kU(a){var s=a.d.m(0),r=$.xl(),q=A.B(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.B(q,'"',"%22")+'"'
s=A.B(a.c,r,"%0D%0A")
p=p+'; filename="'+A.B(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
o4(){var s,r=J.zh(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.c6[$.BR().cp(66)]
return"dart-http-boundary-"+A.d9(r,0,null)}}
A.pV.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.i.v(this.b.qv(a,b)).length+B.i.v(b).length+2)},
$S:33}
A.r4.prototype={
glN(){return this.y.length},
gjl(){var s,r
if(this.gc6()==null||!this.gc6().c.a.H("charset"))return B.k
s=this.gc6().c.a.h(0,"charset")
s.toString
r=A.CY(s)
return r==null?A.x(A.a1('Unsupported encoding "'+s+'".',null,null)):r},
hn(){this.kf()
return new A.cR(A.xY(this.y,t.L))},
gc6(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.Ds(s)},
sc6(a){this.r.j(0,"content-type",a.m(0))},
ob(){if(!this.w)return
throw A.b(A.w("Can't modify a finalized Request."))}}
A.hQ.prototype={}
A.kG.prototype={}
A.fN.prototype={}
A.eB.prototype={
m(a){var s=new A.ab(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.ad(0,new A.pG(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.pE.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.rr(null,j),h=$.Co()
i.i4(h)
s=$.Cn()
i.ew(s)
r=i.gjx().h(0,0)
r.toString
i.ew("/")
i.ew(s)
q=i.gjx().h(0,0)
q.toString
i.i4(h)
p=t.N
o=A.E(p,p)
for(;;){p=i.d=B.a.dK(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gI():n
if(!m)break
p=i.d=h.dK(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gI()
i.ew(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.ew("=")
n=i.d=s.dK(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gI()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.GW(i)
n=i.d=h.dK(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gI()
o.j(0,p,k)}i.uy()
return A.xL(r,q,o)},
$S:87}
A.pG.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.Cl()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.BC(b,$.Ca(),new A.pF(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:33}
A.pF.prototype={
$1(a){return"\\"+A.r(a.h(0,0))},
$S:50}
A.wP.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:50}
A.xh.prototype={
$1(a){return a.a===this.a},
$S:93}
A.xi.prototype={
$2(a,b){return B.a.T(a.a,b.a)},
$S:98}
A.kh.prototype={
a7(){return"PlatformProfile."+this.b}}
A.kC.prototype={
ap(){var s=this
return A.m(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.re.prototype={
$1(a){return J.bW(a.gbh())},
$S:37}
A.rf.prototype={
$1(a){return B.a.D(a,"ENABLE_FTS5")},
$S:12}
A.fO.prototype={
a7(){return"ChangeOrigin."+this.b}}
A.cS.prototype={
a7(){return"ChangeAction."+this.b}}
A.aN.prototype={
ap(){var s,r=this,q=A.E(t.N,t.X)
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
B.b.aW(s)
q.j(0,"changedFields",s)
return q},
X(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.aN))return!1
return b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&B.n.ag(b.e,s.e)&&B.n.ag(b.f,s.f)&&B.n.ag(b.r,s.r)},
gN(a){var s=this
return A.d4(s.a,s.b,s.c,s.d,B.n.ao(s.e),B.n.ao(s.f),B.n.ao(s.r))},
m(a){var s=this
return"RecordChangeEvent("+s.c.m(0)+" "+s.d.m(0)+" "+s.a+"/"+s.b+" changed: "+s.r.m(0)+")"}}
A.a_.prototype={}
A.n1.prototype={
un(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)},
uo(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)}}
A.n2.prototype={}
A.n3.prototype={}
A.mC.prototype={
uq(a){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.c,r=0;r<12;++r)m[r]=s.cp(256)
q=A.Ef(this.b,m,new Uint8Array(A.br(a)))
p=q.a
s=12+p.length
o=s+16
n=new Uint8Array(o)
B.d.af(n,0,12,m)
B.d.af(n,12,s,p)
B.d.af(n,s,o,q.b)
return n}}
A.tG.prototype={
eu(b0,b1){var s,r,q,p,o,n,m,l,k=b0[0],j=b0[1],i=b0[2],h=b0[3],g=b0[4],f=b0[5],e=b0[6],d=b0[7],c=b0[8],b=b0[9],a=b0[10],a0=b0[11],a1=b0[12],a2=b0[13],a3=b0[14],a4=b0[15],a5=this.a,a6=((k<<24|j<<16|i<<8|h)^a5[0])>>>0,a7=((g<<24|f<<16|e<<8|d)^a5[1])>>>0,a8=((c<<24|b<<16|a<<8|a0)^a5[2])>>>0,a9=((a1<<24|a2<<16|a3<<8|a4)^a5[3])>>>0
for(s=4,r=1;r<14;++r,a9=i,a8=j,a7=k,a6=p){q=s+1
p=(A.tH(a6)^A.tI(a7)^A.tJ(a8)^A.tK(a9)^a5[s])>>>0
s=q+1
k=(A.tH(a7)^A.tI(a8)^A.tJ(a9)^A.tK(a6)^a5[q])>>>0
q=s+1
j=(A.tH(a8)^A.tI(a9)^A.tJ(a6)^A.tK(a7)^a5[s])>>>0
s=q+1
i=(A.tH(a9)^A.tI(a6)^A.tJ(a7)^A.tK(a8)^a5[q])>>>0}q=s+1
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
qC(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.$flags|0,q=0;q<8;++q){p=4*q
o=a[p]
n=a[p+1]
m=a[p+2]
p=a[p+3]
r&2&&A.C(s)
s[q]=(o<<24|n<<16|m<<8|p)>>>0}for(q=8;q<60;++q){l=s[q-1]
p=B.c.aG(q,8)
if(p===0)l=A.zR((l<<8|l>>>24)>>>0)^B.bQ[B.c.R(q,8)-1]
else if(p===4)l=A.zR(l)
p=s[q-8]
r&2&&A.C(s)
s[q]=(p^l)>>>0}}}
A.cy.prototype={
a7(){return"KindViolation."+this.b}}
A.wx.prototype={
$2(a,b){return B.a.T(a.a,b.a)},
$S:104}
A.wO.prototype={
$1(a){return a.h(0,"detail")},
$S:37}
A.jk.prototype={
a7(){return"ConflictAlgorithm."+this.b}}
A.ju.prototype={
p(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.c){s=1
break}p.c=!1
for(o=p.a,n=new A.aL(o,o.r,o.e,A.o(o).i("aL<2>"));n.k();){m=n.d
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
k6(a){var s,r=this.a,q=r.F(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.F(0,new A.Z(r,A.o(r).i("Z<1>")).gC(0))
if(s!=null)s.p()}q=this.b.vI(a)
r.j(0,a,q)
return q},
ng(a,b){var s=this.k6(a).k7(new A.dK(b)),r=A.o(s).i("a6<D.E,G<k,j?>>")
r=A.P(new A.a6(s,new A.ok(),r),r.i("R.E"))
return r},
ev(a,b){this.k6(a).jn(new A.dK(b))},
jm(a){return this.ev(a,B.w)},
aw(a,b){return this.uw(a,b)},
K(a){return this.aw(a,B.w)},
uw(a,b){var s=0,r=A.h(t.H),q=this
var $async$aw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.ev(a,b)
return A.e(null,r)}})
return A.f($async$aw,r)},
ae(a,b){return this.vU(a,b)},
aR(a){return this.ae(a,B.w)},
vU(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ae=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.ng(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ae,r)},
bY(a,b,c,d,e,f){return this.vR(a,b,c,d,e,f)},
aM(a,b,c,d){return this.bY(a,null,b,null,c,d)},
dN(a,b,c){return this.bY(a,null,null,null,b,c)},
vP(a,b,c,d){return this.bY(a,null,null,b,c,d)},
vO(a,b,c,d){return this.bY(a,b,null,null,c,d)},
eP(a,b,c,d,e){return this.bY(a,b,c,null,d,e)},
vQ(a,b,c,d,e){return this.bY(a,null,b,c,d,e)},
vR(a,b,c,d,e,f){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bY=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:n=b!=null&&b.length!==0?"SELECT "+B.b.L(b,", "):"SELECT *"
n+=' FROM "'+a+'"'
if(e.length!==0)n+=" WHERE "+e
if(d!=null&&d.length!==0)n+=" ORDER BY "+d
if(c!=null)n+=" LIMIT "+A.r(c)
o=f==null?B.w:f
q=p.ae(n.charCodeAt(0)==0?n:n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bY,r)},
cm(a,b,c,d){return this.vc(0,b,c,d)},
az(a,b,c){return this.cm(0,b,c,null)},
vc(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$cm=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.O("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.o(c)
n=o.i("Z<1>")
m=t.N
l=A.dO(new A.Z(c,n),new A.oj(),n.i("n.E"),m).L(0,", ")
k=B.b.L(A.aE(c.a,"?",!1,m),", ")
j=A.z3(d)
o=o.i("aT<2>")
o=A.P(new A.aT(c,o),o.i("n.E"))
p.ev("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.ah(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cm,r)},
G(a,b,c,d){return this.wl(a,b,c,d)},
wl(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$G=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.o(b)
n=o.i("Z<1>")
m=A.dO(new A.Z(b,n),new A.ol(),n.i("n.E"),t.N).L(0,", ")
n="UPDATE"+A.z3(null)+' "'+a+'" SET '+m
o=A.P(new A.aT(b,o.i("aT<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.b.E(o,d)}p.ev(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$G,r)},
a2(a,b,c){return this.tM(a,b,c)},
tM(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$a2=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
B.b.E(n,c)}p.ev(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$a2,r)},
V(a,b){return this.wh(a,b,b)},
wh(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j
var $async$V=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.jm("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$V)
case 7:m=e
n.jm("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
try{n.jm("ROLLBACK")}catch(i){}throw j
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$V,r)},
$ixu:1}
A.ok.prototype={
$1(a){return A.ba(a,t.N,t.X)},
$S:115}
A.oj.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.ol.prototype={
$1(a){return'"'+a+'" = ?'},
$S:7}
A.nf.prototype={}
A.jr.prototype={
lM(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f='Encrypted field "',e=A.l([],t.s),d=A.aU(t.N)
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.A)(s),++n){m=s[n]
l=m.a
if(B.cr.D(0,l))throw A.b(A.cl('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!d.t(0,l))throw A.b(A.cl('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.cl(f+l+'" cannot be unique.'))
if(B.b.cJ(o,new A.oi(m)))throw A.b(A.cl(f+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.D(k,l)}else k=!1
if(k)throw A.b(A.cl(f+l+'" cannot be included in FTS.'))}}for(j=0;j<o.length;j=i)for(i=j+1,r=i,h=0;h<o.length;++h){if(j===h)continue
if(B.bN.ag(o[j].a,o[h].a)){if(j<h){l=o[j].a
e.push("Duplicate index columns "+l.m(l)+" (declarations "+r+" and "+(h+1)+").")}}else if(A.CW(o[h].a,o[j].a)&&!o[h].b){l=o[h].a
l=l.m(l)
k=o[j].a
e.push("Index "+l+" is prefix-subsumed by index "+k.m(k)+".")}}if(p){if(!g.a.d)throw A.b(new A.h5("FTS5 is not available on this SQLite engine."))
for(r=q.a,q=r.$ti,r=new A.a8(r,r.gl(0),q.i("a8<D.E>")),q=q.i("D.E");r.k();){p=r.d
if(p==null)p=q.a(p)
if(!d.D(0,p))throw A.b(A.cl('FTS field "'+p+'" is not a declared field.'))}}for(r=s.length,n=0;n<r;++n){m=s[n]
q=m.b
if(q===B.C){p=m.f
p=p==null||p.length===0}else p=!1
if(p)throw A.b(A.cl('Enum field "'+m.a+'" must declare values.'))
if(q===B.D){q=m.r
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.cl('Ref field "'+m.a+'" must declare its target store.'))}return new A.nf(g.o7(a),g.o6(a),g.o5(a),e)},
o7(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.l(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.A)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.B(n,'"',i)+'"')+" "+o.gkb()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.C&&q){k=o.f
k.toString
j=new A.a6(k,new A.oh(),A.a7(k).i("a6<1,k>")).L(0,", ")
m+=" CHECK ("+('"'+A.B(n,'"',i)+'"')+" IN ("+j+"))"}if(l===B.D&&o.w){n=o.r
n.toString
n=A.B(n,'"',i)
m+=" REFERENCES "+('"'+n+'"')+"("+('"'+A.B("id",'"',i)+'"')+")"}h.push(m)}h.push("  archived INTEGER NOT NULL DEFAULT 0")
h.push("  hidden INTEGER NOT NULL DEFAULT 0")
h.push("  extra TEXT")
s=A.B(a.a,'"',i)
r=B.b.L(h,",\n")
q=q?"\n) STRICT;":"\n);"
q="CREATE TABLE "+('"'+s+'"')+" (\n"+r+q
return q.charCodeAt(0)==0?q:q},
o6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.l([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.A)(s),++n){m=s[n]
l=m.a
k=l.$ti.i("a6<D.E,k>")
j=A.P(new A.a6(l,A.GR(),k),k.i("R.E"))
if(!l.D(l,"id"))j.push('"'+A.B("id",e,d)+'"')
i=m.c===B.aD?"archived = 0 AND hidden = 0":"archived = 0"
if(m.b){l=l.L(l,"_")
l=A.B(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.B(q,e,d)+'"')+" ("+B.b.L(j,", ")+") WHERE "+i+";")}else{l=l.L(l,"_")
l=A.B(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.B(q,e,d)+'"')+" ("+B.b.L(j,", ")+") WHERE "+i+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.A)(r),++n){h=r[n]
if(h.b!==B.D)continue
if(B.b.cJ(s,new A.og(h)))continue
k=h.a
g=A.B(p+k,e,d)
f=A.B(q,e,d)
k=A.B(k,e,d)
b.push("CREATE INDEX "+('"'+g+'"')+" ON "+('"'+f+'"')+" ("+('"'+k+'"')+", "+('"'+A.B("id",e,d)+'"')+") WHERE archived = 0 AND hidden = 0;")}for(n=0;n<r.length;r.length===k||(0,A.A)(r),++n){h=r[n]
if(h.d){s=h.a
p=A.B(o+s,e,d)
l=A.B(q,e,d)
g=A.B(s,e,d)
b.push(c+('"'+p+'"')+" ON "+('"'+l+'"')+" ("+('"'+g+'"')+") WHERE "+('"'+A.B(s,e,d)+'"')+" IS NOT NULL AND archived = 0;")}}return b},
o5(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=", ",f='"',e='""',d=" BEGIN\n  INSERT INTO ",c=") VALUES (new.rowid, ",b=") VALUES ('delete', old.rowid, ",a=a0.w
if(a==null)return B.o
s=A.l([],t.s)
r=a0.a
q=r+"_fts"
p=a.a
o=p.$ti.i("a6<D.E,k>")
n=new A.a6(p,new A.od(),o).L(0,g)
m=new A.a6(p,new A.oe(),o).L(0,g)
s.push("CREATE VIRTUAL TABLE "+('"'+A.B(q,f,e)+'"')+" USING fts5(\n  "+p.L(p,g)+",\n  content = '"+r+"',\n  content_rowid = 'rowid'\n);")
l=A.B(r+"_ai",f,e)
k=A.B(r,f,e)
s.push("CREATE TRIGGER "+('"'+l+'"')+" AFTER INSERT ON "+('"'+k+'"')+d+('"'+A.B(q,f,e)+'"')+"(rowid, "+p.L(p,g)+c+n+");\nEND;")
l=A.B(r+"_ad",f,e)
k=A.B(r,f,e)
j=A.B(q,f,e)
s.push("CREATE TRIGGER "+('"'+l+'"')+" AFTER DELETE ON "+('"'+k+'"')+d+('"'+j+'"')+"("+('"'+A.B(q,f,e)+'"')+", rowid, "+p.L(p,g)+b+m+");\nEND;")
i=new A.a6(p,new A.of(),o).L(0," OR ")
o=A.B(r+"_au",f,e)
l=A.B(r,f,e)
k=A.B(q,f,e)
j=A.B(q,f,e)
h=p.L(p,g)
s.push("CREATE TRIGGER "+('"'+o+'"')+" AFTER UPDATE ON "+('"'+l+'"')+" WHEN "+i+d+('"'+k+'"')+"("+('"'+j+'"')+", rowid, "+h+b+m+");\n  INSERT INTO "+('"'+A.B(q,f,e)+'"')+"(rowid, "+p.L(p,g)+c+n+");\nEND;")
return s}}
A.oi.prototype={
$1(a){var s=a.a
return s.D(s,this.a.a)},
$S:59}
A.oh.prototype={
$1(a){return"'"+A.B(a,"'","''")+"'"},
$S:7}
A.og.prototype={
$1(a){var s=a.a
return s.D(s,this.a.a)},
$S:59}
A.od.prototype={
$1(a){return"new."+('"'+A.B(a,'"','""')+'"')},
$S:7}
A.oe.prototype={
$1(a){return"old."+('"'+A.B(a,'"','""')+'"')},
$S:7}
A.of.prototype={
$1(a){var s=A.B(a,'"','""')
return"new."+('"'+s+'"')+" IS NOT old."+('"'+A.B(a,'"','""')+'"')},
$S:7}
A.hi.prototype={
m(a){return A.iQ(this).m(0)+": "+this.a},
$iL:1}
A.hU.prototype={}
A.hS.prototype={}
A.hv.prototype={}
A.fQ.prototype={}
A.hB.prototype={}
A.h3.prototype={}
A.cF.prototype={}
A.hI.prototype={}
A.hK.prototype={}
A.eM.prototype={}
A.h5.prototype={}
A.fS.prototype={}
A.fX.prototype={}
A.r3.prototype={}
A.jv.prototype={
a7(){return"DurabilityClass."+this.b}}
A.kE.prototype={}
A.qx.prototype={
bF(a){var s,r=this.a
if(!r.H(a))return null
s=r.F(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.mj(s)
r.toString
t.G.a(r)}return r},
k8(a,b){var s,r=this.a
if(r.a>=256)r.F(0,new A.Z(r,A.o(r).i("Z<1>")).gC(0))
if(b==null)s=null
else{s=A.mj(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
vd(a){var s,r,q,p=a.a
if(p===0){this.a.ai(0)
return}s=this.a
if(p>=s.a){s.ai(0)
return}for(p=A.fg(a,a.r,A.o(a).c),r=p.$ti.c;p.k();){q=p.d
s.F(0,q==null?r.a(q):q)}}}
A.jX.prototype={
bf(a){return this.w1(a)},
w1(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$bf=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=new A.jr(q.c).lM(a)
m=q.b
l=a.a
s=2
return A.a(m.aM("lp_stores",1,"store = ?",[l]),$async$bf)
case 2:k=c
j=J.J(k)
s=j.gB(k)?3:5
break
case 3:s=6
return A.a(m.K(n.b),$async$bf)
case 6:j=n.c,p=j.length,o=0
case 7:if(!(o<j.length)){s=9
break}s=10
return A.a(m.K(j[o]),$async$bf)
case 10:case 8:j.length===p||(0,A.A)(j),++o
s=7
break
case 9:j=n.d,p=j.length,o=0
case 11:if(!(o<j.length)){s=13
break}s=14
return A.a(m.K(j[o]),$async$bf)
case 14:case 12:j.length===p||(0,A.A)(j),++o
s=11
break
case 13:j=a.b
s=15
return A.a(m.az(0,"lp_stores",A.m(["store",l,"table_name",l,"schema_ver",j,"definition_json",B.e.a4(a.ap(),null),"created_at",q.Q.$0()],t.N,t.X)),$async$bf)
case 15:s=16
return A.a(A.ho(m,0,0,"create:"+l,j),$async$bf)
case 16:s=4
break
case 5:j=J.U(j.gC(k),"schema_ver")
j.toString
A.ah(j)
p=a.b
if(j>p)throw A.b(new A.hK('Store "'+l+'" on disk is schema v'+j+", but this package supports v"+p+"."))
s=j<p?17:18
break
case 17:s=19
return A.a(A.eC(q,a,j),$async$bf)
case 19:case 18:s=20
return A.a(m.G("lp_stores",A.m(["definition_json",B.e.a4(a.ap(),null),"schema_ver",p],t.N,t.X),"store = ?",[l]),$async$bf)
case 20:case 4:q.ch.j(0,l,new A.kE(a,new A.qx(A.E(t.N,t.b))))
return A.e(null,r)}})
return A.f($async$bf,r)},
aa(a){var s=this.ch.h(0,a)
if(s==null)throw A.b(A.w('No store "'+a+'" registered in this LocalPocket.'))
return s},
dT(a,b,c){var s,r
if(A.kP(this)!=null)A.x(A.w(u.L))
s=this.dx
if(s!=null&&s.b===b&&!s.d){r=new A.p($.t,t._)
s.c.push(new A.f7(a,new A.az(r,t.jk)))
return r.aK(new A.pA(c),c)}return this.rQ(a,b,c)},
V(a,b){return this.dT(a,B.B,b)},
rQ(a,b,c){var s,r,q,p=this
if(p.db.a>0){s=p.dx
if(s!=null)s.m1()}s=A.l([],t.i4)
r=new A.ln(p,b,s)
p.dx=r
r.w6()
q=new A.p($.t,t._)
s.push(new A.f7(a,new A.az(q,t.jk)))
return q.aK(new A.pw(c),c)},
mu(a){++this.e.e
return this.b.aw(a,B.w)},
mv(a,b){++this.e.f
return this.b.ae(a,b)},
du(a){return this.tn(a)},
tm(){return this.du(null)},
tn(a){var s=0,r=A.h(t.H),q=this,p
var $async$du=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.b
s=a==null?2:4
break
case 2:s=5
return A.a(p.K("ANALYZE"),$async$du)
case 5:s=3
break
case 4:s=6
return A.a(p.K("ANALYZE "+('"'+A.B(a,'"','""')+'"')),$async$du)
case 6:case 3:return A.e(null,r)}})
return A.f($async$du,r)},
eZ(){var s=0,r=A.h(t.H),q=this
var $async$eZ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.c.c?2:3
break
case 2:s=4
return A.a(q.b.K("PRAGMA wal_checkpoint(TRUNCATE)"),$async$eZ)
case 4:case 3:return A.e(null,r)}})
return A.f($async$eZ,r)},
hU(){var s=0,r=A.h(t.H),q=this
var $async$hU=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.c.c?2:3
break
case 2:s=4
return A.a(q.b.K("PRAGMA wal_checkpoint(PASSIVE)"),$async$hU)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hU,r)},
eY(a){return this.ws(a)},
ws(a){var s=0,r=A.h(t.H),q=this,p
var $async$eY=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.b
s=a!=null?2:4
break
case 2:s=5
return A.a(p.K("PRAGMA incremental_vacuum("+A.r(a)+")"),$async$eY)
case 5:s=3
break
case 4:s=6
return A.a(p.K("VACUUM"),$async$eY)
case 6:case 3:return A.e(null,r)}})
return A.f($async$eY,r)},
eL(a){return this.vK(a)},
vJ(){return this.eL(1e4)},
vK(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$eL=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.V(new A.pz(o,a),t.P),$async$eL)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eL,r)},
cY(a){return this.wc(a)},
wc(a){var s=0,r=A.h(t.H),q=this,p
var $async$cY=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.ch,p=new A.bK(p,p.r,p.e,A.o(p).i("bK<1>"))
case 2:if(!p.k()){s=3
break}s=4
return A.a(q.tC(p.d,a),$async$cY)
case 4:s=2
break
case 3:s=5
return A.a(q.vJ(),$async$cY)
case 5:s=6
return A.a(q.eZ(),$async$cY)
case 6:s=7
return A.a(q.tm(),$async$cY)
case 7:return A.e(null,r)}})
return A.f($async$cY,r)},
dz(a,b,c){return this.tD(a,b,c)},
tC(a,b){return this.dz(a,null,b)},
tD(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i
var $async$dz=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:k={}
j=b==null?p.Q.$0():b
i=j-B.c.R(c.a,1000)
k.a=0
o=p.aa(a).a
n=t.P,m=p.b
case 3:s=5
return A.a(m.ae("SELECT b.id FROM "+('"'+A.B(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",i,250]),$async$dz)
case 5:l=e
if(J.cc(l)){s=4
break}s=6
return A.a(p.V(new A.py(k,p,l,a,i,o),n),$async$dz)
case 6:s=3
break
case 4:q=k.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dz,r)},
qM(){if(++this.dy<64)return
this.dy=0
A.co(B.x,new A.pv(this))},
p(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$p=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.CW){s=1
break}n.CW=!0
m=n.a$
m.a.p()
m.b.p()
p=4
s=7
return A.a(n.b.K("PRAGMA optimize"),$async$p)
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
A.pA.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.pw.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.pz.prototype={
$1(a){return this.mM(a)},
mM(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:k=a.b
j=J
s=2
return A.a(k.aR("SELECT o.store, o.record_id FROM lp_outbox o LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.record_id IS NULL OR s.sync_state = 'clean'"),$async$$1)
case 2:p=j.K(c),o=q.a
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"store")
m.toString
A.I(m)
n=n.h(0,"record_id")
n.toString
s=5
return A.a(k.a2("lp_outbox","store = ? AND record_id = ?",[m,A.I(n)]),$async$$1)
case 5:++o.a
s=3
break
case 4:j=A
i=J
h=J
s=6
return A.a(k.aR("SELECT COUNT(*) c FROM lp_outbox"),$async$$1)
case 6:l=j.aQ(i.U(h.bW(c),"c"))
if(l==null)l=0
p=q.b
s=l>p?7:8
break
case 7:j=J
s=9
return A.a(k.ae("SELECT o.store, o.record_id FROM lp_outbox o JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.sync_state NOT IN ('dirty', 'conflict', 'blocked') ORDER BY o.created_at ASC LIMIT ?",[l-p]),$async$$1)
case 9:p=j.K(c)
case 10:if(!p.k()){s=11
break}n=p.gn()
m=n.h(0,"store")
m.toString
A.I(m)
n=n.h(0,"record_id")
n.toString
s=12
return A.a(k.a2("lp_outbox","store = ? AND record_id = ?",[m,A.I(n)]),$async$$1)
case 12:++o.a
s=10
break
case 11:case 8:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.py.prototype={
$1(a){return this.mL(a)},
mL(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=a2.b
p=J.K(q.c),o=q.a,n=q.d,m=t.N,l=a2.c,k=a2.a.e,j=q.e,i=q.f,h=q.b,g=h.y,h=h.z
case 2:if(!p.k()){s=3
break}f=p.gn().h(0,"id")
f.toString
A.I(f)
a1=J
s=4
return A.a(a0.ae("SELECT b.id FROM "+('"'+A.B(n,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? LIMIT 1",[n,f,"clean",j]),$async$$1)
case 4:if(a1.cc(a4)){s=2
break}s=5
return A.a(a0.ae("SELECT * FROM "+('"'+A.B(n,'"','""')+'"')+" WHERE id = ? LIMIT 1",[f]),$async$$1)
case 5:e=a4
d=J.J(e)
c=d.gW(e)?A.ca(i,d.gC(e),g,h):null
s=6
return A.a(A.cb(a0,n,f,!0),$async$$1)
case 6:s=7
return A.a(a0.a2(n,"id = ?",[f]),$async$$1)
case 7:d=A.af([f],m)
l.push(new A.a_(n,d))
k.r+=d.a
if(c!=null){d=A.o(c).i("Z<1>")
b=d.i("bj<n.E>")
a=A.pj(b.i("n.E"))
a.E(0,new A.bj(new A.Z(c,d),new A.px(),b))
a2.bl(new A.aN(n,f,B.U,B.ax,c,null,a))}++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.px.prototype={
$1(a){return a!=="id"},
$S:12}
A.pv.prototype={
$0(){this.a.hU().hc(new A.pu())},
$S:0}
A.pu.prototype={
$1(a){},
$S:27}
A.ln.prototype={
w6(){var s,r,q,p=this,o=new A.az(new A.p($.t,t.D),t.h)
p.e=o
s=p.a
r=s.d
r===$&&A.v()
r.aT(new A.up(p,o),t.H)
q=s.db
s=p.guH()
if(q.a>0)A.co(q,s)
else A.co(B.x,s)},
m1(){var s,r=this
if(r.f)return
r.f=!0
s=r.a
if(s.dx===r)s.dx=null
s=r.e
if(s!=null)s.ar()},
ck(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9
var $async$ck=A.c(function(c0,c1){if(c0===1){o.push(c1)
s=p}for(;;)switch(s){case 0:m.d=!0
a8=m.c
a9=a8.length
if(a9===0){s=1
break}l=a9===1
if(!l){b0=m.a.e;++b0.b
b0.c+=a9}b1=new A.kD()
$.mw()
b1.av()
k=b1
a9=m.a
j=m.b===B.bn&&a9.a!==":memory:"
s=j&&a9.cx!=="FULL"?3:4
break
case 3:s=5
return A.a(a9.mu("PRAGMA synchronous=FULL"),$async$ck)
case 5:a9.cx="FULL"
case 4:i=A.l([],t.aL)
h=A.l([],t.eb)
g=A.l([],t.aY)
p=7
s=10
return A.a(a9.b.V(new A.uo(m,i,h,l,g),t.P),$async$ck)
case 10:for(b0=g,b2=b0.length,b3=0;b3<b0.length;b0.length===b2||(0,A.A)(b0),++b3){f=b0[b3]
e=null
d=null
c=null
b=null
a=f
e=a.a[0]
d=a.a[1]
c=a.a[2]
b=a.a[3]
if(c!=null){b4=e.b
b5=c
b6=b
if((b4.a.a&30)!==0)A.x(A.w("Future already completed"))
b4.ak(A.fx(b5,b6))}else{b4=e.b
b5=d
b4=b4.a
if((b4.a&30)!==0)A.x(A.w("Future already completed"))
b4.aY(b5)}}for(f=i,b0=f.length,b2=a9.a$,b4=a9.ch,b3=0;b3<f.length;f.length===b0||(0,A.A)(f),++b3){a0=f[b3]
b5=b4.h(0,a0.a)
if(b5!=null)b5.d.vd(a0.b)
b2.un(a0)}for(f=h,b0=f.length,b3=0;b3<f.length;f.length===b0||(0,A.A)(f),++b3){a1=f[b3]
b2.uo(a1)}n.push(9)
s=8
break
case 7:p=6
b8=o.pop()
for(f=g,b0=f.length,b3=0;b3<f.length;f.length===b0||(0,A.A)(f),++b3){a2=f[b3]
a3=null
a4=null
a5=null
a6=a2
a3=a6.a[0]
a4=a6.a[2]
a5=a6.a[3]
if(a4!=null&&(a3.b.a.a&30)===0){b2=a3.b
b4=a4
b5=a5
if((b2.a.a&30)!==0)A.x(A.w("Future already completed"))
b2.ak(A.fx(b4,b5))}}throw b8
n.push(9)
s=8
break
case 6:n=[2]
case 8:p=2
s=j&&a9.cx!=="NORMAL"?11:12
break
case 11:p=14
s=17
return A.a(a9.mu("PRAGMA synchronous=NORMAL"),$async$ck)
case 17:a9.cx="NORMAL"
p=2
s=16
break
case 14:p=13
b9=o.pop()
s=16
break
case 13:s=2
break
case 16:case 12:f=a9.e
a2=k.gul();++f.a
f.d+=a2
a9.qM()
for(f=a8.length,b3=0;b3<a8.length;a8.length===f||(0,A.A)(a8),++b3){a7=a8[b3]
if((a7.b.a.a&30)===0){a2=a7.b
if((a2.a.a&30)!==0)A.x(A.w("Future already completed"))
a2.ak(A.fx(new A.bf("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ck,r)}}
A.up.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a(o.b.a,$async$$0)
case 2:q=4
s=7
return A.a(o.a.ck(),$async$$0)
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
A.uo.prototype={
$1(a){return this.n5(a)},
n5(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.zH(a.a,a3,o.b,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.xf(new A.um(a,a0),null,A.m([$.my(),a0],g,g),t.g7),$async$$1)
case 9:n=a5
o.e.push(new A.ef([B.b.gan(a.c),n,null,null]))
q=1
s=8
break
case 6:q=5
a1=p.pop()
m=A.M(a1)
l=A.aa(a1)
o.e.push(new A.ef([B.b.gan(a.c),null,m,l]))
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
return A.a(A.xf(new A.un(a0,k),null,A.m([$.my(),a0],c,c),d),$async$$1)
case 17:j=a5
e.push(new A.ef([k,j,null,null]))
q=1
s=16
break
case 14:q=13
a2=p.pop()
i=A.M(a2)
h=A.aa(a2)
e.push(new A.ef([k,null,i,h]))
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
$S:63}
A.um.prototype={
$0(){return B.b.gan(this.a.c).a.$1(this.b)},
$S:49}
A.un.prototype={
$0(){var s=this.a,r=s.f,q=r.b,p=r.a,o=""+p,n=q!=null?q+"_"+o:"lp_sp"+o
r.a=p+1
return s.ce(n,new A.ul(this.b),t.z)},
$S:49}
A.ul.prototype={
$1(a){return this.a.a.$1(a)},
$S:138}
A.f7.prototype={}
A.lG.prototype={}
A.pR.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:139}
A.pS.prototype={
$2(a,b){return B.c.T(a.a,b.a)},
$S:144}
A.pP.prototype={
$1(a){return a.h(0,"name")},
$S:37}
A.pQ.prototype={
$1(a){return this.mN(a)},
mN(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=J.K(q.a),o=q.b,n=q.d
case 2:if(!p.k()){s=3
break}m=A.ca(o,p.gn(),null,null)
l=m.h(0,"id")
l.toString
A.I(l)
s=4
return A.a(a.az(0,n,A.dq(o,J.u(m.h(0,"archived"),!0),null,null,l,m)),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:63}
A.kf.prototype={
vT(a){if(a>this.w)this.w=a}}
A.r0.prototype={}
A.bJ.prototype={
a7(){return"FieldKind."+this.b}}
A.aK.prototype={
gkb(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.aa===s||B.C===s||B.I===s||B.J===s||B.D===s){r="TEXT"
break A}if(B.Z===s||B.y===s||B.a0===s){r="INTEGER"
break A}if(B.a_===s){r="REAL"
break A}throw A.b(new A.km("None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details."))}return r},
ap(){var s,r=this,q=A.E(t.N,t.X)
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
A.on.prototype={
$0(){var s,r,q,p,o=null,n=this.a,m=n.h(0,"kind")
m.toString
s=A.ev(B.bY,A.I(m))
m=n.h(0,"name")
m.toString
A.I(m)
r=J.u(n.h(0,"required"),!0)
q=J.u(n.h(0,"encrypted"),!0)
switch(s.a){case 0:return new A.aK(m,B.aa,r,J.u(n.h(0,"uniqueWhenActive"),!0),q,o,o,!1)
case 1:return new A.aK(m,B.Z,r,!1,q,o,o,!1)
case 2:return new A.aK(m,B.a_,r,!1,q,o,o,!1)
case 3:return new A.aK(m,B.y,r,!1,!1,o,o,!1)
case 4:return new A.aK(m,B.a0,r,!1,!1,o,o,!1)
case 5:n=n.h(0,"enumValues")
n.toString
p=t.N
return new A.aK(m,B.C,r,!1,!1,A.d0(J.eq(t.j.a(n),p),p),o,!1)
case 6:return new A.aK(m,B.I,!1,!1,q,o,o,!1)
case 7:return new A.aK(m,B.J,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.aK(m,B.D,!1,!1,!1,o,A.I(p),J.u(n.h(0,"enforceFk"),!0))}},
$S:145}
A.h8.prototype={
a7(){return"IndexScope."+this.b}}
A.cW.prototype={
ap(){return A.m(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.p4.prototype={
$0(){var s,r=this.a,q=r.h(0,"columns")
q.toString
q=J.eq(t.j.a(q),t.N)
s=J.u(r.h(0,"unique"),!0)
r=r.h(0,"scope")
r.toString
return new A.cW(q,s,A.ev(B.bU,A.I(r)))},
$S:147}
A.h4.prototype={
ap(){return A.m(["fields",this.a],t.N,t.X)}}
A.oy.prototype={
$0(){var s=this.a.h(0,"fields")
s.toString
return new A.h4(J.eq(t.j.a(s),t.N))},
$S:148}
A.bM.prototype={
ap(){var s,r,q,p=A.l([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q)p.push(s[q].ap())
return A.m(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.rj.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.ah(o)
s=J.u(p.h(0,"destructive"),!0)
r=A.l([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.K(p==null?B.aI:p)
q=t.G
while(p.k())r.push(A.z6(q.a(p.gn())))
return new A.bM(o,s,r)},
$S:163}
A.pT.prototype={
a7(){return"MissingRemotePolicy."+this.b}}
A.nr.prototype={}
A.bI.prototype={
gdA(){var s,r,q,p,o=this,n=$.BM()
A.xy(o)
s=n.a.get(o)
if(s==null){s=A.aU(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.A)(r),++p)s.t(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
lZ(a){var s,r,q,p,o,n=this,m=$.BN()
A.xy(n)
s=m.a.get(n)
if(s==null){s=A.E(t.N,t.d9)
for(r=n.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.A)(r),++p){o=r[p]
s.j(0,o.a,o)}m.j(0,n,s)
m=s}else m=s
return J.U(m,a)},
ap(){var s,r,q,p,o,n,m=this,l=t.N,k=t.X,j=A.E(l,k)
j.j(0,"name",m.a)
j.j(0,"version",m.b)
s=t.d
r=A.l([],s)
for(q=m.c,p=q.length,o=0;o<q.length;q.length===p||(0,A.A)(q),++o)r.push(q[o].ap())
j.j(0,"fields",r)
r=A.l([],s)
for(q=m.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.A)(q),++o){n=q[o]
r.push(A.m(["columns",n.a,"unique",n.b,"scope",n.c.b],l,k))}j.j(0,"indexes",r)
j.j(0,"keepUnsyncedArchives",m.r)
j.j(0,"prefetchFiles",m.f)
r=m.w
if(r!=null)j.j(0,"fts",A.m(["fields",r.a],l,k))
l=A.l([],s)
for(k=m.x,s=k.length,o=0;o<k.length;k.length===s||(0,A.A)(k),++o)l.push(k[o].ap())
j.j(0,"migrations",l)
return j}}
A.n6.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k.h(0,"name")
j.toString
A.I(j)
s=k.h(0,"version")
s.toString
A.ah(s)
r=A.l([],t.mK)
q=k.h(0,"fields")
q.toString
p=t.j
q=J.K(p.a(q))
o=t.G
while(q.k())r.push(A.z6(o.a(q.gn())))
q=A.l([],t.mr)
n=k.h(0,"indexes")
n.toString
n=J.K(p.a(n))
while(n.k())q.push(A.Dd(o.a(n.gn())))
p=J.u(k.h(0,"keepUnsyncedArchives"),!0)
n=J.u(k.h(0,"prefetchFiles"),!0)
if(t.f.b(k.h(0,"fts"))){m=k.h(0,"fts")
m.toString
m=A.D5(o.a(m))}else m=null
l=A.l([],t.c0)
k=t.lH.a(k.h(0,"migrations"))
k=J.K(k==null?B.aI:k)
while(k.k())l.push(A.DY(o.a(k.gn())))
return new A.bI(j,s,r,q,n,p,m,l,this.b.i("bI<0>"))},
$S(){return this.b.i("bI<0>()")}}
A.dQ.prototype={
a7(){return"MutationAction."+this.b}}
A.dB.prototype={
gb7(){var s=this.c
return s==null?this.a.b:s},
gb2(){return this.b.a.a},
im(){},
hM(a){var s=this
if(s.d!=null)return s.qI(B.aL,a)
return s.a.dT(new A.nd(s,a),B.B,t.H)},
mf(a,b){var s=this
if(s.d!=null)return s.dj(a,b)
return s.a.dT(new A.nb(s,a,b),B.B,t.H)},
lF(a){var s=this
if(s.d!=null)return s.l1(B.z,a)
return s.a.dT(new A.na(s,a),B.B,t.H)},
mp(a){var s=this
if(s.d!=null)return s.l1(B.E,a)
return s.a.dT(new A.ne(s,a),B.B,t.H)},
jI(a){var s=this
if(s.d!=null)return s.dl(a)
return s.a.dT(new A.nc(s,a),B.B,t.H)},
dl(a){return this.re(a)},
re(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dl=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.im()
s=2
return A.a(q.dq(a),$async$dl)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.cb(n,m,a,!0),$async$dl)
case 3:s=4
return A.a(n.a2(m,"id = ?",[a]),$async$dl)
case 4:l=t.N
o.Y(new A.a_(m,A.af([a],l)))
if(p!=null){l=A.eA(p.gP(),l)
l.F(0,"id")
o.bl(new A.aN(m,a,B.U,B.ax,p,null,l))}return A.e(null,r)}})
return A.f($async$dl,r)},
dj(a,b){return this.r2(a,b)},
r2(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$dj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.im()
s=3
return A.a(p.gb7().ae("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$dj)
case 3:o=d
n=J.J(o)
if(n.gW(o)){m=n.gC(o)
l=A.kL(m)
k=m.h(0,"o_kind")!=null?A.q5(A.m(["store",m.h(0,"o_store"),"record_id",m.h(0,"o_record_id"),"kind",m.h(0,"o_kind"),"payload_json",m.h(0,"o_payload_json"),"base_updated",m.h(0,"o_base_updated"),"base_hash",m.h(0,"o_base_hash"),"dirty_fields",m.h(0,"o_dirty_fields"),"op_id",m.h(0,"o_op_id"),"created_at",m.h(0,"o_created_at"),"updated_at",m.h(0,"o_updated_at"),"depends_on_op",m.h(0,"o_depends_on_op")],t.N,t.X)):null}else{l=null
k=null}s=l!=null&&l.w===B.a5&&k!=null?4:5
break
case 4:s=6
return A.a(p.ea(a,b,l,k,!1),$async$dj)
case 6:s=1
break
case 5:s=7
return A.a(p.cD(a,b,!1,k,l),$async$dj)
case 7:case 1:return A.e(q,r)}})
return A.f($async$dj,r)},
cD(a,b,c,d,e){return this.oE(a,b,!1,d,e)},
oE(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cD=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dq(a),$async$cD)
case 2:m=g
if(m==null)throw A.b(A.xT("No record "+q.gb2()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.ez(m,p,o)
n.E(0,b)
o=A.E(p,o)
o.j(0,"id",a)
o.E(0,n)
s=3
return A.a(q.b_(B.K,!1,m,a,d,e,o),$async$cD)
case 3:return A.e(null,r)}})
return A.f($async$cD,r)},
ea(a,b,c,d,e){return this.r3(a,b,c,d,!1)},
r3(a7,a8,a9,b0,b1){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$ea=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a5=null
try{a5=B.e.aE(b0.d,null)}catch(b2){a5=null}if(!t.G.b(a5)){q=n.cD(a7,a8,!1,b0,a9)
s=1
break}i=a5.h(0,"id")
if(i!=null&&!J.u(i,a7)){q=n.cD(a7,a8,!1,b0,a9)
s=1
break}h=t.N
g=t.X
f=A.ez(a5,h,g)
f.E(0,a8)
m=f
J.bU(m,"id",a7)
e=new A.ab("")
f=n.b
d=f.a
c=A.B8(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.ez(m,h,g)
b.F(0,"id")
n.lx(a7,b,a,c)
a0=n.kI(a5,m,B.K)
l=null
b=a0.length===1&&d.gdA().D(0,B.b.gan(a0))
a1=n.a
a2=a1.y
a3=a1.z
if(b){a4=d.lZ(B.b.gan(a0))
b=a4.a
l=A.m([b,A.Bk(d,a4,J.U(m,b),a2,a3),"hidden",0],h,g)}else l=A.dq(d,J.u(J.U(m,"archived"),!0),a2,a3,a7,m)
p=4
s=7
return A.a(n.gb7().G(d.a,l,"id = ?",[a7]),$async$ea)
case 7:p=2
s=6
break
case 4:p=3
a6=o.pop()
k=A.M(a6)
h=A.BG(k,m)
throw A.b(h)
s=6
break
case 3:s=2
break
case 6:g=a1.as
g===$&&A.v()
b=n.gb7()
a1=l
s=8
return A.a(g.bc(B.K,null,a0,b,a7,m,a5,b0,a,a1,a9,f),$async$ea)
case 8:g=n.d
if(g!=null)g.Y(new A.a_(d.a,A.af([a7],h)))
h=g==null
f=h?null:g.a.a$.b.d!=null
if(f===!0)if(!h)g.bl(new A.aN(d.a,a7,B.U,B.u,a5,m,A.pk(a0,A.a7(a0).c)))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ea,r)},
b_(a,b,c,d,e,f,g){return this.qJ(a,!1,c,d,e,f,g)},
l1(a,b){var s=null
return this.b_(a,!1,s,b,s,s,s)},
qI(a,b){var s=null
return this.b_(a,!1,s,s,s,s,b)},
qJ(b6,b7,b8,b9,c0,c1,c2){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$b_=A.c(function(c3,c4){if(c3===1){o.push(c4)
s=p}for(;;)switch(s){case 0:b4={}
n.im()
m=null
b4.a=b8
l=null
b4.b=b4.c=null
i=new A.n9(b4,n,c1,c0)
s=b6===B.aL?3:5
break
case 3:h=A.ai(c2.h(0,"id"))
if(h==null)h=A.mq()
g=$.yL()
if(!g.b.test(h))throw A.b(A.bi('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=6
return A.a(i.$1(m),$async$b_)
case 6:l=n.kY(c2,m)
b6=b4.a==null?B.cd:B.K
s=4
break
case 5:s=b6===B.K?7:9
break
case 7:b9.toString
m=b9
s=10
return A.a(i.$1(m),$async$b_)
case 10:if(b4.a==null)throw A.b(A.xT("No record "+n.gb2()+"/"+A.r(m)+" to update."))
c2.toString
l=n.kY(c2,m)
s=8
break
case 9:b9.toString
m=b9
s=11
return A.a(i.$1(m),$async$b_)
case 11:g=b4.a
if(g==null)throw A.b(A.xT("No record "+n.gb2()+"/"+A.r(m)+" to archive/restore."))
g=A.ez(g,t.N,t.X)
g.j(0,"archived",b6===B.z)
l=g
case 8:case 4:f=new A.ab("")
g=n.b
e=g.a
d=l
c=A.B8(f,e,d,J.aw(m)!==0?m:null)
d=f.a
b=d.charCodeAt(0)==0?d:d
n.lx(m,l,b,c)
s=b4.a==null?12:14
break
case 12:a=null
s=13
break
case 14:d=c1==null?b4.c:c1
s=d==null?15:17
break
case 15:d=n.a.as
d===$&&A.v()
s=18
return A.a(d.bC(n.gb7(),e.a,m),$async$b_)
case 18:d=c4
a=d
s=16
break
case 17:a=d
case 16:case 13:s=b4.a==null?19:21
break
case 19:a0=null
s=20
break
case 21:d=c0==null?b4.b:c0
s=d==null?22:24
break
case 22:d=n.a.as
d===$&&A.v()
s=25
return A.a(d.dO(n.gb7(),e.a,m),$async$b_)
case 25:d=c4
a0=d
s=23
break
case 24:a0=d
case 23:case 20:d=a==null
a1=!d
if(a1&&a.w===B.P)throw A.b(A.z0("Record "+n.gb2()+"/"+A.r(m)+u.W))
a2=b4.a
a3=a2!=null
if(a3)a4=!a1||a.w===B.t
else a4=!1
if(a3&&a4){a5=A.aj(A.b_(e,a2))
a1=A.aB(B.l.v(B.i.v(a5)).a)
a6=new A.mR(a5,a1,d?null:a.c)}else a6=null
d=m
a1=l
a2=n.a
a3=a2.y
a7=a2.z
a8=A.dq(e,J.u(J.U(l,"archived"),!0),a3,a7,d,a1)
a9=n.kI(b4.a,l,b6)
k=null
if(b4.a!=null&&a9.length===1&&e.gdA().D(0,B.b.gan(a9))){b0=e.lZ(B.b.gan(a9))
d=b0.a
k=A.m([d,A.Bk(e,b0,J.U(l,d),a3,a7),"hidden",0],t.N,t.X)}else k=a8
p=27
d=e.a
s=b4.a==null?30:32
break
case 30:s=33
return A.a(n.gb7().az(0,d,k),$async$b_)
case 33:s=31
break
case 32:s=34
return A.a(n.gb7().G(d,k,"id = ?",[m]),$async$b_)
case 34:case 31:p=2
s=29
break
case 27:p=26
b5=o.pop()
j=A.M(b5)
g=A.BG(j,l)
throw A.b(g)
s=29
break
case 26:s=2
break
case 29:d=a2.as
d===$&&A.v()
a1=n.gb7()
a2=m
a3=b4.a
s=35
return A.a(d.bc(b6,a6,a9,a1,a2,l,a3,a0,b,a8,a,g),$async$b_)
case 35:switch(b6.a){case 1:case 0:b2=b4.a==null?B.aw:B.u
break
case 2:b2=B.u
break
case 3:b2=B.bj
break
case 4:b2=B.bk
break
default:b2=null}if(b6===B.z||b6===B.E)b3=A.af(["archived"],t.N)
else if(b4.a==null){g=l
d=A.o(g).i("Z<1>")
a1=d.i("bj<n.E>")
b3=A.eA(new A.bj(new A.Z(g,d),new A.n8(),a1),a1.i("n.E"))}else b3=A.pk(a9,A.a7(a9).c)
g=n.d
d=g==null
a1=d?null:g.a.a$.b.d!=null
if(a1===!0)if(!d)g.bl(new A.aN(e.a,m,B.U,b2,b4.a,l,b3))
if(!d)g.Y(new A.a_(e.a,A.af([m],t.N)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b_,r)},
kY(a,b){var s,r,q,p=A.E(t.N,t.X)
for(s=a.gbm(),s=s.gu(s);s.k();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.mh("archived",new A.n7())
return p},
kI(a,b,c){var s,r,q,p,o
if(a==null)return B.c3
s=t.N
r=A.aU(s)
s=A.eA(a.gP(),s)
s.E(0,new A.Z(b,A.o(b).i("Z<1>")))
for(s=A.fg(s,s.r,A.o(s).c),q=s.$ti.c;s.k();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.n.ag(a.h(0,p),b.h(0,p)))r.t(0,p)}o=A.P(r,r.$ti.c)
B.b.aW(o)
return o},
dq(a){return this.rp(a)},
rp(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$dq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.gb7().ae('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$dq)
case 3:m=c
l=J.J(m)
if(l.gB(m)){q=null
s=1
break}o=p.a
q=A.ca(n,l.gC(m),o.y,o.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dq,r)},
fW(a){return this.r8(a)},
r8(a){var s=0,r=A.h(t.g0),q,p=this,o,n,m,l,k,j
var $async$fW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.gb7().ae('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$fW)
case 3:j=c
k=J.J(j)
if(k.gB(j)){q=B.cp
s=1
break}o=k.gC(j)
k=p.a
n=A.ca(l,o,k.y,k.z)
m=o.h(0,"s_sync_state")!=null?A.kL(A.m(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.ee(n,m,o.h(0,"o_kind")!=null?A.q5(A.m(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fW,r)},
bF(a){return this.n9(a)},
n9(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g
var $async$bF=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.d==null
if(g&&p.b.d.a.H(a)){q=p.b.d.bF(a)
s=1
break}o=p.b
n=o.a
m=n.b
l=n.a
s=m>1?3:5
break
case 3:s=6
return A.a(p.gb7().ae("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+l+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[l,a]),$async$bF)
case 6:s=4
break
case 5:s=7
return A.a(p.gb7().ae('SELECT * FROM "'+l+'" WHERE id = ? LIMIT 1',[a]),$async$bF)
case 7:case 4:k=c
l=J.J(k)
if(l.gB(k)){if(g)o.d.k8(a,null)
q=null
s=1
break}j=l.gC(k)
l=p.a
i=A.ca(n,j,l.y,l.z)
h=A.aQ(j.h(0,"lp_schema_ver"))
if(h==null)h=1
if(h<m)i=A.Gl(n,i,h,m)
if(g)o.d.k8(a,i)
q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bF,r)},
lx(a,b,c,d){var s,r,q,p,o,n,m
for(s=this.b.a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
o=p.a
n=b.h(0,o)
if(p.c&&n==null)throw A.b(A.bi('Field "'+o+'" is required.',o))
if(n==null)continue
m=A.Bm(p,n)
if(m!=null)throw A.b(A.bi(A.CN(p,m),o))}s=this.a.f
if(d>s)throw A.b(A.bi("Document exceeds max size ("+d+" > "+s+" bytes).",null))}}
A.nd.prototype={
$1(a){return a.cf(this.a.b.a.a).hM(this.b)},
$S:6}
A.nb.prototype={
$1(a){return a.cf(this.a.b.a.a).mf(this.b,this.c)},
$S:6}
A.na.prototype={
$1(a){return a.cf(this.a.b.a.a).lF(this.b)},
$S:6}
A.ne.prototype={
$1(a){return a.cf(this.a.b.a.a).mp(this.b)},
$S:6}
A.nc.prototype={
$1(a){return a.cf(this.a.b.a.a).jI(this.b)},
$S:6}
A.n9.prototype={
mB(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k
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
return A.a(p.b.dq(a),$async$$1)
case 8:s=6
break
case 7:c=m
case 6:q=k.a=c
s=1
break
case 4:s=9
return A.a(p.b.fW(a),$async$$1)
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
$1(a){return this.mB(a)},
$S:64}
A.n8.prototype={
$1(a){return a!=="id"},
$S:12}
A.n7.prototype={
$0(){return!1},
$S:48}
A.lm.prototype={}
A.bo.prototype={
Y(a){this.c.push(a)
this.a.e.r+=a.b.a},
bl(a){if(this.a.a$.b.d==null)return
this.d.push(a)},
cf(a){var s=this.a
return new A.dB(s,s.aa(a),this.b,this)},
ce(a,b,c){return this.t5(a,b,c,c)},
t5(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$ce=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a=n.b
s=3
return A.a(a.K("SAVEPOINT "+a2),$async$ce)
case 3:h=n.c
m=h.length
g=n.d
l=g.length
f=n.a
e=f.e
k=e.r
p=5
d=A.zH(f,a,h,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.xf(new A.rI(a3,j,a4),null,A.m([$.my(),j],f,f),a4.i("z<0>")),$async$ce)
case 8:i=a7
s=9
return A.a(a.K("RELEASE "+a2),$async$ce)
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
return A.a(a.K("ROLLBACK TO "+a2),$async$ce)
case 14:s=15
return A.a(a.K("RELEASE "+a2),$async$ce)
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
if(a>m)B.b.mm(h,m,a)
a=g.length
if(a>l)B.b.mm(g,l,a)
a=e.r
e.r=a+(k-a)
throw a0
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ce,r)}}
A.rI.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("z<0>()")}}
A.vx.prototype={}
A.hx.prototype={
ka(a){var s
if(a.a!==this.w.a.a)return!1
s=a.b
if(s.a!==0&&!s.D(0,this.x))return!1
return!0},
bS(){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$bS=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.w.a
s=3
return A.a(o.b.aM(n.a,1,"id = ?",[p.x]),$async$bS)
case 3:m=b
l=J.J(m)
if(l.gB(m)){q=null
s=1
break}q=A.ca(n,l.gC(m),o.y,o.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bS,r)},
jb(a){return a==null?"<null>":A.aB(B.l.v(B.i.v(A.aj(a))).a)},
me(a){var s=this.y
return s==null?null:s.t(0,a)},
jC(a,b){var s=this.y
return s==null?null:s.bw(a,b)},
ns(){var s=this.y=A.xX(this.guf(),new A.pZ(this),null,!1,t.b)
return new A.b6(s,A.o(s).i("b6<1>"))},
hi(){this.nv()
var s=this.y
if(s!=null)s.p()}}
A.pZ.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.av()
s=2
return A.a(p.ek(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.bX.prototype={
jC(a,b){},
av(){var s=this.a.a$.a
this.c=new A.aY(s,A.o(s).i("aY<1>")).aQ(this.gqO())},
hz(){return this.vb(A.o(this).i("bX.T"))},
vb(a){var s=0,r=A.h(a),q,p=this,o
var $async$hz=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bS(),$async$hz)
case 3:o=c
p.r=p.jb(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hz,r)},
qP(a){var s,r=this
if(!r.ka(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.A()
r.d=A.co(r.b,r.gly())},
ek(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g
var $async$ek=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.e=!0
i=n.a.e;++i.y
q=3
s=6
return A.a(n.bS(),$async$ek)
case 6:m=b
l=n.jb(m)
if(!J.u(l,n.r)){n.r=l;++i.z
n.me(m)}o.push(5)
s=4
break
case 3:q=2
g=p.pop()
k=A.M(g)
j=A.aa(g)
n.jC(k,j)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.e=!1
if(n.f){n.f=!1
i=n.d
if(i!=null)i.A()
n.d=A.co(n.b,n.gly())}s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$ek,r)},
hi(){var s=this.d
if(s!=null)s.A()
s=this.c
if(s!=null)s.A()}}
A.tC.prototype={
aT(a,b){var s,r=this;++r.b
r.l3()
s=new A.p($.t,b.i("p<0>"))
r.a=r.a.aK(new A.tD(r,new A.az(s,b.i("az<0>")),a),t.H)
return s},
l3(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.tD.prototype={
$1(a){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
h=n.b
s=6
return A.a(n.c.$0(),$async$$1)
case 6:h.au(c)
o.push(5)
s=4
break
case 3:q=2
i=p.pop()
m=A.M(i)
l=A.aa(i)
n.b.bQ(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a;--j.b
j.l3()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:24}
A.mS.prototype={}
A.kF.prototype={}
A.x6.prototype={
$1(a){return B.b.E(this.a,a)},
$S:67}
A.h0.prototype={}
A.op.prototype={
bi(){var s=0,r=A.h(t.k4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bi=A.c(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)switch(s){case 0:b2=n.d
if(b2==null){q=B.br
s=1
break}m=0
l=0
k=0
j=!1
a2=n.a
a3=a2.at
a3===$&&A.v()
b5=J
s=3
return A.a(a3.er(25),$async$bi)
case 3:a4=b5.K(b7),a5=n.c,a6=a5.ay
case 4:if(!a4.k()){s=5
break}i=a4.gn()
p=7
s=i.e===B.aM?10:12
break
case 10:s=13
return A.a(n.c7(i,b2),$async$bi)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.md(i.b),$async$bi)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.aN?17:18
break
case 17:s=19
return A.a(n.eb(i),$async$bi)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.md(i.b),$async$bi)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.M(b3)
j=!0
e=i.w+1
d=a5.lS(e)
a8=i.b
a9=J.av(f)
b0=a6.$0()
s=23
return A.a(a3.vt(a8,a9,e,b0+B.c.R(d.a,1000)),$async$bi)
case 23:s=9
break
case 6:s=2
break
case 9:s=4
break
case 5:a3=a2.ch,a4=new A.bK(a3,a3.r,a3.e,A.o(a3).i("bK<1>")),a2=a2.b
case 24:if(!a4.k()){s=25
break}c=a4.d
a5=c
b1=a3.h(0,a5)
if(b1==null)A.x(A.w('No store "'+a5+'" registered in this LocalPocket.'))
s=b1.a.f?26:27
break
case 26:b5=J
s=28
return A.a(a2.dN("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$bi)
case 28:a5=b5.K(b7)
case 29:if(!a5.k()){s=30
break}b=a5.gn()
p=32
a6=J.U(b,"ref_id")
a6.toString
a=A.I(a6)
a6=J.U(b,"record_id")
a6.toString
a0=A.I(a6)
a1=A.ai(J.U(b,"remote_name"))
s=a1!=null?35:36
break
case 35:s=37
return A.a(n.cN(a0,a,a1,c),$async$bi)
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
case 25:q=new A.h0(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bi,r)},
c7(a,b){return this.rd(a,b)},
rd(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$c7=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a={}
a0=t.G.a(B.e.aE(a3.f,null))
a1=a0.h(0,"ref_id")
a1.toString
A.I(a1)
l=a0.h(0,"hash")
l.toString
A.I(l)
k=A.ai(a0.h(0,"name"))
if(k==null)k=l+".bin"
s=3
return A.a(a4.cj(l),$async$c7)
case 3:if(!a6)throw A.b(A.w("Blob for hash "+l+" not found in store"))
s=4
return A.a(a4.c0(l),$async$c7)
case 4:j=a6
if(j==null)throw A.b(A.w("Blob size for hash "+l+" is unavailable"))
m=null
p=6
i=n.b.z
i===$&&A.v()
s=9
return A.a(i.bG(a3.d),$async$c7)
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
if(m!=null){f=B.a.q(l,0,B.c.cK(l.length,0,10))
for(i=m.e,e=i.length,d=f.length!==0,c=0;c<e;++c){b=i[c]
if(d&&B.a.O(b,f)||B.a.O(b,k)){g=b
break}}}a.a=null
s=g!=null?10:12
break
case 10:a.a=g
s=11
break
case 12:s=13
return A.a(n.b.wq(a3.d,A.m([k,new A.eS(k,j,new A.or(a4,l))],t.N,t.h3)),$async$c7)
case 13:l=a6.e
a.a=l.length!==0?B.b.ga_(l):k
case 11:s=14
return A.a(n.a.V(new A.os(a,a1,a3),t.P),$async$c7)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c7,r)},
eb(a){return this.rb(a)},
rb(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$eb=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=t.G.a(B.e.aE(a.f,null))
l=m.h(0,"ref_id")
l.toString
A.I(l)
o=A.ai(m.h(0,"remote_name"))
n=m.h(0,"hash")
n.toString
A.I(n)
s=o!=null?3:4
break
case 3:s=5
return A.a(p.b.wo(a.d,A.l([o],t.s)),$async$eb)
case 5:case 4:s=6
return A.a(p.a.V(new A.oq(l,n,a),t.P),$async$eb)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eb,r)},
cN(a,b,c,d){return this.uh(a,b,c,d)},
uh(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$cN=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=p.d
l=p.b.z
l===$&&A.v()
k=m
s=4
return A.a(l.hj(c,a,null),$async$cN)
case 4:s=3
return A.a(k.hM(f),$async$cN)
case 3:o=f
s=5
return A.a(m.c0(o),$async$cN)
case 5:n=f
if(n==null)n=0
s=6
return A.a(p.a.V(new A.ot(o,n,p.c.ay.$0(),c,b,d,a),t.P),$async$cN)
case 6:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cN,r)},
cT(a,b,c,d){return this.vy(a,b,c,d)},
vy(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g
var $async$cT=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:s=2
return A.a(a.dN("lp_file_refs","store = ? AND record_id = ?",[d,b]),$async$cT)
case 2:k=f
j=A.pk(c,A.a7(c).c)
i=J.ax(k)
h=t.v
g=A.eA(new A.bp(i.co(k,new A.ou(),t.x),h),h.i("n.E"))
h=c.length,q=t.N,p=t.X,o=0
case 3:if(!(o<c.length)){s=5
break}n=c[o]
s=!g.D(0,n)?6:7
break
case 6:s=8
return A.a(a.cm(0,"lp_file_refs",A.m(["ref_id",A.mq(),"store",d,"record_id",b,"field","imgs","hash","unknown_"+n,"remote_name",n,"state","remote_only"],q,p),B.bm),$async$cT)
case 8:case 7:case 4:c.length===h||(0,A.A)(c),++o
s=3
break
case 5:i=i.gu(k)
case 9:if(!i.k()){s=10
break}h=i.gn()
m=A.ai(h.h(0,"remote_name"))
if(m==null){s=9
break}if(j.D(0,m)){s=9
break}q=h.h(0,"state")
q.toString
A.I(q)
if(q==="pending_remove"||q==="pending_upload"){s=9
break}q=h.h(0,"ref_id")
q.toString
s=11
return A.a(a.a2("lp_file_refs","ref_id = ?",[q]),$async$cT)
case 11:l=A.ai(h.h(0,"hash"))
s=l!=null&&l.length!==0&&!B.a.O(l,"unknown_")?12:13
break
case 12:s=14
return A.a(a.aw(u.y,[l]),$async$cT)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$cT,r)}}
A.or.prototype={
$0(){return this.a.bA(this.b)},
$S:68}
A.os.prototype={
$1(a){return this.mE(a)},
mE(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.G("lp_file_refs",A.m(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.Y(new A.a_(p.c,A.af([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.oq.prototype={
$1(a){return this.mD(a)},
mD(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.a2("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aw(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.Y(new A.a_(p.c,A.af([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.ot.prototype={
$1(a){return this.mF(a)},
mF(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.fG(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.G("lp_file_refs",A.m(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.Y(new A.a_(q.f,A.af([q.r],p)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.ou.prototype={
$1(a){return A.ai(a.h(0,"remote_name"))},
$S:69}
A.b2.prototype={}
A.oo.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k.h(0,"ref_id")
j.toString
A.I(j)
s=k.h(0,"store")
s.toString
A.I(s)
r=k.h(0,"record_id")
r.toString
A.I(r)
q=k.h(0,"field")
q.toString
A.I(q)
p=k.h(0,"hash")
p.toString
A.I(p)
o=A.ai(k.h(0,"remote_name"))
n=k.h(0,"state")
n.toString
A.I(n)
m=A.aQ(k.h(0,"next_retry_at"))
if(m==null)m=0
l=A.aQ(k.h(0,"attempt_count"))
if(l==null)l=0
return new A.b2(j,s,r,q,p,o,n,m,l,A.ai(k.h(0,"last_error")))},
$S:70}
A.pm.prototype={
glh(){return this.b},
dI(a,b,c){return this.vj(a,b,c)},
vj(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$dI=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=J
s=3
return A.a(p.a.b.dN("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,a]),$async$dI)
case 3:o=n.aG(e,A.GX(),t.A)
o=A.P(o,o.$ti.i("R.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dI,r)},
dv(a,b,c,d,e,f,g){return this.ts(a,b,c,d,e,f,g)},
ts(a,b,c,d,e,f,g){var s=0,r=A.h(t.A),q,p=this,o,n,m
var $async$dv=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:o=p.glh()
s=3
return A.a(o.bB(a,b,c),$async$dv)
case 3:n=i
s=4
return A.a(o.c0(n),$async$dv)
case 4:m=i
if(m==null)m=0
s=5
return A.a(p.a.V(new A.pn(p,g,f,d,n,m,A.mq(),e),t.A),$async$dv)
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dv,r)},
eI(a,b,c,d,e){return this.vB(a,b,c,d,e)},
vB(a,b,c,d,e){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l,k,j
var $async$eI=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:l=p.glh()
s=3
return A.a(p.dI(a,c,e),$async$eI)
case 3:k=g
j=J.J(k)
if(j.gB(k))throw A.b(A.w("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.ex(k,new A.pp(d),new A.pq(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(A.w("File is remote_only; download it before opening."))
j=p.a
n=j.Q.$0()
m=o.e
s=4
return A.a(j.b.aw("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[n,m]),$async$eI)
case 4:q=l.bA(m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eI,r)},
eR(a,b,c,d,e,f){return this.w3(0,b,c,d,e,f)},
w3(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$eR=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.dI(b,d,f),$async$eR)
case 3:n=h
m=J.J(n)
if(m.gB(n)){s=1
break}o=e!=null?m.ex(n,new A.pr(e),new A.ps(e)):m.h(n,c)
s=4
return A.a(p.a.V(new A.pt(p,o,f,d,b),t.P),$async$eR)
case 4:case 1:return A.e(q,r)}})
return A.f($async$eR,r)},
bZ(a,b){return this.n8(a,b)},
n8(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g
var $async$bZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:i={}
h=p.b
i.a=0
g=i
s=3
return A.a(h.cL(b),$async$bZ)
case 3:g.a=0+d
o=p.a
s=4
return A.a(o.V(new A.po(i,p),t.P),$async$bZ)
case 4:n=o.Q.$0()-B.c.R(a.a,1000)
o=o.b,m=t.s
case 5:s=7
return A.a(o.bY("lp_blobs",A.l(["hash"],m),250,"hash ASC","refcount <= 0 AND last_access <= ?",[n]),$async$bZ)
case 7:l=d
k=J.J(l)
if(k.gB(l)){s=6
break}k=k.gu(l)
case 8:if(!k.k()){s=9
break}j=k.gn().h(0,"hash")
j.toString
A.I(j)
s=10
return A.a(h.dB(j),$async$bZ)
case 10:s=11
return A.a(o.a2("lp_blobs","hash = ?",[j]),$async$bZ)
case 11:++i.a
s=8
break
case 9:s=5
break
case 6:q=i.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bZ,r)},
ci(a){return this.ur(a)},
ur(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$ci=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.b
g=p.a.b
e=A
s=3
return A.a(g.aR("SELECT SUM(size) as total FROM lp_blobs"),$async$ci)
case 3:f=e.iP(c)
if(f==null)f=0
if(f<=a){q=0
s=1
break}o=t.N,n=t.X,m=0
case 4:if(!(f>a)){s=5
break}s=6
return A.a(g.aR("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$ci)
case 6:l=c
k=J.J(l)
if(k.gB(l)){s=5
break}k=k.gu(l)
case 7:if(!k.k()){s=8
break}j=k.gn()
if(f<=a){s=8
break}i=j.h(0,"hash")
i.toString
A.I(i)
j=j.h(0,"size")
j.toString
A.ah(j)
s=9
return A.a(h.dB(i),$async$ci)
case 9:s=10
return A.a(g.G("lp_file_refs",A.m(["state","remote_only"],o,n),"hash = ? AND state = ?",[i,"synced"]),$async$ci)
case 10:s=11
return A.a(g.a2("lp_blobs","hash = ?",[i]),$async$ci)
case 11:f-=j;++m
s=7
break
case 8:s=4
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ci,r)}}
A.pn.prototype={
$1(a){return this.mI(a)},
mI(a){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$1=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:j=a.b
i=p.a.a.Q.$0()
h=t.s
g=p.b
f=p.c
e=p.d
d=p.e
s=3
return A.a(j.eP("lp_file_refs",A.l(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],h),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[g,f,e,d]),$async$$1)
case 3:c=a1
b=J.J(c)
if(b.gW(c)){q=A.z7(b.gC(c))
s=1
break}s=4
return A.a(A.fG(j,d,i,p.f),$async$$1)
case 4:s=5
return A.a(j.eP("lp_outbox",A.l(["op_id","base_updated"],h),1,"store = ? AND record_id = ?",[g,f]),$async$$1)
case 5:o=a1
h=J.J(o)
n=h.gW(o)&&J.U(h.gC(o),"base_updated")==null?A.ai(J.U(h.gC(o),"op_id")):null
h=p.r
b=p.w
m=t.N
l=t.X
s=6
return A.a(j.cm(0,"lp_file_refs",A.m(["ref_id",h,"store",g,"record_id",f,"field",e,"hash",d,"remote_name",b,"state","pending_upload"],m,l),B.W),$async$$1)
case 6:k=A.mq()
s=7
return A.a(j.az(0,"lp_op_queue",A.m(["op_id",k,"store",g,"record_id",f,"kind","fileUpload","payload_json",B.e.a4(A.m(["ref_id",h,"field",e,"hash",d,"name",b],m,m),null),"state","pending","depends_on_op",n,"created_at",i],m,l)),$async$$1)
case 7:a.Y(new A.a_(g,A.af([f],m)))
q=new A.b2(h,g,f,e,d,b,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:71}
A.pp.prototype={
$1(a){return a.a===this.a},
$S:54}
A.pq.prototype={
$0(){return A.x(A.w("FileRef "+this.a+" not found"))},
$S:36}
A.pr.prototype={
$1(a){return a.a===this.a},
$S:54}
A.ps.prototype={
$0(){return A.x(A.w("FileRef "+this.a+" not found"))},
$S:36}
A.pt.prototype={
$1(a){return this.mK(a)},
mK(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
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
return A.a(p.a2("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 5:s=6
return A.a(p.aw(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.G("lp_op_queue",A.m(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.G("lp_file_refs",A.m(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.az(0,"lp_op_queue",A.m(["op_id",A.mq(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.e.a4(A.m(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.x),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.Y(new A.a_(q.c,A.af([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.po.prototype={
$1(a){return this.mJ(a)},
mJ(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.b
p=q.b.a.ch,p=new A.bK(p,p.r,p.e,A.o(p).i("bK<1>")),o=t.N,n=t.X,m=q.a
case 2:if(!p.k()){s=3
break}l=p.d
h=J
s=4
return A.a(i.ae('SELECT f.ref_id, f.hash FROM lp_file_refs f WHERE f.store = ? AND NOT EXISTS (SELECT 1 FROM "'+A.B(l,'"','""')+'" r WHERE r.id = f.record_id)',[l]),$async$$1)
case 4:l=h.K(c)
case 5:if(!l.k()){s=6
break}k=l.gn()
j=k.h(0,"ref_id")
j.toString
A.I(j)
k=k.h(0,"hash")
k.toString
A.I(k)
s=7
return A.a(i.a2("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 7:s=8
return A.a(i.aw(u.y,[k]),$async$$1)
case 8:s=9
return A.a(i.G("lp_op_queue",A.m(["state","done"],o,n),"payload_json LIKE ?",['%"ref_id":"'+j+'"%']),$async$$1)
case 9:++m.a
s=5
break
case 6:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.t4.prototype={
br(){var s=0,r=A.h(t.B),q,p=2,o=[],n,m,l,k,j
var $async$br=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.mu()
if(n==null){q=null
s=1
break}l=t.m
s=7
return A.a(A.a4(n.getDirectory(),l),$async$br)
case 7:m=b
s=8
return A.a(A.a4(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$br)
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
return A.f($async$br,r)},
bB(a,b,c){return this.vN(a,b,c)},
hM(a){return this.bB(a,null,null)},
vN(a,b,c){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k,j,i,h
var $async$bB=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:m=new A.u6(A.l([],t.bs))
s=3
return A.a(A.iS(a,b,c,null,new A.t5(m)),$async$bB)
case 3:l=e
k=m.jO()
s=4
return A.a(p.br(),$async$bB)
case 4:j=e
i=l.a
s=j!=null?5:7
break
case 5:o=t.m
h=A
s=9
return A.a(A.a4(j.getFileHandle(i,{create:!0}),o),$async$bB)
case 9:s=8
return A.a(h.a4(e.createWritable(),o),$async$bB)
case 8:n=e
o=t.X
s=10
return A.a(A.a4(n.write(t.a.a(B.d.gaJ(k))),o),$async$bB)
case 10:s=11
return A.a(A.a4(n.close(),o),$async$bB)
case 11:s=6
break
case 7:p.b.j(0,i,k)
case 6:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bB,r)},
bA(a){return this.vD(a)},
vD(a){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$bA=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.jc(a)
h=n.b
if(h.H(a)){h=h.h(0,a)
h.toString
q=A.xY(h,t.L)
s=1
break}s=3
return A.a(n.br(),$async$bA)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
h=t.m
s=10
return A.a(A.a4(m.getFileHandle(a,{create:!1}),h),$async$bA)
case 10:l=c
s=11
return A.a(A.a4(l.getFile(),h),$async$bA)
case 11:k=c
s=12
return A.a(A.a4(k.arrayBuffer(),t.a),$async$bA)
case 12:j=c
i=A.bB(j,0,null)
i=A.xY(i,t.L)
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
return A.f($async$bA,r)},
dB(a){return this.tN(a)},
tN(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$dB=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.jc(a)
o.b.F(0,a)
s=2
return A.a(o.br(),$async$dB)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(A.z9(n,a),$async$dB)
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
return A.f($async$dB,r)},
cj(a){return this.ux(a)},
ux(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k
var $async$cj=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.jc(a)
if(n.b.H(a)){q=!0
s=1
break}s=3
return A.a(n.br(),$async$cj)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(A.a4(m.getFileHandle(a,{create:!1}),t.m),$async$cj)
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
return A.f($async$cj,r)},
c0(a){return this.nm(a)},
nm(a){var s=0,r=A.h(t.aV),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$c0=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.jc(a)
j=n.b
if(j.H(a)){q=j.h(0,a).length
s=1
break}s=3
return A.a(n.br(),$async$c0)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
j=t.m
s=10
return A.a(A.a4(m.getFileHandle(a,{create:!1}),j),$async$c0)
case 10:l=c
s=11
return A.a(A.a4(l.getFile(),j),$async$c0)
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
return A.f($async$c0,r)},
cL(a){return this.tz(a)},
tz(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
var $async$cL=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(m.br(),$async$cL)
case 3:f=c
if(f==null){q=0
s=1
break}l=0
p=5
i=new A.bR(A.bF(A.z8(f),"stream",t.K),t.I)
p=8
h=t.X
case 11:s=13
return A.a(i.k(),$async$cL)
case 13:if(!c){s=12
break}k=i.gn()
j=k.name
if(!J.CA(j,"tmp_")){s=11
break}p=15
s=18
return A.a(A.a4(f.removeEntry(j,{recursive:!1}),h),$async$cL)
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
return A.a(i.A(),$async$cL)
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
return A.f($async$cL,r)}}
A.t5.prototype={
$1(a){return this.a.t(0,a)},
$S:23}
A.kO.prototype={
gmk(){return 1}}
A.mO.prototype={
cZ(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$cZ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.e7(),$async$cZ)
case 5:o=b
s=o.gmk()<0.25?6:7
break
case 6:s=8
return A.a(p.iW(o),$async$cZ)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gmk()<0.25?9:10
break
case 9:s=11
return A.a(p.iW(m),$async$cZ)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cZ,r)},
hP(){var s=0,r=A.h(t.q),q,p=this
var $async$hP=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.e7(),$async$hP)
case 3:q=p.iW(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hP,r)},
e7(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$e7=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.jf():j
p=3
s=6
return A.a(l,$async$e7)
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
return A.f($async$e7,r)},
iW(a){var s=this.c
if(s!=null)return s
return this.c=this.ff(a)},
ff(a){return this.ov(a)},
ov(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$ff=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.w("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.jJ(l),$async$ff)
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
return A.f($async$ff,r)}}
A.ki.prototype={
hJ(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$hJ=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.at){s=1
break}n.at=!0
if(n.ax){s=1
break}p=4
m=n.z
m===$&&A.v()
s=7
return A.a(m.hL(),$async$hJ)
case 7:n.as=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.M(k)
if(m instanceof A.cf){n.as=!1
n.ax=!0}else if(m instanceof A.bh)n.at=n.as=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hJ,r)},
fa(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$fa=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.Q!=null){s=1
break}o=p.z
o===$&&A.v()
n=new A.qm(o,A.l(["data"],t.s),B.bo,p.gqW(),p.gqZ(),A.c_(null,t.H))
p.Q=n
s=3
return A.a(n.av(),$async$fa)
case 3:case 1:return A.e(q,r)}})
return A.f($async$fa,r)},
e_(){var s=0,r=A.h(t.H),q=this,p,o
var $async$e_=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.Q
o=o==null?null:o.aA()
s=2
return A.a(o instanceof A.p?o:A.bk(o,t.H),$async$e_)
case 2:q.Q=null
for(o=q.ch,p=new A.aL(o,o.r,o.e,A.o(o).i("aL<2>"));p.k();)p.d.A()
o.ai(0)
q.CW.ai(0)
return A.e(null,r)}})
return A.f($async$e_,r)},
qX(){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
this.e2(p,new A.cd(p,B.S,null))}},
r_(a){var s=a.b,r=s.b
if(!B.b.D(this.c,r))return
if(a.a==="delete"){this.h1(s)
return}this.e2(r,new A.cd(r,B.S,s))},
h1(a){return this.t2(a)},
t2(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$h1=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.b.D(n.c,j)){s=1
break}m=null
p=4
l=n.z
l===$&&A.v()
s=7
return A.a(l.bG(a.a),$async$h1)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.M(i)
if(l instanceof A.ci){n.e2(j,new A.cd(j,B.ap,null))
s=1
break}else if(l instanceof A.bh){s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:if(m==null){n.e2(j,new A.cd(j,B.ap,null))
s=1
break}n.e2(j,new A.cd(j,B.S,m))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h1,r)},
e2(a,b){var s,r
this.CW.j(0,a,b)
s=this.ch
r=s.h(0,a)
if(r!=null)r.A()
s.j(0,a,A.co(B.bp,new A.qv(this,a)))},
wo(a,b){return this.hT(null,a,null,b,null)},
hT(a,b,c,d,e){return this.wr(a,b,c,d,e)},
wq(a,b){return this.hT(null,a,null,null,b)},
wr(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$hT=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.cS(0,new A.qw(),t.N,t.co)
n=p.z
n===$&&A.v()
q=n.hS(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hT,r)}}
A.qv.prototype={
$0(){var s,r=this.a,q=this.b
r.ch.F(0,q)
s=r.CW.F(0,q)
if(s!=null&&(r.ay.c&4)===0)r.ay.t(0,s)},
$S:0}
A.qw.prototype={
$2(a,b){return new A.X(a,new A.cU("imgs+",b.a,b.b,b.c),t.ia)},
$S:74}
A.qe.prototype={
eE(a,b,c,d,e,f){return this.vl(a,b,c,d,e,f)},
vl(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$eE=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.Hz(a,e,c)
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m=A.B(a,"'","\\'")
l="(store="+("'"+m+"'")+" && updated>="+("'"+A.B(n,"'","\\'")+"'")+")"
if(c==null)o=l
else o=l+" && id>"+("'"+A.B(c,"'","\\'")+"'")}n=t.N
n=A.E(n,n)
n.j(0,"filter",o)
n.j(0,"sort",h?"updated,id":"id")
n.j(0,"perPage",""+B.c.jQ(B.c.cK(f,1,500)))
n.j(0,"skipTotal","1")
if(b!=null)n.j(0,"fields",B.b.L(b,","))
k=p.b.bg("/api/collections/data/records").jM(n)
s=3
return A.a(p.ll("GET",k),$async$eE)
case 3:j=a0
p.cC(j,A.l([200],t.t),k)
i=p.cB(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.be("List response has no items array."))
h=J.aG(i,new A.ql(p),t.Q)
h=A.P(h,h.$ti.i("R.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eE,r)},
bG(a){return this.nb(a)},
nb(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$bG=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.bg("/api/collections/data/records/"+A.fs(2,a,B.k,!1))
s=3
return A.a(p.ll("GET",o),$async$bG)
case 3:n=c
if(n.a===404)throw A.b(A.DB("not found"))
p.cC(n,A.l([200],t.t),o)
q=p.di(p.cB(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bG,r)},
hf(a,b,c){return this.tH(a,b,c)},
tH(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$hf=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bg("/api/collections/data/records")
s=3
return A.a(p.eh("POST",o,B.e.a4(A.m(["id",b,"store",c,"data",B.e.aE(a,null)],t.N,t.z),null)),$async$hf)
case 3:n=e
if(n.a===400&&p.qz(n))throw A.b(new A.et(p.e3(n)))
p.cC(n,A.l([200,201],t.t),o)
q=p.di(p.cB(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hf,r)},
qz(a){var s,r,q,p,o,n
try{s=this.cB(a)
r=J.U(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.u(p,"validation_not_unique")||J.u(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
eX(a,b,c){return this.wn(a,b,c)},
wn(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$eX=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bg("/api/collections/data/records/"+A.fs(2,c,B.k,!1))
s=3
return A.a(p.eh("PATCH",o,B.e.a4(A.m(["data",B.e.aE(b,null)],t.N,t.z),null)),$async$eX)
case 3:n=e
p.cC(n,A.l([200],t.t),o)
q=p.di(p.cB(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eX,r)},
hS(a,b,c,d,e){return this.wp(a,b,c,d,e)},
wp(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n,m,l
var $async$hS=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.b.bg("/api/collections/data/records/"+A.fs(2,b,B.k,!1))
m=t.N
l=A.E(m,m)
if(d!=null)l.j(0,"imgs-",B.e.a4(d,null))
if(e==null)m=null
else{m=A.o(e).i("aT<2>")
m=A.P(new A.aT(e,m),m.i("n.E"))}s=3
return A.a(p.rK(new A.jF("PATCH",n,B.aJ,l,m==null?B.c0:m)),$async$hS)
case 3:o=g
p.cC(o,A.l([200],t.t),n)
q=p.di(p.cB(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hS,r)},
hj(a,b,c){return this.ui(a,b,c)},
ui(a,b,c){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l
var $async$hj=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=t.N
l=A.E(l,l)
o=p.b.bg("/api/files/data/"+A.fs(2,b,B.k,!1)+"/"+A.fs(2,a,B.k,!1))
n=l.a===0?o:o.jM(l)
s=3
return A.a(p.r0(new A.dJ("GET",n,B.aJ,null)),$async$hj)
case 3:m=e
p.cC(new A.cg(m.a,m.b,""),A.l([200],t.t),n)
q=m.c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hj,r)},
eM(a){return this.vM(a)},
vM(a4){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$eM=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a2=p.b.bg("/api/batch")
a3=A.l([],t.ic)
for(o=J.ax(a4),n=o.gu(a4),m=t.N,l=t.z,k=t.K;n.k();){j=n.gn()
a3.push(A.m(["method","PUT","url","/api/collections/data/records","body",A.m(["id",j.c,"store",j.b,"data",B.e.aE(j.d,null)],m,l)],m,k))}s=3
return A.a(p.eh("POST",a2,B.e.a4(A.m(["requests",a3],m,t.ew),null)),$async$eM)
case 3:i=a6
a3=i.a
if(a3===403)throw A.b(A.D4(p.e3(i)))
if(a3===400)throw A.b(new A.dw(p.e3(i)))
p.cC(i,A.l([200],t.t),a2)
h=B.e.aE(i.c,null)
a3=t.j
if(a3.b(h))g=h
else{n=t.f
if(n.b(h)){f=h.h(0,"data")
e=n.b(f)?f.h(0,"results"):h.h(0,"results")
if(!a3.b(e))throw A.b(A.be("Batch response has no results array."))}else throw A.b(A.be("Batch response is not a list or envelope."))
g=e}a3=J.J(g)
if(a3.gl(g)!==o.gl(a4))throw A.b(A.be("Batch response has "+a3.gl(g)+" results for "+o.gl(a4)+" requests."))
d=A.l([],t.g2)
for(n=t.f,c=0;c<o.gl(a4);++c){b=a3.h(g,c)
if(!n.b(b))throw A.b(A.be("Batch response entry "+c+" is not a JSON object."))
m=o.h(a4,c)
a=b.h(0,"status")
l=J.dr(a)
a0=l.X(a,200)||l.X(a,201)
a1=b.h(0,"body")
l=a0&&n.b(a1)?p.di(a1):null
k=a0?null:p.oz(b)
j=a0&&n.b(a1)?B.e.a4(a1.h(0,"data"),null):null
d.push(new A.hG(m.a,a0,l,k,j))}q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eM,r)},
hL(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$hL=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eh("POST",p.b.bg("/api/batch"),B.e.a4(A.m(["requests",[]],t.N,t.W),null)),$async$hL)
case 3:o=b
n=o.a
if(n===403){q=!1
s=1
break}if(n===401)throw A.b(A.CD(p.e3(o)))
if(n===408||n===429||n>=500)throw A.b(A.zG("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hL,r)},
eh(a,b,c){return this.bP(new A.qh(this,a,b,c),new A.qi(),t.w)},
ll(a,b){return this.eh(a,b,null)},
rK(a){return this.bP(new A.qj(this,a),new A.qk(),t.w)},
r0(a){return this.bP(new A.qf(this,a),new A.qg(),t.lI)},
bP(a,b,c){return this.t4(a,b,c,c)},
t4(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$bP=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
i=n.c
s=7
return A.a(i.cZ(),$async$bP)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$bP)
case 8:l=f
s=J.u(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(i.hP(),$async$bP)
case 11:k=f
s=12
return A.a(a.$1(k.a),$async$bP)
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
if(i instanceof A.cV){j=i
throw A.b(A.zG(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bP,r)},
j_(a,b,c,d){return this.rI(a,b,c,d)},
rI(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$j_=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.E(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.aV(new A.dJ(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j_,r)},
cC(a,b,c){if(B.b.D(b,a.a))return
throw A.b(this.qD(a,c))},
qD(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.e3(a)
if(401===s)return new A.bH(q)
if(403===s)return new A.cf(q)
if(404===s)return new A.ci(q)
if(408===s||429===s)return new A.dV(r,q)
if(400===s)return new A.eI(q)
if(s>=500)return new A.hL(q)
return new A.eJ("Unexpected status "+s+" for "+b.m(0)+": "+q)},
e3(a){var s,r,q,p,o
try{s=this.cB(a)
r=J.U(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.U(s,"data")
if(t.f.b(q)){p=q
p=p.gW(p)}else p=!1
if(p){p=B.e.a4(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.q(p,0,500)},
cB(a){var s,r,q,p=null
try{p=B.e.aE(a.c,null)}catch(r){q=A.M(r)
if(t.Y.b(q)){s=q
throw A.b(A.be("Response is not valid JSON: "+s.gjz()))}else throw r}if(t.f.b(p))return A.ba(p,t.N,t.X)
throw A.b(A.be("Expected a JSON object, got "+J.cP(p).m(0)+"."))},
di(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.be("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"store")
q=a.h(0,"updated")
if(typeof s!="string"||typeof q!="string")throw A.b(A.be("Record missing id/updated."))
p=typeof r=="string"?r:""
o=a.h(0,"data")
n=t.N
m=t.X
l=j.b(o)?A.ba(o,n,m):A.E(n,m)
k=a.h(0,"imgs")
if(t.j.b(k)){j=J.yP(k,n)
j=A.P(j,j.$ti.i("n.E"))}else j=B.o
return new A.ck(s,p,q,l,j)},
oz(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.r(r)+")"}}
A.ql.prototype={
$1(a){return this.a.di(a)},
$S:75}
A.qh.prototype={
$1(a){var s=this
return s.a.j_(s.b,s.c,s.d,a)},
$S:55}
A.qi.prototype={
$1(a){return a.a},
$S:41}
A.qj.prototype={
$1(a){var s=this.b,r=t.N
r=A.ez(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.d4(new A.jF(s.a,s.b,r,s.d,s.e))},
$S:55}
A.qk.prototype={
$1(a){return a.a},
$S:41}
A.qf.prototype={
$1(a){var s=this.b,r=t.N
r=A.ez(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.dM(new A.dJ(s.a,s.b,r,s.d))},
$S:78}
A.qg.prototype={
$1(a){return a.a},
$S:79}
A.hA.prototype={}
A.fm.prototype={}
A.qm.prototype={
av(){var s=0,r=A.h(t.H),q,p=this
var $async$av=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.f){s=1
break}p.f=!0
p.eg()
case 1:return A.e(q,r)}})
return A.f($async$av,r)},
aA(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.f=!1
n=q.r
n=n==null?null:n.A()
s=2
return A.a(n instanceof A.p?n:A.bk(n,t.H),$async$aA)
case 2:q.r=null
p=q.w
if(p!=null?(p.a.a&30)===0:o)p.ar()
return A.e(null,r)}})
return A.f($async$aA,r)},
eg(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$eg=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n=o.c,m=t.H
case 2:if(!o.f){s=3
break}q=5
s=8
return A.a(o.cz(),$async$eg)
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
return A.a(A.D8(n,m),$async$eg)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eg,r)},
cz(){return this.ol()},
ol(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cz=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
n=p.a
s=3
return A.a(n.c.cZ(),$async$cz)
case 3:m=b
l=t.N
s=4
return A.a(n.a.dM(new A.dJ("GET",n.b.bg("/api/realtime"),A.m(["Authorization","Bearer "+m.a],l,l),null)),$async$cz)
case 4:k=b
n=k.a
if(n!==200)throw A.b(A.jG("realtime connect status "+n,null))
s=!p.f?5:6
break
case 5:s=7
return A.a(k.c.aQ(new A.qr()).A(),$async$cz)
case 7:s=1
break
case 6:++p.y
p.w=new A.az(new A.p($.t,t.D),t.h)
n=$.mz()
l=A.l([],t.s)
o.a=!1
p.r=k.c.by(new A.qs(o,p,new A.vE(new A.uv(n),l),m),new A.qt(p),new A.qu(p))
s=8
return A.a(p.w.a,$async$cz)
case 8:p.r=null
case 1:return A.e(q,r)}})
return A.f($async$cz,r)},
fz(a,b){return this.pv(a,b)},
pv(a0,a1){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$fz=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a=a0.a
s=a!=null?3:4
break
case 3:l=p.a
k=t.N
s=5
return A.a(l.a.aV(new A.dJ("POST",l.b.bg("/api/realtime"),A.m(["Authorization","Bearer "+a1.a,"Content-Type","application/json"],k,k),B.e.a4(A.m(["clientId",a,"subscriptions",p.b],k,t.K),null))),$async$fz)
case 5:l=a4.a
if(l!==204&&l!==200)throw A.b(A.jG("realtime subscribe status "+l,null))
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
l=l.b(j)?A.ba(j,t.N,t.X):B.q
if(t.j.b(f)){c=J.yP(f,t.N)
c=A.P(c,c.$ti.i("n.E"))}else c=B.o
m=new A.ck(k,e,d,l,c)
p.e.$1(new A.hA(o,m))}catch(a2){}case 1:return A.e(q,r)}})
return A.f($async$fz,r)}}
A.qr.prototype={
$1(a){},
$S:23}
A.qs.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.c.uA(a)
for(s=j.length,r=k.b,q=k.d,p=t.H,o=k.a,n=t.P,m=0;m<j.length;j.length===s||(0,A.A)(j),++m){l=j[m]
r.x=r.x.aK(new A.qn(r,l,q),p).hc(new A.qo()).aK(new A.qp(o,r,l),n).hc(new A.qq())}},
$S:23}
A.qn.prototype={
$1(a){return this.a.fz(this.b,this.c)},
$S:24}
A.qo.prototype={
$1(a){},
$S:27}
A.qp.prototype={
$1(a){var s=this.a
if(!s.a&&this.c.a!=null){s.a=!0
this.b.d.$0()}},
$S:80}
A.qq.prototype={
$1(a){},
$S:27}
A.qt.prototype={
$0(){var s=this.a.w
if((s.a.a&30)===0)s.ar()},
$S:0}
A.qu.prototype={
$1(a){var s=this.a.w
if((s.a.a&30)===0)s.ar()},
$S:27}
A.vE.prototype={
uA(a){var s,r,q,p,o,n,m,l=this.a
l.t(0,a)
s=l.jO()
r=A.l([],t.bi)
for(q=s.length,p=0;;){o=this.qw(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.cs(p,o,q)))
p=o+1
m=this.or(B.a.wi(new A.cN(!0).cA(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.t(0,B.d.aX(s,p))
return r},
qw(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
oJ(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.b.ai(k)
return l}s=m.b
r=B.b.L(k,"\n")
m.b=null
B.b.ai(k)
try{q=B.e.aE(r,l)
if(t.f.b(q)){p=A.ba(q,t.N,t.X)
o=J.U(p,"clientId")
if(J.u(s,"PB_CONNECT")&&typeof o=="string")return new A.fm(o,l)
return new A.fm(l,p)}}catch(n){}return l},
or(a){var s,r=this,q=null
if(a.length===0)return r.oJ()
if(B.a.O(a,"PB_CONNECT:")){r.b=null
B.b.ai(r.c)
return new A.fm(B.a.d_(B.a.ac(a,11)),q)}if(B.a.O(a,":"))return q
if(B.a.O(a,"event:")){r.b=B.a.d_(B.a.ac(a,6))
return q}if(B.a.O(a,"data:")){s=B.a.d_(B.a.ac(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.dJ.prototype={}
A.cU.prototype={
nt(){return this.d.$0()},
gl(a){return this.c}}
A.jF.prototype={}
A.cg.prototype={}
A.cV.prototype={
m(a){return"HttpTransportException: "+this.a},
$iL:1}
A.d8.prototype={}
A.qc.prototype={
aV(a){return this.ni(a)},
ni(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$aV=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.dM(a),$async$aV)
case 7:m=c
j=m.c
s=8
return A.a(B.am.kg(j).dH(0).hR(B.X),$async$aV)
case 8:l=c
j=m.a
i=m.b
q=new A.cg(j,i,l)
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.M(g)
if(j instanceof A.cV)throw g
else{k=j
j=A.jG("HTTP "+a.a+" "+a.b.m(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aV,r)},
d4(a){return this.nj(a)},
nj(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$d4=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.Dx(a6.a,a6.b)
h.r.E(0,a6.c)
h.x.E(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.nt(),$async$d4)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.BF(a0)
a3=new A.eB("application".toLowerCase(),"octet-stream".toLowerCase(),new A.f_(A.E(d,d),e))
b.push(new A.k3(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.A)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.aV(m).hR(B.X),$async$d4)
case 11:k=a8
g=k.w
s=12
return A.a(B.am.kg(g).dH(0).hR(B.X),$async$d4)
case 12:j=a8
g=k.b
f=k.e
q=new A.cg(g,f,j)
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
g=A.M(a5)
if(g instanceof A.cV)throw a5
else{i=g
g=A.jG("HTTP multipart "+a6.a+" "+a6.b.m(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d4,r)},
dM(a){return this.vF(a)},
vF(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$dM=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.DN(a,a0)
a1.r.E(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gjl().jj(j)
i.ob()
i.y=A.HD(j)
h=i.gc6()
if(h==null){j=t.N
i.sc6(A.xL("text","plain",A.m(["charset",i.gjl().gb2()],j,j)))}else{j=i.gc6()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.cg(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.H("charset")){j=t.N
f=A.m(["charset",i.gjl().gb2()],j,j)
e=h.a
d=h.b
c=A.ba(h.c,j,j)
c.E(0,f)
i.sc6(A.xL(e,d,c))}}}p=4
s=7
return A.a(n.a.aV(a1).hR(B.X),$async$dM)
case 7:m=a5
j=t.N
l=A.E(j,j)
m.e.ad(0,new A.qd(l))
j=m.b
i=m.w
q=new A.d8(j,l,i)
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
j=A.M(a2)
if(j instanceof A.cV)throw a2
else{k=j
a=A.jG("HTTP "+a+" "+a0.m(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dM,r)}}
A.qd.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:33}
A.mD.prototype={
aT(a,b){var s=this.a.aK(new A.mE(a,b),b)
this.a=s.bE(new A.mF(b),new A.mG(),t.H)
return s}}
A.mE.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("z<0>(~)")}}
A.mF.prototype={
$1(a){},
$S(){return this.a.i("Q(0)")}}
A.mG.prototype={
$2(a,b){},
$S:9}
A.bm.prototype={
gml(){var s=this.e
return s.gl(s)===1&&J.u(s.h(0,"__lp_deleted__"),!0)}}
A.ns.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.I(d)
s=e.h(0,"record_id")
s.toString
A.I(s)
r=A.wF(e.h(0,l),l,k)
q=A.wF(e.h(0,j),j,k)
p=A.wF(e.h(0,i),i,k)
o=A.Bh(e.h(0,h),h,k)
n=A.Bh(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.ah(m)
return new A.bm(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.wF(e.h(0,f),f,k):null)},
$S:81}
A.nt.prototype={
eD(a){return this.vk(a)},
vk(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m
var $async$eD=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
m=J
s=3
return A.a(p.a.b.vP("lp_conflicts","detected_at ASC",n,o),$async$eD)
case 3:o=m.aG(c,A.GL(),t.n8)
o=A.P(o,o.$ti.i("R.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eD,r)},
d3(a,b){return this.na(a,b)},
na(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$d3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.aM("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$d3)
case 3:o=d
n=J.J(o)
if(n.gB(o)){q=null
s=1
break}q=A.xt(n.gC(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d3,r)},
wt(a){var s={},r=A.ya()
s.a=null
r.sm_(A.dY(new A.nw(s,r),new A.nx(s,this,a,new A.ny(this,r,a)),t.ba))
return r.ba().gcv()},
dP(a,b,c){return this.w7(a,b,c)},
w7(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dP=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.aa(c)
s=2
return A.a(p.V(new A.nu(q,c,a,o.a,o,b),t.P),$async$dP)
case 2:return A.e(null,r)}})
return A.f($async$dP,r)},
el(a,b){return this.td(a,b)},
td(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$el=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.d3(a,b),$async$el)
case 2:p=d
if(p==null)throw A.b(A.w("No conflict found for "+a+"/"+b))
s=3
return A.a(q.dP(b,p.d,a),$async$el)
case 3:return A.e(null,r)}})
return A.f($async$el,r)},
dt(a,b){return this.te(a,b)},
te(a,b){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$dt=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.d3(a,b),$async$dt)
case 3:n=d
if(n==null)throw A.b(A.w("No conflict found for "+a+"/"+b))
s=n.gml()?4:5
break
case 4:o=p.a
if(A.kP(o)!=null)A.x(A.w(u.L))
s=6
return A.a(new A.dB(o,o.aa(a),null,null).jI(b),$async$dt)
case 6:s=1
break
case 5:s=7
return A.a(p.dP(b,n.e,a),$async$dt)
case 7:case 1:return A.e(q,r)}})
return A.f($async$dt,r)}}
A.ny.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.ba().ghA()){s=1
break}p=4
s=7
return A.a(n.a.eD(n.c),$async$$0)
case 7:m=b
if(!i.ba().ghA())J.bV(i.ba(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.M(h)
k=A.aa(h)
if(!i.ba().ghA())i.ba().bw(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.nx.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b.a.a$.a
o=q.d
q.a.a=new A.aY(p,A.o(p).i("aY<1>")).aQ(new A.nv(q.c,o))
s=2
return A.a(o.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.nv.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:32}
A.nw.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.a
p=p==null?null:p.A()
s=2
return A.a(p instanceof A.p?p:A.bk(p,t.H),$async$$0)
case 2:s=3
return A.a(q.b.ba().p(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.nu.prototype={
$1(a){return this.mC(a)},
mC(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aM("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.J(a3)
if(a4.gB(a3))throw A.b(A.w("No conflict found for "+a1+"/"+a2))
o=A.xt(a4.gC(a3))
n=o.gml()
m=n?null:A.aj(o.e)
l=n?"":A.aB(B.l.v(B.i.v(A.aj(A.b_(p.d,o.e)))).a)
a4=p.e.a.a
a5=J
s=6
return A.a(a0.aM(a4,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.cc(a8)?4:5
break
case 4:s=7
return A.a(a0.a2("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.a2("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.a2("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.Y(new A.a_(a1,A.af([a2],a4)))
a6.Y(new A.a_("lp_conflicts",A.af([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aM("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 10:k=a8
j=null
if(!n){i=J.J(k)
if(i.gW(k)){h=A.ai(J.U(i.gC(k),"base_updated"))
i=h==null?A.ai(J.U(i.gC(k),"remote_updated")):h
j=i}}s=11
return A.a(a0.a2("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 11:i=t.N
h=t.X
g=A.ez(p.f,i,h)
g.j(0,"id",a2)
f=J.u(g.h(0,"archived"),!0)
e=p.d
s=12
return A.a(a0.G(a4,A.dq(e,f,null,null,a2,g),"id = ?",[a2]),$async$$1)
case 12:a4=A.bs(n?B.q:o.e,g)
d=A.P(a4,A.o(a4).c)
B.b.aW(d)
c=A.aj(A.b_(e,g))
s=13
return A.a(a0.G("lp_sync_row",A.m(["sync_state","dirty","base_json",m,"base_hash",l,"base_updated",j,"dirty_fields",B.e.a4(d,null)],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 13:a5=J
s=17
return A.a(a0.aM("lp_outbox",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 17:s=a5.cc(a8)?14:16
break
case 14:a4=p.a.a
b=a4.Q.$0()
h=f?B.F:B.r
e=B.e.a4(d,null)
a4=a4.as
a4===$&&A.v()
s=18
return A.a(a0.az(0,"lp_outbox",A.GF(l,j,b,e,h,a4.k5(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.G("lp_outbox",A.m(["kind",f?"archive":"upsert","payload_json",c,"base_updated",j,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.Y(new A.a_(a1,A.af([a2],i)))
a6.Y(new A.a_("lp_conflicts",A.af([a2],i)))
a4=o.d
a=A.bs(a4,g)
a.F(0,"id")
a6.bl(new A.aN(a1,a2,B.V,B.u,a4,g,a))
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.kK.prototype={
av(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$av=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.dY(null,null,t.n6)
n.ay=A.dY(null,null,t.em)}n.z=!0
s=3
return A.a(n.aI(B.cA),$async$av)
case 3:p=5
l=n.b
s=8
return A.a(l.hJ(),$async$av)
case 8:if(!(n.z&&m===n.db)){s=1
break}k=n.w
k===$&&A.v()
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
n.fr=new A.aY(l,A.o(l).i("aY<1>")).aQ(n.guW())
l=n.b.ay
n.fx=new A.aY(l,A.o(l).i("aY<1>")).aQ(n.guU())
p=2
s=12
break
case 10:p=9
h=o.pop()
s=13
return A.a(n.aA(),$async$av)
case 13:throw h
s=12
break
case 9:s=2
break
case 12:n.fy=A.E2(B.bq,new A.rE(n))
s=14
return A.a(n.aI(n.dc()),$async$av)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.p1.push("cycle")
s=17
return A.a(n.cG(),$async$av)
case 17:case 16:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$av,r)},
aA(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$aA=A.c(function(a,b){if(a===1)return A.d(b,r)
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
return A.a(p.k4,$async$aA)
case 3:s=4
return A.a(p.dx,$async$aA)
case 4:s=5
return A.a(p.dy.a,$async$aA)
case 5:s=6
return A.a(p.p2,$async$aA)
case 6:o=p.fr
o=o==null?null:o.A()
n=t.H
s=7
return A.a(o instanceof A.p?o:A.bk(o,n),$async$aA)
case 7:o=p.fx
o=o==null?null:o.A()
s=8
return A.a(o instanceof A.p?o:A.bk(o,n),$async$aA)
case 8:o=p.ax
s=(o.c&4)===0?9:11
break
case 9:p.y=B.O
o.t(0,B.O)
s=12
return A.a(p.ax.p(),$async$aA)
case 12:s=10
break
case 11:p.y=B.O
case 10:o=p.ay
s=(o.c&4)===0?13:14
break
case 13:s=15
return A.a(o.p(),$async$aA)
case 15:case 14:p.y=B.O
case 1:return A.e(q,r)}})
return A.f($async$aA,r)},
dc(){if(this.at)return B.aW
if(this.Q)return B.aU
if(this.as)return B.ad
return B.aV},
aI(a){return this.rW(a)},
rW(a){var s=0,r=A.h(t.H),q,p=this,o
var $async$aI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!p.z){p.y=a
s=1
break}p.y=a
o=p.ax
if((o.c&4)===0)o.t(0,a)
s=3
return A.a(p.ox(),$async$aI)
case 3:case 1:return A.e(q,r)}})
return A.f($async$aI,r)},
ox(){return this.p2=this.p2.aK(new A.rw(this),t.H)},
fe(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$fe=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=n.z
if(!g){s=1
break}m=0
l=0
k=0
j=0
p=4
g=n.e
g===$&&A.v()
s=7
return A.a(g.hd(),$async$fe)
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
if((g.c&4)===0)g.t(0,new A.eV(n.y,m,l,k,j,n.ch,n.CW,n.cx))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fe,r)},
uX(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.p1.push("push")
s.rG(B.Y)},
uV(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.ch.H(s))return
r=a.c
if(r!=null&&a.b===B.S){q.p1.push("fast:"+s)
q.dx=q.dx.aK(new A.rC(q,r),t.H)
return}q.p1.push("pull:"+s)
q.h_(B.Y,A.l([s],t.s))},
fi(a){return this.oF(a)},
oF(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$fi=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.h_(B.Y,A.l([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.v()
s=7
return A.a(l.hk(a),$async$fi)
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
break}if(!m)n.h_(B.Y,A.l([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fi,r)},
v4(){if(!this.z)return
this.p1.push("cycle")
this.cG()},
h_(a,b){var s=this,r=s.go
if(r!=null)r.A()
if(b==null)s.k2=!0
else s.k3.E(0,b)
s.go=A.co(a,new A.rB(s))},
rG(a){return this.h_(a,null)},
rF(a){var s=this.id
if(s!=null)s.A()
this.id=A.co(B.x,new A.rA(this,a))},
iQ(){this.as=!0
this.aI(B.ad)
A.h6(this.d,t.H)},
dJ(){var s=0,r=A.h(t.H),q,p=this,o
var $async$dJ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.as
o===$&&A.v()
s=3
return A.a(o.w5(),$async$dJ)
case 3:s=4
return A.a(p.aI(p.dc()),$async$dJ)
case 4:p.p1.push("cycle")
s=5
return A.a(p.cG(),$async$dJ)
case 5:case 1:return A.e(q,r)}})
return A.f($async$dJ,r)},
f7(a){return this.nl(a)},
nl(a){var s=0,r=A.h(t.H),q=this,p
var $async$f7=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.A()
q.k1=A.co(B.ay,new A.rD(q))
s=3
break
case 4:s=5
return A.a(q.aI(B.aU),$async$f7)
case 5:case 3:return A.e(null,r)}})
return A.f($async$f7,r)},
be(){var s=0,r=A.h(t.H),q=this
var $async$be=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
s=2
return A.a(q.aI(B.aW),$async$be)
case 2:return A.e(null,r)}})
return A.f($async$be,r)},
b3(){var s=0,r=A.h(t.H),q,p=this
var $async$b3=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
s=3
return A.a(p.aI(p.dc()),$async$b3)
case 3:p.p1.push("cycle")
s=4
return A.a(p.cG(),$async$b3)
case 4:case 1:return A.e(q,r)}})
return A.f($async$b3,r)},
iY(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.A()}s=t.mv
r=q.k4.aK(new A.rx(q,a),s)
q.k4=r.bE(new A.ry(),new A.rz(),s)
return r},
cG(){return this.iY(null)},
aZ(a){return this.ou(a)},
ou(b8){var s=0,r=A.h(t.mv),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$aZ=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.G
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aI(n.dc()),$async$aZ)
case 5:q=B.G
s=1
break
case 4:b3=t.N
a4=t.S
m=A.E(b3,a4)
l=A.E(b3,a4)
k=!1
j=!1
i=A.l([],t.s)
s=6
return A.a(n.aI(B.cB),$async$aZ)
case 6:b3=b8==null
if(b3){a4=n.a.ch
a5=A.o(a4).i("Z<1>")
a6=A.P(new A.Z(a4,a5),a5.i("n.E"))}else a6=b8
a4=a6.length,a7=0
case 7:if(!(a7<a6.length)){s=9
break}h=a6[a7]
p=11
a5=n.f
a5===$&&A.v()
s=14
return A.a(a5.cU(h),$async$aZ)
case 14:g=c0
J.bU(m,h,g.b)
if(g.f&&g.b>0)J.bV(i,h)
p=2
s=13
break
case 11:p=10
b4=o.pop()
a5=A.M(b4)
if(a5 instanceof A.bH){n.iQ()
s=9
break}else if(a5 instanceof A.bh){f=a5
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
return A.a(n.aI(B.ad),$async$aZ)
case 17:q=n.ok=new A.b4(m,B.a1,0,0,0,0,!0)
s=1
break
case 16:s=b3?18:19
break
case 18:p=21
e=n.cy
n.cy=!1
b3=n.r
b3===$&&A.v()
s=24
return A.a(b3.d8(e),$async$aZ)
case 24:d=c0
for(b3=J.K(d);b3.k();){c=b3.gn()
a4=c.a
a5=J.U(l,c.a)
if(a5==null)a5=0
J.bU(l,a4,a5+c.b)}p=2
s=23
break
case 21:p=20
b5=o.pop()
b3=A.M(b5)
if(b3 instanceof A.bh){b=b3
k=!0
n.ch=b.a}else throw b5
s=23
break
case 20:s=2
break
case 23:case 19:s=25
return A.a(n.aI(B.cC),$async$aZ)
case 25:a=B.M
s=j?26:28
break
case 26:if(n.ch==null)n.ch="pull failed; push deferred"
s=27
break
case 28:p=30
b3=n.w
b3===$&&A.v()
s=33
return A.a(b3.eN(),$async$aZ)
case 33:a=c0
s=a.f&&n.ch==null?34:35
break
case 34:s=36
return A.a(n.a.b.aR("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$aZ)
case 36:a0=c0
if(J.iY(a0)&&typeof J.U(J.bW(a0),"last_error")=="string"){b3=J.U(J.bW(a0),"last_error")
b3.toString
n.ch=A.I(b3)}else n.ch="push failed"
case 35:p=2
s=32
break
case 30:p=29
b6=o.pop()
b3=A.M(b6)
if(b3 instanceof A.bH)n.iQ()
else if(b3 instanceof A.bh){a1=b3
k=!0
n.ch=a1.a}else throw b6
s=32
break
case 29:s=2
break
case 32:case 27:p=38
b3=n.x
b3===$&&A.v()
s=41
return A.a(b3.bi(),$async$aZ)
case 41:a2=c0
k=k||a2.d
if(a2.d&&n.ch==null)n.ch="file sync failed"
p=2
s=40
break
case 38:p=37
b7=o.pop()
a3=A.M(b7)
k=!0
n.ch=A.r(a3)
s=40
break
case 37:s=2
break
case 40:if(!(n.z&&b2===n.db)){q=B.G
s=1
break}if(J.aw(i)!==0)n.rF(i)
a9=k||a.f
b0=new A.b1(A.oc(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.dc()
s=42
return A.a(n.aI(a9&&b1===B.aV?B.cD:b1),$async$aZ)
case 42:q=n.ok=new A.b4(m,l,a.a,a.b,a.d,a.e,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aZ,r)}}
A.rE.prototype={
$1(a){return this.a.v4()},
$S:83}
A.rw.prototype={
$1(a){return this.a.fe()},
$S:24}
A.rC.prototype={
$1(a){return this.a.fi(this.b)},
$S:24}
A.rB.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.P(q,A.o(q).c)
s.k2=!1
q.ai(0)
if(r||p.length===0)s.cG()
else s.iY(p)},
$S:0}
A.rA.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.iY(this.b)},
$S:0}
A.rD.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aI(p.dc()),$async$$0)
case 2:p.p1.push("cycle")
s=3
return A.a(p.cG(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.rx.prototype={
$1(a){return this.a.aZ(this.b)},
$S:84}
A.ry.prototype={
$1(a){return B.G},
$S:85}
A.rz.prototype={
$1(a){return B.G},
$S:86}
A.hl.prototype={
m(a){return"MapFailure: "+this.a},
$iL:1}
A.dS.prototype={}
A.wA.prototype={
$1(a){return typeof a=="string"},
$S:13}
A.wB.prototype={
$1(a){return typeof a=="string"},
$S:13}
A.pH.prototype={}
A.d1.prototype={}
A.k0.prototype={}
A.vs.prototype={}
A.vq.prototype={}
A.tM.prototype={}
A.pO.prototype={
$1(a){var s=this,r=s.a
r.j(0,s.b,a)
return A.pN(s.z,s.e,s.Q,s.as,s.d+1,s.c,s.f,r,s.w,s.y,s.r,s.at,s.x)},
$S:88}
A.pI.prototype={
$1(a){return typeof a=="string"},
$S:13}
A.pJ.prototype={
$1(a){return typeof a=="string"},
$S:13}
A.pK.prototype={
$1(a){return typeof a=="string"},
$S:13}
A.pL.prototype={
$1(a){return a instanceof A.p?a:A.c_(a,t.X)},
$S:89}
A.pM.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,s=A.fg(s,s.r,A.o(s).c),r=this.b,q=J.J(a),p=s.$ti.c,o=0;s.k();o=m){n=s.d
if(n==null)n=p.a(n)
m=o+1
r.j(0,n,q.h(a,o))}return r},
$S:90}
A.q_.prototype={
er(a){return this.uj(a)},
uj(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$er=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.Q.$0()
e=e.b
s=3
return A.a(e.vQ("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$er)
case 3:o=c
n=t.ox
m=A.l([],n)
for(l=J.K(o);l.k();)m.push(A.DC(l.gn()))
l=A.aU(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.A)(m),++j){i=m[j].z
if(i!=null)l.t(0,i)}s=4
return A.a(A.iT(e,l),$async$er)
case 4:h=c
g=A.l([],n)
for(e=m.length,j=0;j<m.length;m.length===e||(0,A.A)(m),++j){f=m[j]
if(g.length>=a)break
n=f.z
if(n!=null&&h.D(0,n))continue
g.push(f)}q=g
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$er,r)},
md(a){return this.a.V(new A.q1(a),t.H)},
vt(a,b,c,d){return this.a.V(new A.q2(c,d,b,a),t.H)}}
A.q1.prototype={
$1(a){return this.mO(a)},
mO(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.G("lp_op_queue",A.m(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.q2.prototype={
$1(a){return this.mP(a)},
mP(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.G("lp_op_queue",A.m(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.mR.prototype={}
A.hj.prototype={}
A.hH.prototype={}
A.q4.prototype={
k5(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.cp(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
dO(a,b,c){return this.vW(a,b,c)},
vW(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$dO=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aM("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$dO)
case 3:p=e
o=J.J(p)
q=o.gB(p)?null:A.q5(o.gC(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dO,r)},
bC(a,b,c){return this.vY(a,b,c)},
vY(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bC=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aM("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bC)
case 3:p=e
o=J.J(p)
q=o.gB(p)?null:A.kL(o.gC(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bC,r)},
bc(a,b,c,d,e,f,g,h,i,j,k,l){return this.tp(a,b,c,d,e,f,g,h,i,j,k,l)},
tp(a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$bc=A.c(function(b8,b9){if(b8===1)return A.d(b9,r)
for(;;)switch(s){case 0:a2=b7.a
a3=a2.a
a4=b6==null
a5=!a4
if(a5&&b6.w===B.P)throw A.b(A.z0("Record "+a3+"/"+b0+u.W))
o=a5&&b6.w===B.a6
a5=b3==null
n=a5?null:b3.c
m=!1
if(a5){A:{if(B.z===a6){l=a7==null?B.r:B.F
break A}if(B.E===a6){l=a7==null?B.r:B.L
break A}l=B.r
break A}n=l}else{l=b3.e
switch(b3.c.a){case 0:if(l==null){m=a6===B.z&&!a2.r
n=m?n:B.r}else{B:{if(B.z===a6){l=B.F
break B}if(B.E===a6){l=B.L
break B}l=B.r
break B}n=l}break
case 1:C:{if(B.E===a6){l=B.L
break C}l=B.F
break C}n=l
break
case 2:D:{if(B.z===a6){l=B.F
break D}if(B.E===a6){l=B.L
break D}l=B.r
break D}n=l
break}}s=m?3:4
break
case 3:s=5
return A.a(a9.a2("lp_outbox","store = ? AND record_id = ?",[a3,b0]),$async$bc)
case 5:s=6
return A.a(a9.a2("lp_sync_row","store = ? AND record_id = ?",[a3,b0]),$async$bc)
case 6:s=7
return A.a(p.h0(a9,a3,b0),$async$bc)
case 7:s=8
return A.a(a9.a2(a3,"id = ?",[b0]),$async$bc)
case 8:q=B.bf
s=1
break
case 4:k=p.a.Q.$0()
j=a5?null:b3.w
if(j==null)j=p.k5()
i=a5?null:b3.e
if(i==null)i=a7==null?null:a7.c
l=a5?null:b3.f
if(l==null){l=a7==null?null:a7.b
h=l}else h=l
if(h==null)h=""
g=a4?null:b6.r
if(g==null)g=a7==null?null:a7.a
l=t.N
f=A.aU(l)
e=a5?null:b3.r
if(e!=null)f.E(0,e)
f.E(0,a8)
d=A.P(f,f.$ti.c)
B.b.aW(d)
c=a5?null:b3.x
if(c==null)c=k
b=B.e.a4(d,null)
a=a4?null:b6.y
if(a==null)a=0
s=a5?9:11
break
case 9:f=A.Bz(B.aH)
e=B.b.L(A.aE(11,"?",!1,l),", ")
n.toString
s=12
return A.a(a9.aw("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.Bt(h,i,c,null,b,n,j,b4,b0,a3,k)),$async$bc)
case 12:s=10
break
case 11:s=13
return A.a(a9.aw('UPDATE lp_outbox SET "kind" = ?, "payload_json" = ?, "dirty_fields" = ?, "updated_at" = ? WHERE "store" = ? AND "record_id" = ?',[n.b,b4,b,k,a3,b0]),$async$bc)
case 13:case 10:f=A.l(["sync_state","dirty_fields","local_rev","op_id","schema_ver"],t.s)
if(a5)B.b.E(f,B.bZ)
if(o)B.b.E(f,B.bO)
s=a4?14:16
break
case 14:a4=A.Bz(B.bS)
l=B.b.L(A.aE(16,"?",!1,l),", ")
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
return A.a(a9.aw("INSERT INTO lp_sync_row ("+a4+") VALUES ("+l+")",a0),$async$bc)
case 17:s=15
break
case 16:for(a4=f.length,a1=0,l="UPDATE lp_sync_row SET ";a1<a4;++a1){if(a1>0)l+=", "
l+='"'+f[a1]+'" = ?'}a4=l+' WHERE "store" = ? AND "record_id" = ?'
a2=["dirty",b,a+1,j,a2.b]
if(a5)B.b.E(a2,[i,h,g])
if(o)B.b.E(a2,[0,0,null])
a2.push(a3)
a2.push(b0)
s=18
return A.a(a9.aw(a4.charCodeAt(0)==0?a4:a4,a2),$async$bc)
case 18:case 15:q=new A.hj()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bc,r)},
h0(a,b,c){return this.t1(a,b,c)},
t1(a,b,c){var s=0,r=A.h(t.H)
var $async$h0=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.cb(a,b,c,!1),$async$h0)
case 2:return A.e(null,r)}})
return A.f($async$h0,r)},
es(a,b){return this.uk(a,b)},
uk(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$es=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.b
f=new A.ab("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").m(0)
e=A.P([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ae("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$es)
case 3:o=d
f=J.J(o)
if(f.gB(o)){q=B.c2
s=1
break}e=t.my
n=A.l([],e)
for(f=f.gu(o);f.k();)n.push(A.q5(f.gn()))
f=A.aU(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.A)(n),++l){k=n[l].z
if(k!=null)f.t(0,k)}s=4
return A.a(A.iT(g,f),$async$es)
case 4:j=d
i=A.l([],e)
for(g=n.length,l=0;l<n.length;n.length===g||(0,A.A)(n),++l){h=n[l]
if(i.length>=a)break
f=h.z
if(f!=null&&j.D(0,f))continue
i.push(h)}q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$es,r)},
k9(a){if(a.length===0)return A.c_(null,t.H)
return this.a.V(new A.qb(this,a),t.H)},
aC(a,b){return this.rO(a,b)},
rO(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aC=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:b=a6.b
a=a7.a
a0=a.a
a1=a.b
a2=p.a
a3=a2.aa(a0).a
a4=a2.Q.$0()
a5=a7.e
s=a5!=null?3:4
break
case 3:s=5
return A.a(b.aM("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$aC)
case 5:o=a9
n=J.J(o)
s=!(n.gW(o)&&!J.u(J.U(n.gC(o),"payload_json"),a.d))?6:7
break
case 6:a=a3.a
s=8
return A.a(b.aM(a,1,"id = ?",[a1]),$async$aC)
case 8:m=a9
n=J.J(m)
l=n.gW(m)?A.ca(a3,n.gC(m),a2.y,a2.z):null
s=9
return A.a(b.G(a,A.dq(a3,J.u(a5.h(0,"archived"),!0),a2.y,a2.z,a1,a5),"id = ?",[a1]),$async$aC)
case 9:a6.Y(new A.a_(a0,A.af([a1],t.N)))
k=A.bs(l==null?B.q:l,a5)
k.F(0,"id")
a6.bl(new A.aN(a0,a1,B.V,B.u,l,a5,k))
case 7:case 4:a=a3.a
s=10
return A.a(b.aM(a,1,"id = ?",[a1]),$async$aC)
case 10:j=a9
a5=J.J(j)
s=a5.gB(j)?11:12
break
case 11:s=13
return A.a(b.a2("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aC)
case 13:s=14
return A.a(p.cF(b,a0,a1,a7.c,a4),$async$aC)
case 14:a6.Y(new A.a_(a0,A.af([a1],t.N)))
s=1
break
case 12:n=a2.y
a2=a2.z
i=A.ca(a3,a5.gC(j),n,a2)
h=A.aB(B.l.v(B.i.v(A.aj(A.b_(a3,i)))).a)
a5=a7.b
g=A.aB(B.l.v(B.i.v(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.a2("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aC)
case 18:s=19
return A.a(p.cF(b,a0,a1,a7.c,a4),$async$aC)
case 19:a6.Y(new A.a_(a0,A.af([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.e.aE(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.ba(d,a5,f):A.E(a5,f)
s=23
return A.a(b.G(a,A.dq(a3,J.u(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$aC)
case 23:s=24
return A.a(b.a2("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aC)
case 24:s=25
return A.a(p.cF(b,a0,a1,a7.c,a4),$async$aC)
case 25:a6.Y(new A.a_(a0,A.af([a1],a5)))
k=A.bs(i,c)
k.F(0,"id")
a6.bl(new A.aN(a0,a1,B.V,B.u,i,c,k))
s=21
break
case 22:g=A.aB(B.l.v(B.i.v(a5)).a)
a2=a7.c
n=t.N
f=t.X
s=26
return A.a(b.G("lp_sync_row",A.m(["base_json",a5,"base_hash",g,"base_updated",a2,"remote_updated",a2,"last_seen_at",a4,"access_state","visible"],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aC)
case 26:s=27
return A.a(b.G("lp_outbox",A.m(["base_updated",a2,"base_hash",g],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aC)
case 27:s=28
return A.a(b.G(a,A.m(["hidden",0],n,f),"id = ?",[a1]),$async$aC)
case 28:a6.Y(new A.a_(a0,A.af([a1],n)))
case 21:case 16:case 1:return A.e(q,r)}})
return A.f($async$aC,r)},
cF(a,b,c,d,e){return this.qE(a,b,c,d,e)},
qE(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$cF=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.G("lp_sync_row",A.m(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$cF)
case 2:s=3
return A.a(a.G(q.a.aa(b).a.a,A.m(["hidden",0],p,o),"id = ?",[c]),$async$cF)
case 3:return A.e(null,r)}})
return A.f($async$cF,r)},
vZ(a,b,c,d,e){return this.a.V(new A.q9(c,e,d,B.a5,a,b),t.H)},
mc(a,b,c,d,e,f){return this.a.V(new A.q8(this,c,f,b,a,d,e),t.H)},
hE(a,b,c,d,e){return this.mc(a,b,c,d,B.a6,e)},
mb(a,b,c){return this.a.V(new A.q7(a,c,b),t.H)},
w5(){return this.a.V(new A.qa(null),t.S)},
em(a,b,c,d,e,f,g){return this.tl(a,b,c,d,e,f,g)},
tl(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$em=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.G("lp_sync_row",A.m(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$em)
case 2:p=A.E(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.G("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$em)
case 3:return A.e(null,r)}})
return A.f($async$em,r)}}
A.qb.prototype={
$1(a){return this.mU(a)},
mU(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
return A.a(o.aC(a,l[p]),$async$$1)
case 5:case 3:l.length===k||(0,A.A)(l),++p
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.q9.prototype={
$1(a){return this.mS(a)},
mS(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.G("lp_sync_row",A.m(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.q8.prototype={
$1(a){return this.mR(a)},
mR(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.c
n=q.d
m=q.e
l=t.N
k=t.X
s=2
return A.a(p.az(0,"lp_dead_letter",A.m(["at",q.a.a.Q.$0(),"kind",q.b,"store",o,"record_id",n,"error",m,"payload_json",q.f],l,k)),$async$$1)
case 2:s=3
return A.a(p.G("lp_sync_row",A.m(["sync_state",q.r.b,"last_error",m],l,k),"store = ? AND record_id = ?",[o,n]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.q7.prototype={
$1(a){return this.mQ(a)},
mQ(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.G("lp_sync_row",A.m(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.qa.prototype={
$1(a){return this.mT(a)},
mT(a){var s=0,r=A.h(t.S),q,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=A.l(["blocked"],t.s)
q=a.b.G("lp_sync_row",A.m(["sync_state","dirty","last_error",null,"next_retry_at",0],t.N,t.X),"sync_state = ?",p)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:91}
A.dv.prototype={
a7(){return"ApplyResult."+this.b}}
A.kl.prototype={}
A.qK.prototype={
cU(a){return this.vL(a)},
vL(b6){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$cU=A.c(function(b7,b8){if(b7===1)return A.d(b8,r)
for(;;)switch(s){case 0:b0={}
b2=b0
s=3
return A.a(p.d.hN(b6),$async$cU)
case 3:b1=b2.a=b8
if(b1==null)o="1970-01-01 00:00:00.000Z"
else{n=b1.a
m=$.Ce().dD(n)
if(m==null)A.x(A.be('Bad timestamp "'+n+'"'))
l=m.b
k=l[1]
k.toString
j=A.au(k)
k=l[2]
k.toString
i=A.au(k)
k=l[3]
k.toString
h=A.au(k)
k=l[4]
k.toString
g=A.au(k)
k=l[5]
k.toString
f=A.au(k)
k=l[6]
k.toString
e=A.au(k)
l=l[7]
l.toString
d=A.au(l)
if(i<1||i>12||g>23||f>59||e>59)A.x(A.be('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.xv(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.qA(k))A.x(A.be('Bad timestamp "'+n+'"'))
n=A.xv(j,i,h,g,f,e,d)
c=n.b
b=B.c.aG(c,1000)
l=n.c
o=A.H_(new A.b1(A.oc(n.a+B.c.R(c-b,1000)+-5000,b,l),b,l))}a=b0.b=b0.c=b0.d=0
a0=B.c.jQ(B.c.cK(200,1,500))
n=p.f,l=t.P,k=p.a,a1=k.e,k=k.ch,a2=p.b,a3='No store "'+b6+'" registered in this LocalPocket.',a4=null
case 4:if(!(a5=!1,!0)){s=5
break}a6=a2.z
a6===$&&A.v()
s=6
return A.a(a6.eE(b6,null,a4,o,null,a0),$async$cU)
case 6:a7=b8
a6=J.J(a7)
if(a6.gB(a7)){s=5
break}++a1.ax
a8=p.qG(a7)
a9=k.h(0,b6)
if(a9==null)A.x(A.w(a3))
b2=n
b3=A
b4=b0
b5=b6
s=8
return A.a(A.yz(a9.a,a7),$async$cU)
case 8:s=7
return A.a(b2.aT(new b3.qS(b4,p,b5,b8,a8),l),$async$cU)
case 7:o=a8.c
a4=a8.a;++a
if(a6.gl(a7)<a0){s=5
break}if(a>=100){a5=!0
s=5
break}s=4
break
case 5:q=new A.kl(b0.d,a5)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cU,r)},
lu(a,b){var s=B.a.T(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.T(a.a,b.b)<=0},
rX(a,b){var s=B.a.T(a.c,b.c)
if(s!==0)return s>0
return B.a.T(a.a,b.a)>0},
qG(a){var s,r,q,p=J.ax(a),o=p.gC(a)
for(p=p.b5(a,1),s=p.$ti,p=new A.a8(p,p.gl(0),s.i("a8<R.E>")),s=s.i("R.E");p.k();){r=p.d
q=r==null?s.a(r):r
if(this.rX(q,o))o=q}return o},
hk(a){return this.uz(a)},
uz(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hk=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.aT(new A.qM(o,p,a),t.P),$async$hk)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hk,r)},
cO(a,b){return this.uB(a,b)},
uB(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$cO=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.jW(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.ch,e=n.b,d=A.a7(j),c=d.c,d=d.i("c4<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.c4(j,0,200,d)
a2.i6(j,0,200,c)
a3=a2.dS(0)
a4=a3.length
b&1&&A.C(j,18)
A.aX(0,a4,j.length)
j.splice(0,a4)
m=A.l([],a)
a5=A.l([],a0)
a2=a3.length,a6=0
case 5:if(!(a6<a3.length)){s=7
break}l=a3[a6]
k=null
p=9
a7=e.z
a7===$&&A.v()
s=12
return A.a(a7.bG(l),$async$cO)
case 12:k=b5
p=2
s=11
break
case 9:p=8
b1=o.pop()
a7=A.M(b1)
if(a7 instanceof A.ci){J.bV(m,l)
s=6
break}else if(a7 instanceof A.bH)throw b1
else if(a7 instanceof A.bh){s=6
break}else throw b1
s=11
break
case 8:s=2
break
case 11:if(k==null){J.bV(m,l)
s=6
break}a5.push(k)
case 6:a3.length===a2||(0,A.A)(a3),++a6
s=5
break
case 7:s=J.aw(m)!==0?13:14
break
case 13:s=15
return A.a(n.eG(b2,m),$async$cO)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.x(A.w(a1))
b0=a9.a
a2=A.l([],g)
for(a7=a5.length,a6=0;a6<a5.length;a5.length===a7||(0,A.A)(a5),++a6)a2.push(A.yA(b0,a5[a6]))
s=16
return A.a(i.aT(new A.qO(n,a2,b2,b0),h),$async$cO)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cO,r)},
dk(a,b,c,d){return this.r7(a,b,c,d)},
r7(a1,a2,a3,a4){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dk=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:c=t.N
b=A.E(c,t.nw)
a=A.E(c,t.G)
o=p.a,n=o.y,m=o.z,o=o.ch,l='No store "'+a2+'" registered in this LocalPocket.',k=0
case 3:if(!(j=a4.length,k<j)){s=5
break}i=k+500
h=B.b.S(a4,k,B.c.cK(i,0,j))
g=B.b.L(A.aE(h.length,"?",!1,c),", ")
j=[a2]
B.b.E(j,h)
a0=J
s=6
return A.a(a1.ae(u.m+g+")",j),$async$dk)
case 6:j=a0.K(a6)
case 7:if(!j.k()){s=8
break}f=j.gn()
e=f.h(0,"record_id")
e.toString
b.j(0,A.I(e),A.kL(f))
s=7
break
case 8:d=o.h(0,a2)
if(d==null)A.x(A.w(l))
a0=J
s=9
return A.a(a1.dN(d.a.a,"id IN ("+g+")",h),$async$dk)
case 9:j=a0.K(a6)
case 10:if(!j.k()){s=11
break}f=j.gn()
e=f.h(0,"id")
e.toString
a.j(0,A.I(e),A.ca(a3,f,n,m))
s=10
break
case 11:case 4:k=i
s=3
break
case 5:q=new A.at(b,a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dk,r)},
lE(a,b,c,d,e){return this.a1(a,b,A.yA(this.a.aa(b).a,c),null,!1,d,e)},
tr(a,b,c){return this.lE(a,b,c,null,!1)},
a1(a,b,c,d,e,f,g){return this.tq(a,b,c,d,e,f,g)},
lD(a,b,c){return this.a1(a,b,c,null,!1,null,!1)},
tq(a5,a6,a7,a8,a9,b0,b1){var s=0,r=A.h(t.bG),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$a1=A.c(function(b2,b3){if(b2===1)return A.d(b3,r)
for(;;)switch(s){case 0:a0=a5.b
a1=p.a
a2=a1.aa(a6).a
a3=a7.a
a4=a7.e
s=a4!=null?3:4
break
case 3:s=5
return A.a(p.bM(a0,a2,a6,a3,a4),$async$a1)
case 5:q=B.a8
s=1
break
case 4:a4=a7.b
a4.toString
o=A.b_(a2,a4)
n=a7.c
n.toString
m=a7.d
m.toString
l=a3.b
s=l!==a6?6:7
break
case 6:s=8
return A.a(p.bM(a0,a2,a6,a3,'Remote store "'+l+'" does not match requested store "'+a6+'".'),$async$a1)
case 8:q=B.a8
s=1
break
case 7:l=a3.a
k=$.yL()
s=!k.b.test(l)?9:10
break
case 9:s=11
return A.a(p.bM(a0,a2,a6,a3,'Invalid remote record id "'+l+'".'),$async$a1)
case 11:q=B.a8
s=1
break
case 10:s=b1?12:14
break
case 12:j=b0
s=13
break
case 14:k=a1.as
k===$&&A.v()
s=15
return A.a(k.bC(a0,a6,l),$async$a1)
case 15:j=b3
case 13:s=a9?16:18
break
case 16:i=a8
s=17
break
case 18:s=19
return A.a(a0.aM(a2.a,1,"id = ?",[l]),$async$a1)
case 19:h=b3
k=J.J(h)
i=k.gB(h)?null:A.ca(a2,k.gC(h),a1.y,a1.z)
case 17:k=a3.e.length!==0||i!=null
s=k?20:21
break
case 20:s=22
return A.a(p.e.cT(a0,l,a3.e,a6),$async$a1)
case 22:case 21:s=i==null?23:24
break
case 23:s=25
return A.a(a0.az(0,a2.a,A.dq(a2,J.u(a4.h(0,"archived"),!0),a1.y,a1.z,l,a4)),$async$a1)
case 25:s=26
return A.a(p.cI(a0,a6,l,p.c.ay.$0(),j,a3.c,B.t,!0),$async$a1)
case 26:a5.Y(new A.a_(a6,A.af([l],t.N)))
g=A.bs(B.q,a4)
g.F(0,"id")
a5.bl(new A.aN(a6,l,B.a9,B.aw,null,a4,g))
q=B.Q
s=1
break
case 24:k=j==null
f=k?null:j.w
if(f==null)f=B.t
s=f===B.t?27:28
break
case 27:n=k?null:j.c
m=a3.c
s=n===m?29:30
break
case 29:s=31
return A.a(p.bO(a5,a6,l,m,!1),$async$a1)
case 31:q=B.R
s=1
break
case 30:s=32
return A.a(a0.G(a2.a,A.dq(a2,J.u(a4.h(0,"archived"),!0),a1.y,a1.z,l,a4),"id = ?",[l]),$async$a1)
case 32:s=33
return A.a(p.cI(a0,a6,l,p.c.ay.$0(),j,m,B.t,!0),$async$a1)
case 33:a5.Y(new A.a_(a6,A.af([l],t.N)))
g=A.bs(i,a4)
g.F(0,"id")
a5.bl(new A.aN(a6,l,B.a9,B.u,i,a4,g))
q=B.Q
s=1
break
case 28:s=f===B.a5||f===B.aX||f===B.P?34:35
break
case 34:a4=k?null:j.e
e=a3.c
s=a4===e?36:37
break
case 36:s=38
return A.a(p.bO(a5,a6,l,e,!1),$async$a1)
case 38:q=B.R
s=1
break
case 37:s=f===B.P?39:40
break
case 39:s=41
return A.a(p.bO(a5,a6,l,e,!1),$async$a1)
case 41:q=B.R
s=1
break
case 40:d=A.b_(a2,i)
s=A.aj(d)===n?42:43
break
case 42:s=44
return A.a(a0.a2("lp_outbox","store = ? AND record_id = ?",[a6,l]),$async$a1)
case 44:s=45
return A.a(p.cI(a0,a6,l,p.c.ay.$0(),j,e,B.t,!0),$async$a1)
case 45:a5.Y(new A.a_(a6,A.af([l],t.N)))
q=B.Q
s=1
break
case 43:c=A.en(k?null:j.r)
a4=A.Br(c,d,new A.k0(null,B.aK,!1),l,o,a6)
s=46
return A.a(t.fr.b(a4)?a4:A.bk(a4,t.r),$async$a1)
case 46:b=b3
s=b.b?47:48
break
case 47:s=49
return A.a(p.ee(a0,a6,a3,a2,j,d,b),$async$a1)
case 49:s=50
return A.a(p.bO(a5,a6,l,e,!1),$async$a1)
case 50:a1=t.N
a5.Y(new A.a_(a6,A.af([l],a1)))
a5.Y(new A.a_("lp_conflicts",A.af([l],a1)))
q=B.b_
s=1
break
case 48:a=b.a
s=51
return A.a(a0.G(a2.a,A.dq(a2,J.u(a.h(0,"archived"),!0),a1.y,a1.z,l,a),"id = ?",[l]),$async$a1)
case 51:a1=a1.as
a1===$&&A.v()
s=52
return A.a(a1.em(a0,a6,l,m,n,e,A.aj(a)),$async$a1)
case 52:s=53
return A.a(p.rU(a5,a6,l,e),$async$a1)
case 53:a5.Y(new A.a_(a6,A.af([l],t.N)))
g=A.bs(i,a)
g.F(0,"id")
a5.bl(new A.aN(a6,l,B.V,B.u,i,a,g))
q=B.Q
s=1
break
case 35:q=B.R
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$a1,r)},
ee(a,b,c,d,e,f,g){return this.rs(a,b,c,d,e,f,g)},
rs(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i
var $async$ee=A.c(function(h,a0){if(h===1)return A.d(a0,r)
for(;;)switch(s){case 0:m=e==null
l=A.en(m?null:e.r)
k=A.b_(d,A.em(d,c))
j=A.bs(l,f)
i=A.P(j,A.o(j).c)
B.b.aW(i)
j=A.bs(l,k)
p=A.P(j,A.o(j).c)
B.b.aW(p)
j=c.a
m=m?null:e.r
if(m==null)m=A.aj(l)
o=t.N
n=t.X
s=2
return A.a(a.cm(0,"lp_conflicts",A.m(["store",b,"record_id",j,"base_json",m,"local_json",A.aj(f),"remote_json",A.aj(k),"dirty_local",B.e.a4(i,null),"dirty_remote",B.e.a4(p,null),"detected_at",q.c.ay.$0()],o,n),B.W),$async$ee)
case 2:s=3
return A.a(a.G("lp_sync_row",A.m(["sync_state","conflict","base_json",A.aj(k),"base_hash",A.aB(B.l.v(B.i.v(A.aj(A.b_(d,k)))).a),"base_updated",c.c],o,n),"store = ? AND record_id = ?",[b,j]),$async$ee)
case 3:return A.e(null,r)}})
return A.f($async$ee,r)},
bM(a,b,c,d,e){return this.rm(a,b,c,d,e)},
rm(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bM=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.e.a4(d.d,null)}catch(a1){o=t.N
e=B.e.a4(A.m(["raw",d.d.m(0)],o,o),null)}o=q.c
n=o.ay
m=d.a
l=t.N
k=t.X
s=2
return A.a(a.az(0,"lp_dead_letter",A.m(["at",n.$0(),"kind","map_failure","store",c,"record_id",m,"error",a0,"payload_json",e],l,k)),$async$bM)
case 2:j=q.a.as
j===$&&A.v()
s=3
return A.a(j.bC(a,c,m),$async$bM)
case 3:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=n.$0()+B.c.R(o.lS(g).a,1000)
o=d.c
s=j?4:6
break
case 4:s=7
return A.a(a.az(0,"lp_sync_row",A.m(["store",c,"record_id",m,"remote_updated",o,"sync_state","quarantine","attempt_count",g,"next_retry_at",f,"last_error",a0,"schema_ver",b.b],l,k)),$async$bM)
case 7:s=5
break
case 6:s=8
return A.a(a.G("lp_sync_row",A.m(["sync_state","quarantine","last_error",a0,"remote_updated",o,"attempt_count",g,"next_retry_at",f],l,k),"store = ? AND record_id = ?",[c,m]),$async$bM)
case 8:case 5:return A.e(null,r)}})
return A.f($async$bM,r)},
cI(a,b,c,d,e,f,g,h){return this.t0(a,b,c,d,e,f,g,!0)},
t0(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$cI=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:p=q.a.aa(b)
o=A.E(t.N,t.X)
o.j(0,"store",b)
o.j(0,"record_id",c)
o.j(0,"remote_updated",f)
o.j(0,"last_seen_at",d)
o.j(0,"sync_state",g.b)
o.j(0,"access_state","visible")
o.j(0,"schema_ver",p.a.b)
p=g===B.t
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
return A.a(a.az(0,"lp_sync_row",o),$async$cI)
case 5:s=3
break
case 4:s=6
return A.a(a.G("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$cI)
case 6:case 3:return A.e(null,r)}})
return A.f($async$cI,r)},
bO(a,b,c,d,e){return this.rV(a,b,c,d,e)},
rU(a,b,c,d){return this.bO(a,b,c,d,!0)},
rV(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$bO=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=A.E(o,n)
m.j(0,"last_seen_at",q.c.ay.$0())
m.j(0,"access_state","visible")
if(e)m.j(0,"remote_updated",d)
s=2
return A.a(p.G("lp_sync_row",m,"store = ? AND record_id = ?",[b,c]),$async$bO)
case 2:s=3
return A.a(p.G(q.a.aa(b).a.a,A.m(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$bO)
case 3:if(g>0)a.Y(new A.a_(b,A.af([c],o)))
return A.e(null,r)}})
return A.f($async$bO,r)},
eG(a,b){return this.vu(a,b)},
vu(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$eG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.jW(b,!0,t.N)
n=A.a7(o),m=n.c,n=n.i("c4<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.c4(o,0,500,n)
i.i6(o,0,500,m)
h=i.dS(0)
g=h.length
l&1&&A.C(o,18)
A.aX(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.aT(new A.qQ(p,a,h),j),$async$eG)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$eG,r)}}
A.qS.prototype={
$0(){var s=this,r=s.b
return r.a.V(new A.qR(s.a,r,s.c,s.d,s.e),t.P)},
$S:18}
A.qR.prototype={
$1(a){return this.mZ(a)},
mZ(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$$1=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:d=q.a
c=d.a
b=a4.b
a=q.b
a0=a.a
a1=q.c
a2=a0.aa(a1)
a3=A.l([],t.s)
for(p=q.d,o=J.ax(p),n=o.gu(p);n.k();)a3.push(n.gn().a.a)
s=2
return A.a(a.dk(b,a1,a2.a,a3),$async$$1)
case 2:m=a6
l=m.a
k=m.b
j=A.aU(t.N)
a2=o.gu(p),a0=a0.e
case 3:if(!a2.k()){s=4
break}a3=a2.gn()
i=a3.a
if(c!=null&&a.lu(i,c)){s=3
break}p=i.a
s=j.D(0,p)?5:7
break
case 5:s=8
return A.a(a.lD(a4,a1,a3),$async$$1)
case 8:h=a6
s=6
break
case 7:o=l.h(0,p)
s=9
return A.a(a.a1(a4,a1,a3,k.h(0,p),!0,o,!0),$async$$1)
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
case 4:g=c==null||!a.lu(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.dU(b,a1,e,f),$async$$1)
case 10:d.a=new A.hF(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.qM.prototype={
$0(){var s=this.b
return s.a.V(new A.qL(this.a,s,this.c),t.P)},
$S:18}
A.qL.prototype={
$1(a){return this.mW(a)},
mW(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.as
k===$&&A.v()
o=p.c
n=o.b
s=3
return A.a(k.bC(a.b,n,o.a),$async$$1)
case 3:m=c
s=m==null?4:5
break
case 4:s=6
return A.a(l.tr(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.t){s=1
break}k=m.c
if(k!=null&&B.a.T(o.c,k)<=0){s=1
break}s=7
return A.a(l.lE(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.qO.prototype={
$0(){var s=this,r=s.a
return r.a.V(new A.qN(r,s.b,s.c,s.d),t.P)},
$S:18}
A.qN.prototype={
$1(a){return this.mX(a)},
mX(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=A.l([],t.s)
for(p=q.b,o=p.length,n=0;n<p.length;p.length===o||(0,A.A)(p),++n)e.push(p[n].a.a)
o=q.a
m=q.c
s=2
return A.a(o.dk(a.b,m,q.d,e),$async$$1)
case 2:l=c
k=l.a
j=l.b
i=A.aU(t.N)
e=p.length,n=0
case 3:if(!(n<p.length)){s=5
break}h=p[n]
g=h.a.a
s=i.D(0,g)?6:8
break
case 6:s=9
return A.a(o.lD(a,m,h),$async$$1)
case 9:s=7
break
case 8:f=k.h(0,g)
s=10
return A.a(o.a1(a,m,h,j.h(0,g),!0,f,!0),$async$$1)
case 10:i.t(0,g)
case 7:case 4:p.length===e||(0,A.A)(p),++n
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.qQ.prototype={
$0(){var s=this.a
return s.a.V(new A.qP(s,this.b,this.c),t.P)},
$S:18}
A.qP.prototype={
$1(a){return this.mY(a)},
mY(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:i=a2.b
h=q.a.a
g=q.b
f=h.aa(g).a
e=h.aa(g).a.a
d=q.c
c=t.N
b=B.b.L(A.aE(d.length,"?",!1,c),", ")
a="id IN ("+b+")"
a0=A.E(c,t.G)
a1=J
s=2
return A.a(i.dN(e,a,d),$async$$1)
case 2:p=a1.K(a4),o=h.y,h=h.z
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"id")
m.toString
a0.j(0,A.I(m),A.ca(f,n,o,h))
s=3
break
case 4:h=t.X
p=A.m(["access_state","hidden"],c,h)
o=[g]
B.b.E(o,d)
s=5
return A.a(i.G("lp_sync_row",p,"store = ? AND record_id IN ("+b+")",o),$async$$1)
case 5:s=6
return A.a(i.G(e,A.m(["hidden",1],c,h),a,d),$async$$1)
case 6:a2.Y(new A.a_(g,A.pk(d,A.a7(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.A)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.hg(null,null,c,h)
p.E(0,j)
p.j(0,"hidden",!0)
a2.bl(new A.aN(g,k,B.a9,B.bl,j,p,B.cq))}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.aM.prototype={}
A.qT.prototype={
eN(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$eN=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:f=p.a.as
f===$&&A.v()
s=3
return A.a(f.es(25,p.c.ay.$0()),$async$eN)
case 3:o=b
f=J.J(o)
if(f.gB(o)){q=B.M
s=1
break}if(p.f){q=p.b9(o)
s=1
break}f=f.gu(o),n=B.M
case 4:if(!f.k()){s=5
break}s=6
return A.a(p.dm(f.gn()),$async$eN)
case 6:m=b
l=m.a
k=m.b
j=m.c
i=m.d
h=m.e
g=n.f||m.f
n=new A.aM(n.a+l,n.b+k,n.c+j,n.d+i,n.e+h,g)
s=4
break
case 5:q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eN,r)},
dm(a){return this.ri(a)},
ri(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dm=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.as
l===$&&A.v()
m=m.b
s=3
return A.a(l.dO(m,a.a,a.b),$async$dm)
case 3:o=c
if(o==null){q=B.M
s=1
break}s=4
return A.a(l.bC(m,o.a,o.b),$async$dm)
case 4:n=c
if(n==null){q=B.M
s=1
break}if(o.e==null){q=p.rg(o,n)
s=1
break}q=p.iS(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dm,r)},
bs(a,b,c,d,e){return this.pN(a,b,c,d,e)},
pM(a,b,c,d){return this.bs(a,b,c,!1,d)},
pK(a,b,c){return this.bs(a,b,c,!1,!1)},
pL(a,b,c,d){return this.bs(a,b,c,d,!1)},
pN(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bs=A.c(function(f,g){if(f===1){o.push(g)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(c.$0(),$async$bs)
case 7:k=g
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o.pop()
k=A.M(i)
s=k instanceof A.bH?8:10
break
case 8:n.e.$0()
q=B.a4
s=1
break
s=9
break
case 10:s=k instanceof A.cf?11:13
break
case 11:k=n.a.as
k===$&&A.v()
s=14
return A.a(k.mb("forbidden_push",a.b,a.a),$async$bs)
case 14:q=B.cm
s=1
break
s=12
break
case 13:s=k instanceof A.eI?15:17
break
case 15:m=k
s=d?18:19
break
case 18:s=20
return A.a(n.e1(a,"validation_push",m.a),$async$bs)
case 20:q=B.a3
s=1
break
case 19:q=n.c9(a,b,m)
s=1
break
s=16
break
case 17:if(k instanceof A.ci){q=n.e4(a,b,!e)
s=1
break}else if(k instanceof A.bh){l=k
q=n.c9(a,b,l)
s=1
break}else throw i
case 16:case 12:case 9:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bs,r)},
iR(a,b,c){return this.rh(a,b,c)},
rg(a,b){return this.iR(a,b,!1)},
rh(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$iR=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.bs(a,b,new A.qV(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iR,r)},
iV(a,b,c){return this.rt(a,b,c)},
rt(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$iV=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.pM(a,b,new A.r_(p,a,p.a.aa(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iV,r)},
iS(a,b){return this.rj(a,b)},
rj(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$iS=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.pK(a,b,new A.qY(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iS,r)},
dn(a,b,c,d){return this.rl(a,b,c,d)},
rk(a,b,c){return this.dn(a,b,c,!1)},
rl(a,b,c,d){var s=0,r=A.h(t.e),q,p=this,o,n
var $async$dn=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p.kq(a,c)
o=p.a.aa(a.a).a
s=A.aB(B.l.v(B.i.v(A.aj(A.b_(o,A.em(o,c))))).a)===A.aB(B.l.v(B.i.v(a.d)).a)?3:4
break
case 3:s=5
return A.a(p.ei(a,c),$async$dn)
case 5:q=B.N
s=1
break
case 4:s=6
return A.a(p.dh(a,b,c,o),$async$dn)
case 6:n=f
if(n==null){q=B.aQ
s=1
break}q=p.bs(a,b,new A.qW(p,a,A.aj(A.b_(o,n.a)),c,n),!0,d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dn,r)},
b9(a){return this.rf(a)},
rf(c5){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
var $async$b9=A.c(function(c6,c7){if(c6===1){o.push(c7)
s=p}for(;;)switch(s){case 0:b5=A.l([],t.k1)
b6=t.N
b7=A.E(b6,t.G)
b8=0
b9=0
c0=0
c1=0
c2=0
c3=A.E(b6,b6)
b6=J.K(c5),g=n.a,f=g.e,e=n.b,d=g.ch,c=g.b
case 3:if(!b6.k()){s=4
break}b=b6.gn()
a=g.as
a===$&&A.v()
s=5
return A.a(a.dO(c,b.a,b.b),$async$b9)
case 5:m=c7
if(m==null){s=3
break}c3.j(0,m.w,m.d)
s=6
return A.a(a.bC(c,m.a,m.b),$async$b9)
case 6:l=c7
if(l==null){s=3
break}b=m.a
a0=d.h(0,b)
if(a0==null)A.x(A.w('No store "'+b+'" registered in this LocalPocket.'))
a1=a0.a
k=null
p=8;++f.as
b=m.b
a2=e.z
a2===$&&A.v()
s=11
return A.a(a2.bG(b),$async$b9)
case 11:k=c7
p=2
s=10
break
case 8:p=7
c4=o.pop()
b=A.M(c4)
s=b instanceof A.ci?12:14
break
case 12:s=m.e!=null?15:16
break
case 15:s=17
return A.a(n.kT(m,l),$async$b9)
case 17:j=c7
b8+=j.a
b9+=j.b
c0+=j.c
c1+=j.d
c2+=j.e
s=3
break
case 16:k=null
s=13
break
case 14:s=b instanceof A.bH?18:20
break
case 18:n.e.$0()
q=B.a4
s=1
break
s=19
break
case 20:s=b instanceof A.cf?21:23
break
case 21:b=m.a
s=24
return A.a(a.mb("forbidden_push",m.b,b),$async$b9)
case 24:++c1
s=3
break
s=22
break
case 23:s=b instanceof A.bh?25:27
break
case 25:i=b
s=28
return A.a(n.c9(m,l,i),$async$b9)
case 28:h=c7
b8+=h.a
b9+=h.b
s=3
break
s=26
break
case 27:throw c4
case 26:case 22:case 19:case 13:s=10
break
case 7:s=2
break
case 10:s=k!=null?29:30
break
case 29:b=k.a
a=m.b
if(b!==a)A.x(A.hm('record id "'+b+'" does not match requested "'+a+'"'))
a4=new A.ab("")
A.fH(a4,A.b_(a1,A.em(a1,k)))
b=a4.a
b=B.i.v(b.charCodeAt(0)==0?b:b)
a5=new A.es()
a=A.lV(a5)
a.t(0,b)
a.p()
a6=A.aB(a5.a.a)
a=B.i.v(m.d)
a5=new A.es()
b=A.lV(a5)
b.t(0,a)
b.p()
s=a6===A.aB(a5.a.a)?31:32
break
case 31:s=33
return A.a(n.ei(m,k),$async$b9)
case 33:++b8
s=3
break
case 32:s=34
return A.a(n.dh(m,l,k,a1),$async$b9)
case 34:a7=c7
if(a7==null){++c0
s=3
break}b=m.w
a=m.a
a2=m.b
a8=a7.a
a4=new A.ab("")
A.fH(a4,A.b_(a1,a8))
a9=a4.a
b0=m.e==null?null:k.c
b5.push(new A.eK(b,a,a2,a9.charCodeAt(0)==0?a9:a9,b0))
b7.j(0,m.w,a8)
s=3
break
case 30:b5.push(new A.eK(m.w,m.a,m.b,m.d,m.e))
s=3
break
case 4:s=b5.length!==0?35:36
break
case 35:b1=0
case 37:if(!(b2=b5.length,b1<b2)){s=39
break}b3=b1+25
s=40
return A.a(n.bN(B.b.S(b5,b1,b3<b2?b3:b2),b7,c3),$async$b9)
case 40:b4=c7
b8+=b4.a
b9+=b4.b
c0+=b4.c
c2+=b4.e
if(b4.f){q=new A.aM(b8,b9,c0,c1,c2,!0)
s=1
break}case 38:b1=b3
s=37
break
case 39:case 36:q=new A.aM(b8,b9,c0,c1,c2,!1)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b9,r)},
dh(a,b,c,d){return this.qH(a,b,c,d)},
qH(a,b,c,d){var s=0,r=A.h(t.nh),q,p=this,o,n,m
var $async$dh=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.em(d,c)
n=A.Br(A.en(b.r),A.en(a.d),new A.k0(null,B.aK,!1),a.b,A.b_(d,o),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bk(n,t.r),$async$dh)
case 3:m=f
s=m.b?4:5
break
case 4:s=6
return A.a(p.fY(a,b,c,m),$async$dh)
case 6:q=null
s=1
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dh,r)},
bN(a,b,c){return this.rJ(a,b,c)},
rJ(b9,c0,c1){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$bN=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:b6=0
b7=0
p=4
a7=n.b.z
a7===$&&A.v()
s=7
return A.a(a7.eM(b9),$async$bN)
case 7:m=c3
a7=t.N
l=A.E(a7,t.gq)
for(a8=b9.length,a9=0;a9<b9.length;b9.length===a8||(0,A.A)(b9),++a9){k=b9[a9]
J.bU(l,k.a,k)}j=l
i=A.aU(a7)
for(l=J.K(m);l.k();){h=l.gn()
if(!J.bV(i,h.a)){l=A.be("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.H(h.a)){l=A.be("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.l([],t.bo)
l=J.K(m),a7=n.a
case 8:if(!l.k()){s=9
break}f=l.gn()
a8=J.U(j,f.a)
a8.toString
e=a8
s=f.b&&f.c!=null?10:12
break
case 10:a8=n.iL(e,c1.h(0,e.a))
b0=B.i.v(e.d)
b1=new A.es()
b2=A.lV(b1)
b2.t(0,b0)
b2.p()
b2=A.aB(b1.a.a)
b0=f.e
if(b0==null)b0=e.d
J.bV(g,new A.hH(a8,b0,f.c.c,b2,c0.h(0,e.a)));++b6
s=11
break
case 12:a8=a7.as
a8===$&&A.v()
b0=e.b
b2=e.c
b3=f.d
if(b3==null)b3="batch_failed"
b4=f.d
if(b4==null)b4="batch_failed"
s=13
return A.a(a8.hE(b4,b2,b3,e.d,b0),$async$bN)
case 13:++b7
case 11:s=8
break
case 9:l=a7.as
l===$&&A.v()
s=14
return A.a(l.k9(g),$async$bN)
case 14:l=b6
a7=b7
q=new A.aM(l,a7,0,0,0,!1)
s=1
break
p=2
s=6
break
case 4:p=3
b8=o.pop()
l=A.M(b8)
s=l instanceof A.dw?15:17
break
case 15:q=n.bK(b9,c0,c1)
s=1
break
s=16
break
case 17:s=l instanceof A.cf?18:20
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
return A.a(n.dm(n.kZ(a0)),$async$bN)
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
case 23:q=new A.aM(b6,b7,d,c,b,a)
s=1
break
s=19
break
case 20:s=l instanceof A.bH?25:27
break
case 25:n.e.$0()
q=B.a4
s=1
break
s=26
break
case 27:s=l instanceof A.bh?28:30
break
case 28:a2=l
a3=a2 instanceof A.dV?a2:new A.eX("network error")
l=b9.length,a7=n.a,a8=a7.b,a9=0
case 31:if(!(a9<b9.length)){s=33
break}a4=b9[a9]
b0=a7.as
b0===$&&A.v()
s=34
return A.a(b0.bC(a8,a4.b,a4.c),$async$bN)
case 34:a5=c3
s=a5!=null?35:36
break
case 35:s=37
return A.a(n.c9(n.kZ(a4),a5,a3),$async$bN)
case 37:a6=c3
b6+=a6.a
b7+=a6.b
case 36:case 32:b9.length===l||(0,A.A)(b9),++a9
s=31
break
case 33:q=new A.aM(b6,b7,0,0,0,!0)
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
return A.f($async$bN,r)},
bK(a,b,c){return this.o0(a,b,c)},
o0(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$bK=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.J(b5)
s=b3.gl(b5)===1?3:4
break
case 3:g=b3.gan(b5)
h=n.a.as
h===$&&A.v()
b3=g.b
s=5
return A.a(h.hE("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$bK)
case 5:q=B.a3
s=1
break
case 4:a0=B.c.R(b3.gl(b5),2)
m=0
l=0
k=!1
b3=[b3.S(b5,0,a0),b3.aX(b5,a0)],a1=n.a,a2=t.N,a3=n.b,a4=t.gq,a5=0
case 6:if(!(a5<2)){s=8
break}j=b3[a5]
p=10
a6=a3.z
a6===$&&A.v()
s=13
return A.a(a6.eM(j),$async$bK)
case 13:i=b9
h=A.E(a2,a4)
for(a6=J.K(j);a6.k();){g=a6.gn()
J.bU(h,g.a,g)}f=h
e=A.aU(a2)
for(a6=J.K(i);a6.k();){d=a6.gn()
if(!J.bV(e,d.a)){a6=A.be("Batch response references duplicate op "+d.a+".")
throw A.b(a6)}if(!f.H(d.a)){a6=A.be("Batch response references unknown op "+d.a+".")
throw A.b(a6)}}a6=J.K(i)
case 14:if(!a6.k()){s=15
break}c=a6.gn()
a7=J.U(f,c.a)
a7.toString
b=a7
s=c.b&&c.c!=null?16:18
break
case 16:a7=n.iL(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.ds(a7,a8,a9,b0==null?b.d:b0),$async$bK)
case 19:++m
s=17
break
case 18:a7=a1.as
a7===$&&A.v()
a8=b.b
a9=b.c
b0=c.d
if(b0==null)b0="batch_poison"
b1=c.d
if(b1==null)b1="batch_poison"
s=20
return A.a(a7.hE(b1,a9,b0,b.d,a8),$async$bK)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b4=o.pop()
a6=A.M(b4)
s=a6 instanceof A.dw?21:23
break
case 21:s=24
return A.a(n.bK(j,b6,b7),$async$bK)
case 24:a=b9
m+=a.a
l+=a.b
k=k||a.f
s=22
break
case 23:if(a6 instanceof A.bh){k=!0
s=7
break}else throw b4
case 22:s=12
break
case 9:s=2
break
case 12:case 7:++a5
s=6
break
case 8:q=new A.aM(m,l,0,0,0,k)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bK,r)},
iL(a,b){var s=b==null?a.d:b
return new A.cj(a.b,a.c,B.r,s,a.e,A.aB(B.l.v(B.i.v(a.d)).a),B.o,a.a,0,null)},
kZ(a){return this.iL(a,null)},
ds(a,b,c,d){return this.rN(a,b,c,d)},
ei(a,b){return this.ds(a,b,null,null)},
rN(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$ds=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.aa(a.a).a
n=A.em(o,b)
m=d==null
l=m?A.aj(A.b_(o,n)):d
p=p.as
p===$&&A.v()
s=2
return A.a(p.k9(A.l([new A.hH(a,l,b.c,A.aB(B.l.v(B.i.v(m?a.d:d)).a),c)],t.bo)),$async$ds)
case 2:return A.e(null,r)}})
return A.f($async$ds,r)},
kq(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.hm('record id "'+s+'" does not match requested "'+r+'"'))},
c9(a,b,c){return this.rC(a,b,c)},
rC(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$c9=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.dV?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.as
o===$&&A.v()
s=5
return A.a(o.mc(c.a,a.b,"max_attempts",a.d,B.a6,a.a),$async$c9)
case 5:q=B.a3
s=1
break
case 4:o=p.c
n=o.lT(l,k)
m=p.a.as
m===$&&A.v()
s=6
return A.a(m.vZ(a.a,a.b,l,c.a,o.ay.$0()+B.c.R(n.a,1000)),$async$c9)
case 6:q=B.a4
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c9,r)},
e1(a,b,c){return this.oo(a,b,c)},
on(a,b){return this.e1(a,b,null)},
oo(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$e1=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.as
o===$&&A.v()
p=c==null?b:c
s=2
return A.a(o.hE(p,a.b,b,a.d,a.a),$async$e1)
case 2:return A.e(null,r)}})
return A.f($async$e1,r)},
e4(a,b,c){return this.pB(a,b,c)},
kT(a,b){return this.e4(a,b,!0)},
pB(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$e4=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p.a.aa(a.a)
case 3:switch(0){case 0:s=5
break
default:s=4
break}break
case 5:s=6
return A.a(p.fh(a,b),$async$e4)
case 6:q=B.aQ
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$e4,r)},
fh(a,b){return this.oA(a,b)},
oA(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$fh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=b.r
o=A.en(p)
n=A.en(a.d)
m=A.bs(o,n)
l=A.P(m,A.o(m).c)
B.b.aW(l)
if(p==null)p=A.aj(o)
s=2
return A.a(q.a.V(new A.qU(q,a,p,n,l),t.P),$async$fh)
case 2:return A.e(null,r)}})
return A.f($async$fh,r)},
fY(a,b,c,d){return this.rr(a,b,c,d)},
rr(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h
var $async$fY=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=q.a
n=o.aa(a.a).a
m=A.em(n,c)
l=A.en(b.r)
k=A.en(a.d)
j=A.b_(n,m)
i=A.bs(l,k)
h=A.P(i,A.o(i).c)
B.b.aW(h)
i=A.bs(l,j)
p=A.P(i,A.o(i).c)
B.b.aW(p)
s=2
return A.a(o.V(new A.qZ(q,a,b,l,k,j,h,p,n,c),t.P),$async$fY)
case 2:return A.e(null,r)}})
return A.f($async$fY,r)}}
A.qV.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.z
j===$&&A.v()
s=7
return A.a(j.hf(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.ei(k,m),$async$$0)
case 8:q=B.N
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
if(A.M(h) instanceof A.et){q=n.a.iV(n.b,n.c,n.d)
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
A.r_.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.z
l===$&&A.v()
s=3
return A.a(l.bG(m.b),$async$$0)
case 3:o=b
s=o==null?4:5
break
case 4:s=6
return A.a(n.on(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.a3
s=1
break
case 5:l=p.c
s=A.aB(B.l.v(B.i.v(A.aj(A.b_(l,A.em(l,o))))).a)===A.aB(B.l.v(B.i.v(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.ei(m,o),$async$$0)
case 9:q=B.N
s=1
break
case 8:q=n.dn(m,p.d,o,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:17}
A.qY.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.z
l===$&&A.v()
s=3
return A.a(l.bG(m.b),$async$$0)
case 3:o=b
if(o==null){q=n.kT(m,p.c)
s=1
break}n.kq(m,o)
if(o.c===m.e){l=p.c
q=n.pL(m,l,new A.qX(n,m,o,l),!0)
s=1
break}q=n.rk(m,p.c,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:17}
A.qX.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.z
j===$&&A.v()
s=7
return A.a(j.eX(n.c.c,k.d,k.b),$async$$0)
case 7:m=b
s=8
return A.a(l.ei(k,m),$async$$0)
case 8:q=B.N
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
A.qW.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.b
m=p.c
l=o.b.z
l===$&&A.v()
k=o
j=n
s=4
return A.a(l.eX(p.d.c,m,n.b),$async$$0)
case 4:s=3
return A.a(k.ds(j,b,p.e.a,m),$async$$0)
case 3:q=B.N
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:17}
A.qU.prototype={
$1(a){return this.n_(a)},
n_(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=o.a
m=o.b
l=q.c
k=t.N
j=t.X
s=2
return A.a(p.cm(0,"lp_conflicts",A.m(["store",n,"record_id",m,"base_json",l,"local_json",A.aj(q.d),"remote_json",A.aj(A.m(["__lp_deleted__",!0],k,t.y)),"dirty_local",B.e.a4(q.e,null),"dirty_remote",B.e.a4(B.o,null),"detected_at",q.a.c.ay.$0()],k,j),B.W),$async$$1)
case 2:s=3
return A.a(p.G("lp_sync_row",A.m(["sync_state","conflict","base_json",l,"base_hash",o.f,"base_updated",o.e],k,j),"store = ? AND record_id = ?",[n,m]),$async$$1)
case 3:a.Y(new A.a_(n,A.af([m],k)))
a.Y(new A.a_("lp_conflicts",A.af([m],k)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.qZ.prototype={
$1(a){return this.n0(a)},
n0(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
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
return A.a(l.cm(0,"lp_conflicts",A.m(["store",j,"record_id",k,"base_json",p,"local_json",A.aj(q.e),"remote_json",A.aj(o),"dirty_local",B.e.a4(q.r,null),"dirty_remote",B.e.a4(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.W),$async$$1)
case 2:s=3
return A.a(l.G("lp_sync_row",A.m(["sync_state","conflict","base_json",A.aj(o),"base_hash",A.aB(B.l.v(B.i.v(A.aj(A.b_(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.Y(new A.a_(j,A.af([k],n)))
a.Y(new A.a_("lp_conflicts",A.af([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.bN.prototype={
a7(){return"SyncEngineState."+this.b}}
A.b4.prototype={
m(a){var s=this
return"SyncReport(pulled: "+s.a.m(0)+", swept: "+s.b.m(0)+", pushed: "+s.c+", deadLettered: "+s.d+", blocked: "+s.e+", discarded: "+s.f+", hadError: "+s.r+")"}}
A.eV.prototype={}
A.eU.prototype={}
A.rt.prototype={
gkt(){return 36},
d8(a){return this.nI(a)},
nI(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$d8=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.l([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.ch,g=new A.bK(g,g.r,g.e,A.o(g).i("bK<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.k()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.hO(m),$async$d8)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.gkt():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.c.aG(c.a+1,n.gkt())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.bo(m,a),$async$d8)
case 13:a5.bV(a6,a9)
case 11:++j
s=10
break
case 12:s=14
return A.a(h.V(new A.ru(c,n,m,a3),f),$async$d8)
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
case 4:if(a2!=null)throw A.b(a2)
q=a1
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d8,r)},
bo(a,b){return this.nH(a,b)},
nH(a4,a5){var s=0,r=A.h(t.eg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bo=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.O("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aU(t.N)
m=B.c.jQ(B.c.cK(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:g=k.z
g===$&&A.v()
s=5
return A.a(g.eE(a4,B.c5,h,null,o,m),$async$bo)
case 5:f=a7
g=J.J(f)
if(g.gB(f)){s=4
break}for(e=g.gu(f);e.k();)n.t(0,e.gn().a)
e=A.l([],l)
for(d=g.gu(f);d.k();)e.push(d.gn().a)
s=6
return A.a(p.fX(a4,e),$async$bo)
case 6:c=a7
b=A.l([],l)
for(e=g.gu(f);e.k();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.ao||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.cO(a4,b),$async$bo)
case 9:i+=b.length
case 8:h=g.ga_(f).a
if(g.gl(f)<m){s=4
break}s=3
break
case 4:k=p.a.b
g=o+"%"
s=10
return A.a(k.ae("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a4,g]),$async$bo)
case 10:a1=a7
a2=A.l([],l)
for(e=J.K(a1);e.k();){d=e.gn()
a=d.h(0,"record_id")
a.toString
A.I(a)
if(!n.D(0,a)){if(J.u(d.h(0,"access_state"),"hidden"))continue
a2.push(a)}}s=a2.length!==0?11:12
break
case 11:s=13
return A.a(j.eG(a4,a2),$async$bo)
case 13:case 12:s=14
return A.a(k.ae("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,g,p.c.ay.$0()]),$async$bo)
case 14:a3=a7
k=J.J(a3)
s=k.gW(a3)?15:16
break
case 15:l=A.l([],l)
for(k=k.gu(a3);k.k();){g=k.gn().h(0,"record_id")
g.toString
l.push(A.I(g))}s=17
return A.a(j.cO(a4,l),$async$bo)
case 17:case 16:q=new A.eU(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bo,r)},
fX(a,b){return this.r9(a,b)},
r9(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$fX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=t.N
f=A.E(g,t.nw)
o=p.a.b,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.b.S(b,n,B.c.cK(l,0,m))
j=B.b.L(A.aE(k.length,"?",!1,g),", ")
m=[a]
B.b.E(m,k)
e=J
s=6
return A.a(o.ae(u.m+j+")",m),$async$fX)
case 6:m=e.K(d)
case 7:if(!m.k()){s=8
break}i=m.gn()
h=i.h(0,"record_id")
h.toString
f.j(0,A.I(h),A.kL(i))
s=7
break
case 8:case 4:n=l
s=3
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fX,r)}}
A.ru.prototype={
$1(a){return this.n2(a)},
n2(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.dV(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.bh.prototype={
m(a){return A.iQ(this).m(0)+": "+this.a},
$iL:1}
A.eX.prototype={}
A.dV.prototype={}
A.hL.prototype={}
A.bH.prototype={}
A.cf.prototype={}
A.ci.prototype={}
A.eI.prototype={}
A.eJ.prototype={}
A.et.prototype={}
A.dw.prototype={}
A.eS.prototype={
gl(a){return this.b}}
A.ck.prototype={}
A.eK.prototype={}
A.hG.prototype={}
A.j3.prototype={
a7(){return"BackendHintKind."+this.b}}
A.cd.prototype={}
A.wR.prototype={
$2(a,b){return B.a.jD(B.c.m(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:94}
A.rv.prototype={
lT(a,b){var s,r,q,p,o,n
if(b!=null){s=this.r1(b)
if(A.aD(s))return A.dF(0,0,s<0?0:s)
if(s instanceof A.b1){r=s.a-this.ay.$0()
return r<=0?B.x:A.dF(0,r,0)}return B.ay}q=a<1?1:a
p=1e6
o=1
for(;;){if(!(o<q&&p<3e8))break
n=p*2
p=n>3e8?3e8:n;++o}return A.dF(B.v.mq(p*J.Cs(this.at.$1(q),0.5,1.5)),0,0)},
lS(a){return this.lT(a,null)},
r1(a){var s=B.a.d_(a),r=A.hD(s,null)
if(r!=null)return r
return A.E1(s)}}
A.hF.prototype={}
A.hR.prototype={}
A.rG.prototype={
hN(a){return this.vV(a)},
vV(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$hN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.eP("lp_sync_state",A.l(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$hN)
case 3:m=c
l=J.J(m)
if(l.gB(m)){q=null
s=1
break}o=A.ai(J.U(l.gC(m),"cursor_updated"))
n=A.ai(J.U(l.gC(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.hF(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hN,r)},
dU(a,b,c,d){return this.ww(a,b,c,d)},
ww(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$dU=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aM("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$dU)
case 5:s=m.cc(f)?2:4
break
case 2:s=6
return A.a(a.az(0,"lp_sync_state",A.m(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$dU)
case 6:s=3
break
case 4:s=7
return A.a(a.G("lp_sync_state",A.m(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$dU)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dU,r)},
hO(a){return this.vX(a)},
vX(a){var s=0,r=A.h(t.k5),q,p=this,o,n,m
var $async$hO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.eP("lp_sync_state",A.l(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$hO)
case 3:n=c
m=J.J(n)
if(m.gB(n)){q=B.cy
s=1
break}o=A.aQ(J.U(m.gC(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.hR(o,A.aQ(J.U(m.gC(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hO,r)},
dV(a,b,c,d){return this.wA(a,b,c,d)},
wA(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$dV=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aM("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$dV)
case 5:s=m.cc(f)?2:4
break
case 2:s=6
return A.a(a.az(0,"lp_sync_state",A.m(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$dV)
case 6:s=3
break
case 4:s=7
return A.a(a.G("lp_sync_state",A.m(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$dV)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dV,r)},
hd(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$hd=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.aR("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$hd)
case 3:l=b
k=J.J(l)
j=k.gB(l)?B.q:k.gC(l)
k=A.aQ(j.h(0,"pending"))
if(k==null)k=0
o=A.aQ(j.h(0,"conflicts"))
if(o==null)o=0
n=A.aQ(j.h(0,"hidden"))
if(n==null)n=0
m=A.aQ(j.h(0,"blocked"))
q=new A.lN([m==null?0:m,o,n,k])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hd,r)}}
A.cn.prototype={
a7(){return"SyncState."+this.b}}
A.fJ.prototype={
a7(){return"AccessState."+this.b}}
A.eG.prototype={
a7(){return"OutboxKind."+this.b}}
A.hy.prototype={
a7(){return"OpQueueKind."+this.b}}
A.xb.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.cm.prototype={}
A.rF.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.I(i)
i=j.h(0,"record_id")
i.toString
A.I(i)
i=A.ai(j.h(0,"remote_updated"))
s=A.aQ(j.h(0,"last_seen_at"))
r=A.ai(j.h(0,"base_updated"))
A.ai(j.h(0,"base_hash"))
q=A.ai(j.h(0,"base_json"))
p=j.h(0,"sync_state")
p.toString
p=A.ev(B.bR,A.I(p))
A.Bg(j.h(0,"dirty_fields"))
o=A.aQ(j.h(0,"local_rev"))
if(o==null)o=0
n=j.h(0,"access_state")
n.toString
n=A.ev(B.bP,A.I(n))
A.ai(j.h(0,"op_id"))
m=A.aQ(j.h(0,"attempt_count"))
if(m==null)m=0
l=A.aQ(j.h(0,"next_retry_at"))
if(l==null)l=0
k=A.ai(j.h(0,"last_error"))
A.aQ(j.h(0,"schema_ver"))
return new A.cm(i,s,r,q,p,o,n,m,l,k)},
$S:95}
A.cj.prototype={}
A.q6.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.I(i)
s=j.h(0,"record_id")
s.toString
A.I(s)
r=j.h(0,"kind")
r.toString
r=A.ev(B.c_,A.I(r))
q=j.h(0,"payload_json")
q.toString
A.I(q)
p=A.ai(j.h(0,"base_updated"))
o=A.ai(j.h(0,"base_hash"))
if(o==null)o=""
n=A.Bg(j.h(0,"dirty_fields"))
m=j.h(0,"op_id")
m.toString
A.I(m)
l=j.h(0,"created_at")
l.toString
A.ah(l)
k=j.h(0,"updated_at")
k.toString
A.ah(k)
return new A.cj(i,s,r,q,p,o,n,m,l,A.ai(j.h(0,"depends_on_op")))},
$S:96}
A.dT.prototype={}
A.q0.prototype={
$0(){var s,r,q,p,o,n,m=this.a,l=m.h(0,"seq")
l.toString
A.ah(l)
l=m.h(0,"op_id")
l.toString
A.I(l)
s=m.h(0,"store")
s.toString
A.I(s)
r=m.h(0,"record_id")
r.toString
A.I(r)
q=m.h(0,"kind")
q.toString
q=A.ev(B.bW,A.I(q))
p=m.h(0,"payload_json")
p.toString
A.I(p)
o=m.h(0,"state")
o.toString
A.I(o)
o=A.aQ(m.h(0,"attempt_count"))
if(o==null)o=0
A.aQ(m.h(0,"next_retry_at"))
A.ai(m.h(0,"last_error"))
n=A.ai(m.h(0,"depends_on_op"))
m=m.h(0,"created_at")
m.toString
A.ah(m)
return new A.dT(l,s,r,q,p,o,n)},
$S:97}
A.x9.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.I(s)},
$S:44}
A.xa.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.I(s)},
$S:44}
A.ji.prototype={
ka(a){return a.a===this.w.a},
bS(){var s=0,r=A.h(t.J),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$bS=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:e=p.a
b=A
a=p.w
s=3
return A.a(e.mv(p.x,p.y),$async$bS)
case 3:d=b.Bf(a,a1,e.y,e.z)
c=p.z
if(c==null){q=d
s=1
break}e=A.l([],t.d)
for(o=d.length,n=c.$ti,m=n.i("a8<D.E>"),n=n.i("D.E"),l=t.N,k=t.X,j=0;j<d.length;d.length===o||(0,A.A)(d),++j){i=d[j]
h=A.E(l,k)
for(g=new A.a8(c,c.gl(0),m);g.k();){f=g.d
if(f==null)f=n.a(f)
if(i.H(f))h.j(0,f,i.h(0,f))}e.push(h)}q=e
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bS,r)},
jb(a){return A.GK(a,new A.ng(this),!1)},
me(a){return this.as.$1(a)},
jC(a,b){return null}}
A.ng.prototype={
$1(a){return this.a.a.e.Q+=a},
$S:8}
A.pl.prototype={
cl(a,b){return this.uN(a,b)},
uN(a,b){var s=0,r=A.h(t.X),q,p
var $async$cl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.el(A.m(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cl,r)},
hI(a,b,c,d){return this.vE(a,b,c,d)},
vE(a4,a5,a6,a7){var s=0,r=A.h(t.u),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$hI=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a=a4.vA(a5,a6)
a0=t.N
a1=new A.ju(A.E(a0,t.fw),a)
a2=!1
p=4
a.K("PRAGMA journal_mode=TRUNCATE")
f=a.f5("PRAGMA journal_mode")
n=f.gC(f).b[0]
if(J.av(n).toLowerCase()!=="truncate"){a0=A.w("journal_mode read-back was "+A.r(n)+", expected truncate")
throw A.b(a0)}f=a7==null
m=A.Hn(f?null:A.wD(a7))
e=t.bE.a(J.U(m,"stores"))
l=e==null?A.l([],t.aw):e
d=A.aQ(J.U(m,"maxDocBytes"))
k=d==null?19e5:d
c=A.Az(J.U(m,"destructiveBackup"))
j=c!==!1
i=A.Hm(A.Hr(f?null:A.wD(a7),"fieldCipher"))
if(A.H4(l,i)){a0=A.bi("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(a0)}h=new A.t4(A.E(a0,t.p))
s=7
return A.a(A.cz(h,a1,j,i,k,a5,B.cl,l),$async$hI)
case 7:g=a9
a2=!0
a0=a
f=t.S
q=new A.jY(a0,new A.tf(a0,g,A.E(f,t.oS),new A.rO(A.E(f,t.oc)),A.aU(t.be)))
s=1
break
p=2
s=6
break
case 4:p=3
a3=o.pop()
if(!a2)a.p()
throw a3
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hI,r)}}
A.jY.prototype={
cl(a,b){return this.uO(a,b)},
uO(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$cl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.a
if(n==null){q=A.xK(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.Do(n)
if(o==null){q=A.xK(0,"protocol_envelope","Payload must be a map",null)
s=1
break}m=A
s=3
return A.a(p.d.hu(new A.lo(a),o),$async$cl)
case 3:q=m.Dp(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cl,r)}}
A.lo.prototype={$il4:1}
A.wM.prototype={
$2(a,b){this.a.j(0,J.av(a),A.bG(b))},
$S:30}
A.wG.prototype={
$2(a,b){this.a.j(0,J.av(a),A.mp(b))},
$S:30}
A.kU.prototype={}
A.rO.prototype={}
A.x4.prototype={
$1(a){return A.Ho(a)},
$S:99}
A.wW.prototype={
$1(a){return B.b.cJ(a.c,new A.wV())},
$S:100}
A.wV.prototype={
$1(a){return a.e},
$S:45}
A.f3.prototype={
ap(){var s=this
return A.m(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.t9.prototype={
$2(a,b){return new A.X(J.av(a),b,t.eB)},
$S:102}
A.l_.prototype={
ap(){var s,r=this,q=A.E(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.ap())
else q.j(0,"r",r.c)
return q}}
A.t6.prototype={
ap(){var s,r=A.E(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.fW.prototype={
m(a){return"DatabaseWorkerClosedException: "+this.a},
$iL:1}
A.hE.prototype={
m(a){return"ProtocolEnvelopeException: "+this.a},
$iL:1}
A.kp.prototype={
m(a){return"RemoteLocalPocketException["+this.a+"]: "+this.b},
$iL:1}
A.S.prototype={
M(a,b,c){var s,r,q=this.a.h(0,a)
if(!c.b(q)){s=A.zO(c)
r=q==null?"null":A.zP(q)
throw A.b(A.d5('Missing or invalid "'+a+'" argument'+(" for "+b)+": expected "+s+", got "+r+"."))}return q},
U(a,b){var s=this.a
if(!s.H(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.d5('Invalid "'+a+'" argument: expected '+A.zO(b)+", got "+A.zP(s)+"."))
return b.a(s)}}
A.f4.prototype={}
A.hX.prototype={}
A.e1.prototype={}
A.wJ.prototype={
$2(a,b){var s,r,q=J.av(a)
if(t.f.b(b))this.a.j(0,q,A.fC(b))
else{s=this.a
if(t.j.b(b)){r=J.aG(b,new A.wI(),t.z)
r=A.P(r,r.$ti.i("R.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:28}
A.wI.prototype={
$1(a){return t.f.b(a)?A.fC(a):a},
$S:29}
A.l3.prototype={
it(a,b){return this.oW(a,b)},
oW(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$it=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.ik(b.d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$it,r)},
l5(a){var s,r,q,p,o,n=a.h(0,"type"),m=a.h(0,"operation"),l=a.h(0,"compilerVersion"),k=a.h(0,"store"),j=a.h(0,"schemaVersion"),i=a.h(0,"schemaFingerprint"),h=a.h(0,"argumentCount"),g=a.h(0,"sql"),f=a.h(0,"args")
if(!J.u(n,"query_plan")||typeof m!="string"||!B.cs.D(0,m)||!J.u(l,2)||typeof k!="string"||!A.aD(j)||typeof i!="string"||!A.aD(h)||typeof g!="string"||!t.j.b(f))throw A.b(A.d5("Malformed or stale compiled query plan."))
s=this.c.aa(k).a
r=A.aB(B.l.v(B.i.v(A.aj(s.ap()))).a)
if(s.b!==j||r!==i||J.aw(f)!==h||!B.a.O(g,"SELECT "))throw A.b(A.d5("Stale or mismatched compiled query plan."))
q=a.h(0,"projection")
a.h(0,"limit")
a.h(0,"shape")
n.toString
A.I(n)
p=t.X
o=J.aG(f,A.Ba(),p)
o=A.P(o,o.$ti.i("R.E"))
p=A.d0(o,p)
o=t.j.b(q)?J.eq(q,t.N):null
return new A.r0(m,k,g,p,o)},
ik(a){return this.oq(a)},
oq(a){var s=0,r=A.h(t.G),q,p=this,o,n,m,l,k
var $async$ik=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.l5(a)
n=a.h(0,"sessionId")
m=A.aD(n)?new A.tg(p.c8(n)):new A.th(p)
l=a.h(0,"pageLimit")
k=A.aD(l)?l:null
q=A.wN(p.c,m,o,k)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ik,r)},
cE(a,b){return this.oR(a,b)},
oR(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$cE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cd(),$async$cE)
case 3:o=p.f,n=new A.aL(o,o.r,o.e,A.o(o).i("aL<2>"))
case 4:if(!n.k()){s=5
break}s=6
return A.a(n.d.a.$0(),$async$cE)
case 6:s=4
break
case 5:o.ai(0)
p.r.d.ai(0)
o=p.d
if(o!=null&&(o.b.a.a&30)===0)o.b.aD(new A.fW("Database closed."))
p.d=null
o=p.at
o=o==null?null:o.A()
s=7
return A.a(o instanceof A.p?o:A.bk(o,t.H),$async$cE)
case 7:p.at=null
p.as.ai(0)
s=8
return A.a(p.c.p(),$async$cE)
case 8:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cE,r)},
cd(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$cd=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=q.x
q.x=null
p=q.z
p=p==null?null:p.A()
s=2
return A.a(p instanceof A.p?p:A.bk(p,t.H),$async$cd)
case 2:q.z=null
s=n!=null?3:4
break
case 3:o=n.b
s=5
return A.a(n.aA(),$async$cd)
case 5:s=6
return A.a(o.e_(),$async$cd)
case 6:o.e_()
p=o.ay
if((p.c&4)===0)p.p()
o.x.a.p()
case 4:q.Q=q.y=null
return A.e(null,r)}})
return A.f($async$cd,r)},
bp(a,b){return this.nY(a,b)},
nY(a,b){var s=0,r=A.h(t.H),q,p,o
var $async$bp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.h(0,"action")
if(typeof o!="string")throw A.b(A.bi("Mutation action must be a string.",null))
q=t.b.a(A.mp(b.h(0,"record")))
p=A.ai(b.h(0,"id"))
case 2:switch(o){case"put":s=4
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
case 4:q.toString
s=10
return A.a(a.hM(q),$async$bp)
case 10:s=3
break
case 5:p.toString
q.toString
s=11
return A.a(a.mf(p,q),$async$bp)
case 11:s=3
break
case 6:p.toString
s=12
return A.a(a.lF(p),$async$bp)
case 12:s=3
break
case 7:p.toString
s=13
return A.a(a.mp(p),$async$bp)
case 13:s=3
break
case 8:p.toString
s=14
return A.a(a.jI(p),$async$bp)
case 14:s=3
break
case 9:throw A.b(A.bi("Unknown mutation action: "+o,null))
case 3:return A.e(null,r)}})
return A.f($async$bp,r)},
il(a,b,c){a.a.cM(A.el(A.m(["v",2,"op","worker_event","watchId",b,"value",A.bG(c)],t.N,t.X)))},
c8(a){var s
if(a!=null){s=this.d
s=s==null||s.a!==a}else s=!0
if(s)throw A.b(A.w("No active transaction session matching ID "+A.r(a)+"."))
s=this.d
s.toString
return s}}
A.tg.prototype={
$2(a,b){return this.a.c.b.ae(a,b)},
$S:47}
A.th.prototype={
$2(a,b){return this.a.c.mv(a,b)},
$S:47}
A.tf.prototype={
hu(a,b){return this.v1(a,b)},
v1(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hu=A.c(function(c,a0){if(c===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.as.t(0,a)
if(n.at==null){i=n.c.a$.b
n.at=new A.aY(i,A.o(i).i("aY<1>")).aQ(new A.ti(n))}m=null
try{m=A.Ea(b)}catch(d){l=A.M(d)
i=J.av(l)
q=new A.e1("protocol_envelope",i,null,0)
s=1
break}if(m.a!==2){i=m.b
q=new A.e1("protocol_mismatch","Version mismatch: expected 2, got "+m.a,A.m(["expected",2,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.ij(a,m),$async$hu)
case 7:k=a0
i=m.b
q=new A.hX(k,i)
s=1
break
p=2
s=6
break
case 4:p=3
e=o.pop()
j=A.M(e)
i=m.b
g=J.av(j)
f=A.m(["type",A.Hu(j)],t.N,t.X)
q=new A.e1("localpocket",g,f,i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hu,r)},
ij(a,b){return this.op(a,b)},
op(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$ij=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.ax
if(l===$){o=A.m(["health",p.gpy(),"capabilities",p.goO(),"get",p.gpw(),"mutate_batch",p.gpC(),"compiled_query",p.goV(),"open",p.gpE(),"analyze",p.goM(),"wal_checkpoint",p.gqn(),"vacuum",p.gql(),"prune_outbox",p.gpI(),"compact",p.goS(),"run_maintenance",p.gpO(),"tx_begin",p.gq5(),"tx_get",p.gq9(),"tx_mutate_batch",p.gqb(),"tx_savepoint",p.gqj(),"tx_rollback_to",p.gqh(),"tx_release",p.gqd(),"tx_commit",p.gq7(),"tx_rollback",p.gqf(),"watch_query",p.gqt(),"watch_one",p.gqr(),"watch_cancel",p.gqp(),"sync_start",p.gpY(),"sync_stop",p.gq1(),"sync_now",p.gpQ(),"sync_pause",p.gpS(),"sync_resume",p.gpU(),"sync_set_connectivity",p.gpW(),"sync_update_auth",p.gq3(),"sync_status",p.gq_(),"file_upload_begin",p.gpp(),"file_upload_chunk",p.gpr(),"file_upload_finish",p.gpt(),"file_upload_abort",p.gpn(),"file_list",p.gph(),"file_open",p.gpj(),"file_remove",p.gpl(),"file_gc",p.gpf(),"file_enforce_storage_cap",p.gpd(),"conflicts_list",p.gp6(),"conflicts_get",p.gp0(),"conflicts_resolve",p.gp8(),"conflicts_accept_local",p.goX(),"conflicts_accept_remote",p.goZ(),"conflicts_watch",p.gpa(),"close",p.goQ()],t.N,t.n1)
p.ax!==$&&A.xg()
p.ax=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.d5("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ij,r)}}
A.ti.prototype={
$1(a){var s,r,q,p=A.m(["v",2,"op","record_event","event",A.bG(a.ap())],t.N,t.X)
for(s=this.a.as,s=A.fg(s,s.r,A.o(s).c),r=s.$ti.c;s.k();){q=s.d;(q==null?r.a(q):q).a.cM(A.el(p))}},
$S:105}
A.l1.prototype={
fp(a,b){return this.p7(a,b)},
p7(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$fp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.N
n=new A.S(b.d).U("store",o)
m=p.c.ax
m===$&&A.v()
l=J
s=3
return A.a(m.eD(n),$async$fp)
case 3:m=l.aG(d,A.B9(),t.G)
m=A.P(m,m.$ti.i("R.E"))
q=A.m(["conflicts",m],o,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fp,r)},
fo(a,b){return this.p5(a,b)},
p5(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fo=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=new A.S(b.d)
m=t.N
l=n.M("store","conflicts_get",m)
k=n.M("id","conflicts_get",m)
m=p.c.ax
m===$&&A.v()
s=3
return A.a(m.d3(l,k),$async$fo)
case 3:o=d
q=o==null?null:A.Bj(o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fo,r)},
fq(a,b){return this.p9(a,b)},
p9(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.d
m=new A.S(n)
l=t.N
k=m.M("store","conflicts_resolve",l)
j=m.M("id","conflicts_resolve",l)
n=A.mp(n.h(0,"merged"))
n.toString
t.G.a(n)
o=p.c.ax
o===$&&A.v()
s=3
return A.a(o.dP(j,n,k),$async$fq)
case 3:q=A.m(["ok",!0],l,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fq,r)},
fm(a,b){return this.oY(a,b)},
oY(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.S(b.d)
n=t.N
m=o.M("store","conflicts_accept_local",n)
l=o.M("id","conflicts_accept_local",n)
k=p.c.ax
k===$&&A.v()
s=3
return A.a(k.el(m,l),$async$fm)
case 3:q=A.m(["ok",!0],n,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fm,r)},
fn(a,b){return this.p_(a,b)},
p_(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fn=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.S(b.d)
n=t.N
m=o.M("store","conflicts_accept_remote",n)
l=o.M("id","conflicts_accept_remote",n)
k=p.c.ax
k===$&&A.v()
s=3
return A.a(k.dt(m,l),$async$fn)
case 3:q=A.m(["ok",!0],n,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fn,r)},
iu(a,b){return this.pb(a,b)},
pb(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$iu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.S(b.d)
n=t.S
m=o.M("watchId","conflicts_watch",n)
l=t.N
k=o.U("store",l)
j=p.c.ax
j===$&&A.v()
p.f.j(0,m,new A.f5(new A.tb(j.wt(k).aQ(new A.tc(p,a,m)))))
q=A.m(["watchId",m],l,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iu,r)}}
A.tc.prototype={
$1(a){var s=J.aG(a,A.B9(),t.G)
s=A.P(s,s.$ti.i("R.E"))
this.a.il(this.b,this.c,s)},
$S:106}
A.tb.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.A(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.l2.prototype={
fA(a,b){return this.px(a,b)},
px(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.S(b.d)
n=t.N
m=o.M("store","get",n)
l=o.M("id","get",n)
n=p.c
if(A.kP(n)!=null)A.x(A.w(u.L))
k=A
s=3
return A.a(new A.dB(n,n.aa(m),null,null).bF(l),$async$fA)
case 3:q=k.bG(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fA,r)},
e5(a,b){return this.pD(a,b)},
pD(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$e5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=new A.S(b.d)
m=t.N
l=n.M("store","mutate_batch",m)
k=J.eq(n.M("mutations","mutate_batch",t.W),t.G)
s=J.aw(k.a)===1?3:4
break
case 3:o=p.c
if(A.kP(o)!=null)A.x(A.w(u.L))
s=5
return A.a(p.bp(new A.dB(o,o.aa(l),null,null),k.gC(k)),$async$e5)
case 5:q=A.m(["ok",!0],m,t.y)
s=1
break
case 4:s=6
return A.a(p.c.V(new A.td(p,l,k),t.P),$async$e5)
case 6:q=A.m(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e5,r)},
fB(a,b){return this.pF(a,b)},
pF(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=new A.S(b.d).U("stores",t.W)
s=g!=null?3:4
break
case 3:o=J.K(g),n=p.c,m=n.ch,l=t.X,k=t.f,j=n.y==null
case 5:if(!o.k()){s=6
break}i=o.gn()
if(!k.b(i))A.x(A.a1("Schema must be a map: "+A.r(i),null,null))
h=A.z_(A.fC(i),l)
if(B.b.cJ(h.c,new A.te())&&j)throw A.b(A.bi('Store "'+h.a+'" declares encrypted fields but no fieldCipher was provided.',null))
s=!m.H(h.a)?7:8
break
case 7:s=9
return A.a(n.bf(h),$async$fB)
case 9:case 8:s=5
break
case 6:case 4:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fB,r)}}
A.td.prototype={
$1(a){return this.n3(a)},
n3(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.cf(q.b)
p=q.c,o=p.$ti,p=new A.a8(p,p.gl(0),o.i("a8<D.E>")),n=q.a,o=o.i("D.E")
case 2:if(!p.k()){s=3
break}m=p.d
s=4
return A.a(n.bp(l,m==null?o.a(m):m),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.te.prototype={
$1(a){return a.e},
$S:45}
A.l5.prototype={
iC(a,b){return this.pq(a,b)},
pq(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$iC=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=new A.S(b.d)
i=p.w++
h=t.N
g=j.M("store","file_upload_begin",h)
f=j.M("recordId","file_upload_begin",h)
e=j.U("field",h)
if(e==null)e="imgs"
o=j.U("name",h)
if(o==null)o="blob.bin"
n=t.S
m=j.M("size","file_upload_begin",n)
l=j.U("expectedSha256",h)
k=p.r.d
if(k.a>=16)A.x(A.bi("Maximum concurrent uploads exceeded (16).",null))
if(m<0||m>4294967296)A.x(A.bi("Invalid file size: "+m,null))
k.j(0,i,new A.kU(g,f,e,o,m,l,A.l([],t.bs)))
q=A.m(["uploadId",i],h,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iC,r)},
iD(a,b){return this.ps(a,b)},
ps(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$iD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=b.d
i=new A.S(j).M("uploadId","file_upload_chunk",t.S)
j=A.mp(j.h(0,"chunk"))
j.toString
j=new Uint8Array(A.br(t.L.a(j)))
o=p.r.d
n=o.h(0,i)
if(n==null)A.x(A.bi("Unknown upload session: "+i,null))
m=j.length
if(m>262144){o.F(0,i)
A.x(A.bi("Chunk too large: "+m+" > 262144",null))}l=n.w
k=n.f
if(l+m>k){o.F(0,i)
A.x(A.bi("Upload exceeds declared size "+k,null))}n.x.push(j)
n.w+=m
q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iD,r)},
fw(a,b){return this.pu(a,b)},
pu(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=new A.S(b.d).M("uploadId","file_upload_finish",t.S)
f=p.r.d.F(0,g)
if(f==null)A.x(A.bi("Unknown upload session: "+g,null))
o=f.w
n=f.f
if(o!==n)A.x(A.bi("Upload size mismatch: expected "+n+" but got "+o,null))
o=p.c.ay
o===$&&A.v()
m=f.b
l=f.c
k=new A.tj(f).$0()
j=f.d
i=f.e
s=3
return A.a(o.dv(k,f.r,n,j,i,l,m),$async$fw)
case 3:h=d
q=A.m(["refId",h.a,"hash",h.e,"state",h.r,"remoteName",h.f],t.N,t.x)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fw,r)},
iB(a,b){return this.po(a,b)},
po(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$iB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.r.d.F(0,new A.S(b.d).M("uploadId","file_upload_abort",t.S))
q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iB,r)},
fu(a,b){return this.pi(a,b)},
pi(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$fu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=new A.S(b.d)
j=p.c.ay
j===$&&A.v()
o=t.N
n=k.M("store","file_list",o)
m=k.M("recordId","file_list",o)
l=k.U("field",o)
i=J
s=3
return A.a(j.dI(l==null?"imgs":l,m,n),$async$fu)
case 3:j=i.aG(d,A.HE(),t.G)
j=A.P(j,j.$ti.i("R.E"))
q=A.m(["refs",j],o,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fu,r)},
df(a,b){return this.pk(a,b)},
pk(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c
var $async$df=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=new A.S(b.d)
c=m.c.ay
c===$&&A.v()
i=t.N
h=d.M("store","file_open",i)
g=d.M("recordId","file_open",i)
f=d.U("field",i)
if(f==null)f="imgs"
e=d.U("index",t.S)
if(e==null)e=0
s=3
return A.a(c.eI(f,e,g,d.U("refId",i),h),$async$df)
case 3:l=a1
k=A.l([],t.t)
h=new A.bR(A.bF(l,"stream",t.K),t.lj)
p=4
case 7:s=9
return A.a(h.k(),$async$df)
case 9:if(!a1){s=8
break}j=h.gn()
J.Cp(k,j)
s=7
break
case 8:n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
s=10
return A.a(h.A(),$async$df)
case 10:s=n.pop()
break
case 6:q=A.m(["bytes",A.bG(new Uint8Array(A.br(k))),"size",J.aw(k)],i,t.X)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$df,r)},
fv(a,b){return this.pm(a,b)},
pm(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$fv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=new A.S(b.d)
i=p.c.ay
i===$&&A.v()
o=t.N
n=j.M("store","file_remove",o)
m=j.M("recordId","file_remove",o)
l=j.U("field",o)
if(l==null)l="imgs"
k=j.U("index",t.S)
if(k==null)k=0
s=3
return A.a(i.eR(0,l,k,m,j.U("refId",o),n),$async$fv)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fv,r)},
ft(a,b){return this.pg(a,b)},
pg(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$ft=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=new A.S(b.d)
k=p.c.ay
k===$&&A.v()
o=t.S
n=l.U("blobGraceMs",o)
n=A.dF(0,n==null?6048e5:n,0)
m=l.U("tmpGraceMs",o)
j=A
s=3
return A.a(k.bZ(n,A.dF(0,m==null?864e5:m,0)),$async$ft)
case 3:q=j.m(["cleaned",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ft,r)},
fs(a,b){return this.pe(a,b)},
pe(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fs=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.c.ay
n===$&&A.v()
o=t.S
m=A
s=3
return A.a(n.ci(new A.S(b.d).M("maxBytes","file_enforce_storage_cap",o)),$async$fs)
case 3:q=m.m(["evicted",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fs,r)}}
A.tj.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.x,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.bC(A.dg(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.A)(l),++j
s=3
break
case 5:case 1:return A.bC(null,0,r)
case 2:return A.bC(o.at(-1),1,r)}})
var s=0,r=A.AM($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.B0(r)},
$S:107}
A.l6.prototype={
iE(a,b){return this.pz(a,b)},
pz(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$iE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.a
n=o.f5("SELECT sqlite_version() AS v")
m=n.gC(n).h(0,"v")
o=o.f5("PRAGMA journal_mode")
q=A.m(["ok",!0,"sqliteVersion",m,"journalMode",o.gC(o).b[0]],t.N,t.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iE,r)},
is(a,b){return this.oP(a,b)},
oP(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$is=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c.c
n=p.a.f5("PRAGMA journal_mode")
q=A.m(["storage","opfs","durable",!0,"persistent",!0,"journal",n.gC(n).b[0],"multiTabStorage",!0,"multiTabSync",!1,"worker",!0,"sqliteVersion",o.a,"hasStrict",o.b,"walSupported",o.c,"hasFts5",o.d],t.N,t.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$is,r)},
fk(a,b){return this.oN(a,b)},
oN(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.N
s=3
return A.a(p.c.du(new A.S(b.d).U("store",o)),$async$fk)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fk,r)},
fQ(a,b){return this.qo(a,b)},
qo(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$fQ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.eZ(),$async$fQ)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fQ,r)},
fP(a,b){return this.qm(a,b)},
qm(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$fP=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.eY(new A.S(b.d).U("pages",t.S)),$async$fP)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fP,r)},
fC(a,b){return this.pJ(a,b)},
pJ(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fC=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.S
n=new A.S(b.d).U("maxEntries",o)
if(n==null)n=1e4
m=A
s=3
return A.a(p.c.eL(n),$async$fC)
case 3:q=m.m(["pruned",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fC,r)},
fl(a,b){return this.oT(a,b)},
oT(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.S(b.d)
n=t.N
m=o.M("store","compact",n)
l=t.S
k=o.M("olderThanMs","compact",l)
j=A
s=3
return A.a(p.c.dz(m,o.U("nowMs",l),A.dF(0,k,0)),$async$fl)
case 3:q=j.m(["compacted",d],n,l)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fl,r)},
fD(a,b){return this.pP(a,b)},
pP(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.S(b.d).U("compactOlderThanMs",t.S)
s=3
return A.a(p.c.cY(A.dF(0,o==null?7776e6:o,0)),$async$fD)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fD,r)}}
A.w1.prototype={
jf(){var s=0,r=A.h(t.q),q,p=this,o
var $async$jf=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=A.zF(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jf,r)},
jJ(a){return this.w0(a)},
w0(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$jJ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
q=A.zF(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jJ,r)}}
A.l7.prototype={
dg(a,b){return this.pZ(a,b)},
pZ(a4,a5){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$dg=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:a1=new A.S(a5.d)
a2=t.N
a3=a1.U("baseUrl",a2)
if(a3==null||a3.length===0)throw A.b(A.bi("syncStart requires baseUrl.",null))
s=3
return A.a(p.cd(),$async$dg)
case 3:o=a1.U("token",a2)
n=a1.U("scopeId",a2)
if(n==null)n="web-sync"
m=new A.w1(o,n)
l=A.kX(a3)
k=p.c
j=k.ch
i=A.o(j).i("Z<1>")
j=A.P(new A.Z(j,i),i.i("n.E"))
i=t.hw
h=A.dY(null,null,i)
g=$.t.h(0,B.cz)
f=g==null?null:t.dF.a(g).$0()
if(f==null)f=new A.jd(A.l([],t.E))
f=new A.qc(f)
e=new A.ki(l,m,j,n,f,h,A.E(a2,t.hU),A.E(a2,i))
i=new A.mO(m)
e.y=i
e.z=new A.qe(f,l,i)
d=A.ya()
i=A.dY(null,null,t.n6)
f=A.dY(null,null,t.em)
h=t.H
j=A.c_(null,h)
c=new A.mD(A.c_(null,h))
b=A.c_(B.G,t.mv)
a=A.l([],t.s)
h=A.c_(null,h)
a0=new A.rv(A.HA(),k.Q)
h=new A.kK(k,e,a0,new A.to(a4),B.O,i,f,j,c,A.aU(a2),b,a,h)
l=h.e=new A.rG(k,B.a.q(A.aB(B.l.v(B.i.v(l.m(0)+"|"+n)).a),0,12))
j=new A.op(k,e,a0,k.x)
h.x=j
j=new A.qK(k,e,a0,l,j,c)
h.f=j
h.r=new A.rt(k,e,a0,l,j)
h.w=new A.qT(k,e,a0,h.gqN(),e.as)
d.b=h
p.y=m
p.x=d.ba()
h=d.ba().ay
p.z=new A.aY(h,A.o(h).i("aY<1>")).aQ(new A.tp(p,a4))
s=4
return A.a(d.ba().av(),$async$dg)
case 4:s=5
return A.a(e.fa(),$async$dg)
case 5:q=A.m(["ok",!0,"state",d.ba().y.b],a2,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dg,r)},
fI(a,b){return this.q2(a,b)},
q2(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$fI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cd(),$async$fI)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fI,r)},
fE(a,b){return this.pR(a,b)},
pR(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x
if(n==null)throw A.b(A.w("Sync is not started."))
n.p1.push("cycle")
s=3
return A.a(n.cG(),$async$fE)
case 3:o=d
q=A.m(["pulled",o.a,"swept",o.b,"pushed",o.c,"deadLettered",o.d,"discarded",o.f,"hadError",o.r],t.N,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fE,r)},
fF(a,b){return this.pT(a,b)},
pT(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.x
if(o==null)throw A.b(A.w("Sync is not started."))
s=3
return A.a(o.be(),$async$fF)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fF,r)},
fG(a,b){return this.pV(a,b)},
pV(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.x
if(o==null)throw A.b(A.w("Sync is not started."))
s=3
return A.a(o.b3(),$async$fG)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fG,r)},
fH(a,b){return this.pX(a,b)},
pX(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x
if(n==null)throw A.b(A.w("Sync is not started."))
o=t.y
s=3
return A.a(n.f7(new A.S(b.d).M("online","sync_set_connectivity",o)),$async$fH)
case 3:q=A.m(["ok",!0],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fH,r)},
fJ(a,b){return this.q4(a,b)},
q4(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.y
m=p.x
if(n==null||m==null)throw A.b(A.w("Sync is not started."))
o=t.N
n.a=new A.S(b.d).U("token",o)
s=3
return A.a(m.dJ(),$async$fJ)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fJ,r)},
iG(a,b){return this.q0(a,b)},
q0(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$iG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.Q
if(o==null){o=t.N
o=A.m(["state","closed"],o,o)}else o=A.zQ(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iG,r)}}
A.to.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.a.cM(A.el(A.m(["v",2,"op","auth_required"],t.N,t.X)))
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.tp.prototype={
$1(a){this.a.Q=a
this.b.a.cM(A.el(A.m(["v",2,"op","sync_status","status",A.zQ(a)],t.N,t.X)))},
$S:108}
A.vO.prototype={}
A.l8.prototype={
fK(a,b){return this.q6(a,b)},
q6(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(p.d!=null)throw A.b(A.w("A transaction session is already active on this database."))
o=p.e++
n=$.t
m=t.D
l=t.h
k=new A.p(n,m)
p.c.V(new A.tq(p,o,new A.az(new A.p(n,m),l),new A.az(k,l)),t.P).hc(new A.tr(p))
s=3
return A.a(k,$async$fK)
case 3:q=A.m(["sessionId",o],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fK,r)},
fL(a,b){return this.qa(a,b)},
qa(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.d
l=p.c8(new A.S(m).U("sessionId",t.S))
k=new A.S(m)
m=t.N
o=k.M("store","tx_get",m)
n=k.M("id","tx_get",m)
j=A
s=3
return A.a(l.c.cf(o).bF(n),$async$fL)
case 3:q=j.bG(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fL,r)},
fM(a,b){return this.qc(a,b)},
qc(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:i=b.d
h=p.c8(new A.S(i).U("sessionId",t.S))
g=new A.S(i)
i=t.N
o=g.M("store","tx_mutate_batch",i)
n=J.eq(g.M("mutations","tx_mutate_batch",t.W),t.G)
m=h.c.cf(o)
l=n.$ti,k=new A.a8(n,n.gl(0),l.i("a8<D.E>")),l=l.i("D.E")
case 3:if(!k.k()){s=4
break}j=k.d
s=5
return A.a(p.bp(m,j==null?l.a(j):j),$async$fM)
case 5:s=3
break
case 4:q=A.m(["ok",!0],i,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fM,r)},
fO(a,b){return this.qk(a,b)},
qk(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fO=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c8(new A.S(b.d).U("sessionId",t.S))
n=o.d
m="lp_sp_wire_"+n.length
n.push(m)
s=3
return A.a(o.c.b.K("SAVEPOINT "+m),$async$fO)
case 3:n=t.N
q=A.m(["savepoint",m],n,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fO,r)},
e6(a,b){return this.qi(a,b)},
qi(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$e6=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=p.c8(new A.S(o).U("sessionId",t.S))
m=t.N
l=new A.S(o).M("savepoint","tx_rollback_to",m)
o=n.c.b
s=3
return A.a(o.K("ROLLBACK TO "+l),$async$e6)
case 3:s=4
return A.a(o.K("RELEASE "+l),$async$e6)
case 4:B.b.F(n.d,l)
q=A.m(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e6,r)},
fN(a,b){return this.qe(a,b)},
qe(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$fN=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=p.c8(new A.S(o).U("sessionId",t.S))
m=t.N
l=new A.S(o).M("savepoint","tx_release",m)
s=3
return A.a(n.c.b.K("RELEASE "+l),$async$fN)
case 3:B.b.F(n.d,l)
q=A.m(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fN,r)},
iH(a,b){return this.q8(a,b)},
q8(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$iH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c8(new A.S(b.d).U("sessionId",t.S))
p.d=null
o.b.ar()
q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iH,r)},
iI(a,b){return this.qg(a,b)},
qg(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$iI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c8(new A.S(b.d).U("sessionId",t.S))
p.d=null
o.b.aD(new A.kp("rollback","Transaction rolled back."))
q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iI,r)}}
A.tq.prototype={
$1(a){return this.n4(a)},
n4(a){var s=0,r=A.h(t.P),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.c
q.a.d=new A.vO(q.b,p,a,A.l([],t.s))
q.d.ar()
s=2
return A.a(p.a,$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.tr.prototype={
$1(a){this.a.d=null},
$S:25}
A.f5.prototype={}
A.l9.prototype={
fT(a,b){return this.qu(a,b)},
qu(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.d
l=new A.S(m).M("watchId","watch_query",t.S)
k=p.l5(m)
m=p.c
o=new A.ji(m.aa(k.d).a,k.r,k.w,k.y,null,new A.ty(p,a,l),m,B.az)
n=new A.f5(new A.tz(o))
j=J
s=3
return A.a(A.iR(new A.tA(p,l,n),o.gva(),new A.tB(p,l,n),o.gJ(),t.J),$async$fT)
case 3:m=j.aG(d,A.Bb(),t.X)
m=A.P(m,m.$ti.i("R.E"))
q=A.m(["watchId",l,"items",m],t.N,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fT,r)},
fS(a,b){return this.qs(a,b)},
qs(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$fS=A.c(function(c,a0){if(c===1)return A.d(a0,r)
for(;;)switch(s){case 0:o=new A.S(b.d)
n=o.M("watchId","watch_one",t.S)
m=t.N
l=o.M("store","watch_one",m)
k=o.M("id","watch_one",m)
j=p.c
i=j.aa(l)
h=A.ya()
g=new A.f5(new A.tt(h))
f=A
e=n
d=A
s=3
return A.a(A.iR(new A.tu(p,n,g),new A.tv(p,l,k),new A.tw(p,n,g),new A.tx(p,h,new A.hx(i,k,j,B.az),a,n),t.b),$async$fS)
case 3:q=f.m(["watchId",e,"item",d.bG(a0)],m,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fS,r)},
fR(a,b){return this.qq(a,b)},
qq(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.f.F(0,new A.S(b.d).M("watchId","watch_cancel",t.S))
s=o!=null?3:4
break
case 3:s=5
return A.a(o.a.$0(),$async$fR)
case 5:case 4:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fR,r)}}
A.ty.prototype={
$1(a){return this.a.il(this.b,this.c,a)},
$S:109}
A.tz.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.hi()
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.tB.prototype={
$0(){var s=this.c
this.a.f.j(0,this.b,s)
return s},
$S:0}
A.tA.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.f
o=q.b
n=q.c
if(p.h(0,o)===n)p.F(0,o)
s=2
return A.a(n.a.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.tt.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.ba().A(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.tx.prototype={
$0(){var s=this
s.b.sm_(s.c.ns().aQ(new A.ts(s.a,s.d,s.e)))},
$S:0}
A.ts.prototype={
$1(a){this.a.il(this.b,this.c,a)},
$S:110}
A.tw.prototype={
$0(){var s=this.c
this.a.f.j(0,this.b,s)
return s},
$S:0}
A.tv.prototype={
$0(){var s=this.a.c
if(A.kP(s)!=null)A.x(A.w(u.L))
return new A.dB(s,s.aa(this.b),null,null).bF(this.c)},
$S:111}
A.tu.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.f
o=q.b
n=q.c
if(p.h(0,o)===n)p.F(0,o)
s=2
return A.a(n.a.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.m7.prototype={}
A.m8.prototype={}
A.m9.prototype={}
A.ma.prototype={}
A.mb.prototype={}
A.mc.prototype={}
A.md.prototype={}
A.nA.prototype={
tc(a){var s,r=null
A.B3("absolute",A.l([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.aS(a)>0&&!s.cn(a)
if(s)return a
s=A.Be()
return this.ma(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
tP(a){var s,r,q=A.eH(a,this.a)
q.eS()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.b.jL(s)
q.e.pop()
q.eS()
return q.m(0)},
ma(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.l([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.B3("join",s)
return this.vh(new A.bp(s,t.v))},
vh(a){var s,r,q,p,o,n,m,l,k
for(s=a.gu(0),r=new A.dc(s,new A.nB(),a.$ti.i("dc<n.E>")),q=this.a,p=!1,o=!1,n="";r.k();){m=s.gn()
if(q.cn(m)&&o){l=A.eH(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.q(k,0,q.dQ(k,!0))
l.b=n
if(q.eH(n))l.e[0]=q.gd5()
n=l.m(0)}else if(q.aS(m)>0){o=!q.cn(m)
n=m}else{if(!(m.length!==0&&q.jc(m[0])))if(p)n+=q.gd5()
n+=m}p=q.eH(m)}return n.charCodeAt(0)==0?n:n},
f9(a,b){var s=A.eH(b,this.a),r=s.d,q=A.a7(r).i("bj<1>")
r=A.P(new A.bj(r,new A.nC(),q),q.i("n.E"))
s.d=r
q=s.b
if(q!=null)B.b.az(r,0,q)
return s.d},
jB(a){var s
if(!this.qL(a))return a
s=A.eH(a,this.a)
s.jA()
return s.m(0)},
qL(a){var s,r,q,p,o,n,m,l=this.a,k=l.aS(a)
if(k!==0){if(l===$.mx())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.bV(n)){if(l===$.mx()&&n===47)return!0
if(q!=null&&l.bV(q))return!0
if(q===46)m=o==null||o===46||l.bV(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.bV(q))return!0
if(q===46)l=o==null||l.bV(o)||o===46
else l=!1
if(l)return!0
return!1},
w2(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.aS(a)
if(l<=0)return o.jB(a)
s=A.Be()
if(m.aS(s)<=0&&m.aS(a)>0)return o.jB(a)
if(m.aS(a)<=0||m.cn(a))a=o.tc(a)
if(m.aS(a)<=0&&m.aS(s)>0)throw A.b(A.zr(n+a+'" from "'+s+'".'))
r=A.eH(s,m)
r.jA()
q=A.eH(a,m)
q.jA()
l=r.d
if(l.length!==0&&l[0]===".")return q.m(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.jG(l,p)
else l=!1
if(l)return q.m(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.jG(l[0],p[0])}else l=!1
if(!l)break
B.b.hQ(r.d,0)
B.b.hQ(r.e,1)
B.b.hQ(q.d,0)
B.b.hQ(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.zr(n+a+'" from "'+s+'".'))
l=t.N
B.b.jt(q.d,0,A.aE(p,"..",!1,l))
p=q.e
p[0]=""
B.b.jt(p,1,A.aE(r.d.length,m.gd5(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.b.ga_(m)==="."){B.b.jL(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.eS()
return q.m(0)},
mg(a){var s,r,q=this,p=A.AQ(a)
if(p.gaP()==="file"&&q.a===$.iV())return p.m(0)
else if(p.gaP()!=="file"&&p.gaP()!==""&&q.a!==$.iV())return p.m(0)
s=q.jB(q.a.jF(A.AQ(p)))
r=q.w2(s)
return q.f9(0,r).length>q.f9(0,s).length?s:r}}
A.nB.prototype={
$1(a){return a!==""},
$S:12}
A.nC.prototype={
$1(a){return a.length!==0},
$S:12}
A.wu.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:112}
A.pc.prototype={
nc(a){var s=this.aS(a)
if(s>0)return B.a.q(a,0,s)
return this.cn(a)?a[0]:null},
jG(a,b){return a===b}}
A.kd.prototype={
gtt(){var s=this,r=t.N,q=new A.kd(s.a,s.b,s.c,A.jW(s.d,!0,r),A.jW(s.e,!0,r))
q.eS()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.b.ga_(r)},
eS(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.ga_(s)===""))break
B.b.jL(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
jA(){var s,r,q,p,o,n=this,m=A.l([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.A)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.b.jt(m,0,A.aE(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.aE(m.length+1,s.gd5(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.eH(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.mx())n.b=A.B(r,"/","\\")
n.eS()},
m(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.b.ga_(q)
return o.charCodeAt(0)==0?o:o}}
A.ke.prototype={
m(a){return"PathException: "+this.a},
$iL:1}
A.rs.prototype={
m(a){return this.gb2()}}
A.qy.prototype={
jc(a){return B.a.D(a,"/")},
bV(a){return a===47},
eH(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
dQ(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
aS(a){return this.dQ(a,!1)},
cn(a){return!1},
jF(a){var s
if(a.gaP()===""||a.gaP()==="file"){s=a.gbd()
return A.yk(s,0,s.length,B.k,!1)}throw A.b(A.O("Uri "+a.m(0)+" must have scheme 'file:'.",null))},
gb2(){return"posix"},
gd5(){return"/"}}
A.rR.prototype={
jc(a){return B.a.D(a,"/")},
bV(a){return a===47},
eH(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.cg(a,"://")&&this.aS(a)===s},
dQ(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.bU(a,"/",B.a.a6(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.O(a,"file://"))return q
p=A.Bi(a,q+1)
return p==null?q:p}}return 0},
aS(a){return this.dQ(a,!1)},
cn(a){return a.length!==0&&a.charCodeAt(0)===47},
jF(a){return a.m(0)},
gb2(){return"url"},
gd5(){return"/"}}
A.ta.prototype={
jc(a){return B.a.D(a,"/")},
bV(a){return a===47||a===92},
eH(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
dQ(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.bU(a,"\\",2)
if(s>0){s=B.a.bU(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.Bo(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
aS(a){return this.dQ(a,!1)},
cn(a){return this.aS(a)===1},
jF(a){var s,r
if(a.gaP()!==""&&a.gaP()!=="file")throw A.b(A.O("Uri "+a.m(0)+" must have scheme 'file:'.",null))
s=a.gbd()
if(a.gcQ()===""){if(s.length>=3&&B.a.O(s,"/")&&A.Bi(s,1)!=null)s=B.a.mo(s,"/","")}else s="\\\\"+a.gcQ()+s
r=A.B(s,"/","\\")
return A.yk(r,0,r.length,B.k,!1)},
tB(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
jG(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.tB(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gb2(){return"windows"},
gd5(){return"\\"}}
A.rb.prototype={
gl(a){return this.c.length},
gvi(){return this.b.length},
nL(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.C(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
dX(a){var s,r=this
if(a<0)throw A.b(A.aI("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.aI("Offset "+a+u.D+r.gl(0)+"."))
s=r.b
if(a<B.b.gC(s))return-1
if(a>=B.b.ga_(s))return s.length-1
if(r.qA(a)){s=r.d
s.toString
return s}return r.d=r.o_(a)-1},
qA(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
o_(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.c.R(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
i3(a){var s,r,q=this
if(a<0)throw A.b(A.aI("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.aI("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gl(0)+"."))
s=q.dX(a)
r=q.b[s]
if(r>a)throw A.b(A.aI("Line "+s+" comes after offset "+a+"."))
return a-r},
f2(a){var s,r,q,p
if(a<0)throw A.b(A.aI("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.aI("Line "+a+" must be less than the number of lines in the file, "+this.gvi()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.aI("Line "+a+" doesn't have 0 columns."))
return q}}
A.jD.prototype={
gZ(){return this.a.a},
ga9(){return this.a.dX(this.b)},
gal(){return this.a.i3(this.b)},
gam(){return this.b}}
A.fd.prototype={
gZ(){return this.a.a},
gl(a){return this.c-this.b},
gJ(){return A.xz(this.a,this.b)},
gI(){return A.xz(this.a,this.c)},
gaF(){return A.d9(B.a2.S(this.a.c,this.b,this.c),0,null)},
gb1(){var s=this,r=s.a,q=s.c,p=r.dX(q)
if(r.i3(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.d9(B.a2.S(r.c,r.f2(p),r.f2(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.f2(p+1)
return A.d9(B.a2.S(r.c,r.f2(r.dX(s.b)),q),0,null)},
T(a,b){var s
if(!(b instanceof A.fd))return this.nC(0,b)
s=B.c.T(this.b,b.b)
return s===0?B.c.T(this.c,b.c):s},
X(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.fd))return s.nB(0,b)
return s.b===b.b&&s.c===b.c&&J.u(s.a.a,b.a.a)},
gN(a){return A.d4(this.b,this.c,this.a.a,B.h,B.h,B.h,B.h)},
$icE:1}
A.oJ.prototype={
v7(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.lA(B.b.gC(a1).c)
s=a.e
r=A.aE(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.u(m.c,l)){a.h4("\u2575")
q.a+="\n"
a.lA(l)}else if(m.b+1!==n.b){a.tb("...")
q.a+="\n"}}for(l=n.d,k=A.a7(l).i("dU<1>"),j=new A.dU(l,k),j=new A.a8(j,j.gl(0),k.i("a8<R.E>")),k=k.i("R.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gJ().ga9()!==f.gI().ga9()&&f.gJ().ga9()===i&&a.qB(B.a.q(h,0,f.gJ().gal()))){e=B.b.bT(r,a0)
if(e<0)A.x(A.O(A.r(r)+" contains no null elements.",a0))
r[e]=g}}a.ta(i)
q.a+=" "
a.t9(n,r)
if(s)q.a+=" "
d=B.b.v9(l,new A.p3())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gJ().ga9()===i?j.gJ().gal():0
a.t7(h,g,j.gI().ga9()===i?j.gI().gal():h.length,p)}else a.h6(h)
q.a+="\n"
if(k)a.t8(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.h4("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
lA(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.h4("\u2577")
else{q.h4("\u250c")
q.b6(new A.oR(q),"\x1b[34m")
s=q.r
r=" "+$.xm().mg(a)
s.a+=r}q.r.a+="\n"},
h2(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gJ().ga9()
i=k?null:l.a.gI().ga9()
if(s&&l===c){h.b6(new A.oY(h,j,a),r)
n=!0}else if(n)h.b6(new A.oZ(h,l),r)
else if(k)if(g.a)h.b6(new A.p_(h),g.b)
else o.a+=" "
else h.b6(new A.p0(g,h,c,j,a,l,i),p)}},
t9(a,b){return this.h2(a,b,null)},
t7(a,b,c,d){var s=this
s.h6(B.a.q(a,0,b))
s.b6(new A.oS(s,a,b,c),d)
s.h6(B.a.q(a,c,a.length))},
t8(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gJ().ga9()===p.gI().ga9()){r.j6()
p=r.r
p.a+=" "
r.h2(a,c,b)
if(c.length!==0)p.a+=" "
r.lB(b,c,r.b6(new A.oT(r,a,b),q))}else{s=a.b
if(p.gJ().ga9()===s){if(B.b.D(c,b))return
A.Hs(c,b)
r.j6()
p=r.r
p.a+=" "
r.h2(a,c,b)
r.b6(new A.oU(r,a,b),q)
p.a+="\n"}else if(p.gI().ga9()===s){p=p.gI().gal()
if(p===a.a.length){A.BA(c,b)
return}r.j6()
r.r.a+=" "
r.h2(a,c,b)
r.lB(b,c,r.b6(new A.oV(r,!1,a,b),q))
A.BA(c,b)}}},
lz(a,b,c){var s=c?0:1,r=this.r
s=B.a.b4("\u2500",1+b+this.ih(B.a.q(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
t6(a,b){return this.lz(a,b,!0)},
lB(a,b,c){this.r.a+="\n"
return},
h6(a){var s,r,q,p
for(s=new A.bY(a),r=t.V,s=new A.a8(s,s.gl(0),r.i("a8<D.E>")),q=this.r,r=r.i("D.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.b4(" ",4)
else{p=A.bd(p)
q.a+=p}}},
h5(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.c.m(b+1)
this.b6(new A.p1(s,this,a),"\x1b[34m")},
h4(a){return this.h5(a,null,null)},
tb(a){return this.h5(null,null,a)},
ta(a){return this.h5(null,a,null)},
j6(){return this.h5(null,null,null)},
ih(a){var s,r,q,p
for(s=new A.bY(a),r=t.V,s=new A.a8(s,s.gl(0),r.i("a8<D.E>")),r=r.i("D.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
qB(a){var s,r,q
for(s=new A.bY(a),r=t.V,s=new A.a8(s,s.gl(0),r.i("a8<D.E>")),r=r.i("D.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
od(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
b6(a,b){return this.od(a,b,t.z)}}
A.p2.prototype={
$0(){return this.a},
$S:113}
A.oL.prototype={
$1(a){var s=a.d
return new A.bj(s,new A.oK(),A.a7(s).i("bj<1>")).gl(0)},
$S:114}
A.oK.prototype={
$1(a){var s=a.a
return s.gJ().ga9()!==s.gI().ga9()},
$S:35}
A.oM.prototype={
$1(a){return a.c},
$S:116}
A.oO.prototype={
$1(a){var s=a.a.gZ()
return s==null?new A.j():s},
$S:117}
A.oP.prototype={
$2(a,b){return a.a.T(0,b.a)},
$S:118}
A.oQ.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.l([],t.dg)
for(s=J.ax(c),r=s.gu(c),q=t.pg;r.k();){p=r.gn().a
o=p.gb1()
n=A.wQ(o,p.gaF(),p.gJ().gal())
n.toString
m=B.a.h7("\n",B.a.q(o,0,n)).gl(0)
l=p.gJ().ga9()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.b.ga_(b).b)b.push(new A.c8(j,l,d,A.l([],q)));++l}}i=A.l([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.A)(b),++k){j=b[k]
h&1&&A.C(i,16)
B.b.rz(i,new A.oN(j),!0)
f=i.length
for(q=s.b5(c,g),p=q.$ti,q=new A.a8(q,q.gl(0),p.i("a8<R.E>")),n=j.b,p=p.i("R.E");q.k();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gJ().ga9()>n)break
i.push(e)}g+=i.length-f
B.b.E(j.d,i)}return b},
$S:119}
A.oN.prototype={
$1(a){return a.a.gI().ga9()<this.a.b},
$S:35}
A.p3.prototype={
$1(a){return!0},
$S:35}
A.oR.prototype={
$0(){this.a.r.a+=B.a.b4("\u2500",2)+">"
return null},
$S:0}
A.oY.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:4}
A.oZ.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:4}
A.p_.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.p0.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.b6(new A.oW(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gI().gal()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.b6(new A.oX(r,o),p.b)}}},
$S:4}
A.oW.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:4}
A.oX.prototype={
$0(){this.a.r.a+=this.b},
$S:4}
A.oS.prototype={
$0(){var s=this
return s.a.h6(B.a.q(s.b,s.c,s.d))},
$S:0}
A.oT.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gJ().gal(),l=n.gI().gal()
n=this.b.a
s=q.ih(B.a.q(n,0,m))
r=q.ih(B.a.q(n,m,l))
m+=s*3
n=(p.a+=B.a.b4(" ",m))+B.a.b4("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:10}
A.oU.prototype={
$0(){return this.a.t6(this.b,this.c.a.gJ().gal())},
$S:0}
A.oV.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.b4("\u2500",3)
else r.lz(s.c,Math.max(s.d.a.gI().gal()-1,0),!1)
return q.a.length-p.length},
$S:10}
A.p1.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.vG(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:4}
A.b8.prototype={
m(a){var s=this.a
s="primary "+(""+s.gJ().ga9()+":"+s.gJ().gal()+"-"+s.gI().ga9()+":"+s.gI().gal())
return s.charCodeAt(0)==0?s:s}}
A.v3.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.wQ(o.gb1(),o.gaF(),o.gJ().gal())!=null)){s=A.kx(o.gJ().gam(),0,0,o.gZ())
r=o.gI().gam()
q=o.gZ()
p=A.GP(o.gaF(),10)
o=A.rc(s,A.kx(r,A.A8(o.gaF()),p,q),o.gaF(),o.gaF())}return A.EB(A.ED(A.EC(o)))},
$S:120}
A.c8.prototype={
m(a){return""+this.b+': "'+this.a+'" ('+B.b.L(this.d,", ")+")"}}
A.c2.prototype={
ji(a){var s=this.a
if(!J.u(s,a.gZ()))throw A.b(A.O('Source URLs "'+A.r(s)+'" and "'+A.r(a.gZ())+"\" don't match.",null))
return Math.abs(this.b-a.gam())},
T(a,b){var s=this.a
if(!J.u(s,b.gZ()))throw A.b(A.O('Source URLs "'+A.r(s)+'" and "'+A.r(b.gZ())+"\" don't match.",null))
return this.b-b.gam()},
X(a,b){if(b==null)return!1
return t.hq.b(b)&&J.u(this.a,b.gZ())&&this.b===b.gam()},
gN(a){var s=this.a
s=s==null?null:s.gN(s)
if(s==null)s=0
return s+this.b},
m(a){var s=this,r=A.iQ(s).m(0),q=s.a
return"<"+r+": "+s.b+" "+(A.r(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iam:1,
gZ(){return this.a},
gam(){return this.b},
ga9(){return this.c},
gal(){return this.d}}
A.ky.prototype={
ji(a){if(!J.u(this.a.a,a.gZ()))throw A.b(A.O('Source URLs "'+A.r(this.gZ())+'" and "'+A.r(a.gZ())+"\" don't match.",null))
return Math.abs(this.b-a.gam())},
T(a,b){if(!J.u(this.a.a,b.gZ()))throw A.b(A.O('Source URLs "'+A.r(this.gZ())+'" and "'+A.r(b.gZ())+"\" don't match.",null))
return this.b-b.gam()},
X(a,b){if(b==null)return!1
return t.hq.b(b)&&J.u(this.a.a,b.gZ())&&this.b===b.gam()},
gN(a){var s=this.a.a
s=s==null?null:s.gN(s)
if(s==null)s=0
return s+this.b},
m(a){var s=A.iQ(this).m(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.r(p==null?"unknown source":p)+":"+(q.dX(r)+1)+":"+(q.i3(r)+1))+">"},
$iam:1,
$ic2:1}
A.kA.prototype={
nM(a,b,c){var s,r=this.b,q=this.a
if(!J.u(r.gZ(),q.gZ()))throw A.b(A.O('Source URLs "'+A.r(q.gZ())+'" and  "'+A.r(r.gZ())+"\" don't match.",null))
else if(r.gam()<q.gam())throw A.b(A.O("End "+r.m(0)+" must come after start "+q.m(0)+".",null))
else{s=this.c
if(s.length!==q.ji(r))throw A.b(A.O('Text "'+s+'" must be '+q.ji(r)+" characters long.",null))}},
gJ(){return this.a},
gI(){return this.b},
gaF(){return this.c}}
A.kB.prototype={
gjz(){return this.a},
m(a){var s,r,q,p=this.b,o="line "+(p.gJ().ga9()+1)+", column "+(p.gJ().gal()+1)
if(p.gZ()!=null){s=p.gZ()
r=$.xm()
s.toString
s=o+(" of "+r.mg(s))
o=s}o+=": "+this.a
q=p.v8(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iL:1}
A.eP.prototype={
gam(){var s=this.b
s=A.xz(s.a,s.b)
return s.b},
$ib3:1,
gf8(){return this.c}}
A.eQ.prototype={
gZ(){return this.gJ().gZ()},
gl(a){return this.gI().gam()-this.gJ().gam()},
T(a,b){var s=this.gJ().T(0,b.gJ())
return s===0?this.gI().T(0,b.gI()):s},
v8(a){var s=this
if(!t.ol.b(s)&&s.gl(s)===0)return""
return A.D9(s,a).v7()},
X(a,b){if(b==null)return!1
return b instanceof A.eQ&&this.gJ().X(0,b.gJ())&&this.gI().X(0,b.gI())},
gN(a){return A.d4(this.gJ(),this.gI(),B.h,B.h,B.h,B.h,B.h)},
m(a){var s=this
return"<"+A.iQ(s).m(0)+": from "+s.gJ().m(0)+" to "+s.gI().m(0)+' "'+s.gaF()+'">'},
$iam:1}
A.cE.prototype={
gb1(){return this.d}}
A.hN.prototype={
a7(){return"SqliteUpdateKind."+this.b}}
A.c3.prototype={
gN(a){return A.d4(this.a,this.b,this.c,B.h,B.h,B.h,B.h)},
X(a,b){if(b==null)return!1
return b instanceof A.c3&&b.a===this.a&&b.b===this.b&&b.c===this.c},
m(a){return"SqliteUpdate: "+this.a.m(0)+" on "+this.b+", rowid = "+this.c}}
A.d6.prototype={
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
p=p!=null?s+(", parameters: "+J.aG(p,new A.rg(),t.N).L(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iL:1}
A.rg.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.av(a)},
$S:121}
A.nV.prototype={
t_(){var s=this,r=s.d
return r==null?s.d=new A.dk(s,A.l([],t.fU),new A.o3(s),new A.o4(s),t.jy):r},
rD(){var s=this,r=s.e
return r==null?s.e=new A.dk(s,A.l([],t.lw),new A.o0(s),new A.o1(s),t.lU):r},
of(){var s=this,r=s.f
return r==null?s.f=new A.dk(s,A.l([],t.lw),new A.nX(s),new A.nY(s),t.af):r},
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
r=s.kc()
q=r!==0?A.yt(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aw(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.x(A.w("This database has already been closed"))
r=p.b
q=r.a
s=q.eo(B.i.v(a),1)
q=q.d
r=A.B7(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.yB(p,r,"executing",a,b)}else{s=p.hK(a,!0)
try{s.jn(new A.dK(b))}finally{s.p()}}},
K(a){return this.aw(a,B.w)},
r6(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.x(A.w("This database has already been closed"))
s=B.i.v(a)
r=e.b
q=r.a
p=q.en(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.t3(r,p,n,o)
l=A.l([],t.lE)
k=new A.nZ(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.ke(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.yB(e,n,"preparing statement",a,null)}n=q.buffer
h=B.c.R(n.byteLength,4)
g=new Int32Array(n,0,h)[B.c.a8(o,2)]-p
f=i.a
if(f!=null)l.push(new A.eR(f,e,new A.cN(!1).cA(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.ke(j,r-j,0)
n=q.buffer
h=B.c.R(n.byteLength,4)
j=new Int32Array(n,0,h)[B.c.a8(o,2)]-p
f=i.a
if(f!=null){l.push(new A.eR(f,e,""))
k.$0()
throw A.b(A.b0(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.b0(a,"sql","Has trailing data after the first sql statement:"))}}m.p()
return l},
hK(a,b){var s=this.r6(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.b0(a,"sql","Must contain an SQL statement."))
return B.b.gC(s)},
vI(a){return this.hK(a,!1)},
ne(a,b){var s,r=this.hK(a,!0)
try{s=r.k7(new A.dK(b))
return s}finally{r.p()}},
f5(a){return this.ne(a,B.w)}}
A.o3.prototype={
$0(){var s=this.a,r=s.b
r.a.lR(r.b,new A.o2(s))},
$S:0}
A.o2.prototype={
$3(a,b,c){var s=A.DX(a)
if(s==null)return
this.a.d.jh(new A.c3(s,b,c))},
$S:122}
A.o4.prototype={
$0(){var s=this.a.b
s.a.lR(s.b,null)
return null},
$S:0}
A.o0.prototype={
$0(){var s=this.a,r=s.b
r.a.lQ(r.b,new A.o_(s))
return null},
$S:0}
A.o_.prototype={
$0(){this.a.e.jh(null)},
$S:0}
A.o1.prototype={
$0(){var s=this.a.b
s.a.lQ(s.b,null)
return null},
$S:0}
A.nX.prototype={
$0(){var s=this.a,r=s.b
r.a.lP(r.b,new A.nW(s))
return null},
$S:0}
A.nW.prototype={
$0(){var s=this.a.f
s.jh(null)
return 0},
$S:10}
A.nY.prototype={
$0(){var s=this.a.b
s.a.lP(s.b,null)
return null},
$S:0}
A.nZ.prototype={
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
A.dk.prototype={
gcv(){var s=this.r
return s==null?this.r=this.oK(!1):s},
oK(a){return new A.cM(new A.vH(this,!1),this.$ti.i("cM<1>"))},
jh(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.x(o.bq())
if((n&1)!==0)o.gaH().aq(a)}else{n=o.b
if(n>=4)A.x(o.bq())
if((n&1)!==0)o.ca(a)
else if((n&3)===0){n=o.fg()
o=new A.bO(a,o.$ti.i("bO<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.sdL(o)
n.c=o}}}}},
p(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q)s[q].a.p()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.vH.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.p()
return}s=this.b
r=new A.vI(q,a,s)
a.r=a.e=new A.vJ(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(d2<1>)")}}
A.vI.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.ir(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.vJ.prototype={
$0(){var s=this.a,r=s.c
B.b.F(r,new A.ir(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.rd.prototype={
m5(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.DW(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
vA(a,b){var s,r,q,p,o,n,m,l,k,j
this.m5()
switch(2){case 2:break}s=this.a
r=s.a
q=r.eo(B.i.v(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.eo(B.i.v(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.cB(r.b.buffer,0,null)[B.c.a8(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.j()
k=new A.rX(r,l,o)
r=r.r
if(r!=null)r.lI(k,l,o)
if(m!==0){j=A.yt(s,k,m,"opening the database",null,null)
k.kc()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.nV(s,k,!1)}}
A.eR.prototype={
goe(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.l([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.la(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.cN(!1).cA(o,0,null,!0))}return q},
grT(){return null},
bn(a,b){A.yB(this.b,a,b,this.d,this.e)},
kL(){if(this.r||this.b.r)throw A.b(A.w("Tried to operate on a released prepared statement"))},
oD(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.cX()
if(s!==0?s!==101:q)r.bn(s,"executing statement")},
rH(){var s,r,q,p,o,n,m=this,l=A.l([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.rq(o))
l.push(p)}m.cX()
if(p!==0?p!==101:k)m.bn(p,"selecting from statement")
n=m.goe()
m.grT()
k=new A.kr(l,n,B.a1)
k.o9()
return k},
rq(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.ah(r.Number(s)):A.y9(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.nq(a)
case 4:return s.kd(a)
case 5:default:return null}},
o2(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.x(A.b0(a,"parameters","Expected "+A.r(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.o3(a[s-1],s)
this.e=a},
o3(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.aD(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.aA){s=q.a
if(a.T(0,$.BK())<0||a.T(0,$.BJ())>0)A.x(A.z5("BigInt value exceeds the range of 64 bits"))
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a.m(0)))
break A}if(A.c9(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.np(b,a)
break A}if(t.L.b(a)){s=q.a.no(b,a)
break A}s=q.o1(a,b)
break A}if(s!==0)q.bn(s,"binding parameter")},
o1(a,b){throw A.b(A.b0(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
ks(a){A:{if(a instanceof A.dK){this.o2(a.a)
break A}if(a instanceof A.jm)a.a.$1(this)}},
cX(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
p(){var s,r,q=this
if(!q.r){q.r=!0
q.cX()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.lU(s.d)}},
k7(a){var s=this
s.kL()
s.cX()
s.ks(a)
return s.rH()},
jn(a){var s=this
s.kL()
s.cX()
s.ks(a)
s.oD()}}
A.jH.prototype={
hZ(a,b){return this.d.H(a)?1:0},
jW(a,b){this.d.F(0,a)},
jX(a){return new v.G.URL(a,"file:///").pathname},
d2(a,b){var s,r=a.a
if(r==null)r=A.zc(this.b,"/")
s=this.d
if(!s.H(r))if((b&4)!==0)s.j(0,r,new A.c7(new Uint8Array(0),0))
else throw A.b(A.f0(14))
return new A.fk(new A.lz(this,r,(b&8)!==0),0)},
jZ(a){}}
A.lz.prototype={
mi(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.d.ab(a,0,s,J.du(B.d.gaJ(r.a),0,r.b),b)
return s},
jV(){return this.d>=2?1:0},
i_(){if(this.c)this.a.d.F(0,this.b)},
f_(){return this.a.d.h(0,this.b).b},
jY(a){this.d=a},
k_(a){},
f0(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.c7(new Uint8Array(0),0))
s.h(0,r).sl(0,a)}else q.sl(0,a)},
k0(a){this.d=a},
dW(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.c7(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sl(0,s)
p.af(0,b,s,a)}}
A.x5.prototype={
$1(a){return a.length!==0},
$S:12}
A.nE.prototype={
o9(){var s,r,q,p,o=A.E(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
o.j(0,p,B.b.cR(s,p))}this.c=o}}
A.kr.prototype={
gu(a){return new A.vr(this)},
h(a,b){return new A.bL(this,A.d0(this.d[b],t.X))},
j(a,b,c){throw A.b(A.Y("Can't change rows from a result set"))},
gl(a){return this.d.length},
$iF:1,
$in:1,
$iq:1}
A.bL.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.aD(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gP(){return this.a.a},
gbh(){return this.b},
$iG:1}
A.vr.prototype={
gn(){var s=this.a
return new A.bL(s,A.d0(s.d[this.b],t.X))},
k(){return++this.b<this.a.d.length}}
A.lO.prototype={}
A.lP.prototype={}
A.lR.prototype={}
A.lS.prototype={}
A.q3.prototype={
a7(){return"OpenMode."+this.b}}
A.dC.prototype={}
A.dK.prototype={}
A.jm.prototype={}
A.cJ.prototype={
m(a){return"VfsException("+this.a+")"},
$iL:1}
A.hM.prototype={}
A.aO.prototype={}
A.jb.prototype={}
A.ja.prototype={
gi0(){return 0},
mz(a,b){return 12},
gi2(){return 4096},
i1(a,b){var s=this.mi(a,b),r=a.length
if(s<r){B.d.hm(a,s,r,0)
throw A.b(B.cV)}},
$ib5:1,
$ihV:1}
A.e4.prototype={}
A.xe.prototype={
$0(){var s,r,q
for(s=this.a;!s.gB(0);){if(s.b===0)A.x(A.w("No such element"))
r=s.c
q=r.a
q.toString
q.j4(A.o(r).i("aV.E").a(r))
r.d.$0()}},
$S:0}
A.xc.prototype={
$1(a){var s=this.a,r=s.b
s.fU(s.c,new A.e4(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:16}
A.xd.prototype={
$4(a,b,c,d){this.a.$1(c.ep(d))},
$S:124}
A.t1.prototype={}
A.rX.prototype={
kc(){var s=this.a,r=s.r
if(r!=null)r.lU(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.t3.prototype={
p(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
ke(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.B7(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.cB(o.b.buffer,0,null)[B.c.a8(n,2)]
if(s===0)r=null
else{n=new A.j()
r=new A.t2(s,o,n)
o=o.w
if(o!=null)o.lI(r,s,n)}return new A.lM(r,p)}}
A.t2.prototype={
no(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.en(b),J.aw(b))},
np(a,b){var s=B.i.v(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.en(s),s.length)},
kd(a){var s,r=this.c,q=this.b,p=r.d,o=p.sqlite3_column_bytes(q,a)
q=p.sqlite3_column_blob(q,a)
s=new Uint8Array(o)
B.d.d6(s,0,A.bB(r.b.buffer,q,o))
return s},
nq(a){var s=this.c
return A.e2(s.b,s.d.sqlite3_column_text(this.b,a))}}
A.e_.prototype={}
A.db.prototype={}
A.f2.prototype={
sl(a,b){throw A.b(A.Y("Setting length in WasmValueList"))},
h(a,b){A.cB(this.a.b.buffer,0,null)
B.c.a8(this.c+b*4,2)
return new A.db()},
j(a,b,c){throw A.b(A.Y("Setting element in WasmValueList"))},
gl(a){return this.b}}
A.jn.prototype={
vs(a){var s,r,q=this.b
q===$&&A.v()
s="[sqlite3] "+A.e2(q,a)
r=$.G1
if(r==null)A.Bw(s)
else r.$1(s)},
vq(a,b){var s,r=new A.b1(A.oc(A.ah(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.v()
s=A.DA(q.buffer,b,8)
s.$flags&2&&A.C(s)
s[0]=A.xR(r)
s[1]=A.xP(r)
s[2]=A.xO(r)
s[3]=A.qA(r)
s[4]=A.xQ(r)-1
s[5]=A.xS(r)-1900
s[6]=B.c.aG(A.DG(r),7)},
wV(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.v()
s=new A.hM(A.y3(j,b,k))
try{r=a.d2(s,d)
if(e!==0){p=r.b
o=A.cB(j.buffer,0,k)
n=B.c.a8(e,2)
o.$flags&2&&A.C(o)
o[n]=p}p=A.cB(j.buffer,0,k)
o=B.c.a8(c,2)
p.$flags&2&&A.C(p)
p[o]=0
m=r.a
return m}catch(l){p=A.M(l)
if(p instanceof A.cJ){q=p
p=q.a
j=A.cB(j.buffer,0,k)
o=B.c.a8(c,2)
j.$flags&2&&A.C(j)
j[o]=p}else{j=j.buffer
j=A.cB(j,0,k)
p=B.c.a8(c,2)
j.$flags&2&&A.C(j)
j[p]=1}}return k},
wK(a,b,c){var s=this.b
s===$&&A.v()
return A.bE(new A.nJ(a,A.e2(s,b),c))},
wC(a,b,c,d){var s=this.b
s===$&&A.v()
return A.bE(new A.nG(this,a,A.e2(s,b),c,d))},
wR(a,b,c,d){var s=this.b
s===$&&A.v()
return A.bE(new A.nL(this,a,A.e2(s,b),c,d))},
wX(a,b,c){return A.bE(new A.nN(this,c,b,a))},
x3(a,b){return A.bE(new A.nP(a,b))},
wI(a,b){var s,r=Date.now(),q=this.b
q===$&&A.v()
s=v.G.BigInt(r)
A.xF(A.zo(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
wG(a){return A.bE(new A.nI(a))},
wZ(a,b,c,d){return A.bE(new A.nO(this,a,b,c,d))},
xb(a,b,c,d){return A.bE(new A.nT(this,a,b,c,d))},
x7(a,b){return A.bE(new A.nR(a,b))},
x5(a,b){return A.bE(new A.nQ(a,b))},
wP(a,b){return A.bE(new A.nK(this,a,b))},
wT(a,b){return A.bE(new A.nM(a,b))},
x9(a,b){return A.bE(new A.nS(a,b))},
wE(a,b){return A.bE(new A.nH(this,a,b))},
wL(a){return a.gi0()},
wN(a,b,c){if(t.j2.b(a))return a.mz(b,c)
return 12},
x_(a){if(t.j2.b(a))return a.gi2()
return 4096},
u1(a){a.$0()},
tX(a){return a.$0()},
u_(a,b,c,d,e){var s=this.b
s===$&&A.v()
a.$3(b,A.e2(s,d),A.ah(v.G.Number(e)))},
u7(a,b,c,d){var s=a.gxi(),r=this.a
r===$&&A.v()
s.$2(new A.e_(),new A.f2(r,c,d))},
uc(a,b,c,d){var s=a.gxk(),r=this.a
r===$&&A.v()
s.$2(new A.e_(),new A.f2(r,c,d))},
u9(a,b,c,d){var s=a.gxj(),r=this.a
r===$&&A.v()
s.$2(new A.e_(),new A.f2(r,c,d))},
ue(a,b){var s=a.gxl()
this.a===$&&A.v()
s.$1(new A.e_())},
u5(a,b){var s=a.gxh()
this.a===$&&A.v()
s.$1(new A.e_())},
u3(a,b,c,d,e){var s,r,q=this.b
q===$&&A.v()
s=A.y3(q,c,b)
r=A.y3(q,e,d)
return a.gxe().$2(s,r)},
tV(a,b){return a.$1(b)},
tT(a,b){return a.gxg().$1(b)},
tR(a,b,c){return a.gxf().$2(b,c)}}
A.nJ.prototype={
$0(){return this.a.jW(this.b,this.c)},
$S:0}
A.nG.prototype={
$0(){var s,r=this,q=r.b.hZ(r.c,r.d),p=r.a.b
p===$&&A.v()
p=A.cB(p.buffer,0,null)
s=B.c.a8(r.e,2)
p.$flags&2&&A.C(p)
p[s]=q},
$S:0}
A.nL.prototype={
$0(){var s,r,q=this,p=B.i.v(q.b.jX(q.c)),o=p.length
if(o>q.d)throw A.b(A.f0(14))
s=q.a.b
s===$&&A.v()
s=A.bB(s.buffer,0,null)
r=q.e
B.d.d6(s,r,p)
s.$flags&2&&A.C(s)
s[r+o]=0},
$S:0}
A.nN.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.v()
s=A.bB(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.yS(s,q.b)
else return A.yS(s,null)},
$S:0}
A.nP.prototype={
$0(){this.a.jZ(A.dF(this.b,0,0))},
$S:0}
A.nI.prototype={
$0(){return this.a.i_()},
$S:0}
A.nO.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.v()
s.b.i1(A.bB(r.buffer,s.c,s.d),A.ah(v.G.Number(s.e)))},
$S:0}
A.nT.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.v()
s.b.dW(A.bB(r.buffer,s.c,s.d),A.ah(v.G.Number(s.e)))},
$S:0}
A.nR.prototype={
$0(){return this.a.f0(A.ah(v.G.Number(this.b)))},
$S:0}
A.nQ.prototype={
$0(){return this.a.k_(this.b)},
$S:0}
A.nK.prototype={
$0(){var s,r=this.b.f_(),q=this.a.b
q===$&&A.v()
q=A.cB(q.buffer,0,null)
s=B.c.a8(this.c,2)
q.$flags&2&&A.C(q)
q[s]=r},
$S:0}
A.nM.prototype={
$0(){return this.a.jY(this.b)},
$S:0}
A.nS.prototype={
$0(){return this.a.k0(this.b)},
$S:0}
A.nH.prototype={
$0(){var s,r=this.b.jV(),q=this.a.b
q===$&&A.v()
q=A.cB(q.buffer,0,null)
s=B.c.a8(this.c,2)
q.$flags&2&&A.C(q)
q[s]=r},
$S:0}
A.fL.prototype={
a5(a,b,c,d){var s,r=null,q={},p=A.aZ(A.xF(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.xX(r,r,r,!0,this.$ti.c)
q.a=null
s=new A.mH(q,this,p,o)
o.d=s
o.f=new A.mI(q,o,s)
return new A.b6(o,A.o(o).i("b6<1>")).a5(a,b,c,d)},
by(a,b,c){return this.a5(a,null,b,c)}}
A.mH.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a4(q,t.m).bE(new A.mJ(p,r.b,s,r),s.gtg(),t.P)},
$S:0}
A.mJ.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.p()
q.a.a=null}else{r.t(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gaH().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:15}
A.mI.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gaH().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.e8.prototype={
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
return s==null?A.x(A.w("Await moveNext() first")):s},
k(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.p($.t,t.k)
s=new A.ad(o,t.ex)
r=p.d
q=t.m
p.b=A.b7(r,"success",new A.uw(p,s),!1,q)
p.c=A.b7(r,"error",new A.ux(p,s),!1,q)
return o}}
A.uw.prototype={
$1(a){var s,r=this.a
r.A()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.au(s!=null)},
$S:2}
A.ux.prototype={
$1(a){var s=this.a
s.A()
s=s.d.error
if(s==null)s=a
this.b.aD(s)},
$S:2}
A.nj.prototype={
$1(a){this.a.au(this.c.a(this.b.result))},
$S:2}
A.nk.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aD(s)},
$S:2}
A.no.prototype={
$1(a){this.a.au(this.c.a(this.b.result))},
$S:2}
A.np.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aD(s)},
$S:2}
A.nq.prototype={
$1(a){this.a.aD(new A.bf("IndexedDB open blocked"))},
$S:2}
A.ov.prototype={
$1(a){return A.aZ(a[1])},
$S:146}
A.rY.prototype={
tG(){var s={}
s.dart=new A.rZ(this).$0()
return s},
hD(a){return this.vm(a)},
vm(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hD=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a4(v.G.WebAssembly.instantiateStreaming(a,p.tG()),t.m),$async$hD)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hD,r)}}
A.rZ.prototype={
$0(){var s=this.a.a,r=A.aZ(v.G.Object),q=A.aZ(r.create.apply(r,[null]))
q.error_log=A.ct(s.gvr())
q.localtime=A.bD(s.gvp())
q.xOpen=A.yl(s.gwU())
q.xDelete=A.mk(s.gwJ())
q.xAccess=A.fw(s.gwB())
q.xFullPathname=A.fw(s.gwQ())
q.xRandomness=A.mk(s.gwW())
q.xSleep=A.bD(s.gx0())
q.xCurrentTimeInt64=A.bD(s.gwH())
q.xClose=A.ct(s.gwF())
q.xRead=A.fw(s.gwY())
q.xWrite=A.fw(s.gxa())
q.xTruncate=A.bD(s.gx6())
q.xSync=A.bD(s.gx4())
q.xFileSize=A.bD(s.gwO())
q.xLock=A.bD(s.gwS())
q.xUnlock=A.bD(s.gx8())
q.xCheckReservedLock=A.bD(s.gwD())
q.xDeviceCharacteristics=A.ct(s.gi0())
q.xFileControl=A.mk(s.gwM())
q.xSectorSize=A.ct(s.gi2())
q["dispatch_()v"]=A.ct(s.gu0())
q["dispatch_()i"]=A.ct(s.gtW())
q.dispatch_update=A.yl(s.gtZ())
q.dispatch_xFunc=A.fw(s.gu6())
q.dispatch_xStep=A.fw(s.gua())
q.dispatch_xInverse=A.fw(s.gu8())
q.dispatch_xValue=A.bD(s.gud())
q.dispatch_xFinal=A.bD(s.gu4())
q.dispatch_compare=A.yl(s.gu2())
q.dispatch_busy=A.bD(s.gtU())
q.changeset_apply_filter=A.bD(s.gtS())
q.changeset_apply_conflict=A.mk(s.gtQ())
return q},
$S:40}
A.f1.prototype={}
A.mK.prototype={
hH(){var s=0,r=A.h(t.H),q=this,p,o
var $async$hH=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.p($.t,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.ct(new A.mN(o))
new A.ad(p,t.h1).au(A.CR(o,t.m))
s=2
return A.a(p,$async$hH)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$hH,r)},
dr(a,b){return this.rE(a,b)},
rE(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$dr=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.Ck(),b)
o=A.EE(p)
s=2
return A.a(A.Ht(new A.mM(a,o,p),t.mj),$async$dr)
case 2:s=3
return A.a(o.b.a,$async$dr)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$dr,r)},
r5(a){return this.dr(new A.mL(a),"readwrite")}}
A.mN.prototype={
$1(a){var s=A.aZ(this.a.result)
if(J.u(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:15}
A.mM.prototype={
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
A.mL.prototype={
$1(a){return this.mA(a)},
mA(a){var s=0,r=A.h(t.H),q=this,p,o,n
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
$S:20}
A.ig.prototype={
nQ(a){var s=A.wn(new A.v6(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.wn(new A.v7(this))},
iT(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.l([a,c],s),A.l([a,b],s))},
rn(a){return this.iT(a,9007199254740992,0)},
ro(a,b){return this.iT(a,9007199254740992,b)},
hC(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$hC=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.E(t.N,t.S)
k=new A.e8(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.k(),$async$hC)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.x(A.w("Await moveNext() first"))
n=o.key
n.toString
A.I(n)
m=o.primaryKey
m.toString
l.j(0,n,A.ah(A.eh(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hC,r)},
hl(a){return this.uC(a)},
uC(a){var s=0,r=A.h(t.aV),q,p=this,o
var $async$hl=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.ce(p.d.index("fileName").getKey(a),t.i),$async$hl)
case 3:q=o.ah(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hl,r)},
iU(a){return A.ce(this.d.get(a),t.B).aK(new A.v5(a),t.m)},
dZ(a,b){return this.nr(a,b)},
nr(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$dZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.iU(a),$async$dZ)
case 3:h=d
g=h.length
f=new A.c7(new Uint8Array(g),g)
e=new A.e8(p.e.openCursor(p.rn(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.k(),$async$dZ)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.x(A.w("Await moveNext() first"))
k=n.a(l.key)
j=A.ah(A.eh(k[1]))
if(j>=h.length){s=5
break}i=new A.v8(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.r2(A.aZ(l.value)).aK(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dZ,r)},
he(a){return this.tF(a)},
tF(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$he=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.x(A.w("IDB transaction already completed"))
o=A
s=3
return A.a(A.ce(p.d.put({name:a,length:0}),t.i),$async$he)
case 3:q=o.ah(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$he,r)},
d1(a,b){return this.wv(a,b)},
wv(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$d1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.x(A.w("IDB transaction already completed"))
s=2
return A.a(q.iU(a),$async$d1)
case 2:p=d
o=b.b
n=A.o(o).i("Z<1>")
m=A.P(new A.Z(o,n),n.i("n.E"))
B.b.aW(m)
s=3
return A.a(A.xB(new A.a6(m,new A.v9(new A.va(q,a),b),A.a7(m).i("a6<1,z<~>>")),t.H),$async$d1)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.e8(q.d.openCursor(a),t.R)
s=6
return A.a(l.k(),$async$d1)
case 6:s=7
return A.a(A.ce(l.gn().update({name:p.name,length:b.c}),t.X),$async$d1)
case 7:case 5:return A.e(null,r)}})
return A.f($async$d1,r)},
d0(a,b,c){return this.wj(0,b,c)},
wj(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$d0=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.x(A.w("IDB transaction already completed"))
s=2
return A.a(q.iU(b),$async$d0)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.ce(q.e.delete(q.ro(b,B.c.R(c,4096)*4096)),t.X),$async$d0)
case 5:case 4:o=new A.e8(q.d.openCursor(b),t.R)
s=6
return A.a(o.k(),$async$d0)
case 6:s=7
return A.a(A.ce(o.gn().update({name:p.name,length:c}),t.X),$async$d0)
case 7:return A.e(null,r)}})
return A.f($async$d0,r)},
hh(a){return this.tO(a)},
tO(a){var s=0,r=A.h(t.H),q=this,p
var $async$hh=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.x(A.w("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.xB(A.l([A.ce(q.e.delete(q.iT(a,9007199254740992,0)),p),A.ce(q.d.delete(a),p)],t.iw),t.H),$async$hh)
case 2:return A.e(null,r)}})
return A.f($async$hh,r)}}
A.v6.prototype={
$0(){this.a.b.ar()},
$S:4}
A.v7.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aD(r)},
$S:4}
A.v5.prototype={
$1(a){if(a==null)throw A.b(A.b0(this.a,"fileId","File not found in database"))
else return a},
$S:149}
A.v8.prototype={
$1(a){var s=this.a
s.d6(s,this.b,J.du(a,0,this.c))},
$S:150}
A.va.prototype={
n7(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.ce(p.openCursor(v.G.IDBKeyRange.only(A.l([o,a],n))),t.B),$async$$2)
case 2:m=d
l=t.a.a(B.d.gaJ(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.ce(p.put(l,A.l([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.ce(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.n7(a,b)},
$S:151}
A.v9.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:152}
A.uI.prototype={
rZ(a,b,c){B.d.d6(this.b.mh(a,new A.uJ(this,a)),b,c)},
tk(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.c.R(q,4096)
o=B.c.aG(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.rZ(p*4096,o,J.du(B.d.gaJ(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.uJ.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.d.d6(s,0,J.du(B.d.gaJ(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:153}
A.lI.prototype={}
A.cX.prototype={
ej(a){var s=this
if(s.e||s.d.a==null)A.x(A.f0(10))
if(a.ju(s.x)){s.cc(!0)
return a.d.a}else return A.c_(null,t.H)},
cc(a){return this.rS(a)},
rS(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$cc=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gB(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.P(o,o.$ti.i("n.E"))
o.ai(0)
s=5
return A.a(p.d.r5(n).aO(new A.p6(p,n,a)),$async$cc)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$cc,r)},
p(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.ej(new A.id(new A.p7(),new A.ad(new A.p($.t,t.D),t.F)))
p.e=!0
p.cc(!1)
q=o
s=1
break}else{n=p.x
if(!n.gB(0)){q=n.ga_(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$p,r)},
dd(a,b){return this.oH(a,b)},
oH(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$dd=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.z
s=n.H(b)?3:5
break
case 3:n=n.h(0,b)
n.toString
q=n
s=1
break
s=4
break
case 5:s=6
return A.a(a.hl(b),$async$dd)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$dd,r)},
ed(){var s=0,r=A.h(t.H),q=this,p
var $async$ed=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.l([],t.iw)
s=2
return A.a(q.d.dr(new A.p5(q,p),"readonly"),$async$ed)
case 2:s=3
return A.a(A.D6(p,t.H),$async$ed)
case 3:return A.e(null,r)}})
return A.f($async$ed,r)},
ck(){return this.cc(!1)},
hZ(a,b){return this.w.d.H(a)?1:0},
jW(a,b){var s=this
s.w.d.F(0,a)
if(!s.y.F(0,a))s.ej(new A.i7(s,a,new A.ad(new A.p($.t,t.D),t.F)))},
jX(a){return new v.G.URL(a,"file:///").pathname},
d2(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.zc(p.b,"/")
s=p.w
r=s.d.H(o)?1:0
q=s.d2(new A.hM(o),b)
if(r===0)if((b&8)!==0)p.y.t(0,o)
else p.ej(new A.f9(p,o,new A.ad(new A.p($.t,t.D),t.F)))
return new A.fk(new A.lA(p,q.a,o),0)},
jZ(a){}}
A.p6.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.x(A.w("Future already completed"))
p.c4(null)}o.cc(this.c)},
$S:4}
A.p7.prototype={
$1(a){return this.mH(a)},
mH(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:20}
A.p5.prototype={
$1(a){return this.mG(a)},
mG(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.hC(),$async$$1)
case 2:m=c
l=q.a
l.z.E(0,m)
p=m.gbm(),p=p.gu(p),o=q.b,l=l.w.d
case 3:if(!p.k()){s=4
break}n=p.gn()
k=l
j=n.a
s=5
return A.a(a.dZ(n.b,o),$async$$1)
case 5:k.j(0,j,c)
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:20}
A.lA.prototype={
i1(a,b){this.b.i1(a,b)},
gi0(){return 0},
gi2(){return 4096},
jV(){return this.b.d>=2?1:0},
i_(){},
f_(){return this.b.f_()},
jY(a){this.b.d=a
return null},
k_(a){},
mz(a,b){return 12},
f0(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.x(A.f0(10))
s.b.f0(a)
if(!r.y.D(0,s.c))r.ej(new A.id(new A.v4(s,a),new A.ad(new A.p($.t,t.D),t.F)))},
k0(a){this.b.d=a
return null},
dW(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.x(A.f0(10))
s=m.c
if(l.y.D(0,s)){m.b.dW(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.c7(new Uint8Array(0),0)
q=J.du(B.d.gaJ(r.a),0,r.b)
m.b.dW(a,b)
p=new Uint8Array(a.length)
B.d.d6(p,0,a)
o=A.l([],t.p8)
n=$.t
o.push(new A.lI(b,p))
l.ej(new A.ft(l,s,q,o,new A.ad(new A.p(n,t.D),t.F)))},
$ib5:1,
$ihV:1}
A.v4.prototype={
$1(a){return this.n6(a)},
n6(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.dd(a,o.c),$async$$1)
case 3:q=n.d0(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:20}
A.aP.prototype={
ju(a){a.fU(a.c,this,!1)
return!0}}
A.id.prototype={
aN(a){return this.w.$1(a)}}
A.i7.prototype={
ju(a){var s,r,q,p
if(!a.gB(0)){s=a.ga_(0)
for(r=this.x;s!=null;)if(s instanceof A.i7)if(s.x===r)return!1
else s=s.geK()
else if(s instanceof A.ft){q=s.geK()
if(s.x===r){p=s.a
p.toString
p.j4(A.o(s).i("aV.E").a(s))}s=q}else if(s instanceof A.f9){if(s.x===r){r=s.a
r.toString
r.j4(A.o(s).i("aV.E").a(s))
return!1}s=s.geK()}else break}a.fU(a.c,this,!1)
return!0},
aN(a){return this.wa(a)},
wa(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.dd(a,o),$async$aN)
case 2:n=c
p.z.F(0,o)
s=3
return A.a(a.hh(n),$async$aN)
case 3:return A.e(null,r)}})
return A.f($async$aN,r)}}
A.f9.prototype={
aN(a){return this.w9(a)},
w9(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.he(p),$async$aN)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aN,r)}}
A.ft.prototype={
ju(a){var s,r=a.b===0?null:a.ga_(0)
for(s=this.x;r!=null;)if(r instanceof A.ft)if(r.x===s){B.b.E(r.z,this.z)
return!1}else r=r.geK()
else if(r instanceof A.f9){if(r.x===s)break
r=r.geK()}else break
a.fU(a.c,this,!1)
return!0},
aN(a){return this.wb(a)},
wb(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.uI(m,A.E(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.A)(m),++o){n=m[o]
l.tk(n.a,n.b)}k=a
s=3
return A.a(q.w.dd(a,q.x),$async$aN)
case 3:s=2
return A.a(k.d1(c,l),$async$aN)
case 2:return A.e(null,r)}})
return A.f($async$aN,r)}}
A.ew.prototype={
a7(){return"FileType."+this.b}}
A.eO.prototype={
bv(){var s=this.d
if(s!=null)return s
throw A.b(A.w("VFS closed"))},
hZ(a,b){var s=$.xj().h(0,a)
if(s==null)return this.e.d.H(a)?1:0
else return this.bv().cj(s)?1:0},
jW(a,b){var s=$.xj().h(0,a)
if(s==null){this.e.d.F(0,a)
return null}else this.bv().eF(s,!1)},
jX(a){return new v.G.URL(a,"file:///").pathname},
d2(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.d2(a,b)
s=$.xj().h(0,p)
if(s==null)return q.e.d2(a,b)
r=q.bv()
if(!r.cj(s))if((b&4)!==0){r.cP(s).truncate(0)
r.eF(s,!0)}else throw A.b(B.cU)
return new A.fk(new A.lY(q,s,(b&8)!==0),0)},
jZ(a){},
p(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cq(a,b){return this.vC(a,b)},
bA(a){return this.cq(a,!1)},
vC(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.ra(a,b)
s=2
return A.a(m.$1("meta"),$async$cq)
case 2:l=d
k=J.u(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$cq)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$cq)
case 4:o=d
n=q.d=new A.vn(new Uint8Array(2),l,p,o)
if(k){n.eF(B.aB,p.getSize()>0)
n.eF(B.aC,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cq,r)}}
A.ra.prototype={
n1(a){var s=0,r=A.h(t.m),q,p=this,o,n
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
$1(a){return this.n1(a)},
$S:154}
A.lY.prototype={
mi(a,b){return A.za(this.a.bv().cP(this.b),a,{at:b})},
jV(){return this.d>=2?1:0},
i_(){var s=this.a,r=this.b
s.bv().cP(r).flush()
if(this.c)s.bv().eF(r,!1)},
f_(){return this.a.bv().cP(this.b).getSize()},
jY(a){this.d=a},
k_(a){this.a.bv().cP(this.b).flush()},
f0(a){this.a.bv().cP(this.b).truncate(a)},
k0(a){this.d=a},
dW(a,b){if(A.zb(this.a.bv().cP(this.b),a,{at:b})<a.length)throw A.b(B.cW)}}
A.vn.prototype={
cj(a){var s=this.a
A.za(this.b,s,{at:0})
return s[a.a]!==0},
eF(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.C(s)
s[a.a]=r
A.zb(this.b,s,{at:0})},
cP(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.rS.prototype={
nN(a,b){var s=this,r=s.c
r.a!==$&&A.BE()
r.a=s
r=t.S
A.uK(new A.rT(s),r)
A.uK(new A.rU(s),r)
s.r=A.uK(new A.rV(s),r)
s.w=A.uK(new A.rW(s),r)},
eo(a,b){var s=J.J(a),r=this.d.dart_sqlite3_malloc(s.gl(a)+b),q=A.bB(this.b.buffer,0,null)
B.d.af(q,r,r+s.gl(a),a)
B.d.hm(q,r+s.gl(a),r+s.gl(a)+b,0)
return r},
en(a){return this.eo(a,0)},
lR(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
lP(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
lQ(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.rT.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:8}
A.rU.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:8}
A.rV.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:8}
A.rW.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:8}
A.fT.prototype={}
A.qE.prototype={
nK(a){var s,r=this,q=r.a
q.start()
r.c=A.b7(q,"message",new A.qI(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.iW()
q.toString
A.hW(q,s,null,null,!1).aK(new A.qJ(r),t.P)}},
iF(a){return this.pA(a)},
pA(a){var s=0,r=A.h(t.H),q=this
var $async$iF=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.GT(a,new A.qF(q),q.guY(),new A.qG(q),new A.qH(q))
return A.e(null,r)}})
return A.f($async$iF,r)},
f6(a,b,c){return this.nk(a,b,c,c)},
nk(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$f6=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.CH(null))
o=p.e++
n=new A.p($.t,t.a7)
p.f.j(0,o,new A.ad(n,t.h1))
a.i=o
p.a.postMessage(a,A.fD(a))
s=3
return A.a(n,$async$f6)
case 3:m=f
if(J.u(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.DO(m))
case 1:return A.e(q,r)}})
return A.f($async$f6,r)},
qF(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.A()
s=q.d
if(s!=null)s.A()
for(s=q.f,r=new A.aL(s,s.r,s.e,A.o(s).i("aL<2>"));r.k();)r.d.aD(new A.fP(a))
s.ai(0)
p.ar()},
l_(){return this.qF(null)}}
A.qI.prototype={
$1(a){if(a.data=="_disconnect"){this.a.l_()
return}this.a.iF(A.aZ(a.data))},
$S:2}
A.qJ.prototype={
$1(a){this.a.l_()
a.a.ar()},
$S:155}
A.qH.prototype={
$1(a){var s=this.a.f.F(0,a.i)
if(s!=null)s.au(a)},
$S:15}
A.qG.prototype={
$1(a){return this.mV(a)},
mV(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=d.tY(a1,m.signal)
s=6
return A.a(t.nW.b(j)?j:A.bk(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.M(a0)
k=A.aa(a0)
if(!(l instanceof A.cQ)){b.console.error("Error in worker: "+J.av(l))
b.console.error("Original trace: "+A.r(k))}b=l
if(b instanceof A.d6){h=A.D0(b)
g=0}else{g=b instanceof A.cQ?1:null
h=null}f={e:J.av(b),s:g,r:h,i:e,t:"errorResponse"}
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
c.F(0,e)
s=o.pop()
break
case 5:c=f
d.a.postMessage(c,A.fD(c))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:156}
A.qF.prototype={
$1(a){var s=this.a.r.F(0,a.i)
if(s!=null)s.abort()},
$S:15}
A.fP.prototype={
m(a){return"Channel to database worker is closed: "+A.r(this.a)},
$iL:1}
A.nU.prototype={
bW(a){return this.vn(a)},
vn(a){var s=0,r=A.h(t.n),q
var $async$bW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.t0(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bW,r)}}
A.jl.prototype={}
A.nF.prototype={}
A.e0.prototype={}
A.jB.prototype={
hF(){var s=0,r=A.h(t.H),q=this
var $async$hF=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.bA(q.b),$async$hF)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hF,r)},
jK(){var s=0,r=A.h(t.H),q=this
var $async$jK=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.p()
return A.e(null,r)}})
return A.f($async$jK,r)}}
A.oH.prototype={
wd(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
oL(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.t7.prototype={
$1(a){var s=new A.p($.t,t.D),r=new A.cx(new A.ad(s,t.F))
this.a.a=r
this.b.au(r)
return A.D7(s)},
$S:157}
A.t8.prototype={
$2(a,b){var s,r,q
A.aZ(a)
s=J.u(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.bQ(new A.cQ("Operation was cancelled"),b)
else q.bQ(a,b)}return null},
$S:158}
A.cx.prototype={}
A.jo.prototype={
gtx(){if(this.c.a)return!1
return!this.d||this.f!=null},
d9(a){return this.nU(a)},
nU(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$d9=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.iW()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.hW(n,o.a,null,o.gpG(),!0),$async$d9)
case 6:m=c
s=7
return A.a(A.hW(n,o.b,a,null,!1),$async$d9)
case 7:l=c
j=o.e
j=j==null?null:j.hF()
s=8
return A.a(j instanceof A.p?j:A.bk(j,t.H),$async$d9)
case 8:o.f=new A.at(m,l)
q=1
s=5
break
case 3:q=2
i=p.pop()
j=m
if(j!=null)j.a.ar()
j=l
if(j!=null)j.a.ar()
throw i
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$d9,r)},
pH(){this.mj()},
jy(a,b,c){return this.c.hV(new A.o6(this,a,b,c),b,c)},
mj(){return this.c.jU(new A.o7(this),t.H)}}
A.o6.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.d9(r.c).aK(new A.o5(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.o5.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.o7.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.jK()
s.a.ar()
r.a.ar()
p.f=null}},
$S:4}
A.hp.prototype={
hV(a,b,c){return this.wu(a,b,c,c)},
jU(a,b){return this.hV(a,null,b)},
wu(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$hV=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.u(g?null:b.aborted,!0))throw A.b(B.a7)
h.a=!1
o=new A.pY(h,p)
if(!p.a){h.a=p.a=!0
q=A.h6(a,c).aO(o)
s=1
break}else{n={}
m=new A.p($.t,c.i("p<0>"))
l=new A.ad(m,c.i("ad<0>"))
n.a=null
h=new A.pX(h,n,l,a,c)
if(!g)n.a=A.b7(b,"abort",new A.pW(n,p,l,h),!1,t.m)
g=p.b
n=g.a
k=g.c
n[k]=h
n=n.length
k=(k+1&n-1)>>>0
g.c=k
if(g.b===k){j=A.aE(n*2,null,!1,g.$ti.i("1?"))
h=g.a
n=g.b
i=h.length-n
B.b.ab(j,0,i,h,n)
B.b.ab(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.aO(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$hV,r)}}
A.pY.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gB(0)){s=r.b
if(s===r.c)A.x(A.aq());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.pX.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.A()
r.c.au(A.h6(r.d,r.e))},
$S:0}
A.pW.prototype={
$1(a){var s,r=this
r.a.a.A()
s=r.c
if((s.a.a&30)===0){r.b.b.F(0,r.d)
s.aD(B.a7)}},
$S:2}
A.dD.prototype={
gms(){var s,r,q,p,o,n=this,m=t.s,l=A.l([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q){p=s[q]
B.b.E(l,A.l([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.om.prototype={
$1(a){if(a!=null)return A.I(a)
return null},
$S:159}
A.k1.prototype={
a7(){return"MessageType."+this.b}}
A.r5.prototype={
tY(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.hs(a,b)
case"connect":return p.jo(a,b)
case"custom":return p.dE(a,b)
case"fileSystemExists":return p.ez(a,b)
case"fileSystemFlush":return p.eA(a,b)
case"fileSystemAccess":return p.ey(a,b)
case"runQuery":return p.hw(a,b)
case"exclusiveLock":return p.hr(a,b)
case"releaseLock":s=p.bk(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.x(A.w("Lock to be released is not active."))
q.b.ar()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.hp(a,b)
case"openAdditionalConnection":return p.ht(a,b)
case"updateRequest":return p.hx(a,b)
case"rollbackRequest":return p.hv(a,b)
case"commitRequest":return p.hq(a,b)
case"dedicatedCompatibilityCheck":return p.de(a,b)
case"sharedCompatibilityCheck":return p.de(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.de(a,b)
default:r=A.fx(new A.bv(!1,o,o,"Unsupported request "+A.r(a.t)),o)
q=new A.p($.t,t.hl)
q.c3(r)
return q}}}
A.cT.prototype={
a7(){return"FileSystemImplementation."+this.b}}
A.c6.prototype={
a7(){return"TypeCode."+this.b},
tJ(a){var s=null
switch(this.a){case 0:s=A.x(A.O("Unsupported type code",null))
break
case 1:a=A.ah(A.eh(a))
s=a
break
case 2:s=A.y9(t.bJ.a(a).toString(),null)
break
case 3:A.eh(a)
s=a
break
case 4:A.I(a)
s=a
break
case 5:t.Z.a(a)
s=a
break
case 7:A.fv(a)
s=a
break
case 6:break}return s}}
A.dE.prototype={
lJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.O("Expected "+A.r(r)+" parameters, got "+A.r(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.ae:B.aF[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.ah(A.eh(h))))
if(k!==0)a.bn(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bn(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.eh(h))
if(k!==0)a.bn(k,e)
break
case 4:g=B.i.v(A.I(h))
k=s.dart_sqlite3_bind_text(d,i,c.en(g),g.length)
if(k!==0)a.bn(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.en(h),h.length)
if(k!==0)a.bn(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bn(k,e)
break
case 7:f=A.fv(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bn(k,e)
break
case 0:throw A.b(A.Y("Unknown type code"))}}},
gl(a){return this.a.length},
sl(a,b){this.lw()},
h(a,b){var s=this.c[b],r=s>=8?B.ae:B.aF[s]
return r.tJ(this.a[b])},
j(a,b,c){this.lw()},
lw(){throw A.b(A.Y("decodeValues list is unmodifiable"))}}
A.wz.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:15}
A.nh.prototype={
$1(a){this.a.au(this.c.a(this.b.result))},
$S:2}
A.ni.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aD(s)},
$S:2}
A.nl.prototype={
$1(a){this.a.au(this.c.a(this.b.result))},
$S:2}
A.nm.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aD(s)},
$S:2}
A.nn.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aD(s)},
$S:2}
A.qz.prototype={
ug(){var s,r,q,p
for(s=this.b,r=new A.aL(s,s.r,s.e,A.o(s).i("aL<2>"));r.k();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.ai(0)}}
A.h1.prototype={
a7(){return"FileType."+this.b}}
A.d7.prototype={
a7(){return"StorageMode."+this.b}}
A.eL.prototype={
m(a){return"Remote error: "+this.a},
$iL:1}
A.cQ.prototype={}
A.wm.prototype={
$1(a){return A.aZ(a.data)},
$S:161}
A.iv.prototype={
A(){var s=this.a
if(s!=null)s.A()
this.a=null}}
A.f8.prototype={
p(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.c.A()
q.d.A()
q.e.A()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.A)(p),++n)p[n].abort()
B.b.ai(p)
p=q.f
if(p!=null)p.b.ar()
s=2
return A.a(q.a.eq(),$async$p)
case 2:return A.e(null,r)}})
return A.f($async$p,r)},
lo(a){var s=new v.G.AbortController()
a.onabort=A.wn(new A.uq(s))
this.w.push(s)
return s},
jR(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gtx()){r=p.lo(b)
o=s.jy(c,r.signal,d).aO(new A.uu(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.w("Requested operation on inactive lock state."))}if(o==null)o=A.h6(c,d)
q=p.a.z
return q instanceof A.cX?o.aO(q.guF()):o},
vz(a){var s=this,r=s.lo(a),q=new A.p($.t,t.hy),p=new A.az(q,t.ho),o=t.H
A.xA(s.a.f.jy(new A.ur(s,p),r.signal,o),new A.us(p),o,t.K)
return q.aO(new A.ut(s,r))}}
A.uq.prototype={
$0(){return this.a.abort()},
$S:0}
A.uu.prototype={
$0(){B.b.F(this.a.w,this.b)},
$S:4}
A.ur.prototype={
$0(){var s=this.a,r=s.r++,q=new A.p($.t,t.D)
s.f=new A.at(r,new A.az(q,t.h))
this.b.au(r)
return q},
$S:3}
A.us.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.bQ(a,b)},
$S:9}
A.ut.prototype={
$0(){B.b.F(this.a.w,this.b)},
$S:4}
A.i5.prototype={
nP(a,b,c){this.b.a.aO(new A.ua(this))},
de(a,b){return this.oU(a,b)},
oU(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$de=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.lL(a),$async$de)
case 3:q={r:d.gms(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$de,r)},
jo(a,b){return this.uL(a,b)},
uL(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$jo=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.gkV()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.fD(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jo,r)},
dE(a,b){return this.uM(a,b)},
uM(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$dE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.kG(l)
n=a.r
s=7
return A.a(o.a.gbX(),$async$dE)
case 7:s=6
return A.a(d.cl(p,new A.nF(n)),$async$dE)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cl(p,new A.jl(a)),$async$dE)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dE,r)},
hs(a,b){return this.v_(a,b)},
v_(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hs=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.jU(new A.uf(p,a),t.m),$async$hs)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hs,r)},
hw(a,b){return this.v3(a,b)},
v3(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$hw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bk(a)
n=o.a
s=3
return A.a(n.gbX(),$async$hw)
case 3:m=d
q=o.jR(a.z,b,new A.ui(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hw,r)},
hr(a,b){return this.uQ(a,b)},
uQ(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hr=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bk(a).vz(b),$async$hr)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hr,r)},
hq(a,b){return this.uK(a,b)},
uK(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bk(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.d7(n,new A.uc(p,o),a),$async$hq)
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
return A.f($async$hq,r)},
hv(a,b){return this.v2(a,b)},
v2(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bk(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.d7(n,new A.uh(p,o),a),$async$hv)
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
return A.f($async$hv,r)},
hx(a,b){return this.v5(a,b)},
v5(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hx=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bk(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.d7(n,new A.uk(p,o),a),$async$hx)
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
return A.f($async$hx,r)},
ht(a,b){return this.v0(a,b)},
v0(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$ht=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bk(a).a;++m.w
s=3
return A.a(A.wC(),$async$ht)
case 3:o=d
n=o.a
p.w.km(o.b).x.push(A.A4(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ht,r)},
hp(a,b){return this.uJ(a,b)},
uJ(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$hp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bk(a)
B.b.F(p.x,o)
s=3
return A.a(o.p(),$async$hp)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hp,r)},
eA(a,b){return this.uT(a,b)},
uT(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$eA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bk(a).a.gct(),$async$eA)
case 3:o=d
s=o instanceof A.cX?4:5
break
case 4:s=6
return A.a(o.cc(!1),$async$eA)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eA,r)},
ey(a,b){return this.uR(a,b)},
uR(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$ey=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bk(a)
n=B.aG[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gct(),$async$ey)
case 4:s=3
return A.a(l.jR(null,k,new j.ud(d,n,m,a),t.m),$async$ey)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ey,r)},
ez(a,b){return this.uS(a,b)},
uS(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$ez=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bk(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gct(),$async$ez)
case 4:s=3
return A.a(n.jR(null,m,new l.ue(d,a),t.y),$async$ez)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ez,r)},
d7(a,b,c){return this.nu(a,b,c)},
nu(a,b,c){var s=0,r=A.h(t.m),q,p
var $async$d7=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.a(b.$0(),$async$d7)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d7,r)},
uZ(a){},
cM(a){var s=0,r=A.h(t.X),q,p=this
var $async$cM=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.f6({r:a,z:null,i:0,d:null,t:"custom"},B.cc,t.m),$async$cM)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cM,r)},
kG(a){return B.b.m0(this.x,new A.u9(a))},
bk(a){var s=a.d
if(s!=null)return this.kG(s)
else throw A.b(A.O("Request requires database id",null))}}
A.ua.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].p(),$async$$0)
case 5:case 3:p.length===o||(0,A.A)(p),++n
s=2
break
case 4:B.b.ai(p)
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.uf.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.bW(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.uD(h.d,A.D3(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gct():m.gbX(),$async$$0)
case 8:l=A.A4(m,null)
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
return A.a(m.eq(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:162}
A.ui.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.w("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.dE(s,r,A.bB(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.nf(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.ah(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.uv(l,k.s,q)
s=o.d
return A.Bs(s.sqlite3_get_autocommit(p)!==0,m,A.ah(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:40}
A.uc.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gbX(),$async$$0)
case 3:q=b.a.of().gcv().aQ(new A.ub(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:61}
A.ub.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.fD(s))},
$S:46}
A.uh.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gbX(),$async$$0)
case 3:q=b.a.rD().gcv().aQ(new A.ug(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:61}
A.ug.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.fD(s))},
$S:46}
A.uk.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gbX(),$async$$0)
case 3:q=b.a.t_().gcv().aQ(new A.uj(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:165}
A.uj.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.fD(s))},
$S:166}
A.ud.prototype={
$0(){var s,r,q,p=this,o=p.a.d2(new A.hM(A.AG(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.f0(s.byteLength)
o.dW(A.bB(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.f_()
r=new Uint8Array(q)
o.i1(r,0)
q={r:t.a.a(J.Cu(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.i_()}},
$S:40}
A.ue.prototype={
$0(){return this.a.hZ(A.AG(B.aG[this.b.f]),0)===1},
$S:48}
A.u9.prototype={
$1(a){return a.b===this.a},
$S:167}
A.jp.prototype={
gct(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gct=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.h6(new A.oa(p),t.H):o,$async$gct)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gct,r)},
gbX(){var s=0,r=A.h(t.u),q,p=this,o
var $async$gbX=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.h6(new A.o9(p),t.u):o,$async$gbX)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gbX,r)},
eq(){var s=0,r=A.h(t.H),q=this
var $async$eq=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.a(q.p(),$async$eq)
case 4:case 3:return A.e(null,r)}})
return A.f($async$eq,r)},
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
if(j!=null)j.ug()
n.a.p()
m=q.z
if(m!=null){j=p.a
l=$.yF()
A.xy(m)
k=l.a.get(m)
if(k==null)A.x(A.w("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.p?j:A.bk(j,t.H),$async$p)
case 6:q.f.mj()
return A.e(null,r)}})
return A.f($async$p,r)},
l7(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.F(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.at(s,!0)
p=a.hK(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.F(0,new A.Z(n,A.o(n).i("Z<1>")).gC(0)).p()
n.j(0,p.d,p)
return new A.at(p,!0)}return new A.at(p,!1)},
uv(a,b,c){var s,r,q
if(c.gl(0)===0)return a.aw(b,B.w)
else{s=null
r=null
q=this.l7(a,b)
s=q.a
r=q.b
try{s.jn(new A.jm(c.gtv()))}finally{if(r)s.cX()
else s.p()}}},
nf(a,b,c){var s,r=null,q=null,p=this.l7(a,b)
r=p.a
q=p.b
try{s=A.DP(r,c)
return s}finally{if(q)r.cX()
else r.p()}}}
A.oa.prototype={
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
return A.a(A.r9("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.gdw()
s=3
break
case 5:case 6:s=10
return A.a(A.jC("drift_db/"+l.c,k===B.ab,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.gdw()
s=3
break
case 7:s=11
return A.a(A.jJ(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.gdw()
s=3
break
case 8:l.z=A.xD("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.o9.prototype={
$0(){var s=0,r=A.h(t.u),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.a(k,$async$$0)
case 3:o=b
s=4
return A.a(l.gct(),$async$$0)
case 4:n=b
o.m5()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.eo(B.i.v(n.a),1),n,0)
if(m===0)A.x(A.w("could not register vfs"))
$.yF().j(0,n,m)
s=5
return A.a(l.f.jy(new A.o8(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:60}
A.o8.prototype={
$0(){var s=this.a
return s.a.b.hI(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:60}
A.tk.prototype={
gkV(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.nn()
r.Q!==$&&A.xg()
r.Q=s
q=s}return q},
dF(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$dF=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.bR(A.bF(A.Fz(n.a),"stream",t.K),t.I)
q=2
j=v.G
case 5:s=7
return A.a(h.k(),$async$dF)
case 7:if(!b){s=6
break}m=h.gn()
s=J.u(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.fT(i.port,i.lockName,null)
n.km(l)
s=9
break
case 10:s=A.He(m.t)?11:12
break
case 11:s=13
return A.a(n.lL(m),$async$dF)
case 13:k=b
j.postMessage(k.gms())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.a(h.A(),$async$dF)
case 14:s=o.pop()
break
case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dF,r)},
km(a){var s=this,r=A.Ev(a,s.d++,s)
s.c.push(r)
r.b.a.aO(new A.tl(s,r))
return r},
lL(a){return this.x.jU(new A.tm(this,a),t.p6)},
bW(a){return this.vo(a)},
vo(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$bW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.aZ(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.w("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.r(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bk(n,t.he),$async$bW)
case 5:s=3
break
case 4:o=A.xA(q.b.bW(m),new A.tn(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$bW)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$bW,r)},
uD(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.aL(s,s.r,s.e,A.o(s).i("aL<2>"));r.k();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.ab||b===B.aA
o=A.xJ(t.cj)
n=c===0?null:new A.qz(c,A.hg(null,null,t.N,t.fw))
n=new A.jp(this,r,a,b,d,new A.jo(q+"-outer",q,new A.hp(o),p),n)
s.j(0,r,n)
return n}}
A.tl.prototype={
$0(){var s=this.a,r=s.c
B.b.F(r,this.b)
if(r.length===0)s.a.p()
return null},
$S:0}
A.tm.prototype={
$0(){var s=0,r=A.h(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.u(d.t,"dedicatedCompatibilityCheck")||J.u(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.a(A.dn(),$async$$0)
case 6:o=a1
n=o.a
m=o.b
l=m
k=n
s=4
break
case 5:k=!1
l=!1
case 4:b=J.u(d.t,"dedicatedCompatibilityCheck")||J.u(d.t,"sharedCompatibilityCheck")
if(b){s=7
break}else a1=b
s=8
break
case 7:s=9
return A.a(A.mn(),$async$$0)
case 9:case 8:j=a1
i=A.aU(t.cU)
s=J.u(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.gkV()
g=h!=null
s=g?13:14
break
case 13:d={d:c,i:0,t:"dedicatedInSharedCompatibilityCheck"}
f=A.fD(d)
n=h.a
n.postMessage(d,f)
b=A
a=A
s=15
return A.a(new A.fc(n,"message",!1,t.d4).gC(0),$async$$0)
case 15:e=b.CO(a.aZ(a1.data))
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
return A.a(A.fF(),$async$$0)
case 18:d=b.K(a1)
case 19:if(!d.k()){s=20
break}i.t(0,new A.at(B.aS,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.wy(c),$async$$0)
case 23:if(a1)i.t(0,new A.at(B.aT,c))
case 22:d=A.P(i,i.$ti.c)
q=new A.dD(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:169}
A.tn.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:170}
A.iH.prototype={}
A.lr.prototype={
gm4(){return new A.fc(this.a,"message",!1,t.d4)},
p(){return this.a.close()}}
A.lW.prototype={
gm4(){return new A.cM(new A.vC(this),t.k8)},
p(){}}
A.vC.prototype={
$1(a){var s=A.l([],t.E),r=A.l([],t.dw)
r.push(A.b7(this.a.a,"connect",new A.vz(new A.vD(s,r,a)),!1,t.m))
a.r=new A.vA(r)},
$S:171}
A.vD.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.b7(a,"message",new A.vB(this.c),!1,t.m))},
$S:2}
A.vB.prototype={
$1(a){this.a.tj(a)},
$S:2}
A.vz.prototype={
$1(a){var s,r=a.ports
r=J.K(t.ip.b(r)?r:new A.bw(r,A.a7(r).i("bw<1,H>")))
s=this.a
while(r.k())s.$1(r.gn())},
$S:2}
A.vA.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.A)(s),++q)s[q].A()},
$S:4}
A.ls.prototype={
nn(){var s=v.G
if(!("Worker" in s))return null
return new A.uD(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.uD.prototype={}
A.kI.prototype={
gf8(){return A.I(this.c)}}
A.rr.prototype={
gjx(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
i4(a){var s,r=this,q=r.d=J.Cw(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gI()
return s},
lY(a,b){var s
if(this.i4(a))return
if(b==null)if(a instanceof A.ex)b="/"+a.a+"/"
else{s=J.av(a)
s=A.B(s,"\\","\\\\")
b='"'+A.B(s,'"','\\"')+'"'}this.kN(b)},
ew(a){return this.lY(a,null)},
uy(){if(this.c===this.b.length)return
this.kN("no more input")},
uu(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.x(A.aI("position must be greater than or equal to 0."))
else if(c>n.length)A.x(A.aI("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.x(A.aI("position plus length must not go beyond the end of the string."))
s=this.a
r=A.l([0],t.t)
q=n.length
p=new A.rb(s,r,new Uint32Array(q))
p.nL(new A.bY(n),s)
o=c+b
if(o>q)A.x(A.aI("End "+o+u.D+p.gl(0)+"."))
else if(c<0)A.x(A.aI("Start may not be negative, was "+c+"."))
throw A.b(new A.kI(n,a,new A.fd(p,c,o)))},
kN(a){this.uu("expected "+a+".",0,this.c)}}
A.eY.prototype={
gl(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.zd(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.zd(b,this))
s=this.a
s.$flags&2&&A.C(s)
s[b]=c},
sl(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.C(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.kD(b)
B.d.af(p,0,o.b,o.a)
o.a=p}}o.b=b},
t(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.rY(q)
q=r.a
s=r.b++
q.$flags&2&&A.C(q)
q[s]=b},
kD(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
rY(a){var s=this.kD(null)
B.d.af(s,0,a,this.a)
this.a=s},
ab(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.ak(c,0,s,null,null))
s=this.a
if(d instanceof A.c7)B.d.ab(s,b,c,d.a,e)
else B.d.ab(s,b,c,d,e)},
af(a,b,c,d){return this.ab(0,b,c,d,0)}}
A.lB.prototype={}
A.c7.prototype={}
A.xw.prototype={}
A.fc.prototype={
a5(a,b,c,d){return A.b7(this.a,this.b,a,!1,this.$ti.c)},
by(a,b,c){return this.a5(a,null,b,c)}}
A.ib.prototype={
A(){var s=this,r=A.c_(null,t.H)
if(s.b==null)return r
s.j5()
s.d=s.b=null
return r},
hG(a){var s,r=this
if(r.b==null)throw A.b(A.w("Subscription has been canceled."))
r.j5()
s=A.B4(new A.uH(a),t.m)
s=s==null?null:A.ct(s)
r.d=s
r.j3()},
be(){if(this.b==null)return;++this.a
this.j5()},
b3(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.j3()},
j3(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
j5(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibg:1}
A.uG.prototype={
$1(a){return this.a.$1(a)},
$S:2}
A.uH.prototype={
$1(a){return this.a.$1(a)},
$S:2};(function aliases(){var s=J.d_.prototype
s.nA=s.m
s=A.bz.prototype
s.nw=s.m6
s.nx=s.m7
s.nz=s.m9
s.ny=s.m8
s=A.aJ.prototype
s.i5=s.aq
s.ki=s.aB
s.kj=s.aL
s=A.cK.prototype
s.nD=s.kB
s.nE=s.kQ
s.nF=s.lm
s=A.D.prototype
s.kh=s.ab
s=A.ap.prototype
s.kg=s.tu
s=A.iw.prototype
s.nG=s.p
s=A.j7.prototype
s.kf=s.hn
s=A.bX.prototype
s.nv=s.hi
s=A.eQ.prototype
s.nC=s.T
s.nB=s.X})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"FI","Dg",42)
r(A,"FV","DE",10)
q(A,"Gm","Eh",16)
q(A,"Gn","Ei",16)
q(A,"Go","Ej",16)
q(A,"Gp","FX",21)
r(A,"B6","Gf",0)
q(A,"Gq","FY",26)
s(A,"Gr","G_",11)
r(A,"ww","FZ",0)
p(A,"Gw",5,null,["$5"],["G9"],173,0)
p(A,"GB",4,null,["$1$4","$4"],["wr",function(a,b,c,d){return A.wr(a,b,c,d,t.z)}],174,0)
p(A,"GD",5,null,["$2$5","$5"],["ws",function(a,b,c,d,e){var i=t.z
return A.ws(a,b,c,d,e,i,i)}],175,0)
p(A,"GC",6,null,["$3$6"],["yo"],176,0)
p(A,"Gz",4,null,["$1$4","$4"],["AV",function(a,b,c,d){return A.AV(a,b,c,d,t.z)}],177,0)
p(A,"GA",4,null,["$2$4","$4"],["AW",function(a,b,c,d){var i=t.z
return A.AW(a,b,c,d,i,i)}],178,0)
p(A,"Gy",4,null,["$3$4","$4"],["AU",function(a,b,c,d){var i=t.z
return A.AU(a,b,c,d,i,i,i)}],179,0)
p(A,"Gu",5,null,["$5"],["G8"],180,0)
p(A,"GE",4,null,["$4"],["wt"],181,0)
p(A,"Gt",5,null,["$5"],["G7"],182,0)
p(A,"Gs",5,null,["$5"],["G6"],183,0)
p(A,"Gx",4,null,["$4"],["Ga"],184,0)
p(A,"Gv",5,null,["$5"],["AT"],185,0)
var j
o(j=A.e5.prototype,"ge8","bt",0)
o(j,"ge9","bu",0)
n(A.e6.prototype,"gtE",0,1,null,["$2","$1"],["bQ","aD"],43,0,0)
m(A.p.prototype,"gig","og",11)
n(j=A.dj.prototype,"gtg",0,1,null,["$2","$1"],["bw","th"],43,0,0)
l(j,"gnZ","aq",19)
m(j,"gnX","aB",11)
o(j,"goc","aL",0)
o(j=A.de.prototype,"ge8","bt",0)
o(j,"ge9","bu",0)
o(j=A.aJ.prototype,"ge8","bt",0)
o(j,"ge9","bu",0)
o(A.fb.prototype,"gl4","qY",0)
l(j=A.bR.prototype,"gqQ","qR",19)
m(j,"gqU","qV",11)
o(j,"gqS","qT",0)
o(j=A.fe.prototype,"ge8","bt",0)
o(j,"ge9","bu",0)
l(j,"giv","iw",19)
m(j,"giz","iA",123)
o(j,"gix","iy",0)
o(j=A.fl.prototype,"ge8","bt",0)
o(j,"ge9","bu",0)
l(j,"giv","iw",19)
m(j,"giz","iA",11)
o(j,"gix","iy",0)
s(A,"yr","Fu",34)
q(A,"ys","Fv",31)
s(A,"GJ","Dl",42)
q(A,"GN","Fx",29)
k(j=A.lk.prototype,"gtf","t",19)
o(j,"gdw","p",0)
q(A,"Bd","H6",31)
s(A,"Bc","H5",34)
q(A,"GO","E8",7)
p(A,"Hk",2,null,["$1$2","$2"],["Bq",function(a,b){return A.Bq(a,b,t.o)}],186,0)
m(j=A.js.prototype,"gut","ag",34)
l(j,"gv6","ao",31)
l(j,"gvf","vg",21)
q(A,"GH","CG",7)
q(A,"GR","CX",7)
r(A,"Hg","Fw",10)
o(A.ln.prototype,"guH","m1",0)
l(A.kf.prototype,"gvS","vT",8)
o(A.hx.prototype,"guf","hi",0)
o(j=A.bX.prototype,"gJ","av",0)
o(j,"gva","hz","z<bX.T>()")
l(j,"gqO","qP",32)
o(j,"gly","ek",3)
q(A,"GX","z7",187)
o(j=A.ki.prototype,"gqW","qX",0)
l(j,"gqZ","r_",73)
q(A,"GL","xt",188)
l(j=A.kK.prototype,"guW","uX",32)
l(j,"guU","uV",82)
o(j,"gqN","iQ",0)
q(A,"HA","E0",189)
q(A,"Bb","bG",22)
q(A,"Ba","mp",22)
q(A,"HE","Ec",190)
m(j=A.l3.prototype,"goV","it",1)
m(j,"goQ","cE",1)
m(j=A.l1.prototype,"gp6","fp",1)
m(j,"gp0","fo",1)
m(j,"gp8","fq",1)
m(j,"goX","fm",1)
m(j,"goZ","fn",1)
m(j,"gpa","iu",1)
m(j=A.l2.prototype,"gpw","fA",1)
m(j,"gpC","e5",1)
m(j,"gpE","fB",1)
m(j=A.l5.prototype,"gpp","iC",1)
m(j,"gpr","iD",1)
m(j,"gpt","fw",1)
m(j,"gpn","iB",1)
m(j,"gph","fu",1)
m(j,"gpj","df",1)
m(j,"gpl","fv",1)
m(j,"gpf","ft",1)
m(j,"gpd","fs",1)
m(j=A.l6.prototype,"gpy","iE",1)
m(j,"goO","is",1)
m(j,"goM","fk",1)
m(j,"gqn","fQ",1)
m(j,"gql","fP",1)
m(j,"gpI","fC",1)
m(j,"goS","fl",1)
m(j,"gpO","fD",1)
m(j=A.l7.prototype,"gpY","dg",1)
m(j,"gq1","fI",1)
m(j,"gpQ","fE",1)
m(j,"gpS","fF",1)
m(j,"gpU","fG",1)
m(j,"gpW","fH",1)
m(j,"gq3","fJ",1)
m(j,"gq_","iG",1)
m(j=A.l8.prototype,"gq5","fK",1)
m(j,"gq9","fL",1)
m(j,"gqb","fM",1)
m(j,"gqj","fO",1)
m(j,"gqh","e6",1)
m(j,"gqd","fN",1)
m(j,"gq7","iH",1)
m(j,"gqf","iI",1)
m(j=A.l9.prototype,"gqt","fT",1)
m(j,"gqr","fS",1)
m(j,"gqp","fR",1)
l(j=A.jn.prototype,"gvr","vs",8)
m(j,"gvp","vq",125)
n(j,"gwU",0,5,null,["$5"],["wV"],126,0,0)
n(j,"gwJ",0,3,null,["$3"],["wK"],191,0,0)
n(j,"gwB",0,4,null,["$4"],["wC"],62,0,0)
n(j,"gwQ",0,4,null,["$4"],["wR"],62,0,0)
n(j,"gwW",0,3,null,["$3"],["wX"],129,0,0)
m(j,"gx0","x3",51)
m(j,"gwH","wI",51)
l(j,"gwF","wG",38)
n(j,"gwY",0,4,null,["$4"],["wZ"],53,0,0)
n(j,"gxa",0,4,null,["$4"],["xb"],53,0,0)
m(j,"gx6","x7",133)
m(j,"gx4","x5",14)
m(j,"gwO","wP",14)
m(j,"gwS","wT",14)
m(j,"gx8","x9",14)
m(j,"gwD","wE",14)
l(j,"gi0","wL",38)
n(j,"gwM",0,3,null,["$3"],["wN"],135,0,0)
l(j,"gi2","x_",38)
l(j,"gu0","u1",16)
l(j,"gtW","tX",136)
n(j,"gtZ",0,5,null,["$5"],["u_"],137,0,0)
n(j,"gu6",0,4,null,["$4"],["u7"],39,0,0)
n(j,"gua",0,4,null,["$4"],["uc"],39,0,0)
n(j,"gu8",0,4,null,["$4"],["u9"],39,0,0)
m(j,"gud","ue",56)
m(j,"gu4","u5",56)
n(j,"gu2",0,5,null,["$5"],["u3"],140,0,0)
m(j,"gtU","tV",141)
m(j,"gtS","tT",142)
n(j,"gtQ",0,3,null,["$3"],["tR"],143,0,0)
o(j=A.cX.prototype,"gdw","p",3)
o(j,"guF","ck",3)
o(A.eO.prototype,"gdw","p",0)
o(A.jo.prototype,"gpG","pH",0)
l(A.dE.prototype,"gtv","lJ",160)
l(A.i5.prototype,"guY","uZ",2)
q(A,"B9","Bj",127)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.xH,J.jL,A.hJ,J.er,A.uv,A.u6,A.n,A.jf,A.dA,A.a5,A.D,A.r7,A.a8,A.k_,A.dc,A.jz,A.kM,A.kv,A.jw,A.l0,A.h2,A.kS,A.kJ,A.fj,A.fU,A.ff,A.c1,A.rJ,A.kb,A.fZ,A.it,A.T,A.ph,A.bK,A.aL,A.jV,A.ex,A.fi,A.ld,A.eT,A.vK,A.ll,A.m5,A.c0,A.lx,A.vP,A.ix,A.hZ,A.lf,A.ih,A.m1,A.ac,A.a2,A.aJ,A.i3,A.kN,A.ie,A.e6,A.bP,A.p,A.le,A.dj,A.m2,A.i0,A.lb,A.lt,A.uE,A.di,A.fb,A.bR,A.ia,A.wa,A.wc,A.wb,A.w8,A.w9,A.w7,A.w4,A.mg,A.w3,A.w2,A.w6,A.w5,A.mf,A.mh,A.me,A.fu,A.hY,A.ly,A.vl,A.dh,A.lE,A.aV,A.lH,A.m4,A.hn,A.lF,A.kH,A.jh,A.ap,A.lh,A.mU,A.lg,A.jg,A.lX,A.e7,A.vi,A.vL,A.m6,A.cN,A.aA,A.lw,A.b1,A.ay,A.uF,A.kc,A.hO,A.lv,A.b3,A.jK,A.X,A.Q,A.m0,A.kD,A.r6,A.ab,A.iE,A.rP,A.bQ,A.jA,A.ka,A.vb,A.vc,A.jx,A.W,A.jt,A.hb,A.dN,A.fq,A.fh,A.hk,A.js,A.k9,A.kT,A.bZ,A.es,A.oI,A.dz,A.j6,A.j7,A.mQ,A.k3,A.eB,A.kC,A.aN,A.a_,A.n1,A.n2,A.n3,A.mC,A.tG,A.ju,A.nf,A.jr,A.hi,A.kE,A.qx,A.lG,A.ln,A.f7,A.kf,A.r0,A.aK,A.cW,A.h4,A.bM,A.nr,A.bI,A.lm,A.bo,A.vx,A.bX,A.tC,A.mS,A.kF,A.h0,A.op,A.b2,A.pm,A.kO,A.mO,A.ki,A.qe,A.hA,A.fm,A.qm,A.vE,A.dJ,A.cU,A.jF,A.cg,A.cV,A.d8,A.qc,A.mD,A.bm,A.nt,A.kK,A.hl,A.dS,A.pH,A.d1,A.k0,A.vs,A.vq,A.q_,A.mR,A.hj,A.hH,A.q4,A.kl,A.qK,A.aM,A.qT,A.b4,A.eV,A.eU,A.rt,A.bh,A.eS,A.ck,A.eK,A.hG,A.cd,A.rv,A.hF,A.hR,A.rG,A.cm,A.cj,A.dT,A.nU,A.e0,A.lo,A.kU,A.rO,A.f3,A.l_,A.t6,A.fW,A.hE,A.kp,A.S,A.f4,A.l3,A.l1,A.l2,A.l5,A.l6,A.w1,A.l7,A.vO,A.l8,A.f5,A.l9,A.nA,A.rs,A.kd,A.ke,A.rb,A.ky,A.eQ,A.oJ,A.b8,A.c8,A.c2,A.kB,A.c3,A.d6,A.nV,A.dk,A.rd,A.dC,A.aO,A.ja,A.nE,A.lR,A.vr,A.dK,A.jm,A.cJ,A.hM,A.t1,A.rX,A.t3,A.t2,A.e_,A.db,A.jn,A.e8,A.rY,A.mK,A.ig,A.uI,A.lI,A.lA,A.vn,A.rS,A.fT,A.r5,A.fP,A.jl,A.jB,A.oH,A.cx,A.jo,A.hp,A.dD,A.qz,A.eL,A.iv,A.f8,A.jp,A.tk,A.iH,A.ls,A.uD,A.rr,A.xw,A.ib])
q(J.jL,[J.jN,J.hd,J.ar,J.b9,J.ey,J.dL,J.cY])
q(J.ar,[J.d_,J.y,A.eE,A.hr])
q(J.d_,[J.kg,J.da,J.bx])
r(J.jM,A.hJ)
r(J.pe,J.y)
q(J.dL,[J.hc,J.jO])
q(A.n,[A.dd,A.F,A.cA,A.bj,A.h_,A.dZ,A.cD,A.bp,A.eb,A.lc,A.m_,A.fo,A.dM])
q(A.dd,[A.dy,A.iI])
r(A.i8,A.dy)
r(A.i4,A.iI)
q(A.dA,[A.n5,A.n4,A.p8,A.rH,A.wY,A.x_,A.tO,A.tN,A.wf,A.we,A.oF,A.oA,A.uM,A.uL,A.uX,A.v_,A.rn,A.ro,A.rl,A.uC,A.uB,A.vw,A.v2,A.uy,A.vk,A.pB,A.vg,A.nD,A.u1,A.oB,A.x1,A.x7,A.x8,A.wE,A.mX,A.mZ,A.n0,A.j9,A.mT,A.wh,A.mV,A.pF,A.wP,A.xh,A.re,A.rf,A.wO,A.ok,A.oj,A.ol,A.oi,A.oh,A.og,A.od,A.oe,A.of,A.pA,A.pw,A.pz,A.py,A.px,A.pu,A.uo,A.ul,A.pR,A.pP,A.pQ,A.nd,A.nb,A.na,A.ne,A.nc,A.n9,A.n8,A.tD,A.x6,A.os,A.oq,A.ot,A.ou,A.pn,A.pp,A.pr,A.pt,A.po,A.t5,A.ql,A.qh,A.qi,A.qj,A.qk,A.qf,A.qg,A.qr,A.qs,A.qn,A.qo,A.qp,A.qq,A.qu,A.mE,A.mF,A.nv,A.nu,A.rE,A.rw,A.rC,A.rx,A.ry,A.rz,A.wA,A.wB,A.pO,A.pI,A.pJ,A.pK,A.pL,A.pM,A.q1,A.q2,A.qb,A.q9,A.q8,A.q7,A.qa,A.qR,A.qL,A.qN,A.qP,A.qU,A.qZ,A.ru,A.wR,A.xb,A.x9,A.xa,A.ng,A.x4,A.wW,A.wV,A.wI,A.ti,A.tc,A.td,A.te,A.tp,A.tq,A.tr,A.ty,A.ts,A.nB,A.nC,A.wu,A.oL,A.oK,A.oM,A.oO,A.oQ,A.oN,A.p3,A.rg,A.o2,A.vH,A.x5,A.xc,A.xd,A.mJ,A.uw,A.ux,A.nj,A.nk,A.no,A.np,A.nq,A.ov,A.mN,A.mL,A.v5,A.v8,A.v9,A.p7,A.p5,A.v4,A.ra,A.rT,A.rU,A.rV,A.rW,A.qI,A.qJ,A.qH,A.qG,A.qF,A.t7,A.o5,A.pW,A.om,A.wz,A.nh,A.ni,A.nl,A.nm,A.nn,A.wm,A.ub,A.ug,A.uj,A.u9,A.vC,A.vD,A.vB,A.vz,A.uG,A.uH])
q(A.n5,[A.u7,A.nz,A.pf,A.wZ,A.wg,A.wv,A.oG,A.oz,A.uN,A.uY,A.v0,A.tF,A.v1,A.pi,A.pD,A.vj,A.u0,A.vW,A.rQ,A.vV,A.vU,A.oD,A.oC,A.mW,A.mY,A.n_,A.j8,A.pV,A.pG,A.xi,A.wx,A.pS,A.qw,A.qd,A.mG,A.wM,A.wG,A.t9,A.wJ,A.tg,A.th,A.oP,A.va,A.t8,A.us,A.tn])
r(A.bw,A.i4)
q(A.a5,[A.cZ,A.km,A.cH,A.jP,A.kR,A.ks,A.lu,A.hz,A.hf,A.j1,A.bv,A.cq,A.kQ,A.bf,A.jj])
q(A.D,[A.eZ,A.f2,A.dE,A.eY])
r(A.bY,A.eZ)
q(A.n4,[A.x3,A.qB,A.tP,A.tQ,A.vN,A.vM,A.wd,A.tS,A.tT,A.tV,A.tW,A.tU,A.tR,A.oE,A.uO,A.uT,A.uS,A.uQ,A.uP,A.uW,A.uV,A.uU,A.uZ,A.rm,A.rp,A.rk,A.vG,A.vF,A.tE,A.u5,A.u4,A.vo,A.vm,A.wi,A.wj,A.uA,A.uz,A.vv,A.vu,A.wq,A.vZ,A.vY,A.ob,A.wo,A.wp,A.pE,A.pv,A.up,A.um,A.un,A.on,A.p4,A.oy,A.rj,A.n6,A.n7,A.rI,A.pZ,A.or,A.oo,A.pq,A.ps,A.qv,A.qt,A.ns,A.ny,A.nx,A.nw,A.rB,A.rA,A.rD,A.qS,A.qM,A.qO,A.qQ,A.qV,A.r_,A.qY,A.qX,A.qW,A.rF,A.q6,A.q0,A.tb,A.tj,A.to,A.tz,A.tB,A.tA,A.tt,A.tx,A.tw,A.tv,A.tu,A.p2,A.oR,A.oY,A.oZ,A.p_,A.p0,A.oW,A.oX,A.oS,A.oT,A.oU,A.oV,A.p1,A.v3,A.o3,A.o4,A.o0,A.o_,A.o1,A.nX,A.nW,A.nY,A.nZ,A.vI,A.vJ,A.xe,A.nJ,A.nG,A.nL,A.nN,A.nP,A.nI,A.nO,A.nT,A.nR,A.nQ,A.nK,A.nM,A.nS,A.nH,A.mH,A.mI,A.rZ,A.mM,A.v6,A.v7,A.uJ,A.p6,A.o6,A.o7,A.pY,A.pX,A.uq,A.uu,A.ur,A.ut,A.ua,A.uf,A.ui,A.uc,A.uh,A.uk,A.ud,A.ue,A.oa,A.o9,A.o8,A.tl,A.tm,A.vA])
q(A.F,[A.R,A.dH,A.Z,A.aT,A.aH,A.ea,A.ij])
q(A.R,[A.c4,A.a6,A.dU,A.hh,A.lD])
r(A.dG,A.cA)
r(A.fY,A.dZ)
r(A.eu,A.cD)
q(A.fj,[A.lJ,A.lK,A.lL])
q(A.lJ,[A.at,A.iq,A.ir,A.fk,A.lM])
r(A.ee,A.lK)
q(A.lL,[A.ef,A.lN])
r(A.aR,A.fU)
q(A.c1,[A.fV,A.is])
r(A.cw,A.fV)
r(A.h9,A.p8)
r(A.hw,A.cH)
q(A.rH,[A.rh,A.fM])
q(A.T,[A.bz,A.cK,A.lC])
q(A.bz,[A.he,A.ii])
r(A.eD,A.eE)
q(A.hr,[A.hq,A.eF])
q(A.eF,[A.il,A.io])
r(A.im,A.il)
r(A.d3,A.im)
r(A.ip,A.io)
r(A.bA,A.ip)
q(A.d3,[A.k4,A.k5])
q(A.bA,[A.k6,A.k7,A.k8,A.hs,A.ht,A.hu,A.dR])
r(A.iy,A.lu)
q(A.a2,[A.fn,A.hP,A.i9,A.cM,A.ic,A.i2,A.fL,A.fc])
r(A.b6,A.fn)
r(A.aY,A.b6)
q(A.aJ,[A.de,A.fe,A.fl])
r(A.e5,A.de)
r(A.i_,A.i3)
q(A.e6,[A.az,A.ad])
q(A.dj,[A.cr,A.fp])
r(A.iu,A.lb)
q(A.lt,[A.bO,A.fa])
r(A.ik,A.cr)
r(A.ec,A.ic)
q(A.me,[A.lp,A.lQ])
q(A.cK,[A.df,A.i6])
r(A.cL,A.is)
r(A.iD,A.hn)
r(A.f_,A.iD)
q(A.kH,[A.iw,A.vQ,A.tX,A.lZ])
r(A.ve,A.iw)
q(A.jh,[A.dI,A.mP,A.pg])
q(A.dI,[A.j_,A.jT,A.kY])
q(A.ap,[A.m3,A.j5,A.j4,A.jS,A.jR,A.kZ,A.hT,A.jE])
q(A.m3,[A.j0,A.jU])
r(A.u2,A.lh)
q(A.mU,[A.tY,A.f6,A.lk,A.vX])
r(A.tL,A.tY)
r(A.jQ,A.hf)
r(A.vf,A.jg)
r(A.vh,A.vi)
r(A.mi,A.m6)
r(A.w_,A.mi)
q(A.bv,[A.cC,A.h7])
r(A.lq,A.iE)
r(A.eN,A.fq)
r(A.lT,A.jE)
r(A.vy,A.oI)
r(A.lU,A.vy)
r(A.kq,A.dz)
r(A.jd,A.j6)
r(A.cR,A.hP)
q(A.j7,[A.pU,A.r4])
r(A.hQ,A.mQ)
r(A.kG,A.hQ)
r(A.fN,A.W)
q(A.uF,[A.kh,A.fO,A.cS,A.cy,A.jk,A.jv,A.bJ,A.h8,A.pT,A.dQ,A.dv,A.bN,A.j3,A.cn,A.fJ,A.eG,A.hy,A.hN,A.q3,A.ew,A.k1,A.cT,A.c6,A.h1,A.d7])
q(A.hi,[A.hU,A.hS,A.hv,A.fQ,A.hB,A.h3,A.cF,A.hI,A.hK,A.eM,A.fS,A.fX,A.r3])
r(A.h5,A.eM)
r(A.jX,A.lG)
r(A.dB,A.lm)
q(A.bX,[A.hx,A.ji])
r(A.t4,A.mS)
r(A.tM,A.vq)
q(A.bh,[A.eX,A.dV,A.hL,A.bH,A.cf,A.ci,A.eI,A.eJ,A.et,A.dw])
r(A.pl,A.nU)
r(A.jY,A.e0)
q(A.f4,[A.hX,A.e1])
r(A.m7,A.l3)
r(A.m8,A.m7)
r(A.m9,A.m8)
r(A.ma,A.m9)
r(A.mb,A.ma)
r(A.mc,A.mb)
r(A.md,A.mc)
r(A.tf,A.md)
r(A.pc,A.rs)
q(A.pc,[A.qy,A.rR,A.ta])
r(A.jD,A.ky)
q(A.eQ,[A.fd,A.kA])
r(A.eP,A.kB)
r(A.cE,A.kA)
r(A.eR,A.dC)
r(A.jb,A.aO)
q(A.jb,[A.jH,A.cX,A.eO])
q(A.ja,[A.lz,A.lY])
r(A.lO,A.nE)
r(A.lP,A.lO)
r(A.kr,A.lP)
r(A.lS,A.lR)
r(A.bL,A.lS)
q(A.aV,[A.e4,A.aP])
r(A.f1,A.rd)
q(A.aP,[A.id,A.i7,A.f9,A.ft])
r(A.qE,A.r5)
r(A.nF,A.jl)
r(A.cQ,A.eL)
r(A.i5,A.qE)
q(A.iH,[A.lr,A.lW])
r(A.kI,A.eP)
r(A.lB,A.eY)
r(A.c7,A.lB)
s(A.eZ,A.kS)
s(A.iI,A.D)
s(A.il,A.D)
s(A.im,A.h2)
s(A.io,A.D)
s(A.ip,A.h2)
s(A.cr,A.i0)
s(A.fp,A.m2)
s(A.iD,A.m4)
s(A.mi,A.kH)
s(A.lG,A.n2)
s(A.lm,A.n3)
s(A.m7,A.l2)
s(A.m8,A.l6)
s(A.m9,A.l8)
s(A.ma,A.l9)
s(A.mb,A.l7)
s(A.mc,A.l5)
s(A.md,A.l1)
s(A.lO,A.D)
s(A.lP,A.k9)
s(A.lR,A.kT)
s(A.lS,A.T)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",a3:"double",cu:"num",k:"String",V:"bool",Q:"Null",q:"List",j:"Object",G:"Map",H:"JSObject"},mangledNames:{},types:["~()","z<j?>(l4,f3)","~(H)","z<~>()","Q()","z<Q>(bo)","z<~>(bo)","k(k)","~(i)","Q(j,as)","i()","~(j,as)","V(k)","V(@)","i(b5,i)","Q(H)","~(~())","z<aM>()","z<Q>()","~(j?)","z<~>(ig)","V(j?)","j?(j?)","~(q<i>)","z<~>(~)","Q(@)","~(@)","Q(j)","~(j?,j?)","@(@)","~(@,@)","i(j?)","~(a_)","~(k,k)","V(j?,j?)","V(b8)","0&()","j?(G<k,j?>)","i(b5)","~(ko,i,i,i)","H()","i(cg)","i(@,@)","~(j[as?])","k(G<k,j?>)","V(aK)","~(~)","z<q<G<k,j?>>>(k,q<j?>)","V()","z<@>()","k(dP)","i(aO,i)","@(k)","i(b5,i,i,b9)","V(b2)","z<cg>(k)","~(ko,i)","~(k,@)","@()","V(cW)","z<e0>()","z<bg<~>>()","i(aO,i,i,i)","z<Q>(xu)","z<G<k,j?>?>(k)","i(k)","Q(k,k[j?])","~(q<bZ>)","z<a2<q<i>>>()","k?(G<k,j?>)","b2()","z<b2>(bo)","~(d2<q<i>>)","~(hA)","X<k,cU>(k,eS)","ck(@)","~(i,@)","e7<@,@>(bn<@>)","z<d8>(k)","i(d8)","Q(~)","bm()","~(cd)","~(cG)","z<b4>(b4)","b4(b4)","b4(j)","eB()","d1/(j?)","z<j?>(j?)","G<k,j?>(q<j?>)","z<i>(bo)","i(i,i)","V(+(k,j))","k(i[i])","cm()","cj()","dT()","i(+(k,j),+(k,j))","bI<j?>(@)","V(bI<j?>)","i(i)","X<k,j?>(@,@)","p<@>?()","i(+(k,j?),+(k,j?))","~(aN)","~(q<bm>)","a2<q<i>>()","~(eV)","~(q<G<k,j?>>)","~(G<k,j?>?)","z<G<k,j?>?>()","k(k?)","k?()","i(c8)","G<k,j?>(bL)","j(c8)","j(b8)","i(b8,b8)","q<c8>(X<j,q<b8>>)","cE()","k(j?)","~(i,k,i)","~(@,as)","~(N,al,N,~())","~(b9,i)","b5?(aO,i,i,i,i)","G<k,j?>(bm)","0&(k,i?)","i(aO?,i,i)","~(k,k?)","Q(bx,bx)","j?(~)","i(b5,b9)","Q(~())","i(b5,i,i)","i(i())","~(~(i,k,i),i,i,i,b9)","z<@>(bo)","V(bM)","i(ko,i,i,i,i)","i(i(i),i)","i(xV,i)","i(xV,i,i)","i(bM,bM)","aK()","H(y<j?>)","cW()","h4()","H(H?)","~(dx)","z<~>(i,cp)","z<~>(i)","cp()","z<H>(k)","Q(cx)","z<Q>(H)","H(j)","Q(j?,as)","k?(j?)","~(dC)","H(H)","z<H>()","bM()","@(@,k)","z<bg<c3>>()","~(c3)","V(f8)","Q(@,as)","z<dD>()","0&(j?,as)","~(d2<H>)","V(k,k)","~(N?,al?,N,j,as)","0^(N?,al?,N,0^())<j?>","0^(N?,al?,N,0^(1^),1^)<j?,j?>","0^(N?,al?,N,0^(1^,2^),1^,2^)<j?,j?,j?>","0^()(N,al,N,0^())<j?>","0^(1^)(N,al,N,0^(1^))<j?,j?>","0^(1^,2^)(N,al,N,0^(1^,2^))<j?,j?,j?>","ac?(N,al,N,j,as?)","~(N?,al?,N,~())","cG(N,al,N,ay,~())","cG(N,al,N,ay,~(cG))","~(N,al,N,k)","N(N?,al?,N,hY?,G<j?,j?>?)","0^(0^,0^)<cu>","b2(G<k,j?>)","bm(G<k,j?>)","a3(i)","G<k,j?>(b2)","i(aO,i,i)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.at&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.iq&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.ir&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.fk&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.lM&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ee&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.ef&&A.Bu(a,b.a),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.lN&&A.Bu(a,b.a)}}
A.F_(v.typeUniverse,JSON.parse('{"bx":"d_","kg":"d_","da":"d_","HW":"eE","y":{"q":["1"],"ar":[],"F":["1"],"H":[],"n":["1"],"aS":["1"]},"jN":{"V":[],"a9":[]},"hd":{"Q":[],"a9":[]},"ar":{"H":[]},"d_":{"ar":[],"H":[]},"jM":{"hJ":[]},"pe":{"y":["1"],"q":["1"],"ar":[],"F":["1"],"H":[],"n":["1"],"aS":["1"]},"dL":{"a3":[],"am":["cu"]},"hc":{"a3":[],"i":[],"am":["cu"],"a9":[]},"jO":{"a3":[],"am":["cu"],"a9":[]},"cY":{"k":[],"am":["k"],"aS":["@"],"a9":[]},"dd":{"n":["2"]},"dy":{"dd":["1","2"],"n":["2"],"n.E":"2"},"i8":{"dy":["1","2"],"dd":["1","2"],"F":["2"],"n":["2"],"n.E":"2"},"i4":{"D":["2"],"q":["2"],"dd":["1","2"],"F":["2"],"n":["2"]},"bw":{"i4":["1","2"],"D":["2"],"q":["2"],"dd":["1","2"],"F":["2"],"n":["2"],"D.E":"2","n.E":"2"},"cZ":{"a5":[]},"km":{"a5":[]},"bY":{"D":["i"],"q":["i"],"F":["i"],"n":["i"],"D.E":"i"},"F":{"n":["1"]},"R":{"F":["1"],"n":["1"]},"c4":{"R":["1"],"F":["1"],"n":["1"],"R.E":"1","n.E":"1"},"cA":{"n":["2"],"n.E":"2"},"dG":{"cA":["1","2"],"F":["2"],"n":["2"],"n.E":"2"},"a6":{"R":["2"],"F":["2"],"n":["2"],"R.E":"2","n.E":"2"},"bj":{"n":["1"],"n.E":"1"},"h_":{"n":["2"],"n.E":"2"},"dZ":{"n":["1"],"n.E":"1"},"fY":{"dZ":["1"],"F":["1"],"n":["1"],"n.E":"1"},"cD":{"n":["1"],"n.E":"1"},"eu":{"cD":["1"],"F":["1"],"n":["1"],"n.E":"1"},"dH":{"F":["1"],"n":["1"],"n.E":"1"},"bp":{"n":["1"],"n.E":"1"},"eZ":{"D":["1"],"q":["1"],"F":["1"],"n":["1"]},"dU":{"R":["1"],"F":["1"],"n":["1"],"R.E":"1","n.E":"1"},"fU":{"G":["1","2"]},"aR":{"fU":["1","2"],"G":["1","2"]},"eb":{"n":["1"],"n.E":"1"},"fV":{"c1":["1"],"dW":["1"],"F":["1"],"n":["1"]},"cw":{"c1":["1"],"dW":["1"],"F":["1"],"n":["1"]},"hw":{"cH":[],"a5":[]},"jP":{"a5":[]},"kR":{"a5":[]},"kb":{"L":[]},"it":{"as":[]},"ks":{"a5":[]},"bz":{"T":["1","2"],"G":["1","2"],"T.V":"2","T.K":"1"},"Z":{"F":["1"],"n":["1"],"n.E":"1"},"aT":{"F":["1"],"n":["1"],"n.E":"1"},"aH":{"F":["X<1,2>"],"n":["X<1,2>"],"n.E":"X<1,2>"},"he":{"bz":["1","2"],"T":["1","2"],"G":["1","2"],"T.V":"2","T.K":"1"},"fi":{"kn":[],"dP":[]},"lc":{"n":["kn"],"n.E":"kn"},"eT":{"dP":[]},"m_":{"n":["dP"],"n.E":"dP"},"eD":{"ar":[],"H":[],"dx":[],"a9":[]},"eE":{"ar":[],"H":[],"dx":[],"a9":[]},"hr":{"ar":[],"H":[]},"m5":{"dx":[]},"hq":{"ar":[],"xr":[],"H":[],"a9":[]},"eF":{"by":["1"],"ar":[],"H":[],"aS":["1"]},"d3":{"D":["a3"],"q":["a3"],"by":["a3"],"ar":[],"F":["a3"],"H":[],"aS":["a3"],"n":["a3"]},"bA":{"D":["i"],"q":["i"],"by":["i"],"ar":[],"F":["i"],"H":[],"aS":["i"],"n":["i"]},"k4":{"d3":[],"ow":[],"D":["a3"],"q":["a3"],"by":["a3"],"ar":[],"F":["a3"],"H":[],"aS":["a3"],"n":["a3"],"a9":[],"D.E":"a3"},"k5":{"d3":[],"ox":[],"D":["a3"],"q":["a3"],"by":["a3"],"ar":[],"F":["a3"],"H":[],"aS":["a3"],"n":["a3"],"a9":[],"D.E":"a3"},"k6":{"bA":[],"p9":[],"D":["i"],"q":["i"],"by":["i"],"ar":[],"F":["i"],"H":[],"aS":["i"],"n":["i"],"a9":[],"D.E":"i"},"k7":{"bA":[],"pa":[],"D":["i"],"q":["i"],"by":["i"],"ar":[],"F":["i"],"H":[],"aS":["i"],"n":["i"],"a9":[],"D.E":"i"},"k8":{"bA":[],"pb":[],"D":["i"],"q":["i"],"by":["i"],"ar":[],"F":["i"],"H":[],"aS":["i"],"n":["i"],"a9":[],"D.E":"i"},"hs":{"bA":[],"rL":[],"D":["i"],"q":["i"],"by":["i"],"ar":[],"F":["i"],"H":[],"aS":["i"],"n":["i"],"a9":[],"D.E":"i"},"ht":{"bA":[],"rM":[],"D":["i"],"q":["i"],"by":["i"],"ar":[],"F":["i"],"H":[],"aS":["i"],"n":["i"],"a9":[],"D.E":"i"},"hu":{"bA":[],"rN":[],"D":["i"],"q":["i"],"by":["i"],"ar":[],"F":["i"],"H":[],"aS":["i"],"n":["i"],"a9":[],"D.E":"i"},"dR":{"bA":[],"cp":[],"D":["i"],"q":["i"],"by":["i"],"ar":[],"F":["i"],"H":[],"aS":["i"],"n":["i"],"a9":[],"D.E":"i"},"lu":{"a5":[]},"iy":{"cH":[],"a5":[]},"ac":{"a5":[]},"p":{"z":["1"]},"d2":{"bn":["1"]},"ix":{"cG":[]},"hZ":{"fR":["1"]},"fo":{"n":["1"],"n.E":"1"},"aY":{"b6":["1"],"fn":["1"],"a2":["1"],"a2.T":"1"},"e5":{"de":["1"],"aJ":["1"],"bg":["1"],"aJ.T":"1"},"i3":{"bn":["1"]},"i_":{"i3":["1"],"bn":["1"]},"kN":{"L":[]},"hz":{"a5":[]},"e6":{"fR":["1"]},"az":{"e6":["1"],"fR":["1"]},"ad":{"e6":["1"],"fR":["1"]},"hP":{"a2":["1"]},"dj":{"bn":["1"]},"cr":{"i0":["1"],"dj":["1"],"bn":["1"]},"fp":{"dj":["1"],"bn":["1"]},"b6":{"fn":["1"],"a2":["1"],"a2.T":"1"},"de":{"aJ":["1"],"bg":["1"],"aJ.T":"1"},"iu":{"lb":["1"]},"aJ":{"bg":["1"],"aJ.T":"1"},"fn":{"a2":["1"]},"fb":{"bg":["1"]},"i9":{"a2":["1"],"a2.T":"1"},"cM":{"a2":["1"],"a2.T":"1"},"ik":{"cr":["1"],"i0":["1"],"dj":["1"],"d2":["1"],"bn":["1"]},"ic":{"a2":["2"]},"fe":{"aJ":["2"],"bg":["2"],"aJ.T":"2"},"ec":{"ic":["1","2"],"a2":["2"],"a2.T":"2"},"ia":{"bn":["1"]},"fl":{"aJ":["2"],"bg":["2"],"aJ.T":"2"},"i2":{"a2":["2"],"a2.T":"2"},"me":{"N":[]},"lp":{"N":[]},"lQ":{"N":[]},"fu":{"al":[]},"cK":{"T":["1","2"],"G":["1","2"],"T.V":"2","T.K":"1"},"df":{"cK":["1","2"],"T":["1","2"],"G":["1","2"],"T.V":"2","T.K":"1"},"i6":{"cK":["1","2"],"T":["1","2"],"G":["1","2"],"T.V":"2","T.K":"1"},"ea":{"F":["1"],"n":["1"],"n.E":"1"},"ii":{"bz":["1","2"],"T":["1","2"],"G":["1","2"],"T.V":"2","T.K":"1"},"cL":{"c1":["1"],"dW":["1"],"F":["1"],"n":["1"]},"dM":{"n":["1"],"n.E":"1"},"D":{"q":["1"],"F":["1"],"n":["1"]},"T":{"G":["1","2"]},"ij":{"F":["2"],"n":["2"],"n.E":"2"},"hn":{"G":["1","2"]},"f_":{"G":["1","2"]},"hh":{"R":["1"],"F":["1"],"n":["1"],"R.E":"1","n.E":"1"},"c1":{"dW":["1"],"F":["1"],"n":["1"]},"is":{"c1":["1"],"dW":["1"],"F":["1"],"n":["1"]},"e7":{"bn":["1"]},"lC":{"T":["k","@"],"G":["k","@"],"T.V":"@","T.K":"k"},"lD":{"R":["k"],"F":["k"],"n":["k"],"R.E":"k","n.E":"k"},"j_":{"dI":[]},"m3":{"ap":["k","q<i>"]},"j0":{"ap":["k","q<i>"],"ap.T":"q<i>"},"j5":{"ap":["q<i>","k"],"ap.T":"k"},"j4":{"ap":["k","q<i>"],"ap.T":"q<i>"},"hf":{"a5":[]},"jQ":{"a5":[]},"jS":{"ap":["j?","k"],"ap.T":"k"},"jR":{"ap":["k","j?"],"ap.T":"j?"},"jT":{"dI":[]},"jU":{"ap":["k","q<i>"],"ap.T":"q<i>"},"kY":{"dI":[]},"kZ":{"ap":["k","q<i>"],"ap.T":"q<i>"},"hT":{"ap":["q<i>","k"],"ap.T":"k"},"yT":{"am":["yT"]},"b1":{"am":["b1"]},"a3":{"am":["cu"]},"ay":{"am":["ay"]},"i":{"am":["cu"]},"q":{"F":["1"],"n":["1"]},"cu":{"am":["cu"]},"kn":{"dP":[]},"dW":{"F":["1"],"n":["1"]},"k":{"am":["k"]},"aA":{"am":["yT"]},"j1":{"a5":[]},"cH":{"a5":[]},"bv":{"a5":[]},"cC":{"a5":[]},"h7":{"cC":[],"a5":[]},"cq":{"a5":[]},"kQ":{"cq":[],"a5":[]},"bf":{"a5":[]},"jj":{"a5":[]},"kc":{"a5":[]},"hO":{"a5":[]},"lv":{"L":[]},"b3":{"L":[]},"jK":{"cq":[],"L":[],"a5":[]},"m0":{"as":[]},"iE":{"kV":[]},"bQ":{"kV":[]},"lq":{"kV":[]},"ka":{"L":[]},"pb":{"q":["i"],"F":["i"],"n":["i"]},"cp":{"q":["i"],"F":["i"],"n":["i"]},"rN":{"q":["i"],"F":["i"],"n":["i"]},"p9":{"q":["i"],"F":["i"],"n":["i"]},"rL":{"q":["i"],"F":["i"],"n":["i"]},"pa":{"q":["i"],"F":["i"],"n":["i"]},"rM":{"q":["i"],"F":["i"],"n":["i"]},"ow":{"q":["a3"],"F":["a3"],"n":["a3"]},"ox":{"q":["a3"],"F":["a3"],"n":["a3"]},"W":{"G":["2","3"]},"eN":{"fq":["1","dW<1>"],"fq.E":"1"},"jE":{"ap":["q<i>","bZ"]},"lT":{"ap":["q<i>","bZ"],"ap.T":"bZ"},"kq":{"L":[]},"j6":{"xs":[]},"jd":{"xs":[]},"cR":{"a2":["q<i>"],"a2.T":"q<i>"},"dz":{"L":[]},"kG":{"hQ":[]},"fN":{"W":["k","k","1"],"G":["k","1"],"W.K":"k","W.V":"1","W.C":"k"},"ju":{"xu":[]},"hi":{"L":[]},"hU":{"L":[]},"hS":{"L":[]},"hv":{"L":[]},"fQ":{"L":[]},"hB":{"L":[]},"h3":{"L":[]},"cF":{"L":[]},"hI":{"L":[]},"hK":{"L":[]},"eM":{"L":[]},"h5":{"L":[]},"fS":{"L":[]},"fX":{"L":[]},"hx":{"bX":["G<k,j?>?"],"bX.T":"G<k,j?>?"},"cV":{"L":[]},"hl":{"L":[]},"bh":{"L":[]},"eX":{"L":[]},"dV":{"L":[]},"hL":{"L":[]},"bH":{"L":[]},"cf":{"L":[]},"ci":{"L":[]},"eI":{"L":[]},"eJ":{"L":[]},"et":{"L":[]},"dw":{"L":[]},"ji":{"bX":["q<G<k,j?>>"],"bX.T":"q<G<k,j?>>"},"jY":{"e0":[]},"lo":{"l4":[]},"fW":{"L":[]},"hE":{"L":[]},"kp":{"L":[]},"hX":{"f4":[]},"e1":{"f4":[]},"ke":{"L":[]},"jD":{"c2":[],"am":["c2"]},"fd":{"cE":[],"am":["kz"]},"c2":{"am":["c2"]},"ky":{"c2":[],"am":["c2"]},"kz":{"am":["kz"]},"kA":{"am":["kz"]},"kB":{"L":[]},"eP":{"b3":[],"L":[]},"eQ":{"am":["kz"]},"cE":{"am":["kz"]},"d6":{"L":[]},"eR":{"dC":[]},"jH":{"aO":[]},"lz":{"hV":[],"b5":[]},"bL":{"T":["k","@"],"G":["k","@"],"T.V":"@","T.K":"k"},"kr":{"D":["bL"],"q":["bL"],"F":["bL"],"n":["bL"],"D.E":"bL"},"cJ":{"L":[]},"jb":{"aO":[]},"ja":{"hV":[],"b5":[]},"e4":{"aV":["e4"],"aV.E":"e4"},"f2":{"D":["db"],"q":["db"],"F":["db"],"n":["db"],"D.E":"db"},"fL":{"a2":["1"],"a2.T":"1"},"cX":{"aO":[]},"aP":{"aV":["aP"]},"lA":{"hV":[],"b5":[]},"id":{"aP":[],"aV":["aP"],"aV.E":"aP"},"i7":{"aP":[],"aV":["aP"],"aV.E":"aP"},"f9":{"aP":[],"aV":["aP"],"aV.E":"aP"},"ft":{"aP":[],"aV":["aP"],"aV.E":"aP"},"eO":{"aO":[]},"lY":{"hV":[],"b5":[]},"fP":{"L":[]},"dE":{"D":["j?"],"q":["j?"],"F":["j?"],"n":["j?"],"D.E":"j?"},"eL":{"L":[]},"cQ":{"L":[]},"lr":{"iH":["H"]},"lW":{"iH":["H"]},"kI":{"b3":[],"L":[]},"c7":{"eY":["i"],"D":["i"],"q":["i"],"F":["i"],"n":["i"],"D.E":"i"},"eY":{"D":["1"],"q":["1"],"F":["1"],"n":["1"]},"lB":{"eY":["i"],"D":["i"],"q":["i"],"F":["i"],"n":["i"]},"fc":{"a2":["1"],"a2.T":"1"},"ib":{"bg":["1"]}}'))
A.EZ(v.typeUniverse,JSON.parse('{"h2":1,"kS":1,"eZ":1,"iI":2,"fV":1,"eF":1,"bn":1,"hP":1,"m2":1,"lt":1,"m4":2,"hn":2,"is":1,"iD":2,"jg":1,"jh":2,"iw":1,"k9":1,"kT":2,"CC":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",B:"Time including microseconds is outside valid range",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ae
return{fM:s("@<@>"),ie:s("CC<j?>"),bG:s("dv"),om:s("fL<y<j?>>"),hw:s("cd"),lo:s("dx"),fW:s("xr"),kj:s("fN<k>"),iv:s("a_"),dF:s("xs()"),V:s("bY"),bU:s("bI<j?>"),fw:s("dC"),bP:s("am<@>"),p6:s("dD"),br:s("fR<H>"),n8:s("bm"),M:s("cw<k>"),lp:s("jp"),O:s("F<@>"),C:s("a5"),mA:s("L"),eZ:s("jB"),d9:s("aK"),A:s("b2"),k4:s("h0"),pk:s("ow"),kI:s("ox"),Y:s("b3"),gY:s("HS"),nW:s("z<H>"),fr:s("z<d1>"),mj:s("z<Q>"),g7:s("z<@>"),fP:s("z<cx?>"),n1:s("z<j?>(l4,f3)"),jN:s("z<f1?>"),co:s("cU"),w:s("cg"),cF:s("cX"),m6:s("p9"),bW:s("pa"),jx:s("pb"),nZ:s("hb<@>"),U:s("n<@>"),aL:s("y<a_>"),aw:s("y<bI<@>>"),i5:s("y<bZ>"),mK:s("y<aK>"),iw:s("y<z<~>>"),mr:s("y<cW>"),E:s("y<H>"),dO:s("y<q<j?>>"),ic:s("y<G<k,j>>"),d:s("y<G<k,j?>>"),e8:s("y<k3>"),i7:s("y<dS>"),hf:s("y<j>"),ox:s("y<dT>"),my:s("y<cj>"),k1:s("y<eK>"),g2:s("y<hG>"),bo:s("y<hH>"),eb:s("y<aN>"),fU:s("y<+controller,sync(d2<c3>,V)>"),lw:s("y<+controller,sync(d2<~>,V)>"),kC:s("y<+(d7,k)>"),l5:s("y<+(k,j)>"),iE:s("y<+(k,j?)>"),aY:s("y<+(f7,j?,j?,as?)>"),g1:s("y<ck>"),lE:s("y<eR>"),c0:s("y<bM>"),dw:s("y<bg<@>>"),s:s("y<k>"),en:s("y<eU>"),bs:s("y<cp>"),az:s("y<i5>"),i4:s("y<f7>"),fV:s("y<f8>"),pg:s("y<b8>"),dg:s("y<c8>"),p8:s("y<lI>"),bi:s("y<fm>"),gk:s("y<a3>"),dG:s("y<@>"),t:s("y<i>"),fQ:s("y<ac?>"),c:s("y<j?>"),mf:s("y<k?>"),iy:s("aS<@>"),T:s("hd"),m:s("H"),bJ:s("b9"),g:s("bx"),dX:s("by<@>"),aq:s("ar"),kk:s("dM<e4>"),p3:s("dM<aP>"),hI:s("dN<@>"),ba:s("q<bm>"),ck:s("q<b2>"),ip:s("q<H>"),ew:s("q<G<k,j>>"),J:s("q<G<k,j?>>"),eT:s("q<dS>"),hg:s("q<dT>"),a6:s("q<cj>"),jX:s("q<hG>"),kR:s("q<ck>"),bF:s("q<k>"),bR:s("q<eU>"),j:s("q<@>"),L:s("q<i>"),W:s("q<j?>"),kM:s("jX"),jD:s("hj"),ia:s("X<k,cU>"),gc:s("X<k,k>"),eB:s("X<k,j?>"),a3:s("hk<@,@>"),cy:s("G<k,cm>"),dV:s("G<k,i>"),f:s("G<@,@>"),G:s("G<k,j?>"),iZ:s("a6<k,@>"),r:s("d1"),a:s("eD"),dQ:s("d3"),aj:s("bA"),Z:s("dR"),P:s("Q"),K:s("j"),ot:s("kl"),gq:s("eK"),e:s("aM"),b0:s("cC"),lZ:s("HY"),oZ:s("aN"),aK:s("+()"),ja:s("+(H,fT)"),hP:s("+(G<k,cm>,G<k,G<k,j?>>)"),cU:s("+(d7,k)"),mk:s("+(V,H)"),kO:s("+basicSupport,supportsReadWriteUnsafe(V,V)"),mt:s("+(H?,H)"),g0:s("+(G<k,j?>?,cm?,cj?)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("kn"),Q:s("ck"),hF:s("dU<k>"),cu:s("eN<@>"),gi:s("dW<k>"),g_:s("eO"),hq:s("c2"),ol:s("cE"),gE:s("kC"),l:s("as"),nv:s("kE"),h3:s("eS"),ha:s("bg<c3>"),ey:s("bg<~>"),bv:s("kF"),ku:s("a2<q<i>>"),lI:s("d8"),hL:s("hQ"),N:s("k"),eg:s("eU"),k5:s("hR"),n6:s("bN"),mv:s("b4"),nw:s("cm"),em:s("eV"),hU:s("cG"),q:s("kO"),aJ:s("a9"),do:s("cH"),hM:s("rL"),mC:s("rM"),oR:s("c7"),nn:s("rN"),p:s("cp"),cx:s("da"),ph:s("f_<k,k>"),eo:s("cq"),oc:s("kU"),jJ:s("kV"),e6:s("aO"),j2:s("hV"),n:s("f1"),v:s("bp<k>"),u:s("e0"),bp:s("e1"),be:s("l4"),ec:s("f4"),oS:s("f5"),iq:s("az<cp>"),jk:s("az<@>"),ho:s("az<i>"),h:s("az<~>"),oW:s("e7<@,@>"),R:s("e8<H>"),d4:s("fc<H>"),nI:s("p<cx>"),a7:s("p<H>"),hl:s("p<0&>"),os:s("p<k>"),jz:s("p<cp>"),k:s("p<V>"),_:s("p<@>"),hy:s("p<i>"),D:s("p<~>"),nf:s("b8"),mp:s("df<j?,j?>"),fA:s("fh"),k8:s("cM<H>"),fb:s("cM<q<i>>"),mI:s("lX<bZ>"),jy:s("dk<c3,~()>"),af:s("dk<~,V()>"),lU:s("dk<~,~()>"),I:s("bR<H>"),lj:s("bR<q<i>>"),aP:s("ad<cx>"),h1:s("ad<H>"),ex:s("ad<V>"),F:s("ad<~>"),y:s("V"),i:s("a3"),z:s("@"),mq:s("@(j)"),ng:s("@(j,as)"),S:s("i"),ma:s("bm?"),gK:s("z<Q>?"),b3:s("cx?"),B:s("H?"),bE:s("q<bI<@>>?"),lH:s("q<@>?"),b:s("G<k,j?>?"),nh:s("d1?"),X:s("j?"),dY:s("cj?"),lY:s("hF?"),jB:s("ck?"),x:s("k?"),f8:s("cm?"),a_:s("c7?"),he:s("f1?"),dd:s("b8?"),o9:s("V?"),dz:s("a3?"),aV:s("i?"),jh:s("cu?"),o:s("cu"),H:s("~"),cj:s("~()"),i6:s("~(j)"),b9:s("~(j,as)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.bA=J.jL.prototype
B.b=J.y.prototype
B.c=J.hc.prototype
B.v=J.dL.prototype
B.a=J.cY.prototype
B.bB=J.bx.prototype
B.bC=J.ar.prototype
B.ce=A.hq.prototype
B.cf=A.hs.prototype
B.a2=A.ht.prototype
B.d=A.dR.prototype
B.aO=J.kg.prototype
B.al=J.da.prototype
B.a7=new A.cQ("Operation was cancelled")
B.ao=new A.fJ(1,"hidden")
B.Q=new A.dv(0,"applied")
B.a8=new A.dv(1,"quarantined")
B.b_=new A.dv(2,"conflict")
B.R=new A.dv(3,"skipped")
B.b0=new A.j0(127)
B.S=new A.j3(0,"changed")
B.ap=new A.j3(1,"deleted")
B.bi=new A.i9(A.ae("i9<q<i>>"))
B.b1=new A.cR(B.bi)
B.b2=new A.h9(A.Hk(),A.ae("h9<i>"))
B.b4=new A.j5()
B.aq=new A.mP()
B.b3=new A.j4()
B.A={}
B.aK=new A.aR(B.A,[],A.ae("aR<k,j>"))
B.de=new A.pT(0,"conflict")
B.d9=new A.nr()
B.b5=new A.jt(A.ae("jt<0&>"))
B.n=new A.js()
B.ar=new A.jw(A.ae("jw<0&>"))
B.as=new A.jx()
B.b6=new A.jx()
B.b7=new A.jK()
B.at=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.b8=function() {
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
B.bd=function(getTagFallback) {
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
B.b9=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.bc=function(hooks) {
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
B.bb=function(hooks) {
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
B.ba=function(hooks) {
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
B.au=function(hooks) { return hooks; }

B.e=new A.pg()
B.be=new A.pl()
B.bf=new A.hj()
B.bg=new A.kc()
B.h=new A.r7()
B.k=new A.kY()
B.i=new A.kZ()
B.bh=new A.tM()
B.T=new A.uE()
B.av=new A.vb()
B.f=new A.lQ()
B.l=new A.lT()
B.H=new A.m0()
B.aw=new A.cS(0,"create")
B.u=new A.cS(1,"update")
B.bj=new A.cS(2,"archive")
B.bk=new A.cS(3,"restore")
B.ax=new A.cS(4,"purge")
B.bl=new A.cS(5,"hide")
B.U=new A.fO(0,"local")
B.a9=new A.fO(1,"remote")
B.V=new A.fO(2,"resolution")
B.bm=new A.jk(3,"ignore")
B.W=new A.jk(4,"replace")
B.B=new A.jv(0,"normal")
B.bn=new A.jv(1,"full")
B.x=new A.ay(0)
B.ay=new A.ay(1e6)
B.az=new A.ay(16e3)
B.bo=new A.ay(2e5)
B.bp=new A.ay(3e5)
B.X=new A.ay(3e7)
B.bq=new A.ay(3e8)
B.Y=new A.ay(5e5)
B.da=new A.ay(5e6)
B.db=new A.ay(6048e8)
B.dc=new A.ay(7776e9)
B.dd=new A.ay(864e8)
B.aa=new A.bJ(0,"text")
B.Z=new A.bJ(1,"int")
B.a_=new A.bJ(2,"real")
B.y=new A.bJ(3,"bool")
B.a0=new A.bJ(4,"date")
B.C=new A.bJ(5,"enumValue")
B.I=new A.bJ(6,"json")
B.J=new A.bJ(7,"jsonList")
B.D=new A.bJ(8,"ref")
B.br=new A.h0(!1)
B.ab=new A.cT("x",1,"opfsExternalLocks")
B.aA=new A.cT("y",2,"opfsExternalLocksWorkaround")
B.aB=new A.ew("/database",0,"database")
B.aC=new A.ew("/database-journal",1,"journal")
B.bx=new A.b3("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.by=new A.b3("fieldCipher envelope must be a map.",null,null)
B.aD=new A.h8(0,"live")
B.bD=new A.jR(null)
B.bE=new A.jS(null)
B.bF=new A.cy(0,"textExpected")
B.bG=new A.cy(1,"intExpected")
B.bH=new A.cy(2,"numberExpected")
B.bI=new A.cy(3,"boolExpected")
B.bJ=new A.cy(4,"jsonExpected")
B.bK=new A.cy(5,"jsonListExpected")
B.bL=new A.cy(6,"enumValueRejected")
B.bM=new A.jU(255)
B.bN=new A.dN(B.b5,A.ae("dN<k>"))
B.bO=s(["attempt_count","next_retry_at","last_error"],t.s)
B.aE=s([13,10],t.t)
B.ae=new A.c6(0,"unknown")
B.af=new A.c6(1,"integer")
B.ag=new A.c6(2,"bigInt")
B.ah=new A.c6(3,"float")
B.ai=new A.c6(4,"text")
B.aj=new A.c6(5,"blob")
B.ak=new A.c6(6,"$null")
B.aY=new A.c6(7,"boolean")
B.aF=s([B.ae,B.af,B.ag,B.ah,B.ai,B.aj,B.ak,B.aY],A.ae("y<c6>"))
B.aZ=new A.fJ(0,"visible")
B.bP=s([B.aZ,B.ao],A.ae("y<fJ>"))
B.bQ=s([16777216,33554432,67108864,134217728,268435456,536870912,1073741824,2147483648,452984832,905969664],t.t)
B.bv=new A.h1(0,"database")
B.bw=new A.h1(1,"journal")
B.aG=s([B.bv,B.bw],A.ae("y<h1>"))
B.t=new A.cn(0,"clean")
B.a5=new A.cn(1,"dirty")
B.aX=new A.cn(2,"inFlight")
B.P=new A.cn(3,"conflict")
B.a6=new A.cn(4,"error")
B.cE=new A.cn(5,"quarantine")
B.cF=new A.cn(6,"blocked")
B.bR=s([B.t,B.a5,B.aX,B.P,B.a6,B.cE,B.cF],A.ae("y<cn>"))
B.bS=s(["store","record_id","remote_updated","last_seen_at","base_updated","base_hash","base_json","sync_state","dirty_fields","local_rev","access_state","op_id","attempt_count","next_retry_at","last_error","schema_ver"],t.s)
B.bT=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.bz=new A.h8(1,"notArchived")
B.bU=s([B.aD,B.bz],A.ae("y<h8>"))
B.bV=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.aM=new A.hy(0,"fileUpload")
B.aN=new A.hy(1,"fileRemove")
B.bW=s([B.aM,B.aN],A.ae("y<hy>"))
B.bu=new A.cT("s",0,"opfsShared")
B.bs=new A.cT("i",3,"indexedDb")
B.bt=new A.cT("m",4,"inMemory")
B.bX=s([B.bu,B.ab,B.aA,B.bs,B.bt],A.ae("y<cT>"))
B.bY=s([B.aa,B.Z,B.a_,B.y,B.a0,B.C,B.I,B.J,B.D],A.ae("y<bJ>"))
B.j=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.aH=s(["store","record_id","kind","payload_json","base_updated","base_hash","dirty_fields","op_id","created_at","updated_at","depends_on_op"],t.s)
B.bZ=s(["base_updated","base_hash","base_json"],t.s)
B.r=new A.eG(0,"upsert")
B.F=new A.eG(1,"archive")
B.L=new A.eG(2,"restore")
B.c_=s([B.r,B.F,B.L],A.ae("y<eG>"))
B.c0=s([],A.ae("y<cU>"))
B.c2=s([],t.my)
B.o=s([],t.s)
B.c1=s([],t.t)
B.aI=s([],t.dG)
B.w=s([],t.c)
B.c3=s(["*"],t.s)
B.c4=s([B.aB,B.aC],A.ae("y<ew>"))
B.c5=s(["id","updated"],t.s)
B.c6=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.aS=new A.d7(0,"opfs")
B.aT=new A.d7(1,"indexedDb")
B.cx=new A.d7(2,"inMemory")
B.c7=s([B.aS,B.aT,B.cx],A.ae("y<d7>"))
B.c8=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.ck={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.p=new A.jT()
B.m=new A.j_()
B.c9=new A.aR(B.ck,[B.p,B.p,B.p,B.p,B.p,B.p,B.p,B.p,B.p,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.k,B.k],A.ae("aR<k,dI>"))
B.aJ=new A.aR(B.A,[],A.ae("aR<k,k>"))
B.a1=new A.aR(B.A,[],A.ae("aR<k,i>"))
B.q=new A.aR(B.A,[],A.ae("aR<k,j?>"))
B.ca=new A.aR(B.A,[],A.ae("aR<i,G<k,j?>(G<k,j?>)>"))
B.cc=new A.k1(11,"simpleSuccessResponse",A.ae("k1<H>"))
B.aL=new A.dQ(0,"createOrUpdate")
B.cd=new A.dQ(1,"create")
B.K=new A.dQ(2,"update")
B.z=new A.dQ(3,"archive")
B.E=new A.dQ(4,"restore")
B.df=new A.q3(2,"readWriteCreate")
B.aP=new A.kh(0,"native")
B.cl=new A.kh(1,"web")
B.a3=new A.aM(0,1,0,0,0,!1)
B.a4=new A.aM(0,0,0,0,0,!0)
B.M=new A.aM(0,0,0,0,0,!1)
B.cm=new A.aM(0,0,0,1,0,!1)
B.aQ=new A.aM(0,0,1,0,0,!1)
B.N=new A.aM(1,0,0,0,0,!1)
B.cn=new A.at("archived",!0)
B.ac=new A.iq(!1,!1)
B.co=new A.ee(0,0,0)
B.cp=new A.ee(null,null,null)
B.cj={hidden:0}
B.cq=new A.cw(B.cj,1,t.M)
B.cg={id:0,archived:1,hidden:2,extra:3}
B.cr=new A.cw(B.cg,4,t.M)
B.ch={query:0,count:1,countDistinct:2,distinct:3,ids:4,explain:5,sum:6,avg:7,min:8,max:9,search:10}
B.cs=new A.cw(B.ch,11,t.M)
B.ci={open:0,close:1,health:2,worker_event:3,record_event:4,capabilities:5,get:6,mutate_batch:7,compiled_query:8,analyze:9,wal_checkpoint:10,vacuum:11,prune_outbox:12,compact:13,run_maintenance:14,tx_begin:15,tx_get:16,tx_mutate_batch:17,tx_savepoint:18,tx_rollback_to:19,tx_release:20,tx_commit:21,tx_rollback:22,watch_query:23,watch_one:24,watch_cancel:25,sync_start:26,sync_stop:27,sync_now:28,sync_status:29,auth_required:30,sync_pause:31,sync_resume:32,sync_update_auth:33,sync_set_connectivity:34,file_upload_begin:35,file_upload_chunk:36,file_upload_finish:37,file_upload_abort:38,file_list:39,file_open:40,file_remove:41,file_gc:42,file_enforce_storage_cap:43,conflicts_list:44,conflicts_get:45,conflicts_resolve:46,conflicts_accept_local:47,conflicts_accept_remote:48,conflicts_watch:49}
B.ct=new A.cw(B.ci,50,t.M)
B.aR=new A.cw(B.A,0,t.M)
B.cu=new A.hN(0,"insert")
B.cv=new A.hN(1,"update")
B.cw=new A.hN(2,"delete")
B.cy=new A.hR(-1,null)
B.cz=new A.kJ("_clientToken")
B.O=new A.bN(0,"closed")
B.cA=new A.bN(1,"opening")
B.aU=new A.bN(2,"offline")
B.ad=new A.bN(3,"authRequired")
B.aV=new A.bN(4,"idle")
B.cB=new A.bN(5,"pulling")
B.cC=new A.bN(6,"pushing")
B.cD=new A.bN(7,"backoff")
B.aW=new A.bN(8,"paused")
B.G=new A.b4(B.a1,B.a1,0,0,0,0,!1)
B.cG=A.bT("dx")
B.cH=A.bT("xr")
B.cI=A.bT("ow")
B.cJ=A.bT("ox")
B.cK=A.bT("p9")
B.cL=A.bT("pa")
B.cM=A.bT("pb")
B.cN=A.bT("H")
B.cO=A.bT("j")
B.cP=A.bT("rL")
B.cQ=A.bT("rM")
B.cR=A.bT("rN")
B.cS=A.bT("cp")
B.am=new A.hT(!1)
B.cT=new A.hT(!0)
B.cU=new A.cJ(14)
B.cV=new A.cJ(522)
B.cW=new A.cJ(778)
B.cX=new A.w2(B.f,A.Gs())
B.cY=new A.w3(B.f,A.Gt())
B.cZ=new A.w4(B.f,A.Gu())
B.d_=new A.w5(B.f,A.Gv())
B.d0=new A.mf(B.f,A.Gw())
B.d1=new A.w6(B.f,A.Gx())
B.d2=new A.w7(B.f,A.Gy())
B.d3=new A.w8(B.f,A.Gz())
B.d4=new A.w9(B.f,A.GA())
B.d5=new A.wb(B.f,A.GC())
B.d6=new A.wc(B.f,A.GD())
B.d7=new A.wa(B.f,A.GB())
B.d8=new A.mg(B.f,A.GE())
B.cb=new A.aR(B.A,[],A.ae("aR<j?,j?>"))
B.an=new A.mh(B.f,B.cb)})();(function staticFields(){$.vd=null
$.ei=A.l([],t.hf)
$.G1=null
$.zt=null
$.qC=0
$.qD=A.FV()
$.yW=null
$.yV=null
$.Bn=null
$.B5=null
$.Bx=null
$.wL=null
$.x0=null
$.yw=null
$.vp=A.l([],A.ae("y<q<j>?>"))
$.fy=null
$.iL=null
$.iM=null
$.yn=!1
$.t=B.f
$.vt=null
$.zZ=null
$.A_=null
$.A0=null
$.A1=null
$.y4=A.u8("_lastQuoRemDigits")
$.y5=A.u8("_lastQuoRemUsed")
$.i1=A.u8("_lastRemUsed")
$.y6=A.u8("_lastRem_nsh")
$.zL=""
$.zM=null
$.AD=null
$.wl=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"HP","BO",()=>A.wT("_$dart_dartClosure"))
s($,"HO","eo",()=>A.wT("_$dart_dartClosure_dartJSInterop"))
s($,"Ip","mz",()=>A.xN(0))
s($,"IM","Cm",()=>B.f.aT(new A.x3(),A.ae("z<~>")))
s($,"IH","Cj",()=>A.l([new J.jM()],A.ae("y<hJ>")))
s($,"I5","BT",()=>A.cI(A.rK({
toString:function(){return"$receiver$"}})))
s($,"I6","BU",()=>A.cI(A.rK({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"I7","BV",()=>A.cI(A.rK(null)))
s($,"I8","BW",()=>A.cI(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Ib","BZ",()=>A.cI(A.rK(void 0)))
s($,"Ic","C_",()=>A.cI(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Ia","BY",()=>A.cI(A.zI(null)))
s($,"I9","BX",()=>A.cI(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Ie","C1",()=>A.cI(A.zI(void 0)))
s($,"Id","C0",()=>A.cI(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Ih","yG",()=>A.Eg())
s($,"HU","dt",()=>$.Cm())
s($,"HT","BQ",()=>A.Ey(!1,B.f,t.y))
s($,"Iv","C9",()=>A.xN(4096))
s($,"It","C7",()=>new A.vZ().$0())
s($,"Iu","C8",()=>new A.vY().$0())
s($,"Ij","yH",()=>A.Dy(A.br(A.l([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Ii","C2",()=>A.xN(0))
s($,"Io","cv",()=>A.tZ(0))
s($,"In","fI",()=>A.tZ(1))
s($,"Il","yJ",()=>$.fI().bH(0))
s($,"Ik","yI",()=>A.tZ(1e4))
r($,"Im","C3",()=>A.ag("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1))
s($,"Iq","C4",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"Ir","C5",()=>A.ag("^[\\-\\.0-9A-Z_a-z~]*$",!0))
s($,"Is","C6",()=>typeof URLSearchParams=="function")
s($,"Iy","ep",()=>A.ms(B.cO))
s($,"HZ","mw",()=>{A.DH()
return $.qC})
s($,"Iz","Cc",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"HX","xk",()=>{var q=new A.vc(new DataView(new ArrayBuffer(A.Fr(8))))
q.nR()
return q})
s($,"HQ","BP",()=>J.Cq(B.cf.gaJ(A.Dz(A.br(A.l([1],t.t)))),0,null).getInt8(0)===1?B.b6:B.as)
s($,"HH","yD",()=>A.ag("^[\\w!#%&'*+\\-.^`|~]+$",!0))
s($,"IB","xl",()=>A.ag("\\r\\n|\\r|\\n",!0))
s($,"HV","BR",()=>A.zx())
s($,"Iw","yK",()=>A.ag("^[\\x00-\\x7F]+$",!0))
s($,"Ix","Ca",()=>A.ag('["\\x00-\\x1F\\x7F]',!0))
s($,"IO","Cn",()=>A.ag('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0))
s($,"IA","Cd",()=>A.ag("(?:\\r\\n)?[ \\t]+",!0))
s($,"IE","Cg",()=>A.ag('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0))
s($,"ID","Cf",()=>A.ag("\\\\(.)",!0))
s($,"IL","Cl",()=>A.ag('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0))
s($,"IP","Co",()=>A.ag("(?:"+$.Cd().a+")*",!0))
s($,"IG","Ci",()=>A.zy())
s($,"IN","yL",()=>A.ag("^[a-z0-9]{15}$",!0))
r($,"FE","Cb",()=>A.CU().a)
s($,"HM","BM",()=>A.xx("declaredNames",t.gi))
s($,"HN","BN",()=>A.xx("fieldByName",A.ae("G<k,aK>")))
s($,"I4","my",()=>new A.j())
s($,"HL","BL",()=>A.ag("^[0-9a-f]{64}$",!0))
s($,"IC","Ce",()=>A.ag("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0))
s($,"IJ","xm",()=>new A.nA($.yE()))
s($,"I1","BS",()=>new A.qy(A.ag("/",!0),A.ag("[^/]$",!0),A.ag("^/",!0)))
s($,"I3","mx",()=>new A.ta(A.ag("[/\\\\]",!0),A.ag("[^/\\\\]$",!0),A.ag("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0),A.ag("^[/\\\\](?![/\\\\])",!0)))
s($,"I2","iV",()=>new A.rR(A.ag("/",!0),A.ag("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0),A.ag("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0),A.ag("^/",!0)))
s($,"I0","yE",()=>A.E_())
s($,"HK","BK",()=>$.fI().c_(0,63).bH(0))
s($,"HJ","BJ",()=>{var q=$.fI()
return q.c_(0,63).fb(0,q)})
s($,"HI","mv",()=>A.zy())
s($,"If","yF",()=>A.xx(null,t.S))
s($,"II","Ck",()=>A.Dn(A.l([A.xZ("files"),A.xZ("blocks")],t.s)))
s($,"HR","xj",()=>{var q,p,o=A.E(t.N,A.ae("ew"))
for(q=0;q<2;++q){p=B.c4[q]
o.j(0,p.c,p)}return o})
s($,"IF","Ch",()=>A.zx())
r($,"Ig","iW",()=>{var q="navigator"
return A.Dh(A.Di(A.yu(A.BB(),q),A.xZ("locks")))?A.yu(A.yu(A.BB(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.eE,ArrayBuffer:A.eD,ArrayBufferView:A.hr,DataView:A.hq,Float32Array:A.k4,Float64Array:A.k5,Int16Array:A.k6,Int32Array:A.k7,Int8Array:A.k8,Uint16Array:A.hs,Uint32Array:A.ht,Uint8ClampedArray:A.hu,CanvasPixelArray:A.hu,Uint8Array:A.dR})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.eF.$nativeSuperclassTag="ArrayBufferView"
A.il.$nativeSuperclassTag="ArrayBufferView"
A.im.$nativeSuperclassTag="ArrayBufferView"
A.d3.$nativeSuperclassTag="ArrayBufferView"
A.io.$nativeSuperclassTag="ArrayBufferView"
A.ip.$nativeSuperclassTag="ArrayBufferView"
A.bA.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.Hi
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
