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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/HLRCallback', 'model/HLRError', 'model/HLRResult', 'model/OutOfCredit', 'api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/HLRCallback'), require('./model/HLRError'), require('./model/HLRResult'), require('./model/OutOfCredit'), require('./api/DefaultApi'));
  }
}(function(ApiClient, HLRCallback, HLRError, HLRResult, OutOfCredit, DefaultApi) {
  'use strict';

  /**
   * This_is_the_SMS_Fusion_API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SmsFusionApi = require('index'); // See note below*.
   * var xxxSvc = new SmsFusionApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SmsFusionApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SmsFusionApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SmsFusionApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The HLRCallback model constructor.
     * @property {module:model/HLRCallback}
     */
    HLRCallback: HLRCallback,
    /**
     * The HLRError model constructor.
     * @property {module:model/HLRError}
     */
    HLRError: HLRError,
    /**
     * The HLRResult model constructor.
     * @property {module:model/HLRResult}
     */
    HLRResult: HLRResult,
    /**
     * The OutOfCredit model constructor.
     * @property {module:model/OutOfCredit}
     */
    OutOfCredit: OutOfCredit,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));