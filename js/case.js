	
	
	//初始化内容
	var _body = document.getElementsByTagName('body')[0];
	setTimeout(function(){
		_body.style.background = 'url(../img/case/landscape2.jpg)';
	},1000)

	var click_left = document.getElementsByClassName('click_left')[0];
	var click_right = document.getElementsByClassName('click_right')[0];
	var click_num = document.getElementsByClassName('click_num')[0];

	var _li1 = document.getElementsByClassName('_li1')[0];
	var _a1 = document.getElementsByName('_a1');

	var _li2 = document.getElementsByClassName('_li2')[0];
	var _a2 = document.getElementsByName('_a2');

	var _li3 = document.getElementsByClassName('_li3')[0];
	var _a3 = document.getElementsByName('_a3');

	click_left.num = 0
	

	//要改变的值zIndex marginLeft opacity transform(scale() rotateY()) display
	click_left.onclick = function(){
		//当this.num == 0时应该是_li1 _a1的值显示出来_a1[0]
		// alert(_a1[1].offsetLeft)
			if (this.num == 0) {
				click_num.innerHTML = this.num + 2;
				for(var i = 0 ;i < _a3.length;i++){
					_a3[i].style.opacity = '0';
					_a3[i].style.transform = 'rotateY(0deg) scale(0)';
					_a3[i].style.marginLeft = '578px';
				}
				_li3.style.display = 'block';
				_li3.style.zIndex = '0';
			
				_a1[0].style.marginLeft = '290px';
				_a1[1].style.marginLeft = '0px';
				_a1[2].style.marginLeft = '-290px'
				setTimeout(function(){
					for(var i = 0 ;i < _a1.length;i++){
						_a1[i].style.transform = 'rotateY(0deg) scale(0)';
						_a1[i].style.opacity = '0';

						// _a1[0].style.marginLeft = ''
					}
				},1000);
				
			setTimeout(function(){
				_li1.style.zIndex = '0';
				_li2.style.zIndex = '9';
				for(var i = 0 ;i < _a2.length; i ++){
					_a2[i].style.opacity = '1';
					_a2[i].style.transform = 'rotateY(0deg) scale(1)';
				}
			},2000);
			setTimeout(function(){
				_a2[1].style.marginLeft = '290px';
				_a2[2].style.marginLeft = '578px';
			},3000);
		}else if (this.num == 1) {
			click_num.innerHTML = this.num + 2;
				for(var i = 0 ;i < _a1.length;i++){
					// 有问题
					_a1[i].style.opacity = '0';
					_a1[i].style.transform = 'rotateY(0deg) scale(0)';
					_a1[i].style.marginLeft = '578px';
				}
				_li1.style.display = 'block';
				_li1.style.zIndex = '0';
				_a2[0].style.marginLeft = '290px';
				_a2[2].style.marginLeft = '290px';
				setTimeout(function(){
					for(var i = 0 ; i < _a2.length;i++){
						_a2[i].style.opacity = '0';
						_a2[i].style.transform = 'rotateY(0deg) scale(0)';
					}
				},1000);
				setTimeout(function(){
					_li2.style.zIndex = '0';
					_li3.style.zIndex = '9';
					for(var i = 0 ; i < _a3.length; i++){
						_a3[i].style.opacity = '1';
						_a3[i].style.marginLeft = '0px';
						_a3[i].style.transform = 'rotateY(0deg) scale(1)';
					}
				},2000);
				setTimeout(function(){
					_a3[0].style.marginLeft = '0px';
					_a3[1].style.marginLeft = '290px';
					_a3[2].style.marginLeft = '578px';
				},3000);
		}
		if (this.num > 2) {
			this.num = 2;
		}else{
			this.num ++;
		}
		
	}

	click_right.onclick = function(){
		
		click_num.innerHTML = click_left.num;
		if (click_num.innerHTML == '2' || click_num.innerHTML == '3') {
			click_num.innerHTML = '2';
			for(var i = 0 ; i < _a1.length; i++){
				_a1[i].style.opacity = '0';
				_a1[i].style.transform = 'rotateY(0) scale(0)';
				_a1[i].style.marginLeft = '0px';
			}
			_li1.style.zIndex = '0';
			_a3[0].style.marginLeft = '290px';
			_a3[2].style.marginLeft = '290px';
			_a3[1].style.marginLeft = '0xp';
			setTimeout(function(){
				for(var i = 0 ;i < _a3.length; i++){
					_a3[i].style.opacity = 0;
					_a3[i].style.transform = 'rotateY(0) scale(0)';
				}
			},1000);
			setTimeout(function(){
				_li3.style.zIndex = '0';
				_li2.style.zIndex = '9';

				for(var i = 0 ; i < _a2.length;i++){
					_a2[i].style.opacity = '1';
					_a2[i].style.transform = 'rotateY(0) scale(1)';
					_a2[i].style.marginLeft = '290px'
					_a2[0].style.zIndex = '2';
				}
			},2000);
			setTimeout(function(){
				_a2[0].style.transform = 'rotateY(330deg) scale(1)';
				_a2[0].style.marginLeft = '0px';
				_a2[2].style.transform = 'rotateY(330deg) scale(1)';
				_a2[2].style.marginLeft = '578px';
			},3000);
			setTimeout(function(){
				_a2[0].style.transform = 'rotateY(360deg) scale(1)';
				_a2[0].style.marginLeft = '0px';
				_a2[2].style.transform = 'rotateY(360deg) scale(1)';
				_a2[2].style.marginLeft = '578px';
			},4000);
		}else if (click_num.innerHTML == 1) {
			for(var i = 0 ; i < _a3.length;i++){
				_a3[i].style.opacity = '0';
				_a3[i].style.transform = 'rotateY(0deg) scale(1)';
				_a3[i].style.marginLeft = '0px';
			}
			_li3.style.zIndex = '0';
			_a2[1].style.marginLeft = '0px';
			_a2[2].style.marginLeft = '0px';

			setTimeout(function(){
				for(var i = 0 ; i < _a2.length; i++){
					_a2[i].style.opacity = '0';
					_a2[i].style.transform = 'rotateY(0deg) scale(0)';
				}
			},1000)
			setTimeout(function(){
				_li2.style.zIndex = '0';
				_li1.style.zIndex = '9';
				for(var i = 0 ; i < _a1.length; i++){
					_a1[i].style.opacity = '1';
					_a1[i].style.transform = 'rotateY(0deg) scale(1)';
					_a1[1].style.marginLeft = '0px';
					_a1[0].style.marginLeft = '290px';
					_a1[2].style.marginLeft = '-290px';
				}
				_a1[0].style.zIndex = '1';
			},2000);

			setTimeout(function(){
				_a1[2].style.transform = 'rotateY(0deg) scale(1)';
				_a1[0].style.transform = 'rotateY(0deg) scale(1)';

				_a1[2].style.marginLeft = '0px';
				_a1[0].style.marginLeft = '0px';
				_a1[1].style.marginLeft = '00px';
			},3000)

		}
		if (click_left.num <= 0) {
			click_left.num = 0;
			click_num.innerHTML = '1';
		}else{
			click_left.num --;
		}
		
		
	}


















	var nums = 0;
	var _left_top = document.getElementsByClassName('_left_top')[0];
	var _left_ul = document.getElementsByClassName('_left_ul')[0];
	var _left_ul_li = _left_ul.getElementsByTagName('li');
	// 左边部分点击时显示和隐藏
	_left_top.onclick = function(){

		if (nums %2 == 0) {
			_left_top.style.background = 'url(../img/index_img/1.jpg) no-repeat';
			for( var i = 0 ; i < _left_ul_li.length;i++){
				_left_ul_li[i].style.marginLeft = '-5px';

			}
		}else{
			_left_top.style.background = 'url(../img/index_img/img1.png) no-repeat -13px -30px';	
			// _border.style.marginLeft = '0px';
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
