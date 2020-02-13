import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private readonly http: HttpClient) { }

  read() {
    return this.http.get('assets/features.json', {
      responseType: 'json'
    });
  }
}
