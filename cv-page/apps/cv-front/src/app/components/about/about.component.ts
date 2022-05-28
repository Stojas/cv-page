import { Component} from '@angular/core';
declare const Snap: any;
declare const mina: any;
@Component({
  selector: 'cv-page-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {

  public onScroll(side: 'top' | 'bottom' = 'top'): void {
    const pageHeight = window.innerHeight;
    window.scrollBy({ left: 0, top:  pageHeight * (side === 'top' ? -1 : 1), behavior : "smooth" });
  }

  public onGoToProjects(): void {
    this.onScroll('bottom');
  }
}
