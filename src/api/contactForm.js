// Small client-side API helper for contact form submissions
export async function sendContactForm(payload) {
  const API_BASE = import.meta.env.VITE_API_URL || "";
  const endpoint = API_BASE ? `${API_BASE}/api/contact-form` : "/api/contact-form";

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(body.message || `Request failed (${res.status})`);
  }

  return body;
}
