import { 
    Component, 
    OnInit, 
    OnDestroy, 
    Output, 
    EventEmitter, 
    ViewChild, 
    ElementRef, 
    OnChanges,
    AfterViewChecked,
    AfterContentChecked,
} from '@angular/core';
import { Movie } from "./../../Models/Movie.class";
import { MovieService } from "./../../Services/movie.service";
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl  } from '@angular/platform-browser';

import * as $ from "jquery";
// declare var $: any;
@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: []
})
export class PhimDangChieuComponent implements OnInit, OnDestroy, OnChanges, AfterViewChecked, AfterContentChecked {

  
    private DanhSachPhimServices: Array<Movie>;
    public sub1: Subscription;
    public entryMovie: number = 4;
    public slMovieDangChieu: number;
    public TrailerURL:SafeResourceUrl;
    public CallTrailer:boolean = false;
    public subTrailer:Subscription;
    public entryList: Array<any> = [
        {
            value: 4,
            view: "4"
        },
        {
            value: 8,
            view: "8"
        },
        {
            value: 12,
            view: "12"
        },
        {
            value: "all",
            view: "all"
        },
    ];
    public hidePagiControl: boolean = false;
    constructor(private MovieSer: MovieService, public sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.sub1 = this.MovieSer.layDanhSachPhim()
            .subscribe((res: Array<Movie>) => {
                this.DanhSachPhimServices = res;
            }, error => {
                this.DanhSachPhimServices = error;
            })
    }
    ngOnDestroy() {
        this.sub1.unsubscribe();

    }
    ngOnChanges(){
        
    }
    ngAfterViewChecked() {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        
    }
    ngAfterContentChecked() {
        //Called after every check of the component's or directive's content.
        //Add 'implements AfterContentChecked' to the class.
        // $("#modalTrailer").on("hidden.bs.modal", function(){
        //     $("#modalTrailer iframe").attr("src", "");
        // });
    }
    showTrailer(e) {
        event.preventDefault();
        this.CallTrailer = true;
		this.TrailerURL = this.sanitizer.bypassSecurityTrustResourceUrl(e.replace("watch?v=", "embed/") + "?autoplay=1");
		console.log(this.TrailerURL);
    }

    showEntries(e) {
        if (e == "all") {
            this.entryMovie = this.DanhSachPhimServices.length;
            this.hidePagiControl = true;
        }
        else {
            this.entryMovie = e;
            this.hidePagiControl = false;
        }
    }
    
}

