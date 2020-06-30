import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  body{
    background: #f5f5f5;
    font-size: 14px;
    color: #333;
    font-family: sans-serif;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  };

  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
`;
