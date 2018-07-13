import { Component, OnInit, OnDestroy, ViewChild, ElementRef, OnChanges, ViewChildren, QueryList,AfterViewInit } from '@angular/core';
import { Movie } from "./../../Models/Movie.class";
import { MovieService } from "./../../Services/movie.service";
import { Subscription } from 'rxjs';
import { PhimDangChieuComponent } from '../phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from '../phim-sap-chieu/phim-sap-chieu.component';
// import { ScrollTopService } from './../../Services/scroll-top.service';
declare var jquery: any;
declare var $: any;
@Component({
    selector: 'app-danh-sach-phim',
    templateUrl: './danh-sach-phim.component.html',
    styleUrls: []
})
export class DanhSachPhimComponent implements OnInit,AfterViewInit{

    public listShow: string = "phimDangChieu";
    public slMovieSapChieu: number;
    constructor(
        private MovieService:MovieService,
        // private ScrollTopService:ScrollTopService
    ) { }
    @ViewChild(PhimDangChieuComponent) appPhimDangChieuCom;
    @ViewChild(PhimSapChieuComponent) appPhimSapChieu;
    ngOnInit() {
        // this.slMovieSapChieu = this.MovieService.slPhimSapChieu();
        // this.ScrollTopService.setScrollTop();
            //console.log(this.appPhimDangChieuCom);
    }
    ngAfterViewInit(): void {
        // console.log(this.appPhimDangChieuCom);
        // console.log(this.appPhimSapChieu);
    }
    showContent(e) {
        event.preventDefault();
        this.listShow = e.getAttribute("data-show");
    }

}


