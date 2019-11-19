import { Injectable } from '@angular/core';
import { DialogService } from '../dialog.service';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(public dialogService: DialogService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('token');
        if (token) {
            request = request.clone({headers: request.headers.set('Authorization', 'test' + token )});
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
        }
        request = request.clone({headers: request.headers.set('Accept', 'application/json')});
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event );
                }
                return event;
                // tylko że to nie jest potrzebne ....
            }),
            catchError((error: HttpErrorResponse) => {
                const data = {
                    reason: error && error.error && error.error.reason ? error.error.reason : '',
                    status: error.status,
                };
                this.dialogService.openInterceptorDialog(data);
                return throwError(error);
            })
        );
    }
}


