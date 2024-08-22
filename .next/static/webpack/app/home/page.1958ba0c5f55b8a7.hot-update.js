"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/home/page",{

/***/ "(app-pages-browser)/./src/components/Editor/Editor.tsx":
/*!******************************************!*\
  !*** ./src/components/Editor/Editor.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var react_quill_v2_0_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-quill-v2.0/dist/quill.snow.css */ \"(app-pages-browser)/./node_modules/react-quill-v2.0/dist/quill.snow.css\");\n/* harmony import */ var _utils_formatData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/formatData */ \"(app-pages-browser)/./src/utils/formatData.ts\");\n/* harmony import */ var _barrel_optimize_names_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=useTheme!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/styles/useTheme.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-quill */ \"(app-pages-browser)/./node_modules/react-quill/lib/index.js\");\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"(app-pages-browser)/./node_modules/react-quill/dist/quill.snow.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // Ensure you import the Quill CSS\nconst CustomTextEditor = (param)=>{\n    let { value, placeholder, onChange, error, maxLength } = param;\n    _s();\n    const theme = (0,_barrel_optimize_names_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [quillValue, setQuillValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const quillRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const handleEditorChange = (content)=>{\n        const strippedContent = (0,_utils_formatData__WEBPACK_IMPORTED_MODULE_2__.extractPlainText)(content);\n        if (maxLength && strippedContent.trim().length > maxLength) {\n            if (quillRef.current) {\n                const currentEditor = quillRef.current.getEditor();\n                currentEditor.deleteText(maxLength, strippedContent.length);\n            }\n            return;\n        }\n        setQuillValue(content);\n        onChange(content);\n    };\n    const toolbarOptions = [\n        [\n            \"bold\",\n            \"italic\",\n            \"underline\",\n            \"strike\"\n        ],\n        [\n            \"blockquote\",\n            \"code-block\"\n        ],\n        [\n            \"link\",\n            \"image\",\n            \"video\",\n            \"formula\"\n        ],\n        [\n            {\n                header: 1\n            },\n            {\n                header: 2\n            }\n        ],\n        [\n            {\n                list: \"ordered\"\n            },\n            {\n                list: \"bullet\"\n            },\n            {\n                list: \"check\"\n            }\n        ],\n        [\n            {\n                script: \"sub\"\n            },\n            {\n                script: \"super\"\n            }\n        ],\n        [\n            {\n                indent: \"-1\"\n            },\n            {\n                indent: \"+1\"\n            }\n        ],\n        [\n            {\n                direction: \"rtl\"\n            }\n        ],\n        [\n            {\n                size: [\n                    \"small\",\n                    false,\n                    \"large\",\n                    \"huge\"\n                ]\n            }\n        ],\n        [\n            {\n                header: [\n                    1,\n                    2,\n                    3,\n                    4,\n                    5,\n                    6,\n                    false\n                ]\n            }\n        ],\n        [\n            {\n                color: []\n            },\n            {\n                background: []\n            }\n        ],\n        [\n            {\n                font: []\n            }\n        ],\n        [\n            {\n                align: []\n            }\n        ],\n        [\n            \"clean\"\n        ]\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        sx: {\n            width: \"100%\",\n            \"& .quill .ql-toolbar.ql-snow\": {\n                border: \"solid 1px \".concat(theme.palette.mode === \"dark\" ? \"#626060\" : \"#DEDEDE\"),\n                borderRadius: \"8px\"\n            },\n            \"& .ql-snow .ql-stroke\": {\n                stroke: theme.palette.mode === \"dark\" ? \"#F7F7F7\" : \"#434242\"\n            },\n            \"& .ql-snow .ql-fill\": {\n                fill: theme.palette.mode === \"dark\" ? \"#F7F7F7\" : \"#434242\"\n            },\n            \"& .quill .ql-container.ql-snow\": {\n                minHeight: \"6.852rem\",\n                borderRadius: \"5px !important\",\n                border: \"solid 1px \".concat(theme.palette.mode === \"dark\" ? \"#626060\" : \"#DEDEDE\"),\n                background: theme.palette.mode === \"dark\" ? \"#242424\" : \"#FFFFFF\",\n                marginTop: \"5px\",\n                \"& .ql-blank::before\": {\n                    color: theme.palette.mode === \"dark\" ? \"#585656\" : \"#DEDEDE\"\n                }\n            },\n            \"& .quill.quill-error .ql-container.ql-snow\": {\n                border: \"solid 1px red\",\n                borderRadius: \"5px !important\"\n            },\n            \"& .ql-snow .ql-picker.ql-expanded .ql-picker-options\": {\n                zIndex: \"2\"\n            }\n        },\n        className: error ? \"quill quill-error\" : \"quill-editor-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_quill__WEBPACK_IMPORTED_MODULE_4___default()), {\n            theme: \"snow\",\n            value: quillValue,\n            onChange: handleEditorChange,\n            modules: {\n                toolbar: toolbarOptions\n            },\n            defaultValue: value\n        }, void 0, false, {\n            fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/components/Editor/Editor.tsx\",\n            lineNumber: 99,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/components/Editor/Editor.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomTextEditor, \"si65odIgmh7o8HuINkCDKasaan8=\", false, function() {\n    return [\n        _barrel_optimize_names_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = CustomTextEditor;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomTextEditor);\nvar _c;\n$RefreshReg$(_c, \"CustomTextEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0VkaXRvci9FZGl0b3IudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDb0M7QUFDVTtBQUNRO0FBQ2I7QUFDTztBQUNYO0FBQ0ksQ0FBQyxrQ0FBa0M7QUFVNUUsTUFBTU8sbUJBQXFEO1FBQUMsRUFDMURDLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxRQUFRLEVBQ1JDLEtBQUssRUFDTEMsU0FBUyxFQUNWOztJQUNDLE1BQU1DLFFBQVFYLHdGQUFRQTtJQUV0QixNQUFNLENBQUNZLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTVcsV0FBV1osNkNBQU1BLENBQW9CO0lBQzNDLE1BQU1hLHFCQUFxQixDQUFDQztRQUMxQixNQUFNQyxrQkFBa0JsQixtRUFBZ0JBLENBQUNpQjtRQUN6QyxJQUFJTixhQUFhTyxnQkFBZ0JDLElBQUksR0FBR0MsTUFBTSxHQUFHVCxXQUFXO1lBQzFELElBQUlJLFNBQVNNLE9BQU8sRUFBRTtnQkFDcEIsTUFBTUMsZ0JBQWdCUCxTQUFTTSxPQUFPLENBQUNFLFNBQVM7Z0JBQ2hERCxjQUFjRSxVQUFVLENBQUNiLFdBQVdPLGdCQUFnQkUsTUFBTTtZQUM1RDtZQUNBO1FBQ0Y7UUFDQU4sY0FBY0c7UUFDZFIsU0FBU1E7SUFDWDtJQUNBLE1BQU1RLGlCQUFpQjtRQUNyQjtZQUFDO1lBQVE7WUFBVTtZQUFhO1NBQVM7UUFDekM7WUFBQztZQUFjO1NBQWE7UUFDNUI7WUFBQztZQUFRO1lBQVM7WUFBUztTQUFVO1FBRXJDO1lBQUM7Z0JBQUVDLFFBQVE7WUFBRTtZQUFHO2dCQUFFQSxRQUFRO1lBQUU7U0FBRTtRQUM5QjtZQUFDO2dCQUFFQyxNQUFNO1lBQVU7WUFBRztnQkFBRUEsTUFBTTtZQUFTO1lBQUc7Z0JBQUVBLE1BQU07WUFBUTtTQUFFO1FBQzVEO1lBQUM7Z0JBQUVDLFFBQVE7WUFBTTtZQUFHO2dCQUFFQSxRQUFRO1lBQVE7U0FBRTtRQUN4QztZQUFDO2dCQUFFQyxRQUFRO1lBQUs7WUFBRztnQkFBRUEsUUFBUTtZQUFLO1NBQUU7UUFDcEM7WUFBQztnQkFBRUMsV0FBVztZQUFNO1NBQUU7UUFFdEI7WUFBQztnQkFBRUMsTUFBTTtvQkFBQztvQkFBUztvQkFBTztvQkFBUztpQkFBTztZQUFDO1NBQUU7UUFDN0M7WUFBQztnQkFBRUwsUUFBUTtvQkFBQztvQkFBRztvQkFBRztvQkFBRztvQkFBRztvQkFBRztvQkFBRztpQkFBTTtZQUFDO1NBQUU7UUFFdkM7WUFBQztnQkFBRU0sT0FBTyxFQUFFO1lBQUM7WUFBRztnQkFBRUMsWUFBWSxFQUFFO1lBQUM7U0FBRTtRQUNuQztZQUFDO2dCQUFFQyxNQUFNLEVBQUU7WUFBQztTQUFFO1FBQ2Q7WUFBQztnQkFBRUMsT0FBTyxFQUFFO1lBQUM7U0FBRTtRQUVmO1lBQUM7U0FBUTtLQUNWO0lBQ0QscUJBQ0UsOERBQUNwQyx5REFBR0E7UUFDRnFDLElBQUk7WUFDRkMsT0FBTztZQUNQLGdDQUFnQztnQkFDOUJDLFFBQVEsYUFFUCxPQURDMUIsTUFBTTJCLE9BQU8sQ0FBQ0MsSUFBSSxLQUFLLFNBQVMsWUFBWTtnQkFFOUNDLGNBQWM7WUFDaEI7WUFDQSx5QkFBeUI7Z0JBQ3ZCQyxRQUFROUIsTUFBTTJCLE9BQU8sQ0FBQ0MsSUFBSSxLQUFLLFNBQVMsWUFBWTtZQUN0RDtZQUNBLHVCQUF1QjtnQkFDckJHLE1BQU0vQixNQUFNMkIsT0FBTyxDQUFDQyxJQUFJLEtBQUssU0FBUyxZQUFZO1lBQ3BEO1lBQ0Esa0NBQWtDO2dCQUNoQ0ksV0FBVztnQkFDWEgsY0FBYztnQkFDZEgsUUFBUSxhQUVQLE9BREMxQixNQUFNMkIsT0FBTyxDQUFDQyxJQUFJLEtBQUssU0FBUyxZQUFZO2dCQUU5Q1AsWUFBWXJCLE1BQU0yQixPQUFPLENBQUNDLElBQUksS0FBSyxTQUFTLFlBQVk7Z0JBQ3hESyxXQUFXO2dCQUNYLHVCQUF1QjtvQkFDckJiLE9BQU9wQixNQUFNMkIsT0FBTyxDQUFDQyxJQUFJLEtBQUssU0FBUyxZQUFZO2dCQUNyRDtZQUNGO1lBQ0EsOENBQThDO2dCQUM1Q0YsUUFBUTtnQkFDUkcsY0FBYztZQUNoQjtZQUNBLHdEQUF3RDtnQkFDdERLLFFBQVE7WUFDVjtRQUNGO1FBQ0FDLFdBQVdyQyxRQUFRLHNCQUFzQjtrQkFFekMsNEVBQUNMLG9EQUFVQTtZQUNUTyxPQUFNO1lBQ05MLE9BQU9NO1lBQ1BKLFVBQVVPO1lBQ1ZnQyxTQUFTO2dCQUFFQyxTQUFTeEI7WUFBZTtZQUNuQ3lCLGNBQWMzQzs7Ozs7Ozs7Ozs7QUFJdEI7R0ExRk1EOztRQU9VTCxvRkFBUUE7OztLQVBsQks7QUE0Rk4saUVBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9FZGl0b3IvRWRpdG9yLnRzeD9hY2E4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBcInJlYWN0LXF1aWxsLXYyLjAvZGlzdC9xdWlsbC5zbm93LmNzc1wiO1xuaW1wb3J0IHsgZXh0cmFjdFBsYWluVGV4dCB9IGZyb20gXCJAL3V0aWxzL2Zvcm1hdERhdGFcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RRdWlsbCBmcm9tIFwicmVhY3QtcXVpbGxcIjtcbmltcG9ydCBcInJlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3NcIjsgLy8gRW5zdXJlIHlvdSBpbXBvcnQgdGhlIFF1aWxsIENTU1xuXG5pbnRlcmZhY2UgQ3VzdG9tUXVpbGxFZGl0b3JQcm9wcyB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgZXJyb3I/OiBib29sZWFuO1xuICBtYXhMZW5ndGg/OiBudW1iZXI7IC8vIE9wdGlvbmFsIHByb3AgZm9yIG1heExlbmd0aFxufVxuXG5jb25zdCBDdXN0b21UZXh0RWRpdG9yOiBSZWFjdC5GQzxDdXN0b21RdWlsbEVkaXRvclByb3BzPiA9ICh7XG4gIHZhbHVlLFxuICBwbGFjZWhvbGRlcixcbiAgb25DaGFuZ2UsXG4gIGVycm9yLFxuICBtYXhMZW5ndGgsXG59KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICBjb25zdCBbcXVpbGxWYWx1ZSwgc2V0UXVpbGxWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgcXVpbGxSZWYgPSB1c2VSZWY8UmVhY3RRdWlsbCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBoYW5kbGVFZGl0b3JDaGFuZ2UgPSAoY29udGVudDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgc3RyaXBwZWRDb250ZW50ID0gZXh0cmFjdFBsYWluVGV4dChjb250ZW50KTtcbiAgICBpZiAobWF4TGVuZ3RoICYmIHN0cmlwcGVkQ29udGVudC50cmltKCkubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICBpZiAocXVpbGxSZWYuY3VycmVudCkge1xuICAgICAgICBjb25zdCBjdXJyZW50RWRpdG9yID0gcXVpbGxSZWYuY3VycmVudC5nZXRFZGl0b3IoKTtcbiAgICAgICAgY3VycmVudEVkaXRvci5kZWxldGVUZXh0KG1heExlbmd0aCwgc3RyaXBwZWRDb250ZW50Lmxlbmd0aCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFF1aWxsVmFsdWUoY29udGVudCk7XG4gICAgb25DaGFuZ2UoY29udGVudCk7XG4gIH07XG4gIGNvbnN0IHRvb2xiYXJPcHRpb25zID0gW1xuICAgIFtcImJvbGRcIiwgXCJpdGFsaWNcIiwgXCJ1bmRlcmxpbmVcIiwgXCJzdHJpa2VcIl0sIC8vIHRvZ2dsZWQgYnV0dG9uc1xuICAgIFtcImJsb2NrcXVvdGVcIiwgXCJjb2RlLWJsb2NrXCJdLFxuICAgIFtcImxpbmtcIiwgXCJpbWFnZVwiLCBcInZpZGVvXCIsIFwiZm9ybXVsYVwiXSxcblxuICAgIFt7IGhlYWRlcjogMSB9LCB7IGhlYWRlcjogMiB9XSwgLy8gY3VzdG9tIGJ1dHRvbiB2YWx1ZXNcbiAgICBbeyBsaXN0OiBcIm9yZGVyZWRcIiB9LCB7IGxpc3Q6IFwiYnVsbGV0XCIgfSwgeyBsaXN0OiBcImNoZWNrXCIgfV0sXG4gICAgW3sgc2NyaXB0OiBcInN1YlwiIH0sIHsgc2NyaXB0OiBcInN1cGVyXCIgfV0sIC8vIHN1cGVyc2NyaXB0L3N1YnNjcmlwdFxuICAgIFt7IGluZGVudDogXCItMVwiIH0sIHsgaW5kZW50OiBcIisxXCIgfV0sIC8vIG91dGRlbnQvaW5kZW50XG4gICAgW3sgZGlyZWN0aW9uOiBcInJ0bFwiIH1dLCAvLyB0ZXh0IGRpcmVjdGlvblxuXG4gICAgW3sgc2l6ZTogW1wic21hbGxcIiwgZmFsc2UsIFwibGFyZ2VcIiwgXCJodWdlXCJdIH1dLCAvLyBjdXN0b20gZHJvcGRvd25cbiAgICBbeyBoZWFkZXI6IFsxLCAyLCAzLCA0LCA1LCA2LCBmYWxzZV0gfV0sXG5cbiAgICBbeyBjb2xvcjogW10gfSwgeyBiYWNrZ3JvdW5kOiBbXSB9XSwgLy8gZHJvcGRvd24gd2l0aCBkZWZhdWx0cyBmcm9tIHRoZW1lXG4gICAgW3sgZm9udDogW10gfV0sXG4gICAgW3sgYWxpZ246IFtdIH1dLFxuXG4gICAgW1wiY2xlYW5cIl0sIC8vIHJlbW92ZSBmb3JtYXR0aW5nIGJ1dHRvblxuICBdO1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN4PXt7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgXCImIC5xdWlsbCAucWwtdG9vbGJhci5xbC1zbm93XCI6IHtcbiAgICAgICAgICBib3JkZXI6IGBzb2xpZCAxcHggJHtcbiAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gXCJkYXJrXCIgPyBcIiM2MjYwNjBcIiA6IFwiI0RFREVERVwiXG4gICAgICAgICAgfWAsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxuICAgICAgICB9LFxuICAgICAgICBcIiYgLnFsLXNub3cgLnFsLXN0cm9rZVwiOiB7XG4gICAgICAgICAgc3Ryb2tlOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwiZGFya1wiID8gXCIjRjdGN0Y3XCIgOiBcIiM0MzQyNDJcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCImIC5xbC1zbm93IC5xbC1maWxsXCI6IHtcbiAgICAgICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwiZGFya1wiID8gXCIjRjdGN0Y3XCIgOiBcIiM0MzQyNDJcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCImIC5xdWlsbCAucWwtY29udGFpbmVyLnFsLXNub3dcIjoge1xuICAgICAgICAgIG1pbkhlaWdodDogXCI2Ljg1MnJlbVwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHggIWltcG9ydGFudFwiLFxuICAgICAgICAgIGJvcmRlcjogYHNvbGlkIDFweCAke1xuICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSBcImRhcmtcIiA/IFwiIzYyNjA2MFwiIDogXCIjREVERURFXCJcbiAgICAgICAgICB9YCxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwiZGFya1wiID8gXCIjMjQyNDI0XCIgOiBcIiNGRkZGRkZcIixcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiNXB4XCIsXG4gICAgICAgICAgXCImIC5xbC1ibGFuazo6YmVmb3JlXCI6IHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09IFwiZGFya1wiID8gXCIjNTg1NjU2XCIgOiBcIiNERURFREVcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBcIiYgLnF1aWxsLnF1aWxsLWVycm9yIC5xbC1jb250YWluZXIucWwtc25vd1wiOiB7XG4gICAgICAgICAgYm9yZGVyOiBcInNvbGlkIDFweCByZWRcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4ICFpbXBvcnRhbnRcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCImIC5xbC1zbm93IC5xbC1waWNrZXIucWwtZXhwYW5kZWQgLnFsLXBpY2tlci1vcHRpb25zXCI6IHtcbiAgICAgICAgICB6SW5kZXg6IFwiMlwiLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICAgIGNsYXNzTmFtZT17ZXJyb3IgPyBcInF1aWxsIHF1aWxsLWVycm9yXCIgOiBcInF1aWxsLWVkaXRvci1jb250YWluZXJcIn1cbiAgICA+XG4gICAgICA8UmVhY3RRdWlsbFxuICAgICAgICB0aGVtZT1cInNub3dcIlxuICAgICAgICB2YWx1ZT17cXVpbGxWYWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVkaXRvckNoYW5nZX1cbiAgICAgICAgbW9kdWxlcz17eyB0b29sYmFyOiB0b29sYmFyT3B0aW9ucyB9fVxuICAgICAgICBkZWZhdWx0VmFsdWU9e3ZhbHVlfVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVRleHRFZGl0b3I7XG4iXSwibmFtZXMiOlsiQm94IiwiZXh0cmFjdFBsYWluVGV4dCIsInVzZVRoZW1lIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlJlYWN0UXVpbGwiLCJDdXN0b21UZXh0RWRpdG9yIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZXJyb3IiLCJtYXhMZW5ndGgiLCJ0aGVtZSIsInF1aWxsVmFsdWUiLCJzZXRRdWlsbFZhbHVlIiwicXVpbGxSZWYiLCJoYW5kbGVFZGl0b3JDaGFuZ2UiLCJjb250ZW50Iiwic3RyaXBwZWRDb250ZW50IiwidHJpbSIsImxlbmd0aCIsImN1cnJlbnQiLCJjdXJyZW50RWRpdG9yIiwiZ2V0RWRpdG9yIiwiZGVsZXRlVGV4dCIsInRvb2xiYXJPcHRpb25zIiwiaGVhZGVyIiwibGlzdCIsInNjcmlwdCIsImluZGVudCIsImRpcmVjdGlvbiIsInNpemUiLCJjb2xvciIsImJhY2tncm91bmQiLCJmb250IiwiYWxpZ24iLCJzeCIsIndpZHRoIiwiYm9yZGVyIiwicGFsZXR0ZSIsIm1vZGUiLCJib3JkZXJSYWRpdXMiLCJzdHJva2UiLCJmaWxsIiwibWluSGVpZ2h0IiwibWFyZ2luVG9wIiwiekluZGV4IiwiY2xhc3NOYW1lIiwibW9kdWxlcyIsInRvb2xiYXIiLCJkZWZhdWx0VmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Editor/Editor.tsx\n"));

/***/ })

});