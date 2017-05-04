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
    root.SmsFusionApi.HLRCallback = factory(root.SmsFusionApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HLRCallback model module.
   * @module model/HLRCallback
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>HLRCallback</code>.
   * @alias module:model/HLRCallback
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>HLRCallback</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HLRCallback} obj Optional instance to populate.
   * @return {module:model/HLRCallback} The populated <code>HLRCallback</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('msisdn')) {
        obj['msisdn'] = ApiClient.convertToType(data['msisdn'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('operator')) {
        obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
      }
      if (data.hasOwnProperty('mccmnc')) {
        obj['mccmnc'] = ApiClient.convertToType(data['mccmnc'], 'Number');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('extended')) {
        obj['extended'] = ApiClient.convertToType(data['extended'], 'String');
      }
      if (data.hasOwnProperty('cost')) {
        obj['cost'] = ApiClient.convertToType(data['cost'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Unique ID for response
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The MSISDN of the number queried
   * @member {Number} msisdn
   */
  exports.prototype['msisdn'] = undefined;
  /**
   * Short status code of the response
   * @member {module:model/HLRCallback.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * ISO 3166-2 country code
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * The operator attached to the MSISDN
   * @member {String} operator
   */
  exports.prototype['operator'] = undefined;
  /**
   * MCC and MNC of MSDISDN
   * @member {Number} mccmnc
   */
  exports.prototype['mccmnc'] = undefined;
  /**
   * If the response code is temporary or permenant
   * @member {module:model/HLRCallback.DurationEnum} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * Full status code of the response
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Extended explanation of the status code
   * @member {String} extended
   */
  exports.prototype['extended'] = undefined;
  /**
   * Cost of the response
   * @member {Number} cost
   */
  exports.prototype['cost'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "valid"
     * @const
     */
    "valid": "valid",
    /**
     * value: "invalid"
     * @const
     */
    "invalid": "invalid",
    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown"  };

  /**
   * Allowed values for the <code>duration</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DurationEnum = {
    /**
     * value: "perm"
     * @const
     */
    "perm": "perm",
    /**
     * value: "temp"
     * @const
     */
    "temp": "temp"  };


  return exports;
}));

