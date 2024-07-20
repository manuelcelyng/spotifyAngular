import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { of,Observable } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  listResults$:Observable<any> = of([]);


  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  receiveData(event:string):void {
    //TODO: Agarras el termino y sabes que solo se ejecuta cuando tienes 3 caracteres 
    console.log("ESTOY EN EL PADRE")
    this.listResults$ = this.searchService.searchTracks$(event)
  
  }

}
