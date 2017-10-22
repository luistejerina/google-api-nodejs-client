"use strict";
/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* jshint maxlen: false */
const apirequest_1 = require("../../lib/apirequest");
/**
 * Manufacturer Center API
 *
 * Public API for managing Manufacturer Center related data.
 *
 * @example
 * const google = require('googleapis');
 * const manufacturers = google.manufacturers('v1');
 *
 * @namespace manufacturers
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Manufacturers
 */
function Manufacturers(options) {
    const self = this;
    self._options = options || {};
    self.accounts = {
        products: {
            /**
             * manufacturers.accounts.products.delete
             *
             * @desc Deletes the product from a Manufacturer Center account.
             *
             * @alias manufacturers.accounts.products.delete
             * @memberOf! manufacturers(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Name in the format `{target_country}:{content_language}:{product_id}`.  `target_country`   - The target country of the product as a CLDR territory                      code (for example, US).  `content_language` - The content language of the product as a two-letter                      ISO 639-1 language code (for example, en).  `product_id`     -   The ID of the product. For more information, see                      https://support.google.com/manufacturers/answer/6124116#id.
             * @param {string} params.parent Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            delete: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://manufacturers.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{parent}/products/{name}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['parent', 'name'],
                    pathParams: ['name', 'parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * manufacturers.accounts.products.get
             *
             * @desc Gets the product from a Manufacturer Center account, including product issues.  A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear.
             *
             * @alias manufacturers.accounts.products.get
             * @memberOf! manufacturers(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Name in the format `{target_country}:{content_language}:{product_id}`.  `target_country`   - The target country of the product as a CLDR territory                      code (for example, US).  `content_language` - The content language of the product as a two-letter                      ISO 639-1 language code (for example, en).  `product_id`     -   The ID of the product. For more information, see                      https://support.google.com/manufacturers/answer/6124116#id.
             * @param {string} params.parent Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            get: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://manufacturers.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{parent}/products/{name}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['parent', 'name'],
                    pathParams: ['name', 'parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * manufacturers.accounts.products.list
             *
             * @desc Lists all the products in a Manufacturer Center account.
             *
             * @alias manufacturers.accounts.products.list
             * @memberOf! manufacturers(v1)
             *
             * @param {object} params Parameters for request
             * @param {integer=} params.pageSize Maximum number of product statuses to return in the response, used for paging.
             * @param {string=} params.pageToken The token returned by the previous request.
             * @param {string} params.parent Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            list: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://manufacturers.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{parent}/products').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * manufacturers.accounts.products.update
             *
             * @desc Inserts or updates the product in a Manufacturer Center account.  The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted an update for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the updated version is available.  Inserted or updated products first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of updated products will return the original state of the product.
             *
             * @alias manufacturers.accounts.products.update
             * @memberOf! manufacturers(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Name in the format `{target_country}:{content_language}:{product_id}`.  `target_country`   - The target country of the product as a CLDR territory                      code (for example, US).  `content_language` - The content language of the product as a two-letter                      ISO 639-1 language code (for example, en).  `product_id`     -   The ID of the product. For more information, see                      https://support.google.com/manufacturers/answer/6124116#id.
             * @param {string} params.parent Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
             * @param {manufacturers(v1).Product} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            update: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://manufacturers.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{parent}/products/{name}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['parent', 'name'],
                    pathParams: ['name', 'parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
}
module.exports = Manufacturers;
//# sourceMappingURL=v1.js.map