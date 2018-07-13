// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private router:Router){

//   }
//   canActivate(): boolean {
//     if (localStorage.getItem("user")) {
//       let user:any = JSON.parse(localStorage.getItem("user"));
//       if(user.isAdmin){
//         return true;
//       }
//       this.router.navigate(['home']);
//       return false;
//     }
//     else{
//       this.router.navigate(['home']);
//       return false;
//     }
//   }
// }
