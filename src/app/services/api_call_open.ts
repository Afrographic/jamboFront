import { HOST } from './consts';
import { getFormDataFromObject } from "../utils/tools";

export class APICallOpen {
    
    static async getData(uri: any) {
        let h = new Headers();
        h.append("Accept", 'application/json');

        let req = new Request(`${HOST}${uri}`, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        })

        let res: any = await fetch(req);
        res = await res.json();
        return res;
    }


    static async postData(uri: any, body: any) {

        let h = new Headers();
        h.append("Accept", 'application/json');

        let req = new Request(`${HOST}${uri}`, {
            method: 'POST',
            headers: h,
            mode: 'cors',
            body: getFormDataFromObject(body)
        })

        let res: any = await fetch(req);
        res = await res.json();
        return res;
    }




}