import createAction from '../utils/create-action';
import randomTone from '../utils/get-random-music-button';

export const END_MELODY = 'END_MELODY';
export const START_GAME = 'START_GAME';
export const SET_GAME_MODE = 'SET_GAME_MODE';
export const START_MELODY = 'START_MELODY';
export const TOGGLE_SOUND = 'TOGGLE_SOUND';
export const UPDATE_GAME_SPEED = 'UPDATE_GAME_SPEED';
export const TOGGLE_STRICT_MODE = 'TOGGLE_STRICT_MODE';

export const UPDATE_PLAYER_TONES = 'UPDATE_PLAYER_TONES';
export const NEW_TONE ='NEW_TONE';
export const SET_MAX_TONES = 'SET_MAX_TONES';

export const MUSIC_BUTTON_ON = 'MUSIC_BUTTON_ON';
export const MUSIC_BUTTON_OFF = 'MUSIC_BUTTON_OFF';

export const startGame = payload => ({type: START_GAME, tone: randomTone()});
export const newTone = payload => ({type: NEW_TONE, tone: randomTone()});

export const endMelody = createAction(END_MELODY);
export const setGameMode = createAction(SET_GAME_MODE);
export const startMelody = createAction(START_MELODY);
export const toggleSound = createAction(TOGGLE_SOUND);
export const updateGameSpeed = createAction(UPDATE_GAME_SPEED);
export const toggleStrictMode = createAction(TOGGLE_STRICT_MODE);
export const updatePlayerTones = createAction(UPDATE_PLAYER_TONES);
export const setMaxTones = createAction(SET_MAX_TONES);
export const musicButtonOn = createAction(MUSIC_BUTTON_ON);
export const musicButtonOff = createAction(MUSIC_BUTTON_OFF);