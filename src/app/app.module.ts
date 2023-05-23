import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsModule } from './modules/details/details.module';
import { StarWarsService } from './star-wars.service';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { mainReducer } from './state';
import { FetcherDirectiveModule } from './directives/fetcher.module';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ Main: mainReducer }, {}),
    EffectsModule.forRoot(),
    DetailsModule,
    FetcherDirectiveModule
  ],
  providers: [StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
