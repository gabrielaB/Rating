// import {
//     HttpHandler,
//     HttpEvent,
//     HttpRequest,
//     HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { AuthService } from 'services/auth-service.service';


// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//     constructor(
//         private authService: AuthService
//     ) { }

//     intercept(req: HttpRequest<any>, next: HttpHandler)
//         : Observable<HttpEvent<any>> {
//        if(this.authService.isAuthenticated){
//         const token = this.authService.getToken();
//         if (token) {
//             req = req.clone({
//                 url: `${req.url}?auth=${token}`
//             });
//         } 
//        }else{
//         req = req.clone({
//             url: `${req.url}`
//         });
//        }
        

//         return next.handle(req);
//     }

// }


