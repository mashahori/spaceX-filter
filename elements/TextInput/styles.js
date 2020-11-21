import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 10px;
  width: 100%;
  max-width: 410px;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }

  p {
    display: none;
    position: absolute;
    bottom: -20px;
    left: 0;
    font-size: 13px;
    line-height: 21px;

    @media (max-width: 768px) {
      font-size: 11px;
      bottom: -17px;
    }
  }

  input {
    font-family: 'TT Norms', 'Arial', sans-serif;
    box-sizing: border-box;
    padding: 0;
    padding-bottom: 4px;
    padding-right: 30px;
    width: 100%;
    font-size: 20px;
    line-height: 32px;
    border: none;
    border-bottom: 1px solid rgba(32, 31, 42, 0.3);
    border-radius: 0;
    outline: none;
    transition: all 0.2s;
    touch-action: manipulation;
    -webkit-appearance: none;
    background-position: top 6px right;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
      padding-bottom: 3px;
      font-size: 16px;
      line-height: 22px;
      background-size: 3.7%;
      background-position: top 0 right;
    }

    &::placeholder {
      font-family: 'TT Norms', 'Arial', sans-serif;
      font-weight: 500;
      color: #201f2a;
      transition: inherit;
      opacity: 0;
    }

    &:focus {
      border-bottom: 1px solid #5faf52;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  input:placeholder-shown + label {
    max-width: 76.66%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: text;
    transform-origin: left bottom;
    transform: translate(0, 2.125rem) scale(1.1);
  }

  input:not(:placeholder-shown) + label,
  input:focus + label {
    transform: translate(0, 8px) scale(1);

    &:hover {
      color: rgba(32, 31, 42, 0.5);
    }
  }

  label {
    margin-bottom: 16px;
    transition: transform 0.2s;
    touch-action: manipulation;
    font-size: 16px;
    line-height: 21px;
    color: rgba(32, 31, 42, 0.5);

    @media (max-width: 768px) {
      font-size: 13px;
      line-height: 22px;
    }

    &:hover {
      color: rgba(32, 31, 42, 1);
    }
  }

  ${props =>
    props.cv &&
    css`
      max-width: 547px;

      input:placeholder-shown + label {
        transform: translate(0, 37px) scale(1.1);
      }

      input:not(:placeholder-shown) + label,
      input:focus + label {
        transform: translate(0, 12px) scale(1);

        &:hover {
          color: rgba(32, 31, 42, 0.5);
        }
      }
    `};

  ${props =>
    props.correct &&
    css`
      input {
        color: #53b443;
        border-color: #53b443;
        background-image: url('icons/ok.svg');

        &:focus {
          border-bottom: 1px solid #53b443;
        }
      }
    `};

  ${props =>
    props.warning &&
    css`
      input {
        color: #feb251;
        border-color: #feb251;
        background-image: url('icons/warning.svg');

        &:focus {
          border-bottom: 1px solid #feb251;
        }
      }

      input:not(:placeholder-shown) + label,
      input:focus + label {
        &:hover {
          color: #feb251;
        }
      }

      label:hover {
        color: #feb251;
      }

      p {
        display: block;
        color: #feb251;
      }
    `};

  ${props =>
    props.error &&
    css`
      input {
        color: #fb5235;
        border-color: #fb5235;
        background-image: url('icons/error.svg');

        &:focus {
          border-bottom: 1px solid #fb5235;
        }
      }

      label:hover {
        color: #fb5235;
      }

      input:not(:placeholder-shown) + label,
      input:focus + label {
        &:hover {
          color: #fb5235;
        }
      }

      p {
        display: block;
        color: #fb5235;
      }

      label {
        color: #fb5235;
      }
    `};
`;
