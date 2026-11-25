import {formatCurrency} from '../scripts/utils/money.js';

// methods used here are provided by jasmine test framework only not javascript

describe('test suite: formatCurrency', () => {      //describe() is provided by jasmine
    it('converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('converts cents into dollars (works with 0)', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('converts cents into dollars (rounds up to the nearest cent)', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });

})