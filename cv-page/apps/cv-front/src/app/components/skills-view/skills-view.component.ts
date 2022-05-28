import { Component } from '@angular/core';

@Component({
  selector: 'cv-page-skills-view',
  templateUrl: './skills-view.component.html',
  styleUrls: ['./skills-view.component.scss'],
})
export class SkillsViewComponent {

  public onScrollDown(): void {
    const pageHeight = window.innerHeight;
    window.scrollBy({ left: 0, top:  pageHeight, behavior : "smooth" });
  }
}
