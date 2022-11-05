import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateTransactionEvent } from './create-transaction.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('anti-fraud')
  async handleantiFraud(data: CreateTransactionEvent) {
    let transactionStatusChanged;
    const amount = data.amount;
    if (amount > 1000) {
      transactionStatusChanged = {
        ...data,
        transactionStatus: 'rejected',
      };
    } else {
      transactionStatusChanged = {
        ...data,
        transactionStatus: 'approved',
      };
    }
    // this.appService.handleTrasactionCreated(transactionStatusChanged);
    return transactionStatusChanged;
  }
}
