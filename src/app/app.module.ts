import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsModule } from './modules/details/details.module';
import { StarWarsService } from './star-wars.service';
import { ListComponent } from './list/list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { mainReducer } from './state';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DetailsModule,
    StoreModule.forRoot({ Main: mainReducer }, {}),
    EffectsModule.forRoot()
  ],
  providers: [StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
