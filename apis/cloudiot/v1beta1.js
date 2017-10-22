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
 * Google Cloud IoT API
 *
 * Registers and manages IoT (Internet of Things) devices that connect to the Google Cloud Platform.

 *
 * @example
 * const google = require('googleapis');
 * const cloudiot = google.cloudiot('v1beta1');
 *
 * @namespace cloudiot
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Cloudiot
 */
function Cloudiot(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        locations: {
            registries: {
                /**
                 * cloudiot.projects.locations.registries.create
                 *
                 * @desc Creates a device registry that contains devices.
                 *
                 * @alias cloudiot.projects.locations.registries.create
                 * @memberOf! cloudiot(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.parent The project and cloud region where this device registry must be created. For example, `projects/example-project/locations/us-central1`.
                 * @param {cloudiot(v1beta1).DeviceRegistry} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{parent}/registries').replace(/([^:]\/)\/+/g, '$1'),
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
                 * cloudiot.projects.locations.registries.delete
                 *
                 * @desc Deletes a device registry configuration.
                 *
                 * @alias cloudiot.projects.locations.registries.delete
                 * @memberOf! cloudiot(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the device registry. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
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
                    const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
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
                 * cloudiot.projects.locations.registries.get
                 *
                 * @desc Gets a device registry configuration.
                 *
                 * @alias cloudiot.projects.locations.registries.get
                 * @memberOf! cloudiot(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The name of the device registry. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
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
                    const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
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
                 * cloudiot.projects.locations.registries.getIamPolicy
                 *
                 * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
                 *
                 * @alias cloudiot.projects.locations.registries.getIamPolicy
                 * @memberOf! cloudiot(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
                 * @param {cloudiot(v1beta1).GetIamPolicyRequest} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{resource}:getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
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
                 * cloudiot.projects.locations.registries.list
                 *
                 * @desc Lists device registries.
                 *
                 * @alias cloudiot.projects.locations.registries.list
                 * @memberOf! cloudiot(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {integer=} params.pageSize The maximum number of registries to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested, but if there is a non-empty `page_token`, it indicates that more entries are available.
                 * @param {string=} params.pageToken The value returned by the last `ListDeviceRegistriesResponse`; indicates that this is a continuation of a prior `ListDeviceRegistries` call, and that the system should return the next page of data.
                 * @param {string} params.parent The project and cloud region path. For example, `projects/example-project/locations/us-central1`.
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
                    const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{parent}/registries').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['parent'],
                        pathParams: ['parent'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                /**
                 * cloudiot.projects.locations.registries.patch
                 *
                 * @desc Updates a device registry configuration.
                 *
                 * @alias cloudiot.projects.locations.registries.patch
                 * @memberOf! cloudiot(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.name The resource path name. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
                 * @param {string=} params.updateMask Only updates the `device_registry` fields indicated by this mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. Mutable top-level fields: `event_notification_config` and `mqtt_config`
                 * @param {cloudiot(v1beta1).DeviceRegistry} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
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
                 * cloudiot.projects.locations.registries.setIamPolicy
                 *
                 * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
                 *
                 * @alias cloudiot.projects.locations.registries.setIamPolicy
                 * @memberOf! cloudiot(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
                 * @param {cloudiot(v1beta1).SetIamPolicyRequest} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{resource}:setIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
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
                 * cloudiot.projects.locations.registries.testIamPermissions
                 *
                 * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
                 *
                 * @alias cloudiot.projects.locations.registries.testIamPermissions
                 * @memberOf! cloudiot(v1beta1)
                 *
                 * @param {object} params Parameters for request
                 * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
                 * @param {cloudiot(v1beta1).TestIamPermissionsRequest} params.resource Request body data
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
                    const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta1/{resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'POST'
                        }, options),
                        params: params,
                        requiredParams: ['resource'],
                        pathParams: ['resource'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                },
                devices: {
                    /**
                     * cloudiot.projects.locations.registries.devices.create
                     *
                     * @desc Creates a device in a device registry.
                     *
                     * @alias cloudiot.projects.locations.registries.devices.create
                     * @memberOf! cloudiot(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.parent The name of the device registry where this device should be created. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
                     * @param {cloudiot(v1beta1).Device} params.resource Request body data
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
                        const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1beta1/{parent}/devices').replace(/([^:]\/)\/+/g, '$1'),
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
                     * cloudiot.projects.locations.registries.devices.delete
                     *
                     * @desc Deletes a device.
                     *
                     * @alias cloudiot.projects.locations.registries.devices.delete
                     * @memberOf! cloudiot(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
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
                        const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
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
                     * cloudiot.projects.locations.registries.devices.get
                     *
                     * @desc Gets details about a device.
                     *
                     * @alias cloudiot.projects.locations.registries.devices.get
                     * @memberOf! cloudiot(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
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
                        const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
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
                     * cloudiot.projects.locations.registries.devices.getConfig
                     *
                     * @desc Gets the configuration of a device.
                     *
                     * @alias cloudiot.projects.locations.registries.devices.getConfig
                     * @memberOf! cloudiot(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.localVersion If zero, returns the current device configuration from Cloud IoT Core. If nonzero, specifies the local version of the configuration on the device. The server returns config data only if a higher (newer) version is available from Cloud IoT Core. If this value is higher than the latest version available in Cloud IoT Core, returns an `OUT_OF_RANGE` error.
                     * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0`.
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    getConfig: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1beta1/{name}/config').replace(/([^:]\/)\/+/g, '$1'),
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
                     * cloudiot.projects.locations.registries.devices.list
                     *
                     * @desc List devices in a device registry.
                     *
                     * @alias cloudiot.projects.locations.registries.devices.list
                     * @memberOf! cloudiot(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string=} params.deviceIds A list of device string identifiers. If empty, it will ignore this field. For example, `['device0', 'device12']`. This field cannot hold more than 10,000 entries.
                     * @param {string=} params.deviceNumIds A list of device numerical ids. If empty, it will ignore this field. This field cannot hold more than 10,000 entries.
                     * @param {string=} params.fieldMask The fields of the `Device` resource to be returned in the response. The fields `id`, and `num_id` are always returned by default, along with any other fields specified.
                     * @param {integer=} params.pageSize The maximum number of devices to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested, but if there is a non-empty `page_token`, it indicates that more entries are available.
                     * @param {string=} params.pageToken The value returned by the last `ListDevicesResponse`; indicates that this is a continuation of a prior `ListDevices` call, and that the system should return the next page of data.
                     * @param {string} params.parent The device registry path. Required. For example, `projects/my-project/locations/us-central1/registries/my-registry`.
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
                        const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1beta1/{parent}/devices').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'GET'
                            }, options),
                            params: params,
                            requiredParams: ['parent'],
                            pathParams: ['parent'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    /**
                     * cloudiot.projects.locations.registries.devices.modifyCloudToDeviceConfig
                     *
                     * @desc Modifies the configuration for the device, which is eventually sent from the Cloud IoT servers. Returns the modified configuration version and its meta-data.
                     *
                     * @alias cloudiot.projects.locations.registries.devices.modifyCloudToDeviceConfig
                     * @memberOf! cloudiot(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
                     * @param {cloudiot(v1beta1).ModifyCloudToDeviceConfigRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    modifyCloudToDeviceConfig: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1beta1/{name}:modifyCloudToDeviceConfig').replace(/([^:]\/)\/+/g, '$1'),
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
                     * cloudiot.projects.locations.registries.devices.patch
                     *
                     * @desc Updates a device.
                     *
                     * @alias cloudiot.projects.locations.registries.devices.patch
                     * @memberOf! cloudiot(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name The resource path name. For example, `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`. When `name` is populated as a response from the service, it always ends in the device numeric ID.
                     * @param {string=} params.updateMask Only updates the `device` fields indicated by this mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. Mutable top-level fields: `credentials` and `enabled_state`
                     * @param {cloudiot(v1beta1).Device} params.resource Request body data
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
                        const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
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
                     * cloudiot.projects.locations.registries.devices.publishEvent
                     *
                     * @desc Publishes a telemetry event for a device.
                     *
                     * @alias cloudiot.projects.locations.registries.devices.publishEvent
                     * @memberOf! cloudiot(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0`.
                     * @param {cloudiot(v1beta1).HttpPublishEventRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    publishEvent: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1beta1/{name}:publishEvent').replace(/([^:]\/)\/+/g, '$1'),
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
                     * cloudiot.projects.locations.registries.devices.setState
                     *
                     * @desc Sets the state of a device.
                     *
                     * @alias cloudiot.projects.locations.registries.devices.setState
                     * @memberOf! cloudiot(v1beta1)
                     *
                     * @param {object} params Parameters for request
                     * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0`.
                     * @param {cloudiot(v1beta1).HttpSetDeviceStateRequest} params.resource Request body data
                     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                     * @param {callback} callback The callback that handles the response.
                     * @return {object} Request object
                     */
                    setState: function (params, options, callback) {
                        if (typeof options === 'function') {
                            callback = options;
                            options = {};
                        }
                        options || (options = {});
                        const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                        const parameters = {
                            options: Object.assign({
                                url: (rootUrl + '/v1beta1/{name}:setState').replace(/([^:]\/)\/+/g, '$1'),
                                method: 'POST'
                            }, options),
                            params: params,
                            requiredParams: ['name'],
                            pathParams: ['name'],
                            context: self
                        };
                        return apirequest_1.default(parameters, callback);
                    },
                    configVersions: {
                        /**
                         * cloudiot.projects.locations.registries.devices.configVersions.list
                         *
                         * @desc Lists the last few versions of the device configuration in descending order (i.e.: newest first).
                         *
                         * @alias cloudiot.projects.locations.registries.devices.configVersions.list
                         * @memberOf! cloudiot(v1beta1)
                         *
                         * @param {object} params Parameters for request
                         * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
                         * @param {integer=} params.numVersions The number of versions to list. Versions are listed in decreasing order of the version number. The maximum number of versions retained is 10. If this value is zero, it will return all the versions available.
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
                            const rootUrl = options.rootUrl || 'https://cloudiot.googleapis.com/';
                            const parameters = {
                                options: Object.assign({
                                    url: (rootUrl + '/v1beta1/{name}/configVersions').replace(/([^:]\/)\/+/g, '$1'),
                                    method: 'GET'
                                }, options),
                                params: params,
                                requiredParams: ['name'],
                                pathParams: ['name'],
                                context: self
                            };
                            return apirequest_1.default(parameters, callback);
                        }
                    }
                }
            }
        }
    };
}
module.exports = Cloudiot;
//# sourceMappingURL=v1beta1.js.map