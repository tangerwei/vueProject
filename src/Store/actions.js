import { Loading } from 'element-ui';
let loadingState = "";
const actions = {
    userlogin(context,{name,password}){
        context.commit({
            type:'userlogin',
            name,
            password
        })
    },
    openLoading(){
        loadingState = Loading.service({
            fullscreen:true,
            lock:true,
            text:"登录中..."
        });
    },
    closeLoading(){
        loadingState.close();
    }
};
export default actions;