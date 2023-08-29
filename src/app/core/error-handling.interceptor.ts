import { HttpErrorResponse, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { MessageService } from "../services/message.service";
import { Injectable } from "@angular/core";
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor{

    constructor(private messageService: MessageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        console.log(req);
        return next.handle(req).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse){
                    this.messageService.error(`Błąd połączenia: ${error.message}`)
                }
                return throwError(error);
            })
        );
    }
}