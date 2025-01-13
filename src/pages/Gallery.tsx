import { useState } from "react";
import ImageCarouselCard from "@/components/carousel-card.tsx";
import ExpandedCardModal from "@/components/expanded-card-modal.tsx";
import FilterBar from "@/components/gallery-filter.tsx"
import card1img1 from "@/assets/1/1.jpg";
import card1img2 from "@/assets/1/2.png";
import card1img3 from "@/assets/1/3.jpg";

import card2img1 from "@/assets/2/1.jpeg";
import card2img2 from "@/assets/2/2.jpeg";
import card2img3 from "@/assets/2/3.jpeg";

import card3img1 from "@/assets/3/1.jpg";
import card3img2 from "@/assets/3/2.jpg";
import card3img3 from "@/assets/3/3.jpg";

import card4img1 from "@/assets/4/1.jpg";
import card4img2 from "@/assets/4/2.jpeg";

import card5img1 from "@/assets/5/1.webp";
import card5img2 from "@/assets/5/2.webp";

import card6img1 from "@/assets/6/1.webp";
import card6img2 from "@/assets/6/2.webp";

import card7img1 from "@/assets/7/1.jpg";
import card7img2 from "@/assets/7/2.jpg";

import card8img1 from "@/assets/8/1.jpeg";
import card8img2 from "@/assets/8/2.jpg";

import card9img1 from "@/assets/9/1.jpg";

import card10img1 from "@/assets/10/1.jpg";
import card10img2 from "@/assets/10/2.jpg";
import card10img3 from "@/assets/10/3.jpg";

import card11img1 from "@/assets/11/1.jpg";
import card11img2 from "@/assets/11/2.jpg";
import card11img3 from "@/assets/11/3.jpg";

const GalleryPage = () => {
    // Dummy data for the carousel images and descriptions

    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    const closeModal = () => {
        setSelectedCard(null);
    };

    const cardsData = [
        {
            images: [card1img1, card1img2, card1img3],
            information: "Meeting Room A - Capacity: 6",
            rating: 4.5,
            location: "Downtown Building, Floor 2",
            host: "John Smith",
            dates: "2025-01-15 to 2025-01-20",
            pricePerNight: 150,
            currency: "USD",
            contact: "+1-555-123-4567",
        },
        {
            images: [card2img1, card2img2, card2img3],
            information: "Conference Hall B - Capacity: 20",
            rating: 4.8,
            location: "City Center, Business Tower",
            host: "Jane Doe",
            dates: "2025-01-18 to 2025-01-25",
            pricePerNight: 500,
            currency: "USD",
            contact: "+1-555-987-6543",
        },
        {
            images: [card3img1, card3img2, card3img3],
            information: "Small Office C - Capacity: 4",
            rating: 4.2,
            location: "Suburban Plaza, Block C",
            host: "Alice Johnson",
            dates: "2025-02-01 to 2025-02-05",
            pricePerNight: 75,
            currency: "USD",
            contact: "+1-555-246-8102",
        },
        {
            images: [card4img1, card4img2],
            information: "Open Space D - Capacity: 15",
            rating: 4.7,
            location: "Tech Park, Floor 1",
            host: "Mike Brown",
            dates: "2025-01-10 to 2025-01-15",
            pricePerNight: 300,
            currency: "USD",
            contact: "+1-555-357-9101",
        },
        {
            images: [card5img1, card5img2],
            information: "Workshop Room E - Capacity: 10",
            rating: 4.6,
            location: "Industrial Zone, Block A",
            host: "Sarah Wilson",
            dates: "2025-02-05 to 2025-02-10",
            pricePerNight: 200,
            currency: "USD",
            contact: "+1-555-467-1213",
        },
        {
            images: [card6img1, card6img2],
            information: "Training Room F - Capacity: 12",
            rating: 4.4,
            location: "Corporate Hub, Floor 3",
            host: "Tom Davis",
            dates: "2025-01-20 to 2025-01-25",
            pricePerNight: 250,
            currency: "USD",
            contact: "+1-555-579-1314",
        },
        {
            images: [card7img1, card7img2],
            information: "Executive Room G - Capacity: 8",
            rating: 4.9,
            location: "Luxury Suites, Floor 10",
            host: "Emma Roberts",
            dates: "2025-02-10 to 2025-02-15",
            pricePerNight: 400,
            currency: "USD",
            contact: "+1-555-691-1516",
        },
        {
            images: [card8img1, card8img2],
            information: "Board Room H - Capacity: 18",
            rating: 4.3,
            location: "Financial District, Building 5",
            host: "James Miller",
            dates: "2025-01-25 to 2025-01-30",
            pricePerNight: 350,
            currency: "USD",
            contact: "+1-555-713-1718",
        },
        {
            images: [card9img1],
            information: "Event Space I - Capacity: 25",
            rating: 4.7,
            location: "Convention Center, Hall A",
            host: "Sophia Clark",
            dates: "2025-02-15 to 2025-02-20",
            pricePerNight: 600,
            currency: "USD",
            contact: "+1-555-819-1920",
        },
        {
            images: [card10img1, card10img2, card10img3],
            information: "Breakout Room J - Capacity: 5",
            rating: 4.1,
            location: "Startup Co-working, Level 2",
            host: "Liam Anderson",
            dates: "2025-01-12 to 2025-01-17",
            pricePerNight: 120,
            currency: "USD",
            contact: "+1-555-920-2021",
        },
        {
            images: [card11img1, card11img2, card11img3],
            information: "Focus Room K - Capacity: 3",
            rating: 4.0,
            location: "Quiet Office Complex, Unit 4",
            host: "Olivia Martinez",
            dates: "2025-01-22 to 2025-01-27",
            pricePerNight: 90,
            currency: "USD",
            contact: "+1-555-132-2223",
        },
        {
            images: [],
            information: "Placeholder Room - No Data",
            rating: 0,
            location: "N/A",
            host: "N/A",
            dates: "N/A",
            pricePerNight: 0,
            currency: "USD",
            contact: "+1-555-000-0000",
        },
    ];


    return (

        <div className="min-h-screen mt-16 bg-background">
            <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
                <FilterBar/>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cardsData.map((card, index) => (
                        <div  >
                            <ImageCarouselCard
                                key={index} {...card} onClick={() => handleCardClick(card)}/>
                        </div>
                    ))}
                </div>

                {/* Expanded Card Modal */}
                {selectedCard && <ExpandedCardModal card={selectedCard} onClose={closeModal}/>}
            </div>
        </div>

    );
};

export default GalleryPage;
