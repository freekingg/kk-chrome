<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { Setting } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import SettingDialog from "./components/setting.vue";
import axios from "axios";
import { findOne, boot } from "../api/api";

const formInline = reactive({
  uname: "",
  url: "",
});

const baseUrl = ref("http://localhost:81/admin/crawler/checkFileMember");
const loading = ref(false);
const downloadPath = ref("");
const ruleFormRef = ref();
const tableData: any = ref([]);

const urls = ref([
  "https://internetbanking.pnbibanking.in/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=024",
  "https://cibnext.icicibank.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=ICI&ITM=nli_corp_primer_login_btn_desk",
  "https://idp.axisbank.co.in/mib/Welcome?_ga=2.153009913.1378454247.1686379059-706584366.1686379059#!",
  "https://omni.axisbank.co.in/axisretailbanking/",
  "https://indusnet.indusind.com/corp/BANKAWAY?Action.RetUser.Init.001=Y&AppSignonBankId=234&AppType=corporate&CorporateSignonLangId=001",
  "https://www.freecharge.in/",
  "https://inet.equitasbank.com/EquitasCorp/#",
  "https://my.idfcfirstbank.com/login",
  "https://yesmsmeonline.yesbank.in/homepage#!/login",
  "https://netbanking.paytmbank.com/",
  "https://cib.aubank.in/iCashProGUI/#/login",
  "https://shivalikinternetbanking.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=721&LANG_ID=001",
  "https://inet.idbibank.co.in/ret/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=IBKL",
  "https://corp.idbibank.co.in/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=IBKL",
  "https://online.canarabank.in/?module=login%27",
  "https://www.kvbin.com/B001/ENULogin.jsp",
  "https://corporatebanking.janabank.com/Corporate/prelogin",
  "https://corporate.bandhanbank.com/Corporatebanking/prelogin",
  "https://netportal.hdfcbank.com/login",
  "https://feba.bobibanking.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=012",
]);

const accounts = () => {
  axios({
    method: "get",
    url: baseUrl.value,
  })
    .then((result) => {
      console.log(result);
      if (result.data) {
        tableData.value = result.data;
      }
    })
    .catch((err) => {
      console.log("err: ", err);
      // tableData.value = [
      //   {
      //     id: 1540272016021434400,
      //     uname: "axis333",
      //     balance: 0,
      //     type: 1,
      //     accountType: 1,
      //     mobile: "",
      //     status: 1,
      //     bankInfoId: 1540272016382144500,
      //     bankInfoNo: "B0530",
      //     bankType: 17,
      //     bankDirection: 1,
      //     bankAccount: "940027673",
      //     bankPwd: "Fastpay888@",
      //     bankData: "",
      //     bankInfoStatus: 3,
      //     bankDataDTO: null,
      //     remark:
      //       "https://retail.axisbank.co.in/wps/portal/rBanking/axisebanking/AxisRetailLogin/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOKNAzxMjIwNjLwsQp0MDBw9PUOd3HwdDQwMjIEKIoEKDHAARwNC-sP1o_ArMYIqwGNFQW6EQaajoiIAVNL82A!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/?_ga=2.236133576.857785597.1643885687-1954125547.1628502792",
      //     createDate: "2022-06-24T09:54:00.000+0000",
      //     upi: null,
      //     bankGridValueList: null,
      //   },
      //   {
      //     id: 1668887933801652200,
      //     uname: "HDFC2834",
      //     balance: 2113078.1,
      //     type: 1,
      //     accountType: 1,
      //     mobile: "",
      //     status: 2,
      //     bankInfoId: 1668887934153973800,
      //     bankInfoNo: "B72959",
      //     bankType: 4,
      //     bankDirection: 1,
      //     bankAccount: "237322400",
      //     bankPwd: "Fastpay999@",
      //     bankData: "12",
      //     bankInfoStatus: 3,
      //     bankDataDTO: null,
      //     remark: "https://netbanking.hdfcbank.com/netbanking/",
      //     createDate: "2023-06-14T07:47:45.000+0000",
      //     upi: null,
      //     bankGridValueList: null,
      //   },
      //   {
      //     id: 1669334206467989500,
      //     uname: "PNB2841",
      //     balance: 0,
      //     type: 1,
      //     accountType: 1,
      //     mobile: "",
      //     status: 1,
      //     bankInfoId: 1669334206811922400,
      //     bankInfoNo: "B73142",
      //     bankType: 24,
      //     bankDirection: 1,
      //     bankAccount: "YATH8615",
      //     bankPwd: "HARAD267",
      //     bankData:
      //       '[{"corporateId":"YATH8615","userId":"HARAD267","password":"Fastpay999@","type":"min"},{"corporateId":"YATH8615","userId":"ONIAJ270","password":"Fastpay999@","type":"min"},{"corporateId":"YATH8615","userId":"VOYAL144","password":"Fastpay999@","type":"min"},{"corporateId":"YATH8615","userId":"NOYAL168","password":"Fastpay999@","type":"min"},{"corporateId":"YATH8615","userId":"GOYAL171","password":"Fastpay999@","type":"all"}]',
      //     bankInfoStatus: 3,
      //     bankDataDTO: [
      //       {
      //         corporateId: "YATH8615",
      //         userId: "HARAD267",
      //         password: "Fastpay999@",
      //         account: null,
      //         type: "min",
      //       },
      //       {
      //         corporateId: "YATH8615",
      //         userId: "ONIAJ270",
      //         password: "Fastpay999@",
      //         account: null,
      //         type: "min",
      //       },
      //       {
      //         corporateId: "YATH8615",
      //         userId: "VOYAL144",
      //         password: "Fastpay999@",
      //         account: null,
      //         type: "min",
      //       },
      //       {
      //         corporateId: "YATH8615",
      //         userId: "NOYAL168",
      //         password: "Fastpay999@",
      //         account: null,
      //         type: "min",
      //       },
      //       {
      //         corporateId: "YATH8615",
      //         userId: "GOYAL171",
      //         password: "Fastpay999@",
      //         account: null,
      //         type: "all",
      //       },
      //     ],
      //     remark:
      //       "https://internetbanking.pnbibanking.in/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=024",
      //     createDate: "2023-06-15T13:21:04.000+0000",
      //     upi: null,
      //     bankGridValueList: null,
      //   },
      // ];
    });
};

onMounted(() => {
  accounts();
});

const checkUrl = (rule: any, value: any, callback: any) => {
  console.log(rule);
  if (value === "") {
    callback(new Error("请输入要打开的网址"));
  } else {
    const urlRegex = /^(http|https):\/\/(\S+)$/;
    if (urlRegex.test(value)) {
      callback();
    } else {
      callback(new Error("The URL is invalid"));
    }
  }
};
const rules = reactive({
  uname: [{ required: true, message: "请输入户名", trigger: "blur" }],
  url: [{ validator: checkUrl, trigger: "change" }],
});

const settingDialog = ref();
const handleSetting = () => {
  console.log(settingDialog.value);
  settingDialog.value.handleVisible(true);
};

const chromePath = ref("");
const handleBoot = async (row: any, pRow: any = {}) => {
  const chromeDir = await findOne({
    name: "chromePath",
  });
  if (chromeDir.data) {
    chromePath.value = chromeDir.data.value;
  } else {
    ElMessage.error("请在基本配置中配置浏览器路径");
    return;
  }
  loading.value = true;

  const bootParams = {
    ...pRow,
    ...row,
    chromePath: chromePath.value,
    downloadPath: downloadPath.value,
    url: row.remark || row.url || pRow.remark,
  };

  let res = await boot(bootParams);
  console.log("res: ", res);
  if (res) {
    ElMessage.success(`${row.uname}启动成功`);
    loading.value = false;
  } else {
    ElMessage.error(`${row.uname}: ${res.message}`);
    loading.value = false;
  }
};

const onSubmit = async (formEl: any) => {
  if (!formEl) return;
  await formEl.validate((valid: any) => {
    if (valid) {
      handleBoot({
        uname: formInline.uname,
        url: formInline.url,
      });
    }
  });
};
const tableRowClassName = ({ row, rowIndex }) => {
  if (!row.bankDataDTO) {
    return "row-expand-cover";
  }
  return "";
};
</script>

<template>
  <div class="account">
    <div class="other">
      <h4 style="margin-top: 15px; margin-bottom: 23px; text-align: center">
        手动运行
      </h4>

      <el-form
        :inline="true"
        :model="formInline"
        ref="ruleFormRef"
        :rules="rules"
        class="demo-form-inline"
      >
        <el-form-item label="账户名" prop="uname">
          <el-tooltip
            effect="dark"
            content="请核对好与后台的户名一致,不可出错"
            placement="top-start"
          >
            <el-input
              v-model="formInline.uname"
              clearable
              placeholder="请输入账户名"
            />
          </el-tooltip>
        </el-form-item>
        <el-form-item label="网址" prop="url">
          <el-select
            v-model="formInline.url"
            filterable
            remote
            clearable
            :fit-input-width="true"
            placeholder="请输入要打开的网址"
          >
            <el-option
              v-for="item in urls"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
          <!-- <el-input v-model="formInline.url" clearable placeholder="请输入要打开的网址" /> -->
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit(ruleFormRef)"
            :loading="loading"
            >运行</el-button
          >
          <el-tooltip
            effect="dark"
            content="配置账号信息"
            placement="top-start"
          >
            <el-button
              type="info"
              :icon="Setting"
              circle
              @click="handleSetting"
            />
          </el-tooltip>
        </el-form-item>
      </el-form>
    </div>
    <el-alert
      show-icon
      title="账户名"
      description="请核对好与后台的户名一致,不可出错."
      type="info"
      :closable="false"
      style="margin-bottom: 3px"
    />
    <el-divider />
    <h2 style="margin-bottom: 20px">账户列表</h2>
    <div class="card">
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column type="expand">
          <template #default="{ row }">
            <el-table
              v-if="row.bankType === 24"
              :data="row.bankDataDTO"
              class="subtable"
              style="width: 90%"
              size="small"
            >
              <el-table-column prop="corporateId" label="corporateId">
              </el-table-column>
              <el-table-column prop="userId" label="userId"> </el-table-column>
              <el-table-column prop="password" label="password">
              </el-table-column>
              <el-table-column label="类型" width="100">
                <template #default="scoped">
                  <el-tag sizsmalle="medium" v-if="scoped.row.type === 'min'"
                    >最近10笔</el-tag
                  >
                  <el-tag size="small" v-if="scoped.row.type === 'all'"
                    >全流水</el-tag
                  >
                </template>
              </el-table-column>
              <el-table-column
                label="操作"
                header-align="center"
                align="center"
              >
                <template #default="scoped">
                  <el-button
                    type="success"
                    plain
                    @click="handleBoot(scoped.row, row)"
                    size="small"
                    >启动</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column
          type="index"
          label="#"
          header-align="center"
          align="center"
        />
        <el-table-column
          prop="uname"
          label="账户名"
          header-align="center"
          align="center"
        />
        <el-table-column label="操作" header-align="center" align="center">
          <template #default="{ row }">
            <el-button
              type="success"
              v-if="row.bankType !== 24"
              @click="handleBoot(row)"
              >启动</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-button type="primary" style="margin-top: 20px" @click="accounts"
      >刷新</el-button
    >

    <setting-dialog ref="settingDialog" />
  </div>
</template>

<style scoped>
.account {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card {
  width: 100%;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.subtable {
  padding-left: 40px;
}

.row-expand-cover .el-table__expand-icon {
  visibility: hidden;
}
.row-expand-cover .el-table__expand-icon {
  visibility: hidden;
}
:deep(.row-expand-cover .el-table__expand-icon) {
  visibility: hidden;
}
</style>
