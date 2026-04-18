export const zones = [
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
                { id: 101, name: 'كُرسي' }, // Matches question id 101
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
                { id: 102, name: 'طاوِلة' }, // Matches question id 102
                { id: 104, name: 'باب' }
              ]
            },
            {
              id: 103,
              name: 'سَرير',
              image: "https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459117/Bed_lfh7hz.webp",
              options: [
                { id: 103, name: 'سَرير' }, // Matches question id 103
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
                { id: 104, name: 'باب' }, // Matches question id 104
                { id: 105, name: 'نافِذة' }
              ]
            },
            {
              id: 105,
              name: 'نافِذة',
              image: "https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459117/Window_e1yn9p.webp",
              options: [
                { id: 105, name: 'نافِذة' }, // Matches question id 105
                { id: 104, name: 'باب' },
                { id: 112, name: 'مِصباح' }
              ]
            },
            {
              id: 106,
              name: 'مِفتاح',
              image: "https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459114/Spoon_bofeao.webp",
              options: [
                { id: 101, name: 'كُرسي' },
                { id: 104, name: 'باب' },
                { id: 106, name: 'مِفتاح' } // Matches question id 106
              ]
            },
            {
              id: 107,
              name: 'مِلعقة',
              image: "https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459117/Door_utp0ix.webp",
              options: [
                { id: 108, name: 'صَحْن' },
                { id: 107, name: 'مِلعقة' }, // Matches question id 107
                { id: 109, name: 'كَوب' }
              ]
            },
            {
              id: 108,
              name: 'صَحْن',
              image: "https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459114/Plate_i2ylu6.webp",
              options: [
                { id: 108, name: 'صَحْن' }, // Matches question id 108
                { id: 109, name: 'كَوب' },
                { id: 107, name: 'مِلعقة' }
              ]
            },
            {
              id: 109,
              name: 'كُوب',
              image: "https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459114/Cup_iwoj4h.webp",
              options: [
                { id: 107, name: 'مِلعقة' },
                { id: 106, name: 'مِفتاح' },
                { id: 109, name: 'كُوب' } // Matches question id 109
              ]
            },
            {
              id: 110,
              name: 'تِلفاز',
              image: "https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459114/Television_lkmi8v.webp",
              options: [
                { id: 110, name: 'تِلفاز' }, // Matches question id 110
                { id: 111, name: 'هاتِف' },
                { id: 112, name: 'مِصباح' }
              ]
            },
            {
              id: 111,
              name: 'هاتِف',
              image: "https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459113/Phone_bbzl2f.webp",
              options: [
                { id: 110, name: 'تِلفاز' },
                { id: 111, name: 'هاتِف' }, // Matches question id 111
                { id: 109, name: 'كُوب' }
              ]
            },
            {
              id: 112,
              name: 'مِصباح',
              image: "https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459113/Light_nmtgvw.webp",
              options: [
                { id: 112, name: 'مِصباح' }, // Matches question id 112
                { id: 105, name: 'نافِذة' },
                { id: 101, name: 'كُرسي' }
              ]
            }
          ]
        }
      ]
  },
  {
    id: 'zoo',
    title: 'حديقة الحيوان',
    icon: '🦁',
    levels: [
      {
        id: 1,
        questions: [
          {
            id: 201,
            name: 'أَسَد',
            image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 201, name: 'أَسَد' }, // Fixed ID to match
              { id: 222, name: 'قِطَّة' },
              { id: 203, name: 'كَلْب' },
            ]
          },
          {
            id: 222,
            name: 'قِطَّة',
            image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 222, name: 'قِطَّة' }, // Fixed ID to match
              { id: 205, name: 'أَرْنَب' },
              { id: 212, name: 'بَطَّة' },
            ]
          },
          {
            id: 203,
            name: 'كَلْب',
            image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 203, name: 'كَلْب' }, // Fixed ID to match
              { id: 208, name: 'جَمَل' },
              { id: 211, name: 'بَقَرَة' },
            ]
          },
          {
            id: 204,
            name: 'فِيل',
            image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 204, name: 'فِيل' }, // Fixed ID to match
              { id: 207, name: 'زَرَافَة' },
              { id: 210, name: 'نِمْر' },
            ]
          },
          {
            id: 205,
            name: 'أَرْنَب',
            image: 'https://images.unsplash.com/photo-1585110396000-c9faf2e520eb?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 205, name: 'أَرْنَب' }, // Fixed ID to match
              { id: 204, name: 'فِيل' },
              { id: 209, name: 'قِرْد' },
            ]
          },
          {
            id: 206,
            name: 'حِصَان',
            image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 206, name: 'حِصَان' }, // Fixed ID to match
              { id: 201, name: 'أَسَد' },
              { id: 208, name: 'جَمَل' },
            ]
          },
          {
            id: 207,
            name: 'زَرَافَة',
            image: 'https://images.unsplash.com/photo-1547185942-4467c69993dc?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 207, name: 'زَرَافَة' }, // Fixed ID to match
              { id: 210, name: 'نِمْر' },
              { id: 222, name: 'قِطَّة' },
            ]
          },
          {
            id: 208,
            name: 'جَمَل',
            image: 'https://images.unsplash.com/photo-1543165365-07232ed12fad?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 208, name: 'جَمَل' }, // Fixed ID to match
              { id: 206, name: 'حِصَان' },
              { id: 203, name: 'كَلْب' },
            ]
          },
          {
            id: 209,
            name: 'قِرْد',
            image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 209, name: 'قِرْد' }, // Fixed ID to match
              { id: 201, name: 'أَسَد' },
              { id: 205, name: 'أَرْنَب' },
            ]
          },
          {
            id: 210,
            name: 'نِمْر',
            image: 'https://images.unsplash.com/photo-1561731216-c3a428753408?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 210, name: 'نِمْر' }, // Fixed ID to match
              { id: 204, name: 'فِيل' },
              { id: 211, name: 'بَقَرَة' },
            ]
          },
          {
            id: 211,
            name: 'بَقَرَة',
            image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 211, name: 'بَقَرَة' }, // Fixed ID to match
              { id: 212, name: 'بَطَّة' },
              { id: 208, name: 'جَمَل' },
            ]
          },
          {
            id: 212,
            name: 'بَطَّة',
            image: 'https://images.unsplash.com/photo-1459666644539-a9755287d6b0?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 212, name: 'بَطَّة' }, // Fixed ID to match
              { id: 222, name: 'قِطَّة' },
              { id: 205, name: 'أَرْنَب' },
            ]
          },
        ]
      }      
    ]
  },
];