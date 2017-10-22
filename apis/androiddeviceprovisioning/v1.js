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
 * Android Device Provisioning Partner API
 *
 * Automates reseller integration into zero-touch enrollment by assigning devices to customers and creating device reports.
 *
 * @example
 * const google = require('googleapis');
 * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
 *
 * @namespace androiddeviceprovisioning
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Androiddeviceprovisioning
 */
function Androiddeviceprovisioning(options) {
    const self = this;
    self._options = options || {};
    self.operations = {
        /**
         * androiddeviceprovisioning.operations.get
         *
         * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
         *
         * @alias androiddeviceprovisioning.operations.get
         * @memberOf! androiddeviceprovisioning(v1)
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
            const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
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
    self.partners = {
        customers: {
            /**
             * androiddeviceprovisioning.partners.customers.create
             *
             * @desc Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The API doesn't notify the customer that they have access.
             *
             * @alias androiddeviceprovisioning.partners.customers.create
             * @memberOf! androiddeviceprovisioning(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.parent Required. The parent resource ID in format `partners/[PARTNER_ID]` that identifies the reseller.
             * @param {androiddeviceprovisioning(v1).CreateCustomerRequest} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/{parent}/customers').replace(/([^:]\/)\/+/g, '$1'),
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
             * androiddeviceprovisioning.partners.customers.list
             *
             * @desc Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.
             *
             * @alias androiddeviceprovisioning.partners.customers.list
             * @memberOf! androiddeviceprovisioning(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.partnerId The ID of the partner.
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
                const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/partners/{partnerId}/customers').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['partnerId'],
                    pathParams: ['partnerId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        devices: {
            /**
             * androiddeviceprovisioning.partners.devices.claim
             *
             * @desc Claim the device identified by device identifier.
             *
             * @alias androiddeviceprovisioning.partners.devices.claim
             * @memberOf! androiddeviceprovisioning(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.partnerId ID of the partner.
             * @param {androiddeviceprovisioning(v1).ClaimDeviceRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            claim: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/partners/{partnerId}/devices:claim').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['partnerId'],
                    pathParams: ['partnerId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androiddeviceprovisioning.partners.devices.claimAsync
             *
             * @desc Claim devices asynchronously.
             *
             * @alias androiddeviceprovisioning.partners.devices.claimAsync
             * @memberOf! androiddeviceprovisioning(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.partnerId Partner ID.
             * @param {androiddeviceprovisioning(v1).ClaimDevicesRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            claimAsync: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/partners/{partnerId}/devices:claimAsync').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['partnerId'],
                    pathParams: ['partnerId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androiddeviceprovisioning.partners.devices.findByIdentifier
             *
             * @desc Find devices by device identifier.
             *
             * @alias androiddeviceprovisioning.partners.devices.findByIdentifier
             * @memberOf! androiddeviceprovisioning(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.partnerId ID of the partner.
             * @param {androiddeviceprovisioning(v1).FindDevicesByDeviceIdentifierRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            findByIdentifier: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/partners/{partnerId}/devices:findByIdentifier').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['partnerId'],
                    pathParams: ['partnerId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androiddeviceprovisioning.partners.devices.findByOwner
             *
             * @desc Find devices by ownership.
             *
             * @alias androiddeviceprovisioning.partners.devices.findByOwner
             * @memberOf! androiddeviceprovisioning(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.partnerId ID of the partner.
             * @param {androiddeviceprovisioning(v1).FindDevicesByOwnerRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            findByOwner: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/partners/{partnerId}/devices:findByOwner').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['partnerId'],
                    pathParams: ['partnerId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androiddeviceprovisioning.partners.devices.get
             *
             * @desc Get a device.
             *
             * @alias androiddeviceprovisioning.partners.devices.get
             * @memberOf! androiddeviceprovisioning(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name Resource name in `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.
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
                const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
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
             * androiddeviceprovisioning.partners.devices.metadata
             *
             * @desc Update the metadata.
             *
             * @alias androiddeviceprovisioning.partners.devices.metadata
             * @memberOf! androiddeviceprovisioning(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.deviceId ID of the partner.
             * @param {string} params.metadataOwnerId The owner of the newly set metadata. Set this to the partner ID.
             * @param {androiddeviceprovisioning(v1).UpdateDeviceMetadataRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            metadata: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/partners/{metadataOwnerId}/devices/{deviceId}/metadata').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['metadataOwnerId', 'deviceId'],
                    pathParams: ['deviceId', 'metadataOwnerId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androiddeviceprovisioning.partners.devices.unclaim
             *
             * @desc Unclaim the device identified by the `device_id` or the `deviceIdentifier`.
             *
             * @alias androiddeviceprovisioning.partners.devices.unclaim
             * @memberOf! androiddeviceprovisioning(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.partnerId ID of the partner.
             * @param {androiddeviceprovisioning(v1).UnclaimDeviceRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            unclaim: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/partners/{partnerId}/devices:unclaim').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['partnerId'],
                    pathParams: ['partnerId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androiddeviceprovisioning.partners.devices.unclaimAsync
             *
             * @desc Unclaim devices asynchronously.
             *
             * @alias androiddeviceprovisioning.partners.devices.unclaimAsync
             * @memberOf! androiddeviceprovisioning(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.partnerId Partner ID.
             * @param {androiddeviceprovisioning(v1).UnclaimDevicesRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            unclaimAsync: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/partners/{partnerId}/devices:unclaimAsync').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['partnerId'],
                    pathParams: ['partnerId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * androiddeviceprovisioning.partners.devices.updateMetadataAsync
             *
             * @desc Set metadata in batch asynchronously.
             *
             * @alias androiddeviceprovisioning.partners.devices.updateMetadataAsync
             * @memberOf! androiddeviceprovisioning(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.partnerId Partner ID.
             * @param {androiddeviceprovisioning(v1).UpdateDeviceMetadataInBatchRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            updateMetadataAsync: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1/partners/{partnerId}/devices:updateMetadataAsync').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['partnerId'],
                    pathParams: ['partnerId'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        }
    };
}
module.exports = Androiddeviceprovisioning;
//# sourceMappingURL=v1.js.map