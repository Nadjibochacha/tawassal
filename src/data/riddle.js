// The Riddle Game - لُعْبَةُ الْحَزَازِير
export const riddleLevels = [
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
            riddle: "أَنَا شَيْءٌ فِي الْمَطْبَخ، أَحْفَظُ الطَّعَامَ بَارِداً، مَنْ أَنَا؟",
            correctAnswerId: '106',
            options: [
              { id: '107', name: 'غَسَّالَة', image: 'https://www.lg.com/content/dam/channel/wcms/eg_ar/images/washing-machines/f2t2tym1s_adspeec_efeg_eg_ar_c/DZ-13.jpg?w=800' },
              { id: '106', name: 'ثَلَّاجَة', image: 'https://web-res.midea.com/content/dam/toshiba-aem/me/refrigerator/gr-rt624/morandi/product-images/Satin-Grey2.jpg/jcr:content/renditions/Satin-Grey2.webp' },
              { id: '108', name: 'تِلْفاز', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459114/Television_lkmi8v.webp' }
            ]
          },
          {
            id: 2,
            riddle: "لَدَيَّ أَرْبَعُ أَرْجُلٍ لَكِنَّنِي لَا أَمْشِي، تَنَامُ عَلَيَّ فِي اللَّيْل، مَنْ أَنَا؟",
            correctAnswerId: '103',
            options: [
              { id: '101', name: 'كُرسي', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459120/Chair_cixx5r.jpg' },
              { id: '102', name: 'طاوِلة', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459118/Table_lbybxq.webp' },
              { id: '103', name: 'سَرير', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459117/Bed_lfh7hz.webp' }
            ]
          },
          {
            id: 3,
            riddle: "أَنَا جِهَازٌ فِيهِ شَاشَة، تُشَاهِدُ عَلَيَّ الرُّسُومَ الْمُتَحَرِّكَة، مَنْ أَنَا؟",
            correctAnswerId: '108',
            options: [
              { id: '108', name: 'تِلْفاز', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459114/Television_lkmi8v.webp' },
              { id: '112', name: 'فُرْن', image: 'https://cdn.salla.sa/xAYdov/31bc53b7-4085-4d58-8251-18538a36b583-1000x1000-KL2L1Sd5iBkMkxOdQM0vmIOV78ZE8YEaVgAV7QNq.jpg' },
              { id: '110', name: 'مِصْبَاح', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80' }
            ]
          },
          {
            id: 4,
            riddle: "أَدُورُ وَأَدُور، لِأُنَظِّفَ مَلَابِسَكَ الْمُتَّسِخَة، مَنْ أَنَا؟",
            correctAnswerId: '107',
            options: [
              { id: '106', name: 'ثَلَّاجَة', image: 'https://web-res.midea.com/content/dam/toshiba-aem/me/refrigerator/gr-rt624/morandi/product-images/Satin-Grey2.jpg/jcr:content/renditions/Satin-Grey2.webp' },
              { id: '107', name: 'غَسَّالَة', image: 'https://www.lg.com/content/dam/channel/wcms/eg_ar/images/washing-machines/f2t2tym1s_adspeec_efeg_eg_ar_c/DZ-13.jpg?w=800' },
              { id: '111', name: 'خِزَانَة', image: 'https://m.media-amazon.com/images/I/51fXrx6es2L.jpg' }
            ]
          },
          {
            id: 5,
            riddle: "أَقِفُ فِي مُنْتَصَفِ الْغُرْفَة، وَتَضَعُ عَلَيَّ الطَّعَامَ لِتَأْكُل، مَنْ أَنَا؟",
            correctAnswerId: '102',
            options: [
              { id: '109', name: 'أَرِيكَة', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80' },
              { id: '101', name: 'كُرسي', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459120/Chair_cixx5r.jpg' },
              { id: '102', name: 'طاوِلة', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459118/Table_lbybxq.webp' }
            ]
          },
          {
            id: 6,
            riddle: "أَفْتَحُ لَكَ لِتَدْخُلَ الْغُرْفَة، وَأُغْلِقُ لِأَحْفَظَ أَمَانَك، مَنْ أَنَا؟",
            correctAnswerId: '104',
            options: [
              { id: '104', name: 'باب', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459117/Door_utp0ix.webp' },
              { id: '113', name: 'نَافِذَة', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459117/Window_e1yn9p.webp' },
              { id: '111', name: 'خِزَانَة', image: 'https://m.media-amazon.com/images/I/51fXrx6es2L.jpg' }
            ]
          },
          {
            id: 7,
            riddle: "فِي دَاخِلِي نَارٌ حَارَّة، أُمِّي تَخْبِزُ فِيَّ الْكَعْكَ اللَّذِيذ، مَنْ أَنَا؟",
            correctAnswerId: '112',
            options: [
              { id: '106', name: 'ثَلَّاجَة', image: 'https://web-res.midea.com/content/dam/toshiba-aem/me/refrigerator/gr-rt624/morandi/product-images/Satin-Grey2.jpg/jcr:content/renditions/Satin-Grey2.webp' },
              { id: '112', name: 'فُرْن', image: 'https://cdn.salla.sa/xAYdov/31bc53b7-4085-4d58-8251-18538a36b583-1000x1000-KL2L1Sd5iBkMkxOdQM0vmIOV78ZE8YEaVgAV7QNq.jpg' },
              { id: '107', name: 'غَسَّالَة', image: 'https://www.lg.com/content/dam/channel/wcms/eg_ar/images/washing-machines/f2t2tym1s_adspeec_efeg_eg_ar_c/DZ-13.jpg?w=800' }
            ]
          },
          {
            id: 8,
            riddle: "تَضَعُ فِيَّ مَلَابِسَكَ لِتَبْقَى مُرَتَّبَةً وَجَمِيلَة، مَنْ أَنَا؟",
            correctAnswerId: '111',
            options: [
              { id: '111', name: 'خِزَانَة', image: 'https://m.media-amazon.com/images/I/51fXrx6es2L.jpg' },
              { id: '104', name: 'باب', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459117/Door_utp0ix.webp' },
              { id: '103', name: 'سَرير', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459117/Bed_lfh7hz.webp' }
            ]
          },
          {
            id: 9,
            riddle: "عِنْدَمَا يَحِلُّ الظَّلَام، تُضِيئُنِي لِتَرَى غُرْفَتَكَ، مَنْ أَنَا؟",
            correctAnswerId: '110',
            options: [
              { id: '110', name: 'مِصْبَاح', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80' },
              { id: '108', name: 'تِلْفاز', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459114/Television_lkmi8v.webp' },
              { id: '113', name: 'نَافِذَة', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459117/Window_e1yn9p.webp' }
            ]
          },
          {
            id: 10,
            riddle: "أَنَا مُرِيحَةٌ جِدّاً، تَجْلِسُ عَلَيَّ لِمُشَاهَدَةِ التِّلْفَاز، مَنْ أَنَا؟",
            correctAnswerId: '109',
            options: [
              { id: '101', name: 'كُرسي', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459120/Chair_cixx5r.jpg' },
              { id: '102', name: 'طاوِلة', image: 'https://res.cloudinary.com/dwyiuyy8u/image/upload/v1776459118/Table_lbybxq.webp' },
              { id: '109', name: 'أَرِيكَة', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80' }
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
            riddle: "أَنَا حَيَوَانٌ ضَخْمٌ، لَدَيَّ خُرْطُومٌ طَوِيلٌ وَأُذُنَانِ كَبِيرَتَان، مَنْ أَنَا؟",
            correctAnswerId: '203',
            options: [
              { id: '201', name: 'أَسَد', image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=500&q=80' },
              { id: '202', name: 'قِرْد', image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=500&q=80' },
              { id: '203', name: 'فِيل', image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=500&q=80' }
            ]
          },
          {
            id: 2,
            riddle: "رَقَبَتِي طَوِيلَةٌ جِدّاً، وَأُحِبُّ أَنْ آكُلَ أَوْرَاقَ الْأَشْجَارِ الْعَالِيَة، مَنْ أَنَا؟",
            correctAnswerId: '204',
            options: [
              { id: '204', name: 'زَرَافَة', image: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=500&q=80' },
              { id: '206', name: 'تِمْسَاح', image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400,h_468/https://www.p7otoempire.com/wp-content/uploads/2021/08/%D8%B5%D9%88%D8%B1-%D8%AA%D9%85%D8%B3%D8%A7%D8%AD-8.jpg' },
              { id: '208', name: 'نَمِر', image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=500&q=80' }
            ]
          },
          {
            id: 3,
            riddle: "أَنَا مَلِكُ الْغَابَة، صَوْتِي مُخِيفٌ وَيُسَمَّى الزَّئِير، مَنْ أَنَا؟",
            correctAnswerId: '201',
            options: [
              { id: '207', name: 'دُبّ', image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=500&q=80' },
              { id: '201', name: 'أَسَد', image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=500&q=80' },
              { id: '208', name: 'نَمِر', image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=500&q=80' }
            ]
          },
          {
            id: 4,
            riddle: "أُحِبُّ أَكْلَ الْمَوْز، وَأَقْفِزُ مِنْ شَجَرَةٍ إِلَى شَجَرَةٍ بِسُرْعَة، مَنْ أَنَا؟",
            correctAnswerId: '202',
            options: [
              { id: '202', name: 'قِرْد', image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=500&q=80' },
              { id: '203', name: 'فِيل', image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=500&q=80' },
              { id: '204', name: 'زَرَافَة', image: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=500&q=80' }
            ]
          },
          {
            id: 5,
            riddle: "أَعِيشُ فِي الْمَاءِ وَعَلَى الْيَابِسَة، لَدَيَّ أَسْنَانٌ حَادَّةٌ وَفَمٌ كَبِير، مَنْ أَنَا؟",
            correctAnswerId: '206',
            options: [
              { id: '206', name: 'تِمْسَاح', image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400,h_468/https://www.p7otoempire.com/wp-content/uploads/2021/08/%D8%B5%D9%88%D8%B1-%D8%AA%D9%85%D8%B3%D8%A7%D8%AD-8.jpg' },
              { id: '210', name: 'وَحِيدُ الْقَرْن', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Ostafrikanisches_Spitzmaulnashorn.JPG' },
              { id: '208', name: 'نَمِر', image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&w=500&q=80' }
            ]
          },
          {
            id: 6,
            riddle: "لَدَيَّ فَرْوٌ سَمِيك، وَأُحِبُّ أَنْ آكُلَ الْعَسَلَ اللَّذِيذ، مَنْ أَنَا؟",
            correctAnswerId: '207',
            options: [
              { id: '201', name: 'أَسَد', image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=500&q=80' },
              { id: '207', name: 'دُبّ', image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=500&q=80' },
              { id: '209', name: 'حِمَار وَحْشِيّ', image: 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?auto=format&fit=crop&w=500&q=80' }
            ]
          },
          {
            id: 7,
            riddle: "لَوْنِي بُرْتُقَالِيٌّ مَعَ خُطُوطٍ سَوْدَاء، وَأَرْكُضُ بِسُرْعَةٍ خَطِيرَة، مَنْ أَنَا؟",
            correctAnswerId: '208',
            options: [
              { id: '208', name: 'نَمِر', image: 'https://marketplace.canva.com/1id2w/MAFDyJ1id2w/1/tl/canva-MAFDyJ1id2w.jpg' },
              { id: '209', name: 'حِمَار وَحْشِيّ', image: 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?auto=format&fit=crop&w=500&q=80' },
              { id: '206', name: 'تِمْسَاح', image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400,h_468/https://www.p7otoempire.com/wp-content/uploads/2021/08/%D8%B5%D9%88%D8%B1-%D8%AA%D9%85%D8%B3%D8%A7%D8%AD-8.jpg' }
            ]
          },
          {
            id: 8,
            riddle: "أُشْبِهُ الْحِصَان، لَكِنَّ لَوْنِي مُخَطَّطٌ بِالْأَبْيَضِ وَالْأَسْوَد، مَنْ أَنَا؟",
            correctAnswerId: '209',
            options: [
              { id: '204', name: 'زَرَافَة', image: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=500&q=80' },
              { id: '209', name: 'حِمَار وَحْشِيّ', image: 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?auto=format&fit=crop&w=500&q=80' },
              { id: '210', name: 'وَحِيدُ الْقَرْن', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Ostafrikanisches_Spitzmaulnashorn.JPG' }
            ]
          },
          {
            id: 9,
            riddle: "أَنَا حَيَوَانٌ ضَخْمٌ قَوِيّ، وَلَدَيَّ قَرْنٌ وَاحِدٌ عَلَى أَنْفِي، مَنْ أَنَا؟",
            correctAnswerId: '210',
            options: [
              { id: '210', name: 'وَحِيدُ الْقَرْن', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Ostafrikanisches_Spitzmaulnashorn.JPG' },
              { id: '203', name: 'فِيل', image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=500&q=80' },
              { id: '206', name: 'تِمْسَاح', image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400,h_468/https://www.p7otoempire.com/wp-content/uploads/2021/08/%D8%B5%D9%88%D8%B1-%D8%AA%D9%85%D8%B3%D8%A7%D8%AD-8.jpg' }
            ]
          },
          {
            id: 10,
            riddle: "لَدَيَّ ذَيْلٌ طَوِيل، أُحِبُّ اللَّعِبَ وَتَقْلِيدَ حَرَكَاتِ النَّاس، مَنْ أَنَا؟",
            correctAnswerId: '202',
            options: [
              { id: '207', name: 'دُبّ', image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=500&q=80' },
              { id: '201', name: 'أَسَد', image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=500&q=80' },
              { id: '202', name: 'قِرْد', image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=500&q=80' }
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
            riddle: "أُعْطِيكُمُ الْحَلِيبَ اللَّذِيذ، وَأَقُولُ 'مُووو'، مَنْ أَنَا؟",
            correctAnswerId: '301',
            options: [
              { id: '301', name: 'بَقَرَة', image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=500&q=80' },
              { id: '302', name: 'خَرُوف', image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=500&q=80' },
              { id: '304', name: 'دَجَاجَة', image: 'https://media.istockphoto.com/id/1129075449/photo/white-big-hen.jpg?s=612x612&w=0&k=20&c=UaYDgLXcUyQ77YAWr5DdM2bJ8xZkmQEv1NqgX1YrHn0=' }
            ]
          },
          {
            id: 2,
            riddle: "لَدَيَّ رِيشٌ جَمِيل، وَأُعْطِيكُمُ الْبَيْضَ كُلَّ صَبَاح، مَنْ أَنَا؟",
            correctAnswerId: '304',
            options: [
              { id: '307', name: 'بَطَّة', image: 'https://static.vecteezy.com/system/resources/thumbnails/058/117/766/small/charming-khaki-campbell-duck-color-illustration-artwork-cartoon-art-animal-illustration-vector.jpg' },
              { id: '305', name: 'كَلْب', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=500&q=80' },
              { id: '304', name: 'دَجَاجَة', image: 'https://media.istockphoto.com/id/1129075449/photo/white-big-hen.jpg?s=612x612&w=0&k=20&c=UaYDgLXcUyQ77YAWr5DdM2bJ8xZkmQEv1NqgX1YrHn0=' }
            ]
          },
          {
            id: 3,
            riddle: "لَدَيَّ صُوفٌ دَافِئٌ يَلْبَسُهُ النَّاس، وَأَقُولُ 'مَاع مَاع'، مَنْ أَنَا؟",
            correctAnswerId: '302',
            options: [
              { id: '302', name: 'خَرُوف', image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=500&q=80' },
              { id: '309', name: 'مَاعِز', image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=500&q=80' },
              { id: '301', name: 'بَقَرَة', image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=500&q=80' }
            ]
          },
          {
            id: 4,
            riddle: "أَنَا صَدِيقُ الْإِنْسَان، أَحْرُسُ الْمَزْرَعَةَ وَأَقُولُ 'هَوْ هَوْ'، مَنْ أَنَا؟",
            correctAnswerId: '305',
            options: [
              { id: '306', name: 'قِطَّة', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=80' },
              { id: '305', name: 'كَلْب', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=500&q=80' },
              { id: '308', name: 'أَرْنَب', image: 'https://thumbs.dreamstime.com/b/white-rabbit-gray-background-sitting-38897227.jpg' }
            ]
          },
          {
            id: 5,
            riddle: "أُحِبُّ أَنْ أَسْبَحَ فِي بِرْكَةِ الْمَاءِ، وَصَوْتِي هُوَ 'قَاق قَاق'، مَنْ أَنَا؟",
            correctAnswerId: '307',
            options: [
              { id: '307', name: 'بَطَّة', image: 'https://static.vecteezy.com/system/resources/thumbnails/058/117/766/small/charming-khaki-campbell-duck-color-illustration-artwork-cartoon-art-animal-illustration-vector.jpg' },
              { id: '304', name: 'دَجَاجَة', image: 'https://media.istockphoto.com/id/1129075449/photo/white-big-hen.jpg?s=612x612&w=0&k=20&c=UaYDgLXcUyQ77YAWr5DdM2bJ8xZkmQEv1NqgX1YrHn0=' },
              { id: '311', name: 'دِيك', image: 'https://i.pinimg.com/originals/19/cd/37/19cd378b793f7993e1278112c19ca855.jpg' }
            ]
          },
          {
            id: 6,
            riddle: "أُحِبُّ شُرْبَ الْحَلِيبِ وَأَصْطَادُ الْفِئْرَان، وَأَقُولُ 'مِيَاو'، مَنْ أَنَا؟",
            correctAnswerId: '306',
            options: [
              { id: '305', name: 'كَلْب', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=500&q=80' },
              { id: '306', name: 'قِطَّة', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=80' },
              { id: '308', name: 'أَرْنَب', image: 'https://thumbs.dreamstime.com/b/white-rabbit-gray-background-sitting-38897227.jpg' }
            ]
          },
          {
            id: 7,
            riddle: "أُذُنَايَ طَوِيلَتَان، أَقْفِزُ بِسُرْعَةٍ وَأُحِبُّ أَكْلَ الْجَزَر، مَنْ أَنَا؟",
            correctAnswerId: '308',
            options: [
              { id: '308', name: 'أَرْنَب', image: 'https://thumbs.dreamstime.com/b/white-rabbit-gray-background-sitting-38897227.jpg' },
              { id: '302', name: 'خَرُوف', image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=500&q=80' },
              { id: '306', name: 'قِطَّة', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=80' }
            ]
          },
          {
            id: 8,
            riddle: "أَنَا قَوِيٌّ وَأَرْكُضُ بِسُرْعَة، يَرْكَبُ النَّاسُ عَلَى ظَهْرِي، مَنْ أَنَا؟",
            correctAnswerId: '303',
            options: [
              { id: '310', name: 'بَاندا', image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=500&q=80' },
              { id: '303', name: 'حِصَان', image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=500&q=80' },
              { id: '301', name: 'بَقَرَة', image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=500&q=80' }
            ]
          },
          {
            id: 9,
            riddle: "لَدَيَّ قَرْنَانِ صَغِيرَانِ وَلِحْيَة، وَأُحِبُّ أَنْ آكُلَ الْعُشْب، مَنْ أَنَا؟",
            correctAnswerId: '309',
            options: [
              { id: '302', name: 'خَرُوف', image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=500&q=80' },
              { id: '309', name: 'مَاعِز', image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=500&q=80' },
              { id: '303', name: 'حِصَان', image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=500&q=80' }
            ]
          },
          {
            id: 10,
            riddle: "أُوقِظُ الْفَلَّاحَ كُلَّ صَبَاحٍ بَاكِرٍ بِصَوْتِي 'كُوكُو كُوكُو'، مَنْ أَنَا؟",
            correctAnswerId: '311',
            options: [
              { id: '304', name: 'دَجَاجَة', image: 'https://media.istockphoto.com/id/1129075449/photo/white-big-hen.jpg?s=612x612&w=0&k=20&c=UaYDgLXcUyQ77YAWr5DdM2bJ8xZkmQEv1NqgX1YrHn0=' },
              { id: '311', name: 'دِيك', image: 'https://i.pinimg.com/originals/19/cd/37/19cd378b793f7993e1278112c19ca855.jpg' },
              { id: '307', name: 'بَطَّة', image: 'https://static.vecteezy.com/system/resources/thumbnails/058/117/766/small/charming-khaki-campbell-duck-color-illustration-artwork-cartoon-art-animal-illustration-vector.jpg' }
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
            riddle: "لَوْنِي أَصْفَر، وَالْقِرْدُ يُحِبُّ أَنْ يَأْكُلَنِي كَثِيراً، مَنْ أَنَا؟",
            correctAnswerId: '402',
            options: [
              { id: '401', name: 'تُفَّاح', image: 'https://img.freepik.com/premium-photo/fresh-red-apple-fruit-with-sliced-green-leaves-isolated-white-background_252965-8.jpg?semt=ais_hybrid&w=740&q=80' },
              { id: '402', name: 'مَوْز', image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=500&q=80' },
              { id: '403', name: 'بُرْتُقَال', image: 'https://images.unsplash.com/photo-1549888834-3ec93abae044?auto=format&fit=crop&w=500&q=80' }
            ]
          },
          {
            id: 2,
            riddle: "لَوْنِي بُرْتُقَالِيّ، وَالْأَرْنَبُ يُحِبُّ أَنْ يَقْرِضَنِي، مَنْ أَنَا؟",
            correctAnswerId: '407',
            options: [
              { id: '408', name: 'طَمَاطِم', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80' },
              { id: '409', name: 'خِيَار', image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=500&q=80' },
              { id: '407', name: 'جَزَر', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=80' }
            ]
          },
          {
            id: 3,
            riddle: "لَوْنِي أَحْمَرُ أَوْ أَخْضَر، طَعْمِي لَذِيذٌ وَمُقَرْمِش، مَنْ أَنَا؟",
            correctAnswerId: '401',
            options: [
              { id: '401', name: 'تُفَّاح', image: 'https://img.freepik.com/premium-photo/fresh-red-apple-fruit-with-sliced-green-leaves-isolated-white-background_252965-8.jpg?semt=ais_hybrid&w=740&q=80' },
              { id: '404', name: 'فَرَاوِلَة', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=500&q=80' },
              { id: '408', name: 'طَمَاطِم', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80' }
            ]
          },
          {
            id: 4,
            riddle: "مِنَ الْخَارِجِ لَوْنِي أَخْضَر وَمِنَ الدَّاخِلِ أَحْمَرُ وَفِيَّ بُذُورٌ سَوْدَاء، مَنْ أَنَا؟",
            correctAnswerId: '406',
            options: [
              { id: '406', name: 'بِطِّيخ', image: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&w=500&q=80' },
              { id: '405', name: 'عِنَب', image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=500&q=80' },
              { id: '401', name: 'تُفَّاح', image: 'https://img.freepik.com/premium-photo/fresh-red-apple-fruit-with-sliced-green-leaves-isolated-white-background_252965-8.jpg?semt=ais_hybrid&w=740&q=80' }
            ]
          },
          {
            id: 5,
            riddle: "اِسْمِي مِثْلُ لَوْنِي، وَأَنَا مَلِيءٌ بِالْعَصِيرِ الْمُفِيدِ وَفِيتَامِين سِي، مَنْ أَنَا؟",
            correctAnswerId: '403',
            options: [
              { id: '407', name: 'جَزَر', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=80' },
              { id: '403', name: 'بُرْتُقَال', image: 'https://images.unsplash.com/photo-1549888834-3ec93abae044?auto=format&fit=crop&w=500&q=80' },
              { id: '402', name: 'مَوْز', image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=500&q=80' }
            ]
          },
          {
            id: 6,
            riddle: "لَوْنِي أَحْمَر، طَعْمِي حُلْو، وَلَدَيَّ بُذُورٌ صَغِيرَةٌ جِدّاً عَلَى قِشْرَتِي، مَنْ أَنَا؟",
            correctAnswerId: '404',
            options: [
              { id: '404', name: 'فَرَاوِلَة', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=500&q=80' },
              { id: '408', name: 'طَمَاطِم', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80' },
              { id: '401', name: 'تُفَّاح', image: 'https://img.freepik.com/premium-photo/fresh-red-apple-fruit-with-sliced-green-leaves-isolated-white-background_252965-8.jpg?semt=ais_hybrid&w=740&q=80' }
            ]
          },
          {
            id: 7,
            riddle: "حَبَّاتِي صَغِيرَةٌ وَدَائِرِيَّة، وَنَنْمُو مَعاً فِي عُنْقُودٍ كَبِير، مَنْ أَنَا؟",
            correctAnswerId: '405',
            options: [
              { id: '406', name: 'بِطِّيخ', image: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&w=500&q=80' },
              { id: '405', name: 'عِنَب', image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=500&q=80' },
              { id: '404', name: 'فَرَاوِلَة', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=500&q=80' }
            ]
          },
          {
            id: 8,
            riddle: "لَوْنِي أَحْمَرُ، وَأُمِّي تَقْطَعُنِي لِتَصْنَعَ مِنِّي سَلَطَةً شَهِيَّة، مَنْ أَنَا؟",
            correctAnswerId: '408',
            options: [
              { id: '408', name: 'طَمَاطِم', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80' },
              { id: '409', name: 'خِيَار', image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=500&q=80' },
              { id: '410', name: 'بَصَل', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=500&q=80' }
            ]
          },
          {
            id: 9,
            riddle: "شَكْلِي طَوِيل، لَوْنِي أَخْضَر، وَأَنَا مُقَرْمِشٌ جِدّاً فِي السَّلَطَة، مَنْ أَنَا؟",
            correctAnswerId: '409',
            options: [
              { id: '407', name: 'جَزَر', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=80' },
              { id: '409', name: 'خِيَار', image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=500&q=80' },
              { id: '406', name: 'بِطِّيخ', image: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&w=500&q=80' }
            ]
          },
          {
            id: 10,
            riddle: "عِنْدَمَا تَقْطَعُنِي أُمِّي بِالسِّكِّين، أَجْعَلُهَا تَبْكِي وَتَذْرِفُ الدُّمُوع، مَنْ أَنَا؟",
            correctAnswerId: '410',
            options: [
              { id: '410', name: 'بَصَل', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=500&q=80' },
              { id: '408', name: 'طَمَاطِم', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80' },
              { id: '409', name: 'خِيَار', image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=500&q=80' }
            ]
          }
        ]
      }
    ]
  }
];