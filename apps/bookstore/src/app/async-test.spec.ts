import { fakeAsync, flush, tick } from "@angular/core/testing";
import { delay, of } from "rxjs";

describe('AsyncTest', () => {
    it('basic sync test', () => {
        let flag = false;
        expect(flag).toBeFalsy();
        flag = true;
        expect(flag).toBeTruthy();
    })

    it('basic async test', (done: jest.DoneCallback) => {
        let flag = false;
        setTimeout(() => {
            flag = true;
            expect(flag).toBeTruthy();
            done();
        }, 3000);
    });

    it('basic async test - observables', (done) => {
        let flag = false;
        of(1)
            .pipe(delay(3000))
            .subscribe(() => {
                flag = true;
                expect(flag).toBeTruthy();
                done();
            })
    });


    it('basic async test - observables', fakeAsync(() => {
        let flag = false;
        of(1)
            .pipe(delay(3000))
            .subscribe(() => {
                flag = true;
            });

        tick(1000);
        expect(flag).toBeFalsy();
        tick(2001);
        expect(flag).toBeTruthy();
    }));


    it('basic async test - observables', fakeAsync(() => {
        let flag = false;
        setTimeout(() => {
            flag = true;
        }, 3000);

        flush();

        expect(flag).toBeTruthy();
    }));


})