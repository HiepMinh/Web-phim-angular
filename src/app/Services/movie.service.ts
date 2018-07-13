import { Injectable } from '@angular/core';

import { Movie } from "./../Models/Movie.class";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable({ providedIn: "root" })
export class MovieService {

	public MaNhom:string = "GP07";

	//quan lí phim
	// private apiCreateMovie: string = `http://sv2.myclass.vn/api/QuanLyPhim/ThemPhimMoi`;
	// private apiUploadFile: string = `http://sv2.myclass.vn/api/QuanLyPhim/UploadFile`;
	// private apiEditPhim: string = `http://sv2.myclass.vn/api/QuanLyPhim/CapNhatPhim`;
	// private apiDeleteMovie:string = `http://sv2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${id}`;
	// private urlListMovie: string = "http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP07";
	// private urlDetailMovie: string = "http://sv.myclass.vn/api/movie/GetMovieDetail";
	// private urlDetailMovieByGroup: string = "http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=1";

	public apiURL:string = "http://sv2.myclass.vn/api/QuanLyPhim/";

	private RapChieuPhim: Array<any> = [
		{
			id: "RapBHD",
			img: "bhd.png",
			name: "BHD",

		},
		{
			id: "RapDDC",
			img: "ddc.jpg",
			name: "DDC",
		},
		{
			id: "RapCGV",
			img: "cgv.png",
			name: "CGV",
		},
		{
			id: "RapLOTTE",
			img: "lotte.png",
			name: "LOTTE",
		}
	];

	public ChiTietLichChieu = [
		{
			id: "RapBHD",
			raps : [
				{
					id : "HBT",
					name: "Hai Bà Trưng",
					diachi: "135 Hai Bà Trưng, Bến Nghé, Q.1",
					hinh: "rap-01.jpg",
					phimChieus: [
						{
							name: "Thế Giới Khủng Long: Vương Quốc Sụp Đổ - Jurassic World: Fallen Kingdom",
							hinh: "small-movie-1.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40",
							]
						},
						{
							name: "Băng Cướp Thế Kỷ: Đẳng Cấp Quý Cô - Ocean's 8",
							hinh: "phim-41.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40"
							]
						},
						{
							name: "Peter Pan: Truy Tìm Quyển Sách Ma Thuật",
							hinh: "movie-5.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40"
							]
						},
					]
				},
				{
					id : "BITEXCO",
					name: "Bitexco",
					diachi: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
					hinh: "rap-02.jpg",
					phimChieus: [
						{
							name: "Peter Pan: Truy Tìm Quyển Sách Ma Thuật",
							hinh: "movie-5.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40"
							]
						},
						{
							name: "Băng Cướp Thế Kỷ: Đẳng Cấp Quý Cô - Ocean's 8",
							hinh: "phim-01.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40",
							]
						},
						{
							name: "Ống Kính Sát Nhân",
							hinh: "phim-02.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40",
							]
						},
						{
							name: "Gia Đình Siêu Nhân 2 - Incredibles 2",
							hinh: "phim-03.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40", "5:30", "6:40"
							]
						}
					]
				},
				

			]
			
		},
		{
			id: "RapDDC",
			raps : [
				{
					id : "HBT",
					name: "Hai Bà Trưng",
					diachi: "135 Hai Bà Trưng, Bến Nghé, Q.1",
					hinh: "rap-01.jpg",
					phimChieus: [
						{
							name: "Thế Giới Khủng Long: Vương Quốc Sụp Đổ - Jurassic World: Fallen Kingdom",
							hinh: "small-movie-1.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40",
							]
						},
						{
							name: "Peter Pan: Truy Tìm Quyển Sách Ma Thuật",
							hinh: "movie-5.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40"
							]
						},
					]
				},
				{
					id : "BITEXCO",
					name: "Bitexco",
					diachi: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
					hinh: "rap-02.jpg",
					phimChieus: [
						{
							name: "Peter Pan: Truy Tìm Quyển Sách Ma Thuật",
							hinh: "movie-5.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40"
							]
						},
						{
							name: "Băng Cướp Thế Kỷ: Đẳng Cấp Quý Cô - Ocean's 8",
							hinh: "phim-01.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40",
							]
						}
					]
				},
				

			]
			
		},
		{
			id: "RapCGV",
			raps : [
				{
					id : "HBT",
					name: "Hai Bà Trưng",
					diachi: "135 Hai Bà Trưng, Bến Nghé, Q.1",
					hinh: "rap-01.jpg",
					
					phimChieus: [
						{
							name: "Peter Pan: Truy Tìm Quyển Sách Ma Thuật",
							hinh: "movie-5.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40"
							]
						},
						{
							name: "Băng Cướp Thế Kỷ: Đẳng Cấp Quý Cô - Ocean's 8",
							hinh: "phim-01.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40",  "5:30", "6:40",
							]
						},
						{
							name: "Thế Giới Khủng Long: Vương Quốc Sụp Đổ - Jurassic World: Fallen Kingdom",
							hinh: "phim-02.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30",
							]
						}
					]
				},
				{
					id : "BITEXCO",
					name: "Bitexco",
					diachi: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
					hinh: "rap-02.jpg",
					phimChieus: [
						{
							name: "Thế Giới Khủng Long: Vương Quốc Sụp Đổ - Jurassic World: Fallen Kingdom",
							hinh: "small-movie-1.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40",
							]
						},
						{
							name: "Peter Pan: Truy Tìm Quyển Sách Ma Thuật",
							hinh: "movie-5.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40"
							]
						},
					]
				},
				

			]
			
		},
		{
			id: "RapLOTTE",
			raps : [
				{
					id : "HBT",
					name: "Hai Bà Trưng",
					diachi: "135 Hai Bà Trưng, Bến Nghé, Q.1",
					hinh: "rap-01.jpg",
					phimChieus: [
						{
							name: "Thế Giới Khủng Long: Vương Quốc Sụp Đổ - Jurassic World: Fallen Kingdom",
							hinh: "small-movie-1.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40",
							]
						},
						{
							name: "Băng Cướp Thế Kỷ: Đẳng Cấp Quý Cô - Ocean's 8",
							hinh: "phim-41.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40"
							]
						},
						{
							name: "Peter Pan: Truy Tìm Quyển Sách Ma Thuật",
							hinh: "movie-5.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40"
							]
						},
					]
				},
				{
					id : "BITEXCO",
					name: "Bitexco",
					diachi: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
					hinh: "rap-02.jpg",
					phimChieus: [
						{
							name: "Peter Pan: Truy Tìm Quyển Sách Ma Thuật",
							hinh: "movie-5.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40"
							]
						},
						{
							name: "Băng Cướp Thế Kỷ: Đẳng Cấp Quý Cô - Ocean's 8",
							hinh: "phim-01.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40",
							]
						},
						{
							name: "Ống Kính Sát Nhân",
							hinh: "phim-02.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40", "5:30", "6:40",
							]
						},
						{
							name: "Gia Đình Siêu Nhân 2 - Incredibles 2",
							hinh: "phim-03.jpg",
							gioChieu: [
								"5:30", "6:40", "5:30", "6:40", "5:30", "6:40"
							]
						}
					]
				},
			]
		}
	]
	public DSPhimSapChieu: Array<any> = [
		{
			name: "Biệt Đội Cún Cưng",
			director: "Raja Gosnell",
			trailer: "https://www.youtube.com/embed/qJTuvua2I_U",
			date: "08.06.2018",
			IMDB: 2.9,
			image: "https://s3img.vcdn.vn/mobile/123phim/2018/05/biet-doi-cun-cung-show-dogs-15274747310384_220x310.jpg",
			description: "Max – một chú chó cảnh sát và cộng sự là con người đang điều tra về một nhóm tội phạm. Chúng lợi dụng 1 chương trình về chó để thực hiện phi vụ phi pháp của minh. Liệu Max và các cộng sự có phá được vụ án khó nhằn này? Liệu chuyện gì sẽ xảy ra?",
		},
		{
			name: "Jurassic World",
			director: "J.A. Bayona",
			trailer: "https://youtu.be/whixKrf1M_k",
			date: "08.06.2018",
			IMDB: 8,
			image: "https://s3img.vcdn.vn/mobile/123phim/2018/06/the-gioi-khung-long-vuong-quoc-sup-do-jurassic-world-fallen-kingdom-c13-15283376537341_220x310.jpg",
			description: "Tất cả những yếu tố kỳ diệu, phiêu lưu, hồi hộp cùng với một trong những thương hiệu nổi tiếng và thành công nhất lịch sự điện ảnh, sự kiện này là một bước chuyển mình về hình ảnh cho thấy sự trở lại của các nhân vật được yêu thích và các loài khủng long đầy cảm hứng và đáng sợ hơn bao giờ hết. Chào mừng đến với Thế Giới Khủng Long: Vương Quốc Sụp Đổ",
		},
		{
			name: "Giành Anh Từ Biển - Adrift",
			director: "Baltasar Kormákur",
			trailer: "https://youtu.be/whixKrf1M_k",
			date: "08.06.2018",
			IMDB: 6.7,
			image: "https://s3img.vcdn.vn/123phim/2018/05/gianh-anh-tu-bien-adrift-2018-15274847136517.jpg",
			description: "Một câu chuyện có thật về sóng gió tình yêu của chàng trai Richard Sharp và cô gái Tami Oldham. Những tưởng sau màn cầu hôn lãng mạn, họ sẽ có những phút giây bình yên bên nhau, cùng du ngoạn biển; nhưng những gì họ phải đối mặt là cơn bão lịch sử lớn nhất Thái Bình Dương, và 41 ngày lênh đênh trên biển sau đó.",
		},
		{
			name: "Gia Đình Siêu Nhân 2 - Incredibles 2",
			director: "Brad Bird",
			trailer: "https://www.youtube.com/embed/GOPNVf7J4PU",
			date: "15.06.2018",
			IMDB: 9.3,
			image: "https://s3img.vcdn.vn/123phim/2018/05/gia-dinh-sieu-nhan-2-incredibles-2-15276517886875.jpg",
			description: "Gia Đình Siêu Nhân 2 đánh dấu những chuyến phiêu lưu anh hùng đầy hấp dẫn với sự đổi vai đầy táo bạo. Lần này, mẹ dẻo Helen (Elastigirl) sẽ đi thực chiến giải cứu thế giới trong khi bố khỏe Bob (Mr. Incredible) lùi về hậu phương trông nom những đứa con siêu nhân láu lỉnh gồm: con gái Violet ( siêu năng lực tàng hình và tạo ra từ trường làm chắn bảo vệ), con trai Dash (chạy siêu nhanh) và cậu út Jack-Jack với sức mạnh chưa được khám phá. Một ác nhân bí ẩn xuất hiện với một âm mưu đáng sợ khiến cho gia đình siêu nhân phải “tái xuất giang hồ”. Liệu gia đình siêu nhân sẽ vượt qua khó khăn này như thế nào?",
		},
		{
			name: "Bad Samaritan",
			director: "Dean Devlin",
			trailer: "https://www.youtube.com/embed/2ZiNWzqll04",
			date: "22.06.2018",
			IMDB: 6.3,
			image: "https://s3img.vcdn.vn/123phim/2018/05/bad-samaritan-15272177700673.jpg",
			description: "Những tên trộm đã vướng phải những rắc rối khi đối diện với người phụ nữ bị nhốt trong ngôi nhà mà họ có ý định cướp.",
		},
		{
			name: "Deadpool 2",
			director: "David Leitch",
			trailer: "https://www.youtube.com/embed/bWaJOmasREE",
			date: "18.05.2018",
			IMDB: 8.3,
			image: "https://s3img.vcdn.vn/mobile/123phim/2018/05/deadpool-2-c18-15265236512573_220x310.jpg",
			description: "Về nội dung, qua trailer có thể thấy, trong phần 2 Deadpool sẽ đối đầu với sát nhân Cable, một kẻ đến từ tương lai với âm mưu giết hại một đứa bé – Người mà theo hắn sau này sẽ trở thành một dị nhân đầy quyền năng. Với nỗ lực đảm bảo sự an toàn cho đứa bé, Deadpool sẽ nhận được sự giúp đỡ từ cả những người bạn mới và cũ, và đặc biệt là các thành viên từ một đội quân mới thành lập có tên X-Force.",
		}
	];
	constructor(private _http: Http) { }
	layDanhSachPhim(): Observable<Movie[]> {
		return this._http.get(`${this.apiURL}LayDanhSachPhim?MaNhom=${this.MaNhom}`)
			.map((res: Response) => res.json());
	}
	// getDetailMovie(maphim: number): Observable<any> {
	// 	return this._http.get(`${this.urlDetailMovie}?id=${maphim}`)
	// 		.map((res: Response) => res.json());
	// }
	getDetailMovieByGroup(id: any) {
		return this._http.get(`${this.apiURL}LayChiTietPhim?MaPhim=${id}`)
			.map((res: Response) => res.json());
	}
	layDanhSachPhimSapChieu(): Array<any> {
		return this.DSPhimSapChieu;
	}
	slPhimSapChieu() {
		return this.layDanhSachPhimSapChieu().length;
	}
	GetRapChieuPhim(): Array<any> {
		return this.RapChieuPhim;
	}
	GetChiTietLichChieu(): Array<any> {
		return this.ChiTietLichChieu;
	}
	TimPhimTheoTen(DSPhim:Array<any>,DSPhimCanTim:Array<any> ,key:string, ){
		for(let i in DSPhim){
			let phimCanTim = DSPhim[i];
			if(phimCanTim.TenPhim.toLowerCase().trim().search(key) !== -1){
				DSPhimCanTim.push(phimCanTim);
			}
		}
		return DSPhimCanTim;
	}
	LayChiTietPhongVe(MaPhongVe:any):Observable<any>{
		return this._http.get(`${this.apiURL}ChiTietPhongVe?MaLichChieu=${MaPhongVe}`)
						.map((res:Response) => res.json());
	}
	DatVe(ve:any){
		let header:Headers = new Headers();
		header.append("Content-Type", "application/json");
		return this._http.post(`http://sv2.myclass.vn/api/QuanLyDatVe/DatVe`, ve, { headers:header })
						.map((res:Response) => res.json());
	}
	createMovie(movie: Movie) {
		let header: Headers = new Headers();
		header.append("Content-Type", "application/json")
		let obServe: Observable<any> = this._http.post(`${this.apiURL}ThemPhimMoi`, movie, { headers: header }).map((result: Response) => result.json());
		return obServe;

	}
	uploadFile(Files: any) {
		let header: Headers = new Headers();
		let options = new RequestOptions({ headers: header });
		let obServe: Observable<any> = this._http.post(`${this.apiURL}UploadFile`,Files
			, options)
			.map((result: Response) => result.json());
		return obServe;

	}
	EditPhim(movieEdit: any) {
		let header: Headers = new Headers();
		header.append('Content-Type', 'application/json');
		header.append('Accept', 'application/json');
		let options = new RequestOptions({ headers: header });
		let obServe: Observable<any> = this._http.post(`${this.apiURL}CapNhatPhim`, movieEdit, options).map((result: Response) => result.json());
		return obServe;
	}

	DeleteMovie(id:any):Observable<any>{
		return 	this._http.delete(`${this.apiURL}XoaPhim?MaPhim=${id}`)
				.map((res:Response) => res.json());
	}

}
