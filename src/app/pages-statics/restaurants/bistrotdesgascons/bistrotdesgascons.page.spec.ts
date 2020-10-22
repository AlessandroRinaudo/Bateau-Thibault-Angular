import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BistrotdesgasconsPage } from './bistrotdesgascons.page';

describe('BistrotdesgasconsPage', () => {
  let component: BistrotdesgasconsPage;
  let fixture: ComponentFixture<BistrotdesgasconsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BistrotdesgasconsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BistrotdesgasconsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
