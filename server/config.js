import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const currentDir = dirname(fileURLToPath(import.meta.url));
const root = join(currentDir, '../');

const audioDirecory = join(root, 'audio');
const publicDirectory = join(root, 'public');

export default {
  port: process.env.PORT || 3000,
  dir: {
    root,
    audioDirecory,
    publicDirectory,
    songsDirectory: join(audioDirecory, 'songs'),
    fxDirectory: join(audioDirecory, 'fx'),
  },
  pages: {
    homeHTML: 'home/index.html',
    controllerHTML: 'controller/index.html',
  },
  location: {
    home: '/home',
  },
  constants: {
    CONTENT_TYPE: {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
    }
  }
}
