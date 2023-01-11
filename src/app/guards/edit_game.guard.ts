import { Game_Service } from '../services/game_service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user_service';

@Injectable({
    providedIn: 'root'
})
export class Edit_Game_Guard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(): any {

        if (Game_Service.game.game_id != -1) {
            return true
        } else {
            this.router.navigate(['/']);
        }
    }

}
