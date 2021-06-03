const url =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:${process.env.PORT}`
    : '';

export const fetchUsers = () =>
  fetch(`${url}/api/users`).then((res) => res.json());
