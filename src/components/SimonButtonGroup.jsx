import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { buttonIds as ids, gameModes, ERROR_MOVE_DURATION } from '../constants';
import SimonButton from './SimonButton';

class SimonButtonGroup extends Component {
  componentWillMount() {
    this.props.startGame();
  }

  componentWillReceiveProps(nextState) {
    const { gameOver } = nextState;
    if (gameOver) this.props.onLeaveGame(this.props.history);
  }

  componentWillUnmount() {
    // The route is left with the game unended
    this.props.onLeaveGame();
  }

  render() {
    const { colors,
            gameMode,
            gameOver,
            playing,
            simonButtons,
            speed,
            onSimonButtonMouseDown,
            onSimonButtonMouseLeave,
            onSimonButtonMouseUp } = this.props;
    const disabledInteraction = 'sequenceerror'.includes(playing) || gameOver;
    const disableButtons = disabledInteraction ? ' is-disabled-interaction' : '';
    const errorAnimation = (playing === 'error') ? ' is-playing-error' : '';
    const buttons = simonButtons.map((simonButton, index) => (
      <SimonButton
        active={simonButton.active}
        color={colors[index]}
        cpuActive={simonButton.cpuActive}
        gameMode={gameMode}
        key={simonButton.id}
        position={simonButton.position}
        speed={speed}
        onMouseDown={() => onSimonButtonMouseDown(simonButton.id)}
        onMouseLeave={() => onSimonButtonMouseLeave(simonButton.active, simonButton.id)}
        onMouseUp={() => onSimonButtonMouseUp(simonButton.active, simonButton.id)}
      />
    ));

    return (
      <div className={`SimonButtonGroup${disableButtons}${errorAnimation}`}>
        {buttons}
        <style jsx>{`
          .SimonButtonGroup {
            border-radius: 100%;
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            height: 70vmin;
            width: 70vmin;
          }

          .is-disabled-interaction {
            pointer-events: none;
          }

          .is-playing-error {
            animation-duration: ${ERROR_MOVE_DURATION}s;
            animation-fill-mode: forwards;
            animation-name: shake;
            animation-timing-function: cubic-bezier(.175, .885, .32, 1.275);
          }

          @keyframes shake {
            from, to {
              transform: translate3d(0, 0, 0);
            }

            5%, 25%, 45%, 65%, 85% {
              transform: translate3d(-2vmin, -1vmin, 0);
            }

            10%, 30%, 50%, 70%, 90% {
              transform: translate3d(-4vmin, 0, 0);
            }

            15%, 35%, 55%, 75% {
              transform: translate3d(2vmin, 1vmin, 0);
            }

            20%, 40%, 60%, 80% {
              transform: translate3d(4vmin, 0, 0);
            }
          }
        `}</style>
      </div>
    );
  }
}

SimonButtonGroup.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  colors: PropTypes.arrayOf(PropTypes.oneOf(ids)).isRequired,
  gameMode: PropTypes.oneOf(gameModes).isRequired,
  gameOver: PropTypes.bool.isRequired,
  playing: PropTypes.oneOf([null, 'sequence', 'error', 'win']),
  simonButtons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOf(ids).isRequired,
    active: PropTypes.bool.isRequired,
    cpuActive: PropTypes.bool.isRequired,
    position: PropTypes.oneOf([
      'top-left', 'top-right', 'bottom-left', 'bottom-right']).isRequired,
  })).isRequired,
  speed: PropTypes.number.isRequired,
  onLeaveGame: PropTypes.func.isRequired,
  onSimonButtonMouseDown: PropTypes.func.isRequired,
  onSimonButtonMouseLeave: PropTypes.func.isRequired,
  onSimonButtonMouseUp: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

SimonButtonGroup.defaultProps = {
  playing: null,
};

export default withRouter(SimonButtonGroup);
