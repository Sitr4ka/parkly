import "./reseravationForm.css";
import CustomInput from "../CustomInput";

const ReservationForm = () => {
  return (
    <>
      <div className="form-container flex justify-center h-fit py-7 px-7">
        <form action="">
          <CustomInput
            label="Arrival Date"
            type="date"
            name="arrivalDate"
            // value={formData.username}
            // onChange={handleChange}
            placeholder="Entrez votre nom"
          />
          <CustomInput
            label="Arrival Time"
            type="time"
            name="arrivalTime"
            // value={formData.username}
            // onChange={handleChange}
            placeholder="HH:MM PM"
          />
          <CustomInput
            label="Departure Date"
            type="date"
            name="departureDate"
            // value={formData.username}
            // onChange={handleChange}
            placeholder="Entrez votre nom"
          />
          <CustomInput
            label="Departure Time"
            type="time"
            name="departureTime"
            // value={formData.username}
            // onChange={handleChange}
            placeholder="Entrez votre nom"
          />
        </form>
      </div>
    </>
  );
};

export default ReservationForm;
