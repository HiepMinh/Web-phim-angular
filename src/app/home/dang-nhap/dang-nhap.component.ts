import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UserService } from "./../../Services/user.service";
import { UserSignUp } from "./../../Models/UserSignUp.class";
import { Subscription } from 'rxjs';

import swal from 'sweetalert2'
import { SweetAlertService } from '../../Services/sweet-alert.service';
declare var $: any;

@Component({
	selector: 'app-dang-nhap',
	templateUrl: './dang-nhap.component.html',
	styleUrls: []
})
export class DangNhapComponent implements OnInit, OnDestroy {

	private UserSignUp: UserSignUp;
	private unsub: Subscription;
	constructor(
		private _UserService: UserService,
		private alertService: SweetAlertService
		// private fb:FormBuilder
	) { }
	ngOnInit() {

	}
	DangNhap(user: any, formDangNhap: NgForm) {
		if (!formDangNhap.valid) {
			console.log("error");
		}
		else {
			this.unsub = this._UserService.SignUpAccount(user)
				.subscribe((res: any) => {
					if (typeof (res) === "string") {
						localStorage.removeItem("user");
						this.alertService.AlertError('Oops...', 'Có Gì Đó Sai Sai Ở Đây!!', () => false);
					}
					else {
						this.alertService.AlertSuccess("Đăng Nhập Thành Công!!", () => {
							$("#modalDangNhap").modal("hide");
							$(".formDangNhap input").val("");
							this.alertService.toastRight(`Xin Chào ${res.HoTen}`);
							localStorage.setItem("user", JSON.stringify(res))
						}, "")

						// swal({
						// 	type: 'success',
						// 	title: 'Đăng Nhập Thành Công!!',
						// 	showConfirmButton: true,
						// }).then((result) => {
						// 	if (result.value) {
						// 		$("#modalDangNhap").modal("hide");
						// 		$(".formDangNhap input").val("");
						// 		this.alertService.toastRight(`Xin Chào ${res.HoTen}`);
						// 		localStorage.setItem("user", JSON.stringify(res))
						// 	}
						// })
					}
				})
		}

	}
	ngOnDestroy() {
		this.unsub.unsubscribe();
	}
	ngAfterContentChecked() {
	
	}
}
