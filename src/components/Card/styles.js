import styled from 'styled-components';
import {
  COLOR_DEVIL_BLUE, COLOR_SUMMER_SKY, HEADLINE_COLOR,
  TEXT_COLOR,
} from "../../constants/colors";

export const Container = styled.article`
  background-color: transparent;
  border: 1px solid #e5e5e5;
  border-radius: 2px;

  &  + & {
    margin-top: 10px;
  }
`;

export const Header = styled.header`
  padding: 10px;
`;

export const Row = styled.div`
  display: flex;
`;

export const Name = styled.h3`
  color: ${HEADLINE_COLOR};
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  margin: 0;
`;

export const Actions = styled.div`
  margin-left: auto;
`;

export const DeleteButtonContainer = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
  padding: 2px 5px;
`;

export const AttributesContainer = styled.div``;

export const Attribute = styled.div`
  color: ${TEXT_COLOR}
  font-size: 14px;
  
  a {
    color: ${COLOR_DEVIL_BLUE};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${COLOR_SUMMER_SKY};
    }
  }
`;

export const Body = styled.div`
  padding: 0 10px 10px;
  
  h4 {
    color: ${HEADLINE_COLOR};
    font-size: 16px;
    font-weight: 400;
    margin: 10px 0;
  }
  
  ul {
    margin: 0 0 10px;
    padding-left: 20px;
  }
  
  li {
    color: ${TEXT_COLOR};
    font-size: 14px;
    line-height: 20px;
  }
`;
