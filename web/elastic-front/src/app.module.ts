import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { EcommerceController } from './ecommerce/ecommerce.controller';
import { EcommerceModule } from './ecommerce/ecommerce.module';



@Module({
  imports: [HttpModule,],
  controllers: [AppController, CatsController, EcommerceController],
  providers: [AppService],
})
export class AppModule {}
