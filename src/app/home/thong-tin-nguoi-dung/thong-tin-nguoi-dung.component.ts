import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../Services/movie.service';
import { Subscription } from 'rxjs';
import { UserService } from '../../Services/user.service';
import { SweetAlertService } from '../../Services/sweet-alert.service';

declare let $:any;

@Component({
	selector: 'app-thong-tin-nguoi-dung',
	templateUrl: './thong-tin-nguoi-dung.component.html',
	styleUrls: []
})
export class ThongTinNguoiDungComponent implements OnInit {
	private ThongTinTaiKhoan:any = {};
	private XacNhanMatKhauCu:boolean = true;
	private unsub_1:Subscription;
	public divShowing: string = "FormInfo";
	public entriesLSDV:number = 4;

	constructor(
		private UserService:UserService,
		private AlerService:SweetAlertService
	) { }

	ngOnInit() {
		let user = JSON.parse(localStorage.getItem("user"));
		this.unsub_1 = this.UserService.layLichSuDatVe(user.TaiKhoan)
										.subscribe((res) => {
											this.ThongTinTaiKhoan = res;
											console.log(this.ThongTinTaiKhoan );
										})
	}

	CapNhatThongTin(userInfo:any){
		userInfo.MaLoaiNguoiDung = "KhachHang";
		userInfo.MaNhom = "GP07";
		userInfo.MatKhau = this.ThongTinTaiKhoan.MatKhau;

		this.UserService.CapNhatThongTinNguoiDung(userInfo)
						.subscribe((res:any) => {
							this.AlerService.toastRight("Cập Nhật Thành Công!!!");
						});

	}

	showThongTinTrongForm(){

	}
	XacNhanMK(mkc, mk){
		if(mkc === this.ThongTinTaiKhoan.MatKhau){
			this.XacNhanMatKhauCu = false;
			this.AlerService.toastRight("Xác Nhận Thành Công!!");
			$("#modalXacNhanMK").modal("hide");
		}
		else{
			this.AlerService.toastRight_err("Mật Khẩu Không Trùng Khớp!!");
			return false;
		}
	}
	setShowDiv(btn) {
		event.preventDefault();
		$(".linkHeading").removeClass("active");
		$(btn).addClass("active");
		this.divShowing = btn.getAttribute("data-setShow");
	}

	ngOnDestroy(): void {
		this.unsub_1.unsubscribe();
	}

}
