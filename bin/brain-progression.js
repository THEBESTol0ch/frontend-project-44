#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { gameDescription, correctAnswers, gameQuestions } from '../src/games/brain-progression.js';

startGame(gameDescription, correctAnswers, gameQuestions);
