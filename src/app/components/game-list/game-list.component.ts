import { Component, HostBinding, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';



@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  @HostBinding('class') classess = 'row'

  games: any = []

  constructor(private gameSvc: GamesService ) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(){
    this.gameSvc.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.error(err),
    )
  }


  deletedGame(id:string){
    this.gameSvc.deleteGame(id).subscribe(
      res => {
        console.log(res);
        this.getGames();
      },
      err => console.error(err)
    )
  }

}
