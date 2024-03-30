const generate_meme_button = document.querySelector(
  ".meme-generator .generate-meme-btn"
);
const memeImg = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAutor = document.querySelector(".meme-genrator .meme-author");

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    }); // Get a random wholesome meme from
};

generate_meme_button.addEventListener("click", generateMeme);
