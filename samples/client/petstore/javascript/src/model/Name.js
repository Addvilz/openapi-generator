/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.2.1-SNAPSHOT
 *
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
    if (!root.OpenApiPetstore) {
      root.OpenApiPetstore = {};
    }
    root.OpenApiPetstore.Name = factory(root.OpenApiPetstore.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Name model module.
   * @module model/Name
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Name</code>.
   * Model for testing model name same as property name
   * @alias module:model/Name
   * @class
   * @param name {Number} 
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;



  };

  /**
   * Constructs a <code>Name</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Name} obj Optional instance to populate.
   * @return {module:model/Name} The populated <code>Name</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'Number');
      }
      if (data.hasOwnProperty('snake_case')) {
        obj['snake_case'] = ApiClient.convertToType(data['snake_case'], 'Number');
      }
      if (data.hasOwnProperty('property')) {
        obj['property'] = ApiClient.convertToType(data['property'], 'String');
      }
      if (data.hasOwnProperty('123Number')) {
        obj['123Number'] = ApiClient.convertToType(data['123Number'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} snake_case
   */
  exports.prototype['snake_case'] = undefined;
  /**
   * @member {String} property
   */
  exports.prototype['property'] = undefined;
  /**
   * @member {Number} 123Number
   */
  exports.prototype['123Number'] = undefined;



  return exports;
}));


