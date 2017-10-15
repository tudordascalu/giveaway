import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomItemComponent } from './zoom-item.component';

describe('ZoomItemComponent', () => {
  let component: ZoomItemComponent;
  let fixture: ComponentFixture<ZoomItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
