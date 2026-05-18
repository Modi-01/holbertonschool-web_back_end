import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(new Error('Cannot load the database'));

      const lines = data.trim().split('\n');
      const header = lines[0].split(',');
      const fieldIndex = header.indexOf('field');
      const firstNameIndex = header.indexOf('firstname');

      const studentsByField = {};

      for (let i = 1; i < lines.length; i++) {
        const row = lines[i].split(',');
        const field = row[fieldIndex];
        const firstName = row[firstNameIndex];

        if (!studentsByField[field]) studentsByField[field] = [];
        studentsByField[field].push(firstName);
      }

      resolve(studentsByField);
    });
  });
}
