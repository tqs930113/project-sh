var toggleNavBtnState = function() {
	var $btn = $('#nav-btn')
	var $more = $('#more')
	var $up = $('#up')
	var $menu = $('#menu')
	
	$btn.bind('click',function(event){
		event.stopPropagation()
		//点击菜单按钮，切换按钮的显示
		$more.toggleClass('show')
		$up.toggleClass('show')
		//切换菜单的展开状态
		$menu.toggleClass('menu-open')
	})
	$(document).on('click',function(event){
		if($menu.hasClass('menu-open')){
			$menu.removeClass('menu-open')
		}
	})
};

$(document).ready(function(){
	toggleNavBtnState()
})
