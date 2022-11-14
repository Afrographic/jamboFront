export class Game{
    game_id: number = 0;
    game_owner_id: number = 0;
    game_created_date: string="";
    game_bet: string="";
    game_currency: string="";
    game_ongoing: boolean = false;

    constructor() { }
    

    static fromJSON(gameJSON: any) {
        let game: Game = new Game();
        game.game_id = gameJSON.game_id;
        game.game_owner_id = gameJSON.game_owner_id;
        game.game_created_date = gameJSON.game_created_date;
        game.game_bet = gameJSON.game_bet;
        game.game_currency = gameJSON.game_currency;
        game.game_ongoing = gameJSON.game_ongoing;
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
            game_owner_id: game.game_owner_id,
            game_created_date: game.game_created_date,
            game_bet: game.game_bet,
            game_currency: game.game_currency,
            game_ongoing: game.game_ongoing,
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