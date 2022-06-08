import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPreviewFormComponent } from './project-preview-form.component';

describe('ProjectPreviewFormComponent', () => {
  let component: ProjectPreviewFormComponent;
  let fixture: ComponentFixture<ProjectPreviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPreviewFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPreviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
