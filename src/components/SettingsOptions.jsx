import PropTypes from 'prop-types';
import React from 'react';
import GameModeDesc from './GameModeDesc';
import SelectGameMode from './SelectGameMode';
import Slider from './Slider';
import ToggleButton from './ToggleButton';
import { gameModes, MAX_MOVES } from '../constants';
import { SettingsOptionsCSS } from '../styles/settingsOptions';

const SettingsOptions = ({
  gameMode,
  gameSpeed,
  maxMoves,
  sound,
  strictMode,
  onGameModeChange,
  onGameSpeedChange,
  onMaxMovesChange,
  onStrictModeChange,
  onSoundChange }) =>
(
  <form className="SettingsOptions">
    <SelectGameMode
      selected={gameMode}
      onChange={onGameModeChange}
    />
    <GameModeDesc gameMode={gameMode} />
    <ToggleButton
      id="strict"
      label="Strict Mode"
      checked={strictMode}
      onChange={onStrictModeChange}
    />
    <ToggleButton
      id="sound"
      label="Sound"
      checked={sound}
      disabled={gameMode === 'listen'}
      onChange={onSoundChange}
    />
    <ToggleButton
      id="max"
      label="Endless Mode"
      checked={maxMoves === 'Infinity'}
      onChange={onMaxMovesChange}
    />
    <Slider
      id="max"
      onChange={speed => onGameSpeedChange(speed)}
      min="1"
      max="3"
      value={gameSpeed}
      step="0.25"
    >
      <span className="Slider-text">
        Speed <span className="Slider-speedFactor">x{gameSpeed}</span>
      </span>
    </Slider>
    <style jsx>{SettingsOptionsCSS}</style>
  </form>
);

SettingsOptions.propTypes = {
  gameMode: PropTypes.oneOf(Object.keys(gameModes)).isRequired,
  gameSpeed: PropTypes.string.isRequired,
  maxMoves: PropTypes.oneOf([MAX_MOVES, 'Infinity']).isRequired,
  sound: PropTypes.bool.isRequired,
  strictMode: PropTypes.bool.isRequired,
  onGameModeChange: PropTypes.func.isRequired,
  onGameSpeedChange: PropTypes.func.isRequired,
  onMaxMovesChange: PropTypes.func.isRequired,
  onSoundChange: PropTypes.func.isRequired,
  onStrictModeChange: PropTypes.func.isRequired,
};

export default SettingsOptions;
