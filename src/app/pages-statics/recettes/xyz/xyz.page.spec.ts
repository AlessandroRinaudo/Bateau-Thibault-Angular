import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { XyzPage } from './xyz.page';

describe('XyzPage', () => {
  let component: XyzPage;
  let fixture: ComponentFixture<XyzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XyzPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(XyzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
