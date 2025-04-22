console.log('index is connect')
function loadCategories (){
//    fetch krbo
fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

.then ((res)=> res.json()) 
.then((data) => disPlayCtegories(data.categories));
// {
//     "category_id": "1001",
//     "category": "Music"
// }
    
}
function disPlayCtegories(categories) {
    // get container
    const categoryContainer = document.getElementById("category-container");
    // then loop use
    for(let cat of categories) {
        console.log(cat);
        // create element
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        // append Element
        categoryContainer.append(categoryDiv);
    }
}
loadCategories();


// this is fetch parent(
    // {
//     "category_id": "1003",
//     "video_id": "aaaf",
//     "thumbnail": "https://i.ibb.co/5LRQkKF/stick-and-stones.jpg",
//     "title": "Sticks & Stones",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/rdTZrCM/dev.jpg",
//             "profile_name": "Dave Chappelle",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "113K",
//         "posted_date": ""
//     },
//     "description": "Dave Chappelle's 'Sticks & Stones' has garnered 113K views and remains a controversial yet highly engaging piece of stand-up comedy. Known for his fearless approach, Dave dives into a wide range of topics, delivering his unique perspective with wit and sharp humor. As a verified artist, Dave's comedy is raw, honest, and unapologetically funny."
// }
// )




function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res)=> res.json())
    .then(data =>disPiayVideos(data.videos))
}
const disPiayVideos = (videos) =>{
    const videoContainer = document.getElementById("video-container");
    
    videos.forEach((video) => { 
        console.log(video);
        const videoCard = document.createComment("div");
        videoCard.innerHTML = `
        <h2 class = "text-xl"> ${video.title} </h2>
        `;
        videoContainer.append(videoCard);
    });
    
    };
    
    
    

loadCategories();
loadVideos();













