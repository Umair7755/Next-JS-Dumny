import Link from "next/link";

const News = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <Link href="/news/first-item">
          <li> First Item</li>
        </Link>
        <li> Second Item</li>
        <li> Third Item</li>
      </ul>
    </>
  );
};



export default News;
