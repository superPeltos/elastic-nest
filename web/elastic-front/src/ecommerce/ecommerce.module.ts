import { EcommerceController } from './ecommerce.controller';
import { HttpModule, Module } from '@nestjs/common';
import { EcommerceService } from './ecommerce.service';

@Module({
  imports: [HttpModule],
  controllers: [EcommerceController],
  providers: [EcommerceService],
})
export class EcommerceModule {}
