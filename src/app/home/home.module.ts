import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDatePickerModule } from "mydatepicker";
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { MovieService } from "./../Services/movie.service";
import { LayoutModule } from '@angular/cdk/layout';
import { MenuComponent } from './menu/menu.component';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { DatVeComponent } from './dat-ve/dat-ve.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from "ngx-pagination";
import { SliderComponent } from './slider/slider.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { LichChieuComponent } from './lich-chieu/lich-chieu.component';
import { TimKiemPhimComponent } from './tim-kiem-phim/tim-kiem-phim.component';
import { GheComponent } from './ghe/ghe.component';
import { ThongTinNguoiDungComponent } from './thong-tin-nguoi-dung/thong-tin-nguoi-dung.component';
import { MatButtonModule, MatFormFieldModule, MatChipsModule, MatInputModule, MatCardModule, MatSelectModule, MatTooltipModule } from '@angular/material';
import { LoadingComponent } from './loading/loading.component';
//router

const HomeRoutes: Routes = [
    {
        path: "",
        component: HomeLayoutComponent, children: [
            {
                path: "",//home/
                component: TrangChuComponent
            },
            {
                path: "danh-sach-phim",//home/danh-sach-phim
                component: DanhSachPhimComponent
            },
            {
                path: "chi-tiet-phim",
                component: ChiTietPhimComponent
            },
            {
                path: "dang-ky",
                component: DangKyComponent
            },
            {
                path : "dat-ve",
                component : DatVeComponent
			},
			{
				path : "thong-tin-tai-khoan",
				component : ThongTinNguoiDungComponent
			}
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxPaginationModule,
        MatButtonModule,
		MatFormFieldModule,
		MatChipsModule,
		MatInputModule,
		MatCardModule,
        ScrollToModule.forRoot(),
        MatSelectModule,
        MatTooltipModule,
        MyDatePickerModule,
		RouterModule.forChild(HomeRoutes),
    ],
    exports: [
		TrangChuComponent, 
		DanhSachPhimComponent, 
		MenuComponent, 
		ChiTietPhimComponent
    ],
    providers: [MovieService],
    declarations: [
		TrangChuComponent, 
		DanhSachPhimComponent, 
		MenuComponent, 
		ChiTietPhimComponent, 
		DatVeComponent, 
		HomeLayoutComponent, 
		SliderComponent, 
		DangKyComponent, 
		DangNhapComponent, 
		PhimSapChieuComponent, 
		PhimDangChieuComponent, 
		TinTucComponent, 
		FooterComponent, 
		LichChieuComponent, 
		TimKiemPhimComponent, 
		GheComponent, 
		ThongTinNguoiDungComponent, LoadingComponent,
	]
})
export class HomeModule { }
