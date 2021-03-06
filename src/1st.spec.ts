import { Utils } from './app/model/utils';
import * as decimal from 'decimal.js';

describe('1st tests', () => {
    it('true is true', () => expect(true).toBe(true));
});


describe('linear tests', () => {
    const result = Utils.solveCubic(Decimal(0), Decimal(0), Decimal(1), Decimal(-1))
    const actualJSON = JSON.stringify(result);
    const expectedJSON = JSON.stringify([Decimal(1)]);
    it('1x -1 => x = 1', () => expect(actualJSON).toBe(expectedJSON))
});

describe('quadratic tests', () => {
    const result = Utils.solveCubic(Decimal(0), Decimal(1), Decimal(-2), Decimal(1))
    const actualJSON = JSON.stringify(result);
    const expectedJSON = JSON.stringify([Decimal(1)]);
    it('x^2 - 2x + 1 => x = 1 ', () => expect(actualJSON).toBe(expectedJSON))
});

describe('quadratic test 2', () => {
    const result = Utils.solveCubic(Decimal(0), Decimal(2), Decimal(5), Decimal(-3))
    const actualJSON = JSON.stringify(result);
    const expectedJSON = JSON.stringify([Decimal(0.5),Decimal(-3)]);
    it('2x^2 - 5x - 3 => x = -3  0.5 ', () => expect(actualJSON).toBe(expectedJSON))
});

describe('cubic tests', () => {
    const result = Utils.solveCubic(Decimal(1), Decimal(-7), Decimal(4), Decimal(12))
    const actualJSON = JSON.stringify(result);
    const expectedJSON = '["6","2.0000000000000006427","-1.0000000000000007345"]'
    it('x^3 – 7x^2 + 4x + 12 => x = 1 ', () => expect(actualJSON).toBe(expectedJSON))
});