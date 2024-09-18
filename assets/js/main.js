const recentProjects = document.getElementById('recent-projects');
const arrayOfProjects = recentProjects.children;
const loadMoreBtn = document.getElementById('loadMoreBtn');

console.log(recentProjects);
console.log(arrayOfProjects);

// hide all projects except for the first one (most recent)
for (let i=1; i<arrayOfProjects.length; i++) {
    arrayOfProjects[i].style.display = "none";
}

function loadMore() {
    for (let i=1; i<arrayOfProjects.length; i++) {
        if (arrayOfProjects[i].style.display === "none") {
            arrayOfProjects[i].style.display = "block";
        }
        else {
            arrayOfProjects[i].style.display = "none";
        }
    }
    loadMoreBtn.innerText = loadMoreBtn.innerText === "Load More" ? "Load Less" : "Load More";
}