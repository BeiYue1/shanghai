
	var nums = 0;
	var _left_top = document.getElementsByClassName('_left_top')[0];
	var _left_ul = document.getElementsByClassName('_left_ul')[0];
	var _left_ul_li = _left_ul.getElementsByTagName('li');
	var _border = document.getElementsByClassName('_border')[0];
	// 左边部分点击时显示和隐藏
	_left_top.onclick = function(){

		if (nums %2 == 0) {
			_border.style.marginLeft = '100px';
			_left_top.style.background = 'url(../img/index_img/1.jpg) no-repeat';
			for( var i = 0 ; i < _left_ul_li.length;i++){
				_left_ul_li[i].style.marginLeft = '-5px';

			}
		}else{
			_left_top.style.background = 'url(../img/index_img/img1.png) no-repeat -13px -30px';	
			_border.style.marginLeft = '0px';
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


	//点击左右切换
	// var aul = _border.getElementsByClassName('aul');
	var app_ul = document.getElementsByClassName('app_ul')[0];
	var app_uls = document.getElementsByClassName('app_uls')[0];
	var click_left = document.getElementsByClassName('click_left')[0];
	var click_right = document.getElementsByClassName('click_right')[0];
	var click_num = document.getElementsByClassName('click_num')[0];	
	var ul_dian = document.getElementsByClassName('ul_dian')[0];
	var _dian_li = ul_dian.getElementsByTagName('li');


	//初始化内容部分
	_dian_li[0].style.background = 'white';
	var temer = null;
	// click_left.a = 0;
	click_left.onclick = a_left;
	click_right.onclick = a_right;
	_dian_li[0].onclick = a_right;
	_dian_li[1].onclick = a_left;

	function a_left(){
		_dian_li[0].style.background = ' #4d4d4d';
		_dian_li[1].style.background = 'white';
		click_num.innerHTML = '2';
		clearTimeout(temer);
		app_ul.style.marginLeft = '-700px';
		app_ul.style.opacity = '0';
		app_uls.style.display = 'flex';
		temer = setTimeout(function(){
			app_ul.style.display = 'none';
			app_uls.style.left = '92px';
			app_uls.style.opacity = '1';
		},1000);
	}

	function a_right(){
		_dian_li[1].style.background = ' #4d4d4d';
		_dian_li[0].style.background = 'white';
		click_num.innerHTML = '1';
		clearTimeout(temer);
		app_ul.style.display = 'flex';
		app_uls.style.left = '900px';
		app_uls.style.opacity = '0';
		setTimeout(function(){
			app_ul.style.marginLeft = '30px';
			app_ul.style.opacity = '1';
		},1000)
		temer = setTimeout(function(){
			app_uls.style.display = 'none'
		},1000)
	}
	