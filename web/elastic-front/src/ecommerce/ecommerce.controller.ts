import { Body, Controller, Get, HttpService, Param, Post, Query, Req } from '@nestjs/common';
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
    return this.ecommerceService.findAll(body);
  }

  @Get(':id')
  async findOne(@Param() param:any){
    return this.ecommerceService.findOne(param);
  }

}

