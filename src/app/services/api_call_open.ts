import { HelperFunction } from '../utils/helper_function';
import { HOST } from './consts';


export class APICallOpen {

    static async get_data(uri: any) {
        let h = new Headers();
        h.append("Accept", 'application/json');

        let req = new Request(`${HOST}/api${uri}`, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        })

        return await HelperFunction.send_request(req);
    }


    static async post_data(uri: any, body: any) {

        let h = new Headers();
        h.append("Accept", 'application/json');

        let req = new Request(`${HOST}/api${uri}`, {
            method: 'POST',
            headers: h,
            mode: 'cors',
            body: HelperFunction.getFormDataFromObject(body)
        })

        return await HelperFunction.send_request(req);
    }



}