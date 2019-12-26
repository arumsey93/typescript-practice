import * as _ from 'lodash';

async function hello() {
    return 'world'
}

const url = new URL('...')

let lucky = 23;

type Style = 'bold' | 'italic';
let font: Style;

interface Person {
    first: string;
    last: string;
    [key: string]: any
}

const person: Person = {
    first: 'Alex',
    last: 'Rumsey'
}

const person2: Person = {
    first: 'Jennifer',
    last: 'Piet',
    fast: true
}