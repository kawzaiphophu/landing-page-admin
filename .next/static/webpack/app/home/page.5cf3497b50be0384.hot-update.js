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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Switch_Switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Switch/Switch */ \"(app-pages-browser)/./src/components/Switch/Switch.tsx\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,TextField,Typography,useTheme!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/styles/useTheme.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,TextField,Typography,useTheme!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,TextField,Typography,useTheme!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,TextField,Typography,useTheme!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,TextField,Typography,useTheme!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home(param) {\n    let {} = param;\n    _s();\n    const theme = (0,_barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [imageSrc, setImageSrc] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleBoxClick = ()=>{\n        if (fileInputRef.current) {\n            fileInputRef.current.click();\n        }\n    };\n    const handleFileChange = (e)=>{\n        var _e_target_files;\n        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n        if (file) {\n            const reader = new FileReader();\n            reader.onloadend = ()=>{\n                setImageSrc(reader.result);\n            };\n            reader.readAsDataURL(file);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        p: 2,\n        sx: {\n            border: \"1px solid #DEDEDE\",\n            borderRadius: \"8px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                display: \"flex\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                sx: {\n                    border: \"1px solid #DEDEDE\",\n                    borderRadius: \"8px\",\n                    p: 3,\n                    bgcolor: theme.palette.primary.main,\n                    mt: -4\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        variant: \"h3\",\n                        color: \"#FFF\",\n                        children: \"Home Section / Hero Section\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Switch_Switch__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        checked: true\n                    }, void 0, false, {\n                        fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                my: 2,\n                height: \"65vh\",\n                display: \"flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    flex: 1,\n                    p: 2,\n                    display: \"flex\",\n                    gap: 3,\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            display: \"flex\",\n                            justifyContent: \"center\",\n                            alignItems: \"center\",\n                            height: \"60%\",\n                            onClick: handleBoxClick,\n                            sx: {\n                                cursor: \"pointer\",\n                                border: \"1px solid #dadada\",\n                                width: \"100%\",\n                                borderRadius: \"8px\"\n                            },\n                            children: imageSrc ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                sx: {\n                                    display: \"flex\",\n                                    justifyContent: \"center\",\n                                    alignItems: \"center\",\n                                    width: \"100%\",\n                                    height: \"100%\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: imageSrc,\n                                    alt: \"Preview\",\n                                    style: {\n                                        width: \"100%\",\n                                        height: \"100%\",\n                                        objectFit: \"contain\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        children: \"Image Drag-and-Drop Input\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"file\",\n                                        accept: \"image/*\",\n                                        style: {\n                                            display: \"none\"\n                                        },\n                                        ref: fileInputRef,\n                                        onChange: handleFileChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true)\n                        }, void 0, false, {\n                            fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            fullWidth: true,\n                            label: \"Main Title\",\n                            variant: \"outlined\",\n                            placeholder: \"Enter main title\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            fullWidth: true,\n                            label: \"Subtitle\",\n                            variant: \"outlined\",\n                            placeholder: \"Enter subtitle\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            display: \"flex\",\n                            gap: 2,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    variant: \"outlined\",\n                                    children: \"cancle\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    variant: \"contained\",\n                                    children: \"submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kawzaiphophu/Desktop/Knacx/company-website-admin/src/app/home/page.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"VfTyhikkALn2+gje3KkuMYE3HoE=\", false, function() {\n    return [\n        _barrel_optimize_names_Box_Button_TextField_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaG9tZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFc0Q7QUFDdUI7QUFDN0I7QUFJakMsU0FBU1MsS0FBSyxLQUFTO1FBQVQsRUFBUyxHQUFUOztJQUMzQixNQUFNQyxRQUFRTCx3SEFBUUE7SUFDdEIsTUFBTU0sZUFBZUosNkNBQU1BLENBQW1CO0lBQzlDLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBOEI7SUFFdEUsTUFBTU0saUJBQWlCO1FBQ3JCLElBQUlILGFBQWFJLE9BQU8sRUFBRTtZQUN4QkosYUFBYUksT0FBTyxDQUFDQyxLQUFLO1FBQzVCO0lBQ0Y7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0M7WUFDWEE7UUFBYixNQUFNQyxRQUFPRCxrQkFBQUEsRUFBRUUsTUFBTSxDQUFDQyxLQUFLLGNBQWRILHNDQUFBQSxlQUFnQixDQUFDLEVBQUU7UUFDaEMsSUFBSUMsTUFBTTtZQUNSLE1BQU1HLFNBQVMsSUFBSUM7WUFDbkJELE9BQU9FLFNBQVMsR0FBRztnQkFDakJYLFlBQVlTLE9BQU9HLE1BQU07WUFDM0I7WUFDQUgsT0FBT0ksYUFBYSxDQUFDUDtRQUN2QjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNsQixvSEFBR0E7UUFBQzBCLEdBQUc7UUFBR0MsSUFBSTtZQUFFQyxRQUFRO1lBQXFCQyxjQUFjO1FBQU07OzBCQUNoRSw4REFBQzdCLG9IQUFHQTtnQkFDRjhCLFNBQVM7Z0JBQ1RDLGdCQUFnQjtnQkFDaEJDLFlBQVk7Z0JBQ1pMLElBQUk7b0JBQ0ZDLFFBQVE7b0JBQ1JDLGNBQWM7b0JBQ2RILEdBQUc7b0JBQ0hPLFNBQVN4QixNQUFNeUIsT0FBTyxDQUFDQyxPQUFPLENBQUNDLElBQUk7b0JBQ25DQyxJQUFJLENBQUM7Z0JBQ1A7O2tDQUVBLDhEQUFDcEMsb0hBQVVBO3dCQUFDcUMsU0FBUTt3QkFBS0MsT0FBTztrQ0FBUTs7Ozs7O2tDQUd4Qyw4REFBQ3hDLGlFQUFZQTt3QkFBQ3lDLE9BQU87Ozs7Ozs7Ozs7OzswQkFFdkIsOERBQUN4QyxvSEFBR0E7Z0JBQUN5QyxJQUFJO2dCQUFHQyxRQUFRO2dCQUFRWixTQUFTOzBCQUNuQyw0RUFBQzlCLG9IQUFHQTtvQkFDRjJDLE1BQU07b0JBQ05qQixHQUFHO29CQUNISSxTQUFRO29CQUNSYyxLQUFLO29CQUNMQyxlQUFlO29CQUNmYixZQUFXOztzQ0FFWCw4REFBQ2hDLG9IQUFHQTs0QkFDRjhCLFNBQVM7NEJBQ1RDLGdCQUFnQjs0QkFDaEJDLFlBQVk7NEJBQ1pVLFFBQVE7NEJBQ1JJLFNBQVNqQzs0QkFDVGMsSUFBSTtnQ0FDRm9CLFFBQVE7Z0NBQ1JuQixRQUFRO2dDQUNSb0IsT0FBTztnQ0FDUG5CLGNBQWM7NEJBQ2hCO3NDQUVDbEIseUJBQ0MsOERBQUNYLG9IQUFHQTtnQ0FDRjJCLElBQUk7b0NBQ0ZHLFNBQVM7b0NBQ1RDLGdCQUFnQjtvQ0FDaEJDLFlBQVk7b0NBQ1pnQixPQUFPO29DQUNQTixRQUFRO2dDQUNWOzBDQUVBLDRFQUFDTztvQ0FDQ0MsS0FBS3ZDO29DQUNMd0MsS0FBSTtvQ0FDSkMsT0FBTzt3Q0FDTEosT0FBTzt3Q0FDUE4sUUFBUTt3Q0FDUlcsV0FBVztvQ0FDYjs7Ozs7Ozs7OztxREFJSjs7a0RBQ0UsOERBQUNwRCxvSEFBVUE7a0RBQUM7Ozs7OztrREFDWiw4REFBQ3FEO3dDQUNDQyxNQUFLO3dDQUNMQyxRQUFPO3dDQUNQSixPQUFPOzRDQUFFdEIsU0FBUzt3Q0FBTzt3Q0FDekIyQixLQUFLL0M7d0NBQ0xnRCxVQUFVMUM7Ozs7Ozs7Ozs7Ozs7c0NBS2xCLDhEQUFDZCxvSEFBU0E7NEJBQ1J5RCxTQUFTOzRCQUNUQyxPQUFNOzRCQUNOdEIsU0FBUTs0QkFDUnVCLGFBQVk7Ozs7OztzQ0FFZCw4REFBQzNELG9IQUFTQTs0QkFDUnlELFNBQVM7NEJBQ1RDLE9BQU07NEJBQ050QixTQUFROzRCQUNSdUIsYUFBWTs7Ozs7O3NDQUVkLDhEQUFDN0Qsb0hBQUdBOzRCQUFDOEIsU0FBUzs0QkFBUWMsS0FBSzs7OENBQ3pCLDhEQUFDekMsb0hBQU1BO29DQUFDbUMsU0FBUTs4Q0FBVzs7Ozs7OzhDQUMzQiw4REFBQ25DLG9IQUFNQTtvQ0FBQ21DLFNBQVE7OENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhDO0dBbkh3QjlCOztRQUNSSixvSEFBUUE7OztLQURBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2hvbWUvcGFnZS50c3g/ZGIyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IEN1c3RvbVN3aXRjaCBmcm9tIFwiQC9jb21wb25lbnRzL1N3aXRjaC9Td2l0Y2hcIjtcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSwgVGV4dEZpZWxkLCBCdXR0b24sIHVzZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgUHJvcHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7fTogUHJvcHMpIHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFtpbWFnZVNyYywgc2V0SW1hZ2VTcmNdID0gdXNlU3RhdGU8c3RyaW5nIHwgQXJyYXlCdWZmZXIgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBoYW5kbGVCb3hDbGljayA9ICgpID0+IHtcbiAgICBpZiAoZmlsZUlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGZpbGVJbnB1dFJlZi5jdXJyZW50LmNsaWNrKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXM/LlswXTtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgIHNldEltYWdlU3JjKHJlYWRlci5yZXN1bHQpO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHA9ezJ9IHN4PXt7IGJvcmRlcjogXCIxcHggc29saWQgI0RFREVERVwiLCBib3JkZXJSYWRpdXM6IFwiOHB4XCIgfX0+XG4gICAgICA8Qm94XG4gICAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxuICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1iZXR3ZWVuXCJ9XG4gICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjREVERURFXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxuICAgICAgICAgIHA6IDMsXG4gICAgICAgICAgYmdjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICAgICAgbXQ6IC00LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjb2xvcj17XCIjRkZGXCJ9PlxuICAgICAgICAgIEhvbWUgU2VjdGlvbiAvIEhlcm8gU2VjdGlvblxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxDdXN0b21Td2l0Y2ggY2hlY2tlZCAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IG15PXsyfSBoZWlnaHQ9e1wiNjV2aFwifSBkaXNwbGF5PXtcImZsZXhcIn0+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBmbGV4PXsxfVxuICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGdhcD17M31cbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPXtcImNvbHVtblwifVxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgZGlzcGxheT17XCJmbGV4XCJ9XG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cbiAgICAgICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XG4gICAgICAgICAgICBoZWlnaHQ9e1wiNjAlXCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCb3hDbGlja30gLy8gSGFuZGxlIGNsaWNrIHRvIG9wZW4gZmlsZSBkaWFsb2dcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2RhZGFkYVwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2ltYWdlU3JjID8gKFxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVNyYyBhcyBzdHJpbmd9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJQcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkltYWdlIERyYWctYW5kLURyb3AgSW5wdXQ8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICByZWY9e2ZpbGVJbnB1dFJlZn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGxhYmVsPVwiTWFpbiBUaXRsZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBtYWluIHRpdGxlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbGFiZWw9XCJTdWJ0aXRsZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBzdWJ0aXRsZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Qm94IGRpc3BsYXk9e1wiZmxleFwifSBnYXA9ezJ9PlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIj5jYW5jbGU8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPnN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkN1c3RvbVN3aXRjaCIsIkJveCIsIlR5cG9ncmFwaHkiLCJUZXh0RmllbGQiLCJCdXR0b24iLCJ1c2VUaGVtZSIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJIb21lIiwidGhlbWUiLCJmaWxlSW5wdXRSZWYiLCJpbWFnZVNyYyIsInNldEltYWdlU3JjIiwiaGFuZGxlQm94Q2xpY2siLCJjdXJyZW50IiwiY2xpY2siLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwicCIsInN4IiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJnY29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJtdCIsInZhcmlhbnQiLCJjb2xvciIsImNoZWNrZWQiLCJteSIsImhlaWdodCIsImZsZXgiLCJnYXAiLCJmbGV4RGlyZWN0aW9uIiwib25DbGljayIsImN1cnNvciIsIndpZHRoIiwiaW1nIiwic3JjIiwiYWx0Iiwic3R5bGUiLCJvYmplY3RGaXQiLCJpbnB1dCIsInR5cGUiLCJhY2NlcHQiLCJyZWYiLCJvbkNoYW5nZSIsImZ1bGxXaWR0aCIsImxhYmVsIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/home/page.tsx\n"));

/***/ })

});