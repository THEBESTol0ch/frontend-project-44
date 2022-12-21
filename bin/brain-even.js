#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { gameDescription, correctAnswers, gameQuestions } from '../src/games/brain-even.js';

startGame(gameDescription, correctAnswers, gameQuestions);
