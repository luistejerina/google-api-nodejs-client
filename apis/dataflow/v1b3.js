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
 * Google Dataflow API
 *
 * Manages Google Cloud Dataflow projects on Google Cloud Platform.
 *
 * @example
 * const google = require('googleapis');
 * const dataflow = google.dataflow('v1b3');
 *
 * @namespace dataflow
 * @type {Function}
 * @version v1b3
 * @variation v1b3
 * @param {object=} options Options for Dataflow
 */
function Dataflow(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        /**
         * dataflow.projects.workerMessages
         *
         * @desc Send a worker_message to the service.
         *
         * @alias dataflow.projects.workerMessages
         * @memberOf! dataflow(v1b3)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId The project to send the WorkerMessages to.
         * @param {dataflow(v1b3).SendWorkerMessagesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        workerMessages: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1b3/projects/{projectId}/WorkerMessages').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['projectId'],
                pathParams: ['projectId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        jobs: {
            /**
             * dataflow.projects.jobs.aggregated
             *
             * @desc List the jobs of a project across all regions.
             *
             * @alias dataflow.projects.jobs.aggregated
             * @memberOf! dataflow(v1b3)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.filter The kind of filter to use.
             * @param {string=} params.location The location that contains this job.
             * @param {integer=} params.pageSize If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
             * @param {string=} params.pageToken Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
             * @param {string} params.projectId The project which owns the jobs.
             * @param {string=} params.view Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            aggregated: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1b3/projects/{projectId}/jobs:aggregated').replace(/([^:]\/)\/+/g, '$1'),
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
             * dataflow.projects.jobs.create
             *
             * @desc Creates a Cloud Dataflow job.
             *
             * @alias dataflow.projects.jobs.create
             * @memberOf! dataflow(v1b3)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.location The location that contains this job.
             * @param {string} params.projectId The ID of the Cloud Platform project that the job belongs to.
             * @param {string=} params.replaceJobId Deprecated. This field is now in the Job message.
             * @param {string=} params.view The level of information requested in response.
             * @param {dataflow(v1b3).Job} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1b3/projects/{projectId}/jobs').replace(/([^:]\/)\/+/g, '$1'),
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
             * dataflow.projects.jobs.get
             *
             * @desc Gets the state of the specified Cloud Dataflow job.
             *
             * @alias dataflow.projects.jobs.get
             * @memberOf! dataflow(v1b3)
             *
             * @param {object} params Parameters for request
             * @param {string} params.jobId The job ID.
             * @param {string=} params.location The location that contains this job.
             * @param {string} params.projectId The ID of the Cloud Platform project that the job belongs to.
             * @param {string=} params.view The level of information requested in response.
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
                const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1b3/projects/{projectId}/jobs/{jobId}').replace(/([^:]\/)\/+/g, '$1'),
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
             * dataflow.projects.jobs.getMetrics
             *
             * @desc Request the job status.
             *
             * @alias dataflow.projects.jobs.getMetrics
             * @memberOf! dataflow(v1b3)
             *
             * @param {object} params Parameters for request
             * @param {string} params.jobId The job to get messages for.
             * @param {string=} params.location The location which contains the job specified by job_id.
             * @param {string} params.projectId A project id.
             * @param {string=} params.startTime Return only metric data that has changed since this time. Default is to return all information about all metrics for the job.
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            getMetrics: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1b3/projects/{projectId}/jobs/{jobId}/metrics').replace(/([^:]\/)\/+/g, '$1'),
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
             * dataflow.projects.jobs.list
             *
             * @desc List the jobs of a project in a given region.
             *
             * @alias dataflow.projects.jobs.list
             * @memberOf! dataflow(v1b3)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.filter The kind of filter to use.
             * @param {string=} params.location The location that contains this job.
             * @param {integer=} params.pageSize If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
             * @param {string=} params.pageToken Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
             * @param {string} params.projectId The project which owns the jobs.
             * @param {string=} params.view Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
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
                const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1b3/projects/{projectId}/jobs').replace(/([^:]\/)\/+/g, '$1'),
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
             * dataflow.projects.jobs.update
             *
             * @desc Updates the state of an existing Cloud Dataflow job.
             *
             * @alias dataflow.projects.jobs.update
             * @memberOf! dataflow(v1b3)
             *
             * @param {object} params Parameters for request
             * @param {string} params.jobId The job ID.
             * @param {string=} params.location The location that contains this job.
             * @param {string} params.projectId The ID of the Cloud Platform project that the job belongs to.
             * @param {dataflow(v1b3).Job} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1b3/projects/{projectId}/jobs/{jobId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'jobId'],
                    pathParams: ['jobId', 'projectId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            debug: {
                /**
                 * dataflow.projects.jobs.debug.getConfig
                 *
                 * @desc Get encoded debug configuration for component. Not cacheable.
                 *
                 * @alias dataflow.projects.jobs.debug.getConfig
                 * @memberOf! dataflow(v1b3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.jobId The job id.
                 * @param {string} params.projectId The project id.
                 * @param {dataflow(v1b3).GetDebugConfigRequest} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/jobs/{jobId}/debug/getConfig').replace(/([^:]\/)\/+/g, '$1'),
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
                 * dataflow.projects.jobs.debug.sendCapture
                 *
                 * @desc Send encoded debug capture data for component.
                 *
                 * @alias dataflow.projects.jobs.debug.sendCapture
                 * @memberOf! dataflow(v1b3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.jobId The job id.
                 * @param {string} params.projectId The project id.
                 * @param {dataflow(v1b3).SendDebugCaptureRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                sendCapture: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/jobs/{jobId}/debug/sendCapture').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'jobId'],
                        pathParams: ['jobId', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            messages: {
                /**
                 * dataflow.projects.jobs.messages.list
                 *
                 * @desc Request the job status.
                 *
                 * @alias dataflow.projects.jobs.messages.list
                 * @memberOf! dataflow(v1b3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.endTime Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).
                 * @param {string} params.jobId The job to get messages about.
                 * @param {string=} params.location The location which contains the job specified by job_id.
                 * @param {string=} params.minimumImportance Filter to only get messages with importance >= level
                 * @param {integer=} params.pageSize If specified, determines the maximum number of messages to return.  If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
                 * @param {string=} params.pageToken If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
                 * @param {string} params.projectId A project id.
                 * @param {string=} params.startTime If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).
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
                    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/jobs/{jobId}/messages').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'jobId'],
                        pathParams: ['jobId', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            workItems: {
                /**
                 * dataflow.projects.jobs.workItems.lease
                 *
                 * @desc Leases a dataflow WorkItem to run.
                 *
                 * @alias dataflow.projects.jobs.workItems.lease
                 * @memberOf! dataflow(v1b3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.jobId Identifies the workflow job this worker belongs to.
                 * @param {string} params.projectId Identifies the project this worker belongs to.
                 * @param {dataflow(v1b3).LeaseWorkItemRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                lease: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/jobs/{jobId}/workItems:lease').replace(/([^:]\/)\/+/g, '$1'),
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
                 * dataflow.projects.jobs.workItems.reportStatus
                 *
                 * @desc Reports the status of dataflow WorkItems leased by a worker.
                 *
                 * @alias dataflow.projects.jobs.workItems.reportStatus
                 * @memberOf! dataflow(v1b3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.jobId The job which the WorkItem is part of.
                 * @param {string} params.projectId The project which owns the WorkItem's job.
                 * @param {dataflow(v1b3).ReportWorkItemStatusRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                reportStatus: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/jobs/{jobId}/workItems:reportStatus').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'jobId'],
                        pathParams: ['jobId', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            }
        },
        locations: {
            /**
             * dataflow.projects.locations.workerMessages
             *
             * @desc Send a worker_message to the service.
             *
             * @alias dataflow.projects.locations.workerMessages
             * @memberOf! dataflow(v1b3)
             *
             * @param {object} params Parameters for request
             * @param {string} params.location The location which contains the job
             * @param {string} params.projectId The project to send the WorkerMessages to.
             * @param {dataflow(v1b3).SendWorkerMessagesRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            workerMessages: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1b3/projects/{projectId}/locations/{location}/WorkerMessages').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['projectId', 'location'],
                    pathParams: ['location', 'projectId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            jobs: {
                /**
                 * dataflow.projects.locations.jobs.create
                 *
                 * @desc Creates a Cloud Dataflow job.
                 *
                 * @alias dataflow.projects.locations.jobs.create
                 * @memberOf! dataflow(v1b3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.location The location that contains this job.
                 * @param {string} params.projectId The ID of the Cloud Platform project that the job belongs to.
                 * @param {string=} params.replaceJobId Deprecated. This field is now in the Job message.
                 * @param {string=} params.view The level of information requested in response.
                 * @param {dataflow(v1b3).Job} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/locations/{location}/jobs').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'location'],
                        pathParams: ['location', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataflow.projects.locations.jobs.get
                 *
                 * @desc Gets the state of the specified Cloud Dataflow job.
                 *
                 * @alias dataflow.projects.locations.jobs.get
                 * @memberOf! dataflow(v1b3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.jobId The job ID.
                 * @param {string} params.location The location that contains this job.
                 * @param {string} params.projectId The ID of the Cloud Platform project that the job belongs to.
                 * @param {string=} params.view The level of information requested in response.
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
                    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'location', 'jobId'],
                        pathParams: ['jobId', 'location', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataflow.projects.locations.jobs.getMetrics
                 *
                 * @desc Request the job status.
                 *
                 * @alias dataflow.projects.locations.jobs.getMetrics
                 * @memberOf! dataflow(v1b3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.jobId The job to get messages for.
                 * @param {string} params.location The location which contains the job specified by job_id.
                 * @param {string} params.projectId A project id.
                 * @param {string=} params.startTime Return only metric data that has changed since this time. Default is to return all information about all metrics for the job.
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                getMetrics: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/metrics').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'location', 'jobId'],
                        pathParams: ['jobId', 'location', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataflow.projects.locations.jobs.list
                 *
                 * @desc List the jobs of a project in a given region.
                 *
                 * @alias dataflow.projects.locations.jobs.list
                 * @memberOf! dataflow(v1b3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.filter The kind of filter to use.
                 * @param {string} params.location The location that contains this job.
                 * @param {integer=} params.pageSize If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
                 * @param {string=} params.pageToken Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
                 * @param {string} params.projectId The project which owns the jobs.
                 * @param {string=} params.view Level of information requested in response. Default is `JOB_VIEW_SUMMARY`.
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
                    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/locations/{location}/jobs').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'location'],
                        pathParams: ['location', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataflow.projects.locations.jobs.update
                 *
                 * @desc Updates the state of an existing Cloud Dataflow job.
                 *
                 * @alias dataflow.projects.locations.jobs.update
                 * @memberOf! dataflow(v1b3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.jobId The job ID.
                 * @param {string} params.location The location that contains this job.
                 * @param {string} params.projectId The ID of the Cloud Platform project that the job belongs to.
                 * @param {dataflow(v1b3).Job} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'location', 'jobId'],
                        pathParams: ['jobId', 'location', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                debug: {
                    /**
                     * dataflow.projects.locations.jobs.debug.getConfig
                     *
                     * @desc Get encoded debug configuration for component. Not cacheable.
                     *
                     * @alias dataflow.projects.locations.jobs.debug.getConfig
                     * @memberOf! dataflow(v1b3)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.jobId The job id.
                     * @param {string} params.location The location which contains the job specified by job_id.
                     * @param {string} params.projectId The project id.
                     * @param {dataflow(v1b3).GetDebugConfigRequest} params.resource Request body data
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
                        const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/getConfig').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'location', 'jobId'],
                            pathParams: ['jobId', 'location', 'projectId'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * dataflow.projects.locations.jobs.debug.sendCapture
                     *
                     * @desc Send encoded debug capture data for component.
                     *
                     * @alias dataflow.projects.locations.jobs.debug.sendCapture
                     * @memberOf! dataflow(v1b3)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.jobId The job id.
                     * @param {string} params.location The location which contains the job specified by job_id.
                     * @param {string} params.projectId The project id.
                     * @param {dataflow(v1b3).SendDebugCaptureRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    sendCapture: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/sendCapture').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'location', 'jobId'],
                            pathParams: ['jobId', 'location', 'projectId'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                },
                messages: {
                    /**
                     * dataflow.projects.locations.jobs.messages.list
                     *
                     * @desc Request the job status.
                     *
                     * @alias dataflow.projects.locations.jobs.messages.list
                     * @memberOf! dataflow(v1b3)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.endTime Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).
                     * @param {string} params.jobId The job to get messages about.
                     * @param {string} params.location The location which contains the job specified by job_id.
                     * @param {string=} params.minimumImportance Filter to only get messages with importance >= level
                     * @param {integer=} params.pageSize If specified, determines the maximum number of messages to return.  If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
                     * @param {string=} params.pageToken If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
                     * @param {string} params.projectId A project id.
                     * @param {string=} params.startTime If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).
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
                        const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/messages').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'location', 'jobId'],
                            pathParams: ['jobId', 'location', 'projectId'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                },
                workItems: {
                    /**
                     * dataflow.projects.locations.jobs.workItems.lease
                     *
                     * @desc Leases a dataflow WorkItem to run.
                     *
                     * @alias dataflow.projects.locations.jobs.workItems.lease
                     * @memberOf! dataflow(v1b3)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.jobId Identifies the workflow job this worker belongs to.
                     * @param {string} params.location The location which contains the WorkItem's job.
                     * @param {string} params.projectId Identifies the project this worker belongs to.
                     * @param {dataflow(v1b3).LeaseWorkItemRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    lease: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:lease').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'location', 'jobId'],
                            pathParams: ['jobId', 'location', 'projectId'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * dataflow.projects.locations.jobs.workItems.reportStatus
                     *
                     * @desc Reports the status of dataflow WorkItems leased by a worker.
                     *
                     * @alias dataflow.projects.locations.jobs.workItems.reportStatus
                     * @memberOf! dataflow(v1b3)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.jobId The job which the WorkItem is part of.
                     * @param {string} params.location The location which contains the WorkItem's job.
                     * @param {string} params.projectId The project which owns the WorkItem's job.
                     * @param {dataflow(v1b3).ReportWorkItemStatusRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    reportStatus: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:reportStatus').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['projectId', 'location', 'jobId'],
                            pathParams: ['jobId', 'location', 'projectId'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                }
            },
            templates: {
                /**
                 * dataflow.projects.locations.templates.create
                 *
                 * @desc Creates a Cloud Dataflow job from a template.
                 *
                 * @alias dataflow.projects.locations.templates.create
                 * @memberOf! dataflow(v1b3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.location The location to which to direct the request.
                 * @param {string} params.projectId Required. The ID of the Cloud Platform project that the job belongs to.
                 * @param {dataflow(v1b3).CreateJobFromTemplateRequest} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/locations/{location}/templates').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'location'],
                        pathParams: ['location', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataflow.projects.locations.templates.get
                 *
                 * @desc Get the template associated with a template.
                 *
                 * @alias dataflow.projects.locations.templates.get
                 * @memberOf! dataflow(v1b3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.gcsPath Required. A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with `gs://`.
                 * @param {string} params.location The location to which to direct the request.
                 * @param {string} params.projectId Required. The ID of the Cloud Platform project that the job belongs to.
                 * @param {string=} params.view The view to retrieve. Defaults to METADATA_ONLY.
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
                    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/locations/{location}/templates:get').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'location'],
                        pathParams: ['location', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * dataflow.projects.locations.templates.launch
                 *
                 * @desc Launch a template.
                 *
                 * @alias dataflow.projects.locations.templates.launch
                 * @memberOf! dataflow(v1b3)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.gcsPath Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.
                 * @param {string} params.location The location to which to direct the request.
                 * @param {string} params.projectId Required. The ID of the Cloud Platform project that the job belongs to.
                 * @param {boolean=} params.validateOnly If true, the request is validated but not actually executed. Defaults to false.
                 * @param {dataflow(v1b3).LaunchTemplateParameters} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                launch: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1b3/projects/{projectId}/locations/{location}/templates:launch').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['projectId', 'location'],
                        pathParams: ['location', 'projectId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            }
        },
        templates: {
            /**
             * dataflow.projects.templates.create
             *
             * @desc Creates a Cloud Dataflow job from a template.
             *
             * @alias dataflow.projects.templates.create
             * @memberOf! dataflow(v1b3)
             *
             * @param {object} params Parameters for request
             * @param {string} params.projectId Required. The ID of the Cloud Platform project that the job belongs to.
             * @param {dataflow(v1b3).CreateJobFromTemplateRequest} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1b3/projects/{projectId}/templates').replace(/([^:]\/)\/+/g, '$1'),
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
             * dataflow.projects.templates.get
             *
             * @desc Get the template associated with a template.
             *
             * @alias dataflow.projects.templates.get
             * @memberOf! dataflow(v1b3)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.gcsPath Required. A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with `gs://`.
             * @param {string=} params.location The location to which to direct the request.
             * @param {string} params.projectId Required. The ID of the Cloud Platform project that the job belongs to.
             * @param {string=} params.view The view to retrieve. Defaults to METADATA_ONLY.
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
                const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1b3/projects/{projectId}/templates:get').replace(/([^:]\/)\/+/g, '$1'),
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
             * dataflow.projects.templates.launch
             *
             * @desc Launch a template.
             *
             * @alias dataflow.projects.templates.launch
             * @memberOf! dataflow(v1b3)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.gcsPath Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.
             * @param {string=} params.location The location to which to direct the request.
             * @param {string} params.projectId Required. The ID of the Cloud Platform project that the job belongs to.
             * @param {boolean=} params.validateOnly If true, the request is validated but not actually executed. Defaults to false.
             * @param {dataflow(v1b3).LaunchTemplateParameters} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            launch: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://dataflow.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1b3/projects/{projectId}/templates:launch').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['projectId'],
                    pathParams: ['projectId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
}
module.exports = Dataflow;
//# sourceMappingURL=v1b3.js.map