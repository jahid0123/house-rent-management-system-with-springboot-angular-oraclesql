import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockedPropertyComponent } from './unlocked-property.component';

describe('UnlockedPropertyComponent', () => {
  let component: UnlockedPropertyComponent;
  let fixture: ComponentFixture<UnlockedPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockedPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockedPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
