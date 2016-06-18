import Ember from 'ember';
import FactoryGuy, * as fgMethods from 'ember-data-factory-guy';

let proxyFx = [
  'make', 'makeList', 'build', 'buildList', 'mockFind', 'mockFindAll',
  'mockQuery', 'mockQueryRecord', 'mockUpdate', 'mockDelete'
];

export default class {

  constructor() {
    proxyFx.forEach(fx => this[fx] = fgMethods[fx]);
    this.store = FactoryGuy.store;
    this.run();
  }

  static setupOptions(opts = {}) {
    Ember.$.mockjaxSettings.logger = !!opts.logger;
    Ember.$.mockjaxSettings.logging = opts.logLevel || 2;
    Ember.$.mockjaxSettings.responseTime = opts.responseTime || 0;
  }

  run() {
  }

  include(scenarios) {
    (scenarios || []).forEach(Scenario => new Scenario());
  }
}