import { useEffect, useState } from "react";
import { truncateText } from "@/pages/utils/utils";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://usama-mir-server-again.vercel.app/blog/fashion"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        setData(result.reverse());
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen mt-6 text-center text-4xl font-sans uppercase">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen mt-6 text-center text-4xl font-sans uppercase">
        Error: {error}
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="min-h-screen mt-6 text-center text-4xl font-sans uppercase">
        There are no blogs here
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 max-w-[1300px] mx-auto mt-6">
        {data.map((blog) => (
          <div
            key={blog._id}
            className="card bg-base-100 md:w-96 w-full shadow-xl hover:shadow-green-400"
          >
            <figure className="px-5 pt-5">
              <img src={blog.image_1} alt={blog.title_1} className="rounded" />
            </figure>
            <div className="card-body">
              <button className="italic">{blog.category}</button>
              <h2 className="card-title text-md font-serif">{blog.title_1}</h2>
              <p>{truncateText(blog.description_1, 20)}</p>
              <div className="card-actions justify-center">
                <Link href={`/components/${blog._id}`}>
                  <button className="btn btn-outline rounded-none shadow hover:shadow-green-400">
                    Continue Reading
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
