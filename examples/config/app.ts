import axios from "../../src"
import { AxiosTransformer } from "../../src/types"

axios.defaults.headers.common['test2'] = 123

axios({
  transformRequest: [(function(data) {
    return data
  }), ...(axios.defaults.transformRequest as AxiosTransformer[])],
  transformResponse: [...(axios.defaults.transformResponse as AxiosTransformer[]), function(data) {
    if(typeof data === 'object') {
      data.b = 2
    }
    return data
  }],
  url: '/config/post',
  method: 'post',
  data: {
    a: 1
  },
  headers: {
    test: '321'
  }
}).then(res => {
  console.log(res.data)
})
