import React from "react";

const defaultStyle = {
  isDark: false,
  changeTheme: () => {}
};

const StyleContext = React.createContext(defaultStyle);

export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;
