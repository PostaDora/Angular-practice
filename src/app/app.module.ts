import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    InvestmentResultsComponent,
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    UserInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
