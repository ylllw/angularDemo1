import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdateFormComponent } from './product-update-form.component';

describe('ProductUpdateFormComponent', () => {
  let component: ProductUpdateFormComponent;
  let fixture: ComponentFixture<ProductUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
