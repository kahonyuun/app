Ti.UI.currentWindow.title = "ラブログ";
Ti.UI.currentWindow.barColor ='black';
Ti.UI.currentWindow.backgroundColor = "#eea2b5";
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

Ti.UI.currentWindow.addEventListener("click", function(){
	Ti.UI.currentTab.open(Ti.UI.createWindow({url: "win2.js"}));
});
//Ti.API.info('hoge');

//グローバル

/*var self = Ti.UI.createView();	
self.addEventListener('focus', function(e){
	ActionWinTab.activeWindow = self;
});
*/
//シングルコンテキスト
/*var self,win;
Ti.include("win2.js");
win = self.createFirstWindow();
win.open();
*/

/*function Top (){
	var self =Ti.UI.createWindow();
	
	// Create a Button.
	var test = Ti.UI.createButton({
		title : 'test',
		height : myHeight,
		width : myWidth,
		top : myTop,
		left : myLeft
	});
	
	// Listen for click events.
	test.addEventListener('click', function() {
		alert('\'test\' was clicked!');
	});
	
	// Add to the parent view.
	self.add(test);
	



return self;
}
module.exports = FirstView;
*/