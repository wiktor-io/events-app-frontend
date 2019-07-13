import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListComponent } from './events-list.component';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { EventsListService, Event } from '../services/events-list.service';
import { from } from 'rxjs';

describe('EventsListComponent', () => {
  let component: EventsListComponent;
  let fixture: ComponentFixture<EventsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsListComponent ],
      imports: [ ApolloTestingModule ],
      providers: [ EventsListService ]
    })
    .compileComponents();
  });

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EventsListComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display events as html', async(() => {
    component.events = from([[{
      id: 0,
      name: 'Joe Bonamassa Live',
      description: 'Live in Concert'
    }]]);

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(fixture.nativeElement.querySelectorAll('div').length).toBeGreaterThanOrEqual(1);
    });
  }));
});
