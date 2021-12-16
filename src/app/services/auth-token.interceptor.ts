import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class AuthTokenInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    let modifiedReq = req.clone({
      headers: req.headers.set('token', 'esto es un token')
    })

    return next.handle(modifiedReq);
  }
}
