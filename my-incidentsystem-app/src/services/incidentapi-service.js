import {IMS_URL as urls }from "./urls"; "./urls";
const baseURL = urls.backendServer();
const URL = urls.backendServer() + "/incidents";

export function getAllIncidents() {
  return fetch(URL).then((response) => response.json());
}

export function addIncident({ name, description, serverity, priority, reportedby,assignedTo }) {
  console.log(URL);
  return fetch(URL, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin":baseURL,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, description, serverity, priority, reportedby,assignedTo }),
  });
}

export function deleteIncident(id) {
  const url = URL + "/" + id;

  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function updateIncident(id, description, serverity, priority, reportedby,status,updatedby,assignedTo) {
  const url = URL + "/" + id;
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({description, serverity, priority, reportedby,status,updatedby,assignedTo }),
  });
}
