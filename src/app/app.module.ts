import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule, Tabs } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { LibraryPage } from "../pages/library/library";
import { QuotePage } from "../pages/quote/quote";
import { QuotesPage } from "../pages/quotes/quotes";
import { SettingsPage } from "../pages/settings/settings";
import { FavoritesPage } from "../pages/favorites/favorites";
import { TabsPage } from "../pages/tabs/tabs";
import { QuotesService } from "../services/quotes";

@NgModule({
  declarations: [
    MyApp,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingsPage,
    FavoritesPage,
    TabsPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingsPage,
    FavoritesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    QuotesService
  ]
})
export class AppModule {}
