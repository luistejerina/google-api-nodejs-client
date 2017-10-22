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
 * Android Management API
 *
 * The Android Management API provides remote enterprise management of Android devices and apps.
 *
 * @example
 * const google = require('googleapis');
 * const androidmanagement = google.androidmanagement('v1');
 *
 * @namespace androidmanagement
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Androidmanagement
 */
function Androidmanagement(options) {
    const self = this;
    self._options = options || {};
    self.enterprises = {
        /**
         * androidmanagement.enterprises.create
         *
         * @desc Creates an enterprise by completing the enterprise signup flow.
         *
         * @alias androidmanagement.enterprises.create
         * @memberOf! androidmanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.enterpriseToken The enterprise token appended to the callback URL.
         * @param {string=} params.projectId The id of the Google Cloud Platform project which will own the enterprise.
         * @param {string=} params.signupUrlName The name of the SignupUrl used to sign up for the enterprise.
         * @param {androidmanagement(v1).Enterprise} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/enterprises').replace(/([^:]\/)\/+/g, '$1'),
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
         * androidmanagement.enterprises.get
         *
         * @desc Gets an enterprise.
         *
         * @alias androidmanagement.enterprises.get
         * @memberOf! androidmanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the enterprise in the form enterprises/{enterpriseId}
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
            const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
         * androidmanagement.enterprises.patch
         *
         * @desc Updates an enterprise.
         *
         * @alias androidmanagement.enterprises.patch
         * @memberOf! androidmanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the enterprise in the form enterprises/{enterpriseId}
         * @param {string=} params.updateMask The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
         * @param {androidmanagement(v1).Enterprise} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        applications: {
            /**
             * androidmanagement.enterprises.applications.get
             *
             * @desc Gets info about an application.
             *
             * @alias androidmanagement.enterprises.applications.get
             * @memberOf! androidmanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.languageCode The preferred language for localized application info, as a BCP47 tag (e.g. "en-US", "de"). If not specified the default language of the application will be used.
             * @param {string} params.name The name of the application in the form enterprises/{enterpriseId}/applications/{package_name}
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
                const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        },
        devices: {
            /**
             * androidmanagement.enterprises.devices.delete
             *
             * @desc Deletes a device, which causes the device to be wiped.
             *
             * @alias androidmanagement.enterprises.devices.delete
             * @memberOf! androidmanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}
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
                const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
             * androidmanagement.enterprises.devices.get
             *
             * @desc Gets a device.
             *
             * @alias androidmanagement.enterprises.devices.get
             * @memberOf! androidmanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}
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
                const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
             * androidmanagement.enterprises.devices.issueCommand
             *
             * @desc Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
             *
             * @alias androidmanagement.enterprises.devices.issueCommand
             * @memberOf! androidmanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}
             * @param {androidmanagement(v1).Command} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            issueCommand: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{name}:issueCommand').replace(/([^:]\/)\/+/g, '$1'),
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
             * androidmanagement.enterprises.devices.list
             *
             * @desc Lists devices for a given enterprise.
             *
             * @alias androidmanagement.enterprises.devices.list
             * @memberOf! androidmanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {integer=} params.pageSize The requested page size. The actual page size may be fixed to a min or max value.
             * @param {string=} params.pageToken A token identifying a page of results the server should return.
             * @param {string} params.parent The name of the enterprise in the form enterprises/{enterpriseId}
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
                const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{parent}/devices').replace(/([^:]\/)\/+/g, '$1'),
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
             * androidmanagement.enterprises.devices.patch
             *
             * @desc Updates a device.
             *
             * @alias androidmanagement.enterprises.devices.patch
             * @memberOf! androidmanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}
             * @param {string=} params.updateMask The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
             * @param {androidmanagement(v1).Device} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
            operations: {
                /**
                 * androidmanagement.enterprises.devices.operations.cancel
                 *
                 * @desc Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
                 *
                 * @alias androidmanagement.enterprises.devices.operations.cancel
                 * @memberOf! androidmanagement(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the operation resource to be cancelled.
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
                    const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
                 * androidmanagement.enterprises.devices.operations.delete
                 *
                 * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
                 *
                 * @alias androidmanagement.enterprises.devices.operations.delete
                 * @memberOf! androidmanagement(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the operation resource to be deleted.
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
                    const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
                 * androidmanagement.enterprises.devices.operations.get
                 *
                 * @desc Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
                 *
                 * @alias androidmanagement.enterprises.devices.operations.get
                 * @memberOf! androidmanagement(v1)
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
                    const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
                 * androidmanagement.enterprises.devices.operations.list
                 *
                 * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/x/operations. To override the binding, API services can add a binding such as "/v1/{name=users/x}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
                 *
                 * @alias androidmanagement.enterprises.devices.operations.list
                 * @memberOf! androidmanagement(v1)
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
                    const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
            }
        },
        enrollmentTokens: {
            /**
             * androidmanagement.enterprises.enrollmentTokens.create
             *
             * @desc Creates an enrollment token for a given enterprise.
             *
             * @alias androidmanagement.enterprises.enrollmentTokens.create
             * @memberOf! androidmanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent The name of the enterprise in the form enterprises/{enterpriseId}
             * @param {androidmanagement(v1).EnrollmentToken} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{parent}/enrollmentTokens').replace(/([^:]\/)\/+/g, '$1'),
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
             * androidmanagement.enterprises.enrollmentTokens.delete
             *
             * @desc Deletes an enrollment token, which prevents future use of the token.
             *
             * @alias androidmanagement.enterprises.enrollmentTokens.delete
             * @memberOf! androidmanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the enrollment token in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}
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
                const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
            }
        },
        policies: {
            /**
             * androidmanagement.enterprises.policies.delete
             *
             * @desc Deletes a policy. This operation is only permitted if no devices are currently referencing the policy.
             *
             * @alias androidmanagement.enterprises.policies.delete
             * @memberOf! androidmanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}
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
                const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
             * androidmanagement.enterprises.policies.get
             *
             * @desc Gets a policy.
             *
             * @alias androidmanagement.enterprises.policies.get
             * @memberOf! androidmanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}
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
                const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
             * androidmanagement.enterprises.policies.list
             *
             * @desc Lists policies for a given enterprise.
             *
             * @alias androidmanagement.enterprises.policies.list
             * @memberOf! androidmanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {integer=} params.pageSize The requested page size. The actual page size may be fixed to a min or max value.
             * @param {string=} params.pageToken A token identifying a page of results the server should return.
             * @param {string} params.parent The name of the enterprise in the form enterprises/{enterpriseId}
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
                const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{parent}/policies').replace(/([^:]\/)\/+/g, '$1'),
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
             * androidmanagement.enterprises.policies.patch
             *
             * @desc Updates or creates a policy.
             *
             * @alias androidmanagement.enterprises.policies.patch
             * @memberOf! androidmanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}
             * @param {string=} params.updateMask The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
             * @param {androidmanagement(v1).Policy} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
            }
        },
        webTokens: {
            /**
             * androidmanagement.enterprises.webTokens.create
             *
             * @desc Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.
             *
             * @alias androidmanagement.enterprises.webTokens.create
             * @memberOf! androidmanagement(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent The name of the enterprise in the form enterprises/{enterpriseId}
             * @param {androidmanagement(v1).WebToken} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{parent}/webTokens').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['parent'],
                    pathParams: ['parent'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
    self.signupUrls = {
        /**
         * androidmanagement.signupUrls.create
         *
         * @desc Creates an enterprise signup URL.
         *
         * @alias androidmanagement.signupUrls.create
         * @memberOf! androidmanagement(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.callbackUrl The callback URL to which the admin will be redirected after successfully creating an enterprise. Before redirecting there the system will add a query parameter to this URL named enterpriseToken which will contain an opaque token to be used for the create enterprise request. The URL will be parsed then reformatted in order to add the enterpriseToken parameter, so there may be some minor formatting changes.
         * @param {string=} params.projectId The id of the Google Cloud Platform project which will own the enterprise.
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
            const rootUrl = options.rootUrl || 'https://androidmanagement.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/signupUrls').replace(/([^:]\/)\/+/g, '$1'),
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
module.exports = Androidmanagement;
//# sourceMappingURL=v1.js.map