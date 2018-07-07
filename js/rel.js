

window.onload = function(){

	//初始化状态
	var rel_ul = document.getElementsByClassName('rel_ul')[0];
	var rel_ul_li = rel_ul.getElementsByTagName('li');
	var rel_ul_img = rel_ul.getElementsByTagName('img');

	for(var i = 0 ;i < rel_ul_li.length; i++){
		rel_ul_img[i].style.marginLeft = (rel_ul_li[i].offsetWidth - rel_ul_img[i].offsetWidth) / 2 + 'px';
	}










	var nums = 0;
	var _left_top = document.getElementsByClassName('_left_top')[0];
	var _left_ul = document.getElementsByClassName('_left_ul')[0];
	var _left_ul_li = _left_ul.getElementsByTagName('li');
	// var news = document.getElementsByClassName('news')[0];
	// 左边部分点击时显示和隐藏
	_left_top.onclick = function(){

		if (nums %2 == 0) {
			// news.style.right = '30px';
			_left_top.style.background = 'url(../img/index_img/1.jpg) no-repeat';
			for( var i = 0 ; i < _left_ul_li.length;i++){
				_left_ul_li[i].style.marginLeft = '-5px';

			}
		}else{
			_left_top.style.background = 'url(../img/index_img/img1.png) no-repeat -13px -30px';	
			// news.style.right = '130px';
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
