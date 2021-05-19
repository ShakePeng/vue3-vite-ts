
import request from '@/common/request'
interface ConfigReq {
	keyWords: string[]
}
export const getBaseconfig = (params: ConfigReq): Promise<any> => {
	// http://wx.t.17u.cn/tcflightcheckinapi/getConfigCenter.html
	return request({
		method: 'POST',
		url: 'checkinApi/getConfigCenter.html',
		data: params
	  })
}