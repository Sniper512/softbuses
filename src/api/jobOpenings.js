// API helper for fetching job openings
export async function fetchJobOpenings() {
	const API_BASE = import.meta.env.VITE_API_URL || "";
	const endpoint = API_BASE
		? `${API_BASE}/api/job-openings`
		: "/api/job-openings";

	const res = await fetch(endpoint, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});

	const body = await res.json().catch(() => ({}));
	if (!res.ok) {
		throw new Error(body.message || `Request failed (${res.status})`);
	}

	return body;
}

// Fetch specific job opening by ID
export async function fetchJobById(jobId) {
	const API_BASE = import.meta.env.VITE_API_URL || "";
	const endpoint = API_BASE
		? `${API_BASE}/api/job-openings/${jobId}`
		: `/api/job-openings/${jobId}`;

	const res = await fetch(endpoint, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});

	const body = await res.json().catch(() => ({}));
	if (!res.ok) {
		throw new Error(body.message || `Request failed (${res.status})`);
	}

	return body;
}

// Fetch jobs by department
export async function fetchJobsByDepartment(department) {
	const API_BASE = import.meta.env.VITE_API_URL || "";
	const endpoint = API_BASE
		? `${API_BASE}/api/job-openings/department/${department}`
		: `/api/job-openings/department/${department}`;

	const res = await fetch(endpoint, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});

	const body = await res.json().catch(() => ({}));
	if (!res.ok) {
		throw new Error(body.message || `Request failed (${res.status})`);
	}

	return body;
}
