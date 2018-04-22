var  store = new Vuex.Store({
  state: {
     userNew:{
     		login:'',
            cardlist:'',//银行列表
     },
  },
  mutations: {
      INCENEWUSERLOGINCARDLIST(state,value){ //New user  cardlist 银行列表
            state.userNew.cardlist = value
       },
         
  },
  actions: {
  	inceuserNew({commit},value){//个人
  		console.log(value)
  		if(value.id === 13){//银行列表
  			console.log(value)
            commit("INCENEWUSERLOGINCARDLIST",value.data);
                //************新增 2018 03 06**********//
        }
  	}
  }
})