import { AboutComponent } from './../about/about.component';
import { SkillsViewComponent } from './../skills-view/skills-view.component';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [MainComponent, SkillsViewComponent, AboutComponent],
  imports: [MainRoutingModule, NbEvaIconsModule, NbIconModule],
  providers: [],
  exports: [MainComponent, SkillsViewComponent, AboutComponent],
})
export class MainModule {}
