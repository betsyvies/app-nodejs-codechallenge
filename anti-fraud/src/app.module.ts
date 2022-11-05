import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'ANTI_FRAUD', transport: Transport.KAFKA },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
