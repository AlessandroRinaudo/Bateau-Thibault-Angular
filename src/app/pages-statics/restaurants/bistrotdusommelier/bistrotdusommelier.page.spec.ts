import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BistrotdusommelierPage } from './bistrotdusommelier.page';

describe('BistrotdusommelierPage', () => {
  let component: BistrotdusommelierPage;
  let fixture: ComponentFixture<BistrotdusommelierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BistrotdusommelierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BistrotdusommelierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
