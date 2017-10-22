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
 * BigQuery API
 *
 * A data platform for customers to create, manage, share and query data.
 *
 * @example
 * const google = require('googleapis');
 * const bigquery = google.bigquery('v2');
 *
 * @namespace bigquery
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Bigquery
 */
function Bigquery(options) {
    const self = this;
    self._options = options || {};
    self.datasets = {
        /**
         * bigquery.datasets.delete
         *
         * @desc Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the dataset being deleted
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     // Dataset ID of dataset being deleted
         *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.datasets.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.datasets.delete
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datasetId Dataset ID of dataset being deleted
         * @param {boolean=} params.deleteContents If True, delete all the tables in the dataset. If False and the dataset contains tables, the request will fail. Default is False
         * @param {string} params.projectId Project ID of the dataset being deleted
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
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/datasets/{datasetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId'],
                pathParams: ['datasetId', 'projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * bigquery.datasets.get
         *
         * @desc Returns the dataset specified by datasetID.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the requested dataset
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     // Dataset ID of the requested dataset
         *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.datasets.get(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.datasets.get
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datasetId Dataset ID of the requested dataset
         * @param {string} params.projectId Project ID of the requested dataset
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
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/datasets/{datasetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId'],
                pathParams: ['datasetId', 'projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * bigquery.datasets.insert
         *
         * @desc Creates a new empty dataset.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the new dataset
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.datasets.insert(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.datasets.insert
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId Project ID of the new dataset
         * @param {bigquery(v2).Dataset} params.resource Request body data
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
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/datasets').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * bigquery.datasets.list
         *
         * @desc Lists all datasets in the specified project to which you have been granted the READER dataset role.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the datasets to be listed
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var datasetsPage = response['datasets'];
         *     if (!datasetsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < datasetsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `datasetsPage`:
         *       console.log(JSON.stringify(datasetsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       bigquery.datasets.list(request, handlePage);
         *     }
         *   };
         *
         *   bigquery.datasets.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.datasets.list
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.all Whether to list all datasets, including hidden ones
         * @param {string=} params.filter An expression for filtering the results of the request by label. The syntax is "labels.<name>[:<value>]". Multiple filters can be ANDed together by connecting with a space. Example: "labels.department:receiving labels.active". See Filtering datasets using labels for details.
         * @param {integer=} params.maxResults The maximum number of results to return
         * @param {string=} params.pageToken Page token, returned by a previous call, to request the next page of results
         * @param {string} params.projectId Project ID of the datasets to be listed
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
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/datasets').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * bigquery.datasets.patch
         *
         * @desc Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the dataset being updated
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     // Dataset ID of the dataset being updated
         *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. Only these properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.datasets.patch(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.datasets.patch
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datasetId Dataset ID of the dataset being updated
         * @param {string} params.projectId Project ID of the dataset being updated
         * @param {bigquery(v2).Dataset} params.resource Request body data
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
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/datasets/{datasetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId'],
                pathParams: ['datasetId', 'projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * bigquery.datasets.update
         *
         * @desc Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the dataset being updated
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     // Dataset ID of the dataset being updated
         *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. All existing properties
         *       // will be replaced.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.datasets.update(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.datasets.update
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datasetId Dataset ID of the dataset being updated
         * @param {string} params.projectId Project ID of the dataset being updated
         * @param {bigquery(v2).Dataset} params.resource Request body data
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
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/datasets/{datasetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId'],
                pathParams: ['datasetId', 'projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.jobs = {
        /**
         * bigquery.jobs.cancel
         *
         * @desc Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // [Required] Project ID of the job to cancel
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     // [Required] Job ID of the job to cancel
         *     jobId: 'my-job-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.jobs.cancel(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.jobs.cancel
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.jobId [Required] Job ID of the job to cancel
         * @param {string} params.projectId [Required] Project ID of the job to cancel
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancel: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/jobs/{jobId}/cancel').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectId', 'jobId'],
                pathParams: ['jobId', 'projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * bigquery.jobs.get
         *
         * @desc Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // [Required] Project ID of the requested job
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     // [Required] Job ID of the requested job
         *     jobId: 'my-job-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.jobs.get(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.jobs.get
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.jobId [Required] Job ID of the requested job
         * @param {string} params.projectId [Required] Project ID of the requested job
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
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/jobs/{jobId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectId', 'jobId'],
                pathParams: ['jobId', 'projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * bigquery.jobs.getQueryResults
         *
         * @desc Retrieves the results of a query job.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // [Required] Project ID of the query job
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     // [Required] Job ID of the query job
         *     jobId: 'my-job-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var errorsPage = response['errors'];
         *     if (!errorsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < errorsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `errorsPage`:
         *       console.log(JSON.stringify(errorsPage[i], null, 2));
         *     }
         *
         *     if (response.pageToken) {
         *       request.pageToken = response.pageToken;
         *       bigquery.jobs.getQueryResults(request, handlePage);
         *     }
         *   };
         *
         *   bigquery.jobs.getQueryResults(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.jobs.getQueryResults
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.jobId [Required] Job ID of the query job
         * @param {integer=} params.maxResults Maximum number of results to read
         * @param {string=} params.pageToken Page token, returned by a previous call, to request the next page of results
         * @param {string} params.projectId [Required] Project ID of the query job
         * @param {string=} params.startIndex Zero-based index of the starting row
         * @param {integer=} params.timeoutMs How long to wait for the query to complete, in milliseconds, before returning. Default is 10 seconds. If the timeout passes before the job completes, the 'jobComplete' field in the response will be false
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getQueryResults: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/queries/{jobId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectId', 'jobId'],
                pathParams: ['jobId', 'projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * bigquery.jobs.insert
         *
         * @desc Starts a new asynchronous job. Requires the Can View project role.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the project that will be billed for the job
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     media: {
         *       // TODO: Add desired media content for upload. See
         *       // https://github.com/google/google-api-nodejs-client#media-uploads
         *       mimeType: '',  // See https://www.w3.org/Protocols/rfc1341/4_Content-Type.html
         *       body: '',
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.jobs.insert(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.jobs.insert
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId Project ID of the project that will be billed for the job
         * @param  {object} params.resource Media resource metadata
         * @param {object} params.media Media object
         * @param {string} params.media.mimeType Media mime-type
         * @param {string|object} params.media.body Media body contents
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
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/jobs').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                mediaUrl: (rootUrl + '/upload/bigquery/v2/projects/{projectId}/jobs').replace(/([^:]\/)\/+/g, '$1'),
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * bigquery.jobs.list
         *
         * @desc Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the jobs to list
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var jobsPage = response['jobs'];
         *     if (!jobsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < jobsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `jobsPage`:
         *       console.log(JSON.stringify(jobsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       bigquery.jobs.list(request, handlePage);
         *     }
         *   };
         *
         *   bigquery.jobs.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.jobs.list
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.allUsers Whether to display jobs owned by all users in the project. Default false
         * @param {integer=} params.maxResults Maximum number of results to return
         * @param {string=} params.pageToken Page token, returned by a previous call, to request the next page of results
         * @param {string} params.projectId Project ID of the jobs to list
         * @param {string=} params.projection Restrict information returned to a set of selected fields
         * @param {string=} params.stateFilter Filter for job state
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
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/jobs').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * bigquery.jobs.query
         *
         * @desc Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the project billed for the query
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.jobs.query(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.jobs.query
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId Project ID of the project billed for the query
         * @param {bigquery(v2).QueryRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        query: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/queries').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.projects = {
        /**
         * bigquery.projects.getServiceAccount
         *
         * @desc Returns the email address of the service account for your project used for interactions with Google Cloud KMS.
         *
         * @alias bigquery.projects.getServiceAccount
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId Project ID for which the service account is requested.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getServiceAccount: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/serviceAccount').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * bigquery.projects.list
         *
         * @desc Lists all projects to which you have been granted any project role.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     auth: authClient,
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var projectsPage = response['projects'];
         *     if (!projectsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < projectsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `projectsPage`:
         *       console.log(JSON.stringify(projectsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       bigquery.projects.list(request, handlePage);
         *     }
         *   };
         *
         *   bigquery.projects.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.projects.list
         * @memberOf! bigquery(v2)
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.maxResults Maximum number of results to return
         * @param {string=} params.pageToken Page token, returned by a previous call, to request the next page of results
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
                    url: (rootUrl + '/bigquery/v2/projects').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.tabledata = {
        /**
         * bigquery.tabledata.insertAll
         *
         * @desc Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the destination table.
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     // Dataset ID of the destination table.
         *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
         *
         *     // Table ID of the destination table.
         *     tableId: 'my-table-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.tabledata.insertAll(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.tabledata.insertAll
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datasetId Dataset ID of the destination table.
         * @param {string} params.projectId Project ID of the destination table.
         * @param {string} params.tableId Table ID of the destination table.
         * @param {bigquery(v2).TableDataInsertAllRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insertAll: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}/insertAll').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId', 'tableId'],
                pathParams: ['datasetId', 'projectId', 'tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * bigquery.tabledata.list
         *
         * @desc Retrieves table data from a specified set of rows. Requires the READER dataset role.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the table to read
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     // Dataset ID of the table to read
         *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
         *
         *     // Table ID of the table to read
         *     tableId: 'my-table-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var rowsPage = response['rows'];
         *     if (!rowsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < rowsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `rowsPage`:
         *       console.log(JSON.stringify(rowsPage[i], null, 2));
         *     }
         *
         *     if (response.pageToken) {
         *       request.pageToken = response.pageToken;
         *       bigquery.tabledata.list(request, handlePage);
         *     }
         *   };
         *
         *   bigquery.tabledata.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.tabledata.list
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datasetId Dataset ID of the table to read
         * @param {integer=} params.maxResults Maximum number of results to return
         * @param {string=} params.pageToken Page token, returned by a previous call, identifying the result set
         * @param {string} params.projectId Project ID of the table to read
         * @param {string=} params.selectedFields List of fields to return (comma-separated). If unspecified, all fields are returned
         * @param {string=} params.startIndex Zero-based index of the starting row to read
         * @param {string} params.tableId Table ID of the table to read
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
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}/data').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId', 'tableId'],
                pathParams: ['datasetId', 'projectId', 'tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.tables = {
        /**
         * bigquery.tables.delete
         *
         * @desc Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the table to delete
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     // Dataset ID of the table to delete
         *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
         *
         *     // Table ID of the table to delete
         *     tableId: 'my-table-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.tables.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.tables.delete
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datasetId Dataset ID of the table to delete
         * @param {string} params.projectId Project ID of the table to delete
         * @param {string} params.tableId Table ID of the table to delete
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
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId', 'tableId'],
                pathParams: ['datasetId', 'projectId', 'tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * bigquery.tables.get
         *
         * @desc Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the requested table
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     // Dataset ID of the requested table
         *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
         *
         *     // Table ID of the requested table
         *     tableId: 'my-table-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.tables.get(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.tables.get
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datasetId Dataset ID of the requested table
         * @param {string} params.projectId Project ID of the requested table
         * @param {string=} params.selectedFields List of fields to return (comma-separated). If unspecified, all fields are returned
         * @param {string} params.tableId Table ID of the requested table
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
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId', 'tableId'],
                pathParams: ['datasetId', 'projectId', 'tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * bigquery.tables.insert
         *
         * @desc Creates a new, empty table in the dataset.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the new table
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     // Dataset ID of the new table
         *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.tables.insert(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.tables.insert
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datasetId Dataset ID of the new table
         * @param {string} params.projectId Project ID of the new table
         * @param {bigquery(v2).Table} params.resource Request body data
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
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId'],
                pathParams: ['datasetId', 'projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * bigquery.tables.list
         *
         * @desc Lists all tables in the specified dataset. Requires the READER dataset role.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the tables to list
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     // Dataset ID of the tables to list
         *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var tablesPage = response['tables'];
         *     if (!tablesPage) {
         *       return;
         *     }
         *     for (var i = 0; i < tablesPage.length; i++) {
         *       // TODO: Change code below to process each resource in `tablesPage`:
         *       console.log(JSON.stringify(tablesPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       bigquery.tables.list(request, handlePage);
         *     }
         *   };
         *
         *   bigquery.tables.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.tables.list
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datasetId Dataset ID of the tables to list
         * @param {integer=} params.maxResults Maximum number of results to return
         * @param {string=} params.pageToken Page token, returned by a previous call, to request the next page of results
         * @param {string} params.projectId Project ID of the tables to list
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
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId'],
                pathParams: ['datasetId', 'projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * bigquery.tables.patch
         *
         * @desc Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the table to update
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     // Dataset ID of the table to update
         *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
         *
         *     // Table ID of the table to update
         *     tableId: 'my-table-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. Only these properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.tables.patch(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.tables.patch
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datasetId Dataset ID of the table to update
         * @param {string} params.projectId Project ID of the table to update
         * @param {string} params.tableId Table ID of the table to update
         * @param {bigquery(v2).Table} params.resource Request body data
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
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId', 'tableId'],
                pathParams: ['datasetId', 'projectId', 'tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * bigquery.tables.update
         *
         * @desc Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the BigQuery API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/bigquery
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //    https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var bigquery = google.bigquery('v2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Project ID of the table to update
         *     projectId: 'my-project-id',  // TODO: Update placeholder value.
         *
         *     // Dataset ID of the table to update
         *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
         *
         *     // Table ID of the table to update
         *     tableId: 'my-table-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. All existing properties
         *       // will be replaced.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   bigquery.tables.update(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
         *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
         *       authClient = authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         *
         * @alias bigquery.tables.update
         * @memberOf! bigquery(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datasetId Dataset ID of the table to update
         * @param {string} params.projectId Project ID of the table to update
         * @param {string} params.tableId Table ID of the table to update
         * @param {bigquery(v2).Table} params.resource Request body data
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
                    url: (rootUrl + '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['projectId', 'datasetId', 'tableId'],
                pathParams: ['datasetId', 'projectId', 'tableId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Bigquery;
//# sourceMappingURL=v2.js.map