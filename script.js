document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");

  albums.forEach(album => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <a href="${album.url}" class="card-link" target="_blank" rel="noopener noreferrer">
        <img src="${album.cover}" alt="${album.title}">
        <h3>${album.title}</h3>
        <p>Artist: ${album.artist}</p>
        <p>Year: ${album.releaseYear}</p>
      </a>
    `;

    gallery.appendChild(card);
  });
});