import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPropertyComponent } from './saved-property.component';

describe('SavedPropertyComponent', () => {
  let component: SavedPropertyComponent;
  let fixture: ComponentFixture<SavedPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
