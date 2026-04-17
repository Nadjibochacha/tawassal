const CLOUDINARY_URL = import.meta.env.CLOUDINARY_URL;

export const zones = [
  {
    id: 'zoo',
    title: 'حديقة الحيوان',
    icon: '🦁',
    levels: [
      
    ]
  },
  {
    id: 'home',
    title: 'في المنزل',
    icon: '🏠',
    levels: [
      {
        id: 1,
        questions: [
          {
            id: 101,
            name: 'كُرسي',
            image: "https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459120/Chair_cixx5r.jpg",
            options: [
              { id: 101, name: 'كُرسي' },
              { id: 102, name: 'طاوِلة' },
              { id: 103, name: 'سَرير' }
            ]
          },
          {
            id: 102,
            name: 'طاوِلة',
            image: "https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459118/Table_lbybxq.webp",
            options: [
              { id: 101, name: 'كُرسي' },
              { id: 102, name: 'طاوِلة' },
              { id: 104, name: 'باب' }
            ]
          },
          {
            id: 103,
            name: 'سَرير',
            image: "https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459117/Bed_lfh7hz.webp",
            options: [
              { id: 103, name: 'سَرير' },
              { id: 105, name: 'نافِذة' },
              { id: 101, name: 'كُرسي' }
            ]
          },
          {
            id: 104,
            name: 'باب',
            image: "https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459117/Door_utp0ix.webp",
            options: [
              { id: 106, name: 'مِفتاح' },
              { id: 104, name: 'باب' },
              { id: 105, name: 'نافِذة' }
            ]
          },
          // {
          //   id: 105,
          //   name: 'نافِذة',
          //   image: getCloudinaryUrl('v1776459120/window.png'),
          //   options: [
          //     { id: 105, name: 'نافِذة' },
          //     { id: 104, name: 'باب' },
          //     { id: 112, name: 'مِصباح' }
          //   ]
          // },
          // {
          //   id: 106,
          //   name: 'مِفتاح',
          //   image: getCloudinaryUrl('v1776459120/key.png'),
          //   options: [
          //     { id: 101, name: 'كُرسي' },
          //     { id: 104, name: 'باب' },
          //     { id: 106, name: 'مِفتاح' }
          //   ]
          // },
          // {
          //   id: 107,
          //   name: 'مِلعقة',
          //   image: getCloudinaryUrl('v1776459120/spoon.png'),
          //   options: [
          //     { id: 108, name: 'صَحْن' },
          //     { id: 107, name: 'مِلعقة' },
          //     { id: 109, name: 'كَوب' }
          //   ]
          // },
          // {
          //   id: 108,
          //   name: 'صَحْن',
          //   image: getCloudinaryUrl('v1776459120/plate.png'),
          //   options: [
          //     { id: 108, name: 'صَحْن' },
          //     { id: 109, name: 'كَوب' },
          //     { id: 107, name: 'مِلعقة' }
          //   ]
          // },
          // {
          //   id: 109,
          //   name: 'كَوب',
          //   image: getCloudinaryUrl('v1776459120/cup.png'),
          //   options: [
          //     { id: 107, name: 'مِلعقة' },
          //     { id: 106, name: 'مِفتاح' },
          //     { id: 109, name: 'كَوب' }
          //   ]
          // },
          // {
          //   id: 110,
          //   name: 'تِلفاز',
          //   image: getCloudinaryUrl('v1776459120/tv.png'),
          //   options: [
          //     { id: 110, name: 'تِلفاز' },
          //     { id: 111, name: 'هاتِف' },
          //     { id: 112, name: 'مِصباح' }
          //   ]
          // },
          // {
          //   id: 111,
          //   name: 'هاتِف',
          //   image: getCloudinaryUrl('v1776459120/phone.png'),
          //   options: [
          //     { id: 110, name: 'تِلفاز' },
          //     { id: 111, name: 'هاتِف' },
          //     { id: 109, name: 'كَوب' }
          //   ]
          // },
          // {
          //   id: 112,
          //   name: 'مِصباح',
          //   image: getCloudinaryUrl('v1776459120/light.png'),
          //   options: [
          //     { id: 112, name: 'مِصباح' },
          //     { id: 105, name: 'نافِذة' },
          //     { id: 101, name: 'كُرسي' }
          //   ]
          // }
        ]
      }
    ]
  }
]