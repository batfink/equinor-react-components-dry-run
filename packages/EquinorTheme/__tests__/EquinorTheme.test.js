import { hexify } from '../lib/EquinorTheme';

describe('hexify', () => {
    it('should return the correct hex value when adding alpha value 0.7 to Energy Red', () => {
        expect(hexify(255, 18, 67, 0.7)).toBe('#ff597b');
    });

    it('should return the correct hex value when adding alpha value 0.08 to Energy Red', () => {
        expect(hexify(255, 18, 67, 0.08)).toBe('#ffecef');
    });

    it('should return the correct hex value when adding alpha value 0.04 to Slate Blue', () => {
        expect(hexify(36, 55, 70, 0.04)).toBe('#f6f6f7');
    });
});
