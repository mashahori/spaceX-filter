import styled from 'styled-components';

const Styled = styled.button`
  display: block;
  margin-left: auto;
  margin-right: 37px;
  margin-bottom: 75px;
  position: sticky;
  top: 38px;

  svg {
    opacity: 0.3;
    transition: all 0.2s ease-in;
  }

  &:hover {
    svg {
      opacity: 0.6;
    }
  }

  @media (max-width: 768px) {
    margin-right: 22px;
    margin-bottom: 0;

    svg {
      width: 27px;
      height: 27px;
    }
  }
`;

const CloseBtn = ({ className, onClick }) => (
  <Styled
    type="button"
    className={className}
    aria-label="Закрыть"
    onClick={onClick}
  >
    <svg
      width="43"
      height="44"
      viewBox="0 0 43 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="1"
        d="M33.7392 30.6989L29.7254 34.7128L21.2355 26.2229L12.7233 34.735L8.48988 30.5016L17.002 21.9894L8.51216 13.4996L12.526 9.48569L21.0159 17.9756L29.505 9.48648L33.7384 13.7199L25.2493 22.209L33.7392 30.6989Z"
        fill="#201F2A"
      />
    </svg>
  </Styled>
);

export default CloseBtn;
