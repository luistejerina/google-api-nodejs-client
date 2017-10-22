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
 * Google App Engine Admin API
 *
 * The App Engine Admin API enables developers to provision and manage their App Engine applications.
 *
 * @example
 * const google = require('googleapis');
 * const appengine = google.appengine('v1alpha');
 *
 * @namespace appengine
 * @type {Function}
 * @version v1alpha
 * @variation v1alpha
 * @param {object=} options Options for Appengine
 */
function Appengine(options) {
    const self = this;
    self._options = options || {};
    self.apps = {
        authorizedCertificates: {
            /**
             * appengine.apps.authorizedCertificates.create
             *
             * @desc Uploads the specified SSL certificate.
             *
             * @alias appengine.apps.authorizedCertificates.create
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
             * @param {appengine(v1alpha).AuthorizedCertificate} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1alpha/apps/{appsId}/authorizedCertificates').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['appsId'],
                    pathParams: ['appsId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * appengine.apps.authorizedCertificates.delete
             *
             * @desc Deletes the specified SSL certificate.
             *
             * @alias appengine.apps.authorizedCertificates.delete
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345.
             * @param {string} params.authorizedCertificatesId Part of `name`. See documentation of `appsId`.
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
                const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'authorizedCertificatesId'],
                    pathParams: ['appsId', 'authorizedCertificatesId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * appengine.apps.authorizedCertificates.get
             *
             * @desc Gets the specified SSL certificate.
             *
             * @alias appengine.apps.authorizedCertificates.get
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345.
             * @param {string} params.authorizedCertificatesId Part of `name`. See documentation of `appsId`.
             * @param {string=} params.view Controls the set of fields returned in the GET response.
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
                const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'authorizedCertificatesId'],
                    pathParams: ['appsId', 'authorizedCertificatesId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * appengine.apps.authorizedCertificates.list
             *
             * @desc Lists all SSL certificates the user is authorized to administer.
             *
             * @alias appengine.apps.authorizedCertificates.list
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
             * @param {integer=} params.pageSize Maximum results to return per page.
             * @param {string=} params.pageToken Continuation token for fetching the next page of results.
             * @param {string=} params.view Controls the set of fields returned in the LIST response.
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
                const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1alpha/apps/{appsId}/authorizedCertificates').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId'],
                    pathParams: ['appsId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * appengine.apps.authorizedCertificates.patch
             *
             * @desc Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
             *
             * @alias appengine.apps.authorizedCertificates.patch
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345.
             * @param {string} params.authorizedCertificatesId Part of `name`. See documentation of `appsId`.
             * @param {string=} params.updateMask Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields.
             * @param {appengine(v1alpha).AuthorizedCertificate} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'authorizedCertificatesId'],
                    pathParams: ['appsId', 'authorizedCertificatesId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        authorizedDomains: {
            /**
             * appengine.apps.authorizedDomains.list
             *
             * @desc Lists all domains the user is authorized to administer.
             *
             * @alias appengine.apps.authorizedDomains.list
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
             * @param {integer=} params.pageSize Maximum results to return per page.
             * @param {string=} params.pageToken Continuation token for fetching the next page of results.
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
                const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1alpha/apps/{appsId}/authorizedDomains').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId'],
                    pathParams: ['appsId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        domainMappings: {
            /**
             * appengine.apps.domainMappings.create
             *
             * @desc Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
             *
             * @alias appengine.apps.domainMappings.create
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
             * @param {boolean=} params.noManagedCertificate Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manaually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated.
             * @param {appengine(v1alpha).DomainMapping} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1alpha/apps/{appsId}/domainMappings').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['appsId'],
                    pathParams: ['appsId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * appengine.apps.domainMappings.delete
             *
             * @desc Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
             *
             * @alias appengine.apps.domainMappings.delete
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. Name of the resource to delete. Example: apps/myapp/domainMappings/example.com.
             * @param {string} params.domainMappingsId Part of `name`. See documentation of `appsId`.
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
                const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'domainMappingsId'],
                    pathParams: ['appsId', 'domainMappingsId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * appengine.apps.domainMappings.get
             *
             * @desc Gets the specified domain mapping.
             *
             * @alias appengine.apps.domainMappings.get
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/domainMappings/example.com.
             * @param {string} params.domainMappingsId Part of `name`. See documentation of `appsId`.
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
                const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'domainMappingsId'],
                    pathParams: ['appsId', 'domainMappingsId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * appengine.apps.domainMappings.list
             *
             * @desc Lists the domain mappings on an application.
             *
             * @alias appengine.apps.domainMappings.list
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
             * @param {integer=} params.pageSize Maximum results to return per page.
             * @param {string=} params.pageToken Continuation token for fetching the next page of results.
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
                const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1alpha/apps/{appsId}/domainMappings').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId'],
                    pathParams: ['appsId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * appengine.apps.domainMappings.patch
             *
             * @desc Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
             *
             * @alias appengine.apps.domainMappings.patch
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. Name of the resource to update. Example: apps/myapp/domainMappings/example.com.
             * @param {string} params.domainMappingsId Part of `name`. See documentation of `appsId`.
             * @param {boolean=} params.noManagedCertificate Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated. Only applicable if ssl_settings.certificate_id is specified in the update mask.
             * @param {string=} params.updateMask Standard field mask for the set of fields to be updated.
             * @param {appengine(v1alpha).DomainMapping} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'domainMappingsId'],
                    pathParams: ['appsId', 'domainMappingsId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        locations: {
            /**
             * appengine.apps.locations.get
             *
             * @desc Get information about a location.
             *
             * @alias appengine.apps.locations.get
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. Resource name for the location.
             * @param {string} params.locationsId Part of `name`. See documentation of `appsId`.
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
                const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1alpha/apps/{appsId}/locations/{locationsId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'locationsId'],
                    pathParams: ['appsId', 'locationsId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * appengine.apps.locations.list
             *
             * @desc Lists information about the supported locations for this service.
             *
             * @alias appengine.apps.locations.list
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. The resource that owns the locations collection, if applicable.
             * @param {string=} params.filter The standard list filter.
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
                const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1alpha/apps/{appsId}/locations').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId'],
                    pathParams: ['appsId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        operations: {
            /**
             * appengine.apps.operations.get
             *
             * @desc Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
             *
             * @alias appengine.apps.operations.get
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. The name of the operation resource.
             * @param {string} params.operationsId Part of `name`. See documentation of `appsId`.
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
                const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1alpha/apps/{appsId}/operations/{operationsId}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId', 'operationsId'],
                    pathParams: ['appsId', 'operationsId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * appengine.apps.operations.list
             *
             * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/x/operations. To override the binding, API services can add a binding such as "/v1/{name=users/x}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
             *
             * @alias appengine.apps.operations.list
             * @memberOf! appengine(v1alpha)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. The name of the operation's parent resource.
             * @param {string=} params.filter The standard list filter.
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
                const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1alpha/apps/{appsId}/operations').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['appsId'],
                    pathParams: ['appsId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
}
module.exports = Appengine;
//# sourceMappingURL=v1alpha.js.map