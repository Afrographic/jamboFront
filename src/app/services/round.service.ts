import { Round } from './../models/round.model';
import { APICallSecure } from 'src/app/services/api_call_secure';
export class Round_Service{
    static async get_preparing() {
        let res = await APICallSecure.get_data("/preparing_rounds");
        let rounds_json = res.data;
        return Round.from_json_array(rounds_json);
    }
}