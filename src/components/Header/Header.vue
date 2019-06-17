<template>
    <header>
        <b-navbar variant="dark" class="text-light">
            <b-row class="w-100">
                <b-col cols="11" class="w-100">
                    <b-navbar-brand class="text-light">Barker</b-navbar-brand>
                </b-col>

                <b-col cols="1" class="w-100 text-right">
                    <b-navbar-nav>
                        <b-nav-item class="text-light">Posts</b-nav-item>
                        <b-nav-item class="text-light">Profile</b-nav-item>
                    </b-navbar-nav>
                </b-col>
            </b-row>
        </b-navbar>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
    header .nav-link {
        color: #fff!important;
    }
</style>
