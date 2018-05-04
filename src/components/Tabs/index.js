import React from "react";
import { Body, Container, Content, Header } from "./styles";
import Button from "./Button";
import { Scrollbars } from "react-custom-scrollbars";

export default ({ activeTab, activeTabIndex, collection }) => (
  <Container>
    <Header>
      {collection.map(({ name, version }, index) => (
        <Button
          activeTab={activeTab}
          key={index}
          isActive={activeTabIndex === index}
          index={index}
          version={version}
        >
          {name}
        </Button>
      ))}
    </Header>
    <Body>
      <Scrollbars style={{ height: 454 }}>
        {collection.map(({ content }, index) => (
          <Content
            key={index}
            isActive={activeTabIndex === index}
          >
            {content}
          </Content>
        ))}
      </Scrollbars>
    </Body>
  </Container>
)
