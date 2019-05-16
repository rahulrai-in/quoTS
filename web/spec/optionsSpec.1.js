"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('source-map-support').install();
const Options = require("../options");
describe('Options', () => {
    it('can be loaded', () => {
        expect(Options).toBeDefined();
    });
    it('requires not null input', () => {
        let args = { arguments: 'testVal', mutation: false };
        expect(() => new Options.Options('', args)).toThrowError(' is not valid input.');
    });
});
// https://volaresystems.com/blog/post/2014/12/10/Mocking-calls-with-Jasmine
//# sourceMappingURL=optionsSpec.1.js.map