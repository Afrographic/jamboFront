import { APICallOpen } from './api_call_open';
import { APICallSecure } from "./api_call_secure";

export class PlayerService{
    static async init() {
        let token = localStorage.getItem("jambo_token");
        if (token != undefined) {
            this.authenticate_token(token); 
        }
    }
    
    static async authenticate_token(token: string) {
        try {
            let res = await APICallOpen.getData(`/api/authenticate_token/${token}`);
            if (res.status == 200) {
                APICallSecure.token = token;
            } else {
                this.log_out();
                window.location.reload();
            }
        } catch (error) {
            // log out User
        }
        
    }

    static log_out() {
        APICallSecure.token = "";
        localStorage.removeItem("jambo_token");
    }
}