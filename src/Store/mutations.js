const mutations = {
    userlogin(state,{name,password}){
        state.name = name;
        state.password = password;
        //
        state.isLogined = true;
    }
}
export default mutations;