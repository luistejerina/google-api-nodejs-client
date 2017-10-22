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
 * const container = google.container('v1beta1');
 *
 * @namespace container
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Container
 */
function Container(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        locations: {
            /**
             * container.projects.locations.getServerConfig
             *
             * @desc Returns configuration info about the Container Engine service.
             *
             * @alias container.projects.locations.getServerConfig
             * @memberOf! container(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name (project and location) of the server config to get Specified in the format 'projects/x/locations/x'.
             * @param {string=} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
             * @param {string=} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for. This field is deprecated, use name instead.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            getServerConfig: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta1/{name}/serverConfig').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            clusters: {
                /**
                 * container.projects.locations.clusters.completeIpRotation
                 *
                 * @desc Completes master IP rotation.
                 *
                 * @alias container.projects.locations.clusters.completeIpRotation
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name (project, location, cluster id) of the cluster to complete IP rotation. Specified in the format 'projects/x/locations/x/clusters/x'.
                 * @param {container(v1beta1).CompleteIPRotationRequest} params.resource Request body data
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
                            url: (rootUrl + '/v1beta1/{name}:completeIpRotation').replace(/([^:]\/)\/+/g, '$1'),
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
                 * container.projects.locations.clusters.create
                 *
                 * @desc Creates a cluster, consisting of the specified number and type of Google Compute Engine instances.  By default, the cluster is created in the project's [default network](/compute/docs/networks-and-firewalls#networks).  One firewall is added for the cluster. After cluster creation, the cluster creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster.  Finally, an entry is added to the project's global metadata indicating which CIDR range is being used by the cluster.
                 *
                 * @alias container.projects.locations.clusters.create
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent The parent (project and location) where the cluster will be created. Specified in the format 'projects/x/locations/x'.
                 * @param {container(v1beta1).CreateClusterRequest} params.resource Request body data
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
                            url: (rootUrl + '/v1beta1/{parent}/clusters').replace(/([^:]\/)\/+/g, '$1'),
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
                 * container.projects.locations.clusters.delete
                 *
                 * @desc Deletes the cluster, including the Kubernetes endpoint and all worker nodes.  Firewalls and routes that were configured during cluster creation are also deleted.  Other Google Compute Engine resources that might be in use by the cluster (e.g. load balancer resources) will not be deleted if they weren't present at the initial create time.
                 *
                 * @alias container.projects.locations.clusters.delete
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.clusterId The name of the cluster to delete. This field is deprecated, use name instead.
                 * @param {string} params.name The name (project, location, cluster) of the cluster to delete. Specified in the format 'projects/x/locations/x/clusters/x'.
                 * @param {string=} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
                 * @param {string=} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
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
                 * container.projects.locations.clusters.get
                 *
                 * @desc Gets the details of a specific cluster.
                 *
                 * @alias container.projects.locations.clusters.get
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.clusterId The name of the cluster to retrieve. This field is deprecated, use name instead.
                 * @param {string} params.name The name (project, location, cluster) of the cluster to retrieve. Specified in the format 'projects/x/locations/x/clusters/x'.
                 * @param {string=} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
                 * @param {string=} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
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
                 * container.projects.locations.clusters.list
                 *
                 * @desc Lists all clusters owned by a project in either the specified zone or all zones.
                 *
                 * @alias container.projects.locations.clusters.list
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent The parent (project and location) where the clusters will be listed. Specified in the format 'projects/x/locations/x'. Location "-" matches all zones and all regions.
                 * @param {string=} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use parent instead.
                 * @param {string=} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field is deprecated, use parent instead.
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
                            url: (rootUrl + '/v1beta1/{parent}/clusters').replace(/([^:]\/)\/+/g, '$1'),
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
                 * container.projects.locations.clusters.setLegacyAbac
                 *
                 * @desc Enables or disables the ABAC authorization mechanism on a cluster.
                 *
                 * @alias container.projects.locations.clusters.setLegacyAbac
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name (project, location, cluster id) of the cluster to set legacy abac. Specified in the format 'projects/x/locations/x/clusters/x'.
                 * @param {container(v1beta1).SetLegacyAbacRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                setLegacyAbac: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}:setLegacyAbac').replace(/([^:]\/)\/+/g, '$1'),
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
                 * container.projects.locations.clusters.setMaintenancePolicy
                 *
                 * @desc Sets the maintenance policy for a cluster.
                 *
                 * @alias container.projects.locations.clusters.setMaintenancePolicy
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name (project, location, cluster id) of the cluster to set maintenance policy. Specified in the format 'projects/x/locations/x/clusters/x'.
                 * @param {container(v1beta1).SetMaintenancePolicyRequest} params.resource Request body data
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
                            url: (rootUrl + '/v1beta1/{name}:setMaintenancePolicy').replace(/([^:]\/)\/+/g, '$1'),
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
                 * container.projects.locations.clusters.setMasterAuth
                 *
                 * @desc Used to set master auth materials. Currently supports :- Changing the admin password of a specific cluster. This can be either via password generation or explicitly set. Modify basic_auth.csv and reset the K8S API server.
                 *
                 * @alias container.projects.locations.clusters.setMasterAuth
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name (project, location, cluster) of the cluster to set auth. Specified in the format 'projects/x/locations/x/clusters/x'.
                 * @param {container(v1beta1).SetMasterAuthRequest} params.resource Request body data
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
                            url: (rootUrl + '/v1beta1/{name}:setMasterAuth').replace(/([^:]\/)\/+/g, '$1'),
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
                 * container.projects.locations.clusters.setNetworkPolicy
                 *
                 * @desc Enables/Disables Network Policy for a cluster.
                 *
                 * @alias container.projects.locations.clusters.setNetworkPolicy
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name (project, location, cluster id) of the cluster to set networking policy. Specified in the format 'projects/x/locations/x/clusters/x'.
                 * @param {container(v1beta1).SetNetworkPolicyRequest} params.resource Request body data
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
                            url: (rootUrl + '/v1beta1/{name}:setNetworkPolicy').replace(/([^:]\/)\/+/g, '$1'),
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
                 * container.projects.locations.clusters.setResourceLabels
                 *
                 * @desc Sets labels on a cluster.
                 *
                 * @alias container.projects.locations.clusters.setResourceLabels
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name (project, location, cluster id) of the cluster to set labels. Specified in the format 'projects/x/locations/x/clusters/x'.
                 * @param {container(v1beta1).SetLabelsRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                setResourceLabels: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://container.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}:setResourceLabels').replace(/([^:]\/)\/+/g, '$1'),
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
                 * container.projects.locations.clusters.startIpRotation
                 *
                 * @desc Start master IP rotation.
                 *
                 * @alias container.projects.locations.clusters.startIpRotation
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name (project, location, cluster id) of the cluster to start IP rotation. Specified in the format 'projects/x/locations/x/clusters/x'.
                 * @param {container(v1beta1).StartIPRotationRequest} params.resource Request body data
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
                            url: (rootUrl + '/v1beta1/{name}:startIpRotation').replace(/([^:]\/)\/+/g, '$1'),
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
                 * container.projects.locations.clusters.update
                 *
                 * @desc Updates the settings of a specific cluster.
                 *
                 * @alias container.projects.locations.clusters.update
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name (project, location, cluster) of the cluster to update. Specified in the format 'projects/x/locations/x/clusters/x'.
                 * @param {container(v1beta1).UpdateClusterRequest} params.resource Request body data
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
                nodePools: {
                    /**
                     * container.projects.locations.clusters.nodePools.create
                     *
                     * @desc Creates a node pool for a cluster.
                     *
                     * @alias container.projects.locations.clusters.nodePools.create
                     * @memberOf! container(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.parent The parent (project, location, cluster id) where the node pool will be created. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
                     * @param {container(v1beta1).CreateNodePoolRequest} params.resource Request body data
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
                                url: (rootUrl + '/v1beta1/{parent}/nodePools').replace(/([^:]\/)\/+/g, '$1'),
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
                     * container.projects.locations.clusters.nodePools.delete
                     *
                     * @desc Deletes a node pool from a cluster.
                     *
                     * @alias container.projects.locations.clusters.nodePools.delete
                     * @memberOf! container(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.clusterId The name of the cluster. This field is deprecated, use name instead.
                     * @param {string} params.name The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
                     * @param {string=} params.nodePoolId The name of the node pool to delete. This field is deprecated, use name instead.
                     * @param {string=} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use name instead.
                     * @param {string=} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
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
                     * container.projects.locations.clusters.nodePools.get
                     *
                     * @desc Retrieves the node pool requested.
                     *
                     * @alias container.projects.locations.clusters.nodePools.get
                     * @memberOf! container(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.clusterId The name of the cluster. This field is deprecated, use name instead.
                     * @param {string} params.name The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
                     * @param {string=} params.nodePoolId The name of the node pool. This field is deprecated, use name instead.
                     * @param {string=} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use name instead.
                     * @param {string=} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
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
                     * container.projects.locations.clusters.nodePools.list
                     *
                     * @desc Lists the node pools for a cluster.
                     *
                     * @alias container.projects.locations.clusters.nodePools.list
                     * @memberOf! container(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.clusterId The name of the cluster. This field is deprecated, use parent instead.
                     * @param {string} params.parent The parent (project, location, cluster id) where the node pools will be listed. Specified in the format 'projects/x/locations/x/clusters/x'.
                     * @param {string=} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use parent instead.
                     * @param {string=} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use parent instead.
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
                                url: (rootUrl + '/v1beta1/{parent}/nodePools').replace(/([^:]\/)\/+/g, '$1'),
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
                     * container.projects.locations.clusters.nodePools.rollback
                     *
                     * @desc Roll back the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed.
                     *
                     * @alias container.projects.locations.clusters.nodePools.rollback
                     * @memberOf! container(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
                     * @param {container(v1beta1).RollbackNodePoolUpgradeRequest} params.resource Request body data
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
                                url: (rootUrl + '/v1beta1/{name}:rollback').replace(/([^:]\/)\/+/g, '$1'),
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
                     * container.projects.locations.clusters.nodePools.setManagement
                     *
                     * @desc Sets the NodeManagement options for a node pool.
                     *
                     * @alias container.projects.locations.clusters.nodePools.setManagement
                     * @memberOf! container(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
                     * @param {container(v1beta1).SetNodePoolManagementRequest} params.resource Request body data
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
                                url: (rootUrl + '/v1beta1/{name}:setManagement').replace(/([^:]\/)\/+/g, '$1'),
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
            },
            operations: {
                /**
                 * container.projects.locations.operations.cancel
                 *
                 * @desc Cancels the specified operation.
                 *
                 * @alias container.projects.locations.operations.cancel
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name (project, location, operation id) of the operation to cancel. Specified in the format 'projects/x/locations/x/operations/x'.
                 * @param {container(v1beta1).CancelOperationRequest} params.resource Request body data
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
                            url: (rootUrl + '/v1beta1/{name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
                 * container.projects.locations.operations.get
                 *
                 * @desc Gets the specified operation.
                 *
                 * @alias container.projects.locations.operations.get
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name (project, location, operation id) of the operation to get. Specified in the format 'projects/x/locations/x/operations/x'.
                 * @param {string=} params.operationId The server-assigned `name` of the operation. This field is deprecated, use name instead.
                 * @param {string=} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
                 * @param {string=} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
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
                 * container.projects.locations.operations.list
                 *
                 * @desc Lists all operations in a project in a specific zone or all zones.
                 *
                 * @alias container.projects.locations.operations.list
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent The parent (project and location) where the operations will be listed. Specified in the format 'projects/x/locations/x'. Location "-" matches all zones and all regions.
                 * @param {string=} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use parent instead.
                 * @param {string=} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for, or `-` for all zones. This field is deprecated, use parent instead.
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
                            url: (rootUrl + '/v1beta1/{parent}/operations').replace(/([^:]\/)\/+/g, '$1'),
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
        },
        zones: {
            /**
             * container.projects.zones.getServerconfig
             *
             * @desc Returns configuration info about the Container Engine service.
             *
             * @alias container.projects.zones.getServerconfig
             * @memberOf! container(v1beta1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.name The name (project and location) of the server config to get Specified in the format 'projects/x/locations/x'.
             * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
             * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for. This field is deprecated, use name instead.
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
                        url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/serverconfig').replace(/([^:]\/)\/+/g, '$1'),
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
                 * container.projects.zones.clusters.completeIpRotation
                 *
                 * @desc Completes master IP rotation.
                 *
                 * @alias container.projects.zones.clusters.completeIpRotation
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster. This field is deprecated, use name instead.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use name instead.
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
                 * @param {container(v1beta1).CompleteIPRotationRequest} params.resource Request body data
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
                            url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:completeIpRotation').replace(/([^:]\/)\/+/g, '$1'),
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
                 * @alias container.projects.zones.clusters.create
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use parent instead.
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use parent instead.
                 * @param {container(v1beta1).CreateClusterRequest} params.resource Request body data
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
                            url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters').replace(/([^:]\/)\/+/g, '$1'),
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
                 * @alias container.projects.zones.clusters.delete
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster to delete. This field is deprecated, use name instead.
                 * @param {string=} params.name The name (project, location, cluster) of the cluster to delete. Specified in the format 'projects/x/locations/x/clusters/x'.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
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
                            url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}').replace(/([^:]\/)\/+/g, '$1'),
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
                 * @alias container.projects.zones.clusters.get
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster to retrieve. This field is deprecated, use name instead.
                 * @param {string=} params.name The name (project, location, cluster) of the cluster to retrieve. Specified in the format 'projects/x/locations/x/clusters/x'.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
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
                            url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}').replace(/([^:]\/)\/+/g, '$1'),
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
                 * @alias container.projects.zones.clusters.legacyAbac
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster to update. This field is deprecated, use name instead.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
                 * @param {container(v1beta1).SetLegacyAbacRequest} params.resource Request body data
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
                            url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/legacyAbac').replace(/([^:]\/)\/+/g, '$1'),
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
                 * @alias container.projects.zones.clusters.list
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.parent The parent (project and location) where the clusters will be listed. Specified in the format 'projects/x/locations/x'. Location "-" matches all zones and all regions.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use parent instead.
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides, or "-" for all zones. This field is deprecated, use parent instead.
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
                            url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters').replace(/([^:]\/)\/+/g, '$1'),
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
                 * container.projects.zones.clusters.resourceLabels
                 *
                 * @desc Sets labels on a cluster.
                 *
                 * @alias container.projects.zones.clusters.resourceLabels
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster. This field is deprecated, use name instead.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use name instead.
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
                 * @param {container(v1beta1).SetLabelsRequest} params.resource Request body data
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
                            url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/resourceLabels').replace(/([^:]\/)\/+/g, '$1'),
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
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster to update.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840).
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides.
                 * @param {container(v1beta1).SetMaintenancePolicyRequest} params.resource Request body data
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
                            url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMaintenancePolicy').replace(/([^:]\/)\/+/g, '$1'),
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
                 * @desc Used to set master auth materials. Currently supports :- Changing the admin password of a specific cluster. This can be either via password generation or explicitly set. Modify basic_auth.csv and reset the K8S API server.
                 *
                 * @alias container.projects.zones.clusters.setMasterAuth
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster to upgrade. This field is deprecated, use name instead.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
                 * @param {container(v1beta1).SetMasterAuthRequest} params.resource Request body data
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
                            url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMasterAuth').replace(/([^:]\/)\/+/g, '$1'),
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
                 * @alias container.projects.zones.clusters.setNetworkPolicy
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster. This field is deprecated, use name instead.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use name instead.
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
                 * @param {container(v1beta1).SetNetworkPolicyRequest} params.resource Request body data
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
                            url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setNetworkPolicy').replace(/([^:]\/)\/+/g, '$1'),
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
                 * @alias container.projects.zones.clusters.startIpRotation
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster. This field is deprecated, use name instead.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use name instead.
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
                 * @param {container(v1beta1).StartIPRotationRequest} params.resource Request body data
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
                            url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:startIpRotation').replace(/([^:]\/)\/+/g, '$1'),
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
                 * @alias container.projects.zones.clusters.update
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterId The name of the cluster to upgrade. This field is deprecated, use name instead.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
                 * @param {container(v1beta1).UpdateClusterRequest} params.resource Request body data
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
                            url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}').replace(/([^:]\/)\/+/g, '$1'),
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
                     * container.projects.zones.clusters.nodePools.create
                     *
                     * @desc Creates a node pool for a cluster.
                     *
                     * @alias container.projects.zones.clusters.nodePools.create
                     * @memberOf! container(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.clusterId The name of the cluster. This field is deprecated, use parent instead.
                     * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use parent instead.
                     * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use parent instead.
                     * @param {container(v1beta1).CreateNodePoolRequest} params.resource Request body data
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
                                url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools').replace(/([^:]\/)\/+/g, '$1'),
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
                     * @alias container.projects.zones.clusters.nodePools.delete
                     * @memberOf! container(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.clusterId The name of the cluster. This field is deprecated, use name instead.
                     * @param {string=} params.name The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
                     * @param {string} params.nodePoolId The name of the node pool to delete. This field is deprecated, use name instead.
                     * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use name instead.
                     * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
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
                                url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}').replace(/([^:]\/)\/+/g, '$1'),
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
                     * @alias container.projects.zones.clusters.nodePools.get
                     * @memberOf! container(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.clusterId The name of the cluster. This field is deprecated, use name instead.
                     * @param {string=} params.name The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format 'projects/x/locations/x/clusters/x/nodePools/x'.
                     * @param {string} params.nodePoolId The name of the node pool. This field is deprecated, use name instead.
                     * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use name instead.
                     * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
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
                                url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}').replace(/([^:]\/)\/+/g, '$1'),
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
                     * @alias container.projects.zones.clusters.nodePools.list
                     * @memberOf! container(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.clusterId The name of the cluster. This field is deprecated, use parent instead.
                     * @param {string=} params.parent The parent (project, location, cluster id) where the node pools will be listed. Specified in the format 'projects/x/locations/x/clusters/x'.
                     * @param {string} params.projectId The Google Developers Console [project ID or project number](https://developers.google.com/console/help/new/#projectnumber). This field is deprecated, use parent instead.
                     * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use parent instead.
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
                                url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools').replace(/([^:]\/)\/+/g, '$1'),
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
                     * @alias container.projects.zones.clusters.nodePools.rollback
                     * @memberOf! container(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.clusterId The name of the cluster to rollback. This field is deprecated, use name instead.
                     * @param {string} params.nodePoolId The name of the node pool to rollback. This field is deprecated, use name instead.
                     * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
                     * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
                     * @param {container(v1beta1).RollbackNodePoolUpgradeRequest} params.resource Request body data
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
                                url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}:rollback').replace(/([^:]\/)\/+/g, '$1'),
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
                     * @alias container.projects.zones.clusters.nodePools.setManagement
                     * @memberOf! container(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.clusterId The name of the cluster to update. This field is deprecated, use name instead.
                     * @param {string} params.nodePoolId The name of the node pool to update. This field is deprecated, use name instead.
                     * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
                     * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
                     * @param {container(v1beta1).SetNodePoolManagementRequest} params.resource Request body data
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
                                url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setManagement').replace(/([^:]\/)\/+/g, '$1'),
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
                 * @alias container.projects.zones.operations.cancel
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.operationId The server-assigned `name` of the operation. This field is deprecated, use name instead.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the operation resides. This field is deprecated, use name instead.
                 * @param {container(v1beta1).CancelOperationRequest} params.resource Request body data
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
                            url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
                 * @alias container.projects.zones.operations.get
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.name The name (project, location, operation id) of the operation to get. Specified in the format 'projects/x/locations/x/operations/x'.
                 * @param {string} params.operationId The server-assigned `name` of the operation. This field is deprecated, use name instead.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use name instead.
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use name instead.
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
                            url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/operations/{operationId}').replace(/([^:]\/)\/+/g, '$1'),
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
                 * @alias container.projects.zones.operations.list
                 * @memberOf! container(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.parent The parent (project and location) where the operations will be listed. Specified in the format 'projects/x/locations/x'. Location "-" matches all zones and all regions.
                 * @param {string} params.projectId The Google Developers Console [project ID or project number](https://support.google.com/cloud/answer/6158840). This field is deprecated, use parent instead.
                 * @param {string} params.zone The name of the Google Compute Engine [zone](/compute/docs/zones#available) to return operations for, or `-` for all zones. This field is deprecated, use parent instead.
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
                            url: (rootUrl + '/v1beta1/projects/{projectId}/zones/{zone}/operations').replace(/([^:]\/)\/+/g, '$1'),
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
//# sourceMappingURL=v1beta1.js.map