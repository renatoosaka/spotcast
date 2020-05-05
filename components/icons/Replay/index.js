import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export const ReplayIcon = ({ ...props }) => {
  return (
    <Svg
      style={{ width: 20, height: 20 }}
      { ...props }
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
        <Path d="M9.99166 4.16665V0.833313L5.825 4.99998L9.99166 9.16665V5.83331C12.75 5.83331 14.9917 8.07498 14.9917 10.8333C14.9917 13.5916 12.75 15.8333 9.99166 15.8333C7.23333 15.8333 4.99166 13.5916 4.99166 10.8333H3.325C3.325 14.5166 6.30833 17.5 9.99166 17.5C13.675 17.5 16.6583 14.5166 16.6583 10.8333C16.6583 7.14998 13.675 4.16665 9.99166 4.16665Z" fill="white"/>
        <Path d="M9.075 13.3334H8.36666V10.6167L7.52499 10.875V10.3L8.99999 9.77502H9.075V13.3334Z" fill="white"/>
        <Path d="M12.6417 11.8667C12.6417 12.1333 12.6167 12.3667 12.5583 12.55C12.5 12.7333 12.4167 12.9 12.3167 13.025C12.2167 13.15 12.0833 13.2417 11.9417 13.3C11.8 13.3583 11.6333 13.3833 11.45 13.3833C11.2667 13.3833 11.1083 13.3583 10.9583 13.3C10.8083 13.2417 10.6833 13.15 10.575 13.025C10.4667 12.9 10.3833 12.7417 10.325 12.55C10.2667 12.3583 10.2333 12.1333 10.2333 11.8667V11.25C10.2333 10.9833 10.2583 10.75 10.3167 10.5667C10.375 10.3833 10.4583 10.2167 10.5583 10.0917C10.6583 9.96667 10.7917 9.875 10.9333 9.81667C11.075 9.75834 11.2417 9.73334 11.425 9.73334C11.6083 9.73334 11.7667 9.75834 11.9167 9.81667C12.0667 9.875 12.1917 9.96667 12.3 10.0917C12.4083 10.2167 12.4917 10.375 12.55 10.5667C12.6083 10.7583 12.6417 10.9833 12.6417 11.25V11.8667ZM11.9333 11.15C11.9333 10.9917 11.925 10.8583 11.9 10.75C11.875 10.6417 11.8417 10.5583 11.8 10.4917C11.7583 10.425 11.7083 10.375 11.6417 10.35C11.575 10.325 11.5083 10.3083 11.4333 10.3083C11.3583 10.3083 11.2833 10.325 11.225 10.35C11.1667 10.375 11.1083 10.425 11.0667 10.4917C11.025 10.5583 10.9917 10.6417 10.9667 10.75C10.9417 10.8583 10.9333 10.9917 10.9333 11.15V11.9583C10.9333 12.1167 10.9417 12.25 10.9667 12.3583C10.9917 12.4667 11.025 12.5583 11.0667 12.625C11.1083 12.6917 11.1583 12.7417 11.225 12.7667C11.2917 12.7917 11.3583 12.8083 11.4333 12.8083C11.5083 12.8083 11.5833 12.7917 11.6417 12.7667C11.7 12.7417 11.7583 12.6917 11.8 12.625C11.8417 12.5583 11.875 12.4667 11.8917 12.3583C11.9083 12.25 11.925 12.1167 11.925 11.9583V11.15H11.9333Z" fill="white"/>
    </Svg>
  );
}
