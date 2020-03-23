/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/camelcase */
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';

describe('App', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [AppModule],
        })
            .compile();

        app = moduleRef.createNestApplication();
       
    });

    it(`/GET should resolve 200OK on asteroids`, () => {
        return request(app.getHttpServer())
            .get('/api/asteroids')
            .expect(200)
            .expect(EXPECTED_DATA);
    });

    afterAll(async () => {
        await app.close();
    });
});

const EXPECTED_DATA = [{
    apoapsis: '3.613831900092161',
    periapsis: '1.139371049187003',
    closest_approach_date: '1945-06-07',
    is_dangerous: false,
    name: '21277 (1996 TO5)',
    siameter: 3.5812940302
},
{
    apoapsis: '2.02586880823862',
    periapsis: '1.147757333803549',
    is_dangerous: false,
    name: '162038 (1996 DH)',
    siameter: 2.844722965
},
{
    apoapsis: '3.884205451986184',
    periapsis: '1.254237605589272',
    is_dangerous: false,
    name: '189058 (2000 UT16)',
    siameter: 2.978790628
},
{
    apoapsis: '2.91020635442817',
    periapsis: '1.299215201269568',
    is_dangerous: false,
    name: '276274 (2002 SS41)',
    siameter: 2.1579430484
},
{
    apoapsis: '3.361558630853122',
    periapsis: '1.237267454547611',
    is_dangerous: false,
    name: '322913 (2002 CM1)',
    siameter: 2.7166893409
},
{
    apoapsis: '2.747664390801628',
    periapsis: '1.259884584893097',
    is_dangerous: false,
    name: '435730 (2008 UK90)',
    siameter: 0.9863702813
},
{
    apoapsis: '2.751678704634625',
    periapsis: '.9290039477048767',
    is_dangerous: true,
    name: '451297 (2010 TK54)',
    siameter: 0.8590926012
},
{
    apoapsis: '2.460720315785255',
    periapsis: '1.273185876581304',
    is_dangerous: false,
    name: '452307 Manawydan (1997 XV11)',
    siameter: 1.3615700154
},
{
    apoapsis: '3.980439430373703',
    periapsis: '1.285474575453279',
    is_dangerous: false,
    name: '452421 (2002 VX99)',
    siameter: 1.2417666126
},
{
    apoapsis: '3.848726932274069',
    periapsis: '1.262000622086286',
    is_dangerous: false,
    name: '453100 (2007 WU4)',
    siameter: 0.9863702813
},
{
    apoapsis: '2.270716021913899',
    periapsis: '1.247045120931285',
    is_dangerous: false,
    name: '454266 (2014 FM7)',
    siameter: 0.9863702813
},
{
    apoapsis: '3.806680928995904',
    periapsis: '.6495979641330815',
    closest_approach_date: '1979-12-17',
    is_dangerous: true,
    name: '(1979 XB)',
    siameter: 1.1325046106
},
{
    apoapsis: '2.612781495037682',
    periapsis: '.8069488304654528',
    closest_approach_date: '1990-11-07',
    is_dangerous: false,
    name: '(1990 UN)',
    siameter: 0.1185877909
},
{
    apoapsis: '3.553418865265314',
    periapsis: '.9794119628423262',
    closest_approach_date: '1991-11-18',
    is_dangerous: false,
    name: '(1991 XA)',
    siameter: 0.1081533507
},
{
    apoapsis: '1.324155954448673',
    periapsis: '1.00600384468921',
    closest_approach_date: '1992-12-26',
    is_dangerous: false,
    name: '(1992 YD3)',
    siameter: 0.0311917671
},
{
    apoapsis: '2.249974742595951',
    periapsis: '1.021728421981146',
    closest_approach_date: '1993-01-24',
    is_dangerous: false,
    name: '(1993 BD3)',
    siameter: 0.0342010925
},
{
    apoapsis: '3.643534860688102',
    periapsis: '1.175170606751731',
    closest_approach_date: '1978-01-01',
    is_dangerous: false,
    name: '(1993 BU3)',
    siameter: 0.2978790628
},
{
    apoapsis: '2.463837016158882',
    periapsis: '1.010157105206984',
    closest_approach_date: '1994-03-12',
    is_dangerous: false,
    name: '(1994 FA)',
    siameter: 0.0542050786
},
{
    apoapsis: '3.100327055821962',
    periapsis: '.7730685810341199',
    closest_approach_date: '1994-04-05',
    is_dangerous: false,
    name: '(1994 GK)',
    siameter: 0.0859092601
},
{
    apoapsis: '4.058036874987604',
    periapsis: '.8972794885196326',
    closest_approach_date: '1994-09-03',
    is_dangerous: false,
    name: '(1994 RB)',
    siameter: 0.1241766613
}]