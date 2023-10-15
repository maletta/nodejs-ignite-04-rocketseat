import crypto from 'crypto';
import multer, { StorageEngine } from 'multer';
import { resolve } from 'path';

interface IUploadFunction {
  storage: StorageEngine;
}

// função que configura qual a pasta de destino dos arquivos E
// configura qual o nome da saída dos arquivos
export default {
  upload(folder: string): IUploadFunction {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', folder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString('hex');
          const fileName = `${fileHash}-${file.originalname}`;

          // erro, nome do arquivo
          return callback(null, fileName);
        },
      }),
    };
  },
};
