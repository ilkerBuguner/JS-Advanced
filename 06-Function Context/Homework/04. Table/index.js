function solve(){
   document.querySelector('tbody').addEventListener('click', changeBackground);

   function changeBackground(e) {
      if(e.target.nodeName === 'TD') {
         if(e.target.parentNode.style['background-color']) {
            e.target.parentNode.removeAttribute('style');
         }
         else {
            Array.from(this.children).forEach(td => td.removeAttribute('style'));
            e.target.parentNode.style['background-color'] = "#413f5e";
         }
      }
   }
}
