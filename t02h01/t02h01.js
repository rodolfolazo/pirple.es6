/*
* Homework Assignment #1: Data Types
* by Rodolfo Lazo
*/


//String
var nameSong = 'Depende';
var nameAlbum = 'Depende';
var nameGroup = 'Jarabe de Palo';

//number
var released = 1998;

//Boolean
var englishLanguage = false;

//Array
var membersGroup = ['Pau Dones', 'David Muñoz', 'Alex Tenas', 'Jordi Vericat', 'Jaime Burgos', 'Jimmi Jenks'];
var availableOn = ['Spotify', 'Dyzer', 'Youtube'];
var genre = ['Spanish Rock', 'Pop'];

//Object
//Constructor pattern for creating objects
function Song(name, album, group, members, available, released, genre, english){
    this.name = name;
    this.album = album;
    this.group = group;
    this.members = members;
    this.available = available;
    this.released = released;
    this.genre = genre;
    this.english = english;
}

//Initialize object
var dependeSong = new Song(nameSong,nameAlbum,nameGroup,membersGroup,availableOn,released,genre,englishLanguage);


//Output
console.log("Song: "+ dependeSong.name);
console.log("Album: "+ dependeSong.album);
console.log("Group:  " + dependeSong.group);
console.log("Members of the group: " + dependeSong.members);
console.log("Available on :" + dependeSong.available);
console.log("Released : " + dependeSong.released);
console.log("Genre: " + dependeSong.genre);
console.log("English song? :" + dependeSong.english);