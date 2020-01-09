import { HttpService, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { AxiosResponse } from "axios";
import { Ecommerce} from './ecommerce.interface';

@Injectable()
export class EcommerceService {
  private readonly ecommerces: Ecommerce[] = [];

  constructor(private readonly httpService: HttpService) {}

  create(ecommerce : Ecommerce){
    this.ecommerces.push(ecommerce)
  }
  findAll(): Ecommerce[]{
    return this.ecommerces;
  }
}
