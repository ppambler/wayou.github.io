window.ripples={init:function(e){"use strict";function t(e,t){var n=e.matches||e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector;return n.call(e,t)}var n=100,o=500,r=function(e,n,o){"string"==typeof e&&(e=[e]),e.forEach(function(e){document.addEventListener(e,function(e){var r="number"!=typeof e.detail?e.detail:e.target;t(r,n)&&o(e,r)})})},i=function(e,t,n){var r,i=t,a=i.parentNode,c=document.createElement("div"),p=a.getBoundingClientRect(),s={x:e.clientX-p.left,y:(window.ontouchstart?e.clientY-window.scrollY:e.clientY)-p.top},u="scale("+Math.round(i.offsetWidth/5)+")",m=new CustomEvent("rippleEnd",{detail:c}),d=.1;e.touches&&(s={x:e.touches[0].clientX-p.left,y:e.touches[0].clientY-p.top}),console.log(s),l=c,c.className="ripple",c.setAttribute("style","left:"+s.x+"px; top:"+s.y+"px;");var h=window.getComputedStyle(a).color;h=h.replace("rgb","rgba").replace(")",", "+d+")"),i.appendChild(c),r=window.getComputedStyle(c).opacity,c.dataset.animating=1,c.className="ripple ripple-on";var f=[c.getAttribute("style"),"background-color: "+h,"-ms-transform: "+u,"-moz-transform"+u,"-webkit-transform"+u,"transform: "+u];c.setAttribute("style",f.join(";")),setTimeout(function(){c.dataset.animating=0,document.dispatchEvent(m),n&&n()},o)},a=function(e){e.className="ripple ripple-on ripple-out",setTimeout(function(){e.remove()},n)},c=!1;r(["mousedown","touchstart"],"*",function(){c=!0}),r(["mouseup","touchend"],"*",function(){c=!1});var l,p=function(e,t){if(0===t.getElementsByClassName("ripple-wrapper").length){t.className+=" withripple";var n=document.createElement("div");n.className="ripple-wrapper",t.appendChild(n),null===window.ontouchstart&&i(e,n,function(){n.getElementsByClassName("ripple")[0].remove()})}};r(["mouseover","touchstart"],e,p),r(["mousedown","touchstart"],".ripple-wrapper",function(e,t){(0===e.which||1===e.which||2===e.which)&&i(e,t)}),r("rippleEnd",".ripple-wrapper .ripple",function(e,t){var n=t.parentNode.getElementsByClassName("ripple");(!c||n[0]==t&&n.length>1)&&a(t)}),r(["mouseup","touchend"],".ripple-wrapper",function(){var e=l;e&&1!=e.dataset.animating&&a(e)})}};