import { Injectable } from '@angular/core';
import { DialogService } from '../dialog.service';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { LoaderService } from 'src/app/components/mainComponents/loader/loader.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  private headersFromInteceptor = new HttpHeaders({
    // 'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    // 'x-rapidapi-key': '473bd91c3fmsh3c098e68091a926p1d8c12jsnc4ee49567e71',
    // 'useQueryString': 'true'
    // 'content-type': 'application/x-www-form-urlencoded',
    // 'Authorization': 'Bearer HuNvf-JEWj4m52To0tTw',
    'Content-type': 'application/json',
  });

    constructor(
        public dialogService: DialogService,
        private loaderService: LoaderService
        ) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();
        const token: string = localStorage.getItem('token');
        // console.log( token ,'tooken?');
        // console.log(request.headers, 'request headers');
        if (token) {
            request = request.clone({headers: request.headers.set('Authorization', 'test' + token )});
        }
        if (true) {
          request = request.clone({headers: request.headers.set('Authorization', 'Token123' )});
          console.log( request,'test');
        }
        // to wyłączone bo content type jest w api Service dodawany do hederów
        // if (!request.headers.has('Content-Type')) {
        //     request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
        // }
        // request = request.clone({headers: request.headers.set('Accept', 'application/json')});

        // dodanie Headers z pola
        request = request.clone({headers: this.headersFromInteceptor});
        console.log( request,'czy nadpisuje headersy');
        if (true) {
          request = request.clone({headers: request.headers.set('Authorization', 'Token123' )});
          console.log( request,'test');
        }
        // WAŻNE jeśli mamy jakieś headersy pewne należy je dodać na początku tak by 
        //nie nadpisać je clonowaniem domyslnych
        
        // console.log(next.handle(request), 'next handl(request) Intercepor');
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


