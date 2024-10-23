import Color from "./Color";
import { RFValue } from "react-native-responsive-fontsize";

export default {
  CONTAINER: {
    backgroundColor: Color.BLACK_COLOR,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  SPLASH_LOGO: { height: 250, width: 250 },
  SPLASH_TEXT: {
    color: Color.WHITE_COLOR,
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  ONBOARDSCREEN_TEXT0: {
    color: Color.BLACK_COLOR,
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  ONBOARDSCREEN_TEXT1: {
    color: Color.BLACK_COLOR,
    fontSize: 18,
    fontWeight: "600",
  },
  ONBOARDSCREEN_TEXT4: {
    color: Color.WHITE_COLOR,
    fontSize: RFValue(15),
    marginTop:RFValue(18),
    backgroundColor: Color.BLACK_COLOR,
    width: "100%",
    height: RFValue(45),
    paddingLeft:RFValue(10),
    borderWidth: 1,
    borderColor: Color.WHITE_COLOR,
  },
  ONBOARDSCREEN_TEXT5: {
    color: Color.WHITE_COLOR,
    fontSize: RFValue(15),
    marginTop:RFValue(37),  
    backgroundColor: Color.BLACK_COLOR,
    width: "70%",
    height: RFValue(40),
    paddingLeft:RFValue(8),
    borderWidth: 1,
    borderColor: Color.WHITE_COLOR,
  },

  ONBOARDSCREEN_TEXTFIELD1: {
    backgroundColor: Color.BUTTON_COLOR,
    width: "85%",
    height: 45,
    marginTop: 40,
    marginHorizontal: 20,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  ONBOARDSCREEN_TEXTFIELD2: {
    backgroundColor: Color.WHITE_COLOR,
    width: "85%",
    height: 45,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  ONBOARDSCREEN_TEXTFIELD3: {
    backgroundColor: Color.BUTTON_COLOR,
    width: "100%",
    marginHorizontal: 0,
    height: 45,
    marginTop: 20,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  ONBOARDSCREEN_TEXTFIELD4: {
    backgroundColor: Color.BLACK_COLOR,
    width: "100%",
    height: 40,
    marginTop: 22,
    borderRadius: 3,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: Color.WHITE_COLOR,
  },
  ONBOARDSCREEN_TEXTFIELD5: {
    backgroundColor: Color.BUTTON_COLOR,
    width: "23%",
    height: 45,
    marginHorizontal: 20,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  modal_back_img: {
    height: RFValue(18),
    width: RFValue(18),
    alignSelf: "flex-start",
  },
  modal_back_img1: {
    height: RFValue(30),
    width: RFValue(30),
    alignSelf: "flex-start",
  },
  modalText: {
    fontSize: RFValue(18),
    fontWeight: "500",
    marginTop: RFValue(15),
    color: Color.WHITE_COLOR,
    textAlign: "center",
  },
  modalText1: {
    fontSize: RFValue(15),
    marginTop: RFValue(8),
    textAlign: "center",
    color: Color.WHITE_COLOR,
  },
  Number_TextField:{
    flexDirection:'row',
    gap : 2,

  },
  commom_container:{ flex: 1, backgroundColor: Color.BLACK_COLOR },
  first_view:{
    backgroundColor: Color.WHITE_COLOR,
    flex: 1.8 / 3,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  second_view:{
    backgroundColor: Color.BLACK_COLOR,
    flex: 1.2 / 3,
    alignItems: "center",
  },
  num_btn_view:{ flexDirection: "row", paddingTop: RFValue(25) },
  num_btn_in_view:{
    width: "20%",
    height: RFValue(45),
    backgroundColor: Color.GREY_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  code_txt:{
    color: Color.BLACK_COLOR,
    fontSize: RFValue(15),
    fontWeight: "600",
  },
  phnnum_input:{
    width: "58%",
    height: RFValue(45),
    borderColor: Color.GREY_COLOR,
    borderWidth: 0.5,
    color: Color.WHITE_COLOR,
    justifyContent: "center",
    alignItems: "center",
    fontSize: RFValue(15),
    fontWeight: "400",
    paddingLeft: RFValue(10),
    borderWidth: 1,
    borderColor: Color.WHITE_COLOR,
  },
  sent_btn:{
    width: "20%",
    height: RFValue(45),
    backgroundColor: Color.BUTTON_COLOR,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  send_txt:{
    color: Color.BLACK_COLOR,
    fontSize: RFValue(15),
    fontWeight: "600",
  },
  error_txt:{ color: "red", fontSize: RFValue(15) },
  profile_view:{
    height: RFValue(120),
    width: "100%",
    backgroundColor: Color.BLACK_COLOR,
    flexDirection: "row",
    alignItems: "center",
    gap: RFValue(20),
  },
profile_img:{
  height: RFValue(90),
  width: RFValue(90),
  borderRadius: RFValue(50),
  borderColor: Color.WHITE_COLOR,
  borderWidth: RFValue(2),
},
upload_btn:{
  borderWidth: RFValue(1),
  borderColor: Color.GREY_COLOR,
  width: RFValue(100),
  height: RFValue(25),
  justifyContent: "center",
  alignItems: "center",
},
upload_btn_txt:{ color: Color.WHITE_COLOR },
modalView: {
  marginTop: 100,
  backgroundColor: "black",
  borderRadius: 20,
  padding: 35,
  width: "auto",
  height: 710,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2,
},
buttonOpen: {
  backgroundColor: "#F194FF",
},
buttonClose: {
  backgroundColor: "#2196F3",
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
},
};
