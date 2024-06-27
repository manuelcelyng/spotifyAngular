import { Input, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'  //TODO: Nombre de nuestra directiva
})
export class ImgBrokenDirective {
  //TODO: host Host HOST <- huesped

  @Input() CustomImg:string = ''
  @HostListener('error') handleError():void{

    const elNative = this.elHost.nativeElement;

    console.log('🔴 Esta imagen reventó', this.elHost)
    elNative.src = this.CustomImg
  }

  constructor(private elHost:ElementRef) { 
  
  }

} 
