// store jobs
let jobs = [];

// buttons
let publishBtn = document.getElementById("publishBtn");
let searchBtn = document.getElementById("searchBtn");

// container for cards
let jobContainer = document.getElementById("jobContainer");


// ===== PUBLISH JOB =====
publishBtn.addEventListener("click", function () {

    let company = document.getElementById("company").value;
    let role = document.getElementById("role").value;
    let location = document.getElementById("location").value;
    let type = document.getElementById("type").value;

    if (company === "" || role === "" || location === "" || type === "") {
        alert("Please fill all fields");
        return;
    }

    let job = {
        company: company,
        role: role,
        location: location,
        type: type
    };

    jobs.push(job);

    displayJobs(jobs);

    // clear input
    document.getElementById("company").value = "";
    document.getElementById("role").value = "";
    document.getElementById("location").value = "";
    document.getElementById("type").value = "";

});


// ===== SEARCH JOB =====
searchBtn.addEventListener("click", function () {

    let searchRole = document.getElementById("searchRole").value.toLowerCase();
    let searchLocation = document.getElementById("searchLocation").value.toLowerCase();

    let filteredJobs = jobs.filter(function (job) {

        return job.role.toLowerCase().includes(searchRole) &&
               job.location.toLowerCase().includes(searchLocation);

    });

    displayJobs(filteredJobs);

});


// ===== DISPLAY JOB CARDS =====
function displayJobs(jobList) {

    jobContainer.innerHTML = "";

    if (jobList.length === 0) {
        jobContainer.innerHTML = "<p>No jobs found</p>";
        return;
    }

    jobList.forEach(function (job) {

        let card = document.createElement("div");

        card.classList.add("job-card");

        card.innerHTML = `
            <h3>${job.role}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Type:</strong> ${job.type}</p>
            <button onclick="applyJob('${job.role}')">Apply Now</button>
        `;

        jobContainer.appendChild(card);

    });

}


// ===== APPLY FUNCTION =====
function applyJob(role) {
    alert("Applied for " + role);
}