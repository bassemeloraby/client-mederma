import { VirtuosoGrid } from "react-virtuoso";
import styled from "@emotion/styled";
import { Fragment } from "react";
import CosmoticCardSF from "./CosmoticCardSF";

const ItemContainer = styled.div`
  padding: 0.5rem;
  /* width: 33%; */
  display: flex;
  flex: none;
  align-content: stretch;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 300px) {
    width: 100%;
  }
`;

const ItemWrapper = styled.div`
  flex: 1;
  text-align: center;
  font-size: 80%;
  padding: 1rem 1rem;
  border: 1px solid var(gray);
  white-space: nowrap;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function CosmoticSF({ cosmotics }) {
  return (
    <Fragment>
      <VirtuosoGrid
        style={{ height: 600 }}
        data={cosmotics}
        totalCount={10000}
        overscan={10000}
        components={{
          Item: ItemContainer,
          List: ListContainer,
          ScrollSeekPlaceholder: ({ height, width, index }) => (
            <ItemContainer>
              <ItemWrapper>{"--"}</ItemWrapper>
            </ItemContainer>
          ),
        }}
        itemContent={(index, prod) => (
          <ItemWrapper
            key={index}
            className="border "
            style={{ display: "flex", alignItems: "center" }}
          >
          <CosmoticCardSF prod={prod}/>
          </ItemWrapper>
        )}
        scrollSeekConfiguration={{
          enter: (velocity) => Math.abs(velocity) > 200,
          exit: (velocity) => Math.abs(velocity) < 30,
          change: (_, range) => console.log({ range }),
        }}
      />
      <style>{`html, body, #root { margin: 0; padding: 0 }`}</style>
    </Fragment>
  );
}
