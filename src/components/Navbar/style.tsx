import { styled } from "../../styles/stitches.config";
import { Flex, Container } from "../../styles/Global";
import { Button } from "../../styles/Buttons";

export const Navbar = styled("nav", {
  background:
    "linear-gradient(0deg, rgba(191,215,237,0.8295693277310925) 0%, rgba(191,215,237,1) 42%, rgba(191,215,237,1) 100%)",
  position: "fixed",
  inset: 0,
  bottom: "auto",
  padding: "1rem 0",
  width: "100%",
  zIndex: "99999",
  boxShadow: "0px 15px 25px -7px rgba(0,0,0,0.34)",
  "@mobile": {
    width: "100vw",
  },

  [`& ${Container}`]: {
    display: "flex",
    justifyContent: "space-between",
    "@mobile": {
      flexDirection: "column",
    },
  },
});

export const LogoTipo = styled(Flex, {
  alignItems: "center",
});

export const LogoTipoImage = styled("img", {
  width: "3rem",
  height: "3rem",
  borderRadius: "50%",
  "@mobile": {
    width: "2.25rem",
    height: "2.25rem",
  },
});

export const LogoTipoText = styled("span", {
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "$grey1",
  fontFamily: '"IBM Plex Sans"',
  "@mobile": {
    fontSize: "1rem",
  },
});

export const NavbarLinks = styled(Flex, {
  "@mobile": {
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "$3",
    [`& ${Button}:nth-child(1)`]: {
      width: "100%",
      order: "3",
    },
    [`& ${Button}`]: {
      width: "48%",
      order: "1",
    },
  },
});

export const NavbarMobileArea = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});
