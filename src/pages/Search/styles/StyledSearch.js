import styled from "@emotion/styled";

export const GridColumn = styled.div({
  width: "50%"
});

export const FeaturedColumn = styled.div(({ fixed }) => ({
  width: "50%",
  minHeight: fixed ? "100vh" : "auto",
  position: fixed ? "fixed" : "relative",
  top: 0,
  right: 0
}));

export const SearchInput = styled.input({
  outline: "none",
  outlineColor: "transparent",
  width: "100%",
  borderRadius: 0,
  border: "none",
  backgroundColor: "#fff",
  zIndex: 1,
  height: 76,
  padding: "0 28px 0 67px",
  fontSize: 18,
  fontWeight: 500,
  fontStyle: "italic",
  textTransform: "uppercase",
  position: "relative",
  transition: "all .3s ease-out",
  boxShadow: "0px 20px 47.6923px rgba(0, 0, 0, 0.1)",

  ":focus": {
    boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.03), 0px 20px 47.6923px rgba(0, 0, 0, 0.1)",
    "::placeholder": {
      color: "#CCC"
    }
  },

  "::placeholder": {
    color: "#CCC",
    transition: "all .3s ease-out"
  },

  "+ svg": {
    width: 18,
    position: "absolute",
    top: 30,
    left: 30,
    zIndex: 2,
    fill: "#CCC",
    cursor: "pointer"
  }
});

export const LineAccent = styled.div({
  width: "75%",
  height: 15,
  clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 100%, 0% 100%)",
  backgroundColor: "#D1FF54",
  margin: "-5px auto 0 0",
  position: "relative",
  zIndex: 2
});
