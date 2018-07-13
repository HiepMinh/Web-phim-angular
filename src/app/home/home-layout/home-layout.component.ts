import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home-layout',
	templateUrl: './home-layout.component.html',
	styleUrls: []
})
export class HomeLayoutComponent implements OnInit {

	public StateLoading: boolean = false;

	constructor() { }

	ngOnInit() {
		setTimeout(() => {
			this.StateLoading = true;
		}, 1000)
	}
	

}
