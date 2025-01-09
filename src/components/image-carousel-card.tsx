import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface ImageCarouselCardProps {
    images: string[]
    information: string
}

export default function ImageCarouselCard({ images, information }: ImageCarouselCardProps) {
    return (
        <Card className="w-full max-w-3xl mx-auto">
            <CardContent className="p-0 relative aspect-video">
                <Carousel className="w-full h-full">
                    <CarouselContent>
                        {images.map((src, index) => (
                            <CarouselItem key={index}>
                                <div className="relative aspect-video w-full h-full">
                                    <img
                                        src={src}
                                        alt={`Carousel image ${index + 1}`}
                                        className="object-cover"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                </Carousel>
            </CardContent>
            <CardFooter className="h-1/5 overflow-y-auto bg-gray-100 p-4">
                <p className="text-sm text-gray-700">{information}</p>
            </CardFooter>
        </Card>
    )
}

