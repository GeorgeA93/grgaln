import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { GrgalnRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

const myFirebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Redirect
}

const firebaseConfig = {
    apiKey: 'AIzaSyAlfUraiDYSSKVnQmUAFv1w3SDRFs1uthg',
    authDomain: 'grgaln-portfolio.firebaseapp.com',
    databaseURL: 'https://grgaln-portfolio.firebaseio.com',
    storageBucket: ''
};

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        SharedModule,
        GrgalnRoutingModule,
        CoreModule,
        NgbModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig),
        Angulartics2Module.forRoot()
    ],
    providers: [
        Angulartics2GoogleAnalytics
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }