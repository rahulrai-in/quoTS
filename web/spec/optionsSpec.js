"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require('source-map-support').install();
const Options = require("../options");
const mutation_1 = require("../mutation");
describe('Options', () => {
    it('can be loaded', () => {
        expect(Options).toBeDefined();
    });
    it('requires not null input', () => {
        let args = { arguments: 'testVal', mutation: false };
        expect(() => new Options.Options('', args)).toThrowError(' is not valid input.');
    });
    it('can invoke mutations', () => __awaiter(this, void 0, void 0, function* () {
        spyOn(mutation_1.Mutation, 'operation').and.callFake((input, argument) => __awaiter(this, void 0, void 0, function* () { return yield 'invoked'; }));
        var value = yield Options.gqlOperations['mutation'].operation('testInput', 'testArg');
        expect(value).toBe('invoked');
    }));
});
//# sourceMappingURL=optionsSpec.js.map