import { APICallSecure } from '../services/api_call_secure';
export class User {



    user_id: number = 0;
    user_pseudo: string = "";
    user_dateCreated: string = "";
    user_email: string = "";
    user_password: string = "";
    user_confirm_password: string = "";
    user_balance: number = 0;
    user_account_active: boolean = false;
    user_verification_code: string = "";
    user_address: string = "";
    user_paypal_address: string = "";
    user_withdrawal_mtn_name: string = "";
    user_withdrawal_mtn_number: string = "";
    user_withdrawal_orange_name: string = "";
    user_withdrawal_orange_number: string = "";
    user_country: string = "";
    user_real_name: string = "";

    constructor() {

    }

    static fromJSON(userJSON: any) {
        let user: User = new User();
        user.user_id = userJSON.user_id;
        user.user_pseudo = userJSON.user_pseudo;
        user.user_dateCreated = userJSON.user_dateCreated;
        user.user_email = userJSON.user_email;
        user.user_password = userJSON.user_password;
        user.user_balance = userJSON.user_balance;
        user.user_account_active = userJSON.user_account_active;
        user.user_verification_code = userJSON.user_verification_code;
        user.user_address = userJSON.user_address;
        user.user_paypal_address = userJSON.user_paypal_address;
        user.user_withdrawal_mtn_name = userJSON.user_withdrawal_mtn_name;
        user.user_withdrawal_mtn_number = userJSON.user_withdrawal_mtn_number;
        user.user_withdrawal_orange_name = userJSON.user_withdrawal_orange_name;
        user.user_withdrawal_orange_number = userJSON.user_withdrawal_orange_number;
        user.user_country = userJSON.user_country;
        user.user_real_name = userJSON.user_real_name;

        return user;
    }

    static fromJSONArray(userJSONArray: any) {
        let userArray: User[] = [];
        for (const userItem of userJSONArray) {
            userArray.push(this.fromJSON(userItem));
        }
        return userArray;
    }


    static toJSON(user: User) {
        return {
            user_id: user.user_id,
            user_pseudo: user.user_pseudo,
            user_dateCreated: user.user_dateCreated,
            user_email: user.user_email,
            user_password: user.user_password,
            user_balance: user.user_balance,
            user_account_active: user.user_account_active,
            user_verification_code: user.user_verification_code,
            user_address: user.user_address,
            user_paypal_address: user.user_paypal_address,
            user_withdrawal_mtn_name: user.user_withdrawal_mtn_name,
            user_withdrawal_mtn_number: user.user_withdrawal_mtn_number,
            user_withdrawal_orange_name: user.user_withdrawal_orange_name,
            user_withdrawal_orange_number: user.user_withdrawal_orange_number,
            user_country: user.user_country,
            user_real_name: user.user_real_name,
        };
    }

    static toJSONArray(users: User[]) {
        let userJSONArray: any = [];
        for (const userItem of users) {
            userJSONArray.push(this.toJSON(userItem));
        }
        return userJSONArray;
    }


}