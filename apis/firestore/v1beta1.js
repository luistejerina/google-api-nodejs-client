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
 * Google Cloud Firestore API
 *
 *
 *
 * @example
 * const google = require('googleapis');
 * const firestore = google.firestore('v1beta1');
 *
 * @namespace firestore
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Firestore
 */
function Firestore(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        databases: {
            documents: {
                /**
                 * firestore.projects.databases.documents.batchGet
                 *
                 * @desc Gets multiple documents.  Documents returned by this method are not guaranteed to be returned in the same order that they were requested.
                 *
                 * @alias firestore.projects.databases.documents.batchGet
                 * @memberOf! firestore(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.database The database name. In the format: `projects/{project_id}/databases/{database_id}`.
                 * @param {firestore(v1beta1).BatchGetDocumentsRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                batchGet: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{database}/documents:batchGet').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['database'],
                        pathParams: ['database'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * firestore.projects.databases.documents.beginTransaction
                 *
                 * @desc Starts a new transaction.
                 *
                 * @alias firestore.projects.databases.documents.beginTransaction
                 * @memberOf! firestore(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.database The database name. In the format: `projects/{project_id}/databases/{database_id}`.
                 * @param {firestore(v1beta1).BeginTransactionRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                beginTransaction: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{database}/documents:beginTransaction').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['database'],
                        pathParams: ['database'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * firestore.projects.databases.documents.commit
                 *
                 * @desc Commits a transaction, while optionally updating documents.
                 *
                 * @alias firestore.projects.databases.documents.commit
                 * @memberOf! firestore(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.database The database name. In the format: `projects/{project_id}/databases/{database_id}`.
                 * @param {firestore(v1beta1).CommitRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                commit: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{database}/documents:commit').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['database'],
                        pathParams: ['database'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * firestore.projects.databases.documents.createDocument
                 *
                 * @desc Creates a new document.
                 *
                 * @alias firestore.projects.databases.documents.createDocument
                 * @memberOf! firestore(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.collectionId The collection ID, relative to `parent`, to list. For example: `chatrooms`.
                 * @param {string=} params.documentId The client-assigned document ID to use for this document.  Optional. If not specified, an ID will be assigned by the service.
                 * @param {string=} params.mask.fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
                 * @param {string} params.parent The parent resource. For example: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/chatrooms/{chatroom_id}`
                 * @param {firestore(v1beta1).Document} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                createDocument: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{parent}/{collectionId}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['parent', 'collectionId'],
                        pathParams: ['collectionId', 'parent'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * firestore.projects.databases.documents.delete
                 *
                 * @desc Deletes a document.
                 *
                 * @alias firestore.projects.databases.documents.delete
                 * @memberOf! firestore(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {boolean=} params.currentDocument.exists When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
                 * @param {string=} params.currentDocument.updateTime When set, the target document must exist and have been last updated at that time.
                 * @param {string} params.name The resource name of the Document to delete. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
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
                    const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
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
                 * firestore.projects.databases.documents.get
                 *
                 * @desc Gets a single document.
                 *
                 * @alias firestore.projects.databases.documents.get
                 * @memberOf! firestore(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.mask.fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
                 * @param {string} params.name The resource name of the Document to get. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
                 * @param {string=} params.readTime Reads the version of the document at the given time. This may not be older than 60 seconds.
                 * @param {string=} params.transaction Reads the document in a transaction.
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
                    const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
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
                 * firestore.projects.databases.documents.list
                 *
                 * @desc Lists documents.
                 *
                 * @alias firestore.projects.databases.documents.list
                 * @memberOf! firestore(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.collectionId The collection ID, relative to `parent`, to list. For example: `chatrooms` or `messages`.
                 * @param {string=} params.mask.fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
                 * @param {string=} params.orderBy The order to sort results by. For example: `priority desc, name`.
                 * @param {integer=} params.pageSize The maximum number of documents to return.
                 * @param {string=} params.pageToken The `next_page_token` value returned from a previous List request, if any.
                 * @param {string} params.parent The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
                 * @param {string=} params.readTime Reads documents as they were at the given time. This may not be older than 60 seconds.
                 * @param {boolean=} params.showMissing If the list should show missing documents. A missing document is a document that does not exist but has sub-documents. These documents will be returned with a key but will not have fields, Document.create_time, or Document.update_time set.  Requests with `show_missing` may not specify `where` or `order_by`.
                 * @param {string=} params.transaction Reads documents in a transaction.
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
                    const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{parent}/{collectionId}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['parent', 'collectionId'],
                        pathParams: ['collectionId', 'parent'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * firestore.projects.databases.documents.listCollectionIds
                 *
                 * @desc Lists all the collection IDs underneath a document.
                 *
                 * @alias firestore.projects.databases.documents.listCollectionIds
                 * @memberOf! firestore(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent The parent document. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
                 * @param {firestore(v1beta1).ListCollectionIdsRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                listCollectionIds: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{parent}:listCollectionIds').replace(/([^:]\/)\/+/g, '$1'),
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
                 * firestore.projects.databases.documents.listen
                 *
                 * @desc Listens to changes.
                 *
                 * @alias firestore.projects.databases.documents.listen
                 * @memberOf! firestore(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.database The database name. In the format: `projects/{project_id}/databases/{database_id}`.
                 * @param {firestore(v1beta1).ListenRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                listen: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{database}/documents:listen').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['database'],
                        pathParams: ['database'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * firestore.projects.databases.documents.patch
                 *
                 * @desc Updates or inserts a document.
                 *
                 * @alias firestore.projects.databases.documents.patch
                 * @memberOf! firestore(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {boolean=} params.currentDocument.exists When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
                 * @param {string=} params.currentDocument.updateTime When set, the target document must exist and have been last updated at that time.
                 * @param {string=} params.mask.fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
                 * @param {string} params.name The resource name of the document, for example `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
                 * @param {string=} params.updateMask.fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
                 * @param {firestore(v1beta1).Document} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PATCH'
                        }, options),
                        params: params,
                        requiredParams: ['name'],
                        pathParams: ['name'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * firestore.projects.databases.documents.rollback
                 *
                 * @desc Rolls back a transaction.
                 *
                 * @alias firestore.projects.databases.documents.rollback
                 * @memberOf! firestore(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.database The database name. In the format: `projects/{project_id}/databases/{database_id}`.
                 * @param {firestore(v1beta1).RollbackRequest} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{database}/documents:rollback').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['database'],
                        pathParams: ['database'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * firestore.projects.databases.documents.runQuery
                 *
                 * @desc Runs a query.
                 *
                 * @alias firestore.projects.databases.documents.runQuery
                 * @memberOf! firestore(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
                 * @param {firestore(v1beta1).RunQueryRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                runQuery: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{parent}:runQuery').replace(/([^:]\/)\/+/g, '$1'),
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
                 * firestore.projects.databases.documents.write
                 *
                 * @desc Streams batches of document updates and deletes, in order.
                 *
                 * @alias firestore.projects.databases.documents.write
                 * @memberOf! firestore(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.database The database name. In the format: `projects/{project_id}/databases/{database_id}`. This is only required in the first message.
                 * @param {firestore(v1beta1).WriteRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                write: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{database}/documents:write').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['database'],
                        pathParams: ['database'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            indexes: {
                /**
                 * firestore.projects.databases.indexes.create
                 *
                 * @desc Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status.  During creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create.  Indexes with a single field cannot be created.
                 *
                 * @alias firestore.projects.databases.indexes.create
                 * @memberOf! firestore(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent The name of the database this index will apply to. For example: `projects/{project_id}/databases/{database_id}`
                 * @param {firestore(v1beta1).Index} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{parent}/indexes').replace(/([^:]\/)\/+/g, '$1'),
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
                 * firestore.projects.databases.indexes.delete
                 *
                 * @desc Deletes an index.
                 *
                 * @alias firestore.projects.databases.indexes.delete
                 * @memberOf! firestore(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The index name. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
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
                    const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
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
                 * firestore.projects.databases.indexes.get
                 *
                 * @desc Gets an index.
                 *
                 * @alias firestore.projects.databases.indexes.get
                 * @memberOf! firestore(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the index. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
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
                    const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
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
                 * firestore.projects.databases.indexes.list
                 *
                 * @desc Lists the indexes that match the specified filters.
                 *
                 * @alias firestore.projects.databases.indexes.list
                 * @memberOf! firestore(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.filter
                 * @param {integer=} params.pageSize The standard List page size.
                 * @param {string=} params.pageToken The standard List page token.
                 * @param {string} params.parent The database name. For example: `projects/{project_id}/databases/{database_id}`
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
                    const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{parent}/indexes').replace(/([^:]\/)\/+/g, '$1'),
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
        }
    };
}
module.exports = Firestore;
//# sourceMappingURL=v1beta1.js.map