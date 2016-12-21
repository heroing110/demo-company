/**
 * Created by Administrator on 2016/12/12 0012.
 */
import {escape} from 'mysql';
import {createHash} from 'crypto';

export function transformBody(data, model: any[], arrayBean: string[] , splitKey:string) {
    const result = {};
    model.forEach(function (columnName) {
        result[columnName] = data[columnName] || null;
    });
    if (arrayBean && arrayBean.length) {
        arrayBean.forEach(columnName => {
            result[columnName] = result[columnName].join(splitKey);
        });
    }
    return result;
}


export function toSqlWhere(param) {
    let where = [];
    for (const key in param) {
        where.push(key + '=' + escape(param[key]));
    }
    return where.join(' and ');
}

export function md5(str) {
    const md5sum = createHash('md5');
    md5sum.update(str);
    return md5sum.digest('hex');
};