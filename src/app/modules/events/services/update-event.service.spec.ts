import { TestBed } from '@angular/core/testing';

import { UPDATE_EVENT_QUERY, UpdateEventService } from './update-event.service';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';

describe('UpdateEventService', () => {
  let controller: ApolloTestingController;
  let service: UpdateEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ApolloTestingModule ],
      providers: [ UpdateEventService ]
    });

    controller = TestBed.get(ApolloTestingController);
    service = TestBed.get(UpdateEventService);
  });

  it('should be created', () => {
    service = TestBed.get(UpdateEventService);
    expect(service).toBeTruthy();
  });

  it('should create event', () => {
    service.mutate({
        id: 1,
        input: {
          name: 'Blues Busters',
          organiser: 1,
          description:  'Different Shades Of Blue Live',
          venue:  'Edinburgh Playhouse',
          venue_location: 'Edinburgh',
          availability:  150,
          capacity:  200,
          type:  'Music Concert',
          category:  'Entertainment',
          status:  'published',
          recurrence:  'single',
          date:  '12/03/2019',
          image:  '/img.jpg',
          price:  120
        }
      })
      .subscribe((response) => {
        expect(response.data.event).toEqual({
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

    const op = controller.expectOne(UPDATE_EVENT_QUERY);

    op.flush({
      data : {
        event:
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
      }
    });
  });

  afterEach(() => controller.verify());
});
