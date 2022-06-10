"use strict";
function introduction(name) {
  return `Hi, my name is ${name}.`;
}
introduction("wolan");
function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage("wolan", "javascript");
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguageOptional("wolan", "Ruby");
