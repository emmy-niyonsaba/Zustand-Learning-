import React, { useEffect, useMemo, useState } from 'react'
import postsStore from '../store/posts'
import { HashLoader } from 'react-spinners'
import { Link } from 'react-router-dom'
const handleSearch = (e) => {
  const searchTerm = e.target.value.trim()
  if (searchTerm === '') {
    fetchPosts()
  }
}


const Posts = () => {
  const { posts, isLoading, error, fetchPosts, currentPage, setCurrentPage, postsPerPage, deletePost, post } = postsStore()
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  const [searchTerm, setSearchTerm] = useState(null)

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleSearch = (e) => {
    const searchTerm = e.target.value.trim()
    if (searchTerm.trim() === '') {
      fetchPosts()
    }
    const foundPost= post(parseInt(searchTerm))
    if (foundPost) {
      setCurrentPage(1)
      postsStore.setState({ posts: [foundPost] })
    } else {
      setCurrentPage(1)
      postsStore.setState({ posts: [] })
    }
  }
  // Calculate pagination
  const totalPages = Math.ceil(posts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = posts.slice(startIndex, endIndex)

  // Generate page numbers
  const pageNumbers = useMemo(() => {
    const pages = []
    const maxPagesToShow = 5
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2))
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1)

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }
    return pages
  }, [currentPage, totalPages])

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleDelete = (id) => {
    deletePost(id)
    setDeleteConfirm(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="flex  justify-around items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">
                Blog & Articles
              </span>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-3">Discover Stories</h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Explore our collection of insightful articles and stories from our community. Stay informed and inspired.
            </p>
          </div>
          <div>
            <h1>Enter post by ID</h1>
          <input type="text" placeholder="Search post ID..."  className=' border-2 border-slate-700 p-3 rounded-md'onChange={handleSearch}/>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-32">
            <div className="text-center">
              <HashLoader color="#3b82f6" size={50} />
              <p className="text-slate-600 font-medium mt-4">Loading posts...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-6 rounded-lg mb-8 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="text-red-900 font-bold text-lg">Failed to Load Posts</p>
                <p className="text-red-800 mt-2">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        {!isLoading && !error && (
          <>
            {currentPosts.length > 0 ? (
              <>
                <div className="grid gap-6 mb-12">
                  {currentPosts.map((post) => (
                    <div
                      key={post.id}
                      className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-blue-300"
                    >
                      <div className="relative p-8">
                        {/* Post Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-lg">{post.id % 10}</span>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Post ID: {post.id}</p>
                              <p className="text-sm text-slate-600">By User {post.userId}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="hidden sm:block h-8 w-px bg-slate-200"></div>
                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full">Article</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>

                        {/* Body Preview */}
                        <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
                          {post.body}
                        </p>

                        {/* Metadata Footer */}
                        <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                          <div className="flex items-center gap-4">
                            <span className="text-xs text-slate-500 font-medium">
                              📖 {Math.ceil(post.body.length / 100)} min read
                            </span>
                            <span className="text-xs text-slate-500 font-medium">
                              💬 {Math.floor(Math.random() * 50) + 5} comments
                            </span>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-3">
                            <Link
                              to={`${post.id}`}
                              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105"
                            >
                              Read More
                            </Link>
                            <button
                              onClick={() => setDeleteConfirm(post.id)}
                              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-red-100 hover:text-red-700 transition-all duration-200 group/delete"
                            >
                              <span className="hidden group-hover/delete:inline">Delete</span>
                              <span className="inline group-hover/delete:hidden">✕</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Delete Confirmation */}
                      {deleteConfirm === post.id && (
                        <div className="bg-red-50 border-t border-red-200 px-8 py-4 flex items-center justify-between">
                          <p className="text-sm text-red-800 font-medium">Are you sure? This action cannot be undone.</p>
                          <div className="flex gap-2">
                            <button
                              onClick={() => setDeleteConfirm(null)}
                              className="px-3 py-1 text-sm font-medium text-slate-700 bg-white rounded border border-slate-300 hover:bg-slate-50 transition-all"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleDelete(post.id)}
                              className="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700 transition-all"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex flex-col items-center gap-8 py-8 border-t border-slate-200">
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      {/* Previous Button */}
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 hover:border-slate-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        ← Previous
                      </button>

                      {/* First Page Button */}
                      {pageNumbers[0] > 1 && (
                        <>
                          <button
                            onClick={() => handlePageChange(1)}
                            className="px-3 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 font-medium transition-all duration-200"
                          >
                            1
                          </button>
                          {pageNumbers[0] > 2 && (
                            <span className="text-slate-500 px-2 font-medium">...</span>
                          )}
                        </>
                      )}

                      {/* Page Numbers */}
                      {pageNumbers.map((page) => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-3 py-2 rounded-lg font-semibold transition-all duration-200 ${currentPage === page
                              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 scale-110'
                              : 'border border-slate-300 text-slate-700 hover:bg-slate-100'
                            }`}
                        >
                          {page}
                        </button>
                      ))}

                      {/* Last Page Button */}
                      {pageNumbers[pageNumbers.length - 1] < totalPages && (
                        <>
                          {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                            <span className="text-slate-500 px-2 font-medium">...</span>
                          )}
                          <button
                            onClick={() => handlePageChange(totalPages)}
                            className="px-3 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 font-medium transition-all duration-200"
                          >
                            {totalPages}
                          </button>
                        </>
                      )}

                      {/* Next Button */}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 hover:border-slate-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        Next →
                      </button>
                    </div>

                    {/* Pagination Info */}
                    <div className="text-center bg-slate-50 rounded-lg px-6 py-3 w-full max-w-md">
                      <p className="text-sm text-slate-700">
                        Showing <span className="font-bold text-blue-600">{startIndex + 1}</span>-
                        <span className="font-bold text-blue-600">{Math.min(endIndex, posts.length)}</span> of{' '}
                        <span className="font-bold text-blue-600">{posts.length}</span> posts
                      </p>
                      <p className="text-xs text-slate-600 mt-2">
                        Page <span className="font-semibold">{currentPage}</span> of{' '}
                        <span className="font-semibold">{totalPages}</span>
                      </p>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">📭</div>
                <p className="text-slate-600 text-lg font-medium">No posts available at the moment.</p>
                <p className="text-slate-500 text-sm mt-2">Check back later or create your first post!</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Posts
