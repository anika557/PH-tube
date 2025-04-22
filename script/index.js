// Function to load categories
function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.error("Error loading categories:", error));
}

// Function to display categories
function displayCategories(categories) {
  const categoryContainer = document.getElementById("category-container");

  categories.forEach((cat) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
      <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    `;
    categoryContainer.append(categoryDiv);
  });
}

// Function to load videos
function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.error("Error loading videos:", error));
}

// Function to display videos
function displayVideos(videos) {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = ""; // Clear previous content

  videos.forEach((video) => {
    const { thumbnail, title, authors, others } = video;
    const { profile_picture, profile_name, verified } = authors[0];
    const { views } = others;

    const videoCard = document.createElement("div");
    videoCard.className = "video-card border rounded-lg shadow-md p-4";

    videoCard.innerHTML = `
      <img src="${thumbnail}" alt="${title}" class="w-full h-40 object-cover rounded-md">
      <div class="mt-4">
        <h2 class="text-lg font-semibold">${title}</h2>
        <div class="flex items-center mt-2">
          <img src="${profile_picture}" alt="${profile_name}" class="w-8 h-8 rounded-full">
          <div class="ml-2">
            <p class="text-sm font-medium">${profile_name}</p>
            ${verified ? '<span class="text-blue-500 text-xs">✔ Verified</span>' : ""}
          </div>
        </div>
        <p class="text-sm text-gray-500 mt-2">${views} views</p>
      </div>
    `;

    videoContainer.append(videoCard);
  });
}

// Load categories and videos
loadCategories();
loadVideos();
