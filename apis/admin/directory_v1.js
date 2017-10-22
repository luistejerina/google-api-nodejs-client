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
 * Admin Directory API
 *
 * The Admin SDK Directory API lets you view and manage enterprise resources such as users and groups, administrative notifications, security features, and more.
 *
 * @example
 * const google = require('googleapis');
 * const admin = google.admin('directory_v1');
 *
 * @namespace admin
 * @type {Function}
 * @version directory_v1
 * @variation directory_v1
 * @param {object=} options Options for Admin
 */
function Admin(options) {
    const self = this;
    self._options = options || {};
    self.asps = {
        /**
         * directory.asps.delete
         *
         * @desc Delete an ASP issued by a user.
         *
         * @alias directory.asps.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.codeId The unique ID of the ASP to be deleted.
         * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
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
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}/asps/{codeId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['userKey', 'codeId'],
                pathParams: ['codeId', 'userKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.asps.get
         *
         * @desc Get information about an ASP issued by a user.
         *
         * @alias directory.asps.get
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {integer} params.codeId The unique ID of the ASP.
         * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
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
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}/asps/{codeId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userKey', 'codeId'],
                pathParams: ['codeId', 'userKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.asps.list
         *
         * @desc List the ASPs issued by a user.
         *
         * @alias directory.asps.list
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
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
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}/asps').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.channels = {
        /**
         * admin.channels.stop
         *
         * @desc Stop watching resources through this channel
         *
         * @alias admin.channels.stop
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {admin(directory_v1).Channel} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        stop: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/admin/directory_v1/channels/stop').replace(/([^:]\/)\/+/g, '$1'),
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
    self.chromeosdevices = {
        /**
         * directory.chromeosdevices.action
         *
         * @desc Take action on Chrome OS Device
         *
         * @alias directory.chromeosdevices.action
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.resourceId Immutable ID of Chrome OS Device
         * @param {admin(directory_v1).ChromeOsDeviceAction} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        action: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customerId', 'resourceId'],
                pathParams: ['customerId', 'resourceId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.chromeosdevices.get
         *
         * @desc Retrieve Chrome OS Device
         *
         * @alias directory.chromeosdevices.get
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.deviceId Immutable ID of Chrome OS Device
         * @param {string=} params.projection Restrict information returned to a set of selected fields.
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerId', 'deviceId'],
                pathParams: ['customerId', 'deviceId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.chromeosdevices.list
         *
         * @desc Retrieve all Chrome OS Devices of a customer (paginated)
         *
         * @alias directory.chromeosdevices.list
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {integer=} params.maxResults Maximum number of results to return. Default is 100
         * @param {string=} params.orderBy Column to use for sorting results
         * @param {string=} params.orgUnitPath Full path of the organization unit or its Id
         * @param {string=} params.pageToken Token to specify next page in the list
         * @param {string=} params.projection Restrict information returned to a set of selected fields.
         * @param {string=} params.query Search string in the format given at http://support.google.com/chromeos/a/bin/answer.py?hl=en&answer=1698333
         * @param {string=} params.sortOrder Whether to return results in ascending or descending order. Only of use when orderBy is also used
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/devices/chromeos').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerId'],
                pathParams: ['customerId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.chromeosdevices.moveDevicesToOu
         *
         * @desc Move or insert multiple Chrome OS Devices to Organization Unit
         *
         * @alias directory.chromeosdevices.moveDevicesToOu
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.orgUnitPath Full path of the target organization unit or its Id
         * @param {admin(directory_v1).ChromeOsMoveDevicesToOu} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        moveDevicesToOu: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customerId', 'orgUnitPath'],
                pathParams: ['customerId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.chromeosdevices.patch
         *
         * @desc Update Chrome OS Device. This method supports patch semantics.
         *
         * @alias directory.chromeosdevices.patch
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.deviceId Immutable ID of Chrome OS Device
         * @param {string=} params.projection Restrict information returned to a set of selected fields.
         * @param {admin(directory_v1).ChromeOsDevice} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['customerId', 'deviceId'],
                pathParams: ['customerId', 'deviceId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.chromeosdevices.update
         *
         * @desc Update Chrome OS Device
         *
         * @alias directory.chromeosdevices.update
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.deviceId Immutable ID of Chrome OS Device
         * @param {string=} params.projection Restrict information returned to a set of selected fields.
         * @param {admin(directory_v1).ChromeOsDevice} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['customerId', 'deviceId'],
                pathParams: ['customerId', 'deviceId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.customers = {
        /**
         * directory.customers.get
         *
         * @desc Retrieves a customer.
         *
         * @alias directory.customers.get
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerKey Id of the customer to be retrieved
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
                    url: (rootUrl + '/admin/directory/v1/customers/{customerKey}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerKey'],
                pathParams: ['customerKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.customers.patch
         *
         * @desc Updates a customer. This method supports patch semantics.
         *
         * @alias directory.customers.patch
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerKey Id of the customer to be updated
         * @param {admin(directory_v1).Customer} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/customers/{customerKey}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['customerKey'],
                pathParams: ['customerKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.customers.update
         *
         * @desc Updates a customer.
         *
         * @alias directory.customers.update
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerKey Id of the customer to be updated
         * @param {admin(directory_v1).Customer} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/customers/{customerKey}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['customerKey'],
                pathParams: ['customerKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.domainAliases = {
        /**
         * directory.domainAliases.delete
         *
         * @desc Deletes a Domain Alias of the customer.
         *
         * @alias directory.domainAliases.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.domainAliasName Name of domain alias to be retrieved.
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['customer', 'domainAliasName'],
                pathParams: ['customer', 'domainAliasName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.domainAliases.get
         *
         * @desc Retrieves a domain alias of the customer.
         *
         * @alias directory.domainAliases.get
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.domainAliasName Name of domain alias to be retrieved.
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer', 'domainAliasName'],
                pathParams: ['customer', 'domainAliasName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.domainAliases.insert
         *
         * @desc Inserts a Domain alias of the customer.
         *
         * @alias directory.domainAliases.insert
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {admin(directory_v1).DomainAlias} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/domainaliases').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.domainAliases.list
         *
         * @desc Lists the domain aliases of the customer.
         *
         * @alias directory.domainAliases.list
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string=} params.parentDomainName Name of the parent domain for which domain aliases are to be fetched.
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/domainaliases').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.domains = {
        /**
         * directory.domains.delete
         *
         * @desc Deletes a domain of the customer.
         *
         * @alias directory.domains.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.domainName Name of domain to be deleted
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/domains/{domainName}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['customer', 'domainName'],
                pathParams: ['customer', 'domainName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.domains.get
         *
         * @desc Retrieves a domain of the customer.
         *
         * @alias directory.domains.get
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.domainName Name of domain to be retrieved
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/domains/{domainName}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer', 'domainName'],
                pathParams: ['customer', 'domainName'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.domains.insert
         *
         * @desc Inserts a domain of the customer.
         *
         * @alias directory.domains.insert
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {admin(directory_v1).Domains} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/domains').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.domains.list
         *
         * @desc Lists the domains of the customer.
         *
         * @alias directory.domains.list
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/domains').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.groups = {
        /**
         * directory.groups.delete
         *
         * @desc Delete Group
         *
         * @alias directory.groups.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable Id of the group
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
                    url: (rootUrl + '/admin/directory/v1/groups/{groupKey}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['groupKey'],
                pathParams: ['groupKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.groups.get
         *
         * @desc Retrieve Group
         *
         * @alias directory.groups.get
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable Id of the group
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
                    url: (rootUrl + '/admin/directory/v1/groups/{groupKey}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['groupKey'],
                pathParams: ['groupKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.groups.insert
         *
         * @desc Create Group
         *
         * @alias directory.groups.insert
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {admin(directory_v1).Group} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/groups').replace(/([^:]\/)\/+/g, '$1'),
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
         * directory.groups.list
         *
         * @desc Retrieve all groups in a domain (paginated)
         *
         * @alias directory.groups.list
         * @memberOf! admin(directory_v1)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.customer Immutable ID of the G Suite account. In case of multi-domain, to fetch all groups for a customer, fill this field instead of domain.
         * @param {string=} params.domain Name of the domain. Fill this field to get groups from only this domain. To return all groups in a multi-domain fill customer field instead.
         * @param {integer=} params.maxResults Maximum number of results to return. Default is 200
         * @param {string=} params.pageToken Token to specify next page in the list
         * @param {string=} params.userKey Email or immutable Id of the user if only those groups are to be listed, the given user is a member of. If Id, it should match with id of user object
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
                    url: (rootUrl + '/admin/directory/v1/groups').replace(/([^:]\/)\/+/g, '$1'),
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
         * directory.groups.patch
         *
         * @desc Update Group. This method supports patch semantics.
         *
         * @alias directory.groups.patch
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable Id of the group. If Id, it should match with id of group object
         * @param {admin(directory_v1).Group} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/groups/{groupKey}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['groupKey'],
                pathParams: ['groupKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.groups.update
         *
         * @desc Update Group
         *
         * @alias directory.groups.update
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable Id of the group. If Id, it should match with id of group object
         * @param {admin(directory_v1).Group} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/groups/{groupKey}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['groupKey'],
                pathParams: ['groupKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        aliases: {
            /**
             * directory.groups.aliases.delete
             *
             * @desc Remove a alias for the group
             *
             * @alias directory.groups.aliases.delete
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.alias The alias to be removed
             * @param {string} params.groupKey Email or immutable Id of the group
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
                        url: (rootUrl + '/admin/directory/v1/groups/{groupKey}/aliases/{alias}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['groupKey', 'alias'],
                    pathParams: ['alias', 'groupKey'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * directory.groups.aliases.insert
             *
             * @desc Add a alias for the group
             *
             * @alias directory.groups.aliases.insert
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.groupKey Email or immutable Id of the group
             * @param {admin(directory_v1).Alias} params.resource Request body data
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
                        url: (rootUrl + '/admin/directory/v1/groups/{groupKey}/aliases').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['groupKey'],
                    pathParams: ['groupKey'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * directory.groups.aliases.list
             *
             * @desc List all aliases for a group
             *
             * @alias directory.groups.aliases.list
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.groupKey Email or immutable Id of the group
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
                        url: (rootUrl + '/admin/directory/v1/groups/{groupKey}/aliases').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['groupKey'],
                    pathParams: ['groupKey'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
    self.members = {
        /**
         * directory.members.delete
         *
         * @desc Remove membership.
         *
         * @alias directory.members.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable Id of the group
         * @param {string} params.memberKey Email or immutable Id of the member
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
                    url: (rootUrl + '/admin/directory/v1/groups/{groupKey}/members/{memberKey}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['groupKey', 'memberKey'],
                pathParams: ['groupKey', 'memberKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.members.get
         *
         * @desc Retrieve Group Member
         *
         * @alias directory.members.get
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable Id of the group
         * @param {string} params.memberKey Email or immutable Id of the member
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
                    url: (rootUrl + '/admin/directory/v1/groups/{groupKey}/members/{memberKey}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['groupKey', 'memberKey'],
                pathParams: ['groupKey', 'memberKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.members.insert
         *
         * @desc Add user to the specified group.
         *
         * @alias directory.members.insert
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable Id of the group
         * @param {admin(directory_v1).Member} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/groups/{groupKey}/members').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['groupKey'],
                pathParams: ['groupKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.members.list
         *
         * @desc Retrieve all members in a group (paginated)
         *
         * @alias directory.members.list
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable Id of the group
         * @param {integer=} params.maxResults Maximum number of results to return. Default is 200
         * @param {string=} params.pageToken Token to specify next page in the list
         * @param {string=} params.roles Comma separated role values to filter list results on.
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
                    url: (rootUrl + '/admin/directory/v1/groups/{groupKey}/members').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['groupKey'],
                pathParams: ['groupKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.members.patch
         *
         * @desc Update membership of a user in the specified group. This method supports patch semantics.
         *
         * @alias directory.members.patch
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable Id of the group. If Id, it should match with id of group object
         * @param {string} params.memberKey Email or immutable Id of the user. If Id, it should match with id of member object
         * @param {admin(directory_v1).Member} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/groups/{groupKey}/members/{memberKey}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['groupKey', 'memberKey'],
                pathParams: ['groupKey', 'memberKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.members.update
         *
         * @desc Update membership of a user in the specified group.
         *
         * @alias directory.members.update
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable Id of the group. If Id, it should match with id of group object
         * @param {string} params.memberKey Email or immutable Id of the user. If Id, it should match with id of member object
         * @param {admin(directory_v1).Member} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/groups/{groupKey}/members/{memberKey}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['groupKey', 'memberKey'],
                pathParams: ['groupKey', 'memberKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.mobiledevices = {
        /**
         * directory.mobiledevices.action
         *
         * @desc Take action on Mobile Device
         *
         * @alias directory.mobiledevices.action
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.resourceId Immutable ID of Mobile Device
         * @param {admin(directory_v1).MobileDeviceAction} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        action: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customerId', 'resourceId'],
                pathParams: ['customerId', 'resourceId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.mobiledevices.delete
         *
         * @desc Delete Mobile Device
         *
         * @alias directory.mobiledevices.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.resourceId Immutable ID of Mobile Device
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['customerId', 'resourceId'],
                pathParams: ['customerId', 'resourceId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.mobiledevices.get
         *
         * @desc Retrieve Mobile Device
         *
         * @alias directory.mobiledevices.get
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string=} params.projection Restrict information returned to a set of selected fields.
         * @param {string} params.resourceId Immutable ID of Mobile Device
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerId', 'resourceId'],
                pathParams: ['customerId', 'resourceId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.mobiledevices.list
         *
         * @desc Retrieve all Mobile Devices of a customer (paginated)
         *
         * @alias directory.mobiledevices.list
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {integer=} params.maxResults Maximum number of results to return. Default is 100
         * @param {string=} params.orderBy Column to use for sorting results
         * @param {string=} params.pageToken Token to specify next page in the list
         * @param {string=} params.projection Restrict information returned to a set of selected fields.
         * @param {string=} params.query Search string in the format given at http://support.google.com/a/bin/answer.py?hl=en&answer=1408863#search
         * @param {string=} params.sortOrder Whether to return results in ascending or descending order. Only of use when orderBy is also used
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/devices/mobile').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerId'],
                pathParams: ['customerId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.notifications = {
        /**
         * directory.notifications.delete
         *
         * @desc Deletes a notification
         *
         * @alias directory.notifications.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account. The customerId is also returned as part of the Users resource.
         * @param {string} params.notificationId The unique ID of the notification.
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/notifications/{notificationId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['customer', 'notificationId'],
                pathParams: ['customer', 'notificationId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.notifications.get
         *
         * @desc Retrieves a notification.
         *
         * @alias directory.notifications.get
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account. The customerId is also returned as part of the Users resource.
         * @param {string} params.notificationId The unique ID of the notification.
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/notifications/{notificationId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer', 'notificationId'],
                pathParams: ['customer', 'notificationId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.notifications.list
         *
         * @desc Retrieves a list of notifications.
         *
         * @alias directory.notifications.list
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account.
         * @param {string=} params.language The ISO 639-1 code of the language notifications are returned in. The default is English (en).
         * @param {integer=} params.maxResults Maximum number of notifications to return per page. The default is 100.
         * @param {string=} params.pageToken The token to specify the page of results to retrieve.
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/notifications').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.notifications.patch
         *
         * @desc Updates a notification. This method supports patch semantics.
         *
         * @alias directory.notifications.patch
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account.
         * @param {string} params.notificationId The unique ID of the notification.
         * @param {admin(directory_v1).Notification} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/notifications/{notificationId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['customer', 'notificationId'],
                pathParams: ['customer', 'notificationId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.notifications.update
         *
         * @desc Updates a notification.
         *
         * @alias directory.notifications.update
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account.
         * @param {string} params.notificationId The unique ID of the notification.
         * @param {admin(directory_v1).Notification} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/notifications/{notificationId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['customer', 'notificationId'],
                pathParams: ['customer', 'notificationId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.orgunits = {
        /**
         * directory.orgunits.delete
         *
         * @desc Remove Organization Unit
         *
         * @alias directory.orgunits.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.orgUnitPath Full path of the organization unit or its Id
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['customerId', 'orgUnitPath'],
                pathParams: ['customerId', 'orgUnitPath'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.orgunits.get
         *
         * @desc Retrieve Organization Unit
         *
         * @alias directory.orgunits.get
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.orgUnitPath Full path of the organization unit or its Id
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerId', 'orgUnitPath'],
                pathParams: ['customerId', 'orgUnitPath'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.orgunits.insert
         *
         * @desc Add Organization Unit
         *
         * @alias directory.orgunits.insert
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {admin(directory_v1).OrgUnit} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/orgunits').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customerId'],
                pathParams: ['customerId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.orgunits.list
         *
         * @desc Retrieve all Organization Units
         *
         * @alias directory.orgunits.list
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string=} params.orgUnitPath the URL-encoded organization unit's path or its Id
         * @param {string=} params.type Whether to return all sub-organizations or just immediate children
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/orgunits').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerId'],
                pathParams: ['customerId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.orgunits.patch
         *
         * @desc Update Organization Unit. This method supports patch semantics.
         *
         * @alias directory.orgunits.patch
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.orgUnitPath Full path of the organization unit or its Id
         * @param {admin(directory_v1).OrgUnit} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['customerId', 'orgUnitPath'],
                pathParams: ['customerId', 'orgUnitPath'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.orgunits.update
         *
         * @desc Update Organization Unit
         *
         * @alias directory.orgunits.update
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.orgUnitPath Full path of the organization unit or its Id
         * @param {admin(directory_v1).OrgUnit} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['customerId', 'orgUnitPath'],
                pathParams: ['customerId', 'orgUnitPath'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.privileges = {
        /**
         * directory.privileges.list
         *
         * @desc Retrieves a paginated list of all privileges for a customer.
         *
         * @alias directory.privileges.list
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/roles/ALL/privileges').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.resolvedAppAccessSettings = {
        /**
         * directory.resolvedAppAccessSettings.GetSettings
         *
         * @desc Retrieves resolved app access settings of the logged in user.
         *
         * @alias directory.resolvedAppAccessSettings.GetSettings
         * @memberOf! admin(directory_v1)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        GetSettings: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/resolvedappaccesssettings').replace(/([^:]\/)\/+/g, '$1'),
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
         * directory.resolvedAppAccessSettings.ListTrustedApps
         *
         * @desc Retrieves the list of apps trusted by the admin of the logged in user.
         *
         * @alias directory.resolvedAppAccessSettings.ListTrustedApps
         * @memberOf! admin(directory_v1)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        ListTrustedApps: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/trustedapps').replace(/([^:]\/)\/+/g, '$1'),
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
    self.resources = {
        calendars: {
            /**
             * directory.resources.calendars.delete
             *
             * @desc Deletes a calendar resource.
             *
             * @alias directory.resources.calendars.delete
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.calendarResourceId The unique ID of the calendar resource to delete.
             * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
                        url: (rootUrl + '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['customer', 'calendarResourceId'],
                    pathParams: ['calendarResourceId', 'customer'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * directory.resources.calendars.get
             *
             * @desc Retrieves a calendar resource.
             *
             * @alias directory.resources.calendars.get
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.calendarResourceId The unique ID of the calendar resource to retrieve.
             * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
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
                        url: (rootUrl + '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['customer', 'calendarResourceId'],
                    pathParams: ['calendarResourceId', 'customer'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * directory.resources.calendars.insert
             *
             * @desc Inserts a calendar resource.
             *
             * @alias directory.resources.calendars.insert
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
             * @param {admin(directory_v1).CalendarResource} params.resource Request body data
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
                        url: (rootUrl + '/admin/directory/v1/customer/{customer}/resources/calendars').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['customer'],
                    pathParams: ['customer'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * directory.resources.calendars.list
             *
             * @desc Retrieves a list of calendar resources for an account.
             *
             * @alias directory.resources.calendars.list
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
             * @param {integer=} params.maxResults Maximum number of results to return.
             * @param {string=} params.pageToken Token to specify the next page in the list.
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
                        url: (rootUrl + '/admin/directory/v1/customer/{customer}/resources/calendars').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['customer'],
                    pathParams: ['customer'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * directory.resources.calendars.patch
             *
             * @desc Updates a calendar resource.  This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved. This method supports patch semantics.
             *
             * @alias directory.resources.calendars.patch
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.calendarResourceId The unique ID of the calendar resource to update.
             * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
             * @param {admin(directory_v1).CalendarResource} params.resource Request body data
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
                        url: (rootUrl + '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['customer', 'calendarResourceId'],
                    pathParams: ['calendarResourceId', 'customer'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * directory.resources.calendars.update
             *
             * @desc Updates a calendar resource.  This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.
             *
             * @alias directory.resources.calendars.update
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.calendarResourceId The unique ID of the calendar resource to update.
             * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
             * @param {admin(directory_v1).CalendarResource} params.resource Request body data
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
                        url: (rootUrl + '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['customer', 'calendarResourceId'],
                    pathParams: ['calendarResourceId', 'customer'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
    self.roleAssignments = {
        /**
         * directory.roleAssignments.delete
         *
         * @desc Deletes a role assignment.
         *
         * @alias directory.roleAssignments.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.roleAssignmentId Immutable ID of the role assignment.
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['customer', 'roleAssignmentId'],
                pathParams: ['customer', 'roleAssignmentId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.roleAssignments.get
         *
         * @desc Retrieve a role assignment.
         *
         * @alias directory.roleAssignments.get
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.roleAssignmentId Immutable ID of the role assignment.
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer', 'roleAssignmentId'],
                pathParams: ['customer', 'roleAssignmentId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.roleAssignments.insert
         *
         * @desc Creates a role assignment.
         *
         * @alias directory.roleAssignments.insert
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {admin(directory_v1).RoleAssignment} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/roleassignments').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.roleAssignments.list
         *
         * @desc Retrieves a paginated list of all roleAssignments.
         *
         * @alias directory.roleAssignments.list
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Token to specify the next page in the list.
         * @param {string=} params.roleId Immutable ID of a role. If included in the request, returns only role assignments containing this role ID.
         * @param {string=} params.userKey The user's primary email address, alias email address, or unique user ID. If included in the request, returns role assignments only for this user.
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/roleassignments').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.roles = {
        /**
         * directory.roles.delete
         *
         * @desc Deletes a role.
         *
         * @alias directory.roles.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.roleId Immutable ID of the role.
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/roles/{roleId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['customer', 'roleId'],
                pathParams: ['customer', 'roleId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.roles.get
         *
         * @desc Retrieves a role.
         *
         * @alias directory.roles.get
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.roleId Immutable ID of the role.
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/roles/{roleId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer', 'roleId'],
                pathParams: ['customer', 'roleId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.roles.insert
         *
         * @desc Creates a role.
         *
         * @alias directory.roles.insert
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {admin(directory_v1).Role} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/roles').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.roles.list
         *
         * @desc Retrieves a paginated list of all the roles in a domain.
         *
         * @alias directory.roles.list
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Token to specify the next page in the list.
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/roles').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customer'],
                pathParams: ['customer'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.roles.patch
         *
         * @desc Updates a role. This method supports patch semantics.
         *
         * @alias directory.roles.patch
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.roleId Immutable ID of the role.
         * @param {admin(directory_v1).Role} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/roles/{roleId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['customer', 'roleId'],
                pathParams: ['customer', 'roleId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.roles.update
         *
         * @desc Updates a role.
         *
         * @alias directory.roles.update
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.roleId Immutable ID of the role.
         * @param {admin(directory_v1).Role} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customer}/roles/{roleId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['customer', 'roleId'],
                pathParams: ['customer', 'roleId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.schemas = {
        /**
         * directory.schemas.delete
         *
         * @desc Delete schema
         *
         * @alias directory.schemas.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.schemaKey Name or immutable Id of the schema
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['customerId', 'schemaKey'],
                pathParams: ['customerId', 'schemaKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.schemas.get
         *
         * @desc Retrieve schema
         *
         * @alias directory.schemas.get
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.schemaKey Name or immutable Id of the schema
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerId', 'schemaKey'],
                pathParams: ['customerId', 'schemaKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.schemas.insert
         *
         * @desc Create schema.
         *
         * @alias directory.schemas.insert
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {admin(directory_v1).Schema} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/schemas').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['customerId'],
                pathParams: ['customerId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.schemas.list
         *
         * @desc Retrieve all schemas for a customer
         *
         * @alias directory.schemas.list
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/schemas').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['customerId'],
                pathParams: ['customerId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.schemas.patch
         *
         * @desc Update schema. This method supports patch semantics.
         *
         * @alias directory.schemas.patch
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.schemaKey Name or immutable Id of the schema.
         * @param {admin(directory_v1).Schema} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['customerId', 'schemaKey'],
                pathParams: ['customerId', 'schemaKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.schemas.update
         *
         * @desc Update schema
         *
         * @alias directory.schemas.update
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.schemaKey Name or immutable Id of the schema.
         * @param {admin(directory_v1).Schema} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['customerId', 'schemaKey'],
                pathParams: ['customerId', 'schemaKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.tokens = {
        /**
         * directory.tokens.delete
         *
         * @desc Delete all access tokens issued by a user for an application.
         *
         * @alias directory.tokens.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clientId The Client ID of the application the token is issued to.
         * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
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
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}/tokens/{clientId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['userKey', 'clientId'],
                pathParams: ['clientId', 'userKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.tokens.get
         *
         * @desc Get information about an access token issued by a user.
         *
         * @alias directory.tokens.get
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.clientId The Client ID of the application the token is issued to.
         * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
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
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}/tokens/{clientId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userKey', 'clientId'],
                pathParams: ['clientId', 'userKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.tokens.list
         *
         * @desc Returns the set of tokens specified user has issued to 3rd party applications.
         *
         * @alias directory.tokens.list
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
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
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}/tokens').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.users = {
        /**
         * directory.users.delete
         *
         * @desc Delete user
         *
         * @alias directory.users.delete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Email or immutable Id of the user
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
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.users.get
         *
         * @desc retrieve user
         *
         * @alias directory.users.get
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.customFieldMask Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
         * @param {string=} params.projection What subset of fields to fetch for this user.
         * @param {string} params.userKey Email or immutable Id of the user
         * @param {string=} params.viewType Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
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
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.users.insert
         *
         * @desc create user.
         *
         * @alias directory.users.insert
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {admin(directory_v1).User} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/users').replace(/([^:]\/)\/+/g, '$1'),
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
         * directory.users.list
         *
         * @desc Retrieve either deleted users or all users in a domain (paginated)
         *
         * @alias directory.users.list
         * @memberOf! admin(directory_v1)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.customFieldMask Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
         * @param {string=} params.customer Immutable ID of the G Suite account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
         * @param {string=} params.domain Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead.
         * @param {string=} params.event Event on which subscription is intended (if subscribing)
         * @param {integer=} params.maxResults Maximum number of results to return. Default is 100. Max allowed is 500
         * @param {string=} params.orderBy Column to use for sorting results
         * @param {string=} params.pageToken Token to specify next page in the list
         * @param {string=} params.projection What subset of fields to fetch for this user.
         * @param {string=} params.query Query string search. Should be of the form "". Complete documentation is at https://developers.google.com/admin-sdk/directory/v1/guides/search-users
         * @param {string=} params.showDeleted If set to true retrieves the list of deleted users. Default is false
         * @param {string=} params.sortOrder Whether to return results in ascending or descending order.
         * @param {string=} params.viewType Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
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
                    url: (rootUrl + '/admin/directory/v1/users').replace(/([^:]\/)\/+/g, '$1'),
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
         * directory.users.makeAdmin
         *
         * @desc change admin status of a user
         *
         * @alias directory.users.makeAdmin
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Email or immutable Id of the user as admin
         * @param {admin(directory_v1).UserMakeAdmin} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        makeAdmin: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}/makeAdmin').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.users.patch
         *
         * @desc update user. This method supports patch semantics.
         *
         * @alias directory.users.patch
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Email or immutable Id of the user. If Id, it should match with id of user object
         * @param {admin(directory_v1).User} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.users.undelete
         *
         * @desc Undelete a deleted user
         *
         * @alias directory.users.undelete
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey The immutable id of the user
         * @param {admin(directory_v1).UserUndelete} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}/undelete').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.users.update
         *
         * @desc update user
         *
         * @alias directory.users.update
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Email or immutable Id of the user. If Id, it should match with id of user object
         * @param {admin(directory_v1).User} params.resource Request body data
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
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.users.watch
         *
         * @desc Watch for changes in users list
         *
         * @alias directory.users.watch
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.customFieldMask Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
         * @param {string=} params.customer Immutable ID of the G Suite account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
         * @param {string=} params.domain Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead.
         * @param {string=} params.event Event on which subscription is intended (if subscribing)
         * @param {integer=} params.maxResults Maximum number of results to return. Default is 100. Max allowed is 500
         * @param {string=} params.orderBy Column to use for sorting results
         * @param {string=} params.pageToken Token to specify next page in the list
         * @param {string=} params.projection What subset of fields to fetch for this user.
         * @param {string=} params.query Query string search. Should be of the form "". Complete documentation is at https://developers.google.com/admin-sdk/directory/v1/guides/search-users
         * @param {string=} params.showDeleted If set to true retrieves the list of deleted users. Default is false
         * @param {string=} params.sortOrder Whether to return results in ascending or descending order.
         * @param {string=} params.viewType Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
         * @param {admin(directory_v1).Channel} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        watch: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/users/watch').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: [],
                pathParams: [],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        aliases: {
            /**
             * directory.users.aliases.delete
             *
             * @desc Remove a alias for the user
             *
             * @alias directory.users.aliases.delete
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.alias The alias to be removed
             * @param {string} params.userKey Email or immutable Id of the user
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
                        url: (rootUrl + '/admin/directory/v1/users/{userKey}/aliases/{alias}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['userKey', 'alias'],
                    pathParams: ['alias', 'userKey'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * directory.users.aliases.insert
             *
             * @desc Add a alias for the user
             *
             * @alias directory.users.aliases.insert
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.userKey Email or immutable Id of the user
             * @param {admin(directory_v1).Alias} params.resource Request body data
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
                        url: (rootUrl + '/admin/directory/v1/users/{userKey}/aliases').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['userKey'],
                    pathParams: ['userKey'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * directory.users.aliases.list
             *
             * @desc List all aliases for a user
             *
             * @alias directory.users.aliases.list
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.event Event on which subscription is intended (if subscribing)
             * @param {string} params.userKey Email or immutable Id of the user
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
                        url: (rootUrl + '/admin/directory/v1/users/{userKey}/aliases').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['userKey'],
                    pathParams: ['userKey'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * directory.users.aliases.watch
             *
             * @desc Watch for changes in user aliases list
             *
             * @alias directory.users.aliases.watch
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.event Event on which subscription is intended (if subscribing)
             * @param {string} params.userKey Email or immutable Id of the user
             * @param {admin(directory_v1).Channel} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            watch: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/admin/directory/v1/users/{userKey}/aliases/watch').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['userKey'],
                    pathParams: ['userKey'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        photos: {
            /**
             * directory.users.photos.delete
             *
             * @desc Remove photos for the user
             *
             * @alias directory.users.photos.delete
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.userKey Email or immutable Id of the user
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
                        url: (rootUrl + '/admin/directory/v1/users/{userKey}/photos/thumbnail').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['userKey'],
                    pathParams: ['userKey'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * directory.users.photos.get
             *
             * @desc Retrieve photo of a user
             *
             * @alias directory.users.photos.get
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.userKey Email or immutable Id of the user
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
                        url: (rootUrl + '/admin/directory/v1/users/{userKey}/photos/thumbnail').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['userKey'],
                    pathParams: ['userKey'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * directory.users.photos.patch
             *
             * @desc Add a photo for the user. This method supports patch semantics.
             *
             * @alias directory.users.photos.patch
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.userKey Email or immutable Id of the user
             * @param {admin(directory_v1).UserPhoto} params.resource Request body data
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
                        url: (rootUrl + '/admin/directory/v1/users/{userKey}/photos/thumbnail').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['userKey'],
                    pathParams: ['userKey'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * directory.users.photos.update
             *
             * @desc Add a photo for the user
             *
             * @alias directory.users.photos.update
             * @memberOf! admin(directory_v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.userKey Email or immutable Id of the user
             * @param {admin(directory_v1).UserPhoto} params.resource Request body data
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
                        url: (rootUrl + '/admin/directory/v1/users/{userKey}/photos/thumbnail').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['userKey'],
                    pathParams: ['userKey'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
    self.verificationCodes = {
        /**
         * directory.verificationCodes.generate
         *
         * @desc Generate new backup verification codes for the user.
         *
         * @alias directory.verificationCodes.generate
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Email or immutable Id of the user
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}/verificationCodes/generate').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.verificationCodes.invalidate
         *
         * @desc Invalidate the current backup verification codes for the user.
         *
         * @alias directory.verificationCodes.invalidate
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Email or immutable Id of the user
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        invalidate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}/verificationCodes/invalidate').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * directory.verificationCodes.list
         *
         * @desc Returns the current set of valid backup verification codes for the specified user.
         *
         * @alias directory.verificationCodes.list
         * @memberOf! admin(directory_v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
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
                    url: (rootUrl + '/admin/directory/v1/users/{userKey}/verificationCodes').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['userKey'],
                pathParams: ['userKey'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Admin;
//# sourceMappingURL=directory_v1.js.map