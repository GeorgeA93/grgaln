import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { GrgalnRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { firebaseConfig } from '../sensitive/firebase.config';

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    GrgalnRoutingModule,
    CoreModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }