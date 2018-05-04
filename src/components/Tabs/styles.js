import styled, { css } from 'styled-components';
import {
  BORDER_COLOR,
  COLOR_C64_PURPLE,
  COLOR_GREY_PORCELAIN,
  COLOR_SYNTHETIC_PUMPKIN,
  COLOR_WHITE,
} from '../../constants/colors';

const versionStyles = ({ isActive, version }) => {
  if (isActive) {
    switch (version) {
      case 'orange':
        return css`
          background-color: ${COLOR_SYNTHETIC_PUMPKIN};
          color: ${COLOR_WHITE};
        `;
      case 'purple':
        return css`
          background-color: ${COLOR_C64_PURPLE};
          color: ${COLOR_WHITE};
        `;
      default:
        return css`
          background-color: ${COLOR_GREY_PORCELAIN};
          color: ${COLOR_WHITE};
        `;
    }
  } else {
    switch (version) {
      case 'orange':
        return css`
          background-color: transparent;
          color: ${COLOR_SYNTHETIC_PUMPKIN};
        `;
      case 'purple':
        return css`
          background-color: transparent;
          color: ${COLOR_C64_PURPLE};
        `;
      default:
        return css`
          background-color: transparent;
          color: ${COLOR_GREY_PORCELAIN};
        `;
    }
  }
};

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.button`
  border: 0;
  border-bottom: 1px solid ${BORDER_COLOR};
  border-top: 1px solid ${BORDER_COLOR};
  cursor: pointer;
  flex: 1;
  height: 40px;
  outline: none;
  transition: color 0.3s ease, background-color 0.3s;

  ${versionStyles};
  
  &:first-child {
    border-top-left: 2px;
  }
  &:last-child {
    border-top-left: 2px;
  }
`;

export const Body = styled.div`
  padding: 20px 0;
`;

export const Content = styled.div`
  display: ${({ isActive }) => isActive ? 'block' : 'none'};
`;

