<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { defineComponent, ref, watch } from 'vue'
import {
  MenuOutlined,
  QqOutlined,
  SettingOutlined,
  AppstoreOutlined,
  DoubleLeftOutlined,
  SearchOutlined,
  MailOutlined,
  FlagOutlined,
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    MenuOutlined,
    QqOutlined,
    SettingOutlined,
    AppstoreOutlined,
    DoubleLeftOutlined,
    SearchOutlined,
    FlagOutlined,
    MailOutlined,
    EditOutlined,
    DeleteOutlined
  },
  setup() {
    const selectedKeys = ref(['1'])
    const openKeys = ref(['sub1'])
    const handleClick = (e: any) => {
      console.log('click', e)
    }
    const titleClick = (e: any) => {
      console.log('titleClick', e)
    }
    watch(
      () => openKeys,
      (val) => {
        console.log('openKeys', val)
      }
    )
    return {
      selectedKeys,
      openKeys,
      handleClick,
      titleClick,
      dataSource: [
        {
          id: 1,
          name: 'Princess Abuyo',
          phone: '09239900912',
          website: 'dyosa.com',
          companyName: 'Dyosa Inc.',
          status: 'Danger'
        },
        {
          id: 2,
          name: 'Princess Abuyo',
          phone: '09239900912',
          website: 'dyosa.com',
          companyName: 'Dyosa Inc.',
          status: 'Pending'
        },
        {
          id: 3,
          name: 'Princess Abuyo',
          phone: '09239900912',
          website: 'dyosa.com',
          companyName: 'Dyosa Inc.',
          status: 'Info'
        },
        {
          id: 4,
          name: 'Princess Abuyo',
          phone: '09239900912',
          website: 'dyosa.com',
          companyName: 'Dyosa Inc.',
          status: 'Danger'
        },
        {
          id: 5,
          name: 'Princess Abuyo',
          phone: '09239900912',
          website: 'dyosa.com',
          companyName: 'Dyosa Inc.',
          status: 'Danger'
        },
        {
          id: 69,
          name: 'Princess Abuyo',
          phone: '09239900912',
          website: 'dyosa.com',
          companyName: 'Dyosa Inc.',
          status: 'Danger'
        }
      ],

      columns: [
        {
          title: '#',
          dataIndex: 'id',
          key: 'id'
        },
        {
          title: 'CUSTOMER',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'PHONE',
          dataIndex: 'phone',
          key: 'phone'
        },
        {
          title: 'WEBSITE',
          dataIndex: 'website',
          key: 'website'
        },
        {
          title: 'COMPANY NAME',
          dataIndex: 'companyName',
          key: 'companyName'
        },
        {
          title: 'STATUS',
          dataIndex: 'status',
          key: 'status',
          slots: { customRender: 'status' }
        },
        {
          title: 'ACTIONS',
          dataIndex: 'actions',
          key: 'actions',
          slots: { customRender: 'actions' }
        }
      ]
    }
  }
})
</script>

<template>
  <div style="display: flex">
    <!-- SIDEBAR -->
    <div>
      <div style="height: 60px; background: #1b1812; color: white">
        <div style="display: grid; place-content: center; height: 100%; font-size: 20px">
          <p style="margin-bottom: 0">Advance Exteriors <DoubleLeftOutlined /></p>
        </div>
      </div>
      <a-menu
        id="dddddd"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        style="width: 256px; height: 100vh; background: #2b2b2b; color: white"
        mode="inline"
        @click="handleClick"
      >
        <a-menu-item key="0">
          <template #icon>
            <AppstoreOutlined />
          </template>
          <span>Dashboard</span>
        </a-menu-item>

        <p
          style="
            margin-left: 20px;
            margin-bottom: 20px;
            margin-top: 20px;
            color: gray;
            font-weight: bold;
          "
        >
          CUSTOM
        </p>

        <a-menu-item key="0">
          <template #icon>
            <SettingOutlined />
          </template>
          <span>Users</span>
        </a-menu-item>

        <a-menu-item key="0">
          <template #icon>
            <SettingOutlined />
          </template>
          <span>Albums</span>
        </a-menu-item>

        <a-menu-item key="0">
          <template #icon>
            <SettingOutlined />
          </template>
          <span>Photos</span>
        </a-menu-item>

        <p
          style="
            margin-left: 20px;
            margin-bottom: 20px;
            margin-top: 20px;
            color: gray;
            font-weight: bold;
          "
        >
          FEATURE
        </p>

        <a-menu-item key="0">
          <template #icon>
            <SettingOutlined />
          </template>
          <span>Subcontractor</span>
        </a-menu-item>

        <a-menu-item key="0">
          <template #icon>
            <SettingOutlined />
          </template>
          <span>Supplier</span>
        </a-menu-item>

        <a-menu-item key="0">
          <template #icon>
            <SettingOutlined />
          </template>
          <span>Calendar</span>
        </a-menu-item>

        <a-menu-item key="0">
          <template #icon>
            <SettingOutlined />
          </template>
          <span>File Upload</span>
        </a-menu-item>

        <a-menu-item key="0">
          <template #icon>
            <SettingOutlined />
          </template>
          <span>Widgets</span>
        </a-menu-item>

        <a-menu-item key="0">
          <template #icon>
            <SettingOutlined />
          </template>
          <span>Calendar</span>
        </a-menu-item>

        <a-menu-item key="0">
          <template #icon>
            <SettingOutlined />
          </template>
          <span>Charts</span>
        </a-menu-item>

        <a-menu-item key="0">
          <template #icon>
            <SettingOutlined />
          </template>
          <span>Maps</span>
        </a-menu-item>
      </a-menu>
    </div>

    <!-- CONTENT -->
    <div style="width: calc(100% - 256px)">
      <div
        style="
          height: 60px;
          display: flex;
          align-items: center;
          padding: 0 20px;
          justify-content: space-between;
        "
      >
        <div>
          <MenuOutlined />
          <a-button style="margin-left: 1rem; background: #e8e8e8; color: #1890ff; border: none"
            >Pages</a-button
          >
        </div>
        <div style="display: flex; align-items: center">
          <SearchOutlined class="header-icons" />
          <MailOutlined class="header-icons" />
          <FlagOutlined class="header-icons" />
          <p>Hi Admin</p>
          <a-button style="margin-left: 1rem; background: #00bb97; color: white; border: none"
            >A</a-button
          >
        </div>
      </div>
      <div
        style="
          height: 60px;
          display: flex;
          align-items: center;
          padding: 0 20px;
          justify-content: space-between;
        "
      >
        <div style="display: flex; align-items: center; justify-content: space-between ; width: 100%">
          <div style="display: flex; align-items: center">
            <p>Contacts</p>
            <a-form style="height: 32px; margin-left: 16px">
              <a-form-item>
                <a-input placeholder="Search" style="background: #E8E8E8" /> 
              </a-form-item>
            </a-form>
          </div>

          <a-button style="margin-left: 1rem; background: #e8e8e8; color: #1890ff; border: none"
            >Add Contacts</a-button
          >
        </div>
        <div style="display: flex; align-items: center"></div>
      </div>
      <div style="background: #eeeeee; padding: 20px; height: calc(100vh - 120px)">
        <a-card :bordered="false">
          <a-table :dataSource="dataSource" :columns="columns" :pagination="false">
            <template #status="{ record }">
              <a-button
                v-if="record.status === 'Danger'"
                class="table-status-btn"
                style="background: #ff3857"
                >DANGER</a-button
              >
              <a-button
                v-if="record.status === 'Pending'"
                class="table-status-btn"
                style="background: #9e64f7"
                >PENDING</a-button
              >
              <a-button
                v-if="record.status === 'Info'"
                class="table-status-btn"
                style="background: #fecc1d"
                >INFO</a-button
              >
            </template>
            <template #actions="{ record }">
              <EditOutlined style="margin-right: 16px; cursor: pointer" />
              <DeleteOutlined style="cursor: pointer" />
            </template>
          </a-table>

          <div style="display: flex; justify-content: space-between; margin-top: 16px">
            <a-button type="primary" :disabled="true" style="border-radius: 8px">Previous</a-button>
            <a-button type="primary" :disabled="true" style="border-radius: 8px">Next</a-button>
          </div>
        </a-card>
      </div>
    </div>
  </div>

  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView /> -->
</template>

<style scoped>
p {
  margin: 0;
}
.header-icons {
  font-size: 20px;
  padding-right: 32px;
}

.table-status-btn {
  color: white;
  border-radius: 8px;
  font-weight: bold;
  font-size: 12px;
}
</style>
