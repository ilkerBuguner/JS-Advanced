function solve() {
    document.querySelector('button').addEventListener('click', addPet);
    const adoptionSection = document.getElementById('adoption').children[1];
    const adoptedSection = document.getElementById('adopted').children[1];

    function addPet(e) {
        e.preventDefault();
        const name = document.getElementById('container').children[0];
        const age = document.getElementById('container').children[1];
        const kind = document.getElementById('container').children[2];
        const currentOwner = document.getElementById('container').children[3];

        if (name.value != '' && !isNaN(age.value) && kind.value != '' && currentOwner.value != '') {
            const contactOwnerButton = el('button', 'Contact with owner');
            contactOwnerButton.addEventListener('click', contactWithOwner);

            function contactWithOwner(e) {
                const liElement = e.target.parentNode;
                e.target.remove();
                const takeThePetButton = el('button', 'Yes! I take it!');
                const enterNameInput = el('input', '', { placeholder: 'Enter your names' });
                const newDiv = el('div', [
                    enterNameInput,
                    takeThePetButton
                ]);
        
                takeThePetButton.addEventListener('click', adoptPet);
        
                function adoptPet(e) {
                    const newOwnerName = enterNameInput.value;
                    const currentListItem = e.target.parentNode.parentNode;
                    if (newOwnerName) {
                        const checkedButton = el('button', 'Checked');
                        checkedButton.addEventListener('click', removePet);
        
                        function removePet(e) {
                            e.target.parentNode.parentNode.remove();
                        }

                        currentListItem.children[1].textContent = `New Owner: ${newOwnerName}`;
                        adoptedSection.appendChild(currentListItem);
                        e.target.parentNode.parentNode.appendChild(checkedButton);
                        e.target.parentNode.remove();
                        e.target.previousSibling.remove();
                        e.target.remove();
                    }
                }
                liElement.appendChild(newDiv);
            }
        

            const li = el('li', [
                el('p', [
                    el('strong', name.value),
                    ' is a ',
                    el('strong', age.value),
                    ' year old ',
                    el('strong', kind.value)
                ]),
                el('span', `Owner: ${currentOwner.value}`),
                contactOwnerButton
            ])

            adoptionSection.appendChild(li);
            name.value = '';
            age.value = '';
            kind.value = '';
            currentOwner.value = '';
        }
    }
    function el(type, content, attributes) {
        const result = document.createElement(type);

        if (attributes !== undefined) {
            Object.assign(result, attributes);
        }

        if (Array.isArray(content)) {
            content.forEach(append);
        } else {
            append(content);
        }

        function append(node) {
            if (typeof node === 'string') {
                node = document.createTextNode(node);
            }
            result.appendChild(node);
        }

        return result;
    }
}

