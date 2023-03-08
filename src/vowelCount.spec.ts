import { expect } from "chai";
import vowelCount from "./vowelCount";

describe("When vowelCount is called", () => {
    it("with 'boat soap' it returns 4", () => {
        expect(vowelCount('boat soap')).to.equal(4);
    });
});