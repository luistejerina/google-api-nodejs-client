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
 * Google Play Game Services Management API
 *
 * The Management API for Google Play Game Services.
 *
 * @example
 * const google = require('googleapis');
 * const gamesManagement = google.gamesManagement('v1management');
 *
 * @namespace gamesManagement
 * @type {Function}
 * @version v1management
 * @variation v1management
 * @param {object=} options Options for Gamesmanagement
 */
function Gamesmanagement(options) {
    const self = this;
    self._options = options || {};
    self.achievements = {
        /**
         * gamesManagement.achievements.reset
         *
         * @desc Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
         *
         * @alias gamesManagement.achievements.reset
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object} params Parameters for request
         * @param {string} params.achievementId The ID of the achievement used by this method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        reset: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/achievements/{achievementId}/reset').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['achievementId'],
                pathParams: ['achievementId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * gamesManagement.achievements.resetAll
         *
         * @desc Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
         *
         * @alias gamesManagement.achievements.resetAll
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetAll: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/achievements/reset').replace(/([^:]\/)\/+/g, '$1'),
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
         * gamesManagement.achievements.resetAllForAllPlayers
         *
         * @desc Resets all draft achievements for all players. This method is only available to user accounts for your developer console.
         *
         * @alias gamesManagement.achievements.resetAllForAllPlayers
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetAllForAllPlayers: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/achievements/resetAllForAllPlayers').replace(/([^:]\/)\/+/g, '$1'),
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
         * gamesManagement.achievements.resetForAllPlayers
         *
         * @desc Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.
         *
         * @alias gamesManagement.achievements.resetForAllPlayers
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object} params Parameters for request
         * @param {string} params.achievementId The ID of the achievement used by this method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetForAllPlayers: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/achievements/{achievementId}/resetForAllPlayers').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['achievementId'],
                pathParams: ['achievementId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * gamesManagement.achievements.resetMultipleForAllPlayers
         *
         * @desc Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.
         *
         * @alias gamesManagement.achievements.resetMultipleForAllPlayers
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object} params Parameters for request
         * @param {gamesManagement(v1management).AchievementResetMultipleForAllRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetMultipleForAllPlayers: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/achievements/resetMultipleForAllPlayers').replace(/([^:]\/)\/+/g, '$1'),
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
    self.applications = {
        /**
         * gamesManagement.applications.listHidden
         *
         * @desc Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.
         *
         * @alias gamesManagement.applications.listHidden
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object} params Parameters for request
         * @param {string} params.applicationId The application ID from the Google Play developer console.
         * @param {integer=} params.maxResults The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified maxResults.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listHidden: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/applications/{applicationId}/players/hidden').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['applicationId'],
                pathParams: ['applicationId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.events = {
        /**
         * gamesManagement.events.reset
         *
         * @desc Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. All quests for this player that use the event will also be reset.
         *
         * @alias gamesManagement.events.reset
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object} params Parameters for request
         * @param {string} params.eventId The ID of the event.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        reset: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/events/{eventId}/reset').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['eventId'],
                pathParams: ['eventId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * gamesManagement.events.resetAll
         *
         * @desc Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. All quests for this player will also be reset.
         *
         * @alias gamesManagement.events.resetAll
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetAll: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/events/reset').replace(/([^:]\/)\/+/g, '$1'),
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
         * gamesManagement.events.resetAllForAllPlayers
         *
         * @desc Resets all draft events for all players. This method is only available to user accounts for your developer console. All quests that use any of these events will also be reset.
         *
         * @alias gamesManagement.events.resetAllForAllPlayers
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetAllForAllPlayers: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/events/resetAllForAllPlayers').replace(/([^:]\/)\/+/g, '$1'),
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
         * gamesManagement.events.resetForAllPlayers
         *
         * @desc Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset. All quests that use the event will also be reset.
         *
         * @alias gamesManagement.events.resetForAllPlayers
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object} params Parameters for request
         * @param {string} params.eventId The ID of the event.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetForAllPlayers: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/events/{eventId}/resetForAllPlayers').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['eventId'],
                pathParams: ['eventId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * gamesManagement.events.resetMultipleForAllPlayers
         *
         * @desc Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset. All quests that use any of the events will also be reset.
         *
         * @alias gamesManagement.events.resetMultipleForAllPlayers
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object} params Parameters for request
         * @param {gamesManagement(v1management).EventsResetMultipleForAllRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetMultipleForAllPlayers: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/events/resetMultipleForAllPlayers').replace(/([^:]\/)\/+/g, '$1'),
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
    self.players = {
        /**
         * gamesManagement.players.hide
         *
         * @desc Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
         *
         * @alias gamesManagement.players.hide
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object} params Parameters for request
         * @param {string} params.applicationId The application ID from the Google Play developer console.
         * @param {string} params.playerId A player ID. A value of me may be used in place of the authenticated player's ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        hide: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/applications/{applicationId}/players/hidden/{playerId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['applicationId', 'playerId'],
                pathParams: ['applicationId', 'playerId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * gamesManagement.players.unhide
         *
         * @desc Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
         *
         * @alias gamesManagement.players.unhide
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object} params Parameters for request
         * @param {string} params.applicationId The application ID from the Google Play developer console.
         * @param {string} params.playerId A player ID. A value of me may be used in place of the authenticated player's ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        unhide: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/applications/{applicationId}/players/hidden/{playerId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['applicationId', 'playerId'],
                pathParams: ['applicationId', 'playerId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.quests = {
        /**
         * gamesManagement.quests.reset
         *
         * @desc Resets all player progress on the quest with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
         *
         * @alias gamesManagement.quests.reset
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object} params Parameters for request
         * @param {string} params.questId The ID of the quest.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        reset: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/quests/{questId}/reset').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['questId'],
                pathParams: ['questId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * gamesManagement.quests.resetAll
         *
         * @desc Resets all player progress on all quests for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
         *
         * @alias gamesManagement.quests.resetAll
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetAll: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/quests/reset').replace(/([^:]\/)\/+/g, '$1'),
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
         * gamesManagement.quests.resetAllForAllPlayers
         *
         * @desc Resets all draft quests for all players. This method is only available to user accounts for your developer console.
         *
         * @alias gamesManagement.quests.resetAllForAllPlayers
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetAllForAllPlayers: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/quests/resetAllForAllPlayers').replace(/([^:]\/)\/+/g, '$1'),
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
         * gamesManagement.quests.resetForAllPlayers
         *
         * @desc Resets all player progress on the quest with the given ID for all players. This method is only available to user accounts for your developer console. Only draft quests can be reset.
         *
         * @alias gamesManagement.quests.resetForAllPlayers
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object} params Parameters for request
         * @param {string} params.questId The ID of the quest.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetForAllPlayers: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/quests/{questId}/resetForAllPlayers').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['questId'],
                pathParams: ['questId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * gamesManagement.quests.resetMultipleForAllPlayers
         *
         * @desc Resets quests with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft quests may be reset.
         *
         * @alias gamesManagement.quests.resetMultipleForAllPlayers
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object} params Parameters for request
         * @param {gamesManagement(v1management).QuestsResetMultipleForAllRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetMultipleForAllPlayers: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/quests/resetMultipleForAllPlayers').replace(/([^:]\/)\/+/g, '$1'),
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
    self.rooms = {
        /**
         * gamesManagement.rooms.reset
         *
         * @desc Reset all rooms for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
         *
         * @alias gamesManagement.rooms.reset
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        reset: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/rooms/reset').replace(/([^:]\/)\/+/g, '$1'),
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
         * gamesManagement.rooms.resetForAllPlayers
         *
         * @desc Deletes rooms where the only room participants are from whitelisted tester accounts for your application. This method is only available to user accounts for your developer console.
         *
         * @alias gamesManagement.rooms.resetForAllPlayers
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetForAllPlayers: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/rooms/resetForAllPlayers').replace(/([^:]\/)\/+/g, '$1'),
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
    self.scores = {
        /**
         * gamesManagement.scores.reset
         *
         * @desc Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
         *
         * @alias gamesManagement.scores.reset
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object} params Parameters for request
         * @param {string} params.leaderboardId The ID of the leaderboard.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        reset: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/leaderboards/{leaderboardId}/scores/reset').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['leaderboardId'],
                pathParams: ['leaderboardId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * gamesManagement.scores.resetAll
         *
         * @desc Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.
         *
         * @alias gamesManagement.scores.resetAll
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetAll: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/scores/reset').replace(/([^:]\/)\/+/g, '$1'),
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
         * gamesManagement.scores.resetAllForAllPlayers
         *
         * @desc Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.
         *
         * @alias gamesManagement.scores.resetAllForAllPlayers
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetAllForAllPlayers: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/scores/resetAllForAllPlayers').replace(/([^:]\/)\/+/g, '$1'),
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
         * gamesManagement.scores.resetForAllPlayers
         *
         * @desc Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
         *
         * @alias gamesManagement.scores.resetForAllPlayers
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object} params Parameters for request
         * @param {string} params.leaderboardId The ID of the leaderboard.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetForAllPlayers: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/leaderboards/{leaderboardId}/scores/resetForAllPlayers').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params: params,
                requiredParams: ['leaderboardId'],
                pathParams: ['leaderboardId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * gamesManagement.scores.resetMultipleForAllPlayers
         *
         * @desc Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.
         *
         * @alias gamesManagement.scores.resetMultipleForAllPlayers
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object} params Parameters for request
         * @param {gamesManagement(v1management).ScoresResetMultipleForAllRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetMultipleForAllPlayers: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/scores/resetMultipleForAllPlayers').replace(/([^:]\/)\/+/g, '$1'),
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
    self.turnBasedMatches = {
        /**
         * gamesManagement.turnBasedMatches.reset
         *
         * @desc Reset all turn-based match data for a user. This method is only accessible to whitelisted tester accounts for your application.
         *
         * @alias gamesManagement.turnBasedMatches.reset
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        reset: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/turnbasedmatches/reset').replace(/([^:]\/)\/+/g, '$1'),
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
         * gamesManagement.turnBasedMatches.resetForAllPlayers
         *
         * @desc Deletes turn-based matches where the only match participants are from whitelisted tester accounts for your application. This method is only available to user accounts for your developer console.
         *
         * @alias gamesManagement.turnBasedMatches.resetForAllPlayers
         * @memberOf! gamesManagement(v1management)
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetForAllPlayers: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/games/v1management/turnbasedmatches/resetForAllPlayers').replace(/([^:]\/)\/+/g, '$1'),
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
}
module.exports = Gamesmanagement;
//# sourceMappingURL=v1management.js.map