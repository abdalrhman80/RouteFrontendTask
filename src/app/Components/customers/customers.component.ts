
import { Component, OnInit } from '@angular/core';
import { CustomersTransactionsService } from 'src/app/Services/customers-transactions.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  AllData: any;
  customers: any[] = [];
  transactions: any[] = [];
  CustomersId: number = 1;
  VisibleTransactionsDialog: boolean = false;
  searchedItem: string | undefined;

  constructor(public _CustomersTransactionsService: CustomersTransactionsService) { }
  ngOnInit(): void {
    this._CustomersTransactionsService
      .getAllData()
      .subscribe((res: any) => {
        this.AllData = res
        this.customers = this.AllData.customers
        this.transactions = this.AllData.transactions
      })
    // this._CustomersTransactionsService
    //   .getCustomers().
    //   subscribe((res: any) => this.customers = res)

    // this._CustomersTransactionsService
    //   .getTransactionsBuyCustomerId(this.CustomersId)
    //   .subscribe((res: any) => this.transactions = res)
  }
  showTransactionDialog(CustomersId: any) {
    this.VisibleTransactionsDialog = true;
    this.CustomersId = CustomersId;
  }
}
