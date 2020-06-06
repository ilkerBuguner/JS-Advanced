function solve() {
   document.getElementById('searchBtn').addEventListener('click', findMatches);

   function findMatches(e) {
      const inputToSearch = document.getElementById('searchField').value;

      const names = Array.from(document.querySelectorAll('td'));
      names.shift();
      
      for (const name of names) {
         name.parentNode.classList.remove('select');
      };
      
      for (const name of names) {
         if(name.textContent.includes(inputToSearch)) {
            name.parentNode.classList.add('select');
         }
      }
   }
}