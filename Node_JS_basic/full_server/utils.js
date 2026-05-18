import fs from 'fs';

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const header = lines[0].split(',');
      const firstNameIndex = header.indexOf('firstname');
      const fieldIndex = header.indexOf('field');

      const studentsByField = {};

      for (let i = 1; i < lines.length; i += 1) {
        const row = lines[i].split(',');
        const firstName = row[firstNameIndex];
        const field = row[fieldIndex];

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }

        studentsByField[field].push(firstName);
      }

      resolve(studentsByField);
    });
  });
}
