import { User } from '../models/user';
import { APICallOpen } from './api_call_open';
import { APICallSecure } from "./api_call_secure";

export class UserService {
    static connected: boolean = false;
    static user: User = new User();

    static save_token(token: string) {
        localStorage.setItem("jambo_token", token);
    }

    static async init() {
        let token = localStorage.getItem("jambo_token");
        if (token != undefined) {
           await this.validate_token(token);
        }
    }

    static async validate_token(token: string) {
        try {
            let res = await APICallOpen.get_data(`/user/token/${token}`);
            if (res.response.status == 200) {
                APICallSecure.token = token;
                await this.get_user_data();
                this.connected = true;
            } 
        } catch (error) {
            // log out User
        }

    }

    static async get_user_data() {
        let res: any = await APICallSecure.get_data("/user");
        this.user = User.fromJSON(res.data.user_data);
    }


    static log_out() {
        APICallSecure.token = "";
        localStorage.removeItem("jambo_token");
    }

    static async check_if_pseudo_taken() {
        let res = await APICallOpen.get_data("/user/user_pseudo/" + this.user.user_pseudo);
        return res.data.already_taken
    }

    static async check_if_email_taken() {
        let res = await APICallOpen.get_data("/user/user_email/" + this.user.user_email);
        return res.data.already_taken
    }

    static async register() {
        let res = await APICallOpen.post_data("/user", this.user);
        return res;
    }
}