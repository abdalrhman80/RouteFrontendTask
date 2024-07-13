import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomersTransactionsService {
  baseUrl: string = "https://fake-api-sigma-three.vercel.app";
  constructor(private _HttpClient: HttpClient) { }
  getAllData() {
    return this._HttpClient.get(`${this.baseUrl}/db`)
  }
  getCustomers() {
    return this._HttpClient.get(`${this.baseUrl}/customers`)
  }
  getTransactionsBuyCustomerId(CustomersId: any) {
    return this._HttpClient.get(`${this.baseUrl}/transactions?customer_id=${CustomersId}`)
  }
}
