import { Round } from './../models/round.model';
import { APICallSecure } from 'src/app/services/api_call_secure';
export class Round_Service{

    static async get_preparing() {
        let res = await APICallSecure.get_data("/preparing_rounds");
        let rounds_json = res.data;
        return Round.from_json_array(rounds_json);
    }

    static async get_ongoing() {
        let res = await APICallSecure.get_data("/ongoing_rounds");
        let rounds_json = res.data;
        return Round.from_json_array(rounds_json);
    }

    static async join(round_id:number) {
        let body = {
            round_id:round_id
        }
        let res = await APICallSecure.post_data("/round_player", body);
        return res.response.status;
    }

    static async user_on_round(round_id: number) {
        let res = await APICallSecure.get_data("/user_on_round/round/" + round_id);
        return res.data;
    }
}