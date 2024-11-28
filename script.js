// Publicar mensajes
const postContent = document.getElementById("post-content");
const postButton = document.getElementById("post-btn");
const postsContainer = document.getElementById("posts");

// Función para agregar una publicación
postButton.addEventListener("click", () => {
  const content = postContent.value.trim();

  if (content) {
    // Crear el contenedor de la publicación
    const post = document.createElement("div");
    post.classList.add("post");

    // Contenido de la publicación
    const postText = document.createElement("p");
    postText.textContent = content;

    // Botón de like
    const likeButton = document.createElement("button");
    likeButton.textContent = "👍 0";
    let likes = 0;

    likeButton.addEventListener("click", () => {
      likes++;
      likeButton.textContent = `👍 ${likes}`;
    });

    // Sección de comentarios
    const commentSection = document.createElement("div");
    commentSection.classList.add("comments");

    const commentInput = document.createElement("input");
    commentInput.type = "text";
    commentInput.placeholder = "Escribe un comentario...";

    const commentButton = document.createElement("button");
    commentButton.textContent = "Comentar";

    // Contenedor de los comentarios
    const commentsList = document.createElement("ul");

    commentButton.addEventListener("click", () => {
      const commentText = commentInput.value.trim();
      if (commentText) {
        const comment = document.createElement("li");
        comment.textContent = commentText;
        commentsList.appendChild(comment);
        commentInput.value = ""; // Limpiar el campo
      }
    });

    // Ensamblar la sección de comentarios
    commentSection.appendChild(commentInput);
    commentSection.appendChild(commentButton);
    commentSection.appendChild(commentsList);

    // Agregar elementos al contenedor de la publicación
    post.appendChild(postText);
    post.appendChild(likeButton);
    post.appendChild(commentSection);

    // Agregar la publicación al feed
    postsContainer.prepend(post);

    // Limpiar el área de publicación
    postContent.value = "";
  } else {
    alert("Escribe algo antes de publicar.");
  }
});

