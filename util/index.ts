/**
 * Created by Administrator on 2016/12/12 0012.
 */
import {escape} from 'mysql';
import {createHash} from 'crypto';

export function transformBody(data, model: any[], arrayBean: string[], splitKey: string) {
    const result = {};
    console.log('data',data);
    console.log('model',model);
    model.forEach(function (columnName) {
        console.log('data['+columnName+']',data[columnName]);
        result[columnName] = data[columnName];
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
        if (param[key]) {
            where.push(key + '=' + escape(param[key]));
        }
    }
    if (where.length == 0) return '';
    return 'where ' + where.join(' and ');
}

export function md5(str) {
    const md5sum = createHash('md5');
    md5sum.update(str);
    return md5sum.digest('hex');
};

export function setUserId(req, param) {
    const userid = req['session'].user.id;

    console.info('req.session', req['session']);

    if (userid != '1') {
        param['userid'] = userid;
    }
}