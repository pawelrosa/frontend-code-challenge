import styled, { css } from "styled-components";
import {
  COLOR_C64_PURPLE,
  COLOR_GREY_PORCELAIN,
  COLOR_SYNTHETIC_PUMPKIN,
  COLOR_WHITE,
  HEADLINE_COLOR,
} from "../../constants/colors";

const headerVersionStyles = ({ version }) => {
  switch (version) {
    case 'orange': return css`
      border-top: 3px solid ${COLOR_SYNTHETIC_PUMPKIN};
    `;
    case 'purple': return css`
      border-top: 3px solid ${COLOR_C64_PURPLE};
    `;
    default: return css`
      border-top: 3px solid ${COLOR_GREY_PORCELAIN};
    `;
  }
};

const Box = styled.div`
  background-color: ${COLOR_WHITE};
  border-radius: 3px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);

  & + & {
    margin-top: 20px;
  }
`;

const Header = styled.header`
  border-bottom: 1px solid #f7f1e3;
  border-radius: 3px 3px 0 0;
  padding: 10px 15px;

  ${headerVersionStyles};
`;

const Headline = styled.h3`
  color: ${HEADLINE_COLOR};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
`;

const Body = styled.div`
  padding: 15px;
`;

Header.defaultProps = {
  version: 'default',
};

export default Box;
export { Body, Header, Headline }
