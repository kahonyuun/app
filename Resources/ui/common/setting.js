var self = Ti.UI.currentWindow;

self.title = "ラブログ";
self.barcolor = "black";
self.backgroundColor = "#eea2b5";

//Facebook
Ti.Facebook.requestWithGraphPath('me', {}, "GET", function(e) {
	if (e.success) {
		var obj = JSON.parse(e.result);
		Ti.API.info('16');
		Ti.API.info(obj.name);
		addLabel(obj, self);
	}
});
Ti.API.info('21');

function addLabel(obj, self) {
	var name = Ti.UI.createLabel({
		text : obj.name,
		top : 30,
		width : 'auto',
		height : 'auto'
	});
	var setting = Ti.UI.createLabel({
		text : "設定",
		hight : 20,
		width : 'auto',
		top : 5,
		textAlign : 'left'
	});
	self.add(setting);
	self.add(name);
}
