import * as React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { VaultsSidebar } from "./navigation/VaultsSidebar";
import { VaultEditor } from "./VaultEditor";

const PrimaryContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
`;
const ContentContainer = styled.div`
    flex: 10 10 auto;
    height: 100%;
`;

export function VaultManagement() {
    const { id = null } = useParams();
    return (
        <PrimaryContainer>
            <VaultsSidebar />
            <ContentContainer>
                {id && (
                    <VaultEditor sourceID={id} />
                )}
            </ContentContainer>
        </PrimaryContainer>
    );
}
