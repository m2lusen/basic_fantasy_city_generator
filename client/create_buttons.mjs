export function createButton(name, class_, id) { //issues with the button sering its own display as none
    const button = document.createElement('button');
    button.id = name + '_toggle';
    button.innerHTML = 'Toggle Display';
    document.querySelector(id).appendChild(button);
    button.addEventListener('click', () => {
        let elements = document.querySelectorAll(class_);
        elements.forEach(element => {
            console.log(element.style.display); // temporary: at the moment the style of the class is not set
            if (element.style.display === 'grid') {
                element.style.display = 'none';
            } else {
                element.style.display = 'grid';
            }
        });
    });
}