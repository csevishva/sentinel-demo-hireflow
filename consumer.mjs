import axios from "axios";

export async function listRecords() {
  return fetch("/v1/applications");
}

export async function createRecord(name, status) {
  return axios.post("/v1/applications", { name, status });
}

export async function updateRecord(id, name) {
  return axios.patch(`/v1/applications/${id}`, { name });
}

export async function exportRecords() {
  return fetch("/v1/applications/export");
}
