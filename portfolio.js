/*var clicks = 0;

function button() 
{
  clicks++;
  console.log(clicks);
  document.getElementsByClassName("Clicker")[0].firstChild.data = "Clicks: " + clicks;
}*/

const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('fact_btn');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('fact_result');

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
            dog_result.innerHTML = fact;
            console.log(fact)
			
		});
}
