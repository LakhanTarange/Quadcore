
document.addEventListener('DOMContentLoaded', function(){
    if(typeof bootstrap === 'undefined'){
        console.error('Bootstrap not loaded');
        return;
    }
    // =====================================================
    // CREATE MODALS
    // =====================================================
    document.body.insertAdjacentHTML('beforeend', `
    <!-- CAREER DETAILS -->
    <div class="modal fade qc-modal" id="careerDetailsModal"
         tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Career Opportunity
            </h5>
            <button type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body p-4">
            <div class="qc-modal-label">
              Join Quadcore
            </div>
            <div class="qc-detail-title"
                 id="careerDetailTitle"></div>
            <p class="qc-detail-description"
               id="careerDetailDescription"></p>
            <div id="careerDetailMeta"></div>
            <ul class="qc-detail-list"
                id="careerDetailList"></ul>
          </div>
          <div class="modal-footer">
            <button type="button"
                    class="qc-secondary-btn"
                    data-bs-dismiss="modal">
              Close
            </button>
            <button type="button"
                    class="qc-modal-action"
                    id="careerDetailsApplyBtn">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- CAREER APPLICATION -->
    <div class="modal fade qc-modal"
         id="careerApplyModal"
         tabindex="-1"
         aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Quadcore Career Application
            </h5>
            <button type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body"
               id="careerFormSlot"></div>
        </div>
      </div>
    </div>
    <!-- SERVICE DETAILS -->
    <div class="modal fade qc-modal"
         id="serviceDetailsModal"
         tabindex="-1"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Quadcore Service
            </h5>
            <button type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body p-4">
            <div class="qc-modal-label">
              Our Services
            </div>
            <div class="qc-detail-title"
                 id="serviceDetailTitle"></div>
            <p class="qc-detail-description"
               id="serviceDetailDescription"></p>
            <ul class="qc-detail-list"
                id="serviceDetailList"></ul>
          </div>
          <div class="modal-footer">
            <button type="button"
                    class="qc-secondary-btn"
                    data-bs-dismiss="modal">
              Close
            </button>
            <button type="button"
                    class="qc-modal-action"
                    id="serviceEnquiryBtn">
              Send Enquiry
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- ENQUIRY FORM -->
    <div class="modal fade qc-modal"
         id="enquiryModal"
         tabindex="-1"
         aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Start Your Project
            </h5>
            <button type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body"
               id="enquiryFormSlot"></div>
        </div>
      </div>
    </div>
    `);
    const careerDetailsModal =
        new bootstrap.Modal(
            document.getElementById('careerDetailsModal')
        );
    const careerApplyModal =
        new bootstrap.Modal(
            document.getElementById('careerApplyModal')
        );
    const serviceDetailsModal =
        new bootstrap.Modal(
            document.getElementById('serviceDetailsModal')
        );
    const enquiryModal =
        new bootstrap.Modal(
            document.getElementById('enquiryModal')
        );
    // =====================================================
    // MOVE EXISTING CAREER FORM INTO POPUP
    // =====================================================
    const careerApplication =
        document.getElementById('careerApplication');
    if(careerApplication){
        document
          .getElementById('careerFormSlot')
          .appendChild(careerApplication);
    }
    // =====================================================
    // MOVE EXISTING ENQUIRY FORM INTO POPUP
    // =====================================================
    const contactForm =
        document.getElementById('contactForm');
    if(contactForm){
        const oldHost =
            contactForm.closest('.col-lg-8');
        document
          .getElementById('enquiryFormSlot')
          .appendChild(contactForm);
        if(oldHost){
            oldHost.innerHTML = `
            <div class="contact-form-wrap qc-enquiry-launch">
                <i class="fas fa-paper-plane"></i>
                <h3>
                    Have a Project in Mind?
                </h3>
                <p>
                    Tell us what you want to build and
                    the Quadcore team will review your enquiry.
                </p>
                <button type="button"
                        class="qc-modal-action"
                        id="openGeneralEnquiry">
                    Start Enquiry
                </button>
            </div>
            `;
            document
              .getElementById('openGeneralEnquiry')
              .addEventListener('click', function(){
                  enquiryModal.show();
              });
        }
    }
    // =====================================================
    // CAREER DETAILS DATA
    // =====================================================
    const careerInfo = {
      "Flutter Developer Intern":[
        "Work on Flutter mobile and web application development.",
        "Firebase integration and authentication.",
        "Responsive UI implementation.",
        "API and application feature integration."
      ],
      "Web Developer Intern":[
        "Build responsive websites and web interfaces.",
        "Work with modern frontend technologies.",
        "Integrate APIs and backend services.",
        "Improve performance and usability."
      ],
      "Software Testing / QA Intern":[
        "Create test scenarios and test cases.",
        "Perform functional and regression testing.",
        "Report and track software defects.",
        "Learn API and automation testing workflows."
      ],
      "Java / Spring Boot Intern":[
        "Develop backend services using Java.",
        "Build REST APIs using Spring Boot.",
        "Work with databases and business logic.",
        "Support scalable application development."
      ]
    };
    let selectedCareerRole = '';
    // Remove previous anonymous Apply button handlers
    // by replacing buttons with clones.
    document
      .querySelectorAll('.career-apply')
      .forEach(function(oldButton){
          const button =
              oldButton.cloneNode(true);
          oldButton.replaceWith(button);
          button.textContent =
              'View Details';
          button.addEventListener(
              'click',
              function(){
                  const card =
                      button.closest('.career-card');
                  selectedCareerRole =
                      button.dataset.role ||
                      card?.querySelector('h5')?.textContent.trim() ||
                      '';
                  const description =
                      card?.querySelector('p')?.textContent.trim() ||
                      '';
                  const tags =
                      Array.from(
                          card?.querySelectorAll(
                              '.career-meta span'
                          ) || []
                      )
                      .map(x => x.textContent.trim());
                  document
                    .getElementById('careerDetailTitle')
                    .textContent =
                      selectedCareerRole;
                  document
                    .getElementById('careerDetailDescription')
                    .textContent =
                      description;
                  document
                    .getElementById('careerDetailMeta')
                    .innerHTML =
                      tags.map(tag =>
                        '<span style="display:inline-block;margin:5px 6px 5px 0;padding:5px 9px;border:1px solid rgba(0,212,255,.2);border-radius:3px;color:var(--neon);font-size:.65rem">'+
                        tag+
                        '</span>'
                      ).join('');
                  const points =
                      careerInfo[selectedCareerRole] || [
                        "Work on real Quadcore projects.",
                        "Learn practical development workflows.",
                        "Collaborate with the project team."
                      ];
                  document
                    .getElementById('careerDetailList')
                    .innerHTML =
                      points.map(x =>
                        '<li>'+x+'</li>'
                      ).join('');
                  careerDetailsModal.show();
              }
          );
      });
    // =====================================================
    // APPLY NOW FROM CAREER DETAILS
    // =====================================================
    document
      .getElementById('careerDetailsApplyBtn')
      .addEventListener('click', function(){
          const roleSelect =
              document.getElementById('careerRole');
          if(roleSelect){
              let option =
                Array.from(roleSelect.options)
                .find(o =>
                    o.value === selectedCareerRole ||
                    o.textContent.trim() === selectedCareerRole
                );
              if(!option){
                  option =
                    new Option(
                        selectedCareerRole,
                        selectedCareerRole
                    );
                  roleSelect.add(option);
              }
              roleSelect.value =
                  selectedCareerRole;
          }
          careerDetailsModal.hide();
          setTimeout(function(){
              careerApplyModal.show();
          },250);
      });
    // =====================================================
    // SERVICE DETAILS
    // =====================================================
    const serviceInfo = {
      "Website Development":[
        "Responsive website development",
        "Mobile-friendly layouts",
        "Performance optimization",
        "SEO-ready structure"
      ],
      "E-Commerce Development":[
        "Product and catalogue setup",
        "Cart and checkout experience",
        "Payment integration",
        "Order and inventory workflows"
      ],
      "Web Application Development":[
        "Secure authentication",
        "Dashboards and business workflows",
        "API integration",
        "Database-driven applications"
      ],
      "UI/UX Design":[
        "Wireframes and layouts",
        "Responsive interface design",
        "User-focused navigation",
        "Reusable design components"
      ],
      "Website Maintenance":[
        "Bug fixes and updates",
        "Performance checks",
        "Security maintenance",
        "Content and feature updates"
      ],
      "SEO & Performance":[
        "Technical SEO review",
        "Page-speed optimization",
        "Core Web Vitals improvements",
        "Search-friendly website structure"
      ]
    };
    let selectedService = '';
    document
      .querySelectorAll('.service-card')
      .forEach(function(card){
          const button =
              document.createElement('button');
          button.type =
              'button';
          button.className =
              'service-view-btn';
          button.textContent =
              'View Details';
          card.appendChild(button);
          button.addEventListener(
              'click',
              function(event){
                  event.stopPropagation();
                  selectedService =
                      card
                        .querySelector('h5')
                        .textContent
                        .trim();
                  const description =
                      card
                        .querySelector('p')
                        .textContent
                        .trim();
                  document
                    .getElementById('serviceDetailTitle')
                    .textContent =
                      selectedService;
                  document
                    .getElementById('serviceDetailDescription')
                    .textContent =
                      description;
                  const points =
                      serviceInfo[selectedService] || [];
                  document
                    .getElementById('serviceDetailList')
                    .innerHTML =
                      points
                        .map(x =>
                            '<li>'+x+'</li>'
                        )
                        .join('');
                  serviceDetailsModal.show();
              }
          );
      });
    // =====================================================
    // SERVICE -> ENQUIRY FORM
    // =====================================================
    document
      .getElementById('serviceEnquiryBtn')
      .addEventListener('click', function(){
          const select =
              document.getElementById('contactService');
          if(select){
              const mappings = {
                "Website Development":
                  "Website Development",
                "E-Commerce Development":
                  "E-Commerce Development",
                "Web Application Development":
                  "Web Application",
                "UI/UX Design":
                  "UI/UX Design",
                "Website Maintenance":
                  "Maintenance",
                "SEO & Performance":
                  "SEO & Performance"
              };
              const wanted =
                  mappings[selectedService] ||
                  selectedService;
              let option =
                  Array.from(select.options)
                  .find(o =>
                    o.value === wanted ||
                    o.textContent.trim() === wanted
                  );
              if(!option){
                  option =
                    new Option(
                        wanted,
                        wanted
                    );
                  select.add(option);
              }
              select.value =
                  wanted;
          }
          serviceDetailsModal.hide();
          setTimeout(function(){
              enquiryModal.show();
          },250);
      });
    // =====================================================
    // OTHER "GET STARTED / DISCUSS PROJECT" BUTTONS
    // OPEN ENQUIRY POPUP DIRECTLY
    // =====================================================
    document
      .querySelectorAll(
        '.btn-neon[href="#contact"], .portfolio-link[href="#contact"]'
      )
      .forEach(function(link){
          const clone =
              link.cloneNode(true);
          link.replaceWith(clone);
          clone.addEventListener(
              'click',
              function(event){
                  event.preventDefault();
                  enquiryModal.show();
              }
          );
      });
});
