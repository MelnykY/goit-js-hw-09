!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=null;t.addEventListener("click",(function(){o=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(o),t.removeAttribute("disabled"),e.setAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.f76085ef.js.map
