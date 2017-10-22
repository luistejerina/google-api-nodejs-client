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
 * Cloud Tasks API
 *
 * Manages the execution of large numbers of distributed requests. Cloud Tasks is in Alpha.
 *
 * @example
 * const google = require('googleapis');
 * const cloudtasks = google.cloudtasks('v2beta2');
 *
 * @namespace cloudtasks
 * @type {Function}
 * @version v2beta2
 * @variation v2beta2
 * @param {object=} options Options for Cloudtasks
 */
function Cloudtasks(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        locations: {
            /**
             * cloudtasks.projects.locations.get
             *
             * @desc Get information about a location.
             *
             * @alias cloudtasks.projects.locations.get
             * @memberOf! cloudtasks(v2beta2)
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
                const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
             * cloudtasks.projects.locations.list
             *
             * @desc Lists information about the supported locations for this service.
             *
             * @alias cloudtasks.projects.locations.list
             * @memberOf! cloudtasks(v2beta2)
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
                const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta2/{name}/locations').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            queues: {
                /**
                 * cloudtasks.projects.locations.queues.create
                 *
                 * @desc Creates a queue.  WARNING: This method is only available to whitelisted users. Using this method carries some risk. Read [Overview of Queue Management and queue.yaml](/cloud-tasks/docs/queue-yaml) carefully and then sign up for [whitelist access to this method](https://goo.gl/Fe5mUy).
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Cloud Tasks API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/cloudtasks
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
                 * var cloudTasks = google.cloudtasks('v2beta2');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // Required.
                 *     // The location name in which the queue will be created.
                 *     // For example: `projects/PROJECT_ID/locations/LOCATION_ID`
                 *     // The list of allowed locations can be obtained by calling Cloud
                 *     // Tasks' implementation of
                 *     // google.cloud.location.Locations.ListLocations.
                 *     parent: 'projects/my-project/locations/my-location',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   cloudTasks.projects.locations.queues.create(request, function(err, response) {
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
                 * @alias cloudtasks.projects.locations.queues.create
                 * @memberOf! cloudtasks(v2beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent Required.  The location name in which the queue will be created. For example: `projects/PROJECT_ID/locations/LOCATION_ID`  The list of allowed locations can be obtained by calling Cloud Tasks' implementation of google.cloud.location.Locations.ListLocations.
                 * @param {cloudtasks(v2beta2).Queue} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{parent}/queues').replace(/([^:]\/)\/+/g, '$1'),
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
                 * cloudtasks.projects.locations.queues.delete
                 *
                 * @desc Deletes a queue.  This command will delete the queue even if it has tasks in it.  Note: If you delete a queue, a queue with the same name can't be created for 7 days.  WARNING: This method is only available to whitelisted users. Using this method carries some risk. Read [Overview of Queue Management and queue.yaml](/cloud-tasks/docs/queue-yaml) carefully and then sign up for [whitelist access to this method](https://goo.gl/Fe5mUy).
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Cloud Tasks API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/cloudtasks
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
                 * var cloudTasks = google.cloudtasks('v2beta2');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // Required.
                 *     // The queue name. For example:
                 *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
                 *     name: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   cloudTasks.projects.locations.queues.delete(request, function(err) {
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
                 * @alias cloudtasks.projects.locations.queues.delete
                 * @memberOf! cloudtasks(v2beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name Required.  The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
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
                    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                 * cloudtasks.projects.locations.queues.get
                 *
                 * @desc Gets a queue.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Cloud Tasks API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/cloudtasks
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
                 * var cloudTasks = google.cloudtasks('v2beta2');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // Required.
                 *     // The resource name of the queue. For example:
                 *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
                 *     name: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   cloudTasks.projects.locations.queues.get(request, function(err, response) {
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
                 * @alias cloudtasks.projects.locations.queues.get
                 * @memberOf! cloudtasks(v2beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name Required.  The resource name of the queue. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
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
                    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                 * cloudtasks.projects.locations.queues.getIamPolicy
                 *
                 * @desc Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set.  Authorization requires the following [Google IAM](/iam) permission on the specified resource parent:  * `cloudtasks.queues.getIamPolicy`
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Cloud Tasks API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/cloudtasks
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
                 * var cloudTasks = google.cloudtasks('v2beta2');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // REQUIRED: The resource for which the policy is being requested.
                 *     // See the operation documentation for the appropriate value for this field.
                 *     resource_: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   cloudTasks.projects.locations.queues.getIamPolicy(request, function(err, response) {
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
                 * @alias cloudtasks.projects.locations.queues.getIamPolicy
                 * @memberOf! cloudtasks(v2beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
                 * @param {cloudtasks(v2beta2).GetIamPolicyRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                getIamPolicy: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{resource}:getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['resource'],
                        pathParams: ['resource'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * cloudtasks.projects.locations.queues.list
                 *
                 * @desc Lists queues.  Queues are returned in lexicographical order.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Cloud Tasks API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/cloudtasks
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
                 * var cloudTasks = google.cloudtasks('v2beta2');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // Required.
                 *     // The location name.
                 *     // For example: `projects/PROJECT_ID/locations/LOCATION_ID`
                 *     parent: 'projects/my-project/locations/my-location',  // TODO: Update placeholder value.
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
                 *     var queuesPage = response['queues'];
                 *     if (!queuesPage) {
                 *       return;
                 *     }
                 *     for (var i = 0; i < queuesPage.length; i++) {
                 *       // TODO: Change code below to process each resource in `queuesPage`:
                 *       console.log(JSON.stringify(queuesPage[i], null, 2));
                 *     }
                 *
                 *     if (response.nextPageToken) {
                 *       request.pageToken = response.nextPageToken;
                 *       cloudTasks.projects.locations.queues.list(request, handlePage);
                 *     }
                 *   };
                 *
                 *   cloudTasks.projects.locations.queues.list(request, handlePage);
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
                 * @alias cloudtasks.projects.locations.queues.list
                 * @memberOf! cloudtasks(v2beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.filter `filter` can be used to specify a subset of queues. Any Queue field can be used as a filter and several operators as supported. For example: `<=, <, >=, >, !=, =, :`. The filter syntax is the same as described in [Stackdriver's Advanced Logs Filters](/logging/docs/view/advanced_filters).  Sample filter "app_engine_http_target: *".  Note that using filters might cause fewer queues than the requested_page size to be returned.
                 * @param {integer=} params.pageSize Requested page size.  The maximum page size is 9800. If unspecified, the page size will be the maximum. Fewer queues than requested might be returned, even if more queues exist; use ListQueuesResponse.next_page_token to determine if more queues exist.
                 * @param {string=} params.pageToken A token identifying the page of results to return.  To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of ListQueuesResponse.next_page_token returned from the previous call to CloudTasks.ListQueues method. It is an error to switch the value of ListQueuesRequest.filter while iterating through pages.
                 * @param {string} params.parent Required.  The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`
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
                    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{parent}/queues').replace(/([^:]\/)\/+/g, '$1'),
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
                 * cloudtasks.projects.locations.queues.patch
                 *
                 * @desc Updates a queue.  This method creates the queue if it does not exist and updates the queue if it does exist.  WARNING: This method is only available to whitelisted users. Using this method carries some risk. Read [Overview of Queue Management and queue.yaml](/cloud-tasks/docs/queue-yaml) carefully and then sign up for [whitelist access to this method](https://goo.gl/Fe5mUy).
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Cloud Tasks API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/cloudtasks
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
                 * var cloudTasks = google.cloudtasks('v2beta2');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The queue name.
                 *     // The queue name must have the following format:
                 *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
                 *     // * `PROJECT_ID` can contain uppercase and lowercase letters,
                 *     // numbers, hyphens, colons, and periods; that is, it must match
                 *     // the regular expression: `[a-zA-Z\\d-:\\.]+`.
                 *     // * `QUEUE_ID` can contain uppercase and lowercase letters,
                 *     // numbers, and hyphens; that is, it must match the regular
                 *     // expression: `[a-zA-Z\\d-]+`. The maximum length is 100
                 *     // characters.
                 *     // Caller-specified and required in CreateQueueRequest, after which
                 *     // it becomes output only.
                 *     name: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body. Only these properties
                 *       // will be changed.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   cloudTasks.projects.locations.queues.patch(request, function(err, response) {
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
                 * @alias cloudtasks.projects.locations.queues.patch
                 * @memberOf! cloudtasks(v2beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The queue name.  The queue name must have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`  * `PROJECT_ID` can contain uppercase and lowercase letters,   numbers, hyphens, colons, and periods; that is, it must match   the regular expression: `[a-zA-Z\\d-:\\.]+`. * `QUEUE_ID` can contain uppercase and lowercase letters,   numbers, and hyphens; that is, it must match the regular   expression: `[a-zA-Z\\d-]+`. The maximum length is 100   characters.  Caller-specified and required in CreateQueueRequest, after which it becomes output only.
                 * @param {string=} params.updateMask A mask used to specify which fields of the queue are being updated.  If empty, then all fields will be updated.
                 * @param {cloudtasks(v2beta2).Queue} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                 * cloudtasks.projects.locations.queues.pause
                 *
                 * @desc Pauses the queue.  If a queue is paused then the system will stop executing the tasks in the queue until it is resumed via CloudTasks.ResumeQueue. Tasks can still be added when the queue is paused. The state of the queue is stored in Queue.queue_state; if paused it will be set to Queue.QueueState.PAUSED.  WARNING: This method is only available to whitelisted users. Using this method carries some risk. Read [Overview of Queue Management and queue.yaml](/cloud-tasks/docs/queue-yaml) carefully and then sign up for [whitelist access to this method](https://goo.gl/Fe5mUy).
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Cloud Tasks API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/cloudtasks
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
                 * var cloudTasks = google.cloudtasks('v2beta2');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // Required.
                 *     // The queue name. For example:
                 *     // `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
                 *     name: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   cloudTasks.projects.locations.queues.pause(request, function(err, response) {
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
                 * @alias cloudtasks.projects.locations.queues.pause
                 * @memberOf! cloudtasks(v2beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name Required.  The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
                 * @param {cloudtasks(v2beta2).PauseQueueRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                pause: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{name}:pause').replace(/([^:]\/)\/+/g, '$1'),
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
                 * cloudtasks.projects.locations.queues.purge
                 *
                 * @desc Purges a queue by deleting all of its tasks.  All tasks created before this method is called are permanently deleted.  Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Cloud Tasks API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/cloudtasks
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
                 * var cloudTasks = google.cloudtasks('v2beta2');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // Required.
                 *     // The queue name. For example:
                 *     // `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
                 *     name: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   cloudTasks.projects.locations.queues.purge(request, function(err, response) {
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
                 * @alias cloudtasks.projects.locations.queues.purge
                 * @memberOf! cloudtasks(v2beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name Required.  The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
                 * @param {cloudtasks(v2beta2).PurgeQueueRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                purge: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{name}:purge').replace(/([^:]\/)\/+/g, '$1'),
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
                 * cloudtasks.projects.locations.queues.resume
                 *
                 * @desc Resume a queue.  This method resumes a queue after it has been Queue.QueueState.PAUSED or Queue.QueueState.DISABLED. The state of a queue is stored in Queue.queue_state; after calling this method it will be set to Queue.QueueState.RUNNING.  WARNING: This method is only available to whitelisted users. Using this method carries some risk. Read [Overview of Queue Management and queue.yaml](/cloud-tasks/docs/queue-yaml) carefully and then sign up for [whitelist access to this method](https://goo.gl/Fe5mUy).  WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](/cloud-tasks/pdfs/managing-cloud-tasks-scaling-risks-2017-06-05.pdf).
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Cloud Tasks API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/cloudtasks
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
                 * var cloudTasks = google.cloudtasks('v2beta2');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // Required.
                 *     // The queue name. For example:
                 *     // `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
                 *     name: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   cloudTasks.projects.locations.queues.resume(request, function(err, response) {
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
                 * @alias cloudtasks.projects.locations.queues.resume
                 * @memberOf! cloudtasks(v2beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name Required.  The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
                 * @param {cloudtasks(v2beta2).ResumeQueueRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                resume: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{name}:resume').replace(/([^:]\/)\/+/g, '$1'),
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
                 * cloudtasks.projects.locations.queues.setIamPolicy
                 *
                 * @desc Sets the access control policy for a Queue. Replaces any existing policy.  Authorization requires the following [Google IAM](/iam) permission on the specified resource parent:  * `cloudtasks.queues.setIamPolicy`
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Cloud Tasks API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/cloudtasks
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
                 * var cloudTasks = google.cloudtasks('v2beta2');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // REQUIRED: The resource for which the policy is being specified.
                 *     // See the operation documentation for the appropriate value for this field.
                 *     resource_: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   cloudTasks.projects.locations.queues.setIamPolicy(request, function(err, response) {
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
                 * @alias cloudtasks.projects.locations.queues.setIamPolicy
                 * @memberOf! cloudtasks(v2beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
                 * @param {cloudtasks(v2beta2).SetIamPolicyRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                setIamPolicy: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{resource}:setIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['resource'],
                        pathParams: ['resource'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * cloudtasks.projects.locations.queues.testIamPermissions
                 *
                 * @desc Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a google.rpc.Code.NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Cloud Tasks API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/cloudtasks
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
                 * var cloudTasks = google.cloudtasks('v2beta2');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // REQUIRED: The resource for which the policy detail is being requested.
                 *     // See the operation documentation for the appropriate value for this field.
                 *     resource_: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   cloudTasks.projects.locations.queues.testIamPermissions(request, function(err, response) {
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
                 * @alias cloudtasks.projects.locations.queues.testIamPermissions
                 * @memberOf! cloudtasks(v2beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
                 * @param {cloudtasks(v2beta2).TestIamPermissionsRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                testIamPermissions: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta2/{resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['resource'],
                        pathParams: ['resource'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                tasks: {
                    /**
                     * cloudtasks.projects.locations.queues.tasks.acknowledge
                     *
                     * @desc Acknowledges a pull task.  The lease holder, that is, the entity that received this task in a PullTasksResponse, must call this method to indicate that the work associated with the task has finished.  The lease holder must acknowledge a task within the PullTasksRequest.lease_duration or the lease will expire and the task will become ready to be returned in a different PullTasksResponse. After the task is acknowledged, it will not be returned by a later CloudTasks.PullTasks, CloudTasks.GetTask, or CloudTasks.ListTasks.
                     *
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Cloud Tasks API
                     * //    and check the quota for your project at
                     * //    https://console.developers.google.com/apis/api/cloudtasks
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
                     * var cloudTasks = google.cloudtasks('v2beta2');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // Required.
                     *     // The task name. For example:
                     *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
                     *     name: 'projects/my-project/locations/my-location/queues/my-queue/tasks/my-task',  // TODO: Update placeholder value.
                     *
                     *     resource: {
                     *       // TODO: Add desired properties to the request body.
                     *     },
                     *
                     *     auth: authClient,
                     *   };
                     *
                     *   cloudTasks.projects.locations.queues.tasks.acknowledge(request, function(err) {
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
                     * @alias cloudtasks.projects.locations.queues.tasks.acknowledge
                     * @memberOf! cloudtasks(v2beta2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
                     * @param {cloudtasks(v2beta2).AcknowledgeTaskRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    acknowledge: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta2/{name}:acknowledge').replace(/([^:]\/)\/+/g, '$1'),
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
                     * cloudtasks.projects.locations.queues.tasks.cancelLease
                     *
                     * @desc Cancel a pull task's lease.  The lease holder can use this method to cancel a task's lease by setting Task.schedule_time to now. This will make the task available to be leased to the next caller of CloudTasks.PullTasks.
                     *
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Cloud Tasks API
                     * //    and check the quota for your project at
                     * //    https://console.developers.google.com/apis/api/cloudtasks
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
                     * var cloudTasks = google.cloudtasks('v2beta2');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // Required.
                     *     // The task name. For example:
                     *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
                     *     name: 'projects/my-project/locations/my-location/queues/my-queue/tasks/my-task',  // TODO: Update placeholder value.
                     *
                     *     resource: {
                     *       // TODO: Add desired properties to the request body.
                     *     },
                     *
                     *     auth: authClient,
                     *   };
                     *
                     *   cloudTasks.projects.locations.queues.tasks.cancelLease(request, function(err, response) {
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
                     * @alias cloudtasks.projects.locations.queues.tasks.cancelLease
                     * @memberOf! cloudtasks(v2beta2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
                     * @param {cloudtasks(v2beta2).CancelLeaseRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    cancelLease: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta2/{name}:cancelLease').replace(/([^:]\/)\/+/g, '$1'),
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
                     * cloudtasks.projects.locations.queues.tasks.create
                     *
                     * @desc Creates a task and adds it to a queue.  To add multiple tasks at the same time, use [HTTP batching](/storage/docs/json_api/v1/how-tos/batch) or the batching documentation for your client library, for example https://developers.google.com/api-client-library/python/guide/batch.  Tasks cannot be updated after creation; there is no UpdateTask command.  * For [App Engine queues](google.cloud.tasks.v2beta2.AppEngineHttpTarget),   the maximum task size is 100KB. * For [pull queues](google.cloud.tasks.v2beta2.PullTarget), this   the maximum task size is 1MB.
                     *
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Cloud Tasks API
                     * //    and check the quota for your project at
                     * //    https://console.developers.google.com/apis/api/cloudtasks
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
                     * var cloudTasks = google.cloudtasks('v2beta2');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // Required.
                     *     // The queue name. For example:
                     *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
                     *     // The queue must already exist.
                     *     parent: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
                     *
                     *     resource: {
                     *       // TODO: Add desired properties to the request body.
                     *     },
                     *
                     *     auth: authClient,
                     *   };
                     *
                     *   cloudTasks.projects.locations.queues.tasks.create(request, function(err, response) {
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
                     * @alias cloudtasks.projects.locations.queues.tasks.create
                     * @memberOf! cloudtasks(v2beta2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.parent Required.  The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`  The queue must already exist.
                     * @param {cloudtasks(v2beta2).CreateTaskRequest} params.resource Request body data
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
                        const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta2/{parent}/tasks').replace(/([^:]\/)\/+/g, '$1'),
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
                     * cloudtasks.projects.locations.queues.tasks.delete
                     *
                     * @desc Deletes a task.  A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has completed successfully or permanently failed.
                     *
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Cloud Tasks API
                     * //    and check the quota for your project at
                     * //    https://console.developers.google.com/apis/api/cloudtasks
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
                     * var cloudTasks = google.cloudtasks('v2beta2');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // Required.
                     *     // The task name. For example:
                     *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
                     *     name: 'projects/my-project/locations/my-location/queues/my-queue/tasks/my-task',  // TODO: Update placeholder value.
                     *
                     *     auth: authClient,
                     *   };
                     *
                     *   cloudTasks.projects.locations.queues.tasks.delete(request, function(err) {
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
                     * @alias cloudtasks.projects.locations.queues.tasks.delete
                     * @memberOf! cloudtasks(v2beta2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
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
                        const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                     * cloudtasks.projects.locations.queues.tasks.get
                     *
                     * @desc Gets a task.
                     *
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Cloud Tasks API
                     * //    and check the quota for your project at
                     * //    https://console.developers.google.com/apis/api/cloudtasks
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
                     * var cloudTasks = google.cloudtasks('v2beta2');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // Required.
                     *     // The task name. For example:
                     *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
                     *     name: 'projects/my-project/locations/my-location/queues/my-queue/tasks/my-task',  // TODO: Update placeholder value.
                     *
                     *     auth: authClient,
                     *   };
                     *
                     *   cloudTasks.projects.locations.queues.tasks.get(request, function(err, response) {
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
                     * @alias cloudtasks.projects.locations.queues.tasks.get
                     * @memberOf! cloudtasks(v2beta2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
                     * @param {string=} params.responseView The response_view specifies which subset of the Task will be returned.  By default response_view is Task.View.BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains.  Authorization for Task.View.FULL requires `cloudtasks.tasks.fullView` [Google IAM](/iam/) permission on the Task.name resource.
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
                        const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                     * cloudtasks.projects.locations.queues.tasks.list
                     *
                     * @desc Lists the tasks in a queue.  By default response_view is Task.View.BASIC; not all information is retrieved by default due to performance considerations; ListTasksRequest.response_view controls the subset of information which is returned.
                     *
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Cloud Tasks API
                     * //    and check the quota for your project at
                     * //    https://console.developers.google.com/apis/api/cloudtasks
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
                     * var cloudTasks = google.cloudtasks('v2beta2');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // Required.
                     *     // The queue name. For example:
                     *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
                     *     parent: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
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
                     *     var tasksPage = response['tasks'];
                     *     if (!tasksPage) {
                     *       return;
                     *     }
                     *     for (var i = 0; i < tasksPage.length; i++) {
                     *       // TODO: Change code below to process each resource in `tasksPage`:
                     *       console.log(JSON.stringify(tasksPage[i], null, 2));
                     *     }
                     *
                     *     if (response.nextPageToken) {
                     *       request.pageToken = response.nextPageToken;
                     *       cloudTasks.projects.locations.queues.tasks.list(request, handlePage);
                     *     }
                     *   };
                     *
                     *   cloudTasks.projects.locations.queues.tasks.list(request, handlePage);
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
                     * @alias cloudtasks.projects.locations.queues.tasks.list
                     * @memberOf! cloudtasks(v2beta2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.orderBy  Sort order used for the query. The fields supported for sorting are Task.schedule_time and PullMessage.tag. All results will be returned in approximately ascending order. The default ordering is by Task.schedule_time.
                     * @param {integer=} params.pageSize Requested page size. Fewer tasks than requested might be returned.  The maximum page size is 1000. If unspecified, the page size will be the maximum. Fewer tasks than requested might be returned, even if more tasks exist; use ListTasksResponse.next_page_token to determine if more tasks exist.
                     * @param {string=} params.pageToken A token identifying the page of results to return.  To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of ListTasksResponse.next_page_token returned from the previous call to CloudTasks.ListTasks method.  The page token is valid for only 2 hours.
                     * @param {string} params.parent Required.  The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
                     * @param {string=} params.responseView The response_view specifies which subset of the Task will be returned.  By default response_view is Task.View.BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains.  Authorization for Task.View.FULL requires `cloudtasks.tasks.fullView` [Google IAM](/iam/) permission on the Task.name resource.
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
                        const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta2/{parent}/tasks').replace(/([^:]\/)\/+/g, '$1'),
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
                     * cloudtasks.projects.locations.queues.tasks.pull
                     *
                     * @desc Pulls tasks from a pull queue and acquires a lease on them for a specified PullTasksRequest.lease_duration.  This method is invoked by the lease holder to obtain the lease. The lease holder must acknowledge the task via CloudTasks.AcknowledgeTask after they have performed the work associated with the task.  The payload is intended to store data that the lease holder needs to perform the work associated with the task. To return the payloads in the PullTasksResponse, set PullTasksRequest.response_view to Task.View.FULL.  A maximum of 10 qps of CloudTasks.PullTasks requests are allowed per queue. google.rpc.Code.RESOURCE_EXHAUSTED is returned when this limit is exceeded. google.rpc.Code.RESOURCE_EXHAUSTED is also returned when RateLimits.max_tasks_dispatched_per_second is exceeded.
                     *
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Cloud Tasks API
                     * //    and check the quota for your project at
                     * //    https://console.developers.google.com/apis/api/cloudtasks
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
                     * var cloudTasks = google.cloudtasks('v2beta2');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // Required.
                     *     // The queue name. For example:
                     *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
                     *     name: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
                     *
                     *     resource: {
                     *       // TODO: Add desired properties to the request body.
                     *     },
                     *
                     *     auth: authClient,
                     *   };
                     *
                     *   cloudTasks.projects.locations.queues.tasks.pull(request, function(err, response) {
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
                     * @alias cloudtasks.projects.locations.queues.tasks.pull
                     * @memberOf! cloudtasks(v2beta2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name Required.  The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
                     * @param {cloudtasks(v2beta2).PullTasksRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    pull: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta2/{name}/tasks:pull').replace(/([^:]\/)\/+/g, '$1'),
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
                     * cloudtasks.projects.locations.queues.tasks.renewLease
                     *
                     * @desc Renew the current lease of a pull task.  The lease holder can use this method to extend the lease by a new duration, starting from now. The new task lease will be returned in Task.schedule_time.
                     *
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Cloud Tasks API
                     * //    and check the quota for your project at
                     * //    https://console.developers.google.com/apis/api/cloudtasks
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
                     * var cloudTasks = google.cloudtasks('v2beta2');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // Required.
                     *     // The task name. For example:
                     *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
                     *     name: 'projects/my-project/locations/my-location/queues/my-queue/tasks/my-task',  // TODO: Update placeholder value.
                     *
                     *     resource: {
                     *       // TODO: Add desired properties to the request body.
                     *     },
                     *
                     *     auth: authClient,
                     *   };
                     *
                     *   cloudTasks.projects.locations.queues.tasks.renewLease(request, function(err, response) {
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
                     * @alias cloudtasks.projects.locations.queues.tasks.renewLease
                     * @memberOf! cloudtasks(v2beta2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
                     * @param {cloudtasks(v2beta2).RenewLeaseRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    renewLease: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta2/{name}:renewLease').replace(/([^:]\/)\/+/g, '$1'),
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
                     * cloudtasks.projects.locations.queues.tasks.run
                     *
                     * @desc Forces a task to run now.  This command is meant to be used for manual debugging. For example, CloudTasks.RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now.  When this method is called, Cloud Tasks will dispatch the task to its target, even if the queue is Queue.QueueState.PAUSED.  The dispatched task is returned. That is, the task that is returned contains the Task.task_status after the task is dispatched but before the task is received by its target.  If Cloud Tasks receives a successful response from the task's handler, then the task will be deleted; otherwise the task's Task.schedule_time will be reset to the time that CloudTasks.RunTask was called plus the retry delay specified in the queue and task's RetryConfig.  CloudTasks.RunTask returns google.rpc.Code.NOT_FOUND when it is called on a task that has already succeeded or permanently failed. google.rpc.Code.FAILED_PRECONDITION is returned when CloudTasks.RunTask is called on task that is dispatched or already running.
                     *
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Cloud Tasks API
                     * //    and check the quota for your project at
                     * //    https://console.developers.google.com/apis/api/cloudtasks
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
                     * var cloudTasks = google.cloudtasks('v2beta2');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // Required.
                     *     // The task name. For example:
                     *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
                     *     name: 'projects/my-project/locations/my-location/queues/my-queue/tasks/my-task',  // TODO: Update placeholder value.
                     *
                     *     resource: {
                     *       // TODO: Add desired properties to the request body.
                     *     },
                     *
                     *     auth: authClient,
                     *   };
                     *
                     *   cloudTasks.projects.locations.queues.tasks.run(request, function(err, response) {
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
                     * @alias cloudtasks.projects.locations.queues.tasks.run
                     * @memberOf! cloudtasks(v2beta2)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
                     * @param {cloudtasks(v2beta2).RunTaskRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    run: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta2/{name}:run').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['name'],
                            pathParams: ['name'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                }
            }
        }
    };
}
module.exports = Cloudtasks;
//# sourceMappingURL=v2beta2.js.map