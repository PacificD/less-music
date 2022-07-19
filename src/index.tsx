/*
 * @Author: Pacific_D
 * @Date: 2022-03-30 21:36:37
 * @LastEditTime: 2022-07-19 10:13:35
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\index.tsx
 */
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./pages/App"

ReactDOM.render(
    <React.StrictMode>
        <ColorModeScript />
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
)
