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
 * Ad Exchange Buyer API II
 *
 * Accesses the latest features for managing Ad Exchange accounts, Real-Time Bidding configurations and auction metrics, and Marketplace programmatic deals.
 *
 * @example
 * const google = require('googleapis');
 * const adexchangebuyer2 = google.adexchangebuyer2('v2beta1');
 *
 * @namespace adexchangebuyer2
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Adexchangebuyer2
 */
function Adexchangebuyer2(options) {
    const self = this;
    self._options = options || {};
    self.accounts = {
        clients: {
            /**
             * adexchangebuyer2.accounts.clients.create
             *
             * @desc Creates a new client buyer.
             *
             * @alias adexchangebuyer2.accounts.clients.create
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to create a client for. (required)
             * @param {adexchangebuyer2(v2beta1).Client} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/accounts/{accountId}/clients').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['accountId'],
                    pathParams: ['accountId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * adexchangebuyer2.accounts.clients.get
             *
             * @desc Gets a client buyer with a given client account ID.
             *
             * @alias adexchangebuyer2.accounts.clients.get
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
             * @param {string} params.clientAccountId Numerical account ID of the client buyer to retrieve. (required)
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
                const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/accounts/{accountId}/clients/{clientAccountId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'clientAccountId'],
                    pathParams: ['accountId', 'clientAccountId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * adexchangebuyer2.accounts.clients.list
             *
             * @desc Lists all the clients for the current sponsor buyer.
             *
             * @alias adexchangebuyer2.accounts.clients.list
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId Unique numerical account ID of the sponsor buyer to list the clients for.
             * @param {integer=} params.pageSize Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
             * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the accounts.clients.list method.
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
                const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/accounts/{accountId}/clients').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['accountId'],
                    pathParams: ['accountId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * adexchangebuyer2.accounts.clients.update
             *
             * @desc Updates an existing client buyer.
             *
             * @alias adexchangebuyer2.accounts.clients.update
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to update a client for. (required)
             * @param {string} params.clientAccountId Unique numerical account ID of the client to update. (required)
             * @param {adexchangebuyer2(v2beta1).Client} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/accounts/{accountId}/clients/{clientAccountId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'clientAccountId'],
                    pathParams: ['accountId', 'clientAccountId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            invitations: {
                /**
                 * adexchangebuyer2.accounts.clients.invitations.create
                 *
                 * @desc Creates and sends out an email invitation to access an Ad Exchange client buyer account.
                 *
                 * @alias adexchangebuyer2.accounts.clients.invitations.create
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
                 * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user should be associated with. (required)
                 * @param {adexchangebuyer2(v2beta1).ClientUserInvitation} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'clientAccountId'],
                        pathParams: ['accountId', 'clientAccountId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * adexchangebuyer2.accounts.clients.invitations.get
                 *
                 * @desc Retrieves an existing client user invitation.
                 *
                 * @alias adexchangebuyer2.accounts.clients.invitations.get
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
                 * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user invitation to be retrieved is associated with. (required)
                 * @param {string} params.invitationId Numerical identifier of the user invitation to retrieve. (required)
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
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations/{invitationId}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'clientAccountId', 'invitationId'],
                        pathParams: ['accountId', 'clientAccountId', 'invitationId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * adexchangebuyer2.accounts.clients.invitations.list
                 *
                 * @desc Lists all the client users invitations for a client with a given account ID.
                 *
                 * @alias adexchangebuyer2.accounts.clients.invitations.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
                 * @param {string} params.clientAccountId Numerical account ID of the client buyer to list invitations for. (required) You must either specify a string representation of a numerical account identifier or the `-` character to list all the invitations for all the clients of a given sponsor buyer.
                 * @param {integer=} params.pageSize Requested page size. Server may return fewer clients than requested. If unspecified, server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientUserInvitationsResponse.nextPageToken returned from the previous call to the clients.invitations.list method.
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
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'clientAccountId'],
                        pathParams: ['accountId', 'clientAccountId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            users: {
                /**
                 * adexchangebuyer2.accounts.clients.users.get
                 *
                 * @desc Retrieves an existing client user.
                 *
                 * @alias adexchangebuyer2.accounts.clients.users.get
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
                 * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
                 * @param {string} params.userId Numerical identifier of the user to retrieve. (required)
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
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'clientAccountId', 'userId'],
                        pathParams: ['accountId', 'clientAccountId', 'userId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * adexchangebuyer2.accounts.clients.users.list
                 *
                 * @desc Lists all the known client users for a specified sponsor buyer account ID.
                 *
                 * @alias adexchangebuyer2.accounts.clients.users.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.accountId Numerical account ID of the sponsor buyer of the client to list users for. (required)
                 * @param {string} params.clientAccountId The account ID of the client buyer to list users for. (required) You must specify either a string representation of a numerical account identifier or the `-` character to list all the client users for all the clients of a given sponsor buyer.
                 * @param {integer=} params.pageSize Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the accounts.clients.users.list method.
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
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'clientAccountId'],
                        pathParams: ['accountId', 'clientAccountId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * adexchangebuyer2.accounts.clients.users.update
                 *
                 * @desc Updates an existing client user. Only the user status can be changed on update.
                 *
                 * @alias adexchangebuyer2.accounts.clients.users.update
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
                 * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
                 * @param {string} params.userId Numerical identifier of the user to retrieve. (required)
                 * @param {adexchangebuyer2(v2beta1).ClientUser} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'PUT'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'clientAccountId', 'userId'],
                        pathParams: ['accountId', 'clientAccountId', 'userId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            }
        },
        creatives: {
            /**
             * adexchangebuyer2.accounts.creatives.create
             *
             * @desc Creates a creative.
             *
             * @alias adexchangebuyer2.accounts.creatives.create
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
             * @param {string=} params.duplicateIdMode Indicates if multiple creatives can share an ID or not. Default is NO_DUPLICATES (one ID per creative).
             * @param {adexchangebuyer2(v2beta1).Creative} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/accounts/{accountId}/creatives').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['accountId'],
                    pathParams: ['accountId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * adexchangebuyer2.accounts.creatives.get
             *
             * @desc Gets a creative.
             *
             * @alias adexchangebuyer2.accounts.creatives.get
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId The account the creative belongs to.
             * @param {string} params.creativeId The ID of the creative to retrieve.
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
                const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/accounts/{accountId}/creatives/{creativeId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'creativeId'],
                    pathParams: ['accountId', 'creativeId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * adexchangebuyer2.accounts.creatives.list
             *
             * @desc Lists creatives.
             *
             * @alias adexchangebuyer2.accounts.creatives.list
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId The account to list the creatives from. Specify "-" to list all creatives the current user has access to.
             * @param {integer=} params.pageSize Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available via another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
             * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.next_page_token returned from the previous call to 'ListCreatives' method.
             * @param {string=} params.query An optional query string to filter creatives. If no filter is specified, all active creatives will be returned. Supported queries are: <ul> <li>accountId=<i>account_id_string</i> <li>creativeId=<i>creative_id_string</i> <li>dealsStatus: {approved, conditionally_approved, disapproved,                    not_checked} <li>openAuctionStatus: {approved, conditionally_approved, disapproved,                           not_checked} <li>attribute: {a numeric attribute from the list of attributes} <li>disapprovalReason: {a reason from DisapprovalReason </ul> Example: 'accountId=12345 AND (dealsStatus:disapproved AND disapprovalReason:unacceptable_content) OR attribute:47'
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
                const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/accounts/{accountId}/creatives').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['accountId'],
                    pathParams: ['accountId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * adexchangebuyer2.accounts.creatives.stopWatching
             *
             * @desc Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.
             *
             * @alias adexchangebuyer2.accounts.creatives.stopWatching
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId The account of the creative to stop notifications for.
             * @param {string} params.creativeId The creative ID of the creative to stop notifications for. Specify "-" to specify stopping account level notifications.
             * @param {adexchangebuyer2(v2beta1).StopWatchingCreativeRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            stopWatching: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/accounts/{accountId}/creatives/{creativeId}:stopWatching').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'creativeId'],
                    pathParams: ['accountId', 'creativeId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * adexchangebuyer2.accounts.creatives.update
             *
             * @desc Updates a creative.
             *
             * @alias adexchangebuyer2.accounts.creatives.update
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
             * @param {string} params.creativeId The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method.
             * @param {adexchangebuyer2(v2beta1).Creative} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/accounts/{accountId}/creatives/{creativeId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'creativeId'],
                    pathParams: ['accountId', 'creativeId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * adexchangebuyer2.accounts.creatives.watch
             *
             * @desc Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.
             *
             * @alias adexchangebuyer2.accounts.creatives.watch
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.accountId The account of the creative to watch.
             * @param {string} params.creativeId The creative ID to watch for status changes. Specify "-" to watch all creatives under the above account. If both creative-level and account-level notifications are sent, only a single notification will be sent to the creative-level notification topic.
             * @param {adexchangebuyer2(v2beta1).WatchCreativeRequest} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/accounts/{accountId}/creatives/{creativeId}:watch').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['accountId', 'creativeId'],
                    pathParams: ['accountId', 'creativeId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            dealAssociations: {
                /**
                 * adexchangebuyer2.accounts.creatives.dealAssociations.add
                 *
                 * @desc Associate an existing deal with a creative.
                 *
                 * @alias adexchangebuyer2.accounts.creatives.dealAssociations.add
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.accountId The account the creative belongs to.
                 * @param {string} params.creativeId The ID of the creative associated with the deal.
                 * @param {adexchangebuyer2(v2beta1).AddDealAssociationRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                add: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:add').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'creativeId'],
                        pathParams: ['accountId', 'creativeId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * adexchangebuyer2.accounts.creatives.dealAssociations.list
                 *
                 * @desc List all creative-deal associations.
                 *
                 * @alias adexchangebuyer2.accounts.creatives.dealAssociations.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.accountId The account to list the associations from. Specify "-" to list all creatives the current user has access to.
                 * @param {string} params.creativeId The creative ID to list the associations from. Specify "-" to list all creatives under the above account.
                 * @param {integer=} params.pageSize Requested page size. Server may return fewer associations than requested. If unspecified, server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListDealAssociationsResponse.next_page_token returned from the previous call to 'ListDealAssociations' method.
                 * @param {string=} params.query An optional query string to filter deal associations. If no filter is specified, all associations will be returned. Supported queries are: <ul> <li>accountId=<i>account_id_string</i> <li>creativeId=<i>creative_id_string</i> <li>dealsId=<i>deals_id_string</i> <li>dealsStatus:{approved, conditionally_approved, disapproved,                   not_checked} <li>openAuctionStatus:{approved, conditionally_approved, disapproved,                          not_checked} </ul> Example: 'dealsId=12345 AND dealsStatus:disapproved'
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
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'creativeId'],
                        pathParams: ['accountId', 'creativeId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * adexchangebuyer2.accounts.creatives.dealAssociations.remove
                 *
                 * @desc Remove the association between a deal and a creative.
                 *
                 * @alias adexchangebuyer2.accounts.creatives.dealAssociations.remove
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.accountId The account the creative belongs to.
                 * @param {string} params.creativeId The ID of the creative associated with the deal.
                 * @param {adexchangebuyer2(v2beta1).RemoveDealAssociationRequest} params.resource Request body data
                 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                 * @param {callback} callback The callback that handles the response.
                 * @return {object} Request object
                 */
                remove: function (params, options, callback) {
                    if (typeof options === 'function') {
                        callback = options;
                        options = {};
                    }
                    options || (options = {});
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:remove').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['accountId', 'creativeId'],
                        pathParams: ['accountId', 'creativeId'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            }
        }
    };
    self.bidders = {
        accounts: {
            filterSets: {
                /**
                 * adexchangebuyer2.bidders.accounts.filterSets.create
                 *
                 * @desc Creates the specified filter set for the account with the given account ID.
                 *
                 * @alias adexchangebuyer2.bidders.accounts.filterSets.create
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.accountId Account ID of the buyer.
                 * @param {boolean=} params.isTransient Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.
                 * @param {string} params.ownerName Name of the owner (bidder or account) of the filter set to be created. For example: - For a bidder-level filter set for bidder 123: "bidders/123" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456"
                 * @param {adexchangebuyer2(v2beta1).FilterSet} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{ownerName}/filterSets').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['ownerName'],
                        pathParams: ['ownerName'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * adexchangebuyer2.bidders.accounts.filterSets.delete
                 *
                 * @desc Deletes the requested filter set from the account with the given account ID.
                 *
                 * @alias adexchangebuyer2.bidders.accounts.filterSets.delete
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.accountId Account ID of the buyer.
                 * @param {string=} params.filterSetId The ID of the filter set to delete.
                 * @param {string} params.name Full name of the resource to delete. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
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
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
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
                 * adexchangebuyer2.bidders.accounts.filterSets.get
                 *
                 * @desc Retrieves the requested filter set for the account with the given account ID.
                 *
                 * @alias adexchangebuyer2.bidders.accounts.filterSets.get
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.accountId Account ID of the buyer.
                 * @param {string=} params.filterSetId The ID of the filter set to get.
                 * @param {string} params.name Full name of the resource being requested. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
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
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
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
                 * adexchangebuyer2.bidders.accounts.filterSets.list
                 *
                 * @desc Lists all filter sets for the account with the given account ID.
                 *
                 * @alias adexchangebuyer2.bidders.accounts.filterSets.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.accountId Account ID of the buyer.
                 * @param {string} params.ownerName Name of the owner (bidder or account) of the filter sets to be listed. For example: - For a bidder-level filter set for bidder 123: "bidders/123" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456"
                 * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method.
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
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{ownerName}/filterSets').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['ownerName'],
                        pathParams: ['ownerName'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                bidMetrics: {
                    /**
                     * adexchangebuyer2.bidders.accounts.filterSets.bidMetrics.list
                     *
                     * @desc Lists all metrics that are measured in terms of number of bids.
                     *
                     * @alias adexchangebuyer2.bidders.accounts.filterSets.bidMetrics.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.accountId Account ID of the buyer.
                     * @param {string=} params.filterSetId The ID of the filter set to apply.
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.
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
                        const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{filterSetName}/bidMetrics').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName'],
                            pathParams: ['filterSetName'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                },
                bidResponseErrors: {
                    /**
                     * adexchangebuyer2.bidders.accounts.filterSets.bidResponseErrors.list
                     *
                     * @desc List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
                     *
                     * @alias adexchangebuyer2.bidders.accounts.filterSets.bidResponseErrors.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.accountId Account ID of the buyer.
                     * @param {string=} params.filterSetId The ID of the filter set to apply.
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.
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
                        const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{filterSetName}/bidResponseErrors').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName'],
                            pathParams: ['filterSetName'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                },
                bidResponsesWithoutBids: {
                    /**
                     * adexchangebuyer2.bidders.accounts.filterSets.bidResponsesWithoutBids.list
                     *
                     * @desc List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
                     *
                     * @alias adexchangebuyer2.bidders.accounts.filterSets.bidResponsesWithoutBids.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.accountId Account ID of the buyer.
                     * @param {string=} params.filterSetId The ID of the filter set to apply.
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.
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
                        const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{filterSetName}/bidResponsesWithoutBids').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName'],
                            pathParams: ['filterSetName'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                },
                filteredBidRequests: {
                    /**
                     * adexchangebuyer2.bidders.accounts.filterSets.filteredBidRequests.list
                     *
                     * @desc List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
                     *
                     * @alias adexchangebuyer2.bidders.accounts.filterSets.filteredBidRequests.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.accountId Account ID of the buyer.
                     * @param {string=} params.filterSetId The ID of the filter set to apply.
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.
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
                        const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{filterSetName}/filteredBidRequests').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName'],
                            pathParams: ['filterSetName'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                },
                filteredBids: {
                    /**
                     * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.list
                     *
                     * @desc List all reasons for which bids were filtered, with the number of bids filtered for each reason.
                     *
                     * @alias adexchangebuyer2.bidders.accounts.filterSets.filteredBids.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.accountId Account ID of the buyer.
                     * @param {string=} params.filterSetId The ID of the filter set to apply.
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.
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
                        const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{filterSetName}/filteredBids').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName'],
                            pathParams: ['filterSetName'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    creatives: {
                        /**
                         * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.creatives.list
                         *
                         * @desc List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
                         *
                         * @alias adexchangebuyer2.bidders.accounts.filterSets.filteredBids.creatives.list
                         * @memberOf! adexchangebuyer2(v2beta1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string=} params.accountId Account ID of the buyer.
                         * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes).
                         * @param {string=} params.filterSetId The ID of the filter set to apply.
                         * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                         * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                         * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.
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
                            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                            const parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/creatives').replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['filterSetName', 'creativeStatusId'],
                                pathParams: ['creativeStatusId', 'filterSetName'],
                                context: self
                            };
                            return apirequest_1.default(parameters, callback);
                        }
                    },
                    details: {
                        /**
                         * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.details.list
                         *
                         * @desc List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
                         *
                         * @alias adexchangebuyer2.bidders.accounts.filterSets.filteredBids.details.list
                         * @memberOf! adexchangebuyer2(v2beta1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string=} params.accountId Account ID of the buyer.
                         * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.
                         * @param {string=} params.filterSetId The ID of the filter set to apply.
                         * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                         * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                         * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.
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
                            const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                            const parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/details').replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['filterSetName', 'creativeStatusId'],
                                pathParams: ['creativeStatusId', 'filterSetName'],
                                context: self
                            };
                            return apirequest_1.default(parameters, callback);
                        }
                    }
                },
                impressionMetrics: {
                    /**
                     * adexchangebuyer2.bidders.accounts.filterSets.impressionMetrics.list
                     *
                     * @desc Lists all metrics that are measured in terms of number of impressions.
                     *
                     * @alias adexchangebuyer2.bidders.accounts.filterSets.impressionMetrics.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.accountId Account ID of the buyer.
                     * @param {string=} params.filterSetId The ID of the filter set to apply.
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.
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
                        const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{filterSetName}/impressionMetrics').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName'],
                            pathParams: ['filterSetName'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                },
                losingBids: {
                    /**
                     * adexchangebuyer2.bidders.accounts.filterSets.losingBids.list
                     *
                     * @desc List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
                     *
                     * @alias adexchangebuyer2.bidders.accounts.filterSets.losingBids.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.accountId Account ID of the buyer.
                     * @param {string=} params.filterSetId The ID of the filter set to apply.
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.
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
                        const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{filterSetName}/losingBids').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName'],
                            pathParams: ['filterSetName'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                },
                nonBillableWinningBids: {
                    /**
                     * adexchangebuyer2.bidders.accounts.filterSets.nonBillableWinningBids.list
                     *
                     * @desc List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.
                     *
                     * @alias adexchangebuyer2.bidders.accounts.filterSets.nonBillableWinningBids.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.accountId Account ID of the buyer.
                     * @param {string=} params.filterSetId The ID of the filter set to apply.
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.
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
                        const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{filterSetName}/nonBillableWinningBids').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName'],
                            pathParams: ['filterSetName'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                }
            }
        },
        filterSets: {
            /**
             * adexchangebuyer2.bidders.filterSets.create
             *
             * @desc Creates the specified filter set for the account with the given account ID.
             *
             * @alias adexchangebuyer2.bidders.filterSets.create
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.accountId Account ID of the buyer.
             * @param {integer=} params.filterSet.absoluteDateRange.endDate.day Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a year/month where the day is not significant.
             * @param {integer=} params.filterSet.absoluteDateRange.endDate.month Month of year. Must be from 1 to 12.
             * @param {integer=} params.filterSet.absoluteDateRange.endDate.year Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year.
             * @param {integer=} params.filterSet.absoluteDateRange.startDate.day Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a year/month where the day is not significant.
             * @param {integer=} params.filterSet.absoluteDateRange.startDate.month Month of year. Must be from 1 to 12.
             * @param {integer=} params.filterSet.absoluteDateRange.startDate.year Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year.
             * @param {string=} params.filterSet.buyerAccountId The ID of the buyer account on which to filter; optional.
             * @param {string=} params.filterSet.creativeId The ID of the creative on which to filter; optional.
             * @param {string=} params.filterSet.dealId The ID of the deal on which to filter; optional.
             * @param {string=} params.filterSet.environment The environment on which to filter; optional.
             * @param {string=} params.filterSet.filterSetId The ID of the filter set; unique within the account of the filter set owner. The value of this field is ignored in create operations.
             * @param {string=} params.filterSet.format The format on which to filter; optional.
             * @param {string=} params.filterSet.name A user-defined name of the filter set. Filter set names must be unique globally and match one of the patterns:  - `bidders/x/filterSets/x` (for accessing bidder-level troubleshooting data) - `bidders/x/accounts/x/filterSets/x` (for accessing buyer-level troubleshooting data)
             * @param {string=} params.filterSet.ownerAccountId The account ID of the buyer who owns this filter set. The value of this field is ignored in create operations.
             * @param {string=} params.filterSet.platforms The list of platforms on which to filter; may be empty. The filters represented by multiple platforms are ORed together (i.e. if non-empty, results must match any one of the platforms).
             * @param {string=} params.filterSet.realtimeTimeRange.startTimestamp The start timestamp of the real-time RTB metrics aggregation.
             * @param {integer=} params.filterSet.relativeDateRange.durationDays The number of days in the requested date range. E.g. for a range spanning today, 1. For a range spanning the last 7 days, 7.
             * @param {integer=} params.filterSet.relativeDateRange.offsetDays The end date of the filter set, specified as the number of days before today. E.g. for a range where the last date is today, 0.
             * @param {integer=} params.filterSet.sellerNetworkIds The list of IDs of the seller (publisher) networks on which to filter; may be empty. The filters represented by multiple seller network IDs are ORed together (i.e. if non-empty, results must match any one of the publisher networks). See [seller-network-ids](https://developers.google.com/ad-exchange/rtb/downloads/seller-network-ids) file for the set of existing seller network IDs.
             * @param {string=} params.filterSet.timeSeriesGranularity The granularity of time intervals if a time series breakdown is desired; optional.
             * @param {boolean=} params.isTransient Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.
             * @param {string} params.ownerName Name of the owner (bidder or account) of the filter set to be created. For example: - For a bidder-level filter set for bidder 123: "bidders/123" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456"
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
                const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/{ownerName}/filterSets').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['ownerName'],
                    pathParams: ['ownerName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * adexchangebuyer2.bidders.filterSets.delete
             *
             * @desc Deletes the requested filter set from the account with the given account ID.
             *
             * @alias adexchangebuyer2.bidders.filterSets.delete
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.accountId Account ID of the buyer.
             * @param {string=} params.filterSetId The ID of the filter set to delete.
             * @param {string} params.name Full name of the resource to delete. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
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
                const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
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
             * adexchangebuyer2.bidders.filterSets.get
             *
             * @desc Retrieves the requested filter set for the account with the given account ID.
             *
             * @alias adexchangebuyer2.bidders.filterSets.get
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.accountId Account ID of the buyer.
             * @param {string=} params.filterSetId The ID of the filter set to get.
             * @param {string} params.name Full name of the resource being requested. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
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
                const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
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
             * adexchangebuyer2.bidders.filterSets.list
             *
             * @desc Lists all filter sets for the account with the given account ID.
             *
             * @alias adexchangebuyer2.bidders.filterSets.list
             * @memberOf! adexchangebuyer2(v2beta1)
             *
             * @param {object} params Parameters for request
             * @param {string=} params.accountId Account ID of the buyer.
             * @param {string} params.ownerName Name of the owner (bidder or account) of the filter sets to be listed. For example: - For a bidder-level filter set for bidder 123: "bidders/123" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456"
             * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
             * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method.
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
                const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v2beta1/{ownerName}/filterSets').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['ownerName'],
                    pathParams: ['ownerName'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            bidMetrics: {
                /**
                 * adexchangebuyer2.bidders.filterSets.bidMetrics.list
                 *
                 * @desc Lists all metrics that are measured in terms of number of bids.
                 *
                 * @alias adexchangebuyer2.bidders.filterSets.bidMetrics.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.accountId Account ID of the buyer.
                 * @param {string=} params.filterSetId The ID of the filter set to apply.
                 * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                 * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.
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
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{filterSetName}/bidMetrics').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['filterSetName'],
                        pathParams: ['filterSetName'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            bidResponseErrors: {
                /**
                 * adexchangebuyer2.bidders.filterSets.bidResponseErrors.list
                 *
                 * @desc List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
                 *
                 * @alias adexchangebuyer2.bidders.filterSets.bidResponseErrors.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.accountId Account ID of the buyer.
                 * @param {string=} params.filterSetId The ID of the filter set to apply.
                 * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                 * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.
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
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{filterSetName}/bidResponseErrors').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['filterSetName'],
                        pathParams: ['filterSetName'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            bidResponsesWithoutBids: {
                /**
                 * adexchangebuyer2.bidders.filterSets.bidResponsesWithoutBids.list
                 *
                 * @desc List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
                 *
                 * @alias adexchangebuyer2.bidders.filterSets.bidResponsesWithoutBids.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.accountId Account ID of the buyer.
                 * @param {string=} params.filterSetId The ID of the filter set to apply.
                 * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                 * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.
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
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{filterSetName}/bidResponsesWithoutBids').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['filterSetName'],
                        pathParams: ['filterSetName'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            filteredBidRequests: {
                /**
                 * adexchangebuyer2.bidders.filterSets.filteredBidRequests.list
                 *
                 * @desc List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
                 *
                 * @alias adexchangebuyer2.bidders.filterSets.filteredBidRequests.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.accountId Account ID of the buyer.
                 * @param {string=} params.filterSetId The ID of the filter set to apply.
                 * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                 * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.
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
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{filterSetName}/filteredBidRequests').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['filterSetName'],
                        pathParams: ['filterSetName'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            filteredBids: {
                /**
                 * adexchangebuyer2.bidders.filterSets.filteredBids.list
                 *
                 * @desc List all reasons for which bids were filtered, with the number of bids filtered for each reason.
                 *
                 * @alias adexchangebuyer2.bidders.filterSets.filteredBids.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.accountId Account ID of the buyer.
                 * @param {string=} params.filterSetId The ID of the filter set to apply.
                 * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                 * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.
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
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{filterSetName}/filteredBids').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['filterSetName'],
                        pathParams: ['filterSetName'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                creatives: {
                    /**
                     * adexchangebuyer2.bidders.filterSets.filteredBids.creatives.list
                     *
                     * @desc List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
                     *
                     * @alias adexchangebuyer2.bidders.filterSets.filteredBids.creatives.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.accountId Account ID of the buyer.
                     * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes).
                     * @param {string=} params.filterSetId The ID of the filter set to apply.
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.
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
                        const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/creatives').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName', 'creativeStatusId'],
                            pathParams: ['creativeStatusId', 'filterSetName'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                },
                details: {
                    /**
                     * adexchangebuyer2.bidders.filterSets.filteredBids.details.list
                     *
                     * @desc List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
                     *
                     * @alias adexchangebuyer2.bidders.filterSets.filteredBids.details.list
                     * @memberOf! adexchangebuyer2(v2beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.accountId Account ID of the buyer.
                     * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.
                     * @param {string=} params.filterSetId The ID of the filter set to apply.
                     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.
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
                        const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/details').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['filterSetName', 'creativeStatusId'],
                            pathParams: ['creativeStatusId', 'filterSetName'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    }
                }
            },
            impressionMetrics: {
                /**
                 * adexchangebuyer2.bidders.filterSets.impressionMetrics.list
                 *
                 * @desc Lists all metrics that are measured in terms of number of impressions.
                 *
                 * @alias adexchangebuyer2.bidders.filterSets.impressionMetrics.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.accountId Account ID of the buyer.
                 * @param {string=} params.filterSetId The ID of the filter set to apply.
                 * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                 * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.
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
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{filterSetName}/impressionMetrics').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['filterSetName'],
                        pathParams: ['filterSetName'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            losingBids: {
                /**
                 * adexchangebuyer2.bidders.filterSets.losingBids.list
                 *
                 * @desc List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
                 *
                 * @alias adexchangebuyer2.bidders.filterSets.losingBids.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.accountId Account ID of the buyer.
                 * @param {string=} params.filterSetId The ID of the filter set to apply.
                 * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                 * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.
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
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{filterSetName}/losingBids').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['filterSetName'],
                        pathParams: ['filterSetName'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            },
            nonBillableWinningBids: {
                /**
                 * adexchangebuyer2.bidders.filterSets.nonBillableWinningBids.list
                 *
                 * @desc List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.
                 *
                 * @alias adexchangebuyer2.bidders.filterSets.nonBillableWinningBids.list
                 * @memberOf! adexchangebuyer2(v2beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string=} params.accountId Account ID of the buyer.
                 * @param {string=} params.filterSetId The ID of the filter set to apply.
                 * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123:   "bidders/123/filterSets/abc" - For an account-level filter set for the buyer account representing bidder   123: "bidders/123/accounts/123/filterSets/abc" - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: "bidders/123/accounts/456/filterSets/abc"
                 * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
                 * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.
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
                    const rootUrl = options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v2beta1/{filterSetName}/nonBillableWinningBids').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['filterSetName'],
                        pathParams: ['filterSetName'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            }
        }
    };
}
module.exports = Adexchangebuyer2;
//# sourceMappingURL=v2beta1.js.map