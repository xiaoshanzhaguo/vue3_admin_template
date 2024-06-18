import { createApp } from 'vue'
import App from '@/App.vue'
//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//配置element-plus国际化
//@ts-ignore
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
//获取应用实例对象
const app = createApp(App)
//安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn, //element-plus国际化配置
})
console.log(import.meta.env)
//svg插件需要配置代码
import 'virtual:svg-icons-register'

//引入自定义插件对象
import gloalComponent from '@/components'
//安装自定义插件
app.use(gloalComponent)
//引入模板的全局的样式
import '@/styles/index.scss'


//测试代码：测试假的接口能否使用
import axios from 'axios'
//登录接口
axios({
  url: '/api/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '111111',
  },
})

//将应用挂载到挂载点上
app.mount('#app')
