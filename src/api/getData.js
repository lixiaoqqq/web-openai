import base from './index'
let axios = base.axios
let baseUrl = base.baseUrl

// 获取好友
export const getFriend = params => {
    return axios({
      method: 'post',
      baseURL: `${baseUrl}/friend/friendList`,
      data: params
    }).then(res => res.data)
  }

  // 获取聊天信息
export const getChatMsg = params => {
  return axios({
    method: 'post',
    baseURL: `${baseUrl}/friend/chatMsg`,
    data: params
  }).then(res => res.data)
}

  // 获取聊天信息
  export const chatgpt = params => {
    return axios({
      method: 'post',
      url: `v1/chat/completions`,
      data: params,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + "ai-9StB93auTRi1aDHU6NhjFdRqEDCREybRzoh5teS6osygIsjw"
      }
    }).then(res => res.data)
  }