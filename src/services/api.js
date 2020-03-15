const fetchResource = async url => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  const json = await response.json();
  return json;
};

const fetchPayments = async id =>
  fetchResource(`http://localhost:4000/api/payments${id ? `/${id}` : ''}`);

const fetchRefunds = id =>
  fetchResource(`http://localhost:4000/api/payments/${id}/refunds`);

const api = {
  fetchPayments,
  fetchRefunds,
};

export default api;
