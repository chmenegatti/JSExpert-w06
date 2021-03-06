import fs from 'fs';
import fsPromises from 'fs/promises';

import { join, extname } from 'path';

import config from './config.js';

const {
  dir: {
    publicDirectory,
  }
} = config;

export class Service {
  createFileStream(filename) {
    return fs.createReadStream(filename);
  }

  async getFileInfo(filename) {
    const fullFilePath = join(publicDirectory, filename);

    await fsPromises.access(fullFilePath);

    const fileType = extname(fullFilePath);

    return {
      type: fileType,
      name: fullFilePath,
    }

  }


  async getFileStream(filename) {
    const { name, type } = await this.getFileInfo(filename);
    return {
      stream: this.createFileStream(name),
      type
    }
  }
}
