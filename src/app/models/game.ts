export class Game{
    game_id: number = -1;
    game_bet: number = 100;
    game_duration: number = 60;
    game_created_date: Date = new Date();
    user_id: number = 0;

    clone(): Game {
        let game: Game = new Game();
        game.game_id = this.game_id;
        game.game_bet = this.game_bet;
        game.game_duration = this.game_duration;
        game.game_created_date = this.game_created_date;
        game.user_id = this.user_id
        return game;
    }

    static fromJSON(gameJSON: any) {
        let game: Game = new Game();
        game.game_id = gameJSON.game_id;
        game.game_bet = gameJSON.game_bet;
        game.game_duration = gameJSON.game_duration;
        game.game_created_date = gameJSON.game_created_date;
        game.user_id = gameJSON.user_id;

        return game;
    }

    static fromJSONArray(gameJSONArray: any) {
        let gameArray: Game[] = [];
        for (const gameItem of gameJSONArray) {
            gameArray.push(this.fromJSON(gameItem));
        }
        return gameArray;
    }

    static toJSON(game: Game) {
        return {
            game_id: game.game_id,
            game_bet: game.game_bet,
            game_duration: game.game_duration,
            game_created_date: game.game_created_date,
            user_id: game.user_id,
        };
    }

    static toJSONArray(games: Game[]) {
        let gameJSONArray: any = [];
        for (const gameItem of games) {
            gameJSONArray.push(this.toJSON(gameItem));
        }
        return gameJSONArray;
    }

}