import { Component, OnInit } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { Quote } from "../../data/quotes.interface";
import { QuotesService } from "../../services/quotes";

@Component({
  selector: "page-quotes",
  templateUrl: "quotes.html"
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string; quotes: Quote[]; icon: string }[];

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService
  ) {}

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: "Add Quote",
      //subTitle: "Are You Sure?",
      message: "Are You sure, you want to add quote?",
      buttons: [
        {
          text: "Yes",
          handler: () => {
            console.log("OK");
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: "No",

          handler: () => {
            console.log("cancel");
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteToFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }
}
