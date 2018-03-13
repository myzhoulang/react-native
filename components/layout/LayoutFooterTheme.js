import { Platform } from "react-native";
import variable from 'native-base/src/theme/variables/platform';

export default (variables = variable) => {
  const footerTabTheme = {
    "NativeBase.Button": {
      ".active": {
        "NativeBase.Text": {
          color: '#f23030'
        },
        "NativeBase.Icon": {
          color: '#f23030'
        },

        backgroundColor: 'transparent'
      },
    }
  };

  return footerTabTheme;
};
