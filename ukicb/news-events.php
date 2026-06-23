<?php include('includes/header.php'); ?>

<section class="news-hero">

    <div class="container">

        <div class="news-hero-content">

            <span class="hero-tag">
                Latest Updates
            </span>

            <h1>
                News & Events
            </h1>

            <p>
                Stay informed with the latest accreditation updates,
                industry announcements, training programs, workshops,
                conferences and important organizational news.
            </p>

            <div class="hero-stats">

                <div class="stat-box">

                    <h3 id="newsCount">0</h3>

                    <span>News Articles</span>

                </div>

                <div class="stat-box">

                    <h3 id="eventCount">0</h3>

                    <span>Upcoming Events</span>

                </div>

                <div class="stat-box">

                    <h3 id="yearCount">2026</h3>

                    <span>Current Year</span>

                </div>

            </div>

        </div>

    </div>

</section>
<section class="updates-section">

    <div class="updates-top">

        <div class="filter-tabs">

            <button class="tab-btn active" data-filter="all">
                All Updates
                <span id="allCount">0</span>
            </button>

            <button class="tab-btn" data-filter="news">
                News
                <span id="newsCounts">0</span>
            </button>

            <button class="tab-btn" data-filter="event">
                Events
                <span id="eventCounts">0</span>
            </button>

        </div>

        <div class="search-box">

            <input
                type="text"
                id="searchInput"
                placeholder="Search news or events...">

            <button>
                <i class="fas fa-search"></i>
            </button>

        </div>

    </div>

</section>
<section class="latest-news-section">

    <div class="section-header">

        <div class="section-title">

            <i class="fas fa-newspaper"></i>

            <h2>Latest News</h2>

        </div>

        <a href="#" class="view-all">
            View All News
            <i class="fas fa-arrow-right"></i>
        </a>

    </div>

    <div class="news-grid content-grid">

        <!-- Card 1 -->

        <div class="news-card" data-type="news">

            <div class="news-image">

                <img src="assets/images/news1.png" alt="">

                <span class="news-badge">
                    NEWS
                </span>

            </div>

            <div class="news-content">

                <div class="news-date">

                    <i class="far fa-calendar"></i>

                    May 12, 2025

                </div>

                <h3>
                    PNAC Expands Accreditation Services Nationwide
                </h3>

                <p>
                    PNAC is proud to announce the expansion of its accreditation services nationwide...
                </p>

                <a href="#" class="read-more">

                    Read More

                    <i class="fas fa-arrow-right"></i>

                </a>

            </div>

        </div>

        <!-- Card 2 -->

        <div class="news-card" data-type="news">

            <div class="news-image">

                <img src="assets/images/news2.png" alt="">

                <span class="news-badge">
                    NEWS
                </span>

            </div>

            <div class="news-content">

                <div class="news-date">

                    <i class="far fa-calendar"></i>

                    May 10, 2025

                </div>

                <h3>
                    Successful Workshop on Accreditation Standards
                </h3>

                <p>
                    A comprehensive workshop was conducted for CABs to enhance understanding...
                </p>

                <a href="#" class="read-more">

                    Read More

                    <i class="fas fa-arrow-right"></i>

                </a>

            </div>

        </div>

        <!-- Card 3 -->

        <div class="news-card" data-type="news">

            <div class="news-image">

                <img src="assets/images/news3.png" alt="">

                <span class="news-badge">
                    NEWS
                </span>

            </div>

            <div class="news-content">

                <div class="news-date">

                    <i class="far fa-calendar"></i>

                    May 08, 2025

                </div>

                <h3>
                    PNAC Signs MoU with International Body
                </h3>

                <p>
                    Strengthening international collaboration for quality assurance...
                </p>

                <a href="#" class="read-more">

                    Read More

                    <i class="fas fa-arrow-right"></i>

                </a>

            </div>

        </div>

    </div>

</section>
<section class="upcoming-events-section">

    <div class="section-header">

        <div class="section-title">

            <i class="fas fa-calendar-alt"></i>

            <h2>Upcoming Events</h2>

        </div>

        <a href="#" class="view-all">

            View All Events

            <i class="fas fa-arrow-right"></i>

        </a>

    </div>

    <div class="events-grid content-grid">

        <!-- Event 1 -->

        <div class="event-card" data-type="event">

            <div class="event-date-box">

                <span class="month">
                    MAY
                </span>

                <span class="day">
                    20
                </span>

                <span class="year">
                    2025
                </span>

            </div>

            <div class="event-content">

                <h3>
                    PNAC Annual Conference 2025
                </h3>

                <div class="event-meta">

                    <p>
                        <i class="fas fa-map-marker-alt"></i>
                        Islamabad, Pakistan
                    </p>

                    <p>
                        <i class="far fa-clock"></i>
                        09:00 AM - 05:00 PM
                    </p>

                </div>

                <a href="contact-us.php" class="event-btn">

                    Contact Us

                    <i class="fas fa-arrow-right"></i>

                </a>

            </div>

        </div>

        <!-- Event 2 -->

        <div class="event-card" data-type="event">

            <div class="event-date-box">

                <span class="month">
                    MAY
                </span>

                <span class="day">
                    28
                </span>

                <span class="year">
                    2025
                </span>

            </div>

            <div class="event-content">

                <h3>
                    Training on ISO/IEC 17025:2017
                </h3>

                <div class="event-meta">

                    <p>
                        <i class="fas fa-map-marker-alt"></i>
                        Lahore, Pakistan
                    </p>

                    <p>
                        <i class="far fa-clock"></i>
                        10:00 AM - 04:00 PM
                    </p>

                </div>

                <a href="contact-us.php" class="event-btn">

                  Contact Us

                    <i class="fas fa-arrow-right"></i>

                </a>

            </div>

        </div>

        <!-- Event 3 -->

        <div class="event-card" data-type="event">

            <div class="event-date-box">

                <span class="month">
                    JUN
                </span>

                <span class="day">
                    05
                </span>

                <span class="year">
                    2025
                </span>

            </div>

            <div class="event-content">

                <h3>
                    Webinar: Quality in Testing Laboratories
                </h3>

                <div class="event-meta">

                    <p>
                        <i class="fas fa-globe"></i>
                        Online Webinar
                    </p>

                    <p>
                        <i class="far fa-clock"></i>
                        11:00 AM - 01:00 PM
                    </p>

                </div>

                <a href="contact-us.php" class="event-btn">

                 Contact Us

                    <i class="fas fa-arrow-right"></i>

                </a>

            </div>

        </div>

    </div>

</section>
<?php include('includes/footer.php'); ?>