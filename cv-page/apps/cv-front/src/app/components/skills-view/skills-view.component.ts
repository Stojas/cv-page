import { Component, HostListener, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'cv-page-skills-view',
  templateUrl: './skills-view.component.html',
  styleUrls: ['./skills-view.component.scss'],
})
export class SkillsViewComponent {


  constructor(private _renderer: Renderer2) {}

}
