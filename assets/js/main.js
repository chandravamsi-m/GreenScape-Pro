/* ===== GreenScape Pro — Master Script ===== */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRTL();
  initMobileMenu();
  initBeforeAfterSlider();
  initPortfolioFilter();
  initStatsCounter();
  initMultiStepForm();
  initDashboardTabs();
  initFaqAccordion();
  initScrollReveal();
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

/* ==========================================================================
   1. Theme Toggler (Light / Dark Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle');
  
  // Set initial theme
  const savedTheme = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const activeTheme = savedTheme || (systemDark ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', activeTheme);
  if (activeTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Bind clicks
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', nextTheme);
      if (nextTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', nextTheme);
    });
  });
}

/* ==========================================================================
   2. RTL Toggler
   ========================================================================== */
function initRTL() {
  const rtlToggleBtns = document.querySelectorAll('.rtl-toggle');
  
  // Set initial dir
  const savedDir = localStorage.getItem('dir') || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);
  
  const rtlStyleLink = document.getElementById('rtl-stylesheet');
  if (rtlStyleLink) {
    rtlStyleLink.disabled = (savedDir === 'ltr');
  }

  // Bind clicks
  rtlToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const nextDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      
      document.documentElement.setAttribute('dir', nextDir);
      localStorage.setItem('dir', nextDir);
      
      if (rtlStyleLink) {
        rtlStyleLink.disabled = (nextDir === 'ltr');
      }
    });
  });
}

/* ==========================================================================
   3. Mobile Menu Navigation
   ========================================================================== */
function initMobileMenu() {
  const burgerBtn = document.getElementById('mobile-menu-burger');
  const menuDrawer = document.getElementById('mobile-menu-drawer');
  const closeBtn = document.getElementById('mobile-menu-close');
  
  if (burgerBtn && menuDrawer) {
    burgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      menuDrawer.classList.remove('translate-x-full');
    });
  }
  
  if (closeBtn && menuDrawer) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      menuDrawer.classList.add('translate-x-full');
    });
  }

  // Click outside/away to close
  document.addEventListener('click', (e) => {
    if (menuDrawer && !menuDrawer.classList.contains('translate-x-full')) {
      if (!menuDrawer.contains(e.target) && (!burgerBtn || !burgerBtn.contains(e.target))) {
        menuDrawer.classList.add('translate-x-full');
      }
    }
  });

  // Stop propagation on clicks inside the drawer so it doesn't auto-close
  if (menuDrawer) {
    menuDrawer.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
}

/* ==========================================================================
   4. Before & After Slider
   ========================================================================== */
function initBeforeAfterSlider() {
  const sliders = document.querySelectorAll('.before-after-container');
  
  sliders.forEach(slider => {
    const handle = slider.querySelector('.before-after-handle');
    const overlay = slider.querySelector('.before-after-overlay');
    
    if (!handle || !overlay) return;

    let active = false;
    
    const drag = (x) => {
      const rect = slider.getBoundingClientRect();
      let pos = ((x - rect.left) / rect.width) * 100;
      if (pos < 0) pos = 0;
      if (pos > 100) pos = 100;
      
      handle.style.left = `${pos}%`;
      overlay.style.clipPath = `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`;
    };

    // Mouse Events
    slider.addEventListener('mousedown', (e) => {
      active = true;
      drag(e.clientX);
    });
    
    window.addEventListener('mouseup', () => {
      active = false;
    });
    
    window.addEventListener('mousemove', (e) => {
      if (!active) return;
      drag(e.clientX);
    });

    // Touch Events
    slider.addEventListener('touchstart', (e) => {
      active = true;
      drag(e.touches[0].clientX);
    });
    
    window.addEventListener('touchend', () => {
      active = false;
    });
    
    window.addEventListener('touchmove', (e) => {
      if (!active) return;
      drag(e.touches[0].clientX);
    });
  });
}

/* ==========================================================================
   5. Portfolio Filtering System
   ========================================================================== */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  if (filterBtns.length === 0) return;
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active classes
      filterBtns.forEach(b => b.classList.remove('bg-primary', 'text-white'));
      filterBtns.forEach(b => b.classList.add('bg-surface', 'text-textPrimary'));
      
      btn.classList.remove('bg-surface', 'text-textPrimary');
      btn.classList.add('bg-primary', 'text-white');
      
      const filterValue = btn.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(`category-${filterValue}`)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   6. Stats Number Counters (Animated on Scroll)
   ========================================================================== */
function initStatsCounter() {
  const counters = document.querySelectorAll('.stat-counter-value');
  if (counters.length === 0) return;

  const countUp = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    const duration = 2000; // ms
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current);
      }
    }, stepTime);
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

/* ==========================================================================
   7. Multi-step Quote Form
   ========================================================================== */
function initMultiStepForm() {
  const steps = document.querySelectorAll('.quote-step');
  const nextBtns = document.querySelectorAll('.quote-next-btn');
  const prevBtns = document.querySelectorAll('.quote-prev-btn');
  const progressBar = document.getElementById('quote-progress');
  const stepIndicators = document.querySelectorAll('.quote-indicator');
  
  if (steps.length === 0) return;
  
  let currentStepIndex = 0;
  
  const updateFormState = () => {
    steps.forEach((step, idx) => {
      if (idx === currentStepIndex) {
        step.classList.remove('hidden');
      } else {
        step.classList.add('hidden');
      }
    });
    
    // Update progress bar
    if (progressBar) {
      const pct = (currentStepIndex / (steps.length - 1)) * 100;
      progressBar.style.width = `${pct}%`;
    }
    
    // Update indicators
    stepIndicators.forEach((ind, idx) => {
      if (idx <= currentStepIndex) {
        ind.classList.add('bg-primary', 'text-white');
        ind.classList.remove('bg-surface', 'text-textSecondary');
      } else {
        ind.classList.remove('bg-primary', 'text-white');
        ind.classList.add('bg-surface', 'text-textSecondary');
      }
    });
  };

  nextBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Simple validation for current step fields
      const currentStep = steps[currentStepIndex];
      const inputs = currentStep.querySelectorAll('input[required], select[required], textarea[required]');
      let valid = true;
      
      inputs.forEach(input => {
        if (!input.value) {
          valid = false;
          input.classList.add('border-red-500');
        } else {
          input.classList.remove('border-red-500');
        }
      });
      
      if (!valid) {
        return;
      }
      
      if (currentStepIndex < steps.length - 1) {
        currentStepIndex++;
        updateFormState();
      }
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentStepIndex > 0) {
        currentStepIndex--;
        updateFormState();
      }
    });
  });
  
  const quoteForm = document.getElementById('multistep-quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Reset form
      quoteForm.reset();
      currentStepIndex = 0;
      updateFormState();
    });
  }
}

/* ==========================================================================
   8. Dashboard Side-Navigation / Tab Switching
   ========================================================================== */
function initDashboardTabs() {
  const tabs = document.querySelectorAll('.db-tab-btn');
  const sections = document.querySelectorAll('.db-section');
  
  if (tabs.length === 0) return;
  
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSectionId = tab.getAttribute('data-target');
      
      // Update sidebar styling
      tabs.forEach(t => {
        t.classList.remove('bg-primary/20', 'text-primary', 'border-l-4', 'border-primary');
        t.classList.add('text-textSecondary');
      });
      
      tab.classList.add('bg-primary/20', 'text-primary', 'border-l-4', 'border-primary');
      tab.classList.remove('text-textSecondary');
      
      // Toggle sections
      sections.forEach(sec => {
        if (sec.id === targetSectionId) {
          sec.classList.remove('hidden');
        } else {
          sec.classList.add('hidden');
        }
      });
      
      // Update header title dynamically
      const headerTitle = document.getElementById('header-title');
      if (headerTitle) {
        const titleMap = {
          'overview': 'Dashboard Overview & Stats',
          'projects': 'Active Landscaping Projects',
          'approvals': 'Design Approvals & Proposals',
          'schedule': 'Garden Maintenance Schedule',
          'payments': 'Payments, Invoices & Balances',
          'messages': 'Client Team Conversation',
          'admin-overview': 'Admin Dashboard Controls',
          'clients': 'Client Directory & Accounts',
          'admin-projects': 'Project Management & Contracts',
          'admin-approvals': 'Submit Design Proposals',
          'admin-scheduling': 'Crew Scheduling Board',
          'reports': 'Performance & Revenue Reports'
        };
        headerTitle.textContent = titleMap[targetSectionId] || tab.textContent.trim();
      }
      
      // Close sidebar on mobile
      const dbSidebar = document.getElementById('db-sidebar');
      if (dbSidebar) {
        dbSidebar.classList.add('-translate-x-full');
      }
    });
  });
  
  // Mobile toggle for dashboard sidebar
  const dbSidebarToggle = document.getElementById('db-sidebar-toggle');
  const dbSidebar = document.getElementById('db-sidebar');
  if (dbSidebarToggle && dbSidebar) {
    dbSidebarToggle.addEventListener('click', () => {
      dbSidebar.classList.toggle('-translate-x-full');
    });
  }
}

/* ==========================================================================
   9. Accordion for FAQs
   ========================================================================== */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-header');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const content = item.nextElementSibling;
      const icon = item.querySelector('.faq-icon');
      const isExpanded = !content.classList.contains('hidden');
      
      // Close all other accordion items
      items.forEach(otherItem => {
        const otherContent = otherItem.nextElementSibling;
        const otherIcon = otherItem.querySelector('.faq-icon');
        if (otherContent) {
          otherContent.classList.add('hidden');
        }
        if (otherIcon) {
          otherIcon.classList.remove('rotate-180');
        }
      });
      
      // Open this item if it wasn't already expanded
      if (!isExpanded) {
        if (content) {
          content.classList.remove('hidden');
        }
        if (icon) {
          icon.classList.add('rotate-180');
        }
      }
    });
  });
}

/* ==========================================================================
   10. Toast Notification System
   ========================================================================== */
function showToast(message, type = 'info') {
  // Toast notifications disabled by user request
}

/* ==========================================================================
   11. Scroll Reveal Animation
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (elements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}
