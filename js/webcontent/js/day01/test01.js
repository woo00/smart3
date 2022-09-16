//2단 구구단을 출력해보자.

//w3. 컬러 클래스배열 
var wcolor = [
	'w3-yellow',// 위치값 0
	'w3-amber', // 위치값 1
	'w3-orange',
	'w3-deep-orange',
	'w3-red',
	'w3-pink',
	'w3-purple',
	'w3-deep-purple',
	'w3-indigo',
	'w3-blue',
	'w3-cyan',
	'w3-teal',
	'w3-green',
	'w3-light-green',
	'w3-lime'
]; // javascript 배열


var dan = 2;

for(i = 0; i < 9 ; i++){
	let gop = i + 1;
	var result =dan * gop;
	console.log(dan + ' x ' + gop + ' = ' + result);
}

var str = '';
/*
for(i = 0; i < 5 ; i++){
	for(j = 0 ; j < 3 ; j++ ){
		str = '<br>' + '우영씨가 코딩을 합니다.';
	}
	for(k = 0 ; k < 5 ; k++){
		str += '<br>' + '선생님이 숙제를 내줍니다.';
	}	
	str += '<br>==========================================='
}
*/
//document.getElementById('board').innerHTML = str;
for(dan = 2 ; dan < 10 ; dan++ ){
	let tmp = '<div class="inblock w150 w3-card-4 w3-border glbl">' +
				'<h2 class="w3-col '+ wcolor[dan - 2] +' w3-center" style="margin: 0px!important;">' + dan + '단</h2>' +
				'<div class="w3-col">';
	for(gop = 1 ; gop < 10 ; gop++){
					tmp = tmp + '<p>'+ dan + ' x ' + gop + ' = ' + (dan*gop) + '</p>';
	}
				
	tmp = tmp + '</div>' +
			'</div>';
	str += tmp;		
}
document.getElementById('board').innerHTML = str;
console.log('------------------------------------------------------------')