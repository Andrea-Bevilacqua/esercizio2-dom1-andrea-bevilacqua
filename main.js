document.addEventListener('DOMContentLoaded', () => {
    let createButton = document.querySelector('#createButton');
    let titleInput = document.querySelector('#titleInput');
    let paragraphInput = document.querySelector('#paragraphInput');
    let articleSection = document.querySelector('#articleSection');


    createButton.addEventListener('click' , () => {
        let titleValue = titleInput.value.trim();
        let paragraphValue = paragraphInput.value.trim();


        if(!titleValue || !paragraphValue){
            alert('Compila sia il titolo che il paragrafo! ')
            return;

        }

        let article = document.createElement('div');
        article.classList.add('border' , 'p-3' , 'mb-3', 'bg-light');

        let date = new Date();
        let formatDate = date.toLocaleDateString();

        article.innerHTML = `
            <h2>${titleValue}</h2>
            <p>${paragraphValue}</p>
            <p class="text-muted">Pubblicato il: ${formatDate}</p>
        `;
        articleSection.appendChild(article);

        // Pulisci i campi di input
        titleInput.value = '';
        paragraphInput.value = '';
    });

});