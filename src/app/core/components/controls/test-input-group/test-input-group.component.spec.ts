import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInputGroupComponent } from './test-input-group.component';

describe('TestInputGroupComponent', () => {
  let component: TestInputGroupComponent;
  let fixture: ComponentFixture<TestInputGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestInputGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestInputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
