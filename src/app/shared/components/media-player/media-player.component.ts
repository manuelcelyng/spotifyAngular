import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover:any = {
    cover:'https://i.scdn.co/image/ab67616d0000b2732d1f4980561c7b2a9920c700',
    album:'Gioli & ashi',
    name:'BEBE (Oficial)'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
