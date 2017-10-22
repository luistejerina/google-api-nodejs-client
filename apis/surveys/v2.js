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
 * Surveys API
 *
 * Creates and conducts surveys, lists the surveys that an authenticated user owns, and retrieves survey results and information about specified surveys.
 *
 * @example
 * const google = require('googleapis');
 * const surveys = google.surveys('v2');
 *
 * @namespace surveys
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Surveys
 */
function Surveys(options) {
    const self = this;
    self._options = options || {};
    self.mobileapppanels = {
        /**
         * surveys.mobileapppanels.get
         *
         * @desc Retrieves a MobileAppPanel that is available to the authenticated user.
         *
         * @alias surveys.mobileapppanels.get
         * @memberOf! surveys(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.panelId External URL ID for the panel.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/surveys/v2/mobileAppPanels/{panelId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['panelId'],
                pathParams: ['panelId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * surveys.mobileapppanels.list
         *
         * @desc Lists the MobileAppPanels available to the authenticated user.
         *
         * @alias surveys.mobileapppanels.list
         * @memberOf! surveys(v2)
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.maxResults
         * @param {integer=} params.startIndex
         * @param {string=} params.token
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/surveys/v2/mobileAppPanels').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * surveys.mobileapppanels.update
         *
         * @desc Updates a MobileAppPanel. Currently the only property that can be updated is the owners property.
         *
         * @alias surveys.mobileapppanels.update
         * @memberOf! surveys(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.panelId External URL ID for the panel.
         * @param {surveys(v2).MobileAppPanel} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/surveys/v2/mobileAppPanels/{panelId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['panelId'],
                pathParams: ['panelId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.results = {
        /**
         * surveys.results.get
         *
         * @desc Retrieves any survey results that have been produced so far. Results are formatted as an Excel file. You must add "?alt=media" to the URL as an argument to get results.
         *
         * @alias surveys.results.get
         * @memberOf! surveys(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.surveyUrlId External URL ID for the survey.
         * @param {surveys(v2).ResultsGetRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/surveys/v2/surveys/{surveyUrlId}/results').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['surveyUrlId'],
                pathParams: ['surveyUrlId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.surveys = {
        /**
         * surveys.surveys.delete
         *
         * @desc Removes a survey from view in all user GET requests.
         *
         * @alias surveys.surveys.delete
         * @memberOf! surveys(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.surveyUrlId External URL ID for the survey.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/surveys/v2/surveys/{surveyUrlId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['surveyUrlId'],
                pathParams: ['surveyUrlId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * surveys.surveys.get
         *
         * @desc Retrieves information about the specified survey.
         *
         * @alias surveys.surveys.get
         * @memberOf! surveys(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.surveyUrlId External URL ID for the survey.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/surveys/v2/surveys/{surveyUrlId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['surveyUrlId'],
                pathParams: ['surveyUrlId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * surveys.surveys.insert
         *
         * @desc Creates a survey.
         *
         * @alias surveys.surveys.insert
         * @memberOf! surveys(v2)
         *
         * @param {object} params Parameters for request
         * @param {surveys(v2).Survey} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/surveys/v2/surveys').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * surveys.surveys.list
         *
         * @desc Lists the surveys owned by the authenticated user.
         *
         * @alias surveys.surveys.list
         * @memberOf! surveys(v2)
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.maxResults
         * @param {integer=} params.startIndex
         * @param {string=} params.token
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/surveys/v2/surveys').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * surveys.surveys.start
         *
         * @desc Begins running a survey.
         *
         * @alias surveys.surveys.start
         * @memberOf! surveys(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resourceId
         * @param {surveys(v2).SurveysStartRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        start: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/surveys/v2/surveys/{resourceId}/start').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['resourceId'],
                pathParams: ['resourceId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * surveys.surveys.stop
         *
         * @desc Stops a running survey.
         *
         * @alias surveys.surveys.stop
         * @memberOf! surveys(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resourceId
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        stop: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/surveys/v2/surveys/{resourceId}/stop').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['resourceId'],
                pathParams: ['resourceId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * surveys.surveys.update
         *
         * @desc Updates a survey. Currently the only property that can be updated is the owners property.
         *
         * @alias surveys.surveys.update
         * @memberOf! surveys(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.surveyUrlId External URL ID for the survey.
         * @param {surveys(v2).Survey} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/surveys/v2/surveys/{surveyUrlId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['surveyUrlId'],
                pathParams: ['surveyUrlId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Surveys;
//# sourceMappingURL=v2.js.map