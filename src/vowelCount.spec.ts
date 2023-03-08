import { expect } from "chai";
import vowelCount from "./vowelCount";

describe("When vowelCount is called", () => {
    it("with 'boat soap' it returns 4", () => {
        expect(vowelCount('boat soap')).to.equal(4);
    });

    it("with 'zzz pp vvv' it returns 0", () => {
        expect(vowelCount('zzz pp vvv')).to.equal(0);
    });

    it("with 'lorem ipsum dolor sit amet consectetur adipiscing elit' it returns 19", () => {
        expect(vowelCount('lorem ipsum dolor sit amet consectetur adipiscing elit')).to.equal(19);
    });

    it("with null it returns 'null is not a valid input'", () => {
        expect(vowelCount(null)).to.equal("null is not a valid input");
    });

    it("with undefined it returns 'undefined is not a valid input'", () => {
        expect(vowelCount(undefined)).to.equal("undefined is not a valid input");
    });

    it("with 0 it returns '0 is not a valid input'", () => {
        expect(vowelCount(0)).to.equal("0 is not a valid input");
    });

    it("with 'aaAoU' it returns 5", () => {
        expect(vowelCount('aaAoU')).to.equal(5);
    });
});