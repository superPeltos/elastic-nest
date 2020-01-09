import { Controller, Get, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from "axios";

@Controller('ecommerce')
export class EcommerceController {
  private ecommerceArray = [];
  private wording = ""
  constructor(private readonly httpService: HttpService) {}

  @Get()
  findAll(): any {
    let search = JSON.parse('{"query": {"match": {"name": "pasta"}}}');
    this.httpService.get('http://elasticsearch:9200/ecommerce/product/_search',{ data : search}).subscribe((data ) => {
      this.wording = "";
      this.ecommerceArray = data.data.hits.hits;
      this.ecommerceArray.forEach((data) => {
        this.wording += data._source.name + '<br>';
      });

    });
    return this.wording;


  }
}

