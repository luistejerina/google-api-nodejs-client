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
 * BigQuery Data Transfer API
 *
 * Transfers data from partner SaaS applications to Google BigQuery on a scheduled, managed basis.
 *
 * @example
 * const google = require('googleapis');
 * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
 *
 * @namespace bigquerydatatransfer
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Bigquerydatatransfer
 */
function Bigquerydatatransfer(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        dataSources: {
            /**
             * bigquerydatatransfer.projects.dataSources.checkValidCreds
             *
             * @desc Returns true if valid credentials exist for the given data source and requesting user. Some data sources doesn't support service account, so we need to talk to them on behalf of the end user. This API just checks whether we have OAuth token for the particular user, which is a pre-requisite before user can create a transfer config.
             *
             * @alias bigquerydatatransfer.projects.dataSources.checkValidCreds
             * @memberOf! bigquerydatatransfer(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The data source in the form: `projects/{project_id}/dataSources/{data_source_id}`
             * @param {bigquerydatatransfer(v1).CheckValidCredsRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            checkValidCreds: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}:checkValidCreds').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * bigquerydatatransfer.projects.dataSources.get
             *
             * @desc Retrieves a supported data source and returns its settings, which can be used for UI rendering.
             *
             * @alias bigquerydatatransfer.projects.dataSources.get
             * @memberOf! bigquerydatatransfer(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/dataSources/{data_source_id}`
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
                const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * bigquerydatatransfer.projects.dataSources.list
             *
             * @desc Lists supported data sources and returns their settings, which can be used for UI rendering.
             *
             * @alias bigquerydatatransfer.projects.dataSources.list
             * @memberOf! bigquerydatatransfer(v1)
             *
             * @param {object} params Parameters for request
             * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
             * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
             * @param {string} params.parent The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}`
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
                const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{parent}/dataSources').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        locations: {
            /**
             * bigquerydatatransfer.projects.locations.get
             *
             * @desc Get information about a location.
             *
             * @alias bigquerydatatransfer.projects.locations.get
             * @memberOf! bigquerydatatransfer(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Resource name for the location.
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
                const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * bigquerydatatransfer.projects.locations.list
             *
             * @desc Lists information about the supported locations for this service.
             *
             * @alias bigquerydatatransfer.projects.locations.list
             * @memberOf! bigquerydatatransfer(v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.filter The standard list filter.
             * @param {string} params.name The resource that owns the locations collection, if applicable.
             * @param {integer=} params.pageSize The standard list page size.
             * @param {string=} params.pageToken The standard list page token.
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
                const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}/locations').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            dataSources: {
                /**
                 * bigquerydatatransfer.projects.locations.dataSources.checkValidCreds
                 *
                 * @desc Returns true if valid credentials exist for the given data source and requesting user. Some data sources doesn't support service account, so we need to talk to them on behalf of the end user. This API just checks whether we have OAuth token for the particular user, which is a pre-requisite before user can create a transfer config.
                 *
                 * @alias bigquerydatatransfer.projects.locations.dataSources.checkValidCreds
                 * @memberOf! bigquerydatatransfer(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The data source in the form: `projects/{project_id}/dataSources/{data_source_id}`
                 * @param {bigquerydatatransfer(v1).CheckValidCredsRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                checkValidCreds: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{name}:checkValidCreds').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * bigquerydatatransfer.projects.locations.dataSources.get
                 *
                 * @desc Retrieves a supported data source and returns its settings, which can be used for UI rendering.
                 *
                 * @alias bigquerydatatransfer.projects.locations.dataSources.get
                 * @memberOf! bigquerydatatransfer(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/dataSources/{data_source_id}`
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
                    const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * bigquerydatatransfer.projects.locations.dataSources.list
                 *
                 * @desc Lists supported data sources and returns their settings, which can be used for UI rendering.
                 *
                 * @alias bigquerydatatransfer.projects.locations.dataSources.list
                 * @memberOf! bigquerydatatransfer(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
                 * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
                 * @param {string} params.parent The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}`
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
                    const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{parent}/dataSources').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            transferConfigs: {
                /**
                 * bigquerydatatransfer.projects.locations.transferConfigs.create
                 *
                 * @desc Creates a new data transfer configuration.
                 *
                 * @alias bigquerydatatransfer.projects.locations.transferConfigs.create
                 * @memberOf! bigquerydatatransfer(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. This is required if new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
                 * @param {string} params.parent The BigQuery project id where the transfer configuration should be created. Must be in the format /projects/{project_id}/locations/{location_id} or /projects/{project_id}/locations/- In case when '-' is specified as location_id, location is infered from the destination dataset region.
                 * @param {bigquerydatatransfer(v1).TransferConfig} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                create: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{parent}/transferConfigs').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * bigquerydatatransfer.projects.locations.transferConfigs.delete
                 *
                 * @desc Deletes a data transfer configuration, including any associated transfer runs and logs.
                 *
                 * @alias bigquerydatatransfer.projects.locations.transferConfigs.delete
                 * @memberOf! bigquerydatatransfer(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
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
                    const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * bigquerydatatransfer.projects.locations.transferConfigs.get
                 *
                 * @desc Returns information about a data transfer config.
                 *
                 * @alias bigquerydatatransfer.projects.locations.transferConfigs.get
                 * @memberOf! bigquerydatatransfer(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
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
                    const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * bigquerydatatransfer.projects.locations.transferConfigs.list
                 *
                 * @desc Returns information about all data transfers in the project.
                 *
                 * @alias bigquerydatatransfer.projects.locations.transferConfigs.list
                 * @memberOf! bigquerydatatransfer(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.dataSourceIds When specified, only configurations of requested data sources are returned.
                 * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
                 * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
                 * @param {string} params.parent The BigQuery project id for which data sources should be returned: `projects/{project_id}`.
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
                    const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{parent}/transferConfigs').replace(/([^:]\/)\/+/g, '$1'),
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
                 * bigquerydatatransfer.projects.locations.transferConfigs.patch
                 *
                 * @desc Updates a data transfer configuration. All fields must be set, even if they are not updated.
                 *
                 * @alias bigquerydatatransfer.projects.locations.transferConfigs.patch
                 * @memberOf! bigquerydatatransfer(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. If it is provided, the transfer configuration will be associated with the gaia id of the authorizing user. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
                 * @param {string} params.name The resource name of the transfer config. Transfer config names have the form `projects/{project_id}/transferConfigs/{config_id}`. Where `config_id` is usually a uuid, even though it is not guaranteed or required. The name is ignored when creating a transfer config.
                 * @param {string=} params.updateMask Required list of fields to be updated in this request.
                 * @param {bigquerydatatransfer(v1).TransferConfig} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * bigquerydatatransfer.projects.locations.transferConfigs.scheduleRuns
                 *
                 * @desc Creates transfer runs for a time range [range_start_time, range_end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range.
                 *
                 * @alias bigquerydatatransfer.projects.locations.transferConfigs.scheduleRuns
                 * @memberOf! bigquerydatatransfer(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}`.
                 * @param {bigquerydatatransfer(v1).ScheduleTransferRunsRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                scheduleRuns: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{parent}:scheduleRuns').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                runs: {
                    /**
                     * bigquerydatatransfer.projects.locations.transferConfigs.runs.delete
                     *
                     * @desc Deletes the specified transfer run.
                     *
                     * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.delete
                     * @memberOf! bigquerydatatransfer(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
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
                        const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['name'],
                            pathParams: ['name'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * bigquerydatatransfer.projects.locations.transferConfigs.runs.get
                     *
                     * @desc Returns information about the particular transfer run.
                     *
                     * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.get
                     * @memberOf! bigquerydatatransfer(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
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
                        const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['name'],
                            pathParams: ['name'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * bigquerydatatransfer.projects.locations.transferConfigs.runs.list
                     *
                     * @desc Returns information about running and completed jobs.
                     *
                     * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.list
                     * @memberOf! bigquerydatatransfer(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
                     * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
                     * @param {string} params.parent Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: `projects/{project_id}/transferConfigs/{config_id}`.
                     * @param {string=} params.runAttempt Indicates how run attempts are to be pulled.
                     * @param {string=} params.states When specified, only transfer runs with requested states are returned.
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
                        const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{parent}/runs').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    transferLogs: {
                        /**
                         * bigquerydatatransfer.projects.locations.transferConfigs.runs.transferLogs.list
                         *
                         * @desc Returns user facing log messages for the data transfer run.
                         *
                         * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.transferLogs.list
                         * @memberOf! bigquerydatatransfer(v1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string=} params.messageTypes Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.
                         * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
                         * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
                         * @param {string} params.parent Transfer run name in the form: `projects/{project_id}/transferConfigs/{config_Id}/runs/{run_id}`.
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
                            const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                            const parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v1/{parent}/transferLogs').replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['parent'],
                                pathParams: ['parent'],
                                context: self
                            };
                            return apirequest_1.default(parameters, callback);
                        }
                    }
                }
            }
        },
        transferConfigs: {
            /**
             * bigquerydatatransfer.projects.transferConfigs.create
             *
             * @desc Creates a new data transfer configuration.
             *
             * @alias bigquerydatatransfer.projects.transferConfigs.create
             * @memberOf! bigquerydatatransfer(v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. This is required if new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
             * @param {string} params.parent The BigQuery project id where the transfer configuration should be created. Must be in the format /projects/{project_id}/locations/{location_id} or /projects/{project_id}/locations/- In case when '-' is specified as location_id, location is infered from the destination dataset region.
             * @param {bigquerydatatransfer(v1).TransferConfig} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            create: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{parent}/transferConfigs').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * bigquerydatatransfer.projects.transferConfigs.delete
             *
             * @desc Deletes a data transfer configuration, including any associated transfer runs and logs.
             *
             * @alias bigquerydatatransfer.projects.transferConfigs.delete
             * @memberOf! bigquerydatatransfer(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
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
                const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * bigquerydatatransfer.projects.transferConfigs.get
             *
             * @desc Returns information about a data transfer config.
             *
             * @alias bigquerydatatransfer.projects.transferConfigs.get
             * @memberOf! bigquerydatatransfer(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
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
                const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * bigquerydatatransfer.projects.transferConfigs.list
             *
             * @desc Returns information about all data transfers in the project.
             *
             * @alias bigquerydatatransfer.projects.transferConfigs.list
             * @memberOf! bigquerydatatransfer(v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.dataSourceIds When specified, only configurations of requested data sources are returned.
             * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
             * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
             * @param {string} params.parent The BigQuery project id for which data sources should be returned: `projects/{project_id}`.
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
                const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{parent}/transferConfigs').replace(/([^:]\/)\/+/g, '$1'),
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
             * bigquerydatatransfer.projects.transferConfigs.patch
             *
             * @desc Updates a data transfer configuration. All fields must be set, even if they are not updated.
             *
             * @alias bigquerydatatransfer.projects.transferConfigs.patch
             * @memberOf! bigquerydatatransfer(v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. If it is provided, the transfer configuration will be associated with the gaia id of the authorizing user. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
             * @param {string} params.name The resource name of the transfer config. Transfer config names have the form `projects/{project_id}/transferConfigs/{config_id}`. Where `config_id` is usually a uuid, even though it is not guaranteed or required. The name is ignored when creating a transfer config.
             * @param {string=} params.updateMask Required list of fields to be updated in this request.
             * @param {bigquerydatatransfer(v1).TransferConfig} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * bigquerydatatransfer.projects.transferConfigs.scheduleRuns
             *
             * @desc Creates transfer runs for a time range [range_start_time, range_end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range.
             *
             * @alias bigquerydatatransfer.projects.transferConfigs.scheduleRuns
             * @memberOf! bigquerydatatransfer(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}`.
             * @param {bigquerydatatransfer(v1).ScheduleTransferRunsRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            scheduleRuns: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{parent}:scheduleRuns').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            runs: {
                /**
                 * bigquerydatatransfer.projects.transferConfigs.runs.delete
                 *
                 * @desc Deletes the specified transfer run.
                 *
                 * @alias bigquerydatatransfer.projects.transferConfigs.runs.delete
                 * @memberOf! bigquerydatatransfer(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
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
                    const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * bigquerydatatransfer.projects.transferConfigs.runs.get
                 *
                 * @desc Returns information about the particular transfer run.
                 *
                 * @alias bigquerydatatransfer.projects.transferConfigs.runs.get
                 * @memberOf! bigquerydatatransfer(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
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
                    const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * bigquerydatatransfer.projects.transferConfigs.runs.list
                 *
                 * @desc Returns information about running and completed jobs.
                 *
                 * @alias bigquerydatatransfer.projects.transferConfigs.runs.list
                 * @memberOf! bigquerydatatransfer(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
                 * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
                 * @param {string} params.parent Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: `projects/{project_id}/transferConfigs/{config_id}`.
                 * @param {string=} params.runAttempt Indicates how run attempts are to be pulled.
                 * @param {string=} params.states When specified, only transfer runs with requested states are returned.
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
                    const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/{parent}/runs').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                transferLogs: {
                    /**
                     * bigquerydatatransfer.projects.transferConfigs.runs.transferLogs.list
                     *
                     * @desc Returns user facing log messages for the data transfer run.
                     *
                     * @alias bigquerydatatransfer.projects.transferConfigs.runs.transferLogs.list
                     * @memberOf! bigquerydatatransfer(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.messageTypes Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.
                     * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
                     * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
                     * @param {string} params.parent Transfer run name in the form: `projects/{project_id}/transferConfigs/{config_Id}/runs/{run_id}`.
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
                        const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/{parent}/transferLogs').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                }
            }
        }
    };
}
module.exports = Bigquerydatatransfer;
//# sourceMappingURL=v1.js.map