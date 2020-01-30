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
import { map, catchError, finalize } from 'rxjs/operators';
import { LoaderService } from 'src/app/components/mainComponents/loader/loader.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(
        public dialogService: DialogService,
        private loaderService: LoaderService
        ) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();
        const token: string = localStorage.getItem('token');
        if (token) {
            request = request.clone({headers: request.headers.set('Authorization', 'test' + token )});
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
        }
        // request = request.clone({headers: request.headers.set('Accept', 'application/json')});
        console.log(next.handle(request), 'next handl(request)');
        return next.handle(request).pipe(

            // przechwycenia eventu

            // map((event: HttpEvent<any>) => {
            //     if (event instanceof HttpResponse) {
            //         console.log('event--->>>', event );
            //     }
            //     return event;
            //     // tylko że to nie jest potrzebne ....
            //     // cała ta mapa nie jest potrzbena zobacze to w testach
            // }),
            catchError((error: HttpErrorResponse) => {
                const data = {
                    reason: error && error.error ? error.message : '',
                    status: error.status,
                };
                this.dialogService.openInterceptorDialog(data);
                return throwError(error);
            }),
            finalize(() => {
                this.loaderService.hide();
            })
        );
    }
}


