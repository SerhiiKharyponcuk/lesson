export default function fetchCountries(searchQuery, signal) {
  const fields = "name,capital,population,languages,flags";
  const url = `https://countries.dev/name/${encodeURIComponent(searchQuery)}?fields=${fields}`;

  return fetch(url, { signal })
    .then((response) => {
      if (response.status === 404) return [];
      if (!response.ok) {
        throw new Error(`Помилка сервера: ${response.status}`);
      }

      return response.json();
    })
    .then((countries) => {
      if (!Array.isArray(countries))
        throw new Error("Некоректна відповідь API країн.");
      return countries;
    });
}
