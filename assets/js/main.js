const recentProjects = document.getElementById('recent-projects');
const arrayOfProjects = (recentProjects.children);
const loadMoreBtn = document.getElementById('loadMoreBtn');

let dates = new Array();
for (let i=0; i<arrayOfProjects.length; i++) {
    dates.push({id:i, date: new Date(arrayOfProjects[i].dataset.date)});
}

// Sort dates in order from newest to oldest
dates.sort((a, b) => {
    return b.date - a.date; 
});

// console.log(recentProjects);
// console.log(arrayOfProjects);
// console.log(dates);

function showMostRecent() {
    // hide all projects except for the first one in dates (most recent)
    let mostRecentID = dates[0].id;
    arrayOfProjects[mostRecentID].style.display = "block";
}
showMostRecent();

function loadMore() {
    for (let i=0; i<arrayOfProjects.length; i++) {
        if (loadMoreBtn.innerText === "Load More") {
            arrayOfProjects[i].style.display = "block"; 
        }
        else {
            arrayOfProjects[i].style.display = "none";
        }
    }
    loadMoreBtn.innerText = loadMoreBtn.innerText === "Load More" ? "Load Less" : "Load More";
    showMostRecent();
}