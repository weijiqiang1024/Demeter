// 成功
export const RES_SUCCEED = 0;
// 失败
export const RES_FAILED = -1;
// 没有token无效
export const RES_FAILED_TOKEN = -2;
export const RES_MSG_TOKEN = '请先登录';


// 账号不存在
export const RES_FAILED_USER_NONE = 1000;
export const RES_MSG_USER_NONE = '账号不存在';
export const RES_MSG_USER_NONE_PWD = '旧密码不正确'; // 通过uId修改密码时使用
// 账号或密码不存在
export const RES_FAILED_USER_ERR_PWD = 1001;
export const RES_MSG_USER_ERR_PWD = '账号或密码不正确';
// 修改密码失败
export const RES_FAILED_MODIFY_PWD = 1002;
export const RES_MSG_MODIFY_PWD = '修改密码失败';
// 用户基本信息修改失败
export const RES_FAILED_UPDATE_USER_INFO = 1003;
export const RES_MSG_UPDATE_USER_INFO = '用户信息更新失败';
// 创建用户失败
export const RES_FAILED_CREATE_USER = 1004;
export const RES_MSG_CREATE_USER = '创建用户失败';
// 重置密码失败
export const RES_FAILED_RESET_PASSWORD = 1005;
export const RES_MSG_RESET_PASSWORD = '重置密码失败';