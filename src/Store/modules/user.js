import { getplandata } from "../../API/user"
const module_user = {
    namespaced: true,
    state: {
        account: "",
        passowrd: "",
        planData: []
    },
    mutations: {
        login(state, { user }) {
            state.account = user.account;
            state.passowrd = user.passowrd;
        },
        updatePlanTable(state, { plandata }) {
            state.planData = plandata;
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
        },
        getPlanData(context, { plandate }) {
            //return getplandata(plandate);
        },
        updatePlanTable(context, { plandate }) {
            var plandata = getplandata(plandate);
            context.commit({
                type: "updatePlanTable",
                plandata
            })
        }
    }
}

export default module_user;