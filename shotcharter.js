

//On launch function. Sets scope for script.
(function(){
var canv = document.getElementById('myCanvas'),
    c = canv.getContext('2d'),
    imageObj = new Image();
    imageObj.onload = function(){
	c.drawImage(imageObj, 0, 0);
}; 
    imageObj.src = 'http://thumbs.dreamstime.com/z/vector-illustration-basketball-court-16709570.jpg';

var circle = {
    x : 50,
    y : 50,
    //vx vy velocity vector
    radius : 20,
};

var teams = {
    
}
function selectedTeam(){
var mylist=docmument.getElementById("teamList");
document.getElementById("team").value=teamList.options[selectedIndex].text;
}


// Listens for mouse events
canv.addEventListener('mousedown',function(e){
	

	if(e.which == 1){
	c.fillStyle = "#00A308"
	c.lineWidth = 5;
	console.log(e.pageX, e.pageY);
	circle.x = e.pageX;
	circle.y = e.pageY;
	c.beginPath();
	c.arc(circle.x,circle.y,circle.radius,0, 2*Math.PI);
	c.closePath();
	c.fill();
	}
	if(e.which == 3){
	e.preventDefault();
	c.fillStyle="#FF1C0A"
	console.log(e.pageX, e.pageY);
	circle.x = e.pageX-circle.radius-35;
	circle.y = e.pageY;
	c.beginPath();
	c.arc(circle.x,circle.y,circle.radius,0, 2*Math.PI);
	c.closePath();
	c.fill();
	}
}
);
})();


