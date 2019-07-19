export async function getFeeds(language) {
  const data = await fetch(
    `https://newsapi.org/v2/top-headlines?language=en&pageSize=20&page=1&apiKey=a2caf84c7dd3457988e4d3f73b46de14`
  ).then(res => res.json());

  return data;
}
export async function getNewsFrom(keyword) {
  const data = await fetch(
    `https://newsapi.org/v2/everything?q="world"&apiKey=a2caf84c7dd3457988e4d3f73b46de14`
  ).then(res => res.json());

  return data;
}

export async function getBusinessNews() {
  const data = await fetch(
    `https://newsapi.org/v2/sources?category=business&apiKey=a2caf84c7dd3457988e4d3f73b46de14`
  ).then(res => res.json());

  return data;
}
