import styles from './sectioncta.module.scss';
import Heading from './Heading';

const SectionCTA = () => {
    return <section className={styles.sectionCTA}>
        <Heading level={2}>
            CTA goes here 
        </Heading>
    </section>
}
export default SectionCTA;