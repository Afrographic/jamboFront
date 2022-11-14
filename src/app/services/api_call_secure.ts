import { getFormDataFromObject } from "../utils/tools";
import { HOST } from "./consts";

export class APICallSecure {
    static token = "";

    static initAPICall() {
        let tokenString = localStorage.getItem("tokens");
        if (tokenString != undefined) {
            this.token = tokenString;
        }
    }


    static async getData(uri: any) {

        let h = new Headers();
        h.append("Accept", 'application/json');
        h.append("Authorization", 'Bearer ' + this.token);

        let req = new Request(`${HOST}${uri}`, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        })

        let res: any = await fetch(req);
        res = await res.json();
        return res;
    }

    static async deleteData(uri: any) {

        let h = new Headers();
        h.append("Accept", 'application/json');
        h.append("Authorization", 'Bearer ' + this.token);

        let req = new Request(`${HOST}${uri}`, {
            method: 'DELETE',
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
        h.append("Authorization", 'Bearer ' + this.token);

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

    static async updateData(uri: any, body: any) {

        let h = new Headers();
        h.append("Accept", 'application/json');
        h.append("Authorization", 'Bearer ' + this.token);

        let req = new Request(`${HOST}${uri}`, {
            method: 'PATCH',
            headers: h,
            mode: 'cors',
            body: getFormDataFromObject(body)
        })

        let res: any = await fetch(req);
        res = await res.json();
        return res;
    }
}