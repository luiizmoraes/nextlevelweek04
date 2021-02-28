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
    }, this), "}", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__["LevelUpModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJ1c2VTdGF0ZSIsImxldmVsIiwic2V0TGV2ZWwiLCJjdXJyZW50RXhwZXJpZW5jZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwiY2hhbGxlbmdlc0NvbXBsZXRlZCIsInNldENoYWxsZW5nZXNDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJpc0xldmVsVXBNb2RhbE9wZW4iLCJzZXRJc0xldmVsVXBNb2RhbE9wZW4iLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJDb29raWVzIiwic2V0IiwiU3RyaW5nIiwibGV2ZWxVcCIsImNsb3NlTGV2ZWxVcE1vZGFsIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsIkF1ZGlvIiwicGxheSIsInBlcm1pc3Npb24iLCJib2R5IiwiYW1vdW50IiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZUNoYWxsZW5nZSIsImZpbmFsRXhwZXJpZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTRCTyxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQUVBLFNBQVNDLGtCQUFULE9BQTRFO0FBQUE7O0FBQUE7O0FBQUEsTUFBOUNDLFFBQThDLFFBQTlDQSxRQUE4QztBQUFBLE1BQWpDQyxJQUFpQzs7QUFBQSxr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QUNELG1CQUFtQixHQUFHLENBQXZCLENBQXRCO0FBRUo7O0FBR0Qsc0JBQ0sscUVBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFDSyxTQUFLLEVBQUU7QUFDRkosV0FBSyxFQUFMQSxLQURFO0FBRUZFLHVCQUFpQixFQUFqQkEsaUJBRkU7QUFHRkUseUJBQW1CLEVBQW5CQSxtQkFIRTtBQUlGZSxhQUFPLEVBQVBBLE9BSkU7QUFLRkUsdUJBQWlCLEVBQWpCQSxpQkFMRTtBQU1GZixxQkFBZSxFQUFmQSxlQU5FO0FBT0YyQixvQkFBYyxFQUFkQSxjQVBFO0FBUUZ2QiwyQkFBcUIsRUFBckJBLHFCQVJFO0FBU0Z3Qix1QkFBaUIsRUFBakJBLGlCQVRFO0FBVUZkLHVCQUFpQixFQUFqQkE7QUFWRSxLQURaO0FBQUEsZUFjTXZCLFFBZE4sMENBaUJVLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQlYsb0JBbUJLLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREw7QUF3Qko7O0dBakdlRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjgzMmY5NTE1ZWZlM2U2NTMwMjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlcy5qc29uJztcclxuaW1wb3J0IHsgTGV2ZWxVcE1vZGFsIH0gZnJvbSAnLi4vY29tcG9uZW50cy9MZXZlbFVwTW9kYWwnO1xyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XHJcbiAgICAgdHlwZTogJ2JvZHknIHwgJ2V5ZSc7XHJcbiAgICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICBhbW91bnQ6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XHJcbiAgICAgbGV2ZWw6IG51bWJlcjtcclxuICAgICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcclxuICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcclxuICAgICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTtcclxuICAgICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xyXG4gICAgIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgIGNvbXBsZXRlQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgIGNsb3NlTGV2ZWxVcE1vZGFsOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMge1xyXG4gICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgICAgbGV2ZWw6IG51bWJlcjtcclxuICAgICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7IGNoaWxkcmVuLCAuLi5yZXN0IH06IENoYWxsZW5nZXNQcm92aWRlclByb3BzKSB7XHJcblxyXG4gICAgIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUocmVzdC5sZXZlbCA/PyAxKTtcclxuICAgICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKHJlc3QuY3VycmVudEV4cGVyaWVuY2UgPz8gMCk7XHJcbiAgICAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWQsIHNldENoYWxsZW5nZXNDb21wbGV0ZWRdID0gdXNlU3RhdGUocmVzdC5jaGFsbGVuZ2VzQ29tcGxldGVkID8/IDApO1xyXG5cclxuICAgICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAgY29uc3QgW2lzTGV2ZWxVcE1vZGFsT3Blbiwgc2V0SXNMZXZlbFVwTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcclxuXHJcbiAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xyXG4gICAgIH0sIFtdKVxyXG5cclxuICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgQ29va2llcy5zZXQoJ2xldmVsJywgU3RyaW5nKGxldmVsKSk7XHJcbiAgICAgICAgICBDb29raWVzLnNldCgnY3VycmVudEV4cGVyaWVuY2UnLCBTdHJpbmcoY3VycmVudEV4cGVyaWVuY2UpKTtcclxuICAgICAgICAgIENvb2tpZXMuc2V0KCdjaGFsbGVuZ2VzQ29tcGxldGVkJywgU3RyaW5nKGNoYWxsZW5nZXNDb21wbGV0ZWQpKTtcclxuICAgICB9LCBbbGV2ZWwsIGN1cnJlbnRFeHBlcmllbmNlLCBjaGFsbGVuZ2VzQ29tcGxldGVkXSk7XHJcblxyXG4gICAgIGZ1bmN0aW9uIGxldmVsVXAoKSB7XHJcbiAgICAgICAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xyXG4gICAgICAgICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgICB9XHJcblxyXG4gICAgIGZ1bmN0aW9uIGNsb3NlTGV2ZWxVcE1vZGFsKCkge1xyXG4gICAgICAgICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgICB9XHJcblxyXG4gICAgIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCkge1xyXG4gICAgICAgICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aCk7XHJcbiAgICAgICAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcclxuXHJcblxyXG5cclxuICAgICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpO1xyXG5cclxuICAgICAgICAgIG5ldyBBdWRpbygnL25vdGlmaWNhdGlvbi5tcDMnKS5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcclxuICAgICAgICAgICAgICAgbmV3IE5vdGlmaWNhdGlvbignTm92byBkZXNhZmlvIPCfmoAnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogYFZhbGVuZG8gJHtjaGFsbGVuZ2UuYW1vdW50fSB4cCFgXHJcbiAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgIH1cclxuXHJcbiAgICAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XHJcbiAgICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICAgfVxyXG5cclxuICAgICBmdW5jdGlvbiBjb21wbGV0ZUNoYWxsZW5nZSgpIHtcclxuICAgICAgICAgIGlmICghYWN0aXZlQ2hhbGxlbmdlKSB7XHJcbiAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xyXG5cclxuICAgICAgICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZSArIGFtb3VudDtcclxuXHJcbiAgICAgICAgICBpZiAoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCkge1xyXG4gICAgICAgICAgICAgICBmaW5hbEV4cGVyaWVuY2UgPSBmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWw7XHJcbiAgICAgICAgICAgICAgIGxldmVsVXAoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xyXG4gICAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgICAgICAgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZChjaGFsbGVuZ2VzQ29tcGxldGVkICsgMSk7XHJcblxyXG4gICAgIH1cclxuXHJcblxyXG4gICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsVXAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0Q2hhbGxlbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSxcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZUxldmVsVXBNb2RhbFxyXG4gICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgICAgICAgICAgICBpZihpc0xldmVsVXBNb2RhbE9wZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICA8TGV2ZWxVcE1vZGFsIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgPExldmVsVXBNb2RhbCAvPlxyXG5cclxuICAgICAgICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=