import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { ScrollToAnimationEasing, ScrollToEvent, ScrollToOffsetMap } from '@nicky-lenaers/ngx-scroll-to';
import { SweetAlertService } from '../../Services/sweet-alert.service';
import swal from 'sweetalert2';
import { Router } from "@angular/router";
import { TimKiemPhimComponent } from '../tim-kiem-phim/tim-kiem-phim.component';

declare let $:any;


@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: []
})
export class MenuComponent implements OnInit {

	public DurationScroll:number = 1500;
	public DaDangNhap:boolean = false;
	public links:Array<any> = [
		{
			ScrollLocation : "#slider",
			text : "Trang Chủ"
		},
		{
			ScrollLocation : "#DSPhim",
			text : "Phim"
		},
		{
			ScrollLocation : "#divThongTinChieuPhim",
			text : " Lịch Chiếu"
		},
		{
			ScrollLocation : "#News",
			text : "Tin Tức"
		},
	
	]



	@ViewChild("sideBar") sideBar:ElementRef;
	@ViewChild("burgerIcon") burgerIcon:ElementRef;
	@ViewChild(TimKiemPhimComponent) TimKiemPhim;
	@ViewChild("InputTimKiemPhim") InputTimKiemPhim:ElementRef;
	constructor(
		private AlertService:SweetAlertService,
		private router:Router
	) { }

	DangXuat(){
		this.AlertService.AlertWarning("Bạn Mó Muốn Rời Khỏi Đây", () => {
			localStorage.removeItem("user");
			this.AlertService.toastRight("Good Bye Bro!!");
			this.router.navigate(['/'])
		}, "")
	}


	ngOnInit() {
		
	}

	showSideBar(btn){
		event.preventDefault();
		btn.classList.toggle("active");
		this.sideBar.nativeElement.classList.toggle("active");
	}
	
	ngAfterContentChecked() {
		//Called after every check of the component's or directive's content.
		//Add 'implements AfterContentChecked' to the class.
		let flag = localStorage.getItem("user");
		if(flag){
			this.DaDangNhap = true;
		}
		else{
			this.DaDangNhap = false;
		}
		
	}
	ngAfterViewChecked(){
		
	}
}
