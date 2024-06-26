/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const blogDetails = ({}) => {
  const rounter = useRouter();
  const { blogId } = rounter.query;
  console.log(blogId);

  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://usama-mir-server-again.vercel.app/blog/${blogId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error(error);
        // Handle error, show error message, etc.
      }
    };

    if (blogId) {
      fetchProduct();
    }
  }, [blogId]);
  if (loading) {
    return (
      <div className="text-center text-2xl text-green-500 font-serif font-bold my-6 min-h-screen">
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
  return (
    <div>
      <div className="max-w-[1000px] mx-auto mt-5">
        <img src={blogs?.image_1} className="md:px-20 px-1" />
        <h1 className="text-3xl font-serif font-thin text-center px-2 my-10">
          {blogs?.title_1}
        </h1>
        <p className="text-lg font-roboto font-thin md:text-center my-10 px-1">
          {blogs?.description_1}
        </p>
        <img src={blogs?.image_2} className="md:px-20 px-1" />
        <h1 className="text-3xl font-serif font-thin text-center px-2 my-10">
          {blogs?.title_2}
        </h1>
        <p className="text-lg font-roboto font-thin md:text-center my-10 px-1">
          {blogs?.description_2}
        </p>
        <img src={blogs?.image_3} className="md:px-20 px-1" />
        <h1 className="text-3xl font-serif font-thin text-center px-2 my-10">
          {blogs?.title_3}
        </h1>
        <p className="text-lg font-roboto font-thin md:text-center my-10 px-1">
          {blogs?.description_3}
        </p>
        <img src={blogs?.image_4} className="md:px-20 px-1" />
        <h1 className="text-3xl font-serif font-thin text-center px-2 my-10">
          {blogs?.title_4}
        </h1>
        <p className="text-lg font-roboto font-thin md:text-center my-10 px-1">
          {blogs?.description_4}
        </p>
      </div>
    </div>
  );
};

export default blogDetails;
