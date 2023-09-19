export type SubmitHandlerProps = (data: object | null) => void;

export type ButtonProps = {
  target: string;
};

export type PageBannerProps = {
  bannerHeading: string;
};

export type RatingProps = {
  rating: number;
};

export type SidebarProps = {
  classNm: string;
  handler: () => void;
};

export type FeatureItemProps = {
  svg: React.ReactNode;
  title: string;
  description: string;
};

export type WhyItemProps = {
  id?: number;
  title: string;
  description: string;
};

export type TestimonialProps = {
  id?: number;
  user: string;
  rating: number;
  imgSrc: string;
  designation: string;
  description: string;
};

export type TeamProps = {
  id?: number;
  user: string;
  imgSrc: string;
  facebook: string;
  linkedIn: string;
  twitter: string;
  designation: string;
};
