fetch('https://whatyearisit-backend-jade-chi.vercel.app/')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.year;
 });