
window.onload = function(){

	var _left_top = document.getElementsByClassName('_left_top')[0];
	var _left_ul = document.getElementsByClassName('_left_ul')[0];
	var _left_ul_li = _left_ul.getElementsByTagName('li');
	var _lift = document.getElementsByClassName('_lift');

	// 点击切换第一张默认在屏幕显示
	for(var i = 0 ; i < 5;i++){
		_lift[i].style.left = '1500px';
		_lift[i].style.opacity = '0';
		_lift[0].style.left = 'calc(50% - 430px)';
		_lift[0].style.opacity = '1';
	}
	
	//点击左右切换部分

	var click_left = document.getElementsByClassName('click_left')[0];
	var click_right = document.getElementsByClassName('click_right')[0];
	var click_center = document.getElementsByClassName('click_center')[0];
	var click_num = document.getElementsByClassName('click_num')[0];
	
	// var nums = 0;
	
	//向左点击的效果
	click_left.a = 0;
	click_left.onclick = function(){
		if (click_num.innerHTML < 6) {
			click_num.innerHTML = this.a + 2
		}else{
			click_num.innerHTML = 6;
		}	

		if (this.a == 0) {
			to_left(0)
		}
		if (this.a == 1) {
			to_left(1)
		}
		if (this.a == 2) {
			to_left(2)
		}
		if (this.a == 3) {
			to_left(3)
		}
		if (this.a == 4) {
			to_left(4)
		}
		if (this.a == 5) {
			to_left(5)
		}
		if (this.a >= 5 ) {
			this.a = 5
		}else{
			this.a++;
		}
	}


	click_right.onclick = function(){
		
		if (click_num.innerHTML == "1") {
			_lift[click_left.a - 1].style.left = 'calc(50% - 430px)';
			_lift[click_left.a - 1].style.opacity = '1';
		}else{
			click_num.innerHTML = click_left.a;
			_lift[click_left.a].style.left = '1500px';
			_lift[click_left.a].style.opacity = '0';
			_lift[click_left.a - 1].style.left = 'calc(50% - 430px)';
			_lift[click_left.a - 1].style.opacity = '1';
			click_left.a--;
		}
		
	}


	//点击向左运动的函数

	function to_left(index){
		if (index >= 5) {
			_lift[5].style.left = 'calc(50% - 430px)';
			_lift[5].style.opacity = '1';
		}else{
			_lift[index].style.left = '-1500px';
			_lift[index].style.opacity = '0';
			_lift[index + 1].style.left = 'calc(50% - 430px)';
			_lift[index + 1].style.opacity = '1';
		}
		
	}

	



	var nums = 0;

	// 左边部分点击时显示和隐藏
	_left_top.onclick = function(){
		if (nums %2 == 0) {
			_lift[click_left.a].style.left = '400px';
			_left_top.style.background = 'url(../img/index_img/1.jpg) no-repeat';
			for( var i = 0 ; i < _left_ul_li.length;i++){
				_left_ul_li[i].style.marginLeft = '-5px';

			}
		}else{
			_left_top.style.background = 'url(../img/index_img/img1.png) no-repeat -13px -30px';	
			_lift[click_left.a].style.left = 'calc(50% - 430px)';
			
			for( var i = 0 ; i < _left_ul_li.length;i++){
				_left_ul_li[i].style.marginLeft = '-210px';
			}
		}

		nums++;
	}

	// 左边部分内容移入的效果

	var _ul_span = _left_ul.getElementsByTagName('span');
	var _ul_strong = _left_ul.getElementsByTagName('strong');
	var _left_em = document.getElementsByClassName('_left_em');
	var _right_em = document.getElementsByClassName('_left_right');
	
	for(var i = 0 ; i < _left_ul_li.length; i ++ ){
		_left_ul_li[i].index = i ; 
		_left_ul_li[i].onmouseover = function(){
			_right_em[this.index].style.width = _ul_span[this.index].offsetWidth + _ul_strong[this.index].offsetWidth + 30 + 'px';

			_left_em[this.index].style.width = _ul_span[this.index].offsetWidth + _ul_strong[this.index].offsetWidth + 30 + 'px';
		}
		_left_ul_li[i].onmouseout = function(){
			_left_em[this.index].style.width = '0px';
			_right_em[this.index].style.width = '2px';
		}
	}






	
}