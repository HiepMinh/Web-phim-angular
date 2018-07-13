import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Http, Response } from "@angular/http";
import { Movie } from '../../Models/Movie.class';
import { MovieService } from "./../../Services/movie.service";
import { Subscription } from 'rxjs';

import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
	selector: 'app-quan-li-phim',
	templateUrl: './quan-li-phim.component.html',
	styleUrls: []
})
export class QuanLiPhimComponent implements OnInit {


	public CallModalThem:boolean = false;
	public entryMovie: number = 5;
	private DanhSachPhimServices: Array<Movie>;
	public unsubDSP: Subscription;
	public TrailerURL: SafeResourceUrl;
	public CallTrailer: boolean = false;
	public MovieDetail:any = {};
	public CallModalSua:boolean = false;

	constructor(
		private MovieService: MovieService, 
		private sanitizer:DomSanitizer
	) { }

	ngOnInit() {
		this.unsubDSP = this.MovieService.layDanhSachPhim()
			.subscribe((res: Array<Movie>) => {
				this.DanhSachPhimServices = res;
				console.log(this.DanhSachPhimServices);
			}, error => {
				this.DanhSachPhimServices = error;
				console.log(this.DanhSachPhimServices);
			})
	}
	showTrailer(e) {
		event.preventDefault();
		this.CallTrailer = true;
		this.TrailerURL = this.sanitizer.bypassSecurityTrustResourceUrl(e.replace("watch?v=", "embed/") + "?autoplay=1");
	}
	CallModalThemPhim(){
		event.preventDefault();
		this.CallModalThem = true;
	}
	CreateMovie(movie: Movie, files: any, date: any) {
		let file = files[0];
		//service upload file
		var formData: FormData = new FormData();
		formData.append('Files', file);
		formData.append('TenPhim', movie.TenPhim);
		//upload anh 
		this.MovieService.uploadFile(formData).subscribe(
			data => { },
			error => {
				console.log(error);
			});
		//Them Phim
		movie.HinhAnh = file.name;
		movie.MaNhom = "GP07";
		movie.NgayKhoiChieu = date.value;
		movie.DanhGia = 3;
		this.MovieService.createMovie(movie)
			.subscribe(
				data => {
					console.log(movie);
					console.log(data);
				},
				error => {
					console.log(movie);
					console.log(error);
				});;
	}


	xoaPhim(id: any) {
		this.MovieService.DeleteMovie(id)
			.subscribe((res: any) => {
				console.log(res);
			}, err => console.log(err))
	}
	CallModalSuaPhim(id){
		event.preventDefault();
		this.CallModalSua = true;
		this.MovieService.getDetailMovieByGroup(id)
						.subscribe((res) => {
							this.MovieDetail = res;
							// let file = files[0];
							console.log(res.HinhAnh);
							this.MovieDetail.HinhAnh = res.HinhAnh;
							console.log(this.MovieDetail);
						}, err => console.log(err));
	}
	CapNhatPhim(MovieEdit, files, date){
		if(files.value != null){
			let file = files[0];
			// service upload file
			var formData: FormData = new FormData();
			formData.append('Files', file);
			formData.append('TenPhim', MovieEdit.TenPhim);
			//upload anh 
			this.MovieService.uploadFile(formData).subscribe(
				data => { },
				error => {
					console.log(error);
				});
			MovieEdit.HinhAnh = file.name;
			
		}
		else{
			MovieEdit.HinhAnh = this.MovieDetail.HinhAnh;
		}
		MovieEdit.MaNhom = "GP07";
		MovieEdit.NgayKhoiChieu = date.value;
		MovieEdit.DanhGia = 3;
		
		this.MovieService.EditPhim(MovieEdit)
					.subscribe((res) => {
						console.log(res);
					}, err => console.log(err))

		// console.log(MovieEdit);
		// console.log(file);
		console.log(date);
	}
	ngAfterContentChecked() {
		//Called after every check of the component's or directive's content.
		//Add 'implements AfterContentChecked' to the class.
		// this.MovieService.layDanhSachPhim()
		// 	.subscribe((res: Array<Movie>) => {
		// 		this.DanhSachPhimServices = res;
		// 	})
			console.log("dâdda");
	}


}
