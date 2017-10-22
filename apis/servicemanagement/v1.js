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
 * Google Service Management API
 *
 * Google Service Management allows service producers to publish their services on Google Cloud Platform so that they can be discovered and used by service consumers.
 *
 * @example
 * const google = require('googleapis');
 * const servicemanagement = google.servicemanagement('v1');
 *
 * @namespace servicemanagement
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Servicemanagement
 */
function Servicemanagement(options) {
    const self = this;
    self._options = options || {};
    self.operations = {
        /**
         * servicemanagement.operations.get
         *
         * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
         *
         * @alias servicemanagement.operations.get
         * @memberOf! servicemanagement(v1)
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
            const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
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
         * servicemanagement.operations.list
         *
         * @desc Lists service operations that match the specified filter in the request.
         *
         * @alias servicemanagement.operations.list
         * @memberOf! servicemanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter A string for filtering Operations.   The following filter fields are supported&#58;    * serviceName&#58; Required. Only `=` operator is allowed.   * startTime&#58; The time this job was started, in ISO 8601 format.     Allowed operators are `>=`,  `>`, `<=`, and `<`.   * status&#58; Can be `done`, `in_progress`, or `failed`. Allowed     operators are `=`, and `!=`.    Filter expression supports conjunction (AND) and disjunction (OR)   logical operators. However, the serviceName restriction must be at the   top-level and can only be combined with other restrictions via the AND   logical operator.    Examples&#58;    * `serviceName={some-service}.googleapis.com`   * `serviceName={some-service}.googleapis.com AND startTime>="2017-02-01"`   * `serviceName={some-service}.googleapis.com AND status=done`   * `serviceName={some-service}.googleapis.com AND (status=done OR startTime>="2017-02-01")`
         * @param {string=} params.name Not used.
         * @param {integer=} params.pageSize The maximum number of operations to return. If unspecified, defaults to 50. The maximum value is 100.
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
            const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/operations').replace(/([^:]\/)\/+/g, '$1'),
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
    self.services = {
        /**
         * servicemanagement.services.create
         *
         * @desc Creates a new managed service. Please note one producer project can own no more than 20 services.  Operation<response: ManagedService>
         *
         * @alias servicemanagement.services.create
         * @memberOf! servicemanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {servicemanagement(v1).ManagedService} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services').replace(/([^:]\/)\/+/g, '$1'),
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
         * servicemanagement.services.delete
         *
         * @desc Deletes a managed service. This method will change the service to the `Soft-Delete` state for 30 days. Within this period, service producers may call UndeleteService to restore the service. After 30 days, the service will be permanently deleted.  Operation<response: google.protobuf.Empty>
         *
         * @alias servicemanagement.services.delete
         * @memberOf! servicemanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
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
            const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * servicemanagement.services.disable
         *
         * @desc Disables a service for a project, so it can no longer be be used for the project. It prevents accidental usage that may cause unexpected billing charges or security leaks.  Operation<response: DisableServiceResponse>
         *
         * @alias servicemanagement.services.disable
         * @memberOf! servicemanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.serviceName Name of the service to disable. Specifying an unknown service name will cause the request to fail.
         * @param {servicemanagement(v1).DisableServiceRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        disable: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}:disable').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * servicemanagement.services.enable
         *
         * @desc Enables a service for a project, so it can be used for the project. See [Cloud Auth Guide](https://cloud.google.com/docs/authentication) for more information.  Operation<response: EnableServiceResponse>
         *
         * @alias servicemanagement.services.enable
         * @memberOf! servicemanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.serviceName Name of the service to enable. Specifying an unknown service name will cause the request to fail.
         * @param {servicemanagement(v1).EnableServiceRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        enable: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}:enable').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * servicemanagement.services.generateConfigReport
         *
         * @desc Generates and returns a report (errors, warnings and changes from existing configurations) associated with GenerateConfigReportRequest.new_value  If GenerateConfigReportRequest.old_value is specified, GenerateConfigReportRequest will contain a single ChangeReport based on the comparison between GenerateConfigReportRequest.new_value and GenerateConfigReportRequest.old_value. If GenerateConfigReportRequest.old_value is not specified, this method will compare GenerateConfigReportRequest.new_value with the last pushed service configuration.
         *
         * @alias servicemanagement.services.generateConfigReport
         * @memberOf! servicemanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {servicemanagement(v1).GenerateConfigReportRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generateConfigReport: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services:generateConfigReport').replace(/([^:]\/)\/+/g, '$1'),
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
         * servicemanagement.services.get
         *
         * @desc Gets a managed service. Authentication is required unless the service is public.
         *
         * @alias servicemanagement.services.get
         * @memberOf! servicemanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.serviceName The name of the service.  See the `ServiceManager` overview for naming requirements.  For example: `example.googleapis.com`.
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
            const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * servicemanagement.services.getConfig
         *
         * @desc Gets a service configuration (version) for a managed service.
         *
         * @alias servicemanagement.services.getConfig
         * @memberOf! servicemanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.configId The id of the service configuration resource.
         * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
         * @param {string=} params.view Specifies which parts of the Service Config should be returned in the response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getConfig: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}/config').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * servicemanagement.services.getIamPolicy
         *
         * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         *
         * @alias servicemanagement.services.getIamPolicy
         * @memberOf! servicemanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
         * @param {servicemanagement(v1).GetIamPolicyRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{resource}:getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
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
         * servicemanagement.services.list
         *
         * @desc Lists managed services.  Returns all public services. For authenticated users, also returns all services the calling user has "servicemanagement.services.get" permission for.  **BETA:** If the caller specifies the `consumer_id`, it returns only the services enabled on the consumer. The `consumer_id` must have the format of "project:{PROJECT-ID}".
         *
         * @alias servicemanagement.services.list
         * @memberOf! servicemanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.consumerId Include services consumed by the specified consumer.  The Google Service Management implementation accepts the following forms: - project:<project_id>
         * @param {integer=} params.pageSize Requested size of the next page of data.
         * @param {string=} params.pageToken Token identifying which result to start with; returned by a previous list call.
         * @param {string=} params.producerProjectId Include services produced by the specified project.
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
            const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services').replace(/([^:]\/)\/+/g, '$1'),
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
         * servicemanagement.services.setIamPolicy
         *
         * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
         *
         * @alias servicemanagement.services.setIamPolicy
         * @memberOf! servicemanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
         * @param {servicemanagement(v1).SetIamPolicyRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{resource}:setIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
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
         * servicemanagement.services.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         *
         * @alias servicemanagement.services.testIamPermissions
         * @memberOf! servicemanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
         * @param {servicemanagement(v1).TestIamPermissionsRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
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
         * servicemanagement.services.undelete
         *
         * @desc Revives a previously deleted managed service. The method restores the service using the configuration at the time the service was deleted. The target service must exist and must have been deleted within the last 30 days.  Operation<response: UndeleteServiceResponse>
         *
         * @alias servicemanagement.services.undelete
         * @memberOf! servicemanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.serviceName The name of the service. See the [overview](/service-management/overview) for naming requirements. For example: `example.googleapis.com`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        undelete: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/services/{serviceName}:undelete').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['serviceName'],
                pathParams: ['serviceName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        configs: {
            /**
             * servicemanagement.services.configs.create
             *
             * @desc Creates a new service configuration (version) for a managed service. This method only stores the service configuration. To roll out the service configuration to backend systems please call CreateServiceRollout.
             *
             * @alias servicemanagement.services.configs.create
             * @memberOf! servicemanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
             * @param {servicemanagement(v1).Service} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/services/{serviceName}/configs').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['serviceName'],
                    pathParams: ['serviceName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * servicemanagement.services.configs.get
             *
             * @desc Gets a service configuration (version) for a managed service.
             *
             * @alias servicemanagement.services.configs.get
             * @memberOf! servicemanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.configId The id of the service configuration resource.
             * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
             * @param {string=} params.view Specifies which parts of the Service Config should be returned in the response.
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
                const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/services/{serviceName}/configs/{configId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['serviceName', 'configId'],
                    pathParams: ['configId', 'serviceName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * servicemanagement.services.configs.list
             *
             * @desc Lists the history of the service configuration for a managed service, from the newest to the oldest.
             *
             * @alias servicemanagement.services.configs.list
             * @memberOf! servicemanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {integer=} params.pageSize The max number of items to include in the response list.
             * @param {string=} params.pageToken The token of the page to retrieve.
             * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
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
                const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/services/{serviceName}/configs').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['serviceName'],
                    pathParams: ['serviceName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * servicemanagement.services.configs.submit
             *
             * @desc Creates a new service configuration (version) for a managed service based on user-supplied configuration source files (for example: OpenAPI Specification). This method stores the source configurations as well as the generated service configuration. To rollout the service configuration to other services, please call CreateServiceRollout.  Operation<response: SubmitConfigSourceResponse>
             *
             * @alias servicemanagement.services.configs.submit
             * @memberOf! servicemanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
             * @param {servicemanagement(v1).SubmitConfigSourceRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            submit: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/services/{serviceName}/configs:submit').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['serviceName'],
                    pathParams: ['serviceName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        consumers: {
            /**
             * servicemanagement.services.consumers.getIamPolicy
             *
             * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
             *
             * @alias servicemanagement.services.consumers.getIamPolicy
             * @memberOf! servicemanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
             * @param {servicemanagement(v1).GetIamPolicyRequest} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{resource}:getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
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
             * servicemanagement.services.consumers.setIamPolicy
             *
             * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
             *
             * @alias servicemanagement.services.consumers.setIamPolicy
             * @memberOf! servicemanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
             * @param {servicemanagement(v1).SetIamPolicyRequest} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{resource}:setIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
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
             * servicemanagement.services.consumers.testIamPermissions
             *
             * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
             *
             * @alias servicemanagement.services.consumers.testIamPermissions
             * @memberOf! servicemanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
             * @param {servicemanagement(v1).TestIamPermissionsRequest} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
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
        rollouts: {
            /**
             * servicemanagement.services.rollouts.create
             *
             * @desc Creates a new service configuration rollout. Based on rollout, the Google Service Management will roll out the service configurations to different backend services. For example, the logging configuration will be pushed to Google Cloud Logging.  Please note that any previous pending and running Rollouts and associated Operations will be automatically cancelled so that the latest Rollout will not be blocked by previous Rollouts.  Operation<response: Rollout>
             *
             * @alias servicemanagement.services.rollouts.create
             * @memberOf! servicemanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
             * @param {servicemanagement(v1).Rollout} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/services/{serviceName}/rollouts').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['serviceName'],
                    pathParams: ['serviceName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * servicemanagement.services.rollouts.get
             *
             * @desc Gets a service configuration rollout.
             *
             * @alias servicemanagement.services.rollouts.get
             * @memberOf! servicemanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.rolloutId The id of the rollout resource.
             * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
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
                const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/services/{serviceName}/rollouts/{rolloutId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['serviceName', 'rolloutId'],
                    pathParams: ['rolloutId', 'serviceName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * servicemanagement.services.rollouts.list
             *
             * @desc Lists the history of the service configuration rollouts for a managed service, from the newest to the oldest.
             *
             * @alias servicemanagement.services.rollouts.list
             * @memberOf! servicemanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.filter Use `filter` to return subset of rollouts. The following filters are supported:   -- To limit the results to only those in      [status](google.api.servicemanagement.v1.RolloutStatus) 'SUCCESS',      use filter='status=SUCCESS'   -- To limit the results to those in      [status](google.api.servicemanagement.v1.RolloutStatus) 'CANCELLED'      or 'FAILED', use filter='status=CANCELLED OR status=FAILED'
             * @param {integer=} params.pageSize The max number of items to include in the response list.
             * @param {string=} params.pageToken The token of the page to retrieve.
             * @param {string} params.serviceName The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
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
                const rootUrl = options.rootUrl || 'https://servicemanagement.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/services/{serviceName}/rollouts').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['serviceName'],
                    pathParams: ['serviceName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
}
module.exports = Servicemanagement;
//# sourceMappingURL=v1.js.map