export const mockDatabase = {
  animals: [
    { 
      animal_id: "A1", 
      name: "Max", 
      breed: "Pomeranian", 
      gender: "Male", 
      age: "3 yrs", 
      status: "Available", 
      rescue_id: "R101", 
      photo: "/assets/dog-max.jpeg", 
      tags: ["Vaccinated", "Friendly"],
      recovery_journey: [
        { date: '10 Days Ago', event: 'Rescued from street (Hit & Run)', status: 'completed' },
        { date: '9 Days Ago', event: 'Emergency Surgery (Left Leg)', status: 'completed' },
        { date: '5 Days Ago', event: 'Vaccinated & Neutered', status: 'completed' },
        { date: 'Yesterday', event: 'Moved to Foster Care', status: 'completed' },
        { date: 'Today', event: 'Ready for Adoption!', status: 'current' }
      ]
    },
    { 
      animal_id: "A2", 
      name: "Luna", 
      breed: "Indie Dog", 
      gender: "Female", 
      age: "2 yr", 
      status: "Available", 
      rescue_id: "R102", 
      photo: "/assets/dog-luna.jpeg", 
      tags: ["Vaccinated", "Playful"],
      recovery_journey: [
        { date: '3 Weeks Ago', event: 'Rescued from abandoned building', status: 'completed' },
        { date: '2 Weeks Ago', event: 'Treated for severe malnutrition', status: 'completed' },
        { date: '1 Week Ago', event: 'Gained 2kg, started walking normally', status: 'completed' },
        { date: '3 Days Ago', event: 'Fully Vaccinated', status: 'completed' },
        { date: 'Today', event: 'Waiting for a forever home', status: 'current' }
      ]
    },
    { 
      animal_id: "A3", 
      name: "Rocky", 
      breed: "Pomeranian", 
      gender: "Male", 
      age: "2 yrs", 
      status: "Available", 
      rescue_id: "R103", 
      photo: "/assets/dog-rocky.jpeg", 
      tags: ["Healthy", "Energetic"],
      recovery_journey: [
        { date: '2 Months Ago', event: 'Surrendered by previous owner', status: 'completed' },
        { date: '7 Weeks Ago', event: 'Behavioral assessment completed', status: 'completed' },
        { date: '6 Weeks Ago', event: 'Dental cleaning & checkup', status: 'completed' },
        { date: '1 Month Ago', event: 'Started basic obedience training', status: 'completed' },
        { date: 'Today', event: 'Graduated training! Ready to be adopted.', status: 'current' }
      ]
    },
    { 
      animal_id: "A4", 
      name: "Milo", 
      breed: "Calico Cat", 
      gender: "Female", 
      age: "2 Months", 
      status: "Available", 
      rescue_id: "R104", 
      photo: "/assets/cat1.png", 
      tags: ["Playful", "Cute"],
      recovery_journey: [
        { date: '2 Weeks Ago', event: 'Rescued from a drain', status: 'completed' },
        { date: '1 Week Ago', event: 'Treated for infection', status: 'completed' },
        { date: 'Today', event: 'Ready for Adoption!', status: 'current' }
      ]
    },
    { 
      animal_id: "A5", 
      name: "Simba", 
      breed: "Orange Tabby", 
      gender: "Male", 
      age: "3 Weeks", 
      status: "Foster", 
      rescue_id: "R105", 
      photo: "/assets/cat2.png", 
      tags: ["Needs Bottle Feeding", "Tiny"],
      recovery_journey: [
        { date: '3 Days Ago', event: 'Found without mother', status: 'completed' },
        { date: 'Yesterday', event: 'Placed in neonatal foster', status: 'completed' },
        { date: 'Today', event: 'Gaining weight steadily', status: 'current' }
      ]
    }
  ],
  rescueCases: [
    { rescue_id: "RR-1045", animal_type: "Dog", detail: "Injured • Pashan", status: "Treatment", priority: "High" },
    { rescue_id: "RR-1046", animal_type: "Cat", detail: "Abandoned • Baner", status: "Foster", priority: "Medium" },
    { rescue_id: "RR-1047", animal_type: "Dog", detail: "Lost • Wakad", status: "Rescue", priority: "Urgent" },
    { rescue_id: "RR-1048", animal_type: "Puppy", detail: "Malnourished • Chinchwad", status: "Recovery", priority: "High" }
  ],
  veterinarians: [
    {
      id: "VET-01",
      name: "Dr. Ananya Deshmukh",
      clinic_name: "PawShield Multi-Specialty Veterinary Hospital",
      photo: "/assets/vet-ananya.png",
      rating: 4.9,
      reviews_count: 142,
      qualification: "B.V.Sc & A.H, M.V.Sc (Veterinary Surgery)",
      experience_years: 11,
      locality: "Baner, Pune",
      address: "Shop 12-14, West Avenue, Baner Road, Pune",
      phone: "+91 98234 11223",
      emergency_phone: "+91 98234 99999",
      consultation_fee: "₹500",
      emergency_24_7: true,
      is_sponsored: true,
      sponsored_tag: "FEATURED CLINIC",
      specializations: ["Trauma Surgery", "Orthopedics", "Emergency Critical Care"],
      services: ["Digital X-Ray", "ICU & Oxygen Cage", "24/7 Ambulance", "NGO Stray Concessions (40% Off)"],
      timings: "Open 24 Hours • All 7 Days",
      about: "Senior Veterinary Surgeon with over a decade of field and clinical experience in emergency trauma care and orthopedic reconstruction for rescued stray animals."
    },
    {
      id: "VET-02",
      name: "Dr. Rohan Kulkarni",
      clinic_name: "Companion Care Pet Clinic & Surgery Center",
      photo: "/assets/vet-rohan.png",
      rating: 4.8,
      reviews_count: 98,
      qualification: "B.V.Sc & A.H, Canine Medicine Specialist",
      experience_years: 8,
      locality: "Pashan, Pune",
      address: "B-2, Sus Heritage, Pashan-Sus Road, Pune",
      phone: "+91 94220 54321",
      emergency_phone: "+91 94220 54322",
      consultation_fee: "₹400",
      emergency_24_7: false,
      is_sponsored: true,
      sponsored_tag: "COMMUNITY PARTNER",
      specializations: ["Canine Infectious Diseases", "Dermatology", "Vaccination"],
      services: ["In-house Pathology Lab", "Microchipping", "Flea & Tick Treatment", "Senior Dog Care"],
      timings: "09:30 AM - 01:30 PM, 05:00 PM - 09:00 PM (Mon-Sat)",
      about: "Specializes in canine internal medicine, vaccination protocols, and infectious disease management. Official medical partner for RSWF community animal sterilizations."
    },
    {
      id: "VET-03",
      name: "Dr. Meera Iyer",
      clinic_name: "The Feline & Indie Animal Clinic",
      photo: "/assets/vet-meera.png",
      rating: 4.95,
      reviews_count: 215,
      qualification: "B.V.Sc, Feline Medicine Cert. (ISFM)",
      experience_years: 9,
      locality: "Aundh, Pune",
      address: "Plot 45, ITI Road, Near D-Mart, Aundh, Pune",
      phone: "+91 98811 76543",
      emergency_phone: "+91 98811 76500",
      consultation_fee: "₹450",
      emergency_24_7: true,
      is_sponsored: false,
      sponsored_tag: null,
      specializations: ["Feline Medicine", "Neonatal Kitten Care", "Spay/Neuter Specialist"],
      services: ["Cat-Only Quiet Ward", "Dental Scaling", "Vaccination Passports", "Sterilization Camp"],
      timings: "10:00 AM - 08:30 PM (Sun: 10:00 AM - 02:00 PM)",
      about: "Certified feline practitioner passionate about stray cat welfare, kitten bottle-feeding nurseries, and painless high-volume ABC (Animal Birth Control) procedures."
    },
    {
      id: "VET-04",
      name: "Dr. Vikram Joshi",
      clinic_name: "Joshi Animal Welfare & Trauma Center",
      photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
      reviews_count: 76,
      qualification: "B.V.Sc & A.H, PG Wildlife & Exotic Care",
      experience_years: 14,
      locality: "Kothrud, Pune",
      address: "18, Mayur Colony, Karve Road, Kothrud, Pune",
      phone: "+91 97654 32109",
      emergency_phone: "+91 97654 32100",
      consultation_fee: "₹350",
      emergency_24_7: false,
      is_sponsored: false,
      sponsored_tag: null,
      specializations: ["General Medicine", "Avian & Bird Rescue", "Rehabilitation"],
      services: ["First Aid & Wound Dressing", "Deworming", "Ultrasound", "Wildlife Transit Support"],
      timings: "09:00 AM - 01:00 PM, 04:30 PM - 08:30 PM (Mon-Sat)",
      about: "Dedicated community veterinarian focusing on affordable healthcare for rescue dogs, injured birds, and working with local animal welfare organizations."
    },
    {
      id: "VET-05",
      name: "Dr. Shweta Nair",
      clinic_name: "Apex 24x7 Critical Care Pet Hospital",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
      rating: 4.85,
      reviews_count: 167,
      qualification: "M.V.Sc (Veterinary Medicine), Emergency Cert.",
      experience_years: 12,
      locality: "Wakad, Pune",
      address: "Tower B, Dutta Mandir Road, Wakad, Pimpri-Chinchwad",
      phone: "+91 99210 88776",
      emergency_phone: "+91 99210 88777",
      consultation_fee: "₹600",
      emergency_24_7: true,
      is_sponsored: true,
      sponsored_tag: "SPONSORED 24/7 ICU",
      specializations: ["ICU Life Support", "Blood Transfusions", "Poisoning Management"],
      services: ["Pet Blood Bank", "Night Emergency Doctors", "Diagnostic Ultrasound", "Isolation Ward"],
      timings: "Open 24x7 • 365 Days",
      about: "State-of-the-art emergency setup equipped with ventilator support, canine blood bank facilities, and round-the-clock emergency medical staff."
    }
  ],
  rescuerBenefitProgram: {
    program_title: "PawCare Rescuer Empowerment & Reward Program",
    overview: "Every successful rescue saves a life. We guarantee verified monetary compensation, fuel stipends, and full medical reimbursements to our field heroes.",
    tiers: [
      {
        type: "Standard Rescue",
        stipend: "₹400",
        description: "Assigned routine rescue of injured or displaced dog/cat with safe transit to clinic/foster."
      },
      {
        type: "Emergency & Night Rescue",
        stipend: "₹650",
        description: "Priority/Night call-outs (8 PM - 7 AM) or high-risk trauma cases requiring immediate action."
      },
      {
        type: "Fuel & Travel Allowance",
        stipend: "₹12 / km",
        description: "Direct transit reimbursement for volunteers using personal two-wheelers or four-wheelers."
      },
      {
        type: "Medical Expense Advance / Reimbursement",
        stipend: "100% Covered",
        description: "Instant settlement against vet bills, emergency medicines, and temporary boarding costs."
      }
    ],
    payoutHistory: [
      {
        payout_id: "PAY-1081",
        rescue_id: "RR-1045",
        volunteer_name: "Rahul Verma",
        phone: "+91 98220 12345",
        animal_type: "Injured Indie Dog",
        locality: "Pashan Circle",
        base_stipend: 400,
        bonus_urgency: 250,
        fuel_reimbursement: 180,
        total_payout: 830,
        upi_id: "rahul.verma@oksbi",
        status: "Disbursed",
        date: "2026-10-09",
        txn_ref: "UPI/261009/48291"
      },
      {
        payout_id: "PAY-1082",
        rescue_id: "RR-1046",
        volunteer_name: "Sneha Patil",
        phone: "+91 97640 67890",
        animal_type: "Abandoned Kitten (Milo)",
        locality: "Baner Highway",
        base_stipend: 400,
        bonus_urgency: 0,
        fuel_reimbursement: 120,
        total_payout: 520,
        upi_id: "sneha.patil@paytm",
        status: "Disbursed",
        date: "2026-10-10",
        txn_ref: "UPI/261010/89312"
      },
      {
        payout_id: "PAY-1083",
        rescue_id: "RR-1047",
        volunteer_name: "Amit Deshpande",
        phone: "+91 99231 99887",
        animal_type: "Hit-and-Run Dog (Rocky)",
        locality: "Wakad Chowk",
        base_stipend: 400,
        bonus_urgency: 250,
        fuel_reimbursement: 240,
        total_payout: 890,
        upi_id: "amitd@icici",
        status: "Approved (Pending Transfer)",
        date: "2026-10-11",
        txn_ref: "PENDING_APPROVAL"
      },
      {
        payout_id: "PAY-1084",
        rescue_id: "RR-1048",
        volunteer_name: "Meera Nair",
        phone: "+91 98233 44556",
        animal_type: "Malnourished Puppy",
        locality: "Chinchwad Station",
        base_stipend: 400,
        bonus_urgency: 150,
        fuel_reimbursement: 160,
        total_payout: 710,
        upi_id: "meera.nair@okhdfcbank",
        status: "Under Review",
        date: "2026-10-11",
        txn_ref: "AWAITING_DOCS"
      }
    ]
  }
};
