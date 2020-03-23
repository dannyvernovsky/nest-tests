/* eslint-disable @typescript-eslint/camelcase */
// disabled because amppting rest API
import { AxiosStatic } from 'axios';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('AXIOS') private axios:AxiosStatic){

  }

  async getAsteroids() {
    try {
      const asteroidsResult = await this.axios.get<NASAAsteroidsResponse>('https://api.nasa.gov/neo/rest/v1/neo/browse?page=0&size=20&api_key=DEMO_KEY');
      return this.mapNASAResponseToAppResponse(asteroidsResult.data);
      
    } catch (error) {
      console.log(error);
    }
  }

  private mapNASAResponseToAppResponse(nasaAsteroids: NASAAsteroidsResponse){
    const asteroids:Asteroid[] = [];

    for(const nasaAsteroid of nasaAsteroids.near_earth_objects){
      const asteroid: Asteroid = {
        apoapsis: nasaAsteroid.orbital_data.aphelion_distance,
        periapsis: nasaAsteroid.orbital_data.perihelion_distance,
        closest_approach_date: nasaAsteroid.close_approach_data[0]?.close_approach_date,
        is_dangerous: nasaAsteroid.is_potentially_hazardous_asteroid,
        name: nasaAsteroid.name,
        siameter: nasaAsteroid.estimated_diameter.kilometers.estimated_diameter_max
      }  

      asteroids.push(asteroid);
    }

    return asteroids;
  }
  
}

export interface Asteroid{
  apoapsis: number;
  periapsis:number;
  is_dangerous: boolean;
  name:string;
  siameter:number;
  closest_approach_date:string;
}

export interface NASAAsteroidsResponse {
  links: {
    next: string;
    self: string;
  };
  page: {
    size: number;
    total_elements: number;
    total_pages: number;
    number: number;
  }
  near_earth_objects: {
    links: {
      self: string;
    };
    id: number;
    neo_reference_id: number;
    name: string;
    designation: string;
    nasa_jpl_url: string;
    absolute_magnitude_h: number;
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: number;
        estimated_diameter_max: number;
      }
    },
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: {
      close_approach_date: string;
    }[];
    orbital_data: {
      eccentricity: number;
      inclination: number;
      perihelion_distance: number; //AU
      aphelion_distance: number; //AU
    }
  }[]
}