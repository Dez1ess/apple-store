"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/checkout";
exports.ids = ["pages/api/checkout"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("stripe");;

/***/ }),

/***/ "(api)/./pages/api/checkout.ts":
/*!*******************************!*\
  !*** ./pages/api/checkout.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stripe__WEBPACK_IMPORTED_MODULE_0__]);\nstripe__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    if (req.method != 'POST') {\n        res.status(405).json({\n            message: 'POST method required'\n        });\n    }\n    try {\n        const body = JSON.parse(req.body);\n        const stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__.Stripe(process.env.STRIPE_SECRET ?? '', {\n            apiVersion: '2023-08-16'\n        });\n        const session = await stripe.checkout.sessions.create({\n            success_url: 'https://apple-store-gules.vercel.app//success',\n            cancel_url: 'https://apple-store-gules.vercel.app//cancel',\n            line_items: body.lineItems,\n            mode: 'payment'\n        });\n        res.status(201).json({\n            session\n        });\n    } catch (e) {\n        // @ts-ignore\n        res.status(500).json({\n            message: e.message\n        });\n    }\n};\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hlY2tvdXQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDNkI7QUFnQmQsZUFBZUMsT0FBTyxDQUNqQ0MsR0FBbUIsRUFDbkJDLEdBQXlCLEVBQzNCLENBQUM7SUFDQyxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxJQUFJLENBQU0sT0FBRSxDQUFDO1FBQ3ZCRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDQztZQUFBQSxPQUFPLEVBQUUsQ0FBc0I7UUFBQSxDQUFDO0lBQzFELENBQUM7SUFFRCxHQUFHLENBQUMsQ0FBQztRQUNELEtBQUssQ0FBQ0MsSUFBSSxHQUFRQyxJQUFJLENBQUNDLEtBQUssQ0FBQ1IsR0FBRyxDQUFDTSxJQUFJO1FBRXJDLEtBQUssQ0FBQ0csTUFBTSxHQUFHLEdBQUcsQ0FBQ1gsMENBQU0sQ0FBQ1ksT0FBTyxDQUFDQyxHQUFHLENBQUNDLGFBQWEsSUFBSSxDQUFFLEdBQUUsQ0FBQztZQUN4REMsVUFBVSxFQUFFLENBQVk7UUFDNUIsQ0FBQztRQUVELEtBQUssQ0FBQ0MsT0FBTyxHQUFHLEtBQUssQ0FBQ0wsTUFBTSxDQUFDTSxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7WUFDbkRDLFdBQVcsRUFBRSxDQUErQztZQUM1REMsVUFBVSxFQUFFLENBQThDO1lBQzFEQyxVQUFVLEVBQUVkLElBQUksQ0FBQ2UsU0FBUztZQUMxQkMsSUFBSSxFQUFFLENBQVM7UUFDbkIsQ0FBQztRQUVEckIsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDVSxPQUFPO1FBQUMsQ0FBQztJQUNwQyxDQUFDLE1BQUssRUFBRVMsQ0FBQyxFQUFFLENBQUM7UUFDUixFQUFhO1FBQ2J0QixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDQztZQUFBQSxPQUFPLEVBQUVrQixDQUFDLENBQUNsQixPQUFPO1FBQUEsQ0FBQztJQUM3QyxDQUFDO0FBRUwsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0cmlwZS1uZXh0LWVjb21tZXJjZS8uL3BhZ2VzL2FwaS9jaGVja291dC50cz8zMTc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZX0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7U3RyaXBlfSBmcm9tIFwic3RyaXBlXCI7XG5cbnR5cGUgUmVzID0ge1xuICAgIHNlc3Npb24/OiBTdHJpcGUuQ2hlY2tvdXQuU2Vzc2lvblxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcbn1cblxudHlwZSBMaW5lSXRlbSA9IHtcbiAgICBwcmljZTogc3RyaW5nXG4gICAgcXVhbnRpdHk6IG51bWJlclxufVxuXG50eXBlIFJlcSA9IHtcbiAgICBsaW5lSXRlbXM6IExpbmVJdGVtW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlPFJlcz5cbikge1xuICAgIGlmIChyZXEubWV0aG9kICE9ICdQT1NUJykge1xuICAgICAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7bWVzc2FnZTogJ1BPU1QgbWV0aG9kIHJlcXVpcmVkJ30pXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYm9keTogUmVxID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XG5cbiAgICAgICAgY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUID8/ICcnLCB7XG4gICAgICAgICAgICBhcGlWZXJzaW9uOiAnMjAyMy0wOC0xNicsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcbiAgICAgICAgICAgIHN1Y2Nlc3NfdXJsOiAnaHR0cHM6Ly9hcHBsZS1zdG9yZS1ndWxlcy52ZXJjZWwuYXBwLy9zdWNjZXNzJyxcbiAgICAgICAgICAgIGNhbmNlbF91cmw6ICdodHRwczovL2FwcGxlLXN0b3JlLWd1bGVzLnZlcmNlbC5hcHAvL2NhbmNlbCcsXG4gICAgICAgICAgICBsaW5lX2l0ZW1zOiBib2R5LmxpbmVJdGVtcyxcbiAgICAgICAgICAgIG1vZGU6ICdwYXltZW50JyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBzZXNzaW9uIH0pXG4gICAgfWNhdGNoIChlKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe21lc3NhZ2U6IGUubWVzc2FnZX0pXG4gICAgfVxuXG59XG4iXSwibmFtZXMiOlsiU3RyaXBlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiYm9keSIsIkpTT04iLCJwYXJzZSIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUIiwiYXBpVmVyc2lvbiIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwic3VjY2Vzc191cmwiLCJjYW5jZWxfdXJsIiwibGluZV9pdGVtcyIsImxpbmVJdGVtcyIsIm1vZGUiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/checkout.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/checkout.ts"));
module.exports = __webpack_exports__;

})();