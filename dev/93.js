(this.webpackJsonp=this.webpackJsonp||[]).push([[93],{74:function(n,i,t){"use strict";t.r(i),i.default='//! This script tests string operations.\n\nprint("hello");\nprint("this\\nis \\\\ nice");      // escape sequences\nprint("0x40 hex is \\x40");      // hex escape sequence\nprint("Unicode fun: \\u2764");   // Unicode escape sequence\nprint("more fun: \\U0001F603");  // Unicode escape sequence\nprint("foo" + " " + "bar");     // string building using strings\nprint("foo" < "bar");           // string comparison\nprint("foo" >= "bar");          // string comparison\nprint("the answer is " + 42);   // string building using non-string types\n\nlet s = "\\u2764 hello, world! \\U0001F603"; // string variable\nprint(`length=${s.len}`);       // should be 17\n\ns[s.len-3] = \'?\';               // change the string\nprint(`Question: ${s}`);        // should print \'Question: hello, world?\'\n\n// Line continuation:\nlet s = "This is a long \\\n         string constructed using \\\n         line continuation";\n\n// String interpolation\nprint(`One string: ${s}`);\n\n// Multi-line literal string:\nlet s = `\n          \\U0001F603 This is a multi-line\n                "string" with \\t\\x20\\r\\n\nmade using multi-line literal\n      string syntax.\n`;\n\nprint(s);\n\n// Interpolation\nlet s = `This is interpolation ${\n            let x = `within ${let y = "yet another level \\\n                                       of interpolation!"; y} interpolation`;\n            x\n} within literal string.`;\n\nprint(s);\n\nprint(">>> END <<<");\n'}}]);