<?php include('includes/header.php'); ?>

<section class="accredited-hero">
    <div class="container">

        <div class="hero-wrapper">

            <!-- LEFT CONTENT -->
            <div class="hero-content-accredited">

                <h1>
                    ACCREDITED
                    <span>BODIES</span>
                </h1>

                <p>
                    Explore our globally recognized certification
                    bodies accredited by UKICB.
                </p>

                <div class="hero-stat-card">

                    <div class="stat-icon">
                        <i class="fas fa-users"></i>
                    </div>

                    <div class="hero-stat">
                        <h3 id="accreditedBodiesCount">0+</h3>
                        <p>Accredited Bodies</p>
                    </div>

                </div>

            </div>

            <!-- RIGHT IMAGE -->
            <div class="hero-image">

                <img src="assets/images/certification-bodies-accreditation.png" alt="Certificate">


            </div>

        </div>

    </div>
</section>
<section class="ab-search-section">
<div class="container">

    <div class="search-boxs">

        <div class="search-header">
            <h2>Find Accredited Bodies</h2>
            <p>Search by reference number, standard, scope, date range or country.</p>
        </div>

        <div class="search-grid">

            <!-- Reference Number -->
            <div class="form-group">
                <label>Reference Number</label>
                <input
                    type="text"
                    id="referenceNumber"
                    placeholder="Enter reference number">
            </div>

            <!-- Standard Searchable Dropdown -->
            <div class="form-group">
                <label>Standard</label>

                <div class="custom-dropdown standard-dropdown">

                    <div class="dropdown-trigger">
                        <span>Select Standard</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>

                    <div class="dropdown-menu">

                        <div class="dropdown-search">
                            <input
                                type="text"
                                placeholder="Search standard...">
                        </div>

                        <div class="dropdown-options">

                            <div class="dropdown-option"
                                data-value="ISO 9001">
                                ISO 9001
                            </div>

                            <div class="dropdown-option"
                                data-value="ISO 14001">
                                ISO 14001
                            </div>

                            <div class="dropdown-option"
                                data-value="ISO 45001">
                                ISO 45001
                            </div>

                            <div class="dropdown-option"
                                data-value="ISO 22000">
                                ISO 22000
                            </div>

                            <div class="dropdown-option"
                                data-value="ISO 27001">
                                ISO 27001
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <!-- Accreditation Scope Checklist -->
            <div class="form-group">
                <label>Accreditation Scope</label>

                <div class="custom-dropdown scope-dropdown">

                    <div class="dropdown-trigger">
                        <span>Select Scope</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>

                    <div class="dropdown-menu">

                        <div class="dropdown-search">
                            <input
                                type="text"
                                placeholder="Search scope...">
                        </div>

                        <div class="checklist-options">

                            <label class="check-item">

                                <input
                                    type="checkbox"
                                    id="selectAllScopes">

                                <span class="custom-check"></span>

                                <span class="label-text">
                                    Select All
                                </span>

                            </label>

                            <label class="check-item">

                                <input
                                    type="checkbox"
                                    class="scope-option"
                                    value="ISO 9001">

                                <span class="custom-check"></span>

                                <span class="label-text">
                                    ISO 9001
                                </span>

                            </label>

                            <label class="check-item">

                                <input
                                    type="checkbox"
                                    class="scope-option"
                                    value="ISO 14001">

                                <span class="custom-check"></span>

                                <span class="label-text">
                                    ISO 14001
                                </span>

                            </label>

                            <label class="check-item">

                                <input
                                    type="checkbox"
                                    class="scope-option"
                                    value="ISO 45001">

                                <span class="custom-check"></span>

                                <span class="label-text">
                                    ISO 45001
                                </span>

                            </label>

                            <label class="check-item">

                                <input
                                    type="checkbox"
                                    class="scope-option"
                                    value="ISO 22000">

                                <span class="custom-check"></span>

                                <span class="label-text">
                                    ISO 22000
                                </span>

                            </label>

                            <label class="check-item">

                                <input
                                    type="checkbox"
                                    class="scope-option"
                                    value="ISO 27001">

                                <span class="custom-check"></span>

                                <span class="label-text">
                                    ISO 27001
                                </span>

                            </label>

                        </div>

                    </div>

                </div>
            </div>

            <!-- Start Date -->
            <div class="form-group">
                <label>Start Date</label>
                <input type="date" id="startDate">
            </div>

            <!-- End Date -->
            <div class="form-group">
                <label>End Date</label>
                <input type="date" id="endDate">
            </div>

            <!-- Country Dropdown -->
            <div class="form-group">
                <label>Country</label>

                <div class="custom-dropdown country-dropdown">

                    <div class="dropdown-trigger">
                        <span>Select Country</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>

                    <div class="dropdown-menu">

                        <div class="dropdown-search">
                            <input
                                type="text"
                                placeholder="Search country...">
                        </div>

                        <div class="dropdown-options">

                            <div class="dropdown-option"
                                data-value="Saudi Arabia">
                                Saudi Arabia
                            </div>

                            <div class="dropdown-option"
                                data-value="United Kingdom">
                                United Kingdom
                            </div>

                            <div class="dropdown-option"
                                data-value="Pakistan">
                                Pakistan
                            </div>

                            <div class="dropdown-option"
                                data-value="UAE">
                                UAE
                            </div>

                            <div class="dropdown-option"
                                data-value="Qatar">
                                Qatar
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

        <div class="search-actions">

            <button id="searchBtn" class="search-btn">
                Search Bodies
            </button>

            <button id="resetBtn" class="reset-btn">
                Reset Filters
            </button>

        </div>

    </div>

</div>
</section>
<section class="accredited-bodies-section">

    <div class="container">

        <!-- Section Header -->

        <div class="bodies-header">

            <div class="header-left">
                <span class="section-tag">
                    ACCREDITED DIRECTORY
                </span>

                <h2>
                    All Accredited Bodies
                </h2>
            </div>

            <div class="header-right">
                <span class="results-count">
                    0 Bodies Found
                </span>
            </div>

        </div>

        <!-- Cards Grid -->

        <div class="bodies-grid">

            <!-- Card 1 -->

            <div class="body-card"

                data-ref="UKICB-001"
                data-name="SGS"
                data-country="Saudi Arabia"
                data-standard="ISO 9001, ISO 14001"
                data-logo="assets/images/sgs.png"
                data-certificate="documents/sgs-certificate.pdf"
                data-scope="documents/sgs-scope.pdf">

                <div class="card-top">

                    <img
                        src="assets/images/sgs.png"
                        alt="SGS">

                </div>

                <div class="card-body">

                    <h3>
                        SGS
                    </h3>

                    <p class="country">
                        Saudi Arabia
                    </p>

                    <div class="standard-tags">

                        <span>ISO 9001</span>

                        <span>ISO 14001</span>

                    </div>

                    <button class="view-details-btn">
                        View Details
                    </button>

                </div>

            </div>

            <!-- Card 2 -->

            <div class="body-card"

                data-ref="UKICB-002"
                data-name="TUV"
                data-country="United Kingdom"
                data-standard="ISO 45001, ISO 27001"
                data-logo="assets/images/tuv.png"
                data-certificate="documents/tuv-certificate.pdf"
                data-scope="documents/tuv-scope.pdf">

                <div class="card-top">

                    <img
                        src="assets/images/tuv.png"
                        alt="TUV">

                </div>

                <div class="card-body">

                    <h3>
                        TUV Rheinland
                    </h3>

                    <p class="country">
                        United Kingdom
                    </p>

                    <div class="standard-tags">

                        <span>ISO 45001</span>

                        <span>ISO 27001</span>

                    </div>

                    <button class="view-details-btn">
                        View Details
                    </button>

                </div>

            </div>

            <!-- Card 3 -->

            <div class="body-card"

                data-ref="UKICB-003"
                data-name="Bureau Veritas"
                data-country="UAE"
                data-standard="ISO 22000, ISO 9001"
                data-logo="assets/images/bureau.png"
                data-certificate="documents/bv-certificate.pdf"
                data-scope="documents/bv-scope.pdf">

                <div class="card-top">

                    <img
                        src="assets/images/bureau.png"
                        alt="Bureau Veritas">

                </div>

                <div class="card-body">

                    <h3>
                        Bureau Veritas
                    </h3>

                    <p class="country">
                        UAE
                    </p>

                    <div class="standard-tags">

                        <span>ISO 22000</span>

                        <span>ISO 9001</span>

                    </div>

                    <button class="view-details-btn">
                        View Details
                    </button>

                </div>

            </div>

            <!-- Card 4 -->

            <div class="body-card"

                data-ref="UKICB-004"
                data-name="Intertek"
                data-country="Qatar"
                data-standard="ISO 9001, ISO 45001"
                data-logo="assets/images/intertek.png"
                data-certificate="documents/intertek-certificate.pdf"
                data-scope="documents/intertek-scope.pdf">

                <div class="card-top">

                    <img
                        src="assets/images/intertek.png"
                        alt="Intertek">

                </div>

                <div class="card-body">

                    <h3>
                        Intertek
                    </h3>

                    <p class="country">
                        Qatar
                    </p>

                    <div class="standard-tags">

                        <span>ISO 9001</span>

                        <span>ISO 45001</span>

                    </div>

                    <button class="view-details-btn">
                        View Details
                    </button>

                </div>

            </div>

        </div>

        <!-- Pagination -->

        <div class="custom-pagination">

            <button class="page-btn prev-btn">
                <i class="fa-solid fa-angle-left"></i>
            </button>

            <button class="page-btn active">
                1
            </button>

            <button class="page-btn">
                2
            </button>

            <button class="page-btn">
                3
            </button>

            <button class="page-btn">
                4
            </button>

            <button class="page-btn">
                5
            </button>

            <button class="page-btn next-btn">
                <i class="fa-solid fa-angle-right"></i>
            </button>

        </div>

    </div>

</section>
<!-- ===================================
ACCREDITED BODY MODAL
=================================== -->

<div class="body-modal" id="bodyModal">

<div class="modal-content">

   <!-- Close Button -->

   <button class="close-modal" id="closeModal">
       <i class="fa-solid fa-xmark"></i>
   </button>

   <!-- Modal Header -->

   <div class="modal-header">

       <div class="modal-logo">

           <img
               id="modalLogo"
               src=""
               alt="Accredited Body">

       </div>

       <div class="modal-title">

           <span class="modal-badge">
               Accredited Body
           </span>

           <h2 id="modalName">
               SGS
           </h2>

           <p id="modalReference">
               Ref: UKICB-001
           </p>

       </div>

   </div>

   <!-- Modal Information -->

   <div class="modal-info-grid">

       <!-- Country -->

       <div class="info-card">

           <h4>
               Country
           </h4>

           <p id="modalCountry">
               Saudi Arabia
           </p>

       </div>

       <!-- Standard -->

       <div class="info-card">

           <h4>
               Standards
           </h4>

           <p id="modalStandard">
               ISO 9001, ISO 14001
           </p>

       </div>

   </div>

   <!-- Description -->

   <div class="modal-description">

       <h4>
           Accreditation Details
       </h4>

       <p id="modalDescription">

           This accredited body has been officially recognized
           and operates according to internationally accepted
           accreditation requirements and standards.

       </p>

   </div>

   <!-- Download Area -->

   <div class="modal-downloads">

       <a
           id="certificateDownload"
           href="uploads/documents/ISO17021.pdf"
           target="_blank"
           class="download-btn">

           <i class="fa-solid fa-file-pdf"></i>

           Download Certificate

       </a>

       <a
           id="scopeDownload"
           href="uploads/documents/ISO17021.pdf"
           target="_blank"
           class="download-btn secondary">

           <i class="fa-solid fa-download"></i>

           Download Scope

       </a>

   </div>

</div>

</div>
<?php include('includes/footer.php'); ?>