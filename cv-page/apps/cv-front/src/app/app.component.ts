import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'cv-page-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cv-front';

  ngOnInit(){
    AOS.init();
    }
}
