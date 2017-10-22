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
 * Google Container Engine API
 *
 * The Google Container Engine API is used for building and managing container based applications, powered by the open source Kubernetes technology.
 *
 * @example
 * const google = require('googleapis');
 * const container = google.container('v1');
 *
 * @namespace container
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Container
 */
function Container(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        zones: {
            /**
             * container.projects.zones.getServerconfig
             *
             * @desc Returns configuration info about the Container Engine service.
             *
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Google Container Engine API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/container
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
             * var container = google.container('v1');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The Google Developers Console [project ID or project
             *     // number](https://support.google.com/cloud/answer/6158840).
             *     projectId: 'my-project-id',  // TODO: Update placeholder value.
             *
             *     // The name of the Google Compute Engine [zone](/compute/docs/zones#available)
             *     // to return operations for.
             *     zone: 'my-zone',  // TODO: Update placeholder value.
             *
             *     auth: authClient,
             *   };
             *
             *   container.projects.zones.getServerconfig(request, function(err, response) {
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
             * @alias container.projects.zones.getServerconfig
             * @memberOf! container(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
             * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            getServerconfig: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/serverconfig').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'zone'],
                    pathParams: ['projectId', 'zone'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            clusters: {
                /**
                 * container.projects.zones.clusters.addons
                 *
                 * @desc Sets the addons of a specific cluster.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
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
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://support.google.com/cloud/answer/6158840).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the cluster
                 *     // resides.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     // The name of the cluster to upgrade.
                 *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.clusters.addons(request, function(err, response) {
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
                 * @alias container.projects.zones.clusters.addons
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster to upgrade.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                 * @param {container(v1).SetAddonsConfigRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                addons: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/addons').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * container.projects.zones.clusters.completeIpRotation
                 *
                 * @desc Completes master IP rotation.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
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
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://developers.google.com/console/help/new/#projectnumber).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the cluster
                 *     // resides.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     // The name of the cluster.
                 *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.clusters.completeIpRotation(request, function(err, response) {
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
                 * @alias container.projects.zones.clusters.completeIpRotation
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                 * @param {container(v1).CompleteIPRotationRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                completeIpRotation: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:completeIpRotation').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * container.projects.zones.clusters.create
                 *
                 * @desc Creates a cluster, consisting of the specified number and type of Google Compute Engine instances.  By default, the cluster is created in the project's [default network](/compute/docs/networks-and-firewalls#networks).  One firewall is added for the cluster. After cluster creation, the cluster creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster.  Finally, an entry is added to the project's global metadata indicating which CIDR range is being used by the cluster.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
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
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://support.google.com/cloud/answer/6158840).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the cluster
                 *     // resides.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.clusters.create(request, function(err, response) {
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
                 * @alias container.projects.zones.clusters.create
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                 * @param {container(v1).CreateClusterRequest} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone'],
                        pathParams: ['projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * container.projects.zones.clusters.delete
                 *
                 * @desc Deletes the cluster, including the Kubernetes endpoint and all worker nodes.  Firewalls and routes that were configured during cluster creation are also deleted.  Other Google Compute Engine resources that might be in use by the cluster (e.g. load balancer resources) will not be deleted if they weren't present at the initial create time.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
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
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://support.google.com/cloud/answer/6158840).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the cluster
                 *     // resides.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     // The name of the cluster to delete.
                 *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.clusters.delete(request, function(err, response) {
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
                 * @alias container.projects.zones.clusters.delete
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster to delete.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
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
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * container.projects.zones.clusters.get
                 *
                 * @desc Gets the details of a specific cluster.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
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
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://support.google.com/cloud/answer/6158840).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the cluster
                 *     // resides.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     // The name of the cluster to retrieve.
                 *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.clusters.get(request, function(err, response) {
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
                 * @alias container.projects.zones.clusters.get
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster to retrieve.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
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
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * container.projects.zones.clusters.legacyAbac
                 *
                 * @desc Enables or disables the ABAC authorization mechanism on a cluster.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
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
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://support.google.com/cloud/answer/6158840).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the cluster
                 *     // resides.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     // The name of the cluster to update.
                 *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.clusters.legacyAbac(request, function(err, response) {
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
                 * @alias container.projects.zones.clusters.legacyAbac
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster to update.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                 * @param {container(v1).SetLegacyAbacRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                legacyAbac: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/legacyAbac').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * container.projects.zones.clusters.list
                 *
                 * @desc Lists all clusters owned by a project in either the specified zone or all zones.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
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
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://support.google.com/cloud/answer/6158840).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the cluster
                 *     // resides, or "-" for all zones.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.clusters.list(request, function(err, response) {
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
                 * @alias container.projects.zones.clusters.list
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides, or "-" for all zones.
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
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone'],
                        pathParams: ['projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * container.projects.zones.clusters.locations
                 *
                 * @desc Sets the locations of a specific cluster.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
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
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://support.google.com/cloud/answer/6158840).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the cluster
                 *     // resides.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     // The name of the cluster to upgrade.
                 *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.clusters.locations(request, function(err, response) {
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
                 * @alias container.projects.zones.clusters.locations
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster to upgrade.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                 * @param {container(v1).SetLocationsRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                locations: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/locations').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * container.projects.zones.clusters.logging
                 *
                 * @desc Sets the logging service of a specific cluster.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
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
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://support.google.com/cloud/answer/6158840).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the cluster
                 *     // resides.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     // The name of the cluster to upgrade.
                 *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.clusters.logging(request, function(err, response) {
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
                 * @alias container.projects.zones.clusters.logging
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster to upgrade.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                 * @param {container(v1).SetLoggingServiceRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                logging: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/logging').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * container.projects.zones.clusters.master
                 *
                 * @desc Updates the master of a specific cluster.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
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
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://support.google.com/cloud/answer/6158840).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the cluster
                 *     // resides.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     // The name of the cluster to upgrade.
                 *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.clusters.master(request, function(err, response) {
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
                 * @alias container.projects.zones.clusters.master
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster to upgrade.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                 * @param {container(v1).UpdateMasterRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                master: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/master').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * container.projects.zones.clusters.monitoring
                 *
                 * @desc Sets the monitoring service of a specific cluster.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
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
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://support.google.com/cloud/answer/6158840).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the cluster
                 *     // resides.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     // The name of the cluster to upgrade.
                 *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.clusters.monitoring(request, function(err, response) {
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
                 * @alias container.projects.zones.clusters.monitoring
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster to upgrade.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                 * @param {container(v1).SetMonitoringServiceRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                monitoring: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/monitoring').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * container.projects.zones.clusters.resourceLabels
                 *
                 * @desc Sets labels on a cluster.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
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
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://developers.google.com/console/help/new/#projectnumber).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the cluster
                 *     // resides.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     // The name of the cluster.
                 *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.clusters.resourceLabels(request, function(err, response) {
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
                 * @alias container.projects.zones.clusters.resourceLabels
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                 * @param {container(v1).SetLabelsRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                resourceLabels: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/resourceLabels').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * container.projects.zones.clusters.setMaintenancePolicy
                 *
                 * @desc Sets the maintenance policy for a cluster.
                 *
                 * @alias container.projects.zones.clusters.setMaintenancePolicy
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster to update.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                 * @param {container(v1).SetMaintenancePolicyRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                setMaintenancePolicy: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMaintenancePolicy').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * container.projects.zones.clusters.setMasterAuth
                 *
                 * @desc Used to set master auth materials. Currently supports :- Changing the admin password of a specific cluster. This can be either via password generation or explicitly set the password.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
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
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://support.google.com/cloud/answer/6158840).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the cluster
                 *     // resides.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     // The name of the cluster to upgrade.
                 *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.clusters.setMasterAuth(request, function(err, response) {
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
                 * @alias container.projects.zones.clusters.setMasterAuth
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster to upgrade.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                 * @param {container(v1).SetMasterAuthRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                setMasterAuth: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMasterAuth').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * container.projects.zones.clusters.setNetworkPolicy
                 *
                 * @desc Enables/Disables Network Policy for a cluster.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
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
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://developers.google.com/console/help/new/#projectnumber).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the cluster
                 *     // resides.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     // The name of the cluster.
                 *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.clusters.setNetworkPolicy(request, function(err, response) {
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
                 * @alias container.projects.zones.clusters.setNetworkPolicy
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                 * @param {container(v1).SetNetworkPolicyRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                setNetworkPolicy: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setNetworkPolicy').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * container.projects.zones.clusters.startIpRotation
                 *
                 * @desc Start master IP rotation.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
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
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://developers.google.com/console/help/new/#projectnumber).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the cluster
                 *     // resides.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     // The name of the cluster.
                 *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.clusters.startIpRotation(request, function(err, response) {
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
                 * @alias container.projects.zones.clusters.startIpRotation
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                 * @param {container(v1).StartIPRotationRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                startIpRotation: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:startIpRotation').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * container.projects.zones.clusters.update
                 *
                 * @desc Updates the settings of a specific cluster.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
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
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://support.google.com/cloud/answer/6158840).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the cluster
                 *     // resides.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     // The name of the cluster to upgrade.
                 *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body. All existing properties
                 *       // will be replaced.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.clusters.update(request, function(err, response) {
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
                 * @alias container.projects.zones.clusters.update
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster to upgrade.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                 * @param {container(v1).UpdateClusterRequest} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'clusterId'],
                        pathParams: ['clusterId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                nodePools: {
                    /**
                     * container.projects.zones.clusters.nodePools.autoscaling
                     *
                     * @desc Sets the autoscaling settings of a specific node pool.
                     *
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Google Container Engine API
                     * //    and check the quota for your project at
                     * //    https://console.developers.google.com/apis/api/container
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
                     * var container = google.container('v1');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // The Google Developers Console [project ID or project
                     *     // number](https://support.google.com/cloud/answer/6158840).
                     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                     *
                     *     // The name of the Google Compute Engine
                     *     // [zone](/compute/docs/zones#available) in which the cluster
                     *     // resides.
                     *     zone: 'my-zone',  // TODO: Update placeholder value.
                     *
                     *     // The name of the cluster to upgrade.
                     *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                     *
                     *     // The name of the node pool to upgrade.
                     *     nodePoolId: 'my-node-pool-id',  // TODO: Update placeholder value.
                     *
                     *     resource: {
                     *       // TODO: Add desired properties to the request body.
                     *     },
                     *
                     *     auth: authClient,
                     *   };
                     *
                     *   container.projects.zones.clusters.nodePools.autoscaling(request, function(err, response) {
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
                     * @alias container.projects.zones.clusters.nodePools.autoscaling
                     * @memberOf! container(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.clusterId The name of the cluster to upgrade.
                     * @param {string} params.nodePoolId The name of the node pool to upgrade.
                     * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                     * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                     * @param {container(v1).SetNodePoolAutoscalingRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    autoscaling: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/autoscaling').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
                            pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * container.projects.zones.clusters.nodePools.create
                     *
                     * @desc Creates a node pool for a cluster.
                     *
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Google Container Engine API
                     * //    and check the quota for your project at
                     * //    https://console.developers.google.com/apis/api/container
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
                     * var container = google.container('v1');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // The Google Developers Console [project ID or project
                     *     // number](https://developers.google.com/console/help/new/#projectnumber).
                     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                     *
                     *     // The name of the Google Compute Engine
                     *     // [zone](/compute/docs/zones#available) in which the cluster
                     *     // resides.
                     *     zone: 'my-zone',  // TODO: Update placeholder value.
                     *
                     *     // The name of the cluster.
                     *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                     *
                     *     resource: {
                     *       // TODO: Add desired properties to the request body.
                     *     },
                     *
                     *     auth: authClient,
                     *   };
                     *
                     *   container.projects.zones.clusters.nodePools.create(request, function(err, response) {
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
                     * @alias container.projects.zones.clusters.nodePools.create
                     * @memberOf! container(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.clusterId The name of the cluster.
                     * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
                     * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                     * @param {container(v1).CreateNodePoolRequest} params.resource Request body data
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
                        const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'zone', 'clusterId'],
                            pathParams: ['clusterId', 'projectId', 'zone'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * container.projects.zones.clusters.nodePools.delete
                     *
                     * @desc Deletes a node pool from a cluster.
                     *
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Google Container Engine API
                     * //    and check the quota for your project at
                     * //    https://console.developers.google.com/apis/api/container
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
                     * var container = google.container('v1');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // The Google Developers Console [project ID or project
                     *     // number](https://developers.google.com/console/help/new/#projectnumber).
                     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                     *
                     *     // The name of the Google Compute Engine
                     *     // [zone](/compute/docs/zones#available) in which the cluster
                     *     // resides.
                     *     zone: 'my-zone',  // TODO: Update placeholder value.
                     *
                     *     // The name of the cluster.
                     *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                     *
                     *     // The name of the node pool to delete.
                     *     nodePoolId: 'my-node-pool-id',  // TODO: Update placeholder value.
                     *
                     *     auth: authClient,
                     *   };
                     *
                     *   container.projects.zones.clusters.nodePools.delete(request, function(err, response) {
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
                     * @alias container.projects.zones.clusters.nodePools.delete
                     * @memberOf! container(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.clusterId The name of the cluster.
                     * @param {string} params.nodePoolId The name of the node pool to delete.
                     * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
                     * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
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
                        const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'DELETE'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
                            pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * container.projects.zones.clusters.nodePools.get
                     *
                     * @desc Retrieves the node pool requested.
                     *
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Google Container Engine API
                     * //    and check the quota for your project at
                     * //    https://console.developers.google.com/apis/api/container
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
                     * var container = google.container('v1');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // The Google Developers Console [project ID or project
                     *     // number](https://developers.google.com/console/help/new/#projectnumber).
                     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                     *
                     *     // The name of the Google Compute Engine
                     *     // [zone](/compute/docs/zones#available) in which the cluster
                     *     // resides.
                     *     zone: 'my-zone',  // TODO: Update placeholder value.
                     *
                     *     // The name of the cluster.
                     *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                     *
                     *     // The name of the node pool.
                     *     nodePoolId: 'my-node-pool-id',  // TODO: Update placeholder value.
                     *
                     *     auth: authClient,
                     *   };
                     *
                     *   container.projects.zones.clusters.nodePools.get(request, function(err, response) {
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
                     * @alias container.projects.zones.clusters.nodePools.get
                     * @memberOf! container(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.clusterId The name of the cluster.
                     * @param {string} params.nodePoolId The name of the node pool.
                     * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
                     * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
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
                        const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
                            pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * container.projects.zones.clusters.nodePools.list
                     *
                     * @desc Lists the node pools for a cluster.
                     *
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Google Container Engine API
                     * //    and check the quota for your project at
                     * //    https://console.developers.google.com/apis/api/container
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
                     * var container = google.container('v1');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // The Google Developers Console [project ID or project
                     *     // number](https://developers.google.com/console/help/new/#projectnumber).
                     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                     *
                     *     // The name of the Google Compute Engine
                     *     // [zone](/compute/docs/zones#available) in which the cluster
                     *     // resides.
                     *     zone: 'my-zone',  // TODO: Update placeholder value.
                     *
                     *     // The name of the cluster.
                     *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                     *
                     *     auth: authClient,
                     *   };
                     *
                     *   container.projects.zones.clusters.nodePools.list(request, function(err, response) {
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
                     * @alias container.projects.zones.clusters.nodePools.list
                     * @memberOf! container(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.clusterId The name of the cluster.
                     * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber).
                     * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
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
                        const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'zone', 'clusterId'],
                            pathParams: ['clusterId', 'projectId', 'zone'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * container.projects.zones.clusters.nodePools.rollback
                     *
                     * @desc Roll back the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed.
                     *
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Google Container Engine API
                     * //    and check the quota for your project at
                     * //    https://console.developers.google.com/apis/api/container
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
                     * var container = google.container('v1');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // The Google Developers Console [project ID or project
                     *     // number](https://support.google.com/cloud/answer/6158840).
                     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                     *
                     *     // The name of the Google Compute Engine
                     *     // [zone](/compute/docs/zones#available) in which the cluster
                     *     // resides.
                     *     zone: 'my-zone',  // TODO: Update placeholder value.
                     *
                     *     // The name of the cluster to rollback.
                     *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                     *
                     *     // The name of the node pool to rollback.
                     *     nodePoolId: 'my-node-pool-id',  // TODO: Update placeholder value.
                     *
                     *     resource: {
                     *       // TODO: Add desired properties to the request body.
                     *     },
                     *
                     *     auth: authClient,
                     *   };
                     *
                     *   container.projects.zones.clusters.nodePools.rollback(request, function(err, response) {
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
                     * @alias container.projects.zones.clusters.nodePools.rollback
                     * @memberOf! container(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.clusterId The name of the cluster to rollback.
                     * @param {string} params.nodePoolId The name of the node pool to rollback.
                     * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                     * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                     * @param {container(v1).RollbackNodePoolUpgradeRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    rollback: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}:rollback').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
                            pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * container.projects.zones.clusters.nodePools.setManagement
                     *
                     * @desc Sets the NodeManagement options for a node pool.
                     *
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Google Container Engine API
                     * //    and check the quota for your project at
                     * //    https://console.developers.google.com/apis/api/container
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
                     * var container = google.container('v1');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // The Google Developers Console [project ID or project
                     *     // number](https://support.google.com/cloud/answer/6158840).
                     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                     *
                     *     // The name of the Google Compute Engine
                     *     // [zone](/compute/docs/zones#available) in which the cluster
                     *     // resides.
                     *     zone: 'my-zone',  // TODO: Update placeholder value.
                     *
                     *     // The name of the cluster to update.
                     *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                     *
                     *     // The name of the node pool to update.
                     *     nodePoolId: 'my-node-pool-id',  // TODO: Update placeholder value.
                     *
                     *     resource: {
                     *       // TODO: Add desired properties to the request body.
                     *     },
                     *
                     *     auth: authClient,
                     *   };
                     *
                     *   container.projects.zones.clusters.nodePools.setManagement(request, function(err, response) {
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
                     * @alias container.projects.zones.clusters.nodePools.setManagement
                     * @memberOf! container(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.clusterId The name of the cluster to update.
                     * @param {string} params.nodePoolId The name of the node pool to update.
                     * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                     * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                     * @param {container(v1).SetNodePoolManagementRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    setManagement: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setManagement').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
                            pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * container.projects.zones.clusters.nodePools.setSize
                     *
                     * @desc Sets the size of a specific node pool.
                     *
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Google Container Engine API
                     * //    and check the quota for your project at
                     * //    https://console.developers.google.com/apis/api/container
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
                     * var container = google.container('v1');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // The Google Developers Console [project ID or project
                     *     // number](https://support.google.com/cloud/answer/6158840).
                     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                     *
                     *     // The name of the Google Compute Engine
                     *     // [zone](/compute/docs/zones#available) in which the cluster
                     *     // resides.
                     *     zone: 'my-zone',  // TODO: Update placeholder value.
                     *
                     *     // The name of the cluster to update.
                     *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                     *
                     *     // The name of the node pool to update.
                     *     nodePoolId: 'my-node-pool-id',  // TODO: Update placeholder value.
                     *
                     *     resource: {
                     *       // TODO: Add desired properties to the request body.
                     *     },
                     *
                     *     auth: authClient,
                     *   };
                     *
                     *   container.projects.zones.clusters.nodePools.setSize(request, function(err, response) {
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
                     * @alias container.projects.zones.clusters.nodePools.setSize
                     * @memberOf! container(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.clusterId The name of the cluster to update.
                     * @param {string} params.nodePoolId The name of the node pool to update.
                     * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                     * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                     * @param {container(v1).SetNodePoolSizeRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    setSize: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setSize').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
                            pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * container.projects.zones.clusters.nodePools.update
                     *
                     * @desc Updates the version and/or image type of a specific node pool.
                     *
                     * @example
                     * // BEFORE RUNNING:
                     * // ---------------
                     * // 1. If not already done, enable the Google Container Engine API
                     * //    and check the quota for your project at
                     * //    https://console.developers.google.com/apis/api/container
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
                     * var container = google.container('v1');
                     *
                     * authorize(function(authClient) {
                     *   var request = {
                     *     // The Google Developers Console [project ID or project
                     *     // number](https://support.google.com/cloud/answer/6158840).
                     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                     *
                     *     // The name of the Google Compute Engine
                     *     // [zone](/compute/docs/zones#available) in which the cluster
                     *     // resides.
                     *     zone: 'my-zone',  // TODO: Update placeholder value.
                     *
                     *     // The name of the cluster to upgrade.
                     *     clusterId: 'my-cluster-id',  // TODO: Update placeholder value.
                     *
                     *     // The name of the node pool to upgrade.
                     *     nodePoolId: 'my-node-pool-id',  // TODO: Update placeholder value.
                     *
                     *     resource: {
                     *       // TODO: Add desired properties to the request body.
                     *     },
                     *
                     *     auth: authClient,
                     *   };
                     *
                     *   container.projects.zones.clusters.nodePools.update(request, function(err, response) {
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
                     * @alias container.projects.zones.clusters.nodePools.update
                     * @memberOf! container(v1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.clusterId The name of the cluster to upgrade.
                     * @param {string} params.nodePoolId The name of the node pool to upgrade.
                     * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                     * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                     * @param {container(v1).UpdateNodePoolRequest} params.resource Request body data
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
                        const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/update').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'zone', 'clusterId', 'nodePoolId'],
                            pathParams: ['clusterId', 'nodePoolId', 'projectId', 'zone'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                }
            },
            operations: {
                /**
                 * container.projects.zones.operations.cancel
                 *
                 * @desc Cancels the specified operation.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
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
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://support.google.com/cloud/answer/6158840).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the operation resides.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     // The server-assigned `name` of the operation.
                 *     operationId: 'my-operation-id',  // TODO: Update placeholder value.
                 *
                 *     resource: {
                 *       // TODO: Add desired properties to the request body.
                 *     },
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.operations.cancel(request, function(err) {
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
                 * @alias container.projects.zones.operations.cancel
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.operationId The server-assigned `name` of the operation.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the operation resides.
                 * @param {container(v1).CancelOperationRequest} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/operations/{operationId}:cancel').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'operationId'],
                        pathParams: ['operationId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * container.projects.zones.operations.get
                 *
                 * @desc Gets the specified operation.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
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
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://support.google.com/cloud/answer/6158840).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                 *
                 *     // The name of the Google Compute Engine
                 *     // [zone](/compute/docs/zones#available) in which the cluster
                 *     // resides.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     // The server-assigned `name` of the operation.
                 *     operationId: 'my-operation-id',  // TODO: Update placeholder value.
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.operations.get(request, function(err, response) {
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
                 * @alias container.projects.zones.operations.get
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.operationId The server-assigned `name` of the operation.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
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
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/operations/{operationId}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone', 'operationId'],
                        pathParams: ['operationId', 'projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * container.projects.zones.operations.list
                 *
                 * @desc Lists all operations in a project in a specific zone or all zones.
                 *
                 * @example
                 * // BEFORE RUNNING:
                 * // ---------------
                 * // 1. If not already done, enable the Google Container Engine API
                 * //    and check the quota for your project at
                 * //    https://console.developers.google.com/apis/api/container
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
                 * var container = google.container('v1');
                 *
                 * authorize(function(authClient) {
                 *   var request = {
                 *     // The Google Developers Console [project ID or project
                 *     // number](https://support.google.com/cloud/answer/6158840).
                 *     projectId: 'my-project-id',  // TODO: Update placeholder value.
                 *
                 *     // The name of the Google Compute Engine [zone](/compute/docs/zones#available)
                 *     // to return operations for, or `-` for all zones.
                 *     zone: 'my-zone',  // TODO: Update placeholder value.
                 *
                 *     auth: authClient,
                 *   };
                 *
                 *   container.projects.zones.operations.list(request, function(err, response) {
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
                 * @alias container.projects.zones.operations.list
                 * @memberOf! container(v1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for, or `-` for all zones.
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
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1/projects/{projectId}/zones/{zone}/operations').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'zone'],
                        pathParams: ['projectId', 'zone'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            }
        }
    };
}
module.exports = Container;
//# sourceMappingURL=v1.js.map