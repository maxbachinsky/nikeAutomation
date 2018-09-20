
//function mainScript1() {
  //

    //
//}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("run").addEventListener("click", handler);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("submit").addEventListener("click", storeValues);
});

var numberOfTabs=1;

function storeValues() {
numberOfTabs=document.getElementById("numberOfTabs").value;
}


function handler() {
  for (var i=1; i<=numberOfTabs; i++) {
  var link=document.getElementById("URL").value;
  chrome.tabs.create({'url': link}, function(tab) {
  });
  chrome.tabs.executeScript(null, {file: "mainscript1.js"});
}
}
