import { add } from '../example2'

describe('additon', () => {
    test('test two postive number',  () => {
        const sumPos = add(1,1, 1);
        expect(sumPos).toEqual(3);
    });
});
