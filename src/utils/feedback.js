import Swal from 'sweetalert2';

export const showFeedback = {
  // 1. Correct Answer - We pass playSuccess as an argument
  correct: (playSuccess) => {
    if (playSuccess) playSuccess(); 
    return Swal.fire({
      title: 'ممتاز! ✨',
      text: 'إجابة رائعة',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
      background: '#f0fdf4',
      color: '#166534',
    });
  },

  // 2. Wrong Answer - We pass playWrong as an argument
  wrong: (playWrong) => {
    if (playWrong) playWrong();
    return Swal.fire({
      title: 'حاول ثانية! 💪',
      text: 'أنت تقترب من الإجابة الصحيحة',
      icon: 'info',
      timer: 1500,
      showConfirmButton: false,
      background: '#fff7ed',
      color: '#9a3412',
    });
  },

  // 3. Level Finished - We pass playCelebrate as an argument
  celebrate: (zoneTitle, playCelebrate) => {
    if (playCelebrate) playCelebrate();
    return Swal.fire({
      title: 'بطل الاستماع! 🏆',
      html: `<p>لقد أنهيت <b>${zoneTitle}</b> بنجاح!</p>`,
      imageUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjByYXJnMHIwY2Q4cXNjZnFvN3RhOTdkNnprdjl6aHU0NHFrNXgzdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5xj6M6afyYjdIpA8VG/giphy.gif',
      imageWidth: 200,
      confirmButtonText: 'إلى الأمام! 🚀',
      confirmButtonColor: '#f59e0b',
    });
  }
};