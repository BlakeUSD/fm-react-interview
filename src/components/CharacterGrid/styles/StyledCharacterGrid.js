import styled from "@emotion/styled";

export const Grid = styled.div({
  display: "grid",
  width: "100%",
  gap: 8,
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "1fr"
});

export const GridFiller = styled.div({
  gridRow: "1 / 2",
  gridColumn: "1 / 2"
});

export const GridItem = styled.div(({ image }) => ({
  position: "relative",
  gridRow: "span 2",
  background: `url(${image}) center center no-repeat`,
  backgroundSize: "cover",
  paddingBottom: `${(3 / 2) * 100}%`,
  borderRadius: 10,
  overflow: "hidden",
  transition: "all .2s ease"
}));

export const CharacterContent = styled.div({
  position: "absolute",
  width: "100%",
  bottom: 0,
  left: 0,
  padding: "80px 30px 30px 30px",
  ":before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "100%",
    width: "200%",
    backgroundColor: "#2e2e30",
    boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.50)",
    transformOrigin: "0 0",
    transform: "rotate(15deg)",
    borderTop: "8px solid #141416"
  }
});

export const Name = styled.h4({
  position: "relative",
  zIndex: 2,
  transition: "all 0.2s linear 0s",
  margin: "0px",
  textShadow: "rgb(77 77 77) 2px 2px, #D1FF54 4px 4px",
  color: "rgb(255, 255, 255)",
  fontSize: "50px",
  lineHeight: "50px",
  fontWeight: "700",
  letterSpacing: "inherit",
  textTransform: "uppercase",
  fontStyle: "italic",
  whiteSpace: "inherit",
  overflow: "inherit",
  textOverflow: "inherit"
});

export const Image = styled.img({
  maxWidth: "100%",
  maxHeight: "100%"
});

export const GridItemOverlay = styled.div({
  backgroundColor: "rgba(209,255,84,0.7)",
  backdropFilter: "blur(8px)",
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  opacity: 0,
  transitionDuration: "0.3s",
  zIndex: 3,
  padding: 40,

  "&:hover": {
    opacity: 1
  },

  "> svg": {
    width: 150,
    marginBottom: 30
  }
});

export const OverlayText = styled.p({
  margin: 0,
  fontSize: 22,
  lineHeight: "22px",
  fontWeight: 700,
  fontStyle: "italic",
  textTransform: "uppercase",
  textAlign: "center",
  color: "black"
});

export const OverlayButton = styled.div({
  fontSize: 14,
  fontWeight: 700,
  fontStyle: "italic",
  textTransform: "uppercase",
  textAlign: "center",
  color: "white",
  backgroundColor: "black",
  padding: "10px 20px",
  cursor: "pointer",
  borderRadius: 4,
  marginTop: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  svg: {
    fill: "white",
    width: 0,
    transitionDuration: "0.3s",
    margin: 0,
    padding: 0
  },

  "&:hover": {
    svg: {
      width: 16,
      margin: "0 -8px 0 8px"
    }
  }
});
