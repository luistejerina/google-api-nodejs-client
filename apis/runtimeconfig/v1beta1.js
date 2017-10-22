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
 * Google Cloud Runtime Configuration API
 *
 * The Runtime Configurator allows you to dynamically configure and expose variables through Google Cloud Platform. In addition, you can also set Watchers and Waiters that will watch for changes to your data and return based on certain conditions.
 *
 * @example
 * const google = require('googleapis');
 * const runtimeconfig = google.runtimeconfig('v1beta1');
 *
 * @namespace runtimeconfig
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Runtimeconfig
 */
function Runtimeconfig(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        configs: {
            /**
             * runtimeconfig.projects.configs.create
             *
             * @desc Creates a new RuntimeConfig resource. The configuration name must be unique within project.
             *
             * @alias runtimeconfig.projects.configs.create
             * @memberOf! runtimeconfig(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent The [project ID](https://support.google.com/cloud/answer/6158840?hl=en&ref_topic=6158848) for this request, in the format `projects/[PROJECT_ID]`.
             * @param {string=} params.requestId An optional but recommended unique `request_id`. If the server receives two `create()` requests  with the same `request_id`, then the second request will be ignored and the first resource created and stored in the backend is returned. Empty `request_id` fields are ignored.  It is responsibility of the client to ensure uniqueness of the `request_id` strings.  `request_id` strings are limited to 64 characters.
             * @param {runtimeconfig(v1beta1).RuntimeConfig} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta1/{parent}/configs').replace(/([^:]\/)\/+/g, '$1'),
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
             * runtimeconfig.projects.configs.delete
             *
             * @desc Deletes a RuntimeConfig resource.
             *
             * @alias runtimeconfig.projects.configs.delete
             * @memberOf! runtimeconfig(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The RuntimeConfig resource to delete, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
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
                const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
             * runtimeconfig.projects.configs.get
             *
             * @desc Gets information about a RuntimeConfig resource.
             *
             * @alias runtimeconfig.projects.configs.get
             * @memberOf! runtimeconfig(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the RuntimeConfig resource to retrieve, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
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
                const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
             * runtimeconfig.projects.configs.getIamPolicy
             *
             * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
             *
             * @alias runtimeconfig.projects.configs.getIamPolicy
             * @memberOf! runtimeconfig(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
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
                const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta1/{resource}:getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['resource'],
                    pathParams: ['resource'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * runtimeconfig.projects.configs.list
             *
             * @desc Lists all the RuntimeConfig resources within project.
             *
             * @alias runtimeconfig.projects.configs.list
             * @memberOf! runtimeconfig(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {integer=} params.pageSize Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements.
             * @param {string=} params.pageToken Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results.
             * @param {string} params.parent The [project ID](https://support.google.com/cloud/answer/6158840?hl=en&ref_topic=6158848) for this request, in the format `projects/[PROJECT_ID]`.
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
                const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta1/{parent}/configs').replace(/([^:]\/)\/+/g, '$1'),
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
             * runtimeconfig.projects.configs.setIamPolicy
             *
             * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
             *
             * @alias runtimeconfig.projects.configs.setIamPolicy
             * @memberOf! runtimeconfig(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
             * @param {runtimeconfig(v1beta1).SetIamPolicyRequest} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta1/{resource}:setIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
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
             * runtimeconfig.projects.configs.testIamPermissions
             *
             * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
             *
             * @alias runtimeconfig.projects.configs.testIamPermissions
             * @memberOf! runtimeconfig(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
             * @param {runtimeconfig(v1beta1).TestIamPermissionsRequest} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta1/{resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
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
             * runtimeconfig.projects.configs.update
             *
             * @desc Updates a RuntimeConfig resource. The configuration must exist beforehand.
             *
             * @alias runtimeconfig.projects.configs.update
             * @memberOf! runtimeconfig(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the RuntimeConfig resource to update, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
             * @param {runtimeconfig(v1beta1).RuntimeConfig} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            operations: {
                /**
                 * runtimeconfig.projects.configs.operations.get
                 *
                 * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
                 *
                 * @alias runtimeconfig.projects.configs.operations.get
                 * @memberOf! runtimeconfig(v1beta1)
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
                    const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                 * runtimeconfig.projects.configs.operations.testIamPermissions
                 *
                 * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
                 *
                 * @alias runtimeconfig.projects.configs.operations.testIamPermissions
                 * @memberOf! runtimeconfig(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
                 * @param {runtimeconfig(v1beta1).TestIamPermissionsRequest} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['resource'],
                        pathParams: ['resource'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            variables: {
                /**
                 * runtimeconfig.projects.configs.variables.create
                 *
                 * @desc Creates a variable within the given configuration. You cannot create a variable with a name that is a prefix of an existing variable name, or a name that has an existing variable name as a prefix.  To learn more about creating a variable, read the [Setting and Getting Data](/deployment-manager/runtime-configurator/set-and-get-variables) documentation.
                 *
                 * @alias runtimeconfig.projects.configs.variables.create
                 * @memberOf! runtimeconfig(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent The path to the RutimeConfig resource that this variable should belong to. The configuration must exist beforehand; the path must be in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
                 * @param {string=} params.requestId An optional but recommended unique `request_id`. If the server receives two `create()` requests  with the same `request_id`, then the second request will be ignored and the first resource created and stored in the backend is returned. Empty `request_id` fields are ignored.  It is responsibility of the client to ensure uniqueness of the `request_id` strings.  `request_id` strings are limited to 64 characters.
                 * @param {runtimeconfig(v1beta1).Variable} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{parent}/variables').replace(/([^:]\/)\/+/g, '$1'),
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
                 * runtimeconfig.projects.configs.variables.delete
                 *
                 * @desc Deletes a variable or multiple variables.  If you specify a variable name, then that variable is deleted. If you specify a prefix and `recursive` is true, then all variables with that prefix are deleted. You must set a `recursive` to true if you delete variables by prefix.
                 *
                 * @alias runtimeconfig.projects.configs.variables.delete
                 * @memberOf! runtimeconfig(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the variable to delete, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/variables/[VARIABLE_NAME]`
                 * @param {boolean=} params.recursive Set to `true` to recursively delete multiple variables with the same prefix.
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
                    const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                 * runtimeconfig.projects.configs.variables.get
                 *
                 * @desc Gets information about a single variable.
                 *
                 * @alias runtimeconfig.projects.configs.variables.get
                 * @memberOf! runtimeconfig(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the variable to return, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/variables/[VARIBLE_NAME]`
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
                    const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                 * runtimeconfig.projects.configs.variables.list
                 *
                 * @desc Lists variables within given a configuration, matching any provided filters. This only lists variable names, not the values, unless `return_values` is true, in which case only variables that user has IAM permission to GetVariable will be returned.
                 *
                 * @alias runtimeconfig.projects.configs.variables.list
                 * @memberOf! runtimeconfig(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.filter Filters variables by matching the specified filter. For example:  `projects/example-project/config/[CONFIG_NAME]/variables/example-variable`.
                 * @param {integer=} params.pageSize Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements.
                 * @param {string=} params.pageToken Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results.
                 * @param {string} params.parent The path to the RuntimeConfig resource for which you want to list variables. The configuration must exist beforehand; the path must be in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
                 * @param {boolean=} params.returnValues The flag indicates whether the user wants to return values of variables. If true, then only those variables that user has IAM GetVariable permission will be returned along with their values.
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
                    const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{parent}/variables').replace(/([^:]\/)\/+/g, '$1'),
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
                 * runtimeconfig.projects.configs.variables.testIamPermissions
                 *
                 * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
                 *
                 * @alias runtimeconfig.projects.configs.variables.testIamPermissions
                 * @memberOf! runtimeconfig(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
                 * @param {runtimeconfig(v1beta1).TestIamPermissionsRequest} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
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
                 * runtimeconfig.projects.configs.variables.update
                 *
                 * @desc Updates an existing variable with a new value.
                 *
                 * @alias runtimeconfig.projects.configs.variables.update
                 * @memberOf! runtimeconfig(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the variable to update, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/variables/[VARIABLE_NAME]`
                 * @param {runtimeconfig(v1beta1).Variable} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * runtimeconfig.projects.configs.variables.watch
                 *
                 * @desc Watches a specific variable and waits for a change in the variable's value. When there is a change, this method returns the new value or times out.  If a variable is deleted while being watched, the `variableState` state is set to `DELETED` and the method returns the last known variable `value`.  If you set the deadline for watching to a larger value than internal timeout (60 seconds), the current variable value is returned and the `variableState` will be `VARIABLE_STATE_UNSPECIFIED`.  To learn more about creating a watcher, read the [Watching a Variable for Changes](/deployment-manager/runtime-configurator/watching-a-variable) documentation.
                 *
                 * @alias runtimeconfig.projects.configs.variables.watch
                 * @memberOf! runtimeconfig(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the variable to watch, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
                 * @param {runtimeconfig(v1beta1).WatchVariableRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                watch: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}:watch').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            waiters: {
                /**
                 * runtimeconfig.projects.configs.waiters.create
                 *
                 * @desc Creates a Waiter resource. This operation returns a long-running Operation resource which can be polled for completion. However, a waiter with the given name will exist (and can be retrieved) prior to the operation completing. If the operation fails, the failed Waiter resource will still exist and must be deleted prior to subsequent creation attempts.
                 *
                 * @alias runtimeconfig.projects.configs.waiters.create
                 * @memberOf! runtimeconfig(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent The path to the configuration that will own the waiter. The configuration must exist beforehand; the path must be in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`.
                 * @param {string=} params.requestId An optional but recommended unique `request_id`. If the server receives two `create()` requests  with the same `request_id`, then the second request will be ignored and the first resource created and stored in the backend is returned. Empty `request_id` fields are ignored.  It is responsibility of the client to ensure uniqueness of the `request_id` strings.  `request_id` strings are limited to 64 characters.
                 * @param {runtimeconfig(v1beta1).Waiter} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{parent}/waiters').replace(/([^:]\/)\/+/g, '$1'),
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
                 * runtimeconfig.projects.configs.waiters.delete
                 *
                 * @desc Deletes the waiter with the specified name.
                 *
                 * @alias runtimeconfig.projects.configs.waiters.delete
                 * @memberOf! runtimeconfig(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The Waiter resource to delete, in the format:   `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/waiters/[WAITER_NAME]`
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
                    const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                 * runtimeconfig.projects.configs.waiters.get
                 *
                 * @desc Gets information about a single waiter.
                 *
                 * @alias runtimeconfig.projects.configs.waiters.get
                 * @memberOf! runtimeconfig(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The fully-qualified name of the Waiter resource object to retrieve, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/waiters/[WAITER_NAME]`
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
                    const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                 * runtimeconfig.projects.configs.waiters.list
                 *
                 * @desc List waiters within the given configuration.
                 *
                 * @alias runtimeconfig.projects.configs.waiters.list
                 * @memberOf! runtimeconfig(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {integer=} params.pageSize Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements.
                 * @param {string=} params.pageToken Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results.
                 * @param {string} params.parent The path to the configuration for which you want to get a list of waiters. The configuration must exist beforehand; the path must be in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
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
                    const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{parent}/waiters').replace(/([^:]\/)\/+/g, '$1'),
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
                 * runtimeconfig.projects.configs.waiters.testIamPermissions
                 *
                 * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
                 *
                 * @alias runtimeconfig.projects.configs.waiters.testIamPermissions
                 * @memberOf! runtimeconfig(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
                 * @param {runtimeconfig(v1beta1).TestIamPermissionsRequest} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://runtimeconfig.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['resource'],
                        pathParams: ['resource'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            }
        }
    };
}
module.exports = Runtimeconfig;
//# sourceMappingURL=v1beta1.js.map