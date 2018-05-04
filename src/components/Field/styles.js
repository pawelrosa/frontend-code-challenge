import styled from 'styled-components';
import { FORM_CONTROL_BORDER, TEXT_COLOR, TEXT_COLOR_ALT } from "../../constants/colors";

export const Container = styled.div``;

export const Control = styled.input`
  background-color: transparent;
  border: 1px solid ${FORM_CONTROL_BORDER};
  border-radius: 2px;
  color: ${TEXT_COLOR};
  display: block;
  font-size: 14px;
  line-height: 18px;
  height: 30px;
  outline: none;
  padding: 5px 10px;
  transition: border-color 0.3s ease;
  width: 100%;

  // Chrome/Opera/Safari
  &::-webkit-input-placeholder {
    color: ${TEXT_COLOR_ALT};
  }

  // Firefox 18-
  &:-moz-placeholder {
    color: ${TEXT_COLOR_ALT};
  }

  // Firefox 19+
  &::-moz-placeholder {
    color: ${TEXT_COLOR_ALT};
  }

  // IE 10+
  &:-ms-input-placeholder {
    color: ${TEXT_COLOR_ALT};
  }
`;
