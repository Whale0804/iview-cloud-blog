import request from '@/utils/request'

export function fetchList () {
    return request(
        {
            url: '/blog/article/hello',
            method: 'get'
        }
    )
}
