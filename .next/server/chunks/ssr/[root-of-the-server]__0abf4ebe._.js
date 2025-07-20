module.exports = {

"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/react-dom [external] (react-dom, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[project]/components/dashbord.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
;
;
;
const products = [
    {
        id: 1,
        name: 'Modern Chair',
        price: '120',
        image: '/7.png'
    },
    {
        id: 2,
        name: 'Wooden Table',
        price: '350',
        image: '/8.png'
    },
    {
        id: 3,
        name: 'Elegant Sofa',
        price: '790',
        image: '/9.png'
    }
];
const MyDashboard = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "font-sans text-gray-800"
    }, void 0, false, {
        fileName: "[project]/components/dashbord.jsx",
        lineNumber: 12,
        columnNumber: 1
    }, this);
};
const __TURBOPACK__default__export__ = MyDashboard;
}}),
"[project]/components/MainScreenWrapper.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
const MainScreenWrapper = ({ children, screenHeader = 'Header' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: `justify-start relative w-full flex h-full items-start flex-col min-h-screen gap-1 text-black`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "w-full h-full pt-1",
            children: children
        }, void 0, false, {
            fileName: "[project]/components/MainScreenWrapper.jsx",
            lineNumber: 14,
            columnNumber: 16
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/MainScreenWrapper.jsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = MainScreenWrapper;
}}),
"[project]/components/navbar.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
;
;
;
const Navbar = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
            className: "bg-white shadow p-4 flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-green-700",
                    children: "Aado Designs"
                }, void 0, false, {
                    fileName: "[project]/components/navbar.jsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                        className: "flex gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: "/index",
                                    className: "hover:text-green-600",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/components/navbar.jsx",
                                    lineNumber: 11,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/navbar.jsx",
                                lineNumber: 11,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: "/product",
                                    className: "hover:text-green-600",
                                    children: "Product"
                                }, void 0, false, {
                                    fileName: "[project]/components/navbar.jsx",
                                    lineNumber: 12,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/navbar.jsx",
                                lineNumber: 12,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: "/contact",
                                    className: "hover:text-green-600",
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/components/navbar.jsx",
                                    lineNumber: 13,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/navbar.jsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: "/about",
                                    className: "hover:text-green-600",
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/components/navbar.jsx",
                                    lineNumber: 14,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/navbar.jsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navbar.jsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/navbar.jsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/navbar.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/navbar.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Navbar;
}}),
"[project]/styles/Hero.module.css [ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "actions": "Hero-module__dQlAoa__actions",
  "cta": "Hero-module__dQlAoa__cta",
  "hero": "Hero-module__dQlAoa__hero",
  "heroImage": "Hero-module__dQlAoa__heroImage",
  "logo": "Hero-module__dQlAoa__logo",
  "menu": "Hero-module__dQlAoa__menu",
  "navbar": "Hero-module__dQlAoa__navbar",
  "overlay": "Hero-module__dQlAoa__overlay",
  "section": "Hero-module__dQlAoa__section",
});
}}),
"[externals]/swiper/react [external] (swiper/react, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("swiper/react");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/swiper/modules [external] (swiper/modules, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("swiper/modules");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/components/HeroSlider.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>HeroSlider)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Hero$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/Hero.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/swiper/react [external] (swiper/react, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$modules__$5b$external$5d$__$28$swiper$2f$modules$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/swiper/modules [external] (swiper/modules, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$modules__$5b$external$5d$__$28$swiper$2f$modules$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$modules__$5b$external$5d$__$28$swiper$2f$modules$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
;
const slides = [
    '/7.png',
    '/8.png',
    '/9.png'
];
function HeroSlider() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__esm_import$29$__["Swiper"], {
        modules: [
            __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$modules__$5b$external$5d$__$28$swiper$2f$modules$2c$__esm_import$29$__["Navigation"],
            __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$modules__$5b$external$5d$__$28$swiper$2f$modules$2c$__esm_import$29$__["Pagination"],
            __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$modules__$5b$external$5d$__$28$swiper$2f$modules$2c$__esm_import$29$__["Autoplay"],
            __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$modules__$5b$external$5d$__$28$swiper$2f$modules$2c$__esm_import$29$__["EffectFade"]
        ],
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 3000
        },
        navigation: true,
        pagination: {
            clickable: true
        },
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Hero$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].swiperContainer,
        children: slides.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__esm_import$29$__["SwiperSlide"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Hero$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].hero,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: src,
                            alt: `Slide ${index + 1}`,
                            fill: true,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Hero$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].heroImage,
                            style: {
                                objectFit: 'cover'
                            },
                            priority: index === 0
                        }, void 0, false, {
                            fileName: "[project]/components/HeroSlider.js",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Hero$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].overlay,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                    children: "Cafe Furniture"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSlider.js",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: "Indulge in the ultimate cafe experience with our carefully selected collection of furniture, designed to elevate your space and create the perfect coffeehouse vibe."
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSlider.js",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Hero$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cta,
                                    children: "View Collection"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSlider.js",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroSlider.js",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HeroSlider.js",
                    lineNumber: 29,
                    columnNumber: 11
                }, this)
            }, index, false, {
                fileName: "[project]/components/HeroSlider.js",
                lineNumber: 28,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/HeroSlider.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/Myfooter.jsx [ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/*#__PURE__*/ const { jsxDEV: _jsxDEV } = __turbopack_context__.r("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
_jsxDEV("footer", {
    class: "footer",
    children: [
        /*#__PURE__*/ _jsxDEV("div", {
            class: "footer-columns",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    class: "footer-col",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h4", {
                            children: "Collections"
                        }, void 0, false, {
                            fileName: "[project]/components/Myfooter.jsx",
                            lineNumber: 4,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ _jsxDEV("ul", {
                            children: [
                                /*#__PURE__*/ _jsxDEV("li", {
                                    children: "Kitchen"
                                }, void 0, false, {
                                    fileName: "[project]/components/Myfooter.jsx",
                                    lineNumber: 6,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ _jsxDEV("li", {
                                    children: "Systems"
                                }, void 0, false, {
                                    fileName: "[project]/components/Myfooter.jsx",
                                    lineNumber: 7,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ _jsxDEV("li", {
                                    children: "Day"
                                }, void 0, false, {
                                    fileName: "[project]/components/Myfooter.jsx",
                                    lineNumber: 8,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ _jsxDEV("li", {
                                    children: "Sofas"
                                }, void 0, false, {
                                    fileName: "[project]/components/Myfooter.jsx",
                                    lineNumber: 9,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ _jsxDEV("li", {
                                    children: "Night"
                                }, void 0, false, {
                                    fileName: "[project]/components/Myfooter.jsx",
                                    lineNumber: 10,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Myfooter.jsx",
                            lineNumber: 5,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Myfooter.jsx",
                    lineNumber: 3,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    class: "footer-col",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h4", {
                            children: "Find us on"
                        }, void 0, false, {
                            fileName: "[project]/components/Myfooter.jsx",
                            lineNumber: 15,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ _jsxDEV("ul", {
                            children: [
                                /*#__PURE__*/ _jsxDEV("li", {
                                    children: "Instagram"
                                }, void 0, false, {
                                    fileName: "[project]/components/Myfooter.jsx",
                                    lineNumber: 17,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ _jsxDEV("li", {
                                    children: "Facebook"
                                }, void 0, false, {
                                    fileName: "[project]/components/Myfooter.jsx",
                                    lineNumber: 18,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ _jsxDEV("li", {
                                    children: "Pinterest"
                                }, void 0, false, {
                                    fileName: "[project]/components/Myfooter.jsx",
                                    lineNumber: 19,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ _jsxDEV("li", {
                                    children: "Youtube"
                                }, void 0, false, {
                                    fileName: "[project]/components/Myfooter.jsx",
                                    lineNumber: 20,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ _jsxDEV("li", {
                                    children: "LinkedIn"
                                }, void 0, false, {
                                    fileName: "[project]/components/Myfooter.jsx",
                                    lineNumber: 21,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Myfooter.jsx",
                            lineNumber: 16,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Myfooter.jsx",
                    lineNumber: 14,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    class: "footer-col",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h4", {
                            children: "More"
                        }, void 0, false, {
                            fileName: "[project]/components/Myfooter.jsx",
                            lineNumber: 26,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ _jsxDEV("ul", {
                            children: [
                                /*#__PURE__*/ _jsxDEV("li", {
                                    children: "Privacy policy"
                                }, void 0, false, {
                                    fileName: "[project]/components/Myfooter.jsx",
                                    lineNumber: 28,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ _jsxDEV("li", {
                                    children: "Terms of use"
                                }, void 0, false, {
                                    fileName: "[project]/components/Myfooter.jsx",
                                    lineNumber: 29,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ _jsxDEV("li", {
                                    children: "Cookie policy"
                                }, void 0, false, {
                                    fileName: "[project]/components/Myfooter.jsx",
                                    lineNumber: 30,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ _jsxDEV("li", {
                                    children: "Reserved Area"
                                }, void 0, false, {
                                    fileName: "[project]/components/Myfooter.jsx",
                                    lineNumber: 31,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ _jsxDEV("li", {
                                    children: "Newsletter"
                                }, void 0, false, {
                                    fileName: "[project]/components/Myfooter.jsx",
                                    lineNumber: 32,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Myfooter.jsx",
                            lineNumber: 27,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Myfooter.jsx",
                    lineNumber: 25,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Myfooter.jsx",
            lineNumber: 2,
            columnNumber: 3
        }, this),
        /*#__PURE__*/ _jsxDEV("div", {
            class: "footer-bottom",
            children: "© 2025 Aado Designs."
        }, void 0, false, {
            fileName: "[project]/components/Myfooter.jsx",
            lineNumber: 37,
            columnNumber: 3
        }, this)
    ]
}, void 0, true, {
    fileName: "[project]/components/Myfooter.jsx",
    lineNumber: 1,
    columnNumber: 1
}, this);
}}),
"[project]/pages/index.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>Dashboard)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashbord$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashbord.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MainScreenWrapper$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MainScreenWrapper.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navbar$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navbar.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroSlider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HeroSlider.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Myfooter$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Myfooter.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroSlider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroSlider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
;
function Dashboard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MainScreenWrapper$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navbar$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.jsx",
                lineNumber: 14,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashbord$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.jsx",
                lineNumber: 15,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroSlider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.jsx",
                lineNumber: 16,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Myfooter$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.jsx",
                lineNumber: 17,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.jsx",
        lineNumber: 13,
        columnNumber: 3
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__0abf4ebe._.js.map