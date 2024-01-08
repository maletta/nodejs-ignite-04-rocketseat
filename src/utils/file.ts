import fs from 'fs';

const deleteFile = async (filePath: string): Promise<void> => {
  try {
    await fs.promises.stat(filePath);
    await fs.promises.unlink(filePath);
  } catch {
    console.log('Não foi possível deletar o arquivo');
  }
};

export { deleteFile };
