import {EventEmitter,  Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  /**
   * Esta propiedad se crea para emitir eventos entre componentes
   */
  callback : EventEmitter<any>  = new EventEmitter; 

  // myObservable1$:Observable<any> =  new Observable();
  // myObservable1$: Subject<any> = new Subject()
  
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
  public audio!:HTMLAudioElement; //TODO <audio>
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00')
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00')

  constructor() {
    this.audio =  new Audio();
    this.trackInfo$.subscribe(
      (responseOk) => {

        if(responseOk){
          this.setAudio(responseOk)
        }
      }
    )

    this.listenAllEvents()
   }


   private listenAllEvents() :void {
    this.audio.addEventListener(
      'timeupdate',
      this.calculateTime,
      false
    )  
   }

   private calculateTime =  () => {
    console.log("Disparando evento")
    const {duration, currentTime} =  this.audio
    console.table([duration, currentTime])
    this.setTimeElapsed(currentTime)
    this.setTimeRemaining(currentTime, duration)
   }

   private setTimeElapsed(currentTime:number):void {
    //TODO 5.1,5.2,5.3 <- tiempos que llegan
    let seconds = Math.floor(currentTime % 60); //TODO Para obtener los segundos
    let minutes = Math.floor(currentTime / 60) % 60; //TODO Minutos en numero entero
    //TODO 00:00 ---> 01:05 ---> 10:15
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat =  `${displayMinutes}:${displaySeconds}`
    //EMITIR LA INFORMACIÓN AL OBSERVABLE PARA ACTUALIZAR EL VALOR SS
    this.timeElapsed$.next(displayFormat)
  }
  
  private setTimeRemaining(currentTime: number, duration:number): void {
    let timeLeft = duration - currentTime;
    let seconds = Math.floor(timeLeft % 60); //TODO Para obtener los segundos
    let minutes = Math.floor(timeLeft / 60) % 60; //TODO Minutos en numero entero 
    //TODO 00:00 ---> 01:05 ---> 10:15
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat =  `-${displayMinutes}:${displaySeconds}`
    //EMITIR LA INFORMACIÓN AL OBSERVABLE PARA ACTUALIZAR EL VALOR SS
    this.timeRemaining$.next(displayFormat)
  }

   public setAudio(track: TrackModel):void{
    this.audio.src = track.url;
    this.audio.play()
   }

}
