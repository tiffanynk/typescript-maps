import faker from 'faker';
import { MapPoint } from './Map';

export class Company {
  name: string;
  catchPhrase: string;
  color: string = 'blue';
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company name: ${this.name}</h1>
        <h3>${this.catchPhrase}</h3>
      </div>
    `;
  }
}
