import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPackagesComponent } from './buy-packages.component';

describe('BuyPackagesComponent', () => {
  let component: BuyPackagesComponent;
  let fixture: ComponentFixture<BuyPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyPackagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
