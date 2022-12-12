import { readFileSync } from 'fs';

const absences = JSON.parse(readFileSync(new URL('../json_files/absences.json', import.meta.url)));

export default absences;
