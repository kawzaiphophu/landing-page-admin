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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Switch_Switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Switch/Switch */ \"(app-pages-browser)/./src/components/Switch/Switch.tsx\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home(param) {\n    let {} = param;\n    _s();\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [imageSrc, setImageSrc] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleBoxClick = ()=>{\n        if (fileInputRef.current) {\n            fileInputRef.current.click();\n        }\n    };\n    const handleFileChange = (e)=>{\n        var _e_target_files;\n        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n        if (file) {\n            const reader = new FileReader();\n            reader.onloadend = ()=>{\n                setImageSrc(reader.result);\n            };\n            reader.readAsDataURL(file);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        p: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                display: \"flex\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        variant: \"h3\",\n                        children: \"Home Section / Hero Section\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Switch_Switch__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        checked: true\n                    }, void 0, false, {\n                        fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                my: 2,\n                height: \"65vh\",\n                display: \"flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    flex: 1,\n                    p: 2,\n                    border: 1,\n                    borderColor: \"grey.300\",\n                    borderRadius: 2,\n                    display: \"flex\",\n                    gap: 3,\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            display: \"flex\",\n                            justifyContent: \"center\",\n                            alignItems: \"center\",\n                            height: \"60%\",\n                            onClick: handleBoxClick,\n                            sx: {\n                                cursor: \"pointer\",\n                                border: \"1px solid #666\",\n                                width: \"100%\",\n                                borderRadius: \"8px\"\n                            },\n                            children: imageSrc ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                sx: {\n                                    display: \"flex\",\n                                    justifyContent: \"center\",\n                                    alignItems: \"center\",\n                                    width: \"100%\",\n                                    height: \"100%\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: imageSrc,\n                                    alt: \"Preview\",\n                                    style: {\n                                        width: \"100%\",\n                                        height: \"100%\",\n                                        objectFit: \"cover\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        children: \"Image Drag-and-Drop Input\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"file\",\n                                        accept: \"image/*\",\n                                        style: {\n                                            display: \"none\"\n                                        },\n                                        ref: fileInputRef,\n                                        onChange: handleFileChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true)\n                        }, void 0, false, {\n                            fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            fullWidth: true,\n                            label: \"Main Title\",\n                            variant: \"outlined\",\n                            placeholder: \"Enter main title\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            fullWidth: true,\n                            label: \"Subtitle\",\n                            variant: \"outlined\",\n                            placeholder: \"Enter subtitle\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    children: \"1\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    children: \"2\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"kZ/7GM85ac84+gBfyGjd/qlMWws=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaG9tZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVzRDtBQUNhO0FBQ25CO0FBSWpDLFNBQVNRLEtBQUssS0FBUztRQUFULEVBQVMsR0FBVDs7SUFDM0IsTUFBTUMsZUFBZUgsNkNBQU1BLENBQW1CO0lBQzlDLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBOEI7SUFFdEUsTUFBTUssaUJBQWlCO1FBQ3JCLElBQUlILGFBQWFJLE9BQU8sRUFBRTtZQUN4QkosYUFBYUksT0FBTyxDQUFDQyxLQUFLO1FBQzVCO0lBQ0Y7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0M7WUFDWEE7UUFBYixNQUFNQyxRQUFPRCxrQkFBQUEsRUFBRUUsTUFBTSxDQUFDQyxLQUFLLGNBQWRILHNDQUFBQSxlQUFnQixDQUFDLEVBQUU7UUFDaEMsSUFBSUMsTUFBTTtZQUNSLE1BQU1HLFNBQVMsSUFBSUM7WUFDbkJELE9BQU9FLFNBQVMsR0FBRztnQkFDakJYLFlBQVlTLE9BQU9HLE1BQU07WUFDM0I7WUFDQUgsT0FBT0ksYUFBYSxDQUFDUDtRQUN2QjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNoQiwyR0FBR0E7UUFBQ3dCLEdBQUc7OzBCQUNOLDhEQUFDeEIsMkdBQUdBO2dCQUNGeUIsU0FBUztnQkFDVEMsZ0JBQWdCO2dCQUNoQkMsWUFBWTs7a0NBRVosOERBQUMxQiwyR0FBVUE7d0JBQUMyQixTQUFRO2tDQUFLOzs7Ozs7a0NBQ3pCLDhEQUFDN0IsaUVBQVlBO3dCQUFDOEIsT0FBTzs7Ozs7Ozs7Ozs7OzBCQUV2Qiw4REFBQzdCLDJHQUFHQTtnQkFBQzhCLElBQUk7Z0JBQUdDLFFBQVE7Z0JBQVFOLFNBQVM7MEJBQ25DLDRFQUFDekIsMkdBQUdBO29CQUNGZ0MsTUFBTTtvQkFDTlIsR0FBRztvQkFDSFMsUUFBUTtvQkFDUkMsYUFBWTtvQkFDWkMsY0FBYztvQkFDZFYsU0FBUTtvQkFDUlcsS0FBSztvQkFDTEMsZUFBZTtvQkFDZlYsWUFBVzs7c0NBR1gsOERBQUMzQiwyR0FBR0E7NEJBQ0Z5QixTQUFTOzRCQUNUQyxnQkFBZ0I7NEJBQ2hCQyxZQUFZOzRCQUNaSSxRQUFROzRCQUNSTyxTQUFTM0I7NEJBQ1Q0QixJQUFJO2dDQUNGQyxRQUFRO2dDQUNSUCxRQUFRO2dDQUNSUSxPQUFPO2dDQUNQTixjQUFjOzRCQUNoQjtzQ0FFQzFCLHlCQUNDLDhEQUFDVCwyR0FBR0E7Z0NBQ0Z1QyxJQUFJO29DQUNGZCxTQUFTO29DQUNUQyxnQkFBZ0I7b0NBQ2hCQyxZQUFZO29DQUNaYyxPQUFPO29DQUNQVixRQUFRO2dDQUNWOzBDQUVBLDRFQUFDVztvQ0FDQ0MsS0FBS2xDO29DQUNMbUMsS0FBSTtvQ0FDSkMsT0FBTzt3Q0FBRUosT0FBTzt3Q0FBUVYsUUFBUTt3Q0FBUWUsV0FBVztvQ0FBUTs7Ozs7Ozs7OztxREFJL0Q7O2tEQUNFLDhEQUFDN0MsMkdBQVVBO2tEQUFDOzs7Ozs7a0RBQ1osOERBQUM4Qzt3Q0FDQ0MsTUFBSzt3Q0FDTEMsUUFBTzt3Q0FDUEosT0FBTzs0Q0FBRXBCLFNBQVM7d0NBQU87d0NBQ3pCeUIsS0FBSzFDO3dDQUNMMkMsVUFBVXJDOzs7Ozs7Ozs7Ozs7O3NDQUtsQiw4REFBQ1osMkdBQVNBOzRCQUNSa0QsU0FBUzs0QkFDVEMsT0FBTTs0QkFDTnpCLFNBQVE7NEJBQ1IwQixhQUFZOzs7Ozs7c0NBRWQsOERBQUNwRCwyR0FBU0E7NEJBQ1JrRCxTQUFTOzRCQUNUQyxPQUFNOzRCQUNOekIsU0FBUTs0QkFDUjBCLGFBQVk7Ozs7OztzQ0FFZCw4REFBQ3RELDJHQUFHQTs7OENBQ0YsOERBQUNHLDJHQUFNQTs4Q0FBQzs7Ozs7OzhDQUNSLDhEQUFDQSwyR0FBTUE7OENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJwQjtHQXRId0JJO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvaG9tZS9wYWdlLnRzeD9kYjIxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgQ3VzdG9tU3dpdGNoIGZyb20gXCJAL2NvbXBvbmVudHMvU3dpdGNoL1N3aXRjaFwiO1xuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5LCBUZXh0RmllbGQsIEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe306IFByb3BzKSB7XG4gIGNvbnN0IGZpbGVJbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgW2ltYWdlU3JjLCBzZXRJbWFnZVNyY10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBBcnJheUJ1ZmZlciB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUJveENsaWNrID0gKCkgPT4ge1xuICAgIGlmIChmaWxlSW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgZmlsZUlucHV0UmVmLmN1cnJlbnQuY2xpY2soKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlcz8uWzBdO1xuICAgIGlmIChmaWxlKSB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgc2V0SW1hZ2VTcmMocmVhZGVyLnJlc3VsdCk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxCb3ggcD17Mn0+XG4gICAgICA8Qm94XG4gICAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxuICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1iZXR3ZWVuXCJ9XG4gICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XG4gICAgICA+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiPkhvbWUgU2VjdGlvbiAvIEhlcm8gU2VjdGlvbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEN1c3RvbVN3aXRjaCBjaGVja2VkIC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggbXk9ezJ9IGhlaWdodD17XCI2NXZoXCJ9IGRpc3BsYXk9e1wiZmxleFwifT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGZsZXg9ezF9XG4gICAgICAgICAgcD17Mn1cbiAgICAgICAgICBib3JkZXI9ezF9XG4gICAgICAgICAgYm9yZGVyQ29sb3I9XCJncmV5LjMwMFwiXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPXsyfVxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBnYXA9ezN9XG4gICAgICAgICAgZmxleERpcmVjdGlvbj17XCJjb2x1bW5cIn1cbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAvLyBPcHRpb25hbDogc2hvdyBwb2ludGVyIGN1cnNvciBvbiBob3ZlclxuICAgICAgICA+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgZGlzcGxheT17XCJmbGV4XCJ9XG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cbiAgICAgICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XG4gICAgICAgICAgICBoZWlnaHQ9e1wiNjAlXCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCb3hDbGlja30gLy8gSGFuZGxlIGNsaWNrIHRvIG9wZW4gZmlsZSBkaWFsb2dcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzY2NlwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2ltYWdlU3JjID8gKFxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVNyYyBhcyBzdHJpbmd9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJQcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+SW1hZ2UgRHJhZy1hbmQtRHJvcCBJbnB1dDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgICAgICAgICAgIHJlZj17ZmlsZUlucHV0UmVmfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbGFiZWw9XCJNYWluIFRpdGxlXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG1haW4gdGl0bGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBsYWJlbD1cIlN1YnRpdGxlXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHN1YnRpdGxlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8QnV0dG9uPjE8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24+MjwvQnV0dG9uPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgey8qIDxCb3hcbiAgICAgICAgICBmbGV4PXsxfVxuICAgICAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249e1wiY29sdW1uXCJ9XG4gICAgICAgICAgcD17Mn1cbiAgICAgICAgICBib3JkZXI9ezF9XG4gICAgICAgICAgYm9yZGVyQ29sb3I9XCJncmV5LjMwMFwiXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPXsyfVxuICAgICAgICAgIG1sPXsyfVxuICAgICAgICA+XG4gICAgICAgICAgPEJveCBmbGV4PXsxfSBtYj17Mn0+PC9Cb3g+XG4gICAgICAgICAgPEJveCBmbGV4PXsxfT48L0JveD5cbiAgICAgICAgPC9Cb3g+ICovfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ3VzdG9tU3dpdGNoIiwiQm94IiwiVHlwb2dyYXBoeSIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJIb21lIiwiZmlsZUlucHV0UmVmIiwiaW1hZ2VTcmMiLCJzZXRJbWFnZVNyYyIsImhhbmRsZUJveENsaWNrIiwiY3VycmVudCIsImNsaWNrIiwiaGFuZGxlRmlsZUNoYW5nZSIsImUiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInAiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwidmFyaWFudCIsImNoZWNrZWQiLCJteSIsImhlaWdodCIsImZsZXgiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImJvcmRlclJhZGl1cyIsImdhcCIsImZsZXhEaXJlY3Rpb24iLCJvbkNsaWNrIiwic3giLCJjdXJzb3IiLCJ3aWR0aCIsImltZyIsInNyYyIsImFsdCIsInN0eWxlIiwib2JqZWN0Rml0IiwiaW5wdXQiLCJ0eXBlIiwiYWNjZXB0IiwicmVmIiwib25DaGFuZ2UiLCJmdWxsV2lkdGgiLCJsYWJlbCIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/home/page.tsx\n"));

/***/ })

});