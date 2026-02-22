function renderAllJobs() {
  allJobsContainer.innerHTML = "";
  for (const job of jobs) {
    const card = createJobCard(job);
    allJobsContainer.appendChild(card);
  } 
}
renderAllJobs();

function updateCount() {
  for (const item of totalJobCount) {
    item.textContent = jobs.length;
  }

  for (const item of interviewJobCount) {
    item.textContent = (jobs.filter(job => job.status === "Interview")).length;
  }
  
  for(const item of rejectedJobCount) {
    item.textContent = (jobs.filter(job => job.status === "Rejected")).length;
  }
}
updateCount();

allJobsContainer.addEventListener("click", function(e) {
  if (e.target.classList.contains("interview-btn")) {
    changeStatus(e, "interview-btn");
  } else if (e.target.classList.contains("rejected-btn")) {
    changeStatus(e, "rejected-btn");
  } else if (e.target.classList.contains("delete-icon")) {
    deleteJob(e);
  }

  renderAllJobs();
  renderInterviewJobs();
  renderRejectedJobs();
});

function renderInterviewJobs() {
  const interviewJobs = jobs.filter(job => job.status === "Interview");
  interviewJobsContainer.innerHTML = "";

  for (const job of interviewJobs) {
    const card = createJobCard(job);
    interviewJobsContainer.appendChild(card);
  }
  updateCount();
}

function renderRejectedJobs() {
  const rejectedJobs = jobs.filter(job => job.status === "Rejected");
  rejectedJobsContainer.innerHTML = "";
  for (const job of rejectedJobs) {
    const card = createJobCard(job);
    rejectedJobsContainer.appendChild(card);
  }
  updateCount();
}

interviewJobsContainer.addEventListener("click", function(e) {
  if (e.target.classList.contains("rejected-btn")) {
    changeStatus(e, "rejected-btn");
  } else if (e.target.classList.contains("delete-icon")) {
    deleteJob(e);
  }

  renderAllJobs();
  renderInterviewJobs();
  renderRejectedJobs();
})

rejectedJobsContainer.addEventListener("click", function(e) {
  if (e.target.classList.contains("interview-btn")) {
    changeStatus(e, "interview-btn");
  } else if (e.target.classList.contains("delete-icon")) {
    deleteJob(e);
  }

  renderAllJobs();
  renderRejectedJobs();
  renderInterviewJobs();
})