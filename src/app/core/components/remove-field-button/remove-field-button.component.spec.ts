import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFieldButtonComponent } from './remove-field-button.component';

describe('RemoveFieldButtonComponent', () => {
  let component: RemoveFieldButtonComponent;
  let fixture: ComponentFixture<RemoveFieldButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFieldButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveFieldButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
