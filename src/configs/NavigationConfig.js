import {
  DashboardOutlined, UserOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'home',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
}]

const extraNavTree = [
  {
    key: 'extra',
    path: `${APP_PREFIX_PATH}/pages`,
    title: 'clients',
    icon: UserOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: 'extra-pages',
        path: `${APP_PREFIX_PATH}/pages`,
        title: 'clients',
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'extra-pages-list',
            path: `${APP_PREFIX_PATH}/pages/user-list`,
            title: 'clients_list',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          // {
          //   key: 'client-detail',
          //   path: `${APP_PREFIX_PATH}/pages/user/:id`,
          //   title: 'client_detail',
          //   icon: '',
          //   breadcrumb: true,
          //   submenu: [],
          // },
        ]
      },
    ]
  },
]

const navigationConfig = [
  ...dashBoardNavTree,
  ...extraNavTree
]

export default navigationConfig;
