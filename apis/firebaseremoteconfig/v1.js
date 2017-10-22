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
 * Firebase Remote Config API
 *
 * Firebase Remote Config API allows the 3P clients to manage Remote Config conditions and parameters for Firebase applications.
 *
 * @example
 * const google = require('googleapis');
 * const firebaseremoteconfig = google.firebaseremoteconfig('v1');
 *
 * @namespace firebaseremoteconfig
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Firebaseremoteconfig
 */
function Firebaseremoteconfig(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        /**
         * firebaseremoteconfig.projects.getRemoteConfig
         *
         * @desc Get the latest version Remote Configuration for a project. Returns the RemoteConfig as the payload, and also the eTag as a response header.
         *
         * @alias firebaseremoteconfig.projects.getRemoteConfig
         * @memberOf! firebaseremoteconfig(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project The GMP project identifier. Required. See note at the beginning of this file regarding project ids.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getRemoteConfig: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://firebaseremoteconfig.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{project}/remoteConfig').replace(/([^:]\/)\/+/g, '$1'),
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
         * firebaseremoteconfig.projects.updateRemoteConfig
         *
         * @desc Update a RemoteConfig. We treat this as an always-existing resource (when it is not found in our data store, we treat it as version 0, a template with zero conditions and zero parameters). Hence there are no Create or Delete operations. Returns the updated template when successful (and the updated eTag as a response header), or an error if things go wrong. Possible error messages: * VALIDATION_ERROR (HTTP status 400) with additional details if the template being passed in can not be validated. * AUTHENTICATION_ERROR (HTTP status 401) if the request can not be authenticate (e.g. no access token, or invalid access token). * AUTHORIZATION_ERROR (HTTP status 403) if the request can not be authorized (e.g. the user has no access to the specified project id). * VERSION_MISMATCH (HTTP status 412) when trying to update when the expected eTag (passed in via the "If-match" header) is not specified, or is specified but does does not match the current eTag. * Internal error (HTTP status 500) for Database problems or other internal errors.
         *
         * @alias firebaseremoteconfig.projects.updateRemoteConfig
         * @memberOf! firebaseremoteconfig(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.project The GMP project identifier. Required. See note at the beginning of this file regarding project ids.
         * @param {boolean=} params.validateOnly Optional. Defaults to <code>false</code> (UpdateRemoteConfig call should update the backend if there are no validation/interal errors). May be set to <code>true</code> to indicate that, should no validation errors occur, the call should return a "200 OK" instead of performing the update. Note that other error messages (500 Internal Error, 412 Version Mismatch, etc) may still result after flipping to <code>false</code>, even if getting a "200 OK" when calling with <code>true</code>.
         * @param {firebaseremoteconfig(v1).RemoteConfig} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateRemoteConfig: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://firebaseremoteconfig.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{project}/remoteConfig').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['project'],
                pathParams: ['project'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
}
module.exports = Firebaseremoteconfig;
//# sourceMappingURL=v1.js.map