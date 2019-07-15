import { TestBed } from '@angular/core/testing';

import { CREATE_EVENT_QUERY, CreateEventService } from './create-event.service';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';

describe('UpdateEventService', () => {
  let controller: ApolloTestingController;
  let service: CreateEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ApolloTestingModule ],
      providers: [ CreateEventService ]
    });

    controller = TestBed.get(ApolloTestingController);
    service = TestBed.get(CreateEventService);
  });

  it('should be created', () => {
    service = TestBed.get(CreateEventService);
    expect(service).toBeTruthy();
  });

  it('should create event', () => {
    service.mutate({
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

    const op = controller.expectOne(CREATE_EVENT_QUERY);

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
