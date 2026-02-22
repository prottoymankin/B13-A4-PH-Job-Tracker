function renderAllJobs() {
  allJobsContainer.innerHTML = "";
  for (const job of jobs) {
    const card = createJobCard(job);
    allJobsContainer.appendChild(card);
  } 
}
renderAllJobs();