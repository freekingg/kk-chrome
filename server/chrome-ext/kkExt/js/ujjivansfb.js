ploader = false;
var ltransDetails1;
var ltransDetails2;
var lastBal;
var lastPstdDt;
var lastTxnDt;
var lstTxnId;
var lastSno;
var shwmre = false;
var ldate = {};
var lministmtstatus = true;
var lcurrSec = "FIRST";
var shwmrepg = 1;
var shwmreck = false;


window.addEventListener('message', function (e) {
  console.log('inject script received:' , e);
  if(e && e.data.actionType === 'downloadUjjivancor'){
    let parseProps = e.data.data
    let jsonStr = JSON.stringify(parseProps.jsonStr)
    let ltype = "CSV"
    appzillon.server.callServer("DynamicAccountStatementImpl", "DynamicAccountStatementImpl", "N", jsonStr, "N", ltype, true, appzillon.app.onDownloadStmtCB)
  }
});

appzillon.app.load_AccountDetail = function() {
    lcurrSec = "FIRST";
    $("#alertID_main_div").addClass("dispnone");
    $("#fgp_miniStmt_main").addClass("dispnone");
    $("#miniStmtCont_main_div").addClass("dispnone");
    $("#accountgrid_main_div").removeClass("dispnone");
    appzillon.app.common.setHeaderText("Account Details");
    if (appzillon.plugin.retrieve("acctype") == "Savings") {
        appzillon.app.accountDetail.callSavAccDetails()
    } else {
        if (appzillon.plugin.retrieve("acctype") == "Current") {
            appzillon.app.accountDetail.callCurrAccDetails()
        } else {
            if (appzillon.plugin.retrieve("acctype") == "OverDraft") {
                appzillon.app.accountDetail.callODAccDetails()
            }
        }
    }
}
;
appzillon.app.AccountDetail_Shown = function() {
    appzillon.app.common.startLoader();
    $("#container_list_2_list_title_div").addClass("dispnone");
    $("#container_list_4_list_title_div").addClass("dispnone");
    $("#fgp_accountDetail_main").removeClass("dispnone");
    $("#fgp_vdCont_main").addClass("dispnone");
    $("#fgp_searchTransaction_main").addClass("dispnone");
    $("#fgp_downloadStmt_main").addClass("dispnone");
    $("#accntStmt_main_div").addClass("dispnone");
    $("#fgp_miniStmt_main").addClass("dispnone");
    $("#miniStmtCont_main_div").addClass("dispnone");
    $("#transSectionId_main_div").addClass("dispnone")
}
;
appzillon.app.accountDetail.showmore = function() {
    shwmre = true;
    shwmrepg = parseInt($("#fgp_container_list_5_cp").val());
    ltransDetails2 = appzillon.data.scrdata.transactionDetails;
    appzillon.app.accountDetail.callGetAccountStatement()
}
;
appzillon.app.accountDetail.loadAccountData = function(lbody) {
    var rowNo = appzillon.plugin.retrieve("rowNo");
    var data = appzillon.app.common.filterAccount(appzillon.app.common.fetchAccountList(appzillon.app.globals.allAccountList), ["SBA", "CAA", "ODA"])[rowNo];
    $("#schemeType").text(appzillon.app.common.getschemeNameType(appzillon.plugin.retrieve("acctype")));
    $("#amountID").text(data.balanceAmt + " Cr");
    $("#accnoID1").text(appzillon.plugin.retrieve("accNum"));
    $("#accnoID2").text(appzillon.plugin.retrieve("acctype"));
    $("#typeID").addClass("dispnone");
    $("#nom_sec_row_div").addClass("dispnone");
    if (lbody != "") {
        if (lbody.accountDtls !== undefined && lbody.accountDtls !== "") {
            $("#addressID").text(lbody.accountDtls.branchDescription)
        }
        if (lbody.nomineeDtls != undefined && lbody.nomineeDtls.nomineeName != "") {
            $("#typeID").removeClass("dispnone");
            $("#nom_sec_row_div").removeClass("dispnone");
            $("#typeID").text("Jointly");
            $("#nomineeID").text(lbody.nomineeDtls.nomineeName)
        }
    }
    if (appzillon.plugin.retrieve("acctype") == "OverDraft") {
        $("#odlimit_sec_row_div").removeClass("dispnone");
        $("#odavailid_sec_row_div").removeClass("dispnone");
        $("#accintid_sec_row_div").removeClass("dispnone");
        $("#val1").text(appzillon.app.common.formatNumber(data.odLimit));
        $("#val2").text(appzillon.app.common.formatNumber(data.odLimit - data.odBalance));
        $("#val3").text(appzillon.app.common.formatNumber(lbody.accrIntvalue));
        $("#val4").text(lbody.accrStartDt)
    } else {
        $("#odlimit_sec_row_div").addClass("dispnone");
        $("#odavailid_sec_row_div").addClass("dispnone");
        $("#accintid_sec_row_div").addClass("dispnone")
    }
    if (appzillon.plugin.retrieve("acctype") == "Current") {
        $("#prevMnthAvg_sec_row_div").removeClass("dispnone");
        $("#currMnthAvg_sec_row_div").removeClass("dispnone");
        $("#prevMnthAvg").text(appzillon.app.common.formatNumber(data.prevAvgMonthlyBal));
        $("#currMnthAvg").text(appzillon.app.common.formatNumber(data.currAvgMonthlyBal))
    } else {
        $("#prevMnthAvg_sec_row_div").addClass("dispnone");
        $("#currMnthAvg_sec_row_div").addClass("dispnone")
    }
    if (lbody != "" || appzillon.plugin.retrieve("acctype") == "OverDraft") {
        appzillon.app.accountDetail.callGetMiniStatement()
    }
}
;
appzillon.app.accountDetail.getAccountMiniStatement = function(lAccList) {
    if (lAccList != "") {
        $("#fgp_miniStmt_main").removeClass("dispnone");
        $("#miniStmtList_main_div").removeClass("dispnone");
        $("#miniStmtCont_main_div").removeClass("dispnone");
        lAccList = lAccList.getMiniStatementRes.body.tranSummary;
        appzillon.data.scrdata.tranSummary = {};
        $.each(lAccList, function(i, obj) {
            if (obj.transType == "D" || obj.transType == "Dr") {
                obj.transAmount = appzillon.app.common.formatNumber(obj.transAmount);
                $("#amtTyp1_" + i).text(" Dr");
                $("#amtTyp1mob_" + i).text(" Dr");
                $("#amtTyp1mob_" + i).addClass("debit");
                $("#amtTyp1_" + i).addClass("debit");
                $("#amtTyp1mob_" + i).removeClass("credit");
                $("#amtTyp1_" + i).removeClass("credit")
            } else {
                if (obj.transType == "C" || obj.transType == "Cr") {
                    obj.transAmount = appzillon.app.common.formatNumber(obj.transAmount);
                    $("#amtTyp1_" + i).text(" Cr");
                    $("#amtTyp1mob_" + i).text(" Cr");
                    $("#amtTyp1mob_" + i).addClass("credit");
                    $("#amtTyp1_" + i).addClass("credit");
                    $("#amtTyp1mob_" + i).removeClass("debit");
                    $("#amtTyp1_" + i).removeClass("debit")
                }
            }
            obj.transDt = appzillon.util.formatDate(obj.transDt, "yyyy-MM-ddTHH:mm:ss.sss", "dd MMMM yyyy")
        })
    }
    appzillon.data.scrdata.tranSummary = lAccList;
    appzillon.data.scrdata.tranSummarymob = lAccList;
    appzillon.data.loadData();
    appzillon.app.accountDetail.displayminiStmtPagination()
}
;
appzillon.app.accountDetail.changeAccount = function() {
    appzillon.app.common.NavigateSubScreen("AccountList", "forward")
}
;
appzillon.app.accountDetail.getSearchTransaction = function() {
    lcurrSec = "SECOND";
    $("#transSectionId_main_div").removeClass("dispnone");
    appzillon.app.common.setHeaderText("Search Transaction");
    $("#fgp_accountDetail_main").addClass("dispnone");
    $("#fgp_miniStmt_main").addClass("dispnone");
    $("#miniStmtCont_main_div").addClass("dispnone");
    $("#fgp_vdCont_main").addClass("dispnone");
    $("#fgp_searchTransaction_main").removeClass("dispnone");
    $("#fgp_downloadStmt_main").addClass("dispnone");
    $("#accntStmt_main_div").addClass("dispnone");
    $("#accountgrid_main_div").addClass("dispnone");
    $("#accountgrid_main_div,#fgp_accountDetail_main").removeClass("dispnone");
    $("input[name=transPerid2]:checked").attr("checked", false);
    $("input[name=transPerid1]:checked").attr("checked", false);
    $(".checked").removeClass("checked");
    $("#fromdat2").val("");
    $("#fromdat1").val("");
    $("#todat1").val("");
    $("#todat2").val("");
    $("#transType1").val("");
    $("#transCat1").val("");
    $("#transType2").val("");
    $("#transCat2").val("");
    $("#minAmt").val("");
    $("#maxAmt").val("");
    $("#benificiaryAcctNumber").val("");
    $("#chequenumber").val("");
    $("#utrNumber").val("");
    $("#rrnNumber").val("");
    $("#transPerid2_option_UJJ_LST1WK").trigger("click");
    guiutils.uniformLaf()
}
;
appzillon.app.accountDetail.getAccountTransactionStatement = function() {
    appzillon.app.accountDetail.getDate("1");
    if (ldate.fromDate != "" && ldate.toDate != "") {
        if (ldate.fromDate <= ldate.toDate) {
            $("#accntStmt_main_div").removeClass("dispnone");
            $("#downldIconCol_sec_col_div,#emailLinkIcon_sec_col_div").removeClass("dispnone");
            $("#fgp_downloadStmt_main").removeClass("dispnone");
            $("#accountgrid_main_div,#fgp_accountDetail_main").addClass("dispnone");
            appzillon.app.accountDetail.callGetAccountStatement()
        } else {
            appzillon.util.displayMessage("UJJ-ERROR", "From date cannot be greater than To date")
        }
    } else {
        if (ldate.fromDate === "" && ldate.toDate === "") {
            appzillon.util.displayMessage("UJJ-ERROR", "Please select the  Date")
        } else {
            if (ldate.fromDate === "") {
                appzillon.util.displayMessage("UJJ-ERROR", "Please select the From Date")
            } else {
                appzillon.util.displayMessage("UJJ-ERROR", "Please select the To Date")
            }
        }
    }
}
;
appzillon.app.accountDetail.getAccountStatementView = function(lno) {
    var makeDate = new Date();
    if ($("input[name=transPerid" + lno + "]:checked").val() == 1) {
        return appzillon.app.common.getDateFormat(new Date(makeDate.getTime() - 7 * 24 * 60 * 60 * 1000), "")
    } else {
        if ($("input[name=transPerid" + lno + "]:checked").val() == 2) {
            return appzillon.app.common.getDateFormat(new Date(new Date(makeDate.setMonth(makeDate.getMonth() - 1)).setDate(makeDate.getDate() - 1)), "")
        } else {
            if ($("input[name=transPerid" + lno + "]:checked").val() == 3) {
                return appzillon.app.common.getDateFormat(new Date(new Date(makeDate.setMonth(makeDate.getMonth() - 3)).setDate(makeDate.getDate() - 2)), "")
            }
        }
    }
}
;
appzillon.app.accountDetail.getPeriodicStatement = function() {
    lcurrSec = "SECOND";
    $("#accountgrid_main_div").addClass("dispnone");
    $("#transSectionId_main_div").removeClass("dispnone");
    appzillon.app.common.setHeaderText("View / Download Statement");
    $("#fgp_accountDetail_main").addClass("dispnone");
    $("#fgp_miniStmt_main").addClass("dispnone");
    $("#miniStmtCont_main_div").addClass("dispnone");
    $("#fgp_vdCont_main").removeClass("dispnone");
    $("#fgp_searchTransaction_main").addClass("dispnone");
    $("#fgp_downloadStmt_main").addClass("dispnone");
    $("#accountgrid_main_div,#fgp_accountDetail_main").removeClass("dispnone");
    $("#transPerid1_option_UJJ_LST1WK").closest("span").addClass("checked");
    $("#transPerid1_option_UJJ_LST1WK").attr("checked", "checked");
    guiutils.uniformLaf();
    $("#fromdat2").val("");
    $("#fromdat1").val("");
    $("#todat1").val("");
    $("#todat2").val("");
    $("#transType1").val("");
    $("#transCat1").val("");
    $("#transType2").val("");
    $("#transCat2").val("");
    $("#minAmt").val("");
    $("#maxAmt").val("");
    $("#benificiaryAcctNumber").val("");
    $("#chequenumber").val("");
    $("#utrNumber").val("");
    $("#rrnNumber").val("");
    appzillon.data.scrdata.transactionDetails = {};
    appzillon.data.scrdata.transactionDetails = "";
    appzillon.data.scrdata.transactionDetailsmob = {};
    appzillon.data.scrdata.transactionDetailsmob = "";
    appzillon.data.loadData()
}
;
appzillon.app.AccountDetail_Back = function() {
    if (lcurrSec == "FIRST") {
        appzillon.app.common.NavigateSubScreen("AccountList", "backward")
    } else {
        $("#alertID_main_div").addClass("dispnone");
        $("#fgp_accountDetail_main").removeClass("dispnone");
        $("#accountgrid_main_div").removeClass("dispnone");
        $("#transSectionId_main_div").addClass("dispnone");
        $("#accntStmt_main_div").addClass("dispnone");
        $("#fgp_downloadStmt_main").addClass("dispnone");
        if (lministmtstatus) {
            $("#fgp_miniStmt_main").removeClass("dispnone");
            $("#miniStmtList_main_div").removeClass("dispnone");
            $("#miniStmtCont_main_div").removeClass("dispnone");
            appzillon.app.accountDetail.tranSummaryUI()
        } else {
            $("#alertID_main_div").removeClass("dispnone")
        }
        lcurrSec = "FIRST"
    }
}
;
appzillon.app.accountDetail.displayminiStmtPagination = function() {
    var lprevNum = $("#fgp_container_list_2_cp").val();
    var lnextNum = $("#fgp_container_list_2_tp").text();
    $("#preNum").text(lprevNum);
    $("#nextNum").text(lnextNum);
    appzillon.app.accountDetail.tranSummaryUI()
}
;
appzillon.app.accountDetail.displayPagination = function() {
    if (shwmre == true) {
        var lprevNum = shwmrepg + 1;
        appzillon.data.scrmetadata.containersmap.container_list_5.currpage = shwmrepg;
        appzillon.data.changePage("container_list_5", "N", "")
    } else {
        var lprevNum = $("#fgp_container_list_5_cp").val()
    }
    var lnextNum = $("#fgp_container_list_5_tp").text();
    $("#preNumD").text(lprevNum);
    $("#nextNumD").text(lnextNum);
    $("#showmore").addClass("dispnone");
    if (lprevNum == lnextNum) {
        $("#showmore").removeClass("dispnone")
    }
    guiutils.readjustHeight();
    appzillon.app.accountDetail.transactionDetailsUI()
}
;
appzillon.app.accountDetail.callGetMiniStatement = function() {
    var json = {};
    appzillon.app.common.setReqHeader("HDD", "getMiniAccountStatment", "65445656564512312", "CBS");
    json.getMiniStatementReq = {};
    json.getMiniStatementReq.reqHdr = appzillon.app.common.getReqHeader();
    json.getMiniStatementReq.body = {};
    json.getMiniStatementReq.body.accountNumber = appzillon.plugin.retrieve("accNum");
    json.getMiniStatementReq.body.branchId = appzillon.plugin.retrieve("accNum").slice(0, 4);
    json.getMiniStatementReq.body.numberOfTrans = "5";
    var jsonStr = JSON.stringify(json);
    // appzillon.app.common.startLoader();
    appzillon.server.callServer("getMiniAccountStatment_Req", "getMiniAccountStatment_Res", "N", jsonStr, "Y", "124", true, appzillon.app.accountDetail.callGetMiniStatementCallBack)
}
;
appzillon.app.accountDetail.callGetMiniStatementCallBack = function(pcallid, lifaceid, pstatus, perrorCode, lbodyobj) {
    appzillon.app.common.stopLoader();
    if (pstatus == "success") {
        if (lbodyobj.getMiniStatementRes.resHdr.responseStatus.status == 0) {
            lministmtstatus = true;
            appzillon.app.accountDetail.getAccountMiniStatement(lbodyobj)
        } else {
            if (lbodyobj.getMiniStatementRes.body.errorInfo[0].errorCode == "11015") {
                appzillon.util.displayMessage("UJJ-CUSTOM-32")
            } else {
                if (lbodyobj.getMiniStatementRes.body.errorInfo[0].errorDescription != undefined) {
                    appzillon.util.displayMessage("UJJ-ERROR", lbodyobj.getMiniStatementRes.body.errorInfo[0].errorDescription)
                } else {
                    if (lbodyobj.getMiniStatementRes.body.errorInfo.errorDescription != undefined) {
                        appzillon.util.displayMessage("UJJ-ERROR", lbodyobj.getMiniStatementRes.body.errorInfo.errorDescription)
                    } else {
                        appzillon.util.displayMessage("UJJ-ERROR", "Ministatement services are down")
                    }
                }
            }
            lministmtstatus = false;
            $("#alertID_main_div").removeClass("dispnone");
            $("#fgp_miniStmt_main").addClass("dispnone");
            $("#miniStmtList_main_div").addClass("dispnone")
        }
    } else {
        lministmtstatus = false;
        appzillon.app.common.statusNotSuccess(pstatus, perrorCode);
        $("#alertID_main_div").removeClass("dispnone");
        $("#fgp_miniStmt_main").addClass("dispnone");
        $("#miniStmtList_main_div").addClass("dispnone")
    }
}
;
appzillon.app.accountDetail.callSavAccDetails = function() {
    var json = {};
    appzillon.app.common.setReqHeader("HDD", "getSavingsBankAccountDetailsReq", "94949595513", "CBS");
    json.getSavingsBankAccountDetailsReq = {};
    json.getSavingsBankAccountDetailsReq.reqHdr = appzillon.app.common.getReqHeader();
    json.getSavingsBankAccountDetailsReq.body = {};
    json.getSavingsBankAccountDetailsReq.body.accountNumber = appzillon.plugin.retrieve("accNum");
    var jsonStr = JSON.stringify(json);
    appzillon.app.common.startLoader();
    appzillon.server.callServer("SBAcctInqImpl_Req", "SBAcctInqImpl_Res", "N", jsonStr, "N", "124", true, appzillon.app.accountDetail.savAccDetailsCallBack)
}
;
appzillon.app.accountDetail.savAccDetailsCallBack = function(pcallid, lifaceid, pstatus, perrorCode, lbodyobj) {
    appzillon.app.common.stopLoader();
    if (pstatus == "success") {
        var successStatus = false;
        var lRespStatus = lbodyobj.getSavingsBankAccountDetailsRes.resHdr.responseStatus;
        if (lRespStatus.constructor == Array) {
            for (var i = 0; i < lRespStatus.length; i++) {
                if (lRespStatus[i].status === "0") {
                    successStatus = true;
                    break
                }
            }
        } else {
            if (lRespStatus.constructor == Object) {
                if (lRespStatus.status === "0") {
                    successStatus = true
                }
            }
        }
        if (successStatus) {
            $("#alertID_main_div").addClass("dispnone");
            appzillon.app.accountDetail.loadAccountData(lbodyobj.getSavingsBankAccountDetailsRes.body)
        } else {
            appzillon.util.displayMessage("UJJ-GETBAL-ERROR", "", appzillon.app.AccountDetail_Back());
            appzillon.app.accountDetail.loadAccountData("")
        }
    } else {
        appzillon.util.displayMessage("UJJ-GETBAL-ERROR", "", appzillon.app.AccountDetail_Back());
        appzillon.app.accountDetail.loadAccountData("");
        $("#alertID_main_div").removeClass("dispnone")
    }
}
;
appzillon.app.accountDetail.callODAccDetails = function() {
    var json = {};
    appzillon.app.common.setReqHeader("HDD", "getOverDraftAccountDetailsReq", "94949595513", "CBS");
    json.getOverDraftAccountDetailsReq = {};
    json.getOverDraftAccountDetailsReq.reqHdr = appzillon.app.common.getReqHeader();
    json.getOverDraftAccountDetailsReq.body = {};
    json.getOverDraftAccountDetailsReq.body.accountNumber = appzillon.plugin.retrieve("accNum");
    var jsonStr = JSON.stringify(json);
    appzillon.app.common.startLoader();
    appzillon.server.callServer("GetOverDraftAccountDetails", "GetOverDraftAccountDetails", "N", jsonStr, "N", "124", true, appzillon.app.accountDetail.ODAccDetailsCallBack)
}
;
appzillon.app.accountDetail.ODAccDetailsCallBack = function(pcallid, lifaceid, pstatus, perrorCode, lbodyobj) {
    appzillon.app.common.stopLoader();
    if (pstatus == "success") {
        var successStatus = false;
        var lRespStatus = lbodyobj.getOverDraftAccountDetailsRes.resHdr.responseStatus;
        if (lRespStatus.constructor == Array) {
            for (var i = 0; i < lRespStatus.length; i++) {
                if (lRespStatus[i].status === "0") {
                    successStatus = true;
                    break
                }
            }
        } else {
            if (lRespStatus.constructor == Object) {
                if (lRespStatus.status === "0") {
                    successStatus = true
                }
            }
        }
        if (successStatus) {
            $("#alertID_main_div").addClass("dispnone");
            appzillon.app.accountDetail.loadAccountData(lbodyobj.getOverDraftAccountDetailsRes.body)
        } else {
            appzillon.util.displayMessage("UJJ-GETBAL-ERROR", "", appzillon.app.AccountDetail_Back());
            appzillon.app.accountDetail.loadAccountData("")
        }
    } else {
        appzillon.util.displayMessage("UJJ-GETBAL-ERROR", "", appzillon.app.AccountDetail_Back());
        appzillon.app.accountDetail.loadAccountData("");
        $("#alertID_main_div").removeClass("dispnone")
    }
}
;
appzillon.app.accountDetail.getDate = function(lno) {
    if (appzillon.plugin.retrieve("dateVal") == 1) {
        ldate.fromDate = appzillon.util.formatDate(appzillon.app.common.getDateFormat($("#fromdat" + lno).val(), ""), "dd-MMM-yyyy", "yyyy-MM-ddTHH:mm:ss.sss");
        ldate.toDate = appzillon.util.formatDate(appzillon.app.common.getDateFormat($("#todat" + lno).val(), ""), "dd-MMM-yyyy", "yyyy-MM-ddTHH:mm:ss.sss")
    } else {
        if ($("input[name=transPerid" + lno + "]:checked").val() == 4 || $("input[name=transPerid" + lno + "]:checked").val() == 5) {
            var cfyear, lfromDate, ltodate;
            if (new Date().getMonth() > 2) {
                cfyear = new Date().getFullYear()
            } else {
                cfyear = new Date().getFullYear() - 1
            }
            if ($("input[name=transPerid" + lno + "]:checked").val() == 4) {
                lfromDate = "01-Apr-" + (cfyear - 1);
                ltoDate = "31-Mar-" + cfyear
            } else {
                lfromDate = "01-Apr-" + (cfyear - 2);
                ltoDate = "31-Mar-" + (cfyear - 1)
            }
            ldate.fromDate = appzillon.util.formatDate(lfromDate, "dd-MMM-yyyy", "yyyy-MM-ddTHH:mm:ss.sss");
            ldate.toDate = appzillon.util.formatDate(ltoDate, "dd-MMM-yyyy", "yyyy-MM-ddTHH:mm:ss.sss")
        } else {
            ldate.fromDate = appzillon.util.formatDate(appzillon.app.accountDetail.getAccountStatementView(lno), "dd-MMM-yyyy", "yyyy-MM-ddTHH:mm:ss.sss");
            ldate.toDate = appzillon.util.formatDate(appzillon.app.common.getDateFormat(new Date(), ""), "dd-MMM-yyyy", "yyyy-MM-ddTHH:mm:ss.sss")
        }
    }
}
;
appzillon.app.accountDetail.callGetAccountStatement = function() {
    var json = {};
    appzillon.app.common.setReqHeader("HDD", "GetAccountStmtPagination", "6512312", "CBS");
    json.getAccountStmtPaginationReq = {};
    json.getAccountStmtPaginationReq.reqHdr = appzillon.app.common.getReqHeader();
    json.getAccountStmtPaginationReq.body = {};
    json.getAccountStmtPaginationReq.body.custId = appzillon.plugin.retrieve("USERID");
    json.getAccountStmtPaginationReq.body.accountNumber = appzillon.plugin.retrieve("accNum");
    json.getAccountStmtPaginationReq.body.branchId = appzillon.plugin.retrieve("accNum").slice(0, 4);
    json.getAccountStmtPaginationReq.body.fromDate = ldate.fromDate;
    json.getAccountStmtPaginationReq.body.toDate = ldate.toDate;
    if (shwmre) {
        json.getAccountStmtPaginationReq.body.paginationDetails = {};
        json.getAccountStmtPaginationReq.body.paginationDetails.lastBalance = lastBal;
        json.getAccountStmtPaginationReq.body.paginationDetails.lastPstdDate = lastPstdDt;
        json.getAccountStmtPaginationReq.body.paginationDetails.lastTxnDate = lastTxnDt;
        json.getAccountStmtPaginationReq.body.paginationDetails.lastTxnId = lstTxnId;
        json.getAccountStmtPaginationReq.body.paginationDetails.lastTxnSerialNo = lastSno
    }
    if (ldate.fromDate != "" && ldate.toDate != "") {
        if (ldate.fromDate <= ldate.toDate) {
            var jsonStr = JSON.stringify(json);
            appzillon.app.common.startLoader();
            appzillon.server.callServer("GetAccountStmtPagination", "GetAccountStmtPagination", "N", jsonStr, "Y", "124", true, appzillon.app.accountDetail.callGetAccountStatementCallBack)
        } else {
            appzillon.util.displayMessage("UJJ-ERROR", "From date cannot be greater than To date")
        }
    } else {
        appzillon.util.displayMessage("UJJ-ERROR", "Please select the Date")
    }
}
;
appzillon.app.accountDetail.callGetAccountStatementCallBack = function(pcallid, lifaceid, pstatus, perrorCode, lbodyobj) {
    appzillon.app.common.stopLoader();
    if (pstatus == "success") {
        if (lbodyobj.getAccountStmtPaginationRes.resHdr.responseStatus.status == 0) {
            var ltempObj = [];
            if ($("#transType1").val() != "") {
                for (var i = 0; i < lbodyobj.getAccountStmtPaginationRes.body.transactionDetails.length; i++) {
                    if (lbodyobj.getAccountStmtPaginationRes.body.transactionDetails[i].txnType == $("#transType1").val()) {
                        ltempObj.push(lbodyobj.getAccountStmtPaginationRes.body.transactionDetails[i])
                    }
                }
            } else {
                ltempObj = lbodyobj.getAccountStmtPaginationRes.body.transactionDetails
            }
            var ltransDtls = ltempObj;
            ltransDetails1 = ltempObj;
            var temp = [];
            var ltransDtlslength = ltransDtls.length;
            lastBal = ltransDtls[ltransDtlslength - 1].txnBalance;
            lastPstdDt = ltransDtls[ltransDtlslength - 1].pstdDate;
            lastTxnDt = ltransDtls[ltransDtlslength - 1].txnDate;
            lstTxnId = ltransDtls[ltransDtlslength - 1].txnId;
            lastSno = ltransDtls[ltransDtlslength - 1].txnSerialNo;
            $.each(ltransDtls, function(i, obj) {
                obj.txnAmount = appzillon.app.common.formatNumber(obj.txnAmount);
                obj.txnBalance = appzillon.app.common.formatNumber(obj.txnBalance);
                if (Object.keys(obj).length !== 0) {
                    var trType = obj.txnType;
                    if (trType == "C" || trType == "Cr") {
                        trType = "Cr";
                        obj.txnCrAmt = appzillon.data.lits.UJJ_RUPEE.Description + " " + obj.txnAmount;
                        obj.txnAmount = obj.txnAmount;
                        obj.txnBalance = appzillon.data.lits.UJJ_RUPEE.Description + " " + obj.txnBalance
                    } else {
                        if (trType == "D" || trType == "Dr") {
                            trType = "Dr";
                            obj.txnDrAmt = appzillon.data.lits.UJJ_RUPEE.Description + " " + obj.txnAmount;
                            obj.txnAmount = obj.txnAmount;
                            obj.txnBalance = appzillon.data.lits.UJJ_RUPEE.Description + " " + obj.txnBalance
                        }
                    }
                    var miniStatDate = appzillon.app.common.getDateFormat(obj.txnDate);
                    var miniStatvalDate = appzillon.app.common.getDateFormat(obj.txnDate);
                    obj.txnDate = miniStatDate;
                    obj.valueDate = miniStatvalDate;
                    temp.push(obj)
                }
            });
            if (lbodyobj.getAccountStmtPaginationRes.body.hasMoreData == "Y") {
                $("#showmore_main_div").removeClass("dispnone")
            } else {
                $("#showmore_main_div").addClass("dispnone")
            }
            if (shwmre) {
                var appendDtls = ltransDetails2.concat(temp);
                appzillon.data.scrdata.transactionDetails = appendDtls;
                appzillon.data.scrdata.transactionDetailsmob = appendDtls;
                appzillon.data.loadData();
                guiutils.readjustHeight();
                appzillon.app.accountDetail.displayPagination()
            } else {
                appzillon.data.scrdata.transactionDetails = {};
                appzillon.data.scrdata.transactionDetails = ltransDetails1;
                appzillon.data.scrdata.transactionDetailsmob = {};
                appzillon.data.scrdata.transactionDetailsmob = ltransDetails1;
                appzillon.data.loadData();
                guiutils.readjustHeight();
                $("#container_list_5_list_title_div").addClass("dispnone");
                appzillon.app.accountDetail.displayPagination()
            }
            shwmre = false
        } else {
            if (lbodyobj.getAccountStmtPaginationRes.body.errorInfo[0] != undefined) {
                $("#fgp_downloadStmt_main").addClass("dispnone");
                $("#accntStmt_main_div").addClass("dispnone");
                $("#fgp_accountDetail_main").addClass("dispnone");
                $("#accountgrid_main_div,#fgp_accountDetail_main").removeClass("dispnone");
                appzillon.util.displayMessage("UJJ-ERROR", "No Records available for the given selection");
                loanBalAmt = "";
                $("#showmore_main_div").addClass("dispnone")
            } else {
                if (lbodyobj.getAccountStmtPaginationRes.body.errorInfo != undefined) {
                    $("#fgp_accountDetail_main").addClass("dispnone");
                    $("#fgp_downloadStmt_main").addClass("dispnone");
                    $("#accntStmt_main_div").addClass("dispnone");
                    $("#accountgrid_main_div,#fgp_accountDetail_main").removeClass("dispnone");
                    appzillon.util.displayMessage("UJJ-ERROR", "No Records available for the given selection");
                    loanBalAmt = "";
                    $("#showmore_main_div").addClass("dispnone")
                }
            }
        }
    } else {
        $("#fgp_downloadStmt_main").addClass("dispnone");
        $("#accntStmt_main_div").addClass("dispnone");
        appzillon.app.common.statusNotSuccess(pstatus, perrorCode)
    }
}
;
appzillon.app.accountDetail.callCurrAccDetails = function() {
    var json = {};
    appzillon.app.common.setReqHeader("HDD", "getCurrentAccountDetailsReq", "6544564512312", "CBS");
    json.getCurrentAccountDetailsReq = {};
    json.getCurrentAccountDetailsReq.reqHdr = appzillon.app.common.getReqHeader();
    json.getCurrentAccountDetailsReq.body = {};
    json.getCurrentAccountDetailsReq.body.accountNumber = appzillon.plugin.retrieve("accNum");
    var jsonStr = JSON.stringify(json);
    appzillon.app.common.startLoader();
    appzillon.server.callServer("CAAcctInqImpl_Req", "CAAcctInqImpl_Res", "N", jsonStr, "N", "124", true, appzillon.app.accountDetail.currAccDetailsCallBack)
}
;
appzillon.app.accountDetail.currAccDetailsCallBack = function(pcallid, lifaceid, pstatus, perrorCode, lbodyobj) {
    appzillon.app.common.stopLoader();
    if (pstatus == "success") {
        var successStatus = false;
        var lRespStatus = lbodyobj.getCurrentAccountDetailsRes.resHdr.responseStatus;
        if (lRespStatus.constructor == Array) {
            for (var i = 0; i < lRespStatus.length; i++) {
                if (lRespStatus[i].status === "0") {
                    successStatus = true;
                    break
                }
            }
        } else {
            if (lRespStatus.constructor == Object) {
                if (lRespStatus.status === "0") {
                    successStatus = true
                }
            }
        }
        if (successStatus) {
            $("#alertID_main_div").addClass("dispnone");
            appzillon.app.accountDetail.loadAccountData(lbodyobj.getCurrentAccountDetailsRes.body)
        } else {
            $("#alertID_main_div").removeClass("dispnone");
            appzillon.app.accountDetail.loadAccountData("");
            appzillon.util.displayMessage("UJJ - GETBAL - ERROR", "", appzillon.app.AccountDetail_Back())
        }
    } else {
        $("#alertID_main_div").removeClass("dispnone");
        appzillon.app.accountDetail.loadAccountData("");
        appzillon.util.displayMessage("UJJ-GETBAL-ERROR", "", appzillon.app.AccountDetail_Back())
    }
}
;
appzillon.app.accountDetail.onDownloadStmt = function(ltype) {
    var json = {};
    json.getAccountStatementRequest = {};
    json.getAccountStatementRequest.custId = appzillon.plugin.retrieve("USERID");
    json.getAccountStatementRequest.accountNo = appzillon.plugin.retrieve("accNum");
    json.getAccountStatementRequest.fromDate = appzillon.util.formatDate(ldate.fromDate, "yyyy-MM-ddTHH:mm:ss.sss", "dd/MM/yyyy");
    json.getAccountStatementRequest.toDate = appzillon.util.formatDate(ldate.toDate, "yyyy-MM-ddTHH:mm:ss.sss", "dd/MM/yyyy");
    json.getAccountStatementRequest.branchId = appzillon.plugin.retrieve("accNum").slice(0, 4);
    json.getAccountStatementRequest.accountType = appzillon.app.common.getschemeNameType(appzillon.plugin.retrieve("acctype"));
    json.getAccountStatementRequest.odLimit = "";
    json.getAccountStatementRequest.cifId = ujjivan.corpId;
    json.getAccountStatementRequest.downloadType = ltype;
    json.getAccountStatementRequest.transactionType = $("#transType1").val();
    var jsonStr = JSON.stringify(json);
    console.log('jsonStr: ', jsonStr);
    $("#accountBalance").html("");
    appzillon.app.common.startLoader();
    let _postData = {
      jsonStr:json
    }
    window.postMessage({ actionType: 'ujjivancorDownloadParams', data: _postData }, '*');
    appzillon.server.callServer("DynamicAccountStatementImpl", "DynamicAccountStatementImpl", "N", jsonStr, "N", ltype, true, appzillon.app.onDownloadStmtCB)
}
;
appzillon.app.onDownloadStmtCB = function(pcallid, lifaceid, pstatus, perrorCode, lbodyobj) {
    appzillon.app.common.stopLoader();
    var isChrome = !!window.chrome && !!window.chrome.webstore;
    if (pstatus == "success" && lbodyobj.status == "success") {
        var lapplType = "";
        var ldocName = lbodyobj.fileName;
        var ldocExtn = "";
        switch (pcallid) {
        case "PDF":
            lapplType = "application/pdf";
            ldocExtn = ".pdf";
            break;
        case "EXCEL":
            lapplType = "application/vnd.ms-excel";
            ldocExtn = ".xls";
            break;
        case "CSV":
            lapplType = "application/plain";
            ldocExtn = ".csv";
            break;
        case "EMAIL":
            appzillon.util.displayMessage("UJJ-INFO", "E-statement sent to Email ID registered with the account");
            return
        }
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            var byteCharacters = atob(lbodyobj.file);
            var byteNumbers = new Array(byteCharacters.length);
            for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i)
            }
            var byteArray = new Uint8Array(byteNumbers);
            var blob = new Blob([byteArray],{
                type: lapplType
            });
            window.navigator.msSaveOrOpenBlob(blob, ldocName)
        } else {
            var lpdf = lbodyobj.file;
            try {
                var blob = appzillon.app.common.base64toBlob(lpdf, lapplType);
                var blobUrl = URL.createObjectURL(blob);
                var downloadLink = document.createElement("a");
                downloadLink.href = blobUrl;
                downloadLink.download = ldocName;
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink)
            } catch (e) {
                if (isChrome) {
                    try {
                        var uri = "data:" + lapplType + ";base64,";
                        var link = document.createElement("a");
                        link.download = ldocName;
                        link.href = uri + lpdf;
                        link.click();
                        document.body.removeChild(link)
                    } catch (e) {
                        appzillon.util.displayMessage("UJJ-ERR-REPBROWSE")
                    }
                } else {
                    appzillon.util.displayMessage("UJJ-ERR-REPBROWSE")
                }
            }
        }
    } else {
        if (pstatus == "success" && lbodyobj.status == "failure") {
            appzillon.util.displayMessage("UJJ-ERROR", lbodyobj.error)
        } else {
            if (pcallid == "EMAIL") {
                appzillon.util.displayMessage("UJJ-ERROR", "Failed to send Email, Please try after sometime.")
            } else {
                appzillon.util.displayMessage("UJJ-ERROR", "Report could not be generated, Please try after sometime.")
            }
        }
    }
}
;
appzillon.app.accountDetail.callGetSearchTransaction = function() {
    appzillon.app.accountDetail.getDate("2");
    appzillon.app.common.stopLoader();
    if (ldate.fromDate != "" && ldate.toDate != "") {
        if (ldate.fromDate <= ldate.toDate) {
            var json = {};
            appzillon.app.common.setReqHeader("HDD", "fdAdvice", "6512312", "CBS");
            json.searchTrnDetailsReq = {};
            json.searchTrnDetailsReq.reqHdr = appzillon.app.common.getReqHeader();
            json.searchTrnDetailsReq.body = {};
            json.searchTrnDetailsReq.body.custId = appzillon.plugin.retrieve("USERID");
            json.searchTrnDetailsReq.body.acctNumber = appzillon.plugin.retrieve("accNum");
            json.searchTrnDetailsReq.body.branchId = appzillon.plugin.retrieve("accNum").slice(0, 4);
            json.searchTrnDetailsReq.body.fromDate = appzillon.util.formatDate(ldate.fromDate, "yyyy-MM-ddTHH:mm:ss.sss", "dd-MM-yy");
            json.searchTrnDetailsReq.body.toDate = appzillon.util.formatDate(ldate.toDate, "yyyy-MM-ddTHH:mm:ss.sss", "dd-MM-yy");
            json.searchTrnDetailsReq.body.trnType = $("#transType2").val();
            json.searchTrnDetailsReq.body.minAmt = $("#minAmt").val();
            json.searchTrnDetailsReq.body.maxAmt = $("#maxAmt").val();
            json.searchTrnDetailsReq.body.chequeNumber = $("#chequenumber").val();
            json.searchTrnDetailsReq.body.benificiaryAcctNumber = $("#benificiaryAcctNumber").val();
            json.searchTrnDetailsReq.body.paymentMethod = $("#paymentMethod").val();
            json.searchTrnDetailsReq.body.utrNumber = $("#utrNumber").val();
            json.searchTrnDetailsReq.body.rrnNumber = $("#rrnNumber").val();
            var jsonStr = JSON.stringify(json);
            appzillon.app.common.startLoader();
            appzillon.server.callServer("searchTransactionDetails", "searchTransactionDetails", "N", jsonStr, "Y", "124", true, appzillon.app.accountDetail.callGetSearchTransactionCallBack)
        } else {
            appzillon.util.displayMessage("UJJ-ERROR", "From date cannot be greater than To date")
        }
    } else {
        appzillon.util.displayMessage("UJJ-ERROR", "Please select the Date")
    }
}
;
appzillon.app.accountDetail.callGetSearchTransactionCallBack = function(pcallid, lifaceid, pstatus, perrorCode, lbodyobj) {
    ;appzillon.app.common.stopLoader();
    if (pstatus == "success") {
        if (!appzillon.util.isNull(lbodyobj)) {
            if (!appzillon.util.isNull(lbodyobj.searchTrnDetailsRes)) {
                if (!appzillon.util.isNull(lbodyobj.searchTrnDetailsRes.resHdr)) {
                    if (!appzillon.util.isNull(lbodyobj.searchTrnDetailsRes.resHdr.responseStatus)) {
                        if (!appzillon.util.isNull(lbodyobj.searchTrnDetailsRes.resHdr.responseStatus.errorDescription)) {
                            appzillon.util.displayMessage("UJJ-ERROR", lbodyobj.searchTrnDetailsRes.resHdr.responseStatus.errorDescription)
                        } else {
                            if (lbodyobj.searchTrnDetailsRes.resHdr.responseStatus.status == 0) {
                                if (lbodyobj.searchTrnDetailsRes.body == undefined) {
                                    $("#alertID_main_div").removeClass("dispnone");
                                    $("#fgp_downloadStmt_main").addClass("dispnone");
                                    $("#accntStmt_main_div").addClass("dispnone");
                                    $("#fgp_accountDetail_main").addClass("dispnone");
                                    $("#accountgrid_main_div,#fgp_accountDetail_main").removeClass("dispnone");
                                    appzillon.util.displayMessage("UJJ-ERROR", "No record found for the selected filters")
                                } else {
                                    var ltempObj = [];
                                    if ($("#transType1").val() != "") {
                                        for (var i = 0; i < lbodyobj.searchTrnDetailsRes.body.trnDtls.length; i++) {
                                            if (lbodyobj.searchTrnDetailsRes.body.trnDtls[i].txnType == $("#transType1").val()) {
                                                ltempObj.push(lbodyobj.searchTrnDetailsRes.body.trnDtls[i])
                                            }
                                        }
                                    } else {
                                        ltempObj = lbodyobj.searchTrnDetailsRes.body.trnDtls
                                    }
                                    var ltransDtls = ltempObj;
                                    var temp = [];
                                    $.each(ltransDtls, function(i, obj) {
                                        obj.txnAmount = appzillon.app.common.formatNumber(obj.trnAmt);
                                        obj.txnBalance = appzillon.data.lits.UJJ_RUPEE.Description + " " + appzillon.app.common.formatNumber(obj.balanceAmt);
                                        obj.txnDescription = obj.trnDescription;
                                        obj.txnType = obj.trnSubType;
                                        obj.txnId = obj.trnId;
                                        obj.txnSerialNo = obj.serialNumber;
                                        obj.txnDate = appzillon.util.formatDate(obj.trnDt, "d-M-yyyy", "dd MMMM yyyy");
                                        obj.pstdDate = appzillon.util.formatDate(obj.postedDt, "d-M-yyyy", "dd MMMM yyyy");
                                        obj.valueDate = appzillon.util.formatDate(obj.valueDate, "d-M-yyyy", "dd MMMM yyyy");
                                        obj.txnCat = obj.channelId;
                                        if (Object.keys(obj).length !== 0) {
                                            temp.push(obj)
                                        }
                                    });
                                    appzillon.data.scrdata.transactionDetails = {};
                                    appzillon.data.scrdata.transactionDetails = temp;
                                    appzillon.data.scrdata.transactionDetailsmob = {};
                                    appzillon.data.scrdata.transactionDetailsmob = temp;
                                    appzillon.data.loadData();
                                    $("#alertID_main_div").addClass("dispnone");
                                    $("#accntStmt_main_div").removeClass("dispnone");
                                    $("#accountgrid_main_div,#fgp_accountDetail_main").addClass("dispnone");
                                    $("#container_list_5_list_title_div").addClass("dispnone");
                                    $("#downldIconCol_sec_col_div,#emailLinkIcon_sec_col_div").addClass("dispnone");
                                    $("#fgp_downloadStmt_main").removeClass("dispnone");
                                    appzillon.app.accountDetail.displayPagination();
                                    guiutils.readjustHeight()
                                }
                                guiutils.readjustHeight()
                            }
                        }
                    }
                }
            }
            if (lbodyobj.searchTrnDetailsRes.body.errorInfo[0] != undefined) {
                $("#alertID_main_div").removeClass("dispnone");
                $("#fgp_downloadStmt_main").addClass("dispnone");
                $("#accntStmt_main_div").addClass("dispnone");
                $("#fgp_accountDetail_main").addClass("dispnone");
                $("#accountgrid_main_div,#fgp_accountDetail_main").removeClass("dispnone");
                appzillon.util.displayMessage("UJJ-ERROR", lbodyobj.searchTrnDetailsRes.body.errorInfo[0].errorDescription);
                loanBalAmt = ""
            } else {
                if (lbodyobj.searchTrnDetailsRes.body.errorInfo != undefined) {
                    $("#alertID_main_div").removeClass("dispnone");
                    $("#fgp_accountDetail_main").addClass("dispnone");
                    $("#fgp_downloadStmt_main").addClass("dispnone");
                    $("#accntStmt_main_div").addClass("dispnone");
                    $("#accountgrid_main_div,#fgp_accountDetail_main").removeClass("dispnone");
                    appzillon.util.displayMessage("UJJ-ERROR", lbodyobj.searchTrnDetailsRes.body.errorInfo.errorDescription);
                    loanBalAmt = ""
                }
            }
        }
    } else {
        $("#alertID_main_div").removeClass("dispnone");
        $("#fgp_downloadStmt_main").addClass("dispnone");
        $("#accntStmt_main_div").addClass("dispnone");
        appzillon.app.common.statusNotSuccess(pstatus, perrorCode)
    }
    guiutils.readjustHeight()
}
;
appzillon.app.fromAccSelect.shownCB = function() {
    appzillon.app.fromAccSelect.displayFromAccount("Choose Account")
}
;
appzillon.app.accountDetail.onSearchAcctSelect = function(prowNo, paccList) {
    appzillon.app.accountDetail.loadResponseValue(prowNo, paccList)
}
;
appzillon.app.accountDetail.loadResponseValue = function(prowNo, paccList) {
    appzillon.plugin.store("acctype", appzillon.app.common.getschemeName(paccList.SchmType));
    appzillon.plugin.store("accNum", paccList.accNum);
    var larrNum = appzillon.app.common.getArrNumFromAcc(paccList.accNum);
    appzillon.plugin.store("rowNo", larrNum);
    appzillon.app.common.NavigateSubScreen("AccountDetail", "backward")
}
;
appzillon.app.accountDetail.displaySearchAccount = function() {
    $("#search_acc_num").val("");
    var ltemp = appzillon.app.common.filterAccount(appzillon.app.common.fetchAccountList(appzillon.app.globals.allAccountList), ["SBA", "CAA", "ODA"]);
    if (ltemp.length > 0) {
        for (var i = 0; i < ltemp.length; i++) {
            ltemp[i].schemeType = appzillon.app.common.getschemeType(ltemp[i].schemeType);
            ltemp[i].balanceAmt = appzillon.app.common.formatNumber(ltemp[i].balanceAmt)
        }
        appzillon.data.scrdata.searchAcctDetails = ltemp
    } else {
        appzillon.data.scrdata.searchAcctDetails = ""
    }
    appzillon.data.loadData("SearchAccountList");
    toggleModal("search_account_main_div")
}
;
appzillon.app.accountDetail.searchListClick = function(pthis) {
    appzillon.app.common.startLoader();
    $("#from_acc_row_main_div").addClass("dispnone");
    var lacctObj = {};
    var lrowNo = $("#" + pthis.id).attr("rowno");
    toggleModal("search_account_main_div");
    lacctObj.SchmType = $("#searchAcctDetails__schemeType_" + lrowNo).text();
    lacctObj.accNum = $("#searchAcctDetails__accountNumber_" + lrowNo).text();
    lacctObj.balAmt = $("#searchAcctDetails__balanceAmt_" + lrowNo).text();
    lacctObj.branch = "";
    appzillon.app.accountDetail.onSearchAcctSelect(lrowNo, lacctObj)
}
;
$("#dateRowDiv_sec_row_div").click(function(e) {
    appzillon.app.accountDetail.resetButton("1")
});
$("#dateRowDiv2_sec_row_div").click(function(e) {
    appzillon.app.accountDetail.resetButton("1")
});
appzillon.app.accountDetail.resetButton = function(pthis) {
    appzillon.plugin.store("dateVal", pthis);
    if (pthis == "1") {
        $("input[name=transPerid2]:checked").attr("checked", false);
        $("input[name=transPerid1]:checked").attr("checked", false);
        $(".checked").removeClass("checked");
        guiutils.uniformLaf()
    } else {
        $("#fromdat2").val("");
        $("#fromdat1").val("");
        $("#todat1").val("");
        $("#todat2").val("")
    }
}
;
appzillon.app.accountDetail.searchAccount = function() {
    var lresult = [];
    var gCreditAccountList = appzillon.app.common.filterAccount(appzillon.app.common.fetchAccountList(appzillon.app.globals.allAccountList), ["SBA", "CAA", "ODA"]);
    var laccNum = $("#search_acc_num").val().trim();
    if (appzillon.util.isNull(laccNum)) {
        if (gCreditAccountList.length > 0) {
            for (var i = 0; i < gCreditAccountList.length; i++) {
                gCreditAccountList[i].schemeType = appzillon.app.common.getschemeType(gCreditAccountList[i].schemeType);
                gCreditAccountList[i].balanceAmt = appzillon.app.common.formatNumber(gCreditAccountList[i].balanceAmt)
            }
            appzillon.data.scrdata.searchAcctDetails = "";
            appzillon.data.scrdata.searchAcctDetails = gCreditAccountList
        }
    } else {
        lresult = gCreditAccountList.filter(function(ele) {
            if (ele.accountNumber.indexOf(laccNum) >= 0) {
                return ele
            } else {
                return ""
            }
        });
        if (lresult.length > 0) {
            for (var i = 0; i < lresult.length; i++) {
                lresult[i].schemeType = appzillon.app.common.getschemeType(lresult[i].schemeType);
                lresult[i].balanceAmt = appzillon.app.common.formatNumber(lresult[i].balanceAmt)
            }
            appzillon.data.scrdata.searchAcctDetails = "";
            appzillon.data.scrdata.searchAcctDetails = lresult
        } else {
            appzillon.data.scrdata.searchAcctDetails = ""
        }
    }
    appzillon.data.loadData("SearchAccountList")
}
;
$(".datefieldedit").keypress(function() {
    return false
});
appzillon.app.accountDetail.transactionDetailsUI = function() {
    var listCount = document.getElementById("fgp_container_list_5_ul").children.length;
    for (var i = 0; i < listCount; i++) {
        if ($("#transactionDetails__txnType_" + i).text() == "C") {
            $("#transactionDetails__txnType_" + i).text("Cr");
            $("#transactionDetails__txnType_" + i).removeClass("debit");
            $("#transactionDetails__txnType_" + i).addClass("credit")
        } else {
            if ($("#transactionDetails__txnType_" + i).text() == "D") {
                $("#transactionDetails__txnType_" + i).text("Dr");
                $("#transactionDetails__txnType_" + i).removeClass("credit");
                $("#transactionDetails__txnType_" + i).addClass("debit")
            }
        }
    }
}
;
appzillon.app.accountDetail.tranSummaryUI = function() {
    ;var listCount = document.getElementById("fgp_container_list_5_ul").children.length;
    for (var i = 0; i < listCount; i++) {
        if ($("#tranSummary__transType_" + i).text() == "C") {
            $("#tranSummary__transType_" + i).text("Cr");
            $("#tranSummary__transType_" + i).removeClass("debit");
            $("#tranSummary__transType_" + i).addClass("credit")
        } else {
            if ($("#tranSummary__transType_" + i).text() == "D") {
                $("#tranSummary__transType_" + i).text("Dr");
                $("#tranSummary__transType_" + i).removeClass("credit");
                $("#tranSummary__transType_" + i).addClass("debit")
            }
        }
    }
}
;
