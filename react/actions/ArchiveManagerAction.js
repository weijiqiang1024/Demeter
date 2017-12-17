// archive actions
import {
    ACTION_ARCHIVE_BUILD_DOWNLOAD_QR_CODE,
    ACTION_ARCHIVE_DELETE_ARCHIVE,
    ACTION_ARCHIVE_FETCH_ALL_PROJECTS,
    ACTION_ARCHIVE_FETCH_ARCHIVES,
    ACTION_ARCHIVE_SELECT_PLATFORM,
    ACTION_ARCHIVE_SELECT_PROJECT,
    ACTION_ARCHIVE_SET_DOWNLOAD_INFO,
    ACTION_DOWNLOAD_ARCHIVE_DIALOG_VISIBLE
} from "../constants/ActionType";

/**
 * 选中项目
 * @param project 项目 id
 */
export const selectProjectAction = project => ({
    type: ACTION_ARCHIVE_SELECT_PROJECT,
    data: {
        selectedProject: project
    }
});

/**
 * 选中平台
 * @param platform 平台 id
 */
export const selectPlatformAction = platform => ({
    type: ACTION_ARCHIVE_SELECT_PLATFORM,
    data: {
        selectedPlatform: platform
    }
});

/**
 * 根据用户ID获取当前用户可以访问的项目列表
 * @param uId
 * @param isAdmin
 */
export const fetchAllProjectsAction = (uId, isAdmin) => ({
    type: ACTION_ARCHIVE_FETCH_ALL_PROJECTS,
    data: {
        uId: uId,
        pageNum: 1,
        pageSize: 100,
        isAdmin: isAdmin,
    }
});

/**
 * 根据用户ID 项目id 平台id获取对应的文档
 * @param uId
 * @param pageSize
 * @param pageNum
 * @param projectId
 * @param platformId
 */
export const fetchArchivesAction = (uId, pageSize, pageNum, projectId, platformId) => ({
    type: ACTION_ARCHIVE_FETCH_ARCHIVES,
    data: {
        uId: uId,
        projectId: projectId,
        platformId: platformId,
        pageSize: pageSize,
        pageNum: pageNum,
    }
});

/**
 * 删除文档
 * @param uId
 * @param archiveId
 */
export const deleteArchiveAction = (uId, archiveId) => ({
    type: ACTION_ARCHIVE_DELETE_ARCHIVE,
    data: {
        uId: uId,
        archiveId: archiveId,
    }
});

/**
 * 是否显示下载文档弹窗
 * @param visible
 */
export const showDownloadArchiveDialogAction = visible => ({
    type: ACTION_DOWNLOAD_ARCHIVE_DIALOG_VISIBLE,
    data: {
        downloadDialogVisible: visible
    }
});

/**
 * 设置要下载的文档信息
 * @param index
 */
export const setDownloadArchiveInfoAction = index => ({
    type: ACTION_ARCHIVE_SET_DOWNLOAD_INFO,
    data: {
        downloadArchiveIndex: index
    }
});

/**
 * 根据下载文档url 构建二维码
 * @param url
 */
export const buildDownloadArchiveQRCodeAction = url => ({
    type: ACTION_ARCHIVE_BUILD_DOWNLOAD_QR_CODE,
    data: {
        downloadArchiveUrl: url
    }
});
