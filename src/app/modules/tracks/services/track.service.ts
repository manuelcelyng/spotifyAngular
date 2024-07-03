import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$:Observable<TrackModel[]> = of([]);
  
  dataTracksRandom$:Observable<TrackModel[]> = of([]);



  constructor() {
    const {data}:any =  (dataRaw as any).default
    this.dataTracksTrending$  = of(data)

    this.dataTracksRandom$ =  new Observable((observer) => {

      const trackExample: TrackModel  = {
        _id:9,
        name:'leve',
        album: 'Cartel de Santa',
        url:'htttp://',
        cover:'https://www.google.com/imgres?q=imagen%20cartel%20de%20santa&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa7%2FCartel%252BDe%252BSanta%252B1862_carteldesanta.jpg&imgrefurl=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FC%25C3%25A1rtel_de_Santa&docid=6l_B1-xKM7b1dM&tbnid=cjn-YX2KLQzd3M&vet=12ahUKEwj02pGP1YmHAxU7D0QIHdh2CfUQM3oECGcQAA..i&w=490&h=328&hcb=2&ved=2ahUKEwj02pGP1YmHAxU7D0QIHdh2CfUQM3oECGcQAA'
      }
      setTimeout(() => {
        observer.next([trackExample])
      }, 3500)
    })

   }
}
