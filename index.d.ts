// https://github.com/google/google-auth-library-nodejs
export namespace auth {
    function getApplicationDefault(callback: (error: any, response: AuthClient) => void): void;
}

export function cloudfunctions(version: string): CloudFunctionsAPI;

export interface CloudFunctionsAPI {
    _options: any;

    operations: {
        // cloud.google.com/functions/docs/reference/rest/v1beta2/operations/get
        get: (params: {auth: AuthClient, name: string},
              callback: (error: any, response: Operation) => void) => object;

        list: any;
    };

    projects: {
        locations: {
            // cloud.google.com/functions/docs/reference/rest/v1beta2/projects.locations/list
            list: (params: {auth: AuthClient, name: string, filter?: string, pageSize?: number, pageToken?: string},
                   callback: (error: any, response: {locations: Location[], nextPageToken: string}) => void) => object;

            functions: {
                call: any;

                // cloud.google.com/functions/docs/reference/rest/v1beta2/projects.locations.functions/create
                create: (params: {auth: AuthClient, location: string, resource: CloudFunction},
                         callback: (error: any, response: Operation) => void) => object;

                // cloud.google.com/functions/docs/reference/rest/v1beta2/projects.locations.functions/delete
                // noinspection ReservedWordAsName
                delete: (params: {auth: AuthClient, name: string},
                         callback: (error: any, response: Operation) => void) => object;

                // cloud.google.com/functions/docs/reference/rest/v1beta2/projects.locations.functions/generateDownloadUrl
                generateDownloadUrl: (params: {auth: AuthClient, name: string, resource: {versionId?: string}},
                                      callback: (error: any, response: {downloadUrl: string}) => void) => object;

                // cloud.google.com/functions/docs/reference/rest/v1beta2/projects.locations.functions/generateUploadUrl
                generateUploadUrl: (params: {auth: AuthClient, parent: string},
                                    callback: (error: any, response: {uploadUrl: string}) => void) => object;

                get: any;

                // cloud.google.com/functions/docs/reference/rest/v1beta2/projects.locations.functions/list
                list: (params: {auth: AuthClient, location: string, pageSize?: number, pageToken?: string},
                       callback: (error: any,
                                  response: {functions: CloudFunction[], nextPageToken?: string}) => void) => object;

                update: any;
            };
        };
    };
}

export type AuthClient = any;

// https://cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse#Location
export interface Location {
    name: string;
    locationId: string;
    labels: {[key: string]: string};
    metadata: any;
}

// https://cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse#Operation
export interface Operation {
    name: string;
    metadata: any;
    done: boolean;

    // Union field result can be only one of the following:
    error?: Status;
    response?: any[];
    // End of list of possible types for union field result.
}

// https://cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse#Status
export interface Status {
    code: number;
    message: string;
    details: any[];
}

// https://cloud.google.com/functions/docs/reference/rest/v1beta2/projects.locations.functions#CloudFunction
export interface CloudFunction {
    name: string;
    entryPoint: string;
    timeout: string;
    availableMemoryMb: number;
    labels?: {[key: string]: string};

    // Union field source_code can be only one of the following:
    sourceArchiveUrl?: string;
    sourceRepository?: SourceRepository;
    sourceRepositoryUrl?: string;
    sourceUploadUrl?: string;
    // End of list of possible types for union field source_code.

    // Union field trigger can be only one of the following:
    httpsTrigger?: HTTPSTrigger;
    eventTrigger?: EventTrigger;
    // End of list of possible types for union field trigger.

    // Output only
    status?: CloudFunctionStatus;
    latestOperation?: string;
    serviceAccount?: string;
    updateTime?: string;
    versionId?: string;
}

export type CloudFunctionStatus = "STATUS_UNSPECIFIED" | "READY" | "FAILED" | "DEPLOYING" | "DELETING";

// https://cloud.google.com/functions/docs/reference/rest/v1beta2/projects.locations.functions#SourceRepository
export interface SourceRepository {
    repositoryUrl: string;
    sourcePath: string;
    deployedRevision: string;

    // Union field version can be only one of the following:
    branch?: string;
    tag?: string;
    revision?: string;
    // End of list of possible types for union field version.
}

// https://cloud.google.com/functions/docs/reference/rest/v1beta2/projects.locations.functions#HTTPSTrigger
export interface HTTPSTrigger {
    url: string;
}

// https://cloud.google.com/functions/docs/reference/rest/v1beta2/projects.locations.functions#EventTrigger
export interface EventTrigger {
    eventType: string;
    resource: string;
    service: string;
    failurePolicy: FailurePolicy;
}

// https://cloud.google.com/functions/docs/reference/rest/v1beta2/projects.locations.functions#FailurePolicy
export interface FailurePolicy {
    retry: object;
}
