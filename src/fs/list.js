import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
  readdir(join(__dirname, 'files'))
    .then((fileNames) => {
      console.log(fileNames);
    })
    .catch(() => {
      console.log(new Error('FS operation failed'));
    });
};

list();
