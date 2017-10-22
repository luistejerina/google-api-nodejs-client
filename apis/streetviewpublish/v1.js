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
 * Street View Publish API
 *
 * Publishes 360 photos to Google Maps, along with position, orientation, and connectivity metadata. Apps can offer an interface for positioning, connecting, and uploading user-generated Street View images.

 *
 * @example
 * const google = require('googleapis');
 * const streetviewpublish = google.streetviewpublish('v1');
 *
 * @namespace streetviewpublish
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Streetviewpublish
 */
function Streetviewpublish(options) {
    const self = this;
    self._options = options || {};
    self.photo = {
        /**
         * streetviewpublish.photo.create
         *
         * @desc After the client finishes uploading the photo with the returned UploadRef, CreatePhoto publishes the uploaded Photo to Street View on Google Maps.  Currently, the only way to set heading, pitch, and roll in CreatePhoto is through the [Photo Sphere XMP metadata](https://developers.google.com/streetview/spherical-metadata) in the photo bytes. The `pose.heading`, `pose.pitch`, `pose.roll`, `pose.altitude`, and `pose.level` fields in Pose are ignored for CreatePhoto.  This method returns the following error codes:  * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. * google.rpc.Code.NOT_FOUND if the upload reference does not exist. * google.rpc.Code.RESOURCE_EXHAUSTED if the account has reached the storage limit.
         *
         * @alias streetviewpublish.photo.create
         * @memberOf! streetviewpublish(v1)
         *
         * @param {object} params Parameters for request
         * @param {streetviewpublish(v1).Photo} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://streetviewpublish.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/photo').replace(/([^:]\/)\/+/g, '$1'),
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
         * streetviewpublish.photo.delete
         *
         * @desc Deletes a Photo and its metadata.  This method returns the following error codes:  * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.NOT_FOUND if the photo ID does not exist.
         *
         * @alias streetviewpublish.photo.delete
         * @memberOf! streetviewpublish(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.photoId Required. ID of the Photo.
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
            const rootUrl = options.rootUrl || 'https://streetviewpublish.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/photo/{photoId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params: params,
                requiredParams: ['photoId'],
                pathParams: ['photoId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * streetviewpublish.photo.get
         *
         * @desc Gets the metadata of the specified Photo.  This method returns the following error codes:  * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested Photo. * google.rpc.Code.NOT_FOUND if the requested Photo does not exist.
         *
         * @alias streetviewpublish.photo.get
         * @memberOf! streetviewpublish(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.photoId Required. ID of the Photo.
         * @param {string=} params.view Specifies if a download URL for the photo bytes should be returned in the Photo response.
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
            const rootUrl = options.rootUrl || 'https://streetviewpublish.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/photo/{photoId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params: params,
                requiredParams: ['photoId'],
                pathParams: ['photoId'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        },
        /**
         * streetviewpublish.photo.startUpload
         *
         * @desc Creates an upload session to start uploading photo bytes. The upload URL of the returned UploadRef is used to upload the bytes for the Photo.  In addition to the photo requirements shown in https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604, the photo must also meet the following requirements:  * Photo Sphere XMP metadata must be included in the photo medadata. See https://developers.google.com/streetview/spherical-metadata for the required fields. * The pixel size of the photo must meet the size requirements listed in https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604, and the photo must be a full 360 horizontally.  After the upload is complete, the UploadRef is used with CreatePhoto to create the Photo object entry.
         *
         * @alias streetviewpublish.photo.startUpload
         * @memberOf! streetviewpublish(v1)
         *
         * @param {object} params Parameters for request
         * @param {streetviewpublish(v1).Empty} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        startUpload: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://streetviewpublish.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/photo:startUpload').replace(/([^:]\/)\/+/g, '$1'),
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
         * streetviewpublish.photo.update
         *
         * @desc Updates the metadata of a Photo, such as pose, place association, connections, etc. Changing the pixels of a photo is not supported.  Only the fields specified in the updateMask field are used. If `updateMask` is not present, the update applies to all fields.  <aside class="note"><b>Note:</b> To update Pose.altitude, Pose.latLngPair has to be filled as well. Otherwise, the request will fail.</aside>  This method returns the following error codes:  * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. * google.rpc.Code.NOT_FOUND if the requested photo does not exist.
         *
         * @alias streetviewpublish.photo.update
         * @memberOf! streetviewpublish(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.id Required. A unique identifier for a photo.
         * @param {string=} params.updateMask Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata will be entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list.  The following fields are valid:  * `pose.heading` * `pose.latLngPair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places`   <aside class="note"><b>Note:</b> Repeated fields in updateMask mean the entire set of repeated values will be replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections will be removed.</aside>
         * @param {streetviewpublish(v1).Photo} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://streetviewpublish.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/photo/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params: params,
                requiredParams: ['id'],
                pathParams: ['id'],
                context: self
            };
            return apirequest_1.default(parameters, callback);
        }
    };
    self.photos = {
        /**
         * streetviewpublish.photos.batchDelete
         *
         * @desc Deletes a list of Photos and their metadata.  Note that if BatchDeletePhotos fails, either critical fields are missing or there was an authentication error. Even if BatchDeletePhotos succeeds, there may have been failures for single photos in the batch. These failures will be specified in each PhotoResponse.status in BatchDeletePhotosResponse.results. See DeletePhoto for specific failures that can occur per photo.
         *
         * @alias streetviewpublish.photos.batchDelete
         * @memberOf! streetviewpublish(v1)
         *
         * @param {object} params Parameters for request
         * @param {streetviewpublish(v1).BatchDeletePhotosRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchDelete: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://streetviewpublish.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/photos:batchDelete').replace(/([^:]\/)\/+/g, '$1'),
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
         * streetviewpublish.photos.batchGet
         *
         * @desc Gets the metadata of the specified Photo batch.  Note that if BatchGetPhotos fails, either critical fields are missing or there was an authentication error. Even if BatchGetPhotos succeeds, there may have been failures for single photos in the batch. These failures will be specified in each PhotoResponse.status in BatchGetPhotosResponse.results. See GetPhoto for specific failures that can occur per photo.
         *
         * @alias streetviewpublish.photos.batchGet
         * @memberOf! streetviewpublish(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.photoIds Required. IDs of the Photos. For HTTP GET requests, the URL query parameter should be `photoIds=<id1>&photoIds=<id2>&...`.
         * @param {string=} params.view Specifies if a download URL for the photo bytes should be returned in the Photo response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchGet: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://streetviewpublish.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/photos:batchGet').replace(/([^:]\/)\/+/g, '$1'),
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
         * streetviewpublish.photos.batchUpdate
         *
         * @desc Updates the metadata of Photos, such as pose, place association, connections, etc. Changing the pixels of photos is not supported.  Note that if BatchUpdatePhotos fails, either critical fields are missing or there was an authentication error. Even if BatchUpdatePhotos succeeds, there may have been failures for single photos in the batch. These failures will be specified in each PhotoResponse.status in BatchUpdatePhotosResponse.results. See UpdatePhoto for specific failures that can occur per photo.  Only the fields specified in updateMask field are used. If `updateMask` is not present, the update applies to all fields.  <aside class="note"><b>Note:</b> To update Pose.altitude, Pose.latLngPair has to be filled as well. Otherwise, the request will fail.</aside>
         *
         * @alias streetviewpublish.photos.batchUpdate
         * @memberOf! streetviewpublish(v1)
         *
         * @param {object} params Parameters for request
         * @param {streetviewpublish(v1).BatchUpdatePhotosRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchUpdate: function (params, options, callback) {
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options || (options = {});
            const rootUrl = options.rootUrl || 'https://streetviewpublish.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/photos:batchUpdate').replace(/([^:]\/)\/+/g, '$1'),
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
         * streetviewpublish.photos.list
         *
         * @desc Lists all the Photos that belong to the user.
         *
         * @alias streetviewpublish.photos.list
         * @memberOf! streetviewpublish(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter The filter expression. For example: `placeId=ChIJj61dQgK6j4AR4GeTYWZsKWw`.  The only filter supported at the moment is `placeId`.
         * @param {integer=} params.pageSize The maximum number of photos to return. `pageSize` must be non-negative. If `pageSize` is zero or is not provided, the default page size of 100 will be used. The number of photos returned in the response may be less than `pageSize` if the number of photos that belong to the user is less than `pageSize`.
         * @param {string=} params.pageToken The nextPageToken value returned from a previous ListPhotos request, if any.
         * @param {string=} params.view Specifies if a download URL for the photos bytes should be returned in the Photos response.
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
            const rootUrl = options.rootUrl || 'https://streetviewpublish.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/photos').replace(/([^:]\/)\/+/g, '$1'),
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
}
module.exports = Streetviewpublish;
//# sourceMappingURL=v1.js.map