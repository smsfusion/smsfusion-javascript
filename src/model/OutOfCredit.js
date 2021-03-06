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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SmsFusionApi) {
      root.SmsFusionApi = {};
    }
    root.SmsFusionApi.OutOfCredit = factory(root.SmsFusionApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OutOfCredit model module.
   * @module model/OutOfCredit
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OutOfCredit</code>.
   * @alias module:model/OutOfCredit
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>OutOfCredit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OutOfCredit} obj Optional instance to populate.
   * @return {module:model/OutOfCredit} The populated <code>OutOfCredit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
    }
    return obj;
  }

  /**
   * Description of error
   * @member {String} error
   */
  exports.prototype['error'] = undefined;



  return exports;
}));


