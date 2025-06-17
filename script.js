// 정적 영화 데이터
const movies = [
  {
    "title": "Mission: Impossible – Dead Reckoning",
    "poster": "Movies_post/MissionImpossible Dead Reckoning.png",
    "Genre": "Action, Blockbuster",
    "Year of release": "2025",
    "rating": "★ 3.3",
    "starring": [
      "Tom Cruise",
      "Simon Pegg"
    ],
    "director": "Christopher McQuarrie"
  },
  {
    "title": "High Five",
    "poster": "Movies_post/High Five.webp",
    "Genre": "Fantasy, Comedy",
    "Year of release": "2025",
    "rating": "★ 3.1",
    "starring": [
      "Lee Jae-in",
      "Yoo Ah-in"
    ],
    "director": "Kang Hyoung-chul"
  },
  {
    "title": "Soju War",
    "poster": "Movies_post/Soju War.webp",
    "Genre": " Drama",
    "Year of release": "2025",
    "rating": "★ 3.1",
    "starring": [
      "Yoo Hae-jin",
      "Lee Je-hoon"
    ],
    "director": "Choi Dae-woong"
  },
  {
    "title": "How to Train Your Dragon",
    "poster": "Movies_post/How to Train Your Dragon.jpg",
    "Genre": "Adventure, Action, Fantasy",
    "Year of release": "2025",
    "rating": "★ 4.0",
    "starring": [
      "Mason Thames",
      "Nico Parker"
    ],
    "director": "Dean DeBlois"
  },
  {
    "title": "Bring Her Back",
    "poster": "Movies_post/Bring Her Back.webp",
    "Genre": "Horror",
    "Year of release": "2025",
    "rating": "★ 3.1",
    "starring": [
      "Billy Barratt",
      "Sally Hawkins"
    ],
    "director": "Danny Philippou"
  },
  {
    "title": "Lilo & Stitch",
    "poster": "Movies_post/Lilo & Stitch.webp",
    "Genre": "Drama, Fantasy, Comedy",
    "Year of release": "2025",
    "rating": "★ 3.1",
    "starring": [
      "Maia Kealoha",
      "Sydney Elizebeth Agudong"
    ],
    "director": "Dean Fleischer Camp"
  },
  {
    "title": "Yadang: The Snitch",
    "poster": "Movies_post/Yadang_The Snitch.webp",
    "Genre": "Crime",
    "Year of release": "2025",
    "rating": "★ 3.1",
    "starring": [
      "Kang Ha-neul",
      "Yoo Hae-jin "
    ],
    "director": "Hwang Byung-kook"
  },
  {
    "title": "SNOW WHITE",
    "poster": "Movies_post/SNOW WHITE.jpeg",
    "Genre": "Fantasy",
    "Year of release": "2025",
    "rating": "★ 3.1",
    "starring": [
      "Rachel Zegler",
      "Gal Gadot"
    ],
    "director": "Marc Webb"
  },
  {
    "title": "Mickey 17",
    "poster": "Movies_post/mickey17.jpeg",
    "Genre": "Adventure",
    "Year of release": "2025",
    "rating": "★ 3.1",
    "starring": [
      "Robert Pattinson", 
      "Naomi Ackie"
    ],
    "director": "Bong Joon Ho"
  },
  {
    "title": "Secret: Untold Melody",
    "poster": "Movies_post/Secret_Untold Melody.jpeg",
    "Genre": "Fantasy",
    "Year of release": "2025",
    "rating": "★ 3.1",
    "starring": [
      "Do Kyung soo",
      "Won Jin Ah"
    ],
    "director": "Seo Yu Min"
  },
  {
    "title": "HARBIN",
    "poster": "Movies_post/HARBIN.jpeg",
    "Genre": "Drama",
    "Year of release": "2024",
    "rating": "★ 3.1",
    "starring": [
      "Hyun Bin",
      "Park Jung Min"
    ],
    "director": "Woo Min-ho"
  },
  {
    "title": "Wicked",
    "poster": "Movies_post/Wicked.jpeg",
    "Genre": "Fantasy",
    "Year of release": "2024",
    "rating": "★ 3.1",
    "starring": [
      "Cynthia Erivo",
      "Ariana Grande"
    ],
    "director": "Jonathan Murray Chu"
  },
  {
    "title": "AMAZON BULLSEYE",
    "poster": "Movies_post/AMAZON BULLSEYE.jpeg",
    "Genre": "Comedy",
    "Year of release": "2024",
    "rating": "★ 3.1",
    "starring": [
      "Ryu Seung Ryong",
      "Cha Kang-yoon"
    ],
    "director": "Kim Chang-ju"
  },
  {
    "title": "Adult Kim Jang Ha",
    "poster": "Movies_post/Adult Kim Jang Ha.jpeg",
    "Genre": "Documentary",
    "Year of release": "2022",
    "rating": "★ 3.1",
    "starring": [
      "Kim Jang Ha",
      ""
    ],
    "director": "Hyunji Kim"
  },
  {
    "title": "Dr. Cheon and disappeared",
    "poster": "Movies_post/Dr_Cheon and disappeared.jpg",
    "Genre": "Fantasy",
    "Year of release": "2022",
    "rating": "★ 3.1",
    "starring": [
      "Seongsik Kim",
      "Isom"
    ],
    "director": "Seongsik Kim"
  },
  {
    "title": "John Wick 4",
    "poster": "Movies_post/John Wick 4.jpg",
    "Genre": "Action",
    "Year of release": "2023",
    "rating": "★ 3.1",
    "starring": [
      "Keanu Reeves",
      "Lawrence Fishburn"
    ],
    "director": "Chad Star Healthy"
  }
];

// 정적 리뷰 데이터
const reviews = {};

// 대학별 영화 4개씩 임의 분배 (원하는 분배로 수정 가능)
const universityMovieMap = {
  pnu: [0, 1, 2, 3],      // 부산대
  pknu: [4, 5, 6, 7],     // 부경대
  kmou: [8, 9, 10, 11]    // 해양대
};

function loadUniversityMovies() {
  const univMap = {
    pnu: document.getElementById('pnu-movies'),
    pknu: document.getElementById('pknu-movies'),
    kmou: document.getElementById('kmou-movies')
  };
  // 각 영역 초기화
  Object.values(univMap).forEach(box => { if (box) box.innerHTML = ''; });

  Object.entries(universityMovieMap).forEach(([univ, idxArr]) => {
    const box = univMap[univ];
    if (!box) return;
    idxArr.forEach(idx => {
      const movie = movies[idx];
      if (!movie) return;
      const card = document.createElement('div');
      card.className = 'movie-card';
      card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
        <h3 class="movie-title">${movie.title}</h3>
        <p class="movie-rating">⭐ ${movie.rating}</p>
      `;
      box.appendChild(card);
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // DOM 요소 캐싱
  const mainContent = document.querySelector('main.main-content');
  const searchPageContent = document.getElementById('search-page-content');
  const navLinks = document.querySelectorAll('.nav-links a');
  const yearFilter = document.getElementById('year-filter');
  const genreFilter = document.getElementById('genre-filter');
  const ratingFilter = document.getElementById('rating-filter');
  const searchBtn = document.querySelector('.search-btn');
  const searchInput = document.querySelector('.search-input');

  // 연도 필터 옵션 추가
  const years = [...new Set(movies.map(movie => movie['Year of release']))].sort((a, b) => b - a);
  years.forEach(year => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearFilter.appendChild(option);
  });

  // 페이지 전환 및 영화 목록 갱신
  function showPageByHash() {
    if (window.location.hash.startsWith('#searching')) {
      if (mainContent) mainContent.style.display = 'none';
      if (searchPageContent) searchPageContent.style.display = 'block';
      // 검색어와 드롭다운 필터 모두 반영
      const searchTerm = searchInput ? searchInput.value.trim() : '';
      const year = yearFilter ? yearFilter.value : 'all';
      const genre = genreFilter ? genreFilter.value : 'all';
      const rating = ratingFilter ? ratingFilter.value : 'all';
      loadAllMovies({ year, genre, rating }, searchTerm);
    } else {
      if (mainContent) mainContent.style.display = 'block';
      if (searchPageContent) searchPageContent.style.display = 'none';
    }
  }

  // 네비게이션 클릭 시 hash만 변경
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      window.location.hash = targetId;
    });
  });

  // 검색 버튼 클릭 시 hash만 변경
  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', function() {
      const keyword = searchInput.value.trim();
      window.location.hash = keyword ? `#searching?search=${encodeURIComponent(keyword)}` : '#searching';
    });
  }

  // 드롭다운 필터 변경 시 바로 반영 (hash 변경 X, 바로 영화 목록 갱신)
  [yearFilter, genreFilter, ratingFilter].forEach(filter => {
    if (filter) {
      filter.addEventListener('change', function() {
        if (window.location.hash.startsWith('#searching')) {
          const searchTerm = searchInput ? searchInput.value.trim() : '';
          const year = yearFilter ? yearFilter.value : 'all';
          const genre = genreFilter ? genreFilter.value : 'all';
          const rating = ratingFilter ? ratingFilter.value : 'all';
          loadAllMovies({ year, genre, rating }, searchTerm);
        }
      });
    }
  });

  // hashchange 이벤트로만 화면 전환 및 필터 적용
  window.addEventListener('hashchange', showPageByHash);
  // 최초 진입 시도 반영
  showPageByHash();

  // 로그인 기능 (정적 버전)
  document.querySelector('.login-btn').addEventListener('click', function() {
    const id = document.querySelectorAll('.login-input')[0].value;
    const pw = document.querySelectorAll('.login-input')[1].value;
    
    // 정적 로그인 검증
    if (id === 'admin' && pw === 'admin123') {
      alert('로그인 성공!');
      const loginInputs = document.querySelectorAll('.login-input');
      const loginButton = document.querySelector('.login-btn');
      const welcomeMessageContainer = document.querySelector('.welcome-message');
      const welcomeTextSpan = document.getElementById('welcome-text');
      const logoutButton = document.querySelector('.logout-btn');

      loginInputs.forEach(input => input.style.display = 'none');
      loginButton.style.display = 'none';

      if (welcomeMessageContainer && welcomeTextSpan && logoutButton) {
        welcomeTextSpan.textContent = `환영합니다 ${id}님`;
        welcomeMessageContainer.style.setProperty('display', 'flex', 'important');
        logoutButton.addEventListener('click', handleLogout);
      }

      loggedInUserId = id;
      updateReviewSectionVisibility();
    } else {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  });

  // 다크 모드 토글
  const toggleBtn = document.getElementById('dark-mode-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '다크 모드 끄기';
      } else {
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '다크 모드 켜기';
      }
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      toggleBtn.textContent = '다크 모드 끄기';
    } else {
      toggleBtn.textContent = '다크 모드 켜기';
    }
  }

  // 영화 카드 클릭 이벤트
  document.body.addEventListener('click', (event) => {
    const card = event.target.closest('.movie-card');
    if (card) {
      const title = card.querySelector('.movie-title').innerText;
      const posterImg = card.querySelector('.movie-poster');
      const posterSrc = posterImg ? posterImg.src : '';
      const rating = card.querySelector('.movie-rating').innerText;

      currentMovieTitle = title;

      const modal = document.getElementById('movie-modal');
      const modalTitle = document.getElementById('modal-movie-title');
      const modalPoster = document.getElementById('modal-movie-poster');
      const modalRating = document.getElementById('modal-movie-rating');
      const modalMovieStarring = document.getElementById('modal-movie-starring');
      const modalMovieStarring2 = document.getElementById('modal-movie-starring2');
      const modalMovieDirector = document.getElementById('modal-movie-director');
      const modalMovieGenre = document.getElementById('modal-movie-genre');
      const modalMovieYear = document.getElementById('modal-movie-year');

      if (modal) {
        const movie = movies.find(m => m.title === title);
        if (movie) {
          modalTitle.innerText = movie.title;
          modalPoster.src = movie.poster;
          modalPoster.alt = movie.title;
          modalRating.innerText = movie.rating;
          modalMovieStarring.innerText = movie.starring[0];
          modalMovieStarring2.innerText = movie.starring[1];
          modalMovieDirector.innerText = movie.director;
          modalMovieGenre.innerText = movie.Genre;
          modalMovieYear.innerText = movie["Year of release"];
          
          modal.style.display = 'block';
          loadAndDisplayReviews(title);
        }
      }
    }
  });

  // 리뷰 로드 및 표시
  function loadAndDisplayReviews(movieTitle) {
    const existingReviewsContainer = document.querySelector('.existing-reviews');
    if (!existingReviewsContainer) return;

    existingReviewsContainer.innerHTML = '';
    const movieReviews = reviews[movieTitle] || [];

    if (movieReviews.length > 0) {
      movieReviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('existing-review-item');
        reviewItem.innerText = review;
        existingReviewsContainer.appendChild(reviewItem);
      });
    } else {
      const noReviewMessage = document.createElement('div');
      noReviewMessage.classList.add('existing-review-item');
      noReviewMessage.innerText = '아직 작성된 리뷰가 없습니다.';
      existingReviewsContainer.appendChild(noReviewMessage);
    }
  }

  // 리뷰 제출
  const reviewSubmitButton = document.querySelector('.review-submit-button');
  if (reviewSubmitButton) {
    reviewSubmitButton.addEventListener('click', function() {
      const reviewText = document.querySelector('.review-input').value.trim();
      if (reviewText && currentMovieTitle) {
        if (!reviews[currentMovieTitle]) {
          reviews[currentMovieTitle] = [];
        }
        reviews[currentMovieTitle].push(reviewText);
        document.querySelector('.review-input').value = '';
        loadAndDisplayReviews(currentMovieTitle);
      }
    });
  }

  // 로그아웃 처리
  function handleLogout() {
    const loginInputs = document.querySelectorAll('.login-input');
    const loginButton = document.querySelector('.login-btn');
    const welcomeMessageContainer = document.querySelector('.welcome-message');
    const logoutButton = document.querySelector('.logout-btn');

    loginInputs.forEach(input => {
      input.style.display = 'block';
      input.value = '';
    });
    loginButton.style.display = 'block';
    welcomeMessageContainer.style.display = 'none';
    logoutButton.style.display = 'none';

    loggedInUserId = null;
    updateReviewSectionVisibility();
  }

  // 리뷰 섹션 가시성 업데이트
  function updateReviewSectionVisibility() {
    const reviewSection = document.querySelector('.review-section');
    if (reviewSection) {
      reviewSection.style.display = loggedInUserId ? 'block' : 'none';
    }
  }

  // 메인(대학별) 영화 카드 로드
  loadUniversityMovies();
  // 검색 페이지 진입 시 전체 영화 카드 로드
  if (window.location.hash.startsWith('#searching')) {
    const urlParams = new URLSearchParams(window.location.hash.substring(window.location.hash.indexOf('?') + 1));
    const initialSearchTerm = urlParams.get('search') || '';
    const searchInput = document.querySelector('.search-input');
    if (searchInput && initialSearchTerm) {
      searchInput.value = initialSearchTerm;
    }
    loadAllMovies({}, initialSearchTerm);
  }

  // 팝업창 X버튼(닫기) 기능 추가
  const modal = document.getElementById('movie-modal');
  const closeButton = document.querySelector('.close-button');
  if (closeButton && modal) {
    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }

  // 모달 바깥 클릭 시 닫기 기능도 추가 (선택)
  if (modal) {
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});

// 영화 목록 로드
function loadAllMovies(filters = {}, searchTerm = '') {
  const movieContainer = document.getElementById('all-movies-list');
  if (!movieContainer) return;

  movieContainer.innerHTML = '';
  
  let filteredMovies = movies;

  // 검색어 필터
  if (searchTerm) {
    filteredMovies = filteredMovies.filter(movie => 
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.Genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.director.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // 연도 필터
  if (filters.year && filters.year !== 'all') {
    filteredMovies = filteredMovies.filter(movie => String(movie['Year of release']) === String(filters.year));
  }
  // 장르 필터
  if (filters.genre && filters.genre !== 'all') {
    filteredMovies = filteredMovies.filter(movie => movie.Genre && movie.Genre.toLowerCase().includes(filters.genre.toLowerCase()));
  }
  // 평점 필터
  if (filters.rating && filters.rating !== 'all') {
    filteredMovies = filteredMovies.filter(movie => {
      const ratingValue = parseFloat((movie.rating || '').replace(/[^\d.]/g, ''));
      return ratingValue >= parseFloat(filters.rating);
    });
  }

  filteredMovies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    movieCard.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
      <h3 class="movie-title">${movie.title}</h3>
      <p class="movie-rating">⭐ ${movie.rating}</p>
    `;
    movieContainer.appendChild(movieCard);
  });
}

// Add a variable to store the logged-in user ID
let loggedInUserId = null;

// Call updateReviewSectionVisibility on page load to set initial state
updateReviewSectionVisibility(); 