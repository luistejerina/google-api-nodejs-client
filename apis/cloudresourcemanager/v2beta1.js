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
 * Google Cloud Resource Manager API
 *
 * The Google Cloud Resource Manager API provides methods for creating, reading, and updating project metadata.
 *
 * @example
 * const google = require('googleapis');
 * const cloudresourcemanager = google.cloudresourcemanager('v2beta1');
 *
 * @namespace cloudresourcemanager
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Cloudresourcemanager
 */
function Cloudresourcemanager(options) {
    const self = this;
    self._options = options || {};
    self.folders = {
        /**
         * cloudresourcemanager.folders.create
         *
         * @desc Creates a Folder in the resource hierarchy. Returns an Operation which can be used to track the progress of the folder creation workflow. Upon success the Operation.response field will be populated with the created Folder.  In order to succeed, the addition of this new Folder must not violate the Folder naming, height or fanout constraints. + The Folder's display_name must be distinct from all other Folder's that share its parent. + The addition of the Folder must not cause the active Folder hierarchy to exceed a height of 4. Note, the full active + deleted Folder hierarchy is allowed to reach a height of 8; this provides additional headroom when moving folders that contain deleted folders. + The addition of the Folder must not cause the total number of Folders under its parent to exceed 100.  If the operation fails due to a folder constraint violation, a PreconditionFailure explaining the violation will be returned. If the failure occurs synchronously then the PreconditionFailure will be returned via the Status.details field and if it occurs asynchronously then the PreconditionFailure will be returned via the the Operation.error field.  The caller must have `resourcemanager.folders.create` permission on the identified parent.
         *
         * @alias cloudresourcemanager.folders.create
         * @memberOf! cloudresourcemanager(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.parent The resource name of the new Folder's parent. Must be of the form `folders/{folder_id}` or `organizations/{org_id}`.
         * @param {cloudresourcemanager(v2beta1).Folder} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/folders').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudresourcemanager.folders.delete
         *
         * @desc Requests deletion of a Folder. The Folder is moved into the [DELETE_REQUESTED] state immediately, and is deleted approximately 30 days later. This method may only be called on an empty Folder in the [ACTIVE] state, where a Folder is empty if it doesn't contain any Folders or Projects in the [ACTIVE] state. The caller must have `resourcemanager.folders.delete` permission on the identified folder.
         *
         * @alias cloudresourcemanager.folders.delete
         * @memberOf! cloudresourcemanager(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name the resource name of the Folder to be deleted. Must be of the form `folders/{folder_id}`.
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
            const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudresourcemanager.folders.get
         *
         * @desc Retrieves a Folder identified by the supplied resource name. Valid Folder resource names have the format `folders/{folder_id}` (for example, `folders/1234`). The caller must have `resourcemanager.folders.get` permission on the identified folder.
         *
         * @alias cloudresourcemanager.folders.get
         * @memberOf! cloudresourcemanager(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name of the Folder to retrieve. Must be of the form `folders/{folder_id}`.
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
            const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudresourcemanager.folders.getIamPolicy
         *
         * @desc Gets the access control policy for a Folder. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the Folder's resource name, e.g. "folders/1234". The caller must have `resourcemanager.folders.getIamPolicy` permission on the identified folder.
         *
         * @alias cloudresourcemanager.folders.getIamPolicy
         * @memberOf! cloudresourcemanager(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
         * @param {cloudresourcemanager(v2beta1).GetIamPolicyRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{resource}:getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudresourcemanager.folders.list
         *
         * @desc Lists the Folders that are direct descendants of supplied parent resource. List provides a strongly consistent view of the Folders underneath the specified parent resource. List returns Folders sorted based upon the (ascending) lexical ordering of their display_name. The caller must have `resourcemanager.folders.list` permission on the identified parent.
         *
         * @alias cloudresourcemanager.folders.list
         * @memberOf! cloudresourcemanager(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of Folders to return in the response. This field is optional.
         * @param {string=} params.pageToken A pagination token returned from a previous call to `ListFolders` that indicates where this listing should continue from. This field is optional.
         * @param {string=} params.parent The resource name of the Organization or Folder whose Folders are being listed. Must be of the form `folders/{folder_id}` or `organizations/{org_id}`. Access to this method is controlled by checking the `resourcemanager.folders.list` permission on the `parent`.
         * @param {boolean=} params.showDeleted Controls whether Folders in the [DELETE_REQUESTED} state should be returned.
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
            const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/folders').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudresourcemanager.folders.move
         *
         * @desc Moves a Folder under a new resource parent. Returns an Operation which can be used to track the progress of the folder move workflow. Upon success the Operation.response field will be populated with the moved Folder. Upon failure, a FolderOperationError categorizing the failure cause will be returned - if the failure occurs synchronously then the FolderOperationError will be returned via the Status.details field and if it occurs asynchronously then the FolderOperation will be returned via the the Operation.error field. In addition, the Operation.metadata field will be populated with a FolderOperation message as an aid to stateless clients. Folder moves will be rejected if they violate either the naming, height or fanout constraints described in the [CreateFolder] documentation. The caller must have `resourcemanager.folders.move` permission on the folder's current and proposed new parent.
         *
         * @alias cloudresourcemanager.folders.move
         * @memberOf! cloudresourcemanager(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name of the Folder to move. Must be of the form folders/{folder_id}
         * @param {cloudresourcemanager(v2beta1).MoveFolderRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        move: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{name}:move').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudresourcemanager.folders.patch
         *
         * @desc Updates a Folder, changing its display_name. Changes to the folder display_name will be rejected if they violate either the display_name formatting rules or naming constraints described in the [CreateFolder] documentation. + The Folder's display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be no longer than 30 characters. This is captured by the regular expression: [\p{L}\p{N}]({\p{L}\p{N}_- ]{0,28}[\p{L}\p{N}])?. The caller must have `resourcemanager.folders.update` permission on the identified folder.  If the update fails due to the unique name constraint then a PreconditionFailure explaining this violation will be returned in the Status.details field.
         *
         * @alias cloudresourcemanager.folders.patch
         * @memberOf! cloudresourcemanager(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Output only. The resource name of the Folder. Its format is `folders/{folder_id}`, for example: "folders/1234".
         * @param {string=} params.updateMask Fields to be updated. Only the `display_name` can be updated.
         * @param {cloudresourcemanager(v2beta1).Folder} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudresourcemanager.folders.search
         *
         * @desc Search for folders that match specific filter criteria. Search provides an eventually consistent view of the folders a user has access to which meet the specified filter criteria.  This will only return folders on which the caller has the permission `resourcemanager.folders.get`.
         *
         * @alias cloudresourcemanager.folders.search
         * @memberOf! cloudresourcemanager(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {cloudresourcemanager(v2beta1).SearchFoldersRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/folders:search').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudresourcemanager.folders.setIamPolicy
         *
         * @desc Sets the access control policy on a Folder, replacing any existing policy. The `resource` field should be the Folder's resource name, e.g. "folders/1234". The caller must have `resourcemanager.folders.setIamPolicy` permission on the identified folder.
         *
         * @alias cloudresourcemanager.folders.setIamPolicy
         * @memberOf! cloudresourcemanager(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
         * @param {cloudresourcemanager(v2beta1).SetIamPolicyRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{resource}:setIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudresourcemanager.folders.testIamPermissions
         *
         * @desc Returns permissions that a caller has on the specified Folder. The `resource` field should be the Folder's resource name, e.g. "folders/1234".  There are no permissions required for making this API call.
         *
         * @alias cloudresourcemanager.folders.testIamPermissions
         * @memberOf! cloudresourcemanager(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
         * @param {cloudresourcemanager(v2beta1).TestIamPermissionsRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudresourcemanager.folders.undelete
         *
         * @desc Cancels the deletion request for a Folder. This method may only be called on a Folder in the [DELETE_REQUESTED] state. In order to succeed, the Folder's parent must be in the [ACTIVE] state. In addition, reintroducing the folder into the tree must not violate folder naming, height and fanout constraints described in the [CreateFolder] documentation. The caller must have `resourcemanager.folders.undelete` permission on the identified folder.
         *
         * @alias cloudresourcemanager.folders.undelete
         * @memberOf! cloudresourcemanager(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name of the Folder to undelete. Must be of the form `folders/{folder_id}`.
         * @param {cloudresourcemanager(v2beta1).UndeleteFolderRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2beta1/{name}:undelete').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Cloudresourcemanager;
//# sourceMappingURL=v2beta1.js.map