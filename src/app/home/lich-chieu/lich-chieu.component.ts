import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Services/movie.service';

import * as $ from 'jquery';

@Component({
	selector: 'app-lich-chieu',
	templateUrl: './lich-chieu.component.html',
	styleUrls: []
})
export class LichChieuComponent implements OnInit {


	public RapChieuPhim: Array<any>;
	public ChiTietLichChieu:Array<any>;
	public urlImage: string = "./../../../assets/images/";
	public urlImagesLichChieu:string = "./../../../assets/images/";


	constructor(private MovieService: MovieService) { }

	ngOnInit() {
		this.RapChieuPhim = this.MovieService.GetRapChieuPhim();
		this.ChiTietLichChieu = this.MovieService.GetChiTietLichChieu();
	}

	showRapChieu(e, item){
		event.preventDefault();
		console.log(e);
		console.log(item);
		$(".divRapChieu li").removeClass("active");
		$(item).addClass("active");

		// $(item).addClass("active");
		$(".divLichChieu .container").removeClass("active");
		$(`#RapActive_${e}`).addClass("active");
	}
	showPhimChieu(item){
		event.preventDefault();
		$(".one-block-gio-chieu").removeClass("active");
		$(`#PhimRap_${item.split("_")[1]}`).addClass("active");
		$(".one-block-rap").removeClass("active");
		$(item).addClass("active");
	}

}
