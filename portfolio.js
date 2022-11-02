const cat_btn = document.getElementById('cat_btn');
const fact_btn = document.getElementById('fact_btn');
const cat_result = document.getElementById('cat_result');
const fact_result = document.getElementById('fact_result');

cat_btn.addEventListener('click', getRandomCat);
fact_btn.addEventListener('click', getRandomFact);

function getRandomCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}

function getRandomFact() {
	fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
		.then(res => res.text())
		.then(data => {
			let fact = JSON.parse(data).text
	
            fact_result.innerHTML = fact;
            
			
		})
}

var clicks = 0;

function button() 
{
  clicks++;
  console.log(clicks);
  document.getElementsByClassName("Clicker")[0].firstChild.data = "Clicks: " + clicks;

  if(clicks == 8)
{
	window.open('https://pbs.twimg.com/media/CLGV66dUMAALhjv.jpg', '_blank');
}
}

if(clicks == 5)
{
	window.open('https://pbs.twimg.com/media/CLGV66dUMAALhjv.jpg', '_blank');
}

function randomColor() {
	var color = '#' + Math.random().toString(16).substr(2, 6);
	document.getElementById("clickbutton").style.backgroundColor = color;
  

  }

