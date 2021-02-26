module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./challenges.json":
/*!*************************!*\
  !*** ./challenges.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.\\\",\\\"amount\\\":80},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.\\\",\\\"amount\\\":60},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.\\\",\\\"amount\\\":70},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.\\\",\\\"amount\\\":60},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.\\\",\\\"amount\\\":100},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.\\\",\\\"amount\\\":80},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.\\\",\\\"amount\\\":50},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.\\\",\\\"amount\\\":80},{\\\"type\\\":\\\"eye\\\",\\\"description\\\":\\\"Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.\\\",\\\"amount\\\":90},{\\\"type\\\":\\\"eye\\\",\\\"description\\\":\\\"Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.\\\",\\\"amount\\\":140},{\\\"type\\\":\\\"eye\\\",\\\"description\\\":\\\"Usando os polegares, massage a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.\\\",\\\"amount\\\":70},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.\\\",\\\"amount\\\":90}]\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NoYWxsZW5nZXMuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./challenges.json\n");

/***/ }),

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n\nvar _jsxFileName = \"/home/viniciuschagas/Desktop/NLW4/moveit/src/contexts/ChallengesContext.tsx\";\n\n\nconst ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction ChallengesProvider({\n  children\n}) {\n  const {\n    0: level,\n    1: setLevel\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1);\n  const {\n    0: currrentExperience,\n    1: setCurrrentExperience\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: challengesCompleted,\n    1: setChallengesCompleted\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: activeChallenge,\n    1: setActiveChallenge\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    Notification.requestPermission();\n  }, []);\n\n  function levelUp() {\n    setLevel(level + 1);\n  }\n\n  function startNewChallenge() {\n    const randoChallengeindex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);\n    const challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randoChallengeindex];\n    setActiveChallenge(challenge);\n    new Audio('/notification.mp3').play();\n\n    if (Notification.permission === 'granted') {\n      new Notification('Novo desafio!', {\n        body: `Valendo ${challenge.amount}xp!`\n      });\n    }\n  }\n\n  function resetChallenge() {\n    setActiveChallenge(null);\n  }\n\n  function completeChallenge() {\n    if (!activeChallenge) {\n      return;\n    }\n\n    const {\n      amount\n    } = activeChallenge;\n    let finalExperience = currrentExperience + amount;\n\n    if (finalExperience >= experienceToNextLevel) {\n      levelUp();\n      finalExperience = finalExperience - experienceToNextLevel;\n    }\n\n    setCurrrentExperience(finalExperience);\n    setActiveChallenge(null);\n    setChallengesCompleted(challengesCompleted + 1);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level,\n      levelUp,\n      currrentExperience,\n      challengesCompleted,\n      startNewChallenge,\n      activeChallenge,\n      resetChallenge,\n      experienceToNextLevel,\n      completeChallenge\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 3\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQudHN4P2ViMjgiXSwibmFtZXMiOlsiQ2hhbGxlbmdlc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2hhbGxlbmdlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJsZXZlbCIsInNldExldmVsIiwidXNlU3RhdGUiLCJjdXJycmVudEV4cGVyaWVuY2UiLCJzZXRDdXJycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJ1c2VFZmZlY3QiLCJOb3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsImxldmVsVXAiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvQ2hhbGxlbmdlaW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJBdWRpbyIsInBsYXkiLCJwZXJtaXNzaW9uIiwiYm9keSIsImFtb3VudCIsInJlc2V0Q2hhbGxlbmdlIiwiY29tcGxldGVDaGFsbGVuZ2UiLCJmaW5hbEV4cGVyaWVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLE1BQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBd0JBLFNBQVNDLGtCQUFULENBQTRCO0FBQUVDO0FBQUYsQ0FBNUIsRUFBbUU7QUFDekUsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLENBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0Msa0JBQUQ7QUFBQSxPQUFxQkM7QUFBckIsTUFBOENGLHNEQUFRLENBQUMsQ0FBRCxDQUE1RDtBQUNBLFFBQU07QUFBQSxPQUFDRyxtQkFBRDtBQUFBLE9BQXNCQztBQUF0QixNQUFnREosc0RBQVEsQ0FBQyxDQUFELENBQTlEO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NOLHNEQUFRLENBQUMsSUFBRCxDQUF0RDtBQUVBLFFBQU1PLHFCQUFxQixHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFDWCxLQUFLLEdBQUcsQ0FBVCxJQUFjLENBQXZCLEVBQTBCLENBQTFCLENBQTlCO0FBRUFZLHlEQUFTLENBQUMsTUFBTTtBQUNmQyxnQkFBWSxDQUFDQyxpQkFBYjtBQUNBLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsV0FBU0MsT0FBVCxHQUFtQjtBQUNsQmQsWUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFSO0FBQ0E7O0FBRUQsV0FBU2dCLGlCQUFULEdBQTZCO0FBQzVCLFVBQU1DLG1CQUFtQixHQUFHUCxJQUFJLENBQUNRLEtBQUwsQ0FDM0JSLElBQUksQ0FBQ1MsTUFBTCxLQUFnQkMsNkNBQVUsQ0FBQ0MsTUFEQSxDQUE1QjtBQUlBLFVBQU1DLFNBQVMsR0FBR0YsNkNBQVUsQ0FBQ0gsbUJBQUQsQ0FBNUI7QUFDQVQsc0JBQWtCLENBQUNjLFNBQUQsQ0FBbEI7QUFFQSxRQUFJQyxLQUFKLENBQVUsbUJBQVYsRUFBK0JDLElBQS9COztBQUVBLFFBQUlYLFlBQVksQ0FBQ1ksVUFBYixLQUE0QixTQUFoQyxFQUEyQztBQUMxQyxVQUFJWixZQUFKLENBQWlCLGVBQWpCLEVBQWtDO0FBQ2pDYSxZQUFJLEVBQUcsV0FBVUosU0FBUyxDQUFDSyxNQUFPO0FBREQsT0FBbEM7QUFHQTtBQUNEOztBQUVELFdBQVNDLGNBQVQsR0FBMEI7QUFDekJwQixzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0E7O0FBRUQsV0FBU3FCLGlCQUFULEdBQTZCO0FBQzVCLFFBQUksQ0FBQ3RCLGVBQUwsRUFBc0I7QUFDckI7QUFDQTs7QUFFRCxVQUFNO0FBQUVvQjtBQUFGLFFBQWFwQixlQUFuQjtBQUVBLFFBQUl1QixlQUFlLEdBQUczQixrQkFBa0IsR0FBR3dCLE1BQTNDOztBQUVBLFFBQUlHLGVBQWUsSUFBSXJCLHFCQUF2QixFQUE4QztBQUM3Q00sYUFBTztBQUNQZSxxQkFBZSxHQUFHQSxlQUFlLEdBQUdyQixxQkFBcEM7QUFDQTs7QUFFREwseUJBQXFCLENBQUMwQixlQUFELENBQXJCO0FBQ0F0QixzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0FGLDBCQUFzQixDQUFDRCxtQkFBbUIsR0FBRyxDQUF2QixDQUF0QjtBQUNBOztBQUVELHNCQUNDLHFFQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQ0MsU0FBSyxFQUFFO0FBQ05MLFdBRE07QUFFTmUsYUFGTTtBQUdOWix3QkFITTtBQUlORSx5QkFKTTtBQUtOVyx1QkFMTTtBQU1OVCxxQkFOTTtBQU9OcUIsb0JBUE07QUFRTm5CLDJCQVJNO0FBU05vQjtBQVRNLEtBRFI7QUFBQSxjQWFFOUI7QUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFpQkEiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlcy5qc29uJztcblxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMge1xuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcblx0bGV2ZWw6IG51bWJlcjtcblx0Y3VycnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XG5cdGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcblx0ZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XG5cdGFjdGl2ZUNoYWxsZW5nZTogQ2hhbGxlbmdlO1xuXHRsZXZlbFVwOiAoKSA9PiB2b2lkO1xuXHRzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcblx0cmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG5cdGNvbXBsZXRlQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlIHtcblx0dHlwZTogJ2JvZHknIHwgJ2V5ZSc7XG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cdGFtb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHsgY2hpbGRyZW4gfTogQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpIHtcblx0Y29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZSgxKTtcblx0Y29uc3QgW2N1cnJyZW50RXhwZXJpZW5jZSwgc2V0Q3VycnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKDApO1xuXHRjb25zdCBbY2hhbGxlbmdlc0NvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZF0gPSB1c2VTdGF0ZSgwKTtcblx0Y29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG5cdGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMik7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHROb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcblx0fSwgW10pO1xuXG5cdGZ1bmN0aW9uIGxldmVsVXAoKSB7XG5cdFx0c2V0TGV2ZWwobGV2ZWwgKyAxKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCkge1xuXHRcdGNvbnN0IHJhbmRvQ2hhbGxlbmdlaW5kZXggPSBNYXRoLmZsb29yKFxuXHRcdFx0TWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoXG5cdFx0KTtcblxuXHRcdGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9DaGFsbGVuZ2VpbmRleF07XG5cdFx0c2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSk7XG5cblx0XHRuZXcgQXVkaW8oJy9ub3RpZmljYXRpb24ubXAzJykucGxheSgpO1xuXG5cdFx0aWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcblx0XHRcdG5ldyBOb3RpZmljYXRpb24oJ05vdm8gZGVzYWZpbyEnLCB7XG5cdFx0XHRcdGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxlbmdlLmFtb3VudH14cCFgLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XG5cdFx0c2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xuXHR9XG5cblx0ZnVuY3Rpb24gY29tcGxldGVDaGFsbGVuZ2UoKSB7XG5cdFx0aWYgKCFhY3RpdmVDaGFsbGVuZ2UpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xuXG5cdFx0bGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJyZW50RXhwZXJpZW5jZSArIGFtb3VudDtcblxuXHRcdGlmIChmaW5hbEV4cGVyaWVuY2UgPj0gZXhwZXJpZW5jZVRvTmV4dExldmVsKSB7XG5cdFx0XHRsZXZlbFVwKCk7XG5cdFx0XHRmaW5hbEV4cGVyaWVuY2UgPSBmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWw7XG5cdFx0fVxuXG5cdFx0c2V0Q3VycnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XG5cdFx0c2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xuXHRcdHNldENoYWxsZW5nZXNDb21wbGV0ZWQoY2hhbGxlbmdlc0NvbXBsZXRlZCArIDEpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXJcblx0XHRcdHZhbHVlPXt7XG5cdFx0XHRcdGxldmVsLFxuXHRcdFx0XHRsZXZlbFVwLFxuXHRcdFx0XHRjdXJycmVudEV4cGVyaWVuY2UsXG5cdFx0XHRcdGNoYWxsZW5nZXNDb21wbGV0ZWQsXG5cdFx0XHRcdHN0YXJ0TmV3Q2hhbGxlbmdlLFxuXHRcdFx0XHRhY3RpdmVDaGFsbGVuZ2UsXG5cdFx0XHRcdHJlc2V0Q2hhbGxlbmdlLFxuXHRcdFx0XHRleHBlcmllbmNlVG9OZXh0TGV2ZWwsXG5cdFx0XHRcdGNvbXBsZXRlQ2hhbGxlbmdlLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/ChallengesContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ \"./src/contexts/ChallengesContext.tsx\");\n\nvar _jsxFileName = \"/home/viniciuschagas/Desktop/NLW4/moveit/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__[\"ChallengesProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDeEMsc0JBQ0MscUVBQUMsOEVBQUQ7QUFBQSwyQkFDQyxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFLQTs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJztcblxuaW1wb3J0IHsgQ2hhbGxlbmdlc1Byb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8Q2hhbGxlbmdlc1Byb3ZpZGVyPlxuXHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXHRcdDwvQ2hhbGxlbmdlc1Byb3ZpZGVyPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/global.css\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });