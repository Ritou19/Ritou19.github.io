$(document).ready(function(){"use strict";$("a").smoothScroll();$(".progress").each(function(a,b){var c=$('<canvas id="myChart'+a+'" width="50" height="50"></canvas>'),d=$(b).children().attr("aria-valuenow");$(b).replaceWith(c);var e=document.getElementById("myChart"+a).getContext("2d"),f=[{value:d,color:"#8FCF3C",highlight:"#B7CA79",label:"HTML"},{value:100-d,color:"transparent"}],b=new Chart(e).Doughnut(f)})});