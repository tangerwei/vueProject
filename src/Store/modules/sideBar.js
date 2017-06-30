const module_sideBar = {
    namespaced: true,
    state:{
        menu_isopen:true
    },
    mutations:{
        closeMenu(state){
            state.menu_isopen = false;
        },
        openMenu(state){
            state.menu_isopen = true;
        }
    },
    actions:{
        //展开菜单宽度
        closeMenu(context){
            context.commit('closeMenu');
        },
        //缩小菜单宽度
        openMenu(state){
            context.commit('openMenu');
        }
    }
}

export default module_sideBar;