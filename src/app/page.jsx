import NewsCard from "@/components/newsCard";

const fetchNews = async () => {
  try {
    const response = await fetch(
      "https://newsdata.io/api/1/news?apikey=pub_42450397b9ff18c8bd9d965a6ca33c036b95e&q=politics&country=in&language=en&category=politics"
    );
    const results = await response.json();
    // console.log(results);
    return results;
  } catch (error) {
    console.error(error.message);
  }
};

export default async function Home() {
  const data = await fetchNews();
  const results = data.results || [];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4 place-content-center">
      {results &&
        results.length > 0 &&
        results.map((news) => (
          <NewsCard
            key={news.article_id}
            title={news.title}
            description={news.description}
            link={news.link}
            image={news.image_url || "https://via.placeholder.com/150"}
            date={news.pubDate}
          />
        ))}
    </div>
  );
}
