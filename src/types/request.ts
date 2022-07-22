/*
 * @Author: Pacific_D
 * @Date: 2022-07-22 17:07:13
 * @LastEditTime: 2022-07-22 18:13:22
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\types\request.ts
 */
export enum METHODS {
    "GET" = "get",
    "POST" = "post",
    "PUT" = "put",
    "DELETE" = "delete",
    "PATCH" = "patch"
}

export interface IRes {
    code: number
    [key: string]: any
}
