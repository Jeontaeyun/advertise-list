import axios from 'axios';

const getAxios = (function() {
	const getPostList = function(that) {
		that.$http
			.get(`request.php`, {
				params: {
					page: that.page,
					ord: that.ord ? 'asc' : 'desc'
				}
			})
			.then((result) => {
				// 마지막 데이터이면 해당 기능 멈춰줘야하는데...
				return (that.posts = that.posts.concat(result.data.list));
			});
	};

	const getCategory = function(that) {
		that.$http.get(`category.php`).then((result) => {
			that.category = that.category.concat(result.data.list);
		});
	};

	const getDetailPage = function(that) {
		that.$http.get(`detail.php?req_no=${that.$route.params.id}`).then((result) => {
			// Vue에서 객체를 반응형으로 삽입해주는 방법
			that.article = Object.assign({}, that.article, result.data.detail.article);
			that.replies = that.replies.concat(result.data.detail.replies);
		});
	};

	const getAds = function(that) {
		that.$http
			.get(`ads.php`, {
				params: { page: Math.round(that.postNumber / 4), limit: 1 }
			})
			.then((result) => {
				that.title = result.data.list[0].title;
				that.contents = result.data.list[0].contents;
				that.img = `http://comento.cafe24.com/public/images/${result.data.list[0].img}`;
				that.$forceUpdate();
			});
	};

	return { getPostList, getCategory, getDetailPage, getAds };
})();

export default getAxios;
