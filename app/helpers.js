export const postFetcher = async (endpoint, properties) => {
  return await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(properties),
  }).then((res) => res.json());
};
