import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {IMyOptions, IMyDate, IMyDateModel, IMyDefaultMonth} from 'mydatepicker';

import { UserService } from "./../../Services/user.service";
import { UserRegister } from "./../../Models/UserRegister.class";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: []
})
export class DangKyComponent implements OnInit {

  public pickerPlace:string = "Choose Your Birthday...";
  private ListNguoiDung:Array<any>;
  public unsub_1:Subscription;
  constructor(private _UserService:UserService) { }



  private UserRegister:UserRegister;
  ngOnInit() {
    this._UserService.getListUser()
                      .subscribe((res:Array<any>) => {
                        this.ListNguoiDung = res;
                        console.log(res);
                      }, err => {
                        this.ListNguoiDung = err;
                        console.log(err);
                      })
  }

  DangKy(user:UserRegister, fn:string, ln:string){
    user.MaNhom = "GP07";
    user.MaLoaiNguoiDung = "KhachHang";
    user.HoTen = fn + " " + ln;
    this._UserService.RegisterAccount(user).subscribe((res:UserRegister) => {
      this.UserRegister = res;
      console.log(this.UserRegister);
    }, error => {
      this.UserRegister = error;
      console.log(this.UserRegister);//Username already exists
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.unsub_1.unsubscribe();
  }
}
