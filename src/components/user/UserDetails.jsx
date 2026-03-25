import React from 'react'
import userStore from '../../store/users'
import { useParams, useNavigate } from 'react-router-dom';

function UserDetails() {
    const { getUser } = userStore();
    const { id } = useParams();
    const navigate = useNavigate();
    const currentUser = getUser(Number(id));

    if (!currentUser) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">⚠️</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">User Not Found</h3>
                        <p className="text-gray-600 mb-6">We couldn't find the user you're looking for</p>
                        <button
                            onClick={() => navigate(-1)}
                            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                >
                    <span>←</span>
                    <span>Back to Users</span>
                </button>

                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    {/* Header Banner */}
                    <div className="h-32 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"></div>

                    {/* Profile Content */}
                    <div className="px-8 pb-8">
                        {/* Avatar Section */}
                        <div className="flex flex-col md:flex-row md:items-end md:space-x-6 -mt-16 mb-8">
                            <div className="mb-4 md:mb-0">
                                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-lg border-4 border-white">
                                    {currentUser.username.charAt(0).toUpperCase()}
                                </div>
                            </div>
                            <div className="flex-1">
                                <h1 className="text-4xl font-bold text-gray-900">{currentUser.name}</h1>
                                <p className="text-lg text-gray-600 mt-1">@{currentUser.username}</p>
                            </div>
                        </div>

                        {/* Two Column Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 border-t border-gray-200 pt-8">
                            {/* Contact Information */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                                    <span className="w-1 h-8 bg-blue-500 rounded"></span>
                                    <span>Contact Information</span>
                                </h2>

                                <div className="space-y-5">
                                    {/* Email */}
                                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                                        <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Email</p>
                                        <a href={`mailto:${currentUser.email}`} className="text-blue-600 hover:text-blue-800 font-medium break-all">
                                            {currentUser.email}
                                        </a>
                                    </div>

                                    {/* Phone */}
                                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                                        <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Phone</p>
                                        <a href={`tel:${currentUser.phone}`} className="text-purple-600 hover:text-purple-800 font-medium">
                                            {currentUser.phone}
                                        </a>
                                    </div>

                                    {/* Website */}
                                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                        <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Website</p>
                                        <a href={`https://${currentUser.website}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium break-all">
                                            {currentUser.website}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Company & Location */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                                    <span className="w-1 h-8 bg-purple-500 rounded"></span>
                                    <span>Organization</span>
                                </h2>

                                <div className="space-y-5">
                                    {/* Company */}
                                    <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                                        <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Company</p>
                                        <p className="text-gray-800 font-medium">{currentUser.company?.name || 'Not specified'}</p>
                                        {currentUser.company?.catchPhrase && (
                                            <p className="text-sm text-gray-600 mt-2 italic">"{currentUser.company.catchPhrase}"</p>
                                        )}
                                    </div>

                                    {/* Address */}
                                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                                        <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Address</p>
                                        <div className="text-gray-800 font-medium space-y-1">
                                            <p>{currentUser.address?.street}</p>
                                            <p>{currentUser.address?.city}, {currentUser.address?.zipcode}</p>
                                            <p className="text-sm text-gray-600">Coordinates: {currentUser.address?.geo?.lat}, {currentUser.address?.geo?.lng}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Full Width Section */}
                        <div className="border-t border-gray-200 pt-8 mt-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                                <span className="w-1 h-8 bg-pink-500 rounded"></span>
                                <span>Additional Details</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Username Card */}
                                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Username</p>
                                    <p className="text-lg font-bold text-gray-900">{currentUser.username}</p>
                                </div>

                                {/* User ID Card */}
                                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">User ID</p>
                                    <p className="text-lg font-bold text-gray-900">#{currentUser.id}</p>
                                </div>

                                {/* Timezone Card */}
                                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Timezone</p>
                                    <p className="text-lg font-bold text-gray-900">{currentUser.address?.timezone || 'Not specified'}</p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 mt-8 pt-8 border-t border-gray-200">
                            <button
                                onClick={() => navigate(-1)}
                                className="flex-1 px-6 py-4 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-200"
                            >
                                Go Back
                            </button>
                            <button
                                onClick={() => navigate('/users')}
                                className="flex-1 px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                            >
                                All Users
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
