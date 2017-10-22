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
 * Google Cloud Pub/Sub API
 *
 * Provides reliable, many-to-many, asynchronous messaging between applications.

 *
 * @example
 * const google = require('googleapis');
 * const pubsub = google.pubsub('v1beta2');
 *
 * @namespace pubsub
 * @type {Function}
 * @version v1beta2
 * @variation v1beta2
 * @param {object=} options Options for Pubsub
 */
function Pubsub(options) {
    const self = this;
    self._options = options || {};
    self.projects = {
        subscriptions: {
            /**
             * pubsub.projects.subscriptions.acknowledge
             *
             * @desc Acknowledges the messages associated with the `ack_ids` in the `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages from the subscription.  Acknowledging a message whose ack deadline has expired may succeed, but such a message may be redelivered later. Acknowledging a message more than once will not result in an error.
             *
             * @alias pubsub.projects.subscriptions.acknowledge
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.subscription The subscription whose message is being acknowledged.
             * @param {pubsub(v1beta2).AcknowledgeRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            acknowledge: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{subscription}:acknowledge').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['subscription'],
                    pathParams: ['subscription'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * pubsub.projects.subscriptions.create
             *
             * @desc Creates a subscription to a given topic. If the subscription already exists, returns `ALREADY_EXISTS`. If the corresponding topic doesn't exist, returns `NOT_FOUND`.  If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic. Note that for REST API requests, you must specify a name.
             *
             * @alias pubsub.projects.subscriptions.create
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
             * @param {pubsub(v1beta2).Subscription} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * pubsub.projects.subscriptions.delete
             *
             * @desc Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to `Pull` after deletion will return `NOT_FOUND`. After a subscription is deleted, a new one may be created with the same name, but the new one has no association with the old subscription, or its topic unless the same topic is specified.
             *
             * @alias pubsub.projects.subscriptions.delete
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.subscription The subscription to delete.
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
                const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{subscription}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['subscription'],
                    pathParams: ['subscription'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * pubsub.projects.subscriptions.get
             *
             * @desc Gets the configuration details of a subscription.
             *
             * @alias pubsub.projects.subscriptions.get
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.subscription The name of the subscription to get.
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
                const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{subscription}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['subscription'],
                    pathParams: ['subscription'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * pubsub.projects.subscriptions.getIamPolicy
             *
             * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
             *
             * @alias pubsub.projects.subscriptions.getIamPolicy
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
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
                const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{resource}:getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['resource'],
                    pathParams: ['resource'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * pubsub.projects.subscriptions.list
             *
             * @desc Lists matching subscriptions.
             *
             * @alias pubsub.projects.subscriptions.list
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {integer=} params.pageSize Maximum number of subscriptions to return.
             * @param {string=} params.pageToken The value returned by the last `ListSubscriptionsResponse`; indicates that this is a continuation of a prior `ListSubscriptions` call, and that the system should return the next page of data.
             * @param {string} params.project The name of the cloud project that subscriptions belong to.
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
                const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{project}/subscriptions').replace(/([^:]\/)\/+/g, '$1'),
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
             * pubsub.projects.subscriptions.modifyAckDeadline
             *
             * @desc Modifies the ack deadline for a specific message. This method is useful to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted. Note that this does not modify the subscription-level `ackDeadlineSeconds` used for subsequent messages.
             *
             * @alias pubsub.projects.subscriptions.modifyAckDeadline
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.subscription The name of the subscription.
             * @param {pubsub(v1beta2).ModifyAckDeadlineRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            modifyAckDeadline: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{subscription}:modifyAckDeadline').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['subscription'],
                    pathParams: ['subscription'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * pubsub.projects.subscriptions.modifyPushConfig
             *
             * @desc Modifies the `PushConfig` for a specified subscription.  This may be used to change a push subscription to a pull one (signified by an empty `PushConfig`) or vice versa, or change the endpoint URL and other attributes of a push subscription. Messages will accumulate for delivery continuously through the call regardless of changes to the `PushConfig`.
             *
             * @alias pubsub.projects.subscriptions.modifyPushConfig
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.subscription The name of the subscription.
             * @param {pubsub(v1beta2).ModifyPushConfigRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            modifyPushConfig: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{subscription}:modifyPushConfig').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['subscription'],
                    pathParams: ['subscription'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * pubsub.projects.subscriptions.pull
             *
             * @desc Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The server may return `UNAVAILABLE` if there are too many concurrent pull requests pending for the given subscription.
             *
             * @alias pubsub.projects.subscriptions.pull
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.subscription The subscription from which messages should be pulled.
             * @param {pubsub(v1beta2).PullRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            pull: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{subscription}:pull').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['subscription'],
                    pathParams: ['subscription'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * pubsub.projects.subscriptions.setIamPolicy
             *
             * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
             *
             * @alias pubsub.projects.subscriptions.setIamPolicy
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
             * @param {pubsub(v1beta2).SetIamPolicyRequest} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{resource}:setIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
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
             * pubsub.projects.subscriptions.testIamPermissions
             *
             * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
             *
             * @alias pubsub.projects.subscriptions.testIamPermissions
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
             * @param {pubsub(v1beta2).TestIamPermissionsRequest} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['resource'],
                    pathParams: ['resource'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            }
        },
        topics: {
            /**
             * pubsub.projects.topics.create
             *
             * @desc Creates the given topic with the given name.
             *
             * @alias pubsub.projects.topics.create
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.name The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
             * @param {pubsub(v1beta2).Topic} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'PUT'
                    }, options),
                    params: params,
                    requiredParams: ['name'],
                    pathParams: ['name'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * pubsub.projects.topics.delete
             *
             * @desc Deletes the topic with the given name. Returns `NOT_FOUND` if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions. Existing subscriptions to this topic are not deleted, but their `topic` field is set to `_deleted-topic_`.
             *
             * @alias pubsub.projects.topics.delete
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.topic Name of the topic to delete.
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
                const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{topic}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                    }, options),
                    params: params,
                    requiredParams: ['topic'],
                    pathParams: ['topic'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * pubsub.projects.topics.get
             *
             * @desc Gets the configuration of a topic.
             *
             * @alias pubsub.projects.topics.get
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.topic The name of the topic to get.
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
                const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{topic}').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['topic'],
                    pathParams: ['topic'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * pubsub.projects.topics.getIamPolicy
             *
             * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
             *
             * @alias pubsub.projects.topics.getIamPolicy
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
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
                const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{resource}:getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                    }, options),
                    params: params,
                    requiredParams: ['resource'],
                    pathParams: ['resource'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * pubsub.projects.topics.list
             *
             * @desc Lists matching topics.
             *
             * @alias pubsub.projects.topics.list
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {integer=} params.pageSize Maximum number of topics to return.
             * @param {string=} params.pageToken The value returned by the last `ListTopicsResponse`; indicates that this is a continuation of a prior `ListTopics` call, and that the system should return the next page of data.
             * @param {string} params.project The name of the cloud project that topics belong to.
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
                const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{project}/topics').replace(/([^:]\/)\/+/g, '$1'),
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
             * pubsub.projects.topics.publish
             *
             * @desc Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic does not exist. The message payload must not be empty; it must contain  either a non-empty data field, or at least one attribute.
             *
             * @alias pubsub.projects.topics.publish
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.topic The messages in the request will be published on this topic.
             * @param {pubsub(v1beta2).PublishRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            publish: function (params, options, callback) {
                if (typeof options === 'function') {
                    callback = options;
                    options = {};
                }
                options || (options = {});
                const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{topic}:publish').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['topic'],
                    pathParams: ['topic'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            /**
             * pubsub.projects.topics.setIamPolicy
             *
             * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
             *
             * @alias pubsub.projects.topics.setIamPolicy
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
             * @param {pubsub(v1beta2).SetIamPolicyRequest} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{resource}:setIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
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
             * pubsub.projects.topics.testIamPermissions
             *
             * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
             *
             * @alias pubsub.projects.topics.testIamPermissions
             * @memberOf! pubsub(v1beta2)
             *
             * @param {object} params Parameters for request
             * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
             * @param {pubsub(v1beta2).TestIamPermissionsRequest} params.resource Request body data
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
                const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                const parameters = {
                    options: Object.assign({
                        url: (rootUrl + '/v1beta2/{resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                    }, options),
                    params: params,
                    requiredParams: ['resource'],
                    pathParams: ['resource'],
                    context: self
                };
                return apirequest_1.default(parameters, callback);
            },
            subscriptions: {
                /**
                 * pubsub.projects.topics.subscriptions.list
                 *
                 * @desc Lists the name of the subscriptions for this topic.
                 *
                 * @alias pubsub.projects.topics.subscriptions.list
                 * @memberOf! pubsub(v1beta2)
                 *
                 * @param {object} params Parameters for request
                 * @param {integer=} params.pageSize Maximum number of subscription names to return.
                 * @param {string=} params.pageToken The value returned by the last `ListTopicSubscriptionsResponse`; indicates that this is a continuation of a prior `ListTopicSubscriptions` call, and that the system should return the next page of data.
                 * @param {string} params.topic The name of the topic that subscriptions are attached to.
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
                    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
                    const parameters = {
                        options: Object.assign({
                            url: (rootUrl + '/v1beta2/{topic}/subscriptions').replace(/([^:]\/)\/+/g, '$1'),
                            method: 'GET'
                        }, options),
                        params: params,
                        requiredParams: ['topic'],
                        pathParams: ['topic'],
                        context: self
                    };
                    return apirequest_1.default(parameters, callback);
                }
            }
        }
    };
}
module.exports = Pubsub;
//# sourceMappingURL=v1beta2.js.map