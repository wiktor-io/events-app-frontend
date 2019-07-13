import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './components/events-list.component';
import { GraphQLModule } from '../../graphql.module';
import {EventsListService} from './services/events-list.service';

@NgModule({
  declarations: [
    EventsListComponent
  ],
  exports: [
    EventsListComponent
  ],
  imports: [
    CommonModule,
    GraphQLModule
  ],
  providers: [
    EventsListService
  ]
})
export class EventsModule { }
