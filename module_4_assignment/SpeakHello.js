(function (window) {
var helloSpeaker = {};
 
var speakWord = "Hello";


helloSpeaker.speak = function(names) {
helloSpeaker.name = names;
console.log(speakWord + " " + helloSpeaker.name);
}
window.helloSpeaker = helloSpeaker;
})(window);


