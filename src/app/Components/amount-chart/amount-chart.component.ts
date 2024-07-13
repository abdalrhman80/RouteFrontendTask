import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomersTransactionsService } from 'src/app/Services/customers-transactions.service';

@Component({
  selector: 'app-amount-chart',
  templateUrl: './amount-chart.component.html',
  styleUrls: ['./amount-chart.component.scss']
})
export class AmountChartComponent {
  @Input() transactions: any;
  @Input() VisibleAmountChart: boolean = false;
  @Output() HideAmountChart = new EventEmitter<boolean>();
  data: any;
  options: any;
  TransactionsDates: any[] = [];
  TransactionAmount: any[] = [];

  constructor(public _CustomersTransactionsService: CustomersTransactionsService) { }

  ngOnInit(): void {
    this.TransactionsDates = this.transactions.map((transaction: any) => transaction.date).sort();
    this.TransactionAmount = this.transactions.map((transaction: any) => transaction.amount).sort();

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: this.TransactionsDates,
      datasets: [
        {
          label: 'Amount',
          data: this.TransactionAmount,
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }

  HideChart() {
    this.HideAmountChart.emit(false);
  }
}
