import { ProjectsComponent } from './../projects/projects.component';
import { AboutComponent } from './../about/about.component';
import { SkillsViewComponent } from './../skills-view/skills-view.component';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MainComponent, 
    SkillsViewComponent, 
    AboutComponent,
    ProjectsComponent
],
  imports: [MainRoutingModule, NbEvaIconsModule, NbIconModule, CommonModule],
  providers: [],
  exports: [MainComponent, SkillsViewComponent, AboutComponent, ProjectsComponent],
})
export class MainModule {}
