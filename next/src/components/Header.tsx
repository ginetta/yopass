import { AppBar, Toolbar, Typography, Button, Box, Link } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const useStyles = makeStyles(() => ({
  boop1: {
    verticalAlign: "middle",
    paddingLeft: "5px",
  },
}));

export const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const isOnUploadPage = router.pathname.includes("upload");
  const base = process.env.PUBLIC_URL || "";
  const home = base + "/";
  const upload = base + "/upload";
  const classes = useStyles();
  return (
    <AppBar position="static" color="transparent" sx={{ marginBottom: 4 }}>
      <Toolbar>
        <Link href={home} color="inherit" underline="none">
          <Typography variant="h6" component="div">
            Yopass
            <img
              className={classes.boop1}
              width="40"
              height="40"
              alt=""
              src="yopass.svg"
            />
          </Typography>
        </Link>
        <Box
          sx={{
            marginLeft: "auto",
          }}
        >
          <Button
            component={Link}
            href={isOnUploadPage ? home : upload}
            variant="contained"
            color="primary"
          >
            {isOnUploadPage ? t("header.buttonHome") : t("header.buttonUpload")}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
