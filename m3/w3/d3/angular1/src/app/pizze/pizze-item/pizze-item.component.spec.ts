import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzeItemComponent } from './pizze-item.component';

describe('PizzeItemComponent', () => {
  let component: PizzeItemComponent;
  let fixture: ComponentFixture<PizzeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
