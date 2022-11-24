"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./models/profiles.tsx":
/*!*****************************!*\
  !*** ./models/profiles.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProfileType\": function() { return /* binding */ ProfileType; },\n/* harmony export */   \"ProfileTypeToAdapterMap\": function() { return /* binding */ ProfileTypeToAdapterMap; },\n/* harmony export */   \"useProfiles\": function() { return /* binding */ useProfiles; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_lens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/lens */ \"./api/lens.ts\");\n/* harmony import */ var _api_cc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/cc */ \"./api/cc.ts\");\n/* harmony import */ var _api_cc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_api_cc__WEBPACK_IMPORTED_MODULE_2__);\nvar _s = $RefreshSig$();\n\n\n\nvar ProfileType;\n(function(ProfileType) {\n    ProfileType[ProfileType[\"lens\"] = 0] = \"lens\";\n    ProfileType[ProfileType[\"cc\"] = 1] = \"cc\";\n})(ProfileType || (ProfileType = {}));\nconst ProfileTypeToAdapterMap = {\n    [ProfileType.lens]: _api_lens__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    [ProfileType.cc]: (_api_cc__WEBPACK_IMPORTED_MODULE_2___default())\n};\nconst useProfiles = (props)=>{\n    _s();\n    const [profiles, setProfiles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    _api_lens__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getProfilesRequest({\n        ownedBy: [\n            \"0x05759cd642E6Bb3343D8980Eb4376CBaf5cb6B50\"\n        ]\n    });\n    const refetch = ()=>{\n        props.activeProfileTypes.map((activeProfileType)=>ProfileTypeToApiModuleMap[activeProfileType].getProfiles());\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n    // props.enabled && refetch;\n    }, []);\n    return {\n        refetch,\n        profiles\n    };\n};\n_s(useProfiles, \"U6ddyJEDNWmntgnrXHeW1rXvb3s=\");\nuseProfiles.defaultProps = {\n    enabled: true,\n    activeProfileTypes: [\n        ProfileType.lens,\n        ProfileType.cc\n    ]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useProfiles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvcHJvZmlsZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBbUQ7QUFDakI7QUFDSjtJQUd2QjtVQUFLSyxXQUFXO0lBQVhBLFlBQUFBLFlBQ1ZDLFVBQUFBLEtBQUFBO0lBRFVELFlBQUFBLFlBRVZFLFFBQUFBLEtBQUFBO0dBRlVGLGdCQUFBQTtBQVNMLE1BQU1HLDBCQUEwQjtJQUNyQyxDQUFDSCxZQUFZQyxJQUFJLENBQUMsRUFBRUgsaURBQU9BO0lBQzNCLENBQUNFLFlBQVlFLEVBQUUsQ0FBQyxFQUFFSCxnREFBS0E7QUFDekIsRUFBc0U7QUFRL0QsTUFBTUssY0FBYyxDQUFDQyxRQUFrQjs7SUFDNUMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFhLEVBQUU7SUFFdkRDLG9FQUEwQixDQUFDO1FBQ3pCVyxTQUFTO1lBQUM7U0FBNkM7SUFDekQ7SUFFQSxNQUFNQyxVQUFVLElBQU07UUFDcEJMLE1BQU1NLGtCQUFrQixDQUFFQyxHQUFHLENBQUMsQ0FBQ0Msb0JBQzdCQyx5QkFBeUIsQ0FBQ0Qsa0JBQWtCLENBQUNFLFdBQVc7SUFFNUQ7SUFFQW5CLGdEQUFTQSxDQUFDLElBQU07SUFDZCw0QkFBNEI7SUFDOUIsR0FBRyxFQUFFO0lBRUwsT0FBTztRQUNMYztRQUNBSjtJQUNGO0FBQ0YsRUFBRTtHQXJCV0Y7QUF1QmJBLFlBQVlZLFlBQVksR0FBRztJQUN6QkMsU0FBUyxJQUFJO0lBQ2JOLG9CQUFvQjtRQUFDWCxZQUFZQyxJQUFJO1FBQUVELFlBQVlFLEVBQUU7S0FBQztBQUN4RDtBQUVBLCtEQUFlRSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21vZGVscy9wcm9maWxlcy50c3g/MDAyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExlbnNBcGkgZnJvbSBcIi4uL2FwaS9sZW5zXCI7XG5pbXBvcnQgQ0NBcGkgZnJvbSBcIi4uL2FwaS9jY1wiO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gXCJAd2FnbWkvY29yZS9kaXN0L2RlY2xhcmF0aW9ucy9zcmMvdHlwZXNcIjtcblxuZXhwb3J0IGVudW0gUHJvZmlsZVR5cGUge1xuICBsZW5zLFxuICBjYyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvZmlsZSB7XG4gIHR5cGU6IFByb2ZpbGVUeXBlO1xufVxuXG5leHBvcnQgY29uc3QgUHJvZmlsZVR5cGVUb0FkYXB0ZXJNYXAgPSB7XG4gIFtQcm9maWxlVHlwZS5sZW5zXTogTGVuc0FwaSxcbiAgW1Byb2ZpbGVUeXBlLmNjXTogQ0NBcGksXG59IGFzIHsgW2tleTogUHJvZmlsZVR5cGVdOiB7IGdldFByb2ZpbGVzOiAoKSA9PiBQcm9taXNlPElQcm9maWxlPiB9IH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcbiAgYWRkcmVzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgYWN0aXZlUHJvZmlsZVR5cGVzPzogUHJvZmlsZVR5cGVbXTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVByb2ZpbGVzID0gKHByb3BzOiBJUHJvcHMpID0+IHtcbiAgY29uc3QgW3Byb2ZpbGVzLCBzZXRQcm9maWxlc10gPSB1c2VTdGF0ZTxJUHJvZmlsZVtdPihbXSk7XG5cbiAgTGVuc0FwaS5nZXRQcm9maWxlc1JlcXVlc3Qoe1xuICAgIG93bmVkQnk6IFtcIjB4MDU3NTljZDY0MkU2QmIzMzQzRDg5ODBFYjQzNzZDQmFmNWNiNkI1MFwiXSxcbiAgfSk7XG5cbiAgY29uc3QgcmVmZXRjaCA9ICgpID0+IHtcbiAgICBwcm9wcy5hY3RpdmVQcm9maWxlVHlwZXMhLm1hcCgoYWN0aXZlUHJvZmlsZVR5cGUpID0+XG4gICAgICBQcm9maWxlVHlwZVRvQXBpTW9kdWxlTWFwW2FjdGl2ZVByb2ZpbGVUeXBlXS5nZXRQcm9maWxlcygpXG4gICAgKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHByb3BzLmVuYWJsZWQgJiYgcmVmZXRjaDtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB7XG4gICAgcmVmZXRjaCxcbiAgICBwcm9maWxlcyxcbiAgfTtcbn07XG5cbnVzZVByb2ZpbGVzLmRlZmF1bHRQcm9wcyA9IHtcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgYWN0aXZlUHJvZmlsZVR5cGVzOiBbUHJvZmlsZVR5cGUubGVucywgUHJvZmlsZVR5cGUuY2NdLFxufSBhcyBJUHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVByb2ZpbGVzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMZW5zQXBpIiwiQ0NBcGkiLCJQcm9maWxlVHlwZSIsImxlbnMiLCJjYyIsIlByb2ZpbGVUeXBlVG9BZGFwdGVyTWFwIiwidXNlUHJvZmlsZXMiLCJwcm9wcyIsInByb2ZpbGVzIiwic2V0UHJvZmlsZXMiLCJnZXRQcm9maWxlc1JlcXVlc3QiLCJvd25lZEJ5IiwicmVmZXRjaCIsImFjdGl2ZVByb2ZpbGVUeXBlcyIsIm1hcCIsImFjdGl2ZVByb2ZpbGVUeXBlIiwiUHJvZmlsZVR5cGVUb0FwaU1vZHVsZU1hcCIsImdldFByb2ZpbGVzIiwiZGVmYXVsdFByb3BzIiwiZW5hYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/profiles.tsx\n"));

/***/ })

});