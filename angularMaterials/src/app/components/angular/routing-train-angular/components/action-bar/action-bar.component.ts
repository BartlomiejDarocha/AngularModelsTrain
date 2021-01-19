import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

// class extend train
export class Animal {
  private spice: string;
  private furColor: string;
  constructor(spice: string, furColor: string) {
    this.spice = spice;
    this.furColor = furColor;
  }

  public printInfo(): string {
    return `Spice: ${this.spice}, Fur color: ${this.furColor}`;
  }
}
export class MyPet extends Animal {
  private petName: string;
  private petAge: string;
  constructor(spice, furColor, petName, petAge) {
    super(spice, furColor); // tu moze być każdy string jaki podamy, nie tylko spice, furColor, to zwykły arg funckji jest
    this.petName = petName;
    this.petAge = petAge;
  }
  public printMyPetInfo() {
    console.log(`My pet name: ${this.petName}, pet age: ${this.petAge} year, ${this.printInfo()}`);
  }
}

export interface BarOptionsInterface {
  id: number;
  name: string;
  url: string;
  active: boolean;
}

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.less']
})

export class ActionBarComponent implements OnInit {
  @Input() public options: BarOptionsInterface[]  = [];
  @Output() public settingsEmit = new EventEmitter<BarOptionsInterface>();
  constructor() { }

  ngOnInit() {
    const myCat = new MyPet('Kot', 'Rudy', 'Bambruch', '0,5');
    myCat.printMyPetInfo();
  }

  public setHandler(option: BarOptionsInterface ): void {
    this.settingsEmit.emit(option); // emit bo nie jest z rxjs biblioteki
  }
}
