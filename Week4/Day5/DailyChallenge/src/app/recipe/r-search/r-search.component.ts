import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-r-search',
  templateUrl: './r-search.component.html',
  styleUrls: ['./r-search.component.css']
})
export class RSearchComponent implements OnInit {

  recipe: any;
  recipeSearch = "";

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  submitSearch() {
    this.recipeService.getAutocompleteRecipeSearch(this.recipeSearch).subscribe(data => {
      this.recipe = data;
    });
  }


}
