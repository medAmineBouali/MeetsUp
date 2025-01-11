import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star, X } from 'lucide-react'

interface ExpandedCardModalProps {
    card: {
        images: string[]
        information: string
        rating: number
        location: string
        host: string
        dates: string
        pricePerNight: number
        currency?: string
        contact: string
    }
    onClose: () => void
}

const ExpandedCardModal: React.FC<ExpandedCardModalProps> = ({ card, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLElement).id === "modal-overlay") {
            onClose()
        }
    }

    return (
        <AnimatePresence>
            <motion.div
                id="modal-overlay"
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                onClick={handleOutsideClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="bg-white w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden relative"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-white bg-opacity-80 p-2 rounded-full z-10 transition-all hover:bg-opacity-100"
                    >
                        <X className="w-6 h-6 text-gray-800" />
                    </button>

                    <Card className="w-full border-none shadow-none">
                        <CardContent className="p-0 relative">
                            <Carousel
                            className="w-full"
                            onSelect={(event) => {
                                const selectedIndex = parseInt((event.target as HTMLElement).getAttribute("data-index") || "0", 10);
                                setCurrentImageIndex(selectedIndex);
                            }}
                        >

                        <CarouselContent>
                                    {card.images.map((src, index) => (
                                        <CarouselItem key={index}>
                                            <motion.img
                                                src={src}
                                                alt={`Carousel image ${index + 1}`}
                                                className="w-full h-[400px] object-cover"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                            </Carousel>
                            <div className="absolute bottom-4 right-4 bg-white bg-opacity-80 px-3 py-1 rounded-full text-sm font-medium">
                                {currentImageIndex + 1} / {card.images.length}
                            </div>
                        </CardContent>

                        <CardFooter className="flex flex-col gap-4 p-6">
                            <div className="flex items-start justify-between w-full">
                                <div>
                                    <h3 className="font-bold text-2xl text-gray-800">{card.location}</h3>
                                    <p className="text-sm text-gray-600">Hosted by {card.host}</p>
                                </div>
                                <div className="flex items-center gap-1 bg-yellow-400 px-2 py-1 rounded-full">
                                    <Star className="w-4 h-4 fill-current text-white" />
                                    <span className="font-bold text-white">{card.rating}</span>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 font-medium">{card.dates}</p>
                            <p className="text-2xl font-bold text-gray-800">
                                {card.currency || "€"}{card.pricePerNight} <span className="text-lg font-normal text-gray-600">per night</span>
                            </p>

                            <div className="border-t border-gray-200 pt-4">
                                <p className="text-gray-700 leading-relaxed">{card.information}</p>
                            </div>

                            <div className="flex gap-4 mt-2">
                                <a
                                    href={`tel:${card.contact}`}
                                    className="bg-primary rounded-full text-white py-3 px-4 text-center font-bold transition-all hover:bg-blue-700"
                                >
                                    Contact Owner
                                </a>
                                <button className="bg-destructive rounded-full text-white py-3 px-4 font-bold transition-all hover:bg-green-700">
                                    Reserve Now
                                </button>
                            </div>
                        </CardFooter>
                    </Card>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default ExpandedCardModal

