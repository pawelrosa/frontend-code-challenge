import styled, { css } from 'styled-components';
import {
  COLOR_C64_PURPLE, COLOR_CHILEAN_FIRE, COLOR_LIBERTY,
  COLOR_SYNTHETIC_PUMPKIN,
} from "../../constants/colors";

const versionStyles = ({ version }) => {
  switch (version) {
    case 'orange': return css`
      background-color: ${COLOR_SYNTHETIC_PUMPKIN};

      ${({ disabled }) => {
        if (!disabled) {
          return css`
              &:hover {
                background-color: ${COLOR_CHILEAN_FIRE};
              }
            `;
        }
      }}
    `;
    default: return css`
      background-color: ${COLOR_C64_PURPLE};

      ${({ disabled }) => {
        if (!disabled) {
          return css`
              &:hover {
                background-color: ${COLOR_LIBERTY};
              }
            `;
        }
      }}
    `;
  }
};

export const Container = styled.button`
  border: 0;
  border-radius: 2px;
  color: #fff;
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  height: 30px;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  outline: none;
  padding: 5px 15px;
  text-align: center;
  transition: background-color 0.3s ease, opacity 0.3s ease;
  
  ${versionStyles}
`;
