import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from 'lucide-react'

interface ImageCarouselCardProps {
    images: string[]
    information: string
    rating: number
    location: string
    host: string
    dates: string
    pricePerNight: number
    currency?: string
    onClick?: () => void;
}

export default function ImageCarouselCard({ images, information, rating, location, host, dates, pricePerNight, currency ,onClick }: ImageCarouselCardProps) {
    return (
        <Card className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
            <CardContent className="p-0 relative aspect-video">
                <Carousel className="w-full h-full">
                    <CarouselContent>
                        {images.map((src, index) => (
                            <CarouselItem key={index}>
                                <div className="relative aspect-video w-full h-full">

                                    <img className="cursor-pointer" onClick={onClick} src={src} alt={`Carousel image ${index + 1}`}/>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-20" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-20" />
                </Carousel>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 bg-gray-50 p-4">
                <div className="flex items-start justify-between w-full">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold text-lg">{location}</h3>
                        <p className="text-sm text-gray-600">Hosted by {host}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-medium">{rating}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-sm text-gray-600">{dates}</p>
                    <p className="text-sm font-semibold">
                        {currency || '€'}{pricePerNight} <span className="font-normal text-gray-600">per night</span>
                    </p>
                </div>

                <div className="border-t pt-3">
                    <p className="text-sm text-gray-700">{information}</p>
                </div>
            </CardFooter>
        </Card>
    )
}
