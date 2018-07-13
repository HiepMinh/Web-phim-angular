import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { MovieService } from "./../../Services/movie.service";
declare var $: any;
// import * as $ from 'jquery';


@Component({
	selector: 'app-chi-tiet-phim',
	templateUrl: './chi-tiet-phim.component.html',
	styleUrls: []
})
export class ChiTietPhimComponent implements OnInit, OnDestroy {
	public param1: Subscription;
	public RapChieuPhim: Array<any>;
	public StateLichChieu:boolean;
	public MovieDetail: any = {};
	public MovieID: number;
	public Show: boolean = true;
	public rate: number;
	public Trailer: string;
	public urlImage: string = "./../../../assets/images/";
	public stateDangNhap: boolean = false;
	public divShowing: string = "divDatVe";
	public LoadingService:boolean = false;

	constructor(
		private movieDetailSer: MovieService,
		private Activated: ActivatedRoute,
		private Router: Router,
		private DomSanitizer: DomSanitizer
	) {

	}
	
	ngOnInit() {
		this.Activated.queryParams.subscribe(thamso => {
			this.MovieID = parseInt(thamso.id);
		})
		this.movieDetailSer.getDetailMovieByGroup(this.MovieID)
			.subscribe((res: any) => {
				this.MovieDetail = res;
				this.Trailer = (this.MovieDetail.Trailer).replace("watch?v=", "embed/");
				const ratings = this.MovieDetail.DanhGia;
				const rateTotal = 5;
				const starPercent = (ratings / rateTotal) * 100;
				const starPercentRounded = `${Math.round(starPercent / 10) * 10}%`;
				$(".stars-inner").css({ "width": starPercentRounded });
				this.StateLichChieu = (this.MovieDetail.LichChieu.length !== 0) ? true : false;
				this.LoadingService = true;
			}, error => console.log(error))
		this.RapChieuPhim = this.movieDetailSer.GetRapChieuPhim();
	}


	setShowDiv(btn) {
		event.preventDefault();
		$(".linkHeading").removeClass("active");
		$(btn).addClass("active");
		this.divShowing = btn.getAttribute("data-setShow");
	}

	chooseDate(date, item) {
		$(".one-block-ngay-chieu").removeClass("active");
		$(date).addClass("active");

		$(".one-block-gio-chieu").removeClass("active");
		$(`#GioChieu_${date.id.split("_")[1]}`).addClass("active");
	}
	triggerDangNhap() {
		$("#modalDangNhap").modal("show");
	}

	ngOnChanges(a): void {

	}
	ngOnDestroy() {
		
		
	}
	ngAfterViewInit() {

	}
	ngAfterContentInit() {
		//Called after ngOnInit when the component's or directive's content has been initialized.
		//Add 'implements AfterContentInit' to the class.
	}
	ngAfterContentChecked() {
		//Called after every check of the component's or directive's content.
		//Add 'implements AfterContentChecked' to the class.
		let flag = localStorage.getItem("user");
		if (flag) {
			this.stateDangNhap = true;
		}
		else {
			this.stateDangNhap = false;
		}
	}
}

