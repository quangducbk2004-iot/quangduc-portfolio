// JUNO PORTFOLIO LOGIC & INTERACTIVITY FOR ĐÀO QUANG ĐỨC

// 1. PROJECT DATA MODAL DICTIONARY
const projectDatabase = {
  'project-code-optimization': {
    title: 'Workshop: Ứng dụng Gemini trong Tối ưu hóa Mã nguồn & Kiểm thử Phần mềm',
    badge: 'Google Student Ambassador Project',
    year: '2026',
    role: 'Technique Manager & Technical Director',
    reach: '1,320 Offline + 260 Online (Tổng 1,580+ Sinh viên)',
    rating: '4.28 / 5.0 ⭐ (82% Sẵn sàng lan tỏa kiến thức)',
    summary: 'Dự án workshop do Đại sứ Sinh viên Google Việt Nam tổ chức đã tạo tác động tích cực sâu rộng đến cộng đồng sinh viên công nghệ bằng việc xóa bỏ thói quen lạm dụng AI thụ động, thay vào đó trang bị quy trình 6 bước sử dụng Gemini như một "Senior Developer" để phản biện logic và kiểm thử mã nguồn.',
    highlights: [
      'Trực tiếp đảm nhiệm vai trò Technique Manager: xây dựng toàn bộ phương án dự phòng, kịch bản xử lý sự cố hạ tầng mạng và âm thanh/hình ảnh cho sự kiện 1.500+ người.',
      'Trang bị quy trình 6 bước ứng dụng Gemini: từ phân tích độ phức tạp thuật toán, sinh bộ kiểm thử biên (edge-case tests) đến refactor và tối ưu hiệu năng.',
      'Ghi nhận mức độ hài lòng ấn tượng 4.28/5.0 và 82% người tham gia sẵn sàng chia sẻ cho bạn bè.'
    ],
    tags: ['Google Gemini AI', 'Software Testing', 'Technique Management', 'Senior Dev Prompting']
  },
  'project-gemini-series': {
    title: 'Chuỗi Workshop Google Gemini for Students (4 Chuyên Đề Đột Phá)',
    badge: 'Chuỗi Workshop Đào Tạo Sinh Viên',
    year: '2026',
    role: 'Diễn giả & Trưởng Ban Tổ Chức',
    reach: '500+ Sinh viên Bách Khoa & Các Trường ĐH Lân Cận',
    rating: '4.5 – 4.9 / 5.0 ⭐ (Tốt - Xuất sắc)',
    summary: 'Chuỗi 4 workshop chuyên sâu giúp sinh viên khai phá toàn diện sức mạnh của Google Gemini AI trong mọi khía cạnh: Quản trị CLB, Nghiên cứu khoa học, Ứng tuyển việc làm và Xây dựng sự hiện diện số.',
    highlights: [
      'Workshop 1: "Lãnh đạo Gen Z: Tối ưu hóa vận hành CLB với Gemini" — Tự động hóa soạn thảo kế hoạch, phân bổ nhân sự và quản trị truyền thông.',
      'Workshop 2: "HACK YOUR RESEARCH: Tối ưu NCKH cùng Google AI" — Kỹ năng tổng hợp tài liệu, xử lý dữ liệu và phản biện đề cương khoa học.',
      'Workshop 3: "Gemini Career Quest: CV, Phỏng vấn & Personal Branding bằng AI" — Tối ưu hồ sơ xin việc và luyện phỏng vấn kỹ thuật.',
      'Workshop 4: "Launch Yourself Online: Website in 20 Minutes with Gemini" — Hướng dẫn sinh viên tự tay xuất bản website cá nhân trong 20 phút.',
      'Tất cả các workshop đều đạt điểm đánh giá từ 4.5 đến 4.9*, kiến tạo cộng đồng trao đổi kinh nghiệm ứng dụng AI sôi nổi.'
    ],
    tags: ['Google AI', 'Gen Z Leadership', 'Research Automation', 'Personal Branding', 'Career Quest']
  },
  'project-tiktok-channel': {
    title: 'Kênh TikTok: @hust_my_dream (Đời Sống & Thành Tích Bách Khoa)',
    badge: 'Content Creation & Storytelling',
    year: '2022 — Nay',
    role: 'Content Creator & Producer',
    reach: '31,100+ Lượt thích & ~800 Người theo dõi',
    rating: '4+ Giải Thưởng Video Cuộc Thi',
    summary: 'Kênh TikTok cá nhân chia sẻ về cuộc sống chân thực của sinh viên Bách Khoa, hành trình nỗ lực, kinh nghiệm đi làm, thực tập và hướng dẫn sử dụng công nghệ cho sinh viên khối kỹ thuật.',
    highlights: [
      'Đạt Giải Ba cuộc thi SIC — Be A Gentech (Đổi mới sáng tạo công nghệ trẻ).',
      'Đạt Giải Ba cuộc thi Một Thoáng Bách Khoa (Video truyền cảm hứng về HUST).',
      'Đạt Giải Truyền Thông cuộc thi "Từ đấu tranh đến chiến thắng ngày giải phóng Miền Nam 30/4/1975".',
      'Đạt Giải Nhì cuộc thi "Learn With Tech" (Phương pháp học tập cùng công nghệ).',
      'Xây dựng phong cách video gần gũi, truyền cảm hứng và mang lại giá trị thực tiễn cho giới trẻ.'
    ],
    tags: ['TikTok Creator', 'HUST Life', 'Tech Vlogging', 'Video Awards', '31.1K Likes']
  },
  'project-stem-lab': {
    title: 'Lab BK_FET & Triển Lãm Kỹ Thuật HUST OpenDay',
    badge: 'Hardware Engineering & STEM Lab',
    year: '01/10/2023 — Hiện tại',
    role: 'Thành viên Lab & Giảng viên Thực hành',
    reach: 'Hàng trăm học sinh THPT/THCS & Sinh viên Trường Điện',
    rating: 'Hoạt động thường niên uy tín',
    summary: 'Tham gia nghiên cứu và giảng dạy tại Lab BK_FET STEM; đại diện giới thiệu và biểu diễn các sản phẩm điện tử trong ngày hội OpenDay của Đại học Bách Khoa Hà Nội.',
    highlights: [
      'Trực tiếp hướng dẫn sinh viên thực hành, thí nghiệm các môn học mạch điện tử và vi xử lý chuyên ngành.',
      'Trình bày và thuyết minh sản phẩm công nghệ điện tử cho học sinh các trường THPT, THCS trong các dịp HUST OpenDay.',
      'Lan tỏa đam mê khoa học công nghệ và truyền cảm hứng lựa chọn ngành kỹ thuật cho thế hệ tương lai.'
    ],
    tags: ['BK_FET STEM', 'HUST OpenDay', 'Electronics Lab', 'STEM Mentorship']
  },
  'project-src-club': {
    title: 'Ban Chuyên Môn & Truyền Thông CLB Sinh Viên NCKH SRC (17K+ Followers)',
    badge: 'Học Thuật & Quản Trị Truyền Thông',
    year: '08/10/2022 — 26/05/2026',
    role: 'Thành viên Ban Chuyên Môn & Ban Truyền Thông',
    reach: '17,000+ Người theo dõi Fanpage & Sinh viên ĐHBK',
    rating: 'CLB NCKH hàng đầu Trường Điện - Điện tử',
    summary: 'Tham gia quản lý truyền thông và tổ chức các sự kiện học thuật, tọa đàm định hướng nghiên cứu khoa học cho sinh viên Trường Điện - Điện tử.',
    highlights: [
      'Vận hành nội dung chuyên môn và truyền thông fanpage với quy mô hơn 17.000 followers.',
      'Tổ chức các buổi tọa đàm, chia sẻ kinh nghiệm NCKH và định hướng chuyên ngành.',
      'Kết nối mạng lưới sinh viên nghiên cứu với các thầy cô và phòng thí nghiệm trọng điểm.'
    ],
    tags: ['SRC HUST', '17K Followers', 'Academic Seminars', 'Research Community']
  },
  'project-youth-union': {
    title: 'Hoạt Động Đoàn Hội, Tập Huấn Cán Bộ & Thiện Nguyện ĐHBK Hà Nội',
    badge: 'Thủ Lĩnh Thanh Niên',
    year: '2022 — 2025',
    role: 'Phó Ban Học Tập BCH Đoàn Trường Điện - Điện tử',
    reach: 'Toàn thể Đoàn viên & Sinh viên Trường Điện',
    rating: 'Nhiệm kỳ 2022 - 2025',
    summary: 'Giữ vai trò Phó ban học tập BCH Đoàn Thanh niên Trường Điện - Điện tử ĐHBK Hà Nội; trực tiếp tổ chức và điều phối các phong trào học tập, tập huấn cán bộ, thiện nguyện và hiến máu nhân đạo.',
    highlights: [
      'Tổ chức các tọa đàm chuyên đề về ngành học, phương pháp học tập hiệu quả.',
      'Tham gia công tác tập huấn cán bộ Đoàn - Hội, xây dựng đội ngũ kế cận năng động.',
      'Đồng hành tổ chức các chiến dịch thiện nguyện và hiến máu nhân đạo do Bách Khoa phát động.'
    ],
    tags: ['Đoàn Thanh Niên HUST', 'Phó Ban Học Tập', 'Thiện Nguyện', 'Hiến Máu']
  }
};

// 2. MODAL LOGIC
function openProjectModal(projectId) {
  const data = projectDatabase[projectId];
  if (!data) return;

  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');

  modalContent.innerHTML = `
    <div class="space-y-6">
      <div class="flex flex-wrap items-center gap-2">
        <span class="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold">
          ${data.badge}
        </span>
        <span class="px-3 py-1 rounded-full bg-juno-bg border border-juno-border text-juno-muted font-mono text-xs">
          /${data.year}
        </span>
      </div>

      <h3 class="text-2xl sm:text-3xl font-extrabold text-juno-text tracking-tight leading-tight">
        ${data.title}
      </h3>

      <!-- Metadata Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-juno-bg border border-juno-border text-xs font-mono">
        <div>
          <span class="text-juno-subtle block">/VAI TRÒ:</span>
          <span class="text-juno-text font-semibold">${data.role}</span>
        </div>
        <div>
          <span class="text-juno-subtle block">/QUY MÔ & TÁC ĐỘNG:</span>
          <span class="text-juno-text font-semibold">${data.reach}</span>
        </div>
        <div>
          <span class="text-juno-subtle block">/ĐÁNH GIÁ:</span>
          <span class="text-emerald-400 font-semibold">${data.rating}</span>
        </div>
      </div>

      <div>
        <h4 class="text-xs font-mono uppercase tracking-wider text-juno-subtle mb-2">/TỔNG QUAN DỰ ÁN</h4>
        <p class="text-sm text-juno-muted leading-relaxed font-light">
          ${data.summary}
        </p>
      </div>

      <div>
        <h4 class="text-xs font-mono uppercase tracking-wider text-juno-subtle mb-3">/KẾT QUẢ & DẤU ẤN NỔI BẬT</h4>
        <ul class="space-y-2.5 text-xs text-juno-text">
          ${data.highlights.map(item => `
            <li class="flex items-start gap-2.5">
              <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
              <span class="leading-relaxed font-light">${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="pt-4 border-t border-juno-border flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap gap-2 text-[11px] font-mono text-juno-subtle">
          ${data.tags.map(tag => `<span class="px-2 py-0.5 rounded bg-juno-bg border border-juno-border">#${tag}</span>`).join('')}
        </div>
        <button onclick="closeProjectModal()" class="px-5 py-2 rounded-full bg-juno-text text-juno-bg text-xs font-bold hover:opacity-90 transition-opacity">
          Đóng cửa sổ
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  lucide.createIcons();
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Close on backdrop or Esc key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProjectModal();
});

document.getElementById('project-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'project-modal') closeProjectModal();
});

// 3. PROJECT FILTER TABS
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. FAQ ACCORDION
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });

  // 5. STATS COUNTER ANIMATION ON SCROLL
  const counters = document.querySelectorAll('.counter');
  let animated = false;

  function runCounters() {
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const decimals = parseInt(counter.getAttribute('data-decimals') || '0');
      const duration = 2000;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutQuad
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        const currentVal = (easeProgress * target).toFixed(decimals);
        counter.textContent = currentVal;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toFixed(decimals);
        }
      }
      requestAnimationFrame(updateCounter);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        runCounters();
      }
    });
  }, { threshold: 0.2 });

  const statsBanner = document.querySelector('#hero .counter')?.closest('div');
  if (statsBanner) observer.observe(statsBanner);

  // 6. SCROLL PROGRESS BAR
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressEl = document.getElementById('scroll-progress');
    if (progressEl) progressEl.style.width = scrolled + '%';
  });

  // 7. THEME TOGGLE (Dark / Light)
  const themeToggle = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;

  // Check saved theme or default to dark
  const savedTheme = localStorage.getItem('quangduc-theme') || 'dark';
  if (savedTheme === 'dark') {
    htmlEl.classList.add('dark');
  } else {
    htmlEl.classList.remove('dark');
  }

  themeToggle?.addEventListener('click', () => {
    if (htmlEl.classList.contains('dark')) {
      htmlEl.classList.remove('dark');
      localStorage.setItem('quangduc-theme', 'light');
    } else {
      htmlEl.classList.add('dark');
      localStorage.setItem('quangduc-theme', 'dark');
    }
  });

  // 8. MOBILE MENU
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.remove('hidden');
    mobileMenu?.classList.add('flex');
    document.body.style.overflow = 'hidden';
  });

  function hideMobileMenu() {
    mobileMenu?.classList.add('hidden');
    mobileMenu?.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }

  closeMobileMenuBtn?.addEventListener('click', hideMobileMenu);
  mobileLinks.forEach(l => l.addEventListener('click', hideMobileMenu));

  // 9. CONTACT FORM
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    const submitBtn = document.getElementById('submit-btn');

    submitBtn.innerHTML = `<span>Đang gửi...</span>`;
    submitBtn.disabled = true;

    setTimeout(() => {
      showToast(`Cảm ơn bạn ${name}! Đức đã nhận được tin nhắn và sẽ phản hồi sớm.`);
      contactForm.reset();
      submitBtn.innerHTML = `<i data-lucide="send" class="w-4 h-4"></i><span>Gửi Tin Nhắn Ngay</span>`;
      submitBtn.disabled = false;
      lucide.createIcons();
    }, 800);
  });

  // Init lucide icons
  lucide.createIcons();
});

// COPY EMAIL HELPER
function copyEmail() {
  const email = 'quangduc.hust.official@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    showToast('Đã sao chép email: ' + email);
  }).catch(() => {
    showToast('Email: ' + email);
  });
}

// TOAST NOTIFICATION
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('flex');

  setTimeout(() => {
    toast.classList.add('hidden');
    toast.classList.remove('flex');
  }, 4000);
}
