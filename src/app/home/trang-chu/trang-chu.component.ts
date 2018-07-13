import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
	selector: 'app-trang-chu',
	templateUrl: './trang-chu.component.html',
	styleUrls: []
})
export class TrangChuComponent implements OnInit, OnDestroy {

	public StateLoading:boolean = true;
	constructor(
	) { }

	ngOnInit() {
		// setTimeout(() => {
		// 	this.StateLoading = true;
		// }, 1000)
	}

	ngOnDestroy() {
		this.StateLoading = false;
		setTimeout(() => {
			this.StateLoading = true;
		}, 1000)
	}
}
