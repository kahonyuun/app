function FirstView() {
	var self = Ti.UI.createView();
	var viewFirst = Ti.UI.createView({
		bakgroundColor : "red",
		title : "ラブログ"
	});
	self.addEventListener('focus', function(e) {
		ActiveWinTab.activeWindow = self;
	});
	// var nav = Ti.UI.iPhone.createNavigationGroup({
	// });

	//topページ
	var mySelf = Ti.UI.createTabGroup();

	//Tab1
	var winMeet = Ti.UI.createWindow({
		url : "ui/common/meet.js"
	});
	var tabMeet = Titanium.UI.createTab({
		window : winMeet,
		icon : 'ui/common/KS_nav_views.png',
		title : 'MEET!',
	});

	//Tab2
	var winBye = Ti.UI.createWindow({
		url : "ui/common/bye.js"
	});
	var tabBye = Titanium.UI.createTab({
		window : winBye,
		icon : 'KS_nav_views.png',
		title : 'BYE!',
	});

	//Tab3
	var winTop = Ti.UI.createWindow({
		url : "ui/common/WinTop.js"
	});
	var tabTop = Ti.UI.createTab({
		window : winTop,
		icon : 'KS_nav_views.png',
		title : 'Tab top',
	});

	//Tab4
	var winLog = Ti.UI.createWindow({
		url : "ui/common/log.js"
	});
	var tabLog = Titanium.UI.createTab({
		window : winLog,
		icon : 'KS_nav_views.png',
		title : 'LOG',
	});

	//Tab5
	var winSetting = Ti.UI.createWindow({
		url : "ui/common/setting.js"
	});
	var tabSetting = Titanium.UI.createTab({
		window : winSetting,
		icon : 'KS_nav_views.png',
		title : 'SETTING',
	});

	var tabGroup = Ti.UI.createTabGroup();
	//winTop.hideTabBar();//タブバーを非表示にする

	tabGroup.addTab(tabMeet);
	tabGroup.addTab(tabBye);
	tabGroup.addTab(tabTop);
	tabGroup.addTab(tabLog);
	tabGroup.addTab(tabSetting);

	//最初に表示するページ
	tabGroup.setActiveTab(2);
	//なぜ３ではなく２なのかは謎でつ！
	//試しに0を入れてみるとわかる @kyohei

	//TOPページボタン
	var aButton = Ti.UI.createButton({
		title : 'START',
		heigh : 100,
		width : 100,
		top : 350,
		bottom : 50,
		color : '#eea2b5'
	});
	aButton.hide();

	//背景画像
	var imageView = Ti.UI.createImageView({
		image : 'images/IMG_4028.png',
	});

	Titanium.Facebook.appid = "456185811089908";
	Titanium.Facebook.permissions = ['publish_stream', 'read_stream'];
	//FBボタン
	var facebook_button = Titanium.Facebook.createLoginButton({
		style : Ti.Facebook.BUTTON_STYLE_WIDE,
		bottom : 30
	});

	self.add(imageView);
	self.add(facebook_button);
	self.add(aButton);

	// Login Status
	/*
	var label = Ti.UI.createLabel({
	text:'Logged In = ' + Titanium.Facebook.loggedIn,
	font:{fontSize:24},
	height:'auto',
	top:10,
	textAlign:'center'
	});
	*/
	//self.add(label);

	//背景
	imageView.addEventListener('load', function() {
	});
	//ボタンクリックで画面遷移
	aButton.addEventListener('click', function() {
		//alert('\'aButton\' was clicked!');
		tabGroup.open();
		Ti.Facebook.requestWithGraphPath(
			'me',
			{},
			"GET",
			function(e){
				if (e.success) {
					var obj = JSON.parse(e.result);
					alert(obj.name + "時間を記入しましょう");
				}
			}
		);
	});

	//FBログイン
	Titanium.Facebook.addEventListener('login', function() {
		//label.text = 'Logged In = ' + Titanium.Facebook.loggedIn;
		aButton.show();
	});
	Titanium.Facebook.addEventListener('logout', function() {
		//label.text = 'Logged In = ' + Titanium.Facebook.loggedIn;
		aButton.hide();
	});
	if(Ti.Facebook.loggedIn){
		aButton.show();
	};
	
	return self;
}

module.exports = FirstView;
