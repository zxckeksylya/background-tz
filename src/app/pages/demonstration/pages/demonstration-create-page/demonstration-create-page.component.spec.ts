import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstrationCreatePageComponent } from './demonstration-create-page.component';

describe('DemonstrationCreatePageComponent', () => {
  let component: DemonstrationCreatePageComponent;
  let fixture: ComponentFixture<DemonstrationCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonstrationCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemonstrationCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
