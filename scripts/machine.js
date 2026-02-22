function changeStatus(e, className) {
  const jobId = e.target.dataset.id;
  for (const job of jobs) {
    if (job.id === jobId) {
      job.status = (className === "interview-btn") ? "Interview" : "Rejected";
      break;
    }
  }
}

function createJobCard(job) {
  let currentStatus; 
  if (job.status === "Not Applied") {
    currentStatus = `<div class="text-[#002C5C] bg-[#EEF4FF] text-sm font-medium rounded-[4px] w-fit px-3 py-2">${job.status}</div>`;
  } else if (job.status === "Interview") {
    currentStatus = `<div class="border border-[#10B981] text-[#10B981] bg-[#EEF4FF] text-sm font-medium rounded-[4px] w-fit px-3 py-2">${job.status}</div>`;
  } else if (job.status === "Rejected") {
    currentStatus = `<div class="border border-[#EF4444] text-[#EF4444] bg-[#EEF4FF] text-sm font-medium rounded-[4px] w-fit px-3 py-2">${job.status}</div>`;
  }
  const div = document.createElement("div");
  div.classList.add( 
    "p-6", 
    "rounded-lg", 
    "bg-white", 
    "shadow-sm", 
    "border", 
    "border-[#F1F2F4]", 
    "flex", 
    "items-start", 
    "justify-between"
  );

  div.innerHTML = `
    <div class="space-y-5">
      <div class="space-y-1">
        <h3 class="text-[#002C5C] text-lg font-semibold">${job.companyName}</h3>
        <p class="position text-[#64748B]">${job.position}</p>
      </div>

      <div class="text-[#64748B] text-sm">
        <span>${job.location}</span> •
        <span>${job.type}</span> • 
        <span>${job.salary}</span>
      </div>

      <div class="space-y-2">
        ${currentStatus}
        <p class="text-[#323B49] text-sm">${job.description}</p>
      </div>

      <div class="space-x-2">
        <button data-id="${job.id}" class="interview-btn rounded-[4px] px-3 py-2 border border-[#10B981] text-[#10B981] text-sm font-semibold cursor-pointer">INTERVIEW</button>
        <button data-id="${job.id}" class="rejected-btn rounded-[4px] px-3 py-2 border border-[#EF4444] text-[#EF4444] text-sm font-semibold cursor-pointer">REJECTED</button>
      </div>
    </div>

    <div class="w-8 h-8 rounded-full border broder-[#F1F2F4] text-[#64748B] flex items-center justify-center cursor-pointer">
      <i data-id="${job.id}" class="delete-icon fa-solid fa-trash"></i>
    </div>
  `
  return div;
}

function showFilterSection(id) {
  const filterButtons = document.querySelector("#filter-btn-container").children;
  for (const btn of filterButtons) {
    btn.classList.remove("active-filter");
    btn.classList.add("default-filter");
  }
  document.getElementById(id).classList.remove("default-filter");
  document.getElementById(id).classList.add("active-filter");

  const showInterviewCount = document.querySelector("#show-interview-count");
  const showRejectedCount = document.querySelector("#show-rejected-count");
  const showTotalCount = document.querySelector("#show-total-count");

  showInterviewCount.classList.add("hidden");
  showRejectedCount.classList.add("hidden");
  showTotalCount.classList.add("hidden");

  allJobsContainer.classList.add("hidden");
  interviewJobsContainer.classList.add("hidden");
  rejectedJobsContainer.classList.add("hidden");

  if (id === "interview-filter-btn") {
    interviewJobsContainer.classList.remove("hidden");
    showInterviewCount.classList.remove("hidden");
    showRejectedCount.classList.add("hidden");
    showTotalCount.classList.add("hidden");
  } else if (id === "rejected-filter-btn") {
    rejectedJobsContainer.classList.remove("hidden");
    showRejectedCount.classList.remove("hidden");
    showInterviewCount.classList.add("hidden");
    showTotalCount.classList.add("hidden");
  } else if (id === "all-filter-btn") {
    allJobsContainer.classList.remove("hidden");
    showTotalCount.classList.remove("hidden");
    showInterviewCount.classList.add("hidden");
    showRejectedCount.classList.add("hidden");
  }
}

function deleteJob(e) {
  const jobId = e.target.dataset.id;
  jobs = jobs.filter(job => job.id !== jobId);
}