// Created by baihuibo on 2017/2/4.


import {Injectable} from "@angular/core";
import {XHRBackend, Http, RequestOptions, RequestOptionsArgs} from "@angular/http";

@Injectable()
export class LocalHttpProxyService extends Http {
  constructor(backend: XHRBackend, requestOption: RequestOptions) {
    super(backend, requestOption);
  }

  get(url: string, options?: RequestOptionsArgs) {
    return this.proxy(url, {}, options);
  }

  post(url: string, body: any, options?: RequestOptionsArgs) {
    return this.proxy(url, body, options);
  }

  put(url: string, body: any, options?: RequestOptionsArgs) {
    return this.proxy(url, body, options);
  }

  delete(url: string, options?: RequestOptionsArgs) {
    return this.proxy(url, {}, options);
  }

  private proxy(url, body, options) {
    return super.get('/local-resource/' + url + '.json', options);
  }
}
