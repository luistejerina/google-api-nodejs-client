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
 * DoubleClick Bid Manager API
 *
 * API for viewing and managing your reports in DoubleClick Bid Manager.
 *
 * @example
 * const google = require('googleapis');
 * const doubleclickbidmanager = google.doubleclickbidmanager('v1');
 *
 * @namespace doubleclickbidmanager
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Doubleclickbidmanager
 */
function Doubleclickbidmanager(options) {
    const self = this;
    self._options = options || {};
    self.lineitems = {
        /**
         * doubleclickbidmanager.lineitems.downloadlineitems
         *
         * @desc Retrieves line items in CSV format.
         *
         * @alias doubleclickbidmanager.lineitems.downloadlineitems
         * @memberOf! doubleclickbidmanager(v1)
         *
         * @param {object} params Parameters for request
         * @param {doubleclickbidmanager(v1).DownloadLineItemsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        downloadlineitems: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclickbidmanager/v1/lineitems/downloadlineitems').replace(/([^:]\/)\/+/g, '$1'),
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
         * doubleclickbidmanager.lineitems.uploadlineitems
         *
         * @desc Uploads line items in CSV format.
         *
         * @alias doubleclickbidmanager.lineitems.uploadlineitems
         * @memberOf! doubleclickbidmanager(v1)
         *
         * @param {object} params Parameters for request
         * @param {doubleclickbidmanager(v1).UploadLineItemsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        uploadlineitems: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclickbidmanager/v1/lineitems/uploadlineitems').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.queries = {
        /**
         * doubleclickbidmanager.queries.createquery
         *
         * @desc Creates a query.
         *
         * @alias doubleclickbidmanager.queries.createquery
         * @memberOf! doubleclickbidmanager(v1)
         *
         * @param {object} params Parameters for request
         * @param {doubleclickbidmanager(v1).Query} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        createquery: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclickbidmanager/v1/query').replace(/([^:]\/)\/+/g, '$1'),
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
         * doubleclickbidmanager.queries.deletequery
         *
         * @desc Deletes a stored query as well as the associated stored reports.
         *
         * @alias doubleclickbidmanager.queries.deletequery
         * @memberOf! doubleclickbidmanager(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.queryId Query ID to delete.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        deletequery: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclickbidmanager/v1/query/{queryId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['queryId'],
                pathParams: ['queryId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * doubleclickbidmanager.queries.getquery
         *
         * @desc Retrieves a stored query.
         *
         * @alias doubleclickbidmanager.queries.getquery
         * @memberOf! doubleclickbidmanager(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.queryId Query ID to retrieve.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getquery: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclickbidmanager/v1/query/{queryId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['queryId'],
                pathParams: ['queryId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * doubleclickbidmanager.queries.listqueries
         *
         * @desc Retrieves stored queries.
         *
         * @alias doubleclickbidmanager.queries.listqueries
         * @memberOf! doubleclickbidmanager(v1)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listqueries: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclickbidmanager/v1/queries').replace(/([^:]\/)\/+/g, '$1'),
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
         * doubleclickbidmanager.queries.runquery
         *
         * @desc Runs a stored query to generate a report.
         *
         * @alias doubleclickbidmanager.queries.runquery
         * @memberOf! doubleclickbidmanager(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.queryId Query ID to run.
         * @param {doubleclickbidmanager(v1).RunQueryRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        runquery: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclickbidmanager/v1/query/{queryId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['queryId'],
                pathParams: ['queryId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.reports = {
        /**
         * doubleclickbidmanager.reports.listreports
         *
         * @desc Retrieves stored reports.
         *
         * @alias doubleclickbidmanager.reports.listreports
         * @memberOf! doubleclickbidmanager(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.queryId Query ID with which the reports are associated.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listreports: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclickbidmanager/v1/queries/{queryId}/reports').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['queryId'],
                pathParams: ['queryId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.sdf = {
        /**
         * doubleclickbidmanager.sdf.download
         *
         * @desc Retrieves entities in SDF format.
         *
         * @alias doubleclickbidmanager.sdf.download
         * @memberOf! doubleclickbidmanager(v1)
         *
         * @param {object} params Parameters for request
         * @param {doubleclickbidmanager(v1).DownloadRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        download: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/doubleclickbidmanager/v1/sdf/download').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Doubleclickbidmanager;
//# sourceMappingURL=v1.js.map