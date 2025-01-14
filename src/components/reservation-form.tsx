import React, { useState } from "react";
import logo from "@/assets/logo.png";
import carteBancaireIcon from "@/assets/visa.png";
import virementSepaIcon from "@/assets/verment.png";
import prelevementSepaIcon from "@/assets/paypal.png";
import googleApplePayIcon from "@/assets/apple-pay.png";

const ReservationForm: React.FC = () => {
    // State to manage the current form step
    const [currentForm, setCurrentForm] = useState("info-generale");

    // State to store form data
    const [formData, setFormData] = useState({
        organisateur: "",
        departement: "",
        email: "",
        telephone: "",
        titre: "",
        date: "",
        heureDebut: "",
        heureFin: "",
        nomParticipants: "",
        nombreParticipants: "",
        salle: "",
        equipements: [] as string[],
        objectif: "",
        commentaires: "",
        paiement: "Carte Bancaire",
    });

    // Function to handle form input changes
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;

        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prevData) => ({
                ...prevData,
                equipements: checked
                    ? [...prevData.equipements, value]
                    : prevData.equipements.filter((item) => item !== value),
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    // Function to handle payment method selection
    const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevData) => ({
            ...prevData,
            paiement: e.target.value,
        }));
    };

    // Function to switch between forms
    const switchForm = (nextForm: string) => {
        setCurrentForm(nextForm);
    };

    // Function to handle form submission
    const handleSubmit = () => {
        alert("Réservation terminée ! Merci pour votre confiance.");
        console.log("Form Data:", formData); // Log form data for debugging
    };

    return (<section
            className="relative min-w-96 max-w-md mx-auto border-2 bg-secondary border-white/50 rounded-2xl backdrop-blur-lg p-8 overflow-hidden">
            {/* Formulaire 1 : Informations Générales */}
            <form
                id="info-generale"
                className={`form ${currentForm === "info-generale" ? "visible" : "hidden"}`}
            >
                <img src={logo} className="mx-auto w-16 h-16 mb-4"/>
                <h3 className="text-2xl text-gray-800 text-center mb-6">Informations Générales</h3>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
                    <input
                        type="text"
                        id="organisateur"
                        name="organisateur"
                        placeholder=" "
                        value={formData.organisateur}
                        onChange={handleInputChange}
                        required
                        className="w-full h-12 px-2 bg-transparent text-white outline-none authinput"
                    />
                    <label
                        className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white text-sm transition-all">
                        Nom de l'organisateur
                    </label>
                </div>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
                    <input
                        type="text"
                        id="departement"
                        name="departement"
                        placeholder=" "
                        value={formData.departement}
                        onChange={handleInputChange}
                        required
                        className="w-full h-12 px-2 bg-transparent text-white outline-none authinput"
                    />
                    <label
                        className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white text-sm transition-all">
                        Département
                    </label>
                </div>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder=" "
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full h-12 px-2 bg-transparent text-white outline-none authinput"
                    />
                    <label
                        className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white text-sm transition-all">
                        Email
                    </label>
                </div>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
                    <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        placeholder=" "
                        value={formData.telephone}
                        onChange={handleInputChange}
                        required
                        className="w-full h-12 px-2 bg-transparent text-white outline-none authinput"
                    />
                    <label
                        className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white text-sm transition-all">
                        Téléphone
                    </label>
                </div>
                <div className="button-group flex justify-end">
                    <button
                        type="button"
                        className="w-full h-10 rounded-full bg-blue-700/50 text-gray-900 font-semibold transition-all hover:bg-gray-300 hover:text-blue-900"
                        onClick={() => switchForm("details-meeting")}
                    >
                        <span>Suivant</span>
                        <span className="">&rarr;</span>
                    </button>
                </div>
            </form>

            {/* Formulaire 2 : Détails du Meeting */}
            <form
                id="details-meeting"
                className={`form ${currentForm === "details-meeting" ? "visible" : "hidden"}`}
            >
                <img src={logo} className="mx-auto w-16 h-16 mb-4"/>
                <h3 className="text-2xl text-gray-800 text-center mb-6">Détails du Meeting</h3>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
                    <input
                        type="text"
                        id="titre"
                        name="titre"
                        placeholder=" "
                        value={formData.titre}
                        onChange={handleInputChange}
                        required
                        className="w-full h-12 px-2 bg-transparent text-white outline-none authinput"
                    />
                    <label
                        className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white text-sm transition-all">
                        Titre du meeting
                    </label>
                </div>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="w-full h-12 px-2 bg-transparent text-white outline-none authinput"
                    />
                    <label
                        className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white text-sm transition-all">
                        Date
                    </label>
                </div>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
                    <input
                        type="time"
                        id="heureDebut"
                        name="heureDebut"
                        value={formData.heureDebut}
                        onChange={handleInputChange}
                        className="w-full h-12 px-2 bg-transparent text-white outline-none authinput"
                    />
                    <label
                        className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white text-sm transition-all">
                        Heure de début
                    </label>
                </div>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
                    <input
                        type="time"
                        id="heureFin"
                        name="heureFin"
                        value={formData.heureFin}
                        onChange={handleInputChange}
                        required
                        className="w-full h-12 px-2 bg-transparent text-white outline-none authinput"
                    />
                    <label
                        className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white text-sm transition-all">
                        Heure de fin
                    </label>
                </div>
                <div className="button-group flex justify-between">
                    <button
                        type="button"
                        className="w-1/2 h-10 rounded-full bg-blue-700/50 text-gray-900 font-semibold transition-all hover:bg-gray-300 hover:text-blue-900 mr-2"
                        onClick={() => switchForm("info-generale")}
                    >
                        <span className="">&larr;</span>
                        <span>Précédent</span>
                    </button>
                    <button
                        type="button"
                        className="w-1/2 h-10 rounded-full bg-blue-700/50 text-gray-900 font-semibold transition-all hover:bg-gray-300 hover:text-blue-900 ml-2"
                        onClick={() => switchForm("participants")}
                    >
                        <span>Suivant</span>
                        <span className="">&rarr;</span>
                    </button>
                </div>
            </form>

            {/* Formulaire 3 : Participants */}
            <form
                id="participants"
                className={`form ${currentForm === "participants" ? "visible" : "hidden"}`}
            >
                <img src={logo} className="mx-auto w-16 h-16 mb-4"/>
                <h3 className="text-2xl text-gray-800 text-center mb-6">Participants</h3>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
      <textarea
          id="nomParticipants"
          name="nomParticipants"
          placeholder=" "
          value={formData.nomParticipants}
          onChange={handleInputChange}
          className="w-full h-24 px-2 bg-transparent outline-none authinput resize-none bg-indigo-200 mt-2 rounded-md text-black"
      />
                    <label
                        className="absolute top-1/4 left-1 transform -translate-y-1/2 text-white text-sm transition-all">
                        Nom des participants
                    </label>
                </div>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
                    <input
                        type="number"
                        id="nombreParticipants"
                        name="nombreParticipants"
                        value={formData.nombreParticipants}
                        onChange={handleInputChange}
                        className="w-full h-12 px-2 bg-transparent text-white outline-none authinput"
                    />
                    <label
                        className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white text-sm transition-all">
                        Nombre total de participants
                    </label>
                </div>
                <div className="button-group flex justify-between">
                    <button
                        type="button"
                        className="w-1/2 h-10 rounded-full bg-blue-700/50 text-gray-900 font-semibold transition-all hover:bg-gray-300 hover:text-blue-900 mr-2"
                        onClick={() => switchForm("details-meeting")}
                    >
                        <span className="">&larr;</span>
                        <span>Précédent</span>
                    </button>
                    <button
                        type="button"
                        className="w-1/2 h-10 rounded-full bg-blue-700/50 text-gray-900 font-semibold transition-all hover:bg-gray-300 hover:text-blue-900 ml-2"
                        onClick={() => switchForm("salle-reunion")}
                    >
                        <span>Suivant</span>
                        <span className="">&rarr;</span>
                    </button>
                </div>
            </form>

            {/* Formulaire 4 : Salle de Réunion */}
            <form
                id="salle-reunion"
                className={`form ${currentForm === "salle-reunion" ? "visible" : "hidden"}`}
            >
                <h3 className="text-2xl text-gray-800 text-center mb-6">Salle de Réunion</h3>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
                    <input
                        type="text"
                        id="salle"
                        name="salle"
                        value={formData.salle}
                        onChange={handleInputChange}
                        className="w-full h-12 px-2 bg-transparent text-white outline-none authinput"
                    />
                    <label
                        className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white text-sm transition-all">
                        Nom de la salle
                    </label>
                </div>
                <h4 className="text-lg text-gray-800 mb-4">Équipements nécessaires :</h4>
                {[
                    "Wi-Fi haut débit",
                    "Projecteur",
                    "Tableau blanc",
                    "Conférence téléphonique",
                    "Équipements audio",
                    "Climatiseur",
                    "Chauffage",
                ].map((equipement) => (
                    <div key={equipement} className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id={equipement}
                            name="equipements"
                            value={equipement}
                            checked={formData.equipements.includes(equipement)}
                            onChange={handleInputChange}
                            className="mr-2"
                        />
                        <label htmlFor={equipement} className="text-white">
                            {equipement}
                        </label>
                    </div>
                ))}
                <div className="button-group flex justify-between">
                    <button
                        type="button"
                        className="w-1/2 h-10 rounded-full bg-blue-700/50 text-gray-900 font-semibold transition-all hover:bg-gray-300 hover:text-blue-900 mr-2"
                        onClick={() => switchForm("participants")}
                    >
                        <span className="">&larr;</span>
                        <span>Précédent</span>
                    </button>
                    <button
                        type="button"
                        className="w-1/2 h-10 rounded-full bg-blue-700/50 text-gray-900 font-semibold transition-all hover:bg-gray-300 hover:text-blue-900 ml-2"
                        onClick={() => switchForm("objectif-meeting")}
                    >
                        <span>Suivant</span>
                        <span className="">&rarr;</span>
                    </button>
                </div>
            </form>

            {/* Formulaire 5 : Objectif du Meeting */}
            <form
                id="objectif-meeting"
                className={`form ${currentForm === "objectif-meeting" ? "visible" : "hidden"}`}
            >
                <h3 className="text-2xl text-gray-800 text-center mb-6">Objectif du Meeting</h3>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
      <textarea
          id="objectif"
          name="objectif"
          value={formData.objectif}
          onChange={handleInputChange}
          className="w-full h-24 px-2 bg-transparent outline-none authinput resize-none bg-indigo-200 mt-2 rounded-md text-black"
      />
                    <label
                        className="absolute top-1/4 left-1 transform -translate-y-1/2 text-white text-sm transition-all">
                        Objectif de la réunion
                    </label>
                </div>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
      <textarea
          id="commentaires"
          name="commentaires"
          value={formData.commentaires}
          onChange={handleInputChange}
          className="w-full h-24 px-2 bg-transparent outline-none authinput resize-none bg-indigo-200 mt-2 rounded-md text-black"
      />
                    <label
                        className="absolute top-1/4 left-1 transform -translate-y-1/2 text-white text-sm transition-all">
                        Commentaires supplémentaires
                    </label>
                </div>
                <div className="button-group flex justify-between">
                    <button
                        type="button"
                        className="w-1/2 h-10 rounded-full bg-blue-700/50 text-gray-900 font-semibold transition-all hover:bg-gray-300 hover:text-blue-900 mr-2"
                        onClick={() => switchForm("salle-reunion")}
                    >
                        <span className="">&larr;</span>
                        <span>Précédent</span>
                    </button>
                    <button
                        type="button"
                        className="w-1/2 h-10 rounded-full bg-blue-700/50 text-gray-900 font-semibold transition-all hover:bg-gray-300 hover:text-blue-900 ml-2"
                        onClick={() => switchForm("moyen-paiement")}
                    >
                        <span>Suivant</span>
                        <span className="">&rarr;</span>
                    </button>
                </div>
            </form>

            {/* Formulaire 6 : Moyen de Paiement */}
            <form
                id="moyen-paiement"
                className={`form ${currentForm === "moyen-paiement" ? "visible" : "hidden"}`}
            >
                <h3 className="text-2xl text-gray-800 text-center mb-6">Moyen de Paiement</h3>
                <div className="payment-options space-y-4">
                    {[
                        { id: "carte-bancaire", value: "Carte Bancaire", icon: carteBancaireIcon },
                        { id: "virement-sepa", value: "Virement SEPA", icon: virementSepaIcon },
                        { id: "prelevement-sepa", value: "Prélèvement SEPA", icon: prelevementSepaIcon },
                        { id: "google-apple-pay", value: "Google & Apple Pay", icon: googleApplePayIcon }
                    ].map((option) => (
                        <div key={option.id} className="flex items-center p-4 bg-white/10 rounded-lg">
                            <input
                                type="radio"
                                id={option.id}
                                name="paiement"
                                value={option.value}
                                checked={formData.paiement === option.value}
                                onChange={handlePaymentChange}
                                className="mr-4"
                            />
                            <label htmlFor={option.id} className="flex items-center text-white">
                                <img
                                    src={option.icon}
                                    alt={option.value}
                                    className="w-6 h-6 mr-2"
                                />
                                {option.value}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="button-group flex justify-between mt-6">
                    <button
                        type="button"
                        className="w-1/2 h-10 rounded-full bg-blue-700/50 text-gray-900 font-semibold transition-all hover:bg-gray-300 hover:text-blue-900 mr-2"
                        onClick={() => switchForm("objectif-meeting")}
                    >
                        <span className="">&larr;</span>
                        <span>Précédent</span>
                    </button>
                    <button
                        type="button"
                        className="w-1/2 h-10 rounded-full bg-blue-700/50 text-gray-900 font-semibold transition-all hover:bg-gray-300 hover:text-blue-900 ml-2"
                        onClick={handleSubmit}
                    >
                        <span>Payer</span>
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ReservationForm;