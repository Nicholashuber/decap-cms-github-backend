import {nanoServer} from '../lib/nano-server.js';

nanoServer.route('GET', '/', () => ({
  ok: true,
  data: {
    app: '..:: Alwatr Decap CMS Backend Nanoservice ::..',
    message: 'Hello ;)',
  },
}));
