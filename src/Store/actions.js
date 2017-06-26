const actions = {
    loginUser(context,{userId}){
        console.log("loginUser");
        console.log(userId);
        context.commit({
            type:'updateUserId',
            userId
        })
    }
};
export default actions;