(this.webpackJsonp=this.webpackJsonp||[]).push([[81],{62:function(n,s,t){"use strict";t.r(s),s.default='//! This script runs if statements.\n\nlet a = 42;\nlet b = 123;\nlet x = 999;\n\nif a > b {\n    print("Oops! a > b");\n} else if a < b {\n    print("a < b, x should be 0");\n\n    let x = 0;          // <- this \'x\' shadows the global \'x\'\n    print(x);           // should print 0\n} else {\n    print("Oops! a == b");\n}\n'}}]);