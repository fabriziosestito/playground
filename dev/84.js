(this.webpackJsonp=this.webpackJsonp||[]).push([[84],{66:function(n,e,s){"use strict";s.r(e),e.default='// This script uses the Sieve of Eratosthenes to calculate prime numbers.\n\nlet now = timestamp();\n\nconst MAX_NUMBER_TO_CHECK = 1_000_000;     // 9592 primes <= 100000\n\nlet prime_mask = [];\nprime_mask.pad(MAX_NUMBER_TO_CHECK, true);\n\nprime_mask[0] = false;\nprime_mask[1] = false;\n\nlet total_primes_found = 0;\n\nfor p in range(2, MAX_NUMBER_TO_CHECK) {\n    if !prime_mask[p] { continue; }\n\n    //print(p);\n\n    total_primes_found += 1;\n\n    for i in range(2 * p, MAX_NUMBER_TO_CHECK, p) {\n        prime_mask[i] = false;\n        i += p;\n    }\n}\n\nprint(`Total ${total_primes_found} primes <= ${MAX_NUMBER_TO_CHECK}`);\nprint(`Run time = ${now.elapsed} seconds.`);\n\nif total_primes_found != 78_498 {\n    print("The answer is WRONG! Should be 78,498!");\n}'}}]);