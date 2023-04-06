import Container from './Container';
import Heading from './Heading';

import styles from './locationpicker.module.scss';
import Paragraph from './Paragraph';

const LocationPicker = () => {
    return <section className={styles.locationPicker}>
        <Container>
            <Heading level={2}>
                Love is in the air. 
            </Heading>
            <Paragraph>
                this is a description.
            </Paragraph>
        </Container>
    </section>
}
export default LocationPicker;