import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/gameInt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  //Crud

  getGames() {
    return this.http.get(`${this.API_URL}/games`);
  }

  getOneGames(id: string) {
    return this.http.get(`${this.API_URL}/games/${id}`);
  }

  saveGame(game: Game) {
    return this.http.post(`${this.API_URL}/games`, game);
  }

  updateGame(id: string | number | undefined , updatedGame: Game): Observable<Game> {
    return this.http.put(`${this.API_URL}/games/${id}`, updatedGame);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.API_URL}/games/${id}`);
  }
}
