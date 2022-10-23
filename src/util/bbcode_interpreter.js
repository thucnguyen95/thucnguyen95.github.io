import bbCodeParser from 'js-bbcode-parser';
import BBCodeParser from 'js-bbcode-parser/src/index.js';

import CS545Project1 from './../constants/cs545_project1.txt';
import CS545Project2 from './../constants/cs545_project2.txt';
import CS545Project3 from './../constants/cs545_project3.txt';
import CS545Project4 from './../constants/cs545_project4.txt';
import CS645Project1 from './../constants/cs645_project1.txt';
import CS645Project2 from './../constants/cs645_project2.txt';
import CS645Project3 from './../constants/cs645_project3.txt';
import CS646Project1 from './../constants/cs646_project1.txt';
import CS646Project2 from './../constants/cs646_project2.txt';
import CS646Project3 from './../constants/cs646_project3.txt';
import CS646Project4 from './../constants/cs646_project4.txt';
import CS646Project5 from './../constants/cs646_project5.txt';
import CS64601Project1 from './../constants/cs64601_project1.txt';
import CS64601Project2 from './../constants/cs64601_project2.txt';
import CS64601Project3 from './../constants/cs64601_project3.txt';
import CS64601Project4 from './../constants/cs64601_project4.txt';
import CSE11Project1 from './../constants/cse11_project1.txt';
import CSE11Project2 from './../constants/cse11_project2.txt';
import CSE11Project3 from './../constants/cse11_project2.txt';
import WorkFulgentGenetics from './../constants/work_fulgentgenetics.txt';

const mapValidConstantFiles =
{
    "cs545_project1.txt": CS545Project1,
    "cs545_project2.txt": CS545Project2,
    "cs545_project3.txt": CS545Project3,
    "cs545_project4.txt": CS545Project4,
    "cs645_project1.txt": CS645Project1,
    "cs645_project2.txt": CS645Project2,
    "cs645_project3.txt": CS645Project3,
    "cs646_project1.txt": CS646Project1,
    "cs646_project2.txt": CS646Project2,
    "cs646_project3.txt": CS646Project3,
    "cs646_project4.txt": CS646Project4,
    "cs646_project5.txt": CS646Project5,
    "cs64601_project1.txt": CS64601Project1,
    "cs64601_project2.txt": CS64601Project2,
    "cs64601_project3.txt": CS64601Project3,
    "cs64601_project4.txt": CS64601Project4,
    "cse11_project1.txt": CSE11Project1,
    "cse11_project2.txt": CSE11Project2,
    "cse11_project3.txt": CSE11Project3,
    "work_fulgentgenetics.txt": WorkFulgentGenetics,
};

export async function parseBbcToHtml(inputFileName){
    if (!mapValidConstantFiles[inputFileName]) throw new Error('The file doesn\'t exist!');
    const resolvedFile = mapValidConstantFiles[inputFileName];

    const response = await fetch(resolvedFile);
    if (!response.ok) throw new Error(`An error occurred: ${response.status}`);
    const text = await response.text();

    const html = bbCodeParser.parse(text);
    return html;
}
