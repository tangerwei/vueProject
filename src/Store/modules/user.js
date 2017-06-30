const module_user = {
    namespaced: true,
    state: {
        account: "",
        passowrd: ""
    },
    mutations: {
        login(state, { user }) {
            state.account = user.account;
            state.passowrd = user.passowrd;
        }
    },
    actions: {
        //登录
        login(context, { user }) {
            //存入缓存
            sessionStorage.setItem('user', JSON.stringify(user));
            context.commit({
                type: "login",
                user
            });
        },
        getUserMes(context) {
            var user = JSON.parse(sessionStorage.getItem('user'));
            context.commit({
                type: "login",
                user
            });
        }
    }
}

export default module_user;