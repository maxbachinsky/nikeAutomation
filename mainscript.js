document.addEventListener('DOMContentLoaded', function() {
  (document.getElementById("old").addEventListener('click', old));
  (document.getElementById("new").addEventListener('click', runNew));
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("submit").addEventListener("click", storeValues);
});

var numberOfTabs=1;

function storeValues() {
numberOfTabs=document.getElementById("numberOfTabs").value;
}


function handlerNew() {
  for (var i=1; i<=numberOfTabs; i++) {
  var link=document.getElementById("URL").value;
  chrome.tabs.create({'url': link}, function(tab) {
  });
  chrome.tabs.executeScript(null, {file: "newScript.js"});
}
}

function handlerOld() {
  for (var i=1; i<=numberOfTabs; i++) {
  var link=document.getElementById("URL").value;
  chrome.tabs.create({'url': link}, function(tab) {
  });
  chrome.tabs.executeScript(null, {file: "oldScript.js"});
}
}

function runNew() {
  document.getElementById("run").addEventListener("click", handlerNew);

}
function old(){
  document.getElementById("run").addEventListener("click", handlerOld);

}
