//调用只能输数字函数
onlyNum("register-name");

//动态验证手机号是否正确
//失去焦点时验证
$(".register-name").blur(function(event) {
	var el = $(".register-name");
	if (!/^\d{11}$/.test(el.val())) {
		el.css("border", "1px solid #e22");
	}else {
		el.css("border", "1px solid rgba(255,255,255,0.1)");
	}
});
//聚焦时css恢复
$(".register-name").focus(function(event) {
	var el = $(".register-name");
	el.css("border", "1px solid rgba(127,74,136,1)");
});

//文本框只能输入数字，不能输入小数点和字母 by  john
function onlyNum(name){
  	$("."+name).keydown(function(event){
  		var keyCode = event.which; 
      	if (keyCode == 46 || keyCode == 8 || keyCode == 37 || keyCode == 39 || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) ) { 
      		return true; 
      	}else{return false}
    })
    .focus(function(){ 
    	//关闭输入法
    	//好蠢啊
    	//$(this).css("ime-mode","disabled");
    }); 
}
