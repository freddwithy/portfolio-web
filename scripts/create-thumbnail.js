import { glob } from 'glob';
import sharp from 'sharp';
import { join, dirname, basename } from 'path';

const files = glob.sync('public/designs/socialmedia/*.png', {
  nodir: true,
});

async function processImages() {
  for (const file of files) {
    if (file) {
      console.info(`Converting ${file}`);
      const newFilePath = join(dirname(file), 'thumbs', basename(file));
  
      const convert = sharp(file)
        .webp({
          lossless: false,
          quality: 25,
        });
  
      await convert.toFile(newFilePath);
      console.info(`Converted to ${newFilePath}`);
    } else {
      console.warn('No files found.');
    }
  }   
}

processImages()
