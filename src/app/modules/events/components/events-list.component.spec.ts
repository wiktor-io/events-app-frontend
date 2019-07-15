import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListComponent } from './events-list.component';
import {ApolloTestingController, ApolloTestingModule} from 'apollo-angular/testing';
import {EVENTS_LIST_QUERY, EventsListService} from '../services/events-list.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DatatableComponent, NgxDatatableModule } from '@swimlane/ngx-datatable';

describe('EventsListComponent', () => {
  let component: EventsListComponent;
  let datatableStubComponent: DatatableComponent;
  let datatableStubComponentFixture: ComponentFixture<DatatableComponent>;
  let fixture: ComponentFixture<EventsListComponent>;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsListComponent ],
      imports: [ ApolloTestingModule, NgxDatatableModule ],
      providers: [ EventsListService ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    controller = TestBed.get(ApolloTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListComponent);
    datatableStubComponentFixture = TestBed.createComponent(DatatableComponent);

    component = fixture.componentInstance;
    datatableStubComponent = datatableStubComponentFixture.componentInstance;

    fixture.detectChanges();
    datatableStubComponentFixture.detectChanges();

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

    controller.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create datatable', () => {
    expect(datatableStubComponent).toBeTruthy();
  });
});
