webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n\n\nvar _jsxFileName = \"/home/viniciuschagas/Desktop/NLW4/moveit/src/contexts/ChallengesContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction ChallengesProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currrentExperience = _useState2[0],\n      setCurrrentExperience = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      challengesCompleted = _useState3[0],\n      setChallengesCompleted = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setActiveChallenge = _useState4[1];\n\n  function levelUp() {\n    setLevel(level + 1);\n  }\n\n  function startNewChallenge() {\n    var randoChallengeindex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);\n    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randoChallengeindex];\n    setActiveChallenge(challenge);\n  }\n\n  function resetChallenge() {\n    setActiveChallenge(null);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level: level,\n      levelUp: levelUp,\n      currrentExperience: currrentExperience,\n      challengesCompleted: challengesCompleted,\n      startNewChallenge: startNewChallenge,\n      activeChallenge: activeChallenge,\n      resetChallence: resetChallence\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 3\n  }, this);\n}\n\n_s(ChallengesProvider, \"Z76nM3Yan8qFvhPfTD2uKzWXEhw=\");\n\n_c = ChallengesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeD9lYjI4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwiY3VycnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycnJlbnRFeHBlcmllbmNlIiwiY2hhbGxlbmdlc0NvbXBsZXRlZCIsInNldENoYWxsZW5nZXNDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJsZXZlbFVwIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW5kb0NoYWxsZW5nZWluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsInJlc2V0Q2hhbGxlbmdlIiwicmVzZXRDaGFsbGVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBc0JBLFNBQVNDLGtCQUFULE9BQW1FO0FBQUE7O0FBQUEsTUFBckNDLFFBQXFDLFFBQXJDQSxRQUFxQzs7QUFBQSxrQkFDL0NDLHNEQUFRLENBQUMsQ0FBRCxDQUR1QztBQUFBLE1BQ2xFQyxLQURrRTtBQUFBLE1BQzNEQyxRQUQyRDs7QUFBQSxtQkFFckJGLHNEQUFRLENBQUMsQ0FBRCxDQUZhO0FBQUEsTUFFbEVHLGtCQUZrRTtBQUFBLE1BRTlDQyxxQkFGOEM7O0FBQUEsbUJBR25CSixzREFBUSxDQUFDLENBQUQsQ0FIVztBQUFBLE1BR2xFSyxtQkFIa0U7QUFBQSxNQUc3Q0Msc0JBSDZDOztBQUFBLG1CQUkzQk4sc0RBQVEsQ0FBQyxJQUFELENBSm1CO0FBQUEsTUFJbEVPLGVBSmtFO0FBQUEsTUFJakRDLGtCQUppRDs7QUFNekUsV0FBU0MsT0FBVCxHQUFtQjtBQUNsQlAsWUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFSO0FBQ0E7O0FBRUQsV0FBU1MsaUJBQVQsR0FBNkI7QUFDNUIsUUFBTUMsbUJBQW1CLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUMzQkQsSUFBSSxDQUFDRSxNQUFMLEtBQWdCQyw2Q0FBVSxDQUFDQyxNQURBLENBQTVCO0FBSUEsUUFBTUMsU0FBUyxHQUFHRiw2Q0FBVSxDQUFDSixtQkFBRCxDQUE1QjtBQUNBSCxzQkFBa0IsQ0FBQ1MsU0FBRCxDQUFsQjtBQUNBOztBQUVELFdBQVNDLGNBQVQsR0FBMEI7QUFDekJWLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDQTs7QUFFRCxzQkFDQyxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUNDLFNBQUssRUFBRTtBQUNOUCxXQUFLLEVBQUxBLEtBRE07QUFFTlEsYUFBTyxFQUFQQSxPQUZNO0FBR05OLHdCQUFrQixFQUFsQkEsa0JBSE07QUFJTkUseUJBQW1CLEVBQW5CQSxtQkFKTTtBQUtOSyx1QkFBaUIsRUFBakJBLGlCQUxNO0FBTU5ILHFCQUFlLEVBQWZBLGVBTk07QUFPTVksb0JBQWMsRUFBZEE7QUFQTixLQURSO0FBQUEsY0FXRXBCO0FBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBZUE7O0dBdENlRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbic7XG5cbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcblxuaW50ZXJmYWNlIENoYWxsZW5nZXNQcm92aWRlclByb3BzIHtcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XG5cdGxldmVsOiBudW1iZXI7XG5cdGN1cnJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xuXHRjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XG5cdGFjdGl2ZUNoYWxsZW5nZTogQ2hhbGxlbmdlO1xuXHRsZXZlbFVwOiAoKSA9PiB2b2lkO1xuXHRzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcbiAgICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XG5cdHR5cGU6ICdib2R5JyB8ICdleWUnO1xuXHRkZXNjcmlwdGlvbjogc3RyaW5nO1xuXHRhbW91bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7IGNoaWxkcmVuIH06IENoYWxsZW5nZXNQcm92aWRlclByb3BzKSB7XG5cdGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7XG5cdGNvbnN0IFtjdXJycmVudEV4cGVyaWVuY2UsIHNldEN1cnJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZSgwKTtcblx0Y29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWQsIHNldENoYWxsZW5nZXNDb21wbGV0ZWRdID0gdXNlU3RhdGUoMCk7XG5cdGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuXHRmdW5jdGlvbiBsZXZlbFVwKCkge1xuXHRcdHNldExldmVsKGxldmVsICsgMSk7XG5cdH1cblxuXHRmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpIHtcblx0XHRjb25zdCByYW5kb0NoYWxsZW5nZWluZGV4ID0gTWF0aC5mbG9vcihcblx0XHRcdE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aFxuXHRcdCk7XG5cblx0XHRjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvQ2hhbGxlbmdlaW5kZXhdO1xuXHRcdHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XG5cdFx0c2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXJcblx0XHRcdHZhbHVlPXt7XG5cdFx0XHRcdGxldmVsLFxuXHRcdFx0XHRsZXZlbFVwLFxuXHRcdFx0XHRjdXJycmVudEV4cGVyaWVuY2UsXG5cdFx0XHRcdGNoYWxsZW5nZXNDb21wbGV0ZWQsXG5cdFx0XHRcdHN0YXJ0TmV3Q2hhbGxlbmdlLFxuXHRcdFx0XHRhY3RpdmVDaGFsbGVuZ2UsXG4gICAgICAgICAgICAgICAgcmVzZXRDaGFsbGVuY2Vcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/ChallengesContext.tsx\n");

/***/ })

})