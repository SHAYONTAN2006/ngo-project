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
      photo: "/src/assets/dog-max.jpeg", 
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
      photo: "/src/assets/dog-luna.jpeg", 
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
      photo: "/src/assets/dog-rocky.jpeg", 
      tags: ["Healthy", "Energetic"],
      recovery_journey: [
        { date: '2 Months Ago', event: 'Surrendered by previous owner', status: 'completed' },
        { date: '7 Weeks Ago', event: 'Behavioral assessment completed', status: 'completed' },
        { date: '6 Weeks Ago', event: 'Dental cleaning & checkup', status: 'completed' },
        { date: '1 Month Ago', event: 'Started basic obedience training', status: 'completed' },
        { date: 'Today', event: 'Graduated training! Ready to be adopted.', status: 'current' }
      ]
    }
  ],
  rescueCases: [
    { rescue_id: "RR-1045", animal_type: "Dog", detail: "Injured • Pashan", status: "Treatment", priority: "High" },
    { rescue_id: "RR-1046", animal_type: "Cat", detail: "Abandoned • Baner", status: "Foster", priority: "Medium" },
    { rescue_id: "RR-1047", animal_type: "Dog", detail: "Lost • Wakad", status: "Rescue", priority: "Urgent" },
    { rescue_id: "RR-1048", animal_type: "Puppy", detail: "Malnourished • Chinchwad", status: "Recovery", priority: "High" }
  ]
};
