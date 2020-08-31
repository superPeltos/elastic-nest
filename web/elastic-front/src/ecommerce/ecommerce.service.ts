import { HttpService, Injectable } from "@nestjs/common";
import { Ecommerce } from './ecommerce.interface';

@Injectable()
export class EcommerceService {
  private readonly ecommerces: Ecommerce[] = [];
  private jsonwording = {};

  constructor(private readonly httpService: HttpService) {
  }

  findAll(body) {
    let keyJson = '';
    let search;
    let objetKey = Object.keys(body);
    if (objetKey.length === 0) {
      keyJson = 'all';
      search = JSON.parse('{"query": {"match_all": {}}}');
    } else {
      keyJson = body.query;
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
    return this.httpService.get('http://elasticsearch:9200/ecommerce/product/_search', {data: search}).toPromise().then((data) => {
      this.jsonwording = {};
      this.jsonwording[keyJson] = [];
      data.data.hits.hits.forEach((data) => {
        this.jsonwording[keyJson] = [...this.jsonwording[keyJson],data._source.name];

      });
      return this.jsonwording;
    });



  }

  async findOne(param) {
    let search = JSON.parse('{\n' +
      '  "query": {\n' +
      '    "match": {\n' +
      '      "_id": "'+ param.id +'"\n' +
      '    }\n' +
      '  }\n' +
      '}');
    return this.httpService.get('http://elasticsearch:9200/ecommerce/product/_search', {data: search}).toPromise().then((data) => {
      this.jsonwording = {};
      this.jsonwording[param.id] = '';
      data.data.hits.hits.forEach((data) => {
        this.jsonwording[param.id] = data._source.name;
      });
      return this.jsonwording;
    });

  }
}
