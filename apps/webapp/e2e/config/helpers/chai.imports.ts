import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
chai.should();

export const expect = chai.expect;
export const assert = chai.assert;
export const should = chai.should();
