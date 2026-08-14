import { flag } from 'flags/next';
export const pocFlag = flag({
  key: 'poc-flag',
  decide() {
    return false;
  },
});