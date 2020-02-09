export const postProject = (projectName) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      name: projectName
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/projects', options)
    .then(res => res.json());
}

export const getProjectById = (id) => {
  return fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${id.id}`)
    .then(res => res.json());
}

export const getProjects = () => {
  return fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/projects`)
    .then(res => res.json());
}
