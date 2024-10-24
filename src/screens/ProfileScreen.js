import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Style from "../common/Style";
import Color from "../common/Color";
import { RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from "react-native";

const ProfileScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: Color.WHITE_COLOR }}>
      <View
        style={{ margin: RFValue(15), flexDirection: "row", gap: RFValue(15) }}
      >
        <View>
          <Image
            source={require("../images/user.png")}
            style={[Style.profile_img1, { tintColor: Color.BLACK_COLOR }]}
          />
        </View>
        <View style={{ gap: RFValue(3), justifyContent: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: RFValue(20), fontWeight: "600" }}>
              Ayush Chaudhary
            </Text>
            <Image
              source={require("../images/rightarrow.png")}
              style={{ height: RFValue(30), width: RFValue(30) }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: RFValue(14),
                fontWeight: "500",
                color: Color.TEXT_COLOR_PRODUCT,
              }}
            >
              ayushchaudhary0303@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: RFValue(20),
          marginHorizontal: RFValue(15),
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: Color.LIGHT_GREY,
            height: RFValue(110),
            width: RFValue(150),
            justifyContent: "center",
            gap: RFValue(10),
          }}
        >
          <View style={{ gap: RFValue(7),paddingLeft:RFValue(10) }}>
            <Text style={{ fontSize: RFValue(18), fontWeight: "600" }}>
              Selling : 12
            </Text>
            <Text style={{ fontSize: RFValue(18), fontWeight: "600" }}>
              Sold     :  6
            </Text>
          </View>
          <View style={{flexDirection:"row", gap:RFValue(10),paddingLeft:RFValue(10)}}>
            <Text style={{ fontSize: RFValue(18), fontWeight: "500",color:Color.TEXT_COLOR_PRODUCT }}>On Sale</Text>
            <Image
              style={Style.modal_back_img2}
              resizeMode="contain"
              source={require("../images/rightarrow.png")}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: Color.LIGHT_GREY,
            height: RFValue(110),
            width: RFValue(150),
            justifyContent: "center",
            gap: RFValue(10),
          }}
        >
          <View style={{ gap: RFValue(7),paddingLeft:RFValue(10) }}>
            <Text style={{ fontSize: RFValue(18), fontWeight: "600" }}>
              Winning :  2
            </Text>
            <Text style={{ fontSize: RFValue(18), fontWeight: "600" }}>
              Outbid    :  6
            </Text>
          </View>
          <View style={{flexDirection:"row", gap:RFValue(10),paddingLeft:RFValue(10)}}>
            <Text style={{ fontSize: RFValue(18), fontWeight: "500",color:Color.TEXT_COLOR_PRODUCT }}>On Target</Text>
            <Image
              style={Style.modal_back_img2}
              resizeMode="contain"
              source={require("../images/rightarrow.png")}
            />
          </View>
        </View>
        
      </View>
      <View style={{margin:RFValue(15)}}>
        <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between",borderColor:Color.BLACK_COLOR,borderBottomWidth:RFValue(1),borderTopWidth:RFValue(1),paddingVertical:RFValue(12)}}>
          <View style={{gap:RFValue(5)}}>
            <Text style={{fontSize:RFValue(17),fontWeight:"600", color:Color.BLACK_COLOR}}>Buying</Text>
            <Text style={{fontSize:RFValue(15),fontWeight:"500", color:Color.TEXT_COLOR_PRODUCT
            }}>Active Bids,In Progress,Orders</Text>
          </View>
          <View>
          <Image
              source={require("../images/rightarrow.png")}
              style={{ height: RFValue(30), width: RFValue(30) }}
            />

          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between",borderColor:Color.BLACK_COLOR,borderBottomWidth:RFValue(1),paddingVertical:RFValue(12)}}>
          <View style={{gap:RFValue(5)}}>
            <Text style={{fontSize:RFValue(17),fontWeight:"600", color:Color.BLACK_COLOR}}>Selling</Text>
            <Text style={{fontSize:RFValue(15),fontWeight:"500", color:Color.TEXT_COLOR_PRODUCT
            }}>Active Asks,Sales,History</Text>
          </View>
          <View>
          <Image
              source={require("../images/rightarrow.png")}
              style={{ height: RFValue(30), width: RFValue(30) }}
            />

          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between",borderColor:Color.BLACK_COLOR,borderBottomWidth:RFValue(1),paddingVertical:RFValue(12)}}>
          <View style={{gap:RFValue(5)}}>
            <Text style={{fontSize:RFValue(17),fontWeight:"600", color:Color.BLACK_COLOR}}>Following</Text>
            <Text style={{fontSize:RFValue(15),fontWeight:"500", color:Color.TEXT_COLOR_PRODUCT
            }}>Product you’re watching</Text>
          </View>
          <View>
          <Image
              source={require("../images/rightarrow.png")}
              style={{ height: RFValue(30), width: RFValue(30) }}
            />

          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between",borderColor:Color.BLACK_COLOR,borderBottomWidth:RFValue(1),paddingVertical:RFValue(12)}}>
          <View style={{gap:RFValue(5)}}>
            <Text style={{fontSize:RFValue(17),fontWeight:"600", color:Color.BLACK_COLOR}}>Address</Text>
            <Text style={{fontSize:RFValue(15),fontWeight:"500", color:Color.TEXT_COLOR_PRODUCT
            }}>Billing address,Shipping address</Text>
          </View>
          <View>
          <Image
              source={require("../images/rightarrow.png")}
              style={{ height: RFValue(30), width: RFValue(30) }}
            />

          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between",borderColor:Color.BLACK_COLOR,borderBottomWidth:RFValue(1),paddingVertical:RFValue(12)}}>
          <View style={{gap:RFValue(5)}}>
            <Text style={{fontSize:RFValue(17),fontWeight:"600", color:Color.BLACK_COLOR}}>Payout method</Text>
            <Text style={{fontSize:RFValue(15),fontWeight:"500", color:Color.TEXT_COLOR_PRODUCT
            }}>Payout Account details</Text>
          </View>
          <View>
          <Image
              source={require("../images/rightarrow.png")}
              style={{ height: RFValue(30), width: RFValue(30) }}
            />

          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
