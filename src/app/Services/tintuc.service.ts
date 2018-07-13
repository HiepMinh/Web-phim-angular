import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TintucService {

	public News_1:Array<any> = [
		{
			image : "./../../assets/images/news-madmax-1.jpg",
			title : "Những bộ phim để khán giả đợi đến 'dài cổ' nhưng sau tất cả lại vô cùng tuyệt vời",
			description: "Dẫu biết áp lực doanh thu khiến các hãng phim phải liên tục sản xuất các phần tiếp theo nhưng khiến người xem chờ đợi lâu đến như thế thì thật ",
			like : 12,
			comment : 4,
			view : 6969,
			author: "Spider Man"
		},
		{
			image : "./../../assets/images/news-valak.jpg",
			title : "Hot Girl Valak đến rồi, chạy ngay đi!",
			description: "Chị Ấy Đã trở lại, kinh hãi và sẽ ăn hại hơn xưa.",
			like : 123,
			comment : 10,
			view : 6969,
			author: "Iron Man"
			
		},
		{
			image : "./../../../assets/images/news-avenger-1.jpg",
			title : "Hết chiêu mộ đạo diễn Thor: Ragnarok, Akira lại tuyển tiếp Giám đốc mỹ thuật của Infinity War",
			description: "Hãng Warner Bros. vừa thông báo đã tuyển mộ thành công Giám đốc mỹ thuật David Scott của Avengers: Infinity War để chỉ đạo tổ thiết kế của live-action Akira. Đây là dấu hiệu cho thấy dự án sẽ sớm bước vào giai đoạn sản xuất.",
			like : 123,
			comment : 10,
			view : 6969,
			author: "Captain America"
		},
		{
			image : "./../../assets/images/news-incre-2.jpg",
			title : "[Quăng Tim Ném Đá] Incredibles 2: Khán giả 123Phim nói gì?",
			description: "Siêu phẩm hoạt hình của Pixar có xứng đáng 14 năm chờ đợi như lời đồn?",
			like : 12,
			comment : 10,
			view : 69,
			author: "Thor"
		},
	];

	public news_2:Array<any> = [
		{
			image : "./../../assets/images/news-hvv.jpg",
			title : "Hứa Vĩ Văn 'lột xác' với vai thanh tra K trong Ống Kính Sát Nhân",
			description: "Tạo hình mới của anh chàng này có điểm gì đặc biệt?"
		},
		{
			image : "./../../assets/images/news-brother-1.jpg",
			title : "Brother Of The Year - Người anh em của Bad Genius sắp tấn công phòng vé Việt rồi đấy!",
			description: "Lý do gì mà tác phẩm hài - tình cảm này tự tin sẽ khiến khán giả “chết mê chết mệt?"
		},
		{
			image : "./../../assets/images/news-jw-1.jpg",
			title : "Jurassic World: Fallen Kingdom thống lĩnh phòng vé thế giới tuần đầu ra mắt",
			description: "Các chú khủng long tranh thủ hoành hành tại phòng vé trước thềm World Cup 2018."
		},
		{
			image : "./../../assets/images/news-thor-1.jpg",
			title : "Chris Hemsworth hóa trùm giáo phái trong phim mới của đạo diễn Cabin in the Woods",
			description: "Dù vào vai thủ lĩnh giáo phái “biến thái”, Thần Sấm vẫn quyến rũ khó cưỡng.."
		},
		{
			image : "./../../assets/images/news-ww-1.jpg",
			title : "Phi công 'trên trung bình' Chris Pine bất ngờ hồi sinh trong Wonder Woman 2",
			description: "Nữ đạo diễn Patty Jenkins cũng hé lộ tựa đề chính thức của phần hai - Wonder Woman 1984."
		},
		{
			image : "./../../assets/images/news-ww-1.jpg",
			title : "Phi công 'trên trung bình' Chris Pine bất ngờ hồi sinh trong Wonder Woman 2",
			description: "Nữ đạo diễn Patty Jenkins cũng hé lộ tựa đề chính thức của phần hai - Wonder Woman 1984."
		},
		{
			image : "./../../assets/images/news-ww-1.jpg",
			title : "Phi công 'trên trung bình' Chris Pine bất ngờ hồi sinh trong Wonder Woman 2",
			description: "Nữ đạo diễn Patty Jenkins cũng hé lộ tựa đề chính thức của phần hai - Wonder Woman 1984."
		},
		{
			image : "./../../assets/images/news-ww-1.jpg",
			title : "Phi công 'trên trung bình' Chris Pine bất ngờ hồi sinh trong Wonder Woman 2",
			description: "Nữ đạo diễn Patty Jenkins cũng hé lộ tựa đề chính thức của phần hai - Wonder Woman 1984."
		},
		{
			image : "./../../assets/images/news-ww-1.jpg",
			title : "Phi công 'trên trung bình' Chris Pine bất ngờ hồi sinh trong Wonder Woman 2",
			description: "Nữ đạo diễn Patty Jenkins cũng hé lộ tựa đề chính thức của phần hai - Wonder Woman 1984."
		},
		{
			image : "./../../assets/images/news-ww-1.jpg",
			title : "Phi công 'trên trung bình' Chris Pine bất ngờ hồi sinh trong Wonder Woman 2",
			description: "Nữ đạo diễn Patty Jenkins cũng hé lộ tựa đề chính thức của phần hai - Wonder Woman 1984."
		},
		{
			image : "./../../assets/images/news-ww-1.jpg",
			title : "Phi công 'trên trung bình' Chris Pine bất ngờ hồi sinh trong Wonder Woman 2",
			description: "Nữ đạo diễn Patty Jenkins cũng hé lộ tựa đề chính thức của phần hai - Wonder Woman 1984."
		},
		{
			image : "./../../assets/images/news-ww-1.jpg",
			title : "Phi công 'trên trung bình' Chris Pine bất ngờ hồi sinh trong Wonder Woman 2",
			description: "Nữ đạo diễn Patty Jenkins cũng hé lộ tựa đề chính thức của phần hai - Wonder Woman 1984."
		}
	]
	getNews_1():Array<any>{
		return this.News_1;
	}
	getNews_2():Array<any>{
		return this.news_2;
	}

  constructor() { }
}
