import { readFileSync } from 'fs';

const members = JSON.parse(readFileSync(new URL('../json_files/members.json', import.meta.url)));

export default members;
