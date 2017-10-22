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
 * Google Cloud OS Login API
 *
 * Manages OS login configuration for Directory API users.
 *
 * @example
 * const google = require('googleapis');
 * const oslogin = google.oslogin('v1beta');
 *
 * @namespace oslogin
 * @type {Function}
 * @version v1beta
 * @variation v1beta
 * @param {object=} options Options for Oslogin
 */
function Oslogin(options) {
    const self = this;
    self._options = options || {};
    self.users = {
        /**
         * oslogin.users.getLoginProfile
         *
         * @desc Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.
         *
         * @alias oslogin.users.getLoginProfile
         * @memberOf! oslogin(v1beta)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The unique ID for the user in format `users/{user}`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getLoginProfile: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{name}/loginProfile').replace(/([^:]\/)\/+/g, '$1'),
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
         * oslogin.users.importSshPublicKey
         *
         * @desc Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.
         *
         * @alias oslogin.users.importSshPublicKey
         * @memberOf! oslogin(v1beta)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The unique ID for the user in format `users/{user}`.
         * @param {oslogin(v1beta).SshPublicKey} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        importSshPublicKey: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta/{parent}:importSshPublicKey').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['parent'],
                pathParams: ['parent'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        sshPublicKeys: {
            /**
             * oslogin.users.sshPublicKeys.delete
             *
             * @desc Deletes an SSH public key.
             *
             * @alias oslogin.users.sshPublicKeys.delete
             * @memberOf! oslogin(v1beta)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
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
                const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
             * oslogin.users.sshPublicKeys.get
             *
             * @desc Retrieves an SSH public key.
             *
             * @alias oslogin.users.sshPublicKeys.get
             * @memberOf! oslogin(v1beta)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The fingerprint of the public key to retrieve. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
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
                const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
             * oslogin.users.sshPublicKeys.patch
             *
             * @desc Updates an SSH public key and returns the profile information. This method supports patch semantics.
             *
             * @alias oslogin.users.sshPublicKeys.patch
             * @memberOf! oslogin(v1beta)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
             * @param {string=} params.updateMask Mask to control which fields get updated. Updates all if not present.
             * @param {oslogin(v1beta).SshPublicKey} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta/{name}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PATCH'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
}
module.exports = Oslogin;
//# sourceMappingURL=v1beta.js.map