import { HelperFunction } from '../utils/helper_function';

import { HOST } from "./consts";

export class APICallSecure {
    static token = "";

    static initAPICall() {
        let tokenString = localStorage.getItem("token");
        if (tokenString != undefined) {
            this.token = tokenString;
        }
    }


    static async get_data(uri: any) {

        let h = new Headers();
        h.append("Accept", 'application/json');
        h.append("Authorization", 'Bearer ' + this.token);

        let req = new Request(`${HOST}/api${uri}`, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        })

        return await HelperFunction.send_request(req);
    }

    static async delete_data(uri: any) {

        let h = new Headers();
        h.append("Accept", 'application/json');
        h.append("Authorization", 'Bearer ' + this.token);

        let req = new Request(`${HOST}/api${uri}`, {
            method: 'DELETE',
            headers: h,
            mode: 'cors'
        })

        return await HelperFunction.send_request(req);
    }

    static async post_data(uri: any, body: any) {

        let h = new Headers();
        h.append("Accept", 'application/json');
        h.append("Authorization", 'Bearer ' + this.token);

        let req = new Request(`${HOST}/api${uri}`, {
            method: 'POST',
            headers: h,
            mode: 'cors',
            body: HelperFunction.getFormDataFromObject(body)
        })

        return await HelperFunction.send_request(req);
    }

    static async update_data(uri: any, body: any) {

        let h = new Headers();
        h.append("Accept", 'application/json');
        h.append("Authorization", 'Bearer ' + this.token);

        let req = new Request(`${HOST}/api${uri}`, {
            method: 'PATCH',
            headers: h,
            mode: 'cors',
            body: HelperFunction.getFormDataFromObject(body)
        })

        return await HelperFunction.send_request(req);
    }

    static upload_file(file: File, method: string, url: string, body: any, upload_progress: any, response_handler: any) {
        var req = new XMLHttpRequest();
        // Get the upload progression
        req.upload.addEventListener("progress", upload_progress);
        //  req.upload.addEventListener("error", upload_progress);
        // Get the Response
        req.onreadystatechange = response_handler;
        req.open(method, `${HOST}/api${url}`);
        // Set the headers
        req.setRequestHeader("Accept", 'application/json');
        req.setRequestHeader("Authorization", 'Bearer ' + this.token);
        // Construct the body
        var form = new FormData();
        form = HelperFunction.getFormDataFromObject(body);
        form.append("file", file);
        // Send the request
        req.send(form);
    }
}