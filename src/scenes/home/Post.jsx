import React, { useEffect,} from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state";

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.cart.posts);

  async function getItems() {
    const posts = await fetch(
      "https://project-for-mor-vi7dg.ondigitalocean.app/api/posts",
      { method: "GET" }
    );
    const postsJson = await posts.json();
    dispatch(setPosts(postsJson.data));
    console.log(postsJson)
  }

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const aboutHeading = posts.filter(
    (item) => item.attributes.postType === "aboutHeading"
  );
  console.log()

  return (
    <Box width="100%">
      <Box width="80%" maxWidth="1260px" margin= "auto">
      <Typography variant="h1" textAlign="center" padding="20px">
      <b>{aboutHeading.length > 0 && aboutHeading[0].attributes.title}</b>
      </Typography>
      <Box
        margin="0 auto"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
        width="100%"
        textAlign="center"
        fontSize="14px"
      >
        <p>{aboutHeading.length > 0 && aboutHeading[0].attributes.paragraph1}</p>
        <p>{aboutHeading.length > 0 && aboutHeading[0].attributes.paragraph2}</p>
      </Box>
    </Box>
    </Box>
    
  );
};

export default Post;
