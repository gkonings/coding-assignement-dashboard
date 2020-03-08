import { getPaymentMethodName, displayCurrency, displayDate } from './utils';

describe('getPaymentMethodName()', () => {
  it('should return the correct value', () => {
    expect(getPaymentMethodName('ideal')).toBe('iDEAL');
    expect(getPaymentMethodName('creditcard')).toBe('Credit card');
    expect(getPaymentMethodName('paypal')).toBe('Paypal');
  });

  it('should return null with incorrect or no value', () => {
    expect(getPaymentMethodName('cash')).toBe(null);
    expect(getPaymentMethodName()).toBe(null);
  });
});

describe('displayCurrency()', () => {
  it('should return the correct value', () => {
    expect(displayCurrency(12.35, 'EUR')).toBe('€ 12.35');
    expect(displayCurrency(22.5)).toBe('€ 22.50');
    expect(displayCurrency(10)).toBe('€ 10.00');
    expect(displayCurrency(0)).toBe('€ 0.00');
    expect(displayCurrency(11.11, 'YEN')).toBe('11.11');
  });
});

describe('displayDate()', () => {
  it('should return the correct value', () => {
    expect(displayDate(new Date('2019-01-09T06:48:50'))).toBe('9 jan 2019 on 06:48');
    expect(displayDate(new Date('1980-04-03T07:13:20'))).toBe('3 apr 1980 on 07:13');
    expect(displayDate(new Date('2119-12-05T00:00:00'))).toBe('5 dec 2119 on 00:00');
  });
});
