/*
*****************************************
*   SE AGREGA LA PLANTILLA DEL PROYECTO *
*       NAVBAR Y FOOTER                 *
*****************************************

*/

import { addNavbar, addFooter } from './plantilla.js';

const header = document.getElementById('header');
const footer = document.getElementById('footer');

addNavbar(header);
addFooter(footer);
