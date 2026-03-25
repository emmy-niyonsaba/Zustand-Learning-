
import React, { useEffect } from 'react'
import userStore from '../../store/users'
import { Link } from 'react-router-dom';

function Users() {
    const { getUsers, isLoading, error, users } = userStore();
    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Users Directory</h1>
                    <p className="text-lg text-gray-600">Explore our community members</p>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="flex items-center justify-center py-20">
                        <div className="text-center">
                            <div className="inline-block">
                                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                            </div>
                            <p className="mt-4 text-gray-600 font-medium">Loading users, please wait...</p>
                        </div>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-md">
                        <h3 className="text-red-800 font-semibold text-lg">Error Loading Users</h3>
                        <p className="text-red-700 mt-2">{error}</p>
                    </div>
                )}

                {/* Users Grid */}
                {!isLoading && !error && users && users.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {users.map(user => (
                            <div
                                key={user.id}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
                            >
                                {/* Card Header */}
                                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>

                                {/* Card Content */}
                                <div className="p-6">
                                    {/* Avatar */}
                                    <div className="mb-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                            {user.username.charAt(0).toUpperCase()}
                                        </div>
                                    </div>

                                    {/* User Info */}
                                    <div className="space-y-3">
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900">{user.username}</h2>
                                            <p className="text-sm text-gray-500">{user.name}</p>
                                        </div>

                                        <div className="space-y-2 border-t border-gray-200 pt-3">
                                            <div className="flex items-start space-x-3">
                                                <span className="text-gray-400 mt-0.5">✉️</span>
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                                                    <p className="text-sm text-gray-700 break-all">{user.email}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-3">
                                                <span className="text-gray-400 mt-0.5">📞</span>
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                                                    <p className="text-sm text-gray-700">{user.phone}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-3">
                                                <span className="text-gray-400 mt-0.5">🌐</span>
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Website</p>
                                                    <p className="text-sm text-blue-600">{user.website}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <Link
                                        to={`${user.id}`}
                                        className="mt-6 w-full inline-block px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-center"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    !isLoading && (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">👤</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Users Found</h3>
                            <p className="text-gray-600">Unable to load user data at this time</p>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default Users
