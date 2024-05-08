function savePost() {
    var title = document.getElementById("titleInput").value;
    var content = document.getElementById("contentInput").value;
    if (title && content) {
        var posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push({ title: title, content: content });
        localStorage.setItem("posts", JSON.stringify(posts));
        
        document.getElementById("titleInput").value = '';
        document.getElementById("contentInput").value = '';
        alert("Post salvo com sucesso!");
    } else {
        alert("Por favor, preencha o título e o conteúdo do post.");
    }
}

function displayPosts() {
    var posts = JSON.parse(localStorage.getItem("posts")) || [];
    var postsHtml = posts.map(function(post) {
        return '<div class="post"><h2>' + post.title + '</h2><p>' + post.content + '</p></div>';
    }).join('');
    document.getElementById("postsContainer").innerHTML = postsHtml;
}
