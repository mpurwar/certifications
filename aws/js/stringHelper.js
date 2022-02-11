/** Copyright 2022 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["argumentNullError"],function(a){var b;return b={},b.isStringNullOrWhiteSpace=function(a){return void 0===a||null===a||(""===a.toString()||""===a.toString().trim())},b.stringEndsWith=function(b,c,d){if(null===b||void 0===b)throw a.createInstance("value");if(null===c||void 0===c)throw a.createInstance("suffix");return!0===d&&(b=b.toLocaleLowerCase(),c=c.toLocaleLowerCase()),-1!==b.indexOf(c,b.length-c.length)},b.stringStartsWith=function(b,c,d){if(null===b||void 0===b)throw a.createInstance("argumentNullError");if(null===c||void 0===c)throw a.createInstance("prefix");return!0===d&&(b=b.toLocaleLowerCase(),c=c.toLocaleLowerCase()),0===b.indexOf(c)},b.trimString=function(a){return null!==a&&void 0!==a&&(a=a.toString().replace(/^\s+|\s+$/gm,"")),a},b.trimStringEnd=function(c,d,e){if(null===c||void 0===c)throw a.createInstance("argumentNullError");if(null===d||void 0===d)throw a.createInstance("suffixToRemove");return!0===b.stringEndsWith(c,d,e)&&(c=c.substring(0,c.length-d.length)),c},b.trimStringStart=function(c,d,e){if(null===c||void 0===c)throw a.createInstance("argumentNullError");if(null===d||void 0===d)throw a.createInstance("prefixToRemove");return!0===b.stringStartsWith(c,d,e)&&(c=c.substring(d.length)),c},b.areStringsEqual=function(a,c,d,e){return a===c||(!0===e&&(a=b.trimString(a),c=b.trimString(c)),!0===d&&(a=a.toLowerCase(),c=c.toLowerCase()),a===c)},b.stringComparer=function(a,b){return a<b?-1:a>b?1:0},b.removeSpaces=function(a){return null===a||void 0===a?a:a.replace(/\s/g,"")},b.truncate=function(a,b,c){return b=b||50,a&&a.length>b?a.substring(0,b)+(c?"":"..."):a},b.containsIgnoreCase=function(a,b){return!(!a||!b)&&a.toLowerCase().indexOf(b.toLowerCase())>-1},b.stringOrEmpty=function(a){return a||""},b});