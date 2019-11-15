import common from './api'
import * as urls from './urls'
export default {
    login:data=>common({url:urls.login,method:'post',data})
}