import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcmeComponent } from './welcme.component';

describe('WelcmeComponent', () => {
  let component: WelcmeComponent;
  let fixture: ComponentFixture<WelcmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
