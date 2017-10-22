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
 * Google Play Movies Partner API
 *
 * Gets the delivery status of titles for Google Play Movies Partners.
 *
 * @example
 * const google = require('googleapis');
 * const playmoviespartner = google.playmoviespartner('v1');
 *
 * @namespace playmoviespartner
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Playmoviespartner
 */
function Playmoviespartner(options) {
    const self = this;
    self._options = options || {};
    self.accounts = {
        avails: {
            /**
             * playmoviespartner.accounts.avails.get
             *
             * @desc Get an Avail given its avail group id and avail id.
             *
             * @alias playmoviespartner.accounts.avails.get
             * @memberOf! playmoviespartner(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId REQUIRED. See _General rules_ for more information about this field.
             * @param {string} params.availId REQUIRED. Avail ID.
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
                const rootUrl = options.rootUrl || 'https://playmoviespartner.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/accounts/{accountId}/avails/{availId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'availId'],
                    pathParams: ['accountId', 'availId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * playmoviespartner.accounts.avails.list
             *
             * @desc List Avails owned or managed by the partner.  See _Authentication and Authorization rules_ and _List methods rules_ for more information about this method.
             *
             * @alias playmoviespartner.accounts.avails.list
             * @memberOf! playmoviespartner(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId REQUIRED. See _General rules_ for more information about this field.
             * @param {string=} params.altId Filter Avails that match a case-insensitive, partner-specific custom id. NOTE: this field is deprecated and will be removed on V2; `alt_ids` should be used instead.
             * @param {string=} params.altIds Filter Avails that match (case-insensitive) any of the given partner-specific custom ids.
             * @param {integer=} params.pageSize See _List methods rules_ for info about this field.
             * @param {string=} params.pageToken See _List methods rules_ for info about this field.
             * @param {string=} params.pphNames See _List methods rules_ for info about this field.
             * @param {string=} params.studioNames See _List methods rules_ for info about this field.
             * @param {string=} params.territories Filter Avails that match (case-insensitive) any of the given country codes, using the "ISO 3166-1 alpha-2" format (examples: "US", "us", "Us").
             * @param {string=} params.title Filter that matches Avails with a `title_internal_alias`, `series_title_internal_alias`, `season_title_internal_alias`, or `episode_title_internal_alias` that contains the given case-insensitive title.
             * @param {string=} params.videoIds Filter Avails that match any of the given `video_id`s.
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
                const rootUrl = options.rootUrl || 'https://playmoviespartner.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/accounts/{accountId}/avails').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['accountId'],
                    pathParams: ['accountId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        orders: {
            /**
             * playmoviespartner.accounts.orders.get
             *
             * @desc Get an Order given its id.  See _Authentication and Authorization rules_ and _Get methods rules_ for more information about this method.
             *
             * @alias playmoviespartner.accounts.orders.get
             * @memberOf! playmoviespartner(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId REQUIRED. See _General rules_ for more information about this field.
             * @param {string} params.orderId REQUIRED. Order ID.
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
                const rootUrl = options.rootUrl || 'https://playmoviespartner.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/accounts/{accountId}/orders/{orderId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'orderId'],
                    pathParams: ['accountId', 'orderId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * playmoviespartner.accounts.orders.list
             *
             * @desc List Orders owned or managed by the partner.  See _Authentication and Authorization rules_ and _List methods rules_ for more information about this method.
             *
             * @alias playmoviespartner.accounts.orders.list
             * @memberOf! playmoviespartner(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId REQUIRED. See _General rules_ for more information about this field.
             * @param {string=} params.customId Filter Orders that match a case-insensitive, partner-specific custom id.
             * @param {string=} params.name Filter that matches Orders with a `name`, `show`, `season` or `episode` that contains the given case-insensitive name.
             * @param {integer=} params.pageSize See _List methods rules_ for info about this field.
             * @param {string=} params.pageToken See _List methods rules_ for info about this field.
             * @param {string=} params.pphNames See _List methods rules_ for info about this field.
             * @param {string=} params.status Filter Orders that match one of the given status.
             * @param {string=} params.studioNames See _List methods rules_ for info about this field.
             * @param {string=} params.videoIds Filter Orders that match any of the given `video_id`s.
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
                const rootUrl = options.rootUrl || 'https://playmoviespartner.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/accounts/{accountId}/orders').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['accountId'],
                    pathParams: ['accountId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        storeInfos: {
            /**
             * playmoviespartner.accounts.storeInfos.list
             *
             * @desc List StoreInfos owned or managed by the partner.  See _Authentication and Authorization rules_ and _List methods rules_ for more information about this method.
             *
             * @alias playmoviespartner.accounts.storeInfos.list
             * @memberOf! playmoviespartner(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId REQUIRED. See _General rules_ for more information about this field.
             * @param {string=} params.countries Filter StoreInfos that match (case-insensitive) any of the given country codes, using the "ISO 3166-1 alpha-2" format (examples: "US", "us", "Us").
             * @param {string=} params.mids Filter StoreInfos that match any of the given `mid`s.
             * @param {string=} params.name Filter that matches StoreInfos with a `name` or `show_name` that contains the given case-insensitive name.
             * @param {integer=} params.pageSize See _List methods rules_ for info about this field.
             * @param {string=} params.pageToken See _List methods rules_ for info about this field.
             * @param {string=} params.pphNames See _List methods rules_ for info about this field.
             * @param {string=} params.seasonIds Filter StoreInfos that match any of the given `season_id`s.
             * @param {string=} params.studioNames See _List methods rules_ for info about this field.
             * @param {string=} params.videoId Filter StoreInfos that match a given `video_id`. NOTE: this field is deprecated and will be removed on V2; `video_ids` should be used instead.
             * @param {string=} params.videoIds Filter StoreInfos that match any of the given `video_id`s.
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
                const rootUrl = options.rootUrl || 'https://playmoviespartner.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/accounts/{accountId}/storeInfos').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['accountId'],
                    pathParams: ['accountId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            country: {
                /**
                 * playmoviespartner.accounts.storeInfos.country.get
                 *
                 * @desc Get a StoreInfo given its video id and country.  See _Authentication and Authorization rules_ and _Get methods rules_ for more information about this method.
                 *
                 * @alias playmoviespartner.accounts.storeInfos.country.get
                 * @memberOf! playmoviespartner(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.accountId REQUIRED. See _General rules_ for more information about this field.
                 * @param {string} params.country REQUIRED. Edit country.
                 * @param {string} params.videoId REQUIRED. Video ID.
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
                    const rootUrl = options.rootUrl || 'https://playmoviespartner.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/accounts/{accountId}/storeInfos/{videoId}/country/{country}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'videoId', 'country'],
                        pathParams: ['accountId', 'country', 'videoId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            }
        }
    };
}
module.exports = Playmoviespartner;
//# sourceMappingURL=v1.js.map