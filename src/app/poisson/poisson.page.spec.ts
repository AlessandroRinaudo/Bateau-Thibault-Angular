import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoissonPage } from './poisson.page';

describe('PoissonPage', () => {
  let component: PoissonPage;
  let fixture: ComponentFixture<PoissonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoissonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoissonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
