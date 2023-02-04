export class Round_Player{
    round_id: number = 0;
    number_id: number = 0;
    user_id: number = 0;

    clone(): Round_Player {
        let round_player: Round_Player = new Round_Player();
        round_player.round_id = this.round_id;
        round_player.number_id = this.number_id;
        round_player.user_id = this.user_id
        return round_player;
    }

    static from_json(round_playerJSON: any) {
        let round_player: Round_Player = new Round_Player();
        round_player.round_id = round_playerJSON.round_id;
        round_player.number_id = round_playerJSON.number_id;
        round_player.user_id = round_playerJSON.user_id;

        return round_player;
    }

    static from_json_array(round_playerJSONArray: any) {
        let round_playerArray: Round_Player[] = [];
        for (const round_playerItem of round_playerJSONArray) {
            round_playerArray.push(this.from_json(round_playerItem));
        }
        return round_playerArray;
    }


    static to_json(round_player: Round_Player) {
        return {
            round_id: round_player.round_id,
            number_id: round_player.number_id,
            user_id: round_player.user_id,
        };
    }

    static to_json_array(round_players: Round_Player[]) {
        let round_playerJSONArray: any = [];
        for (const round_playerItem of round_players) {
            round_playerJSONArray.push(this.to_json(round_playerItem));
        }
        return round_playerJSONArray;
    }

}