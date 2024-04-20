export interface IVideo {
  videoURL: string;
  imageURL: string;
  description: string;
}

const videos: IVideo[] = [
  {
    videoURL: "video/video00.mp4",
    imageURL: "image/image00.PNG",
    description: "King",
  },
  {
    videoURL: "video/video02.mp4",
    imageURL: "image/image01.png",
    description: "Xadrez king",
  },
  {
    videoURL: "video/video01.mp4",
    imageURL: "image/image02.png",
    description: "King of the deck",
  },
  {
    videoURL: "video/video03.mp4",
    imageURL: "image/image03.png",
    description: "King of the jungle",
  },

];
export default videos;
