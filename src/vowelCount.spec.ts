import { expect } from "chai";
import vowelCount from "./vowelCount";

describe("When vowelCount is called", () => {
    it("with 'boat soap' it returns 4", () => {
        expect(vowelCount('boat soap')).to.equal(4);
    });
});

describe("When vowelCount is called", () => {
    it("with 'zzz pp vvv' it returns 0", () => {
        expect(vowelCount('zzz pp vvv')).to.equal(0);
    });
});

describe("When vowelCount is called", () => {
    it("with 'lorem ipsum dolor sit amet consectetur adipiscing elit' it returns 18", () => {
        expect(vowelCount('lorem ipsum dolor sit amet consectetur adipiscing elit')).to.equal(18);
    });
});

describe("When vowelCount is called", () => {
    it("with null it returns 0", () => {
        expect(vowelCount(null)).to.equal(0);
    });
});