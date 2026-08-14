import { flag } from 'flags/next';
import { vercelAdapter } from '@flags-sdk/vercel';

export const pocFlag = flag({
  key: 'poc-flag',
  adapter: vercelAdapter(),
});


