

	//内容初始化部分
	var _point = document.getElementsByClassName('_point');
	var _body = document.getElementsByTagName('body')[0];
	setTimeout(function(){
		_point[0].style.top = '195px';
		_point[0].style.opacity = '1';
		_body.style.background = 'url(../img/point/landscape3.jpg)'
	},100)

	//左右点击时上下切换内容部分

	var click_left = document.getElementsByClassName('click_left')[0];
	var click_right = document.getElementsByClassName('click_right')[0];
	var click_num = document.getElementsByClassName('click_num')[0];

	click_left.a = 0;
	click_left.onclick = function(){
		
		if (this.a == 0) {
			to_bottom(this.a)
		}else if (this.a == 1) {
			to_bottom(this.a)
		}
		if (this.a > 1) {
			this.a = 1
		}else{
			this.a++
		}
		if (click_num.innerHTML == 3) {
			click_num.innerHTML = 3;
			this.a = 1;
		}else{
			click_num.innerHTML = this.a + 1;
		}
	}

	click_right.onclick = function(){
		
		if (click_num.innerHTML == 3) {
			to_top(2)
		}else if (click_num.innerHTML == 1) {
			to_top(1)
		}else{
			to_top(1);
		}
		click_left.a--;
		
	}

	function to_top(nums){
		click_left.a = nums;
		click_num.innerHTML = nums
		_point[nums].style.opacity = '0';
		_point[nums].style.top = '-800px';
		_point[nums - 1].style.opacity = '1';
		_point[nums - 1].style.top = '195px';
	}
	

	function to_bottom(num){
		_point[num].style.top = '800px';
		_point[num].style.opacity = '0';
		_point[num + 1].style.top = '195px';
		_point[num + 1].style.opacity = '1';
	}



















	var nums = 0;
	var _left_top = document.getElementsByClassName('_left_top')[0];
	var _left_ul = document.getElementsByClassName('_left_ul')[0];
	var _left_ul_li = _left_ul.getElementsByTagName('li');

	// 左边部分点击时显示和隐藏
	_left_top.onclick = function(){

		if (nums %2 == 0) {
			for(var j = 0 ; j < _point.length;j++){
				_point[j].style.left = '260px';
			}
			_left_top.style.background = 'url(../img/index_img/1.jpg) no-repeat';
			for( var i = 0 ; i < _left_ul_li.length;i++){
				_left_ul_li[i].style.marginLeft = '-5px';
			}
		}else{
			_left_top.style.background = 'url(../img/index_img/img1.png) no-repeat -13px -30px';	
			// _border.style.marginLeft = '0px';
			for(var j = 0 ; j < _point.length;j++){
				_point[j].style.left = '115px';
			}
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
