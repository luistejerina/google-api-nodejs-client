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
 * Stackdriver Trace API
 *
 * Send and retrieve trace data from Stackdriver Trace. Data is generated and available by default for all App Engine applications. Data from other applications can be written to Stackdriver Trace for display, reporting, and analysis.

 *
 * @example
 * const google = require('googleapis');
 * const cloudtrace = google.cloudtrace('v2');
 *
 * @namespace cloudtrace
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Cloudtrace
 */
function Cloudtrace(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        traces: {
            /**
             * cloudtrace.projects.traces.batchWrite
             *
             * @desc Sends new spans to Stackdriver Trace or updates existing traces. If the name of a trace that you send matches that of an existing trace, new spans are added to the existing trace. Attempt to update existing spans results undefined behavior. If the name does not match, a new trace is created with given set of spans.
             *
             * @alias cloudtrace.projects.traces.batchWrite
             * @memberOf! cloudtrace(v2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Required. Name of the project where the spans belong. The format is `projects/PROJECT_ID`.
             * @param {cloudtrace(v2).BatchWriteSpansRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            batchWrite: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://cloudtrace.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2/{name}/traces:batchWrite').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            spans: {
                /**
                 * cloudtrace.projects.traces.spans.create
                 *
                 * @desc Creates a new Span.
                 *
                 * @alias cloudtrace.projects.traces.spans.create
                 * @memberOf! cloudtrace(v2)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The resource name of the span in the following format:      projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project. [SPAN_ID] is a unique identifier for a span within a trace, assigned when the span is created.
                 * @param {cloudtrace(v2).Span} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://cloudtrace.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
module.exports = Cloudtrace;
//# sourceMappingURL=v2.js.map