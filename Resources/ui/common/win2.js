Ti.UI.currentWindow.title = "Window 2";
Ti.UI.currentWindow.backgroundColor = "#ccc";
Ti.UI.currentWindow.addEventListener("click", function(){
	Ti.UI.currentWindow.open(Ti.UI.createWindow({url: "winTop.js"}));
});
//ActiveWinTab.activeWindow.close();