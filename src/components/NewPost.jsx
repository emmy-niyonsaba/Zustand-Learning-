import React, { useState } from 'react'
import usePostsStore from '../store/posts'

function NewPost() {
  const { newPost } = usePostsStore()
  const [formData, setFormData] = useState({ userId: '', id: '', title: '', body: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      if (!formData.title.trim() || !formData.body.trim()) {
        setMessage({ type: 'error', text: 'Title and body are required' })
        setLoading(false)
        return
      }

      const postData = {
        userId: parseInt(formData.userId) || 0,
        id: parseInt(formData.id) || Math.random(),
        title: formData.title,
        body: formData.body
      }

      newPost(postData)
      setMessage({ type: 'success', text: 'Post created successfully!' })
      setFormData({ userId: '', id: '', title: '', body: '' })
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      setMessage({ type: 'error', text: error.message || 'Error creating post' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-2xl mx-auto'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-slate-900 mb-2'>Create New Post</h1>
          <p className='text-slate-600 text-lg'>Share your thoughts with the community</p>
        </div>

        {/* Success/Error Messages */}
        {message.text && (
          <div className={`mb-6 p-4 rounded-lg border-l-4 ${message.type === 'success' ? 'bg-green-50 border-green-500 text-green-800' : 'bg-red-50 border-red-500 text-red-800'}`}>
            <p className='font-semibold'>{message.type === 'success' ? '✓ Success' : '⚠ Error'}</p>
            <p className='text-sm mt-1'>{message.text}</p>
          </div>
        )}

        {/* Form Card */}
        <div className='bg-white rounded-xl shadow-lg border border-slate-200 p-8'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* User ID and Post ID Row */}
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-semibold text-slate-700 mb-2'>User ID</label>
                <input
                  type='number'
                  name='userId'
                  value={formData.userId}
                  onChange={handleChange}
                  placeholder='e.g., 1'
                  className='w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-slate-700 mb-2'>Post ID</label>
                <input
                  type='number'
                  name='id'
                  value={formData.id}
                  onChange={handleChange}
                  placeholder='e.g., 101'
                  className='w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                />
              </div>
            </div>

            {/* Title */}
            <div>
              <label className='block text-sm font-semibold text-slate-700 mb-2'>Title *</label>
              <input
                type='text'
                name='title'
                value={formData.title}
                onChange={handleChange}
                placeholder='Enter post title'
                className='w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
              />
            </div>

            {/* Body */}
            <div>
              <label className='block text-sm font-semibold text-slate-700 mb-2'>Content *</label>
              <textarea
                name='body'
                value={formData.body}
                onChange={handleChange}
                placeholder='Write your post content here...'
                rows='6'
                className='w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none'
              />
            </div>

            {/* Submit Button */}
            <div className='flex gap-4 pt-4'>
              <button
                type='submit'
                disabled={loading}
                className='flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl'
              >
                {loading ? 'Creating...' : '✓ Create Post'}
              </button>
              <button
                type='button'
                onClick={() => {
                  setFormData({ userId: '', id: '', title: '', body: '' })
                  setMessage({ type: '', text: '' })
                }}
                className='px-6 py-3 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition-all duration-300'
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewPost
