  // The "Odd One Out" Challenge - Using items from levels.js
export const oddOneOutLevels = [
  {
    id: 'home',
    title: 'في المنزل',
    icon: '🏠',
    levels: [
      {
        id: 1,
        questions: [
          {
            id: 1,
            instructions: "مَا هُوَ الشَّيْءُ الَّذِي لَا يَنْتَمِي إِلَى الْمَجْمُوعَة؟",
            explanation: "الْفِيلُ حَيَوَانٌ وَلَيْسَ مِنْ أَثَاثِ الْمَنْزِل",
            options: [
              { id: '101', name: 'كُرسي', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459120/Chair_cixx5r.jpg', isOdd: false },
              { id: '103', name: 'سَرير', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459117/Bed_lfh7hz.webp', isOdd: false },
              { id: '203', name: 'فِيل', image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=500&q=80', isOdd: true }, // The odd one (Zoo)
              { id: '104', name: 'باب', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459117/Door_utp0ix.webp', isOdd: false }
            ]
          },
          {
            id: 2,
            instructions: "مَا هُوَ الشَّيْءُ الَّذِي لَا يَنْتَمِي إِلَى الْمَجْمُوعَة؟",
            explanation: "التُّفَّاحُ مِنَ الْفَوَاكِهِ وَلَيْسَ جِهَازاً كَهْرَبَائِياً",
            options: [
              { id: '106', name: 'ثَلَّاجَة', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459117/Fridge_fokd01.webp', isOdd: false },
              { id: '401', name: 'تُفَّاح', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6fac6?auto=format&fit=crop&w=500&q=80', isOdd: true }, // The odd one (Fruit)
              { id: '107', name: 'غَسَّالَة', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459121/Washing-machine_gq19g8.jpg', isOdd: false },
              { id: '108', name: 'تِلْفاز', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459119/Tv_sz2vpe.webp', isOdd: false }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'zoo',
    title: 'في الحديقة',
    icon: '🦁',
    levels: [
      {
        id: 1,
        questions: [
          {
            id: 1,
            instructions: "مَا هُوَ الشَّيْءُ الَّذِي لَا يَنْتَمِي إِلَى الْمَجْمُوعَة؟",
            explanation: "الْكُرْسِيُّ جَمَادٌ وَلَيْسَ مِنْ حَيَوَانَاتِ الْغَابَة",
            options: [
              { id: '201', name: 'أَسَد', image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=500&q=80', isOdd: false },
              { id: '204', name: 'زَرَافَة', image: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=500&q=80', isOdd: false },
              { id: '202', name: 'قِرْد', image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=500&q=80', isOdd: false },
              { id: '101', name: 'كُرسي', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459120/Chair_cixx5r.jpg', isOdd: true } // The odd one (Home)
            ]
          },
          {
            id: 2,
            instructions: "مَا هُوَ الشَّيْءُ الَّذِي لَا يَنْتَمِي إِلَى الْمَجْمُوعَة؟",
            explanation: "الْبَقَرَةُ تَعِيشُ فِي الْمَزْرَعَةِ وَلَيْسَتْ حَيَوَاناً مُفْتَرِساً أَوْ بَرِّيًّا",
            options: [
              { id: '206', name: 'تِمْسَاح', image: 'https://images.unsplash.com/photo-1517424606705-7769eec58f55?auto=format&fit=crop&w=500&q=80', isOdd: false },
              { id: '301', name: 'بَقَرَة', image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=500&q=80', isOdd: true }, // The odd one (Farm)
              { id: '207', name: 'دُبّ', image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=500&q=80', isOdd: false },
              { id: '208', name: 'نَمِر', image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=500&q=80', isOdd: false }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'farm',
    title: 'في المزرعة',
    icon: '🐄',
    levels: [
      {
        id: 1,
        questions: [
          {
            id: 1,
            instructions: "مَا هُوَ الشَّيْءُ الَّذِي لَا يَنْتَمِي إِلَى الْمَجْمُوعَة؟",
            explanation: "التِّلْفَازُ لَيْسَ مِنْ حَيَوَانَاتِ الْمَزْرَعَة",
            options: [
              { id: '108', name: 'تِلْفاز', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459119/Tv_sz2vpe.webp', isOdd: true }, // The odd one (Home)
              { id: '302', name: 'خَرُوف', image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=500&q=80', isOdd: false },
              { id: '304', name: 'دَجَاجَة', image: 'https://images.unsplash.com/photo-1548550023-2bfc3cce62f7?auto=format&fit=crop&w=500&q=80', isOdd: false },
              { id: '301', name: 'بَقَرَة', image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=500&q=80', isOdd: false }
            ]
          },
          {
            id: 2,
            instructions: "مَا هُوَ الشَّيْءُ الَّذِي لَا يَنْتَمِي إِلَى الْمَجْمُوعَة؟",
            explanation: "الْمَوْزُ مِنَ الْفَوَاكِهِ وَلَيْسَ مِنْ حَيَوَانَاتِ الْمَزْرَعَة",
            options: [
              { id: '305', name: 'كَلْب', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=500&q=80', isOdd: false },
              { id: '306', name: 'قِطَّة', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=80', isOdd: false },
              { id: '402', name: 'مَوْز', image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=500&q=80', isOdd: true }, // The odd one (Fruit)
              { id: '308', name: 'أَرْنَب', image: 'https://images.unsplash.com/photo-1585110396000-c9fd4e4e5030?auto=format&fit=crop&w=500&q=80', isOdd: false }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'fruit_veg',
    title: 'الفواكه والخضروات',
    icon: '🍎',
    levels: [
      {
        id: 1,
        questions: [
          {
            id: 1,
            instructions: "مَا هُوَ الشَّيْءُ الَّذِي لَا يَنْتَمِي إِلَى الْمَجْمُوعَة؟",
            explanation: "السَّرِيرُ جَمَادٌ نَنَامُ عَلَيْهِ وَلَيْسَ شَيْئاً نَأْكُلُه",
            options: [
              { id: '401', name: 'تُفَّاح', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6fac6?auto=format&fit=crop&w=500&q=80', isOdd: false },
              { id: '103', name: 'سَرير', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459118/Bed_mpyndf.jpg', isOdd: true }, // The odd one (Home)
              { id: '402', name: 'مَوْز', image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=500&q=80', isOdd: false },
              { id: '405', name: 'عِنَب', image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=500&q=80', isOdd: false }
            ]
          },
          {
            id: 2,
            instructions: "مَا هُوَ الشَّيْءُ الَّذِي لَا يَنْتَمِي إِلَى الْمَجْمُوعَة؟",
            explanation: "الْقِرْدُ حَيَوَانٌ وَلَيْسَ مِنَ الْخُضْرَوَات",
            options: [
              { id: '407', name: 'جَزَر', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=80', isOdd: false },
              { id: '408', name: 'طَمَاطِم', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80', isOdd: false },
              { id: '409', name: 'خِيَار', image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=500&q=80', isOdd: false },
              { id: '202', name: 'قِرْد', image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=500&q=80', isOdd: true } // The odd one (Zoo)
            ]
          }
        ]
      }
    ]
  }
];