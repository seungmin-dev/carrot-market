module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  // darkMode: "media", // media로 되어있으면 환경설정, 브라우저의 설정을 따라감
  darkMode: "class", // class로 두면 토글, 버튼 등으로 수동 설정이 가능함
  plugins: [],
};
