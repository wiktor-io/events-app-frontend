import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Event, Variables, EVENTS_LIST_QUERY, EventsListService } from '../services/events-list.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

class EventsListComponent implements OnInit {

  events: Observable<Event[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  filter: Variables;

  constructor(private apollo: Apollo, private eventsListService: EventsListService) {}

  ngOnInit() {
    console.log(this.events);
    this.events = this.getEvents();
    console.log(this.events);
  }

  getEvents() {
    return this.eventsListService.watch(this.filter)
      .valueChanges
      .pipe(
        map(result => {
          return result.data.events;
        })
      );
  }

}

export {EVENTS_LIST_QUERY, EventsListComponent};
