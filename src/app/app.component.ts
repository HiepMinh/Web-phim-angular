import { Component } from '@angular/core';
import { 
  Router, NavigationEnd }  from "@angular/router";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'app works!';
  public isShow:boolean = true;
//   onActivate(event) {
//     let scrollToTop = window.setInterval(() => {
//         let pos = window.pageYOffset;
//         if (pos > 0) {
//             window.scrollTo(0, pos - 20); // how far to scroll on each step
//         } else {
//             window.clearInterval(scrollToTop);
//         }
//     }, 1); 
// }
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth' 
        });
    });

    // setTimeout(() => {
    //   this.isShow = true;
    //   console.log(this);
    // }, 1000)
  }
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // setTimeout(() => {
    //   this.isShow = true;
    //   console.log(this);
    // }, 1000)
  }

}
