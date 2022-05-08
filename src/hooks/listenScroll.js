import { onMounted ,onUnmounted, reactive } from 'vue'
export default function(){
    let scroll;
    let htmlHeight;
    let clientHeight;
    let result = reactive({})
    function listen(e){
        scroll = document.querySelector('html').scrollTop
        htmlHeight = document.querySelector('html').scrollHeight,
        clientHeight = document.querySelector('html').clientHeight

        let bottom = htmlHeight - scroll - clientHeight < 2 ? 1 : 0

        if (bottom || !scroll ) {
            return
        }

        let direction = e.wheelDelta !== undefined ? e.wheelDelta : 0

        result.scroll = scroll

        result.value = direction > 0 ? true : false

    }

    onMounted(()=>{
        window.addEventListener('wheel',listen)
    })

    onUnmounted(()=>{
        window.removeEventListener('wheel',listen)
    })

    return{
        result
    }

}