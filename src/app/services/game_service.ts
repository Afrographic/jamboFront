export interface Currency {
    name: string;
    active: boolean
}

export class GameService {
    static currencies: Currency[] = [
        {
            name: "USD",
            active: true,
        },
        {
            name: "FCFA",
            active: false,
        }
    ]
}