import { create } from "zustand";

const usePostsStore = create((set, get) => ({
  // state
  posts: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  postsPerPage: 10,

  // action
  fetchPosts: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();

      set({ posts: data, currentPage: 1 });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
  post: (id) => get().posts.find((post) => post.id === id),
  newPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  deletePost: (id) => set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
  
  setCurrentPage: (page) => set({ currentPage: page }),
  setPostsPerPage: (count) => set({ postsPerPage: count }),

}));

export default usePostsStore;