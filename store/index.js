import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },

    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
        state.loadedPosts[postIndex] = editedPost
      },
    
      setToken(state, token) {
        state.token = token
      }
    },

    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
        .$get('/posts.json')
          .then(data => {
            const postsArray = [];
            for (const key in data) {
              postsArray.push({ ...data[key], id: key })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(err => console.log(err))
      },
      
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },

      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        }

        return this.$axios
        .$post('/posts.json?auth=' + vuexContext.state.token, createdPost)
          .then(data => {
            vuexContext.commit('addPost', { ...createdPost, id: data.name })
          })
          .catch(err => console.log(err)
          )
      },

      editPost(vuexContext, editedPost) {
        return this.$axios
        .$put('/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token, editedPost)
          .then(res => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch(err => console.log(err))
      },
      authenticateUser(vuexContext, authData) {
        if (!authData.isLogin) {
          try {
             this.$fire.auth
              .createUserWithEmailAndPassword(authData.email, 
                authData.password)
              .then((result) => {
                vuexContext.commit('setToken', result.user.uid)
              });
          } catch (e) {
            handleError(e);
          }
        } else {
          try {
             this.$fire.auth.signInWithEmailAndPassword(
              authData.email,
              authData.password
            )
            .then((result) => {
              vuexContext.commit('setToken', result.user.uid)
            });
            this.$router.push("/admin");
          } catch (e) {
            handleError(e);
          }
        }
      },
    },

    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      isAuthenticated(state) {
        return state.token != null;
      }
    }
  });
};

export default createStore;
