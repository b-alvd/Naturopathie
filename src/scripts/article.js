document.addEventListener("DOMContentLoaded", function() {
    const URL_PARAMS = new URLSearchParams(window.location.search);
    const ARTICLE_ID = URL_PARAMS.get("id");

    fetch(`./src/scripts/articles.json`)
    .then(response => response.json())
    .then(articles => {
        const ARTICLE = articles.find(article => article.id == ARTICLE_ID);

        if (ARTICLE) {
            document.querySelector("#article-title").textContent = ARTICLE.title;
            document.querySelector("#article-image").src = ARTICLE.imgSrc;
            document.querySelector("#article-content").textContent = ARTICLE.content;
            document.querySelector("#article-date").textContent = ARTICLE.date;
        } else {
            document.getElementById("article_detail").innerHTML = "<p>Article introuvable</p>";
        }
    })
    .catch(error => console.error("Erreur lors du chargement de l'article: ", error));
})