import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: "1",
                title: "First Post",
                previewText: "This is our first post!",
                thumbnail:
                  "https://store-images.s-microsoft.com/image/apps.20969.63407868131364914.0f6bcae3-6458-450b-bfc3-7cb0553c6674.93e7c9e8-a2e6-4d89-a002-c1aa2cc7cb2a?mode=scale&q=90&h=225&w=150"
              },
              {
                id: "2",
                title: "Second Post",
                previewText: "This is our second post!",
                thumbnail:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAbfUcrIm1FL8B4MpWJgs-7wwfHFXH68QsL75SmxfTY00DxrowYonQPLw81KyPPCr7FQ&usqp=CAU"
              }
            ]);
            resolve();
          }, 1000);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
