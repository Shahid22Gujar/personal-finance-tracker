import { createSlice } from "@reduxjs/toolkit";

let profileConfig = localStorage.getItem('finance_profile_config')
let initialState = {
  name: '',
  email: '',
  currency: '',
  notifications:false
}
if (profileConfig){
    profileConfig = JSON.parse(profileConfig)
    initialState['name']=profileConfig.name
    initialState['email']=profileConfig.email
    initialState['currency']=profileConfig.currency
    initialState['notifications']=profileConfig.notifications
}
;

const profileSettingSlice = createSlice({
  name: "profileSetting",
  initialState,
  reducers: {
    handleProfileSetting: (state, action) => {
      const { name,email,currency,notifications } = action.payload;
      state.name=name;
      state.email=email;
      state.currency=currency;
      state.notifications=notifications;
      localStorage.setItem('finance_profile_config',JSON.stringify(action.payload))
    },
    
  },
});

export const { handleProfileSetting } =
  profileSettingSlice.actions;
export default profileSettingSlice.reducer;