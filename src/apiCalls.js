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

export const postPalette = (body) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/palettes', options)
    .then(res => res.json());
}

export const getPaletteById = (id) => {
  return fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/palettes/${id.id}`)
    .then(res => res.json());
}

export const deletePalette = (id, palette) => {
  const options = {
    method: 'DELETE',
    body: JSON.stringify({
      palette
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/palettes/${id}`, options)
    .then(res => res.json())
}

export const deleteProject = (id, project) => {
  const options = {
    method: 'DELETE',
    body: JSON.stringify({
      project
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${id}`, options)
    .then(res => res.json())
}

export const getPaletteByProjectId = (id) => {
  return fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/projects/${id}/palettes`)
    .then(res => res.json());
}