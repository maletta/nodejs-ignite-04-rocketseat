import { ICategoriesRepository } from '@cars/repositories/ICategoriesRepository';
import csv from 'csv-parse';
import fs from 'fs';
import { inject, injectable } from 'tsyringe';

interface IImportCategory {
  name: string;
  description: string;
}

@injectable() // transforma a classe em um injetável
class ImportCategoryUseCase {
  constructor(
    @inject('CategoriesRepository') // injeta o singleton criado
    private categoryRepository: ICategoriesRepository
  ) {}

  private loadCategories(
    file: Express.Multer.File
  ): Promise<IImportCategory[]> {
    // retorna promise para esperar a leitura do arquivo de forma síncrona
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = [];

      try {
        const fileStream = fs.createReadStream(file.path); // faz leitura do arquivo em partes
        const parseFile = csv.parse();

        // pipe() canaliza nossa stream para algum lugar, até pra um arquivo se quisermos
        // canaliza o pedaço lido para o csv.parse()
        fileStream.pipe(parseFile);

        parseFile.on('data', async (line) => {
          const [name, description] = line;
          categories.push({ name, description });
        });

        parseFile.on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        });

        parseFile.on('error', (error) => {
          reject(error);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  public async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    await categories.forEach(async (category) => {
      const { name, description } = category;

      const existCategory = await this.categoryRepository.findByName(name);

      if (!existCategory) {
        await this.categoryRepository.create({ name, description });
      }
    });
  }
}

export { ImportCategoryUseCase };
