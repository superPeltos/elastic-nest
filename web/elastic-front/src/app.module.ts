import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { EcommerceController } from './ecommerce/ecommerce.controller';
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { EcommerceService } from './ecommerce/ecommerce.service';



@Module({
  imports: [HttpModule,],
  controllers: [AppController, CatsController, EcommerceController],
  providers: [AppService,EcommerceService],
})
export class AppModule {}
