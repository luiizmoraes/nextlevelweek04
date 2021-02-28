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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./challenges.json":
/*!*************************!*\
  !*** ./challenges.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"type\":\"body\",\"description\":\"Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.\",\"amount\":100},{\"type\":\"body\",\"description\":\"Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.\",\"amount\":50},{\"type\":\"body\",\"description\":\"Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.\",\"amount\":80},{\"type\":\"eye\",\"description\":\"Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.\",\"amount\":90},{\"type\":\"eye\",\"description\":\"Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.\",\"amount\":140},{\"type\":\"eye\",\"description\":\"Usando os polegares, massage a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.\",\"amount\":90}]");

/***/ }),

/***/ "./src/components/ChallengeBox.tsx":
/*!*****************************************!*\
  !*** ./src/components/ChallengeBox.tsx ***!
  \*****************************************/
/*! exports provided: ChallengeBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeBox", function() { return ChallengeBox; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/ChallengeBox.module.css */ "./src/styles/components/ChallengeBox.module.css");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\NLW04\\Projeto01\\moveit-next\\src\\components\\ChallengeBox.tsx";




function ChallengeBox() {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    resetCountdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__["CountdownContext"]);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeBoxContainer,
    children: activeChallenge ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: ["Ganhe ", activeChallenge.amount, " xp"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 26
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: `icons/${activeChallenge.type}.svg`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 31
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Novo desafio:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 31
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: activeChallenge.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 31
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 26
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeFailedButton,
          onClick: handleChallengeFailed,
          children: "Falhei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 31
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeSucceededButton,
          onClick: handleChallengeSucceeded,
          children: "Completei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 31
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 26
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeNotActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Finalize um ciclo para receber um novo desafio."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 31
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/level-up.svg",
          alt: "Level Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 36
        }, this), "Avance os n\xEDveis completando os desafios!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 31
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 26
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 11
  }, this);
}

/***/ }),

/***/ "./src/components/CompletedChallenges.tsx":
/*!************************************************!*\
  !*** ./src/components/CompletedChallenges.tsx ***!
  \************************************************/
/*! exports provided: CompletedChallenges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedChallenges", function() { return CompletedChallenges; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/CompletedChallenges.module.css */ "./src/styles/components/CompletedChallenges.module.css");
/* harmony import */ var _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\NLW04\\Projeto01\\moveit-next\\src\\components\\CompletedChallenges.tsx";



function CompletedChallenges() {
  const {
    challengesCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_CompletedChallenges_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.completedChallengesContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "Desafios completos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 16
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: challengesCompleted
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 16
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 11
  }, this);
}

/***/ }),

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ "./src/styles/components/Countdown.module.css");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\NLW04\\Projeto01\\moveit-next\\src\\components\\Countdown.tsx";
 // import { ChallengesContext } from '../contexts/ChallengesContext';



function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_2__["CountdownContext"]);
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 26
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 26
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 26
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 26
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 16
    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      disabled: true,
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton,
      children: "Ciclo encerrado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: `${_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton} ${_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButtonActive}`,
        onClick: resetCountdown,
        children: "Parar ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 36
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton,
        onClick: startCountdown,
        children: "Iniciar ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 41
      }, this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 11
  }, this);
}

/***/ }),

/***/ "./src/components/ExperienceBar.tsx":
/*!******************************************!*\
  !*** ./src/components/ExperienceBar.tsx ***!
  \******************************************/
/*! exports provided: ExperienceBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceBar", function() { return ExperienceBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ExperienceBar.module.css */ "./src/styles/components/ExperienceBar.module.css");
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\NLW04\\Projeto01\\moveit-next\\src\\components\\ExperienceBar.tsx";



function ExperienceBar() {
  const {
    currentExperience,
    experienceToNextLevel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.experienceBar,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "0 xp"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 16
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: `${percentToNextLevel}%`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.currentExperience,
        style: {
          left: `${percentToNextLevel}%`
        },
        children: [currentExperience, " xp"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 16
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [experienceToNextLevel, " xp"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 16
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 11
  }, this);
}

/***/ }),

/***/ "./src/components/LevelUpModal.tsx":
/*!*****************************************!*\
  !*** ./src/components/LevelUpModal.tsx ***!
  \*****************************************/
/*! exports provided: LevelUpModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelUpModal", function() { return LevelUpModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/LevelUpModal.module.css */ "./src/styles/components/LevelUpModal.module.css");
/* harmony import */ var _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\NLW04\\Projeto01\\moveit-next\\src\\components\\LevelUpModal.tsx";



function LevelUpModal() {
  const {
    level,
    closeLevelUpModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.overlay,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: level
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Parab\xE9ns!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Voc\xEA alcan\xE7ou um novo n\xEDvel."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: closeLevelUpModal,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/icons/close.svg  ",
          alt: "Fechar modal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 26
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 16
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 11
  }, this);
}

/***/ }),

/***/ "./src/components/Profile.tsx":
/*!************************************!*\
  !*** ./src/components/Profile.tsx ***!
  \************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Profile.module.css */ "./src/styles/components/Profile.module.css");
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\NLW04\\Projeto01\\moveit-next\\src\\components\\Profile.tsx";



function Profile() {
  const {
    level
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.profileContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "https://github.com/luiizmoraes.png",
      alt: "Foto de perfil. Luiz Moraes"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 16
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Luiz Ot\xE1vio de Moraes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/level.svg",
          alt: "Level"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 26
        }, this), "Level ", level]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 16
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 11
  }, this);
}

/***/ }),

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);
/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LevelUpModal */ "./src/components/LevelUpModal.tsx");

var _jsxFileName = "C:\\NLW04\\Projeto01\\moveit-next\\src\\contexts\\ChallengesContext.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengesProvider(_ref) {
  var _rest$level, _rest$currentExperien, _rest$challengesCompl;

  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  const {
    0: level,
    1: setLevel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1);
  const {
    0: currentExperience,
    1: setCurrentExperience
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0);
  const {
    0: challengesCompleted,
    1: setChallengesCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$challengesCompl = rest.challengesCompleted) !== null && _rest$challengesCompl !== void 0 ? _rest$challengesCompl : 0);
  const {
    0: activeChallenge,
    1: setActiveChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: isLevelUpModalOpen,
    1: setIsLevelUpModalOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Notification.requestPermission();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('level', String(level));
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('currentExperience', String(currentExperience));
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_3__.length);
    const challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_3__[randomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🚀', {
        body: `Valendo ${challenge.amount} xp!`
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const {
      amount
    } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      level,
      currentExperience,
      challengesCompleted,
      levelUp,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      experienceToNextLevel,
      completeChallenge,
      closeLevelUpModal
    },
    children: [children, isLevelUpModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__["LevelUpModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 40
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 11
  }, this);
}

/***/ }),

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownContext", function() { return CountdownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownProvider", function() { return CountdownProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengesContext */ "./src/contexts/ChallengesContext.tsx");

var _jsxFileName = "C:\\NLW04\\Projeto01\\moveit-next\\src\\contexts\\CountdownContext.tsx";


const CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
let countdownTimeout;
function CountdownProvider({
  children
}) {
  const {
    startNewChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    0: time,
    1: setTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0.1 * 60);
  const {
    0: isActive,
    1: setIsActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: hasFinished,
    1: setHasFinished
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
    setHasFinished(false);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CountdownContext.Provider, {
    value: {
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 11
  }, this);
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CompletedChallenges */ "./src/components/CompletedChallenges.tsx");
/* harmony import */ var _components_Countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Countdown */ "./src/components/Countdown.tsx");
/* harmony import */ var _components_ExperienceBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ExperienceBar */ "./src/components/ExperienceBar.tsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Profile */ "./src/components/Profile.tsx");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ "./src/styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ChallengeBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ChallengeBox */ "./src/components/ChallengeBox.tsx");
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contexts/ChallengesContext */ "./src/contexts/ChallengesContext.tsx");

var _jsxFileName = "C:\\NLW04\\Projeto01\\moveit-next\\src\\pages\\index.tsx";









function Home(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_9__["ChallengesProvider"], {
    level: props.level,
    currentExperience: props.challengesCompleted,
    challengesCompleted: props.challengesCompleted,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "In\xEDcio | move.it"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ExperienceBar__WEBPACK_IMPORTED_MODULE_3__["ExperienceBar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_8__["CountdownProvider"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Profile__WEBPACK_IMPORTED_MODULE_4__["Profile"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_1__["CompletedChallenges"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Countdown__WEBPACK_IMPORTED_MODULE_2__["Countdown"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ChallengeBox__WEBPACK_IMPORTED_MODULE_7__["ChallengeBox"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
const getServerSideProps = async ctx => {
  const {
    level,
    currentExperience,
    challengesCompleted
  } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  };
};

/***/ }),

/***/ "./src/styles/components/ChallengeBox.module.css":
/*!*******************************************************!*\
  !*** ./src/styles/components/ChallengeBox.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"challengeBoxContainer": "ChallengeBox_challengeBoxContainer__53AkF",
	"challengeNotActive": "ChallengeBox_challengeNotActive__35ixK",
	"challengeActive": "ChallengeBox_challengeActive__3mO_D",
	"challengeFailedButton": "ChallengeBox_challengeFailedButton__u8aFS",
	"challengeSucceededButton": "ChallengeBox_challengeSucceededButton__18bu2"
};


/***/ }),

/***/ "./src/styles/components/CompletedChallenges.module.css":
/*!**************************************************************!*\
  !*** ./src/styles/components/CompletedChallenges.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"completedChallengesContainer": "CompletedChallenges_completedChallengesContainer__T9k4b"
};


/***/ }),

/***/ "./src/styles/components/Countdown.module.css":
/*!****************************************************!*\
  !*** ./src/styles/components/Countdown.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"countdownContainer": "Countdown_countdownContainer__3pqLs",
	"countdownButton": "Countdown_countdownButton__2cSHU",
	"countdownButtonActive": "Countdown_countdownButtonActive__37GOc"
};


/***/ }),

/***/ "./src/styles/components/ExperienceBar.module.css":
/*!********************************************************!*\
  !*** ./src/styles/components/ExperienceBar.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"experienceBar": "ExperienceBar_experienceBar__2JbAX",
	"currentExperience": "ExperienceBar_currentExperience__2XATR"
};


/***/ }),

/***/ "./src/styles/components/LevelUpModal.module.css":
/*!*******************************************************!*\
  !*** ./src/styles/components/LevelUpModal.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"overlay": "LevelUpModal_overlay__1huQl",
	"container": "LevelUpModal_container__1dM18"
};


/***/ }),

/***/ "./src/styles/components/Profile.module.css":
/*!**************************************************!*\
  !*** ./src/styles/components/Profile.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"profileContainer": "Profile_profileContainer__3iYlY"
};


/***/ }),

/***/ "./src/styles/pages/Home.module.css":
/*!******************************************!*\
  !*** ./src/styles/pages/Home.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__HbJEc"
};


/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xldmVsVXBNb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvQ291bnRkb3duQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvbXBsZXRlZENoYWxsZW5nZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL1Byb2ZpbGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNoYWxsZW5nZUJveCIsImFjdGl2ZUNoYWxsZW5nZSIsInJlc2V0Q2hhbGxlbmdlIiwiY29tcGxldGVDaGFsbGVuZ2UiLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJyZXNldENvdW50ZG93biIsIkNvdW50ZG93bkNvbnRleHQiLCJoYW5kbGVDaGFsbGVuZ2VTdWNjZWVkZWQiLCJoYW5kbGVDaGFsbGVuZ2VGYWlsZWQiLCJzdHlsZXMiLCJjaGFsbGVuZ2VCb3hDb250YWluZXIiLCJjaGFsbGVuZ2VBY3RpdmUiLCJhbW91bnQiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjaGFsbGVuZ2VGYWlsZWRCdXR0b24iLCJjaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b24iLCJjaGFsbGVuZ2VOb3RBY3RpdmUiLCJDb21wbGV0ZWRDaGFsbGVuZ2VzIiwiY2hhbGxlbmdlc0NvbXBsZXRlZCIsImNvbXBsZXRlZENoYWxsZW5nZXNDb250YWluZXIiLCJDb3VudGRvd24iLCJtaW51dGVzIiwic2Vjb25kcyIsImhhc0ZpbmlzaGVkIiwiaXNBY3RpdmUiLCJzdGFydENvdW50ZG93biIsIm1pbnV0ZUxlZnQiLCJtaW51dGVSaWdodCIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJzZWNvbmRMZWZ0Iiwic2Vjb25kUmlnaHQiLCJjb3VudGRvd25Db250YWluZXIiLCJjb3VudGRvd25CdXR0b24iLCJjb3VudGRvd25CdXR0b25BY3RpdmUiLCJFeHBlcmllbmNlQmFyIiwiY3VycmVudEV4cGVyaWVuY2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJwZXJjZW50VG9OZXh0TGV2ZWwiLCJNYXRoIiwicm91bmQiLCJleHBlcmllbmNlQmFyIiwid2lkdGgiLCJsZWZ0IiwiTGV2ZWxVcE1vZGFsIiwibGV2ZWwiLCJjbG9zZUxldmVsVXBNb2RhbCIsIm92ZXJsYXkiLCJjb250YWluZXIiLCJQcm9maWxlIiwicHJvZmlsZUNvbnRhaW5lciIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJzZXRMZXZlbCIsInVzZVN0YXRlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJzZXRDaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwiaXNMZXZlbFVwTW9kYWxPcGVuIiwic2V0SXNMZXZlbFVwTW9kYWxPcGVuIiwicG93IiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJDb29raWVzIiwic2V0IiwibGV2ZWxVcCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJBdWRpbyIsInBsYXkiLCJwZXJtaXNzaW9uIiwiYm9keSIsImZpbmFsRXhwZXJpZW5jZSIsImNvdW50ZG93blRpbWVvdXQiLCJDb3VudGRvd25Qcm92aWRlciIsInRpbWUiLCJzZXRUaW1lIiwic2V0SXNBY3RpdmUiLCJzZXRIYXNGaW5pc2hlZCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJIb21lIiwicHJvcHMiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjdHgiLCJyZXEiLCJjb29raWVzIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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Ozs7Ozs7Ozs7OztBQ0hBLHNDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCc7XHJcbmltcG9ydCB7IENvdW50ZG93bkNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9Db3VudGRvd25Db250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9DaGFsbGVuZ2VCb3gubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlQm94KCkge1xyXG5cclxuICAgICBjb25zdCB7IGFjdGl2ZUNoYWxsZW5nZSwgcmVzZXRDaGFsbGVuZ2UsIGNvbXBsZXRlQ2hhbGxlbmdlIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcclxuXHJcbiAgICAgY29uc3QgeyByZXNldENvdW50ZG93biB9ID0gdXNlQ29udGV4dChDb3VudGRvd25Db250ZXh0KTtcclxuXHJcbiAgICAgZnVuY3Rpb24gaGFuZGxlQ2hhbGxlbmdlU3VjY2VlZGVkKCkge1xyXG4gICAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UoKTtcclxuICAgICAgICAgIHJlc2V0Q291bnRkb3duKCk7XHJcbiAgICAgfVxyXG5cclxuICAgICBmdW5jdGlvbiBoYW5kbGVDaGFsbGVuZ2VGYWlsZWQoKSB7XHJcbiAgICAgICAgICByZXNldENoYWxsZW5nZSgpO1xyXG4gICAgICAgICAgcmVzZXRDb3VudGRvd24oKTtcclxuICAgICB9XHJcblxyXG4gICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUJveENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgIHsgYWN0aXZlQ2hhbGxlbmdlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlQWN0aXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+R2FuaGUge2FjdGl2ZUNoYWxsZW5nZS5hbW91bnR9IHhwPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaWNvbnMvJHthY3RpdmVDaGFsbGVuZ2UudHlwZX0uc3ZnYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ob3ZvIGRlc2FmaW86PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnthY3RpdmVDaGFsbGVuZ2UuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUZhaWxlZEJ1dHRvbn0gb25DbGljaz17aGFuZGxlQ2hhbGxlbmdlRmFpbGVkfT5GYWxoZWk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlU3VjY2VlZGVkQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVDaGFsbGVuZ2VTdWNjZWVkZWR9PkNvbXBsZXRlaTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZU5vdEFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RmluYWxpemUgdW0gY2ljbG8gcGFyYSByZWNlYmVyIHVtIG5vdm8gZGVzYWZpby48L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpY29ucy9sZXZlbC11cC5zdmdcIiBhbHQ9XCJMZXZlbCBVcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBBdmFuY2Ugb3MgbsOtdmVpcyBjb21wbGV0YW5kbyBvcyBkZXNhZmlvcyFcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2ID5cclxuICAgICApXHJcbn0iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ2VzLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbXBsZXRlZENoYWxsZW5nZXMoKSB7XHJcblxyXG4gICAgIGNvbnN0IHsgY2hhbGxlbmdlc0NvbXBsZXRlZCB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcblxyXG4gICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBsZXRlZENoYWxsZW5nZXNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5EZXNhZmlvcyBjb21wbGV0b3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPntjaGFsbGVuZ2VzQ29tcGxldGVkfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0JztcclxuaW1wb3J0IHsgQ291bnRkb3duQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd24oKSB7XHJcblxyXG4gICAgIGNvbnN0IHtcclxuICAgICAgICAgIG1pbnV0ZXMsXHJcbiAgICAgICAgICBzZWNvbmRzLFxyXG4gICAgICAgICAgaGFzRmluaXNoZWQsXHJcbiAgICAgICAgICBpc0FjdGl2ZSxcclxuICAgICAgICAgIHN0YXJ0Q291bnRkb3duLFxyXG4gICAgICAgICAgcmVzZXRDb3VudGRvd25cclxuICAgICB9ID0gdXNlQ29udGV4dChDb3VudGRvd25Db250ZXh0KTtcclxuXHJcbiAgICAgY29uc3QgW21pbnV0ZUxlZnQsIG1pbnV0ZVJpZ2h0XSA9IFN0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKTtcclxuICAgICBjb25zdCBbc2Vjb25kTGVmdCwgc2Vjb25kUmlnaHRdID0gU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpO1xyXG5cclxuXHJcbiAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZUxlZnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZVJpZ2h0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj46PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kTGVmdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kUmlnaHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgIHtoYXNGaW5pc2hlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0+Q2ljbG8gZW5jZXJyYWRvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNBY3RpdmUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY291bnRkb3duQnV0dG9ufSAke3N0eWxlcy5jb3VudGRvd25CdXR0b25BY3RpdmV9YH0gb25DbGljaz17cmVzZXRDb3VudGRvd259PlBhcmFyIGNpY2xvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25CdXR0b259IG9uQ2xpY2s9e3N0YXJ0Q291bnRkb3dufT5JbmljaWFyIGNpY2xvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG5cclxuICAgICAgICAgIDwvZGl2ID5cclxuICAgICApO1xyXG59IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvRXhwZXJpZW5jZUJhci5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFeHBlcmllbmNlQmFyKCkge1xyXG5cclxuICAgICBjb25zdCB7IGN1cnJlbnRFeHBlcmllbmNlLCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xyXG5cclxuICAgICBjb25zdCBwZXJjZW50VG9OZXh0TGV2ZWwgPSBNYXRoLnJvdW5kKChjdXJyZW50RXhwZXJpZW5jZSAqIDEwMCkpIC8gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xyXG5cclxuICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5leHBlcmllbmNlQmFyfT5cclxuICAgICAgICAgICAgICAgPHNwYW4+MCB4cDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBgJHtwZXJjZW50VG9OZXh0TGV2ZWx9JWAgfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudEV4cGVyaWVuY2V9IHN0eWxlPXt7IGxlZnQ6IGAke3BlcmNlbnRUb05leHRMZXZlbH0lYCB9fT57Y3VycmVudEV4cGVyaWVuY2V9IHhwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPHNwYW4+e2V4cGVyaWVuY2VUb05leHRMZXZlbH0geHA8L3NwYW4+XHJcbiAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICApO1xyXG59IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExldmVsVXBNb2RhbCgpIHtcclxuXHJcbiAgICAgY29uc3QgeyBsZXZlbCwgY2xvc2VMZXZlbFVwTW9kYWwgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xyXG5cclxuICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5fT5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+e2xldmVsfTwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UGFyYWLDqW5zITwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlZvY8OqIGFsY2Fuw6dvdSB1bSBub3ZvIG7DrXZlbC48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2Nsb3NlTGV2ZWxVcE1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL2Nsb3NlLnN2ZyAgXCIgYWx0PVwiRmVjaGFyIG1vZGFsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICApXHJcbn0iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Qcm9maWxlLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XHJcblxyXG4gICAgIGNvbnN0IHsgbGV2ZWwgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xyXG5cclxuICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vbHVpaXptb3JhZXMucG5nXCIgYWx0PVwiRm90byBkZSBwZXJmaWwuIEx1aXogTW9yYWVzXCIgLz5cclxuICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkx1aXogT3TDoXZpbyBkZSBNb3JhZXM8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaWNvbnMvbGV2ZWwuc3ZnXCIgYWx0PVwiTGV2ZWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgTGV2ZWwge2xldmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICApXHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbic7XHJcbmltcG9ydCB7IExldmVsVXBNb2RhbCB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsJztcclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2Uge1xyXG4gICAgIHR5cGU6ICdib2R5JyB8ICdleWUnO1xyXG4gICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgYW1vdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGEge1xyXG4gICAgIGxldmVsOiBudW1iZXI7XHJcbiAgICAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XHJcbiAgICAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7XHJcbiAgICAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcclxuICAgICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgICBjb21wbGV0ZUNoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgICBjbG9zZUxldmVsVXBNb2RhbDogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNQcm92aWRlclByb3BzIHtcclxuICAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG4gICAgIGxldmVsOiBudW1iZXI7XHJcbiAgICAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIoeyBjaGlsZHJlbiwgLi4ucmVzdCB9OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcykge1xyXG5cclxuICAgICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKHJlc3QubGV2ZWwgPz8gMSk7XHJcbiAgICAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZShyZXN0LmN1cnJlbnRFeHBlcmllbmNlID8/IDApO1xyXG4gICAgIGNvbnN0IFtjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKHJlc3QuY2hhbGxlbmdlc0NvbXBsZXRlZCA/PyAwKTtcclxuXHJcbiAgICAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgIGNvbnN0IFtpc0xldmVsVXBNb2RhbE9wZW4sIHNldElzTGV2ZWxVcE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMik7XHJcblxyXG4gICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcclxuICAgICB9LCBbXSlcclxuXHJcbiAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgIENvb2tpZXMuc2V0KCdsZXZlbCcsIFN0cmluZyhsZXZlbCkpO1xyXG4gICAgICAgICAgQ29va2llcy5zZXQoJ2N1cnJlbnRFeHBlcmllbmNlJywgU3RyaW5nKGN1cnJlbnRFeHBlcmllbmNlKSk7XHJcbiAgICAgICAgICBDb29raWVzLnNldCgnY2hhbGxlbmdlc0NvbXBsZXRlZCcsIFN0cmluZyhjaGFsbGVuZ2VzQ29tcGxldGVkKSk7XHJcbiAgICAgfSwgW2xldmVsLCBjdXJyZW50RXhwZXJpZW5jZSwgY2hhbGxlbmdlc0NvbXBsZXRlZF0pO1xyXG5cclxuICAgICBmdW5jdGlvbiBsZXZlbFVwKCkge1xyXG4gICAgICAgICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcclxuICAgICAgICAgIHNldElzTGV2ZWxVcE1vZGFsT3Blbih0cnVlKTtcclxuICAgICB9XHJcblxyXG4gICAgIGZ1bmN0aW9uIGNsb3NlTGV2ZWxVcE1vZGFsKCkge1xyXG4gICAgICAgICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgICB9XHJcblxyXG4gICAgIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCkge1xyXG4gICAgICAgICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aCk7XHJcbiAgICAgICAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcclxuXHJcblxyXG5cclxuICAgICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpO1xyXG5cclxuICAgICAgICAgIG5ldyBBdWRpbygnL25vdGlmaWNhdGlvbi5tcDMnKS5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcclxuICAgICAgICAgICAgICAgbmV3IE5vdGlmaWNhdGlvbignTm92byBkZXNhZmlvIPCfmoAnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogYFZhbGVuZG8gJHtjaGFsbGVuZ2UuYW1vdW50fSB4cCFgXHJcbiAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgIH1cclxuXHJcbiAgICAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XHJcbiAgICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICAgfVxyXG5cclxuICAgICBmdW5jdGlvbiBjb21wbGV0ZUNoYWxsZW5nZSgpIHtcclxuICAgICAgICAgIGlmICghYWN0aXZlQ2hhbGxlbmdlKSB7XHJcbiAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xyXG5cclxuICAgICAgICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZSArIGFtb3VudDtcclxuXHJcbiAgICAgICAgICBpZiAoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCkge1xyXG4gICAgICAgICAgICAgICBmaW5hbEV4cGVyaWVuY2UgPSBmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWw7XHJcbiAgICAgICAgICAgICAgIGxldmVsVXAoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xyXG4gICAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgICAgICAgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZChjaGFsbGVuZ2VzQ29tcGxldGVkICsgMSk7XHJcblxyXG4gICAgIH1cclxuXHJcblxyXG4gICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsVXAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0Q2hhbGxlbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSxcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZUxldmVsVXBNb2RhbFxyXG4gICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgICAgICAgICAgICB7IGlzTGV2ZWxVcE1vZGFsT3BlbiAmJiA8TGV2ZWxVcE1vZGFsIC8+fVxyXG5cclxuICAgICAgICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgKTtcclxufSIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gXCIuL0NoYWxsZW5nZXNDb250ZXh0XCI7XHJcblxyXG5pbnRlcmZhY2UgQ291bnRkb3duQ29udGV4dERhdGEge1xyXG4gICAgIG1pbnV0ZXM6IG51bWJlcixcclxuICAgICBzZWNvbmRzOiBudW1iZXIsXHJcbiAgICAgaGFzRmluaXNoZWQ6IGJvb2xlYW4sXHJcbiAgICAgaXNBY3RpdmU6IGJvb2xlYW4sXHJcbiAgICAgc3RhcnRDb3VudGRvd246ICgpID0+IHZvaWQsXHJcbiAgICAgcmVzZXRDb3VudGRvd246ICgpID0+IHZvaWRcclxufVxyXG5cclxuaW50ZXJmYWNlIENvdW50ZG93blByb3ZpZGVyUHJvcHMge1xyXG4gICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb3VudGRvd25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb3VudGRvd25Db250ZXh0RGF0YSk7XHJcblxyXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcblxyXG4gICAgIGNvbnN0IHsgc3RhcnROZXdDaGFsbGVuZ2UgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xyXG5cclxuICAgICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgwLjEgKiA2MCk7XHJcbiAgICAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgY29uc3QgW2hhc0ZpbmlzaGVkLCBzZXRIYXNGaW5pc2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XHJcbiAgICAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MDtcclxuXHJcbiAgICAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oKSB7XHJcbiAgICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcclxuICAgICB9XHJcblxyXG4gICAgIGZ1bmN0aW9uIHJlc2V0Q291bnRkb3duKCkge1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGNvdW50ZG93blRpbWVvdXQpO1xyXG4gICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgc2V0VGltZSgwLjEgKiA2MCk7XHJcbiAgICAgICAgICBzZXRIYXNGaW5pc2hlZChmYWxzZSk7XHJcbiAgICAgfVxyXG5cclxuICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGlzQWN0aXZlICYmIHRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgIGNvdW50ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lKHRpbWUgLSAxKTtcclxuICAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNBY3RpdmUgJiYgdGltZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICBzZXRIYXNGaW5pc2hlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgIH0sIFtpc0FjdGl2ZSwgdGltZV0pO1xyXG5cclxuICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPENvdW50ZG93bkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbWludXRlcywgc2Vjb25kcywgaGFzRmluaXNoZWQsIGlzQWN0aXZlLCBzdGFydENvdW50ZG93biwgcmVzZXRDb3VudGRvd24gfX0+XHJcbiAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvQ291bnRkb3duQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICApXHJcbn0iLCJpbXBvcnQgeyBDb21wbGV0ZWRDaGFsbGVuZ2VzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ2VzJztcbmltcG9ydCB7IENvdW50ZG93biB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ291bnRkb3duJztcbmltcG9ydCB7IEV4cGVyaWVuY2VCYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXInO1xuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZmlsZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IENoYWxsZW5nZUJveCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94JztcbmltcG9ydCB7IENvdW50ZG93blByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvQ291bnRkb3duQ29udGV4dCc7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IENoYWxsZW5nZXNQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0JztcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIGxldmVsOiBudW1iZXI7XG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XG4gIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wczogSG9tZVByb3BzKSB7XG5cbiAgcmV0dXJuIChcblxuICAgIDxDaGFsbGVuZ2VzUHJvdmlkZXIgbGV2ZWw9e3Byb3BzLmxldmVsfSBjdXJyZW50RXhwZXJpZW5jZT17cHJvcHMuY2hhbGxlbmdlc0NvbXBsZXRlZH0gY2hhbGxlbmdlc0NvbXBsZXRlZD17cHJvcHMuY2hhbGxlbmdlc0NvbXBsZXRlZH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkluw61jaW8gfCBtb3ZlLml0PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxFeHBlcmllbmNlQmFyIC8+XG5cbiAgICAgICAgPENvdW50ZG93blByb3ZpZGVyPlxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPFByb2ZpbGUgLz5cbiAgICAgICAgICAgICAgPENvbXBsZXRlZENoYWxsZW5nZXMgLz5cbiAgICAgICAgICAgICAgPENvdW50ZG93biAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxDaGFsbGVuZ2VCb3ggLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9Db3VudGRvd25Qcm92aWRlcj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9DaGFsbGVuZ2VzUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuXG4gIGNvbnN0IHsgbGV2ZWwsIGN1cnJlbnRFeHBlcmllbmNlLCBjaGFsbGVuZ2VzQ29tcGxldGVkIH0gPSBjdHgucmVxLmNvb2tpZXM7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbGV2ZWw6IE51bWJlcihsZXZlbCksXG4gICAgICBjdXJyZW50RXhwZXJpZW5jZTogTnVtYmVyKGN1cnJlbnRFeHBlcmllbmNlKSxcbiAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IE51bWJlcihjaGFsbGVuZ2VzQ29tcGxldGVkKVxuICAgIH1cbiAgfVxufVxuXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjaGFsbGVuZ2VCb3hDb250YWluZXJcIjogXCJDaGFsbGVuZ2VCb3hfY2hhbGxlbmdlQm94Q29udGFpbmVyX181M0FrRlwiLFxuXHRcImNoYWxsZW5nZU5vdEFjdGl2ZVwiOiBcIkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VOb3RBY3RpdmVfXzM1aXhLXCIsXG5cdFwiY2hhbGxlbmdlQWN0aXZlXCI6IFwiQ2hhbGxlbmdlQm94X2NoYWxsZW5nZUFjdGl2ZV9fM21PX0RcIixcblx0XCJjaGFsbGVuZ2VGYWlsZWRCdXR0b25cIjogXCJDaGFsbGVuZ2VCb3hfY2hhbGxlbmdlRmFpbGVkQnV0dG9uX191OGFGU1wiLFxuXHRcImNoYWxsZW5nZVN1Y2NlZWRlZEJ1dHRvblwiOiBcIkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b25fXzE4YnUyXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb21wbGV0ZWRDaGFsbGVuZ2VzQ29udGFpbmVyXCI6IFwiQ29tcGxldGVkQ2hhbGxlbmdlc19jb21wbGV0ZWRDaGFsbGVuZ2VzQ29udGFpbmVyX19UOWs0YlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY291bnRkb3duQ29udGFpbmVyXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHNcIixcblx0XCJjb3VudGRvd25CdXR0b25cIjogXCJDb3VudGRvd25fY291bnRkb3duQnV0dG9uX18yY1NIVVwiLFxuXHRcImNvdW50ZG93bkJ1dHRvbkFjdGl2ZVwiOiBcIkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25BY3RpdmVfXzM3R09jXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJleHBlcmllbmNlQmFyXCI6IFwiRXhwZXJpZW5jZUJhcl9leHBlcmllbmNlQmFyX18ySmJBWFwiLFxuXHRcImN1cnJlbnRFeHBlcmllbmNlXCI6IFwiRXhwZXJpZW5jZUJhcl9jdXJyZW50RXhwZXJpZW5jZV9fMlhBVFJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm92ZXJsYXlcIjogXCJMZXZlbFVwTW9kYWxfb3ZlcmxheV9fMWh1UWxcIixcblx0XCJjb250YWluZXJcIjogXCJMZXZlbFVwTW9kYWxfY29udGFpbmVyX18xZE0xOFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicHJvZmlsZUNvbnRhaW5lclwiOiBcIlByb2ZpbGVfcHJvZmlsZUNvbnRhaW5lcl9fM2lZbFlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19IYkpFY1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==