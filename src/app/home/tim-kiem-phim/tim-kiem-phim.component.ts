import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { MovieService } from "./../../Services/movie.service";
import { Movie } from '../../Models/Movie.class';

@Component({
	selector: 'app-tim-kiem-phim',
	templateUrl: './tim-kiem-phim.component.html',
	styleUrls: []
})
export class TimKiemPhimComponent implements OnInit {

	private DanhSachPhimService: Array<Movie>;
	private DanhSachCanTim:Array<Movie> = [];
	constructor(private _MovieService: MovieService) { }
	@ViewChild("inputTimKiem") inputTimKiem:ElementRef;
	ngOnInit() {
		this._MovieService.layDanhSachPhim().subscribe((res: Array<Movie>) => {
			this.DanhSachPhimService = res;
			
		}, err => {
			this.DanhSachPhimService = err;
		})
	}



	findMovie(key: string) {
		this.DanhSachCanTim = [];
		let TuKhoaPhim = key.toLowerCase().trim();
		if(TuKhoaPhim === ""){
			return false;
		}
		this._MovieService.TimPhimTheoTen(this.DanhSachPhimService, this.DanhSachCanTim ,TuKhoaPhim);
		console.log(this.DanhSachCanTim);
	}
	ngAfterContentChecked() {
		//Called after every check of the component's or directive's content.
		//Add 'implements AfterContentChecked' to the class.
		$("#modalTimKiem").on("hidden.bs.modal", () => {
			this.inputTimKiem.nativeElement.value = "";
			this.DanhSachCanTim = [];
		})
	}
}
