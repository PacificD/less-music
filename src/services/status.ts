/*
 * @Author: Pacific_D
 * @Date: 2022-03-30 21:55:42
 * @LastEditTime: 2022-08-01 20:07:51
 * @LastEditors: Ride-pig 327796210@qq.com
 * @Description:
 * @FilePath: \music\src\api\status.ts
 */
/*
 * @Author: Pacific_D
 * @Date: 2022-03-30 21:50:03
 * @LastEditTime: 2022-03-30 21:50:04
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \cr-frontend\src\api\status.ts
 */
export const showMessage = (status: number | string): string => {
    let message = ""
    switch (status) {
        case 400:
            message = "请求错误(400)"
            break
        case 401:
            message = "未授权，请重新登录(401)"
            break
        case 403:
            message = "拒绝访问(403)"
            break
        case 404:
            message = "请求出错(404)"
            break
        case 408:
            message = "请求超时(408)"
            break
        case 500:
            message = "服务器错误(500)"
            break
        case 501:
            message = "服务未实现(501)"
            break
        case 502:
            message = "网络错误(502)"
            break
        case 503:
            message = "服务不可用(503)"
            break
        case 504:
            message = "网络超时(504)"
            break
        case 505:
            message = "HTTP版本不受支持(505)"
            break
        case 800:
            message = "二维码过期"
            break
        case 801:
            message = "等待扫码"
            break
        case 802:
            message = "待确认"
            break
        default:
            message = `连接出错(${status})!`
    }
    return `${message}，请检查网络或联系管理员！`
}
