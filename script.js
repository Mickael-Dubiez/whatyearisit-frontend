fetch('https://weatherapp-part4-backend-zeta.vercel.app/year')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.year;
 });