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

/***/ "(app-pages-browser)/./src/app/home/page.tsx":
/*!*******************************!*\
  !*** ./src/app/home/page.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Switch_Switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Switch/Switch */ \"(app-pages-browser)/./src/components/Switch/Switch.tsx\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home(param) {\n    let {} = param;\n    _s();\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [imageSrc, setImageSrc] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleBoxClick = ()=>{\n        if (fileInputRef.current) {\n            fileInputRef.current.click();\n        }\n    };\n    const handleFileChange = (e)=>{\n        var _e_target_files;\n        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n        if (file) {\n            const reader = new FileReader();\n            reader.onloadend = ()=>{\n                setImageSrc(reader.result);\n            };\n            reader.readAsDataURL(file);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        p: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                display: \"flex\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        variant: \"h3\",\n                        children: \"Home Section / Hero Section\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Switch_Switch__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        checked: true\n                    }, void 0, false, {\n                        fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                my: 2,\n                height: \"65vh\",\n                display: \"flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    flex: 1,\n                    p: 2,\n                    border: 1,\n                    borderColor: \"grey.300\",\n                    borderRadius: 2,\n                    display: \"flex\",\n                    gap: 3,\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            display: \"flex\",\n                            justifyContent: \"center\",\n                            alignItems: \"center\",\n                            height: \"60%\",\n                            onClick: handleBoxClick,\n                            sx: {\n                                cursor: \"pointer\",\n                                border: \"1px solid #666\"\n                            },\n                            children: imageSrc ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                sx: {\n                                    display: \"flex\",\n                                    justifyContent: \"center\",\n                                    alignItems: \"center\",\n                                    width: \"100%\",\n                                    height: \"100%\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: imageSrc,\n                                    alt: \"Preview\",\n                                    style: {\n                                        width: \"100%\",\n                                        height: \"100%\",\n                                        objectFit: \"cover\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        children: \"Image Drag-and-Drop Input\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"file\",\n                                        accept: \"image/*\",\n                                        style: {\n                                            display: \"none\"\n                                        },\n                                        ref: fileInputRef,\n                                        onChange: handleFileChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true)\n                        }, void 0, false, {\n                            fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            fullWidth: true,\n                            label: \"Main Title\",\n                            variant: \"outlined\",\n                            placeholder: \"Enter main title\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            fullWidth: true,\n                            label: \"Subtitle\",\n                            variant: \"outlined\",\n                            placeholder: \"Enter subtitle\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    children: \"1\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    children: \"2\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"kZ/7GM85ac84+gBfyGjd/qlMWws=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaG9tZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVzRDtBQUNhO0FBQ25CO0FBSWpDLFNBQVNRLEtBQUssS0FBUztRQUFULEVBQVMsR0FBVDs7SUFDM0IsTUFBTUMsZUFBZUgsNkNBQU1BLENBQW1CO0lBQzlDLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBOEI7SUFFdEUsTUFBTUssaUJBQWlCO1FBQ3JCLElBQUlILGFBQWFJLE9BQU8sRUFBRTtZQUN4QkosYUFBYUksT0FBTyxDQUFDQyxLQUFLO1FBQzVCO0lBQ0Y7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0M7WUFDWEE7UUFBYixNQUFNQyxRQUFPRCxrQkFBQUEsRUFBRUUsTUFBTSxDQUFDQyxLQUFLLGNBQWRILHNDQUFBQSxlQUFnQixDQUFDLEVBQUU7UUFDaEMsSUFBSUMsTUFBTTtZQUNSLE1BQU1HLFNBQVMsSUFBSUM7WUFDbkJELE9BQU9FLFNBQVMsR0FBRztnQkFDakJYLFlBQVlTLE9BQU9HLE1BQU07WUFDM0I7WUFDQUgsT0FBT0ksYUFBYSxDQUFDUDtRQUN2QjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNoQiwyR0FBR0E7UUFBQ3dCLEdBQUc7OzBCQUNOLDhEQUFDeEIsMkdBQUdBO2dCQUNGeUIsU0FBUztnQkFDVEMsZ0JBQWdCO2dCQUNoQkMsWUFBWTs7a0NBRVosOERBQUMxQiwyR0FBVUE7d0JBQUMyQixTQUFRO2tDQUFLOzs7Ozs7a0NBQ3pCLDhEQUFDN0IsaUVBQVlBO3dCQUFDOEIsT0FBTzs7Ozs7Ozs7Ozs7OzBCQUV2Qiw4REFBQzdCLDJHQUFHQTtnQkFBQzhCLElBQUk7Z0JBQUdDLFFBQVE7Z0JBQVFOLFNBQVM7MEJBQ25DLDRFQUFDekIsMkdBQUdBO29CQUNGZ0MsTUFBTTtvQkFDTlIsR0FBRztvQkFDSFMsUUFBUTtvQkFDUkMsYUFBWTtvQkFDWkMsY0FBYztvQkFDZFYsU0FBUTtvQkFDUlcsS0FBSztvQkFDTEMsZUFBZTtvQkFDZlYsWUFBVzs7c0NBR1gsOERBQUMzQiwyR0FBR0E7NEJBQ0Z5QixTQUFTOzRCQUNUQyxnQkFBZ0I7NEJBQ2hCQyxZQUFZOzRCQUNaSSxRQUFROzRCQUNSTyxTQUFTM0I7NEJBQ1Q0QixJQUFJO2dDQUFFQyxRQUFRO2dDQUFXUCxRQUFROzRCQUFpQjtzQ0FFakR4Qix5QkFDQyw4REFBQ1QsMkdBQUdBO2dDQUNGdUMsSUFBSTtvQ0FDRmQsU0FBUztvQ0FDVEMsZ0JBQWdCO29DQUNoQkMsWUFBWTtvQ0FDWmMsT0FBTztvQ0FDUFYsUUFBUTtnQ0FDVjswQ0FFQSw0RUFBQ1c7b0NBQ0NDLEtBQUtsQztvQ0FDTG1DLEtBQUk7b0NBQ0pDLE9BQU87d0NBQUVKLE9BQU87d0NBQVFWLFFBQVE7d0NBQVFlLFdBQVc7b0NBQVE7Ozs7Ozs7Ozs7cURBSS9EOztrREFDRSw4REFBQzdDLDJHQUFVQTtrREFBQzs7Ozs7O2tEQUNaLDhEQUFDOEM7d0NBQ0NDLE1BQUs7d0NBQ0xDLFFBQU87d0NBQ1BKLE9BQU87NENBQUVwQixTQUFTO3dDQUFPO3dDQUN6QnlCLEtBQUsxQzt3Q0FDTDJDLFVBQVVyQzs7Ozs7Ozs7Ozs7OztzQ0FLbEIsOERBQUNaLDJHQUFTQTs0QkFDUmtELFNBQVM7NEJBQ1RDLE9BQU07NEJBQ056QixTQUFROzRCQUNSMEIsYUFBWTs7Ozs7O3NDQUVkLDhEQUFDcEQsMkdBQVNBOzRCQUNSa0QsU0FBUzs0QkFDVEMsT0FBTTs0QkFDTnpCLFNBQVE7NEJBQ1IwQixhQUFZOzs7Ozs7c0NBRWQsOERBQUN0RCwyR0FBR0E7OzhDQUNGLDhEQUFDRywyR0FBTUE7OENBQUM7Ozs7Ozs4Q0FDUiw4REFBQ0EsMkdBQU1BOzhDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CcEI7R0FqSHdCSTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2hvbWUvcGFnZS50c3g/ZGIyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IEN1c3RvbVN3aXRjaCBmcm9tIFwiQC9jb21wb25lbnRzL1N3aXRjaC9Td2l0Y2hcIjtcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSwgVGV4dEZpZWxkLCBCdXR0b24gfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHt9OiBQcm9wcykge1xuICBjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFtpbWFnZVNyYywgc2V0SW1hZ2VTcmNdID0gdXNlU3RhdGU8c3RyaW5nIHwgQXJyYXlCdWZmZXIgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBoYW5kbGVCb3hDbGljayA9ICgpID0+IHtcbiAgICBpZiAoZmlsZUlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGZpbGVJbnB1dFJlZi5jdXJyZW50LmNsaWNrKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXM/LlswXTtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgIHNldEltYWdlU3JjKHJlYWRlci5yZXN1bHQpO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHA9ezJ9PlxuICAgICAgPEJveFxuICAgICAgICBkaXNwbGF5PXtcImZsZXhcIn1cbiAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wic3BhY2UtYmV0d2VlblwifVxuICAgICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxuICAgICAgPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj5Ib21lIFNlY3Rpb24gLyBIZXJvIFNlY3Rpb248L1R5cG9ncmFwaHk+XG4gICAgICAgIDxDdXN0b21Td2l0Y2ggY2hlY2tlZCAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IG15PXsyfSBoZWlnaHQ9e1wiNjV2aFwifSBkaXNwbGF5PXtcImZsZXhcIn0+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBmbGV4PXsxfVxuICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgYm9yZGVyPXsxfVxuICAgICAgICAgIGJvcmRlckNvbG9yPVwiZ3JleS4zMDBcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz17Mn1cbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgZ2FwPXszfVxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249e1wiY29sdW1uXCJ9XG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgLy8gT3B0aW9uYWw6IHNob3cgcG9pbnRlciBjdXJzb3Igb24gaG92ZXJcbiAgICAgICAgPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XG4gICAgICAgICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxuICAgICAgICAgICAgaGVpZ2h0PXtcIjYwJVwifVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQm94Q2xpY2t9IC8vIEhhbmRsZSBjbGljayB0byBvcGVuIGZpbGUgZGlhbG9nXG4gICAgICAgICAgICBzeD17eyBjdXJzb3I6IFwicG9pbnRlclwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICM2NjZcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpbWFnZVNyYyA/IChcbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VTcmMgYXMgc3RyaW5nfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiUHJldmlld1wiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG9iamVjdEZpdDogXCJjb3ZlclwiIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkltYWdlIERyYWctYW5kLURyb3AgSW5wdXQ8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICByZWY9e2ZpbGVJbnB1dFJlZn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGxhYmVsPVwiTWFpbiBUaXRsZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBtYWluIHRpdGxlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbGFiZWw9XCJTdWJ0aXRsZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBzdWJ0aXRsZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEJ1dHRvbj4xPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uPjI8L0J1dHRvbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHsvKiA8Qm94XG4gICAgICAgICAgZmxleD17MX1cbiAgICAgICAgICBkaXNwbGF5PXtcImZsZXhcIn1cbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPXtcImNvbHVtblwifVxuICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgYm9yZGVyPXsxfVxuICAgICAgICAgIGJvcmRlckNvbG9yPVwiZ3JleS4zMDBcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz17Mn1cbiAgICAgICAgICBtbD17Mn1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3ggZmxleD17MX0gbWI9ezJ9PjwvQm94PlxuICAgICAgICAgIDxCb3ggZmxleD17MX0+PC9Cb3g+XG4gICAgICAgIDwvQm94PiAqL31cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkN1c3RvbVN3aXRjaCIsIkJveCIsIlR5cG9ncmFwaHkiLCJUZXh0RmllbGQiLCJCdXR0b24iLCJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiSG9tZSIsImZpbGVJbnB1dFJlZiIsImltYWdlU3JjIiwic2V0SW1hZ2VTcmMiLCJoYW5kbGVCb3hDbGljayIsImN1cnJlbnQiLCJjbGljayIsImhhbmRsZUZpbGVDaGFuZ2UiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJwIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInZhcmlhbnQiLCJjaGVja2VkIiwibXkiLCJoZWlnaHQiLCJmbGV4IiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJnYXAiLCJmbGV4RGlyZWN0aW9uIiwib25DbGljayIsInN4IiwiY3Vyc29yIiwid2lkdGgiLCJpbWciLCJzcmMiLCJhbHQiLCJzdHlsZSIsIm9iamVjdEZpdCIsImlucHV0IiwidHlwZSIsImFjY2VwdCIsInJlZiIsIm9uQ2hhbmdlIiwiZnVsbFdpZHRoIiwibGFiZWwiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/home/page.tsx\n"));

/***/ })

});