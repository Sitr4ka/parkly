// fakeSpots.js
const generateBookings = (spotIndex) => {
  // On génère aléatoirement entre 0 et 3 réservations par place
  const numberOfBookings = Math.floor(Math.random() * 4);
  const bookings = [];

  for (let i = 0; i < numberOfBookings; i++) {
    // Pour simplifier, toutes les réservations sont pour la date du jour
    const date = new Date().toLocaleDateString('fr-CA'); // ou 'en-CA' pour format ISO YYYY-MM-DD

     // '2025-05-04'

    // Heure de début entre 8h00 et 17h00
    const startHour = 8 + Math.floor(Math.random() * 10); // 8h → 17h
    const endHour = Math.min(startHour + 1 + Math.floor(Math.random() * 2), 18); // max 18h

    bookings.push({
      date,
      from: `${String(startHour).padStart(2, '0')}:00`,
      to: `${String(endHour).padStart(2, '0')}:00`,
    });
  }

  return bookings;
};

const fakeSpots = Array.from({ length: 60 }, (_, i) => {
  const row = Math.floor(i / 6) + 1;
  const col = (i % 6) + 1;

  const bookings = generateBookings(i);
  const isOccupied = bookings.length > 0;

  return {
    id: `R${row}-C${col}`,
    status: isOccupied ? 'occupied' : 'free',
    bookings,
  };
});

export default fakeSpots;
