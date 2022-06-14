import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
@Input() appHighlight="";
@Input() fontColor="";
@Input() fontBold="";
@Input() textSize="";
@Input() textTransform="";
  constructor(private el:ElementRef) {
    this.el.nativeElement.style.fontSize='';
    
   }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appHighlight='red', this.fontColor='white', this.fontBold='700', this.textSize='40px', this.textTransform='uppercase')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('','','','','')
  }
  private highlight(color:string, fontColor:string, fontBold:string, textSize:string, textTransform:string) {
    this.el.nativeElement.style.backgroundColor=color;
    this.el.nativeElement.style.color=fontColor;
    this.el.nativeElement.style.fontWeight=fontBold;
    this.el.nativeElement.style.fontSize=textSize;
    this.el.nativeElement.style.textTransform=textTransform;
    }
}
