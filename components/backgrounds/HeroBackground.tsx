import Image from 'next/image'
import backgroundImage from '../../public/images/background.png'

export default function HeroBackground() {
    return (
        <Image
            alt="Mountains"
            src={backgroundImage}
            placeholder="blur"
            quality={100}
            fill
            sizes="100%"
            style={{
                objectFit: 'scale-down',
                zIndex: -3,
            }}
        />
    )
}