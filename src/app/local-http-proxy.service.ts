// Created by baihuibo on 2017/2/4.
import {Injectable} from "@angular/core";
import {XHRBackend, Http, RequestOptions, RequestOptionsArgs} from "@angular/http";

@Injectable()
export class LocalHttpProxyService extends Http {
  constructor(backend: XHRBackend, requestOption: RequestOptions) {
    super(backend, requestOption);
  }

  get(url: string, options?: RequestOptionsArgs) {
    return this.proxy(url, options);
  }

  post(url: string, body: any, options?: RequestOptionsArgs) {
    return this.proxy(url, options, body);
  }

  put(url: string, body: any, options?: RequestOptionsArgs) {
    return this.proxy(url, options, body);
  }

  delete(url: string, options?: RequestOptionsArgs) {
    return this.proxy(url, options);
  }

  private proxy(url, options, body?) {
    if (body) {
      console.debug('URL : ', url, 'BODY : ', body);
    }
    return super.get('/assets/api-resource' + url + '.json', options);
  }
}
