document.addEventListener("DOMContentLoaded", function() {
    fetch('./writerdata.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const writer = data[1]; // Assuming data is an array with one writer

            // Populate writer name
            document.getElementById("writer-name").textContent = writer.name;

            // Populate writer introduction
            const introContainer = document.getElementById("writer-intro");
            writer.intro.forEach(paragraph => {
                let p = document.createElement("p");
                p.textContent = paragraph;
                introContainer.appendChild(p);
            });

            // Populate famous quotes
            const famousContainer = document.getElementById("writer-famous");
            writer.famous.forEach(quote => {
                let li = document.createElement("li");
                li.textContent = quote;
                famousContainer.appendChild(li);
            });

            // Populate articles
            const articlesContainer = document.getElementById("writer-articles");
            writer.articles.forEach(article => {
                let p = document.createElement("p");
                p.textContent = article;
                articlesContainer.appendChild(p);
            });
        })
        .catch(error => console.error('Error fetching writer data:', error));
});
