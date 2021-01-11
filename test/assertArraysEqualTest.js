const eqArrays= require('../eqArrays');
const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

//test cases
//assertArraysEqual(["hey", "hi", "hello"], ["hey", "hi", "hello"]);
//assertArraysEqual(["hey", "hi", "bye"], ["hey", "hi", "hello"]);
assertEqual(assertArraysEqual(["hey", "hi", "hello"], ["hey", "hi", "hello"]), true); // => should PASS
assertEqual(assertArraysEqual(["hey", "hi", "bye"], ["hey", "hi", "hello"]), true); // => should PASS
