import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const startTime = Date.now();

    return of(HEROES).pipe(
      delay(Math.random() * 1000),
      tap(heroes => this.messageService.add(`HeroService: fetched [${heroes.length}] heroes in [${Date.now() - startTime}] ms`)),
    );
  }

  getHero(id: number): Observable<Hero> {
    const startTime = Date.now();

    return of(HEROES.find(item => item.id === id)).pipe(
      delay(Math.random() * 1000),
      tap((hero) => this.messageService.add(`HeroService: fetched ID=[${hero.id}] in [${Date.now() - startTime}] ms`)),
    );
  }
}
