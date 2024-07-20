import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, mergeMap, tap, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

  constructor(private httpClient:HttpClient) {

  }



  /**
   * 
   * @param listTracks 
   * @param id 
   * @returns Esta retorna una promesa que filtra por id un array de TrackModel
   */
  private skipById(listTracks: TrackModel[], id:number):Promise<TrackModel[]>{
    return new Promise((resolve, reject) => {
      const listTmp =  listTracks.filter((a)  => a._id != id)
      resolve(listTmp)
    })
  }

  /**
   * 
   * @returns Devolver todas las canciones! molonas! 🙌🙌 
   * 
   */
  getAllTracks$(): Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`) //TODO: retorna un observable
    .pipe(
      map(({data}:any) => data)
    )
  }


  /**
   * 
   * @returns Devolver canciones random! 🙌🙌 
   * 
   */
  getAllRandom$(){
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      mergeMap(  //TODO: Usando una promesa <3
        ({data}:any) => this.skipById(data, 2)
      ),
      // map(
      //   (dataRevertida:any) => {
      //     return dataRevertida.filter((track:TrackModel) => track._id != 1)
      //   }
      // )
      //tap(data => console.log(data, '🙌🔴🔴')), //TODO: para poder hacer un console.log dentro del pipe 
      catchError(
        (err) => {
          const { status, statusText}  = err;
          console.log('Algo pasó aquí D:', [status,statusText] );
          return of([])
        }
      )
    )


    
  }
}
