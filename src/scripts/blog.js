document.addEventListener("DOMContentLoaded", function() {
    const POSTS_CONTAINER = document.querySelector(".posts_container");

    fetch("./src/scripts/articles.json")
    .then(response => response.json())
    .then(articles => {
        articles.forEach(article => {
            const ARTICLE_ELEMENT = document.createElement("div");
            ARTICLE_ELEMENT.classList.add("article");

            ARTICLE_ELEMENT.innerHTML = `
                <img src="${article.imgSrc}" alt="${article.title}">
                <div class="content">
                    <h3>${article.title}</h3>
                    <p>${article.content}</p>
                    <p class="date">${article.date} - ${article.readTime}</p>
                    <a href="article.html?id=${article.id}">Voir plus</a>
                </div>
            `;
            POSTS_CONTAINER.appendChild(ARTICLE_ELEMENT);
        })
    })
    .catch(error => console.error("Erreur lors du chargement des articles: ", error));
})