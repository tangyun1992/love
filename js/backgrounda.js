$(document).ready(function(){
	var boy=$("#boy");
	var sun=$(".sun");
	var bird=$(".bird")
	boy.addClass('slowWalk');
	bird.addClass('birdMove');
	var timer=setInterval(function(){
		var me=bird;
		me.css("right",parseFloat(me.css('right')) + 3 + 'px');
	},100);
	//jquery的Deferred处理
	function animate1(){
		var dtd=$.Deferred();
		boy.animate({
			left:"730px"
		},7000,function(){
			dtd.resolve();
		});
		return dtd;
	}

	function animate2(){
		var dtd=$.Deferred();
		$(".container ul").animate({
			left:"-1441px"
		},14000,function(){
			dtd.resolve();
		});
		return dtd;
	}
	function animate3(){
		var dtd=$.Deferred();
		var door=$(".door");
		door.addClass('Door');
		$(".background_b").addClass('backgrounB_b');
		setTimeout(function(){
			door.removeClass('Door');
			door.css("display","none");
			boy.addClass('personSmall');
			setTimeout(function(){
				boy.removeClass('personSmall');
				boy.addClass('personBig');
				setTimeout(function(){
					boy.removeClass('personBig');//关门
					door.css("display","block");
					door.addClass('DoorClose');
					boy.removeClass('slowWalk');
					boy.addClass('slowFlowerWalk');
					setTimeout(function(){
						door.removeClass('DoorClose');
						$(".background_b").removeClass('backgrounB_b');
					// 	boy.removeClass('slowWalk');
					// 	boy.addClass('slowFlowerWalk');
					$(".container ul").addClass('backgroundMove');
					boy.animate({
							left:"100px",
						},8800,function(){});
					setTimeout(function(){
						$(".container ul").css("left","-2803px");
						$(".container ul").removeClass('backgroundMove');
					},8800);
					boy.animate({
							left:"513px",
							top:"358px"
						},5800,function(){
							boy.css("background-position","-453px 0px");
							boy.removeClass('slowFlowerWalk');
							setTimeout(function(){
								$("#girl").addClass('girlTurn');
								boy.addClass('boyTurn');
								setTimeout(function(){
									$("#girl").removeClass('girlTurn');
									boy.removeClass('boyTurn');
									boy.css("background-position","-628px -295px");
									$("#girl").css("background-position","-600px 0px");
								},1000);
							},2000);
						});
					dtd.resolve();
					return dtd;
					},2000);
				},1000);
			},1000);
		},2000);
	}
	function animate4(){
		// var dtd=$.Deferred();
		// $(".container ul").addClass('backgroundMove');
		// setTimeout(function(){
		// 	$(".container ul").css("left","2442px");
		// 	$(".container ul").removeClass('backgroundMove');
		// },7800);
		// boy.animate({
		// 	left:"330px"
		// },7000,function(){
		// 	dtd.resolve();
		// });
		// return dtd;
	}
	var anim = animate1();
	anim.then(function(){
		return animate2();
	}).then(function(){
		return animate3();
	}).then(function(){
		return animate4();
	}).then(function(){});
});
// function sleep(numberMillis) {
//    var now = new Date();
//    var exitTime = now.getTime() + numberMillis;
//    while (true) {
//        now = new Date(); 
//        if (now.getTime() > exitTime)    return;
//     }
// }

//boy.addClass('pauseWalk');