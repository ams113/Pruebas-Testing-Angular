import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MedicoService {

  constructor( public http: HttpClient) { }

  getMedico() {
    return this.http.get('...');
  }

}
