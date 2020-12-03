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
  { label: 'Bengaluru', value: 'bengaluru' },
  { label: 'Gurugram', value: 'gurugram' },
  { label: 'Jakarta', value: 'jakarta' },
  { label: 'Singapore', value: 'singapore' },
  { label: 'Bangkok', value: 'bangkok' },
  { label: 'Vietnam', value: 'vietnam' },
];

// Careers landing page text
export const banner = {
  bannerImg: '/img/careers/banner.png',
  title: 'Hard to get into, harder to leave.',
  subHead: '(A chance to build Southeast Asia)',
  teamData: {
    xsTitle: 'Teams',
    xsDescription:
      'Want to work with a specific team? (Foodtech, fintech, ridetech, we have it all and more. Pick your choice )',
    title: 'Want to work with a specific team?',
    description: '(Foodtech, fintech, ridetech, we have it all and more. Pick your choice )',
  },
};

export const teams = [
  {
    name: 'Kernel',
    slug: 'kernel',
    bgColor: '#ff695b',
    bgImg: '/img/careers/kernel.svg',
    link: 'kernel',
  },
  {
    name: 'Go Food',
    slug: 'identity-and-communication-platform',
    bgColor: '#ffb31c',
    bgImg: '/img/careers/GoFood.svg',
    link: 'gofood',
  },
  {
    name: 'Operations Platform',
    slug: 'operations-platform',
    bgColor: '#772583',
    bgImg: '/img/careers/Ops-Platform.svg',
    link: 'operationsplatform',
  },
  {
    name: 'Kernel',
    slug: 'kernel',
    bgColor: '#ff695b',
    bgImg: '/img/careers/kernel.svg',
    link: 'kernel',
  },
  {
    name: 'Go Food',
    slug: 'identity-and-communication-platform',
    bgColor: '#ffb31c',
    bgImg: '/img/careers/GoFood.svg',
    link: 'gofood',
  },
];

export const teamsSliderSettings = {
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2.5,
        centerMode: false,
        infinite: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1.5,
        centerMode: false,
        infinite: false,
      },
    },
  ],
};
