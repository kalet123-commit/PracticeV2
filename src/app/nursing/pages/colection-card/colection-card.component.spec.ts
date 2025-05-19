import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionCardComponent } from './colection-card.component';

describe('ColectionCardComponent', () => {
  let component: ColectionCardComponent;
  let fixture: ComponentFixture<ColectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColectionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
