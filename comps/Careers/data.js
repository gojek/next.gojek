export const departments = [
  {
    value: 'engineering',
    label: 'Engineering',
    bgColor: '#00acd1',
    bgImg: 'img/careers/Engineering.svg',
  },
  {
    value: 'design',
    label: 'Design',
    bgColor: '#7ccc6c',
    bgImg: 'img/careers/Engineering.svg',
  },
  {
    value: 'people-and-culture',
    label: 'People and Culture',
    bgColor: '#d48bc8',
    bgImg: 'img/careers/Engineering.svg',
  },
  {
    value: 'program-management',
    label: 'Program Management',
    bgColor: '#ff7f32',
    bgImg: 'img/careers/Engineering.svg',
  },
  {
    value: 'product',
    label: 'Product',
    bgColor: '#ff808b',
    bgImg: 'img/careers/Product.svg',
  },
  {
    value: 'science',
    label: 'Science',
    bgColor: '#29ece0',
    bgImg: 'img/careers/Engineering.svg',
  },
];

export const locations = [
  { label: 'Bangalore', value: 'bangalore' },
  { label: 'Gurugram', value: 'gurugram' },
  { label: 'Jakarta', value: 'jakarta' },
  { label: 'Singapore', value: 'singapore' },
  { label: 'Bangkok', value: 'bangkok' },
  { label: 'Vietnam', value: 'vietnam' },
];

// Careers landing page text
export const banner = {
  bannerImg: '/img/careers/banner.png',
  title: 'We give you leverage to create impact at scale.',
  subHead: "Join a company that strives to support you. Not just 'your best work', but all of you.",
  departmentData: {
    title: 'Choose where you belong…',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  teamData: {
    title: 'Teams',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
};

export const teams = [
  {
    name: 'Kernel',
    slug: 'kernel',
    bgColor: '#ff695b',
    bgImg: '/img/careers/kernel.svg',
  },
  {
    name: 'Go Food',
    slug: 'identity-and-communication-platform',
    bgColor: '#ffb31c',
    bgImg: '/img/careers/GoFood.svg',
  },
  {
    name: 'Operations Platform',
    slug: 'operations-platform',
    bgColor: '#772583',
    bgImg: '/img/careers/Ops-Platform.svg',
  },
  {
    name: 'Kernel',
    slug: 'kernel',
    bgColor: '#ff695b',
    bgImg: '/img/careers/kernel.svg',
  },
  {
    name: 'Go Food',
    slug: 'identity-and-communication-platform',
    bgColor: '#ffb31c',
    bgImg: '/img/careers/GoFood.svg',
  },
];

export const temsSliderSettings = {
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        // centerMode: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
};
