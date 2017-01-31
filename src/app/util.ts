import {createHash} from "crypto";
/**
 * Created by Administrator on 2016/12/20 0020.
 */

export function responseHandler(response) {
    const json = response.json();
    return json.data || json;
}

export function md5(str) {
    const md5sum = createHash('md5');
    md5sum.update(str);
    return md5sum.digest('hex');
}