window.onload = function(){



	var nums = 0;
	var _left_top = document.getElementsByClassName('_left_top')[0];
	var _left_ul = document.getElementsByClassName('_left_ul')[0];
	var _left_ul_li = _left_ul.getElementsByTagName('li');
	var news = document.getElementsByClassName('news')[0];
	// 左边部分点击时显示和隐藏
	_left_top.onclick = function(){

		if (nums %2 == 0) {
			news.style.right = '30px';
			_left_top.style.background = 'url(../img/index_img/1.jpg) no-repeat';
			for( var i = 0 ; i < _left_ul_li.length;i++){
				_left_ul_li[i].style.marginLeft = '-5px';

			}
		}else{
			_left_top.style.background = 'url(../img/index_img/img1.png) no-repeat -13px -30px';	
			news.style.right = '130px';
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

	//内容初始化部分
	var news_table = document.getElementsByClassName('news_table');
	var border_img = document.getElementsByClassName('border_img')[0];
	var _imgs = border_img.getElementsByTagName('img')[0];
	_imgs.style.transform = 'scale(1)';
	_imgs.style.opacity = '1';
	news_table[0].style.display = 'block';
	
	news_table[0].style.top = '0px';
	news_table[0].style.opacity = '1';
	//点击切换上下内容部分

	var click_left = document.getElementsByClassName('click_left')[0];
	var click_right = document.getElementsByClassName('click_right')[0];
	//变化的数字
	var click_num = document.getElementsByClassName('click_num')[0];
	var news_table = document.getElementsByClassName('news_table');

	click_left.a = 0;

	//点击向下运动的效果
	click_left.onclick = function(){
		if (this.a == 0) {
			to_bottom(0);
		}else if (this.a == 1) {
			to_bottom(1)
		}else if (this.a == 2) {
			to_bottom(2)
		}else if (this.a == 3) {
			to_bottom(3)
		}else if (this.a == 4) {
			to_bottom(4)
		}else if (this.a == 5) {
			to_bottom(5)
		}else if (this.a == 6) {
			to_bottom(6)
		}
		
		if (this.a > 6) {
			this.a = 7
		}else{
			this.a++
		}
		
		if (click_num.innerHTML == 7) {
			click_num.innerHTML = 7;
		}else{
			click_num.innerHTML = this.a + 1;
		}	
		
	}
	//点击向上的运动效果
	click_right.onclick = function(){
		if (click_num.innerHTML == '7') {
			click_left.a = 6;
			news_table[6].style.top = '-500px';
			news_table[6].style.opacity = '0';
			news_table[5].style.top = '0px';
			news_table[5].style.opacity = '1';
			click_num.innerHTML = 6;
		}else if (click_num.innerHTML == '1') {
			click_left.a = 1;
			news_table[0].style.top = '0px';
			news_table[0].style.opacity = '1';
		}else{
			click_num.innerHTML = click_left.a;
			news_table[click_left.a].style.top = '-500px';
			news_table[click_left.a].style.opacity = '0';
			news_table[click_left.a - 1].style.top = '0px';
			news_table[click_left.a - 1].style.opacity = '1';
		}
		// alert(click_left.a)
		click_left.a--;
		
		
	}


	//向下运动的效果

	function to_bottom(index){

		if ( index >= 6) {
			news_table[6].style.top = '0px';
			news_table[6].style.opacity = '1';	
		}else{
			news_table[index].style.top = '500px';
			news_table[index + 1].style.top = '0px';
			news_table[index].style.opacity = '0';
			news_table[index + 1].style.opacity = '1';
		}
		

	}














}