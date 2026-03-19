import React from "react"
import { useParams, Link } from "react-router-dom"
import usePostsStore from "../store/posts"

function PostDetails() {
  const { post } = usePostsStore()
  const { id } = useParams()

  const currentPost = post(Number(id))

  // ❌ If post not found
  if (!currentPost) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-red-500">
          Post not found
        </h2>
        <Link
          to="/posts"
          className="text-blue-500 underline mt-4 inline-block"
        >
          Go back to posts
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      
      {/* Back Button */}
      <Link
        to="/posts"
        className="text-sm text-blue-500 hover:underline"
      >
        ← Back to Posts
      </Link>

      {/* Post Card */}
      <div className="mt-4 bg-white shadow-md rounded-2xl p-6">
        
        {/* Title */}
        <h1 className="text-2xl font-bold mb-4">
          {currentPost.title}
        </h1>

        {/* Body */}
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {currentPost.body}
        </p>

        {/* Footer */}
        <div className="mt-6 text-sm text-gray-500">
          Post ID: {currentPost.id} | User ID: {currentPost.userId}
        </div>

      </div>
    </div>
  )
}

export default PostDetails  