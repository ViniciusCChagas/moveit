webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Countdown.module.css":
/*!****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/styles/components/Countdown.module.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Countdown_countdownContainer__3pqLs {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tfont-family: Rajdhani;\\n\\tfont-weight: 600;\\n\\tcolor: var(--title);\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div {\\n\\tflex: 1 1;\\n\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: space-evenly;\\n\\n\\tbackground: var(--white);\\n\\tbox-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n\\tborder-radius: 5px;\\n\\tfont-size: 8.5rem;\\n\\ttext-align: center;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div span {\\n\\tflex: 1 1;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > span {\\n\\tfont-size: 6.25rem;\\n\\tmargin: 0.5rem;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div span:first-child {\\n\\tborder-right: 1px solid #f0f1f3;\\n}\\n\\n.Countdown_countdownContainer__3pqLs > div span:last-child {\\n\\tborder-left: 1px solid #f0f1f3;\\n}\\n\\n.Countdown_countdownButton__2cSHU {\\n\\twidth: 100%;\\n\\theight: 5rem;\\n\\n\\tmargin-top: 2rem;\\n\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n\\n\\tborder: 0;\\n\\tborder-radius: 5px;\\n\\n\\tbackground: var(--blue);\\n\\tcolor: var(--white);\\n\\n\\tfont-size: 1.25rem;\\n\\tfont-weight: 600;\\n\\ttransition: background-color 0.2s;\\n}\\n\\n.Countdown_countdownButton__2cSHU:not(:disabled):hover {\\n\\tbackground: var(--blue-dark);\\n}\\n\\n.Countdown_countdownButtonActive__37GOc {\\n\\tbackground: var(--white);\\n\\tcolor: var(--title);\\n}\\n\\n.Countdown_countdownButtonActive__37GOc:not(:disabled):hover {\\n\\tbackground: var(--red);\\n\\tcolor: var(--white);\\n}\\n\\n.Countdown_countdownButton__2cSHU:disabled {\\n\\tbackground: var(--white);\\n\\tcolor: var(--text);\\n\\tcursor: not-allowed;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/components/Countdown.module.css\"],\"names\":[],\"mappings\":\"AAAA;CACC,aAAa;CACb,mBAAmB;CACnB,qBAAqB;CACrB,gBAAgB;CAChB,mBAAmB;AACpB;;AAEA;CACC,SAAO;;CAEP,aAAa;CACb,mBAAmB;CACnB,6BAA6B;;CAE7B,wBAAwB;CACxB,wCAAwC;CACxC,kBAAkB;CAClB,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA;CACC,SAAO;AACR;;AAEA;CACC,kBAAkB;CAClB,cAAc;AACf;;AAEA;CACC,+BAA+B;AAChC;;AAEA;CACC,8BAA8B;AAC/B;;AAEA;CACC,WAAW;CACX,YAAY;;CAEZ,gBAAgB;;CAEhB,aAAa;CACb,mBAAmB;CACnB,uBAAuB;;CAEvB,SAAS;CACT,kBAAkB;;CAElB,uBAAuB;CACvB,mBAAmB;;CAEnB,kBAAkB;CAClB,gBAAgB;CAChB,iCAAiC;AAClC;;AAEA;CACC,4BAA4B;AAC7B;;AAEA;CACC,wBAAwB;CACxB,mBAAmB;AACpB;;AAEA;CACC,sBAAsB;CACtB,mBAAmB;AACpB;;AAEA;CACC,wBAAwB;CACxB,kBAAkB;CAClB,mBAAmB;AACpB\",\"sourcesContent\":[\".countdownContainer {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tfont-family: Rajdhani;\\n\\tfont-weight: 600;\\n\\tcolor: var(--title);\\n}\\n\\n.countdownContainer > div {\\n\\tflex: 1;\\n\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: space-evenly;\\n\\n\\tbackground: var(--white);\\n\\tbox-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n\\tborder-radius: 5px;\\n\\tfont-size: 8.5rem;\\n\\ttext-align: center;\\n}\\n\\n.countdownContainer > div span {\\n\\tflex: 1;\\n}\\n\\n.countdownContainer > span {\\n\\tfont-size: 6.25rem;\\n\\tmargin: 0.5rem;\\n}\\n\\n.countdownContainer > div span:first-child {\\n\\tborder-right: 1px solid #f0f1f3;\\n}\\n\\n.countdownContainer > div span:last-child {\\n\\tborder-left: 1px solid #f0f1f3;\\n}\\n\\n.countdownButton {\\n\\twidth: 100%;\\n\\theight: 5rem;\\n\\n\\tmargin-top: 2rem;\\n\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n\\n\\tborder: 0;\\n\\tborder-radius: 5px;\\n\\n\\tbackground: var(--blue);\\n\\tcolor: var(--white);\\n\\n\\tfont-size: 1.25rem;\\n\\tfont-weight: 600;\\n\\ttransition: background-color 0.2s;\\n}\\n\\n.countdownButton:not(:disabled):hover {\\n\\tbackground: var(--blue-dark);\\n}\\n\\n.countdownButtonActive {\\n\\tbackground: var(--white);\\n\\tcolor: var(--title);\\n}\\n\\n.countdownButtonActive:not(:disabled):hover {\\n\\tbackground: var(--red);\\n\\tcolor: var(--white);\\n}\\n\\n.countdownButton:disabled {\\n\\tbackground: var(--white);\\n\\tcolor: var(--text);\\n\\tcursor: not-allowed;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"countdownContainer\": \"Countdown_countdownContainer__3pqLs\",\n\t\"countdownButton\": \"Countdown_countdownButton__2cSHU\",\n\t\"countdownButtonActive\": \"Countdown_countdownButtonActive__37GOc\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzPzQyZTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNEQ7QUFDdEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHlDQUF5QyxrQkFBa0Isd0JBQXdCLDBCQUEwQixxQkFBcUIsd0JBQXdCLEdBQUcsZ0RBQWdELGNBQWMsb0JBQW9CLHdCQUF3QixrQ0FBa0MsK0JBQStCLDZDQUE2Qyx1QkFBdUIsc0JBQXNCLHVCQUF1QixHQUFHLHFEQUFxRCxjQUFjLEdBQUcsaURBQWlELHVCQUF1QixtQkFBbUIsR0FBRyxpRUFBaUUsb0NBQW9DLEdBQUcsZ0VBQWdFLG1DQUFtQyxHQUFHLHVDQUF1QyxnQkFBZ0IsaUJBQWlCLHVCQUF1QixvQkFBb0Isd0JBQXdCLDRCQUE0QixnQkFBZ0IsdUJBQXVCLDhCQUE4Qix3QkFBd0IseUJBQXlCLHFCQUFxQixzQ0FBc0MsR0FBRyw0REFBNEQsaUNBQWlDLEdBQUcsNkNBQTZDLDZCQUE2Qix3QkFBd0IsR0FBRyxrRUFBa0UsMkJBQTJCLHdCQUF3QixHQUFHLGdEQUFnRCw2QkFBNkIsdUJBQXVCLHdCQUF3QixHQUFHLFNBQVMsMkdBQTJHLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLGFBQWEsV0FBVyxZQUFZLGNBQWMsV0FBVyxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLCtDQUErQyxrQkFBa0Isd0JBQXdCLDBCQUEwQixxQkFBcUIsd0JBQXdCLEdBQUcsK0JBQStCLFlBQVksb0JBQW9CLHdCQUF3QixrQ0FBa0MsK0JBQStCLDZDQUE2Qyx1QkFBdUIsc0JBQXNCLHVCQUF1QixHQUFHLG9DQUFvQyxZQUFZLEdBQUcsZ0NBQWdDLHVCQUF1QixtQkFBbUIsR0FBRyxnREFBZ0Qsb0NBQW9DLEdBQUcsK0NBQStDLG1DQUFtQyxHQUFHLHNCQUFzQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixvQkFBb0Isd0JBQXdCLDRCQUE0QixnQkFBZ0IsdUJBQXVCLDhCQUE4Qix3QkFBd0IseUJBQXlCLHFCQUFxQixzQ0FBc0MsR0FBRywyQ0FBMkMsaUNBQWlDLEdBQUcsNEJBQTRCLDZCQUE2Qix3QkFBd0IsR0FBRyxpREFBaUQsMkJBQTJCLHdCQUF3QixHQUFHLCtCQUErQiw2QkFBNkIsdUJBQXVCLHdCQUF3QixHQUFHLHFCQUFxQjtBQUNudkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Db3VudGRvd24ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Db3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMcyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiBSYWpkaGFuaTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGNvbG9yOiB2YXIoLS10aXRsZSk7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMcyA+IGRpdiB7XFxuXFx0ZmxleDogMSAxO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDYwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Zm9udC1zaXplOiA4LjVyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHMgPiBkaXYgc3BhbiB7XFxuXFx0ZmxleDogMSAxO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHMgPiBzcGFuIHtcXG5cXHRmb250LXNpemU6IDYuMjVyZW07XFxuXFx0bWFyZ2luOiAwLjVyZW07XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMcyA+IGRpdiBzcGFuOmZpcnN0LWNoaWxkIHtcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcbn1cXG5cXG4uQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHMgPiBkaXYgc3BhbjpsYXN0LWNoaWxkIHtcXG5cXHRib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMGYxZjM7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uX18yY1NIVSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA1cmVtO1xcblxcblxcdG1hcmdpbi10b3A6IDJyZW07XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcdGJvcmRlcjogMDtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XFxuXFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXG5cXHRmb250LXNpemU6IDEuMjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uX18yY1NIVTpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tYmx1ZS1kYXJrKTtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25BY3RpdmVfXzM3R09jIHtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0Y29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25BY3RpdmVfXzM3R09jOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uX18yY1NIVTpkaXNhYmxlZCB7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG5cXHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFNBQU87O0NBRVAsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiw2QkFBNkI7O0NBRTdCLHdCQUF3QjtDQUN4Qix3Q0FBd0M7Q0FDeEMsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxTQUFPO0FBQ1I7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsY0FBYztBQUNmOztBQUVBO0NBQ0MsK0JBQStCO0FBQ2hDOztBQUVBO0NBQ0MsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7O0NBRVosZ0JBQWdCOztDQUVoQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1Qjs7Q0FFdkIsU0FBUztDQUNULGtCQUFrQjs7Q0FFbEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjs7Q0FFbkIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixpQ0FBaUM7QUFDbEM7O0FBRUE7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QixrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb3VudGRvd25Db250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogUmFqZGhhbmk7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG5cXG4uY291bnRkb3duQ29udGFpbmVyID4gZGl2IHtcXG5cXHRmbGV4OiAxO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDYwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Zm9udC1zaXplOiA4LjVyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY291bnRkb3duQ29udGFpbmVyID4gZGl2IHNwYW4ge1xcblxcdGZsZXg6IDE7XFxufVxcblxcbi5jb3VudGRvd25Db250YWluZXIgPiBzcGFuIHtcXG5cXHRmb250LXNpemU6IDYuMjVyZW07XFxuXFx0bWFyZ2luOiAwLjVyZW07XFxufVxcblxcbi5jb3VudGRvd25Db250YWluZXIgPiBkaXYgc3BhbjpmaXJzdC1jaGlsZCB7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YwZjFmMztcXG59XFxuXFxuLmNvdW50ZG93bkNvbnRhaW5lciA+IGRpdiBzcGFuOmxhc3QtY2hpbGQge1xcblxcdGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YwZjFmMztcXG59XFxuXFxuLmNvdW50ZG93bkJ1dHRvbiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA1cmVtO1xcblxcblxcdG1hcmdpbi10b3A6IDJyZW07XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcblxcdGJvcmRlcjogMDtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XFxuXFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXG5cXHRmb250LXNpemU6IDEuMjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxufVxcblxcbi5jb3VudGRvd25CdXR0b246bm90KDpkaXNhYmxlZCk6aG92ZXIge1xcblxcdGJhY2tncm91bmQ6IHZhcigtLWJsdWUtZGFyayk7XFxufVxcblxcbi5jb3VudGRvd25CdXR0b25BY3RpdmUge1xcblxcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG5cXHRjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uQWN0aXZlOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5jb3VudGRvd25CdXR0b246ZGlzYWJsZWQge1xcblxcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dCk7XFxuXFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY291bnRkb3duQ29udGFpbmVyXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkNvbnRhaW5lcl9fM3BxTHNcIixcblx0XCJjb3VudGRvd25CdXR0b25cIjogXCJDb3VudGRvd25fY291bnRkb3duQnV0dG9uX18yY1NIVVwiLFxuXHRcImNvdW50ZG93bkJ1dHRvbkFjdGl2ZVwiOiBcIkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25BY3RpdmVfXzM3R09jXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Countdown.module.css\n");

/***/ })

})