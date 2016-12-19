/**
 * Created by Administrator on 2016/12/12 0012.
 */
import {DbModel} from "./base.model";

export class Media {
    mname: string = '';
    siteurl: string = '';
}

class MediaModel extends DbModel<Media> {
    public bean = Object.keys(new Media);
    public name = 'media';

    constructor() {
        super();
    }
}

export const mediaModel = new MediaModel();