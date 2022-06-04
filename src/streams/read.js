import { join } from 'path';
import useFilenameDirname from '../utils/useFilenameDirname.mjs';
import { stdout } from 'process';
import { createReadStream } from 'fs';

const { __dirname } = useFilenameDirname(import.meta.url);

export const read = async () => {
  const stream = createReadStream(join(__dirname, 'files', 'fileToRead.txt'), 'utf-8');

  stream.on('data', (chunk) => stdout.write(chunk));
  stream.on('error', (error) => console.log(error.message));
};

read();
