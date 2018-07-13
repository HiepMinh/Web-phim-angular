import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TintucService } from '../../Services/tintuc.service';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: []
})
export class TinTucComponent implements OnInit {
  public needMore:boolean = true;
  public entryNews:number = 3;
  private listNews_1:Array<any>;
  private listNews_2:Array<any>;
  public amountNews_2:number;
  constructor(private _newService:TintucService) { }

  ngOnInit() {
    this.listNews_1 = this._newService.getNews_1();
    this.listNews_2 = this._newService.getNews_2();
  }
  seemore(btnMore){
    // if(this.entryNews < this.amountNews_2){
    //   this.entryNews  += 3;
    // }
    // btnMore.classList.add("d-none");
    // console.log(this.amountNews_2);
  }
  ngOnChanges(){
  }
  seeless(btnLess){
    // if(this.entryNews < this.amountNews_2){
    //   this.needMore = true;
    // }
    // setTimeout(() => {
    //   if(this.entryNews >= this.amountNews_2){
    //     this.needMore = false;
    //   }
    // }, 1);
  }
}
