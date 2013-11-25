"use strict";

var people = [
	{id: 0, name: 'User0', friends: [0,1,2]},
	{id: 1, name: 'User1', friends: [2,3]},
	{id: 2, name: 'User2', friends: [4,5]},
	{id: 3, name: 'User3', friends: []},
	{id: 4, name: 'User4', friends: [1,2]},
	{id: 5, name: 'User5', friends: [3,4]}
];

function getFriends(userId){
	var person = people[userId]
	if (!person){
		return;
	}
	var result = [];
	var length=person.friends.length;
	for(var i=0;i<length;i++){
		result.push(people[person.friends[i]]);
	}
	return result;
};