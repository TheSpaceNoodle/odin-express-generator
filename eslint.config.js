import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [eslintConfigPrettier, { languageOptions: { globals: globals.node } }, pluginJs.configs.recommended];
