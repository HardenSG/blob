<template>
  <component :is="componentId"></component>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, getCurrentInstance, watchEffect } from 'vue'

import { useRouter } from 'vue-router'

const publish = defineAsyncComponent( ( ) => import("@/components/manage/PublishBlog.vue") )

const history = defineAsyncComponent( ( ) => import( "@/components/manage/BlogHistory.vue" ) )

export default {
    name:'ManageBlog',
    components:{
        publish,
        history
    },
    setup( ){
        const router = useRouter()

        console.log(router.currentRoute.value.params);

        let componentId = computed( ( ) => {
            switch ( router.currentRoute.value.params.pages ) {
                case 'publish':{
                    return publish
                }
                case 'history':{
                    return history
                }
            }
        } )

        return{
            componentId
        }
    },
    mounted() {
        console.log(1111111)
    },
}
</script>

<style>

</style>