/* eslint-disable @typescript-eslint/no-use-before-define */
import { AppService } from './app.service';
import { AxiosStatic, AxiosResponse } from 'axios';
import { AppController } from './app.controller';

describe('AppService tests', () => {
  let appService: AppService;
  let appController: AppController;
  let axiosMock: Partial<AxiosStatic>;

  beforeEach(async () => {
    axiosMock = {
      get: jest.fn(),
    };

    appService = new AppService(axiosMock as AxiosStatic);
    appController = new AppController(new AppService(axiosMock as AxiosStatic));
  });

  it('kushkush', ()=>{
    appController.getAsteroids()
  })

  it('should map object correctly', async () => {
    // given
    const mockResponse: Partial<AxiosResponse<unknown>> = {
      data: NASA_RAW_RESPONSE
    }

    const getMock = axiosMock.get as jest.Mock;
    getMock.mockResolvedValueOnce(mockResponse);

    // (axiosMock.get as jest.Mock).mockResolvedValueOnce(mockResponse);

    // when
    const result = await appController.getAsteroids();

    // then
    await expect(appService.getAsteroids()).rejects.toThrow();
    expect(result).toBeDefined();
  })


  it('', () => {
    // given

    // when + then
  })
});


const NASA_RAW_RESPONSE = {
  "links": {
    "next": "http://www.neowsapp.com/rest/v1/neo/browse?page=1&size=20&api_key=DEMO_KEY",
    "self": "http://www.neowsapp.com/rest/v1/neo/browse?page=0&size=20&api_key=DEMO_KEY"
  },
  "page": {
    "size": 20,
    "total_elements": 23286,
    "total_pages": 1165,
    "number": 0
  },
  "near_earth_objects": [
    {
      "links": {
        "self": "http://www.neowsapp.com/rest/v1/neo/2021277?api_key=DEMO_KEY"
      },
      "id": "2021277",
      "neo_reference_id": "2021277",
      "name": "21277 (1996 TO5)",
      "designation": "21277",
      "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2021277",
      "absolute_magnitude_h": 16.1,
      "estimated_diameter": {
        "kilometers": {
          "estimated_diameter_min": 1.6016033798,
          "estimated_diameter_max": 3.5812940302
        },
        "meters": {
          "estimated_diameter_min": 1601.6033797856,
          "estimated_diameter_max": 3581.2940301941
        },
        "miles": {
          "estimated_diameter_min": 0.9951898937,
          "estimated_diameter_max": 2.2253122528
        },
        "feet": {
          "estimated_diameter_min": 5254.6044325359,
          "estimated_diameter_max": 11749.652706022
        }
      },
      "is_potentially_hazardous_asteroid": false,
      "close_approach_data": [
        {
          "close_approach_date": "1945-06-07",
          "close_approach_date_full": "1945-Jun-07 22:35",
          "epoch_date_close_approach": -775272300000,
          "relative_velocity": {
            "kilometers_per_second": "15.5094751736",
            "kilometers_per_hour": "55834.1106249398",
            "miles_per_hour": "34693.1450158133"
          },
          "miss_distance": {
            "astronomical": "0.0334235374",
            "lunar": "13.0017560486",
            "kilometers": "5000090.002905338",
            "miles": "3106911.8583881444"
          },
          "orbiting_body": "Mars"
        }
      ],
      "orbital_data": {
        "orbit_id": "160",
        "orbit_determination_date": "2019-02-25 06:46:25",
        "first_observation_date": "1990-02-04",
        "last_observation_date": "2019-02-22",
        "data_arc_in_days": 10610,
        "observations_used": 641,
        "orbit_uncertainty": "0",
        "minimum_orbit_intersection": ".313031",
        "jupiter_tisserand_invariant": "3.267",
        "epoch_osculation": "2459000.5",
        "eccentricity": ".5205880912954529",
        "semi_major_axis": "2.376601474639582",
        "inclination": "20.95225103846477",
        "ascending_node_longitude": "167.3841380483033",
        "orbital_period": "1338.236805993092",
        "perihelion_distance": "1.139371049187003",
        "perihelion_argument": "250.17294829",
        "aphelion_distance": "3.613831900092161",
        "perihelion_time": "2458492.539286558466",
        "mean_anomaly": "136.6468595244242",
        "mean_motion": ".269010685095339",
        "equinox": "J2000",
        "orbit_class": {
          "orbit_class_type": "AMO",
          "orbit_class_description": "Near-Earth asteroid orbits similar to that of 1221 Amor",
          "orbit_class_range": "1.017 AU < q (perihelion) < 1.3 AU"
        }
      },
      "is_sentry_object": false
    },
  ]
}





function foo() {
  throw new Error();
}


function foo2() {
  try {
  const t = await foo();
  } catch (error){

  }
}
