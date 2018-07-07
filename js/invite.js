window.onload = function(){

	var nums = 0;
	var _left_top = document.getElementsByClassName('_left_top')[0];
	var _left_ul = document.getElementsByClassName('_left_ul')[0];
	var _left_ul_li = _left_ul.getElementsByTagName('li');
	var invite = document.getElementsByClassName('invite')[0];

	// 左边部分点击时显示和隐藏
	_left_top.onclick = function(){

		if (nums %2 == 0) {
			invite.style.right = '0px';
			_left_top.style.background = 'url(../img/index_img/1.jpg) no-repeat';
			for( var i = 0 ; i < _left_ul_li.length;i++){
				_left_ul_li[i].style.marginLeft = '-5px';

			}
		}else{
			invite.style.right = '67px';
			_left_top.style.background = 'url(../img/index_img/img1.png) no-repeat -13px -30px';	
			for( var i = 0 ; i < _left_ul_li.length;i++){
				_left_ul_li[i].style.marginLeft = '-210px';
			}
		}

		nums++;
	}


	//滑动块部分
	var _uls = document.getElementsByClassName('_uls')[0];
	var three = document.getElementsByClassName('three')[0];
	var _a = _uls.getElementsByTagName('a');
	var _h = document.getElementsByClassName('_h')[0];
	var invite_ul = document.getElementsByClassName('invite_ul')[0];
	var _em = document.getElementsByClassName('_em')[0];
	// alert(invite_ul.innerHTML)
	var _text = ['<li>1,有网站、手机端等交互设计相关经验者优先；</li><li>2,熟练应用axure等交互设计软件；</li><li>3,有较强的理解/沟通/逻辑思维能力，责任心强，积极好学。</li>',
				'<li>1,有品位的你关注流行视觉并能善于融汇吸收</li><li>2,善于沟通，不错的协同工作能力<li><li>3,美术基础不错，对互联网产品的视觉设计更是轻车熟路</li><li>4,随和并容易相处的你，但也是很有性格的</li>',
				'<li>1,接洽各行业客户，参与项目前期咨询、策划，重点完成方案撰写，项目计划，现场演示，合同谈判等工作</li><li>2,负责与客户相关的全部商务工作， 完成既定的业绩目标</li><li>协调整体项目进度、协调客户与项目组的沟通，解决项目过程中的各类商务问题</li>',
				'<li>1,一年以上PHP + Mysql开发经验，熟练掌握PHP，SQL语言，理解PHP面向对象</li><li>2,了解比较流行的框架原理和MVC模式</li><li>3,拥有良好的代码习惯，如代码结构清晰，命名规范，逻辑性强，冗余率低</li><li>4,熟悉Web Api开发，了解OAuth2开发标准</li><li>5,熟悉Html5，Css，熟练掌握Javascript者佳</li>',
				'<li>1,一年以上.Net B/S平台经验</li><li>2,精通C#，Asp.Net MVC5，对面向对象有较深刻理解，较强的系统分析与设计能力</li><li>3,熟练 SQL Server 2005或以上，熟悉SQL语言，存储过程等</li><li>4, 熟悉三层架构， 团队协同开发</li><li>5,熟悉Web Api开发，熟练掌握Html，Css，Javascript</li>',
				'<li>1,一年以上Java开发经验</li><li>2,熟悉Java编程、面向对象、面向接口开发、设计模式和组件技术</li><li>3,常用的开源框架(Spring Boot、Spring MVC、Mybatis等)，熟悉Oracle或Mysql数据库设计</li><li>4,熟悉Web Api开发，熟练掌握Html，Css，Javascript</li><li>5,有大型网站开发经验、熟悉Spring Cloud、Docker、分布式系统等佳</li>',
				'<li>1,精通Html5、Css3等前端技术，熟悉网页架构和布局</li><li>2,熟练掌握JQuery，熟悉(NodeJS，Vue2.0，ReactJS，ThreeJS，Ember，Bootstrap3等)任意两种</li><li>3,熟练掌握Photoshop，熟悉Sublime或其他前端编写软件</li><li>4,了解移动端混合开发、小程序、前端工程化</li>'
		]	
	// alert(text1.length)	
	for(var i = 0 ;i < _a.length;i++){
		_a[i].index = i;
		_a[i].onmouseover = function(){
			for(var i = 0 ; i < _a.length ; i++){
				three.style.top = (38*[this.index] + 25) + 'px';
				_a[i].style.background = 'transparent';
				_a[this.index].style.background = '#aec23f';
				_h.innerHTML = _a[this.index].innerHTML;
				invite_ul.innerHTML = _text[this.index];
				_em.innerHTML = this.index + 1;
			}
		}
	}













}