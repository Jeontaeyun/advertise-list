const infinite = function(logic) {
	window.onscroll = (e) => {
		let bottomOfWindow =
			document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
		if (bottomOfWindow) {
			logic();
		}
	};
};

export default infinite;
