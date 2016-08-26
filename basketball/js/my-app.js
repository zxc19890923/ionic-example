var myApp = new Framework7();
var $$ = Dom7;

//获取界面的一些信息
//$$(document).on("pageInit", function(e) {
//    var page = e.detail.page;
//    alert(page.name);
//});

// 初始化view
var view1 = myApp.addView('#view-1', {
    // 动态导航栏,支队穿透类型的布局有效 navbar-thought
    dynamicNavbar: true,
    animateNavBackIcon: true
});
var view2 = myApp.addView('#view-2', {
    dynamicNavbar: true,
    animateNavBackIcon: true
});
var view3 = myApp.addView('#view-3', {
    dynamicNavbar: true,
    animateNavBackIcon: true
});

// 初始化slide
var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination'
});

//单击链接到另一个view中
//$$("#addPeople").on("click", function() {
//    myApp.showTab(".tab2");
//});

//单击login
$$('').on('click', function () {
    myApp.modalLogin('请输入用户名密码', function (username, password) {
        myApp.alert('Thank you! Username: ' + username + ', Password: ' + password);
    });
});

// 底部操作快
$$('').on('click', function () {
    var buttons = [
        {
            text: '收款',
            bold: true,
            color: 'green'
        },
        {
            text: '付款',
            color: 'yellow'
        },
        {
            text: '退出',
            color: 'red'
        }
    ];
    myApp.actions(buttons);
});