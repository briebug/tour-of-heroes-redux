import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { HttpEvent } from "@angular/common/http/src/response";
import { HttpRequest } from "@angular/common/http/src/request";
import { HttpHandler } from "@angular/common/http/src/backend";

import { Observable } from "rxjs/Observable";

import { MarvelResponse } from "../models/marvel-response.model";
import { Character } from "../models/character.model";
import { environment } from "../../../environments/environment";
import { MarvelService } from "../services/marvel.service";

type responseTypes = Character;

@Injectable()
export class MarvelInterceptor implements HttpInterceptor {

  constructor(private marvelService: MarvelService) {}

  intercept(req: HttpRequest<MarvelResponse<responseTypes>>, next: HttpHandler): Observable<HttpEvent<MarvelResponse<responseTypes>>> {
    if (req.url.indexOf(this.marvelService.BASE_URL) === 0) {
      req = req.clone({
        params: req.params.set('apikey', environment.marvel.public)
      });
    }
    return next.handle(req);
  }
}
