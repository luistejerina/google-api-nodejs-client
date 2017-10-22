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
 * Cloud SQL Administration API
 *
 * Creates and configures Cloud SQL instances, which provide fully-managed MySQL databases.
 *
 * @example
 * const google = require('googleapis');
 * const sqladmin = google.sqladmin('v1beta4');
 *
 * @namespace sqladmin
 * @type {Function}
 * @version v1beta4
 * @variation v1beta4
 * @param {object=} options Options for Sqladmin
 */
function Sqladmin(options) {
    const self = this;
    self._options = options || {};
    self.backupRuns = {
        /**
         * sql.backupRuns.delete
         *
         * @desc Deletes the backup taken by a backup run.
         *
         * @alias sql.backupRuns.delete
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id The ID of the Backup Run to delete. To find a Backup Run ID, use the list method.
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'id'],
                pathParams: ['id', 'instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.backupRuns.get
         *
         * @desc Retrieves a resource containing information about a backup run.
         *
         * @alias sql.backupRuns.get
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id The ID of this Backup Run.
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'id'],
                pathParams: ['id', 'instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.backupRuns.insert
         *
         * @desc Creates a new backup run on demand. This method is applicable only to Second Generation instances.
         *
         * @alias sql.backupRuns.insert
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
         * @param {sqladmin(v1beta4).BackupRun} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.backupRuns.list
         *
         * @desc Lists all backup runs associated with a given instance and configuration in the reverse chronological order of the enqueued time.
         *
         * @alias sql.backupRuns.list
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {integer=} params.maxResults Maximum number of backup runs per response.
         * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
         * @param {string} params.project Project ID of the project that contains the instance.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.databases = {
        /**
         * sql.databases.delete
         *
         * @desc Deletes a database from a Cloud SQL instance.
         *
         * @alias sql.databases.delete
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.database Name of the database to be deleted in the instance.
         * @param {string} params.instance Database instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'database'],
                pathParams: ['database', 'instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.databases.get
         *
         * @desc Retrieves a resource containing information about a database inside a Cloud SQL instance.
         *
         * @alias sql.databases.get
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.database Name of the database in the instance.
         * @param {string} params.instance Database instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'database'],
                pathParams: ['database', 'instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.databases.insert
         *
         * @desc Inserts a resource containing information about a database inside a Cloud SQL instance.
         *
         * @alias sql.databases.insert
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Database instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
         * @param {sqladmin(v1beta4).Database} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/databases').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.databases.list
         *
         * @desc Lists databases in the specified Cloud SQL instance.
         *
         * @alias sql.databases.list
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project for which to list Cloud SQL instances.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/databases').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.databases.patch
         *
         * @desc Updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.
         *
         * @alias sql.databases.patch
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.database Name of the database to be updated in the instance.
         * @param {string} params.instance Database instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
         * @param {sqladmin(v1beta4).Database} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'database'],
                pathParams: ['database', 'instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.databases.update
         *
         * @desc Updates a resource containing information about a database inside a Cloud SQL instance.
         *
         * @alias sql.databases.update
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.database Name of the database to be updated in the instance.
         * @param {string} params.instance Database instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
         * @param {sqladmin(v1beta4).Database} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'database'],
                pathParams: ['database', 'instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.flags = {
        /**
         * sql.flags.list
         *
         * @desc List all available database flags for Google Cloud SQL instances.
         *
         * @alias sql.flags.list
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.databaseVersion Database version for flag retrieval. Flags are specific to the database version.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/flags').replace(/([^:]\/)\/+/g, '$1'),
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
    self.instances = {
        /**
         * sql.instances.clone
         *
         * @desc Creates a Cloud SQL instance as a clone of the source instance. The API is not ready for Second Generation instances yet.
         *
         * @alias sql.instances.clone
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance The ID of the Cloud SQL instance to be cloned (source). This does not include the project ID.
         * @param {string} params.project Project ID of the source as well as the clone Cloud SQL instance.
         * @param {sqladmin(v1beta4).InstancesCloneRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        clone: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/clone').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.delete
         *
         * @desc Deletes a Cloud SQL instance.
         *
         * @alias sql.instances.delete
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance to be deleted.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.demoteMaster
         *
         * @desc Demotes the standalone instance to be a read replica Cloud SQL instance of an on-premises master.
         *
         * @alias sql.instances.demoteMaster
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance name.
         * @param {string} params.project ID of the project that contains the instance.
         * @param {sqladmin(v1beta4).InstancesDemoteMasterRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        demoteMaster: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/demoteMaster').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.export
         *
         * @desc Exports data from a Cloud SQL instance to a Google Cloud Storage bucket as a MySQL dump file.
         *
         * @alias sql.instances.export
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance to be exported.
         * @param {sqladmin(v1beta4).InstancesExportRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/export').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.failover
         *
         * @desc Failover the instance to its failover replica instance.
         *
         * @alias sql.instances.failover
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project ID of the project that contains the read replica.
         * @param {sqladmin(v1beta4).InstancesFailoverRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        failover: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/failover').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.get
         *
         * @desc Retrieves a resource containing information about a Cloud SQL instance.
         *
         * @alias sql.instances.get
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Database instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.import
         *
         * @desc Imports data into a Cloud SQL instance from a MySQL dump file in Google Cloud Storage.
         *
         * @alias sql.instances.import
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
         * @param {sqladmin(v1beta4).InstancesImportRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/import').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.insert
         *
         * @desc Creates a new Cloud SQL instance.
         *
         * @alias sql.instances.insert
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID of the project to which the newly created Cloud SQL instances should belong.
         * @param {sqladmin(v1beta4).DatabaseInstance} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.list
         *
         * @desc Lists instances under a given project in the alphabetical order of the instance name.
         *
         * @alias sql.instances.list
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter An expression for filtering the results of the request, such as by name or label.
         * @param {integer=} params.maxResults The maximum number of results to return per response.
         * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
         * @param {string} params.project Project ID of the project for which to list Cloud SQL instances.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.patch
         *
         * @desc Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch.. This method supports patch semantics.
         *
         * @alias sql.instances.patch
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
         * @param {sqladmin(v1beta4).DatabaseInstance} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.promoteReplica
         *
         * @desc Promotes the read replica instance to be a stand-alone Cloud SQL instance.
         *
         * @alias sql.instances.promoteReplica
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL read replica instance name.
         * @param {string} params.project ID of the project that contains the read replica.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        promoteReplica: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/promoteReplica').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.resetSslConfig
         *
         * @desc Deletes all client certificates and generates a new server SSL certificate for the instance. The changes will not take effect until the instance is restarted. Existing instances without a server certificate will need to call this once to set a server certificate.
         *
         * @alias sql.instances.resetSslConfig
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetSslConfig: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/resetSslConfig').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.restart
         *
         * @desc Restarts a Cloud SQL instance.
         *
         * @alias sql.instances.restart
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance to be restarted.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        restart: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/restart').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.restoreBackup
         *
         * @desc Restores a backup of a Cloud SQL instance.
         *
         * @alias sql.instances.restoreBackup
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
         * @param {sqladmin(v1beta4).InstancesRestoreBackupRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        restoreBackup: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/restoreBackup').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.startReplica
         *
         * @desc Starts the replication in the read replica instance.
         *
         * @alias sql.instances.startReplica
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL read replica instance name.
         * @param {string} params.project ID of the project that contains the read replica.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        startReplica: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/startReplica').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.stopReplica
         *
         * @desc Stops the replication in the read replica instance.
         *
         * @alias sql.instances.stopReplica
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL read replica instance name.
         * @param {string} params.project ID of the project that contains the read replica.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        stopReplica: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/stopReplica').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.truncateLog
         *
         * @desc Truncate MySQL general and slow query log tables
         *
         * @alias sql.instances.truncateLog
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the Cloud SQL project.
         * @param {sqladmin(v1beta4).InstancesTruncateLogRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        truncateLog: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/truncateLog').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.instances.update
         *
         * @desc Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch.
         *
         * @alias sql.instances.update
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
         * @param {sqladmin(v1beta4).DatabaseInstance} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.operations = {
        /**
         * sql.operations.get
         *
         * @desc Retrieves an instance operation that has been performed on an instance.
         *
         * @alias sql.operations.get
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.operation Instance operation ID.
         * @param {string} params.project Project ID of the project that contains the instance.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/operations/{operation}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'operation'],
                pathParams: ['operation', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.operations.list
         *
         * @desc Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.
         *
         * @alias sql.operations.list
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {integer=} params.maxResults Maximum number of operations per response.
         * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
         * @param {string} params.project Project ID of the project that contains the instance.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/operations').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.sslCerts = {
        /**
         * sql.sslCerts.createEphemeral
         *
         * @desc Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
         *
         * @alias sql.sslCerts.createEphemeral
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the Cloud SQL project.
         * @param {sqladmin(v1beta4).SslCertsCreateEphemeralRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        createEphemeral: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/createEphemeral').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.sslCerts.delete
         *
         * @desc Deletes the SSL certificate. The change will not take effect until the instance is restarted.
         *
         * @alias sql.sslCerts.delete
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance to be deleted.
         * @param {string} params.sha1Fingerprint Sha1 FingerPrint.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'sha1Fingerprint'],
                pathParams: ['instance', 'project', 'sha1Fingerprint'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.sslCerts.get
         *
         * @desc Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.
         *
         * @alias sql.sslCerts.get
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
         * @param {string} params.sha1Fingerprint Sha1 FingerPrint.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'sha1Fingerprint'],
                pathParams: ['instance', 'project', 'sha1Fingerprint'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.sslCerts.insert
         *
         * @desc Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.
         *
         * @alias sql.sslCerts.insert
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project to which the newly created Cloud SQL instances should belong.
         * @param {sqladmin(v1beta4).SslCertsInsertRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.sslCerts.list
         *
         * @desc Lists all of the current SSL certificates for the instance.
         *
         * @alias sql.sslCerts.list
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project for which to list Cloud SQL instances.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.tiers = {
        /**
         * sql.tiers.list
         *
         * @desc Lists all available service tiers for Google Cloud SQL, for example D1, D2. For related information, see Pricing.
         *
         * @alias sql.tiers.list
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project Project ID of the project for which to list tiers.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/tiers').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.users = {
        /**
         * sql.users.delete
         *
         * @desc Deletes a user from a Cloud SQL instance.
         *
         * @alias sql.users.delete
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.host Host of the user in the instance.
         * @param {string} params.instance Database instance ID. This does not include the project ID.
         * @param {string} params.name Name of the user in the instance.
         * @param {string} params.project Project ID of the project that contains the instance.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/users').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'host', 'name'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.users.insert
         *
         * @desc Creates a new user in a Cloud SQL instance.
         *
         * @alias sql.users.insert
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Database instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
         * @param {sqladmin(v1beta4).User} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/users').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.users.list
         *
         * @desc Lists users in the specified Cloud SQL instance.
         *
         * @alias sql.users.list
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.instance Database instance ID. This does not include the project ID.
         * @param {string} params.project Project ID of the project that contains the instance.
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/users').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['project', 'instance'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * sql.users.update
         *
         * @desc Updates an existing user in a Cloud SQL instance.
         *
         * @alias sql.users.update
         * @memberOf! sqladmin(v1beta4)
         *
         * @param {object} params Parameters for request
         * @param {string} params.host Host of the user in the instance.
         * @param {string} params.instance Database instance ID. This does not include the project ID.
         * @param {string} params.name Name of the user in the instance.
         * @param {string} params.project Project ID of the project that contains the instance.
         * @param {sqladmin(v1beta4).User} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/users').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project', 'instance', 'host', 'name'],
                pathParams: ['instance', 'project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Sqladmin;
//# sourceMappingURL=v1beta4.js.map