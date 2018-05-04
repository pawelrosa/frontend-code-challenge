import styled from "styled-components";
import { FORM_CONTROL_BORDER, TEXT_COLOR } from "../../constants/colors";

export const Container = styled.div`
  span {
    display: block !important;
  }

  input {
    border: 1px solid ${FORM_CONTROL_BORDER};
    border-radius: 2px !important;
    color: ${TEXT_COLOR};
    font-size: 14px !important;
    line-height: 18px;
    height: 30px; 
    outline: none;
    padding: 5px 10px !important;
    transition: border-color 0.3s ease;
    width: 100%;
  }
`;
