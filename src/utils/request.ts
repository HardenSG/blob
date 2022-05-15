import axios from 'axios'

interface request {
    get( ):object,
    post( ):object
}

class Request implements request {
    private url:string
    private data:object
    private flag:boolean
    
    constructor( Url : string, Data:object , flag:boolean ){
        this.url = Url,
        this.data = Data,
        this.flag = flag
    }
    public async get ()  {
        const req = {
            url:this.url,
            method:"GET",
            data:this.data,
            // headers:{
            //     'Content-Type':this.flag ? 'multipart/form-data' : 'application/json'
            // }
        }
        return await axios ( req )
    }
    public async post( )  {
        const req = {
            url:this.url,
            method:"POST",
            data:this.data,
            headers:{
                'Content-Type':this.flag ? 'multipart/form-data' : 'application/json'
            }
        }
        return await axios ( req )
    }
    
}
axios.interceptors.request.use(  config => {

    config.headers = config.headers || {}

    // if ( sessionStorage.getItem('token') ) {
        config.headers.Authorization =  `Bearer ${JSON.parse(<string>sessionStorage.getItem('token'))}`
    // }
    // console.log(config);
    // console.log(`Bearer ${JSON.parse(<string>sessionStorage.getItem('token'))}`);
    
    return config
})

axios.interceptors.response.use(  res => {
    return res.data
})
export default Request


