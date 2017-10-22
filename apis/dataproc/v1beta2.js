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
 * Google Cloud Dataproc API
 *
 * Manages Hadoop-based clusters and jobs on Google Cloud Platform.
 *
 * @example
 * const google = require('googleapis');
 * const dataproc = google.dataproc('v1beta2');
 *
 * @namespace dataproc
 * @type {Function}
 * @version v1beta2
 * @variation v1beta2
 * @param {object=} options Options for Dataproc
 */
function Dataproc(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        locations: {
            workflowTemplates: {
                /**
                 * dataproc.projects.locations.workflowTemplates.create
                 *
                 * @desc Creates new workflow template.
                 *
                 * @alias dataproc.projects.locations.workflowTemplates.create
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent Required. The "resource name" of the region, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}
                 * @param {dataproc(v1beta2).WorkflowTemplate} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{parent}/workflowTemplates').replace(/([^:]\/)\/+/g, '$1'),
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
                 * dataproc.projects.locations.workflowTemplates.delete
                 *
                 * @desc Deletes a workflow template. It does not cancel in-progress workflows.
                 *
                 * @alias dataproc.projects.locations.workflowTemplates.delete
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name Required. The "resource name" of the workflow template, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
                 * @param {integer=} params.version Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version.
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                 * dataproc.projects.locations.workflowTemplates.get
                 *
                 * @desc Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
                 *
                 * @alias dataproc.projects.locations.workflowTemplates.get
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name Required. The "resource name" of the workflow template, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
                 * @param {integer=} params.version Optional. The version of workflow template to retrieve. Only previously instatiated versions can be retrieved.If unspecified, retrieves the current version.
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                 * dataproc.projects.locations.workflowTemplates.instantiate
                 *
                 * @desc Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling google.cloud.dataproc.v1beta2.OperationService.GetOperation. The Operation will complete when entire workflow is finished.The running workflow can be aborted via google.cloud.dataproc.v1beta2.OperationService.CancelOperation.The google.cloud.dataproc.v1beta2.Operation.metadata will always be google.cloud.dataproc.v1beta2.WorkflowMetadata.The google.cloud.dataproc.v1beta2.Operation.result will always be google.protobuf.Empty.
                 *
                 * @alias dataproc.projects.locations.workflowTemplates.instantiate
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name Required. The "resource name" of the workflow template, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
                 * @param {dataproc(v1beta2).InstantiateWorkflowTemplateRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                instantiate: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{name}:instantiate').replace(/([^:]\/)\/+/g, '$1'),
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
                 * dataproc.projects.locations.workflowTemplates.list
                 *
                 * @desc Lists workflows that match the specified filter in the request.
                 *
                 * @alias dataproc.projects.locations.workflowTemplates.list
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {integer=} params.pageSize Optional. The maximum number of results to return in each response.
                 * @param {string=} params.pageToken Optional. The page token, returned by a previous call, to request the next page of results.
                 * @param {string} params.parent Required. The "resource name" of the region, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{parent}/workflowTemplates').replace(/([^:]\/)\/+/g, '$1'),
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
                 * dataproc.projects.locations.workflowTemplates.update
                 *
                 * @desc Updates (replaces) workflow template. The updated template must contain version that matches the current server version.
                 *
                 * @alias dataproc.projects.locations.workflowTemplates.update
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name Output only. The "resource name" of the template, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
                 * @param {dataproc(v1beta2).WorkflowTemplate} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
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
        regions: {
            clusters: {
                /**
                 * dataproc.projects.regions.clusters.create
                 *
                 * @desc Creates a cluster in a project.
                 *
                 * @alias dataproc.projects.regions.clusters.create
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
                 * @param {dataproc(v1beta2).Cluster} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/projects/{projectId}/regions/{region}/clusters').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region'],
                        pathParams: ['projectId', 'region'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.clusters.delete
                 *
                 * @desc Deletes a cluster in a project.
                 *
                 * @alias dataproc.projects.regions.clusters.delete
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterName Required. The cluster name.
                 * @param {string=} params.clusterUuid Optional. Specifying the cluster_uuid means the RPC should fail (with error NOT_FOUND) if cluster with specified UUID does not exist.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/projects/{projectId}/regions/{region}/clusters/{clusterName}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'clusterName'],
                        pathParams: ['clusterName', 'projectId', 'region'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.clusters.diagnose
                 *
                 * @desc Gets cluster diagnostic information. After the operation completes, the Operation.response field contains DiagnoseClusterOutputLocation.
                 *
                 * @alias dataproc.projects.regions.clusters.diagnose
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterName Required. The cluster name.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
                 * @param {dataproc(v1beta2).DiagnoseClusterRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                diagnose: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/projects/{projectId}/regions/{region}/clusters/{clusterName}:diagnose').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'clusterName'],
                        pathParams: ['clusterName', 'projectId', 'region'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.clusters.get
                 *
                 * @desc Gets the resource representation for a cluster in a project.
                 *
                 * @alias dataproc.projects.regions.clusters.get
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterName Required. The cluster name.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/projects/{projectId}/regions/{region}/clusters/{clusterName}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'clusterName'],
                        pathParams: ['clusterName', 'projectId', 'region'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.clusters.getIamPolicy
                 *
                 * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
                 *
                 * @alias dataproc.projects.regions.clusters.getIamPolicy
                 * @memberOf! dataproc(v1beta2)
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{resource}:getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
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
                 * dataproc.projects.regions.clusters.list
                 *
                 * @desc Lists all regions/{region}/clusters in a project.
                 *
                 * @alias dataproc.projects.regions.clusters.list
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.filter Optional. A filter constraining the clusters to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is one of status.state, clusterName, or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be one of the following: ACTIVE, INACTIVE, CREATING, RUNNING, ERROR, DELETING, or UPDATING. ACTIVE contains the CREATING, UPDATING, and RUNNING states. INACTIVE contains the DELETING and ERROR states. clusterName is the name of the cluster provided at creation time. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND clusterName = mycluster AND labels.env = staging AND labels.starred = *
                 * @param {integer=} params.pageSize Optional. The standard List page size.
                 * @param {string=} params.pageToken Optional. The standard List page token.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the cluster belongs to.
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/projects/{projectId}/regions/{region}/clusters').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region'],
                        pathParams: ['projectId', 'region'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.clusters.patch
                 *
                 * @desc Updates a cluster in a project.
                 *
                 * @alias dataproc.projects.regions.clusters.patch
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.clusterName Required. The cluster name.
                 * @param {string=} params.gracefulDecommissionTimeout Optional. Timeout for graceful YARN decomissioning. Graceful decommissioning allows removing nodes from the cluster without interrupting jobs in progress. Timeout specifies how long to wait for jobs in progress to finish before forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for forceful decommission), and the maximum allowed timeout is 1 day.Only supported on Dataproc image versions 1.2 and higher.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project the cluster belongs to.
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
                 * @param {string=} params.updateMask Required. Specifies the path, relative to <code>Cluster</code>, of the field to update. For example, to change the number of workers in a cluster to 5, the <code>update_mask</code> parameter would be specified as <code>config.worker_config.num_instances</code>, and the PATCH request body would specify the new value, as follows: {   "config":{     "workerConfig":{       "numInstances":"5"     }   } } Similarly, to change the number of preemptible workers in a cluster to 5, the <code>update_mask</code> parameter would be <code>config.secondary_worker_config.num_instances</code>, and the PATCH request body would be set as follows: {   "config":{     "secondaryWorkerConfig":{       "numInstances":"5"     }   } } <strong>Note:</strong> currently only some fields can be updated: |Mask|Purpose| |labels|Updates labels| |config.worker_config.num_instances|Resize primary worker group| |config.secondary_worker_config.num_instances|Resize secondary worker group|
                 * @param {dataproc(v1beta2).Cluster} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/projects/{projectId}/regions/{region}/clusters/{clusterName}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'clusterName'],
                        pathParams: ['clusterName', 'projectId', 'region'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.clusters.setIamPolicy
                 *
                 * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
                 *
                 * @alias dataproc.projects.regions.clusters.setIamPolicy
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
                 * @param {dataproc(v1beta2).SetIamPolicyRequest} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{resource}:setIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
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
                 * dataproc.projects.regions.clusters.testIamPermissions
                 *
                 * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
                 *
                 * @alias dataproc.projects.regions.clusters.testIamPermissions
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
                 * @param {dataproc(v1beta2).TestIamPermissionsRequest} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
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
            jobs: {
                /**
                 * dataproc.projects.regions.jobs.cancel
                 *
                 * @desc Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list or regions/{region}/jobs.get.
                 *
                 * @alias dataproc.projects.regions.jobs.cancel
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.jobId Required. The job ID.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
                 * @param {dataproc(v1beta2).CancelJobRequest} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'jobId'],
                        pathParams: ['jobId', 'projectId', 'region'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.jobs.delete
                 *
                 * @desc Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
                 *
                 * @alias dataproc.projects.regions.jobs.delete
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.jobId Required. The job ID.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/projects/{projectId}/regions/{region}/jobs/{jobId}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'DELETE'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'jobId'],
                        pathParams: ['jobId', 'projectId', 'region'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.jobs.get
                 *
                 * @desc Gets the resource representation for a job in a project.
                 *
                 * @alias dataproc.projects.regions.jobs.get
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.jobId Required. The job ID.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/projects/{projectId}/regions/{region}/jobs/{jobId}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'jobId'],
                        pathParams: ['jobId', 'projectId', 'region'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.jobs.list
                 *
                 * @desc Lists regions/{region}/jobs in a project.
                 *
                 * @alias dataproc.projects.regions.jobs.list
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.clusterName Optional. If set, the returned jobs list includes only jobs that were submitted to the named cluster.
                 * @param {string=} params.filter Optional. A filter constraining the jobs to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is status.state or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be either ACTIVE or INACTIVE. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND labels.env = staging AND labels.starred = *
                 * @param {string=} params.jobStateMatcher Optional. Specifies enumerated categories of jobs to list (default = match ALL jobs).
                 * @param {integer=} params.pageSize Optional. The number of results to return in each response.
                 * @param {string=} params.pageToken Optional. The page token, returned by a previous call, to request the next page of results.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/projects/{projectId}/regions/{region}/jobs').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region'],
                        pathParams: ['projectId', 'region'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.jobs.patch
                 *
                 * @desc Updates a job in a project.
                 *
                 * @alias dataproc.projects.regions.jobs.patch
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.jobId Required. The job ID.
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
                 * @param {string=} params.updateMask Required. Specifies the path, relative to <code>Job</code>, of the field to update. For example, to update the labels of a Job the <code>update_mask</code> parameter would be specified as <code>labels</code>, and the PATCH request body would specify the new value. <strong>Note:</strong> Currently, <code>labels</code> is the only field that can be updated.
                 * @param {dataproc(v1beta2).Job} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/projects/{projectId}/regions/{region}/jobs/{jobId}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region', 'jobId'],
                        pathParams: ['jobId', 'projectId', 'region'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataproc.projects.regions.jobs.submit
                 *
                 * @desc Submits a job to a cluster.
                 *
                 * @alias dataproc.projects.regions.jobs.submit
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.projectId Required. The ID of the Google Cloud Platform project that the job belongs to.
                 * @param {string} params.region Required. The Cloud Dataproc region in which to handle the request.
                 * @param {dataproc(v1beta2).SubmitJobRequest} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/projects/{projectId}/regions/{region}/jobs:submit').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'region'],
                        pathParams: ['projectId', 'region'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            operations: {
                /**
                 * dataproc.projects.regions.operations.cancel
                 *
                 * @desc Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
                 *
                 * @alias dataproc.projects.regions.operations.cancel
                 * @memberOf! dataproc(v1beta2)
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
                 * dataproc.projects.regions.operations.delete
                 *
                 * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
                 *
                 * @alias dataproc.projects.regions.operations.delete
                 * @memberOf! dataproc(v1beta2)
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                 * dataproc.projects.regions.operations.get
                 *
                 * @desc Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
                 *
                 * @alias dataproc.projects.regions.operations.get
                 * @memberOf! dataproc(v1beta2)
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                 * dataproc.projects.regions.operations.list
                 *
                 * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/x/operations. To override the binding, API services can add a binding such as "/v1/{name=users/x}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
                 *
                 * @alias dataproc.projects.regions.operations.list
                 * @memberOf! dataproc(v1beta2)
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
            workflowTemplates: {
                /**
                 * dataproc.projects.regions.workflowTemplates.create
                 *
                 * @desc Creates new workflow template.
                 *
                 * @alias dataproc.projects.regions.workflowTemplates.create
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent Required. The "resource name" of the region, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}
                 * @param {dataproc(v1beta2).WorkflowTemplate} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{parent}/workflowTemplates').replace(/([^:]\/)\/+/g, '$1'),
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
                 * dataproc.projects.regions.workflowTemplates.delete
                 *
                 * @desc Deletes a workflow template. It does not cancel in-progress workflows.
                 *
                 * @alias dataproc.projects.regions.workflowTemplates.delete
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name Required. The "resource name" of the workflow template, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
                 * @param {integer=} params.version Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version.
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                 * dataproc.projects.regions.workflowTemplates.get
                 *
                 * @desc Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
                 *
                 * @alias dataproc.projects.regions.workflowTemplates.get
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name Required. The "resource name" of the workflow template, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
                 * @param {integer=} params.version Optional. The version of workflow template to retrieve. Only previously instatiated versions can be retrieved.If unspecified, retrieves the current version.
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
                 * dataproc.projects.regions.workflowTemplates.instantiate
                 *
                 * @desc Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling google.cloud.dataproc.v1beta2.OperationService.GetOperation. The Operation will complete when entire workflow is finished.The running workflow can be aborted via google.cloud.dataproc.v1beta2.OperationService.CancelOperation.The google.cloud.dataproc.v1beta2.Operation.metadata will always be google.cloud.dataproc.v1beta2.WorkflowMetadata.The google.cloud.dataproc.v1beta2.Operation.result will always be google.protobuf.Empty.
                 *
                 * @alias dataproc.projects.regions.workflowTemplates.instantiate
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name Required. The "resource name" of the workflow template, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
                 * @param {dataproc(v1beta2).InstantiateWorkflowTemplateRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                instantiate: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{name}:instantiate').replace(/([^:]\/)\/+/g, '$1'),
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
                 * dataproc.projects.regions.workflowTemplates.list
                 *
                 * @desc Lists workflows that match the specified filter in the request.
                 *
                 * @alias dataproc.projects.regions.workflowTemplates.list
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {integer=} params.pageSize Optional. The maximum number of results to return in each response.
                 * @param {string=} params.pageToken Optional. The page token, returned by a previous call, to request the next page of results.
                 * @param {string} params.parent Required. The "resource name" of the region, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{parent}/workflowTemplates').replace(/([^:]\/)\/+/g, '$1'),
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
                 * dataproc.projects.regions.workflowTemplates.update
                 *
                 * @desc Updates (replaces) workflow template. The updated template must contain version that matches the current server version.
                 *
                 * @alias dataproc.projects.regions.workflowTemplates.update
                 * @memberOf! dataproc(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name Output only. The "resource name" of the template, as described in https://cloud.google.com/apis/design/resource_names of the form projects/{project_id}/regions/{region}/workflowTemplates/{template_id}
                 * @param {dataproc(v1beta2).WorkflowTemplate} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://dataproc.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
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
    };
}
module.exports = Dataproc;
//# sourceMappingURL=v1beta2.js.map