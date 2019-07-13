import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListComponent, EVENTS_LIST_QUERY } from './events-list.component';
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';

describe('EventsListComponent', () => {
  let controller: ApolloTestingController;
  let component: EventsListComponent;
  let fixture: ComponentFixture<EventsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsListComponent ],
      imports: [ ApolloTestingModule ]
    })
    .compileComponents();

    controller = TestBed.get(ApolloTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get events', () => {
    component.getEvents().subscribe((event) => {
      console.log(event);
      expect(event.data.events).toContain({
          id: 0,
          name: 'Joe Bonamassa Live',
          description: 'Live in Concert'
        });
    });

    const op = controller.expectOne(EVENTS_LIST_QUERY);

    op.flush({
      data : {
        events: [
          {
            id: 0,
            name: 'Joe Bonamassa Live',
            description: 'Live in Concert'
          }
        ]
      }
    });
  });

  afterEach(() => {
    controller.verify();
  });
});
