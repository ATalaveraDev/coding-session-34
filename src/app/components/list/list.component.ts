import { Component } from '@angular/core';
import { StarWarsService } from '../../star-wars.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getCharacterData } from 'src/app/state/actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  characters$: Observable<any[]> = this.service.getCharacters();

  constructor(private readonly service: StarWarsService, private readonly router: Router, private readonly store: Store) { }

  selectCharacterHandler(character: any) {
    this.router.navigateByUrl(`${character.name}`);
  }

  fetchData(url: string) {
    this.store.dispatch(getCharacterData({ url }));
  }
}
