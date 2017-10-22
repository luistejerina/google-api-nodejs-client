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
 * Fusion Tables API
 *
 * API for working with Fusion Tables data.
 *
 * @example
 * const google = require('googleapis');
 * const fusiontables = google.fusiontables('v1');
 *
 * @namespace fusiontables
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Fusiontables
 */
function Fusiontables(options) {
    const self = this;
    self._options = options || {};
    self.column = {
        /**
         * fusiontables.column.delete
         *
         * @desc Deletes the column.
         *
         * @alias fusiontables.column.delete
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.columnId Name or identifier for the column being deleted.
         * @param {string} params.tableId Table from which the column is being deleted.
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/columns/{columnId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['tableId', 'columnId'],
                pathParams: ['columnId', 'tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.column.get
         *
         * @desc Retrieves a specific column by its id.
         *
         * @alias fusiontables.column.get
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.columnId Name or identifier for the column that is being requested.
         * @param {string} params.tableId Table to which the column belongs.
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/columns/{columnId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['tableId', 'columnId'],
                pathParams: ['columnId', 'tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.column.insert
         *
         * @desc Adds a new column to the table.
         *
         * @alias fusiontables.column.insert
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.tableId Table for which a new column is being added.
         * @param {fusiontables(v1).Column} params.resource Request body data
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/columns').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['tableId'],
                pathParams: ['tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.column.list
         *
         * @desc Retrieves a list of columns.
         *
         * @alias fusiontables.column.list
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults Maximum number of columns to return. Optional. Default is 5.
         * @param {string=} params.pageToken Continuation token specifying which result page to return. Optional.
         * @param {string} params.tableId Table whose columns are being listed.
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/columns').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['tableId'],
                pathParams: ['tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.column.patch
         *
         * @desc Updates the name or type of an existing column. This method supports patch semantics.
         *
         * @alias fusiontables.column.patch
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.columnId Name or identifier for the column that is being updated.
         * @param {string} params.tableId Table for which the column is being updated.
         * @param {fusiontables(v1).Column} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/columns/{columnId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['tableId', 'columnId'],
                pathParams: ['columnId', 'tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.column.update
         *
         * @desc Updates the name or type of an existing column.
         *
         * @alias fusiontables.column.update
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.columnId Name or identifier for the column that is being updated.
         * @param {string} params.tableId Table for which the column is being updated.
         * @param {fusiontables(v1).Column} params.resource Request body data
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/columns/{columnId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['tableId', 'columnId'],
                pathParams: ['columnId', 'tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.query = {
        /**
         * fusiontables.query.sql
         *
         * @desc Executes an SQL SELECT/INSERT/UPDATE/DELETE/SHOW/DESCRIBE/CREATE statement.
         *
         * @alias fusiontables.query.sql
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.hdrs Should column names be included (in the first row)?. Default is true.
         * @param {string} params.sql An SQL SELECT/SHOW/DESCRIBE/INSERT/UPDATE/DELETE/CREATE statement.
         * @param {boolean=} params.typed Should typed values be returned in the (JSON) response -- numbers for numeric values and parsed geometries for KML values? Default is true.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        sql: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/fusiontables/v1/query').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['sql'],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.query.sqlGet
         *
         * @desc Executes an SQL SELECT/SHOW/DESCRIBE statement.
         *
         * @alias fusiontables.query.sqlGet
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.hdrs Should column names be included (in the first row)?. Default is true.
         * @param {string} params.sql An SQL SELECT/SHOW/DESCRIBE statement.
         * @param {boolean=} params.typed Should typed values be returned in the (JSON) response -- numbers for numeric values and parsed geometries for KML values? Default is true.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        sqlGet: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/fusiontables/v1/query').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['sql'],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.style = {
        /**
         * fusiontables.style.delete
         *
         * @desc Deletes a style.
         *
         * @alias fusiontables.style.delete
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.styleId Identifier (within a table) for the style being deleted
         * @param {string} params.tableId Table from which the style is being deleted
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/styles/{styleId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['tableId', 'styleId'],
                pathParams: ['styleId', 'tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.style.get
         *
         * @desc Gets a specific style.
         *
         * @alias fusiontables.style.get
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.styleId Identifier (integer) for a specific style in a table
         * @param {string} params.tableId Table to which the requested style belongs
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/styles/{styleId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['tableId', 'styleId'],
                pathParams: ['styleId', 'tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.style.insert
         *
         * @desc Adds a new style for the table.
         *
         * @alias fusiontables.style.insert
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.tableId Table for which a new style is being added
         * @param {fusiontables(v1).StyleSetting} params.resource Request body data
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/styles').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['tableId'],
                pathParams: ['tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.style.list
         *
         * @desc Retrieves a list of styles.
         *
         * @alias fusiontables.style.list
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults Maximum number of styles to return. Optional. Default is 5.
         * @param {string=} params.pageToken Continuation token specifying which result page to return. Optional.
         * @param {string} params.tableId Table whose styles are being listed
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/styles').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['tableId'],
                pathParams: ['tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.style.patch
         *
         * @desc Updates an existing style. This method supports patch semantics.
         *
         * @alias fusiontables.style.patch
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.styleId Identifier (within a table) for the style being updated.
         * @param {string} params.tableId Table whose style is being updated.
         * @param {fusiontables(v1).StyleSetting} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/styles/{styleId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['tableId', 'styleId'],
                pathParams: ['styleId', 'tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.style.update
         *
         * @desc Updates an existing style.
         *
         * @alias fusiontables.style.update
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.styleId Identifier (within a table) for the style being updated.
         * @param {string} params.tableId Table whose style is being updated.
         * @param {fusiontables(v1).StyleSetting} params.resource Request body data
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/styles/{styleId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['tableId', 'styleId'],
                pathParams: ['styleId', 'tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.table = {
        /**
         * fusiontables.table.copy
         *
         * @desc Copies a table.
         *
         * @alias fusiontables.table.copy
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.copyPresentation Whether to also copy tabs, styles, and templates. Default is false.
         * @param {string} params.tableId ID of the table that is being copied.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        copy: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/copy').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['tableId'],
                pathParams: ['tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.table.delete
         *
         * @desc Deletes a table.
         *
         * @alias fusiontables.table.delete
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.tableId ID of the table that is being deleted.
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['tableId'],
                pathParams: ['tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.table.get
         *
         * @desc Retrieves a specific table by its id.
         *
         * @alias fusiontables.table.get
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.tableId Identifier(ID) for the table being requested.
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['tableId'],
                pathParams: ['tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.table.importRows
         *
         * @desc Import more rows into a table.
         *
         * @alias fusiontables.table.importRows
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.delimiter The delimiter used to separate cell values. This can only consist of a single character. Default is ','.
         * @param {string=} params.encoding The encoding of the content. Default is UTF-8. Use 'auto-detect' if you are unsure of the encoding.
         * @param {integer=} params.endLine The index of the last line from which to start importing, exclusive. Thus, the number of imported lines is endLine - startLine. If this parameter is not provided, the file will be imported until the last line of the file. If endLine is negative, then the imported content will exclude the last endLine lines. That is, if endline is negative, no line will be imported whose index is greater than N + endLine where N is the number of lines in the file, and the number of imported lines will be N + endLine - startLine.
         * @param {boolean=} params.isStrict Whether the CSV must have the same number of values for each row. If false, rows with fewer values will be padded with empty values. Default is true.
         * @param {integer=} params.startLine The index of the first line from which to start importing, inclusive. Default is 0.
         * @param {string} params.tableId The table into which new rows are being imported.
         * @param {object} params.media Media object
         * @param {string} params.media.mimeType Media mime-type
         * @param {string|object} params.media.body Media body contents
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        importRows: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/import').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                mediaUrl: (rootUrl + '/upload/fusiontables/v1/tables/{tableId}/import').replace(/([^:]\/)\/+/g, '$1'),
                requiredParams: ['tableId'],
                pathParams: ['tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.table.importTable
         *
         * @desc Import a new table.
         *
         * @alias fusiontables.table.importTable
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.delimiter The delimiter used to separate cell values. This can only consist of a single character. Default is ','.
         * @param {string=} params.encoding The encoding of the content. Default is UTF-8. Use 'auto-detect' if you are unsure of the encoding.
         * @param {string} params.name The name to be assigned to the new table.
         * @param {object} params.media Media object
         * @param {string} params.media.mimeType Media mime-type
         * @param {string|object} params.media.body Media body contents
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        importTable: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/fusiontables/v1/tables/import').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                mediaUrl: (rootUrl + '/upload/fusiontables/v1/tables/import').replace(/([^:]\/)\/+/g, '$1'),
                requiredParams: ['name'],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.table.insert
         *
         * @desc Creates a new table.
         *
         * @alias fusiontables.table.insert
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {fusiontables(v1).Table} params.resource Request body data
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
                    url: (rootUrl + '/fusiontables/v1/tables').replace(/([^:]\/)\/+/g, '$1'),
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
         * fusiontables.table.list
         *
         * @desc Retrieves a list of tables a user owns.
         *
         * @alias fusiontables.table.list
         * @memberOf! fusiontables(v1)
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.maxResults Maximum number of styles to return. Optional. Default is 5.
         * @param {string=} params.pageToken Continuation token specifying which result page to return. Optional.
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
                    url: (rootUrl + '/fusiontables/v1/tables').replace(/([^:]\/)\/+/g, '$1'),
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
         * fusiontables.table.patch
         *
         * @desc Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated. This method supports patch semantics.
         *
         * @alias fusiontables.table.patch
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.replaceViewDefinition Should the view definition also be updated? The specified view definition replaces the existing one. Only a view can be updated with a new definition.
         * @param {string} params.tableId ID of the table that is being updated.
         * @param {fusiontables(v1).Table} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['tableId'],
                pathParams: ['tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.table.update
         *
         * @desc Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated.
         *
         * @alias fusiontables.table.update
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.replaceViewDefinition Should the view definition also be updated? The specified view definition replaces the existing one. Only a view can be updated with a new definition.
         * @param {string} params.tableId ID of the table that is being updated.
         * @param {fusiontables(v1).Table} params.resource Request body data
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['tableId'],
                pathParams: ['tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.task = {
        /**
         * fusiontables.task.delete
         *
         * @desc Deletes the task, unless already started.
         *
         * @alias fusiontables.task.delete
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.tableId Table from which the task is being deleted.
         * @param {string} params.taskId
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/tasks/{taskId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['tableId', 'taskId'],
                pathParams: ['tableId', 'taskId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.task.get
         *
         * @desc Retrieves a specific task by its id.
         *
         * @alias fusiontables.task.get
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.tableId Table to which the task belongs.
         * @param {string} params.taskId
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/tasks/{taskId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['tableId', 'taskId'],
                pathParams: ['tableId', 'taskId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.task.list
         *
         * @desc Retrieves a list of tasks.
         *
         * @alias fusiontables.task.list
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults Maximum number of columns to return. Optional. Default is 5.
         * @param {string=} params.pageToken
         * @param {integer=} params.startIndex
         * @param {string} params.tableId Table whose tasks are being listed.
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/tasks').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['tableId'],
                pathParams: ['tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.template = {
        /**
         * fusiontables.template.delete
         *
         * @desc Deletes a template
         *
         * @alias fusiontables.template.delete
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.tableId Table from which the template is being deleted
         * @param {integer} params.templateId Identifier for the template which is being deleted
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/templates/{templateId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['tableId', 'templateId'],
                pathParams: ['tableId', 'templateId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.template.get
         *
         * @desc Retrieves a specific template by its id
         *
         * @alias fusiontables.template.get
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.tableId Table to which the template belongs
         * @param {integer} params.templateId Identifier for the template that is being requested
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/templates/{templateId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['tableId', 'templateId'],
                pathParams: ['tableId', 'templateId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.template.insert
         *
         * @desc Creates a new template for the table.
         *
         * @alias fusiontables.template.insert
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.tableId Table for which a new template is being created
         * @param {fusiontables(v1).Template} params.resource Request body data
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/templates').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['tableId'],
                pathParams: ['tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.template.list
         *
         * @desc Retrieves a list of templates.
         *
         * @alias fusiontables.template.list
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxResults Maximum number of templates to return. Optional. Default is 5.
         * @param {string=} params.pageToken Continuation token specifying which results page to return. Optional.
         * @param {string} params.tableId Identifier for the table whose templates are being requested
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/templates').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['tableId'],
                pathParams: ['tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.template.patch
         *
         * @desc Updates an existing template. This method supports patch semantics.
         *
         * @alias fusiontables.template.patch
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.tableId Table to which the updated template belongs
         * @param {integer} params.templateId Identifier for the template that is being updated
         * @param {fusiontables(v1).Template} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/templates/{templateId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['tableId', 'templateId'],
                pathParams: ['tableId', 'templateId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * fusiontables.template.update
         *
         * @desc Updates an existing template
         *
         * @alias fusiontables.template.update
         * @memberOf! fusiontables(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.tableId Table to which the updated template belongs
         * @param {integer} params.templateId Identifier for the template that is being updated
         * @param {fusiontables(v1).Template} params.resource Request body data
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
                    url: (rootUrl + '/fusiontables/v1/tables/{tableId}/templates/{templateId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['tableId', 'templateId'],
                pathParams: ['tableId', 'templateId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Fusiontables;
//# sourceMappingURL=v1.js.map