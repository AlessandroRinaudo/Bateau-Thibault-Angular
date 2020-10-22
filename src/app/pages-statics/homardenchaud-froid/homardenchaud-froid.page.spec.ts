import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomardenchaudFroidPage } from './homardenchaud-froid.page';

describe('HomardenchaudFroidPage', () => {
  let component: HomardenchaudFroidPage;
  let fixture: ComponentFixture<HomardenchaudFroidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomardenchaudFroidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomardenchaudFroidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
