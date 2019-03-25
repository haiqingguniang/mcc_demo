import http from '../assets/js/portHttp';

export default {
  /* 获取币种行情详情 (页面头部信息) */
  getLatestMarketDetail: () => {
    return http.lulupost('getLatestMarket')
      .then((res) => {
        return Promise.resolve(res);
      });
  },
  /**
   * 获取K线数据
   * params
   * cotin: 币种类型
   * time: 时间段
   * timepspan : 时间间隔
   */
  getKlinesDetail: (time ,timespan) => {
    return http.lulupost('getkline', {start:parseInt(new Date().getTime() / 1000 - time), end: parseInt(new Date().getTime() / 1000), interval:timespan})
      .then((res) => {
          return Promise.resolve(res);
      });
  },
  /**
   * 四叶草可领取
   * params
   * user_id ,用户名
   */
  getClover: () => {
    return http.lulupost('clover/exchange/getClover',{user_id:localStorage.getItem('user_id')})
      .then((res) => {
          return Promise.resolve(res);
      });
  },
  /**
   * 领取今天四叶草
   * params
   * user_id , 用户名
   */
  receiveClove: () => {
    return http.lulupost('clover/exchange/sendClover',{user_id:localStorage.getItem('user_id')})
      .then((res) => {
          return Promise.resolve(res);
      });
  },
  /**
   * 获取个人账户信息
   * params
   * user_id , 用户名
   */
  getAccount: () => {
    return http.lulupost('clover/exchange/getClvMCCNum',{user_id: localStorage.getItem('user_id')})
      .then((res) => {
          return Promise.resolve(res);
      });
  },
  /**
   * 获取四叶草领取排行
   * params
   * user_id , 用户名
   * type , 1 1为四叶草
   * date , 时间格式 2018-08-18
   */
  getCloverRank: (type, date) => {
    return http.lulupost('clover/exchange/getClvRank',{user_id: localStorage.getItem('user_id'), type: type, date: date})
    .then(res => {
      return Promise.resolve(res)
    })
  },
  /**
   * 获取MCC今日可领取
   * params
   * user_id , 用户名
   */
  getMCCInfo () {
    return http.lulupost('clover/exchange/getDividendMCC', {user_id: localStorage.getItem('user_id')}).then((res) => {
      return Promise.resolve(res)
    })
  },
  /**
   * 获取MCC今日可领取
   * params
   * user_id , 用户名
   */
  receiveMCC () {
    return http.lulupost('clover/exchange/sendDividendMCC', {user_id: localStorage.getItem('user_id')}).then((res) => {
      return Promise.resolve(res)
    })
  },
  /**
   * 获取MCC领取排行榜
   * params
   * user_id , 用户名
   */
  getMCCRank () {
    return http.lulupost('clover/exchange/dividendMCCRank', {user_id: localStorage.getItem('user_id')}).then((res) => {
      return Promise.resolve(res)
    })
  },
  /**
   * 获取用户信息
   * params
   * user_id , 用户名
   */
  getUserInfo () {
    return http.luluget('player/user').then((res) => {
      return Promise.resolve(res)
    })
    
  }
}
