import * as fs from 'fs'

export default (path: string) : Promise<string> => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8' , (err, file) => {
    if (err) {
      return reject(err);
    }
    resolve(file);
  })
})