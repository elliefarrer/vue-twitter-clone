<template>
    <header>
        <b-navbar variant="dark" class="text-light">
            <b-row class="w-100">
                <b-col cols="6" class="w-100">
                    <b-navbar-brand class="text-light">
                        <router-link to="/">Barker</router-link>
                    </b-navbar-brand>
                </b-col>

                <b-col cols="6" class="w-100 text-right">
                    <b-navbar-nav class="float-right">
                        <b-nav-item class="text-light text-right">
                            <router-link to="/posts">Posts</router-link>
                        </b-nav-item>
                        <b-nav-item class="text-light">Profile</b-nav-item>
                    </b-navbar-nav>
                </b-col>
            </b-row>
        </b-navbar>
    </header>
</template>



<script>
import Welcome from '../../views/Welcome/Welcome.vue'
import PostsIndex from '../../views/posts/PostsIndex.vue'

export default {
    name: 'Header'
}
</script>

<style>
    header a {
        color: #fff!important;
    }
</style>
