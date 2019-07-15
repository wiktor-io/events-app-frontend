import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Event, EventFilter, EventsListService } from '../services/events-list.service';
import { CreateEventService } from '../services/create-event.service';
import { UpdateEventService } from '../services/update-event.service';

declare var $: any;

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: Observable<Event[]>;
  newEvent: Event;
  editEvent: Event;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  filter: EventFilter;

  @ViewChild('createEventModal', {static: false}) createEventModal: ElementRef;
  @ViewChild('editEventModal', {static: false}) editEventModal: ElementRef;

  constructor(private apollo: Apollo,
              private eventsListService: EventsListService,
              private createEventService: CreateEventService,
              private updateEventService: UpdateEventService) {}

  ngOnInit() {
    this.getEvents();
    this.filter = {};
    this.newEvent = {};
    this.editEvent = {};
  }

  getEvents() {
    this.events = this.eventsListService.watch({filter: this.filter}, {fetchPolicy: 'no-cache'})
      .valueChanges
      .pipe(
        map(result => {
          return result.data.events;
        })
      );
  }

  refreshEvents() {
    return this.getEvents();
  }

  createEvent() {
    this.createEventService.mutate({input: this.newEvent}, {fetchPolicy: 'no-cache'})
      .subscribe(result => {
        $(this.createEventModal.nativeElement).modal('hide');
        this.refreshEvents();
      });
  }

  updateEvent() {
    this.updateEventService.mutate({id: this.editEvent.id, input: this.editEvent}, {fetchPolicy: 'no-cache'})
      .subscribe(result => {
        console.log(result);
        $(this.editEventModal.nativeElement).modal('hide');
        this.editEvent = {};
        this.refreshEvents();
      });
  }

  openEditModal(event: Event) {
    Object.assign(this.editEvent, event);
    // tslint:disable-next-line:radix
    this.editEvent.organiser = parseInt(this.editEvent.organiser.id);
    console.log(event);
    $(this.editEventModal.nativeElement).modal('show');
  }
}
