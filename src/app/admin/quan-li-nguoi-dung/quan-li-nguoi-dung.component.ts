import { Component, OnInit } from '@angular/core';
import { UserService } from "./../../Services/user.service";
import { MovieService } from '../../Services/movie.service';

@Component({
	selector: 'app-quan-li-nguoi-dung',
	templateUrl: './quan-li-nguoi-dung.component.html',
	styleUrls: []
})
export class QuanLiNguoiDungComponent implements OnInit {
	private ListNguoiDung: Array<any>;
	private typeUser: Array<any>;
	public CallModalThem: boolean = false;
	public CallModalSua:boolean = false;
	public UserDetail:any = {};
	public entryUser:number = 4;
	constructor(
		private _UserService: UserService,
		private MovieService:MovieService
	) { }
	ngOnInit() {
		this._UserService.getListUser()
			.subscribe((res: Array<any>) => {
				this.ListNguoiDung = res;
				console.log(this.ListNguoiDung);
			}, err => {
				this.ListNguoiDung = err;
			})
		this._UserService.getTypeUser()
			.subscribe((res: any) => {
				this.typeUser = res;
				console.log(this.typeUser);
			}, err => {
				this.typeUser = err;
			})

	}
	CallModalThemPhim(){
		event.preventDefault();
		this.CallModalThem = true;
	}
	ThemNguoiDung(user, type){
		event.preventDefault();
		user.MaNhom = "GP07";
		user.MaLoaiNguoiDung = type.value;
		this._UserService.RegisterAccount(user)
						.subscribe((res) => {
							console.log(res)
						}, err => {
							console.log(err);
						})
	}
	xoaNguoiDung(taikhoan){
		event.preventDefault();
		console.log(taikhoan);
		// this._UserService.XoaNguoiDungService(taikhoan)
		// 				.subscribe((res) => {
		// 					console.log(res);
		// 				}, err => {
		// 					console.log(err);
		// 				})
	}
	CallModalSuaNguoiDung(taikhoan){
		event.preventDefault();
		this.CallModalSua = true;
		this._UserService.layLichSuDatVe(taikhoan)
						.subscribe((res) => {
							this.UserDetail = res;
							console.log(this.UserDetail);
						})
	}
	CapNhatNguoiDung(user){
		event.preventDefault();
		console.log(user);
		this._UserService.CapNhatThongTinNguoiDung(user)
						.subscribe((res) => {
							console.log(res);
						})
	}
}
