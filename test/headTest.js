
const head= require('../head');
const assertEqual = require('../assertEqual');

//test cases
assertEqual(head([5,6,7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");