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
    service.watch({})
      .valueChanges
      .subscribe((events) => {
        expect(events.data.events).toContain({
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

  afterEach(() => controller.verify());
});
