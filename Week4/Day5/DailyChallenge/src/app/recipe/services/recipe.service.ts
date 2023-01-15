import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipeInformation() {
    return this.http.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information", {
      headers: {
        'X-RapidAPI-Key': 'e7eabbcde7msh78fc0a5ba72ee63p190d0ajsn1bccd855f6e3',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    });
  }

  getAutocompleteRecipeSearch(name: string) {
    return this.http.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete", {
      params: {query: name, number: '10'},
      headers: {
        'X-RapidAPI-Key': 'e7eabbcde7msh78fc0a5ba72ee63p190d0ajsn1bccd855f6e3',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    })
  }


}
