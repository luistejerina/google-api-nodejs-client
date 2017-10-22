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
 * Google Cloud Natural Language API
 *
 * Provides natural language understanding technologies to developers. Examples include sentiment analysis, entity recognition, entity sentiment analysis, and text annotations.
 *
 * @example
 * const google = require('googleapis');
 * const language = google.language('v1beta2');
 *
 * @namespace language
 * @type {Function}
 * @version v1beta2
 * @variation v1beta2
 * @param {object=} options Options for Language
 */
function Language(options) {
    const self = this;
    self._options = options || {};
    self.documents = {
        /**
         * language.documents.analyzeEntities
         *
         * @desc Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
         *
         * @alias language.documents.analyzeEntities
         * @memberOf! language(v1beta2)
         *
         * @param {object} params Parameters for request
         * @param {language(v1beta2).AnalyzeEntitiesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        analyzeEntities: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta2/documents:analyzeEntities').replace(/([^:]\/)\/+/g, '$1'),
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
         * language.documents.analyzeEntitySentiment
         *
         * @desc Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.
         *
         * @alias language.documents.analyzeEntitySentiment
         * @memberOf! language(v1beta2)
         *
         * @param {object} params Parameters for request
         * @param {language(v1beta2).AnalyzeEntitySentimentRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        analyzeEntitySentiment: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta2/documents:analyzeEntitySentiment').replace(/([^:]\/)\/+/g, '$1'),
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
         * language.documents.analyzeSentiment
         *
         * @desc Analyzes the sentiment of the provided text.
         *
         * @alias language.documents.analyzeSentiment
         * @memberOf! language(v1beta2)
         *
         * @param {object} params Parameters for request
         * @param {language(v1beta2).AnalyzeSentimentRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        analyzeSentiment: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta2/documents:analyzeSentiment').replace(/([^:]\/)\/+/g, '$1'),
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
         * language.documents.analyzeSyntax
         *
         * @desc Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
         *
         * @alias language.documents.analyzeSyntax
         * @memberOf! language(v1beta2)
         *
         * @param {object} params Parameters for request
         * @param {language(v1beta2).AnalyzeSyntaxRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        analyzeSyntax: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta2/documents:analyzeSyntax').replace(/([^:]\/)\/+/g, '$1'),
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
         * language.documents.annotateText
         *
         * @desc A convenience method that provides all syntax, sentiment, entity, and classification features in one call.
         *
         * @alias language.documents.annotateText
         * @memberOf! language(v1beta2)
         *
         * @param {object} params Parameters for request
         * @param {language(v1beta2).AnnotateTextRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        annotateText: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta2/documents:annotateText').replace(/([^:]\/)\/+/g, '$1'),
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
         * language.documents.classifyText
         *
         * @desc Classifies a document into categories.
         *
         * @alias language.documents.classifyText
         * @memberOf! language(v1beta2)
         *
         * @param {object} params Parameters for request
         * @param {language(v1beta2).ClassifyTextRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        classifyText: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta2/documents:classifyText').replace(/([^:]\/)\/+/g, '$1'),
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
module.exports = Language;
//# sourceMappingURL=v1beta2.js.map