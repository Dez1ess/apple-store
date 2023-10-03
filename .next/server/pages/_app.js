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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/context/CartContext.tsx":
/*!********************************************!*\
  !*** ./components/context/CartContext.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst cartContextProps = {};\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(cartContextProps);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHQvQ2FydENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQVU5QyxLQUFLLENBQUNDLGdCQUFnQixHQUFxQixDQUFDLENBQUM7QUFFN0MsS0FBSyxDQUFDQyxXQUFXLGlCQUFHRixvREFBYSxDQUFDQyxnQkFBZ0I7QUFFbEQsaUVBQWVDLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0cmlwZS1uZXh0LWVjb21tZXJjZS8uL2NvbXBvbmVudHMvY29udGV4dC9DYXJ0Q29udGV4dC50c3g/Nzg4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3RyaXBlIGZyb20gXCJzdHJpcGVcIjtcblxuZXhwb3J0IHR5cGUgQ2FydENvbnRleHRQcm9wcyA9IHtcbiAgICBpdGVtcz86IFN0cmlwZS5QcmljZVtdXG4gICAgcmVtb3ZlPzogKHByaWNlSUQ6IHN0cmluZykgPT4gdm9pZFxuICAgIGFkZD86IChwcm9kdWN0OiBTdHJpcGUuUHJpY2UpID0+IHZvaWRcbiAgICBhbGVydD86IFJlYWN0Tm9kZSB8IG51bGxcbn1cblxuY29uc3QgY2FydENvbnRleHRQcm9wczogQ2FydENvbnRleHRQcm9wcyA9IHt9XG5cbmNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dChjYXJ0Q29udGV4dFByb3BzKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FydENvbnRleHQ7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsImNhcnRDb250ZXh0UHJvcHMiLCJDYXJ0Q29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/context/CartContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_context_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/context/CartContext */ \"./components/context/CartContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const { 0: alert , 1: setAlert  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null); // Initialize alert state\n    const remove = (priceID)=>{\n        let i = lodash__WEBPACK_IMPORTED_MODULE_4___default().reject(items, function(item) {\n            return item.id === priceID;\n        });\n        setItems(i);\n    };\n    const add = (product)=>{\n        const isProductInCart = items.some((item)=>item.id === product.id\n        );\n        if (!isProductInCart) {\n            let updatedItems = [\n                ...items,\n                product\n            ];\n            setItems(updatedItems);\n            setAlert(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Alert, {\n                style: {\n                    fontSize: \"1rem\",\n                    padding: \"0.5rem\"\n                },\n                severity: \"success\",\n                children: \"Successfully added\"\n            }, void 0, false, {\n                fileName: \"/Users/dez1ess/Desktop/apple-store/pages/_app.tsx\",\n                lineNumber: 25,\n                columnNumber: 22\n            }, this));\n        } else {\n            setAlert(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Alert, {\n                style: {\n                    fontSize: \"1rem\",\n                    padding: \"0.5rem\"\n                },\n                severity: \"info\",\n                children: \"Already added\"\n            }, void 0, false, {\n                fileName: \"/Users/dez1ess/Desktop/apple-store/pages/_app.tsx\",\n                lineNumber: 27,\n                columnNumber: 22\n            }, this));\n        }\n        setTimeout(()=>{\n            setAlert(null);\n        }, 2000);\n    };\n    const cartContext = {\n        items: items,\n        add: add,\n        remove: remove,\n        alert: alert\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_context_CartContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: cartContext,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/dez1ess/Desktop/apple-store/pages/_app.tsx\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dez1ess/Desktop/apple-store/pages/_app.tsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRWlEO0FBQ3RDO0FBQ25CO0FBRWU7U0FFNUJJLEtBQUssQ0FBQyxDQUFDQyxDQUFBQSxTQUFTLEdBQUVDLFNBQVMsRUFBVSxDQUFDLEVBQUUsQ0FBQztJQUM5QyxLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJUCwrQ0FBUSxDQUFpQixDQUFDLENBQUM7SUFDckQsS0FBSyxNQUFFUSxLQUFLLE1BQUVDLFFBQVEsTUFBSVQsK0NBQVEsQ0FBbUIsSUFBSSxFQUFHLENBQXlCO0lBRXJGLEtBQUssQ0FBQ1UsTUFBTSxJQUFJQyxPQUFlLEdBQUssQ0FBQztRQUNqQyxHQUFHLENBQUNDLENBQUMsR0FBR1gsb0RBQVEsQ0FBQ0ssS0FBSyxFQUFFLFFBQVEsQ0FBRVEsSUFBSSxFQUFFLENBQUM7WUFDckMsTUFBTSxDQUFDQSxJQUFJLENBQUNDLEVBQUUsS0FBS0osT0FBTztRQUM5QixDQUFDO1FBQ0RKLFFBQVEsQ0FBQ0ssQ0FBQztJQUNkLENBQUM7SUFFRCxLQUFLLENBQUNJLEdBQUcsSUFBSUMsT0FBcUIsR0FBSyxDQUFDO1FBQ3BDLEtBQUssQ0FBQ0MsZUFBZSxHQUFHWixLQUFLLENBQUNhLElBQUksRUFBQ0wsSUFBSSxHQUFJQSxJQUFJLENBQUNDLEVBQUUsS0FBS0UsT0FBTyxDQUFDRixFQUFFOztRQUNqRSxFQUFFLEdBQUdHLGVBQWUsRUFBRSxDQUFDO1lBQ25CLEdBQUcsQ0FBQ0UsWUFBWSxHQUFHLENBQUM7bUJBQUdkLEtBQUs7Z0JBQUVXLE9BQU87WUFBQSxDQUFDO1lBQ3RDVixRQUFRLENBQUNhLFlBQVk7WUFDckJYLFFBQVEsNkVBQUVQLGdEQUFLO2dCQUFDbUIsS0FBSyxFQUFFLENBQUNDO29CQUFBQSxRQUFRLEVBQUUsQ0FBTTtvQkFBRUMsT0FBTyxFQUFFLENBQVE7Z0JBQUEsQ0FBQztnQkFBRUMsUUFBUSxFQUFDLENBQVM7MEJBQUMsQ0FBa0I7Ozs7OztRQUN2RyxDQUFDLE1BQU0sQ0FBQztZQUNKZixRQUFRLDZFQUFFUCxnREFBSztnQkFBQ21CLEtBQUssRUFBRSxDQUFDQztvQkFBQUEsUUFBUSxFQUFFLENBQU07b0JBQUVDLE9BQU8sRUFBRSxDQUFRO2dCQUFBLENBQUM7Z0JBQUVDLFFBQVEsRUFBQyxDQUFNOzBCQUFDLENBQWE7Ozs7OztRQUMvRixDQUFDO1FBRURDLFVBQVUsS0FBTyxDQUFDO1lBQ2RoQixRQUFRLENBQUMsSUFBSTtRQUNmLENBQUMsRUFBRSxJQUFJO0lBQ2IsQ0FBQztJQUVELEtBQUssQ0FBQ2lCLFdBQVcsR0FBcUIsQ0FBQztRQUNuQ3BCLEtBQUssRUFBRUEsS0FBSztRQUNaVSxHQUFHLEVBQUVBLEdBQUc7UUFDUk4sTUFBTSxFQUFFQSxNQUFNO1FBQ2RGLEtBQUssRUFBRUEsS0FBSztJQUNoQixDQUFDO0lBR0QsTUFBTSw2RUFDRFQsZ0ZBQW9CO1FBQUM2QixLQUFLLEVBQUVGLFdBQVc7OEZBQ25DdEIsU0FBUztlQUFLQyxTQUFTOzs7Ozs7Ozs7OztBQUdwQyxDQUFDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJpcGUtbmV4dC1lY29tbWVyY2UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUge0FwcFByb3BzfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBDYXJ0Q29udGV4dCwge0NhcnRDb250ZXh0UHJvcHN9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHQvQ2FydENvbnRleHRcIjtcbmltcG9ydCB7dXNlU3RhdGUsIFJlYWN0Tm9kZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQge1N0cmlwZX0gZnJvbSBcInN0cmlwZVwiO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxuZnVuY3Rpb24gTXlBcHAoe0NvbXBvbmVudCwgcGFnZVByb3BzfTogQXBwUHJvcHMpIHtcbiAgICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlPFN0cmlwZS5QcmljZVtdPihbXSk7XG4gICAgY29uc3QgW2FsZXJ0LCBzZXRBbGVydF0gPSB1c2VTdGF0ZTxSZWFjdE5vZGUgfCBudWxsPihudWxsKTsgLy8gSW5pdGlhbGl6ZSBhbGVydCBzdGF0ZVxuXG4gICAgY29uc3QgcmVtb3ZlID0gKHByaWNlSUQ6IHN0cmluZykgPT4ge1xuICAgICAgICBsZXQgaSA9IF8ucmVqZWN0KGl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT09IHByaWNlSUQ7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRJdGVtcyhpKVxuICAgIH1cblxuICAgIGNvbnN0IGFkZCA9IChwcm9kdWN0OiBTdHJpcGUuUHJpY2UpID0+IHtcbiAgICAgICAgY29uc3QgaXNQcm9kdWN0SW5DYXJ0ID0gaXRlbXMuc29tZShpdGVtID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpO1xuICAgICAgICBpZiAoIWlzUHJvZHVjdEluQ2FydCkge1xuICAgICAgICAgICAgbGV0IHVwZGF0ZWRJdGVtcyA9IFsuLi5pdGVtcywgcHJvZHVjdF07XG4gICAgICAgICAgICBzZXRJdGVtcyh1cGRhdGVkSXRlbXMpO1xuICAgICAgICAgICAgc2V0QWxlcnQoPEFsZXJ0IHN0eWxlPXt7Zm9udFNpemU6IFwiMXJlbVwiLCBwYWRkaW5nOiBcIjAuNXJlbVwifX0gc2V2ZXJpdHk9J3N1Y2Nlc3MnPlN1Y2Nlc3NmdWxseSBhZGRlZDwvQWxlcnQ+KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEFsZXJ0KDxBbGVydCBzdHlsZT17e2ZvbnRTaXplOiBcIjFyZW1cIiwgcGFkZGluZzogXCIwLjVyZW1cIn19IHNldmVyaXR5PSdpbmZvJz5BbHJlYWR5IGFkZGVkPC9BbGVydD4pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRBbGVydChudWxsKTsgXG4gICAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FydENvbnRleHQ6IENhcnRDb250ZXh0UHJvcHMgPSB7XG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcbiAgICAgICAgYWRkOiBhZGQsXG4gICAgICAgIHJlbW92ZTogcmVtb3ZlLFxuICAgICAgICBhbGVydDogYWxlcnQsXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NhcnRDb250ZXh0fT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiQ2FydENvbnRleHQiLCJ1c2VTdGF0ZSIsIl8iLCJBbGVydCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXRlbXMiLCJzZXRJdGVtcyIsImFsZXJ0Iiwic2V0QWxlcnQiLCJyZW1vdmUiLCJwcmljZUlEIiwiaSIsInJlamVjdCIsIml0ZW0iLCJpZCIsImFkZCIsInByb2R1Y3QiLCJpc1Byb2R1Y3RJbkNhcnQiLCJzb21lIiwidXBkYXRlZEl0ZW1zIiwic3R5bGUiLCJmb250U2l6ZSIsInBhZGRpbmciLCJzZXZlcml0eSIsInNldFRpbWVvdXQiLCJjYXJ0Q29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();