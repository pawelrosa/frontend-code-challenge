import { darken, lighten } from 'polished';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import styled from 'styled-components';
import {
  COLOR_CROCODILE_TOOTH,
  COLOR_FLUORESCENT_RED,
  COLOR_HOT_STONE,
  COLOR_SUMMER_SKY,
  COLOR_WHITE,
  FORM_CONTROL_BORDER,
  FORM_CONTROL_BORDER_FOCUS,
  TEXT_COLOR,
  TEXT_COLOR_ALT,
} from '../../constants/colors';

export const Container = styled.div``;

export const Control = styled(Select)`
  &.Select {
    &.is-disabled > .Select-control {
      background-color: #f9f9f9;
    }
    
    &.is-open > .Select-control {
      border-color: ${FORM_CONTROL_BORDER_FOCUS};
    }
  
    &.is-focused:not(.is-open) > .Select-control {
      border-color: ${FORM_CONTROL_BORDER_FOCUS};
      box-shadow: none;
    }
  
    &.has-value.Select--single > .Select-control .Select-value .Select-value-label,
    &.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {
      color: ${TEXT_COLOR};
      display: inline-block;
      font-size: 14px;
      line-height: 18px;
      padding: 5px 0;
      vertical-align: top;
    }
    
    &.is-open .Select-arrow,
    & .Select-arrow-zone:hover > .Select-arrow {
      border-top-color: ${TEXT_COLOR};
    }
  }

  .Select-control {
    background-color: ${COLOR_WHITE};
    border-color: ${FORM_CONTROL_BORDER};
    border-radius: 2px;
    color: ${TEXT_COLOR};
    height: 30px;
    transition: border-color 0.3s ease;
  }

  .Select-control:hover {
    box-shadow: none;
  }

  .Select-placeholder,
  .Select--single > .Select-control .Select-value {
    color: ${TEXT_COLOR};
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    padding: 5px 10px;
  }

  .Select-placeholder {
    color: ${TEXT_COLOR_ALT};
  }

  .Select-input {
    height: 28px;
    vertical-align: top;

    > input {
      font-size: 14px;
      height: 18px;
      line-height: 18px;
      color: ${TEXT_COLOR};
      padding: 5px 0;
    }
  }
  
  .Select-clear-zone {
    color: ${COLOR_HOT_STONE};
    transition: color 0.3s ease;

    &:hover {
      color: ${COLOR_FLUORESCENT_RED};
    }
  }

  .Select-arrow {
    border-color: ${TEXT_COLOR} transparent transparent;
  }

  .Select-control > *:last-child {
    padding-right: 5px;
  }
  .Select--multi .Select-multi-value-wrapper {
    display: inline-block;
  }
  
  .Select-menu-outer {
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    background-color: ${COLOR_WHITE};
    border: 1px solid ${FORM_CONTROL_BORDER};
    border-top-color: ${FORM_CONTROL_BORDER};
    right: 1px;
    width: auto;
  }

  .Select-option {
    color: ${TEXT_COLOR};
    font-size: 14px;
    line-height: 20px;
    padding: 5px 10px;

    &:last-child {
      border-bottom-right-radius: 2px;
      border-bottom-left-radius: 2px;
    }

    &.is-selected {
      background-color: ${COLOR_CROCODILE_TOOTH};
      color: ${TEXT_COLOR};
    }

    &.is-focused {
      background-color: ${COLOR_HOT_STONE};
      color: ${COLOR_WHITE};
    }

    &.is-disabled {
      color: ${TEXT_COLOR_ALT};
    }
  }

  .Select-noresults {
    color: ${COLOR_HOT_STONE};
    font-size: 14px;
    padding: 5px 10px;
  }

  &.Select--multi {
    .Select-value {
      background-color: ${COLOR_SUMMER_SKY};
      border: 1px solid ${COLOR_SUMMER_SKY};
      color: ${COLOR_WHITE};
      font-size: 10px;
      line-height: 12px;
    }

    .Select-value-icon {
      border-right: 1px solid ${darken(0.1, COLOR_SUMMER_SKY)};
      padding: 1px 5px 3px;
      
      &:hover,
      &:focus {
        background-color: ${lighten(0.1, COLOR_SUMMER_SKY)};
        color: ${COLOR_WHITE};
      }

      &:active {
        background-color: ${lighten(0.1, COLOR_SUMMER_SKY)};
      }
    }

    &.Select--rtl {
      .Select-value-icon {
        border-left: 1px solid ${darken(0.1, COLOR_SUMMER_SKY)};
      }
    }

    &.is-disabled {
      .Select-value {
        background-color: ${COLOR_CROCODILE_TOOTH};
        border: 1px solid ${COLOR_CROCODILE_TOOTH};
        color: ${COLOR_WHITE};
      }

      .Select-value-icon {
        border-right: 1px solid ${darken(0.1, COLOR_CROCODILE_TOOTH)};

        &:hover,
        &:focus,
        &:active {
          background-color: ${COLOR_CROCODILE_TOOTH};
        }
      }
    }
  }
`;
