import { Component } from "@angular/core";
import { Quote } from "../../data/quotes.interface";
import { QuotesService } from "../../services/quotes";
import { ModalController } from "ionic-angular";
import { QuotePage } from "../quote/quote";

@Component({
  selector: "page-favorites",
  templateUrl: "favorites.html"
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(
    private quotesService: QuotesService,
    private Modelctrl: ModalController
  ) {}

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const Modal = this.Modelctrl.create(QuotePage, quote);
    console.log(quote);
    Modal.present();
    Modal.onDidDismiss((remove: Boolean) => {
      console.log(remove);
      if (remove) {
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteToFavorites(quote);
    this.quotes = this.quotesService.getFavoriteQuotes();
  }
}
