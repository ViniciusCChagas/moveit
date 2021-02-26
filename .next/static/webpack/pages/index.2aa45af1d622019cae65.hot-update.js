webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Countdown\", function() { return Countdown; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_viniciuschagas_Desktop_NLW4_moveit_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ \"./src/styles/components/Countdown.module.css\");\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/home/viniciuschagas/Desktop/NLW4/moveit/src/components/Countdown.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction Countdown() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(25 * 60),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isActive = _useState2[0],\n      setIsActive = _useState2[1];\n\n  var minutes = Math.floor(time / 60);\n  var seconds = time % 60;\n\n  var _String$padStart$spli = String(minutes).padStart(2, '0').split(''),\n      _String$padStart$spli2 = Object(_home_viniciuschagas_Desktop_NLW4_moveit_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli, 2),\n      minuteLeft = _String$padStart$spli2[0],\n      minuteRight = _String$padStart$spli2[1];\n\n  var _String$padStart$spli3 = String(seconds).padStart(2, '0').split(''),\n      _String$padStart$spli4 = Object(_home_viniciuschagas_Desktop_NLW4_moveit_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli3, 2),\n      secondsLeft = _String$padStart$spli4[0],\n      secondsRight = _String$padStart$spli4[1];\n\n  function startCountdown() {\n    setIsActive(true);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (isActive && time > 0) {\n      setTimeout(function () {\n        setTime(time - 1);\n      }, 1000);\n    }\n  }, [isActive, time]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \":\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondsLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondsRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 4\n    }, this), isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      className: \"\".concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.coutdownButton, \" \").concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.coutdownButtonActive),\n      onClick: startCountdown,\n      children: \"Abandonar ciclo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.coutdownButton,\n      onClick: startCountdown,\n      children: \"Iniciar um ciclo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Countdown, \"Gt1wBlh2SAtB67+sBwCXkrGE/Ng=\");\n\n_c = Countdown;\n\nvar _c;\n\n$RefreshReg$(_c, \"Countdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeD82MzY2Il0sIm5hbWVzIjpbIkNvdW50ZG93biIsInVzZVN0YXRlIiwidGltZSIsInNldFRpbWUiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJTdHJpbmciLCJwYWRTdGFydCIsInNwbGl0IiwibWludXRlTGVmdCIsIm1pbnV0ZVJpZ2h0Iiwic2Vjb25kc0xlZnQiLCJzZWNvbmRzUmlnaHQiLCJzdGFydENvdW50ZG93biIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJzdHlsZXMiLCJjb3VudGRvd25Db250YWluZXIiLCJjb3V0ZG93bkJ1dHRvbiIsImNvdXRkb3duQnV0dG9uQWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEtBQUssRUFBTixDQURMO0FBQUEsTUFDcEJDLElBRG9CO0FBQUEsTUFDZEMsT0FEYzs7QUFBQSxtQkFFS0Ysc0RBQVEsQ0FBQyxLQUFELENBRmI7QUFBQSxNQUVwQkcsUUFGb0I7QUFBQSxNQUVWQyxXQUZVOztBQUkzQixNQUFNQyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixJQUFJLEdBQUcsRUFBbEIsQ0FBaEI7QUFDQSxNQUFNTyxPQUFPLEdBQUdQLElBQUksR0FBRyxFQUF2Qjs7QUFMMkIsOEJBT09RLE1BQU0sQ0FBQ0osT0FBRCxDQUFOLENBQ2hDSyxRQURnQyxDQUN2QixDQUR1QixFQUNwQixHQURvQixFQUVoQ0MsS0FGZ0MsQ0FFMUIsRUFGMEIsQ0FQUDtBQUFBO0FBQUEsTUFPcEJDLFVBUG9CO0FBQUEsTUFPUkMsV0FQUTs7QUFBQSwrQkFVU0osTUFBTSxDQUFDRCxPQUFELENBQU4sQ0FDbENFLFFBRGtDLENBQ3pCLENBRHlCLEVBQ3RCLEdBRHNCLEVBRWxDQyxLQUZrQyxDQUU1QixFQUY0QixDQVZUO0FBQUE7QUFBQSxNQVVwQkcsV0FWb0I7QUFBQSxNQVVQQyxZQVZPOztBQWMzQixXQUFTQyxjQUFULEdBQTBCO0FBQ3pCWixlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0E7O0FBRURhLHlEQUFTLENBQUMsWUFBTTtBQUNmLFFBQUlkLFFBQVEsSUFBSUYsSUFBSSxHQUFHLENBQXZCLEVBQTBCO0FBQ3pCaUIsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2hCaEIsZUFBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBUixDQUFQO0FBQ0EsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdBO0FBQ0QsR0FOUSxFQU1OLENBQUNFLFFBQUQsRUFBV0YsSUFBWCxDQU5NLENBQVQ7QUFRQSxzQkFDQztBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFFa0IsOEVBQU0sQ0FBQ0Msa0JBQXZCO0FBQUEsOEJBQ0M7QUFBQSxnQ0FDQztBQUFBLG9CQUFPUjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFFQztBQUFBLG9CQUFPQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFLQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxELGVBTUM7QUFBQSxnQ0FDQztBQUFBLG9CQUFPQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFFQztBQUFBLG9CQUFPQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsRUFhRVosUUFBUSxnQkFDUjtBQUNDLFVBQUksRUFBQyxRQUROO0FBRUMsZUFBUyxZQUFLZ0IsOEVBQU0sQ0FBQ0UsY0FBWixjQUE4QkYsOEVBQU0sQ0FBQ0csb0JBQXJDLENBRlY7QUFHQyxhQUFPLEVBQUVOLGNBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEUSxnQkFTUjtBQUNDLFVBQUksRUFBQyxRQUROO0FBRUMsZUFBUyxFQUFFRyw4RUFBTSxDQUFDRSxjQUZuQjtBQUdDLGFBQU8sRUFBRUwsY0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWlDQTs7R0EzRGVqQixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93bigpIHtcblx0Y29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMjUgKiA2MCk7XG5cdGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XG5cdGNvbnN0IHNlY29uZHMgPSB0aW1lICUgNjA7XG5cblx0Y29uc3QgW21pbnV0ZUxlZnQsIG1pbnV0ZVJpZ2h0XSA9IFN0cmluZyhtaW51dGVzKVxuXHRcdC5wYWRTdGFydCgyLCAnMCcpXG5cdFx0LnNwbGl0KCcnKTtcblx0Y29uc3QgW3NlY29uZHNMZWZ0LCBzZWNvbmRzUmlnaHRdID0gU3RyaW5nKHNlY29uZHMpXG5cdFx0LnBhZFN0YXJ0KDIsICcwJylcblx0XHQuc3BsaXQoJycpO1xuXG5cdGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKCkge1xuXHRcdHNldElzQWN0aXZlKHRydWUpO1xuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoaXNBY3RpdmUgJiYgdGltZSA+IDApIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzZXRUaW1lKHRpbWUgLSAxKTtcblx0XHRcdH0sIDEwMDApO1xuXHRcdH1cblx0fSwgW2lzQWN0aXZlLCB0aW1lXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25Db250YWluZXJ9PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxzcGFuPnttaW51dGVMZWZ0fTwvc3Bhbj5cblx0XHRcdFx0XHQ8c3Bhbj57bWludXRlUmlnaHR9PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHNwYW4+Ojwvc3Bhbj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8c3Bhbj57c2Vjb25kc0xlZnR9PC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuPntzZWNvbmRzUmlnaHR9PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHR7aXNBY3RpdmUgPyAoXG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHR0eXBlPSdidXR0b24nXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtgJHtzdHlsZXMuY291dGRvd25CdXR0b259ICR7c3R5bGVzLmNvdXRkb3duQnV0dG9uQWN0aXZlfWB9XG5cdFx0XHRcdFx0b25DbGljaz17c3RhcnRDb3VudGRvd259XG5cdFx0XHRcdD5cblx0XHRcdFx0XHRBYmFuZG9uYXIgY2ljbG9cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xuXHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmNvdXRkb3duQnV0dG9ufVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3N0YXJ0Q291bnRkb3dufVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0SW5pY2lhciB1bSBjaWNsb1xuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Countdown.tsx\n");

/***/ })

})