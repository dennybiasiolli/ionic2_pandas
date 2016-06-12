import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SelectedFactPage} from '../selected-fact-page/selected-fact-page';
import { PandasService } from '../../services.ts';

@Component({
  templateUrl: 'build/pages/scientific-facts-page/scientific-facts-page.html'
})
export class ScientificFactsPage {
  // private facts: string[];
  private gustiSezioni: Object[];
  constructor(private _navController: NavController, private pandasService:PandasService) {
  }

  ionViewWillEnter(){
    // let _facts = [];
    // _facts.push('Banging your head against a wall uses 150 calories an hour.');
    // _facts.push('Dogs have four toes on their hind feet, and five on their front feet.');
    // _facts.push('The ant can lift 50 times its own weight, can pull 30 times its own weight and always falls over on its right side when intoxicated.');
    // _facts.push('A cockroach will live nine days without it\'s head, before it starves to death.');
    // _facts.push('Polar bears are left handed.');
    // this.facts = _facts;
    this.pandasService.getGustiSezioni().then(gustiSezioni => this.gustiSezioni = gustiSezioni);
  }

  // selectFact(fact){
  //   this._navController.push(SelectedFactPage, {selectedFact: fact})
  // }
}
