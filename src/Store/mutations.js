const mutations = {
    updateUserId(state,{userId}){
        console.log("updateUserId");
        console.log(userId);
        state.userId = userId;
    }
}
export default mutations;