const recentProjects = document.getElementById('recent-projects');
const arrayOfProjects = recentProjects.children;

console.log(recentProjects);
console.log(arrayOfProjects);

// hide all projects except for the first one (most recent)
for (let i=1; i<arrayOfProjects.length; i++) {
    arrayOfProjects[i].style.display = "none";
}