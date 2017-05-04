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
    root.SmsFusionApi.HLRResult = factory(root.SmsFusionApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HLRResult model module.
   * @module model/HLRResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>HLRResult</code>.
   * @alias module:model/HLRResult
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>HLRResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HLRResult} obj Optional instance to populate.
   * @return {module:model/HLRResult} The populated <code>HLRResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], ['Number']);
      }
      if (data.hasOwnProperty('failure')) {
        obj['failure'] = ApiClient.convertToType(data['failure'], ['Number']);
      }
      if (data.hasOwnProperty('cost')) {
        obj['cost'] = ApiClient.convertToType(data['cost'], 'Number');
      }
      if (data.hasOwnProperty('callback')) {
        obj['callback'] = ApiClient.convertToType(data['callback'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Array.<Number>} success
   */
  exports.prototype['success'] = undefined;
  /**
   * @member {Array.<Number>} failure
   */
  exports.prototype['failure'] = undefined;
  /**
   * Cost of the response
   * @member {Number} cost
   */
  exports.prototype['cost'] = undefined;
  /**
   * Callback URL provided
   * @member {String} callback
   */
  exports.prototype['callback'] = undefined;



  return exports;
}));

