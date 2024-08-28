import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisoContentComponent } from './miso-content.component';

describe('MisoContentComponent', () => {
  let component: MisoContentComponent;
  let fixture: ComponentFixture<MisoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisoContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
