import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './components/events-list.component';
import { GraphQLModule } from '../../graphql.module';

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
  ]
})
export class EventsModule { }
