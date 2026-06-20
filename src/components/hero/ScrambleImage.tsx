import type { CSSProperties } from 'react'

interface Props {
  src: string
  alt: string
  className?: string
}

export default function ScrambleImage({
  src,
  alt,
  className,
}: Props) {
  return (
    <div
      className={className}
      role="img"
      aria-label={alt}
      style={{
        '--glitch-image': `url(${src})`,
      } as CSSProperties}
    >
      <img src={src} alt="" aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </div>
  )
}
