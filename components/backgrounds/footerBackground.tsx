import Image from 'next/image'
import footerBackgroundImage from '../../public/images/footerbackground.png'

export default function FooterBackground() {
    return (
        <Image
            alt="Mountains"
            src={footerBackgroundImage}
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