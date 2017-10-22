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
 * Genomics API
 *
 * Upload, process, query, and search Genomics data in the cloud.
 *
 * @example
 * const google = require('googleapis');
 * const genomics = google.genomics('v1');
 *
 * @namespace genomics
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Genomics
 */
function Genomics(options) {
    const self = this;
    self._options = options || {};
    self.annotations = {
        /**
         * genomics.annotations.batchCreate
         *
         * @desc Creates one or more new annotations atomically. All annotations must belong to the same annotation set. Caller must have WRITE permission for this annotation set. For optimal performance, batch positionally adjacent annotations together.  If the request has a systemic issue, such as an attempt to write to an inaccessible annotation set, the entire RPC will fail accordingly. For lesser data issues, when possible an error will be isolated to the corresponding batch entry in the response; the remaining well formed annotations will be created normally.  For details on the requirements for each individual annotation resource, see CreateAnnotation.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
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
         *   genomics.annotations.batchCreate(request, function(err, response) {
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
         * @alias genomics.annotations.batchCreate
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).BatchCreateAnnotationsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchCreate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotations:batchCreate').replace(/([^:]\/)\/+/g, '$1'),
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
         * genomics.annotations.create
         *
         * @desc Creates a new annotation. Caller must have WRITE permission for the associated annotation set.  The following fields are required:  * annotationSetId * referenceName or   referenceId  ### Transcripts  For annotations of type TRANSCRIPT, the following fields of transcript must be provided:  * exons.start * exons.end  All other fields may be optionally specified, unless documented as being server-generated (for example, the `id` field). The annotated range must be no longer than 100Mbp (mega base pairs). See the Annotation resource for additional restrictions on each field.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
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
         *   genomics.annotations.create(request, function(err, response) {
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
         * @alias genomics.annotations.create
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).Annotation} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotations').replace(/([^:]\/)\/+/g, '$1'),
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
         * genomics.annotations.delete
         *
         * @desc Deletes an annotation. Caller must have WRITE permission for the associated annotation set.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the annotation to be deleted.
         *     annotationId: 'my-annotation-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.annotations.delete(request, function(err) {
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
         * @alias genomics.annotations.delete
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.annotationId The ID of the annotation to be deleted.
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotations/{annotationId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['annotationId'],
                pathParams: ['annotationId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.annotations.get
         *
         * @desc Gets an annotation. Caller must have READ permission for the associated annotation set.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the annotation to be retrieved.
         *     annotationId: 'my-annotation-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.annotations.get(request, function(err, response) {
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
         * @alias genomics.annotations.get
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.annotationId The ID of the annotation to be retrieved.
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotations/{annotationId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['annotationId'],
                pathParams: ['annotationId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.annotations.search
         *
         * @desc Searches for annotations that match the given criteria. Results are ordered by genomic coordinate (by reference sequence, then position). Annotations with equivalent genomic coordinates are returned in an unspecified order. This order is consistent, such that two queries for the same content (regardless of page size) yield annotations in the same order across their respective streams of paginated responses. Caller must have READ permission for the queried annotation sets.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
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
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var annotationsPage = response['annotations'];
         *     if (!annotationsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < annotationsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `annotationsPage`:
         *       console.log(JSON.stringify(annotationsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.resource.pageToken = response.nextPageToken;
         *       genomics.annotations.search(request, handlePage);
         *     }
         *   };
         *
         *   genomics.annotations.search(request, handlePage);
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
         * @alias genomics.annotations.search
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).SearchAnnotationsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotations/search').replace(/([^:]\/)\/+/g, '$1'),
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
         * genomics.annotations.update
         *
         * @desc Updates an annotation. Caller must have WRITE permission for the associated dataset.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the annotation to be updated.
         *     annotationId: 'my-annotation-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. All existing properties
         *       // will be replaced.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.annotations.update(request, function(err, response) {
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
         * @alias genomics.annotations.update
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.annotationId The ID of the annotation to be updated.
         * @param {string=} params.updateMask An optional mask specifying which fields to update. Mutable fields are name, variant, transcript, and info. If unspecified, all mutable fields will be updated.
         * @param {genomics(v1).Annotation} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotations/{annotationId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['annotationId'],
                pathParams: ['annotationId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.annotationsets = {
        /**
         * genomics.annotationsets.create
         *
         * @desc Creates a new annotation set. Caller must have WRITE permission for the associated dataset.  The following fields are required:    * datasetId   * referenceSetId  All other fields may be optionally specified, unless documented as being server-generated (for example, the `id` field).
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
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
         *   genomics.annotationsets.create(request, function(err, response) {
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
         * @alias genomics.annotationsets.create
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).AnnotationSet} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotationsets').replace(/([^:]\/)\/+/g, '$1'),
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
         * genomics.annotationsets.delete
         *
         * @desc Deletes an annotation set. Caller must have WRITE permission for the associated annotation set.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the annotation set to be deleted.
         *     annotationSetId: 'my-annotation-set-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.annotationsets.delete(request, function(err) {
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
         * @alias genomics.annotationsets.delete
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.annotationSetId The ID of the annotation set to be deleted.
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotationsets/{annotationSetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['annotationSetId'],
                pathParams: ['annotationSetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.annotationsets.get
         *
         * @desc Gets an annotation set. Caller must have READ permission for the associated dataset.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the annotation set to be retrieved.
         *     annotationSetId: 'my-annotation-set-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.annotationsets.get(request, function(err, response) {
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
         * @alias genomics.annotationsets.get
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.annotationSetId The ID of the annotation set to be retrieved.
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotationsets/{annotationSetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['annotationSetId'],
                pathParams: ['annotationSetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.annotationsets.search
         *
         * @desc Searches for annotation sets that match the given criteria. Annotation sets are returned in an unspecified order. This order is consistent, such that two queries for the same content (regardless of page size) yield annotation sets in the same order across their respective streams of paginated responses. Caller must have READ permission for the queried datasets.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
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
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var annotationSetsPage = response['annotationSets'];
         *     if (!annotationSetsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < annotationSetsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `annotationSetsPage`:
         *       console.log(JSON.stringify(annotationSetsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.resource.pageToken = response.nextPageToken;
         *       genomics.annotationsets.search(request, handlePage);
         *     }
         *   };
         *
         *   genomics.annotationsets.search(request, handlePage);
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
         * @alias genomics.annotationsets.search
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).SearchAnnotationSetsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotationsets/search').replace(/([^:]\/)\/+/g, '$1'),
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
         * genomics.annotationsets.update
         *
         * @desc Updates an annotation set. The update must respect all mutability restrictions and other invariants described on the annotation set resource. Caller must have WRITE permission for the associated dataset.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the annotation set to be updated.
         *     annotationSetId: 'my-annotation-set-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. All existing properties
         *       // will be replaced.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.annotationsets.update(request, function(err, response) {
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
         * @alias genomics.annotationsets.update
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.annotationSetId The ID of the annotation set to be updated.
         * @param {string=} params.updateMask An optional mask specifying which fields to update. Mutable fields are name, source_uri, and info. If unspecified, all mutable fields will be updated.
         * @param {genomics(v1).AnnotationSet} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/annotationsets/{annotationSetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['annotationSetId'],
                pathParams: ['annotationSetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.callsets = {
        /**
         * genomics.callsets.create
         *
         * @desc Creates a new call set.  For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
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
         *   genomics.callsets.create(request, function(err, response) {
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
         * @alias genomics.callsets.create
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).CallSet} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/callsets').replace(/([^:]\/)\/+/g, '$1'),
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
         * genomics.callsets.delete
         *
         * @desc Deletes a call set.  For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the call set to be deleted.
         *     callSetId: 'my-call-set-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.callsets.delete(request, function(err) {
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
         * @alias genomics.callsets.delete
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.callSetId The ID of the call set to be deleted.
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/callsets/{callSetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['callSetId'],
                pathParams: ['callSetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.callsets.get
         *
         * @desc Gets a call set by ID.  For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the call set.
         *     callSetId: 'my-call-set-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.callsets.get(request, function(err, response) {
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
         * @alias genomics.callsets.get
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.callSetId The ID of the call set.
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/callsets/{callSetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['callSetId'],
                pathParams: ['callSetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.callsets.patch
         *
         * @desc Updates a call set.  For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the call set to be updated.
         *     callSetId: 'my-call-set-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. Only these properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.callsets.patch(request, function(err, response) {
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
         * @alias genomics.callsets.patch
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.callSetId The ID of the call set to be updated.
         * @param {string=} params.updateMask An optional mask specifying which fields to update. At this time, the only mutable field is name. The only acceptable value is "name". If unspecified, all mutable fields will be updated.
         * @param {genomics(v1).CallSet} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/callsets/{callSetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['callSetId'],
                pathParams: ['callSetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.callsets.search
         *
         * @desc Gets a list of call sets matching the criteria.  For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Implements [GlobalAllianceApi.searchCallSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L178).
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
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
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var callSetsPage = response['callSets'];
         *     if (!callSetsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < callSetsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `callSetsPage`:
         *       console.log(JSON.stringify(callSetsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.resource.pageToken = response.nextPageToken;
         *       genomics.callsets.search(request, handlePage);
         *     }
         *   };
         *
         *   genomics.callsets.search(request, handlePage);
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
         * @alias genomics.callsets.search
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).SearchCallSetsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/callsets/search').replace(/([^:]\/)\/+/g, '$1'),
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
    self.datasets = {
        /**
         * genomics.datasets.create
         *
         * @desc Creates a new dataset.  For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
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
         *   genomics.datasets.create(request, function(err, response) {
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
         * @alias genomics.datasets.create
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).Dataset} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/datasets').replace(/([^:]\/)\/+/g, '$1'),
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
         * genomics.datasets.delete
         *
         * @desc Deletes a dataset and all of its contents (all read group sets, reference sets, variant sets, call sets, annotation sets, etc.) This is reversible (up to one week after the deletion) via the datasets.undelete operation.  For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the dataset to be deleted.
         *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.datasets.delete(request, function(err) {
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
         * @alias genomics.datasets.delete
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datasetId The ID of the dataset to be deleted.
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/datasets/{datasetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['datasetId'],
                pathParams: ['datasetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.datasets.get
         *
         * @desc Gets a dataset by ID.  For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the dataset.
         *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.datasets.get(request, function(err, response) {
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
         * @alias genomics.datasets.get
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datasetId The ID of the dataset.
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/datasets/{datasetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['datasetId'],
                pathParams: ['datasetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.datasets.getIamPolicy
         *
         * @desc Gets the access control policy for the dataset. This is empty if the policy or resource does not exist.  See <a href="/iam/docs/managing-policies#getting_a_policy">Getting a Policy</a> for more information.  For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // REQUIRED: The resource for which policy is being specified. Format is
         *     // `datasets/<dataset ID>`.
         *     resource_: 'datasets/my-dataset',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.datasets.getIamPolicy(request, function(err, response) {
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
         * @alias genomics.datasets.getIamPolicy
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which policy is being specified. Format is `datasets/<dataset ID>`.
         * @param {genomics(v1).GetIamPolicyRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
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
         * genomics.datasets.list
         *
         * @desc Lists datasets within a project.  For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     auth: authClient,
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var datasetsPage = response['datasets'];
         *     if (!datasetsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < datasetsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `datasetsPage`:
         *       console.log(JSON.stringify(datasetsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       genomics.datasets.list(request, handlePage);
         *     }
         *   };
         *
         *   genomics.datasets.list(request, handlePage);
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
         * @alias genomics.datasets.list
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of results to return in a single page. If unspecified, defaults to 50. The maximum value is 1024.
         * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
         * @param {string=} params.projectId Required. The Google Cloud project ID to list datasets for.
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/datasets').replace(/([^:]\/)\/+/g, '$1'),
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
         * genomics.datasets.patch
         *
         * @desc Updates a dataset.  For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the dataset to be updated.
         *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. Only these properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.datasets.patch(request, function(err, response) {
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
         * @alias genomics.datasets.patch
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datasetId The ID of the dataset to be updated.
         * @param {string=} params.updateMask An optional mask specifying which fields to update. At this time, the only mutable field is name. The only acceptable value is "name". If unspecified, all mutable fields will be updated.
         * @param {genomics(v1).Dataset} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/datasets/{datasetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['datasetId'],
                pathParams: ['datasetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.datasets.setIamPolicy
         *
         * @desc Sets the access control policy on the specified dataset. Replaces any existing policy.  For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  See <a href="/iam/docs/managing-policies#setting_a_policy">Setting a Policy</a> for more information.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // REQUIRED: The resource for which policy is being specified. Format is
         *     // `datasets/<dataset ID>`.
         *     resource_: 'datasets/my-dataset',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.datasets.setIamPolicy(request, function(err, response) {
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
         * @alias genomics.datasets.setIamPolicy
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which policy is being specified. Format is `datasets/<dataset ID>`.
         * @param {genomics(v1).SetIamPolicyRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
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
         * genomics.datasets.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified resource. See <a href="/iam/docs/managing-policies#testing_permissions">Testing Permissions</a> for more information.  For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // REQUIRED: The resource for which policy is being specified. Format is
         *     // `datasets/<dataset ID>`.
         *     resource_: 'datasets/my-dataset',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.datasets.testIamPermissions(request, function(err, response) {
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
         * @alias genomics.datasets.testIamPermissions
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which policy is being specified. Format is `datasets/<dataset ID>`.
         * @param {genomics(v1).TestIamPermissionsRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
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
         * genomics.datasets.undelete
         *
         * @desc Undeletes a dataset by restoring a dataset which was deleted via this API.  For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  This operation is only possible for a week after the deletion occurred.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the dataset to be undeleted.
         *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.datasets.undelete(request, function(err, response) {
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
         * @alias genomics.datasets.undelete
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.datasetId The ID of the dataset to be undeleted.
         * @param {genomics(v1).UndeleteDatasetRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/datasets/{datasetId}:undelete').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['datasetId'],
                pathParams: ['datasetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.operations = {
        /**
         * genomics.operations.cancel
         *
         * @desc Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The name of the operation resource to be cancelled.
         *     name: 'operations/my-operation',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.operations.cancel(request, function(err) {
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
         * @alias genomics.operations.cancel
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource to be cancelled.
         * @param {genomics(v1).CancelOperationRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
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
         * genomics.operations.get
         *
         * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The name of the operation resource.
         *     name: 'operations/my-operation',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.operations.get(request, function(err, response) {
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
         * @alias genomics.operations.get
         * @memberOf! genomics(v1)
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
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
         * genomics.operations.list
         *
         * @desc Lists operations that match the specified filter in the request.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The name of the operation's parent resource.
         *     name: 'operations',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var operationsPage = response['operations'];
         *     if (!operationsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < operationsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `operationsPage`:
         *       console.log(JSON.stringify(operationsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       genomics.operations.list(request, handlePage);
         *     }
         *   };
         *
         *   genomics.operations.list(request, handlePage);
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
         * @alias genomics.operations.list
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter A string for filtering Operations. The following filter fields are supported&#58;  * projectId&#58; Required. Corresponds to   OperationMetadata.projectId. * createTime&#58; The time this job was created, in seconds from the   [epoch](http://en.wikipedia.org/wiki/Unix_time). Can use `>=` and/or `<=`   operators. * status&#58; Can be `RUNNING`, `SUCCESS`, `FAILURE`, or `CANCELED`. Only   one status may be specified. * labels.key where key is a label key.  Examples&#58;  * `projectId = my-project AND createTime >= 1432140000` * `projectId = my-project AND createTime >= 1432140000 AND createTime <= 1432150000 AND status = RUNNING` * `projectId = my-project AND labels.color = *` * `projectId = my-project AND labels.color = red`
         * @param {string} params.name The name of the operation's parent resource.
         * @param {integer=} params.pageSize The maximum number of results to return. If unspecified, defaults to 256. The maximum value is 2048.
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
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
    self.readgroupsets = {
        /**
         * genomics.readgroupsets.delete
         *
         * @desc Deletes a read group set.  For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the read group set to be deleted. The caller must have WRITE
         *     // permissions to the dataset associated with this read group set.
         *     readGroupSetId: 'my-read-group-set-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.readgroupsets.delete(request, function(err) {
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
         * @alias genomics.readgroupsets.delete
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.readGroupSetId The ID of the read group set to be deleted. The caller must have WRITE permissions to the dataset associated with this read group set.
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/readgroupsets/{readGroupSetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['readGroupSetId'],
                pathParams: ['readGroupSetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.readgroupsets.export
         *
         * @desc Exports a read group set to a BAM file in Google Cloud Storage.  For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Note that currently there may be some differences between exported BAM files and the original BAM file at the time of import. See ImportReadGroupSets for caveats.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Required. The ID of the read group set to export. The caller must have
         *     // READ access to this read group set.
         *     readGroupSetId: 'my-read-group-set-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.readgroupsets.export(request, function(err, response) {
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
         * @alias genomics.readgroupsets.export
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.readGroupSetId Required. The ID of the read group set to export. The caller must have READ access to this read group set.
         * @param {genomics(v1).ExportReadGroupSetRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        export: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/readgroupsets/{readGroupSetId}:export').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['readGroupSetId'],
                pathParams: ['readGroupSetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.readgroupsets.get
         *
         * @desc Gets a read group set by ID.  For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the read group set.
         *     readGroupSetId: 'my-read-group-set-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.readgroupsets.get(request, function(err, response) {
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
         * @alias genomics.readgroupsets.get
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.readGroupSetId The ID of the read group set.
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/readgroupsets/{readGroupSetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['readGroupSetId'],
                pathParams: ['readGroupSetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.readgroupsets.import
         *
         * @desc Creates read group sets by asynchronously importing the provided information.  For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  The caller must have WRITE permissions to the dataset.  ## Notes on [BAM](https://samtools.github.io/hts-specs/SAMv1.pdf) import  - Tags will be converted to strings - tag types are not preserved - Comments (`@CO`) in the input file header will not be preserved - Original header order of references (`@SQ`) will not be preserved - Any reverse stranded unmapped reads will be reverse complemented, and their qualities (also the "BQ" and "OQ" tags, if any) will be reversed - Unmapped reads will be stripped of positional information (reference name and position)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
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
         *   genomics.readgroupsets.import(request, function(err, response) {
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
         * @alias genomics.readgroupsets.import
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).ImportReadGroupSetsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        import: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/readgroupsets:import').replace(/([^:]\/)\/+/g, '$1'),
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
         * genomics.readgroupsets.patch
         *
         * @desc Updates a read group set.  For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  This method supports patch semantics.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the read group set to be updated. The caller must have WRITE
         *     // permissions to the dataset associated with this read group set.
         *     readGroupSetId: 'my-read-group-set-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. Only these properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.readgroupsets.patch(request, function(err, response) {
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
         * @alias genomics.readgroupsets.patch
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.readGroupSetId The ID of the read group set to be updated. The caller must have WRITE permissions to the dataset associated with this read group set.
         * @param {string=} params.updateMask An optional mask specifying which fields to update. Supported fields:  * name. * referenceSetId.  Leaving `updateMask` unset is equivalent to specifying all mutable fields.
         * @param {genomics(v1).ReadGroupSet} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/readgroupsets/{readGroupSetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['readGroupSetId'],
                pathParams: ['readGroupSetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.readgroupsets.search
         *
         * @desc Searches for read group sets matching the criteria.  For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Implements [GlobalAllianceApi.searchReadGroupSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/readmethods.avdl#L135).
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
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
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var readGroupSetsPage = response['readGroupSets'];
         *     if (!readGroupSetsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < readGroupSetsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `readGroupSetsPage`:
         *       console.log(JSON.stringify(readGroupSetsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.resource.pageToken = response.nextPageToken;
         *       genomics.readgroupsets.search(request, handlePage);
         *     }
         *   };
         *
         *   genomics.readgroupsets.search(request, handlePage);
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
         * @alias genomics.readgroupsets.search
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).SearchReadGroupSetsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/readgroupsets/search').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        coveragebuckets: {
            /**
             * genomics.readgroupsets.coveragebuckets.list
             *
             * @desc Lists fixed width coverage buckets for a read group set, each of which correspond to a range of a reference sequence. Each bucket summarizes coverage information across its corresponding genomic range.  For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Coverage is defined as the number of reads which are aligned to a given base in the reference sequence. Coverage buckets are available at several precomputed bucket widths, enabling retrieval of various coverage 'zoom levels'. The caller must have READ permissions for the target read group set.
             *
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Genomics API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/genomics
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
             * var genomics = google.genomics('v1');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // Required. The ID of the read group set over which coverage is requested.
             *     readGroupSetId: 'my-read-group-set-id',  // TODO: Update placeholder value.
             *
             *     auth: authClient,
             *   };
             *
             *   var handlePage = function(err, response) {
             *     if (err) {
             *       console.error(err);
             *       return;
             *     }
             *
             *     var coverageBucketsPage = response['coverageBuckets'];
             *     if (!coverageBucketsPage) {
             *       return;
             *     }
             *     for (var i = 0; i < coverageBucketsPage.length; i++) {
             *       // TODO: Change code below to process each resource in `coverageBucketsPage`:
             *       console.log(JSON.stringify(coverageBucketsPage[i], null, 2));
             *     }
             *
             *     if (response.nextPageToken) {
             *       request.pageToken = response.nextPageToken;
             *       genomics.readgroupsets.coveragebuckets.list(request, handlePage);
             *     }
             *   };
             *
             *   genomics.readgroupsets.coveragebuckets.list(request, handlePage);
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
             * @alias genomics.readgroupsets.coveragebuckets.list
             * @memberOf! genomics(v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.end The end position of the range on the reference, 0-based exclusive. If specified, `referenceName` must also be specified. If unset or 0, defaults to the length of the reference.
             * @param {integer=} params.pageSize The maximum number of results to return in a single page. If unspecified, defaults to 1024. The maximum value is 2048.
             * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
             * @param {string} params.readGroupSetId Required. The ID of the read group set over which coverage is requested.
             * @param {string=} params.referenceName The name of the reference to query, within the reference set associated with this query. Optional.
             * @param {string=} params.start The start position of the range on the reference, 0-based inclusive. If specified, `referenceName` must also be specified. Defaults to 0.
             * @param {string=} params.targetBucketWidth The desired width of each reported coverage bucket in base pairs. This will be rounded down to the nearest precomputed bucket width; the value of which is returned as `bucketWidth` in the response. Defaults to infinity (each bucket spans an entire reference sequence) or the length of the target range, if specified. The smallest precomputed `bucketWidth` is currently 2048 base pairs; this is subject to change.
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
                const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/readgroupsets/{readGroupSetId}/coveragebuckets').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['readGroupSetId'],
                    pathParams: ['readGroupSetId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
    self.reads = {
        /**
         * genomics.reads.search
         *
         * @desc Gets a list of reads for one or more read group sets.  For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Reads search operates over a genomic coordinate space of reference sequence & position defined over the reference sequences to which the requested read group sets are aligned.  If a target positional range is specified, search returns all reads whose alignment to the reference genome overlap the range. A query which specifies only read group set IDs yields all reads in those read group sets, including unmapped reads.  All reads returned (including reads on subsequent pages) are ordered by genomic coordinate (by reference sequence, then position). Reads with equivalent genomic coordinates are returned in an unspecified order. This order is consistent, such that two queries for the same content (regardless of page size) yield reads in the same order across their respective streams of paginated responses.  Implements [GlobalAllianceApi.searchReads](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/readmethods.avdl#L85).
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
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
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var alignmentsPage = response['alignments'];
         *     if (!alignmentsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < alignmentsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `alignmentsPage`:
         *       console.log(JSON.stringify(alignmentsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.resource.pageToken = response.nextPageToken;
         *       genomics.reads.search(request, handlePage);
         *     }
         *   };
         *
         *   genomics.reads.search(request, handlePage);
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
         * @alias genomics.reads.search
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).SearchReadsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/reads/search').replace(/([^:]\/)\/+/g, '$1'),
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
    self.references = {
        /**
         * genomics.references.get
         *
         * @desc Gets a reference.  For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Implements [GlobalAllianceApi.getReference](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L158).
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the reference.
         *     referenceId: 'my-reference-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.references.get(request, function(err, response) {
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
         * @alias genomics.references.get
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.referenceId The ID of the reference.
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/references/{referenceId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['referenceId'],
                pathParams: ['referenceId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.references.search
         *
         * @desc Searches for references which match the given criteria.  For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Implements [GlobalAllianceApi.searchReferences](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L146).
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
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
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var referencesPage = response['references'];
         *     if (!referencesPage) {
         *       return;
         *     }
         *     for (var i = 0; i < referencesPage.length; i++) {
         *       // TODO: Change code below to process each resource in `referencesPage`:
         *       console.log(JSON.stringify(referencesPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.resource.pageToken = response.nextPageToken;
         *       genomics.references.search(request, handlePage);
         *     }
         *   };
         *
         *   genomics.references.search(request, handlePage);
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
         * @alias genomics.references.search
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).SearchReferencesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/references/search').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        bases: {
            /**
             * genomics.references.bases.list
             *
             * @desc Lists the bases in a reference, optionally restricted to a range.  For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Implements [GlobalAllianceApi.getReferenceBases](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L221).
             *
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Genomics API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/genomics
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
             * var genomics = google.genomics('v1');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The ID of the reference.
             *     referenceId: 'my-reference-id',  // TODO: Update placeholder value.
             *
             *     auth: authClient,
             *   };
             *
             *   var handlePage = function(err, response) {
             *     if (err) {
             *       console.error(err);
             *       return;
             *     }
             *
             *     var nextPageTokenPage = response['nextPageToken'];
             *     if (!nextPageTokenPage) {
             *       return;
             *     }
             *     // TODO: Change code below to process each `nextPageTokenPage` resource:
             *     console.log(nextPageTokenPage);
             *
             *     if (response.nextPageToken) {
             *       request.pageToken = response.nextPageToken;
             *       genomics.references.bases.list(request, handlePage);
             *     }
             *   };
             *
             *   genomics.references.bases.list(request, handlePage);
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
             * @alias genomics.references.bases.list
             * @memberOf! genomics(v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.end The end position (0-based, exclusive) of this query. Defaults to the length of this reference.
             * @param {integer=} params.pageSize The maximum number of bases to return in a single page. If unspecified, defaults to 200Kbp (kilo base pairs). The maximum value is 10Mbp (mega base pairs).
             * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
             * @param {string} params.referenceId The ID of the reference.
             * @param {string=} params.start The start position (0-based) of this query. Defaults to 0.
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
                const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/references/{referenceId}/bases').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['referenceId'],
                    pathParams: ['referenceId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
    self.referencesets = {
        /**
         * genomics.referencesets.get
         *
         * @desc Gets a reference set.  For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Implements [GlobalAllianceApi.getReferenceSet](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L83).
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the reference set.
         *     referenceSetId: 'my-reference-set-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.referencesets.get(request, function(err, response) {
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
         * @alias genomics.referencesets.get
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.referenceSetId The ID of the reference set.
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/referencesets/{referenceSetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['referenceSetId'],
                pathParams: ['referenceSetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.referencesets.search
         *
         * @desc Searches for reference sets which match the given criteria.  For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Implements [GlobalAllianceApi.searchReferenceSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L71)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
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
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var referenceSetsPage = response['referenceSets'];
         *     if (!referenceSetsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < referenceSetsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `referenceSetsPage`:
         *       console.log(JSON.stringify(referenceSetsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.resource.pageToken = response.nextPageToken;
         *       genomics.referencesets.search(request, handlePage);
         *     }
         *   };
         *
         *   genomics.referencesets.search(request, handlePage);
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
         * @alias genomics.referencesets.search
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).SearchReferenceSetsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/referencesets/search').replace(/([^:]\/)\/+/g, '$1'),
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
    self.variants = {
        /**
         * genomics.variants.create
         *
         * @desc Creates a new variant.  For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
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
         *   genomics.variants.create(request, function(err, response) {
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
         * @alias genomics.variants.create
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).Variant} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variants').replace(/([^:]\/)\/+/g, '$1'),
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
         * genomics.variants.delete
         *
         * @desc Deletes a variant.  For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the variant to be deleted.
         *     variantId: 'my-variant-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.variants.delete(request, function(err) {
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
         * @alias genomics.variants.delete
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.variantId The ID of the variant to be deleted.
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variants/{variantId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['variantId'],
                pathParams: ['variantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.variants.get
         *
         * @desc Gets a variant by ID.  For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the variant.
         *     variantId: 'my-variant-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.variants.get(request, function(err, response) {
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
         * @alias genomics.variants.get
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.variantId The ID of the variant.
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variants/{variantId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['variantId'],
                pathParams: ['variantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.variants.import
         *
         * @desc Creates variant data by asynchronously importing the provided information.  For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  The variants for import will be merged with any existing variant that matches its reference sequence, start, end, reference bases, and alternative bases. If no such variant exists, a new one will be created.  When variants are merged, the call information from the new variant is added to the existing variant, and Variant info fields are merged as specified in infoMergeConfig. As a special case, for single-sample VCF files, QUAL and FILTER fields will be moved to the call level; these are sometimes interpreted in a call-specific context. Imported VCF headers are appended to the metadata already in a variant set.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
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
         *   genomics.variants.import(request, function(err, response) {
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
         * @alias genomics.variants.import
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).ImportVariantsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        import: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variants:import').replace(/([^:]\/)\/+/g, '$1'),
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
         * genomics.variants.merge
         *
         * @desc Merges the given variants with existing variants.  For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Each variant will be merged with an existing variant that matches its reference sequence, start, end, reference bases, and alternative bases. If no such variant exists, a new one will be created.  When variants are merged, the call information from the new variant is added to the existing variant. Variant info fields are merged as specified in the infoMergeConfig field of the MergeVariantsRequest.  Please exercise caution when using this method!  It is easy to introduce mistakes in existing variants and difficult to back out of them.  For example, suppose you were trying to merge a new variant with an existing one and both variants contain calls that belong to callsets with the same callset ID.      // Existing variant - irrelevant fields trimmed for clarity     {         "variantSetId": "10473108253681171589",         "referenceName": "1",         "start": "10582",         "referenceBases": "G",         "alternateBases": [             "A"         ],         "calls": [             {                 "callSetId": "10473108253681171589-0",                 "callSetName": "CALLSET0",                 "genotype": [                     0,                     1                 ],             }         ]     }      // New variant with conflicting call information     {         "variantSetId": "10473108253681171589",         "referenceName": "1",         "start": "10582",         "referenceBases": "G",         "alternateBases": [             "A"         ],         "calls": [             {                 "callSetId": "10473108253681171589-0",                 "callSetName": "CALLSET0",                 "genotype": [                     1,                     1                 ],             }         ]     }  The resulting merged variant would overwrite the existing calls with those from the new variant:      {         "variantSetId": "10473108253681171589",         "referenceName": "1",         "start": "10582",         "referenceBases": "G",         "alternateBases": [             "A"         ],         "calls": [             {                 "callSetId": "10473108253681171589-0",                 "callSetName": "CALLSET0",                 "genotype": [                     1,                     1                 ],             }         ]     }  This may be the desired outcome, but it is up to the user to determine if if that is indeed the case.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
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
         *   genomics.variants.merge(request, function(err) {
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
         * @alias genomics.variants.merge
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).MergeVariantsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        merge: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variants:merge').replace(/([^:]\/)\/+/g, '$1'),
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
         * genomics.variants.patch
         *
         * @desc Updates a variant.  For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  This method supports patch semantics. Returns the modified variant without its calls.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the variant to be updated.
         *     variantId: 'my-variant-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. Only these properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.variants.patch(request, function(err, response) {
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
         * @alias genomics.variants.patch
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.updateMask An optional mask specifying which fields to update. At this time, mutable fields are names and info. Acceptable values are "names" and "info". If unspecified, all mutable fields will be updated.
         * @param {string} params.variantId The ID of the variant to be updated.
         * @param {genomics(v1).Variant} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variants/{variantId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['variantId'],
                pathParams: ['variantId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.variants.search
         *
         * @desc Gets a list of variants matching the criteria.  For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Implements [GlobalAllianceApi.searchVariants](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L126).
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
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
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var variantsPage = response['variants'];
         *     if (!variantsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < variantsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `variantsPage`:
         *       console.log(JSON.stringify(variantsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.resource.pageToken = response.nextPageToken;
         *       genomics.variants.search(request, handlePage);
         *     }
         *   };
         *
         *   genomics.variants.search(request, handlePage);
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
         * @alias genomics.variants.search
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).SearchVariantsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variants/search').replace(/([^:]\/)\/+/g, '$1'),
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
    self.variantsets = {
        /**
         * genomics.variantsets.create
         *
         * @desc Creates a new variant set.  For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  The provided variant set must have a valid `datasetId` set - all other fields are optional. Note that the `id` field will be ignored, as this is assigned by the server.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
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
         *   genomics.variantsets.create(request, function(err, response) {
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
         * @alias genomics.variantsets.create
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).VariantSet} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variantsets').replace(/([^:]\/)\/+/g, '$1'),
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
         * genomics.variantsets.delete
         *
         * @desc Deletes a variant set including all variants, call sets, and calls within. This is not reversible.  For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the variant set to be deleted.
         *     variantSetId: 'my-variant-set-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.variantsets.delete(request, function(err) {
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
         * @alias genomics.variantsets.delete
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.variantSetId The ID of the variant set to be deleted.
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variantsets/{variantSetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['variantSetId'],
                pathParams: ['variantSetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.variantsets.export
         *
         * @desc Exports variant set data to an external destination.  For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Required. The ID of the variant set that contains variant data which
         *     // should be exported. The caller must have READ access to this variant set.
         *     variantSetId: 'my-variant-set-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.variantsets.export(request, function(err, response) {
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
         * @alias genomics.variantsets.export
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.variantSetId Required. The ID of the variant set that contains variant data which should be exported. The caller must have READ access to this variant set.
         * @param {genomics(v1).ExportVariantSetRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        export: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variantsets/{variantSetId}:export').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['variantSetId'],
                pathParams: ['variantSetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.variantsets.get
         *
         * @desc Gets a variant set by ID.  For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Required. The ID of the variant set.
         *     variantSetId: 'my-variant-set-id',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.variantsets.get(request, function(err, response) {
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
         * @alias genomics.variantsets.get
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.variantSetId Required. The ID of the variant set.
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variantsets/{variantSetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['variantSetId'],
                pathParams: ['variantSetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.variantsets.patch
         *
         * @desc Updates a variant set using patch semantics.  For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The ID of the variant to be updated (must already exist).
         *     variantSetId: 'my-variant-set-id',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. Only these properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.variantsets.patch(request, function(err, response) {
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
         * @alias genomics.variantsets.patch
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.updateMask An optional mask specifying which fields to update. Supported fields:  * metadata. * name. * description.  Leaving `updateMask` unset is equivalent to specifying all mutable fields.
         * @param {string} params.variantSetId The ID of the variant to be updated (must already exist).
         * @param {genomics(v1).VariantSet} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variantsets/{variantSetId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['variantSetId'],
                pathParams: ['variantSetId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * genomics.variantsets.search
         *
         * @desc Returns a list of all variant sets matching search criteria.  For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Implements [GlobalAllianceApi.searchVariantSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L49).
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
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
         * var genomics = google.genomics('v1');
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
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var variantSetsPage = response['variantSets'];
         *     if (!variantSetsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < variantSetsPage.length; i++) {
         *       // TODO: Change code below to process each resource in `variantSetsPage`:
         *       console.log(JSON.stringify(variantSetsPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.resource.pageToken = response.nextPageToken;
         *       genomics.variantsets.search(request, handlePage);
         *     }
         *   };
         *
         *   genomics.variantsets.search(request, handlePage);
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
         * @alias genomics.variantsets.search
         * @memberOf! genomics(v1)
         *
         * @param {object} params Parameters for request
         * @param {genomics(v1).SearchVariantSetsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/variantsets/search').replace(/([^:]\/)\/+/g, '$1'),
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
module.exports = Genomics;
//# sourceMappingURL=v1.js.map