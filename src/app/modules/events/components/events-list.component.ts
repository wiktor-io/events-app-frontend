import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Event, Variables, EventsListService } from '../services/events-list.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: Observable<Event[]>;
  columns: any[];
  loading$: Observable<boolean>;
  error$: Observable<any>;
  filter: Variables;

  constructor(private apollo: Apollo, private eventsListService: EventsListService) {}

  ngOnInit() {
    this.events = this.getEvents();
    this.columns = [
      {name: 'Name'},
      {name: 'Description'}
    ];
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
