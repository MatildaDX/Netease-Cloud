import {request} from '../axios'

// 获取主页轮播图信息
export function getBanners(type) {
  return request({
    url: '/banner',
    params: {
      type
    }
  })
}

// 获取每日推荐歌单
export function getPersonalized(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
} 

// 获取每日推荐歌曲
export function getSongs() {
  return request({
    url: '/personalized/newsong'
  })
}

