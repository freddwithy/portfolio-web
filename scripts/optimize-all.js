import { glob } from 'glob';
import sharp from 'sharp';
import { join, dirname, basename, extname } from 'path';

const files = glob.sync('public/designs/manipulations/*.png', {
  nodir: true,
});

async function processImages() {
  for (const file of files) {
    if (file) {
      console.info(`Converting ${file}`);
      const newFileName = `${basename(file, extname(file))}.webp`;
      const newFilePath = join(dirname(file), newFileName);
  
      const convert = sharp(file)
        .webp({
          lossless: true,
          quality: 100,
        });
  
      await convert.toFile(newFilePath);
      console.info(`Converted to ${newFilePath}`);
    } else {
      console.warn('No files found.');
    }
  }   
}

processImages()