import styled from 'styled-components';
import { COLOR_FLUORESCENT_RED, HEADLINE_COLOR } from "../../constants/colors";

export const Container = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  color: ${HEADLINE_COLOR};
  display: block;
  font-size: 12px;
  margin-bottom: 4px;
`;

export const Error = styled.div`
  color: ${COLOR_FLUORESCENT_RED};
  font-size: 10px;
  margin-top: 4px;
`;
