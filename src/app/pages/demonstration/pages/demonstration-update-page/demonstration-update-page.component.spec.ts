import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstrationUpdatePageComponent } from './demonstration-update-page.component';

describe('DemonstrationUpdatePageComponent', () => {
  let component: DemonstrationUpdatePageComponent;
  let fixture: ComponentFixture<DemonstrationUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonstrationUpdatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemonstrationUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
