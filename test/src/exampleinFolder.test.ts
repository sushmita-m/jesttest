import { multiply } from '../../src/exampleinFolder'

describe('multiply', () => {
    test('test two postive number',  () => {
        const mul = multiply(1,1);
        expect(mul).toEqual(1);
    });
});
