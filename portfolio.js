var clicks = 0;

function button() 
{
  clicks++;
  console.log(clicks);
  document.getElementsByClassName("Clicker")[0].firstChild.data = "Clicks: " + clicks;
}