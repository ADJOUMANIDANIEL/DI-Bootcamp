import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  getMessage() :string {
    return "bienvenue a Atos Digital Academie"
  }

}
