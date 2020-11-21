import styled from 'styled-components';

const Accent = styled.button`
  font-weight: bold;
  font-size: 18px;
  line-height: 70px;
  background: #fb5235;
  border-radius: 8px;
  padding: 0 32px;
  color: #ffffff;
  display: inline-block;
  transition: all 0.3s ease;

  &:hover,
  &:active {
    background-color: #ec381a;
    color: #ffffff;
  }

  @media screen and (max-width: 640px) {
    font-size: 12px;
    line-height: 56px;
  }
`;

const Default = styled.button`
  font-weight: bold;
  font-size: 18px;
  line-height: 70px;
  color: #fb5235;
  border: 2px solid rgba(32, 31, 42, 0.1);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0 32px;
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    border-color: #fb5235;
    color: #fb5235;
  }

  &:active {
    border-color: #ec381a;
    color: #ec381a;
  }

  @media screen and (max-width: 420px) {
    font-size: 12px;
    line-height: 56px;
  }
`;

const Button = ({ type = 'default', children, className, onClick }) => (
  <>
    {
      {
        accent: (
          <Accent type="button" className={className} onClick={onClick}>
            {children}
          </Accent>
        ),
        default: <Default className={className}>{children}</Default>,
      }[type]
    }
  </>
);

export default Button;
