import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeInItemComponent } from './fade-in-item.component';

describe('FadeInItemComponent', () => {
  let component: FadeInItemComponent;
  let fixture: ComponentFixture<FadeInItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FadeInItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeInItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
