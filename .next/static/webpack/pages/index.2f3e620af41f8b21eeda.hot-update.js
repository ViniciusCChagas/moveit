webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Countdown\", function() { return Countdown; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_viniciuschagas_Desktop_NLW4_moveit_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/ChallengesContext */ \"./src/contexts/ChallengesContext.tsx\");\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ \"./src/styles/components/Countdown.module.css\");\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/home/viniciuschagas/Desktop/NLW4/moveit/src/components/Countdown.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar countdownTimeOut;\nfunction Countdown() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__[\"ChallengesContext\"]),\n      startNewChallenge = _useContext.startNewChallenge;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0.05 * 60),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isActive = _useState2[0],\n      setIsActive = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      hasFinished = _useState3[0],\n      setHasFinished = _useState3[1];\n\n  var minutes = Math.floor(time / 60);\n  var seconds = time % 60;\n\n  var _String$padStart$spli = String(minutes).padStart(2, '0').split(''),\n      _String$padStart$spli2 = Object(_home_viniciuschagas_Desktop_NLW4_moveit_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli, 2),\n      minuteLeft = _String$padStart$spli2[0],\n      minuteRight = _String$padStart$spli2[1];\n\n  var _String$padStart$spli3 = String(seconds).padStart(2, '0').split(''),\n      _String$padStart$spli4 = Object(_home_viniciuschagas_Desktop_NLW4_moveit_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli3, 2),\n      secondsLeft = _String$padStart$spli4[0],\n      secondsRight = _String$padStart$spli4[1];\n\n  function startCountdown() {\n    setIsActive(true);\n  }\n\n  function resetCountdown() {\n    clearTimeout(countdownTimeOut);\n    setIsActive(false);\n    setTime(0.05 * 60);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (isActive && time > 0) {\n      countdownTimeOut = setTimeout(function () {\n        setTime(time - 1);\n      }, 1000);\n    } else if (isActive && time === 0) {\n      setHasFinished(true);\n      setIsActive(false);\n      startNewChallenge();\n    }\n  }, [isActive, time]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \":\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondsLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondsRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 4\n    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,\n      disabled: true,\n      children: \"Ciclo encerrado\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        className: \"\".concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton, \" \").concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButtonActive),\n        onClick: resetCountdown,\n        children: \"Abandonar ciclo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 7\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,\n        onClick: startCountdown,\n        children: \"Iniciar um ciclo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 7\n      }, this)\n    }, void 0, false)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Countdown, \"12y2hdgftYDMRrFBdoqHz5/jB4s=\");\n\n_c = Countdown;\n\nvar _c;\n\n$RefreshReg$(_c, \"Countdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeD82MzY2Il0sIm5hbWVzIjpbImNvdW50ZG93blRpbWVPdXQiLCJDb3VudGRvd24iLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJzdGFydE5ld0NoYWxsZW5nZSIsInVzZVN0YXRlIiwidGltZSIsInNldFRpbWUiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwiaGFzRmluaXNoZWQiLCJzZXRIYXNGaW5pc2hlZCIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJzcGxpdCIsIm1pbnV0ZUxlZnQiLCJtaW51dGVSaWdodCIsInNlY29uZHNMZWZ0Iiwic2Vjb25kc1JpZ2h0Iiwic3RhcnRDb3VudGRvd24iLCJyZXNldENvdW50ZG93biIsImNsZWFyVGltZW91dCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJzdHlsZXMiLCJjb3VudGRvd25Db250YWluZXIiLCJjb3VudGRvd25CdXR0b24iLCJjb3VudGRvd25CdXR0b25BY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsZ0JBQUo7QUFFTyxTQUFTQyxTQUFULEdBQXFCO0FBQUE7O0FBQUEsb0JBQ0dDLHdEQUFVLENBQUNDLDZFQUFELENBRGI7QUFBQSxNQUNuQkMsaUJBRG1CLGVBQ25CQSxpQkFEbUI7O0FBQUEsa0JBR0hDLHNEQUFRLENBQUMsT0FBTyxFQUFSLENBSEw7QUFBQSxNQUdwQkMsSUFIb0I7QUFBQSxNQUdkQyxPQUhjOztBQUFBLG1CQUlLRixzREFBUSxDQUFDLEtBQUQsQ0FKYjtBQUFBLE1BSXBCRyxRQUpvQjtBQUFBLE1BSVZDLFdBSlU7O0FBQUEsbUJBS1dKLHNEQUFRLENBQUMsS0FBRCxDQUxuQjtBQUFBLE1BS3BCSyxXQUxvQjtBQUFBLE1BS1BDLGNBTE87O0FBTzNCLE1BQU1D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anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzJztcblxubGV0IGNvdW50ZG93blRpbWVPdXQ6IE5vZGVKUy5UaW1lb3V0O1xuXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duKCkge1xuXHRjb25zdCB7IHN0YXJ0TmV3Q2hhbGxlbmdlIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcblxuXHRjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgwLjA1ICogNjApO1xuXHRjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW2hhc0ZpbmlzaGVkLCBzZXRIYXNGaW5pc2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0Y29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcblx0Y29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MDtcblxuXHRjb25zdCBbbWludXRlTGVmdCwgbWludXRlUmlnaHRdID0gU3RyaW5nKG1pbnV0ZXMpXG5cdFx0LnBhZFN0YXJ0KDIsICcwJylcblx0XHQuc3BsaXQoJycpO1xuXHRjb25zdCBbc2Vjb25kc0xlZnQsIHNlY29uZHNSaWdodF0gPSBTdHJpbmcoc2Vjb25kcylcblx0XHQucGFkU3RhcnQoMiwgJzAnKVxuXHRcdC5zcGxpdCgnJyk7XG5cblx0ZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oKSB7XG5cdFx0c2V0SXNBY3RpdmUodHJ1ZSk7XG5cdH1cblxuXHRmdW5jdGlvbiByZXNldENvdW50ZG93bigpIHtcblx0XHRjbGVhclRpbWVvdXQoY291bnRkb3duVGltZU91dCk7XG5cdFx0c2V0SXNBY3RpdmUoZmFsc2UpO1xuXHRcdHNldFRpbWUoMC4wNSAqIDYwKTtcblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGlzQWN0aXZlICYmIHRpbWUgPiAwKSB7XG5cdFx0XHRjb3VudGRvd25UaW1lT3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNldFRpbWUodGltZSAtIDEpO1xuXHRcdFx0fSwgMTAwMCk7XG5cdFx0fSBlbHNlIGlmIChpc0FjdGl2ZSAmJiB0aW1lID09PSAwKSB7XG5cdFx0XHRzZXRIYXNGaW5pc2hlZCh0cnVlKTtcblx0XHRcdHNldElzQWN0aXZlKGZhbHNlKTtcblx0XHRcdHN0YXJ0TmV3Q2hhbGxlbmdlKCk7XG5cdFx0fVxuXHR9LCBbaXNBY3RpdmUsIHRpbWVdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkNvbnRhaW5lcn0+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PHNwYW4+e21pbnV0ZUxlZnR9PC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuPnttaW51dGVSaWdodH08L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3Bhbj46PC9zcGFuPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxzcGFuPntzZWNvbmRzTGVmdH08L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4+e3NlY29uZHNSaWdodH08L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdHtoYXNGaW5pc2hlZCA/IChcblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25CdXR0b259IGRpc2FibGVkPlxuXHRcdFx0XHRcdENpY2xvIGVuY2VycmFkb1xuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0e2lzQWN0aXZlID8gKFxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0gJHtzdHlsZXMuY291bnRkb3duQnV0dG9uQWN0aXZlfWB9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3Jlc2V0Q291bnRkb3dufVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRBYmFuZG9uYXIgY2ljbG9cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQnV0dG9ufVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtzdGFydENvdW50ZG93bn1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0SW5pY2lhciB1bSBjaWNsb1xuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC8+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Countdown.tsx\n");

/***/ })

})