import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BistrotlandaisPage } from './bistrotlandais.page';

describe('BistrotlandaisPage', () => {
  let component: BistrotlandaisPage;
  let fixture: ComponentFixture<BistrotlandaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BistrotlandaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BistrotlandaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
