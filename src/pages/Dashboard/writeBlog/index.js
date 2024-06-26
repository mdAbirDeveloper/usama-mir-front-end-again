/* eslint-disable react-hooks/rules-of-hooks */
import DashboardLayout from "@/pages/DashboardLayout/DashboardLayout";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const index = () => {
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=eb40b8130298d842bfbac69d72bb55f7`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.data.url;
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const imageFiles = [
        data.image_1[0],
        data.image_2?.[0],
        data.image_3[0],
        data.image_4?.[0],
      ];

      const uploadedImageUrls = await Promise.all(
        imageFiles.map((image) => (image ? uploadImage(image) : null))
      );

      const formData = {
        category: data.category,
        title_1: data.title_1,
        description_1: data.description_1,
        image_1: uploadedImageUrls[0],
        title_2: data.title_2,
        description_2: data.description_2,
        image_2: uploadedImageUrls[1],
        title_3: data.title_3,
        description_3: data.description_3,
        image_3: uploadedImageUrls[2],
        title_4: data.title_4,
        description_4: data.description_4,
        image_4: uploadedImageUrls[3],
      };

      console.log(formData);

      const response = await fetch('https://usama-mir-server-again.vercel.app/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit blog data');
      }

      setSuccess('Blog submitted successfully');
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError('An error occurred while submitting the blog');
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <form className=" p-20" onSubmit={handleSubmit(onSubmit)}>
          <div>
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
          </div>
          <div className="form-control">
            <label className="label mt-2 font-serif font-bold">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="write your blog title"
              className="input input-bordered"
              required
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
              required
              {...register("description_1")}
            />
          </div>
          <div className="form-control">
            <label className="label mt-2 font-serif font-bold">
              <span className="label-text">Choice your blog image</span>
            </label>
            <input
              type="file"
              className="input input-bordered"
              required
              {...register("image_1")}
            />
          </div>
          <h2 className="text-center text-xl font-serif my-5">
            If you have mutliple title and image then fill this section
          </h2>

          {/* multiple image and title sections */}

          <div className="form-control">
            <label className="label mt-2 font-serif font-bold">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="write another title of your blog"
              className="input input-bordered"
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
              {...register("description_2")}
            />
          </div>
          <div className="form-control">
            <label className="label mt-2 font-serif font-bold">
              <span className="label-text">Choice your blog image</span>
            </label>
            <input
              type="file"
              className="input input-bordered"
              {...register("image_2")}
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
              {...register("description_3")}
            />
          </div>
          <div className="form-control">
            <label className="label mt-2 font-serif font-bold">
              <span className="label-text">Choice your blog 3rd image</span>
            </label>
            <input
              type="file"
              className="input input-bordered"
              {...register("image_3")}
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
              {...register("description_4")}
            />
          </div>
          <div className="form-control">
            <label className="label mt-2 font-serif font-bold">
              <span className="label-text">Choice your 4th blog image</span>
            </label>
            <input
              type="file"
              className="input input-bordered"
              {...register("image_4")}
            />
          </div>
          <p className="text-center font-serif font-thin text-xl text-green-400">
                {success}
              </p>
              <p className="text-center font-serif font-thin text-xl text-red-400">
                {error}
              </p>
          <div className="form-control mt-6 w-1/2 mx-auto">
            <button className="btn text-white text-lg mr-2 uppercase bg-[#615956]">
              {loading ? '....' : 'submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;

index.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
