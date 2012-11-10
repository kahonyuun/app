Ti.UI.currentWindow.title = "ラブログ";
var myself = Ti.UI.currentWindow;
myself.barColor = 'black';
myself.backgroundColor = "#eea2b5";

var viewUp = Ti.UI.createView({
	backgroundColor : "#29373a",
	top : "0%",
	width : "100%",
	height : 200,
	layout : 'vertical',
});
myself.add(viewUp);

var view2 = Ti.UI.createView({
//	backgroundColor : "blue",
	top : "50%",
	width : "100%",
	height : 200,
	layout : 'absolute',
});
myself.add(view2);

var label1 = Ti.UI.createLabel({
	text : "label1",
	width : 150,
	height : 300,
	left : 10
});
view2.add(label1);

/*のちのちグラデする
 *
 *var vradialGradient = Ti.UI.createView({
 top: 10,
 width: 100,
 height: 100,
 backgroundGradient: {
 type: 'radial',
 startPoint: { x: 50, y: 50 },
 endPoint: { x: 50, y: 50 },
 colors: [ 'red', 'blue'],
 startRadius: '90%',
 endRadius: 0,
 backfillStart: true
 }
 });

 var linearGradient = Ti.UI.createView({
 top: 10,
 width: 100,
 height: 100,
 backgroundGradient: {
 type: 'linear',
 startPoint: { x: '0%', y: '50%' },
 endPoint: { x: '100%', y: '50%' },
 colors: [ { color: 'red', offset: 0.0}, { color: 'blue', offset: 0.25 }, { color: 'red', offset: 1.0 } ],
 }
 });
 currentWindow.add(radialGradient);
 currentWindow.add(linearGradient);
 currentWindow.open();
 */

Ti.UI.currentWindow.addEventListener("click", function() {
	Ti.UI.currentTab.open(Ti.UI.createWindow({
		url : "win2.js"
	}));
});
//Ti.API.info('hoge');

