export type ImageUpProps = InputProps & {
  image: string;
  handleImage: (img: string) => void;
  reUpload?: boolean;
};
