import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //TODO: Programación reactiva

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockCover:TrackModel = {
    cover:'https://i.scdn.co/image/ab67616d0000b2732d1f4980561c7b2a9920c700',
    album:'Gioli & ashi',
    name:'BEBE (Oficial)',
    url:'http://localhost/track.mp3',
    _id:1
  }


  listObservers$: Array<Subscription> = []

  constructor(private multimediaService:MultimediaService) { }

  ngOnInit(): void {

  const observer1$:Subscription = this.multimediaService.callback.subscribe(
    (response) => {
      console.log('Recibiendo canción....', response)
    }
  )

  this.listObservers$ = [observer1$]

  
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(observer => observer.unsubscribe())
  }

}
