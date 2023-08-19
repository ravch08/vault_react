import {
  Team1,
  Team2,
  Team3,
  Team4,
  TestClient1,
  TestClient2,
  TestClient3,
  TestClient4,
  TestClient5,
} from "./helper";

export const testimonialItems = [
  {
    id: "t1",
    imgSrc: TestClient1,
    user: "Hannah Smith",
    designation: "SEO Specialist",
    description:
      "The Citi Simplicity card offers a very long introductory period for balance transfers and carries minimal fees, making it a great option if you’re ready to put debt behind.",
  },
  {
    id: "t2",
    imgSrc: TestClient2,
    user: "Mikaela Stone",
    designation: "PPC Specialist",
    description:
      "The Citi Simplicity card offers a very long introductory period for balance transfers and carries minimal fees, making it a great option if you’re ready to put debt behind.",
  },
  {
    id: "t3",
    imgSrc: TestClient3,
    user: "Jho Deo",
    designation: "Web Designer",
    description:
      "The Citi Simplicity card offers a very long introductory period for balance transfers and carries minimal fees, making it a great option if you’re ready to put debt behind.",
  },
  {
    id: "t4",
    imgSrc: TestClient4,
    user: "Maria Mak",
    designation: "Web Expert",
    description:
      "The Citi Simplicity card offers a very long introductory period for balance transfers and carries minimal fees, making it a great option if you’re ready to put debt behind.",
  },
  {
    id: "t5",
    imgSrc: TestClient5,
    user: "Sam Smith",
    designation: "Front-End Developer",
    description:
      "The Citi Simplicity card offers a very long introductory period for balance transfers and carries minimal fees, making it a great option if you’re ready to put debt behind.",
  },
];

export const featureItems = [
  {
    id: "f1",
    title: "Less Fees",
    description:
      "Pay with Visa, MasterCard, American Express, Discover, JCB and Union Pay with a few simple taps.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 512 512">
        <path d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z" />
      </svg>
    ),
  },
  {
    id: "f2",
    title: "Touchless payments",
    description:
      "Tap to pay with Visa, MasterCard, American Express, Discover, JCB, Union Pay and much more than that.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 576 512">
        <path d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z" />
      </svg>
    ),
  },
  {
    id: "f3",
    title: "Multi Currency",
    description:
      "Pay with your Visa, MasterCard, American Express, Discover, JCB, Union Pay and more in just a few quick taps.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 512 512">
        <path d="M256 32C114.62 32 0 125.12 0 240c0 49.56 21.41 95.01 57.02 130.74C44.46 421.05 2.7 465.97 2.2 466.5A7.995 7.995 0 0 0 8 480c66.26 0 115.99-31.75 140.6-51.38C181.29 440.93 217.59 448 256 448c141.38 0 256-93.12 256-208S397.38 32 256 32zm24 302.44V352c0 8.84-7.16 16-16 16h-16c-8.84 0-16-7.16-16-16v-17.73c-11.42-1.35-22.28-5.19-31.78-11.46-6.22-4.11-6.82-13.11-1.55-18.38l17.52-17.52c3.74-3.74 9.31-4.24 14.11-2.03 3.18 1.46 6.66 2.22 10.26 2.22h32.78c4.66 0 8.44-3.78 8.44-8.42 0-3.75-2.52-7.08-6.12-8.11l-50.07-14.3c-22.25-6.35-40.01-24.71-42.91-47.67-4.05-32.07 19.03-59.43 49.32-63.05V128c0-8.84 7.16-16 16-16h16c8.84 0 16 7.16 16 16v17.73c11.42 1.35 22.28 5.19 31.78 11.46 6.22 4.11 6.82 13.11 1.55 18.38l-17.52 17.52c-3.74 3.74-9.31 4.24-14.11 2.03a24.516 24.516 0 0 0-10.26-2.22h-32.78c-4.66 0-8.44 3.78-8.44 8.42 0 3.75 2.52 7.08 6.12 8.11l50.07 14.3c22.25 6.36 40.01 24.71 42.91 47.67 4.05 32.06-19.03 59.42-49.32 63.04z" />
      </svg>
    ),
  },
  {
    id: "f4",
    title: "24/7 multilingual support",
    description:
      "Our team is available any time, day or night, to take your questions and offer assistance. No worries.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 448 512">
        <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z" />
      </svg>
    ),
  },
  {
    id: "f5",
    title: "Withdraw funds locally",
    description:
      "Easily move your funds between currencies and withdraw them to a local bank account.To take your questions",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 512 512">
        <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
      </svg>
    ),
  },
  {
    id: "f6",
    title: "Simplify your payments",
    description:
      "Pay contractors and suppliers anywhere in the world straight from your Payoneer balance. To take your questions",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 496 512">
        <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm160 215.5v6.93c0 5.87-3.32 11.24-8.57 13.86l-15.39 7.7a15.485 15.485 0 0 1-15.53-.97l-18.21-12.14a15.52 15.52 0 0 0-13.5-1.81l-2.65.88c-9.7 3.23-13.66 14.79-7.99 23.3l13.24 19.86c2.87 4.31 7.71 6.9 12.89 6.9h8.21c8.56 0 15.5 6.94 15.5 15.5v11.34c0 3.35-1.09 6.62-3.1 9.3l-18.74 24.98c-1.42 1.9-2.39 4.1-2.83 6.43l-4.3 22.83c-.62 3.29-2.29 6.29-4.76 8.56a159.608 159.608 0 0 0-25 29.16l-13.03 19.55a27.756 27.756 0 0 1-23.09 12.36c-10.51 0-20.12-5.94-24.82-15.34a78.902 78.902 0 0 1-8.33-35.29V367.5c0-8.56-6.94-15.5-15.5-15.5h-25.88c-14.49 0-28.38-5.76-38.63-16a54.659 54.659 0 0 1-16-38.63v-14.06c0-17.19 8.1-33.38 21.85-43.7l27.58-20.69a54.663 54.663 0 0 1 32.78-10.93h.89c8.48 0 16.85 1.97 24.43 5.77l14.72 7.36c3.68 1.84 7.93 2.14 11.83.84l47.31-15.77c6.33-2.11 10.6-8.03 10.6-14.7 0-8.56-6.94-15.5-15.5-15.5h-10.09c-4.11 0-8.05-1.63-10.96-4.54l-6.92-6.92a15.493 15.493 0 0 0-10.96-4.54H199.5c-8.56 0-15.5-6.94-15.5-15.5v-4.4c0-7.11 4.84-13.31 11.74-15.04l14.45-3.61c3.74-.94 7-3.23 9.14-6.44l8.08-12.11c2.87-4.31 7.71-6.9 12.89-6.9h24.21c8.56 0 15.5-6.94 15.5-15.5v-21.7C359.23 71.63 422.86 131.02 441.93 208H423.5c-8.56 0-15.5 6.94-15.5 15.5z" />
      </svg>
    ),
  },
];

export const teamItems = [
  {
    id: "t1",
    facebook: "https://www.facebook.com/",
    linkedIn: "https://in.linkedin.com/",
    twitter: "https://twitter.com/",
    imgSrc: Team1,
    user: "Sufia Anam",
    designation: "Senior Project Manager",
  },
  {
    id: "t2",
    facebook: "https://www.facebook.com/",
    linkedIn: "https://in.linkedin.com/",
    twitter: "https://twitter.com/",
    imgSrc: Team2,
    user: "Jubayer Al Hasan",
    designation: "Senior Developer",
  },
  {
    id: "t3",
    facebook: "https://www.facebook.com/",
    linkedIn: "https://in.linkedin.com/",
    twitter: "https://twitter.com/",
    imgSrc: Team3,
    user: "Muhibbur Rashid",
    designation: "Marketing Expertr",
  },
  {
    id: "t4",
    facebook: "https://www.facebook.com/",
    linkedIn: "https://in.linkedin.com/",
    twitter: "https://twitter.com/",
    imgSrc: Team4,
    user: "Rashed Kabir",
    designation: "Designer",
  },
];

export const whyItems = [
  {
    id: "01",
    title: "All credit card companies",
    description:
      "Pay with Visa, MasterCard, American Express, Discover, JCB and Union Pay with a few other simple taps.",
  },
  {
    id: "02",
    title: "Touchless payments",
    description:
      "Tap to pay with Visa, MasterCard, American Express, Discover, JCB, Union Pay and more.",
  },
  {
    id: "03",
    title: "Multi Currency",
    description:
      "Pay with your Visa, MasterCard, American Express, Discover, JCB, Union Pay and more in just a few quick taps.",
  },
];
