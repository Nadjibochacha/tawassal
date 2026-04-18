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
              image: "https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459116/Key_pyf0vk.webp",
              options: [
                { id: 101, name: 'كُرسي' },
                { id: 104, name: 'باب' },
                { id: 106, name: 'مِفتاح' } // Matches question id 106
              ]
            },
            {
              id: 107,
              name: 'مِلعقة',
              image: "https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459114/Spoon_bofeao.webp",
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
            image: 'https://thumbs.dreamstime.com/b/white-rabbit-gray-background-sitting-38897227.jpg',
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
            image: 'https://c02.purpledshub.com/uploads/sites/62/2018/06/GettyImages-691120045-6eddcf2.jpg?webp=1&w=1200',
            options: [
              { id: 207, name: 'زَرَافَة' }, // Fixed ID to match
              { id: 210, name: 'نِمْر' },
              { id: 222, name: 'قِطَّة' },
            ]
          },
          {
            id: 208,
            name: 'جَمَل',
            image: 'https://a-z-animals.com/media/animals/images/original/camel6-768x593.jpg',
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
            image: 'https://animals.sandiegozoo.org/sites/default/files/inline-images/tiger_indochinese_animals.jpg',
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
            image: 'https://static.vecteezy.com/system/resources/thumbnails/058/117/766/small/charming-khaki-campbell-duck-color-illustration-artwork-cartoon-art-animal-illustration-vector.jpg',
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
  {
    id: 'street',
    title: 'في الشارع',
    icon: '🚦',
    levels: [
      {
        id: 1,
        questions: [
          {
            id: 301,
            name: 'سَيَّارَة',
            image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 301, name: 'سَيَّارَة' }, // Matches question 301
              { id: 303, name: 'حَافِلَة' },
              { id: 304, name: 'دَرَّاجَة' },
            ]
          },
          {
            id: 302,
            name: 'شَجَرَة',
            image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJlZXxlbnwwfHwwfHx8MA==',
            options: [
              { id: 307, name: 'مَبْنَى' },
              { id: 302, name: 'شَجَرَة' }, // Matches question 302
              { id: 308, name: 'رَصِيف' },
            ]
          },
          {
            id: 303,
            name: 'حَافِلَة',
            image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 301, name: 'سَيَّارَة' },
              { id: 312, name: 'سَيَّارَة شُرْطَة' },
              { id: 303, name: 'حَافِلَة' }, // Matches question 303
            ]
          },
          {
            id: 304,
            name: 'دَرَّاجَة',
            image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 304, name: 'دَرَّاجَة' }, // Matches question 304
              { id: 310, name: 'دَرَّاجَة نَارِيَّة' },
              { id: 301, name: 'سَيَّارَة' },
            ]
          },
          {
            id: 305,
            name: 'إِشَارَةُ مُرُور',
            image: 'https://png.pngtree.com/png-vector/20250608/ourmid/pngtree-a-realistic-traffic-light-3d-png-image_16495581.png',
            options: [
              { id: 311, name: 'لَافِتَة' },
              { id: 305, name: 'إِشَارَة مُرُور' }, // Matches question 305
              { id: 306, name: 'شَارِع' },
            ]
          },
          {
            id: 306,
            name: 'شَارِع',
            image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 306, name: 'شَارِع' }, // Matches question 306
              { id: 308, name: 'رَصِيف' },
              { id: 309, name: 'جِسْر' },
            ]
          },
          {
            id: 307,
            name: 'مَبْنَى',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 302, name: 'شَجَرَة' },
              { id: 307, name: 'مَبْنَى' }, // Matches question 307
              { id: 311, name: 'لَافِتَة' },
            ]
          },
          {
            id: 308,
            name: 'رَصِيف',
            image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVB02foEINM7fU6Z1PsFEFMswx-CLeui-TocYFj7_mUqIXEYRZWg2fwziQP1XS2Z_Q1amVxN1UmM2rvwPP94fgzBTC-2IRzMdhKXg6XvZY05bJ-vuowaSsBUH0gWqj1txFkHRp80WYTJpkcXX280Osyqzlr-5D9LNcYMsSnV6clpZDqQHRtxEyo83rqhw/w640-h474/%D9%84%D9%82%D8%B7%D8%A9%20%D8%A7%D9%84%D8%B4%D8%A7%D8%B4%D8%A9%202023-08-24%20103520.pnghttps://jazeerapaints.com/media/catalog/product/w/e/wezzz2nzcdhirzg4wejweu12vm9xdz09_pgpxtzanvroj0jj8.jpg?optimize=high&fit=bounds&height=590&width=650',
            options: [
              { id: 306, name: 'شَارِع' },
              { id: 309, name: 'جِسْر' },
              { id: 308, name: 'رَصِيف' }, // Matches question 308
            ]
          },
          {
            id: 309,
            name: 'جِسْر',
            image: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/1977/live/6fb60f80-eb69-11ee-860f-4b0b053e4cd0.jpg.webp',
            options: [
              { id: 309, name: 'جِسْر' }, // Matches question 309
              { id: 307, name: 'مَبْنَى' },
              { id: 306, name: 'شَارِع' },
            ]
          },
          {
            id: 310,
            name: 'دَرَّاجَة نَارِيَّة',
            image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 304, name: 'دَرَّاجَة' },
              { id: 310, name: 'دَرَّاجَة نَارِيَّة' }, // Matches question 310
              { id: 301, name: 'سَيَّارَة' },
            ]
          },
          {
            id: 311,
            name: 'لَافِتَة',
            image: 'https://png.pngtree.com/thumb_back/fh260/background/20221004/pngtree-signage-for-bleecker-street-and-grove-street-on-the-streets-of-new-york-city-photo-image_34081066.jpg',
            options: [
              { id: 311, name: 'لَافِتَة' }, // Matches question 311
              { id: 305, name: 'إِشَارَة مُرُور' },
              { id: 302, name: 'شَجَرَة' },
            ]
          },
          {
            id: 312,
            name: 'سَيَّارَةُ شُرْطَة',
            image: 'https://cdn.enabbaladi.net/arabic/wp-content/uploads/2018/11/Lamborghini-Aventador.jpg',
            options: [
              { id: 303, name: 'حَافِلَة' },
              { id: 301, name: 'سَيَّارَة' },
              { id: 312, name: 'سَيَّارَة شُرْطَة' }, // Matches question 312
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'food',
    title: 'خضر وفواكه',
    icon: '🍎',
    levels: [
      {
        id: 1,
        questions: [
          {
            id: 401,
            name: 'تُفَّاح',
            image: 'https://img.freepik.com/premium-photo/fresh-red-apple-fruit-with-sliced-green-leaves-isolated-white-background_252965-8.jpg?semt=ais_hybrid&w=740&q=80',
            options: [
              { id: 401, name: 'تُفَّاح' }, // Matches 401
              { id: 403, name: 'بُرْتُقَال' },
              { id: 402, name: 'مَوْز' }
            ]
          },
          {
            id: 402,
            name: 'مَوْز',
            image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 413, name: 'لَيْمُون' },
              { id: 402, name: 'مَوْز' }, // Matches 402
              { id: 419, name: 'ذُرَة' }
            ]
          },
          {
            id: 403,
            name: 'بُرْتُقَال',
            image: 'https://images.unsplash.com/photo-1549888834-3ec93abae044?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 403, name: 'بُرْتُقَال' }, // Matches 403
              { id: 401, name: 'تُفَّاح' },
              { id: 408, name: 'طَمَاطِم' }
            ]
          },
          {
            id: 404,
            name: 'فَرَاوِلَة',
            image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 417, name: 'كَرَز' },
              { id: 404, name: 'فَرَاوِلَة' }, // Matches 404
              { id: 406, name: 'بَطِّيخ' }
            ]
          },
          {
            id: 405,
            name: 'عِنَب',
            image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 405, name: 'عِنَب' }, // Matches 405
              { id: 417, name: 'كَرَز' },
              { id: 415, name: 'بَاذِنْجَان' }
            ]
          },
          {
            id: 406,
            name: 'بَطِّيخ',
            image: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 404, name: 'فَرَاوِلَة' },
              { id: 406, name: 'بَطِّيخ' }, // Matches 406
              { id: 420, name: 'أَنَانَاس' }
            ]
          },
          {
            id: 407,
            name: 'جَزَر',
            image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 412, name: 'بَطَاطَا' },
              { id: 409, name: 'خِيَار' },
              { id: 407, name: 'جَزَر' } // Matches 407
            ]
          },
          {
            id: 408,
            name: 'طَمَاطِم',
            image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 408, name: 'طَمَاطِم' }, // Matches 408
              { id: 414, name: 'فُلْفُل' },
              { id: 410, name: 'بَصَل' }
            ]
          },
          {
            id: 409,
            name: 'خِيَار',
            image: 'https://cairofoodgroup.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-21-at-11.08.00-PM.jpeg',
            options: [
              { id: 415, name: 'بَاذِنْجَان' },
              { id: 409, name: 'خِيَار' }, // Matches 409
              { id: 416, name: 'خَسّ' }
            ]
          },
          {
            id: 410,
            name: 'بَصَل',
            image: 'https://static.webteb.net/images/content/slideshowslide_sss_3704_1229b0a012-398f-4fdb-a870-841c8bfa6259.jpg',
            options: [
              { id: 411, name: 'ثُوم' },
              { id: 412, name: 'بَطَاطَا' },
              { id: 410, name: 'بَصَل' } // Matches 410
            ]
          },
          {
            id: 411,
            name: 'ثُوم',
            image: 'https://cdn.alweb.com/thumbs/top10blarabi/article/fit710x532/%D8%A3%D9%81%D8%B6%D9%84-%D8%A3%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D9%84%D8%AB%D9%88%D9%85-%D9%81%D9%8A-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85.jpg',
            options: [
              { id: 411, name: 'ثُوم' }, // Matches 411
              { id: 410, name: 'بَصَل' },
              { id: 412, name: 'بَطَاطَا' }
            ]
          },
          {
            id: 412,
            name: 'بَطَاطَا',
            image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 407, name: 'جَزَر' },
              { id: 412, name: 'بَطَاطَا' }, // Matches 412
              { id: 410, name: 'بَصَل' }
            ]
          },
          {
            id: 413,
            name: 'لَيْمُون',
            image: 'https://images.unsplash.com/photo-1590502593747-42a996111153?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 402, name: 'مَوْز' },
              { id: 419, name: 'ذُرَة' },
              { id: 413, name: 'لَيْمُون' } // Matches 413
            ]
          },
          {
            id: 414,
            name: 'فُلْفُل',
            image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 414, name: 'فُلْفُل' }, // Matches 414
              { id: 408, name: 'طَمَاطِم' },
              { id: 416, name: 'خَسّ' }
            ]
          },
          {
            id: 415,
            name: 'بَاذِنْجَان',
            image: 'https://images.unsplash.com/photo-1614735241165-6756e1df61ab?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 409, name: 'خِيَار' },
              { id: 415, name: 'بَاذِنْجَان' }, // Matches 415
              { id: 411, name: 'ثُوم' }
            ]
          },
          {
            id: 416,
            name: 'خَسّ',
            image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 416, name: 'خَسّ' }, // Matches 416
              { id: 414, name: 'فُلْفُل' },
              { id: 409, name: 'خِيَار' }
            ]
          },
          {
            id: 417,
            name: 'كَرَز',
            image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 405, name: 'عِنَب' },
              { id: 404, name: 'فَرَاوِلَة' },
              { id: 417, name: 'كَرَز' } // Matches 417
            ]
          },
          {
            id: 418,
            name: 'خَوْخ',
            image: 'https://images.unsplash.com/photo-1528820600606-0ef5600cbfee?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 403, name: 'بُرْتُقَال' },
              { id: 418, name: 'خَوْخ' }, // Matches 418
              { id: 401, name: 'تُفَّاح' }
            ]
          },
          {
            id: 419,
            name: 'ذُرَة',
            image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 419, name: 'ذُرَة' }, // Matches 419
              { id: 413, name: 'لَيْمُون' },
              { id: 402, name: 'مَوْز' }
            ]
          },
          {
            id: 420,
            name: 'أَنَانَاس',
            image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=500&q=80',
            options: [
              { id: 406, name: 'بَطِّيخ' },
              { id: 418, name: 'خَوْخ' },
              { id: 420, name: 'أَنَانَاس' } // Matches 420
            ]
          }
        ]
      }
    ]
  }
];