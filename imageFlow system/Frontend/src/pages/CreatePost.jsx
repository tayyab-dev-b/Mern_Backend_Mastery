import React from "react";
import axios from "axios";

const CreatePost = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios.post("http://localhost:3000/create-post", formData).then((res) => {
      console.log(res);
    });
  }
  return (
    <div>
      <section className="create-post flex items-center justify-center h-screen w-full font-sans flex-col rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Create Post</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-gray-300 items-center justify-center rounded-lg p-8 gap-4 "
        >
          <input
            className="border rounded ouline-none p-2"
            type="file"
            placeholder="image url"
            name="image"
            accept="image/*"
          />
          <input
            className="border rounded ouline-none p-2 font-bold"
            type="text"
            placeholder="Enter caption"
            name="caption"
            required
          />
          <button className="bg-blue-400 font-bold p-2 rounded" type="submit">
            {" "}
            Submit{" "}
          </button>
        </form>
      </section>
    </div>
  );
};

export default CreatePost;
