import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  max-width: 410px;
  min-height: 78px;
  align-items: flex-end;
  margin-bottom: 10px;
  z-index: 15;

  @media (max-width: 768px) {
    min-height: 58px;
  }

  .react-select-container {
    width: 100%;
  }

  .react-select__control {
    border: none;
    box-shadow: none;
    border-bottom: 1px solid rgba(32, 31, 42, 0.5);
    border-radius: 0;
    padding-bottom: 8px;
    cursor: pointer;

    @media (max-width: 768px) {
      padding-bottom: 2px;
    }

    &:hover {
      border-color: #5faf52;
    }

    svg {
      transition: all 0.2s;
    }

    &--is-focused {
      border-color: #5faf52;

      .react-select__placeholder {
        top: -3px;
        font-size: 14px;
      }
    }

    &--menu-is-open {
      svg {
        transform: rotate(180deg);
      }
    }
  }

  .react-select__value-container {
    padding-left: 0;
    font-size: 18px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  .react-select__value-container--has-value + .react-select__indicators {
    .react-select__indicator {
      position: relative;
      top: 11px;

      @media (max-width: 768px) {
        top: 14px;
      }

      @media (max-width: 420px) {
        top: 8px;
      }
    }
  }

  .react-select__placeholder {
    margin-left: 0;
    line-height: 24px;
    color: rgba(32, 31, 42, 0.5);
  }

  .react-select__single-value {
    margin-left: 0;
    font-size: 20px;
    line-height: 31px;
    top: 70%;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  .react-select__input {
    position: relative;
    top: 9px;
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    input {
      font: inherit;
      max-width: 350px;
    }
  }

  .react-select__indicator-separator {
    background-color: transparent;
  }

  .react-select__indicator {
    padding-right: 0;
  }

  .react-select__menu {
    margin-top: 0;
    padding: 20px 30px;
    padding-bottom: 30px;
    border: none;
    box-shadow: none;
    background-color: #f7f8f9;

    &::after {
      content: '';
      width: 100%;
      height: 60px;
      position: absolute;
      bottom: -10px;
      left: 0;
      z-index: 1;
      background: linear-gradient(
        360deg,
        #f7f8f9 60%,
        rgba(247, 248, 249, 0) 121.93%
      );
    }
  }

  .react-select__menu-list {
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      opacity: 0;
    }

    &::-webkit-scrollbar {
      opacity: 0;
    }
  }

  .react-select__option {
    position: relative;
    overflow: visible;
    padding: 5px 12px;
    padding-left: 18px;
    font-size: 16px;
    line-height: 30px;
    color: rgba(32, 31, 42, 0.5);
    cursor: pointer;
    transition: color 0.2s ease-in;

    &:hover {
      background-color: transparent;
    }

    &:active {
      background-color: transparent;
    }

    &--is-focused {
      background-color: transparent;
      color: #53b443;
    }

    &--is-selected {
      background-color: transparent;
      color: #53b443;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: #53b443;
      }
    }
  }
`;
