async function fetchDataService(
  countryName,
  url,
  setSelected,
  setData,
  setLoading
) {
  setSelected([]); //  clear selection in case earlier selected country is present
  if (countryName.length > 0) {
    try {
      const response = await fetch(url + countryName);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        setData([]); // fall back in case problem with API
      }
    } catch (error) {
      console.log(error);
    }
  }
  setLoading(false);
}

export default fetchDataService;
