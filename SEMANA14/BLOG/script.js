function addPost() {
    var title = document.getElementById("titleInput").value;
    var content = document.getElementById("contentInput").value;
    
    if (title && content) {
        var postHtml = '<div class="post"><h2>' + title + '</h2><p>' + content + '</p></div>';
        document.getElementById("postsContainer").innerHTML += postHtml;
        
        document.getElementById("titleInput").value = '';
        document.getElementById("contentInput").value = '';
    } else {
        alert("Por favor, preencha o título e o conteúdo do post.");
    }
}
