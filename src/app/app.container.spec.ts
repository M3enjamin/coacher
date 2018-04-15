import { async, TestBed } from '@angular/core/testing';
import { AppContainer } from './app.container';
import { LayoutStoreService } from '@app/core/store/layout/layout-store.service';
import { RouterTestingModule } from '@angular/router/testing';

class MockLayoutStoreService {
  dispatchOpenNewDrillForm() {
    console.log('dispatchOpenNewDrillForm');
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [AppContainer],
      providers: [
        {
          provide: LayoutStoreService,
          useClass: MockLayoutStoreService
        }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppContainer);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
