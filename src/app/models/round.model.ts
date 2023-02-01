export class Round{
    round_id: number = 0;
    round_over: boolean = false;
    round_ongoing: boolean = false;
    round_created_date: Date = new Date();
    game_id: number = 0;
    number_id: number = 0;
    user_id: number = 0;
    game_bet: number = 0;
    game_duration: number = 0;

    clone(): Round {
        let round: Round = new Round();
        round.round_id = this.round_id;
        round.round_over = this.round_over;
        round.round_ongoing = this.round_ongoing;
        round.round_created_date = this.round_created_date;
        round.game_id = this.game_id;
        round.number_id = this.number_id;
        round.user_id = this.user_id;
        round.game_bet = this.game_bet;
        round.game_duration = this.game_duration;
        return round;
    }

    static from_json(roundJSON: any) {
        let round: Round = new Round();
        round.round_id = roundJSON.round_id;
        round.round_over = parseInt(roundJSON.round_over) == 1;
        round.round_ongoing = parseInt(roundJSON.round_ongoing) == 1;
        round.round_created_date = roundJSON.round_created_date;
        round.game_id = roundJSON.game_id;
        round.user_id = roundJSON.user_id;
        round.game_bet = roundJSON.game_bet;
        round.game_duration = roundJSON.game_duration;
        return round;
    }

    static from_json_array(roundJSONArray: any) {
        let roundArray: Round[] = [];
        for (const roundItem of roundJSONArray) {
            roundArray.push(this.from_json(roundItem));
        }
        return roundArray;
    }


    static to_json(round: Round) {
        return {
            round_id: round.round_id,
            round_over: round.round_over,
            round_ongoing: round.round_ongoing,
            round_created_date: round.round_created_date,
            game_id: round.game_id,
            number_id: round.number_id,
            user_id: round.user_id,
            game_bet: round.game_bet,
            game_duration: round.game_duration,
        };
    }

    static to_json_array(rounds: Round[]) {
        let roundJSONArray: any = [];
        for (const roundItem of rounds) {
            roundJSONArray.push(this.to_json(roundItem));
        }
        return roundJSONArray;
    }

}