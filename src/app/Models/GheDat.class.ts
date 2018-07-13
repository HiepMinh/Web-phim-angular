export class GheDat{
	MaGhe:number;
	GiaVe:number;	
	TrangThaiGhe:boolean;
	TenGhe:string;

	constructor(
		MaGhe:number,
		GiaVe:number,	
		TrangThaiGhe:boolean,
		TenGhe:string
	){
		this.MaGhe = MaGhe;
		this.GiaVe = GiaVe;
		this.TrangThaiGhe = TrangThaiGhe;
		this.TenGhe = TenGhe;
	}
}