import { APICallSecure } from './api_call_secure';
import { Game } from './../models/game';

export class Game_Service {
    static game: Game = new Game();

    static async create(game: Game) {
        return await APICallSecure.post_data("/game", game);
    }

    static async get_all() {
        return await APICallSecure.get_data("/game");
    }

    static async delete(game_id: number) {
        return await APICallSecure.delete_data("/game/" + game_id);
    }

    static async edit_duration(game: Game) {
        let res = await APICallSecure.update_data("/duration/game/" + game.game_id, game);
        return res.response.status;
    }

    static async edit_bet(game: Game) {
        let res = await APICallSecure.update_data("/bet/game/" + game.game_id, game);
        return res.response.status;
    }

    static async create_round(game_id: number) {
        return await APICallSecure.post_data("/round", { game_id });
    }
}