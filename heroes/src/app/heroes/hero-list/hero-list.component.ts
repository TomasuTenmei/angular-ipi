import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';
import { Time } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent implements OnInit {
  //title: string = 'Hero List';
  classToApply: string = 'red-bg';
  isDisplayed: boolean = false;
  heroArray: Array<Hero> = new Array<Hero>();
  count: number = 0;
  private _title: string  = 'I love Angular';

  get title(): string { return this._title; }
  set title(value: string) { this._title = value; }

  currentDate : Date = new Date();
  currentTime : Number = new Date().getTime();

  profileForm = this.fb.group({
    firstName: ['toto', [Validators.required], Validators.minLength(4)],
    lastName: [''],
    address: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.title = 'Ma super liste';
    this.isDisplayed = true;
    this.heroArray.push(new Hero('Batman', 80));
    this.heroArray.push(new Hero('Superman', 30));
    this.heroArray.push(new Hero('Pacman', 100));
  }

  onButtonClicked(event: Event, nbToAdd: number) {
    this.count += nbToAdd;
  }
}
