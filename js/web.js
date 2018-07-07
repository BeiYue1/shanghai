



	//初始化内容部分

	var _web = document.getElementsByClassName('_web');

	setTimeout(function(){
		_web[0].style.left = '130px';
	},20)


	//点击左右按钮切换内容
	var click_left = document.getElementsByClassName('click_left')[0];
	var click_right = document.getElementsByClassName('click_right')[0];
	var click_num  = document.getElementsByClassName('click_num')[0];

	//几录点击次数
	var num = 0;

	click_left.onclick = function(){
		
		if (num >= 9) {
			to_left(8)
		}else{
			to_left(num)
		}
		if (num >= 9) {
			num = 9
			click_num.innerHTML = num + 1;
		}else{
			click_num.innerHTML = num + 2;
			num++
		}

	}

	click_right.onclick = function(){
		if (num <= 0 ) {
			num = 1
		}
		click_num.innerHTML = num;
		to_right(num);
		num--;
	}

	function to_right(index){
		_web[index].style.left = '1500px';
		_web[index - 1].style.left = '130px';
	}
	function to_left(index){
		_web[index].style.left  = '-1500px';
		_web[index + 1].style.left = '130px';
	}




	var nums = 0;
	var _left_top = document.getElementsByClassName('_left_top')[0];
	var _left_ul = document.getElementsByClassName('_left_ul')[0];
	var _left_ul_li = _left_ul.getElementsByTagName('li');

	// 左边部分点击时显示和隐藏
	_left_top.onclick = function(){

		if (nums %2 == 0) {
			for(var j = 0 ;j < _web.length; j++){
				_web[j].style.marginLeft = '200px';
			}
			_left_top.style.background = 'url(../img/index_img/1.jpg) no-repeat';
			for( var i = 0 ; i < _left_ul_li.length;i++){
				_left_ul_li[i].style.marginLeft = '-5px';
			}
		}else{
			for(var j = 0 ;j < _web.length; j++){
				_web[j].style.marginLeft = '0px';
			}
			_left_top.style.background = 'url(../img/index_img/img1.png) no-repeat -13px -30px';	
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
