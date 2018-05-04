import styled from 'styled-components';
import { BORDER_COLOR, COLOR_HOT_STONE } from "../../constants/colors";

export const Container = styled.div`
  align-items: center;
  border: 1px dashed ${BORDER_COLOR};
  border-radius: 2px;
  display: flex;
  height: 150px;
  justify-content: center;
  margin: 20px;
  padding: 20px;
`;

export const Message = styled.p`
  color: ${COLOR_HOT_STONE};
  font-size: 14px;
  margin: 0;
`;
