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
 * Stackdriver Debugger API
 *
 * Examines the call stack and variables of a running application without stopping or slowing it down.

 *
 * @example
 * const google = require('googleapis');
 * const clouddebugger = google.clouddebugger('v2');
 *
 * @namespace clouddebugger
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Clouddebugger
 */
function Clouddebugger(options) {
    const self = this;
    self._options = options || {};
    self.controller = {
        debuggees: {
            /**
             * clouddebugger.controller.debuggees.register
             *
             * @desc Registers the debuggee with the controller service.  All agents attached to the same application must call this method with exactly the same request content to get back the same stable `debuggee_id`. Agents should call this method again whenever `google.rpc.Code.NOT_FOUND` is returned from any controller method.  This protocol allows the controller service to disable debuggees, recover from data loss, or change the `debuggee_id` format. Agents must handle `debuggee_id` value changing upon re-registration.
             *
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Stackdriver Debugger API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/clouddebugger
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
             * var cloudDebugger = google.clouddebugger('v2');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     resource: {
             *       // TODO: Add desired properties to the request body.
             *     },
             *
             *     auth: authClient,
             *   };
             *
             *   cloudDebugger.controller.debuggees.register(request, function(err, response) {
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
             * @alias clouddebugger.controller.debuggees.register
             * @memberOf! clouddebugger(v2)
             *
             * @param {object} params Parameters for request
             * @param {clouddebugger(v2).RegisterDebuggeeRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            register: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2/controller/debuggees/register').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: [],
                    pathParams: [],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            breakpoints: {
                /**
                 * clouddebugger.controller.debuggees.breakpoints.list
                 *
                 * @desc Returns the list of all active breakpoints for the debuggee.  The breakpoint specification (`location`, `condition`, and `expressions` fields) is semantically immutable, although the field values may change. For example, an agent may update the location line number to reflect the actual line where the breakpoint was set, but this doesn't change the breakpoint semantics.  This means that an agent does not need to check if a breakpoint has changed when it encounters the same breakpoint on a successive call. Moreover, an agent should remember the breakpoints that are completed until the controller removes them from the active list to avoid setting those breakpoints again.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Stackdriver Debugger API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/clouddebugger
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
                 * var cloudDebugger = google.clouddebugger('v2');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // Identifies the debuggee.
                 *     debuggeeId: 'my-debuggee-id',  // TODO: Update placeholder value.
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   cloudDebugger.controller.debuggees.breakpoints.list(request, function(err, response) {
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
                 * @alias clouddebugger.controller.debuggees.breakpoints.list
                 * @memberOf! clouddebugger(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.debuggeeId Identifies the debuggee.
                 * @param {boolean=} params.successOnTimeout If set to `true` (recommended), returns `google.rpc.Code.OK` status and sets the `wait_expired` response field to `true` when the server-selected timeout has expired.  If set to `false` (deprecated), returns `google.rpc.Code.ABORTED` status when the server-selected timeout has expired.
                 * @param {string=} params.waitToken A token that, if specified, blocks the method call until the list of active breakpoints has changed, or a server-selected timeout has expired. The value should be set from the `next_wait_token` field in the last response. The initial value should be set to `"init"`.
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
                    const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2/controller/debuggees/{debuggeeId}/breakpoints').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['debuggeeId'],
                        pathParams: ['debuggeeId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * clouddebugger.controller.debuggees.breakpoints.update
                 *
                 * @desc Updates the breakpoint state or mutable fields. The entire Breakpoint message must be sent back to the controller service.  Updates to active breakpoint fields are only allowed if the new value does not change the breakpoint specification. Updates to the `location`, `condition` and `expressions` fields should not alter the breakpoint semantics. These may only make changes such as canonicalizing a value or snapping the location to the correct line of code.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Stackdriver Debugger API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/clouddebugger
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
                 * var cloudDebugger = google.clouddebugger('v2');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // Identifies the debuggee being debugged.
                 *     debuggeeId: 'my-debuggee-id',  // TODO: Update placeholder value.
                 *
                 *     // Breakpoint identifier, unique in the scope of the debuggee.
                 *     id: 'my-id',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body. All existing properties
                 *       // will be replaced.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   cloudDebugger.controller.debuggees.breakpoints.update(request, function(err, response) {
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
                 * @alias clouddebugger.controller.debuggees.breakpoints.update
                 * @memberOf! clouddebugger(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.debuggeeId Identifies the debuggee being debugged.
                 * @param {string} params.id Breakpoint identifier, unique in the scope of the debuggee.
                 * @param {clouddebugger(v2).UpdateActiveBreakpointRequest} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2/controller/debuggees/{debuggeeId}/breakpoints/{id}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['debuggeeId', 'id'],
                        pathParams: ['debuggeeId', 'id'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            }
        }
    };
    self.debugger = {
        debuggees: {
            /**
             * clouddebugger.debugger.debuggees.list
             *
             * @desc Lists all the debuggees that the user has access to.
             *
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Stackdriver Debugger API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/clouddebugger
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
             * var cloudDebugger = google.clouddebugger('v2');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     auth: authClient,
             *   };
             *
             *   cloudDebugger.debugger.debuggees.list(request, function(err, response) {
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
             * @alias clouddebugger.debugger.debuggees.list
             * @memberOf! clouddebugger(v2)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.clientVersion The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
             * @param {boolean=} params.includeInactive When set to `true`, the result includes all debuggees. Otherwise, the result includes only debuggees that are active.
             * @param {string=} params.project Project number of a Google Cloud project whose debuggees to list.
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
                const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2/debugger/debuggees').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: [],
                    pathParams: [],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            breakpoints: {
                /**
                 * clouddebugger.debugger.debuggees.breakpoints.delete
                 *
                 * @desc Deletes the breakpoint from the debuggee.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Stackdriver Debugger API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/clouddebugger
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
                 * var cloudDebugger = google.clouddebugger('v2');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // ID of the debuggee whose breakpoint to delete.
                 *     debuggeeId: 'my-debuggee-id',  // TODO: Update placeholder value.
                 *
                 *     // ID of the breakpoint to delete.
                 *     breakpointId: 'my-breakpoint-id',  // TODO: Update placeholder value.
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   cloudDebugger.debugger.debuggees.breakpoints.delete(request, function(err) {
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
                 * @alias clouddebugger.debugger.debuggees.breakpoints.delete
                 * @memberOf! clouddebugger(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.breakpointId ID of the breakpoint to delete.
                 * @param {string=} params.clientVersion The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
                 * @param {string} params.debuggeeId ID of the debuggee whose breakpoint to delete.
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
                    const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['debuggeeId', 'breakpointId'],
                        pathParams: ['breakpointId', 'debuggeeId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * clouddebugger.debugger.debuggees.breakpoints.get
                 *
                 * @desc Gets breakpoint information.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Stackdriver Debugger API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/clouddebugger
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
                 * var cloudDebugger = google.clouddebugger('v2');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // ID of the debuggee whose breakpoint to get.
                 *     debuggeeId: 'my-debuggee-id',  // TODO: Update placeholder value.
                 *
                 *     // ID of the breakpoint to get.
                 *     breakpointId: 'my-breakpoint-id',  // TODO: Update placeholder value.
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   cloudDebugger.debugger.debuggees.breakpoints.get(request, function(err, response) {
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
                 * @alias clouddebugger.debugger.debuggees.breakpoints.get
                 * @memberOf! clouddebugger(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.breakpointId ID of the breakpoint to get.
                 * @param {string=} params.clientVersion The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
                 * @param {string} params.debuggeeId ID of the debuggee whose breakpoint to get.
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
                    const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['debuggeeId', 'breakpointId'],
                        pathParams: ['breakpointId', 'debuggeeId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * clouddebugger.debugger.debuggees.breakpoints.list
                 *
                 * @desc Lists all breakpoints for the debuggee.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Stackdriver Debugger API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/clouddebugger
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
                 * var cloudDebugger = google.clouddebugger('v2');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // ID of the debuggee whose breakpoints to list.
                 *     debuggeeId: 'my-debuggee-id',  // TODO: Update placeholder value.
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   cloudDebugger.debugger.debuggees.breakpoints.list(request, function(err, response) {
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
                 * @alias clouddebugger.debugger.debuggees.breakpoints.list
                 * @memberOf! clouddebugger(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.action.value Only breakpoints with the specified action will pass the filter.
                 * @param {string=} params.clientVersion The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
                 * @param {string} params.debuggeeId ID of the debuggee whose breakpoints to list.
                 * @param {boolean=} params.includeAllUsers When set to `true`, the response includes the list of breakpoints set by any user. Otherwise, it includes only breakpoints set by the caller.
                 * @param {boolean=} params.includeInactive When set to `true`, the response includes active and inactive breakpoints. Otherwise, it includes only active breakpoints.
                 * @param {boolean=} params.stripResults This field is deprecated. The following fields are always stripped out of the result: `stack_frames`, `evaluated_expressions` and `variable_table`.
                 * @param {string=} params.waitToken A wait token that, if specified, blocks the call until the breakpoints list has changed, or a server selected timeout has expired.  The value should be set from the last response. The error code `google.rpc.Code.ABORTED` (RPC) is returned on wait timeout, which should be called again with the same `wait_token`.
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
                    const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2/debugger/debuggees/{debuggeeId}/breakpoints').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['debuggeeId'],
                        pathParams: ['debuggeeId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * clouddebugger.debugger.debuggees.breakpoints.set
                 *
                 * @desc Sets the breakpoint to the debuggee.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Stackdriver Debugger API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/clouddebugger
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
                 * var cloudDebugger = google.clouddebugger('v2');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // ID of the debuggee where the breakpoint is to be set.
                 *     debuggeeId: 'my-debuggee-id',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   cloudDebugger.debugger.debuggees.breakpoints.set(request, function(err, response) {
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
                 * @alias clouddebugger.debugger.debuggees.breakpoints.set
                 * @memberOf! clouddebugger(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.clientVersion The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
                 * @param {string} params.debuggeeId ID of the debuggee where the breakpoint is to be set.
                 * @param {clouddebugger(v2).Breakpoint} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                set: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2/debugger/debuggees/{debuggeeId}/breakpoints/set').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['debuggeeId'],
                        pathParams: ['debuggeeId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            }
        }
    };
}
module.exports = Clouddebugger;
//# sourceMappingURL=v2.js.map