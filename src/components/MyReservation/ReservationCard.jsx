const ReservationCard=({reservation})=>{
    return(
        <div class="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center">
            <div>
                <h2 className="font-bold">{reservation.parking}</h2>
                    <p>Status: {reservation.status}</p>
                    <p>Début: {reservation.debut}</p>
                    <p>Fin: {reservation.fin}</p>
                    <p>Prix: {reservation.prix}</p>
            </div>
            <div class="text-right">
                <p class="text-sm text-gray-500">10/04/2025</p>
                <button class="mt-2 bg-red-400 text-white px-4 py-1 rounded hover:bg-red-500">Annuler</button>
            </div>
      </div>
    )
}
export default ReservationCard