import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GetterSetterService {
  private starWarsPeople: any;

  constructor(private apiService: ApiService) { }

  

}
