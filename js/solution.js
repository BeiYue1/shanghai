
	var _body = document.getElementsByTagName('body')[0];
	setTimeout(function(){
		_body.style.background = 'url(../img/solution/landscape4.jpg)'
	},500)

	//滑入滑出的效果

	var solution_ul = document.getElementsByClassName('solution_ul')[0];
	var solution_li = solution_ul.getElementsByTagName('li');
	var em = solution_ul.getElementsByTagName('em');
	var _span = solution_ul.getElementsByTagName('span');
	var _p = document.getElementsByName('_p');
	var solution_img =solution_ul.getElementsByTagName('img');
	var _strong = document.getElementsByClassName('_strong');
	


	for(var i = 0 ; i < solution_li.length; i ++){
		solution_li[i].index = i ;
		solution_li[i].onmouseover = function(){
			for(var i = 0 ; i < solution_li.length; i ++){
				_p[i].style.color = 'white';
				_span[i].style.color = 'white';
				_strong[i].style.opacity = '0';
				_strong[i].style.bottom = '55px'
				solution_img[i].style.bottom = '-20px';
				em[i].style.transform = 'rotateZ(45deg) translateX(180px)';
			}
			_strong[this.index].style.opacity = '1';
			_strong[this.index].style.bottom = '60px'
			_p[this.index].style.color = '#333';
			_span[this.index].style.color = '#333';
			solution_img[this.index].style.bottom = '-15px';
			em[this.index].style.transform = 'rotateZ(45deg) translateX(-140px)';
		}
		
	}


	//点击切换的效果以及初始化的效果

	var _starts = document.getElementsByClassName('_starts')[0];
	var _spans = _starts.getElementsByTagName('span')[0];
	var start_up = document.getElementById('start_up');
	var solution = document.getElementsByClassName('solution')[0];
	var solution_h3 = document.getElementsByClassName('solution_h3')[0];
	var solution_p = document.getElementsByClassName('solution_p')[0];

	var start_border = document.getElementsByClassName('start_border')[0];
	var _start = document.getElementsByClassName('_start')[0];
	var big_radius = document.getElementsByClassName('big_radius')[0];
	var small_radius = document.getElementsByClassName('small_radius')[0];
	var content_p = document.getElementsByClassName('content_p')[0];
	var all_a = document.getElementsByClassName('all_a')[0];
	var _a = all_a.getElementsByTagName('a');
	var _h = null;
	var _text = ['初始阶段的我们一般不缺好的想法，但总是无法通过优秀的执行将想法落地。',
				'品牌还处于起步阶段，自然也很难吸引到优秀的人才',
				'为了生存，我们需要快速提升销售额，无奈客源超级不稳定',
				'品牌形象也不尽如意，需要提升品牌颜值以及品牌文化感染力',
				'通过低本高效的互联网能有效改善初创企业在各个薄弱环节的不足，第一个网站，第一款app，第一套营销方案，都会在用户心中的留下深刻的第一次印象，除了完美执行落地外，如何系统全面的打造品牌整体形象，通过互联网引爆品牌和产品价值呢？'];
	
	_starts.onclick = function(){
		if (_spans.style.width != '38px') {
			_click();
		}
	}

	function _click(){
		_spans.style.width = '38px';
		//首先solution_li消失 然后此solution页面消失 然后start页面出现
		for(var i = 0 ; i < solution_li.length; i ++){
			solution_li[i].style.opacity = '0';
		}
		solution_h3.style.opacity = '0';
		solution_p.style.opacity = '0';
		
		setTimeout(function(){
			solution.style.display = 'none';
			start_up.style.display = 'block';
			start_border.style.opacity = '1';
			
		},1000);

		//01部分显示和移动
		
		setTimeout(function(){
			_start.style.opacity = '1';
			_start.style.top = '20px';
			_start.style.left  = '20px';
		},2000);

		//圆圈出现
		
		setTimeout(function(){
			big_radius.style.transform = 'scale(1)';
			big_radius.style.opacity = '1';
			small_radius.style.transform = 'scale(1)';
			small_radius.style.opacity = '1';
			big_radius.style.background = 'url(../img/solution/person-one.png) no-repeat center bottom'
		},3000);

		//文字改变 首先改变的是好创意难实现部分
		
		setTimeout(function(){
			moves_to(0)
		},4000);

		//文字改变 文字部分先下降 然后再上升出现
		
		setTimeout(function(){
			move_to()
		},5000);

		setTimeout(function(){
			moves_to(1);
		},6000);

		
		setTimeout(function(){
			move_to()
		},7000);

		
		setTimeout(function(){
			moves_to(2);
		},8000);

		
		setTimeout(function(){
			move_to()
		},9000);

		
		setTimeout(function(){
			moves_to(3);
		},10000);

		
		setTimeout(function(){
			move_to()
		},11000);

		
		setTimeout(function(){
			moves_to(4);
			big_radius.style.background = 'none'
		},12000);

		
		setTimeout(function(){
			big_radius.style.background = 'url(../img/solution/current-bottle.png) no-repeat center bottom';
		},13000);
	}

	function move_to(){
		content_p.style.opacity = '0';
		content_p.style.marginTop = '20px';
	}
	function moves_to(index){
		_a[index].style.opacity = '1';
		content_p.style.opacity = '1';
		content_p.style.marginTop = '12px';
		content_p.innerHTML = _text[index];
	}

	
	//文字点击切换文本内容部分

	// alert(_a.length)
	for(var i = 0 ; i < _a.length; i ++){
		_a[i].index =  i;
		_a[i].onclick = function(){
			content_p.innerHTML = _text[this.index];
		}
	}
































	// 左边部分点击时显示和隐藏
	var nums = 0;
	var _left_top = document.getElementsByClassName('_left_top')[0];
	var _left_ul = document.getElementsByClassName('_left_ul')[0];
	var _left_ul_li = _left_ul.getElementsByTagName('li');
	_left_top.onclick = function(){

		if (nums %2 == 0) {
			
			_left_top.style.background = 'url(../img/index_img/1.jpg) no-repeat';
			for( var i = 0 ; i < _left_ul_li.length;i++){
				_left_ul_li[i].style.marginLeft = '-5px';
			}
		}else{
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
