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
 * Google Cloud Container Builder API
 *
 * Builds container images in the cloud.
 *
 * @example
 * const google = require('googleapis');
 * const cloudbuild = google.cloudbuild('v1');
 *
 * @namespace cloudbuild
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Cloudbuild
 */
function Cloudbuild(options) {
    const self = this;
    self._options = options || {};
    self.operations = {
        /**
         * cloudbuild.operations.cancel
         *
         * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
         *
         * @alias cloudbuild.operations.cancel
         * @memberOf! cloudbuild(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource to be cancelled.
         * @param {cloudbuild(v1).CancelOperationRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudbuild.operations.get
         *
         * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
         *
         * @alias cloudbuild.operations.get
         * @memberOf! cloudbuild(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource.
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
            const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
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
         * cloudbuild.operations.list
         *
         * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
         *
         * @alias cloudbuild.operations.list
         * @memberOf! cloudbuild(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter The standard list filter.
         * @param {string} params.name The name of the operation's parent resource.
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
            const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
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
        }
    };
    self.projects = {
        builds: {
            /**
             * cloudbuild.projects.builds.cancel
             *
             * @desc Cancels a requested build in progress.
             *
             * @alias cloudbuild.projects.builds.cancel
             * @memberOf! cloudbuild(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.id ID of the build.
             * @param {string} params.projectId ID of the project.
             * @param {cloudbuild(v1).CancelBuildRequest} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/builds/{id}:cancel').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'id'],
                    pathParams: ['id', 'projectId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * cloudbuild.projects.builds.create
             *
             * @desc Starts a build with the specified configuration.  The long-running Operation returned by this method will include the ID of the build, which can be passed to GetBuild to determine its status (e.g., success or failure).
             *
             * @alias cloudbuild.projects.builds.create
             * @memberOf! cloudbuild(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId ID of the project.
             * @param {cloudbuild(v1).Build} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/builds').replace(/([^:]\/)\/+/g, '$1'),
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
             * cloudbuild.projects.builds.get
             *
             * @desc Returns information about a previously requested build.  The Build that is returned includes its status (e.g., success or failure, or in-progress), and timing information.
             *
             * @alias cloudbuild.projects.builds.get
             * @memberOf! cloudbuild(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.id ID of the build.
             * @param {string} params.projectId ID of the project.
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
                const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/builds/{id}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'id'],
                    pathParams: ['id', 'projectId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * cloudbuild.projects.builds.list
             *
             * @desc Lists previously requested builds.  Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
             *
             * @alias cloudbuild.projects.builds.list
             * @memberOf! cloudbuild(v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.filter The raw filter text to constrain the results.
             * @param {integer=} params.pageSize Number of results to return in the list.
             * @param {string=} params.pageToken Token to provide to skip to a particular spot in the list.
             * @param {string} params.projectId ID of the project.
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
                const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/builds').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['projectId'],
                    pathParams: ['projectId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        triggers: {
            /**
             * cloudbuild.projects.triggers.create
             *
             * @desc Creates a new BuildTrigger.  This API is experimental.
             *
             * @alias cloudbuild.projects.triggers.create
             * @memberOf! cloudbuild(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId ID of the project for which to configure automatic builds.
             * @param {cloudbuild(v1).BuildTrigger} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/triggers').replace(/([^:]\/)\/+/g, '$1'),
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
             * cloudbuild.projects.triggers.delete
             *
             * @desc Deletes an BuildTrigger by its project ID and trigger ID.  This API is experimental.
             *
             * @alias cloudbuild.projects.triggers.delete
             * @memberOf! cloudbuild(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId ID of the project that owns the trigger.
             * @param {string} params.triggerId ID of the BuildTrigger to delete.
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
                const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/triggers/{triggerId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'triggerId'],
                    pathParams: ['projectId', 'triggerId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * cloudbuild.projects.triggers.get
             *
             * @desc Gets information about a BuildTrigger.  This API is experimental.
             *
             * @alias cloudbuild.projects.triggers.get
             * @memberOf! cloudbuild(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId ID of the project that owns the trigger.
             * @param {string} params.triggerId ID of the BuildTrigger to get.
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
                const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/triggers/{triggerId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'triggerId'],
                    pathParams: ['projectId', 'triggerId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * cloudbuild.projects.triggers.list
             *
             * @desc Lists existing BuildTrigger.  This API is experimental.
             *
             * @alias cloudbuild.projects.triggers.list
             * @memberOf! cloudbuild(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId ID of the project for which to list BuildTriggers.
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
                const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/triggers').replace(/([^:]\/)\/+/g, '$1'),
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
             * cloudbuild.projects.triggers.patch
             *
             * @desc Updates an BuildTrigger by its project ID and trigger ID.  This API is experimental.
             *
             * @alias cloudbuild.projects.triggers.patch
             * @memberOf! cloudbuild(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId ID of the project that owns the trigger.
             * @param {string} params.triggerId ID of the BuildTrigger to update.
             * @param {cloudbuild(v1).BuildTrigger} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/triggers/{triggerId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'triggerId'],
                    pathParams: ['projectId', 'triggerId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
}
module.exports = Cloudbuild;
//# sourceMappingURL=v1.js.map