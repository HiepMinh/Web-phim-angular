import { 
	Component, 
	OnInit, 
	Input,
	EventEmitter,
	Output,
	AfterContentChecked,
	SimpleChanges
} from '@angular/core';
import { GheDat } from '../../Models/GheDat.class';

@Component({
	selector: 'app-ghe',
	templateUrl: './ghe.component.html',
	styleUrls: []
})
export class GheComponent implements OnInit {

	public TrangThaiGhe:boolean = false;//false: chua ai dat, true: DA CO NGUOI DAT
	@Input("ghe") MotGhe:any;
	@Output() SendObjectGhe = new EventEmitter();
	constructor() { }

	ngOnInit() {
	}
	DatGhe(ghe:any){
		this.TrangThaiGhe = !this.TrangThaiGhe;
		let GheDuocDat = new GheDat(ghe.MaGhe,ghe.GiaVe,this.TrangThaiGhe, ghe.TenGhe);
		this.SendObjectGhe.emit(GheDuocDat);
		// console.log(ghe);
		// console.log(GheDuocDat);
	}

	ngAfterContentChecked() {
		//Called after every check of the component's or directive's content.
		//Add 'implements AfterContentChecked' to the class.
	}

	ngAfterViewChecked() {
		//Called after every check of the component's view. Applies to components only.
		//Add 'implements AfterViewChecked' to the class.
		// console.log("after view checked");
	}
	ngOnChanges(changes: SimpleChanges): void {
		//Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
		//Add '${implements OnChanges}' to the class.
	}

}
