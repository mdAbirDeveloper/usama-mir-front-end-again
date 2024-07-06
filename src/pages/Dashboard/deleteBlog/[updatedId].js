/* eslint-disable react-hooks/rules-of-hooks */
import DashboardLayout from "@/pages/DashboardLayout/DashboardLayout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const updatedId = () => {
  const { handleSubmit, register } = useForm();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const rounter = useRouter();
  const { updatedId } = rounter.query;

  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState();
  console.log(blogs?.title_1);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://usama-mir-server-again.vercel.app/updateBlog/${updatedId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
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

    if (updatedId) {
      fetchProduct();
    }
  }, [updatedId]);

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

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const formData = {
        category: data.category,
        title_1: data.title_1,
        description_1: data.description_1,
        title_2: data.title_2,
        description_2: data.description_2,
        title_3: data.title_3,
        description_3: data.description_3,
        title_4: data.title_4,
        description_4: data.description_4,
      };

      console.log(formData);

      const response = await fetch(
        `https://usama-mir-server-again.vercel.app/updatedBlogData/${blogs?._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit blog data");
      }

      setSuccess("Blog updated successfully");
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("An error occurred while updating the blog");
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="max-w-[1200px] mx-auto min-h-screen">
        <form className="md:p-20 p-0" onSubmit={handleSubmit(onSubmit)}>
          {blogs && (
            <div>
              {/* <div>
                <select
                  className="select w-full input input-bordered"
                  {...register("category")}
                >
                  <option disabled selected value="">
                    Pick your Blog category
                  </option>
                  <option value="fashion">Fashion</option>
                  <option value="beauty">Beauty</option>
                </select>
              </div> */}
              <div className="form-control">
                <label className="label mt-2 font-serif font-bold">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="write your blog title"
                  className="input input-bordered"
                  defaultValue={blogs?.title_1}
                  {...register("title_1")}
                />
              </div>
              <div className="form-control">
                <label className="label mt-2 font-serif font-bold">
                  <span className="label-text">Descriptions</span>
                </label>
                <textarea
                  placeholder="write your blog descriptions"
                  className="border p-2"
                  rows={10}
                  defaultValue={blogs?.description_1}
                  {...register("description_1")}
                />
              </div>

              {/* multiple image and title sections */}

              <div className="form-control">
                <label className="label mt-2 font-serif font-bold">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="write another title of your blog"
                  className="input input-bordered"
                  defaultValue={blogs?.title_2}
                  {...register("title_2")}
                />
              </div>
              <div className="form-control">
                <label className="label mt-2 font-serif font-bold">
                  <span className="label-text">Descriptions</span>
                </label>
                <textarea
                  type="text"
                  placeholder="write another descriptions of your blog "
                  className="border p-2"
                  rows={10}
                  defaultValue={blogs?.description_2}
                  {...register("description_2")}
                />
              </div>

              {/* third section */}

              <div className="form-control">
                <label className="label mt-2 font-serif font-bold">
                  <span className="label-text">3rd Title</span>
                </label>
                <input
                  type="text"
                  placeholder="write another title of your blog"
                  className="input input-bordered"
                  defaultValue={blogs?.title_3}
                  {...register("title_3")}
                />
              </div>
              <div className="form-control">
                <label className="label mt-2 font-serif font-bold">
                  <span className="label-text">3rd Descriptions</span>
                </label>
                <textarea
                  type="text"
                  placeholder="write another descriptions of your blog"
                  className="border p-2"
                  rows={10}
                  defaultValue={blogs?.description_3}
                  {...register("description_3")}
                />
              </div>

              {/* 4th sections */}

              <div className="form-control">
                <label className="label mt-2 font-serif font-bold">
                  <span className="label-text">4th Title</span>
                </label>
                <input
                  type="text"
                  placeholder="write another title of your blog"
                  className="input input-bordered"
                  defaultValue={blogs?.title_4}
                  {...register("title_4")}
                />
              </div>
              <div className="form-control">
                <label className="label mt-2 font-serif font-bold">
                  <span className="label-text">Descriptions</span>
                </label>
                <textarea
                  type="text"
                  placeholder="write another descriptions of your blog"
                  className="border p-2"
                  rows={10}
                  defaultValue={blogs?.description_4}
                  {...register("description_4")}
                />
              </div>

              <p className="text-center font-serif font-thin text-xl text-green-400">
                {success}
              </p>
              <p className="text-center font-serif font-thin text-xl text-red-400">
                {error}
              </p>
            </div>
          )}

          <div className="form-control mt-6 md:w-1/2 mx-auto w-full">
            <button className="btn text-white text-lg mr-2 uppercase bg-[#615956]">
              {loading ? "...." : "submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default updatedId;


updatedId.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
  };