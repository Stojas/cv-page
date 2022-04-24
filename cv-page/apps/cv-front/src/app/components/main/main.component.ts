import { Component, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'cv-page-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {


  constructor(private readonly _renderer: Renderer2) {
    console.warn("JESTEM MAIN")
  }


 
}
