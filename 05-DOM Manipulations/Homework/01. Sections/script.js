function create(words) {
   const contentDiv = document.getElementById('content');
   contentDiv.addEventListener('click', show)

   Array.from(words).forEach(w => {
      const divToAdd = document.createElement('div');
      divToAdd.innerHTML = `<p style="display:none;">${w}</p>`;
      contentDiv.appendChild(divToAdd);
   });

   function show(e) {
      e.target.children[0].style.display = 'block';
   }
}