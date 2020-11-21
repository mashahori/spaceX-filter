import styled from 'styled-components';
import { useState } from 'react';

const Text = styled.p`
  margin-top: 27px;
  font-size: 18px;
  line-height: 27.72px;
  color: rgba(32, 31, 42, 0.5);

  @media (max-width: 768px) {
    margin-top: 5px;
    font-size: 14px;
    line-height: 22.12px;
  }
`;

const Button = styled.span`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  font-size: 16px;
  color: #53b443;
  transition: color 0.2s ease-in;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
  }

  &:hover {
    color: #339722;
  }
`;

const Icon = styled.svg`
  margin-left: 7px;
  margin-right: 7px;
  align-self: center;
  transform: rotate(${props => (props.showLess ? '' : '180deg')})
    translateY(${props => (props.showLess ? '' : '-3px')});
  transition: transform 0.2s ease-in;
`;

const SmartText = ({ text, length = 215, className }) => {
  const [showLess, setShowLess] = useState(true);

  if (text.length < length) {
    return <Text>{text}</Text>;
  }

  return (
    <Text className={className}>
      {showLess ? `${text.slice(0, length)}...` : text}&nbsp;
      <Button onClick={() => setShowLess(!showLess)} showLess={showLess}>
        {showLess ? 'Читать полностью' : 'Свернуть'}
        <Icon
          showLess={showLess}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4.94922L5.94975 9.89897L10.8995 4.94922"
            stroke="#53B443"
            strokeWidth="2"
          />
        </Icon>
      </Button>
    </Text>
  );
};

export default SmartText;
