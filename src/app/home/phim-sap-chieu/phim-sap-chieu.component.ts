import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { MovieService } from "./../../Services/movie.service";
import { DomSanitizer, SafeResourceUrl  } from '@angular/platform-browser';

@Component({
    selector: 'app-phim-sap-chieu',
    templateUrl: './phim-sap-chieu.component.html',
    styleUrls: []
})
export class PhimSapChieuComponent implements OnInit {

    public CallTrailer:boolean = false;
    private DSPhimSapChieu:Array<any>;
    public des:string = "";
    public TrailerURL:SafeResourceUrl;
    constructor(private _MovieService:MovieService, private DomSanitizer:DomSanitizer) { }
    ngOnInit() {
        this.DSPhimSapChieu = this._MovieService.layDanhSachPhimSapChieu();
    }
    showTrailer(e) {
        event.preventDefault();
        this.CallTrailer = true;
        this.TrailerURL = this.DomSanitizer.bypassSecurityTrustResourceUrl(e + "?autoplay=1");
    }
}
