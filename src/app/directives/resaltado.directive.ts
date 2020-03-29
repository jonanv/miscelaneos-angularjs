import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") nuevoColor: string;

  constructor(
    private elementRef: ElementRef
  ) {
    console.log("Directiva llamada");
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null);
  }

  private resaltar(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
