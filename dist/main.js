/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact() {
  const body = document.getElementById("body")
  body.textContent = ""

  //text
  const title = document.createElement("h1")
  const description = document.createElement("p")
  description.textContent="If you want"
  title.textContent="Call us"


  //image
  const foodsImage = document.createElement("img");
  foodsImage.src="phone.jpg"

  
  //buttons
  const menuBtn = document.createElement("button")
  menuBtn.textContent="Menu"
  menuBtn.id="menu"
  const contactBtn = document.createElement("button")
  contactBtn.textContent="Contact"
  contactBtn.id="contact"

  //body
  body.appendChild(title)
  body.appendChild(foodsImage)
  body.appendChild(description)

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

/***/ }),

/***/ "./src/initial.js":
/*!************************!*\
  !*** ./src/initial.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initialLoad() {
  const content = document.getElementById("content")

  //buttons
  const menuBtn = document.createElement("button")
  menuBtn.textContent="Menu"
  menuBtn.id="menu"
  const contactBtn = document.createElement("button")
  contactBtn.textContent="Contact"
  contactBtn.id="contact"
  const homeBtn = document.createElement("button")
  homeBtn.textContent="Home"
  homeBtn.id="home"

  //header
  const header = document.createElement("div")
  header.classList.add("header")  
  header.appendChild(homeBtn)
  header.appendChild(menuBtn)
  header.appendChild(contactBtn)

  //body
  const body = document.createElement("div")
  body.id="body"

  content.appendChild(header)
  content.appendChild(body)

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);

/***/ }),

/***/ "./src/loadHome.js":
/*!*************************!*\
  !*** ./src/loadHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function  createHome() { 
    
  //text
  const title = document.createElement("h1")
  const description = document.createElement("p")
  description.textContent="Very Nice"
  title.textContent="Get some food"


  //image
  const foodsImage = document.createElement("img");
  foodsImage.src="foods.jpg"


  //body
  const body = document.getElementById("body")
  body.textContent=""

  body.appendChild(title)
  body.appendChild(foodsImage)
  body.appendChild(description)

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function createMenu() {
  const body = document.getElementById("body")
  body.textContent = ""
  
  //text
  const title = document.createElement("h1")
  const description = document.createElement("p")
  description.textContent="Pizza"
  title.textContent="Le Menu"


  //image
  const foodsImage = document.createElement("img");
  foodsImage.src="pizza.png"

  
  //buttons
  const menuBtn = document.createElement("button")
  menuBtn.textContent="Menu"
  menuBtn.id="menu"
  const contactBtn = document.createElement("button")
  contactBtn.textContent="Contact"
  contactBtn.id="contact"

  //body
  body.appendChild(title)
  body.appendChild(foodsImage)
  body.appendChild(description)

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHome */ "./src/loadHome.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initial */ "./src/initial.js");







(0,_initial__WEBPACK_IMPORTED_MODULE_3__["default"])()
;(0,_loadHome__WEBPACK_IMPORTED_MODULE_0__["default"])()

const homeBtn = document.getElementById("home")
const menuBtn = document.getElementById("menu")
const contactBtn = document.getElementById("contact")

menuBtn.addEventListener("click",() => {
  ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])()
} )

homeBtn.addEventListener("click",() => {
  ;(0,_loadHome__WEBPACK_IMPORTED_MODULE_0__["default"])()
} )

contactBtn.addEventListener("click",() => {
  ;(0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])()
} )
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDL0JmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQzlCZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVO0FBQ3pCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7OztVQ2hDZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ0o7QUFDTTtBQUNGO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLG9EQUFXO0FBQ1gsc0RBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFVO0FBQ1osRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFLHNEQUFVO0FBQ1osRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFLHFEQUFhO0FBQ2YsRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5pdGlhbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2xvYWRIb21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIilcclxuICBib2R5LnRleHRDb250ZW50ID0gXCJcIlxyXG5cclxuICAvL3RleHRcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudD1cIklmIHlvdSB3YW50XCJcclxuICB0aXRsZS50ZXh0Q29udGVudD1cIkNhbGwgdXNcIlxyXG5cclxuXHJcbiAgLy9pbWFnZVxyXG4gIGNvbnN0IGZvb2RzSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGZvb2RzSW1hZ2Uuc3JjPVwicGhvbmUuanBnXCJcclxuXHJcbiAgXHJcbiAgLy9idXR0b25zXHJcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICBtZW51QnRuLnRleHRDb250ZW50PVwiTWVudVwiXHJcbiAgbWVudUJ0bi5pZD1cIm1lbnVcIlxyXG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgY29udGFjdEJ0bi50ZXh0Q29udGVudD1cIkNvbnRhY3RcIlxyXG4gIGNvbnRhY3RCdG4uaWQ9XCJjb250YWN0XCJcclxuXHJcbiAgLy9ib2R5XHJcbiAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSlcclxuICBib2R5LmFwcGVuZENoaWxkKGZvb2RzSW1hZ2UpXHJcbiAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3QiLCJmdW5jdGlvbiBpbml0aWFsTG9hZCgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXHJcblxyXG4gIC8vYnV0dG9uc1xyXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgbWVudUJ0bi50ZXh0Q29udGVudD1cIk1lbnVcIlxyXG4gIG1lbnVCdG4uaWQ9XCJtZW51XCJcclxuICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gIGNvbnRhY3RCdG4udGV4dENvbnRlbnQ9XCJDb250YWN0XCJcclxuICBjb250YWN0QnRuLmlkPVwiY29udGFjdFwiXHJcbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICBob21lQnRuLnRleHRDb250ZW50PVwiSG9tZVwiXHJcbiAgaG9tZUJ0bi5pZD1cImhvbWVcIlxyXG5cclxuICAvL2hlYWRlclxyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKSAgXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhvbWVCdG4pXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnVCdG4pXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pXHJcblxyXG4gIC8vYm9keVxyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgYm9keS5pZD1cImJvZHlcIlxyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcilcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGJvZHkpXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsTG9hZCIsImZ1bmN0aW9uICBjcmVhdGVIb21lKCkgeyBcclxuICAgIFxyXG4gIC8vdGV4dFxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50PVwiVmVyeSBOaWNlXCJcclxuICB0aXRsZS50ZXh0Q29udGVudD1cIkdldCBzb21lIGZvb2RcIlxyXG5cclxuXHJcbiAgLy9pbWFnZVxyXG4gIGNvbnN0IGZvb2RzSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGZvb2RzSW1hZ2Uuc3JjPVwiZm9vZHMuanBnXCJcclxuXHJcblxyXG4gIC8vYm9keVxyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIilcclxuICBib2R5LnRleHRDb250ZW50PVwiXCJcclxuXHJcbiAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSlcclxuICBib2R5LmFwcGVuZENoaWxkKGZvb2RzSW1hZ2UpXHJcbiAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWVcclxuXHJcblxyXG4iLCJcclxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpXHJcbiAgYm9keS50ZXh0Q29udGVudCA9IFwiXCJcclxuICBcclxuICAvL3RleHRcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudD1cIlBpenphXCJcclxuICB0aXRsZS50ZXh0Q29udGVudD1cIkxlIE1lbnVcIlxyXG5cclxuXHJcbiAgLy9pbWFnZVxyXG4gIGNvbnN0IGZvb2RzSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGZvb2RzSW1hZ2Uuc3JjPVwicGl6emEucG5nXCJcclxuXHJcbiAgXHJcbiAgLy9idXR0b25zXHJcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICBtZW51QnRuLnRleHRDb250ZW50PVwiTWVudVwiXHJcbiAgbWVudUJ0bi5pZD1cIm1lbnVcIlxyXG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgY29udGFjdEJ0bi50ZXh0Q29udGVudD1cIkNvbnRhY3RcIlxyXG4gIGNvbnRhY3RCdG4uaWQ9XCJjb250YWN0XCJcclxuXHJcbiAgLy9ib2R5XHJcbiAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSlcclxuICBib2R5LmFwcGVuZENoaWxkKGZvb2RzSW1hZ2UpXHJcbiAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuL2xvYWRIb21lXCJcclxuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiXHJcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIlxyXG5pbXBvcnQgaW5pdGlhbExvYWQgZnJvbSBcIi4vaW5pdGlhbFwiXHJcblxyXG5cclxuXHJcbmluaXRpYWxMb2FkKClcclxuY3JlYXRlSG9tZSgpXHJcblxyXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpXHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIilcclxuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKVxyXG5cclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XHJcbiAgY3JlYXRlTWVudSgpXHJcbn0gKVxyXG5cclxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XHJcbiAgY3JlYXRlSG9tZSgpXHJcbn0gKVxyXG5cclxuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XHJcbiAgY3JlYXRlQ29udGFjdCgpXHJcbn0gKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==