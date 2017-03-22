$(".justjoinbtn").one('click', function(event) {
	alert("恭喜打卡成功");	
	$(".justjoinbtn").remove();
	$(".justjoin").html('<button class="watchAchievement">查看打卡成就</button>');
});



$(".justjoin").on('click', '.watchAchievement', function(event) {
	window.location.href="./clockachievement.html";
});

