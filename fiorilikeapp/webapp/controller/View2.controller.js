sap.ui.define(
  [
    "com/emc/fin/ap/controller/BaseController",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
  ],
  function (BaseController, MessageBox, MessageToast) {
    "use strict";
    return BaseController.extend("com.emc.fin.ap.controller.View2", {
      onInit: function () {},
      onBack: function () {
        this.getView().getParent().to("idView1");
      },
      onBeforeRendering(){
        this.setMode("stop");
      },
      onSave: function () {
        var oResourceModel = this.getView().getModel("i18n");
        var oBundle = oResourceModel.getResourceBundle();
        var msgSuccess = oBundle.getText("msgSuccess", ["858585"]);
        var msgError = oBundle.getText("msgError");

        MessageBox.confirm("Do you want to save?", {
          title: "Confirmation",
          onClose: function (status) {
            if (status === "OK") {
              MessageToast.show(msgSuccess);
            } else {
              MessageBox.error(msgError);
            }
          },
        });
      },
      onCityPress: function (oEvent) {
        this.setMode("stop1");
        this.getView().byId("idPin").setEnabled(true);
        // this.getView().byId("idSave").setMode("stop");
        // this.getView().byId("idCancel").setMode("stop");
      },
      onPinCodepress: function () {
        this.setMode("stop2");
        this.getView().byId("idPlant").setEnabled(true);
        this.getView().byId("idPin").setEnabled(true);
        
      },
      onPlant: function () {
        this.setMode("Progress");
      },
      onProg: function () {
        this.setMode("Progress");
        this.getView().byId("idTable1").setShowOverlay(false).setVisible(true);
      },
      onCancel: function () {
        this.setMode("stop");
      },
      // onSave: function () {
      //   this.setMode("stop");
      // },

      mode: "Progress",
      mode: "stop",
      mode: "stop1",
      mode: "stop2",

      setMode: function (sMode) {
        this.mode = sMode;
        if (this.mode === "Progress") {
          this.getView().byId("idBtn").setEnabled(true);
          this.getView().byId("idSave").setEnabled(true);
          this.getView().byId("idCancel").setEnabled(true);
        } else {
          this.getView().byId("idBtn").setEnabled(false);
          this.getView().byId("idSave").setEnabled(false);
          this.getView().byId("idCancel").setEnabled(false);
          this.getView().byId("idPin").setEnabled(false);
          this.getView().byId("idPlant").setEnabled(false);
          this.getView()
            .byId("idTable1")
            .setShowOverlay(true)
            .setVisible(false);
        }
      },

      //   onCittyPress: function (oEvent) {
      //     debugger;
      //   },
    });
  }
);
