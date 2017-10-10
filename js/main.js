/*var newDiv = document.createElement('div')
var newImg = document.createElement('img')
newDiv.className = "addedClass"
var textHere = document.createTextNode("write our text here")
newDiv.appendChild(textHere)
newImg.setAttribute('src', 'https://i.pinimg.com/736x/75/8d/ea/758dead5217609d5d72199300661d225--smily-face-thinking-emoticon.jpg')
var addHere = document.getElementById('addHere')
addHere.appendChild(newDiv) 
addHere.appendChild(newImg)


var newtitle = document.createElement('h1')
var moretext = document.createTextNode("Cool title, bro")
newtitle.appendChild(moretext)
var addHere = document.getElementById('addHere')
addHere.appendChild(newtitle)

var newSection = document.createElement('section')
var addHere = document.getElementById('addHere')
addHere.appendChild(newSection)*/


var user = [

	{
		username: "smontoro",
		password: "glynda1"
	},
	{
		username: "pmontoro",
		password: "sampson1"
	},
	{
		username: "fmontoro",
		password: "franky1"
	},
	{
		username: "mmontoro",
		password: "sunny1"
	}

]


function checkInput() {
		var username = document.getElementById("username").value
		var password = document.getElementById("password").value
	for (var i = 0; i < user.length; i++) {
		if (username == user[i].username && password == user[i].password) {
			alert("Hi, " + username + "! You are now logged in.")
			return
		}
	}
	alert("You shall not pass!")

}












