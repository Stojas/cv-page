import { TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
