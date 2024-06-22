document.addEventListener("DOMContentLoaded", async function() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const submittedid = urlParams.get('id');
        const acc_ans = urlParams.get('acc');

        const response = await fetch('./writerdata.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        console.log(submittedid);
        const data = await response.json();
        const writer = data[Number(submittedid)]; // Assuming data is an array with one writer

        // Populate writer name
        document.getElementById("writer-name").textContent = writer.name+acc_ans;

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
    } catch (error) {
        console.error('Error fetching writer data:', error);
    }
});
