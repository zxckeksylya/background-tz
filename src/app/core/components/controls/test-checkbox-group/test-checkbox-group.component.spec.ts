import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCheckboxGroupComponent } from './test-checkbox-group.component';

describe('TestCheckboxGroupComponent', () => {
  let component: TestCheckboxGroupComponent;
  let fixture: ComponentFixture<TestCheckboxGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCheckboxGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCheckboxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
