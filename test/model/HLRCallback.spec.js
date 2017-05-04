/**
 * SMS Fusion API
 * This is the SMS Fusion API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@smsfusion.com.au
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SmsFusionApi);
  }
}(this, function(expect, SmsFusionApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SmsFusionApi.HLRCallback();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('HLRCallback', function() {
    it('should create an instance of HLRCallback', function() {
      // uncomment below and update the code to test HLRCallback
      //var instane = new SmsFusionApi.HLRCallback();
      //expect(instance).to.be.a(SmsFusionApi.HLRCallback);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new SmsFusionApi.HLRCallback();
      //expect(instance).to.be();
    });

    it('should have the property msisdn (base name: "msisdn")', function() {
      // uncomment below and update the code to test the property msisdn
      //var instane = new SmsFusionApi.HLRCallback();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new SmsFusionApi.HLRCallback();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new SmsFusionApi.HLRCallback();
      //expect(instance).to.be();
    });

    it('should have the property operator (base name: "operator")', function() {
      // uncomment below and update the code to test the property operator
      //var instane = new SmsFusionApi.HLRCallback();
      //expect(instance).to.be();
    });

    it('should have the property mccmnc (base name: "mccmnc")', function() {
      // uncomment below and update the code to test the property mccmnc
      //var instane = new SmsFusionApi.HLRCallback();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instane = new SmsFusionApi.HLRCallback();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new SmsFusionApi.HLRCallback();
      //expect(instance).to.be();
    });

    it('should have the property extended (base name: "extended")', function() {
      // uncomment below and update the code to test the property extended
      //var instane = new SmsFusionApi.HLRCallback();
      //expect(instance).to.be();
    });

    it('should have the property cost (base name: "cost")', function() {
      // uncomment below and update the code to test the property cost
      //var instane = new SmsFusionApi.HLRCallback();
      //expect(instance).to.be();
    });

  });

}));