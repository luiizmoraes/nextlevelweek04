webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_NLW04_Projeto01_moveit_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);
/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LevelUpModal */ "./src/components/LevelUpModal.tsx");



var _jsxFileName = "C:\\NLW04\\Projeto01\\moveit-next\\src\\contexts\\ChallengesContext.tsx",
    _s = $RefreshSig$();





var ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])({});
function ChallengesProvider(_ref) {
  _s();

  var _rest$level, _rest$currentExperien, _rest$challengesCompl;

  var children = _ref.children,
      rest = Object(C_NLW04_Projeto01_moveit_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$challengesCompl = rest.challengesCompleted) !== null && _rest$challengesCompl !== void 0 ? _rest$challengesCompl : 0),
      challengesCompleted = _useState3[0],
      setChallengesCompleted = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      activeChallenge = _useState4[0],
      setActiveChallenge = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLevelUpModalOpen = _useState5[0],
      setIsLevelUpModalOpen = _useState5[1];

  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Notification.requestPermission();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', String(level));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentExperience', String(currentExperience));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(false);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_4__.length);
    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_4__[randomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🚀', {
        body: "Valendo ".concat(challenge.amount, " xp!")
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

    var amount = activeChallenge.amount;
    var finalExperience = currentExperience + amount;

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
      level: level,
      currentExperience: currentExperience,
      challengesCompleted: challengesCompleted,
      levelUp: levelUp,
      startNewChallenge: startNewChallenge,
      activeChallenge: activeChallenge,
      resetChallenge: resetChallenge,
      experienceToNextLevel: experienceToNextLevel,
      completeChallenge: completeChallenge,
      closeLevelUpModal: closeLevelUpModal
    },
    children: [children, "if(isLevelUpModalOpen) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__["LevelUpModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__["LevelUpModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 16
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 11
  }, this);
}

_s(ChallengesProvider, "UqHVByiPLb7kVaLDO0z8bDhE3KM=");

_c = ChallengesProvider;

var _c;

$RefreshReg$(_c, "ChallengesProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJ1c2VTdGF0ZSIsImxldmVsIiwic2V0TGV2ZWwiLCJjdXJyZW50RXhwZXJpZW5jZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwiY2hhbGxlbmdlc0NvbXBsZXRlZCIsInNldENoYWxsZW5nZXNDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJpc0xldmVsVXBNb2RhbE9wZW4iLCJzZXRJc0xldmVsVXBNb2RhbE9wZW4iLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJDb29raWVzIiwic2V0IiwiU3RyaW5nIiwibGV2ZWxVcCIsImNsb3NlTGV2ZWxVcE1vZGFsIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsIkF1ZGlvIiwicGxheSIsInBlcm1pc3Npb24iLCJib2R5IiwiYW1vdW50IiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZUNoYWxsZW5nZSIsImZpbmFsRXhwZXJpZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTRCTyxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQUVBLFNBQVNDLGtCQUFULE9BQTRFO0FBQUE7O0FBQUE7O0FBQUEsTUFBOUNDLFFBQThDLFFBQTlDQSxRQUE4QztBQUFBLE1BQWpDQyxJQUFpQzs7QUFBQSxr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QUNELG1CQUFtQixHQUFHLENBQXZCLENBQXRCO0FBRUo7O0FBR0Qsc0JBQ0sscUVBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFDSyxTQUFLLEVBQUU7QUFDRkosV0FBSyxFQUFMQSxLQURFO0FBRUZFLHVCQUFpQixFQUFqQkEsaUJBRkU7QUFHRkUseUJBQW1CLEVBQW5CQSxtQkFIRTtBQUlGZSxhQUFPLEVBQVBBLE9BSkU7QUFLRkUsdUJBQWlCLEVBQWpCQSxpQkFMRTtBQU1GZixxQkFBZSxFQUFmQSxlQU5FO0FBT0YyQixvQkFBYyxFQUFkQSxjQVBFO0FBUUZ2QiwyQkFBcUIsRUFBckJBLHFCQVJFO0FBU0Z3Qix1QkFBaUIsRUFBakJBLGlCQVRFO0FBVUZkLHVCQUFpQixFQUFqQkE7QUFWRSxLQURaO0FBQUEsZUFjTXZCLFFBZE4sMENBaUJVLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQlYsZUFrQksscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFETDtBQXVCSjs7R0FoR2VELGtCOztLQUFBQSxrQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZDZjYjk0MDc0MjdmZTEyOGZkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2VzLmpzb24nO1xyXG5pbXBvcnQgeyBMZXZlbFVwTW9kYWwgfSBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsVXBNb2RhbCc7XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlIHtcclxuICAgICB0eXBlOiAnYm9keScgfCAnZXllJztcclxuICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgIGFtb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcclxuICAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xyXG4gICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xyXG4gICAgIGFjdGl2ZUNoYWxsZW5nZTogQ2hhbGxlbmdlO1xyXG4gICAgIGxldmVsVXA6ICgpID0+IHZvaWQ7XHJcbiAgICAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgICAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgICAgY29tcGxldGVDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgICAgY2xvc2VMZXZlbFVwTW9kYWw6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyB7XHJcbiAgICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxuICAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZXNDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHsgY2hpbGRyZW4sIC4uLnJlc3QgfTogQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpIHtcclxuXHJcbiAgICAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZShyZXN0LmxldmVsID8/IDEpO1xyXG4gICAgIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSwgc2V0Q3VycmVudEV4cGVyaWVuY2VdID0gdXNlU3RhdGUocmVzdC5jdXJyZW50RXhwZXJpZW5jZSA/PyAwKTtcclxuICAgICBjb25zdCBbY2hhbGxlbmdlc0NvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZF0gPSB1c2VTdGF0ZShyZXN0LmNoYWxsZW5nZXNDb21wbGV0ZWQgPz8gMCk7XHJcblxyXG4gICAgIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgICBjb25zdCBbaXNMZXZlbFVwTW9kYWxPcGVuLCBzZXRJc0xldmVsVXBNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpO1xyXG5cclxuICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XHJcbiAgICAgfSwgW10pXHJcblxyXG4gICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICBDb29raWVzLnNldCgnbGV2ZWwnLCBTdHJpbmcobGV2ZWwpKTtcclxuICAgICAgICAgIENvb2tpZXMuc2V0KCdjdXJyZW50RXhwZXJpZW5jZScsIFN0cmluZyhjdXJyZW50RXhwZXJpZW5jZSkpO1xyXG4gICAgICAgICAgQ29va2llcy5zZXQoJ2NoYWxsZW5nZXNDb21wbGV0ZWQnLCBTdHJpbmcoY2hhbGxlbmdlc0NvbXBsZXRlZCkpO1xyXG4gICAgIH0sIFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZXNDb21wbGV0ZWRdKTtcclxuXHJcbiAgICAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcclxuICAgICAgICAgIHNldExldmVsKGxldmVsICsgMSk7XHJcbiAgICAgICAgICBzZXRJc0xldmVsVXBNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgIH1cclxuXHJcbiAgICAgZnVuY3Rpb24gY2xvc2VMZXZlbFVwTW9kYWwoKSB7XHJcbiAgICAgICAgICBzZXRJc0xldmVsVXBNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgIH1cclxuXHJcbiAgICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XHJcbiAgICAgICAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgICAgICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSk7XHJcblxyXG4gICAgICAgICAgbmV3IEF1ZGlvKCcvbm90aWZpY2F0aW9uLm1wMycpLnBsYXkoKTtcclxuXHJcbiAgICAgICAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09ICdncmFudGVkJykge1xyXG4gICAgICAgICAgICAgICBuZXcgTm90aWZpY2F0aW9uKCdOb3ZvIGRlc2FmaW8g8J+agCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBgVmFsZW5kbyAke2NoYWxsZW5nZS5hbW91bnR9IHhwIWBcclxuICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgfVxyXG5cclxuICAgICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpIHtcclxuICAgICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgICB9XHJcblxyXG4gICAgIGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbGxlbmdlKCkge1xyXG4gICAgICAgICAgaWYgKCFhY3RpdmVDaGFsbGVuZ2UpIHtcclxuICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IHsgYW1vdW50IH0gPSBhY3RpdmVDaGFsbGVuZ2U7XHJcblxyXG4gICAgICAgICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xyXG5cclxuICAgICAgICAgIGlmIChmaW5hbEV4cGVyaWVuY2UgPj0gZXhwZXJpZW5jZVRvTmV4dExldmVsKSB7XHJcbiAgICAgICAgICAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbDtcclxuICAgICAgICAgICAgICAgbGV2ZWxVcCgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHNldEN1cnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XHJcbiAgICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICAgICAgICBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkKGNoYWxsZW5nZXNDb21wbGV0ZWQgKyAxKTtcclxuXHJcbiAgICAgfVxyXG5cclxuXHJcbiAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxVcCxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRDaGFsbGVuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlQ2hhbGxlbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlTGV2ZWxVcE1vZGFsXHJcbiAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICAgICAgICAgICAgIGlmKGlzTGV2ZWxVcE1vZGFsT3Blbikge1xyXG4gICAgICAgICAgICAgICAgICAgIDxMZXZlbFVwTW9kYWwgLz59XHJcbiAgICAgICAgICAgICAgIDxMZXZlbFVwTW9kYWwgLz5cclxuXHJcbiAgICAgICAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9