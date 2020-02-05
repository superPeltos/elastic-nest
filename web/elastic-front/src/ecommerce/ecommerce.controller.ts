import { Body, Controller, Get, HttpService, Query, Req } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from "axios";
import { EcommerceService } from './ecommerce.service';


@Controller('ecommerce')
export class EcommerceController {
  private ecommerceArray = [];
  private wording = "";
  constructor(private readonly httpService: HttpService,private readonly ecommerceService: EcommerceService) {}

  @Get()
  async findAll(@Body() body: any){
    console.log(body);
    return this.ecommerceService.findAll(body);
  }




}

