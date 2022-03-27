import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeInBlockComponent } from './fade-in-block.component';

describe('FadeInBlockComponent', () => {
  let component: FadeInBlockComponent;
  let fixture: ComponentFixture<FadeInBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FadeInBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeInBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
