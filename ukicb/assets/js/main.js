document.querySelectorAll(".faq-question").forEach(button => {

    button.addEventListener("click", () => {

        const item = button.parentElement;

        document.querySelectorAll(".faq-item").forEach(faq => {

            if(faq !== item){
                faq.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});

 /* ==========================
       Hero count
    ========================== */
    const heroCount =
    document.getElementById(
        "accreditedBodiesCount"
    );

 if (heroCount) {

    const totalBodies =
        document.querySelectorAll(
            ".body-card"
        ).length;

    heroCount.textContent =
        totalBodies + "+";
 }
document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================
       PAGINATION
    ========================== */
    const cardsPerPage = 12;
    let currentPage = 1;

 function paginateCards() {

    const cards = [...document.querySelectorAll(".body-card")];

    const visibleCards = cards.filter(card =>
        card.style.display !== "none"
    );

    const pagination =
        document.querySelector(".custom-pagination");

    if (!pagination) return;

    const totalPages =
        Math.ceil(
            visibleCards.length / cardsPerPage
        );

    if (visibleCards.length <= cardsPerPage) {

        pagination.style.display = "none";

        cards.forEach(card => {
            if (card.style.display !== "none") {
                card.style.visibility = "visible";
                card.style.position = "relative";
            }
        });

        return;
    }

    pagination.style.display = "flex";

    cards.forEach(card => {

        if (card.style.display !== "none") {

            card.style.visibility = "hidden";
            card.style.position = "absolute";

        }

    });

    const start =
        (currentPage - 1) * cardsPerPage;

    const end =
        start + cardsPerPage;

    visibleCards
        .slice(start, end)
        .forEach(card => {

            card.style.visibility = "visible";
            card.style.position = "relative";

        });

    generatePagination(totalPages);

 }

 function generatePagination(totalPages) {

    const pagination =
        document.querySelector(".custom-pagination");

    pagination.innerHTML = "";

    const prevBtn =
        document.createElement("button");

    prevBtn.className = "page-btn";

    prevBtn.innerHTML =
        '<i class="fa-solid fa-angle-left"></i>';

    prevBtn.disabled =
        currentPage === 1;

    prevBtn.addEventListener("click", () => {

        if (currentPage > 1) {

            currentPage--;

            paginateCards();

        }

    });

    pagination.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {

        const btn =
            document.createElement("button");

        btn.className = "page-btn";

        btn.textContent = i;

        if (i === currentPage) {

            btn.classList.add("active");

        }

        btn.addEventListener("click", () => {

            currentPage = i;

            paginateCards();

        });

        pagination.appendChild(btn);

    }

    const nextBtn =
        document.createElement("button");

    nextBtn.className = "page-btn";

    nextBtn.innerHTML =
        '<i class="fa-solid fa-angle-right"></i>';

    nextBtn.disabled =
        currentPage === totalPages;

    nextBtn.addEventListener("click", () => {

        if (currentPage < totalPages) {

            currentPage++;

            paginateCards();

        }

    });

    pagination.appendChild(nextBtn);

 }


    /* ==========================
       DROPDOWNS
    ========================== */

    const dropdowns = document.querySelectorAll(".custom-dropdown");

    dropdowns.forEach(dropdown => {

        const trigger = dropdown.querySelector(".dropdown-trigger");

        trigger.addEventListener("click", (e) => {

            e.stopPropagation();

            dropdowns.forEach(item => {

                if (item !== dropdown) {
                    item.classList.remove("active");
                }

            });

            dropdown.classList.toggle("active");

        });

    });

    document.addEventListener("click", () => {

        dropdowns.forEach(dropdown => {
            dropdown.classList.remove("active");
        });

    });

    /* ==========================
       STANDARD DROPDOWN
    ========================== */

    const standardDropdown =
        document.querySelector(".standard-dropdown");

    if (standardDropdown) {

        const options =
            standardDropdown.querySelectorAll(".dropdown-option");

        const triggerText =
            standardDropdown.querySelector(".dropdown-trigger span");

        options.forEach(option => {

            option.addEventListener("click", () => {

                triggerText.textContent =
                    option.textContent.trim();

                standardDropdown.dataset.value =
                    option.dataset.value;

                standardDropdown.classList.remove("active");

            });

        });

    }

    /* ==========================
       COUNTRY DROPDOWN
    ========================== */

    const countryDropdown =
        document.querySelector(".country-dropdown");

    if (countryDropdown) {

        const options =
            countryDropdown.querySelectorAll(".dropdown-option");

        const triggerText =
            countryDropdown.querySelector(".dropdown-trigger span");

        options.forEach(option => {

            option.addEventListener("click", () => {

                triggerText.textContent =
                    option.textContent.trim();

                countryDropdown.dataset.value =
                    option.dataset.value;

                countryDropdown.classList.remove("active");

            });

        });

    }

    /* ==========================
       SEARCH INSIDE DROPDOWN
    ========================== */

    document
        .querySelectorAll(".dropdown-search input")
        .forEach(searchInput => {

            searchInput.addEventListener("keyup", () => {

                const value =
                    searchInput.value.toLowerCase();

                const options =
                    searchInput
                    .closest(".dropdown-menu")
                    .querySelectorAll(".dropdown-option");

                options.forEach(option => {

                    const text =
                        option.textContent.toLowerCase();

                    option.style.display =
                        text.includes(value)
                        ? "block"
                        : "none";

                });

            });

        });

    /* ==========================
       SELECT ALL
    ========================== */

    const selectAll =
        document.getElementById("selectAllScopes");

    const scopeOptions =
        document.querySelectorAll(".scope-option");

    if (selectAll) {

        selectAll.addEventListener("change", () => {

            scopeOptions.forEach(item => {

                item.checked =
                    selectAll.checked;

            });

        });

    }

    scopeOptions.forEach(option => {

        option.addEventListener("change", () => {

            const checked =
                document.querySelectorAll(
                    ".scope-option:checked"
                ).length;

            selectAll.checked =
                checked === scopeOptions.length;

        });

    });

    /* ==========================
       MODAL
    ========================== */

    const modal =
        document.getElementById("bodyModal");

    const closeModal =
        document.getElementById("closeModal");

    const cards =
        document.querySelectorAll(".body-card");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            document.getElementById("modalLogo").src =
                card.dataset.logo;

            document.getElementById("modalName").textContent =
                card.dataset.name;

            document.getElementById("modalReference").textContent =
                "Ref: " + card.dataset.ref;

            document.getElementById("modalCountry").textContent =
                card.dataset.country;

            document.getElementById("modalStandard").textContent =
                card.dataset.standard;

            document.getElementById("certificateDownload").href =
                card.dataset.certificate;

            document.getElementById("scopeDownload").href =
                card.dataset.scope;

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });

    if (closeModal) {

        closeModal.addEventListener("click", () => {

            modal.classList.remove("active");

            document.body.style.overflow = "";

        });

    }

    window.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

    /* ==========================
       SEARCH FILTER
    ========================== */

    const searchBtn =
        document.getElementById("searchBtn");

    if (searchBtn) {

        searchBtn.addEventListener("click", () => {

            const refValue =
                document
                .getElementById("referenceNumber")
                .value
                .toLowerCase()
                .trim();

            const standardValue =
                standardDropdown?.dataset.value || "";

            const countryValue =
                countryDropdown?.dataset.value || "";

            const selectedScopes = [];

            document
                .querySelectorAll(
                    ".scope-option:checked"
                )
                .forEach(item => {

                    selectedScopes.push(
                        item.value
                    );

                });

            document
                .querySelectorAll(".body-card")
                .forEach(card => {

                    let show = true;

                    const ref =
                        card.dataset.ref.toLowerCase();

                    const country =
                        card.dataset.country;

                    const standard =
                        card.dataset.standard;

                    if (
                        refValue &&
                        !ref.includes(refValue)
                    ) {
                        show = false;
                    }

                    if (
                        standardValue &&
                        !standard.includes(standardValue)
                    ) {
                        show = false;
                    }

                    if (
                        countryValue &&
                        country !== countryValue
                    ) {
                        show = false;
                    }

                    if (
                        selectedScopes.length
                    ) {

                        const matched =
                            selectedScopes.some(
                                scope =>
                                standard.includes(scope)
                            );

                        if (!matched) {
                            show = false;
                        }

                    }

                    card.style.display =
                        show ? "" : "none";

                });

                updateResultsCount();

                currentPage = 1;
                
                paginateCards();

        });

    }

    /* ==========================
       RESET
    ========================== */

    const resetBtn =
        document.getElementById("resetBtn");

    if (resetBtn) {

        resetBtn.addEventListener("click", () => {

            document.getElementById(
                "referenceNumber"
            ).value = "";

            standardDropdown.dataset.value = "";

            countryDropdown.dataset.value = "";

            standardDropdown.querySelector(
                ".dropdown-trigger span"
            ).textContent =
                "Select Standard";

            countryDropdown.querySelector(
                ".dropdown-trigger span"
            ).textContent =
                "Select Country";

            scopeOptions.forEach(item => {
                item.checked = false;
            });

            if (selectAll) {
                selectAll.checked = false;
            }

            document
                .querySelectorAll(".body-card")
                .forEach(card => {

                    card.style.display = "";

                });

                updateResultsCount();

                currentPage = 1;
                
                paginateCards();

        });

    }

    /* ==========================
       RESULTS COUNT
    ========================== */

    function updateResultsCount() {

        const visibleCards =
            [...document.querySelectorAll(".body-card")]
            .filter(card =>
                card.style.display !== "none"
            );

        const countElement =
            document.querySelector(".results-count");

        if (countElement) {

            countElement.textContent =
                `${visibleCards.length} Bodies Found`;

        }

    }

    updateResultsCount();
    paginateCards();

});
/* ===================================
       Documents Section
    =================================== */
    document.addEventListener("DOMContentLoaded", () => {

        /* ===================================
           ELEMENTS
        =================================== */
    
        const documentItems =
            document.querySelectorAll(".document-item");
    
        const categoryItems =
            document.querySelectorAll(
                ".accreditation-types li"
            );
    
        const pagination =
            document.querySelector(
                ".documents-pagination"
            );
    
        const documentsPerPage = 10;
    
        let currentPage = 1;
    
        /* ===================================
           ACCORDION
        =================================== */
    
        documentItems.forEach(item => {
    
            const header =
                item.querySelector(
                    ".document-header"
                );
    
            header.addEventListener(
                "click",
                () => {
    
                    documentItems.forEach(doc => {
    
                        if(doc !== item){
    
                            doc.classList.remove(
                                "active"
                            );
    
                        }
    
                    });
    
                    item.classList.toggle(
                        "active"
                    );
    
                }
            );
    
        });
    
        /* ===================================
           DOCUMENT COUNT
        =================================== */
    
        function updateDocumentCount(){
    
            const visibleDocuments =
                [...documentItems].filter(
                    item =>
                    item.style.display !== "none"
                );
    
            const countBox =
                document.querySelector(
                    ".documents-count"
                );
    
            if(countBox){
    
                countBox.textContent =
                    `${visibleDocuments.length} Documents`;
    
            }
    
        }
    
        /* ===================================
           CATEGORY COUNTS
        =================================== */
    
        function updateCategoryCounts(){
    
            categoryItems.forEach(item => {
    
                const category =
                    item.dataset.category;
    
                const countBox =
                    item.querySelector(
                        ".type-count"
                    );
    
                let count = 0;
    
                if(category === "all"){
    
                    count =
                        document.querySelectorAll(
                            ".document-item"
                        ).length;
    
                }else{
    
                    count =
                        document.querySelectorAll(
                            `.document-item[data-category="${category}"]`
                        ).length;
    
                }
    
                if(countBox){
    
                    countBox.textContent = count;
    
                }
    
            });
    
        }
    
        /* ===================================
           PAGINATION
        =================================== */
    
        function paginateDocuments(){
    
            const visibleDocuments =
                [...documentItems].filter(
                    item =>
                    item.style.display !== "none"
                );
    
            const totalPages =
                Math.ceil(
                    visibleDocuments.length /
                    documentsPerPage
                );
    
            if(
                visibleDocuments.length <=
                documentsPerPage
            ){
    
                pagination.style.display =
                    "none";
    
                visibleDocuments.forEach(
                    item => {
    
                        item.style.visibility =
                            "visible";
    
                        item.style.position =
                            "relative";
    
                    }
                );
    
                return;
            }
    
            pagination.style.display =
                "flex";
    
            visibleDocuments.forEach(
                item => {
    
                    item.style.visibility =
                        "hidden";
    
                    item.style.position =
                        "absolute";
    
                }
            );
    
            const start =
                (currentPage - 1) *
                documentsPerPage;
    
            const end =
                start +
                documentsPerPage;
    
            visibleDocuments
                .slice(start,end)
                .forEach(item => {
    
                    item.style.visibility =
                        "visible";
    
                    item.style.position =
                        "relative";
    
                });
    
            generatePagination(
                totalPages
            );
    
        }
    
        /* ===================================
           GENERATE PAGINATION
        =================================== */
    
        function generatePagination(
            totalPages
        ){
    
            pagination.innerHTML = "";
    
            const prevBtn =
                document.createElement(
                    "button"
                );
    
            prevBtn.className =
                "page-btn";
    
            prevBtn.innerHTML =
                '<i class="fa-solid fa-angle-left"></i>';
    
            prevBtn.disabled =
                currentPage === 1;
    
            prevBtn.addEventListener(
                "click",
                () => {
    
                    if(currentPage > 1){
    
                        currentPage--;
    
                        paginateDocuments();
    
                    }
    
                }
            );
    
            pagination.appendChild(
                prevBtn
            );
    
            for(
                let i = 1;
                i <= totalPages;
                i++
            ){
    
                const btn =
                    document.createElement(
                        "button"
                    );
    
                btn.className =
                    "page-btn";
    
                btn.textContent = i;
    
                if(i === currentPage){
    
                    btn.classList.add(
                        "active"
                    );
    
                }
    
                btn.addEventListener(
                    "click",
                    () => {
    
                        currentPage = i;
    
                        paginateDocuments();
    
                    }
                );
    
                pagination.appendChild(
                    btn
                );
    
            }
    
            const nextBtn =
                document.createElement(
                    "button"
                );
    
            nextBtn.className =
                "page-btn";
    
            nextBtn.innerHTML =
                '<i class="fa-solid fa-angle-right"></i>';
    
            nextBtn.disabled =
                currentPage === totalPages;
    
            nextBtn.addEventListener(
                "click",
                () => {
    
                    if(
                        currentPage <
                        totalPages
                    ){
    
                        currentPage++;
    
                        paginateDocuments();
    
                    }
    
                }
            );
    
            pagination.appendChild(
                nextBtn
            );
    
        }
    
        /* ===================================
           SIDEBAR FILTER
        =================================== */
    
        categoryItems.forEach(item => {
    
            item.addEventListener(
                "click",
                () => {
    
                    categoryItems.forEach(
                        li => {
                            li.classList.remove(
                                "active"
                            );
                        }
                    );
    
                    item.classList.add(
                        "active"
                    );
    
                    const category =
                        item.dataset.category;
    
                    documentItems.forEach(
                        doc => {
    
                            if(
                                category === "all"
                            ){
    
                                doc.style.display =
                                    "";
    
                            }else{
    
                                doc.style.display =
                                    doc.dataset.category === category
                                    ? ""
                                    : "none";
    
                            }
    
                        }
                    );
    
                    currentPage = 1;
    
                    updateDocumentCount();
    
                    paginateDocuments();
    
                }
            );
    
        });
    
        /* ===================================
           REFRESH BUTTON
        =================================== */
    
        const refreshBtn =
            document.querySelector(
                ".refresh-types"
            );
    
        if(refreshBtn){
    
            refreshBtn.addEventListener(
                "click",
                () => {
    
                    categoryItems.forEach(
                        item => {
                            item.classList.remove(
                                "active"
                            );
                        }
                    );
    
                    const allCategory =
                        document.querySelector(
                            '[data-category="all"]'
                        );
    
                    if(allCategory){
    
                        allCategory.classList.add(
                            "active"
                        );
    
                    }
    
                    documentItems.forEach(
                        item => {
    
                            item.style.display =
                                "";
    
                        }
                    );
    
                    currentPage = 1;
    
                    updateDocumentCount();
    
                    paginateDocuments();
    
                }
            );
    
        }
    
        /* ===================================
           DEFAULT ACTIVE
        =================================== */
    
        const defaultCategory =
            document.querySelector(
                '[data-category="all"]'
            );
    
        if(defaultCategory){
    
            defaultCategory.classList.add(
                "active"
            );
    
        }
    
        /* ===================================
           INIT
        =================================== */
    
        updateDocumentCount();
    
        updateCategoryCounts();
    
        paginateDocuments();
    
    });
    /* ===================================
           News and Events Hero Section
        =================================== */
        document.addEventListener("DOMContentLoaded",()=>{

            const totalNews = 48;
        
            const totalEvents = 12;
        
            animateCounter(
                document.getElementById("newsCount"),
                totalNews
            );
        
            animateCounter(
                document.getElementById("eventCount"),
                totalEvents
            );
        
        });
        
        function animateCounter(
            element,
            target
        ){
        
            let count = 0;
        
            const speed = target / 50;
        
            const interval = setInterval(()=>{
        
                count += speed;
        
                if(count >= target){
        
                    count = target;
        
                    clearInterval(interval);
                }
        
                element.textContent =
                    Math.floor(count);
        
            },20);
        
        }
/* ===================================
   News and Events filter Section
  =================================== */
 const tabBtns = document.querySelectorAll(".tab-btn");

tabBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        tabBtns.forEach(item =>
            item.classList.remove("active")
        );

        btn.classList.add("active");

        filterContent(btn.dataset.filter);

    });

});

function updateCounts(){

    const newsCards =
        document.querySelectorAll(".news-card");

    const eventCards =
        document.querySelectorAll(".event-card");

    document.getElementById("newsCount").textContent =
        newsCards.length;

    document.getElementById("eventCount").textContent =
        eventCards.length;

    document.getElementById("allCount").textContent =
        newsCards.length + eventCards.length;

}
/* ===================================
   News and Events News Section
=================================== */

document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".tab-btn");

    const searchInput = document.getElementById("searchInput");

    const newsCards = document.querySelectorAll(".news-card");

    const eventCards = document.querySelectorAll(".event-card");

    const allCards = document.querySelectorAll(".news-card, .event-card");

    const newsSection = document.querySelector(".latest-news-section");

    const eventSection = document.querySelector(".upcoming-events-section");

    /* =========================
       COUNTS
    ========================== */

    const totalNews = newsCards.length;

    const totalEvents = eventCards.length;

    document.getElementById("newsCounts").textContent = totalNews;

    document.getElementById("eventCounts").textContent = totalEvents;

    document.getElementById("allCount").textContent =
        totalNews + totalEvents;

    /* =========================
       TAB FILTER + SCROLL
    ========================== */

    tabs.forEach(tab => {

        tab.addEventListener("click", function () {

            tabs.forEach(btn => {

                btn.classList.remove("active");

            });

            this.classList.add("active");

            const filter = this.dataset.filter;

            searchInput.value = "";

            if (filter === "all") {

                newsSection.style.display = "block";

                eventSection.style.display = "block";

                allCards.forEach(card => {

                    if (card.classList.contains("event-card")) {

                        card.style.display = "flex";

                    } else {

                        card.style.display = "block";

                    }

                });

                document.querySelector(".updates-section")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }

            else if (filter === "news") {

                newsSection.style.display = "block";

                eventSection.style.display = "none";

                newsCards.forEach(card => {

                    card.style.display = "block";

                });

                document.querySelector(".latest-news-section")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }

            else if (filter === "event") {

                newsSection.style.display = "none";

                eventSection.style.display = "block";

                eventCards.forEach(card => {

                    card.style.display = "flex";

                });

                document.querySelector(".upcoming-events-section")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }

        });

    });

    /* =========================
       SEARCH
    ========================== */

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        allCards.forEach(card => {

            const text =
                card.textContent.toLowerCase();

            if (text.includes(value)) {

                if (
                    card.classList.contains("event-card")
                ) {

                    card.style.display = "flex";

                } else {

                    card.style.display = "block";

                }

            } else {

                card.style.display = "none";

            }

        });

    });

});
