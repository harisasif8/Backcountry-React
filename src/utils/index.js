import axios from 'axios'


const fetcher = (opts = {}) => axios({
    ...opts,
})


export default fetcher;