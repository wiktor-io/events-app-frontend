import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './components/events-list.component';
import { GraphQLModule } from '../../graphql.module';
import { EventsListService } from './services/events-list.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CreateEventService } from './services/create-event.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EventsListComponent
  ],
  exports: [
    EventsListComponent
  ],
  imports: [
    CommonModule,
    GraphQLModule,
    NgxDatatableModule,
    FormsModule
  ],
  providers: [
    EventsListService,
    CreateEventService
  ]
})
export class EventsModule { }
