(this.webpackJsonp=this.webpackJsonp||[]).push([[94],{74:function(n,t,e){"use strict";e.r(t),t.default='// This script runs a switch statement in a for-loop.\n\nlet arr = [42, 123.456, "hello", true, "hey", \'x\', 999, 1, 2, 3, 4];\n\nfor item in arr {\n    switch item {\n        // Match single integer\n        42 => print("The Answer!"),\n        // Match single floating-point number\n        123.456 => print(`Floating point... ${item}`),\n        // Match single string\n        "hello" => print(`${item} world!`),\n        // Match another integer\n        999 => print(`Got 999: ${item}`),\n        // Match range with condition\n        0..100 if item % 2 == 0 => print(`A small even number: ${item}`),\n        // Match another range\n        0..100 => print(`A small odd number: ${item}`),\n        // Default case\n        _ => print(`Something else: <${item}> is ${type_of(item)}`)\n    }\n}\n'}}]);