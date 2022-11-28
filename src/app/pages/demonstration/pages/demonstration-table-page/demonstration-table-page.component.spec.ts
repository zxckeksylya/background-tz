import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstrationTablePageComponent } from './demonstration-table-page.component';

describe('DemonstrationTablePageComponent', () => {
  let component: DemonstrationTablePageComponent;
  let fixture: ComponentFixture<DemonstrationTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonstrationTablePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemonstrationTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
