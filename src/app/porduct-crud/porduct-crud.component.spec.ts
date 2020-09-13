import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorductCRUDComponent } from './porduct-crud.component';

describe('PorductCRUDComponent', () => {
  let component: PorductCRUDComponent;
  let fixture: ComponentFixture<PorductCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorductCRUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorductCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
