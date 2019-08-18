const infinite = function(logic) {
	window.onscroll = (e) => {
		// winodw에 스크롤 이벤트가 발생할 때 윈도우가 맨 밑에 닿으면 해당 기능 true 반환
		// document.documentElement는 HTML을 반환한다. 즉 브라우저 창의 영역이다.
		// 브라우저 창의 스크롤의 이동 거리와 window 뷰포트 창의 거리가 = 전체 스크린의 높이값과 일치하면 logic()을 실행한다.
		let bottomOfWindow =
			document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
		if (bottomOfWindow) {
			logic();
		}
	};
};

export default infinite;
