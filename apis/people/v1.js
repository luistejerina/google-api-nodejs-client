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
 * Google People API
 *
 * Provides access to information about profiles and contacts.
 *
 * @example
 * const google = require('googleapis');
 * const people = google.people('v1');
 *
 * @namespace people
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for People
 */
function People(options) {
    const self = this;
    self._options = options || {};
    self.contactGroups = {
        /**
         * people.contactGroups.batchGet
         *
         * @desc Get a list of contact groups owned by the authenticated user by specifying a list of contact group resource names.
         *
         * @alias people.contactGroups.batchGet
         * @memberOf! people(v1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxMembers Specifies the maximum number of members to return for each group.
         * @param {string=} params.resourceNames The resource names of the contact groups to get.
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
            const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/contactGroups:batchGet').replace(/([^:]\/)\/+/g, '$1'),
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
         * people.contactGroups.create
         *
         * @desc Create a new contact group owned by the authenticated user.
         *
         * @alias people.contactGroups.create
         * @memberOf! people(v1)
         *
         * @param {object} params Parameters for request
         * @param {people(v1).CreateContactGroupRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/contactGroups').replace(/([^:]\/)\/+/g, '$1'),
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
         * people.contactGroups.delete
         *
         * @desc Delete an existing contact group owned by the authenticated user by specifying a contact group resource name.
         *
         * @alias people.contactGroups.delete
         * @memberOf! people(v1)
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.deleteContacts Set to true to also delete the contacts in the specified group.
         * @param {string} params.resourceName The resource name of the contact group to delete.
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
            const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{resourceName}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['resourceName'],
                pathParams: ['resourceName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * people.contactGroups.get
         *
         * @desc Get a specific contact group owned by the authenticated user by specifying a contact group resource name.
         *
         * @alias people.contactGroups.get
         * @memberOf! people(v1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.maxMembers Specifies the maximum number of members to return.
         * @param {string} params.resourceName The resource name of the contact group to get.
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
            const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{resourceName}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['resourceName'],
                pathParams: ['resourceName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * people.contactGroups.list
         *
         * @desc List all contact groups owned by the authenticated user. Members of the contact groups are not populated.
         *
         * @alias people.contactGroups.list
         * @memberOf! people(v1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of resources to return.
         * @param {string=} params.pageToken The next_page_token value returned from a previous call to [ListContactGroups](/people/api/rest/v1/contactgroups/list). Requests the next page of resources.
         * @param {string=} params.syncToken A sync token, returned by a previous call to `contactgroups.list`. Only resources changed since the sync token was created will be returned.
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
            const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/contactGroups').replace(/([^:]\/)\/+/g, '$1'),
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
         * people.contactGroups.update
         *
         * @desc Update the name of an existing contact group owned by the authenticated user.
         *
         * @alias people.contactGroups.update
         * @memberOf! people(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resourceName The resource name for the contact group, assigned by the server. An ASCII string, in the form of `contactGroups/`<var>contact_group_id</var>.
         * @param {people(v1).UpdateContactGroupRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{resourceName}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['resourceName'],
                pathParams: ['resourceName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        members: {
            /**
             * people.contactGroups.members.modify
             *
             * @desc Modify the members of a contact group owned by the authenticated user.
             *
             * @alias people.contactGroups.members.modify
             * @memberOf! people(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resourceName The resource name of the contact group to modify.
             * @param {people(v1).ModifyContactGroupMembersRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            modify: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{resourceName}/members:modify').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['resourceName'],
                    pathParams: ['resourceName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
    self.people = {
        /**
         * people.people.createContact
         *
         * @desc Create a new contact and return the person resource for that contact.
         *
         * @alias people.people.createContact
         * @memberOf! people(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.parent The resource name of the owning person resource.
         * @param {people(v1).Person} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        createContact: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/people:createContact').replace(/([^:]\/)\/+/g, '$1'),
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
         * people.people.deleteContact
         *
         * @desc Delete a contact person. Any non-contact data will not be deleted.
         *
         * @alias people.people.deleteContact
         * @memberOf! people(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resourceName The resource name of the contact to delete.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        deleteContact: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{resourceName}:deleteContact').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['resourceName'],
                pathParams: ['resourceName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * people.people.get
         *
         * @desc Provides information about a person by specifying a resource name. Use `people/me` to indicate the authenticated user. <br> The request throws a 400 error if 'personFields' is not specified.
         *
         * @alias people.people.get
         * @memberOf! people(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.personFields **Required.** A field mask to restrict which fields on the person are returned. Valid values are:  * addresses * ageRanges * biographies * birthdays * braggingRights * coverPhotos * emailAddresses * events * genders * imClients * interests * locales * memberships * metadata * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * relationshipInterests * relationshipStatuses * residences * skills * taglines * urls
         * @param {string=} params.requestMask.includeField **Required.** Comma-separated list of person fields to be included in the response. Each path should start with `person.`: for example, `person.names` or `person.photos`.
         * @param {string} params.resourceName The resource name of the person to provide information about.  - To get information about the authenticated user, specify `people/me`. - To get information about a google account, specify  `people/`<var>account_id</var>. - To get information about a contact, specify the resource name that   identifies the contact as returned by [`people.connections.list`](/people/api/rest/v1/people.connections/list).
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
            const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{resourceName}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['resourceName'],
                pathParams: ['resourceName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * people.people.getBatchGet
         *
         * @desc Provides information about a list of specific people by specifying a list of requested resource names. Use `people/me` to indicate the authenticated user. <br> The request throws a 400 error if 'personFields' is not specified.
         *
         * @alias people.people.getBatchGet
         * @memberOf! people(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.personFields **Required.** A field mask to restrict which fields on each person are returned. Valid values are:  * addresses * ageRanges * biographies * birthdays * braggingRights * coverPhotos * emailAddresses * events * genders * imClients * interests * locales * memberships * metadata * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * relationshipInterests * relationshipStatuses * residences * skills * taglines * urls
         * @param {string=} params.requestMask.includeField **Required.** Comma-separated list of person fields to be included in the response. Each path should start with `person.`: for example, `person.names` or `person.photos`.
         * @param {string=} params.resourceNames The resource names of the people to provide information about.  - To get information about the authenticated user, specify `people/me`. - To get information about a google account, specify   `people/`<var>account_id</var>. - To get information about a contact, specify the resource name that   identifies the contact as returned by [`people.connections.list`](/people/api/rest/v1/people.connections/list).  You can include up to 50 resource names in one request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getBatchGet: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/people:batchGet').replace(/([^:]\/)\/+/g, '$1'),
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
         * people.people.updateContact
         *
         * @desc Update contact data for an existing contact person. Any non-contact data will not be modified.  The request throws a 400 error if `updatePersonFields` is not specified. <br> The request throws a 400 error if `person.metadata.sources` is not specified for the contact to be updated. <br> The request throws a 412 error if `person.metadata.sources.etag` is different than the contact's etag, which indicates the contact has changed since its data was read. Clients should get the latest person and re-apply their updates to the latest person.
         *
         * @alias people.people.updateContact
         * @memberOf! people(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resourceName The resource name for the person, assigned by the server. An ASCII string with a max length of 27 characters, in the form of `people/`<var>person_id</var>.
         * @param {string=} params.updatePersonFields **Required.** A field mask to restrict which fields on the person are updated. Valid values are:  * addresses * biographies * birthdays * braggingRights * emailAddresses * events * genders * imClients * interests * locales * names * nicknames * occupations * organizations * phoneNumbers * relations * residences * skills * urls
         * @param {people(v1).Person} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateContact: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{resourceName}:updateContact').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['resourceName'],
                pathParams: ['resourceName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        connections: {
            /**
             * people.people.connections.list
             *
             * @desc Provides a list of the authenticated user's contacts merged with any connected profiles. <br> The request throws a 400 error if 'personFields' is not specified.
             *
             * @alias people.people.connections.list
             * @memberOf! people(v1)
             *
             * @param {object} params Parameters for request
             * @param {integer=} params.pageSize The number of connections to include in the response. Valid values are between 1 and 2000, inclusive. Defaults to 100.
             * @param {string=} params.pageToken The token of the page to be returned.
             * @param {string=} params.personFields **Required.** A field mask to restrict which fields on each person are returned. Valid values are:  * addresses * ageRanges * biographies * birthdays * braggingRights * coverPhotos * emailAddresses * events * genders * imClients * interests * locales * memberships * metadata * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * relationshipInterests * relationshipStatuses * residences * skills * taglines * urls
             * @param {string=} params.requestMask.includeField **Required.** Comma-separated list of person fields to be included in the response. Each path should start with `person.`: for example, `person.names` or `person.photos`.
             * @param {boolean=} params.requestSyncToken Whether the response should include a sync token, which can be used to get all changes since the last request.
             * @param {string} params.resourceName The resource name to return connections for. Only `people/me` is valid.
             * @param {string=} params.sortOrder The order in which the connections should be sorted. Defaults to `LAST_MODIFIED_ASCENDING`.
             * @param {string=} params.syncToken A sync token, returned by a previous call to `people.connections.list`. Only resources changed since the sync token was created will be returned.
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
                const rootUrl = options.rootUrl || 'https://people.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{resourceName}/connections').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['resourceName'],
                    pathParams: ['resourceName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
}
module.exports = People;
//# sourceMappingURL=v1.js.map