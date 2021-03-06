import { colors } from '../constants';

export const SelectGameModeCSS = `
  .SelectGameMode {
    -moz-appearance: none;
    -webkit-appearance: none;
    background-image: url("static/images/chevron-down.svg");
    background-position: calc(100% - .5rem);
    background-repeat: no-repeat;
    background-size: 1.4rem;
    border: none;
    box-shadow: .3rem .3rem ${colors.shadow};
    color: ${colors.black};
    font-family: 'Titillium Web', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: .1em;
    line-height: 2rem;
    padding: .5rem;
    text-transform: capitalize;
  }

  .SelectGameMode:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 ${colors.black};
  }

  option {
    background-color: ${colors.white};
    font-weight: 400;
  }
`;
