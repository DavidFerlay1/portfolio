import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDetailFormComponent } from './experience-detail-form.component';

describe('ExperienceDetailFormComponent', () => {
  let component: ExperienceDetailFormComponent;
  let fixture: ComponentFixture<ExperienceDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceDetailFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
