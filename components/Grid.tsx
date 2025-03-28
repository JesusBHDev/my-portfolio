import { gridItems} from '@/data'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

function Grid() {
  return (
    <section id="presentacion">
        {/*en este lugar es donde colocan los textos de los cuadros  */}
        <BentoGrid>
            {gridItems.map
            (({id, title, description, className, img, imgClassName, titleClassName,spareImg}) =>(
                <BentoGridItem
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid