import { HttpService, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { AxiosResponse } from "axios";
import { Ecommerce } from './ecommerce.interface';

@Injectable()
export class EcommerceService {
  private readonly ecommerces: Ecommerce[] = [];
  private wording = "";

  constructor(private readonly httpService: HttpService) {
  }

  findAll(body) {
    let search;
    let objetKey = Object.keys(body);
    if (objetKey.length === 0) {
      search = JSON.parse('{"query": {"match_all": {}}}');
    } else {
      objetKey.forEach(key => {
        switch (key) {
          case "query":
            search = JSON.parse('{\n' +
              '  "query": {\n' +
              '    "match": {\n' +
              '      "name": "'+ body.query +'"\n' +
              '    }\n' +
              '  }\n' +
              '}');
            break;
        }
      });
    }
    this.httpService.get('http://elasticsearch:9200/ecommerce/product/_search', {data: search}).subscribe((data) => {
      this.wording = "";
      data.data.hits.hits.forEach((data) => {
        this.wording += data._source.name + '<br>';
        console.log(this.wording);
      });
    });
    return this.wording;


  }
}
