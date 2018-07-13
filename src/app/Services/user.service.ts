import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map";

import { UserSignUp } from "./../Models/UserSignUp.class";
import { UserRegister } from "./../Models/UserRegister.class";


@Injectable({
	providedIn: 'root'
})
export class UserService {
	public MaNhom: string = "GP07";
	public apiHTTP: string = "http://sv2.myclass.vn/api/QuanLyNguoiDung/";

	private apiURLRegister: string = `${this.apiHTTP}ThemNguoiDung`;
	private apiURLDanhSachND: string = `${this.apiHTTP}LayDanhSachNguoiDung?MaNhom=${this.MaNhom}`;
	private apiURLLoaiND: string = `${this.apiHTTP}LayDanhSachLoaiNguoiDung`;
	private apiURLCapNhatND:string = `${this.apiHTTP}CapNhatThongTin`;
	constructor(
		private _http: Http
	) { }

	//đăng kí
	RegisterAccount(user: UserRegister): Observable<UserRegister> {
		let header: Headers = new Headers();
		header.append("Content-Type", "application/json;charset=UTF-8");
		// let body = `data=${JSON.stringify(user)}`;
		var observe = this._http.post(this.apiURLRegister, user, { headers: header })
			.map((res: Response) => res.json());
		return observe;
	}

	//đăng Nhập
	SignUpAccount(user: any): Observable<UserSignUp> {
		const apiURLSignUp: string = `${this.apiHTTP}DangNhap?TaiKhoan=${user.TaiKhoan}&matkhau=${user.MatKhau}`;
		let header = new Headers();
		header.append("Content-Type", "application/json;charset=UTF-8");
		// let body = `data=${JSON.stringify(user)}`;
		let observe = this._http.post(apiURLSignUp, { headers: header })
			.map((res: Response) => res.json());
		return observe;
	}

	//lấy danh sách người dùng
	getListUser(): Observable<any[]> {
		return this._http.get(this.apiURLDanhSachND)
			.map((res: Response) => res.json());
	}
	//lấy loại người dùng
	getTypeUser(): Observable<any[]> {
		return this._http.get(this.apiURLLoaiND)
			.map((res: Response) => res.json());
	}
	//lấy lịch sử đặt vé
	layLichSuDatVe(taikhoan:string):Observable<any>{
		let header = new Headers();
		header.append("Content-Type", "application/json;charset=UTF-8");
		return this._http
			.post(`http://sv2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${taikhoan}`, { headers: header })
			.map((res:Response) => res.json());
	}
	//Cập Nhật Thông Tin Người Dùng
	CapNhatThongTinNguoiDung(nguoidung:any){
		let header = new Headers();
		header.append("Content-Type", "application/json;charset=UTF-8");
		return this._http.post(this.apiURLCapNhatND,nguoidung, {headers : header})
						.map((res:Response) => res.json());
	}
	//xoá Người Dùng
	XoaNguoiDungService(taikhoan){
		return this._http.delete(`${this.apiHTTP}XoaNguoiDung?TaiKhoan=${taikhoan}`)
						.map((res) => res.json());
	}
}
