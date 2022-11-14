import { APICallSecure } from './../services/api_call_secure';
export class Player {

  

    player_id: number = 0;
    player_pseudo: string = "";
    player_dateCreated: string = "";
    player_email: string = "";
    player_password: string = "";
    player_confirm_password: string = "";
    player_balance: number = 0;
    player_account_active: boolean = false;
    player_verification_code: string = "";
    player_address: string = "";
    player_paypal_address: string = "";
    player_withdrawal_mtn_name: string = "";
    player_withdrawal_mtn_number: string = "";
    player_withdrawal_orange_name: string = "";
    player_withdrawal_orange_number: string = "";
    player_country: string = "";
    player_real_name: string = "";

    constructor() {

    }

    static fromJSON(playerJSON: any) {
        let player: Player = new Player();
        player.player_id = playerJSON.player_id;
        player.player_pseudo = playerJSON.player_pseudo;
        player.player_dateCreated = playerJSON.player_dateCreated;
        player.player_email = playerJSON.player_email;
        player.player_password = playerJSON.player_password;
        player.player_balance = playerJSON.player_balance;
        player.player_account_active = playerJSON.player_account_active;
        player.player_verification_code = playerJSON.player_verification_code;
        player.player_address = playerJSON.player_address;
        player.player_paypal_address = playerJSON.player_paypal_address;
        player.player_withdrawal_mtn_name = playerJSON.player_withdrawal_mtn_name;
        player.player_withdrawal_mtn_number = playerJSON.player_withdrawal_mtn_number;
        player.player_withdrawal_orange_name = playerJSON.player_withdrawal_orange_name;
        player.player_withdrawal_orange_number = playerJSON.player_withdrawal_orange_number;
        player.player_country = playerJSON.player_country;
        player.player_real_name = playerJSON.player_real_name;

        return player;
    }

    static fromJSONArray(playerJSONArray: any) {
        let playerArray: Player[] = [];
        for (const playerItem of playerJSONArray) {
            playerArray.push(this.fromJSON(playerItem));
        }
        return playerArray;
    }


    static toJSON(player: Player) {
        return {
            player_id: player.player_id,
            player_pseudo: player.player_pseudo,
            player_dateCreated: player.player_dateCreated,
            player_email: player.player_email,
            player_password: player.player_password,
            player_balance: player.player_balance,
            player_account_active: player.player_account_active,
            player_verification_code: player.player_verification_code,
            player_address: player.player_address,
            player_paypal_address: player.player_paypal_address,
            player_withdrawal_mtn_name: player.player_withdrawal_mtn_name,
            player_withdrawal_mtn_number: player.player_withdrawal_mtn_number,
            player_withdrawal_orange_name: player.player_withdrawal_orange_name,
            player_withdrawal_orange_number: player.player_withdrawal_orange_number,
            player_country: player.player_country,
            player_real_name: player.player_real_name,
        };
    }

    static toJSONArray(players: Player[]) {
        let playerJSONArray: any = [];
        for (const playerItem of players) {
            playerJSONArray.push(this.toJSON(playerItem));
        }
        return playerJSONArray;
    }


}