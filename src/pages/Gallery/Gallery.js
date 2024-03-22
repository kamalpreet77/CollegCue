import { Container} from "@mui/material";
import "@fontsource/poppins";
import IIMBangaloreImages from "./components/IIMBangaloreImages";
import IIMBangaloreVideos from "./components/IIMBangaloreVideos";
import IIMBangaloreGalleryReview from "./components/IIMBangaloreGalleryReview";
import IIMBangaloreRating from "./components/IIMBangaloreRating";
import UnacademyAd from "./components/UnacademyAd";
import IIMBangaloreComments from "./components/IIMBangaloreComments";
import IIMBangalorePopularComparison from "./components/IIMBangalorePopularComparison";
import MostPopularTags from "./components/MostPopularTags";
import IIMBangaloreReviews from "./components/IIMBangaloreReviews";
// import GRStream from "./GRStream";

function Gallery() {
  return (
    <Container>
      <IIMBangaloreImages />
      <IIMBangaloreVideos />
      <IIMBangaloreGalleryReview />
      {/* <GRStream/> */}
      <MostPopularTags/>
      {/* <IIMBangaloreReviews/> */}
      <IIMBangaloreRating />
      <UnacademyAd />
      <IIMBangaloreComments />
      <IIMBangalorePopularComparison />
    </Container>

  );
}

export default Gallery;
