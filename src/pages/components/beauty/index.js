import { truncateText } from "@/pages/utils/utils";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Home({ data }) {
  console.log(data);
  const blogs = [...data].reverse();
  if (data.length == 0) {
    return <div className="min-h-screen mt-6 text-center text-4xl font-sans uppercase">there are on blog here</div>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 max-w-[1300px] mx-auto mt-6">
        {blogs?.map((blog) => (
          <>
            <div className="card bg-base-100 w-96 shadow-xl hover:shadow-green-400">
              <figure className="px-5 pt-5">
                <img src={blog.image_1} alt="Shoes" className="rounded" />
              </figure>
              <div className="card-body">
                <Link href={"/"}>
                  <button className=" italic">{blog.category}</button>
                </Link>
                <h2 className="card-title text-md font-serif">
                  {blog.title_1}
                </h2>
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
          </>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://usama-mir-server-again.vercel.app/blog/beauty`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
