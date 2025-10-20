// API helper for career application submissions with file upload
export async function submitCareerApplication(formData) {
	const API_BASE = import.meta.env.VITE_API_URL || "";
	const endpoint = API_BASE
		? `${API_BASE}/api/career-application`
		: "/api/career-application";

	// FormData is already prepared with file, so we don't need to stringify
	const res = await fetch(endpoint, {
		method: "POST",
		body: formData, // Send FormData directly
	});

	const body = await res.json().catch(() => ({}));
	if (!res.ok) {
		throw new Error(body.message || `Request failed (${res.status})`);
	}

	return body;
}
