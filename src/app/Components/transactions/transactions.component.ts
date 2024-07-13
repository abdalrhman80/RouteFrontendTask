import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomersTransactionsService } from 'src/app/Services/customers-transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  @Input() visible: boolean = false;
  @Input() CustomersId: number = 1;
  @Output() HideTransactionDialog = new EventEmitter<boolean>();
  transactions: any;
  VisibleAmountChart: boolean = false;
  showButton: boolean = true;

  constructor(public _CustomersTransactionsService: CustomersTransactionsService) { }

  ngOnInit() {
    this._CustomersTransactionsService
      .getTransactionsBuyCustomerId(this.CustomersId)
      .subscribe((res: any) => this.transactions = res)
  }

  HideDialog() {
    this.HideTransactionDialog.emit(false);
  }
}
