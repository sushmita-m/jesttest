import { sum, sumNeg } from '../example'

describe('additon', () => {
    test('test two postive number',  () => {
        const sumPos = sum(1,1);
        expect(sumPos).toEqual(2);
    });

    test ('neg sum',  () => {
        const sumPos = sumNeg(1,1);
        expect(sumPos).toEqual(-2);
    });
});
