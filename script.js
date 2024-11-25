// Referencias a elementos del DOM
const postContent = document.getElementById("post-content");
const postButton = document.getElementById("post-btn");
const postsContainer = document.getElementById("posts");

// Manejar la creación de publicaciones
postButton.addEventListener("click", () => {
  const content = postContent.value.trim();

  if (content) {
    // Crear un nuevo elemento de publicación
    const post = document.createElement("div");
    post.textContent = content;

    // Agregar al feed
    postsContainer.prepend(post);

    // Limpiar textarea
    postContent.value = "";
  } else {
    alert("Escribe algo antes de publicar.");
  }
});
