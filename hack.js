setInterval(() => {
var  atag;
var searchText;
var solution;
var unstuck;
var temp;
var temp2;
var close;

atag = document.getElementsByTagName("span");
searchText = "Get Unstuck";
for(let i = 0; i < atag.length; i++)
{
	if(atag[i].textContent == searchText)
	{
		unstuck = atag[i];
		break;
	}
}
unstuck.click();

for(let i = 0; i < 10000; i++)
{
	for(let j = 0; j < 10000; j++) ;
}

atag = document.getElementsByTagName("div");
searchText = "Solution";
for(let i = 0; i < atag.length; i++)
{
	if(atag[i].textContent == searchText)
	{
		temp2 = atag[i];
		break;
	}
}
temp2.click();

for(let i = 0; i < 10000; i++)
{
	for(let j = 0; j < 10000; j++) ;
}


atag = document.getElementsByTagName("button");
searchText = "Get Code Solution";
for(let i = 0; i < atag.length; i++)
{
	if(atag[i].textContent == searchText)
	{
		temp = atag[i];
		break;
	}
}
temp.click()


for(let i = 0; i < 10000; i++)
{
	for(let j = 0; j < 10000; j++) ;
}

searchText = "Give me the solution to this exercise";
for(let i = 0; i < atag.length; i++)
{
	if(atag[i].textContent == searchText)
	{
		solution = atag[i];
		break;
	}
}
solution.click();

for(let i = 0; i < 10000; i++)
{
	for(let j = 0; j < 10000; j++) ;
}


atag = document.getElementsByTagName('title')
for(let i = 0; i < atag.length; i++)
{
	if(atag[i].textContent == "Close Icon")
	{
		close = atag[i];
		break;
	}
}
(close.parentElement).parentElement.click()

for(let i = 0; i < 10000; i++)
{
	for(let j = 0; j < 10000; j++) ;
}

var next = document.getElementById('discovery-next')

setTimeout(function(){next.click();}, 5000);
}, 6000);
