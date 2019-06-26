import Vue from 'vue'
import Router from 'vue-router'

import Welcome from './views/Welcome/Welcome.vue'
import PostsIndex from './views/posts/PostsIndex.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Welcome',
            component: Welcome
        },
        {
            path: '/posts',
            name: 'PostsIndex',
            component: PostsIndex
        }

    ]
})