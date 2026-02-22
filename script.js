// ===== JOB DATA =====
console.log("JavaScript is connected successfully!");
const jobs = [
    {
        title: "Frontend Developer",
        company: "Google",
        location: "Remote"
    },
    {
        title: "Backend Developer",
        company: "Amazon",
        location: "Bangalore"
    },
    {
        title: "Data Analyst",
        company: "Microsoft",
        location: "Hyderabad"
    },
    {
        title: "Java Developer",
        company: "Infosys",
        location: "Delhi"
    },
    {
        title: "Full Stack Developer",
        company: "TCS",
        location: "Mumbai"
    }
];


// ===== SEARCH FUNCTION =====
function searchJobs() {

    
    const jobInput = document.getElementById("jobInput").value.toLowerCase();
    const locationInput = document.getElementById("locationInput").value.toLowerCase();


    const jobList = document.getElementById("jobList");

    
    jobList.innerHTML = "";

    
    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(jobInput) &&
        job.location.toLowerCase().includes(locationInput)
    );

    
    if (filteredJobs.length === 0) {
        jobList.innerHTML = "<p>No jobs found</p>";
        return;
    }

    
    filteredJobs.forEach(job => {

        const jobCard = document.createElement("div");

        jobCard.classList.add("job-card");

        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p>Company: ${job.company}</p>
            <p>Location: ${job.location}</p>
            <button onclick="applyJob('${job.title}')">Apply Now</button>
        `;

        jobList.appendChild(jobCard);

    });
}



function applyJob(jobTitle) {
    alert("You applied for: " + jobTitle);
}