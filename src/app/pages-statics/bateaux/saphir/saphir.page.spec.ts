import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaphirPage } from './saphir.page';

describe('SaphirPage', () => {
  let component: SaphirPage;
  let fixture: ComponentFixture<SaphirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaphirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaphirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
