import {request} from '../axios'

// 获取热门歌手
export function getToprAtists(offset, limit) {
  return request({
    url: '/top/artists',
    params: {
      offset,
      limit
    }
  })
}

// 获取歌单榜单歌曲
export function getTopList(idx) {
  return request({
    url: '/top/list',
    params: {
      idx
    }
  })
}

// 获取每日推荐歌曲(需要登录)
export function getReSongs() {
  return request({
    url: '/recommend/songs'
  })
}

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

