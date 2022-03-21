import { sum } from '../exampletest'

describe('additon', () => {
    test('test two postive number',  () => {
        const sumPos = sum(1,1);
        expect(sumPos).toEqual(2);
    });
});