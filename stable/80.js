(this.webpackJsonp=this.webpackJsonp||[]).push([[80],{60:function(t,n,o){"use strict";o.r(n),n.default="// This script defines a function that acts as a method.\n\n// Use 'this' to refer to the object of a method call\nfn action(x, y) {\n    this = this.abs() + x * y;      // 'this' can be modified\n}\n\nlet obj = -40;\n\nobj.action(1, 2);                   // call 'action' as method\n\nprint(`obj should now be 42: ${obj}`);\n"}}]);