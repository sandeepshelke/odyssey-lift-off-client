import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import ModuleDetail from "../components/module-detail";

export const GET_MODULE_AND_PARENT_TRACK = gql`
query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
        id
        title
        content
        videoUrl
        durationInSeconds
    }
    track(id: $trackId) {
        id
        title
        modules {
            id
            title
            durationInSeconds
        }
    }
}
`;

const Module = ({ moduleId, trackId }) => {
    const { loading, error, data } = useQuery(GET_MODULE_AND_PARENT_TRACK, {
        variables: { moduleId, trackId },
    });

    return <Layout fullWidth={true}>
        <QueryResult error={error} loading={loading} data={data}>
            <ModuleDetail track={data?.track} module={data?.module} />
        </QueryResult>
    </Layout>;
};

export default Module;
