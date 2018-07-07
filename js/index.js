window.onload = function(){

	var _left_top = document.getElementsByClassName('_left_top')[0];
	var _left_ul = document.getElementsByClassName('_left_ul')[0];
	var _left_ul_li = _left_ul.getElementsByTagName('li');
	var _content = document.getElementsByClassName('_content')[0];

	var nums = 0;

	// 左边部分点击时显示和隐藏
	_left_top.onclick = function(){

		if (nums %2 == 0) {
			_content.style.marginLeft = '210px'
			_left_top.style.background = 'url(../img/index_img/1.jpg) no-repeat';
			for( var i = 0 ; i < _left_ul_li.length;i++){
				_left_ul_li[i].style.marginLeft = '-5px';

			}
		}else{
			_left_top.style.background = 'url(../img/index_img/img1.png) no-repeat -13px -30px';	
			_content.style.marginLeft = '94px'
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


	// 数字变化
	var _content_ul = document.getElementsByClassName('_content_ul')[0];
	var _content_ul_span = _content_ul.getElementsByTagName('span')[2];
	var a = 0 ; 
	var timer = null;
	timer = setInterval(function(){
		if (_content_ul_span.innerHTML > 999) {
			clearInterval(timer);
			_content_ul_span.innerHTML = '1K';
		}else{
			_content_ul_span.innerHTML = a;
		}
		a++
	},0.002)
	

	//简介点击特效
	var _table = document.getElementsByClassName('_table')[0];
	var _table_a = _table.getElementsByTagName('a')[1];
	var _img1 = document.getElementsByClassName('_img1')[0];
	var _img2 = document.getElementsByClassName('_img2')[0];
	var _bri = document.getElementsByClassName('_bri')[0];
	var _content_border = document.getElementsByClassName('_content_border')[0];
	var _content_p_right = document.getElementsByClassName('_content_p_right')[0];
	var contents = document.getElementsByClassName('contents')[0];
	var _content_ul = document.getElementsByClassName('_content_ul')[0];
	var _content_ul_li = _content_ul.getElementsByTagName('li');
	var _right = document.getElementsByClassName('_right')[0];


	// 点击简介的效果
	_table_a.onclick = function(){
		moves();
		_opcity();
		_to_bottom.style.display = 'none';
		_to_bottom1.style.display = 'none';
		_left_top.style.display = 'none';
	}

	
	//网页开始时的效果
	_move();
	function _move(){
		contents.style.marginLeft = '0px';
		contents.style.opacity = '1';
		_content_p_right.style.marginRight = '0px';
		_content_p_right.style.opacity = '1';
		_img1.style.right = '270px';
		_img1.style.opacity = '1';
		_img2.style.right = '480px';
		_img2.style.opacity = '1';
		_bri.style.left = '340px';
		_bri.style.opacity = '1';
		_content_border.style.transform = 'scale(1)';
	}

	var _to_bottom = document.getElementsByClassName('_to_bottom')[0];
	var _to_bottom1 = document.getElementsByClassName('_to_bottom1')[0];
	var adv = document.getElementsByClassName('adv')[0];
	var temer = null;
	var temers = null;

	_to_bottom.onclick = function(){
		// var temer = null;
		clearTimeout(temer);
		moves();
		to_top();
		adv.style.top = '150px';
		adv.style.opacity = '1';
		
		this.style.opacity = '0';
		temers = setTimeout(function(){
			this.style.display = 'none'
		},500)
		// this.style.zIndex = '8';
		temer = setTimeout(function(){
			_to_bottom1.style.display = 'block';
			_to_bottom1.style.opacity = '1';
			_to_bottom1.style.zIndex = '9';
		},1000)
	}
// bottom1向上的

	_to_bottom1.onclick = function(){

		clearTimeout(temer);
		clearTimeout(temers);
		temer = setTimeout(function(){
			_move();
		},1000);
		_content_ul.style.top = '270px';
		adv.style.top = '500px';
		adv.style.opacity = '0';
		_right.style.opacity = '1';
		_right.style.top = '262px';
		this.style.opacity = '0';
		this.style.zIndex = '8';
		_to_bottom.style.display = 'block';
		temers = setTimeout(function(){
			_to_bottom.style.zIndex = '9';
			_to_bottom.style.opacity = '1';
		},2000)
		

	}


	//向左运动

	var span1 = document.getElementsByClassName('span1')[0];
	var span1_img = span1.getElementsByTagName('img');
	var span3 = document.getElementsByClassName('span3')[0];
	var span3_img = span3.getElementsByTagName('img');

	var span2 = document.getElementsByClassName('span2')[0];
	var span2_img = span2.getElementsByTagName('img');
	var span4 = document.getElementsByClassName('span4')[0];
	var span4_img = span4.getElementsByTagName('img');

	_atop(span2_img,60)
	
	setInterval(function(){
		_atop(span2_img,60)
	},200);
	
	_aleft(span3_img,36);
	_aleft(span1_img,36);
	
	setInterval(function(){
		_aleft(span3_img,36)
	},200);
	setInterval(function(){
		_aleft(span1_img,36)
	},200);

	_abottom(span4_img,60);
	setInterval(function(){
		_abottom(span4_img,60);
	},200)
	
	var aspan1 = document.getElementsByClassName('aspan1')[0];
	var aspan1_img = aspan1.getElementsByTagName('img');

	var aspan2 = document.getElementsByClassName('aspan2')[0];
	var aspan2_img = aspan2.getElementsByTagName('img');
	var aspan3 = document.getElementsByClassName('aspan3')[0];
	var aspan3_img = aspan3.getElementsByTagName('img');
	setInterval(function(){
		_atop(aspan3_img,38)
	},200)
	_aleft(aspan1_img,32);
	_aleft(aspan2_img,32);
	setInterval(function(){
		_aleft(aspan1_img,32)
	},200)

	setInterval(function(){
		_aleft(aspan2_img,32)
	},200)

	var _at = document.getElementsByClassName('_at')[0];
	var _at_img = _at.getElementsByTagName('img');

	setInterval(function(){
		_abottom(_at_img,30)
	},200);

	var _center = document.getElementsByClassName('_center')[0];
	var _center_img  = _center.getElementsByTagName('img');

	setInterval(function(){
		_aleft(_center_img,24)
	},200);


	var _bottom = document.getElementsByClassName('_bottom')[0];
	var body = document.getElementsByTagName('body')[0];
	var _top = document.getElementsByClassName('_top')[0];
	var _content = document.getElementsByClassName('_content')[0];
	var _rel = document.getElementsByClassName('_rel')[0];
	var tops = document.getElementsByClassName('tops')[0];
	var temer = null;
	var top_a = document.getElementsByClassName('top_a')[0]; 
	var _bottom_a = document.getElementsByClassName('_bottom_a')[0];
	
	//鼠标向下点击第一次的效果
	_bottom.onclick = function(){
		
		clearTimeout(temer);
		moves();
		_opcity();
		top_a.style.display = 'none';
		tops.style.display = 'block';
		tops.style.opacity = '0';
		_to_bottom.style.display = 'block';

		_to_bottom1.style.display = 'none';
		// gai
		this.style.display = 'none';
		_bottom_a.style.display = 'block';
		_content_ul.style.top = '270px';
		adv.style.top = '500px';
		adv.style.opacity = '0';

		_tr.style.opacity = '1';
		_rels.style.opacity = '1';
		for(var i = 0 ; i< _ygreen.length;i++){
			_ygreen[i].style.top = '150px';
			_ygreen[i].style.opacity = '1';
		}
		temer = setTimeout(function(){
			_content.style.display = 'none';
		},1000)
		temer = setTimeout(function(){
			body.style.background = 'url(../img/index_img/landscape0.jpg)';
			_rel.style.display = 'block';
		},2000);
		temer = setTimeout(function(){
			_rel.style.opacity = '1';
		},2000);
	}
	var _tr = document.getElementsByClassName('_tr')[0];
	var _rels = document.getElementsByClassName('_rels')[0];

	tops.onmouseover = function(){
		this.style.opacity = '1';
	}
	
	//向上箭头第一次点击的效果;
	
		tops.onclick = function(){
		clearTimeout(temer);
		this.style.display = 'block';
		this.style.opacity = '0';
		top_a.style.display = 'block';
		_bottom.style.display = 'block';
		_bottom_a.style.display = 'none';


		// bottom1 是向上的
		_to_bottom1.style.display = 'none';
		_to_bottom.style.display = 'block';
		_to_bottom.style.opacity = '1';
		_ygreen[0].style.top = '8px';
		_ygreen[0].style.opacity = '0';
		_tr.style.opacity = '0';
		_rels.style.opacity = '0';
		temer = setTimeout(function(){
			_ygreen[1].style.top = '8px';
			_ygreen[1].style.opacity = '0';
		},100)
		temer = setTimeout(function(){
			_ygreen[2].style.top = '8px';
			_ygreen[2].style.opacity = '0';
		},200)
		temer = setTimeout(function(){
			_ygreen[3].style.top = '8px';
			_ygreen[3].style.opacity = '0';
		},300)
		temer = setTimeout(function(){
			_ygreen[4].style.top = '8px';
			_ygreen[4].style.opacity = '0';
		},400)
		
		temer = setTimeout(function(){
			_rel.style.display = 'none';
			body.style.background = 'url(../img/index_img/landscape5.jpg)';
		},500);

		temer = setTimeout(function(){
			_content.style.display = 'block';
		},600);
		temer = setTimeout(function(){
			_move();
			_content_ul.style.opacity = '1';
			for(var i = 0 ; i < _content_ul_li.length;i++){
				_content_ul_li[i].style.opacity = '1';	
				}
		},700)
	}

	//3D轮播图部分鼠标移入移出效果
	var _atr = document.getElementsByClassName('_atr')[0];
	var _atr_div = _atr.getElementsByTagName('div');
	var _ygreen  = document.getElementsByClassName('_ygreen');
	var _alack = document.getElementsByClassName('_alack');
	

	for(var i = 0 ; i < _atr_div.length ; i++){
		_atr_div[i].index = i ; 
		_atr_div[i].onmouseover = function(){
			for(var i = 0 ; i < _atr_div.length; i ++){
				_ygreen[i].style.top = '150px';
				_alack[i].style.opacity = '0';
				_alack[i].style.height = '0px';
			}
			_ygreen[this.index].style.top = '118px';
			_alack[this.index].style.opacity = '1';
			_alack[this.index].style.height = '28px';
		}

		_atr_div[i].onmouseout = function(){
			_ygreen[this.index].style.top = '150px';
			_alack[this.index].style.opacity = '0';
			_alack[this.index].style.height = '0px';
		}
	}


	//向上运动
	function _atop(obj,num){
		for(var i = 0 ; i < obj.length;i++){
			obj[i].index = i ;
			if (obj[i].offsetTop <= -num) {
				obj[i].style.top = (num - 2) +  'px'
			}else{
				obj[i].style.top = obj[i].offsetTop - 2 + 'px';
			}
		}
	}

	//向下运动
	function _abottom(obj,num){
		for(var i = 0 ;i < obj.length;i++){
			if (obj[i].offsetTop >= num) {
				obj[i].style.top = (-num + 2) + 'px';
			}else{
				obj[i].style.top = obj[i].offsetTop + 2 + 'px';
			}
			
		}
	}

	//向左运动效果
	function _aleft(obj,num){
		for(var i = 0 ; i < obj.length;i++){
			obj[i].index = i;
			if (obj[i].offsetLeft >= num) {
				obj[i].style.left = - num + 'px';
			}else{
				obj[i].style.left = obj[i].offsetLeft + 2 + 'px';
			}
		}
	}
	

	// 点击效果1
	function moves(){
		_img1.style.top = '0px';
		_img1.style.opacity = '0';
		_img2.style.top = '0px';
		_img2.style.opacity = '0';
		_bri.style.top = '196px';
		_bri.style.opacity = '0';
		_content_border.style.transform = 'scale(2)';
		_content_border.style.opacity = '0';
		_content_p_right.style.marginRight = '-50px';
		_content_p_right.style.opacity = '0';
		contents.style.marginLeft = '-50px';
		contents.style.opacity = '0';
		
		_right.style.top = '200px';
		_right.style.opacity = '0';
	}
	// 底部透明的变化
	function _opcity(){
		for(var i = 0 ; i < _content_ul_li.length;i++){
			_content_ul_li[i].style.opacity = '0';	
		}
	}
	//底部上升的效果
	function to_top(){
		_content_ul.style.top = '0px';
	}
}