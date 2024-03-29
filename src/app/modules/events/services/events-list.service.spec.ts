import { TestBed } from '@angular/core/testing';

import { EVENTS_LIST_QUERY, EventsListService } from './events-list.service';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';

describe('EventsListService', () => {
  let controller: ApolloTestingController;
  let service: EventsListService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ApolloTestingModule ]
    });

    controller = TestBed.get(ApolloTestingController);
    service = TestBed.get(EventsListService);
  });

  it('should be created', () => {
    service = TestBed.get(EventsListService);
    expect(service).toBeTruthy();
  });

  it('should get events', () => {
    service.watch({filter: {}})
      .valueChanges
      .subscribe((events) => {
        expect(events.data.events).toContain({
          id: 1,
          name: 'Joe Bonamassa Live',
          organiser: {
            id: 1,
            name: 'Edinburgh Playhouse',
            description: ''
          },
          description: 'Different Shades Of Blue Live',
          venue: 'Edinburgh Playhouse',
          venue_location: 'Edinburgh',
          availability: 150,
          capacity: 200,
          type: 'Music Concert',
          category: 'Entertainment',
          status: 'published',
          recurrence: 'single',
          date: '12/03/2019',
          image: '/img.jpg',
          price: 120
        });
      });

    const op = controller.expectOne(EVENTS_LIST_QUERY);

    op.flush({
      data : {
        events: [
          {
            id: 1,
            name: 'Joe Bonamassa Live',
            organiser: {
              id: 1,
              name: 'Edinburgh Playhouse',
              description: ''
            },
            description: 'Different Shades Of Blue Live',
            venue: 'Edinburgh Playhouse',
            venue_location: 'Edinburgh',
            availability: 150,
            capacity: 200,
            type: 'Music Concert',
            category: 'Entertainment',
            status: 'published',
            recurrence: 'single',
            date: '12/03/2019',
            image: '/img.jpg',
            price: 120
          }
        ]
      }
    });
  });

  afterEach(() => controller.verify());
});
