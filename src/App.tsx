import Clients from "./Content/client";
import clientsElements from "./data"
import Landing from "./Content/landing/landingPage";
import FeaturesLayout from "./Content/features/featureContent";
import featuresElements from "./feature"
import AboutLayout from "./Content/About/about";
import aboutElements from "./about"
import GalleryLayout from "./Content/gallery/gallery";
import galleryElements from "./gallery";
import TeamLayout from "./Content/Team/team";
import teamElements from "./team"

const {titleClient, lineClient, messages} = clientsElements
const {title, line, features} = featuresElements
const {imgAbout, titleAbout, lineAbout, describe, question, responses} = aboutElements
const {titleGallery, lineGallery, descriptionGallery, images} = galleryElements
const {titleTeam, lineTeam, descriptionTeam, members} = teamElements

export default function App(){
  return (
    <>
    <Landing />
    <FeaturesLayout 
    title = {title}
    line = {line}
    features={features}/>

    <AboutLayout 
    imgAbout={imgAbout}
    titleAbout={titleAbout}
    lineAbout={lineAbout}
    describe={describe}
    question={question}
    responses={responses}
    />

    <GalleryLayout 
    titleGallery={titleGallery}
    lineGallery={lineGallery}
    descriptionGallery={descriptionGallery}
    images={images}
    />
    <Clients 
    titleClient={titleClient}
    lineClient={lineClient}
    messages={messages}
    />

    <TeamLayout 
    titleTeam={titleTeam}
    lineTeam={lineTeam}
    descriptionTeam={descriptionTeam}
    members={members}
    />

    </>
  )
}