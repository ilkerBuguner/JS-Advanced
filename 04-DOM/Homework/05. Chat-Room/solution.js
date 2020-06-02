function solve() {
   document.querySelector('button').addEventListener('click', send);

   function send(input) {
      const textToSend = document.getElementById('chat_input').value;

      let newMessage = document.createElement('div')
      newMessage.setAttribute('class', 'message my-message');
      newMessage.textContent = textToSend;

      const parent = document.getElementById('chat_messages');

      parent.appendChild(newMessage);
      document.getElementById('chat_input').value = '';
   }
}


